# ext-p0 REPORT

Task: W1-4 ext-p0 (owner: subagent ext-p0). Owned paths: recovered/extensions/**,
scripts/recover/extensions/**, docs/recovery/runs/ext-p0/**. No app/, packages/,
.vendor/ or root-manifest edits; no network; no git commit.

## 1. Output inventory (per extension)

| Extension | Adopted (A) | Recovered split modules (C/B) | Vendored | Unresolved / skipped |
|---|---|---|---|---|
| cursor-computer-use | 64 src files + 3 configs | 219 modules / 5 webpack artifacts | 0 | 12 stubs (workspace/npm deps); 5 esbuild/worker files |
| cursor-agent-exec | 1 config (package.json) | 1319 modules / 20 artifacts | 0 | 18 no-module-map files (canvas/diff workers, localMode.js, agent-sdk asset) |
| cursor-agent-host | 3 configs | 1703 modules / 39 artifacts | 0 | 20 no-module-map files (canvas, diff workers, agent-host-daemon) |
| cursor-local-agent-runtime | 1 config | 1238 modules / 20 artifacts | 0 | 16 no-module-map files |
| cursor-resolver | 3 configs | 49 modules / 1 artifact | 0 | browser/main.js (esbuild) |
| cursor-mcp | 2 configs | 433 modules / 1 artifact | 0 | none |
| cursor-always-local, cursor-commits, cursor-retrieval, cursor-socket, cursor-checkout, cursor-polyfills-remote | 19 configs (see CONFIGS.json) | not split (not prioritized) | 0 | bundle splitting out of scope for this wave |

Total: 86 webpack artifacts split, 4961 modules emitted, 100% reassembly ok.
Numeric module ids carry confidence C (no path evidence); quoted keys would be
B, but no processed bundle uses them (stringKeys = 0).

## 2. computer-use adoption

- recovered/extensions/cursor-computer-use/src: 64 files, paths preserved.
  Text files carry the CONVENTIONS header (method adopted-source, confidence A,
  artifact + sha256). JSON fixtures are byte-identical; provenance is in
  MANIFEST.json (67/67 sha256 checks pass).
- upstream/ keeps byte-identical copies of tsconfig.json, vitest.config.ts and
  extension.webpack.config.js for comparison.
- package.json adapted (private, scripts typecheck / test:local);
  tsconfig.json adapted: upstream extends ../tsconfig.base.json and maps
  ../../src/proto, ../../src/external/bufbuild, ../../packages/vs-base/src,
  ../../src/vscode-dts. Those trees are absent, so they map to stubs/.
  TS 7 removed baseUrl: paths are ./-relative.
- Stubs (TODO(stub), any-typed, names taken from the shipped imports only):
  @anysphere/computer-use/protocol (52 names), @anysphere/context (12 imports),
  @anysphere/utils{,/image-resize,/jimp-minimal}, @cursor/types,
  @jsquash/webp (5 subpaths), proto/aiserver/v1/{aiserver_connectweb,aiserver_pb},
  vscode, yauzl, @connectrpc/connect(-node), cursor-product-profile.json.
  zod is NOT stubbed: aliased read-only to app/node_modules/zod (tracked by git)
  so z.infer/z.enum type-check against the real library.
- stubs/README.md documents the consequences (runtime behaviour unknown).

## 3. Verification (exact commands and actual output)

    $ bunx tsc -p recovered/extensions/cursor-computer-use/tsconfig.json --noEmit
    36 error lines, 5 files:
      - src/mcp/tools.ts: 31 errors. The installed zod is 4.3.6; the sources use
        the zod 3 API (z.ZodTypeDef no longer exists, refinement input types
        differ). Not a missing-source problem; a pinned-dependency mismatch.
      - src/backendClient.ts:1 TS2532 (this.aiClient possibly undefined; strict
        null cannot prove the preceding branch initialises it; upstream
        tsconfig.base.json is unshipped so the original strictness is unknown).
      - src/backends/common/rpc-connection.ts:1 and
        src/backends/mac/sidecar-client.ts:3 (TS2345/TS2339): @types/node 26
        types socket "data" chunks as string | NonSharedBuffer, so
        indexOf(0x0a)/subarray/Buffer.concat narrow incorrectly. Node/runtime
        behaviour is unchanged; this is a newer-@types diagnostic.
    -> 56 of 61 .ts files have zero diagnostics. No source file was edited to
       satisfy the compiler; no API was invented.

    $ bunx vitest run --config recovered/extensions/cursor-computer-use/vitest.local.config.ts
    ✓ src/mcp/mac-mode.test.ts (5 tests)
    ✓ src/backends/common/sidecar-install-lock.test.ts (17 tests)
    Test Files 2 passed (2) | Tests 22 passed (22)

    $ bun scripts/recover/extensions/split.ts
    cursor-computer-use: 5 artifacts, 219 modules, reassembly ok
    cursor-agent-exec: 20 artifacts, 1319 modules, reassembly ok
    cursor-agent-host: 39 artifacts, 1703 modules, reassembly ok
    cursor-local-agent-runtime: 20 artifacts, 1238 modules, reassembly ok
    cursor-resolver: 1 artifact, 49 modules, reassembly ok
    cursor-mcp: 1 artifact, 433 modules, reassembly ok

    $ bun scripts/recover/extensions/adopt.ts
    adopted 67 files, wrote 12 stubs

    $ bun scripts/recover/extensions/adopt-configs.ts
    11 extensions, 29 config files adopted (see per-extension CONFIGS.json)

Only the stub-free subset of the suite was run: the rest needs the unshipped
workspace packages at runtime (protocol validation, context/logging helpers,
image resize, jsquash). Running them against stubs would produce false
failures, so it was not attempted.

## 4. Splitter design and limits

scripts/recover/extensions/webpack.ts is a line-shape parser, not a JS parser:
it recognises webpack's pretty-printed entry boundaries, cross-checks duplicate
ids/separators, and refuses malformed maps. split.ts emits prelude, per-module
entry, separators (in MODULES.json) and footer; verify reassembles those parts
from disk and compares sha256. This proves the emitted files are a lossless
partition of each artifact, not that numeric ids identify original files.
webcrack was NOT used (isolated-vm native build unavailable).

## 5. Unresolved / risks / discrepancies

- Original module paths: unrecoverable for numeric ids (confidence C). Chunk
  and entry association is recorded in MODULES.json per artifact.
- Inventory mismatch: recovery/inventory/extensions.json reports 1617
  (agent-exec) / 2682 (agent-host) webpackModules, our validated counts are
  1319 / 1703. The inventory number appears to count "id: (" occurrences inside
  module bodies; ours counts validated top-level entries (reassembly-checked).
  Main thread should reconcile before the M1 gate.
- esbuild worker bundles (canvas-runtime*.esm.js, diff-worker,
  diff-patch-worker, unified-diff-worker, resolver browser/main.js, agent-sdk
  assets) remain unsplit; they belong to the app esbuild pipeline.
- agent-host-daemon files and cursor-agent-exec localMode.js are not webpack
  modules (native/local-mode artifacts).
- computer-use runtime behaviour cannot be validated without the sidecar
  binaries and the unshipped packages; only typecheck + stub-free tests ran.
- No .map files exist; comments/types in split bundles are unrecoverable.

## 6. Handoff

Regenerate everything with:
    bun scripts/recover/extensions/split.ts
    bun scripts/recover/extensions/adopt.ts
    bun scripts/recover/extensions/adopt-configs.ts
    bunx tsc -p recovered/extensions/cursor-computer-use/tsconfig.json --noEmit
    bunx vitest run --config recovered/extensions/cursor-computer-use/vitest.local.config.ts

Suggested main-thread wiring (root package.json is main-owned):
    "recover:ext:split": "bun scripts/recover/extensions/split.ts"
    "recover:ext:adopt": "bun scripts/recover/extensions/adopt.ts"
    "recover:ext:configs": "bun scripts/recover/extensions/adopt-configs.ts"

Next wave candidates: (a) esbuild worker bundle split for canvas-runtime and
diff workers; (b) adopt remaining cursor-* configs/schemas; (c) reconcile
inventory counts; (d) if a zod 3 copy is added to .vendor, re-run computer-use
typecheck to clear the 31 tool errors; (e) export-name extraction from
__webpack_require__.d tables to raise split modules to confidence B.
