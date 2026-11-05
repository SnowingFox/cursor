# Patch evidence: update.js

- module: app-out-vs-workbench-workbench-glass-main-js:3738
- bundle: app/out/vs/workbench/workbench.glass.main.js range 21412464..21413245
- upstream: src/vs/platform/update/common/update.ts sha256:11710136d057f8168b764faf78b9882125ee12f37a07765281091e175abcb35d
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 9
- bundle-only anchors: 2; upstream anchors absent from bundle: 14

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| cursor.update.events | 21413170..21413190 | yes | => ({ type: "ready", update: t }) }, SL = jn("updateService"), n$a = "cursor.update.events", wXr = "cursor.update.lastInstallFailed"; } }), Pbe, mPe = L({ "url. |
| cursor.update.lastInstallFailed | 21413200..21413231 | yes | }) }, SL = jn("updateService"), n$a = "cursor.update.events", wXr = "cursor.update.lastInstallFailed"; } }), Pbe, mPe = L({ "url.js"() { "use strict"; E(), It(), Pbe |

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

