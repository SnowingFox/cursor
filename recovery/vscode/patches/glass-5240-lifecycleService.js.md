# Patch evidence: lifecycleService.js

- module: app-out-vs-workbench-workbench-glass-main-js:5240
- bundle: app/out/vs/workbench/workbench.glass.main.js range 29583695..29586393
- upstream: src/vs/workbench/services/lifecycle/common/lifecycleService.ts sha256:f352037ad0336c17c92fb3966707ad4b6a87fc35a80b45a9aa66ac6baaba6c9f
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 25
- bundle-only anchors: 2; upstream anchors absent from bundle: 7

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| code/willStartWorkbench | 29584568..29584591 | no (exists elsewhere upstream) | _ */ new Map(), this._phaseStartMarks = /* @__PURE__ */ new Map([[1, "code/willStartWorkbench"]]), this._startupKind = this.resolveStartupKind(), this._register(th |
| secondary | 29585948..29585957 | no (exists elsewhere upstream) | & _To(v8k(e, t), i, n, { track: "Lifecycle", trackGroup: eQu, color: "secondary" }), this._phaseStartMarks.set(t, n); const r = this.phaseWhen. |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| lifecyle.lastShutdownReason | 16 |
| Lifecycle cannot go backwards | 94 |

