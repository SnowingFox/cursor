// @recovered-by cursor-re
// purpose: emit docs/recovery/runs/sdk-runtime/workspace-deps.json (dependency lines for main thread; does not edit root)
// run: w1-sdk-runtime
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const RUNS = "docs/recovery/runs/sdk-runtime";
const OWNED = [
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
];
const report = JSON.parse(readFileSync(join(ROOT, RUNS, "extract-report.json"), "utf8"));
const sdkPkg = JSON.parse(readFileSync(join(ROOT, ".vendor/cursor-sdk-1.3.1/package.json"), "utf8"));

const packages: Record<string, any> = {};
for (const pkg of OWNED) {
  const manifest = JSON.parse(readFileSync(join(ROOT, "packages", pkg, "package.json"), "utf8"));
  const mods = report.modules.filter((m: any) => m.pkg === pkg);
  packages[pkg] = {
    name: manifest.name,
    version: manifest.version,
    modules: mods.length,
    generated: mods.filter((m: any) => m.generated).length,
    dependencies: manifest.dependencies ?? {},
    tsconfigPaths: {
      ["@anysphere/" + pkg]: ["../" + pkg + "/src/index.ts"],
      ["@anysphere/" + pkg + "/*"]: ["../" + pkg + "/src/*"],
    },
  };
}

const externalSpecs = new Set<string>();
for (const m of report.modules) for (const imp of m.imports ?? []) if (imp.kind === "external") externalSpecs.add(imp.spec);
const externalRoots = new Set<string>();
for (const spec of externalSpecs) {
  if (spec.startsWith("node:") || spec.startsWith("bun:")) continue;
  const parts = spec.split("/");
  externalRoots.add(spec.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0]);
}

const cursorSdkDeps: Record<string, string> = {};
for (const pkg of OWNED) cursorSdkDeps["@anysphere/" + pkg] = "workspace:*";
for (const [name, version] of Object.entries(sdkPkg.dependencies ?? {})) cursorSdkDeps[name] = version as string;
cursorSdkDeps["zod"] = sdkPkg.peerDependencies?.zod ?? "^3.25.0 || ^4.0.0";

const out = {
  generatedAt: new Date().toISOString(),
  run: "w1-sdk-runtime",
  status: "report-only: root manifests are main-owned; nothing here was applied",
  root: {
    currentWorkspaces: ["packages/*"],
    changeRequired: false,
    note: "root package.json already declares workspaces: [\"packages/*\"]; do NOT add @anysphere/* there. bun install is main-owned and offline-blocked.",
  },
  recoveredPackages: packages,
  cursorSdk: {
    dependencies: Object.fromEntries(Object.entries(cursorSdkDeps).sort(([a], [b]) => a.localeCompare(b))),
    tsconfigPaths: Object.fromEntries(
      OWNED.flatMap((p) => [
        ["@anysphere/" + p, ["../" + p + "/src/index.ts"]],
        ["@anysphere/" + p + "/*", ["../" + p + "/src/*"]],
      ]),
    ),
    note: "packages/cursor-sdk is sdk-core owned. Its tsconfig needs these paths (or node_modules links after bun install) to resolve workspace sources instead of vendor dist.",
  },
  external: {
    importedByRecoveredCode: [...externalRoots].sort(),
    evidenceVersions: {
      "@bufbuild/protobuf": "1.10.0 (SDK dependency; externalized, not present in bundle)",
      zod: "^3.25.0 || ^4.0.0 (SDK peer; imported as zod/v3 and zod/v4)",
      rxjs: "8.0.0-alpha.14 (pnpm key evidence)",
      ignore: "7.0.5 (pnpm key evidence)",
      "@opentelemetry/api": "1.9.0 (pnpm key evidence)",
      "@connectrpc/connect": "1.6.1 (pnpm key evidence; used by generated *_connect modules)",
      "@connectrpc/connect-web": "unknown (not imported by recovered modules)",
      "@statsig/js-client": "3.31.0 (SDK dependency; not imported by recovered modules)",
    },
    installedNow: false,
    mitigation: "packages/*/src/externals.d.ts declares shorthand ambient modules for missing externals so tsc is green offline; runtime requires a real bun install.",
    blocked: "network disabled for this run; main thread must run bun install after adding dependencies.",
  },
};
writeFileSync(join(ROOT, RUNS, "workspace-deps.json"), JSON.stringify(out, null, 2) + "\n");
console.log("wrote workspace-deps.json", Object.keys(out.recoveredPackages).length, "packages", externalRoots.size, "external roots");
