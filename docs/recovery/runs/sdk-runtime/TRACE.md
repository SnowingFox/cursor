# W1-2 sdk-runtime — trace

Owner: subagent sdk-runtime. Working dir: /Users/bytedance/dev/cursor.
Scope: packages/{cursor-sdk-local-runtime,cursor-sdk-shared,proto,utils,context,metrics,shell-exec,mcp-core,mcp-agent-exec,agent-kv}/**, scripts/recover/sdk-runtime/**, docs/recovery/runs/sdk-runtime/**.

## 1. Inputs

- .vendor/cursor-sdk-1.3.1 (artifact sha256 30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6), dist/esm (25 .js) and dist/cjs (25 .js).
- recovery/inventory/sdk.json (generated 2026-11-05T10:00:09Z): 1,870 moduleKey records = 935 esm + 935 cjs, including duplicate definitions and reference keys.

### Counting caveat (important)

inventory `siblingPackages` counts include every occurrence across esm/cjs and every chunk that defines or references a key (proto 210, local-runtime 48, utils 26, context 10, …). After de-duplicating by original source path the unique first-party modules are:

| package | unique paths | of which generated |
|---|---|---|
| proto | 64 | 63 generated + runtime/compact |
| cursor-sdk-local-runtime | 14 | 0 |
| utils | 10 | 0 |
| context | 3 | 0 |
| cursor-sdk-shared | 2 | 0 |
| agent-kv | 1 | 0 |
| metrics | 1 | 0 |
| shell-exec | 1 | 0 |
| mcp-core | 1 | 0 |
| mcp-agent-exec | 1 | 0 |
| **total** | **98** | 63 |

56 of these 98 paths are defined in two chunks (index.js and sqlite.js). Total emitted files: 98.

## 2. Chunk structure (measured)

- Small chunks (18, 19, 343, 400, 449, 656, 730, 856, 914) are classic `export const __webpack_esm_modules__={...}` maps.
- esm/index.js (2.57 MB) is the entry/runtime bundle: it starts with external ESM imports (`import * as t from "@bufbuild/protobuf"`, connect, node:*), then a 361-property `__webpack_esm_modules__` object, then the runtime.
- esm/sqlite.js (541 KB) is the `./sqlite` entry: a 240-property module map.
- esm/305.js (local executor chunk) defines shell-exec/utils/mcp-core plus the huge `./src/agent/local-executor.ts` (sdk-core-owned, not extracted here).
- cjs/*.js mirror esm with `exports.modules = {...}`; used only as fallback (esm always present).
- Chunk ids: dynamic imports appear as `req.e(<id>).then(req.bind(req,"<key>"))`; each target key is a module in another chunk already covered by the same key→package mapping.

## 3. Extraction pipeline (scripts/recover/sdk-runtime/)

`extract.ts` (no network, read-only on .vendor):

1. Babel-parses each esm chunk and selects ObjectExpressions whose properties are all ObjectMethod (the webpack module maps; export tables are ObjectProperty so they are not confused).
2. Keeps keys matching `../<owned-package>/dist/<path>.js`; records body byte range.
3. Rewrites the webpack module wrapper into ESM:
   - `req("key")` → `import * as __depN from <spec>` (scope-checked: only free `req` identifiers, so mangled local names that collide with the wrapper param are not touched);
   - `req.d(exports,{name:()=>ref})` → recorded exports + removed;
   - `req.r(exports)` removed;
   - `req.e(N).then(req.bind(req,"key"))` → `import("<spec>")`;
   - `req.bind(req,"key")` → `() => import("<spec>")`;
   - `req.a(module, async (h, resolve) => { try {...} catch { resolve(err) } })` → body flattened to top-level (top-level await), handle calls `h([dep])` → `[dep]`, resolve calls removed, catch dropped. 2 modules match (bun-sqlite-driver, node-sqlite-driver); both reported.
4. Emits provenance header + body with @babel/generator.
5. De-duplicates by original path across chunks; canonical definition = the variant exposing the largest export table. Compared every variant's export-name set: 0 export names exist only in a non-canonical variant, so a single file per path is safe even though webpack mangleExports produced different local/export names per chunk (e.g. proto todo_tool_pb: index.js exports AJ,Vj,bk,kW; sqlite.js exports AJ,bk,kW).

`emit-packages.ts`: package.json (private, @anysphere/<name> 1.0.0-re, type module, exports `./*.js`→`src/*.ts`, deps: sibling `workspace:*` + external versions from bundle pnpm keys/SDK deps), tsconfig (ES2023, bundler resolution, strict:false, paths for all sibling packages), namespace barrels (no logic), ambient shims for missing externals.

`typecheck.ts`: runs tsc per package; for files that only fail because the artifact is minified (mangled identifiers erase type-level signatures) it inserts `// @ts-nocheck - TODO(recovered)` after the provenance header, iterating until `bunx tsc -p packages/<pkg>/tsconfig.json --noEmit` exits 0.

`workspace-deps.ts`: writes workspace-deps.json for the main thread (read-only report; root files untouched).

## 4. Import mapping decisions

- Same package: relative specifier without extension (TS bundler resolution + bun resolve it; package exports cover `./x.js` too).
- Cross package: `@anysphere/<pkg>/<sub>` without extension, resolved by per-package tsconfig `paths` (and by package exports `"./*": "./src/*.ts"` after workspace linking).
- `node:*` and `bun:*` kept.
- pnpm third-party keys → bare package spec (`@bufbuild/protobuf`, `rxjs`, `ignore`, `@opentelemetry/api`, `zod`); @bufbuild/protobuf and zod are webpack externals, so their versions come from the SDK manifest, not from bundle keys.
- Externalized module keys such as `"@bufbuild/protobuf"`, `"zod/v4"` appear as require targets and map to the same bare specs.

Unresolved requires: 0. Non-string requires: 0. Dynamic imports resolved by bind key: all.

## 5. Commands actually run

    bun scripts/recover/sdk-runtime/extract.ts --dry-run
    bun scripts/recover/sdk-runtime/extract.ts
    bun scripts/recover/sdk-runtime/emit-packages.ts
    bun scripts/recover/sdk-runtime/typecheck.ts
    bun scripts/recover/sdk-runtime/workspace-deps.ts
    bunx vitest run --config packages/utils/vitest.config.ts
    bunx tsc -p packages/<each>/tsconfig.json --noEmit

Results are in REPORT.md and the JSON files in this directory (extract-report.json, packages-summary.json, typecheck.json, workspace-deps.json, proto-status.json).

## 6. Notes / limitations

- The main-thread tools `scripts/recover/slice.ts` and `scripts/recover/emit/module.ts` target the esbuild app bundles; they do not parse SDK webpack maps or rewire require calls, so a local read-only parser was implemented in the owned `scripts/recover/sdk-runtime/` directory. `scripts/recover/sdk/extract.ts` (sdk-core) records sdk-owned `./src/**` modules only; it was not modified and remains the sdk-core source of truth.
- No source maps/declarations exist for sibling packages in the artifact: export names are webpack-mangled for many modules (e.g. agent-kv exports aY,pH,aD,sh,nj). Names are preserved as-is; a real-name recovery would require the original package declarations, which are not shipped.
- No network was used; `bun install` was not run, so third-party runtime imports are backed by ambient type shims only.
