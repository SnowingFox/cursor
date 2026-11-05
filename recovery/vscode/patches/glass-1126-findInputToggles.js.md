# Patch evidence: findInputToggles.js

- module: app-out-vs-workbench-workbench-glass-main-js:1126
- bundle: app/out/vs/workbench/workbench.glass.main.js range 4969978..4971234
- upstream: src/vs/base/browser/ui/findinput/findInputToggles.ts sha256:365c25b690456ca064044658eaed4b9a31bed0095e7cad5bbf982a22c70f702d
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.6; shared rare anchors: 7
- bundle-only anchors: 1; upstream anchors absent from bundle: 8

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| element | 4970294..4970301 | no (exists elsewhere upstream) | dTitle, isChecked: t.isChecked, hoverDelegate: t.hoverDelegate ?? c2("element"), inputActiveOptionBorder: t.inputActiveOptionBorder, inputActiveOpt |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| caseDescription | 20 |
| wordsDescription | 21 |
| regexDescription | 22 |

