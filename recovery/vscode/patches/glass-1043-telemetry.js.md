# Patch evidence: telemetry.js

- module: app-out-vs-workbench-workbench-glass-main-js:1043
- bundle: app/out/vs/workbench/workbench.glass.main.js range 4621226..4622522
- upstream: src/vs/platform/telemetry/common/telemetry.ts sha256:b0d4db18df8dd018c97622bed2a9ca3fa683492b1e74e2f68c3d4f79e6a97a94
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.5; shared rare anchors: 12
- bundle-only anchors: 5; upstream anchors absent from bundle: 11

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| inlineDiffAccept | 4621319..4621335 | yes | () { "use strict"; E(), It(), Uv = jn("telemetryService"), rzd = "inlineDiffAccept", szd = "inlineDiffReject", ozd = jn("customEndpointTelemetryService" |
| inlineDiffReject | 4621345..4621361 | yes | , It(), Uv = jn("telemetryService"), rzd = "inlineDiffAccept", szd = "inlineDiffReject", ozd = jn("customEndpointTelemetryService"), uqo = "telemetry.curren |
| crashReporting | 4621524..4621538 | yes | elemetry.firstSessionDate", dqo = "telemetry.lastSessionDate", azd = "crashReporting", $yt = "crashReporting.enabled", hqo = "telemetry.enableCrashReporte |
| crashReporting.enabled | 4621548..4621570 | yes | e", dqo = "telemetry.lastSessionDate", azd = "crashReporting", $yt = "crashReporting.enabled", hqo = "telemetry.enableCrashReporter", foi = "telemetry.enableTelem |
| mainProcessPerformanceTelemetryService | 4621657..4621695 | yes | ry.enableCrashReporter", foi = "telemetry.enableTelemetry", bLy = jn("mainProcessPerformanceTelemetryService"); } }); function yLy(t, e, n) { const i = pAy(e) ? e.submenu.id : |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|

