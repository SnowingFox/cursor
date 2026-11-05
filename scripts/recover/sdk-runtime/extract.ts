// @recovered-by cursor-re
// purpose: extract first-party @anysphere/* webpack modules from @cursor/sdk 1.3.1 dist (esm+cjs)
// run: w1-sdk-runtime
// usage: bun scripts/recover/sdk-runtime/extract.ts [--dry-run] [--only pkg]
import { parse } from "@babel/parser";
import generateMod from "@babel/generator";
import traverseMod from "@babel/traverse";
import * as t from "@babel/types";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join, posix, relative } from "node:path";

const generate: any = (generateMod as any).default ?? generateMod;
const traverse: any = (traverseMod as any).default ?? traverseMod;

export const OWNED = [
  "cursor-sdk-local-runtime",
  "cursor-sdk-shared",
  "proto",
  "utils",
  "context",
  "metrics",
  "shell-exec",
  "mcp-core",
  "mcp-agent-exec",
  "agent-kv",
] as const;
export type Pkg = (typeof OWNED)[number];

const ROOT = process.cwd();
const DIST = ".vendor/cursor-sdk-1.3.1/dist";
const RUN_ID = "w1-sdk-runtime";
const NOW = new Date().toISOString();

const NODE_BUILTINS = new Set([
  "assert","async_hooks","buffer","child_process","cluster","console","constants","crypto","dgram",
  "diagnostics_channel","dns","domain","events","fs","http","http2","https","inspector","module","net",
  "os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","string_decoder",
  "timers","tls","trace_events","tty","url","util","v8","vm","wasi","worker_threads","zlib","sqlite",
]);

interface RawModule {
  key: string;
  file: string;
  kind: "esm" | "cjs";
  start: number;
  end: number;
  bodyStart: number;
  bodyEnd: number;
  node: any; // ObjectMethod | ObjectProperty(function)
  src: string;
}

interface ImportRef {
  spec: string;
  kind: "internal" | "external";
  key: string;
}

interface ExportRef {
  name: string;
  ref: any; // babel expression node
  target: "exports" | "namespace";
}

interface Transformed {
  code: string;
  imports: ImportRef[];
  exports: ExportRef[];
  warnings: string[];
  removeReq: string[];
}

function parseKey(key: string):
  | { kind: "internal"; pkg: Pkg; sub: string }
  | { kind: "external"; spec: string }
  | { kind: "other"; spec: string }
  | { kind: "unresolved" } {
  let m = /^\.\.\/([^/]+)\/dist\/(.+?)\.js$/.exec(key);
  if (m && (OWNED as readonly string[]).includes(m[1])) return { kind: "internal", pkg: m[1] as Pkg, sub: m[2] };
  m = /^\.\.\/\.\.\/node_modules\/\.pnpm\/([^/]+)\/node_modules\/(.+)$/.exec(key);
  if (m) {
    const rest = m[2];
    const parts = rest.split("/");
    const name = rest.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
    const sub = rest.startsWith("@") ? parts.slice(2).join("/") : parts.slice(1).join("/");
    const spec = sub && !sub.startsWith("dist/") && !sub.startsWith("build/") && !/^index\.[a-z]+$/.test(sub) ? name + "/" + sub : name;
    return { kind: "external", spec };
  }
  m = /^\.\.\/\.\.\/node_modules\/(.+)$/.exec(key);
  if (m) {
    const parts = m[1].split("/");
    const name = m[1].startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
    return { kind: "external", spec: name };
  }
  if (/^(node|bun):/.test(key)) return { kind: "other", spec: key.replace(/\?.*$/, "") };
  const bare = key.replace(/\?.*$/, "");
  if (/^[@a-z0-9._-][^/]*(\/[^/]+)*$/.test(bare) && !bare.endsWith(".js") && !bare.startsWith(".") && !bare.startsWith("/")) {
    if (NODE_BUILTINS.has(bare.split("/")[0])) return { kind: "other", spec: "node:" + bare };
    return { kind: "external", spec: bare };
  }
  if (key.startsWith("./src/")) return { kind: "unresolved" };
  return { kind: "unresolved" };
}

function findModuleMaps(ast: any): any[] {
  const found: any[] = [];
  traverse(ast, {
    ObjectExpression(p: any) {
      const props = p.node.properties;
      if (props.length < 1) return;
      if (!props.every((x: any) => x.type === "ObjectMethod")) return;
      found.push(p.node);
    },
  });
  return found;
}

