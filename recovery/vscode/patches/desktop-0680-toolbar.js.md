# Patch evidence: toolbar.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0680
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2926390..2932363
- upstream: src/vs/platform/actions/browser/toolbar.ts sha256:47f4b17dcf03800b94d95e011a5be4891ab332f4ad9f56eedfa93bf40ed08842
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.95; shared rare anchors: 50
- bundle-only anchors: 2; upstream anchors absent from bundle: 14

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| configureIconVisibility | 2928277..2928300 | yes | && !p && (p = [this._options.resetMenu]); const g = lh({ id: "configureIconVisibility", label: S(1779, null), run: () => { const f = this.getElem |
| toolbar.toggle.more | 2928416..2928435 | no (exists elsewhere upstream) | const f = this.getElement(), b = f.querySelector('[data-command-id="toolbar.toggle.more"]') \|\| f.querySelector(".monaco-action-bar .action-item:last-child") |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| Reset Menu | 47 |
| string | 108 |
| workbenchActionExecuted | 115 |
| contextmenu | 199 |
| hide foo | 241 |
| resetThisMenu | 269 |
| has-no-actions | 404 |
| This toolbar is populated from a menu. | 421 |

