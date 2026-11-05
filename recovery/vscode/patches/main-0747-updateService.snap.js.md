# Patch evidence: updateService.snap.js

- module: app-out-main-js:0747
- bundle: app/out/main.js range 1882852..1887044
- upstream: src/vs/platform/update/electron-main/updateService.snap.ts sha256:3ff38a4c586c7d18fe2485b5c920703dc5e504df1592dd4d64beb08ffa84f3ab
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.875; shared rare anchors: 28
- bundle-only anchors: 2; upstream anchors absent from bundle: 11

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| available for download | 1884071..1884093 | no (exists elsewhere upstream) | ate#downloadUpdate, state = ", this.state.type), this.state.type === "available for download" && await this.doDownloadUpdate(this.state); } doDownloadUpda |
| downloaded | 1884340..1884350 | no (exists elsewhere upstream) | update#applyUpdate, state = ", this.state.type), this.state.type === "downloaded" && await this.doApplyUpdate(); } doApplyUpdate() { ret |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| update#setState | 31 |
| update#ctor - updates are disabled | 49 |
| update#checkForUpdates, state =  | 69 |
| update#downloadUpdate, state =  | 79 |
| update#downloadUpdate - skipping download because connection is metered | 86 |
| update#applyUpdate, state =  | 98 |
| update#quitAndInstall, state =  | 112 |
| update#quitAndInstall(): before lifecycle quit() | 122 |
| update#quitAndInstall(): quit was vetoed, restoring Ready state | 127 |
| update#quitAndInstall(): running raw#quitAndInstall() | 132 |
| change | 174 |
| current | 175 |
| something | 189 |
| sleep 3 &&  | 203 |
| ignore | 206 |
| update#checkForSnapUpdate(): Could not get realpath of application. | 218 |

