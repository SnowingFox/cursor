# Patch evidence: anythingQuickAccess.js

- module: app-out-vs-workbench-workbench-glass-main-js:4026
- bundle: app/out/vs/workbench/workbench.glass.main.js range 23431150..23458234
- upstream: src/vs/workbench/contrib/search/browser/anythingQuickAccess.ts sha256:ed7847304dc0ca6489e323c27cefbc6253ce4a12de7fe66cf3c8d26a38646127
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.807; shared rare anchors: 167
- bundle-only anchors: 5; upstream anchors absent from bundle: 74

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| section | 23435197..23435204 | no (exists elsewhere upstream) | ?? "" }); continue; } if (a.type === "section") { s.push({ type: "section", sectionHeader: a.label ?? " |
| ripgrep_invocation_monitor_config | 23437308..23437341 | yes | ) { try { if (!this.experimentService.getDynamicConfig("ripgrep_invocation_monitor_config", { disableExposureLog: true }).report_initialize_caches) return; |
| quickopen_cache_init | 23437582..23437602 | yes | zed"), { captureContext: { level: "info", tags: { client_error_type: "quickopen_cache_init", force_upload: "forced" }, extra: { workspaceFolderCount: this.conte |
| forced | 23437620..23437626 | yes | o", tags: { client_error_type: "quickopen_cache_init", force_upload: "forced" }, extra: { workspaceFolderCount: this.contextService.getWorkspace() |
| No workspace found | 23456811..23456829 | yes | th > 0) n = rt.joinPath(s[0].uri, t); else throw new Error("No workspace found"); } const r = Mc(n); try { await t |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| noAnythingResults | 102 |
| separator | 380 |
| recency | 539 |
| someFile someFolder | 661 |
| someFile | 662 |
| openFileHandler | 720 |
| s a filter, we don | 829 |
| helpPickAriaLabel | 849 |
| string | 907 |
| openToSide | 1045 |
| openToBottom | 1046 |
| dirty-anything  | 1052 |
| closeEditor | 1053 |
| filePickAriaLabelDirty | 1064 |

