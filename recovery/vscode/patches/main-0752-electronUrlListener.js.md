# Patch evidence: electronUrlListener.js

- module: app-out-main-js:0752
- bundle: app/out/main.js range 1910241..1914201
- upstream: src/vs/platform/url/electron-main/electronUrlListener.ts sha256:ee346a3d0caffa806deca9d12b172a50389d39411d020c49bc6027aaf298f5db
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.714; shared rare anchors: 21
- bundle-only anchors: 3; upstream anchors absent from bundle: 5

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| ElectronURLListener: URL was not handled | 1911583..1911623 | yes | ginalUrl: o }, u).then((m) => { m \|\| this.logService.error("ElectronURLListener: URL was not handled"); }).catch((m) => { this.logService.error("Electro |
| ElectronURLListener: failed to handle URL | 1911686..1911727 | yes | handled"); }).catch((m) => { this.logService.error("ElectronURLListener: failed to handle URL", m); }); })), this.hasReadyWindow() ? (i.trace("Electr |
| Failed to open a window for a protocol URL | 1912754..1912796 | yes | penEmptyWindow({ context: 6 })).at(0); if (!e) throw new Error("Failed to open a window for a protocol URL"); if (await e.ready(), !el(e)) throw new Error(`Window ${e.id} |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| open-url | 24 |
| ElectronURLListener initialUrisToHandle: | 45 |
| ${environmentMainService.appRoot} | 55 |
| --open-url | 56 |
| ElectronURLListener: window is ready to handle URLs | 84 |
| ElectronURLListener: waiting for window to be ready to handle URLs... | 88 |
| ElectronURLListener#flush(): giving up after 10 retries | 104 |
| ElectronURLListener#flush(): flushing URLs | 109 |
| ElectronURLListener#flush(): URL was handled | 116 |
| ElectronURLListener#flush(): URL was not yet handled | 118 |

