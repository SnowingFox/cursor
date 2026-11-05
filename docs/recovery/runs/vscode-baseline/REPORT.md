# W1-3 vscode-baseline report

Status: complete for the requested baseline artifacts. Full semantic classification of every Cursor-only module was not attempted and is explicitly listed as unresolved.

## Completed items

| # | Item | Output | Evidence |
|---|---|---|---|
| 1 | Upstream src/vs index | recovery/vscode/upstream-index.json (8,444 files: sha256, type, size) | sha256 read from .vendor/vscode-1.128.0; tag 1.128.0 commit fc3def67 |
| 2 | nls reconciliation | recovery/vscode/nls-map.json (1,150 entries) | 970 present / 180 absent, matching recovery/inventory/nls.json |
| 3 | Module map | recovery/vscode/module-map.json (14,450 modules) | every bundle module has status, basis, confidence, classification, evidence, candidates |
| 4 | Classification + patch evidence | recovery/vscode/patch-evidence.json + recovery/vscode/patches/*.md (166 files) | bundle char ranges, contexts, absent-from-src/vs flag |
| 5 | Patch report | recovery/vscode/patch-report.md | coverage, nls, modified, cursor-added, third-party, unresolved, method, limitations |
| 6 | Materializer | scripts/recover/vscode/materialize.ts | dry-run by default; verified 575 files / 8,340,041 bytes; no writes performed |
| 7 | Run trace + report | docs/recovery/runs/vscode-baseline/TRACE.md, REPORT.md | this file |

Also written: recovery/vscode/unresolved.json (12,802 explicit unresolved modules) and scripts/recover/vscode/{lib,upstream,modules,report,build}.ts.

## Verification (commands and actual outputs)

    bun scripts/recover/vscode/build.ts
    [vscode] upstream-index: 8444 files {"ts":7258,"json":143,"js":38,"css":401,...}
    [vscode] nls-map: 1150 modules, present 970, absent 180
    [vscode] app/out/main.js: 1030 modules, matched 210
    [vscode] app/out/vs/workbench/workbench.desktop.main.js: 4702 modules, matched 670
    [vscode] app/out/vs/workbench/workbench.glass.main.js: 8708 modules, matched 768
    [vscode] app/out/vs/workbench/api/node/extensionHostProcess.js: 10 modules, matched 0
    [vscode] module-map: {"modules":14450,"matched":1648,"unresolved":12802,"exact":1146,
                          "modified":171,"added":53,"thirdParty":13,"unknown":13067}
    [vscode] patches written: 166, patch-evidence: 166
    [vscode] patch-report.md written, unresolved 12802

    bun scripts/recover/vscode/materialize.ts --dry-run
    selection classification=upstream-exact confidence=A
    matched module entries: 1036, distinct upstream files: 575
    verified files: 575, bytes: 8340041
    src/vs/amdX.ts -> recovered/vscode/src/vs/amdX.ts
    ...
    dry-run: no files written (pass --apply to copy)

    bunx tsc -p tsconfig.json --noEmit
    (no errors in scripts/recover/vscode/*)

Coverage check: bundles.json non-prefix segment ids = 14,450, modules.json = 14,450, module-map.json = 14,450, missing = 0.

## Numbers

Coverage by bundle:

| bundle | modules | matched | unresolved | exact | modified | cursor-added | third-party |
|---|---|---|---|---|---|---|---|
| main | 1,030 | 210 | 820 | 118 | 35 | 8 | 1 |
| desktop | 4,702 | 670 | 4,032 | 480 | 61 | 17 | 5 |
| glass | 8,708 | 768 | 7,940 | 548 | 75 | 28 | 6 |
| extensionHostProcess | 10 | 0 | 10 | 0 | 0 | 0 | 1 |
| total | 14,450 | 1,648 | 12,802 | 1,146 | 171 | 53 | 13 |

- Matched confidence: A=1,273, B=375.
- Matched basis: import-graph=1,150, nls-index=347, anchor-overlap=151.
- nls: 1,150 modules / 13,530 keys; 970 present upstream (all resolved to a file); 180 absent (0 resolved, 52 with same-basename candidates, 128 without).
- nls index evidence observed in bundles: 186 present paths, 16 absent paths.
- upstream-exact A confidence: 1,036 module entries covering 575 distinct upstream files.
- Patch evidence: 166 modified modules (140 A, 26 B); strings absent from all of src/vs are flagged per anchor.

## Unresolved modules (explicit)

12,802 modules are status "unresolved" in module-map.json and listed individually in unresolved.json with id, bundle, basename, bundle range, reason, nls hint and basename-only candidates. Breakdown:

| reason | modules |
|---|---|
| no upstream basename (Cursor or third-party module) | 11,537 |
| upstream basename exists, no content evidence (candidate C only) | 1,263 |
| nls module known but basename does not match an upstream file | 2 |

Most frequent unresolved basenames: index.js (461), index.ts (64), utils.js (61), constants.js (51), index.mjs (26), api.js (25), parse.js (24), errors.js (22). These are consistent with Cursor's own workbench/agent UI plus third-party packages; no upstream path is asserted for them.

The extensionHostProcess bundle (10 modules) has no A/B match: its modules are Cursor extension-host files (abort-reason.ts, browser-bridge.ts, core.ts, otel.ts, index.ts, logger.ts) plus tslib; only tslib is classified third-party.

## Known gaps and risks

- Classification of the Cursor-only 11,537 modules is not done; only 53 have an evidence-backed cursor-added label (absent nls path with basename agreement). The rest stay unresolved rather than guessed.
- Third-party detection is conservative: package basename list plus bundled-package markers. app/node_modules (384 top-level packages, 9,946 .js files) was not indexed as a content corpus.
- Diff evidence is string-anchor level. A Cursor change that introduces no new string and no new property name is invisible; a deletion inside the matched file is only visible indirectly (upOnly counts), not claimed.
- Hoisting: the wrapper body can lose declarations placed before the wrapper; 14 modules matched with fewer than 6 anchors are classified unknown rather than exact/modified.
- Localized messages are stripped from bundles, so nls-key evidence is available only through numeric indices (and localize2 message text). Only 186 of the 970 present nls paths were observed via index evidence; the rest are matched by import graph/anchors.
- A module found in main, desktop and glass is evaluated per bundle; minification differs but the chosen upstream path was consistent in spot checks.
- Patch anchors are evidence of difference, not proof of Cursor intent, and cross-file/compiler-generated strings are filtered but not impossible.

## Handoff

- Main thread can add package scripts (root manifests are main-owned), for example:
  recover:vscode = bun scripts/recover/vscode/build.ts
  recover:vscode:materialize = bun scripts/recover/vscode/materialize.ts
- materialize.ts defaults to dry-run and refuses paths under app/ and .vendor/. Running it with --apply writes recovered/vscode/src, which is outside W1-3 ownership; the owning wave should run it and record provenance from materialize-manifest.json (it copies LICENSE.txt and records upstream sha256 per file; it does not modify file contents).
- Recommended next steps: (1) index app/node_modules basenames/content to classify third-party modules; (2) review the 166 patch files, prioritizing anchors with absentGlobally=true; (3) use the 575 verified upstream-exact files as the first recovered/vscode materialization; (4) feed import-graph edges into the broader module tree work.
- No edits outside recovery/vscode/**, scripts/recover/vscode/**, docs/recovery/runs/vscode-baseline/**. No network. No git commit.
