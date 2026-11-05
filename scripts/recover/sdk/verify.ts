// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/package.json sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: scripts/recover/sdk/verify.ts
// basis: dts-map
// confidence: A
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "../lib/paths";

const PKG = join(ROOT, "packages", "cursor-sdk");

function run(label: string, cmd: string, args: string[], env?: Record<string, string>): void {
  console.log("\n[recover] " + label);
  console.log("  $ " + cmd + " " + args.join(" "));
  const result = spawnSync(cmd, args, { cwd: ROOT, stdio: "inherit", env: { ...process.env, ...env } });
  if (result.status !== 0) {
    throw new Error(label + " failed with exit " + String(result.status));
  }
  console.log("  exit 0");
}

function main(): void {
  if (!existsSync(PKG)) {
    console.error("[recover] packages/cursor-sdk missing");
    process.exit(1);
  }
  run("sdk typecheck", "bunx", ["tsc", "-p", join(PKG, "tsconfig.json"), "--noEmit"]);
  run("sdk build", "bun", [join(PKG, "build.ts")]);
  run("sdk tests (unit + parity + smoke)", "bunx", ["vitest", "run", "--config", join(PKG, "vitest.config.ts")]);
  run("sdk dist import (bun, no install)", "bun", [
    "-e",
    'const esm = await import("./packages/cursor-sdk/dist/esm/index.js"); const sqlite = await import("./packages/cursor-sdk/dist/esm/sqlite.js"); console.log("dist esm exports:", Object.keys(esm).length, "sqlite exports:", Object.keys(sqlite).length);',
  ], { NODE_PATH: join(ROOT, "app", "node_modules") });
  const coveragePath = join(ROOT, "docs", "recovery", "runs", "sdk-core", "parity-coverage.json");
  if (existsSync(coveragePath)) {
    const coverage = JSON.parse(readFileSync(coveragePath, "utf8")) as { vendorExports: number; present: number; coveragePct: number; missing: string[] };
    console.log("\n[recover] parity: " + coverage.present + "/" + coverage.vendorExports + " published runtime exports (" + coverage.coveragePct + "%)");
    console.log("[recover] unrecovered: " + coverage.missing.join(", "));
  }
  console.log("\n[recover] sdk:verify ok");
}

main();
