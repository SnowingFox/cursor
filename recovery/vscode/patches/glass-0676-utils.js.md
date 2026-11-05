# Patch evidence: utils.js

- module: app-out-vs-workbench-workbench-glass-main-js:0676
- bundle: app/out/vs/workbench/workbench.glass.main.js range 2567111..2574354
- upstream: src/vs/base/common/observableInternal/utils/utils.ts sha256:e32165425e1650fed409ef9b2adda9f836c46ec3157ce4520a5247bfcadd1fb5
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.625; shared rare anchors: 11
- bundle-only anchors: 4; upstream anchors absent from bundle: 12

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Event fired | 2568367..2568378 | no (exists elsewhere upstream) | }, () => { const d = this.getDebugName(); return "Event fired" + (d ? `: ${d}` : ""); }))), u \|\| uW()?.handleObservableUpda |
| From Event | 2568700..2568710 | no (exists elsewhere upstream) | get debugName() { const t = this.getDebugName(); return "From Event" + (t ? `: ${t}` : ""); } onFirstObserverAdded() { this |
| Observable Signal From Event | 2569836..2569864 | no (exists elsewhere upstream) | this.debugName = typeof t == "string" ? t : t.getDebugName(this) ?? "Observable Signal From Event"; } onFirstObserverAdded() { this.subscription.value = |
| Observable Signal | 2569836..2569853 | no (exists elsewhere upstream) | this.debugName = typeof t == "string" ? t : t.getDebugName(this) ?? "Observable Signal From Event"; } onFirstObserverAdded() { this.subscripti |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| promiseValue | 18 |
| number | 54 |
| handleTimeout | 133 |
| triggeredRecently | 171 |
| derivedObservableWithWritableCache | 265 |

