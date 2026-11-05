# Recovery Conventions

These rules are binding for the main thread and every subagent.

## Stack

- Bun for package management, script execution and builds.
- TypeScript for every new tool and every recovered package source. Do not add .mjs scripts.
- Electron 42.10.0 remains the app shell; never change the app runtime to load recovered trees.
- Tests use the existing vitest setup unless a task explicitly says otherwise.

## Ownership

- Only the main thread edits: root package.json, bun.lock, tsconfig.json, biome.json, .gitignore, docs/recovery/README.md, PLAN.md, TRACE.md, CONVENTIONS.md, STATUS.md, INVENTORY.md, RESULTS.md, recovery/inventory/**, recovery/manifest.json, scripts/recover/lib/**, scripts/recover/verify.ts.
- Worker tool scripts live under scripts/recover/{sdk,sdk-runtime,extensions,vscode,glass}/ and are excluded from the root tsc/biome gates; each has its own verification commands. Main-owned recovery tools (lib, inventory, mappings, emit, rename, verify, audit, report) are covered by the root typecheck.
- Each subagent writes only its owned paths, declared in its TASKS file and prompt.
- Never edit app/ bundles. Never edit another agent's output or trace.
- No git commit, no git tag, no push.

## Provenance header

Every emitted source file starts with:

    // @recovered-by cursor-re
    // artifact: <relative path> sha256:<artifact sha256>
    // module: <basename> range:<start>..<end>
    // basis: <nls-exact|upstream-exact|basename-unique|import-cluster|dts-map|webpack-key|inferred>
    // confidence: <A|B|C>
    // method: <split|split+rename|upstream-copy|adopted-source|vendored|generated>
    // run: <task-id> <ISO timestamp>

Upstream files copied verbatim use upstream-copy and record the upstream blob sha256 plus the MIT license notice.

## Confidence

- A: published/adopted source (cursor-computer-use src), exact upstream file, or exact .d.ts.
- B: artifact module boundary plus verifiable exports/imports/strings.
- C: name/cluster inference only; cannot prove boundary or path.

Accepted basis values: nls-exact, upstream-exact, basename-unique, import-cluster, dts-map, webpack-key, webpack-id, webpack-container, esbuild-wrapper, adopted-source, shipped-source, shipped-config, vendored, generated, stub, inferred. Composite values joined by " + " are accepted. A combined header line of the form "basis: <value> confidence: <A|B|C>" is accepted in addition to separate lines; the audit normalizes both.

Accepted method values include split, split+rename, split+rewire, upstream-copy, adopted-source, adopted-config, shipped-config, generated-barrel, vendored, generated, stub. Stub/vendored/generated/config/generated-barrel files may omit the artifact field but must explain the source in the module line. Authored tests and *.config.ts are exempt from provenance. Files materialized from upstream under recovered/vscode/src are verified by materialize-manifest.json and LICENSE rather than per-file headers.

The confidence must reflect the weakest claim in the file. Files with guessed directory structure are at most C even if the code body is exact.

## Naming and renaming

- Export names, class names in .d.ts, React component names derived from basenames, displayName strings, command ids, setting ids, and error names are preserved.
- Deterministic pass first; LLM rename maps second. A rename map is JSON: moduleId, renames (oldName to newName), notes.
- Renames must be scope-aware and collision-free. A rename may not change statement structure, control flow, literals, or evaluation order.
- apply-map must prove AST equivalence: parse before and after, normalize identifiers per map, compare structural hashes. Any mismatch rejects the file.
- Comments may be added only as provenance or TODO(recovered) notes; never invent intent.

## Paths and trees

- Exact paths come from nls.keys.json, upstream matching, d.ts maps or webpack keys.
- Everything else is inferred by import clustering and naming. Record basis and confidence in recovery/mappings/tree.json.
- Directory names must follow Cursor/VS Code conventions where evidence exists (src/vs/workbench/contrib/<feature>/browser, src/vs/glass/browser, etc.). Do not silently normalize a Cursor module into a VS Code path.

## Artifacts and network

- Only .vendor/ artifacts pinned by the main thread: @cursor/sdk 1.3.1 (sha256 30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6) and VS Code 1.128.0 (commit fc3def6774c76082adf699d366f31a557ce5573f).
- Subagents do not use the network. If an artifact is missing, report it; do not fetch.
- Never modify .vendor/ and never re-download a different version.

## Verification

Every task must run and report:

    bun run recover:verify --split
    bun run sdk:verify (SDK tasks)
    bunx tsc -p <package>/tsconfig.json --noEmit (when a package exists)
    bunx vitest run <scoped tests>

Split-only artifacts must reassemble byte-for-byte (sha256 equal). Renamed artifacts must pass AST equivalence. P0 files must have provenance headers and be listed in the task REPORT.

## Traces and reports

- Each agent appends commands, results and decisions to docs/recovery/runs/<task-id>/TRACE.md.
- Each agent writes docs/recovery/runs/<task-id>/REPORT.md with: completed/incomplete items, output inventory with confidence, exact verification commands and outputs, unknowns, handoff notes.
- Return at most 30 lines to the parent; put details in REPORT.md.
- Never rewrite another agent's trace.

## Safety

- No secrets, tokens or user data in recovered files, logs or reports.
- Recovered Cursor code stays local. Do not publish, upload or redistribute.
- Do not run the Cursor app against real accounts during recovery tasks.
