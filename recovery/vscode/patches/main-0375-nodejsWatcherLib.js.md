# Patch evidence: nodejsWatcherLib.js

- module: app-out-main-js:0375
- bundle: app/out/main.js range 934272..944841
- upstream: src/vs/platform/files/node/watcher/nodejs/nodejsWatcherLib.ts sha256:336b50b2d830ff32edcfe384f04e9c22cbf06777ecac7ee770f23692cbb4b59c
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 50
- bundle-only anchors: 2; upstream anchors absent from bundle: 10

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| deleted_path_flush | 943506..943524 | yes | hrottledFileChangesEmitter.pending, entry: this.inDeletedPathFlush ? "deleted_path_flush" : "timer", request: this.request, targetKind: this.watchedKind, fold |
| timer | 943529..943534 | no (exists elsewhere upstream) | ter.pending, entry: this.inDeletedPathFlush ? "deleted_path_flush" : "timer", request: this.request, targetKind: this.watchedKind, folderChildren |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| ENOENT | 117 |
| number | 166 |
| /Volumes/ | 197 |
| ${realPath} | 220 |
| change | 256 |
| ${type} | 262 |
| rename | 284 |
| deleted | 335 |
| atomic save | 390 |
| Watcher shutdown because watched path got deleted | 442 |
| [ADDED] | 458 |
| files.watcherExclude | 510 |

