# Patch evidence: ipc.net.js

- module: app-out-main-js:0065
- bundle: app/out/main.js range 303172..306597
- upstream: src/vs/base/parts/ipc/node/ipc.net.ts sha256:5b53c02361b21a386a74baaf2a713012558894f7e7cc8a9804a30b506be39e90
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.889; shared rare anchors: 22
- bundle-only anchors: 5; upstream anchors absent from bundle: 119

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| created | 303416..303423 | no (exists elsewhere upstream) | = true, this.debugLabel = t, this.socket = e, this.traceSocketEvent("created", { type: "NodeSocket" }), this._errorListener = (r) => { if |
| nodeEndReceived | 303962..303977 | no (exists elsewhere upstream) | Listener), this._endListener = () => { this.traceSocketEvent("nodeEndReceived"), this._canWrite = false, n = setTimeout(() => e.destroy(), nF); |
| nodeEndSent | 305329..305340 | no (exists elsewhere upstream) | yn(t); } } end() { this.traceSocketEvent("nodeEndSent"), this.socket.end(); } drain() { return this.traceSock |
| nodeDrainBegin | 305419..305433 | no (exists elsewhere upstream) | socket.end(); } drain() { return this.traceSocketEvent("nodeDrainBegin"), new Promise((e, t) => { if (this.socket.bufferSize === 0) |
| nodeDrainEnd | 305538..305550 | no (exists elsewhere upstream) | if (this.socket.bufferSize === 0) { this.traceSocketEvent("nodeDrainEnd"), e(); return; } const n = () => { |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| websocket | 32 |
| HTTP/1.1 400 Bad Request | 33 |
| sec-websocket-key | 38 |
| 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 | 40 |
| base64 | 41 |
| sec-websocket-extensions | 52 |
| NodeSocket | 113 |
| timeout | 254 |
| WebSocketNodeSocket | 351 |
| darwin | 905 |
| number | 914 |
| sha256 | 925 |
| ${handle} | 961 |
| connection | 968 |
| ipc-server-connection | 971 |
| string | 1017 |

