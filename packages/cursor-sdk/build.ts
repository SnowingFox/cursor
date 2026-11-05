// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/**/*.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: package build script
// basis: dts-map
// confidence: A
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00

// @ts-nocheck -- exercises recovered (untyped) bodies; public types live in src/api-types/**
/**
 * Build @cursor/sdk-re:
 *   1. tsc declaration emit (dist/esm declarations, mirrored source tree)
 *   2. bun build -> dist/esm (ESM), dist/cjs (CJS), dist/bundled (minified ESM)
 * External dependencies stay external; they are the published package's
 * dependencies/peerDependencies and are resolved at install time.
 */
import { spawnSync } from "node:child_process";
import { rmSync, mkdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const PKG = resolve(import.meta.dir);
const DIST = join(PKG, "dist");
const external = [
  "@bufbuild/protobuf",
  "@connectrpc/connect",
  "@connectrpc/connect-node",
  "@connectrpc/connect-web",
  "@statsig/js-client",
  "zod",
  "zod/v3",
  "zod/v4",
  "zod/v4-mini",
];

async function bundle(format: "esm" | "cjs", outdir: string, minify: boolean): Promise<void> {
  const result = await Bun.build({
    entrypoints: [join(PKG, "src/index.ts"), join(PKG, "src/sqlite.ts")],
    outdir,
    root: join(PKG, "src"),
    target: "node",
    format,
    minify,
    sourcemap: "none",
    external,
    naming: "[dir]/[name].js",
  });
  if (!result.success) {
    for (const log of result.logs) console.error(String(log));
    throw new Error("bun build failed for " + format);
  }
}

async function main(): Promise<void> {
  if (existsSync(DIST)) rmSync(DIST, { recursive: true, force: true });
  mkdirSync(join(DIST, "esm"), { recursive: true });
  mkdirSync(join(DIST, "cjs"), { recursive: true });
  mkdirSync(join(DIST, "bundled"), { recursive: true });

  console.log("[sdk:build] tsc declaration emit -> dist/esm");
  const tsc = spawnSync("bunx", ["tsc", "-p", join(PKG, "tsconfig.build.json")], { cwd: PKG, stdio: "inherit" });
  if (tsc.status !== 0) throw new Error("tsc declaration emit failed");

  console.log("[sdk:build] bun build esm");
  await bundle("esm", join(DIST, "esm"), false);
  console.log("[sdk:build] bun build cjs");
  await bundle("cjs", join(DIST, "cjs"), false);
  console.log("[sdk:build] bun build bundled (minified esm)");
  await bundle("esm", join(DIST, "bundled"), true);
  console.log("[sdk:build] ok");
}

await main();