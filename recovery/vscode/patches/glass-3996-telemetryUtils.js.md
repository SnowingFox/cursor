# Patch evidence: telemetryUtils.js

- module: app-out-vs-workbench-workbench-glass-main-js:3996
- bundle: app/out/vs/workbench/workbench.glass.main.js range 23322312..23325637
- upstream: src/vs/platform/telemetry/common/telemetryUtils.ts sha256:79afd13ea2b2f2f7afae9fc5e5ed39cec20d4c6c635b427c0f4b7c0e14bdd843
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 10
- bundle-only anchors: 7; upstream anchors absent from bundle: 55

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| someValue.macMachineId | 23322677..23322699 | yes | sionId", this.machineId = "someValue.machineId", this.macMachineId = "someValue.macMachineId", this.sqmId = "someValue.sqmId", this.devDeviceId = "someValue.devDe |
| ssh-remote | 23323139..23323149 | yes | s = { id: FIn, name: D(2254, null) }, ZVm = /* @__PURE__ */ new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces |
| dev-container | 23323153..23323166 | yes | name: D(2254, null) }, ZVm = /* @__PURE__ */ new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } |
| attached-container | 23323170..23323188 | yes | ll) }, ZVm = /* @__PURE__ */ new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } }); function Qc(t, e) |
| tunnel | 23323199..23323205 | no (exists elsewhere upstream) | new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } }); function Qc(t, e) { return t.uuid |
| codespaces | 23323209..23323219 | yes | ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } }); function Qc(t, e) { return t.uuid && e.uuid ? t |
| amlext | 23323223..23323229 | yes | dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"]); } }); function Qc(t, e) { return t.uuid && e.uuid ? t.uuid === |

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

