# Patch evidence: textModel.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0456
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 1624649..1677127
- upstream: src/vs/editor/common/model/textModel.ts sha256:3ccef30b2902046ff93d99b5d9cd03ae2748785e099d123cf519aa5527d0b622
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 185
- bundle-only anchors: 4; upstream anchors absent from bundle: 210

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| editor.type.push_edit_operation | 1648607..1648638 | yes | ations(e, t, n, i, r) { if (this._tooltipService.registerEvent("editor.type.push_edit_operation"), this._options.trimAutoWhitespace && this._trimAutoWhitespaceLines) |
| editor.type.undo | 1650427..1650443 | yes | _applyUndo(e, t, n, i) { this._tooltipService.registerEvent("editor.type.undo"); const r = e.map((s) => { const o = this.getPositionA |
| editor.type.redo | 1650808..1650824 | yes | _applyRedo(e, t, n, i) { this._tooltipService.registerEvent("editor.type.redo"); const r = e.map((s) => { const o = this.getPositionA |
| light | 1669635..1669640 | no (exists elsewhere upstream) | } getColor(e) { return this._resolvedColor \|\| (e.type !== "light" && this.darkColor ? this._resolvedColor = this._resolveColor(this.da |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| string | 82 |
| tabSize | 210 |
| $model | 319 |
| undefined | 321 |
| inmemory://model/ | 322 |
| Model is disposed! | 445 |
| Operation would exceed heap memory limits | 802 |
| Illegal value for lineNumber | 854 |
| number | 930 |
| boolean | 1183 |
| ll use the following heuristic: if the edits occur near the cursor, then it | 1364 |
|  \|\| c ===  | 2169 |
| tracked-range-always-grows-when-typing-at-edges | 2572 |
| tracked-range-never-grows-when-typing-at-edges | 2573 |
| tracked-range-grows-only-when-typing-before | 2574 |
| tracked-range-grows-only-when-typing-after | 2575 |

