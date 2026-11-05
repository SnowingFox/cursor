// @recovered-by cursor-re
// purpose: create package manifests/tsconfig/barrels/ambient shims for recovered @anysphere/* packages
// run: w1-sdk-runtime
import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";

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
const modules: any[] = report.modules;

const NODE_BUILTINS = new Set(["assert","async_hooks","buffer","child_process","cluster","console","constants","crypto","dgram","diagnostics_channel","dns","domain","events","fs","http","http2","https","inspector","module","net","os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","string_decoder","timers","tls","trace_events","tty","url","util","v8","vm","wasi","worker_threads","zlib","sqlite"]);

function pkgNames(): string[] {
  return OWNED;
}

function pathsMap(): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const p of pkgNames()) {
    out["@anysphere/" + p] = ["../" + p + "/src/index.ts"];
    out["@anysphere/" + p + "/*"] = ["../" + p + "/src/*"];
  }
  return out;
}

function versionMap(): Map<string, string> {
  const inv = JSON.parse(readFileSync(join(ROOT, "recovery/inventory/sdk.json"), "utf8"));
  const out = new Map<string, string>();
  for (const m of inv.moduleKeys ?? []) {
    const p = /^\.\.\/\.\.\/node_modules\/\.pnpm\/(@[^/]+|[^@/]+)@([0-9][^/]*)\/node_modules\//.exec(m.key);
    if (!p) continue;
    const dir = p[1];
    const name = dir.startsWith("@") ? dir.replace("+", "/") : dir;
    if (!out.has(name)) out.set(name, p[2]);
  }
  return out;
}

const KNOWN_VERSIONS: Record<string, string> = {
  "@bufbuild/protobuf": "1.10.0",
  zod: "^3.25.0 || ^4.0.0",
};

function packageDeps(pkg: string, mods: any[]): Record<string, string> {
  const versions = versionMap();
  const deps: Record<string, string> = {};
  for (const m of mods) {
    for (const imp of m.imports ?? []) {
      const spec: string = imp.spec;
      if (imp.kind === "internal" && spec.startsWith("@anysphere/")) {
        const target = spec.split("/")[1];
        if (target !== pkg) deps["@anysphere/" + target] = "workspace:*";
        continue;
      }
      if (spec.startsWith("node:") || spec.startsWith("bun:")) continue;
      const parts = spec.split("/");
      const name = spec.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
      const v = versions.get(name) ?? KNOWN_VERSIONS[name];
      if (v) deps[name] = v;
    }
  }
  return Object.fromEntries(Object.entries(deps).sort(([a], [b]) => a.localeCompare(b)));
}

function manifest(pkg: string): string {
  return (
    JSON.stringify(
      {
        name: "@anysphere/" + pkg,
        version: "1.0.0-re",
        private: true,
        type: "module",
        description: "Recovered workspace package for @cursor/sdk 1.3.1 (see per-file provenance headers).",
        license: "UNLICENSED",
        exports: {
          ".": "./src/index.ts",
          "./*.js": "./src/*.ts",
          "./*": "./src/*.ts",
        },
        types: "./src/index.ts",
        files: ["src"],
        sideEffects: false,
        dependencies: packageDeps(pkg, modules.filter((m: any) => m.pkg === pkg)),
      },
      null,
      2,
    ) + "\n"
  );
}

function tsconfig(pkg: string): string {
  return (
    JSON.stringify(
      {
        compilerOptions: {
          target: "ES2023",
          module: "ESNext",
          moduleResolution: "bundler",
          types: ["node"],
          lib: ["ES2023"],
          strict: false,
          noImplicitAny: false,
          strictNullChecks: false,
          strictPropertyInitialization: false,
          noEmit: true,
          skipLibCheck: true,
          resolveJsonModule: true,
          allowSyntheticDefaultImports: true,
          esModuleInterop: true,
          forceConsistentCasingInFileNames: true,
          paths: pathsMap(),
        },
        include: ["src/**/*.ts", "src/**/*.d.ts"],
      },
      null,
      2,
    ) + "\n"
  );
}

function resolveExists(spec: string): boolean {
  if (spec.startsWith("node:")) return NODE_BUILTINS.has(spec.slice(5));
  const parts = spec.split("/");
  const name = spec.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
  return existsSync(join(ROOT, "node_modules", name)) || existsSync(join(ROOT, "node_modules", name, "package.json"));
}

function barrelName(p: string): string {
  return "m_" + p.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function writeBarrel(pkg: string, mods: any[]): void {
  const indexPath = join(ROOT, "packages", pkg, "src", "index.ts");
  if (existsSync(indexPath)) return;
  const lines = [
    "// @recovered-by cursor-re",
    "// purpose: generated package barrel (namespace re-exports; recovered modules keep their artifact names)",
    "// basis: webpack-key",
    "// confidence: A (structural barrel only; no recovered logic)",
    "// method: generated-barrel",
    "// run: w1-sdk-runtime " + new Date().toISOString(),
    "",
  ];
  const seen = new Set<string>();
  for (const m of mods.sort((a, b) => a.sub.localeCompare(b.sub))) {
    let n = barrelName(m.sub);
    while (seen.has(n)) n += "_";
    seen.add(n);
    lines.push('export * as ' + n + ' from "./' + m.sub + '";');
  }
  writeFileSync(indexPath, lines.join("\n") + "\n");
}

function main(): void {
  const shims = new Map<string, Set<string>>();
  for (const pkg of OWNED) {
    const mods = modules.filter((m: any) => m.pkg === pkg);
    if (!mods.length) continue;
    const dir = join(ROOT, "packages", pkg);
    mkdirSync(join(dir, "src"), { recursive: true });
    writeFileSync(join(dir, "package.json"), manifest(pkg));
    writeFileSync(join(dir, "tsconfig.json"), tsconfig(pkg));
    for (const m of mods) {
      for (const imp of m.imports ?? []) {
        if (imp.kind !== "external") continue;
        if (imp.spec.startsWith("node:") || resolveExists(imp.spec)) continue;
        const set = shims.get(pkg) ?? new Set<string>();
        set.add(imp.spec);
        shims.set(pkg, set);
      }
    }
    writeBarrel(pkg, mods);
  }
  for (const [pkg, specs] of shims) {
    const lines = [
      "// @recovered-by cursor-re",
      "// purpose: ambient type shim for external modules that are NOT installed in this offline workspace.",
      "// basis: typed-shim (declarations only; not recovered code)",
      "// confidence: n/a",
      "// method: typed-shim",
      "// run: w1-sdk-runtime " + new Date().toISOString(),
      "// note: replace with real dependencies via workspace-deps.json when network/install is available.",
      "",
      ...[...specs].sort().map((s) => 'declare module "' + s + '";'),
    ];
    writeFileSync(join(ROOT, "packages", pkg, "src", "externals.d.ts"), lines.join("\n") + "\n");
  }
  const summary = {
    generatedAt: new Date().toISOString(),
    packages: Object.fromEntries(
      OWNED.map((p) => {
        const mods = modules.filter((m: any) => m.pkg === p);
        return [
          p,
          {
            modules: mods.length,
            generated: mods.filter((m: any) => m.generated).length,
            indexGenerated: !mods.some((m: any) => m.sub === "index"),
            shims: [...(shims.get(p) ?? [])].sort(),
          },
        ];
      }),
    ),
  };
  writeFileSync(join(ROOT, RUNS, "packages-summary.json"), JSON.stringify(summary, null, 2) + "\n");
  console.log(JSON.stringify(summary.packages));
}

main();
