# Patch evidence: utils.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0279
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 650864..658107
- upstream: src/vs/base/common/observableInternal/utils/utils.ts sha256:e32165425e1650fed409ef9b2adda9f836c46ec3157ce4520a5247bfcadd1fb5
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.625; shared rare anchors: 11
- bundle-only anchors: 4; upstream anchors absent from bundle: 12

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Event fired | 652120..652131 | no (exists elsewhere upstream) | }, () => { const h = this.getDebugName(); return "Event fired" + (h ? `: ${h}` : ""); }))), u \|\| q9()?.handleObservableUpda |
| From Event | 652453..652463 | no (exists elsewhere upstream) | get debugName() { const e = this.getDebugName(); return "From Event" + (e ? `: ${e}` : ""); } onFirstObserverAdded() { this |
| Observable Signal From Event | 653589..653617 | no (exists elsewhere upstream) | this.debugName = typeof e == "string" ? e : e.getDebugName(this) ?? "Observable Signal From Event"; } onFirstObserverAdded() { this.subscription.value = |
| Observable Signal | 653589..653606 | no (exists elsewhere upstream) | this.debugName = typeof e == "string" ? e : e.getDebugName(this) ?? "Observable Signal From Event"; } onFirstObserverAdded() { this.subscripti |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| promiseValue | 18 |
| number | 54 |
| handleTimeout | 133 |
| triggeredRecently | 171 |
| derivedObservableWithWritableCache | 265 |

