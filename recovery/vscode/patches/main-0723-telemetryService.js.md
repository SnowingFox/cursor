# Patch evidence: telemetryService.js

- module: app-out-main-js:0723
- bundle: app/out/main.js range 1797132..1800987
- upstream: src/vs/platform/telemetry/common/telemetryService.ts sha256:710ee6cce9015a213c45fa0d813915a4395925b4b70905b261fb5d01ba407414
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.917; shared rare anchors: 42
- bundle-only anchors: 3; upstream anchors absent from bundle: 76

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| common.macMachineId | 1797728..1797747 | yes | ties["common.machineId"], this.macMachineId = this._commonProperties["common.macMachineId"], this.sqmId = this._commonProperties["common.sqmId"], this.devDevic |
| Crash Reporting | 1800333..1800348 | yes | lhe.registerConfiguration({ id: ZB, order: 1, type: "object", title: "Crash Reporting", properties: { [Vp]: { type: "string", enum: ["all", "off"], enumDes |
| Disable crash reporting. | 1800463..1800487 | yes | : ["all", "off"], enumDescriptions: ["Send OS-level crash reports.", "Disable crash reporting."], markdownDescription: oJe(), default: "all", restricted: true, scop |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| UserIdleStart | 46 |
| UserIdleStop | 47 |
| sessionID | 85 |
| common.machineId | 86 |
| common.sqmId | 87 |
| common.devDeviceId | 88 |
| common.firstSessionDate | 89 |
| common.msftInternal | 90 |
| isError | 223 |
| telemetry.telemetryLevelMd | 253 |
| telemetry.docsStatement | 255 |
| telemetry.docsAndPrivacyStatement | 256 |
| telemetry.restart | 257 |
| telemetry.crashReports | 259 |
| telemetry.errors | 260 |
| telemetry.usage | 261 |
| telemetry.telemetryLevel.tableDescription | 263 |
| telemetry.telemetryLevel.deprecated | 273 |
| properties | 296 |
| enumDescriptions | 300 |
| telemetry.telemetryLevel.default | 301 |
| telemetry.telemetryLevel.error | 302 |
| telemetry.telemetryLevel.crash | 303 |
| telemetry.telemetryLevel.off | 304 |
| markdownDescription | 306 |
| default | 307 |
| restricted | 308 |
| policy | 311 |
| TelemetryLevel | 312 |
| telemetry.telemetryLevel.policyDescription | 317 |
| telemetry.feedback.enabled | 341 |
| boolean | 342 |
| EnableFeedback | 346 |
| telemetry.enableTelemetry | 357 |
| telemetry.enableTelemetryMd | 358 |
| markdownDeprecationMessage | 361 |

