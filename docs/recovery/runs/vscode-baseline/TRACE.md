# W1-3 vscode-baseline trace

Chronological evidence log for the VS Code 1.128.0 baseline mapping. All commands were run from /Users/bytedance/dev/cursor. No network. No edits to app/, packages/, .vendor/ or root manifests.

## 0. Environment

| Item | Value |
|---|---|
| Package manager | bun 1.4.2 |
| Node | v26.11.1 |
| Platform | macOS arm64 |
| Upstream tree | .vendor/vscode-1.128.0 (tag 1.128.0, commit fc3def6774c76082adf699d366f31a557ce5573f) |
| Inventory | recovery/inventory/{bundles,modules,nls}.json |
| nls source | app/out/nls.keys.json + app/out/nls.messages.json |

Bundle SHA-256 (from recovery/inventory/bundles.json):

    app/out/main.js                                          499f13ce5d749b9ee4706ce46cbc2d9a6d6286d22982e2a22ab663f8d2d2d473
    app/out/vs/workbench/workbench.desktop.main.js           (see bundles.json)
    app/out/vs/workbench/workbench.glass.main.js             (see bundles.json)
    app/out/vs/workbench/api/node/extensionHostProcess.js    (see bundles.json)

## 1. Inputs inspected

- recovery/inventory/bundles.json: 4 bundles, 14,454 segments, of which 14,450 are modules and 4 are prefixes.
- recovery/inventory/modules.json: 14,450 modules with id, bundle, basename, kind, charStart, charEnd, sha256.
- recovery/inventory/nls.json: 1,150 nls module paths, 970 present upstream, 180 absent.
- .vendor/vscode-1.128.0/src/vs: 8,444 files, 124 MB (7,258 .ts, 4 .jsx-ish jxs, 38 .js, 401 .css, 143 .json, 149 .snap, and assets).
- app/out/nls.messages.json: flat JSON array of 13,530 English messages.

## 2. Discovery: Cursor strips localized messages; localize() becomes a numeric index

Probe: compare nls.keys.json and nls.messages.json lengths (1,150 modules / 13,530 keys vs 13,530 messages) and search the bundle for a known key.

Result: neither the key ("button dropdown more actions") nor the English message ("More Actions...") occurs in the desktop bundle, but the bundle contains 11,245 calls of the form fn(<number>, null).

Cause found in the upstream build tooling that Cursor's pipeline follows:

- .vendor/vscode-1.128.0/build/next/nls-plugin.ts: localize(key, message) is rewritten to a placeholder, then postProcessNLS emits localize(index, null). localize2 keeps the message and only replaces the key with the index.
- .vendor/vscode-1.128.0/build/lib/nls-analysis.ts: analyzes localize/localize2 calls.
- finalizeNLS sorts entries by moduleId then key and writes nls.messages.json, nls.keys.json and nls.metadata.json; indices are the offsets into that sorted flat array.
- src/vs/nls.ts: localize(data: ILocalizeInfo | string | number, ...) uses lookupMessage(index, fallback) when data is a number.

Verification: index of key "button dropdown more actions" in module vs/base/browser/ui/button/button is 1, and nls.messages.json[1] is "More Actions...".

Consequences:

1. English UI text cannot be used as an anchor in Cursor bundles.
2. The numeric index is a precise module fingerprint: a module body whose localize calls fall inside one module's [start,end) index range identifies that nls module path.
3. localize2 messages still survive; they can anchor matches.

Probe counts: 169 desktop segments contain at least one numeric localize call mapped to an nls range; 163 of those are "pure" (all mapped calls point at one nls module). Example: desktop module app-out-vs-workbench-workbench-desktop-main-js:0360 (editorContextKeys.js) has 48 calls, all inside the vs/editor/common/editorContextKeys range.

## 3. Discovery: inventory segments include code hoisted outside the wrapper

The inventory note says a segment runs to the next wrapper and may contain declarations hoisted outside the wrapper body. Measured on desktop:

    contextkey.js   segment 30,526 chars, wrapper body ends at 30,510
    editorOptions.js segment 75,205 chars, wrapper body ends at 74,853
    arrays.js       segment 3,497 chars, wrapper body ends at 3,036
    log.js           segment 9,004 chars, wrapper body ends at 7,857

The wrapper is name = helper({ "x.js"() { ... } }) and the body closes at the first newline followed by "} })". Code after that point belongs to the following module; matching with the whole segment produced false "modified" diffs (e.g. log-level functions appearing in the contextkey.js segment).

Decision: module matching and diffing use only the wrapper body (recorded as bodyRange in module-map.json), not the full inventory segment.

## 4. Matching signals tested

### 4.1 nls index (highest precision)

