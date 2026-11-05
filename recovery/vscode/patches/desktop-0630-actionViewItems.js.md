# Patch evidence: actionViewItems.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0630
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2674668..2683069
- upstream: src/vs/base/browser/ui/actionbar/actionViewItems.ts sha256:212e9f3f45a815afe2bccf0757eb0e4fc98bb2ce71674aa2d498e7796b639d42
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.923; shared rare anchors: 82
- bundle-only anchors: 2; upstream anchors absent from bundle: 10

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| aria-checked | 2681452..2681464 | no (exists elsewhere upstream) | , this.action.checked ? "true" : "false") : (this.label.setAttribute("aria-checked", this.action.checked ? "true" : "false"), this.label.setAttribute("r |
| checkbox | 2681541..2681549 | no (exists elsewhere upstream) | .action.checked ? "true" : "false"), this.label.setAttribute("role", "checkbox"))) : (this.label.classList.remove("checked"), this.label.removeAttri |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| active | 136 |
| focused | 186 |
| element | 240 |
| aria-label | 250 |
| action-label | 304 |
| keybinding | 312 |
| presentation | 324 |
| menuitem | 329 |
| button | 333 |
| titleLabel | 378 |
| codicon | 395 |
| aria-disabled | 410 |
| disabled | 411 |
| checked | 435 |
| aria-selected | 437 |
| aria-pressed | 439 |

