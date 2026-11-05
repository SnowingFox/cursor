# Patch evidence: update.js

- module: app-out-vs-workbench-workbench-desktop-main-js:3435
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 20008132..20008913
- upstream: src/vs/platform/update/common/update.ts sha256:11710136d057f8168b764faf78b9882125ee12f37a07765281091e175abcb35d
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 9
- bundle-only anchors: 2; upstream anchors absent from bundle: 14

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| cursor.update.events | 20008838..20008858 | yes | => ({ type: "ready", update: e }) }, FD = vn("updateService"), Pao = "cursor.update.events", zGi = "cursor.update.lastInstallFailed"; } }), jse, __e = V({ "url. |
| cursor.update.lastInstallFailed | 20008868..20008899 | yes | }) }, FD = vn("updateService"), Pao = "cursor.update.events", zGi = "cursor.update.lastInstallFailed"; } }), jse, __e = V({ "url.js"() { "use strict"; x(), Ze(), jse |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| uninitialized | 41 |
| disabled | 43 |
| checking for updates | 44 |
| available for download | 45 |
| downloading | 46 |
| downloaded | 47 |
| updating | 48 |
| overwriting | 50 |
| cancelling | 51 |
| restarting | 52 |

