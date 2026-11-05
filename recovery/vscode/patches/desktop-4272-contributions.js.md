# Patch evidence: contributions.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4272
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25132700..25141299
- upstream: src/vs/workbench/common/contributions.ts sha256:9c9e8e85c7f104a013d6abbc9f697f010aaa2ff2301ef9581d08a0caf01eae8a
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.818; shared rare anchors: 43
- bundle-only anchors: 2; upstream anchors absent from bundle: 2

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| WindowEventually | 25133081..25133097 | yes | tored = 3] = "AfterRestored", e[e.Eventually = 4] = "Eventually", e[e.WindowEventually = 4] = "WindowEventually", e))(cs \|\| {}), _qt = class _Aa extends we |
| rootWorkspace | 25136060..25136073 | yes | !!a.isGlass; const c = !a.isGlass \|\| a.glassWorkspaceRole === "rootWorkspace"; c && (this.instantiationService = n, this.lifecycleService = |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| string | 82 |
| number | 178 |
| t register multiple contributions with same id  | 199 |
| ${contribution.id ?? contribution.ctor.name} | 390 |

