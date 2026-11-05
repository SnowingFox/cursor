# W1-4 ext-p0

Owner: subagent ext-p0
Owned paths: recovered/extensions/**, scripts/recover/extensions/**, docs/recovery/runs/ext-p0/**

Read first: docs/recovery/PLAN.md, TRACE.md, CONVENTIONS.md, this file, recovery/inventory/extensions.json.

## Goal

Recover the highest-value Cursor extensions: adopt cursor-computer-use's shipped TypeScript sources, and split/extract cursor-agent-exec, cursor-agent-host, cursor-local-agent-runtime, cursor-resolver, cursor-mcp into per-module sources with provenance.

## Inputs

- app/extensions/cursor-*/ (read-only).
- app/extensions/cursor-computer-use/src/** (adoptable source, 64 files).
- app/extensions/cursor-computer-use/{extension.webpack.config.js,tsconfig.json,vitest.config.ts}.
- app/extensions/cursor-*/dist/** webpack bundles (numeric module ids; chunk files).
- recovery/inventory/extensions.json (module/chunk counts from main).

## Work

1. cursor-computer-use: copy src/** and configs into recovered/extensions/cursor-computer-use/, preserving paths; add provenance headers (adopted-source, confidence A). Add package.json/tsconfig adaptations needed to typecheck locally; missing workspace packages (@anysphere/computer-use/protocol, @cursor/types, proto/*) become explicit stubs or aliases with TODO, never silent.
2. agent-exec/host/local-runtime: parse webpack bundles with webcrack if it preserves semantics; otherwise implement a __webpack_modules__ splitter. Emit recovered/extensions/<name>/src/<module>.js with provenance; module paths are unknown when ids are numeric, so use chunk/entry names and mark confidence C.
3. resolver/mcp: same split; also adopt shipped webpack configs, package.nls.json, schemas, rewrite-bufbuild-loader.js as real engineering files (confidence A for those).
4. Verify: for computer-use run its shipped vitest subset if resolvable; otherwise typecheck the copied sources with the adapted tsconfig and document failures. For bundles, run reassembly check (split parts concatenated equal original chunk) and command-id/export spot checks.
5. Write runs/ext-p0/TRACE.md + REPORT.md with per-extension module counts, adopted vs recovered vs vendored, and unresolved imports.

## Acceptance

- recovered/extensions/cursor-computer-use/src contains the 64 shipped TS files with provenance and a working (or explicitly documented) typecheck/test command.
- For each prioritized extension: a module inventory + per-module recovered files (or a documented reason), provenance headers, reassembly check result.
- Shipped configs/schemas are adopted with A confidence; no app/ edits.
- REPORT.md lists verification commands and outputs.

## Do not

- Do not edit app/, packages/, root manifests, .vendor/, or other agents' outputs.
- Do not invent APIs to satisfy typechecks; add typed stubs and report them.
- Do not execute extension code against real accounts.
