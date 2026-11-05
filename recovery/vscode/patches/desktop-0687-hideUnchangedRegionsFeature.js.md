# Patch evidence: hideUnchangedRegionsFeature.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0687
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2945634..2961366
- upstream: src/vs/editor/browser/widget/diffEditor/features/hideUnchangedRegionsFeature.ts sha256:e7619902bd9113446f5ba699b19389423ddd79cb5225fc9e362d0aa17e294ef9
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.889; shared rare anchors: 119
- bundle-only anchors: 5; upstream anchors absent from bundle: 19

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| diff-show-more-lines | 2953273..2953293 | yes | @content", { style: { display: "flex" } }, [cu("div@first", { class: "diff-show-more-lines", style: { display: "flex", flexDirection: "column", justifyContent: |
| column | 2953338..2953344 | no (exists elsewhere upstream) | ss: "diff-show-more-lines", style: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "0px", flexShr |
| diff-hidden-lines-text | 2959619..2959641 | yes | = Ve("span", { title: S(250, null) }, v); b.classList.add("diff-hidden-lines-text"), b.style.flexGrow = "1", g.push(b); const y = Ve("a", { c |
| diff-hidden-lines-separator | 2960164..2960191 | yes | if (E.length > 0) { g.push(Ve("span", { class: "diff-hidden-lines-separator" }, " • ")); for (let A = 0; A < E.length; A++) { |
| diff-editor-scroll-compensate | 2961102..2961131 | yes | er, o = this._editor.getTopForLineNumber(r) - i, a = new CustomEvent("diff-editor-scroll-compensate", { bubbles: true, detail: { scrollDelta: o } }); this._editor. |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| unchanged lines | 182 |
| diff-unchanged-lines | 183 |
| Fold Unchanged | 187 |
| foldUnchanged | 189 |
| fold-unchanged  | 190 |
| fold-unchanged | 243 |
| div.diff-hidden-lines-compact | 271 |
| div.line-left | 272 |
| div.text@text | 273 |
| div.line-right | 274 |
| div.diff-hidden-lines-widget | 283 |
| hiddenLines | 296 |
| div.diff-hidden-lines | 304 |
| div.top@top | 305 |
| div.center@content | 306 |
| div@first | 307 |
| , { title: localize( | 308 |
| $(unfold) | 309 |
| div@others | 311 |
| div.bottom@bottom | 313 |
| canMoveTop | 340 |
| canMoveBottom | 341 |
| draggingUnchangedRegion | 347 |
| bottom | 351 |
| mousedown | 363 |
| dragging | 367 |
| mousemove | 377 |
| mouseup | 386 |
| dblclick | 453 |
| div.breadcrumb-item | 469 |
| \u00a0 | 473 |

