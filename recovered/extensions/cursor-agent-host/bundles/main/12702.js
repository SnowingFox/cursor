// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 12702 range:3917556..3951288
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12702: function(e, t, r) {
    "use strict";
    var n, s = this && this.__createBinding || (Object.create ? function(e2, t2, r2, n2) {
      void 0 === n2 && (n2 = r2);
      var s2 = Object.getOwnPropertyDescriptor(t2, r2);
      s2 && !("get" in s2 ? !t2.__esModule : s2.writable || s2.configurable) || (s2 = { enumerable: true, get: function() {
        return t2[r2];
      } }), Object.defineProperty(e2, n2, s2);
    } : function(e2, t2, r2, n2) {
      void 0 === n2 && (n2 = r2), e2[n2] = t2[r2];
    }), o = this && this.__setModuleDefault || (Object.create ? function(e2, t2) {
      Object.defineProperty(e2, "default", { enumerable: true, value: t2 });
    } : function(e2, t2) {
      e2.default = t2;
    }), i = this && this.__importStar || (n = function(e2) {
      return n = Object.getOwnPropertyNames || function(e3) {
        var t2 = [];
        for (var r2 in e3) Object.prototype.hasOwnProperty.call(e3, r2) && (t2[t2.length] = r2);
        return t2;
      }, n(e2);
    }, function(e2) {
      if (e2 && e2.__esModule) return e2;
      var t2 = {};
      if (null != e2) for (var r2 = n(e2), i2 = 0; i2 < r2.length; i2++) "default" !== r2[i2] && s(t2, e2, r2[i2]);
      return o(t2, e2), t2;
    });
    Object.defineProperty(t, "__esModule", { value: true }), t.AiConnectTransportHandler = t.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = t.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = void 0;
    const a = i(r(77598)), c = r(17714), l = r(77213), u = r(31791), d = r(33177), p = r(34222), m = r(72795), h = r(27949), f = r(94430), g = r(4410), y = r(5326), w = r(92339), v = r(76263), _ = r(38617), A = r(47158), S = r(88982), b = r(22712), E = r(58485), I = r(7126), C = r(26920), k = r(16230), x = r(9329), T = r(22384), R = r(91691), B = r(86704), P = r(31831), J = r(1780), M = r(41033), q = r(30668), D = r(26599);
    t.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = { [d.ChatService.methods.streamUnifiedChatWithTools.name]: d.ChatService.methods.streamUnifiedChatWithToolsSSE, [d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: d.ChatService.methods.streamUnifiedChatWithToolsIdempotentSSE, [f.HealthService.methods.streamBidi.name]: f.HealthService.methods.streamBidiSSE, [l.AiService.methods.streamStt.name]: l.AiService.methods.streamSttSSE, [l.AiService.methods.streamBugBotAgentic.name]: l.AiService.methods.streamBugBotAgenticSSE, [l.AiService.methods.streamUiBestOfNJudge.name]: l.AiService.methods.streamUiBestOfNJudgeSSE, [c.AgentService.methods.run.name]: c.AgentService.methods.runSSE, [g.InferenceService.methods.runInference.name]: g.InferenceService.methods.runInferenceSSE }, t.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = { [d.ChatService.methods.streamUnifiedChatWithTools.name]: { ...d.ChatService.methods.streamUnifiedChatWithToolsPoll, O: d.ChatService.methods.streamUnifiedChatWithTools.O }, [d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: { ...d.ChatService.methods.streamUnifiedChatWithToolsIdempotentPoll, O: d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.O }, [f.HealthService.methods.streamBidi.name]: { ...f.HealthService.methods.streamBidiPoll, O: f.HealthService.methods.streamBidi.O }, [l.AiService.methods.streamStt.name]: { ...l.AiService.methods.streamSttPoll, O: l.AiService.methods.streamSttSSE.O }, [l.AiService.methods.streamBugBotAgentic.name]: { ...l.AiService.methods.streamBugBotAgenticPoll, O: l.AiService.methods.streamBugBotAgenticSSE.O }, [l.AiService.methods.streamUiBestOfNJudge.name]: { ...l.AiService.methods.streamUiBestOfNJudgePoll, O: l.AiService.methods.streamUiBestOfNJudgeSSE.O }, [c.AgentService.methods.run.name]: { ...c.AgentService.methods.runPoll, O: c.AgentService.methods.run.O }, [g.InferenceService.methods.runInference.name]: { ...g.InferenceService.methods.runInferencePoll, O: g.InferenceService.methods.runInference.O } };
    t.AiConnectTransportHandler = class {
      _updateTransportMap(e2) {
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[v.RepositoryService.typeName] = e2.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[v.GitIndexService.typeName] = e2.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[A.UploadService.typeName] = e2.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[p.CmdKService.typeName] = e2.cmdkTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[h.FileSyncService.typeName] = e2.geoCppTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[f.HealthService.typeName] = e2.agentBidiTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[u.BackgroundComposerService.typeName] = e2.backgroundComposerProxyTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[c.AgentService.typeName] = e2.agentBidiTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[S.OriginService.typeName] = e2.originTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[w.RemoteAgentHostPresenceService.typeName] = e2.remoteAgentHostPresenceTransport, this._overrideMethodNameToTransportMap[c.AgentService.methods.run.name] = e2.agentBidiTransport;
        const t2 = void 0 !== e2.localLoopInferenceTransport && void 0 !== e2.localLoopInferenceUrl && e2.localLoopInferenceUrl !== this.localLoopInferenceFellBackUrl;
        this._overrideMethodNameToTransportMap[g.InferenceService.methods.runInference.name] = t2 && void 0 !== e2.localLoopInferenceTransport ? e2.localLoopInferenceTransport : e2.agenticComposerTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[y.PrivateInferenceService.typeName] = e2.agenticComposerTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamNextCursorPrediction.name] = e2.geoCppTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.getCppEditClassification.name] = e2.geoCppTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamCpp.name] = e2.geoCppTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.cppConfig.name] = e2.cppConfigTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.cppEditHistoryAppend.name] = e2.telemTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.cppAppend.name] = e2.telemTransport, this._overrideMethodNameToTransportMap[d.ChatService.methods.streamUnifiedChatWithTools.name] = e2.agenticComposerTransport, this._overrideMethodNameToTransportMap[d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name] = e2.agenticComposerTransport, this._overrideMethodNameToTransportMap[d.ChatService.methods.warmStreamUnifiedChatWithTools.name] = e2.agenticComposerTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamStt.name] = e2.agenticComposerTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamBugBotAgentic.name] = e2.agenticComposerTransport, this._overrideMethodNameToTransportMap[l.AiService.methods.streamUiBestOfNJudge.name] = e2.agenticComposerTransport, this._overrideMethodNameToTransportMap[m.DashboardService.methods.listBackgroundComposerSecrets.name] = e2.backgroundComposerProxyTransport, this._overrideMethodNameToTransportMap[m.DashboardService.methods.createBackgroundComposerSecret.name] = e2.backgroundComposerProxyTransport, this._overrideMethodNameToTransportMap[m.DashboardService.methods.revokeBackgroundComposerSecret.name] = e2.backgroundComposerProxyTransport;
      }
      constructor(e2) {
        this.host = e2, this.INACTIVITY_THRESHOLD = 18e5, this.loggedTokenFallback = false, this.disposables = [], this.numMsForRequestToResetConnection = 1e4, this.http1KeepaliveDisabled = false, this.agentConnectionPoolSize = 4, this.disposed = false, this._ready = false, this.transportRebuildQueue = Promise.resolve(), this._overrideMethodNameToTransportMap = { [l.AiService.methods.streamNextCursorPrediction.name]: void 0, [l.AiService.methods.getCppEditClassification.name]: void 0, [l.AiService.methods.cppConfig.name]: void 0, [l.AiService.methods.streamCpp.name]: void 0, [l.AiService.methods.cppEditHistoryAppend.name]: void 0, [l.AiService.methods.cppAppend.name]: void 0, [d.ChatService.methods.streamUnifiedChatWithTools.name]: void 0, [d.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: void 0, [d.ChatService.methods.warmStreamUnifiedChatWithTools.name]: void 0, [l.AiService.methods.streamStt.name]: void 0, [l.AiService.methods.streamBugBotAgentic.name]: void 0, [l.AiService.methods.streamUiBestOfNJudge.name]: void 0, [m.DashboardService.methods.listBackgroundComposerSecrets.name]: void 0, [m.DashboardService.methods.createBackgroundComposerSecret.name]: void 0, [m.DashboardService.methods.revokeBackgroundComposerSecret.name]: void 0, [c.AgentService.methods.run.name]: void 0, [g.InferenceService.methods.runInference.name]: void 0 }, this._bidiEndpointToSSEMethodMap = t.BIDI_ENDPOINT_TO_SSE_METHOD_MAP, this._bidiEndpointToPollMethodMap = t.BIDI_ENDPOINT_TO_POLL_METHOD_MAP, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides = { [v.RepositoryService.typeName]: void 0, [v.GitIndexService.typeName]: void 0, [A.UploadService.typeName]: void 0, [p.CmdKService.typeName]: void 0, [h.FileSyncService.typeName]: void 0, [u.BackgroundComposerService.typeName]: void 0, [f.HealthService.typeName]: void 0, [c.AgentService.typeName]: void 0, [S.OriginService.typeName]: void 0, [w.RemoteAgentHostPresenceService.typeName]: void 0, [y.PrivateInferenceService.typeName]: void 0 }, this.debugLog = e2.debugLog, this.isSetup = new Promise((e3) => {
          this.isSetupResolve = e3;
        }), this.authReady = new Promise((e3) => {
          this.authReadyResolve = e3;
        }), this.cookieJar = new E.CookieJar(), this.clientKey = a.randomBytes(32), this.transportFactory = new M.TransportFactory(e2, this.cookieJar, () => {
          if (void 0 !== this.accessToken) return this.accessToken;
          const t2 = e2.getCursorAuthToken();
          return this.loggedTokenFallback || (this.loggedTokenFallback = true, I.StructuredLogProviderImpl.info("auth", "ext-host token cache empty; fell back to live host read", { subkey: "exthost_token_fallback", hasLiveToken: String(void 0 !== t2) })), t2;
        }, this.clientKey, () => this.createAbortAndErrorInterceptor()), this.bidiTransportFactory = new R.BidiTransportFactory(e2, this.transportFactory, this._bidiEndpointToSSEMethodMap, this._bidiEndpointToPollMethodMap), this.setupEventListeners(), this.getInitialValues().catch((e3) => {
          this.debugLog.error("[AiConnectTransportHandler] getInitialValues failed during init", e3);
        }), this.networkChangeMonitor = new J.NetworkChangeMonitor(e2, 5e3, () => this.setup("network_change")), this.disposables.push(this.networkChangeMonitor), this.disposables.push(this.transportFactory.getPrivateInferenceEnablement().onDidChange((e3) => {
          "enabled" === e3 && this.ownedAgentRunWebSocketSelection?.drain();
        })), this.setupHttp1KeepaliveDisabledRefresh();
      }
      get isDisposed() {
        return this.disposed;
      }
      dispose() {
        this.disposed = true, this.resolveAuthReady(false), this.resolveIsSetup(), this.disposables.forEach((e2) => {
          e2.dispose();
        }), this.ownedAgentRunWebSocketSelection?.dispose(), this.ownedAgentRunWebSocketSelection = void 0, this.transportFactory.abortAllSessionManagers(), this.transportFactory.destroyAllAgents();
      }
      resolveAuthReady(e2) {
        const t2 = this.authReadyResolve;
        void 0 !== t2 && (this.authReadyResolve = void 0, t2(e2));
      }
      resolveIsSetup() {
        const e2 = this.isSetupResolve;
        void 0 !== e2 && (this.isSetupResolve = void 0, e2());
      }
      setupEventListeners() {
        this.disposables.push(this.host.onDidChangeCursorAuthToken((e3) => {
          this.accessToken = e3, void 0 !== this.cursorCreds && this.setup("auth_token");
        })), this.disposables.push(this.host.onDidChangeCursorCreds((e3) => {
          this.cursorCreds = e3, this.setup("creds");
        })), this.disposables.push(this.host.onDidChangeHttpProtocolSettings(() => {
          this.setup("protocol_settings");
        }));
        const e2 = setInterval(async () => {
          await this.setServerConfig(), this.lastServerHttp2DisabledValue !== (await this.getConfig())?.http2Config && (this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config, await this.setup("server_config"));
        }, 6e5);
        this.disposables.push({ dispose: () => clearInterval(e2) });
      }
      resolveHttp1Reason() {
        return this.lastServerHttp2DisabledValue === _.Http2Config.FORCE_ALL_DISABLED ? "server_force_all" : this.lastServerHttp2DisabledValue === _.Http2Config.FORCE_BIDI_DISABLED ? "server_force_bidi" : this.lastServerHttp2DisabledValue !== _.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== _.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled() ? "client_disabled" : void 0;
      }
      getWsReachabilityProbeContext() {
        if (void 0 === this.cursorCreds) return;
        const e2 = this.resolveHttp1Reason();
        return void 0 !== e2 ? { backendUrl: this.cursorCreds.backendUrl, http1Reason: e2, mode: this.host.isHttp1SseDisabled() ? "poll" : "sse", hasEffectiveProxy: this.host.hasEffectiveProxy?.() ?? false } : void 0;
      }
      recordTransportRebuilt(e2, t2) {
        const r2 = this.lastBidiTransportMode ?? "none", n2 = this.resolveHttp1Reason() ?? "none";
        this.lastBidiTransportMode = t2, this.debugLog.info(`[AiConnectTransportHandler] transports rebuilt (${e2}): ${r2} -> ${t2}, http1 reason ${n2}`), (0, q.incrementTransportMetric)(this.host, "transport.rebuilt", { trigger: e2, mode: t2, previous_mode: r2, http1_reason: n2 }), (0, q.emitTransportStructuredLog)(this.host, { level: "info", message: "Transports rebuilt", metadata: { service: "transport_factory", subkey: "transport_rebuilt", trigger: e2, mode: t2, previousMode: r2, modeChanged: r2 !== t2, http1Reason: n2 } });
      }
      maybeScheduleWsReachabilityProbe() {
        const e2 = (0, D.scheduleWsReachabilityProbe)({ host: this.host, getContext: () => this.getWsReachabilityProbeContext() });
        void 0 !== e2 && this.disposables.push(e2), this.maybeScheduleWsDurabilityProbe();
      }
      maybeScheduleWsDurabilityProbe() {
        const e2 = (0, D.scheduleWsDurabilityProbe)({ host: this.host, getContext: () => this.getWsReachabilityProbeContext() });
        void 0 !== e2 && this.disposables.push(e2);
      }
      setupHttp1KeepaliveDisabledRefresh() {
        const e2 = async () => {
          try {
            const e3 = await this.host.checkFeatureGate("http1_keepalive_disabled");
            this.http1KeepaliveDisabled !== e3 && (this.debugLog.info(`[AiConnectTransportHandler] HTTP/1 keepalive disabled flag updated: ${this.http1KeepaliveDisabled}`), I.StructuredLogProviderImpl.info("transport", "HTTP/1 keepalive disabled flag updated", { service: "transport_factory", subkey: "http1_keepalive_disabled_flag_updated", http1KeepaliveDisabled: e3 })), this.http1KeepaliveDisabled = e3;
          } catch (e3) {
            this.debugLog.error("[AiConnectTransportHandler] Error checking HTTP/1 keepalive disabled flag, keeping previous value", e3);
          }
        };
        e2(), this.disposables.push(this.host.onDidChangeGates((t2) => {
          t2.changedGates?.includes("http1_keepalive_disabled") && e2(), t2.changedGates?.includes("ws_reachability_probe") && this.maybeScheduleWsReachabilityProbe(), t2.changedGates?.includes("ws_dark_durability_probe") && ((0, D.cancelWsDurabilityProbe)(), this.maybeScheduleWsDurabilityProbe());
        }));
      }
      async getInitialValues() {
        let e2 = false;
        try {
          this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config;
          const { creds: t2, token: r2 } = await (0, T.pollForAuthValues)({ getCreds: () => this.host.getCursorCreds(), getToken: () => this.host.getCursorAuthToken() }, { onTimeout: (e3) => {
            this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: timeout waiting for auth", e3), I.StructuredLogProviderImpl.info("auth", "Auth init timeout - proceeding without token (likely logged out)", { subkey: "auth_init_timeout", source: "handler", ...e3 });
          }, onRaceConditionPrevented: (e3) => {
            this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: race condition prevented", e3), I.StructuredLogProviderImpl.warn("auth", "Auth token race condition prevented at startup", { subkey: "auth_race_condition_prevented", source: "handler", ...e3 });
          } }, this.debugLog);
          this.cursorCreds = t2, this.accessToken = r2, e2 = void 0 !== this.accessToken, this.debugLog.info("[AiConnectTransportHandler] getInitialValues: auth ready", { hasAccessToken: e2 }), this.resolveAuthReady(e2), await this.setup("init");
        } finally {
          this.resolveAuthReady(e2);
        }
      }
      getAiServerClient() {
        if (void 0 === this._aiServerClient) throw new Error("INVARIANT VIOLATION: AiServerClient is undefined");
        const e2 = performance.now();
        return void 0 !== this.lastClientCreationTime && e2 - this.lastClientCreationTime > this.INACTIVITY_THRESHOLD && this.refresh(), this.lastClientCreationTime = e2, this._aiServerClient;
      }
      async getBackgroundComposerClient() {
        if (await this.isSetup, void 0 === this._backgroundComposerClient) throw new Error("INVARIANT VIOLATION: BackgroundComposerClient is undefined");
        return this._backgroundComposerClient;
      }
      getAgentClient() {
        if (void 0 === this._agentClient) throw new Error("INVARIANT VIOLATION: AgentClient is undefined");
        return this._agentClient;
      }
      getFilesyncClient() {
        if (void 0 === this._filesyncClient) throw new Error("INVARIANT VIOLATION: FilesyncClient is undefined");
        return this._filesyncClient;
      }
      getTransport() {
        if (void 0 === this._transport) throw new Error("INVARIANT VIOLATION: Connect transport is undefined");
        return this._transport;
      }
      getTransportIfReady() {
        return this._transport;
      }
      getPrivateInferenceEnablement() {
        return this.transportFactory.getPrivateInferenceEnablement();
      }
      isHttp2TransportFor(e2) {
        return true === this._getTransportForService(e2.serviceName, e2.methodName, false)?.isHttp2;
      }
      isDebug() {
        return (this.cursorCreds?.backendUrl?.includes("lclhst.build") || this.cursorCreds?.backendUrl?.includes("localhost")) ?? false;
      }
      async refresh() {
        await this.setup("refresh");
      }
      _getTransportForService(e2, t2, r2 = true) {
        let n2;
        if (e2 === f.HealthService.typeName) {
          return this.host.isHttp2Disabled() && t2 !== f.HealthService.methods.streamBidi.name ? this._backendTransport : this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[f.HealthService.typeName];
        }
        if (n2 = t2 in this._overrideMethodNameToTransportMap ? this._overrideMethodNameToTransportMap[t2] : e2 in this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides ? this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[e2] : this._backendTransport, void 0 !== n2) return r2 && (n2.usage++, true === n2.isHttp2 && n2.usage > 500 && this.createTransports("usage_rotation")), n2;
      }
      async setup(e2) {
        await this.createTransports(e2);
        const t2 = this.createMultiProxyTransport();
        this._transport = t2, this._aiServerClient = (0, b.createPromiseClient)(l.AiService, t2), this._filesyncClient = (0, b.createPromiseClient)(h.FileSyncService, t2), this._backgroundComposerClient = (0, b.createPromiseClient)(u.BackgroundComposerService, t2), this._agentClient = (0, b.createPromiseClient)(c.AgentService, t2), this.resolveIsSetup();
      }
      createMultiProxyTransport() {
        if (!this._ready) throw new Error("INVARIANT VIOLATION: This should not be called without having this._ready.");
        const e2 = this;
        return { unary(t2, r2, n2, s2, o2, i2, a2) {
          const c2 = e2._getTransportForService(t2.typeName, r2.name);
          if (void 0 === c2) throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + t2.typeName);
          return c2.transport.unary(t2, r2, n2, s2, o2, i2, a2);
        }, stream(t2, r2, n2, s2, o2, i2, a2) {
          const c2 = e2._getTransportForService(t2.typeName, r2.name);
          if (void 0 === c2) throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + t2.typeName);
          return c2.transport.stream(t2, r2, n2, s2, o2, i2, a2);
        }, getTransportHost: (t2, r2) => e2._getTransportForService(t2, r2, false)?.host };
      }
      async setServerConfig() {
        try {
          this.config = _.GetServerConfigResponse.fromJson(await this.host.getCachedServerConfigJson());
        } catch (e2) {
          this.debugLog.error("Error getting server config", e2);
        }
      }
      async getConfig() {
        return void 0 === this.config && await this.setServerConfig(), this.config;
      }
      createTransports(e2) {
        const t2 = this.transportRebuildQueue.then(async () => {
          if (!this.disposed) try {
            await this.createTransportsForLatestContext(e2);
          } finally {
            this.disposed && (this.ownedAgentRunWebSocketSelection?.dispose(), this.ownedAgentRunWebSocketSelection = void 0, this.transportFactory.abortAllSessionManagers(), this.transportFactory.destroyAllAgents());
          }
        });
        return this.transportRebuildQueue = t2.catch(() => {
        }), t2;
      }
      async createTransportsForLatestContext(e2) {
        if (!this.cursorCreds) throw new Error("CursorCreds is undefined");
        const t2 = this.ownedAgentRunWebSocketSelection;
        this.transportFactory.destroyAllAgents();
        const r2 = () => this.http1KeepaliveDisabled, n2 = (await (0, B.getHttp1KeepaliveConfig)(this.host)).keepAliveInitialDelayMs;
        try {
          const e3 = await this.host.getDynamicConfigValue("http2_agent_connection_pool_config");
          e3 && "object" == typeof e3 && "poolSize" in e3 && "number" == typeof e3.poolSize && e3.poolSize > 0 && (this.agentConnectionPoolSize = e3.poolSize);
        } catch (e3) {
          this.debugLog.error("[AiConnectTransportHandler] Error fetching connection pool config, using default", e3);
        }
        const s2 = (() => this.lastServerHttp2DisabledValue === _.Http2Config.FORCE_ALL_DISABLED || this.lastServerHttp2DisabledValue === _.Http2Config.FORCE_BIDI_DISABLED || this.lastServerHttp2DisabledValue !== _.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== _.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled())(), { backendUrl: o2, repoBackendUrl: i2, geoCppBackendUrl: a2, cppConfigBackendUrl: c2, cmdkBackendUrl: l2, telemBackendUrl: u2, originBackendUrl: d2, bcProxyUrl: p2, agentBackendUrlNonPrivacy: m2, localLoopInferenceUrl: h2 } = this.cursorCreds, f2 = m2.default || o2, g2 = f2 && !s2 ? f2 : o2;
        this.maybeScheduleWsReachabilityProbe(), this.transportFactory.setHttp2SessionEstablishTimeoutMs(await (0, B.getHttp2SessionEstablishTimeoutMs)(this.host)), this._backendTransport = this.transportFactory.createTransport({ baseUrl: o2, useHttp2: false, maybeUseCppSpoofToken: false, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.BACKEND), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2 }), this._bidiTransport = this.transportFactory.createTransport({ baseUrl: o2, useHttp2: false, maybeUseCppSpoofToken: false, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.BIDI), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2 });
        const y2 = this.bidiTransportFactory.createTransport({ baseUrl: g2, useHttp2: !s2, maybeUseCppSpoofToken: true, bidiTransport: this._bidiTransport, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.AGENT), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2, usePooledConnections: true, connectionPoolSize: this.agentConnectionPoolSize });
        let w2, v2;
        if (h2 && !s2 && h2 !== this.localLoopInferenceFellBackUrl) {
          const e3 = h2;
          v2 = e3, w2 = this.bidiTransportFactory.createTransport({ baseUrl: e3, useHttp2: true, maybeUseCppSpoofToken: true, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.LOCAL_LOOP_INFERENCE), usePooledConnections: true, connectionPoolSize: this.agentConnectionPoolSize }), w2.transport = (A2 = w2.transport, S2 = (t3) => this.fallBackLocalLoopInference(e3, t3), { unary: (e4, t3, r3, n3, s3, o3, i3) => A2.unary(e4, t3, r3, n3, s3, o3, i3), async stream(e4, t3, r3, n3, s3, o3, i3) {
            try {
              return await A2.stream(e4, t3, r3, n3, s3, o3, i3);
            } catch (e5) {
              const t4 = b.ConnectError.from(e5);
              if (true === r3?.aborted || t4.code !== b.Code.Unimplemented && t4.code !== b.Code.Unavailable) throw e5;
              throw S2(t4), new b.ConnectError("connection aborted (local-loop inference fell back to the backend URL)", b.Code.Unavailable, void 0, void 0, e5);
            }
          } });
        }
        var A2, S2;
        const E2 = { repoTransport: this.transportFactory.createTransport({ baseUrl: i2, useHttp2: false, maybeUseCppSpoofToken: false, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.REPO), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2, overrideAuthToken: async () => {
          if (i2.includes("repo42.cursor.sh") && o2.includes("localhost")) {
            const e3 = await this.getConfig();
            if (e3?.indexingConfig?.repo42AuthToken) return e3.indexingConfig.repo42AuthToken;
          }
        } }), http2RepoTransport: this.transportFactory.createTransport({ baseUrl: i2, useHttp2: !s2, maybeUseCppSpoofToken: false, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.HTTP2_REPO), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2, overrideAuthToken: async () => {
          if (i2.includes("repo42.cursor.sh") && o2.includes("localhost")) {
            const e3 = await this.getConfig();
            if (e3?.indexingConfig?.repo42AuthToken) return e3.indexingConfig.repo42AuthToken;
          }
        } }), geoCppTransport: this.transportFactory.createTransport({ baseUrl: a2, useHttp2: !s2 && a2.includes(".cursor.sh") && !a2.includes("api2.cursor.sh"), maybeUseCppSpoofToken: true, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.GEO_CPP), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2 }), cppConfigTransport: this.transportFactory.createTransport({ baseUrl: c2, useHttp2: !s2 && c2.includes(".cursor.sh") && !c2.includes("api2.cursor.sh"), maybeUseCppSpoofToken: true, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.CPP_CONFIG), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2 }), cmdkTransport: this.transportFactory.createTransport({ baseUrl: l2, useHttp2: !s2 && l2.includes("api3.cursor"), maybeUseCppSpoofToken: false, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.CMDK), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2 }), telemTransport: this.transportFactory.createTransport({ baseUrl: u2, useHttp2: !s2 && u2.includes("api3.cursor"), maybeUseCppSpoofToken: true, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.TELEM), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2 }), originTransport: this.transportFactory.createTransport({ baseUrl: d2, useHttp2: false, maybeUseCppSpoofToken: false, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.ORIGIN), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2 }), remoteAgentHostPresenceTransport: this.transportFactory.createTransport({ baseUrl: o2, useHttp2: true, maybeUseCppSpoofToken: false, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.REMOTE_AGENT_HOST_PRESENCE, { fallbackDefaults: B.HTTP2_PING_PRODUCTION_DEFAULTS }), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2, sendCompression: k.adaptiveGzip, onGoaway: () => this.host.notifyRemoteAgentHostTunnelGoaway?.() }), agenticComposerTransport: this.bidiTransportFactory.createTransport({ baseUrl: o2, useHttp2: !s2, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.AGENTIC_COMPOSER), maybeUseCppSpoofToken: true, bidiTransport: this._bidiTransport }), agentBidiTransport: y2, localLoopInferenceTransport: w2, localLoopInferenceUrl: v2, backgroundComposerProxyTransport: this.transportFactory.createTransport({ baseUrl: p2, useHttp2: !s2, maybeUseCppSpoofToken: false, pingConfig: await (0, B.getHttp2PingConfig)(this.host, B.Http2TransportCallSite.BACKGROUND_COMPOSER_PROXY, { fallbackDefaults: B.HTTP2_PING_PRODUCTION_DEFAULTS }), getHttp1KeepaliveDisabled: r2, http1KeepaliveInitialDelayMs: n2, overrideAuthToken: async () => {
          if (p2.includes("api2.cursor.sh") && o2.includes("localhost")) {
            const e3 = await this.getConfig();
            if (e3?.indexingConfig?.repo42AuthToken) return e3.indexingConfig.repo42AuthToken;
          }
        } }) }, I2 = this.createAgentRunWebSocketSelectionForTransportContext({ httpTransport: y2.transport, httpAgentUrl: g2, agentUsesHttp2: !s2 });
        if (y2.transport = I2.transport, this.disposed) I2.dispose();
        else {
          this.transportConfig = E2, this._updateTransportMap(E2), this.ownedAgentRunWebSocketSelection = I2, this._ready = true, this.recordTransportRebuilt(e2, (0, q.resolveHttpTransportMode)({ http2Disabled: s2, http1SseDisabled: this.host.isHttp1SseDisabled() })), "enabled" === this.transportFactory.getPrivateInferenceEnablement().state && I2.drain();
          try {
            t2?.drain();
          } catch (e3) {
            this.debugLog.error("[AiConnectTransportHandler] Error draining replaced Agent WebSocket selection", e3);
          }
        }
      }
      fallBackLocalLoopInference(e2, t2) {
        this.localLoopInferenceFellBackUrl = e2;
        const r2 = this.transportConfig;
        void 0 !== r2 && r2.localLoopInferenceUrl === e2 ? (this._overrideMethodNameToTransportMap[g.InferenceService.methods.runInference.name] = r2.agenticComposerTransport, (0, q.incrementTransportMetric)(this.host, "transport.local_loop_inference_fallback", { connect_code: b.Code[t2.code] }), this.debugLog.warn("[AiConnectTransportHandler] RunInference fell back from the local-loop URL to the backend URL", t2)) : this.debugLog.info("[AiConnectTransportHandler] a replaced local-loop URL failed late; current route unchanged", t2);
      }
      createAgentRunWebSocketSelectionForTransportContext(e2) {
        const t2 = (0, x.resolveAgentWebSocketUrl)(e2.httpAgentUrl) ?? e2.httpAgentUrl;
        return (0, x.createAgentRunWebSocketSelection)({ httpTransport: e2.httpTransport, baseUrl: e2.httpAgentUrl, agentUsesHttp2: e2.agentUsesHttp2, debugLog: this.debugLog, checkFeatureGate: (e3) => this.host.checkFeatureGate(e3), getDynamicConfigValue: (e3) => this.host.getDynamicConfigValue(e3), onDidChangeFeatureGate: (e3, t3) => this.host.onDidChangeGates((r2) => {
          const n2 = void 0 !== r2.changedGates || void 0 !== r2.changedConfigs || void 0 !== r2.changedExperiments;
          (true === r2.changedGates?.includes(e3) || !n2) && t3();
        }), onDidChangeDynamicConfig: (e3, t3) => this.host.onDidChangeGates((r2) => {
          const n2 = void 0 !== r2.changedGates || void 0 !== r2.changedConfigs || void 0 !== r2.changedExperiments;
          (true === r2.changedConfigs?.includes(e3) || !n2) && t3();
        }), connectionContext: (0, C.createHostAgentRunWebSocketConnectionContextSource)(this.host, { endpoint: t2 }), runWithNetworkContext: (e3) => this.host.runWithNetworkContext(e3), observePreconnect: (e3) => {
          try {
            this.host.metricsIncrement({ stat: "transport.agent_websocket_preconnect", tags: { outcome: e3.outcome, failure_category: e3.failureCategory ?? "none" } });
          } catch {
          }
        }, metricsIncrement: (e3) => this.host.metricsIncrement(e3), prepareUpgrade: (t3) => this.transportFactory.prepareAgentRunRequest({ baseUrl: e2.httpAgentUrl, maybeUseCppSpoofToken: true, callerHeaders: t3.callerHeaders, ...void 0 !== t3.signal ? { signal: t3.signal } : {} }) });
      }
      async resetConnectionIfIpChangedOrNetworkReset(e2) {
        const { isDisconnected: t2 } = await this.resetConnectionIfIpChanged(), r2 = void 0 !== e2 && this.networkChangeMonitor.networkId !== e2;
        return t2 || r2;
      }
      async resetConnectionIfIpChanged() {
        const e2 = this.cursorCreds?.backendUrl, t2 = this.accessToken;
        return void 0 === e2 || void 0 === t2 ? { isDisconnected: false } : this.networkChangeMonitor.triggerCallbackIfDisconnected(e2, t2);
      }
      createAbortAndErrorInterceptor() {
        return (0, P.createAbortErrorAndTimeoutInterceptor)(() => this.networkChangeMonitor.networkId, (e2) => this.resetConnectionIfIpChangedOrNetworkReset(e2), this.numMsForRequestToResetConnection);
      }
    };
  }