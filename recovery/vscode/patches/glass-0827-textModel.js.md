# Patch evidence: textModel.js

- module: app-out-vs-workbench-workbench-glass-main-js:0827
- bundle: app/out/vs/workbench/workbench.glass.main.js range 3358328..3410809
- upstream: src/vs/editor/common/model/textModel.ts sha256:3ccef30b2902046ff93d99b5d9cd03ae2748785e099d123cf519aa5527d0b622
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 185
- bundle-only anchors: 4; upstream anchors absent from bundle: 210

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| editor.type.push_edit_operation | 3382287..3382318 | yes | ations(t, e, n, i, r) { if (this._tooltipService.registerEvent("editor.type.push_edit_operation"), this._options.trimAutoWhitespace && this._trimAutoWhitespaceLines) |
| editor.type.undo | 3384107..3384123 | yes | _applyUndo(t, e, n, i) { this._tooltipService.registerEvent("editor.type.undo"); const r = t.map((s) => { const o = this.getPositionA |
| editor.type.redo | 3384488..3384504 | yes | _applyRedo(t, e, n, i) { this._tooltipService.registerEvent("editor.type.redo"); const r = t.map((s) => { const o = this.getPositionA |
| light | 3403316..3403321 | no (exists elsewhere upstream) | } getColor(t) { return this._resolvedColor \|\| (t.type !== "light" && this.darkColor ? this._resolvedColor = this._resolveColor(this.da |

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

