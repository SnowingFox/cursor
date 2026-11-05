# Patch evidence: telemetry.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0672
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2889489..2890784
- upstream: src/vs/platform/telemetry/common/telemetry.ts sha256:b0d4db18df8dd018c97622bed2a9ca3fa683492b1e74e2f68c3d4f79e6a97a94
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.5; shared rare anchors: 12
- bundle-only anchors: 5; upstream anchors absent from bundle: 11

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| inlineDiffAccept | 2889582..2889598 | yes | () { "use strict"; x(), Ze(), $h = vn("telemetryService"), R7c = "inlineDiffAccept", D7c = "inlineDiffReject", sis = vn("customEndpointTelemetryService" |
| inlineDiffReject | 2889608..2889624 | yes | , Ze(), $h = vn("telemetryService"), R7c = "inlineDiffAccept", D7c = "inlineDiffReject", sis = vn("customEndpointTelemetryService"), ois = "telemetry.curren |
| crashReporting | 2889787..2889801 | yes | elemetry.firstSessionDate", ais = "telemetry.lastSessionDate", M7c = "crashReporting", lKe = "crashReporting.enabled", cis = "telemetry.enableCrashReporte |
| crashReporting.enabled | 2889811..2889833 | yes | e", ais = "telemetry.lastSessionDate", M7c = "crashReporting", lKe = "crashReporting.enabled", cis = "telemetry.enableCrashReporter", Hvn = "telemetry.enableTelem |
| mainProcessPerformanceTelemetryService | 2889920..2889958 | yes | ry.enableCrashReporter", Hvn = "telemetry.enableTelemetry", CSg = vn("mainProcessPerformanceTelemetryService"); } }); function TSg(e, t, n) { const i = rpg(t) ? t.submenu.id : |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|

