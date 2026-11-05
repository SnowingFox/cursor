# Recovered Cursor engineering files (work in progress)

This tree is generated from the shipped Cursor 3.24.18 bundles. It is NOT the original
TypeScript source: there are no sourcemaps in the app, so comments, original types,
tests and symbol names are gone. Every file carries a provenance header with the
artifact path, sha256, module basename, character range, basis, confidence and method.

## Confidence

- A: adopted/published source (e.g. cursor-computer-use assets) or an exact upstream file.
- B: artifact module boundary plus verifiable exports/imports/strings.
- C: name/cluster inference or fragment boundaries; directory layout is a guess.

## Current layout

| Path | What it is |
|---|---|
| app/glass/composer | P0 Composer/Transcript/Tool-call/Markdown module fragments (281) |
| app/glass/agent | P1 Agent platform fragments (87) |
| app/glass/platform | P2 Auth/Billing/Usage/Model/Settings fragments (131) |
| app/glass/ui | P3 UI component fragments (678) |
| extensions/ | cursor-computer-use adopted sources + split extension bundles (W1/W2) |
| vscode/ | upstream mapping materialization (on demand) |

Fragments may start or end mid-declaration because esbuild emits chained variable
wrappers and hoisted declarations. Treat them as byte-faithful evidence, not buildable
modules.

Regenerate:

    bun run recover:inventory
    bun run recover:verify --split
    bun scripts/recover/emit/cluster.ts --cluster p0-composer --out recovered/app/glass/composer

Rename maps must go through scripts/recover/rename/apply-map.ts, which refuses to write
unless AST equivalence holds (rename-only changes).

Cursor code is proprietary. Keep this tree local; do not redistribute.
