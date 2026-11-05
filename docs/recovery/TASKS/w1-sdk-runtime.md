# W1-2 sdk-runtime

Owner: subagent sdk-runtime
Owned paths: packages/cursor-sdk-local-runtime/**, packages/cursor-sdk-shared/**, packages/proto/**, packages/utils/**, packages/context/**, packages/metrics/**, packages/shell-exec/**, packages/mcp-core/**, packages/mcp-agent-exec/**, packages/agent-kv/**, scripts/recover/sdk-runtime/**, docs/recovery/runs/sdk-runtime/**

Read first: docs/recovery/PLAN.md, TRACE.md, CONVENTIONS.md, this file, recovery/inventory/sdk.json.

## Goal

Reconstruct the @anysphere/* workspace packages that @cursor/sdk depends on, from the module keys and code embedded in .vendor/cursor-sdk-1.3.1/dist/esm and dist/cjs. These are needed for packages/cursor-sdk to build against workspace sources instead of vendored dist.

## Work

1. From recovery/inventory/sdk.json, group first-party keys by package: ../cursor-sdk-local-runtime/..., ../cursor-sdk-shared/..., ../proto/..., ../utils/..., ../context/..., ../metrics/..., ../shell-exec/..., ../mcp-core/..., ../mcp-agent-exec/..., ../agent-kv/...
2. Create one package per group: package.json (private, @anysphere/<name>, version 1.0.0-re, type module, exports), tsconfig.json, src/ with reconstructed modules mirroring key paths (dist paths become src paths).
3. Keep proto as generated/vendored: do not hand-edit generated protobuf files; record provenance and mark status generated. Provide index re-exports.
4. Extract implementations from webpack modules. Coordinate with sdk-core: prefer scripts/recover/sdk/extract.ts. Do not edit sdk-core files. If the extractor is missing, implement a read-only local parser in scripts/recover/sdk-runtime/ and report the dependency.
5. Report the workspace dependency lines the main thread should wire into packages/cursor-sdk and root package.json; do not edit root files.
6. Add minimal unit tests for pure logic modules where cheap; otherwise rely on sdk-core parity/smoke.
7. Update runs/sdk-runtime/TRACE.md + REPORT.md with per-package module counts and status.

## Acceptance

- Each package has package.json + tsconfig + src tree with provenance headers.
- bunx tsc -p packages/<name>/tsconfig.json --noEmit passes for every package (or documented, minimal vendored exceptions).
- No duplicate module implementations: each source path appears in exactly one package.
- REPORT.md maps every recovered key to its package/file and lists remaining vendored or generated modules.

## Do not

- Do not edit packages/cursor-sdk/, app/, .vendor/, root manifests/lockfile.
- Do not regenerate protobuf from the network; no network at all.
- Do not invent code; use vendored dist shims when extraction is ambiguous and report them.
