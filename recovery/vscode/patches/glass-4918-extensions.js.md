# Patch evidence: extensions.js

- module: app-out-vs-workbench-workbench-glass-main-js:4918
- bundle: app/out/vs/workbench/workbench.glass.main.js range 28313128..28314341
- upstream: src/vs/workbench/contrib/extensions/common/extensions.ts sha256:de55dae1df8bece6aeeab3d76f4addfe836512f1e6e23c78bc952bb723124fad
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 26
- bundle-only anchors: 2; upstream anchors absent from bundle: 34

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| extensionMonitorWorkbenchService | 28313330..28313362 | yes | 6831, "Extensions"), x$ = jn("extensionsWorkbenchService"), L_l = jn("extensionMonitorWorkbenchService"), pRi = "extensions.autoUpdate", O_l = "extensions.autoCheckUpdates" |
| workbench.extensions.action.installRecommendedExtension | 28314075..28314130 | no (exists elsewhere upstream) | rkbench.extensions.action.listWorkspaceUnsupportedExtensions", gRi = "workbench.extensions.action.installRecommendedExtension", _Dg = new cn("hasOutdatedExtensions", false), kNk = new cn("hasGall |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| reloadWindow | 48 |
| restartExtensions | 49 |
| downloadUpdate | 50 |
| applyUpdate | 51 |
| quitAndInstall | 52 |
| prerelease | 151 |
| readme | 182 |
| features | 183 |
| changelog | 184 |
| dependencies | 185 |
| extensionPack | 186 |

