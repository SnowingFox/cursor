# Recovery Results

## Feasibility verdict

Byte-exact original source is impossible: the app ships 0 sourcemaps and the SDK declaration maps have no sourcesContent. But a faithful engineering reconstruction is feasible and now largely demonstrated:

- Bundle structure and module boundaries are recoverable: 1,030 (main) + 4,702 (desktop) + 8,708 (glass) + 10 (extension host) modules, all reassembling byte-for-byte.
- Original module basenames are preserved by esbuild wrappers; nls keys recover 1,150 full source paths (970 match VS Code 1.128.0, 180 Cursor-specific).
- The public @cursor/sdk 1.3.1 exposes original source paths and export names through its dist chunks and .d.ts/.d.ts.map.
- cursor-computer-use ships 61 real TypeScript files; those are adopted verbatim (confidence A).

## W1 deliverables

| Area | Result | Evidence |
|---|---|---|
| SDK package | packages/cursor-sdk: @cursor/sdk 1.3.1-re, 131 src files, 94 verbatim .d.ts, 65 runtime exports, tsc/build/16 tests green | docs/recovery/runs/sdk-core/REPORT.md, parity-coverage.json |
| SDK sibling packages | 10 @anysphere/* packages, 98 modules, all tsc green; 81 files @ts-nocheck TODO(recovered) | docs/recovery/runs/sdk-runtime/REPORT.md |
| VS Code baseline | 14,450 module records; 1,648 matched; 1,146 exact; 171 modified; 53 added; 12,802 explicit unresolved; 166 patch evidence files | recovery/vscode/module-map.json, patch-report.md, unresolved.json |
| Extensions | 86 webpack artifacts split into 4,961 modules with 100% byte-for-byte reassembly; computer-use 61 TS adopted + 12 stubs; 29 shipped configs adopted | recovered/extensions/**, docs/recovery/runs/ext-p0/REPORT.md |
| VS Code materialization | 575 exact upstream files (9.3 MB) copied to recovered/vscode/src with materialize-manifest.json + LICENSE | scripts/recover/vscode/materialize.ts --apply |
| Glass seed | 1,177 fragments with provenance; cluster p0/p1/p2/p3-ui; 269 exact nls path candidates | recovered/app/glass/**, recovery/mappings/glass-tree.json |
| W2 glass-agent | 87/87 p1-agent modules mapped; 24 rename maps, 9 files / 12 identifiers applied with AST equivalence; deps resolved via bundle wrapper symbol table | recovery/mappings/p1-agent.json, docs/recovery/runs/glass-agent/REPORT.md |
| W2 glass-composer | 281/281 mapped; 53 modules / 70 identifiers renamed with AST equivalence; 228 bodies byte-exact; key finding: trailing hoisted declarations belong to the next segment | recovery/mappings/p0-composer.json, docs/recovery/runs/glass-composer/REPORT.md |
| W2 glass-platform | 131/131 mapped; 20 rename maps applied (18 wrapper init + 2 getters), 1 refused by AST gate; 11 heuristic groups; 80 truncated fragments documented | recovery/mappings/p2-platform.json, docs/recovery/runs/glass-platform/REPORT.md |
| W2 ext-agent | 25 artifacts / 1,836 modules split with reassembly ok; 76 shipped files adopted (68 byte-identical + 8 header-verified); 16 remaining extensions covered | recovery/mappings/extensions-agent.json, docs/recovery/runs/ext-agent/REPORT.md |

## Verification commands and results

    bun run typecheck                 # pass
    bun run test                      # 105 tests pass
    bun run lint                      # pass
    bun run sdk:verify                # pass (tsc, build, 16 tests, 65 exports)
    bun run recover:verify --split    # pass (byte-for-byte plus split file hashes)
    bun scripts/recover/audit.ts      # 6,601 files, 0 provenance violations
    bunx vitest run --config recovered/extensions/cursor-computer-use/vitest.local.config.ts  # 22 tests pass
    bun scripts/recover/vscode/materialize.ts --apply  # 575 exact upstream files + manifest

## Known gaps

- SDK exports at 67.7% (65/96); missing Agent, Cursor, CursorAgentPlatform, stores/notifiers, filesystem tools, zod schemas, cloud/executor modules. They are omitted, not faked.
- 12,802 VS Code-unrecognized modules remain unresolved: mostly Cursor glass UI, Cursor workbench additions, and npm dependencies.
- Glass fragments may start/end mid-declaration; renaming/typing is W2 work.
- Directory paths are inferred except for nls-exact candidates.
- Cursor code is proprietary; keep this tree local and do not redistribute.
