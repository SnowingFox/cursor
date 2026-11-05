# W2 glass-agent (P1 Agent platform)

Owner: subagent p1-agent
Owned paths: recovered/app/glass/p1-agent/**, scripts/recover/glass/p1-agent/**, docs/recovery/runs/p1-agent/**
Cluster file: recovery/clusters/p1-agent.json (see docs/recovery/INVENTORY.md for counts).

Read first: docs/recovery/PLAN.md, TRACE.md, CONVENTIONS.md, INVENTORY.md, this file, recovery/clusters/p1-agent.json, recovery/mappings/basename-index.json.

## Context

The glass bundle is an esbuild ESM bundle. Each module wrapper has its original basename (e.g. ComposerActionNotification.js). A module slice from recovery/inventory/bundles.json may start mid-declaration and may include declarations hoisted outside the wrapper; treat slices as byte-faithful fragments, not standalone modules. Cursor UI examples: BackgroundComposer*, Subagent*, Canvas*, Plan*, Mcp*, Browser/Cloud/Worktree components.

## Work

1. Emit the cluster with provenance:
   bun scripts/recover/emit/cluster.ts --cluster p1-agent --out recovered/app/glass/p1-agent --basis inferred --confidence C
   (You may instead use scripts/recover/slice.ts or emit/module.ts for individual modules.)
2. For each module, build metadata: module id, basename, byte/char range, wrapper init symbol if visible, referenced deps, top-level declarations, export guesses, candidate original path from recovery/mappings/basename-index.json (exact only when the basename is unique; otherwise inferred). Write recovery/mappings/p1-agent.json with one record per module: id, basename, path (or null), pathBasis, confidence, notes.
3. Improve readability without inventing behavior:
   - Preserve exported names, component names implied by the basename, displayName/string anchors, command and setting ids, and error names.
   - Rename mangled top-level locals/functions only with evidence, via a rename map JSON + scripts/recover/rename/apply-map.ts (it refuses to write unless AST equivalence holds). Keep a map file per module or per batch under scripts/recover/glass/p1-agent/maps/.
   - Add a short provenance comment block with declared dependencies and the reason for each confidence level. Do not rewrite statements, control flow, or literals.
4. Organize output into an inferred directory tree inside recovered/app/glass/p1-agent/ only when the evidence supports a path; otherwise keep flat and record path=null with confidence C. Never claim an inferred path is exact.
5. Write a coverage report: total cluster modules; modules emitted; modules renamed; modules with candidate exact paths; modules blocked and why.
6. Verification: every emitted source file has a provenance header; every applied rename map reports AST equivalent; no app/ edits. Run bun scripts/recover/audit.ts and report its output.

## Acceptance

- All cluster modules are represented (emitted or explicitly blocked with reason).
- Every output file carries provenance and a confidence no stronger than the evidence.
- Rename maps applied only through apply-map.ts and all AST-equivalence checks pass.
- recovery/mappings/p1-agent.json exists and matches the emitted files.
- docs/recovery/runs/p1-agent/TRACE.md and REPORT.md written.

## Do not

- Do not edit app/, packages/, root manifests, .vendor/, other agents' output, or scripts/recover/lib|inventory|verify.ts.
- Do not invent source paths, APIs, statements, or comments that claim intent.
- No network, no git commit.
