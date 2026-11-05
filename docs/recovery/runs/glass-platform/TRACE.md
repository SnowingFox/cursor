# glass-platform (W2-3) trace

Task: p2 platform cluster (Auth/Billing/Usage/Model/Settings/Team/Provider) in workbench.glass.main.js.
Repo: /Users/bytedance/dev/cursor. Bundle sha256 6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81.

## 1. Seed inspection (before changes)

```
ls recovered/app/glass/platform | wc -l            -> 132 (131 modules + _manifest.json)
grep -l 'displayName' *.js                         -> 10 files; only LabelableProvider has 'X.displayName = "LabelableProvider"'
grep -l 'statsig' *.js                             -> Statsig/NetworkConfig/StorageProvider modules are third-party @statsig code
```

Cluster module/nls candidates: recovery/mappings/glass-tree.json has 131/131 records for this cluster, all candidatePath=null (no nls basename match). recovery/mappings/basename-index.json yields no lowercase-nls match for these PascalCase component basenames.

## 2. Parseability probe (Babel, module+jsx+typescript)

```
bun scripts/recover/glass/p2-platform/analyze.ts --debug
-> 131 modules: 51 parseable, 80 truncated, 0 parse failures repaired
```

Truncation cause: segments end at the next esbuild wrapper. Example BillingStatusBanner.react.js ends with `var hJg,` and its component body lives after the segment boundary (`hJg = Ok(QFk)` at bundle offset 403490). Billing/Usage/Settings modules are truncated 10/11, so their component functions cannot be renamed inside the emitted fragment.

## 3. Tool: scripts/recover/glass/p2-platform/analyze.ts

Flags: default = write recovery/mappings/p2-platform.json + maps + groups + manifest + INDEX.md; `--no-maps` = skip map generation; `--headers` = rewrite provenance headers; `--debug` = print rename-candidate diagnostics.

Extracts per module: wrapper init symbol and wrapper key, wrapper dependency init calls, top-level declarations (AST when parseable, regex fallback when truncated), string anchors (dotted ids, kebab phrases, URLs), displayName anchors, group, byte range/sha256 from inventory.

## 4. Rename policy (evidence only)

1. declared wrapper init: `var <init> = L({ "<basename>"() {...} })` -> `<Stem>Module` (wrapper key is exact; synthetic module-scope name).
2. displayName anchor -> target name literal (only if the identifier is a declared binding).
3. single-return property getter: `function f(t){ return t?.a.b; }` -> `getB` (name inferred from returned property chain; skipped for set/get/is/has/on-prefixed and generic properties).

Nothing else is renamed. Undeclared module-scope globals (e.g. `VOr = function`, `E7k = L({...})`) are assignments, not bindings; apply-map.ts (scope-aware Babel rename) cannot rename them, so no map was attempted.

## 5. Apply pass

```
for each scripts/recover/glass/p2-platform/maps/*.json:
  bun scripts/recover/rename/apply-map.ts --in <file> --out <file> --map <map>
-> 20 applied, 1 refused (PluginSearchMenu.js: "AST equivalence check failed; refusing to write")
-> APPLIED.json records the 20 successes; PluginSearchMenu.js remains byte-identical to its segment
```

Renamed: AddPluginsToMarketplaceMenu, ImportTeamMarketplaceFromRepoForm, LegacyModelItem, LockedModelPicker.react, ManageTeamMarketplaceModal, ManageTeamMarketplaceModalContent (getPluginId), MarketplaceSectionEndCol, MicrosoftTeamsIcon, ModelListRowLabel, ModelParameterControls, ModelPickerContext (getRoutedModelViewConfig), PluginActionConfirmCard, PluginCapabilityBadges, Plugins.types, PluginSection, PluginSectionHeader, PluginSourceBadges, ProjectDatabasePlugin, ShikiCodeBlockTokenizer, StatsigUser.

## 6. Header/metadata pass

Every file now carries 12 provenance lines: artifact sha, module+range, basis `esbuild-wrapper + inferred`, confidence C, method `split` or `split+rename`, run id, wrapper symbol and dependency calls, top-level declarations (marked truncated), anchors, group, notes. audit.ts parses keys within the first 16 lines; new keys do not collide.

## 7. Verification (actual output)

```
bun scripts/recover/glass/p2-platform/analyze.ts --headers --no-maps
{"modules":131,"parseable":51,"truncated":80,"segmentExact":111,"renames":0,"groups":11} applied=20

bun scripts/recover/audit.ts
[recover] audit: 8473 source files, 8473 with provenance, 0 violations
[recover] confidence: {"C":8180,"B":134,"A":159}
[recover] basis: {... "esbuild-wrapper + inferred":410 ...}

bun run recover:verify --split
OK app/out/main.js 1030 modules byte-for-byte
OK desktop 4702 modules byte-for-byte
OK glass 8708 modules byte-for-byte
OK extensionHostProcess 10 modules byte-for-byte

# independent AST check, original segment vs current body, renames applied
ast-equivalent 20 of 21; the failing entry is the refused PluginSearchMenu map (unapplied, body unchanged)
# independent byte check (JS UTF-16 indices)
renamed 20, unrenamed mismatches 0 (111/111 byte-identical to segments)
range does not contain basename: 0
git status --porcelain app/ -> empty
```

## 8. Decisions / limits

- Paths: all 131 modules keep path=null, pathBasis=inferred, confidence=C; no dirs created, grouping is exposed via _groups.json + INDEX.md instead (task permits flat when path unsupported).
- Cluster contamination: 20 Statsig client modules, 4 framer-motion .mjs modules and 15 editor-plugin/tokenizer modules are third-party code captured by the heuristic cluster; they are labelled by group, not claimed as Cursor source.
- No statement/control-flow/literal changes; apply-map reformats bodies with @babel/generator as a side effect and proves structural equivalence.
