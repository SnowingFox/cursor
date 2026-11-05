# W2 glass-composer (P0 Composer/Transcript/Tool-call/Markdown)

Owner: subagent p0-composer
Owned paths: recovered/app/glass/p0-composer/**, scripts/recover/glass/p0-composer/**, docs/recovery/runs/p0-composer/**
Cluster file: recovery/clusters/p0-composer.json (see docs/recovery/INVENTORY.md for counts).

Read first: docs/recovery/PLAN.md, TRACE.md, CONVENTIONS.md, INVENTORY.md, this file, recovery/clusters/p0-composer.json, recovery/mappings/basename-index.json.

## Context

The glass bundle is an esbuild ESM bundle. Each module wrapper has its original basename (e.g. ComposerActionNotification.js). A module slice from recovery/inventory/bundles.json may start mid-declaration and may include declarations hoisted outside the wrapper; treat slices as byte-faithful fragments, not standalone modules. Cursor UI examples: ComposerActionNotification.js, ComposerAgentToolTranscriptRow.react.js, Markdown renderers, tool-call rows.

## Work

1. Emit the cluster with provenance:
   bun scripts/recover/emit/cluster.ts --cluster p0-composer --out recovered/app/glass/p0-composer --basis inferred --confidence C
   (You may instead use scripts/recover/slice.ts or emit/module.ts for individual modules.)
2. For each module, build metadata: module id, basename, byte/char range, wrapper init symbol if visible, referenced deps, top-level declarations, export guesses, candidate original path from recovery/mappings/basename-index.json (exact only when the basename is unique; otherwise inferred). Write recovery/mappings/p0-composer.json with one record per module: id, basename, path (or null), pathBasis, confidence, notes.
3. Improve readability without inventing behavior:
   - Preserve exported names, component names implied by the basename, displayName/string anchors, command and setting ids, and error names.
   - Rename mangled top-level locals/functions only with evidence, via a rename map JSON + scripts/recover/rename/apply-map.ts (it refuses to write unless AST equivalence holds). Keep a map file per module or per batch under scripts/recover/glass/p0-composer/maps/.
   - Add a short provenance comment block with declared dependencies and the reason for each confidence level. Do not rewrite statements, control flow, or literals.
4. Organize output into an inferred directory tree inside recovered/app/glass/p0-composer/ only when the evidence supports a path; otherwise keep flat and record path=null with confidence C. Never claim an inferred path is exact.
5. Write a coverage report: total cluster modules; modules emitted; modules renamed; modules with candidate exact paths; modules blocked and why.
6. Verification: every emitted source file has a provenance header; every applied rename map reports AST equivalent; no app/ edits. Run bun scripts/recover/audit.ts and report its output.

## Acceptance

- All cluster modules are represented (emitted or explicitly blocked with reason).
- Every output file carries provenance and a confidence no stronger than the evidence.
- Rename maps applied only through apply-map.ts and all AST-equivalence checks pass.
- recovery/mappings/p0-composer.json exists and matches the emitted files.
- docs/recovery/runs/p0-composer/TRACE.md and REPORT.md written.

## Do not

- Do not edit app/, packages/, root manifests, .vendor/, other agents' output, or scripts/recover/lib|inventory|verify.ts.
- Do not invent source paths, APIs, statements, or comments that claim intent.
- No network, no git commit.
