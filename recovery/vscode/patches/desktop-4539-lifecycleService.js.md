# Patch evidence: lifecycleService.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4539
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 26330042..26332739
- upstream: src/vs/workbench/services/lifecycle/common/lifecycleService.ts sha256:f352037ad0336c17c92fb3966707ad4b6a87fc35a80b45a9aa66ac6baaba6c9f
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 25
- bundle-only anchors: 2; upstream anchors absent from bundle: 7

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| code/willStartWorkbench | 26330915..26330938 | no (exists elsewhere upstream) | _ */ new Map(), this._phaseStartMarks = /* @__PURE__ */ new Map([[1, "code/willStartWorkbench"]]), this._startupKind = this.resolveStartupKind(), this._register(th |
| secondary | 26332294..26332303 | no (exists elsewhere upstream) | & TZr(ng_(t, e), i, n, { track: "Lifecycle", trackGroup: ZNc, color: "secondary" }), this._phaseStartMarks.set(e, n); const r = this.phaseWhen. |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| lifecyle.lastShutdownReason | 16 |
| Lifecycle cannot go backwards | 94 |

