# Patch evidence: telemetryUtils.js

- module: app-out-vs-workbench-workbench-desktop-main-js:3675
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 21804073..21807397
- upstream: src/vs/platform/telemetry/common/telemetryUtils.ts sha256:79afd13ea2b2f2f7afae9fc5e5ed39cec20d4c6c635b427c0f4b7c0e14bdd843
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 10
- bundle-only anchors: 7; upstream anchors absent from bundle: 55

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| someValue.macMachineId | 21804438..21804460 | yes | sionId", this.machineId = "someValue.machineId", this.macMachineId = "someValue.macMachineId", this.sqmId = "someValue.sqmId", this.devDeviceId = "someValue.devDe |
| ssh-remote | 21804900..21804910 | yes | i = { id: WGt, name: S(2254, null) }, Ech = /* @__PURE__ */ new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces |
| dev-container | 21804914..21804927 | yes | name: S(2254, null) }, Ech = /* @__PURE__ */ new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } |
| attached-container | 21804931..21804949 | yes | ll) }, Ech = /* @__PURE__ */ new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } }); function Ao(e, t) |
| tunnel | 21804960..21804966 | no (exists elsewhere upstream) | new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } }); function Ao(e, t) { return e.uuid |
| codespaces | 21804970..21804980 | yes | ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } }); function Ao(e, t) { return e.uuid && t.uuid ? e |
| amlext | 21804984..21804990 | yes | dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } }); function Ao(e, t) { return e.uuid && t.uuid ? e.uuid === |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| Trusted | 20 |
| someValue.sessionId | 32 |
| someValue.machineId | 33 |
| someValue.sqmId | 34 |
| someValue.devDeviceId | 35 |
| someValue.firstSessionDate | 36 |
| URIDescriptor | 72 |
| mimeType | 73 |
| scheme | 74 |
| t used, the product.json allows for telemetry, and we | 90 |
| s OSS and telemetry isn | 97 |
| re in OSS, but no telemetry key is provided so it | 106 |
| number | 182 |
| boolean | 185 |
| string | 188 |
| undefined | 196 |
| object | 233 |
| telemetry.internalTesting | 269 |
| ) && !stack.includes( | 296 |
| <REDACTED: user-file-path>/ | 339 |
| <REDACTED: user-file-path> | 346 |
| Google API Key | 361 |
| Slack Token | 363 |
| GitHub Token | 364 |
| Generic Secret | 365 |
| CLI Credentials | 366 |
| Microsoft Entra ID | 367 |
| s a trusted value it means it | 452 |
| isTrustedTelemetryValue | 453 |

