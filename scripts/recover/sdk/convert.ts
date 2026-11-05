// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/*.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: conversion tool (not emitted source)
// basis: webpack-key
// confidence: B
// method: split+rename
// run: w1-sdk-core 2026-11-05T18:00:00+08:00

/**
 * Convert selected webpack ESM module wrappers from @cursor/sdk@1.3.1 into
 * standalone TypeScript modules under packages/cursor-sdk/src.
 *
 * Rules:
 *  - Module bodies are copied verbatim from the artifact (ranges recorded in
 *    recovery/sdk/modules.json); only the webpack require/export wrappers are
 *    rewritten. No statements are invented or removed.
 *  - Internal identifiers stay minified (deterministic-rename is a later pass).
 *  - Public export names come from the entry chunk's export table
 *    (`export const Name = NS.alias`), which is authoritative for the package.
 *  - Modules whose require graph cannot be resolved locally are skipped and
 *    reported, never stubbed here.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, relative, resolve, posix } from "node:path";
import { parse } from "@babel/parser";
import type { CallExpression, FunctionExpression, Node, ObjectExpression, ObjectMethod, Program, VariableDeclaration } from "@babel/types";

const REPO = resolve(import.meta.dir, "..", "..", "..");
const ESM = join(REPO, ".vendor/cursor-sdk-1.3.1/dist/esm");
const PKG = join(REPO, "packages/cursor-sdk");
const ARTIFACT = ".vendor/cursor-sdk-1.3.1/dist/esm";
const SHA = "30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6";

interface Target {
  key: string;
  out: string;
  /** vendored sibling-package code kept inside this package for now */
  vendored?: boolean;
}

const TARGETS: Target[] = [
  { key: "./src/agent/team-id.ts", out: "src/agent/team-id.ts" },
  { key: "./src/agent/tool-call-utils.ts", out: "src/agent/tool-call-utils.ts" },
  { key: "./src/agent/usage-types.ts", out: "src/agent/usage-types.ts" },
  { key: "./src/agent/utils/logger.ts", out: "src/agent/utils/logger.ts" },
  { key: "./src/agent/analytics-prompt-hash.ts", out: "src/agent/analytics-prompt-hash.ts" },
  { key: "./src/agent/analytics-agent-name.ts", out: "src/agent/analytics-agent-name.ts" },
  { key: "./src/agent/filesystem/errors.ts", out: "src/agent/filesystem/errors.ts" },
  { key: "./src/agent/filesystem/merge.ts", out: "src/agent/filesystem/merge.ts" },
  { key: "./src/agent/filesystem/types.ts", out: "src/agent/filesystem/types.ts" },
  { key: "./src/agent/filesystem/walk.ts", out: "src/agent/filesystem/walk.ts" },
  { key: "./src/agent/filesystem/trees.ts", out: "src/agent/filesystem/trees.ts" },
  { key: "./src/agent/filesystem/compose.ts", out: "src/agent/filesystem/compose.ts" },
  { key: "./src/agent/filesystem/local-fs.ts", out: "src/agent/filesystem/local-fs.ts" },
  { key: "./src/agent/platform-package-locator.ts", out: "src/agent/platform-package-locator.ts" },
  { key: "./src/agent/auth/credential-store.ts", out: "src/agent/auth/credential-store.ts" },
  { key: "./src/agent/auth/login-flow.ts", out: "src/agent/auth/login-flow.ts" },
  { key: "./src/agent/auth/stored-credentials.ts", out: "src/agent/auth/stored-credentials.ts" },
  { key: "./src/agent/store/sdk-local-defaults.ts", out: "src/agent/store/sdk-local-defaults.ts" },
  { key: "./src/agent/store/sdk-state-root.ts", out: "src/agent/store/sdk-state-root.ts" },
  { key: "./src/agent/store/local-agent-record-conversion.ts", out: "src/agent/store/local-agent-record-conversion.ts" },
  { key: "./src/agent/run-interaction-accumulator.ts", out: "src/agent/run-interaction-accumulator.ts" },
  { key: "./src/agent/subagent-conversion.ts", out: "src/agent/subagent-conversion.ts" },
  { key: "./src/agent/sdk-config.ts", out: "src/agent/sdk-config.ts" },
  { key: "./src/agent/errors.ts", out: "src/agent/errors.ts" },
  { key: "./src/agent/messages.ts", out: "src/agent/messages.ts" },
  { key: "./src/agent/types/delta-types.ts", out: "src/agent/types/delta-types.ts" },
  { key: "./src/agent/native/vendored-tree-sitter.ts", out: "src/agent/native/vendored-tree-sitter.ts" },
  // Vendored sibling-package modules (published package bundles these; the
  // @anysphere/* workspace packages are owned by the sdk-runtime agent).
  { key: "../proto/dist/generated/aiserver/v1/utils_pb.js", out: "src/vendor/proto/aiserver/v1/utils_pb.ts", vendored: true },
  { key: "../proto/dist/runtime/compact.js", out: "src/vendor/proto/runtime/compact.ts", vendored: true },
  { key: "../cursor-sdk-shared/dist/message-schemas.js", out: "src/vendor/cursor-sdk-shared/message-schemas.ts", vendored: true },
  { key: "../cursor-sdk-shared/dist/tool-call-types.js", out: "src/vendor/cursor-sdk-shared/tool-call-types.ts", vendored: true },
  { key: "../utils/dist/workspace-paths.js", out: "src/vendor/utils/workspace-paths.ts", vendored: true },
  { key: "../utils/dist/fresh-uuid.js", out: "src/vendor/utils/fresh-uuid.ts", vendored: true },
  { key: "../../node_modules/.pnpm/brace-expansion@5.0.12/node_modules/brace-expansion/dist/esm/index.js", out: "src/vendor/brace-expansion/index.ts", vendored: true },
];

