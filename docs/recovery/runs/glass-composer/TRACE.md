# glass-composer TRACE (W2-1)

All commands run from /Users/bytedance/dev/cursor. No network, no git commit, no edits to app/, packages/, .vendor/ or shared docs.

## Inputs read

- docs/recovery/{PLAN,TRACE,CONVENTIONS,RESULTS,INVENTORY}.md, TASKS/w2-glass-composer.md
- W1 reports: runs/{sdk-core,sdk-runtime,vscode-baseline,ext-p0}/REPORT.md
- recovery/clusters/p0-composer.json (281 modules), recovery/mappings/glass-tree.json, recovery/inventory/bundles.json
- scripts/recover/{slice.ts,emit/module.ts,emit/cluster.ts,rename/apply-map.ts,lib/ast.ts,mappings/basename-index.json}

## Probes and decisions

1. Seed tree was already emitted by main at recovered/app/glass/composer (281 .js + _manifest.json).
   Header/body inspection shows each file starts at the wrapper for its basename and ends at the next
   wrapper start, so 193/281 bodies are truncated mid-statement and do not parse standalone.
2. `bun scripts/recover/glass/p0-composer/analyze.ts` -> 281 files, wrapper detected 202, parseable 88.
3. Ancestor/ownership probe: segments sorted by charStart. For four modules with `vjt("...")` anchors
   the trailing hoisted code names the NEXT segment basename exactly:
   - TranscriptCardHeader.js tail renders TranscriptCard.HeaderContent -> next segment TranscriptCardHeaderContent.js
   - TranscriptCardHeaderIcon.js tail renders TranscriptCard.HeaderLeading -> next HeaderLeading
   - TranscriptCardHeaderTitle.js tail renders TranscriptCard.HeaderTrailing -> next HeaderTrailing
   - TranscriptCardRows.js tail renders TranscriptCard.Timeout -> next TranscriptCardTimeout.js
   Body inspection of more tails (data-approval-stack-silhouette, ui-collapsible-content-view,
   Cursor logo path, sender label) matches the next basename again. Rule adopted:
   a file's trailing declarations belong to the next bundle segment, not to its own wrapper.
4. `build.ts` produced recovery/mappings/p0-composer.json (281 records) and 53 per-module maps.
   Candidate component renames: next-segment PascalCase basename + exactly one JSX-rendering top-level
   function + no name collision. Wrapper-init renames only for `var X = L({...})` bindings (35).
5. `apply.ts` invoked main-owned scripts/recover/rename/apply-map.ts once per map:
   53/53 exit 0, all "AST equivalent: true". 70 identifiers renamed (35 components, 35 wrapper inits,
   17 modules have both).
6. `finalize.ts` rewrote headers (basis/confidence/method/run + deps, wrapper-init, hoisted-owner,
   path note, renamed) and synchronized _manifest.json. Header-only; body untouched.
7. Duplicate basename probe found two `ArtifactPreviewCard.js` modules (ids :3878, :7718); cluster
   emitter wrote the second as ArtifactPreviewCard.2.js. `repair-duplicate.ts` repointed that mapping
   record at the .2 file, recomputed its metadata and rewrote only its header.
8. `verify.ts` checked all 281: 228 untouched bodies byte-identical to the bundle slice, 53 renamed
   bodies AST-equivalent under their maps, zero header/range/path violations.
9. `bun scripts/recover/audit.ts` -> 8,473 files, 8,473 with provenance, 0 violations.
10. `bun scripts/recover/verify.ts --split` -> all four bundles reassemble byte-for-byte.

## Layout decision

No physical subdirectory grouping (transcript/, toolcall/, markdown/, ...) was applied. Each file mixes
its own module's init with the next module's hoisted declarations, so grouping by basename would
misattribute code. The mapping records hoistedOwner for every module instead; files stay flat and the
manifest is authoritative.

## Verification artifacts

- scripts/recover/glass/p0-composer/{analysis,candidates,anchors,roots}.json|ts (probes)
- scripts/recover/glass/p0-composer/maps/_index.json, applied.json (per-map result)
- scripts/recover/glass/p0-composer/{verify.json,coverage.json}
- recovery/mappings/p0-composer.json, recovered/app/glass/composer/_manifest.json
