# Patch evidence: findInputToggles.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0740
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 3167331..3168583
- upstream: src/vs/base/browser/ui/findinput/findInputToggles.ts sha256:365c25b690456ca064044658eaed4b9a31bed0095e7cad5bbf982a22c70f702d
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.6; shared rare anchors: 7
- bundle-only anchors: 1; upstream anchors absent from bundle: 8

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| element | 3167645..3167652 | no (exists elsewhere upstream) | dTitle, isChecked: e.isChecked, hoverDelegate: e.hoverDelegate ?? ih("element"), inputActiveOptionBorder: e.inputActiveOptionBorder, inputActiveOpt |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| caseDescription | 20 |
| wordsDescription | 21 |
| regexDescription | 22 |

