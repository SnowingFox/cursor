# Patch evidence: mcpService.js

- module: app-out-vs-workbench-workbench-glass-main-js:4293
- bundle: app/out/vs/workbench/workbench.glass.main.js range 24617906..24820565
- upstream: src/vs/workbench/contrib/mcp/common/mcpService.ts sha256:2ebcec002338d8374a023f9856da41654fda0603df5d5d21d63f5a9bb7e635b1
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0.09; shared rare anchors: 5
- bundle-only anchors: 193; upstream anchors absent from bundle: 56

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Symbol. | 24618498..24618505 | yes | ), PEi(), y2(), cal = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), ual = (t) => { throw TypeError(t); }, _R = ( |
| Object expected | 24618709..24618724 | yes | null) { typeof e != "object" && typeof e != "function" && ual("Object expected"); var i, r; n && (i = e[cal("asyncDispose")]), i === voi |
| asyncDispose | 24618767..24618779 | yes | on" && ual("Object expected"); var i, r; n && (i = e[cal("asyncDispose")]), i === void 0 && (i = e[cal("dispose")], n && (r = i)), typeof i |
| Object not disposable | 24618871..24618892 | yes | (i = e[cal("dispose")], n && (r = i)), typeof i != "function" && ual("Object not disposable"), r && (i = function() { try { r.call(this); |
| SuppressedError | 24619142..24619157 | yes | push([n]); return e; }, iAn = (t, e, n) => { var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) { return |
| An error was suppressed during disposal | 24619343..24619382 | yes | rror = o, c.suppressed = a, c; }, r = (o) => e = n ? new i(o, e, "An error was suppressed during disposal") : (n = true, o), s = (o) => { for (; o = t.pop(); ) try { |
| Origin | 24619698..24619704 | no (exists elsewhere upstream) | }; return s(); }, Blg = { identifier: U6t.identifier, name: "Origin", type: "streamableHttp", url: U6t.serverUrl }, dal = "cursor-origin- |
| streamableHttp | 24619714..24619728 | yes | s(); }, Blg = { identifier: U6t.identifier, name: "Origin", type: "streamableHttp", url: U6t.serverUrl }, dal = "cursor-origin-readonly", hal = class { |
| cursor-origin-readonly | 24619760..24619782 | yes | name: "Origin", type: "streamableHttp", url: U6t.serverUrl }, dal = "cursor-origin-readonly", hal = class { constructor(t) { this.timer = t.timer, this |
| mcp.refreshSnapshot | 24620545..24620564 | yes | }, gal = "Cursor MCP extension host restarted; reconnecting", wss = "mcp.refreshSnapshot", fal = 4, val = "mcp.sharedOAuthFanoutEvent.", _al = 2e3, jlg = 5 * |
| mcp.sharedOAuthFanoutEvent. | 24620583..24620610 | yes | estarted; reconnecting", wss = "mcp.refreshSnapshot", fal = 4, val = "mcp.sharedOAuthFanoutEvent.", _al = 2e3, jlg = 5 * 6e4, bal = /* @__PURE__ */ Symbol("MCP_METADAT |
| MCP_METADATA_ABORT_ERROR | 24620669..24620693 | yes | anoutEvent.", _al = 2e3, jlg = 5 * 6e4, bal = /* @__PURE__ */ Symbol("MCP_METADATA_ABORT_ERROR"), yal = class extends (Flg = Error, Olg = bal, Flg) { constructo |
| McpMetadataAbortError | 24620811..24620832 | yes | Flg) { constructor(t) { super(t), this[Olg] = true, this.isMcpMetadataAbortError = true, this.name = "McpMetadataAbortError"; } }, $lg = class e |
| McpIpcTimeoutError | 24621006..24621024 | yes | { super(`MCP IPC timeout: ${t} exceeded ${e}ms`), this.name = "McpIpcTimeoutError"; } }, Sal = class { constructor(t, e, n, i, r, s) { |
| mcp.ipc.connection_type | 24621555..24621578 | yes | ithName(`mcp.runCommand.${t}`))); return s.span.setAttribute("mcp.ipc.connection_type", this.connectionType), await ial(s.span, t, this.metricsService, asy |
| No provider found | 24621740..24621757 | yes | onst o = await this.getProvider(); if (!o) throw new Error("No provider found"); const a = this.getTimeoutMsForAction(t); if (a |
| mcp.tool_name | 24622842..24622855 | yes | "mcp.ipc.connection_type", this.connectionType), a.span.setAttribute("mcp.tool_name", t), await ial(a.span, RP.CallTool, this.metricsService, async () => |
| abort | 24622608..24622613 | no (exists elsewhere upstream) | ync callTool(t, e, n) { var i = []; try { const { abortSignal: o } = n; o?.throwIfAborted(); const a = nAn(i, |
| Tool call was cancelled | 24623386..24623409 | yes | o.addEventListener("abort", () => { h(new Error("Tool call was cancelled")); }); })]) : u = await c, u?.result; |
| authenticate | 24624600..24624612 | no (exists elsewhere upstream) | erId, serverInfo: t, serverName: this.serverName, armLoopback: e === "authenticate" }); } async logoutServer() { await this._timedRunComma |
| mcpProviderServiceClient.listOfferings | 24625951..24625989 | yes | aTimeoutMs; return Kzt(() => this.provider.listOfferings(), t, "mcpProviderServiceClient.listOfferings"); } async listToolsRaw() { const t = await this.listOf |
| connected | 24626372..24626381 | no (exists elsewhere upstream) | (t) { } async reloadClient(t) { return { success: true, connected: true, statusType: "connected" }; } async logoutServer() { |
| Server is blocked by team admin | 24626582..24626613 | yes | { return this.provider.instructions; } }, Css = 3, rAn = "Server is blocked by team admin", sAn = "Server is not on the team network allowlist", oAn = { server |
| Server is not on the team network allowlist | 24626623..24626666 | yes | ; } }, Css = 3, rAn = "Server is blocked by team admin", sAn = "Server is not on the team network allowlist", oAn = { server_placed: yns, placement_unknown: YCi }, Wlg = /* @__P |
| mcp.hosted_placement.row_transition | 24626796..24626831 | yes | = /* @__PURE__ */ new Set([rAn, sAn, ...Object.values(oAn)]), Glg = "mcp.hosted_placement.row_transition", kal = "mcp_access_network_allowlist", Yzt = "mcp_settings_overhaul" |
| mcp_access_network_allowlist | 24626841..24626869 | yes | ct.values(oAn)]), Glg = "mcp.hosted_placement.row_transition", kal = "mcp_access_network_allowlist", Yzt = "mcp_settings_overhaul", qlg = /* @__PURE__ */ new Set(["all" |
| mcp_settings_overhaul | 24626879..24626900 | yes | acement.row_transition", kal = "mcp_access_network_allowlist", Yzt = "mcp_settings_overhaul", qlg = /* @__PURE__ */ new Set(["all", "off", "custom"]), NEi = clas |
| custom | 24626949..24626955 | no (exists elsewhere upstream) | mcp_settings_overhaul", qlg = /* @__PURE__ */ new Set(["all", "off", "custom"]), NEi = class { constructor(t) { this.consecutiveFailures |
| No server info found | 24627667..24627687 | yes | t instanceof Error ? t.message : String(t); return e.includes("No server info found") \|\| e.includes("No adapter found") \|\| e.includes("No provider found" |
| No adapter found | 24627705..24627721 | yes | ng(t); return e.includes("No server info found") \|\| e.includes("No adapter found") \|\| e.includes("No provider found"); } recordRecoveryFailure |
| mcpService.knownServerIds | 24632253..24632278 | yes | wnServerIds = /* @__PURE__ */ new Set(), this.KNOWN_SERVER_IDS_KEY = "mcpService.knownServerIds", this.pendingRefreshResolvers = [], this.initializeServersRequestedD |
| mcp.slack.com | 24635838..24635851 | yes | me; } catch { return; } if (oe === "mcp.slack.com") { const se = this.experimentsService.getDynamicConfigPara |
| slack_mcp_client_id | 24635924..24635943 | yes | { const se = this.experimentsService.getDynamicConfigParam("slack_mcp_client_id", "clientId", { disableExposureLog: false }); return se ? { |
| clientId | 24635947..24635955 | no (exists elsewhere upstream) | this.experimentsService.getDynamicConfigParam("slack_mcp_client_id", "clientId", { disableExposureLog: false }); return se ? { CLIENT_ID: |
| setup.shopify.com | 24636070..24636087 | yes | return se ? { CLIENT_ID: se } : void 0; } if (oe === "setup.shopify.com") { const se = this.experimentsService.getDynamicConfigPara |
| shopify_mcp_client_id | 24636160..24636181 | yes | { const se = this.experimentsService.getDynamicConfigParam("shopify_mcp_client_id", "clientId", { disableExposureLog: false }); return se ? { |
| mcp.session_start | 24636338..24636355 | yes | : void 0; } } }, this.metricsService.increment({ stat: "mcp.session_start" }), this._shouldEmitCoalesceMetrics = this.experimentsService.checkF |
| mcp_coalesce_metrics_sampling | 24636437..24636466 | yes | shouldEmitCoalesceMetrics = this.experimentsService.checkFeatureGate("mcp_coalesce_metrics_sampling", { disableExposureLog: false }), this._metaMcpToolEnabled = this.exp |
| meta_mcp_tool | 24636570..24636583 | yes | this._metaMcpToolEnabled = this.experimentsService.checkFeatureGate("meta_mcp_tool", { disableExposureLog: false }), qG1(this.experimentsService.checkFe |
| mcp_structured_logging | 24636664..24636686 | yes | eExposureLog: false }), qG1(this.experimentsService.checkFeatureGate("mcp_structured_logging", { disableExposureLog: false })); const q = (ie) => this.workb |
| workbench.mcp.files | 24636971..24636990 | yes | this.mcpFilesLogger = this._register(this.loggerService.createLogger("workbench.mcp.files", { name: "MCP Logs", hidden: false })), this.mcpOAuthLogger = this._ |
| MCP Logs | 24637002..24637010 | yes | ister(this.loggerService.createLogger("workbench.mcp.files", { name: "MCP Logs", hidden: false })), this.mcpOAuthLogger = this._register(this.logger |
| workbench.mcp.oauth | 24637102..24637121 | yes | this.mcpOAuthLogger = this._register(this.loggerService.createLogger("workbench.mcp.oauth", { name: "MCP OAuth", hidden: false })), this._mcpAllowlistLogger = |
| MCP OAuth | 24637133..24637142 | yes | ister(this.loggerService.createLogger("workbench.mcp.oauth", { name: "MCP OAuth", hidden: false })), this._mcpAllowlistLogger = this._register(this.l |
| workbench.mcp.allowlist | 24637239..24637262 | yes | _mcpAllowlistLogger = this._register(this.loggerService.createLogger("workbench.mcp.allowlist", { name: "MCP Allowlist", hidden: false })), this._logAllowlist("inf |
| MCP Allowlist | 24637274..24637287 | yes | r(this.loggerService.createLogger("workbench.mcp.allowlist", { name: "MCP Allowlist", hidden: false })), this._logAllowlist("info", "[MCPService] MCP All |
| disabledMcpServers | 24637476..24637494 | yes | ePolicyFingerprint = this.getAdminMcpRuntimePolicyFingerprint(), this.disabledMcpServers = this._register(Xh(this.storageService, "disabledMcpServers")), this |
| disabledGlobalMcpServers | 24637565..24637589 | yes | = this._register(Xh(this.storageService, "disabledMcpServers")), this.disabledGlobalMcpServers = this._register(Xh(this.storageService, "disabledGlobalMcpServers")) |
| approvedProjectMcpServers | 24637714..24637739 | yes | alMcpServers")), this.migrateLegacyOriginMcpBuiltinIdentifier(), this.approvedProjectMcpServers = this._register(Xh(this.storageService, "approvedProjectMcpServers") |
| thirdPartyExtensibilityEnabled | 24637893..24637923 | yes | artyExtensibilityObservable = this._register(Xh(this.storageService, "thirdPartyExtensibilityEnabled")), this.useProfileScopedGlobalMcpDisabledState = this.experimentsSer |
| mcp_profile_scoped_global_disabled_state | 24638016..24638056 | yes | pedGlobalMcpDisabledState = this.experimentsService.checkFeatureGate("mcp_profile_scoped_global_disabled_state", { disableExposureLog: false }), this.useProfileScopedGlobalMcpDisab |
| third_party_extensibility_changed | 24638708..24638741 | yes | bled changed, refreshing plugin servers"), this.refreshPluginServers("third_party_extensibility_changed").then(() => this.initializeServers("third_party_extensibility_change |
| login_changed_logged_in | 24638917..24638940 | yes | stener = (ie) => { this.reconcileOriginMcpBuiltinServer(ie ? "login_changed_logged_in" : "login_changed_logged_out"); }; const K = Fi.as(p7.JSO |
| login_changed_logged_out | 24638945..24638969 | yes | his.reconcileOriginMcpBuiltinServer(ie ? "login_changed_logged_in" : "login_changed_logged_out"); }; const K = Fi.as(p7.JSONContribution); K.regis |
| mcp_providers_changed | 24639615..24639636 | yes | ar(), this.mcpProcessRoutedServerIds.clear(), this.initializeServers("mcp_providers_changed"); })), this._register(this.everythingProviderService.onDidChan |
| dedupe_mcp_servers_selection_changed | 24640074..24640110 | yes | .has(se.identifier) \|\| this.removeHiddenDedupeServerRuntimeState(se, "dedupe_mcp_servers_selection_changed"); this.getServers(); for (const se of ie.nextSelecte |
| team_ids_changed | 24640666..24640682 | yes | ionService.onDidChangeTeamIds(() => { this.initializeServers("team_ids_changed"); })), this._register(this.adminSettingsService.onDidChange(() |
| origin_mcp | 24641447..24641457 | yes | reLog: false })), (ie.changedGates === void 0 \|\| ie.changedGates.has("origin_mcp")) && this.reconcileOriginMcpBuiltinServer("origin_mcp_gate_changed") |
| origin_mcp_gate_changed | 24641502..24641525 | yes | ngedGates.has("origin_mcp")) && this.reconcileOriginMcpBuiltinServer("origin_mcp_gate_changed"); })), this._register(this.storageService.onDidChangeValue(0, |
| status | 24626389..24626395 | no (exists elsewhere upstream) | sync reloadClient(t) { return { success: true, connected: true, statusType: "connected" }; } async logoutServer() { } async |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| mcp.enablement | 51 |
| Error during MCP autostart: | 96 |

