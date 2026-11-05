# Patch evidence: contributions.js

- module: app-out-vs-workbench-workbench-glass-main-js:0270
- bundle: app/out/vs/workbench/workbench.glass.main.js range 613527..622100
- upstream: src/vs/workbench/common/contributions.ts sha256:9c9e8e85c7f104a013d6abbc9f697f010aaa2ff2301ef9581d08a0caf01eae8a
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.818; shared rare anchors: 43
- bundle-only anchors: 2; upstream anchors absent from bundle: 2

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| WindowEventually | 613908..613924 | yes | tored = 3] = "AfterRestored", t[t.Eventually = 4] = "Eventually", t[t.WindowEventually = 4] = "WindowEventually", t))($o \|\| {}), Gdn = class zQc extends st |
| rootWorkspace | 616887..616900 | yes | !!a.isGlass; const l = !a.isGlass \|\| a.glassWorkspaceRole === "rootWorkspace"; l && (this.instantiationService = n, this.lifecycleService = |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| string | 82 |
| number | 178 |
| t register multiple contributions with same id  | 199 |
| ${contribution.id ?? contribution.ctor.name} | 390 |

