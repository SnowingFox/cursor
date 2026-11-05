# Patch evidence: remoteAgentConnection.js

- module: app-out-main-js:1016
- bundle: app/out/main.js range 3346007..3375688
- upstream: src/vs/platform/remote/common/remoteAgentConnection.ts sha256:77d942f3b279cf209ca6d909576f15cec279f6256979e12fbf828ab447cd9c0f
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.813; shared rare anchors: 63
- bundle-only anchors: 5; upstream anchors absent from bundle: 57

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| ENETDOWN | 3346411..3346419 | no (exists elsewhere upstream) | before)", m9e = /* @__PURE__ */ new Set(["ETIMEDOUT", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGA |
| EHOSTUNREACH | 3346423..3346435 | no (exists elsewhere upstream) | e = /* @__PURE__ */ new Set(["ETIMEDOUT", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGAIN"]), fb = clas |
| ENOTFOUND | 3346469..3346478 | no (exists elsewhere upstream) | TUNREACH", "ENETDOWN", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGAIN"]), fb = class { get didTimeout() { return thi |
| EAI_AGAIN | 3346482..3346491 | no (exists elsewhere upstream) | NETDOWN", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGAIN"]), fb = class { get didTimeout() { return this._state === |
| giveUp | 3363850..3363856 | yes | ion; const m = async (f) => { if (!l \|\| Z2e(f)) return "giveUp"; const v = this._options.systemResumeGraceMs ?? a9e; |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| Management | 35 |
| ExtensionHost | 37 |
| Tunnel | 39 |
| connectionType | 56 |
| pending | 105 |
| timedout | 112 |
| Time limit reached | 146 |
| ETIMEDOUT | 147 |
| connect | 148 |
| resolved | 157 |
| rejected | 166 |
| 00000000000000000000 | 260 |
| Unexpected handshake message | 269 |
| VSCODE_CONNECTION_ERROR | 270 |
| Refused to connect to unsupported server | 278 |
| number | 809 |
| reconnect | 830 |