function collectChunk(file: string, kind: "esm" | "cjs"): RawModule[] {
  const src = readFileSync(join(ROOT, file), "utf8");
  const ast = parse(src, { sourceType: "unambiguous", errorRecovery: true });
  const arr: RawModule[] = [];
  for (const map of findModuleMaps(ast)) {
    for (const prop of map.properties) {
      const key = prop.key.type === "StringLiteral" ? prop.key.value : prop.key.name;
      if (typeof key !== "string") continue;
      const parsed = parseKey(key);
      if (parsed.kind !== "internal") continue;
      const fn = prop;
      if (fn.body?.start == null) continue;
      arr.push({
        key,
        file,
        kind,
        start: fn.start,
        end: fn.end,
        bodyStart: fn.body.start,
        bodyEnd: fn.body.end,
        node: fn,
        src,
      });
    }
  }
  return arr;
}

function unwrapAsync(node: any): { stmts: any[]; handle?: string; resolve?: string; wrapped: boolean; droppedCatch: boolean } {
  const body = node.body;
  if (body.type !== "BlockStatement" || body.body.length !== 1) return { stmts: body.body, wrapped: false, droppedCatch: false };
  const st = body.body[0];
  if (st.type !== "ExpressionStatement") return { stmts: body.body, wrapped: false, droppedCatch: false };
  const call = st.expression;
  if (call.type !== "CallExpression") return { stmts: body.body, wrapped: false, droppedCatch: false };
  const callee = call.callee;
  if (callee.type !== "MemberExpression" || callee.property.type !== "Identifier" || callee.property.name !== "a") {
    return { stmts: body.body, wrapped: false, droppedCatch: false };
  }
  const inner = call.arguments[1];
  if (!inner || (inner.type !== "ArrowFunctionExpression" && inner.type !== "FunctionExpression")) {
    return { stmts: body.body, wrapped: false, droppedCatch: false };
  }
  const handle = inner.params[0]?.type === "Identifier" ? inner.params[0].name : undefined;
  const resolve = inner.params[1]?.type === "Identifier" ? inner.params[1].name : undefined;
  let stmts = inner.body.type === "BlockStatement" ? inner.body.body : [t.returnStatement(inner.body)];
  let droppedCatch = false;
  if (stmts.length === 1 && stmts[0].type === "TryStatement") {
    const tryStmt = stmts[0];
    stmts = tryStmt.block.body;
    droppedCatch = !!tryStmt.handler || !!tryStmt.finalizer;
  }
  return { stmts, handle, resolve, wrapped: true, droppedCatch };
}

