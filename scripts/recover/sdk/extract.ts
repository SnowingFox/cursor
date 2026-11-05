// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/*.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: extraction tool (not emitted source)
// basis: webpack-key
// confidence: A
// method: split
// run: w1-sdk-core 2026-11-05T18:00:00+08:00

/**
 * Extract webpack module-map records from the published @cursor/sdk 1.3.1 ESM
 * chunks. Output: recovery/sdk/modules.json plus raw module bodies under
 * recovery/sdk/raw/. No network, read-only against .vendor/.
 */
import { readdirSync, readFileSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import { join, basename } from "node:path";
import { parse } from "@babel/parser";
import type { Expression, FunctionExpression, ObjectExpression, ObjectProperty, Program } from "@babel/types";

const REPO = join(import.meta.dir, "..", "..", "..");
const ESM = join(REPO, ".vendor/cursor-sdk-1.3.1/dist/esm");
const OUT = join(REPO, "recovery/sdk");

export interface ModuleExport {
  alias: string;
  localName: string;
}
export interface ModuleRecord {
  chunk: string;
  key: string;
  kind: "esm" | "entry";
  start: number;
  end: number;
  bytes: number;
  exports: ModuleExport[];
  rawPath?: string;
}

function moduleMapFromChunk(program: Program): { node: ObjectExpression; kind: "esm" | "entry" } | undefined {
  for (const stmt of program.body) {
    if (stmt.type === "ExportNamedDeclaration" || stmt.type === "VariableDeclaration") {
      const decl = stmt.type === "ExportNamedDeclaration" ? stmt.declaration : stmt;
      if (!decl || decl.type !== "VariableDeclaration") continue;
      for (const d of decl.declarations) {
        if (d.id.type === "Identifier" && (d.id.name === "__webpack_esm_modules__" || d.id.name === "V") && d.init?.type === "ObjectExpression") {
          return { node: d.init, kind: d.id.name === "V" ? "entry" : "esm" };
        }
      }
    }
  }
  return undefined;
}

function exportTable(fn: FunctionExpression): ModuleExport[] {
  const out: ModuleExport[] = [];
  const params = fn.params.filter((p) => p.type === "Identifier").map((p) => (p as { name: string }).name);
  const requireName = params[2];
  if (!requireName) return out;
  // Find the first e.d(exports, {...}) call anywhere in the wrapper body.
  const body = fn.body;
  if (body.type !== "BlockStatement") return out;
  for (const stmt of body.body) {
    if (stmt.type !== "ExpressionStatement") continue;
    const call = stmt.expression;
    if (call.type !== "CallExpression") continue;
    const callee = call.callee;
    if (callee.type !== "MemberExpression" || callee.computed) continue;
    const obj = callee.object;
    if (obj.type !== "Identifier" || obj.name !== requireName) continue;
    const prop = callee.property;
    if (prop.type !== "Identifier" || (prop.name !== "d" && prop.name !== "r")) continue;
    const arg = call.arguments[1];
    if (!arg || arg.type !== "ObjectExpression") continue;
    for (const p of arg.properties) {
      if (p.type !== "ObjectProperty" || p.computed) continue;
      const key = p.key;
      const alias = key.type === "Identifier" ? key.name : key.type === "StringLiteral" ? key.value : undefined;
      let localName: string | undefined;
      if (p.value.type === "ArrowFunctionExpression" && p.value.body.type === "Identifier") localName = p.value.body.name;
      if (alias && localName) out.push({ alias, localName });
    }
  }
  return out;
}

const records: ModuleRecord[] = [];
const files = readdirSync(ESM).filter((f) => f.endsWith(".js"));
for (const file of files) {
  const path = join(ESM, file);
  const source = readFileSync(path, "utf8");
  if (source.length < 200) continue;
  let program: Program;
  try {
    program = parse(source, { sourceType: "module", errorRecovery: true }).program;
  } catch (error) {
    console.error("parse failed", file, String(error));
    continue;
  }
  const found = moduleMapFromChunk(program);
  if (!found) continue;
  for (const prop of found.node.properties) {
    if (prop.computed || (prop.type !== "ObjectProperty" && prop.type !== "ObjectMethod")) continue;
    const key = prop.key;
    const keyName = key.type === "StringLiteral" ? key.value : key.type === "Identifier" ? key.name : undefined;
    if (!keyName) continue;
    const value = prop.type === "ObjectMethod" ? undefined : prop.value;
    const fn = (prop.type === "ObjectMethod" ? prop : value) as unknown as FunctionExpression | undefined;
    if (!fn || (fn.body.type !== "BlockStatement" && fn.body.type !== "Expression")) continue;
    const bodyStart = fn.body.start ?? 0;
    const bodyEnd = fn.body.end ?? 0;
    const rec: ModuleRecord = {
      chunk: file,
      key: keyName,
      kind: found.kind,
      start: bodyStart,
      end: bodyEnd,
      bytes: bodyEnd - bodyStart,
      exports: exportTable(fn),
    };
    const interesting = keyName.startsWith("./src/") || /^\.\.\/(cursor-sdk-shared|utils|context|proto|metrics|mcp-|shell-exec|agent-kv)/.test(keyName);
    if (interesting) {
      const dir = join(OUT, "raw", basename(file, ".js"));
      mkdirSync(dir, { recursive: true });
      const slug = keyName.replace(/^\.\.?\//, "").replace(/[^a-zA-Z0-9._-]+/g, "-");
      const rawPath = join(dir, slug.endsWith(".js") ? slug : slug + ".js");
      const header = "// @recovered-by cursor-re\n// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/" + file + "\n// module: " + keyName + " range:" + bodyStart + ".." + bodyEnd + "\n// basis: webpack-key\n// confidence: A\n// method: split\n// run: w1-sdk-core\n";
      writeFileSync(rawPath, header + source.slice(bodyStart, bodyEnd) + "\n");
      rec.rawPath = rawPath.slice(REPO.length + 1);
    }
    records.push(rec);
  }
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "modules.json"), JSON.stringify({ generatedAt: new Date().toISOString(), chunks: files.length, records }, null, 2));
const own = records.filter((r) => r.key.startsWith("./src/"));
const ownKeys = new Set(own.map((r) => r.key));
console.log("chunks scanned:", files.length, "records:", records.length, "own-source keys:", ownKeys.size);
console.log("own keys by chunk:");
for (const r of own.sort((a, b) => b.bytes - a.bytes)) console.log(String(r.bytes).padStart(8), r.chunk.padEnd(10), r.key, "exports=" + r.exports.length);
console.log("\nsibling/package keys (top 40 by size):");
for (const r of records.filter((x) => !x.key.startsWith("./src/")).sort((a, b) => b.bytes - a.bytes).slice(0, 40)) console.log(String(r.bytes).padStart(8), r.chunk.padEnd(10), r.key);
console.log("\nwrote", join(OUT, "modules.json"));