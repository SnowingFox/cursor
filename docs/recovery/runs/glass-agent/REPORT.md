# W2-2 glass-agent (P1 Agent platform) — REPORT

Cluster recovery/clusters/p1-agent.json: 87 modules / 380,696 chars from workbench.glass.main.js.
Owned outputs: recovered/app/glass/agent/**, scripts/recover/glass/p1-agent/**, recovery/mappings/p1-agent.json, this run dir.
No app/, .vendor/, packages/, root manifests, shared docs or other workers' output were touched; no network; no git commit.

## Completed

| Item | Result |
|---|---|
| Cluster modules represented | 87 / 87 emitted (seeded fragments improved in place), 0 blocked on emission |
| Metadata mapping | recovery/mappings/p1-agent.json: 87 records (id, basename, charRange, wrapperBodyChars, declaredInTail, jsxFunctions, deps, anchors, path/pathBasis/confidence, notes, sha256, renames) |
| Dependency resolution | bundle-wide wrapper symbol table; 226 distinct module deps; 87/87 modules have resolved init deps |
| Path candidates | 0 nls-exact, 0 nls-ambiguous, 0 basename-unique -> all path=null, pathBasis=inferred, confidence C |
| Rename maps | 24 high-value maps (BackgroundComposer/Subagent/Canvas/Plan/Mcp/MCP/Browser/Cloud/Worktree/AgentHost), 15 contain proposals, 19 identifiers proposed |
| Renames applied | 9 files / 12 identifiers through scripts/recover/rename/apply-map.ts; every run printed "AST equivalent: true" (log: scripts/recover/glass/p1-agent/rename-log.json) |
| Renames blocked | 6 files (fragments not parseable as programs: slice begins/ends inside a var chain) — maps kept in maps/, reason recorded per record and in headers |
| Header annotation | 87/87 headers now carry fragment note, resolved deps, anchors, path-candidate, rename status |
| Manifest | recovered/app/glass/agent/_manifest.json rebuilt: sha256 + sha256Original + renames + pathBasis per module |
| Directory grouping | deliberately not applied: no evidence for an inferred subdir; paths stay null/C instead of inventing a tree |

## Rename rules (evidence recorded in each map note)

1. "var X = L({ \"<basename>\"()" wrapper binding -> <PascalBasename>Module (esbuild init key is the evidence).
2. ".displayName = \"Name\"" -> Name (literal in module body).
3. Sole JSX-returning top-level function in the slice -> <PascalBasename> (structural: only jsx/jsxs/createElement caller; skipped when 0 or >1 and noted).
Applied examples: SubagentIcon (dwp -> SubagentIcon, Pv1 -> SubagentIconModule), McpConfigureDialog (CWm -> McpConfigureDialog, EQ1 -> McpConfigureDialogModule), SubagentStatusIndicator.react (KDs -> SubagentStatusIndicatorModule).

## Verification (exact commands)

    bun scripts/recover/glass/p1-agent/build-mapping.ts   # 87 modules, 24 maps, 19 proposed renames, deps resolved 87
    bun scripts/recover/glass/p1-agent/apply-renames.ts   # {"applied":9,"blocked":6,"total":24}; per-file "AST equivalent: true"
    bun scripts/recover/glass/p1-agent/finalize.ts        # {"files":87,"annotated":87,"renamed":9,"blocked":6,"missing":0}
    bun scripts/recover/audit.ts                          # 8475 source files, 8475 with provenance, 0 violations

Manifest sha256 equals bytes on disk for all 87 files (finalize recomputes after annotation). The 9 applied files were pretty-printed by @babel/generator; the AST-equivalence gate normalizes identifiers and compares structural hashes, so statement structure is unchanged. Original bytes remain available via recovery/raw and sha256Original in the manifest.

## Counts

- modules: 87; emitted files: 87; chars 380,696
- modules with resolved deps: 87; distinct deps: 226; modules with DOM/class anchors: 15; modules with a detected JSX component: 33
- rename maps: 24 (15 with proposals); applied: 9 files / 12 renames; blocked: 6
- confidence: 87 C (path inferred); no B/A claims made

## Unknowns / risks

- No nls tree entry or basename match exists for any of the 87, so directory placement is genuinely unknown; flat output + path=null is intentional.
- Slices begin at the esbuild wrapper and end at the next wrapper; declarations can be hoisted outside the wrapper, so a slice may include code from an adjacent module. Component attribution (rule 3) is a structural heuristic, not proof.
- 6 fragments cannot be parsed as a program (start/end mid var-chain); their renames stay unapplied rather than risk a textual edit without the AST gate.
- Deps are init-time module references only; value-level imports are inlined by esbuild and not recoverable from the slice.
- The 24 high-value maps cover only the requested families; the other 63 modules have no map.

## Handoff

- Extend maps to remaining modules once a parseable-fragment strategy exists (e.g. brace-only wrapper body extraction); do not apply renames textually.
- If nls candidates appear for these basenames later, upgrade pathBasis and re-run finalize (annotations are idempotent).
- recovery/mappings/p1-agent.json is the merge source for tree.json; records carry confidence C and path=null, so the merged tree must not place them.
- Tests/tooling: scripts/recover/glass/p1-agent/{build-mapping,apply-renames,finalize}.ts are Bun TS worker scripts (excluded from root tsc/biome per CONVENTIONS); run in that order to regenerate.
