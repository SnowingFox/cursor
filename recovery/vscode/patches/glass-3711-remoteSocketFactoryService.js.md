# Patch evidence: remoteSocketFactoryService.js

- module: app-out-vs-workbench-workbench-glass-main-js:3711
- bundle: app/out/vs/workbench/workbench.glass.main.js range 21216693..21217482
- upstream: src/vs/platform/remote/common/remoteSocketFactoryService.ts sha256:4d181c4a14a66785e5b36b08625480d731628639beadd6cf5282a54ca134d969
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 7
- bundle-only anchors: 1; upstream anchors absent from bundle: 0

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| RemoteSocketFactoryMissing | 21216821..21216847 | yes | t"; E(), Qe(), It(), WTn = jn("remoteSocketFactoryService"), eXr = "RemoteSocketFactoryMissing", T0m = class { constructor() { this.factories = {}; } |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| number | 42 |

