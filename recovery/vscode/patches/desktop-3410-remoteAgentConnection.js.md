# Patch evidence: remoteAgentConnection.js

- module: app-out-vs-workbench-workbench-desktop-main-js:3410
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 19823402..19853596
- upstream: src/vs/platform/remote/common/remoteAgentConnection.ts sha256:77d942f3b279cf209ca6d909576f15cec279f6256979e12fbf828ab447cd9c0f
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.813; shared rare anchors: 66
- bundle-only anchors: 5; upstream anchors absent from bundle: 54

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| ENETDOWN | 19823807..19823815 | no (exists elsewhere upstream) | before)", yOd = /* @__PURE__ */ new Set(["ETIMEDOUT", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGA |
| EHOSTUNREACH | 19823819..19823831 | no (exists elsewhere upstream) | d = /* @__PURE__ */ new Set(["ETIMEDOUT", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGAIN"]), oNn = cla |
| ENOTFOUND | 19823865..19823874 | no (exists elsewhere upstream) | TUNREACH", "ENETDOWN", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGAIN"]), oNn = class { get didTimeout() { return th |
| EAI_AGAIN | 19823878..19823887 | no (exists elsewhere upstream) | NETDOWN", "EHOSTUNREACH", "ECONNREFUSED", "ECONNRESET", "ENOTFOUND", "EAI_AGAIN"]), oNn = class { get didTimeout() { return this._state === |
| giveUp | 19841292..19841298 | yes | ion; const h = async (p) => { if (!c \|\| sNn(p)) return "giveUp"; const g = this._options.systemResumeGraceMs ?? fOd; |

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

