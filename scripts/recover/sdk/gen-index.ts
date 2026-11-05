// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: public entry generator (not emitted source)
// basis: dts-map
// confidence: A
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00

/**
 * Generate src/index.ts from the published index.d.ts.
 *  - type exports resolve to the verbatim declaration tree in src/api-types/**
 *  - value exports are emitted only for bindings recovered in
 *    recovery/sdk/implemented.json; unrecovered values are omitted (never faked)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { parse } from "@babel/parser";
import type { ExportNamedDeclaration, ExportSpecifier, Program } from "@babel/types";

const REPO = resolve(import.meta.dir, "..", "..", "..");
const PKG = join(REPO, "packages/cursor-sdk");
const implemented = JSON.parse(readFileSync(join(REPO, "recovery/sdk/implemented.json"), "utf8")) as {
  modules: { out: string; exports: { alias: string; localName: string; publicName: string | null }[] }[];
};

const valueModule = new Map<string, string>();
for (const mod of implemented.modules) {
  for (const e of mod.exports) {
    if (e.publicName) valueModule.set(e.publicName, mod.out);
  }
}

const src = readFileSync(join(REPO, ".vendor/cursor-sdk-1.3.1/dist/esm/index.d.ts"), "utf8");
const program = parse(src, { sourceType: "module", plugins: ["typescript"] }).program as Program;
const lines: string[] = [];
const skippedValues: string[] = [];
const emittedValues = new Set<string>();
for (const stmt of program.body) {
  if (stmt.type !== "ExportNamedDeclaration" || !stmt.source) continue;
  const source = (stmt.source as { value: string }).value;
  const specs = stmt.specifiers.filter((s): s is ExportSpecifier => s.type === "ExportSpecifier");
  if (!specs.length) continue;
  const isType = stmt.exportKind === "type";
  const typePath = "./api-types/" + source.replace(/^\.\//, "");
  if (isType) {
    const keep = specs.filter((s) => {
      const exported = s.exported.type === "Identifier" ? s.exported.name : String(s.exported.value);
      return !valueModule.has(exported) || emittedValues.has(exported);
    });
    if (!keep.length) continue;
    lines.push("export type { " + keep.map((s) => s.local.type === "Identifier" ? s.local.name + (s.exported.type === "Identifier" && s.exported.name !== s.local.name ? " as " + s.exported.name : "") : "").filter(Boolean).join(", ") + ' } from "' + typePath + '";');
    continue;
  }
  const byModule = new Map<string, string[]>();
  for (const s of specs) {
    const exported = s.exported.type === "Identifier" ? s.exported.name : String(s.exported.value);
    const mod = valueModule.get(exported);
    if (!mod) {
      skippedValues.push(exported);
      continue;
    }
    if (emittedValues.has(exported)) continue;
    emittedValues.add(exported);
    if (!byModule.has(mod)) byModule.set(mod, []);
    byModule.get(mod)!.push(exported);
  }
  for (const [mod, names] of byModule) {
    let rel = relative(join(PKG, "src"), join(PKG, mod)).replace(/\\/g, "/").replace(/\.ts$/, ".js");
    if (!rel.startsWith(".")) rel = "./" + rel;
    lines.push("export { " + names.join(", ") + ' } from "' + rel + '";');
  }
}

const header = [
  "// @recovered-by cursor-re",
  "// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.d.ts + index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6",
  "// module: src/index.ts (public entry)",
  "// basis: dts-map + webpack-key",
  "// confidence: A (types) / B (recovered values)",
  "// method: generated",
  "// run: w1-sdk-core " + new Date().toISOString(),
  "//",
  "// Types are verbatim from the published index.d.ts (src/api-types/**).",
  "// Value exports exist only for bindings recovered from the published ESM;",
  "// unrecovered bindings are listed in docs/recovery/runs/sdk-core/REPORT.md.",
].join("\n");
writeFileSync(join(PKG, "src/index.ts"), header + "\n" + lines.join("\n") + "\n");
console.log("value exports:", emittedValues.size, "type statements:", lines.length);
console.log("skipped unrecovered values:", [...new Set(skippedValues)].join(", "));
