# W1-1 sdk-core

Owner: subagent sdk-core
Owned paths: packages/cursor-sdk/**, scripts/recover/sdk/**, docs/recovery/runs/sdk-core/**, recovery/sdk/**

Read first: docs/recovery/PLAN.md, TRACE.md, CONVENTIONS.md, this file, recovery/inventory/sdk.json (once generated), .vendor/cursor-sdk-1.3.1/.

## Goal

Turn @cursor/sdk@1.3.1 into a real TypeScript package at packages/cursor-sdk that builds, typechecks, passes export-parity tests against the published artifact, and has green unit/smoke tests. Reconstruct as much implementation as possible from .vendor/cursor-sdk-1.3.1/dist/esm and dist/cjs; use declaration maps as the source-path/type authority.

## Inputs

- .vendor/cursor-sdk-1.3.1/ (already extracted and sha256-verified by main).
- recovery/inventory/sdk.json (module keys, chunk map, d.ts inventory).
- app/extensions/cursor-agent-exec/dist/agent-sdk/ for the optional canvas declarations (do not edit).

## Work

1. Create package skeleton: package.json (name @cursor/sdk, private true, version 1.3.1-re, type module, exports matching published manifest, pinned deps), tsconfig.json, build.ts (tsc declarations + bun build for esm/cjs/bundled), NOTICE, README.
2. Reconstruct the source tree: src/index.ts, src/sqlite.ts, src/agent/**. Use d.ts.map sources for paths and .d.ts for exported types. Keep import specifiers .js as in the package.
3. Extract implementations per module from ESM/CJS webpack chunks. Handle scope-hoisted modules by export-table + symbol clustering. Mark uncertain ownership in recovery/sdk/status.json.
4. Deterministic rename pass first; optional LLM rename map only if you can prove AST equivalence. Never change statements.
5. Write tests: parity.test.ts (dynamic import published vendor vs rebuilt package; compare export names, typeof, class prototype methods, error names, ./sqlite subpath), unit tests (filesystem, stores, messages, errors, notifier), smoke test (platform/store round-trip, no network).
6. Make the SDK scripts work. The main thread owns root package.json; report the exact commands you need. Target command names: sdk:build and sdk:verify.
7. Update recovery/sdk/status.json and write runs/sdk-core/TRACE.md + REPORT.md.

## Acceptance

- bunx tsc -p packages/cursor-sdk/tsconfig.json --noEmit passes.
- sdk:verify passes: build + parity (100% of published exports present, kinds match) + unit + smoke.
- Every src file has a provenance header; vendored/unknown modules are explicitly marked, never faked.
- REPORT.md lists module status counts (raw/tokenized/renamed/typed/verified) and remaining unknowns.

## Do not

- Do not edit .vendor/, app/, root package.json/bun.lock, or sibling packages.
- Do not invent implementations to satisfy parity; use a vendored shim and report it.
- Do not publish anything.
