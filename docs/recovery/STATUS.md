# Recovery Status

Last updated: 2026-11-05 (W1 + W2 complete; M4 P0 done; M5 p3-ui backlog)

## Milestones

| Milestone | State | Notes |
|---|---|---|
| M0 context pack + workspaces + artifacts + tool skeleton | done | pinned SDK 1.3.1 + VS Code 1.128.0; docs/trace/tooling |
| M1 split/reassembly | done | 4 bundles byte-for-byte; split files hash-verified; SDK chunk map |
| M2 SDK package build/test/parity | green build, partial parity | tsc/build/16 tests pass; 65/96 exports (67.7%); 31 exports explicitly missing |
| M3 VS Code baseline + extensions P0 | done | 14,450 mapped / 1,648 matched / 1,146 exact / 171 modified / 53 added; 166 patch files; 575 upstream files materialized; extension splits 100% reassembly |
| M4 glass P0 recovered + audit | done | p0 281/281 mapped, 53 files / 70 identifiers renamed; p1 87/87, 9 files / 12 identifiers; p2 131/131, 20 files renamed; audit 0 violations |
| M5 full sweep + report | p3-ui backlog | p3-ui 678 modules + p4-lower 7,531 (mostly deps/utilities) not swept; cross-segment stitching needed for truncated fragments |

## Final verification

| Command | Result |
|---|---|
| bun run typecheck | pass |
| bun run test | 105 tests pass |
| bun run lint | pass |
| bun run sdk:verify | pass: tsc, build, 16 tests, 65 exports |
| bun run recover:verify --split | pass: all 4 bundles byte-for-byte, split files hash-verified |
| bun scripts/recover/audit.ts | 8,473 provenance files, 0 violations |
| bun scripts/recover/vscode/materialize.ts --apply | 575 upstream files / 9.3 MB + manifest + LICENSE |
| computer-use scoped vitest | 22 tests pass |
| bun scripts/recover/report.ts | 9,026 recovered files, 11 packages |

## Deliverables

| Path | What |
|---|---|
| packages/cursor-sdk | @cursor/sdk 1.3.1-re: tsc/build/16 tests; 131 src files; 94 verbatim d.ts; 65 runtime exports |
| packages/@anysphere/* ×10 | 98 modules; all 10 tsc green |
| recovered/app/glass/{composer,agent,platform,ui} | 1,177 fragments; p0/p1/p2 mapped + 82 renamed files; p3-ui seed |
| recovered/extensions | 111 artifacts / 6,797 split modules (100% reassembly); 64 computer-use + 76 W2 shipped files; 29+ configs |
| recovered/vscode/src | 575 exact upstream files + materialize-manifest + LICENSE |
| recovery/vscode | module-map, nls-map, patch-report, 166 patch evidence files, unresolved |
| recovery/mappings | glass-tree (269 exact candidates), p0/p1/p2, extensions-agent |
| docs/recovery | PLAN, TRACE, INVENTORY, RESULTS, STATUS, TASKS, runs (7 worker reports) |

## Rename totals

- p0-composer: 53 modules / 70 identifiers applied, AST-equivalent.
- p1-agent: 9 files / 12 identifiers applied.
- p2-platform: 20 files applied (18 wrapper init + 2 getters); 1 refused by AST gate.
- Total: 82 files / 102 identifiers rename-only; 111 unrenamed platform bodies byte-identical.

## Known gaps

- SDK runtime parity 67.7%; 13 modules / 31 exports unrecovered (not stubbed).
- 12,802 VS Code-unmatched modules are explicit unresolved.
- 80/131 platform and 193/281 composer fragments truncate mid-declaration; component renames blocked until adjacent segments are stitched.
- p3-ui (678) and p4-lower (7,531) not swept; p4 is mostly dependencies/utilities.
- Glass paths are inferred (0 exact for platform, 2 for composer); no directory claims.
- No sourcemaps: symbol names/comments unrecoverable; artifact-faithful, not byte-identical.
