# glass-composer REPORT (W2-1, P0 Composer/Transcript/Tool-call/Markdown)

Status: **complete for this run**. 281/281 cluster modules represented with provenance; 53 modules /
70 identifiers renamed through the main-owned AST gate; every claim below was re-verified.

## Completed

1. **Mapping** `recovery/mappings/p0-composer.json`: 281 records with moduleId, basename, emittedFile,
   char range, segment sha256, wrapper init symbol/factory/kind, visible dep init calls, top-level
   declarations, parseable flag, nls candidate path (exact only), basis, confidence, hoistedOwner,
   moduleOwnHoistedPrefix, per-module notes. Counts: exact paths 2 (B), null/inferred 279 (C).
2. **Renames** `scripts/recover/glass/p0-composer/maps/`: 53 per-module maps + `_index.json` +
   `applied.json`. 35 component functions and 35 wrapper-init symbols (17 modules both), 70 total.
   Every map applied via `scripts/recover/rename/apply-map.ts` in place: 53/53 exit 0,
   "AST equivalent: true". No statements, literals or control flow changed.
   Examples: sXh -> AgentTranscriptApprovalStack, k1n -> CollapsibleContent, P9r -> CursorIcon,
   BAS -> TranscriptCardTimeout, i4r -> AgentTranscriptEnter.
3. **Headers** rewritten for all 281 files: artifact + module range preserved; basis is
   `nls-exact + esbuild-wrapper` (2 files, confidence B) or `esbuild-wrapper + inferred` (279, C);
   method `split+rename` (53) or `split` (228); added deps, wrapper-init, hoisted-owner, path and
   rename notes. Bodies unchanged apart from the 53 AST-checked renames.
4. **Duplicate handling**: two modules share basename ArtifactPreviewCard.js; the second is emitted as
   ArtifactPreviewCard.2.js and its mapping now points there (wrapper xq1 vs PoC verified separately).
5. **Manifest** recovered/app/glass/composer/_manifest.json synchronized with mapping (basis,
   confidence, method, renames, renameMap, hoistedOwner, parseable).

## Coverage

| Metric | Count |
|---|---|
| Cluster modules | 281 |
| Emitted / represented | 281 (100%) |
| Untouched bodies byte-exact vs bundle slice | 228 |
| Renamed modules | 53 |
| Renamed identifiers | 70 (35 components, 35 wrapper inits) |
| Rename maps applied, AST equivalent | 53/53 |
| Candidate exact paths (nls-exact, B) | 2 |
| Inferred only (path null, C) | 279 |
| Bodies parseable standalone | 88 |
| Rename-blocked (truncated fragment) | 193 |

The 2 exact paths: PromptEditInput.react.js -> src/vs/workbench/contrib/composer/browser/components/PromptEditInput.react.tsx;
PromptInputAnchoredTrayHovercard.react.js -> src/vs/workbench/contrib/composer/browser/promptInputTrays/PromptInputAnchoredTrayHovercard.react.tsx.
All other paths are null; no directory or exact path is claimed for them.

## Verification (commands and observed output)

    $ bun scripts/recover/glass/p0-composer/verify.ts
    files 281, byteExactUntouched 228, astEquivalentRenamed 53,
    byteMismatch [], astFailures [], missingHeaders [], rangeMismatch [], pathClaims [], pass true

    $ bun scripts/recover/glass/p0-composer/apply.ts
    maps 53 ok 53 failed 0  (each: "AST equivalent: true")

    $ bun scripts/recover/audit.ts
    [recover] audit: 8473 source files, 8473 with provenance, 0 violations

    $ bun scripts/recover/verify.ts --split
    OK app/out/main.js (1030 modules), desktop (4702), glass (8708), extensionHostProcess (10):
    all reassemble byte-for-byte

    $ git status --porcelain app/   -> empty (no app edits)

## Key finding: segment ownership

A file emitted for basename B contains: wrapper init for B at the start, then the hoisted declarations
that precede the NEXT segment's wrapper. Anchors `vjt("TranscriptCard.*")` plus rendered content
(data-approval-stack-silhouette, ui-collapsible-content-view, Cursor icon path, sender label) match the
next segment basename in every probed case. Mapping records this as `hoistedOwner`; rename maps name
hoisted components from the next basename, not from the file basename. This is why e.g.
AgentTranscriptActivityGroup.js contains a function renamed AgentTranscriptApprovalStack.

## Blocked / unknowns

- 193 of 281 fragments end mid-statement and cannot be parsed standalone; apply-map requires parse +
  AST equivalence, so they were not renamed. Their wrapper init symbol and next-segment owner are
  still recorded.
- Hoisted ownership is inferred by segment adjacency, verified on ~8 samples; it is not proof for
  every module. Component renames carry confidence through map `evidence.basis`; path confidence
  remains C.
- No export tables survive for these glass modules; exported names cannot be asserted. Renames are
  local and reversible via the per-module maps.
- 279 modules have no unique nls candidate (not localized); paths remain null by design.
- Physical grouping into inferred subdirectories was intentionally not applied (see TRACE): a file's
  code belongs to the adjacent module, so basename grouping would misattribute code.

## Handoff

- Consume recovery/mappings/p0-composer.json for module metadata; _manifest.json for file listing.
- Any future rename must reuse apply-map.ts and add a new map; do not rewrite statements to make
  fragments parse.
- To attribute a module's own hoisted code, read the previous segment's tail (`moduleOwnHoistedPrefix`
  in the mapping makes this a pointer lookup).
- Owned outputs: recovered/app/glass/composer/**, scripts/recover/glass/p0-composer/**,
  recovery/mappings/p0-composer.json, docs/recovery/runs/glass-composer/**.
