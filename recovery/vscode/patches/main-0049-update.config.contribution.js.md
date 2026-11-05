# Patch evidence: update.config.contribution.js

- module: app-out-main-js:0049
- bundle: app/out/main.js range 216396..217708
- upstream: src/vs/platform/update/common/update.config.contribution.ts sha256:87e1de83e700ed52e721362fb05b2a507d92755271500d9a9c0e5e106bf4ebfc
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.6; shared rare anchors: 13
- bundle-only anchors: 2; upstream anchors absent from bundle: 27

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| silentlyApplyOnQuit | 216708..216727 | yes | ode": { type: "string", enum: ["none", "manual", "start", "default", "silentlyApplyOnQuit"], default: "default", scope: 1, markdownDescription: E(2611, null), |
| stable | 217346..217352 | no (exists elsewhere upstream) | 2621, null), included: ee && !Xs }, [eT]: { type: "string", default: "stable", scope: 1, description: E(2622, null) }, [tT]: { type: "string", def |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| update | 14 |
| updateConfigurationTitle | 16 |
| object | 17 |
| update.mode | 19 |
| string | 20 |
| default | 22 |
| updateMode | 24 |
| usesOnlineServices | 25 |
| manual | 28 |
| UpdateMode | 33 |
| update.channel | 59 |
| deprecated | 64 |
| update.enableWindowsBackgroundUpdates | 66 |
| boolean | 67 |
| enableWindowsBackgroundUpdatesTitle | 70 |
| enableWindowsBackgroundUpdates | 71 |
| update.showReleaseNotes | 74 |
| showReleaseNotes | 78 |
| update.showPostInstallInfo | 82 |
| showPostInstallInfo | 87 |
| update.titleBar | 90 |
| updateTitleBar | 94 |

