# Patch evidence: event.js

- module: app-out-main-js:0029
- bundle: app/out/main.js range 69195..87958
- upstream: src/vs/base/common/event.ts sha256:2e930bbc67e434ec6a4765fae5b8f7e20901140e300882e59df2d92f9ace36f7
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 79
- bundle-only anchors: 4; upstream anchors absent from bundle: 48

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| emitter_listener_leak | 78638..78659 | yes | ame, u = new mR(l, o, i, t, d); this._errorHandler(u), Im(u, "emitter_listener_leak"); } return () => { const i = this._stacks.get(r) |
| emitter_listener_refusal | 81949..81973 | yes | return (this._options?.onListenerError \|\| yn)(m), Im(m, "emitter_listener_refusal"), J.None; } } if (this._disposed) { |
| Trying to listen to an Emitter that has already been disposed of. | 82068..82133 | yes | } if (this._disposed) { const o = new Error("Trying to listen to an Emitter that has already been disposed of."); return Im(o, "emitter_use_after_dispose"), J.None; |
| emitter_use_after_dispose | 82161..82186 | yes | Emitter that has already been disposed of."); return Im(o, "emitter_use_after_dispose"), J.None; } t && (e = e.bind(t)); const r = |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| VSCODE_DEV | 40 |
| snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here | 60 |
| third parties | 78 |
| number | 298 |
| onInstallExtension | 512 |
| HaltChainable | 634 |
| dominated | 1038 |
| ).slice(2).join( | 1075 |
| ListenerLeakError | 1094 |
| string | 1103 |
| ListenerRefusalError | 1112 |
| downgrades | 1174 |
| sparse | 1182 |
| overall dispose | 1217 |
| UNKNOWN stack | 1248 |
| disposed? | 1326 |
| Attempted to dispose unknown listener | 1329 |
| waitUntil can NOT be called asynchronous | 1485 |
| rejected | 1507 |
| Something fired data  | 1641 |

