# Patch evidence: processMainService.js

- module: app-out-main-js:0663
- bundle: app/out/main.js range 1611218..1629687
- upstream: src/vs/platform/process/electron-main/processMainService.ts sha256:689caac9b5bce0778306e77fafdbfec6f38c82a4f8c6f4976211387acb3bf857
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.24; shared rare anchors: 14
- bundle-only anchors: 40; upstream anchors absent from bundle: 2

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| issue.processExplorerWindowState | 1611430..1611462 | yes | (), te(), Gi(), Ha(), Tt(), Hg(), br(), Bi(), Di(), bw(), pt(), FD = "issue.processExplorerWindowState", Zc = "__shared__", Dme = "Shared", WD = /bc-[a-f0-9\-]{8,}/i, yu = |
| Shared | 1611491..1611497 | no (exists elsewhere upstream) | ), FD = "issue.processExplorerWindowState", Zc = "__shared__", Dme = "Shared", WD = /bc-[a-f0-9\-]{8,}/i, yu = class { constructor(e, t, n, r, |
| vscode:listProcesses | 1612214..1612234 | yes | his.registerListeners(); } registerListeners() { Te.on("vscode:listProcesses", async (e) => { const t = []; try { t.push |
| vscode:listProcessesResponse | 1613347..1613375 | yes | Listing processes failed: ${n}`); } this.safeSend(e, "vscode:listProcessesResponse", t); }), Te.on("vscode:listProcessesForWorkspaces", async (e, |
| vscode:listProcessesForWorkspaces | 1613399..1613432 | yes | this.safeSend(e, "vscode:listProcessesResponse", t); }), Te.on("vscode:listProcessesForWorkspaces", async (e, t) => { const n = rze(t), r = /* @__PURE__ */ new |
| vscode:listProcessesForWorkspacesResponse | 1615877..1615918 | yes | en, s--)); const o = { groups: i }; this.safeSend(e, "vscode:listProcessesForWorkspacesResponse", o); }), Te.on("vscode:workbenchCommand", (e, t) => { |
| vscode:workbenchCommand | 1615942..1615965 | yes | (e, "vscode:listProcessesForWorkspacesResponse", o); }), Te.on("vscode:workbenchCommand", (e, t) => { const { id: n, from: r, args: s } = t; |
| workbench.action.openDevToolsForBgWindow | 1616046..1616086 | yes | > { const { id: n, from: r, args: s } = t; if (n === "workbench.action.openDevToolsForBgWindow" && r === "processExplorer") { this.openDevToolsForPid(s[0] |
| processExplorer | 1611436..1611451 | no (exists elsewhere upstream) | (), Gi(), Ha(), Tt(), Hg(), br(), Bi(), Di(), bw(), pt(), FD = "issue.processExplorerWindowState", Zc = "__shared__", Dme = "Shared", WD = /bc-[a-f0-9\-]{8 |
| vscode:runAction | 1616453..1616469 | no (exists elsewhere upstream) | pected command source: ${r}`); } i?.webContents.send("vscode:runAction", { id: n, from: r, args: s }); }), Te.on("vscode:closeProcessE |
| vscode:closeProcessExplorer | 1616519..1616546 | yes | nd("vscode:runAction", { id: n, from: r, args: s }); }), Te.on("vscode:closeProcessExplorer", (e) => { this.processExplorerWindow?.close(); }), Te. |
| vscode:pidToNameRequest | 1616620..1616643 | yes | e) => { this.processExplorerWindow?.close(); }), Te.on("vscode:pidToNameRequest", async (e) => { const t = await this.getKnownProcessLabels() |
| vscode:pidToNameResponse | 1616741..1616765 | yes | nst t = await this.getKnownProcessLabels(); this.safeSend(e, "vscode:pidToNameResponse", Array.from(t.entries())); }); } async getKnownProcess |
| bg-window | 1617359..1617368 | yes | { const r = Ia(n.remoteAuthority); r ? t.set(n.pid, `bg-window (${r})`) : t.set(n.pid, `window [${n.id}] (${n.title})`); } |
| webview | 1618081..1618088 | no (exists elsewhere upstream) | etAllWebContents()) { if (t.isDestroyed() \|\| t.getType() !== "webview") continue; let n; try { n = t.getOSProcess |
| browser webview | 1618411..1618426 | yes | YKe(t.getURL(), s?.id), a = e.get(n); e.set(n, a?.startsWith("browser webview") ? `${a}, ${wme(t.getURL())}` : i); } } addProcessTree |
| workspaceGroups | 1619748..1619763 | yes | s, n, { backgroundColor: e.styles.backgroundColor, title: e.mode === "workspaceGroups" ? E(2177, null) : E(2178, null), zoomLevel: e.zoomLevel, alwaysOnTop |
| process-explorer | 1619844..1619860 | no (exists elsewhere upstream) | null) : E(2178, null), zoomLevel: e.zoomLevel, alwaysOnTop: true }, "process-explorer"), n.update({ appRoot: this.environmentMainService.appRoot, windowId: |
| close | 1616526..1616531 | no (exists elsewhere upstream) | ode:runAction", { id: n, from: r, args: s }); }), Te.on("vscode:closeProcessExplorer", (e) => { this.processExplorerWindow?.close() |
| moved | 1621030..1621035 | no (exists elsewhere upstream) | ice.setItem(FD, l); }; this.processExplorerWindow.on("moved", i), this.processExplorerWindow.on("resized", i); } this |
| resized | 1621073..1621080 | yes | .processExplorerWindow.on("moved", i), this.processExplorerWindow.on("resized", i); } this.processExplorerWindow && this.focusWindow(th |
| record-until-full | 1622397..1622414 | no (exists elsewhere upstream) | wait this.getKnownProcessLabels(); const e = { recording_mode: "record-until-full", included_categories: ["disabled-by-default-v8.cpu_profiler", "disab |
| disabled-by-default-v8.cpu_profiler | 1622440..1622475 | no (exists elsewhere upstream) | nst e = { recording_mode: "record-until-full", included_categories: ["disabled-by-default-v8.cpu_profiler", "disabled-by-default-v8.cpu_profiler.hires"], excluded_categories: |
| disabled-by-default-v8.cpu_profiler.hires | 1622479..1622520 | yes | -full", included_categories: ["disabled-by-default-v8.cpu_profiler", "disabled-by-default-v8.cpu_profiler.hires"], excluded_categories: ["*"] }; await qg.startRecording(e); |
| trace-category-filter | 1622816..1622837 | no (exists elsewhere upstream) | ownProcessLabels(); const t = this.environmentMainService.args["trace-category-filter"]?.split(",") \|\| []; t.push("disabled-by-default-memory-infra", |
| disabled-by-default-memory-infra | 1622873..1622905 | no (exists elsewhere upstream) | ervice.args["trace-category-filter"]?.split(",") \|\| []; t.push("disabled-by-default-memory-infra", "disabled-by-default-memory-infra.v8.code_stats"); const n = |
| disabled-by-default-memory-infra.v8.code_stats | 1622909..1622955 | yes | ?.split(",") \|\| []; t.push("disabled-by-default-memory-infra", "disabled-by-default-memory-infra.v8.code_stats"); const n = { included_categories: t, excluded_categories: ["* |
| detailed | 1623082..1623090 | no (exists elsewhere upstream) | tegories: ["*"], memory_dump_config: { allowed_dump_modes: ["light", "detailed"], triggers: [{ type: "periodic_interval", mode: "detailed", min_time |
| periodic_interval | 1623114..1623131 | no (exists elsewhere upstream) | fig: { allowed_dump_modes: ["light", "detailed"], triggers: [{ type: "periodic_interval", mode: "detailed", min_time_between_dumps_ms: 1e4 }, { type: "period |
| light | 1623073..1623078 | no (exists elsewhere upstream) | cluded_categories: ["*"], memory_dump_config: { allowed_dump_modes: ["light", "detailed"], triggers: [{ type: "periodic_interval", mode: "detaile |
| disabled-by-default-v8.gc_stats | 1623555..1623586 | no (exists elsewhere upstream) | nst e = { recording_mode: "record-until-full", included_categories: ["disabled-by-default-v8.gc_stats"], excluded_categories: ["*"] }; await qg.startRecording(e); |
| process_name | 1624364..1624376 | yes | r = [], s = /\{"args":\{"name":"([^"]*)"\},"cat":"__metadata","name":"process_name","ph":"M","pid":(\d+),"tid":0,"ts":0\}/g; let i = e.replace(s, |
| thread_name | 1624681..1624692 | yes | const a = /\{"args":\{"name":"([^"]*)"\},"cat":"__metadata","name":"thread_name","ph":"M","pid":(\d+),"tid":(\d+),"ts":0\}/g; i = i.replace(a, |
| metadata | 1624346..1624354 | no (exists elsewhere upstream) | E__ */ new Set(), r = [], s = /\{"args":\{"name":"([^"]*)"\},"cat":"__metadata","name":"process_name","ph":"M","pid":(\d+),"tid":0,"ts":0\}/g; |
| CrBrowserMain | 1625862..1625875 | yes | , ts: 0 }; } getProfileThreadName(e, t) { return t === "CrBrowserMain" \|\| t === "CrRendererMain" \|\| t === "node.CrUtilityMain" ? e : t === |
| CrRendererMain | 1625887..1625901 | yes | rofileThreadName(e, t) { return t === "CrBrowserMain" \|\| t === "CrRendererMain" \|\| t === "node.CrUtilityMain" ? e : t === "v8:ProfEvntProc" ? `${e} |
| node.CrUtilityMain | 1625913..1625931 | yes | return t === "CrBrowserMain" \|\| t === "CrRendererMain" \|\| t === "node.CrUtilityMain" ? e : t === "v8:ProfEvntProc" ? `${e} CPU profiler` : `${e} (${t})`; |
| v8:ProfEvntProc | 1625946..1625961 | yes | \|\| t === "CrRendererMain" \|\| t === "node.CrUtilityMain" ? e : t === "v8:ProfEvntProc" ? `${e} CPU profiler` : `${e} (${t})`; } async cursorStopPro |
| vs/base/parts/sandbox/electron-sandbox/preload.js | 1628239..1628288 | yes | yu.DEFAULT_BACKGROUND_COLOR, webPreferences: { preload: Jt.asFileUri("vs/base/parts/sandbox/electron-sandbox/preload.js").fsPath, additionalArguments: [`--vscode-window-config=${t.resource. |
| bypassHeatCheck | 1628433..1628448 | no (exists elsewhere upstream) | ing()}`], v8CacheOptions: this.environmentMainService.useCodeCache ? "bypassHeatCheck" : "none", enableWebSQL: false, spellcheck: false, zoomFactor: sC(n.z |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| issueService#getPerformanceInfo  | 83 |