interface ModuleRecord {
  chunk: string;
  key: string;
  start: number;
  end: number;
  exports: { alias: string; localName: string }[];
}

const manifest = JSON.parse(readFileSync(join(REPO, "recovery/sdk/modules.json"), "utf8")) as { records: ModuleRecord[] };
const byKey = new Map<string, ModuleRecord>();
for (const r of manifest.records) if (!byKey.has(r.key)) byKey.set(r.key, r);

/** public export names: module key -> alias -> public name */
const publicNames = new Map<string, Map<string, string>>();
{
  const source = readFileSync(join(ESM, "index.js"), "utf8");
  const tail = source.slice(source.indexOf(';var Y=X("./src/agent/errors.ts")'));
  const binds = new Map<string, string>();
  for (const m of tail.matchAll(/(?:var |,)([A-Za-z_$][\w$]*)=X\("([^"]+)"\)/g)) binds.set(m[1], m[2]);
  for (const m of tail.matchAll(/export const (\w+)=([A-Za-z_$][\w$]*)\.([\w$]+)/g)) {
    const [, name, ns, alias] = m;
    const key = binds.get(ns);
    if (!key) continue;
    if (!publicNames.has(key)) publicNames.set(key, new Map());
    publicNames.get(key)!.set(alias, name);
  }
}

const VENDOR_MAP: Record<string, string> = {
  "../proto/dist/generated/aiserver/v1/utils_pb.js": "src/vendor/proto/aiserver/v1/utils_pb.ts",
  "../proto/dist/runtime/compact.js": "src/vendor/proto/runtime/compact.ts",
  "../cursor-sdk-shared/dist/message-schemas.js": "src/vendor/cursor-sdk-shared/message-schemas.ts",
  "../cursor-sdk-shared/dist/tool-call-types.js": "src/vendor/cursor-sdk-shared/tool-call-types.ts",
  "../utils/dist/workspace-paths.js": "src/vendor/utils/workspace-paths.ts",
  "../utils/dist/fresh-uuid.js": "src/vendor/utils/fresh-uuid.ts",
};

function packageRelative(out: string): string {
  return out;
}

function resolveSpecifier(fromOut: string, spec: string): string | undefined {
  if (spec.startsWith("node:") || spec.startsWith("bun:")) return spec.replace(/\?[0-9a-f]+$/, "");
  if (!spec.startsWith(".")) return spec;
  const stripped = spec.replace(/\?[0-9a-f]+$/, "");
  let target: string | undefined;
  if (stripped.startsWith("./src/")) {
    target = stripped.replace(/^\.\/src\//, "src/").replace(/\.ts$/, ".ts");
  } else if (VENDOR_MAP[stripped]) {
    target = VENDOR_MAP[stripped];
  } else if (stripped.includes("brace-expansion")) {
    target = "src/vendor/brace-expansion/index.ts";
  }
  if (!target) return undefined;
  const rel = relative(dirname(fromOut), target).replace(/\\/g, "/").replace(/\.ts$/, ".js");
  return rel.startsWith(".") ? rel : "./" + rel;
}

function findModuleFn(source: string, file: string, key: string): { fn: ObjectMethod; program: Program } | undefined {
  const program = parse(source, { sourceType: "module", errorRecovery: true }).program;
  for (const stmt of program.body) {
    const decl = stmt.type === "ExportNamedDeclaration" ? stmt.declaration : stmt;
    if (!decl || decl.type !== "VariableDeclaration") continue;
    for (const d of decl.declarations) {
      if (d.id.type !== "Identifier" || (d.id.name !== "__webpack_esm_modules__" && d.id.name !== "V")) continue;
      if (d.init?.type !== "ObjectExpression") continue;
      for (const prop of d.init.properties) {
        if (prop.type !== "ObjectMethod") continue;
        const k = prop.key;
        const name = k.type === "StringLiteral" ? k.value : k.type === "Identifier" ? k.name : undefined;
        if (name === key) return { fn: prop, program };
      }
    }
  }
  return undefined;
}

function convert(target: Target): { ok: true; code: string } | { ok: false; reason: string } {
  const rec = byKey.get(target.key);
  if (!rec) return { ok: false, reason: "module key not found in recovery/sdk/modules.json" };
  const source = readFileSync(join(ESM, rec.chunk), "utf8");
  const found = findModuleFn(source, rec.chunk, target.key);
  if (!found) return { ok: false, reason: "module function not found in chunk" };
  const fn = found.fn;
  if (fn.body.type !== "BlockStatement") return { ok: false, reason: "unexpected body type" };
  const params = fn.params.filter((p) => p.type === "Identifier").map((p) => (p as { name: string }).name);
  const [moduleName, exportsName, requireName] = params;
  if (!requireName || !exportsName) return { ok: false, reason: "unexpected module signature" };

  const edits: { start: number; end: number; text: string }[] = [];
  const imports: { local: string; spec: string }[] = [];
  let failed: string | undefined;

  // Walk the wrapper body: collect/remove require declarators and export table calls.
  const body = fn.body;
  for (const stmt of body.body) {
    // e.d(r, {...}); / e.r(r);
    if (stmt.type === "ExpressionStatement" && stmt.expression.type === "CallExpression") {
      const call = stmt.expression;
      const callee = call.callee;
      if (callee.type === "MemberExpression" && !callee.computed && callee.object.type === "Identifier" && callee.object.name === requireName && callee.property.type === "Identifier" && (callee.property.name === "d" || callee.property.name === "r")) {
        edits.push({ start: stmt.start!, end: stmt.end!, text: "" });
        continue;
      }
    }
    if (stmt.type === "VariableDeclaration") {
      const allRequires = stmt.declarations.every((d) => d.id.type === "Identifier" && d.init?.type === "CallExpression" && d.init.callee.type === "Identifier" && d.init.callee.name === requireName && d.init.arguments.length === 1 && d.init.arguments[0].type === "StringLiteral");
      if (allRequires) {
        for (const d of stmt.declarations) {
          const init = d.init as CallExpression;
          const spec = (init.arguments[0] as { value: string }).value;
          imports.push({ local: (d.id as { name: string }).name, spec });
        }
        edits.push({ start: stmt.start!, end: stmt.end!, text: "" });
      } else if (stmt.declarations.some((d) => d.init?.type === "CallExpression" && d.init.callee.type === "Identifier" && d.init.callee.name === requireName)) {
        failed = "mixed require declaration";
      }
    }
  }
  if (failed) return { ok: false, reason: failed };

  const importLines: string[] = [];
  for (const imp of imports) {
    const resolved = resolveSpecifier(target.out, imp.spec);
    if (!resolved) return { ok: false, reason: "unresolved import " + imp.spec };
    importLines.push('import * as ' + imp.local + ' from "' + resolved + '";');
  }

  // Apply edits to the module body text (offsets are absolute in the chunk).
  const bodyStart = body.start!;
  const bodyEnd = body.end!;
  const sorted = edits.sort((a, b) => b.start - a.start);
  let bodyText = source.slice(bodyStart + 1, bodyEnd - 1);
  for (const e of sorted) {
    const relStart = e.start - (bodyStart + 1);
    const relEnd = e.end - (bodyStart + 1);
    bodyText = bodyText.slice(0, relStart) + e.text + bodyText.slice(relEnd);
  }
  if (new RegExp("(^|[^\\w$.])" + requireName + "\\s*\\(\\s*[\"']").test(bodyText)) {
    return { ok: false, reason: "unconverted require call remains" };
  }
  if (/(^|[^\w$.])__webpack_/.test(bodyText)) return { ok: false, reason: "webpack runtime reference remains" };

  const pub = publicNames.get(target.key) ?? new Map<string, string>();
  const exportParts = rec.exports.map((e) => {
    const names = [e.alias];
    const p = pub.get(e.alias);
    if (p && p !== e.alias) names.push(p);
    return names.map((n) => e.localName + " as " + n).join(", ");
  });
  const exportLines = exportParts.length ? ['export { ' + exportParts.join(", ") + ' };'] : [];

  const method = target.vendored ? "vendored" : "split";
  const confidence = target.vendored ? "B" : "B";
  const header = [
    "// @recovered-by cursor-re",
    "// artifact: " + ARTIFACT + "/" + rec.chunk + " sha256:" + SHA,
    "// module: " + target.key + " range:" + bodyStart + ".." + bodyEnd,
    "// basis: webpack-key",
    "// confidence: " + confidence,
    "// method: " + method,
    "// run: w1-sdk-core " + new Date().toISOString(),
    "// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**",
    target.vendored ? "// note: vendored sibling-package module; @anysphere workspace package is owned by sdk-runtime" : "// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)",
  ].join("\n");

  const code = header + "\n" + importLines.join("\n") + (importLines.length ? "\n" : "") + "\n" + bodyText.trim() + "\n" + exportLines.join("\n") + "\n";
  return { ok: true, code };
}

// Record what was actually recovered so index/type generation stays honest.
const implemented = TARGETS.map((target) => {
  const rec = byKey.get(target.key);
  const pub = publicNames.get(target.key) ?? new Map<string, string>();
  return {
    key: target.key,
    out: target.out,
    vendored: target.vendored ?? false,
    exports: (rec?.exports ?? []).map((e) => ({ alias: e.alias, localName: e.localName, publicName: pub.get(e.alias) ?? null })),
  };
});
writeFileSync(join(REPO, "recovery/sdk/implemented.json"), JSON.stringify({ generatedAt: new Date().toISOString(), modules: implemented }, null, 2));

const args = new Set(process.argv.slice(2));
const dry = args.has("--dry");
let written = 0;
const failures: string[] = [];
for (const target of TARGETS) {
  const result = convert(target);
  if (!result.ok) {
    failures.push(target.key + " -> " + target.out + ": " + result.reason);
    continue;
  }
  if (!dry) {
    const outPath = join(PKG, target.out);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, result.code);
    written++;
  } else {
    console.log("DRY OK", target.key, "->", target.out, result.code.length, "bytes");
  }
}
console.log("targets:", TARGETS.length, "written:", written, "failed:", failures.length);
for (const f of failures) console.log("FAIL", f);