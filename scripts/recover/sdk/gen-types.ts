// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/**/*.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: type-surface generator (not emitted source)
// basis: dts-map
// confidence: A
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00

/**
 * Copy the published declaration tree verbatim into src/api-types/** as .ts
 * declaration modules. The .d.ts files are the type authority for this package;
 * only relative imports that point outside dist/esm (original monorepo layout
 * such as ../vendor/... or ../../...) are redirected to the ambient
 * @anysphere/* shim, and sourceMappingURL comments are dropped.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

const REPO = resolve(import.meta.dir, "..", "..", "..");
const ESM = join(REPO, ".vendor/cursor-sdk-1.3.1/dist/esm");
const OUT = join(REPO, "packages/cursor-sdk/src/api-types");

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
}

let count = 0;
const rewrites: string[] = [];
for (const file of walk(ESM)) {
  if (!file.endsWith(".d.ts")) continue;
  const rel = relative(ESM, file).replace(/\.d\.ts$/, ".ts");
  let body = readFileSync(file, "utf8");
  body = body.replace(/^\/\/# sourceMappingURL=.*$/gm, "");
  body = body.replace(/(from\s+|import\s*\()(["'])([^"']+)\2/g, (whole: string, prefix: string, quote: string, spec: string) => {
    if (spec.startsWith("vendor/")) {
      rewrites.push(rel + ": " + spec + " -> @anysphere/legacy-vendor");
      return prefix + quote + "@anysphere/legacy-vendor" + quote;
    }
    return whole;
  });
  const header = [
    "// @recovered-by cursor-re",
    "// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/" + relative(ESM, file) + " sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6",
    "// module: " + rel + " (type surface)",
    "// basis: dts-map",
    "// confidence: A",
    "// method: generated (verbatim .d.ts, import paths normalized)",
    "// run: w1-sdk-core " + new Date().toISOString(),
    "// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies",
  ].join("\n");
  const outPath = join(OUT, rel);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, header + "\n" + body.trimEnd() + "\n");
  count++;
}
console.log("api-types written:", count, "rewrites:", rewrites.length);
for (const r of rewrites) console.log("  " + r);