Build the flat index ranges from nls.keys.json order. For each module body, extract calls matching /name\(([0-9]{1,5}),\s*null/. Map the number to a range with binary search. Require the nls module basename to equal the bundle module basename. This produced 342 matched modules with basis nls-index (plus 53 cursor-added modules whose nls path is absent upstream).

### 4.2 init-symbol import graph

Wrapper declarations give symbol -> basename: /([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*[A-Za-z_$][A-Za-z0-9_$]*\(\{\s*"([^"]+\.js)"\s*\(\)/g. In the desktop bundle this found 4,293 wrappers and 4,293 distinct symbols (0 collisions).

The module body starts with calls to those init symbols in import order. Example for contextkey.js:

    observed deps: tslib, charCode, platform, strings, scanner, instantiation, nls, errors
    upstream src/vs/platform/contextkey/common/contextkey.ts imports: charCode, event, platform,
    strings, scanner, instantiation, nls, lifecycle, errors

Six of eight basenames agree (tslib is esbuild-injected; event/lifecycle are type-only or elided). Dependency containment is the main discriminator for duplicate basenames.

### 4.3 literal anchors

Extract from both sides: double/single-quoted strings (5-160 chars, identifier/path-like filter) plus property names of length >= 6 after a dot. Property names survive esbuild minification; class/function/variable identifiers do not. Weight by inverse upstream document frequency; only anchors with upstream df <= 8 are used for scoring. Anchor counts per upstream file drive shared/rare-anchor scores.

Measured false positives and fixes:

- esbuild export wiring creates property anchors such as e.single = s that do not exist as strings upstream. Fix: property anchors are excluded from diff evidence; only string anchors count.
- TypeScript enums compile to string literals ("Block", "Underline"). Fix: a string anchor that occurs anywhere in the upstream file text is not counted as a diff.
- Wrapper key literal ("x.js") is excluded by using the body bound.
- Anchors present in more than 2% of a bundle's modules (min 30) are treated as runtime noise and ignored for diffs.

### 4.4 basename-only (rejected as match evidence)

1,263 modules have at least one upstream file with the same basename but no dependency/anchor evidence. They are recorded as unresolved with candidates and confidence C. Example: a Cursor button.js and upstream button.ts share generic property names but no import edges.

## 5. Classification iterations

| iteration | matched | upstream-exact | upstream-modified | cursor-added | third-party | unknown |
|---|---|---|---|---|---|---|
| v1 segment-wide anchors | 1,855 | 308 | 1,237 | 24 | 14 | 12,867 |
| v2 wrapper-body bounds | 1,648 | 674 | 643 | 53 | 13 | 13,067 |
| v3 string-only diff filter + upstream-text containment | 1,648 | 1,146 | 171 | 53 | 13 | 13,067 |

The v3 modified set contains plausible Cursor changes, for example:

- src/vs/base/common/lifecycle.ts <- desktop lifecycle.js: new strings "disposable_use_after_dispose", "disposable_use_after_transfer", "TransferableDisposable: the held value has been disposed", "TransferableDisposable: the held value was already transferred out". None of these occur anywhere in src/vs.
- src/vs/base/common/product.ts <- desktop product.js: "Cursor Dev", "cursor", ".cursor", "https://github.com/getcursor/cursor/issues/new".
- src/vs/base/parts/storage/node/storage.ts <- main storage.js: composerId, workspaceId, createdAt, INTEGER, cursor_storage_event.
- src/vs/platform/update/common/update.config.contribution.ts <- update.config.contribution.js: silentlyApplyOnQuit update mode.

These are reported as evidence, not intent. Strings that exist elsewhere in src/vs are marked absentGlobally=false and shown separately in patches/*.md.

## 6. Final numbers

Coverage (from module-map.json):

| bundle | modules | matched | unresolved | exact | modified | cursor-added | third-party |
|---|---|---|---|---|---|---|---|
| main | 1,030 | 210 | 820 | 118 | 35 | 8 | 1 |
| desktop | 4,702 | 670 | 4,032 | 480 | 61 | 17 | 5 |
| glass | 8,708 | 768 | 7,940 | 548 | 75 | 28 | 6 |
| extensionHostProcess | 10 | 0 | 10 | 0 | 0 | 0 | 1 |
| total | 14,450 | 1,648 | 12,802 | 1,146 | 171 | 53 | 13 |

Confidence: A=1,273, B=375, unresolved=12,802. Basis: import-graph=1,150, nls-index=347, anchor-overlap=151.

nls reconciliation: 1,150 total, 970 present upstream, 180 absent. nls index evidence observed in bundles for 186 present paths and 16 absent paths. 52 of the 180 absent paths have same-basename upstream candidates; 128 have none.

Unresolved reasons: 11,537 have no upstream basename (Cursor or third-party modules); 1,263 have an upstream basename but no content evidence; 2 have an nls module whose basename does not match an upstream file.

## 7. Coverage and materialize verification

Coverage check: the set of module ids in bundles.json non-prefix segments equals the set in modules.json equals the set in module-map.json (14,450; 0 missing).

Materialize dry-run:

    selection classification=upstream-exact confidence=A
    matched module entries: 1036, distinct upstream files: 575
    verified files: 575, bytes: 8340041
    src/vs/amdX.ts -> recovered/vscode/src/vs/amdX.ts
    ...
    dry-run: no files written (pass --apply to copy)

No --apply run was performed: recovered/vscode/** is outside this task's ownership. materialize refuses paths under app/ and .vendor/.

## 8. Decisions

1. Use wrapper-body bounds for evidence; keep the inventory segment range separately (range vs bodyRange).
2. Do not treat basename equality as a match. It is a C-confidence candidate only.
3. Do not use localized English text as an anchor; use numeric nls indices and localize2 messages.
4. Do not infer intent from diff anchors; report anchor, char range, context and global absence.
5. Mark everything without A/B evidence unresolved, even when a plausible upstream basename exists.
6. No network, no app edits, no git commit.

## 9. Reproduction

    bun scripts/recover/vscode/upstream.ts   # upstream-index.json + nls-map.json
    bun scripts/recover/vscode/modules.ts    # module-map.json + patch-evidence.json + patches/
    bun scripts/recover/vscode/report.ts     # patch-report.md + unresolved.json
    bun scripts/recover/vscode/build.ts      # all of the above in one process
    bun scripts/recover/vscode/materialize.ts --dry-run
    bunx tsc -p tsconfig.json --noEmit
