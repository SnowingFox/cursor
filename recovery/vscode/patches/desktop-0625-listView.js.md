# Patch evidence: listView.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0625
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2566709..2606218
- upstream: src/vs/base/browser/ui/list/listView.ts sha256:50a6097b237445f6af995d3c6c4a9564cbe42f0a8475fc534d9c0b78e5a62234
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.938; shared rare anchors: 229
- bundle-only anchors: 2; upstream anchors absent from bundle: 81

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| drop-target-after | 2596834..2596851 | no (exists elsewhere upstream) | tiple feedbacks with position different than 'over'"); r === "drop-target-after" && i[0] < this.length - 1 && (i[0] += 1, r = "drop-target-before"); |
| drop-target-before | 2596899..2596917 | no (exists elsewhere upstream) | === "drop-target-after" && i[0] < this.length - 1 && (i[0] += 1, r = "drop-target-before"); for (const s of i) { const o = this.items[s]; |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| listitem | 220 |
| Horizontal scrolling and dynamic heights not supported simultaneously | 355 |
| horizontal-scrolling | 359 |
| --list-scroll-right-offset | 373 |
| monaco-list | 401 |
| mouse-support | 406 |
| undefined | 411 |
| monaco-list-rows | 416 |
| translate3d(0px, 0px, 0px) | 420 |
| hidden | 421 |
| strict | 422 |
| scroll | 448 |
| dragover | 458 |
| dragleave | 460 |
| dragend | 461 |
| DND and user selection cannot be used simultaneously | 464 |
| mousedown | 466 |
| Dynamic heights not supported | 570 |
| Can\'t run recursive splices. | 620 |
| number | 875 |
| boolean | 974 |
| aria-checked | 975 |
| dragstart | 1005 |
| fit-content | 1019 |
| data-index | 1045 |
| data-last-element | 1046 |
| data-parity | 1047 |
| aria-setsize | 1048 |
| aria-posinset | 1049 |
| drop-target | 1052 |
| dblclick | 1122 |
| auxclick | 1123 |
| mouseup | 1124 |
| mouseover | 1126 |
| mousemove | 1127 |
| mouseout | 1128 |
| contextmenu | 1129 |
| touchstart | 1130 |
| Got bad scroll event: | 1171 |
| copyMove | 1192 |