export function transformModule(raw: RawModule): Transformed {
  const params = raw.node.params as any[];
  const reqName = params[2]?.type === "Identifier" ? params[2].name : undefined;
  const exportsName = params[1]?.type === "Identifier" ? params[1].name : undefined;
  const warnings: string[] = [];
  const imports: ImportRef[] = [];
  const removed = new Set<any>();
  const exportRefs: ExportRef[] = [];
  const modNode = raw.node;
  const unwrapped = unwrapAsync(modNode);
  if (!reqName || !exportsName) {
    warnings.push("non-standard wrapper signature");
    return { code: "", imports, exports: [], warnings, removeReq: [] };
  }
  if (unwrapped.wrapped) warnings.push("async-module-wrapper:" + (unwrapped.droppedCatch ? "unwrapped+dropped-catch" : "unwrapped"));
  const stmts: any[] = [...unwrapped.stmts];

  const aliasBySpec = new Map<string, string>();
  const specByAlias = new Map<string, ImportRef>();
  let aliasSeq = 0;
  function aliasFor(spec: string, kind: "internal" | "external", key: string): string {
    const existing = aliasBySpec.get(spec);
    if (existing) return existing;
    const alias = "__dep" + aliasSeq++;
    aliasBySpec.set(spec, alias);
    const ref: ImportRef = { spec, kind, key };
    specByAlias.set(alias, ref);
    imports.push(ref);
    return alias;
  }
  function specOfKey(key: string): { spec: string; kind: "internal" | "external" } | null {
    const p = parseKey(key);
    if (p.kind === "internal") {
      const target = "src/" + p.sub;
      if (p.pkg === rawPkg(raw.key)) {
        const from = "src/" + rawSub(raw.key);
        let rel = posix.relative(posix.dirname(from), target);
        if (!rel.startsWith(".")) rel = "./" + rel;
        return { spec: rel, kind: "internal" };
      }
      return { spec: "@anysphere/" + p.pkg + "/" + p.sub, kind: "internal" };
    }
    if (p.kind === "external" || p.kind === "other") return { spec: p.spec, kind: "external" };
    return null;
  }

  const tableVars = new Map<string, any>();
  for (const st of stmts) {
    if (st.type === "VariableDeclaration") {
      for (const d of st.declarations) {
        if (d.id.type === "Identifier" && d.init?.type === "ObjectExpression") tableVars.set(d.id.name, d.init);
      }
    }
  }

  const program = t.program(stmts);
  const fileAst = t.file(program);
  traverse(fileAst, {
    "CallExpression|OptionalCallExpression"(path: any) {
      const node = path.node;
      const callee = node.callee;
      const reqFree = !path.scope.getBinding(reqName);
      const isReqRef = (n: any) => reqFree && n?.type === "Identifier" && n.name === reqName;
      // req("key")
      if (isReqRef(callee)) {
        const arg = node.arguments[0];
        if (arg?.type === "StringLiteral") {
          const m = specOfKey(arg.value);
          if (!m) { warnings.push("unresolved-require:" + arg.value); return; }
          path.replaceWith(t.identifier(aliasFor(m.spec, m.kind, arg.value)));
          return;
        }
        warnings.push("non-string-require");
        return;
      }
      // req.e(N).then(req.bind(req,"key"))
      if (
        callee.type === "MemberExpression" && callee.property.type === "Identifier" && callee.property.name === "then" &&
        callee.object.type === "CallExpression" && callee.object.callee.type === "MemberExpression" &&
        isReqRef(callee.object.callee.object) &&
        callee.object.callee.property.type === "Identifier" && callee.object.callee.property.name === "e"
      ) {
        const arg = node.arguments[0];
        const boundKey = bindKey(arg);
        if (boundKey) {
          const m = specOfKey(boundKey);
          if (!m) { warnings.push("unresolved-dynamic:" + boundKey); return; }
          aliasFor(m.spec, m.kind, boundKey);
          path.replaceWith(t.callExpression(t.import(), [t.stringLiteral(m.spec)]));
          return;
        }
        warnings.push("chunk-import-without-bind");
        return;
      }
      // req.bind(req,"key")
      if (callee.type === "MemberExpression" && callee.property.type === "Identifier" && callee.property.name === "bind" && isReqRef(callee.object)) {
        const boundKey = node.arguments[1]?.type === "StringLiteral" ? node.arguments[1].value : undefined;
        if (boundKey) {
          const m = specOfKey(boundKey);
          if (!m) { warnings.push("unresolved-bind:" + boundKey); return; }
          aliasFor(m.spec, m.kind, boundKey);
          path.replaceWith(t.arrowFunctionExpression([], t.callExpression(t.import(), [t.stringLiteral(m.spec)]), true));
          return;
        }
        warnings.push("bind-without-key");
        return;
      }
      // req.d(exports, table)
      if (callee.type === "MemberExpression" && callee.property.type === "Identifier" && callee.property.name === "d" && isReqRef(callee.object)) {
        const target = node.arguments[0];
        let table = node.arguments[1];
        if (table?.type === "Identifier") table = tableVars.get(table.name) ?? table;
        if (table?.type !== "ObjectExpression") { warnings.push("export-table-unresolved"); return; }
        const isExports = target?.type === "Identifier" && target.name === exportsName;
        for (const p of table.properties) {
          if (p.type !== "ObjectProperty" && p.type !== "ObjectMethod") continue;
          const name = p.key.type === "StringLiteral" ? p.key.value : p.key.type === "Identifier" ? p.key.name : undefined;
          if (!name) continue;
          const value = p.value;
          let ref: any = value;
          if (value?.type === "ArrowFunctionExpression" || value?.type === "FunctionExpression") ref = value.body;
          if (ref?.type === "BlockStatement" && ref.body.length === 1 && ref.body[0].type === "ReturnStatement") ref = ref.body[0].argument;
          if (!isExports) { warnings.push("namespace-export-table:" + name); continue; }
          exportRefs.push({ name, ref, target: "exports" });
        }
        if (isExports) removeStatement(path);
        return;
      }
      // req.r(exports)
      if (callee.type === "MemberExpression" && callee.property.type === "Identifier" && callee.property.name === "r" && isReqRef(callee.object)) {
        const target = node.arguments[0];
        if (target?.type === "Identifier" && target.name === exportsName) removeStatement(path);
        return;
      }
      if (callee.type === "MemberExpression" && isReqRef(callee.object)) {
        const prop = callee.property.type === "Identifier" ? callee.property.name : "?";
        if (!["d", "r", "a", "e", "bind"].includes(prop)) warnings.push("req-member-call:" + prop);
        return;
      }
      // async wrapper handle: H([dep]) -> [dep]
      if (unwrapped.handle && callee.type === "Identifier" && callee.name === unwrapped.handle && !path.scope.getBinding(unwrapped.handle)) {
        if (node.arguments.length === 1) path.replaceWith(node.arguments[0]);
        else warnings.push("unique-handle-call");
        return;
      }
      if (unwrapped.resolve && callee.type === "Identifier" && callee.name === unwrapped.resolve && !path.scope.getBinding(unwrapped.resolve)) {
        if (node.arguments.length === 0) removeStatement(path);
        else path.replaceWith(t.throwStatement(node.arguments[0]));
        return;
      }
    },
  });

  function removeStatement(path: any) {
    const stmt = path.getStatementParent();
    if (stmt) removed.add(stmt.node);
    else path.remove();
  }

  const kept = program.body.filter((s: any) => !removed.has(s));
  // dedupe export names (last wins)
  const byName = new Map<string, ExportRef>();
  for (const e of exportRefs) byName.set(e.name, e);
  const exportList = [...byName.values()];

  const exportIdents: any[] = [];
  const prelude: any[] = [];
  let expSeq = 0;
  for (const e of exportList) {
    let ref = e.ref;
    if (ref?.type === "Identifier") {
      exportIdents.push(t.exportSpecifier(t.identifier(ref.name), t.identifier(e.name)));
    } else {
      const local = "__exp" + expSeq++;
      prelude.push(t.variableDeclaration("const", [t.variableDeclarator(t.identifier(local), ref)]));
      exportIdents.push(t.exportSpecifier(t.identifier(local), t.identifier(e.name)));
    }
  }
  const prog = t.program([
    ...imports.map((imp) =>
      t.importDeclaration([t.importNamespaceSpecifier(t.identifier(aliasBySpec.get(imp.spec)!))], t.stringLiteral(imp.spec)),
    ),
    ...prelude,
    ...kept,
    ...(exportIdents.length ? [t.exportNamedDeclaration(null, exportIdents)] : []),
  ]);
  let code = generate(prog, { comments: false, compact: false, jsescOption: { minimal: true } }).code;
  return { code, imports, exports: exportList, warnings, removeReq: [] };
}

