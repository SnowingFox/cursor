# Patch evidence: update.js

- module: app-out-main-js:0680
- bundle: app/out/main.js range 1686711..1687538
- upstream: src/vs/platform/update/common/update.ts sha256:11710136d057f8168b764faf78b9882125ee12f37a07765281091e175abcb35d
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 9
- bundle-only anchors: 2; upstream anchors absent from bundle: 14

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| cursor.update.events | 1687414..1687434 | yes | ) => ({ type: "ready", update: e }) }, tl = Q("updateService"), nl = "cursor.update.events", npe = "cursor.update.lastInstallFailed"; } }); import { app as Uw } |
| cursor.update.lastInstallFailed | 1687444..1687475 | yes | e }) }, tl = Q("updateService"), nl = "cursor.update.events", npe = "cursor.update.lastInstallFailed"; } }); import { app as Uw } from "electron"; var wu, QD, Ir, Eu = g( |

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

