# Patch evidence: anythingQuickAccess.js

- module: app-out-vs-workbench-workbench-desktop-main-js:3705
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 21912674..21939762
- upstream: src/vs/workbench/contrib/search/browser/anythingQuickAccess.ts sha256:ed7847304dc0ca6489e323c27cefbc6253ce4a12de7fe66cf3c8d26a38646127
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.807; shared rare anchors: 167
- bundle-only anchors: 5; upstream anchors absent from bundle: 74

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| section | 21916717..21916724 | no (exists elsewhere upstream) | ?? "" }); continue; } if (a.type === "section") { s.push({ type: "section", sectionHeader: a.label ?? " |
| ripgrep_invocation_monitor_config | 21918829..21918862 | yes | ) { try { if (!this.experimentService.getDynamicConfig("ripgrep_invocation_monitor_config", { disableExposureLog: true }).report_initialize_caches) return; |
| quickopen_cache_init | 21919103..21919123 | yes | zed"), { captureContext: { level: "info", tags: { client_error_type: "quickopen_cache_init", force_upload: "forced" }, extra: { workspaceFolderCount: this.conte |
| forced | 21919141..21919147 | yes | o", tags: { client_error_type: "quickopen_cache_init", force_upload: "forced" }, extra: { workspaceFolderCount: this.contextService.getWorkspace() |
| No workspace found | 21938340..21938358 | yes | th > 0) n = Ee.joinPath(s[0].uri, e); else throw new Error("No workspace found"); } const r = ml(n); try { await t |

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

