# W2-2 glass-agent — TRACE

Task: P1 agent platform cluster, 87 glass modules. Owned: recovered/app/glass/agent/**, scripts/recover/glass/p1-agent/**, recovery/mappings/p1-agent.json, docs/recovery/runs/glass-agent/**.

All commands run from /Users/bytedance/dev/cursor with Bun 1.4.2. No network, no git commit, app/ untouched.

## 1. Cluster inventory

    bun -e "const c=require('./recovery/clusters/p1-agent.json'); console.log(c.count, c.chars)"
    # 87 380696

Seeded fragments existed already (main thread, 2026-11-05T10:03Z): recovered/app/glass/agent/*.js + _manifest.json (87 modules). Fragments are esbuild wrapper slices from the glass bundle, range = wrapper start .. next wrapper start.

## 2. Bundle symbol table + deps

scripts/recover/glass/p1-agent/build-mapping.ts:
- scans app/out/vs/workbench/workbench.glass.main.js once with /([A-Za-z0-9_$]+)\s*=\s*L\(\{ "([^"]+)"\(\)/ to build symbol -> basename
- brace-scans the wrapper body of every cluster slice, resolves init calls (E(), Va(), ...) to module basenames
- result: 226 distinct module dependencies, every one of the 87 slices has resolved deps (tslib.es6.js 87, index.js 30, stylex.js 16, web.js 13, solid.js 11, icon.js 7 ...)

Command/output:

    bun scripts/recover/glass/p1-agent/build-mapping.ts
    {"modules":87,"emitted":87,"nlsExact":0,"nlsAmbiguous":0,"renameMaps":24,"filesWithRenames":15,"renames":19,"depResolved":87}

## 3. Path candidates

Joined recovery/mappings/glass-tree.json by moduleId and basename-index.json as fallback:
- nls-exact candidate: 0 / 87; nls-ambiguous: 0 / 87; basename-unique fallback: 0 / 87
- all 87 records keep path=null, pathBasis=inferred, confidence C. No directory grouping was applied (no evidence to justify one).

## 4. Rename maps and application

Heuristic rules (recorded per map in "notes"):
1. declared wrapper binding "var X = L({ \"<basename>\"()" -> <PascalBasename>Module (evidence: esbuild init key)
2. ".displayName = \"Name\"" on a declared binding -> Name (evidence: literal displayName)
3. exactly one JSX-returning top-level function in the slice -> <PascalBasename> (structural: sole jsx/jsxs/createElement caller; basename-derived name). Skipped when 0 or >1, with a note.

    bun scripts/recover/glass/p1-agent/apply-renames.ts
    {"applied":9,"blocked":6,"total":24}
    # each applied file: "[recover] renamed N identifiers; AST equivalent: true" (scripts/recover/rename/apply-map.ts)

Applied (9 files / 12 identifiers): AgentHostAutoRoutingRow, AgentHostEnvironmentStatusRow, AgentHostOptimisticPlanningRow, CloudAgentTurnTimings, McpConfigureDialog, McpImpactConfirmDialog, SubagentIcon, SubagentStatusIndicator.react, + McpServerConfigMenu (component-only).
Blocked (6 files, parser rejects fragment): McpServerIconChip, AgentHostStreamErrorRow, MCPIcon, McpCreateDestinationMenu, McpServerIcon, McpServerIconImage. Reason: slice starts/ends mid var-chain (e.g. "reasonCode, syntaxPlugin") so it is not a standalone program; maps are kept unapplied in maps/.

Note: apply-map regenerates the file with @babel/generator (retainLines:false), so applied fragments are pretty-printed; structural AST hash is unchanged by the gate.

## 5. Header annotation + manifest

    bun scripts/recover/glass/p1-agent/finalize.ts
    {"files":87,"annotated":87,"renamed":9,"blocked":6,"missing":0}

Every fragment header now carries: fragment note, // deps: (resolved init deps), // anchors: (DOM/class/displayName anchors where present), // path-candidate:, // renamed: (applied map or blocked reason). _manifest.json rebuilt with sha256 + sha256Original + renames per module.

## 6. Verification

    bun scripts/recover/audit.ts
    [recover] audit: 8475 source files, 8475 with provenance, 0 violations

Manifest check: 87 modules, all files present, sha256 matches current bytes (finalize recomputes after annotation; idempotent).
