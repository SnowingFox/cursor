# Patch evidence: telemetry.js

- module: app-out-main-js:0284
- bundle: app/out/main.js range 665449..666359
- upstream: src/vs/platform/telemetry/common/telemetry.ts sha256:b0d4db18df8dd018c97622bed2a9ca3fa683492b1e74e2f68c3d4f79e6a97a94
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.5; shared rare anchors: 17
- bundle-only anchors: 4; upstream anchors absent from bundle: 6

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| telemetry.macMachineId | 665717..665739 | yes | , QB = "telemetry.lastSessionDate", wd = "telemetry.machineId", Ed = "telemetry.macMachineId", CI = "telemetry.sqmId", Fk = "telemetry.devDeviceId", ZB = "crashRe |
| crashReporting | 665802..665816 | yes | chineId", CI = "telemetry.sqmId", Fk = "telemetry.devDeviceId", ZB = "crashReporting", Vp = "crashReporting.enabled", II = "telemetry.enableCrashReporter" |
| crashReporting.enabled | 665825..665847 | yes | ry.sqmId", Fk = "telemetry.devDeviceId", ZB = "crashReporting", Vp = "crashReporting.enabled", II = "telemetry.enableCrashReporter", Wk = "telemetry.enableTelemet |
| mainProcessPerformanceTelemetryService | 665931..665969 | yes | etry.enableCrashReporter", Wk = "telemetry.enableTelemetry", iWe = Q("mainProcessPerformanceTelemetryService"); } }); import * as aWe from "fs"; function oWe(e) { return e < 5e |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|

