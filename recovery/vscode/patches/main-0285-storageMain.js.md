# Patch evidence: storageMain.js

- module: app-out-main-js:0285
- bundle: app/out/main.js range 666359..675995
- upstream: src/vs/platform/storage/electron-main/storageMain.ts sha256:ea3ec4057bb14ff57ccf5e482c65dd6fbeb4892fdb668ba051a404657856af28
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.867; shared rare anchors: 55
- bundle-only anchors: 3; upstream anchors absent from bundle: 6

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| unknown | 671614..671621 | no (exists elsewhere upstream) | const a = this.storageKind, o = _t(this.path), l = r[0]?.key ?? "unknown"; try { gs(new Error("[storage main] detected slow |
| warning | 671740..671747 | no (exists elsewhere upstream) | main] detected slow close() operation"), { captureContext: { level: "warning", tags: { cursor_storage_event: "slow_close", storage_kind: a, storag |
| slow_close | 671781..671791 | yes | { captureContext: { level: "warning", tags: { cursor_storage_event: "slow_close", storage_kind: a, storage_name: o, dominant_key: l, slow_close_bucke |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| [storage main] figuring out stats for slow DB on close() resulted in an error | 261 |
| state.vscdb | 285 |
| current | 342 |
| undefined | 346 |
| ${storageFilePath} | 376 |
| in-memory | 382 |
| workspace.json | 416 |

