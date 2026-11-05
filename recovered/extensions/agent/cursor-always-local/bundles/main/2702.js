// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2702 range:743209..776967
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2702: function(t2, e2, r2) {
    "use strict";
    var n2, s2 = this && this.__createBinding || (Object.create ? function(t3, e3, r3, n3) {
      void 0 === n3 && (n3 = r3);
      var s3 = Object.getOwnPropertyDescriptor(e3, r3);
      s3 && !("get" in s3 ? !e3.__esModule : s3.writable || s3.configurable) || (s3 = { enumerable: true, get: function() {
        return e3[r3];
      } }), Object.defineProperty(t3, n3, s3);
    } : function(t3, e3, r3, n3) {
      void 0 === n3 && (n3 = r3), t3[n3] = e3[r3];
    }), i2 = this && this.__setModuleDefault || (Object.create ? function(t3, e3) {
      Object.defineProperty(t3, "default", { enumerable: true, value: e3 });
    } : function(t3, e3) {
      t3.default = e3;
    }), o2 = this && this.__importStar || (n2 = function(t3) {
      return n2 = Object.getOwnPropertyNames || function(t4) {
        var e3 = [];
        for (var r3 in t4) Object.prototype.hasOwnProperty.call(t4, r3) && (e3[e3.length] = r3);
        return e3;
      }, n2(t3);
    }, function(t3) {
      if (t3 && t3.__esModule) return t3;
      var e3 = {};
      if (null != t3) for (var r3 = n2(t3), o3 = 0; o3 < r3.length; o3++) "default" !== r3[o3] && s2(e3, t3, r3[o3]);
      return i2(e3, t3), e3;
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.AiConnectTransportHandler = e2.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = e2.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = void 0;
    const a = o2(r2(7598)), u = r2(7714), c = r2(7213), l = r2(6313), m = r2(3177), d = r2(4222), f = r2(2795), p = r2(7949), h = r2(4430), g = r2(4410), A = r2(9736), _ = r2(2339), y = r2(6263), w = r2(8617), S = r2(7158), J = r2(8982), B = r2(8394), E = r2(8485), I = r2(7126), C = r2(6920), b = r2(6230), k = r2(9329), v = r2(2384), q = r2(1691), R = r2(6704), P = r2(1831), T = r2(1780), x = r2(1033), N = r2(668), D = r2(6599);
    e2.BIDI_ENDPOINT_TO_SSE_METHOD_MAP = { [m.ChatService.methods.streamUnifiedChatWithTools.name]: m.ChatService.methods.streamUnifiedChatWithToolsSSE, [m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: m.ChatService.methods.streamUnifiedChatWithToolsIdempotentSSE, [h.HealthService.methods.streamBidi.name]: h.HealthService.methods.streamBidiSSE, [c.AiService.methods.streamStt.name]: c.AiService.methods.streamSttSSE, [c.AiService.methods.streamBugBotAgentic.name]: c.AiService.methods.streamBugBotAgenticSSE, [c.AiService.methods.streamUiBestOfNJudge.name]: c.AiService.methods.streamUiBestOfNJudgeSSE, [u.AgentService.methods.run.name]: u.AgentService.methods.runSSE, [g.InferenceService.methods.runInference.name]: g.InferenceService.methods.runInferenceSSE }, e2.BIDI_ENDPOINT_TO_POLL_METHOD_MAP = { [m.ChatService.methods.streamUnifiedChatWithTools.name]: { ...m.ChatService.methods.streamUnifiedChatWithToolsPoll, O: m.ChatService.methods.streamUnifiedChatWithTools.O }, [m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: { ...m.ChatService.methods.streamUnifiedChatWithToolsIdempotentPoll, O: m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.O }, [h.HealthService.methods.streamBidi.name]: { ...h.HealthService.methods.streamBidiPoll, O: h.HealthService.methods.streamBidi.O }, [c.AiService.methods.streamStt.name]: { ...c.AiService.methods.streamSttPoll, O: c.AiService.methods.streamSttSSE.O }, [c.AiService.methods.streamBugBotAgentic.name]: { ...c.AiService.methods.streamBugBotAgenticPoll, O: c.AiService.methods.streamBugBotAgenticSSE.O }, [c.AiService.methods.streamUiBestOfNJudge.name]: { ...c.AiService.methods.streamUiBestOfNJudgePoll, O: c.AiService.methods.streamUiBestOfNJudgeSSE.O }, [u.AgentService.methods.run.name]: { ...u.AgentService.methods.runPoll, O: u.AgentService.methods.run.O }, [g.InferenceService.methods.runInference.name]: { ...g.InferenceService.methods.runInferencePoll, O: g.InferenceService.methods.runInference.O } };
    e2.AiConnectTransportHandler = class {
      _updateTransportMap(t3) {
        this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[y.RepositoryService.typeName] = t3.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[y.GitIndexService.typeName] = t3.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[S.UploadService.typeName] = t3.repoTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[d.CmdKService.typeName] = t3.cmdkTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[p.FileSyncService.typeName] = t3.geoCppTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[h.HealthService.typeName] = t3.agentBidiTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[l.BackgroundComposerService.typeName] = t3.backgroundComposerProxyTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[u.AgentService.typeName] = t3.agentBidiTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[J.OriginService.typeName] = t3.originTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[_.RemoteAgentHostPresenceService.typeName] = t3.remoteAgentHostPresenceTransport, this._overrideMethodNameToTransportMap[u.AgentService.methods.run.name] = t3.agentBidiTransport;
        const e3 = void 0 !== t3.localLoopInferenceTransport && void 0 !== t3.localLoopInferenceUrl && t3.localLoopInferenceUrl !== this.localLoopInferenceFellBackUrl;
        this._overrideMethodNameToTransportMap[g.InferenceService.methods.runInference.name] = e3 && void 0 !== t3.localLoopInferenceTransport ? t3.localLoopInferenceTransport : t3.agenticComposerTransport, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[A.PrivateInferenceService.typeName] = t3.agenticComposerTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamNextCursorPrediction.name] = t3.geoCppTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.getCppEditClassification.name] = t3.geoCppTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamCpp.name] = t3.geoCppTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.cppConfig.name] = t3.cppConfigTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.cppEditHistoryAppend.name] = t3.telemTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.cppAppend.name] = t3.telemTransport, this._overrideMethodNameToTransportMap[m.ChatService.methods.streamUnifiedChatWithTools.name] = t3.agenticComposerTransport, this._overrideMethodNameToTransportMap[m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name] = t3.agenticComposerTransport, this._overrideMethodNameToTransportMap[m.ChatService.methods.warmStreamUnifiedChatWithTools.name] = t3.agenticComposerTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamStt.name] = t3.agenticComposerTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamBugBotAgentic.name] = t3.agenticComposerTransport, this._overrideMethodNameToTransportMap[c.AiService.methods.streamUiBestOfNJudge.name] = t3.agenticComposerTransport, this._overrideMethodNameToTransportMap[f.DashboardService.methods.listBackgroundComposerSecrets.name] = t3.backgroundComposerProxyTransport, this._overrideMethodNameToTransportMap[f.DashboardService.methods.createBackgroundComposerSecret.name] = t3.backgroundComposerProxyTransport, this._overrideMethodNameToTransportMap[f.DashboardService.methods.revokeBackgroundComposerSecret.name] = t3.backgroundComposerProxyTransport;
      }
      constructor(t3) {
        this.host = t3, this.INACTIVITY_THRESHOLD = 18e5, this.loggedTokenFallback = false, this.disposables = [], this.numMsForRequestToResetConnection = 1e4, this.http1KeepaliveDisabled = false, this.agentConnectionPoolSize = 4, this.disposed = false, this._ready = false, this.transportRebuildQueue = Promise.resolve(), this._overrideMethodNameToTransportMap = { [c.AiService.methods.streamNextCursorPrediction.name]: void 0, [c.AiService.methods.getCppEditClassification.name]: void 0, [c.AiService.methods.cppConfig.name]: void 0, [c.AiService.methods.streamCpp.name]: void 0, [c.AiService.methods.cppEditHistoryAppend.name]: void 0, [c.AiService.methods.cppAppend.name]: void 0, [m.ChatService.methods.streamUnifiedChatWithTools.name]: void 0, [m.ChatService.methods.streamUnifiedChatWithToolsIdempotent.name]: void 0, [m.ChatService.methods.warmStreamUnifiedChatWithTools.name]: void 0, [c.AiService.methods.streamStt.name]: void 0, [c.AiService.methods.streamBugBotAgentic.name]: void 0, [c.AiService.methods.streamUiBestOfNJudge.name]: void 0, [f.DashboardService.methods.listBackgroundComposerSecrets.name]: void 0, [f.DashboardService.methods.createBackgroundComposerSecret.name]: void 0, [f.DashboardService.methods.revokeBackgroundComposerSecret.name]: void 0, [u.AgentService.methods.run.name]: void 0, [g.InferenceService.methods.runInference.name]: void 0 }, this._bidiEndpointToSSEMethodMap = e2.BIDI_ENDPOINT_TO_SSE_METHOD_MAP, this._bidiEndpointToPollMethodMap = e2.BIDI_ENDPOINT_TO_POLL_METHOD_MAP, this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides = { [y.RepositoryService.typeName]: void 0, [y.GitIndexService.typeName]: void 0, [S.UploadService.typeName]: void 0, [d.CmdKService.typeName]: void 0, [p.FileSyncService.typeName]: void 0, [l.BackgroundComposerService.typeName]: void 0, [h.HealthService.typeName]: void 0, [u.AgentService.typeName]: void 0, [J.OriginService.typeName]: void 0, [_.RemoteAgentHostPresenceService.typeName]: void 0, [A.PrivateInferenceService.typeName]: void 0 }, this.debugLog = t3.debugLog, this.isSetup = new Promise((t4) => {
          this.isSetupResolve = t4;
        }), this.authReady = new Promise((t4) => {
          this.authReadyResolve = t4;
        }), this.cookieJar = new E.CookieJar(), this.clientKey = a.randomBytes(32), this.transportFactory = new x.TransportFactory(t3, this.cookieJar, () => {
          if (void 0 !== this.accessToken) return this.accessToken;
          const e3 = t3.getCursorAuthToken();
          return this.loggedTokenFallback || (this.loggedTokenFallback = true, I.StructuredLogProviderImpl.info("auth", "ext-host token cache empty; fell back to live host read", { subkey: "exthost_token_fallback", hasLiveToken: String(void 0 !== e3) })), e3;
        }, this.clientKey, () => this.createAbortAndErrorInterceptor()), this.bidiTransportFactory = new q.BidiTransportFactory(t3, this.transportFactory, this._bidiEndpointToSSEMethodMap, this._bidiEndpointToPollMethodMap), this.setupEventListeners(), this.getInitialValues().catch((t4) => {
          this.debugLog.error("[AiConnectTransportHandler] getInitialValues failed during init", t4);
        }), this.networkChangeMonitor = new T.NetworkChangeMonitor(t3, 5e3, () => this.setup("network_change")), this.disposables.push(this.networkChangeMonitor), this.disposables.push(this.transportFactory.getPrivateInferenceEnablement().onDidChange((t4) => {
          "enabled" === t4 && this.ownedAgentRunWebSocketSelection?.drain();
        })), this.setupHttp1KeepaliveDisabledRefresh();
      }
      get isDisposed() {
        return this.disposed;
      }
      dispose() {
        this.disposed = true, this.resolveAuthReady(false), this.resolveIsSetup(), this.disposables.forEach((t3) => {
          t3.dispose();
        }), this.ownedAgentRunWebSocketSelection?.dispose(), this.ownedAgentRunWebSocketSelection = void 0, this.transportFactory.abortAllSessionManagers(), this.transportFactory.destroyAllAgents();
      }
      resolveAuthReady(t3) {
        const e3 = this.authReadyResolve;
        void 0 !== e3 && (this.authReadyResolve = void 0, e3(t3));
      }
      resolveIsSetup() {
        const t3 = this.isSetupResolve;
        void 0 !== t3 && (this.isSetupResolve = void 0, t3());
      }
      setupEventListeners() {
        this.disposables.push(this.host.onDidChangeCursorAuthToken((t4) => {
          this.accessToken = t4, void 0 !== this.cursorCreds && this.setup("auth_token");
        })), this.disposables.push(this.host.onDidChangeCursorCreds((t4) => {
          this.cursorCreds = t4, this.setup("creds");
        })), this.disposables.push(this.host.onDidChangeHttpProtocolSettings(() => {
          this.setup("protocol_settings");
        }));
        const t3 = setInterval(async () => {
          await this.setServerConfig(), this.lastServerHttp2DisabledValue !== (await this.getConfig())?.http2Config && (this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config, await this.setup("server_config"));
        }, 6e5);
        this.disposables.push({ dispose: () => clearInterval(t3) });
      }
      resolveHttp1Reason() {
        return this.lastServerHttp2DisabledValue === w.Http2Config.FORCE_ALL_DISABLED ? "server_force_all" : this.lastServerHttp2DisabledValue === w.Http2Config.FORCE_BIDI_DISABLED ? "server_force_bidi" : this.lastServerHttp2DisabledValue !== w.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== w.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled() ? "client_disabled" : void 0;
      }
      getWsReachabilityProbeContext() {
        if (void 0 === this.cursorCreds) return;
        const t3 = this.resolveHttp1Reason();
        return void 0 !== t3 ? { backendUrl: this.cursorCreds.backendUrl, http1Reason: t3, mode: this.host.isHttp1SseDisabled() ? "poll" : "sse", hasEffectiveProxy: this.host.hasEffectiveProxy?.() ?? false } : void 0;
      }
      recordTransportRebuilt(t3, e3) {
        const r3 = this.lastBidiTransportMode ?? "none", n3 = this.resolveHttp1Reason() ?? "none";
        this.lastBidiTransportMode = e3, this.debugLog.info(`[AiConnectTransportHandler] transports rebuilt (${t3}): ${r3} -> ${e3}, http1 reason ${n3}`), (0, N.incrementTransportMetric)(this.host, "transport.rebuilt", { trigger: t3, mode: e3, previous_mode: r3, http1_reason: n3 }), (0, N.emitTransportStructuredLog)(this.host, { level: "info", message: "Transports rebuilt", metadata: { service: "transport_factory", subkey: "transport_rebuilt", trigger: t3, mode: e3, previousMode: r3, modeChanged: r3 !== e3, http1Reason: n3 } });
      }
      maybeScheduleWsReachabilityProbe() {
        const t3 = (0, D.scheduleWsReachabilityProbe)({ host: this.host, getContext: () => this.getWsReachabilityProbeContext() });
        void 0 !== t3 && this.disposables.push(t3), this.maybeScheduleWsDurabilityProbe();
      }
      maybeScheduleWsDurabilityProbe() {
        const t3 = (0, D.scheduleWsDurabilityProbe)({ host: this.host, getContext: () => this.getWsReachabilityProbeContext() });
        void 0 !== t3 && this.disposables.push(t3);
      }
      setupHttp1KeepaliveDisabledRefresh() {
        const t3 = async () => {
          try {
            const t4 = await this.host.checkFeatureGate("http1_keepalive_disabled");
            this.http1KeepaliveDisabled !== t4 && (this.debugLog.info(`[AiConnectTransportHandler] HTTP/1 keepalive disabled flag updated: ${this.http1KeepaliveDisabled}`), I.StructuredLogProviderImpl.info("transport", "HTTP/1 keepalive disabled flag updated", { service: "transport_factory", subkey: "http1_keepalive_disabled_flag_updated", http1KeepaliveDisabled: t4 })), this.http1KeepaliveDisabled = t4;
          } catch (t4) {
            this.debugLog.error("[AiConnectTransportHandler] Error checking HTTP/1 keepalive disabled flag, keeping previous value", t4);
          }
        };
        t3(), this.disposables.push(this.host.onDidChangeGates((e3) => {
          e3.changedGates?.includes("http1_keepalive_disabled") && t3(), e3.changedGates?.includes("ws_reachability_probe") && this.maybeScheduleWsReachabilityProbe(), e3.changedGates?.includes("ws_dark_durability_probe") && ((0, D.cancelWsDurabilityProbe)(), this.maybeScheduleWsDurabilityProbe());
        }));
      }
      async getInitialValues() {
        let t3 = false;
        try {
          this.lastServerHttp2DisabledValue = (await this.getConfig())?.http2Config;
          const { creds: e3, token: r3 } = await (0, v.pollForAuthValues)({ getCreds: () => this.host.getCursorCreds(), getToken: () => this.host.getCursorAuthToken() }, { onTimeout: (t4) => {
            this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: timeout waiting for auth", t4), I.StructuredLogProviderImpl.info("auth", "Auth init timeout - proceeding without token (likely logged out)", { subkey: "auth_init_timeout", source: "handler", ...t4 });
          }, onRaceConditionPrevented: (t4) => {
            this.debugLog.warn("[AiConnectTransportHandler] getInitialValues: race condition prevented", t4), I.StructuredLogProviderImpl.warn("auth", "Auth token race condition prevented at startup", { subkey: "auth_race_condition_prevented", source: "handler", ...t4 });
          } }, this.debugLog);
          this.cursorCreds = e3, this.accessToken = r3, t3 = void 0 !== this.accessToken, this.debugLog.info("[AiConnectTransportHandler] getInitialValues: auth ready", { hasAccessToken: t3 }), this.resolveAuthReady(t3), await this.setup("init");
        } finally {
          this.resolveAuthReady(t3);
        }
      }
      getAiServerClient() {
        if (void 0 === this._aiServerClient) throw new Error("INVARIANT VIOLATION: AiServerClient is undefined");
        const t3 = performance.now();
        return void 0 !== this.lastClientCreationTime && t3 - this.lastClientCreationTime > this.INACTIVITY_THRESHOLD && this.refresh(), this.lastClientCreationTime = t3, this._aiServerClient;
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
      isHttp2TransportFor(t3) {
        return true === this._getTransportForService(t3.serviceName, t3.methodName, false)?.isHttp2;
      }
      isDebug() {
        return (this.cursorCreds?.backendUrl?.includes("lclhst.build") || this.cursorCreds?.backendUrl?.includes("localhost")) ?? false;
      }
      async refresh() {
        await this.setup("refresh");
      }
      _getTransportForService(t3, e3, r3 = true) {
        let n3;
        if (t3 === h.HealthService.typeName) {
          return this.host.isHttp2Disabled() && e3 !== h.HealthService.methods.streamBidi.name ? this._backendTransport : this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[h.HealthService.typeName];
        }
        if (n3 = e3 in this._overrideMethodNameToTransportMap ? this._overrideMethodNameToTransportMap[e3] : t3 in this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides ? this._overrideServiceNameToTransportMapLowerPriorityThanMethodOverrides[t3] : this._backendTransport, void 0 !== n3) return r3 && (n3.usage++, true === n3.isHttp2 && n3.usage > 500 && this.createTransports("usage_rotation")), n3;
      }
      async setup(t3) {
        await this.createTransports(t3);
        const e3 = this.createMultiProxyTransport();
        this._transport = e3, this._aiServerClient = (0, B.createPromiseClient)(c.AiService, e3), this._filesyncClient = (0, B.createPromiseClient)(p.FileSyncService, e3), this._backgroundComposerClient = (0, B.createPromiseClient)(l.BackgroundComposerService, e3), this._agentClient = (0, B.createPromiseClient)(u.AgentService, e3), this.resolveIsSetup();
      }
      createMultiProxyTransport() {
        if (!this._ready) throw new Error("INVARIANT VIOLATION: This should not be called without having this._ready.");
        const t3 = this;
        return { unary(e3, r3, n3, s3, i3, o3, a2) {
          const u2 = t3._getTransportForService(e3.typeName, r3.name);
          if (void 0 === u2) throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + e3.typeName);
          return u2.transport.unary(e3, r3, n3, s3, i3, o3, a2);
        }, stream(e3, r3, n3, s3, i3, o3, a2) {
          const u2 = t3._getTransportForService(e3.typeName, r3.name);
          if (void 0 === u2) throw new Error("INVARIANT VIOLATION: Transport is undefined for service: " + e3.typeName);
          return u2.transport.stream(e3, r3, n3, s3, i3, o3, a2);
        }, getTransportHost: (e3, r3) => t3._getTransportForService(e3, r3, false)?.host };
      }
      async setServerConfig() {
        try {
          this.config = w.GetServerConfigResponse.fromJson(await this.host.getCachedServerConfigJson());
        } catch (t3) {
          this.debugLog.error("Error getting server config", t3);
        }
      }
      async getConfig() {
        return void 0 === this.config && await this.setServerConfig(), this.config;
      }
      createTransports(t3) {
        const e3 = this.transportRebuildQueue.then(async () => {
          if (!this.disposed) try {
            await this.createTransportsForLatestContext(t3);
          } finally {
            this.disposed && (this.ownedAgentRunWebSocketSelection?.dispose(), this.ownedAgentRunWebSocketSelection = void 0, this.transportFactory.abortAllSessionManagers(), this.transportFactory.destroyAllAgents());
          }
        });
        return this.transportRebuildQueue = e3.catch(() => {
        }), e3;
      }
      async createTransportsForLatestContext(t3) {
        if (!this.cursorCreds) throw new Error("CursorCreds is undefined");
        const e3 = this.ownedAgentRunWebSocketSelection;
        this.transportFactory.destroyAllAgents();
        const r3 = () => this.http1KeepaliveDisabled, n3 = (await (0, R.getHttp1KeepaliveConfig)(this.host)).keepAliveInitialDelayMs;
        try {
          const t4 = await this.host.getDynamicConfigValue("http2_agent_connection_pool_config");
          t4 && "object" == typeof t4 && "poolSize" in t4 && "number" == typeof t4.poolSize && t4.poolSize > 0 && (this.agentConnectionPoolSize = t4.poolSize);
        } catch (t4) {
          this.debugLog.error("[AiConnectTransportHandler] Error fetching connection pool config, using default", t4);
        }
        const s3 = (() => this.lastServerHttp2DisabledValue === w.Http2Config.FORCE_ALL_DISABLED || this.lastServerHttp2DisabledValue === w.Http2Config.FORCE_BIDI_DISABLED || this.lastServerHttp2DisabledValue !== w.Http2Config.FORCE_ALL_ENABLED && this.lastServerHttp2DisabledValue !== w.Http2Config.FORCE_BIDI_ENABLED && this.host.isHttp2Disabled())(), { backendUrl: i3, repoBackendUrl: o3, geoCppBackendUrl: a2, cppConfigBackendUrl: u2, cmdkBackendUrl: c2, telemBackendUrl: l2, originBackendUrl: m2, bcProxyUrl: d2, agentBackendUrlNonPrivacy: f2, localLoopInferenceUrl: p2 } = this.cursorCreds, h2 = f2.default || i3, g2 = h2 && !s3 ? h2 : i3;
        this.maybeScheduleWsReachabilityProbe(), this.transportFactory.setHttp2SessionEstablishTimeoutMs(await (0, R.getHttp2SessionEstablishTimeoutMs)(this.host)), this._backendTransport = this.transportFactory.createTransport({ baseUrl: i3, useHttp2: false, maybeUseCppSpoofToken: false, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.BACKEND), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3 }), this._bidiTransport = this.transportFactory.createTransport({ baseUrl: i3, useHttp2: false, maybeUseCppSpoofToken: false, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.BIDI), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3 });
        const A2 = this.bidiTransportFactory.createTransport({ baseUrl: g2, useHttp2: !s3, maybeUseCppSpoofToken: true, bidiTransport: this._bidiTransport, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.AGENT), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3, usePooledConnections: true, connectionPoolSize: this.agentConnectionPoolSize });
        let _2, y2;
        if (p2 && !s3 && p2 !== this.localLoopInferenceFellBackUrl) {
          const t4 = p2;
          y2 = t4, _2 = this.bidiTransportFactory.createTransport({ baseUrl: t4, useHttp2: true, maybeUseCppSpoofToken: true, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.LOCAL_LOOP_INFERENCE), usePooledConnections: true, connectionPoolSize: this.agentConnectionPoolSize }), _2.transport = (S2 = _2.transport, J2 = (e4) => this.fallBackLocalLoopInference(t4, e4), { unary: (t5, e4, r4, n4, s4, i4, o4) => S2.unary(t5, e4, r4, n4, s4, i4, o4), async stream(t5, e4, r4, n4, s4, i4, o4) {
            try {
              return await S2.stream(t5, e4, r4, n4, s4, i4, o4);
            } catch (t6) {
              const e5 = B.ConnectError.from(t6);
              if (true === r4?.aborted || e5.code !== B.Code.Unimplemented && e5.code !== B.Code.Unavailable) throw t6;
              throw J2(e5), new B.ConnectError("connection aborted (local-loop inference fell back to the backend URL)", B.Code.Unavailable, void 0, void 0, t6);
            }
          } });
        }
        var S2, J2;
        const E2 = { repoTransport: this.transportFactory.createTransport({ baseUrl: o3, useHttp2: false, maybeUseCppSpoofToken: false, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.REPO), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3, overrideAuthToken: async () => {
          if (o3.includes("repo42.cursor.sh") && i3.includes("localhost")) {
            const t4 = await this.getConfig();
            if (t4?.indexingConfig?.repo42AuthToken) return t4.indexingConfig.repo42AuthToken;
          }
        } }), http2RepoTransport: this.transportFactory.createTransport({ baseUrl: o3, useHttp2: !s3, maybeUseCppSpoofToken: false, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.HTTP2_REPO), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3, overrideAuthToken: async () => {
          if (o3.includes("repo42.cursor.sh") && i3.includes("localhost")) {
            const t4 = await this.getConfig();
            if (t4?.indexingConfig?.repo42AuthToken) return t4.indexingConfig.repo42AuthToken;
          }
        } }), geoCppTransport: this.transportFactory.createTransport({ baseUrl: a2, useHttp2: !s3 && a2.includes(".cursor.sh") && !a2.includes("api2.cursor.sh"), maybeUseCppSpoofToken: true, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.GEO_CPP), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3 }), cppConfigTransport: this.transportFactory.createTransport({ baseUrl: u2, useHttp2: !s3 && u2.includes(".cursor.sh") && !u2.includes("api2.cursor.sh"), maybeUseCppSpoofToken: true, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.CPP_CONFIG), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3 }), cmdkTransport: this.transportFactory.createTransport({ baseUrl: c2, useHttp2: !s3 && c2.includes("api3.cursor"), maybeUseCppSpoofToken: false, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.CMDK), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3 }), telemTransport: this.transportFactory.createTransport({ baseUrl: l2, useHttp2: !s3 && l2.includes("api3.cursor"), maybeUseCppSpoofToken: true, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.TELEM), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3 }), originTransport: this.transportFactory.createTransport({ baseUrl: m2, useHttp2: false, maybeUseCppSpoofToken: false, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.ORIGIN), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3 }), remoteAgentHostPresenceTransport: this.transportFactory.createTransport({ baseUrl: i3, useHttp2: true, maybeUseCppSpoofToken: false, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.REMOTE_AGENT_HOST_PRESENCE, { fallbackDefaults: R.HTTP2_PING_PRODUCTION_DEFAULTS }), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3, sendCompression: b.adaptiveGzip, onGoaway: () => this.host.notifyRemoteAgentHostTunnelGoaway?.() }), agenticComposerTransport: this.bidiTransportFactory.createTransport({ baseUrl: i3, useHttp2: !s3, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.AGENTIC_COMPOSER), maybeUseCppSpoofToken: true, bidiTransport: this._bidiTransport }), agentBidiTransport: A2, localLoopInferenceTransport: _2, localLoopInferenceUrl: y2, backgroundComposerProxyTransport: this.transportFactory.createTransport({ baseUrl: d2, useHttp2: !s3, maybeUseCppSpoofToken: false, pingConfig: await (0, R.getHttp2PingConfig)(this.host, R.Http2TransportCallSite.BACKGROUND_COMPOSER_PROXY, { fallbackDefaults: R.HTTP2_PING_PRODUCTION_DEFAULTS }), getHttp1KeepaliveDisabled: r3, http1KeepaliveInitialDelayMs: n3, overrideAuthToken: async () => {
          if (d2.includes("api2.cursor.sh") && i3.includes("localhost")) {
            const t4 = await this.getConfig();
            if (t4?.indexingConfig?.repo42AuthToken) return t4.indexingConfig.repo42AuthToken;
          }
        } }) }, I2 = this.createAgentRunWebSocketSelectionForTransportContext({ httpTransport: A2.transport, httpAgentUrl: g2, agentUsesHttp2: !s3 });
        if (A2.transport = I2.transport, this.disposed) I2.dispose();
        else {
          this.transportConfig = E2, this._updateTransportMap(E2), this.ownedAgentRunWebSocketSelection = I2, this._ready = true, this.recordTransportRebuilt(t3, (0, N.resolveHttpTransportMode)({ http2Disabled: s3, http1SseDisabled: this.host.isHttp1SseDisabled() })), "enabled" === this.transportFactory.getPrivateInferenceEnablement().state && I2.drain();
          try {
            e3?.drain();
          } catch (t4) {
            this.debugLog.error("[AiConnectTransportHandler] Error draining replaced Agent WebSocket selection", t4);
          }
        }
      }
      fallBackLocalLoopInference(t3, e3) {
        this.localLoopInferenceFellBackUrl = t3;
        const r3 = this.transportConfig;
        void 0 !== r3 && r3.localLoopInferenceUrl === t3 ? (this._overrideMethodNameToTransportMap[g.InferenceService.methods.runInference.name] = r3.agenticComposerTransport, (0, N.incrementTransportMetric)(this.host, "transport.local_loop_inference_fallback", { connect_code: B.Code[e3.code] }), this.debugLog.warn("[AiConnectTransportHandler] RunInference fell back from the local-loop URL to the backend URL", e3)) : this.debugLog.info("[AiConnectTransportHandler] a replaced local-loop URL failed late; current route unchanged", e3);
      }
      createAgentRunWebSocketSelectionForTransportContext(t3) {
        const e3 = (0, k.resolveAgentWebSocketUrl)(t3.httpAgentUrl) ?? t3.httpAgentUrl;
        return (0, k.createAgentRunWebSocketSelection)({ httpTransport: t3.httpTransport, baseUrl: t3.httpAgentUrl, agentUsesHttp2: t3.agentUsesHttp2, debugLog: this.debugLog, checkFeatureGate: (t4) => this.host.checkFeatureGate(t4), getDynamicConfigValue: (t4) => this.host.getDynamicConfigValue(t4), onDidChangeFeatureGate: (t4, e4) => this.host.onDidChangeGates((r3) => {
          const n3 = void 0 !== r3.changedGates || void 0 !== r3.changedConfigs || void 0 !== r3.changedExperiments;
          (true === r3.changedGates?.includes(t4) || !n3) && e4();
        }), onDidChangeDynamicConfig: (t4, e4) => this.host.onDidChangeGates((r3) => {
          const n3 = void 0 !== r3.changedGates || void 0 !== r3.changedConfigs || void 0 !== r3.changedExperiments;
          (true === r3.changedConfigs?.includes(t4) || !n3) && e4();
        }), connectionContext: (0, C.createHostAgentRunWebSocketConnectionContextSource)(this.host, { endpoint: e3 }), runWithNetworkContext: (t4) => this.host.runWithNetworkContext(t4), observePreconnect: (t4) => {
          try {
            this.host.metricsIncrement({ stat: "transport.agent_websocket_preconnect", tags: { outcome: t4.outcome, failure_category: t4.failureCategory ?? "none" } });
          } catch {
          }
        }, metricsIncrement: (t4) => this.host.metricsIncrement(t4), prepareUpgrade: (e4) => this.transportFactory.prepareAgentRunRequest({ baseUrl: t3.httpAgentUrl, maybeUseCppSpoofToken: true, callerHeaders: e4.callerHeaders, ...void 0 !== e4.signal ? { signal: e4.signal } : {} }) });
      }
      async resetConnectionIfIpChangedOrNetworkReset(t3) {
        const { isDisconnected: e3 } = await this.resetConnectionIfIpChanged(), r3 = void 0 !== t3 && this.networkChangeMonitor.networkId !== t3;
        return e3 || r3;
      }
      async resetConnectionIfIpChanged() {
        const t3 = this.cursorCreds?.backendUrl, e3 = this.accessToken;
        return void 0 === t3 || void 0 === e3 ? { isDisconnected: false } : this.networkChangeMonitor.triggerCallbackIfDisconnected(t3, e3);
      }
      createAbortAndErrorInterceptor() {
        return (0, P.createAbortErrorAndTimeoutInterceptor)(() => this.networkChangeMonitor.networkId, (t3) => this.resetConnectionIfIpChangedOrNetworkReset(t3), this.numMsForRequestToResetConnection);
      }
    };
  }