function bindKey(node: any): string | undefined {
  if (!node) return undefined;
  if (node.type !== "CallExpression") return undefined;
  const c = node.callee;
  if (c.type !== "MemberExpression" || c.property.type !== "Identifier" || c.property.name !== "bind") return undefined;
  const k = node.arguments[1];
  return k?.type === "StringLiteral" ? k.value : undefined;
}

function rawPkg(key: string): string {
  return key.split("/")[1];
}
function rawSub(key: string): string {
  return key.split("/").slice(3).join("/").replace(/\.js$/, "");
}

interface OutRec {
  key: string;
  pkg: Pkg;
  sub: string;
  outFile: string;
  sourceFile: string;
  kind: string;
  range: string;
  sha256: string;
  code: string;
  warnings: string[];
  imports: ImportRef[];
  exports: string[];
  status: "extracted" | "duplicate-canonical" | "duplicate-alias";
  generated: boolean;
}

function sha256File(file: string): string {
  return createHash("sha256").update(readFileSync(join(ROOT, file))).digest("hex");
}

function main() {
  const args = process.argv.slice(2);
  const dry = args.includes("--dry-run");
  const onlyIdx = args.indexOf("--only");
  const only = onlyIdx >= 0 ? args[onlyIdx + 1] : undefined;

  const files = readdirSync(join(ROOT, DIST, "esm")).filter((f) => f.endsWith(".js")).sort();
  const raw: RawModule[] = [];
  for (const f of files) raw.push(...collectChunk(join(DIST, "esm", f), "esm"));
  for (const f of readdirSync(join(ROOT, DIST, "cjs")).filter((f) => f.endsWith(".js")).sort()) {
    if (!raw.some((r) => r.file.endsWith("/esm/" + f))) continue;
    raw.push(...collectChunk(join(DIST, "cjs", f), "cjs"));
  }
  // canonical: prefer esm; among duplicates prefer the variant with most exports after transform
  const byKey = new Map<string, RawModule[]>();
  for (const r of raw) {
    const arr = byKey.get(r.key) ?? [];
    arr.push(r);
    byKey.set(r.key, arr);
  }
  const outs: OutRec[] = [];
  const dupReport: any[] = [];
  for (const [key, variants] of [...byKey.entries()].sort()) {
    const pkg = rawPkg(key) as Pkg;
    if (only && pkg !== only) continue;
    const esmVars = variants.filter((v) => v.kind === "esm");
    const list = esmVars.length ? esmVars : variants;
    let best: { raw: RawModule; tr: Transformed } | null = null;
    const allTr: { raw: RawModule; tr: Transformed }[] = [];
    for (const v of list) {
      try {
        const tr = transformModule(v);
        allTr.push({ raw: v, tr });
        if (!best || tr.exports.length > best.tr.exports.length) best = { raw: v, tr };
      } catch (e: any) {
        dupReport.push({ key, file: v.file, parseError: String(e?.message ?? e) });
      }
    }
    if (!best) continue;
    const sub = rawSub(key);
    const outFile = "packages/" + pkg + "/src/" + sub + ".ts";
    const canonicalNames = new Set(best.tr.exports.map((e) => e.name));
    const extras = new Set<string>();
    for (const { tr, raw: v } of allTr) {
      if (tr === best.tr) continue;
      for (const e of tr.exports) if (!canonicalNames.has(e.name)) extras.add(e.name);
      dupReport.push({
        key,
        files: allTr.map((x) => x.raw.file),
        chosen: best.raw.file,
        exportDiff: {
          extraInOthers: tr.exports.map((e) => e.name).filter((n) => !canonicalNames.has(n)),
          missingInOthers: [...canonicalNames].filter((n) => !tr.exports.some((e) => e.name === n)),
        },
        codeEqual: tr.code === best.tr.code,
      });
    }
    const status: OutRec["status"] = variants.length > 1 ? "duplicate-canonical" : "extracted";
    outs.push({
      key,
      pkg,
      sub,
      outFile,
      sourceFile: best.raw.file,
      kind: best.raw.kind,
      range: best.raw.bodyStart + ".." + best.raw.bodyEnd,
      sha256: sha256File(best.raw.file),
      code: best.tr.code,
      warnings: [...new Set(best.tr.warnings), ...(extras.size ? ["variant-extra-exports:" + [...extras].join(",")] : [])],
      imports: best.tr.imports,
      exports: best.tr.exports.map((e) => e.name),
      status,
      generated: pkg === "proto",
    });
  }
  const report = {
    generatedAt: NOW,
    dist: DIST,
    moduleCount: outs.length,
    byPackage: Object.fromEntries(
      OWNED.map((p) => [
        p,
        {
          modules: outs.filter((o) => o.pkg === p).length,
          files: outs.filter((o) => o.pkg === p).map((o) => o.outFile),
        },
      ]),
    ),
    warnings: outs.flatMap((o) => o.warnings.map((w) => ({ file: o.outFile, warning: w }))),
    duplicates: dupReport,
    modules: outs.map(({ code, ...rest }) => rest),
  };
  mkdirSync(join(ROOT, "docs/recovery/runs/sdk-runtime"), { recursive: true });
  writeFileSync(join(ROOT, "docs/recovery/runs/sdk-runtime/extract-report.json"), JSON.stringify(report, null, 2) + "\n");
  console.log("modules:", outs.length);
  console.log("byPackage:", JSON.stringify(report.byPackage && Object.fromEntries(Object.entries(report.byPackage).map(([k, v]: any) => [k, v.modules]))));
  console.log("warnings:", report.warnings.length, "duplicates:", dupReport.length);
  if (dry) {
    for (const w of report.warnings.slice(0, 40)) console.log("WARN", w.file, w.warning);
    return;
  }
  for (const o of outs) {
    const out = join(ROOT, o.outFile);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, header(o) + o.code + "\n");
  }
  console.log("wrote", outs.length, "files");
}

function header(o: OutRec): string {
  return [
    "// @recovered-by cursor-re",
    "// artifact: " + o.sourceFile + " sha256:" + o.sha256,
    '// module: "' + o.key + '" range:' + o.range,
    "// basis: webpack-key",
    "// confidence: B",
    "// method: split+rewire" + (o.generated ? "+generated" : ""),
    "// run: " + RUN_ID + " " + NOW,
    "// status: " + (o.generated ? "generated (do not hand-edit descriptors)" : "extracted from minified webpack module; identifiers mangled in artifact"),
    ...(o.warnings.length ? ["// warnings: " + o.warnings.join(" | ")] : []),
    "",
  ].join("\n");
}

if (import.meta.main) main();
