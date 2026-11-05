# Patch evidence: mcpService.js

- module: app-out-vs-workbench-workbench-desktop-main-js:3972
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 23028270..23230899
- upstream: src/vs/workbench/contrib/mcp/common/mcpService.ts sha256:2ebcec002338d8374a023f9856da41654fda0603df5d5d21d63f5a9bb7e635b1
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0.09; shared rare anchors: 5
- bundle-only anchors: 192; upstream anchors absent from bundle: 56

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Symbol. | 23028857..23028864 | yes | ), b3n(), MR(), h0o = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), p0o = (e) => { throw TypeError(e); }, lE = ( |
| Object expected | 23029068..23029083 | yes | null) { typeof t != "object" && typeof t != "function" && p0o("Object expected"); var i, r; n && (i = t[h0o("asyncDispose")]), i === voi |
| asyncDispose | 23029126..23029138 | yes | on" && p0o("Object expected"); var i, r; n && (i = t[h0o("asyncDispose")]), i === void 0 && (i = t[h0o("dispose")], n && (r = i)), typeof i |
| Object not disposable | 23029230..23029251 | yes | (i = t[h0o("dispose")], n && (r = i)), typeof i != "function" && p0o("Object not disposable"), r && (i = function() { try { r.call(this); |
| SuppressedError | 23029501..23029516 | yes | push([n]); return t; }, ojt = (e, t, n) => { var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) { return |
| An error was suppressed during disposal | 23029702..23029741 | yes | rror = o, l.suppressed = a, l; }, r = (o) => t = n ? new i(o, t, "An error was suppressed during disposal") : (n = true, o), s = (o) => { for (; o = e.pop(); ) try { |
| Origin | 23030057..23030063 | no (exists elsewhere upstream) | }; return s(); }, Ewh = { identifier: Pmt.identifier, name: "Origin", type: "streamableHttp", url: Pmt.serverUrl }, m0o = "cursor-origin- |
| streamableHttp | 23030073..23030087 | yes | s(); }, Ewh = { identifier: Pmt.identifier, name: "Origin", type: "streamableHttp", url: Pmt.serverUrl }, m0o = "cursor-origin-readonly", g0o = class { |
| cursor-origin-readonly | 23030119..23030141 | yes | name: "Origin", type: "streamableHttp", url: Pmt.serverUrl }, m0o = "cursor-origin-readonly", g0o = class { constructor(e) { this.timer = e.timer, this |
| mcp.refreshSnapshot | 23030903..23030922 | yes | }, _0o = "Cursor MCP extension host restarted; reconnecting", zZi = "mcp.refreshSnapshot", b0o = 4, y0o = "mcp.sharedOAuthFanoutEvent.", S0o = 2e3, Iwh = 5 * |
| mcp.sharedOAuthFanoutEvent. | 23030941..23030968 | yes | estarted; reconnecting", zZi = "mcp.refreshSnapshot", b0o = 4, y0o = "mcp.sharedOAuthFanoutEvent.", S0o = 2e3, Iwh = 5 * 6e4, k0o = /* @__PURE__ */ Symbol("MCP_METADAT |
| MCP_METADATA_ABORT_ERROR | 23031027..23031051 | yes | anoutEvent.", S0o = 2e3, Iwh = 5 * 6e4, k0o = /* @__PURE__ */ Symbol("MCP_METADATA_ABORT_ERROR"), w0o = class extends (Twh = Error, Cwh = k0o, Twh) { constructo |
| McpMetadataAbortError | 23031169..23031190 | yes | Twh) { constructor(e) { super(e), this[Cwh] = true, this.isMcpMetadataAbortError = true, this.name = "McpMetadataAbortError"; } }, Awh = class e |
| McpIpcTimeoutError | 23031364..23031382 | yes | { super(`MCP IPC timeout: ${e} exceeded ${t}ms`), this.name = "McpIpcTimeoutError"; } }, C0o = class { constructor(e, t, n, i, r, s) { |
| mcp.ipc.connection_type | 23031913..23031936 | yes | ithName(`mcp.runCommand.${e}`))); return s.span.setAttribute("mcp.ipc.connection_type", this.connectionType), await o0o(s.span, e, this.metricsService, asy |
| No provider found | 23032098..23032115 | yes | onst o = await this.getProvider(); if (!o) throw new Error("No provider found"); const a = this.getTimeoutMsForAction(e); if (a |
| mcp.tool_name | 23033200..23033213 | yes | "mcp.ipc.connection_type", this.connectionType), a.span.setAttribute("mcp.tool_name", e), await o0o(a.span, $x.CallTool, this.metricsService, async () => |
| abort | 23032966..23032971 | no (exists elsewhere upstream) | ync callTool(e, t, n) { var i = []; try { const { abortSignal: o } = n; o?.throwIfAborted(); const a = sjt(i, |
| Tool call was cancelled | 23033744..23033767 | yes | o.addEventListener("abort", () => { p(new Error("Tool call was cancelled")); }); })]) : u = await l, u?.result; |
| authenticate | 23034958..23034970 | no (exists elsewhere upstream) | erId, serverInfo: e, serverName: this.serverName, armLoopback: t === "authenticate" }); } async logoutServer() { await this._timedRunComma |
| mcpProviderServiceClient.listOfferings | 23036309..23036347 | yes | aTimeoutMs; return wCt(() => this.provider.listOfferings(), e, "mcpProviderServiceClient.listOfferings"); } async listToolsRaw() { const e = await this.listOf |
| connected | 23036730..23036739 | no (exists elsewhere upstream) | (e) { } async reloadClient(e) { return { success: true, connected: true, statusType: "connected" }; } async logoutServer() { |
| Server is blocked by team admin | 23036940..23036971 | yes | { return this.provider.instructions; } }, KZi = 3, ajt = "Server is blocked by team admin", cjt = "Server is not on the team network allowlist", ljt = { server |
| Server is not on the team network allowlist | 23036981..23037024 | yes | ; } }, KZi = 3, ajt = "Server is blocked by team admin", cjt = "Server is not on the team network allowlist", ljt = { server_placed: aYi, placement_unknown: JOn }, Dwh = /* @__P |
| mcp.hosted_placement.row_transition | 23037154..23037189 | yes | = /* @__PURE__ */ new Set([ajt, cjt, ...Object.values(ljt)]), Mwh = "mcp.hosted_placement.row_transition", T0o = "mcp_access_network_allowlist", CCt = "mcp_settings_overhaul" |
| mcp_access_network_allowlist | 23037199..23037227 | yes | ct.values(ljt)]), Mwh = "mcp.hosted_placement.row_transition", T0o = "mcp_access_network_allowlist", CCt = "mcp_settings_overhaul", Pwh = /* @__PURE__ */ new Set(["all" |
| mcp_settings_overhaul | 23037237..23037258 | yes | acement.row_transition", T0o = "mcp_access_network_allowlist", CCt = "mcp_settings_overhaul", Pwh = /* @__PURE__ */ new Set(["all", "off", "custom"]), k3n = clas |
| custom | 23037307..23037313 | no (exists elsewhere upstream) | mcp_settings_overhaul", Pwh = /* @__PURE__ */ new Set(["all", "off", "custom"]), k3n = class { constructor(e) { this.consecutiveFailures |
| No server info found | 23038025..23038045 | yes | e instanceof Error ? e.message : String(e); return t.includes("No server info found") \|\| t.includes("No adapter found") \|\| t.includes("No provider found" |
| No adapter found | 23038063..23038079 | yes | ng(e); return t.includes("No server info found") \|\| t.includes("No adapter found") \|\| t.includes("No provider found"); } recordRecoveryFailure |
| mcpService.knownServerIds | 23042610..23042635 | yes | wnServerIds = /* @__PURE__ */ new Set(), this.KNOWN_SERVER_IDS_KEY = "mcpService.knownServerIds", this.pendingRefreshResolvers = [], this.initializeServersRequestedD |
| mcp.slack.com | 23046194..23046207 | yes | me; } catch { return; } if (de === "mcp.slack.com") { const le = this.experimentsService.getDynamicConfigPara |
| slack_mcp_client_id | 23046280..23046299 | yes | { const le = this.experimentsService.getDynamicConfigParam("slack_mcp_client_id", "clientId", { disableExposureLog: false }); return le ? { |
| clientId | 23046303..23046311 | no (exists elsewhere upstream) | this.experimentsService.getDynamicConfigParam("slack_mcp_client_id", "clientId", { disableExposureLog: false }); return le ? { CLIENT_ID: |
| setup.shopify.com | 23046426..23046443 | yes | return le ? { CLIENT_ID: le } : void 0; } if (de === "setup.shopify.com") { const le = this.experimentsService.getDynamicConfigPara |
| shopify_mcp_client_id | 23046516..23046537 | yes | { const le = this.experimentsService.getDynamicConfigParam("shopify_mcp_client_id", "clientId", { disableExposureLog: false }); return le ? { |
| mcp.session_start | 23046694..23046711 | yes | : void 0; } } }, this.metricsService.increment({ stat: "mcp.session_start" }), this._shouldEmitCoalesceMetrics = this.experimentsService.checkF |
| mcp_coalesce_metrics_sampling | 23046793..23046822 | yes | shouldEmitCoalesceMetrics = this.experimentsService.checkFeatureGate("mcp_coalesce_metrics_sampling", { disableExposureLog: false }), this._metaMcpToolEnabled = this.exp |
| meta_mcp_tool | 23046926..23046939 | yes | this._metaMcpToolEnabled = this.experimentsService.checkFeatureGate("meta_mcp_tool", { disableExposureLog: false }), CMv(this.experimentsService.checkFe |
| mcp_structured_logging | 23047020..23047042 | yes | eExposureLog: false }), CMv(this.experimentsService.checkFeatureGate("mcp_structured_logging", { disableExposureLog: false })); const Y = (ce) => this.workb |
| workbench.mcp.files | 23047327..23047346 | yes | this.mcpFilesLogger = this._register(this.loggerService.createLogger("workbench.mcp.files", { name: "MCP Logs", hidden: false })), this.mcpOAuthLogger = this._ |
| MCP Logs | 23047358..23047366 | yes | ister(this.loggerService.createLogger("workbench.mcp.files", { name: "MCP Logs", hidden: false })), this.mcpOAuthLogger = this._register(this.logger |
| workbench.mcp.oauth | 23047458..23047477 | yes | this.mcpOAuthLogger = this._register(this.loggerService.createLogger("workbench.mcp.oauth", { name: "MCP OAuth", hidden: false })), this._mcpAllowlistLogger = |
| MCP OAuth | 23047489..23047498 | yes | ister(this.loggerService.createLogger("workbench.mcp.oauth", { name: "MCP OAuth", hidden: false })), this._mcpAllowlistLogger = this._register(this.l |
| workbench.mcp.allowlist | 23047595..23047618 | yes | _mcpAllowlistLogger = this._register(this.loggerService.createLogger("workbench.mcp.allowlist", { name: "MCP Allowlist", hidden: false })), this._logAllowlist("inf |
| MCP Allowlist | 23047630..23047643 | yes | r(this.loggerService.createLogger("workbench.mcp.allowlist", { name: "MCP Allowlist", hidden: false })), this._logAllowlist("info", "[MCPService] MCP All |
| disabledMcpServers | 23047832..23047850 | yes | ePolicyFingerprint = this.getAdminMcpRuntimePolicyFingerprint(), this.disabledMcpServers = this._register(Th(this.storageService, "disabledMcpServers")), this |
| disabledGlobalMcpServers | 23047921..23047945 | yes | = this._register(Th(this.storageService, "disabledMcpServers")), this.disabledGlobalMcpServers = this._register(Th(this.storageService, "disabledGlobalMcpServers")) |
| approvedProjectMcpServers | 23048070..23048095 | yes | alMcpServers")), this.migrateLegacyOriginMcpBuiltinIdentifier(), this.approvedProjectMcpServers = this._register(Th(this.storageService, "approvedProjectMcpServers") |
| thirdPartyExtensibilityEnabled | 23048249..23048279 | yes | artyExtensibilityObservable = this._register(Th(this.storageService, "thirdPartyExtensibilityEnabled")), this.useProfileScopedGlobalMcpDisabledState = this.experimentsSer |
| mcp_profile_scoped_global_disabled_state | 23048372..23048412 | yes | pedGlobalMcpDisabledState = this.experimentsService.checkFeatureGate("mcp_profile_scoped_global_disabled_state", { disableExposureLog: false }), this.useProfileScopedGlobalMcpDisab |
| third_party_extensibility_changed | 23049064..23049097 | yes | bled changed, refreshing plugin servers"), this.refreshPluginServers("third_party_extensibility_changed").then(() => this.initializeServers("third_party_extensibility_change |
| login_changed_logged_in | 23049273..23049296 | yes | stener = (ce) => { this.reconcileOriginMcpBuiltinServer(ce ? "login_changed_logged_in" : "login_changed_logged_out"); }; const Z = kn.as(r2.JSO |
| login_changed_logged_out | 23049301..23049325 | yes | his.reconcileOriginMcpBuiltinServer(ce ? "login_changed_logged_in" : "login_changed_logged_out"); }; const Z = kn.as(r2.JSONContribution); Z.regis |
| mcp_providers_changed | 23049971..23049992 | yes | ar(), this.mcpProcessRoutedServerIds.clear(), this.initializeServers("mcp_providers_changed"); })), this._register(this.everythingProviderService.onDidChan |
| dedupe_mcp_servers_selection_changed | 23050430..23050466 | yes | .has(le.identifier) \|\| this.removeHiddenDedupeServerRuntimeState(le, "dedupe_mcp_servers_selection_changed"); this.getServers(); for (const le of ce.nextSelecte |
| team_ids_changed | 23051022..23051038 | yes | ionService.onDidChangeTeamIds(() => { this.initializeServers("team_ids_changed"); })), this._register(this.adminSettingsService.onDidChange(() |
| origin_mcp | 23051803..23051813 | yes | reLog: false })), (ce.changedGates === void 0 \|\| ce.changedGates.has("origin_mcp")) && this.reconcileOriginMcpBuiltinServer("origin_mcp_gate_changed") |
| origin_mcp_gate_changed | 23051858..23051881 | yes | ngedGates.has("origin_mcp")) && this.reconcileOriginMcpBuiltinServer("origin_mcp_gate_changed"); })), this._register(this.storageService.onDidChangeValue(0, |
| status | 23036747..23036753 | no (exists elsewhere upstream) | sync reloadClient(e) { return { success: true, connected: true, statusType: "connected" }; } async logoutServer() { } async |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| mcp.enablement | 51 |
| Error during MCP autostart: | 96 |

