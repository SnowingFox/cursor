# Patch evidence: notifications.js

- module: app-out-vs-workbench-workbench-glass-main-js:5043
- bundle: app/out/vs/workbench/workbench.glass.main.js range 29065193..29093267
- upstream: src/vs/workbench/common/notifications.ts sha256:8283fa6051124d322df65fb797f4c702843f1f6cfec74554fc8ccf8ecceee965
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.9; shared rare anchors: 74
- bundle-only anchors: 2; upstream anchors absent from bundle: 20

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Github.copilot | 29067290..29067304 | yes | rces : void 0 }); } addNotification(e) { (e.source === "Github.copilot" \|\| typeof e.source != "string" && e.source?.id === "Github.copilot") |
| From COPILOT:  | 29067401..29067415 | yes | ring" && e.source?.id === "Github.copilot") && (e = { ...e, message: "From COPILOT: " + e.message }); const n = this.createViewItem(e); return |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| number | 196 |
| string | 510 |
| object | 728 |
| workbench.notifications.position | 800 |
| workbench.notifications.showInTitleBar | 801 |
| bottom-right | 805 |
| bottom-left | 806 |
| top-right | 807 |

