# W2-3 glass-platform report

Cluster: p2-platform (131 modules, 628,876 chars) in app/out/vs/workbench/workbench.glass.main.js.
Owned outputs: recovered/app/glass/platform/**, scripts/recover/glass/p2-platform/**, recovery/mappings/p2-platform.json, docs/recovery/runs/glass-platform/**.

## Completed

1. Analysis tool `scripts/recover/glass/p2-platform/analyze.ts` (Bun+TS, flags --headers/--no-maps/--debug) that maps cluster -> segments, parses each fragment, and records wrapper init symbol, wrapper deps, top-level declarations, string/displayName anchors, domain group, range, sha256.
2. recovery/mappings/p2-platform.json: 131 records, one per emitted file. Fields: moduleId, basename, file, range, sha256, parseable, truncated, renamed, segmentExact, wrapperInitSymbol, wrapperKey, deps, topLevelDeclarations, stringAnchors, displayNameAnchors, group, path=null, pathBasis=inferred, confidence=C, notes.
   - exact source paths: 0/131 (glass-tree and basename-index give no nls match for these PascalCase components; no webpack key exists for glass). All paths are null, not guessed.
3. Provenance enrichment of all 131 files: artifact/sha, range, basis `esbuild-wrapper + inferred`, confidence C, method split|split+rename, wrapper symbol + deps, declarations, anchors, group, notes. The esbuild wrapper boundary is exact; confidence stays C because the source path is inferred (weakest claim rule).
4. Rename maps: 21 produced under scripts/recover/glass/p2-platform/maps/ (index.json + APPLIED.json), 20 applied through apply-map.ts with AST equivalence, 1 refused (PluginSearchMenu.js) and left byte-identical.
   - 18 wrapper-init renames (declared `var <init> = L({...})`) -> <Stem>Module: exact wrapper key, synthetic module-scope name.
   - 2 getter renames from single-return property chains: ModelPickerContext.Mrt -> getRoutedModelViewConfig, ManageTeamMarketplaceModalContent.Pi1 -> getPluginId (inferred names, confidence C).
5. Grouping/coverage: recovered/app/glass/platform/{_groups.json,_manifest.json,INDEX.md}; 11 groups (model 30, marketplace-plugins 34, team-marketplace 7, usage-billing 11, settings 5, provider 1, team 1, editor-plugins-third-party 15, third-party-statsig 20, third-party-build-mjs 4, unclassified 3). Files stay flat; moving them would imply unproven paths.

## Incomplete / blocked

- Component-level renames for Auth/Billing/Usage/Settings/Provider are blocked, not skipped: 80/131 segments are truncated mid-declaration (Billing 2/2, Usage 10/11, Settings 3/5, Provider 2/3). Their component functions are hoisted outside the segment (e.g. BillingStatusBanner.react.js ends at `var hJg,`; hJg is assigned elsewhere in the bundle). Renaming any function inside such a fragment would misattribute names.
- LabelableProvider has a displayName anchor (`VOr.displayName = "LabelableProvider"`) but VOr is an undeclared module-scope assignment, so apply-map (binding-based) cannot rename it; no map was written.
- Auth: the heuristic cluster contains 0 Auth modules, so there was nothing to rename for that domain.
- PluginSearchMenu.js map refused by the AST gate (babel generator/structural-hash mismatch); file untouched. Not investigated further by design (the gate is authoritative).

## Verification (commands + actual output)

```
bun scripts/recover/glass/p2-platform/analyze.ts --headers --no-maps
{"modules":131,"parseable":51,"truncated":80,"segmentExact":111,"renames":0,"groups":11} applied=20

bun scripts/recover/audit.ts
[recover] audit: 8473 source files, 8473 with provenance, 0 violations

bun run recover:verify --split
OK main.js 1030 modules byte-for-byte; OK desktop 4702; OK glass 8708; OK extensionHostProcess 10
(split files verified: 1031 / 4703 / 8709 / 11)

independent AST re-check of 21 maps vs original bundle segments:
  ast-equivalent 20/21; only the unapplied PluginSearchMenu map fails (expected)
independent byte check:
  renamed 20; unrenamed body mismatches 0 (111/111 byte-identical to segments); bad ranges 0
git status --porcelain app/ -> empty
```

## Unknowns / risks

- Filename-to-directory placement remains unknown (no nls/webpack evidence); group labels are heuristic (e.g. MicrosoftTeamsIcon is a brand icon, not team billing; Statsig/motion/ProseMirror modules are third-party).
- Wrapper/init symbol renames are file-local; cross-file references in the bundle keep original mangled names.
- Reformatting by @babel/generator in the 20 renamed files changes whitespace only; structural equivalence is machine-checked, but line-based diffs against original minified fragments are no longer possible for those files.
- The 80 truncated fragments cannot be typechecked or parsed; any future rename pass needs cross-segment stitching (merge adjacent segments until balanced) before renaming.

## Handoff

- Regenerate everything with `bun scripts/recover/glass/p2-platform/analyze.ts` (add --headers for headers). Maps regenerate only for the same rules; APPLIED.json is authoritative for which files are reformatted.
- To extend renames to undeclared globals (e.g. component assignments) a bundle-wide rename tool is needed with global collision checks; apply-map.ts is binding-only by design.
- Main thread may merge group/domain data into the global tree/manifest; p2-platform.json is standalone and does not edit shared mappings.
