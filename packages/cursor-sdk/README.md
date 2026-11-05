# @cursor/sdk (recovered 1.3.1-re)

Private, local-only TypeScript reconstruction of the published
`@cursor/sdk@1.3.1` artifact, produced by the cursor-re recovery pipeline.
Do not publish or redistribute.

## What this package is

- **Types are authoritative and verbatim.** `src/api-types/**` mirrors all 94
  published `.d.ts` files (80 unique source paths) with provenance headers.
  `src/index.ts` re-exports them; it is generated from the published
  `index.d.ts` plus `recovery/sdk/implemented.json`.
- **Runtime values are recovered from the published ESM.** 27 first-party
  modules were split out of the webpack module maps in
  `.vendor/cursor-sdk-1.3.1/dist/esm/*.js` (`recovery/sdk/raw/`). Their
  bodies are copied verbatim; only the webpack `require`/`export` wrappers
  were rewritten. Internal identifiers remain minified (deterministic rename
  is a later pass), so these files carry `// @ts-nocheck`; their typed public
  surface is the declaration tree.
- **7 sibling-package modules are vendored** under `src/vendor/`
  (@anysphere/proto utils, proto runtime, cursor-sdk-shared schemas,
  utils paths/uuid, brace-expansion) because the published package bundles
  them. The standalone @anysphere/* workspace packages now exist; a later wave
  can redirect these imports.
- **Unrecovered modules are not faked.** 13 first-party modules and 31 runtime
  exports (including `Agent`, `Cursor`, `CursorAgentPlatform`, SQLite/local
  stores, notifiers, `createFileSystemTools`) are explicitly absent and listed
  in `docs/recovery/runs/sdk-core/REPORT.md` and `recovery/sdk/status.json`.

## Layout

    src/index.ts              public entry (generated type + value re-exports)
    src/sqlite.ts             ./sqlite subpath (TODO(recovered) — no exports yet)
    src/agent/**              recovered first-party implementation (27 files)
    src/vendor/**             vendored sibling-package modules (7 files)
    src/api-types/**          verbatim published declaration tree (94 files)
    src/shims/external.d.ts   ambient shims for offline-unavailable dependencies
    build.ts                  tsc declarations + bun build (esm/cjs/bundled)
    test/                     parity, unit, smoke tests

## Commands

    bun run sdk:verify        # tsc + build + vitest + dist import smoke
    bun run sdk:build         # bun packages/cursor-sdk/build.ts
    bunx tsc -p packages/cursor-sdk/tsconfig.json --noEmit
    bunx vitest run --config packages/cursor-sdk/vitest.config.ts

Dependencies are the published manifest's (pinned) plus the ten recovered
`@anysphere/*` workspace packages. They are not installed in this offline run;
tests resolve the published externals from the checked-in `app/node_modules`
via `vitest.config.ts`, and the dist import smoke uses `NODE_PATH`.
A normal `bun install` (main thread) removes that crutch.

## Provenance

Every emitted file starts with `// @recovered-by cursor-re` and records
artifact, sha256, module range, basis, confidence, method and run id. See
`NOTICE.md`, `docs/recovery/runs/sdk-core/TRACE.md` and `REPORT.md`.
