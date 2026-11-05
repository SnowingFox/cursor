# Patch evidence: event.js

- module: app-out-vs-workbench-workbench-glass-main-js:0223
- bundle: app/out/vs/workbench/workbench.glass.main.js range 325033..347237
- upstream: src/vs/base/common/event.ts sha256:2e930bbc67e434ec6a4765fae5b8f7e20901140e300882e59df2d92f9ace36f7
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 99
- bundle-only anchors: 4; upstream anchors absent from bundle: 28

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| emitter_listener_leak | 334205..334226 | yes | e, u = new J0o(l, a, s, e, c); this._errorHandler(u), ldn(u, "emitter_listener_leak"); } return () => { const s = this._stacks.get(i) |
| emitter_listener_refusal | 337535..337559 | yes | return (this._options?.onListenerError \|\| xr)(d), ldn(d, "emitter_listener_refusal"), st.None; } } if (this._disposed) { |
| Trying to listen to an Emitter that has already been disposed of. | 337655..337720 | yes | } if (this._disposed) { const a = new Error("Trying to listen to an Emitter that has already been disposed of."); return ldn(a, "emitter_use_after_dispose"), st.None; |
| emitter_use_after_dispose | 337749..337774 | yes | mitter that has already been disposed of."); return ldn(a, "emitter_use_after_dispose"), st.None; } e && (t = t.bind(e)); const i = |

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

