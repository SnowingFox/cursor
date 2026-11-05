# sdk-core TRACE (W1-1)

Artifact: `.vendor/cursor-sdk-1.3.1` sha256 `30d4aa44...ff9b6`
Repo: /Users/bytedance/dev/cursor · Bun 1.4.2 · tsc 7.0.2 · vitest 5.0.5
No network used.

## 1. Evidence gathering

```
find .vendor/cursor-sdk-1.3.1/dist -name '*.d.ts' | wc -l        -> 190 (94 in dist/esm)
declaration-map sources normalized                               -> 80 unique src/ paths
grep webpack module keys (esm/*.js)                              -> 757 module records
own-source (./src/**) module keys                                -> 40
sibling keys (../proto, ../cursor-sdk-shared, ../utils, ...)     -> 139 first-party-ish
```

Inventory produced by `scripts/recover/sdk/extract.ts`:
- `recovery/sdk/modules.json` — 757 records: chunk, key, body byte range, export alias table.
- `recovery/sdk/raw/**` — raw module bodies for ./src and selected sibling keys (headers carry range + sha).

Key discovery: the entry chunk `index.js` is a webpack module map (`V={...}`) plus an
85 KB inline entry block; chunk files export `__webpack_esm_modules__`.
Public runtime export names are in the entry tail as `export const Name = NS.alias`,
which yields the authoritative alias->public-name map used for renaming.

## 2. Commands and results

```
bun scripts/recover/sdk/extract.ts
  -> chunks scanned: 25 records: 757 own-source keys: 40

bun scripts/recover/sdk/convert.ts
  -> targets: 34 written: 34 failed: 0

bun scripts/recover/sdk/gen-types.ts
  -> api-types written: 94 rewrites: 1 (bare "vendor/..." d.ts import)

bun scripts/recover/sdk/gen-index.ts
  -> value exports: 65 type statements: 18
  -> skipped unrecovered values: 31

bunx tsc -p packages/cursor-sdk/tsconfig.json --noEmit
  -> exit 0

bun packages/cursor-sdk/build.ts
  -> tsc declaration emit; bun build esm/cjs/bundled -> dist/ (1.6 MB)

bunx vitest run --config packages/cursor-sdk/vitest.config.ts
  -> 5 files / 16 tests passed
  -> parity: vendor 96, rebuilt 65, present 65 (67.7%),
     kindMismatch 0, protoMismatch 0, errorMismatch 0, sqliteMissing 1

bun -e 'import("./packages/cursor-sdk/dist/esm/index.js")' (NODE_PATH=app/node_modules)
  -> dist esm exports: 65 sqlite exports: 0

bun run sdk:verify
  -> ok (all four stages exit 0)
```

## 3. Conversion method

For each selected webpack module the converter:
1. re-parses the chunk with @babel/parser and finds the module method by its original key;
2. removes the `require.d(exports,{...})` / `require.r(exports)` wrapper statements;
3. rewrites pure require declarations into ESM namespace imports (`node:*` kept,
   `./src/**` mapped to the mirrored src path, sibling packages mapped to src/vendor/**);
4. fails closed (module skipped, listed as TODO) if any require call or webpack runtime
   reference remains — no stubs are emitted;
5. appends `export { local as alias, local as PublicName }`, where PublicName comes from
   the entry export table (d.ts is the type authority).
Body statements are byte-identical to the artifact; internal identifiers stay minified,
so files carry `// @ts-nocheck` and their typed surface lives in `src/api-types/**`.

Vendored sibling modules (kept inside the package until @anysphere/* packages are wired):
proto aiserver utils_pb + runtime/compact, cursor-sdk-shared message-schemas +
tool-call-types, utils workspace-paths + fresh-uuid, brace-expansion.

`./src/agent/local-executor.ts` boundary check: AST body range 1,127,747 bytes in
305.js; the raw body contains no nested module-key definitions (`"./src/..."(` count 0),
so the boundary is structural, not a swallowed remainder of the chunk. It is genuinely
one very large module (inlined runtime/wasm payload) and was left TODO.

## 4. Type surface

`src/api-types/**` is the published dist/esm declaration tree copied verbatim (94 files)
with provenance headers, sourceMappingURL stripped, and the single invalid bare
`vendor/cursor-sdk-shared/core-adapter.js` import redirected to an ambient shim.
`src/index.ts` is generated from `index.d.ts`: type-only exports point at api-types;
value exports are emitted only for names present in `recovery/sdk/implemented.json`.
Unrecovered value names are omitted rather than stubbed.

## 5. Deviations / notes

- Declarations are emitted only to `dist/esm` (package.json `types` points there).
- `tsconfig.build.json` clears workspace `paths` so declaration emit stays under
  `rootDir` (otherwise sibling sources from @anysphere/* are pulled in).
- Offline dependency resolution for tests uses the published externals already present
  in the checked-in `app/node_modules` via vitest aliases; `bun install` is main-owned.
- All 131 emitted .ts files under packages/cursor-sdk/src have provenance headers.
