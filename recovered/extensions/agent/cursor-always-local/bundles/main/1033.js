// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1033 range:374159..396526
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1033: function(t2, e2, r2) {
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
    Object.defineProperty(e2, "__esModule", { value: true }), e2.TransportFactory = void 0;
    const a = r2(7598), u = o2(r2(610)), c = o2(r2(7067)), l = o2(r2(1692)), m = r2(7714), d = r2(4430), f = (r2(8394), r2(4384)), p = r2(8485), h = r2(2642), g = r2(5218), A = r2(7126), _ = r2(6920), y = (r2(2709), r2(2704)), w = r2(9008), S = r2(6704), J = r2(7319), B = r2(8827), E = r2(9997), I = r2(668), C = "x-cursor-team-id", b = /* @__PURE__ */ new Set(["authorization", "cf-connecting-ip", "cf-ipcountry", "connection", "content-length", "cookie", "forwarded", "host", "keep-alive", "proxy-authorization", "sec-websocket-accept", "sec-websocket-extensions", "sec-websocket-key", "sec-websocket-protocol", "sec-websocket-version", "te", "trailer", "transfer-encoding", "true-client-ip", "upgrade", "via", "x-client-ip", "x-cursor-cf-origin-secret", "x-forwarded-for", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto", "x-real-ip"]), k = ["cf-", "proxy-", "sec-websocket-", "x-forwarded-"];
    function v(t3) {
      const e3 = t3.toLowerCase();
      return b.has(e3) || k.some((t4) => e3.startsWith(t4));
    }
    function q(t3) {
      const e3 = new Headers();
      return t3.forEach((t4, r3) => {
        v(r3) || e3.append(r3, t4);
      }), e3;
    }
    e2.TransportFactory = class {
      constructor(t3, e3, r3, n3, s3) {
        this.host = t3, this.cookieJar = e3, this.getAccessToken = r3, this.clientKey = n3, this.createAbortAndErrorInterceptor = s3, this.dnsOrderCache = /* @__PURE__ */ new Map(), this.activeAgents = /* @__PURE__ */ new Set(), this.activeSessionManagers = /* @__PURE__ */ new Set(), this.retiredSessionManagers = /* @__PURE__ */ new Map(), this.http2SessionEstablishTimeoutMs = S.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS, this.loggedBlockedRpcs = /* @__PURE__ */ new Set(), this.debugLog = t3.debugLog, this.storedRandomness = (0, a.randomUUID)(), this.privateInferenceEnablement = t3.getPrivateInferenceEnablement?.() ?? h.PRIVATE_INFERENCE_DISABLED, this.systemCertificatesReady = this.loadCertificates();
      }
      getPrivateInferenceEnablement() {
        return this.privateInferenceEnablement;
      }
      onPrivateInferenceBlockedRpc(t3, e3) {
        const r3 = `${t3}/${e3}`;
        this.loggedBlockedRpcs.has(r3) || (this.loggedBlockedRpcs.add(r3), this.host.log.info(`[TransportFactory] private inference perimeter refused ${r3} (state=${this.privateInferenceEnablement.state}; further refusals of this RPC are logged at debug level)`)), this.debugLog.debug(`[TransportFactory] private inference perimeter refused ${r3}`);
        try {
          this.host.metricsIncrement({ stat: "transport.private_inference_perimeter_blocked", tags: { service: t3, method: e3 } });
        } catch {
        }
      }
      createPrivateInferencePerimeterInterceptor() {
        return (0, g.createPrivateInferencePerimeterInterceptor)(this.privateInferenceEnablement, (t3, e3) => this.onPrivateInferenceBlockedRpc(t3, e3));
      }
      async loadCertificates() {
        try {
          const t3 = await this.host.loadSystemCertificates(), e3 = l.rootCertificates;
          this.systemCertificates = [...t3 || [], ...e3 || []];
        } catch (t3) {
          this.debugLog.error("[TransportFactory] Failed to load system certificates:", t3), this.systemCertificates = [...l.rootCertificates];
        }
      }
      getTransportHost(t3) {
        try {
          return new URL(t3).host;
        } catch {
          return t3;
        }
      }
      isLocalBaseUrl(t3) {
        return null !== t3.match(/(?:[^/]+\.)?lclhst\.build(?::\d+)?(?:\/|$)/) || null !== t3.match(/(?:[^/]+\.)?localhost(?::\d+)?(?:\/|$)/);
      }
      applyStandardRequestHeaders(t3) {
        const e3 = (0, a.randomUUID)();
        return this.host.applyRequestHeaders(t3, e3, this.clientKey.toString("hex")), t3.header.set("x-cursor-streaming", "true"), e3;
      }
      async applyAuthorization(t3, e3) {
        if (e3.overrideAuthToken) {
          const r4 = await e3.overrideAuthToken();
          if (r4) return t3.header.set("Authorization", `Bearer ${r4}`), void this.addTeamIdHeader(t3);
          try {
            this.debugLog.debug("[TransportFactory] overrideAuthToken provided but returned empty; falling back to stored token", t3.service?.typeName, t3.method?.name), A.StructuredLogProviderImpl.debug("auth", "overrideAuthToken empty; falling back", { subkey: "override_token_empty", service: t3.service?.typeName ?? "unknown", method: t3.method?.name ?? "unknown" });
          } catch {
          }
        }
        const r3 = this.getAccessToken();
        if (void 0 !== r3) (0, J.willAccessTokenExpireSoon)(r3) && this.host.triggerTokenRefresh(), t3.header.set("Authorization", `Bearer ${e3.maybeUseCppSpoofToken ? this.host.maybeGetSpoofedCppAccessToken(r3, e3.baseUrl) : r3}`), this.addTeamIdHeader(t3);
        else try {
          this.debugLog.warn("[TransportFactory] Authorization header omitted: no access token available", t3.service?.typeName, t3.method?.name), A.StructuredLogProviderImpl.warn("auth", "Authorization omitted: no access token", { subkey: "missing_access_token", service: t3.service?.typeName ?? "unknown", method: t3.method?.name ?? "unknown" });
        } catch {
        }
      }
      async applyCookie(t3) {
        const e3 = this.getAccessToken();
        try {
          const r3 = await this.cookieJar.getCookieString(t3.baseUrl);
          if (r3.length > 0) t3.header.set("Cookie", r3);
          else {
            await this.createCookie(t3.baseUrl, t3.url, e3?.slice(0, 15) ?? this.storedRandomness);
            const r4 = await this.cookieJar.getCookieString(t3.baseUrl);
            t3.header.set("Cookie", r4);
          }
        } catch {
          this.debugLog.debug("Failed to set cookie");
        }
      }
      async prepareAgentRunRequest(t3) {
        t3.signal?.throwIfAborted();
        const e3 = new Headers();
        t3.callerHeaders.forEach((t4, r4) => {
          v(r4) || e3.append(r4, t4);
        });
        const r3 = { baseUrl: t3.baseUrl, url: new URL(`/${m.AgentService.typeName}/${m.AgentService.methods.run.name}`, t3.baseUrl).toString(), header: e3, service: m.AgentService, method: m.AgentService.methods.run }, n3 = this.applyStandardRequestHeaders(r3);
        t3.signal?.throwIfAborted(), await this.applyAuthorization(r3, t3), t3.signal?.throwIfAborted(), await this.applyCookie(r3), t3.signal?.throwIfAborted(), await this.systemCertificatesReady, t3.signal?.throwIfAborted();
        const s3 = this.isLocalBaseUrl(t3.baseUrl);
        return { headers: e3, credentialFingerprint: (0, _.fingerprintAgentRunPoolIdentity)(e3), runHeaders: q(e3), requestId: e3.get("x-request-id") ?? n3, nodeOptions: { ...void 0 !== this.systemCertificates ? { ca: this.systemCertificates } : {}, ...this.host.isDevelopment() && s3 ? { rejectUnauthorized: false } : {} } };
      }
      addTeamIdHeader(t3) {
        const e3 = this.host.getTeamId(), r3 = t3.header.has(C) || void 0 !== e3 ? "present" : "absent";
        t3.header.has(C) || void 0 === e3 || t3.header.set(C, e3.toString());
        try {
          this.host.metricsIncrement({ stat: "transport.team_id_header", tags: { status: r3 } });
        } catch {
        }
      }
      createTransport(t3) {
        const { baseUrl: e3, useHttp2: r3, maybeUseCppSpoofToken: n3, overrideAuthToken: s3, pingConfig: i3, getHttp1KeepaliveDisabled: o3, http1KeepaliveInitialDelayMs: a2, sendCompression: l2 = f.compressionGzip } = t3;
        let m2;
        m2 = !r3 && (0, y.isBaseUrlHttp2)(e3) ? new c.Agent({ keepAlive: true }) : new c.Agent({ keepAlive: false }), this.activeAgents.add(m2);
        const d2 = { agent: m2 };
        let p2 = e3;
        !r3 && (0, y.isBaseUrlHttp2)(e3) && (p2 = (0, y.replaceBaseUrlWithApi2)(e3));
        const h2 = this.getTransportHost(p2), g2 = this.isLocalBaseUrl(p2), A2 = this.createInterceptors({ baseUrl: p2, maybeUseCppSpoofToken: n3, overrideAuthToken: s3 }), _2 = p2.includes("gcpp") || p2.includes("api4.cursor.sh") ? { lookup: (t4, e4, r4) => {
          u.lookup(t4, { ...e4, all: true }, (e5, n4, s4) => {
            if (e5 || void 0 === n4) return r4(e5, n4, s4);
            if ("string" == typeof n4) return r4(e5, n4, s4);
            this.dnsOrderCache.has(t4) || this.dnsOrderCache.set(t4, n4);
            const i4 = this.dnsOrderCache.get(t4), o4 = n4.length === i4.length && n4.every((t5) => i4.some((e6) => e6.address === t5.address));
            r4(e5, o4 ? i4 : n4, s4);
          });
        } } : void 0, w2 = this.host.isDevelopment() && g2 ? { rejectUnauthorized: false, ALPNProtocols: [r3 ? "h2" : "http/1.1"] } : {}, S2 = { baseUrl: p2, useBinaryFormat: true, interceptors: A2, sendCompression: l2, acceptCompression: [f.compressionGzip] }, J2 = null != a2 ? { keepAlive: true, keepAliveInitialDelay: a2 } : {};
        return { transport: r3 ? this.createHttp2Transport({ commonOptions: S2, nodeClientAffinityOptions: _2, nodeInDevOptions: w2, pingConfig: i3, usePooledConnections: t3.usePooledConnections, connectionPoolSize: t3.connectionPoolSize, onGoaway: t3.onGoaway }) : this.createHttp1Transport({ commonOptions: S2, http1Options: d2, nodeClientAffinityOptions: _2, nodeInDevOptions: w2, http1KeepaliveOptions: J2, getHttp1KeepaliveDisabled: o3 }), isHttp2: r3, usage: 0, host: h2 };
      }
      createHttp2Transport(t3) {
        const { commonOptions: e3, nodeClientAffinityOptions: r3, nodeInDevOptions: n3, pingConfig: s3, usePooledConnections: i3, connectionPoolSize: o3, onGoaway: a2 } = t3, u2 = { ...r3, ...n3, ca: this.systemCertificates ?? void 0, minVersion: "TLSv1.2" }, c2 = {}, l2 = { service: "transport_factory", subkey: "http2_transport_created", httpVersion: "2", baseUrl: e3.baseUrl, compression: { sendCompression: e3.sendCompression?.name ?? "unknown", acceptCompression: e3.acceptCompression?.map((t4) => t4.name) ?? [] }, tls: { minVersion: u2.minVersion, rejectUnauthorized: u2.rejectUnauthorized ?? "default", alpnProtocols: u2.ALPNProtocols ?? ["h2"], hasCustomCA: void 0 !== u2.ca && Array.isArray(u2.ca) && u2.ca.length > 0, systemCertCount: this.systemCertificates?.length ?? 0 }, http2: { pingIdleConnection: s3?.pingIdleConnection ?? null, pingIntervalMs: s3?.pingIntervalMs ?? null, pingTimeoutMs: s3?.pingTimeoutMs ?? null, idleConnectionTimeoutMs: s3?.idleConnectionTimeoutMs ?? null, settings: { initialWindowSize: c2.settings?.initialWindowSize ?? "default", maxFrameSize: c2.settings?.maxFrameSize ?? "default", maxConcurrentStreams: c2.settings?.maxConcurrentStreams ?? "default", maxHeaderListSize: c2.settings?.maxHeaderListSize ?? "default", enablePush: c2.settings?.enablePush ?? true, headerTableSize: c2.settings?.headerTableSize ?? "default" } }, dnsAffinity: { enabled: void 0 !== r3?.lookup }, dev: { isDevelopment: this.host.isDevelopment(), rejectUnauthorized: n3.rejectUnauthorized ?? "default" } };
        A.StructuredLogProviderImpl.info("transport", "HTTP2 transport created with network settings", l2);
        const m2 = { pingIntervalMs: s3?.pingIntervalMs, pingIdleConnection: s3?.pingIdleConnection, pingTimeoutMs: s3?.pingTimeoutMs, idleConnectionTimeoutMs: s3?.idleConnectionTimeoutMs }, d2 = { ...u2, ...c2 }, p2 = () => new w.Http2SessionReplacer({ create: () => {
          const t4 = new f.Http2SessionManager(e3.baseUrl, m2, d2);
          return this.activeSessionManagers.add(t4), t4;
        }, onReplaced: (t4, r4, n4) => this.retireSessionManager(t4, r4, n4, e3.baseUrl), establishTimeoutMs: () => this.http2SessionEstablishTimeoutMs, onGoaway: a2 });
        if (i3) {
          const t4 = null != o3 && o3 > 0 ? o3 : 4, r4 = [];
          for (let e4 = 0; e4 < t4; e4++) r4.push(p2());
          let n4 = 0;
          const i4 = /* @__PURE__ */ new WeakMap();
          return (0, f.createConnectTransport)({ ...e3, httpVersion: "2", sessionManager: { get authority() {
            return new URL(e3.baseUrl).origin;
          }, async request(e4, s4, o4, a3) {
            const u3 = r4[n4 % t4];
            n4++;
            const c3 = await u3.request(e4, s4, o4, a3);
            return i4.set(c3, u3), c3;
          }, notifyResponseByteRead(t5) {
            const e4 = i4.get(t5);
            if (void 0 === e4) for (const e5 of r4) e5.notifyResponseByteRead(t5);
            else e4.notifyResponseByteRead(t5);
          } }, nodeOptions: u2, http2Options: c2, pingIdleConnection: s3?.pingIdleConnection ?? void 0, pingIntervalMs: s3?.pingIntervalMs ?? void 0, pingTimeoutMs: s3?.pingTimeoutMs ?? void 0, idleConnectionTimeoutMs: s3?.idleConnectionTimeoutMs ?? void 0 });
        }
        const h2 = p2();
        return (0, f.createConnectTransport)({ ...e3, httpVersion: "2", sessionManager: h2, nodeOptions: u2, http2Options: c2, pingIdleConnection: s3?.pingIdleConnection ?? void 0, pingIntervalMs: s3?.pingIntervalMs ?? void 0, pingTimeoutMs: s3?.pingTimeoutMs ?? void 0, idleConnectionTimeoutMs: s3?.idleConnectionTimeoutMs ?? void 0 });
      }
      createHttp1Transport(t3) {
        const { commonOptions: e3, http1Options: r3, nodeClientAffinityOptions: n3, nodeInDevOptions: s3, http1KeepaliveOptions: i3, getHttp1KeepaliveDisabled: o3 } = t3;
        if ("function" == typeof o3) {
          this.debugLog.info("[TransportFactory] Creating dynamic HTTP/1 transports with keepalive killswitch");
          const t4 = (0, f.createConnectTransport)({ ...e3, httpVersion: "1.1", ...r3, nodeOptions: { ...n3, ...s3, ...i3 } }), a3 = (0, f.createConnectTransport)({ ...e3, httpVersion: "1.1", ...r3, nodeOptions: { ...n3, ...s3 } });
          return { unary: (e4, r4, n4, s4, i4, u3, c2) => (o3() ? a3 : t4).unary(e4, r4, n4, s4, i4, u3, c2), stream: (e4, r4, n4, s4, i4, u3, c2) => (o3() ? a3 : t4).stream(e4, r4, n4, s4, i4, u3, c2) };
        }
        const a2 = { ...n3, ...s3, ...i3 }, u2 = { service: "transport_factory", subkey: "http1_transport_created", httpVersion: "1.1", baseUrl: e3.baseUrl, compression: { sendCompression: e3.sendCompression?.name ?? "unknown", acceptCompression: e3.acceptCompression?.map((t4) => t4.name) ?? [] }, tls: { rejectUnauthorized: a2.rejectUnauthorized ?? "default", alpnProtocols: a2.ALPNProtocols ?? ["http/1.1"] }, http1: { keepAlive: r3.agent?.keepAlive ?? false, keepAliveInitialDelay: i3.keepAliveInitialDelay ?? null }, dnsAffinity: { enabled: void 0 !== n3?.lookup }, dev: { isDevelopment: this.host.isDevelopment(), rejectUnauthorized: s3.rejectUnauthorized ?? "default" } };
        return A.StructuredLogProviderImpl.info("transport", "HTTP/1.1 transport created with network settings", u2), (0, f.createConnectTransport)({ ...e3, httpVersion: "1.1", ...r3, nodeOptions: a2 });
      }
      createInterceptors({ baseUrl: t3, maybeUseCppSpoofToken: e3, overrideAuthToken: r3 }) {
        const n3 = [];
        n3.push(this.createPrivateInferencePerimeterInterceptor());
        n3.push((t4) => async (e4) => this.host.runWithNetworkContext(async () => (this.applyStandardRequestHeaders(e4), await t4(e4)))), n3.push((0, B.createLargeProtoLoggingInterceptor)(this.host)), n3.push((0, E.createStreamRetryInterceptor)(this.host, { maxRetries: 3, baseDelayMs: 1e3, maxDelayMs: 3e4 })), n3.push((0, E.createUnaryRetryInterceptor)(this.host, { maxRetries: 3, baseDelayMs: 1e3, maxDelayMs: 3e4 })), this.host.isDevelopment(), n3.push(this.createAbortAndErrorInterceptor());
        n3.push((t4) => async (e4) => {
          try {
            return await t4(e4);
          } catch (t5) {
            const r4 = t5;
            if (r4.message?.includes("expected h2 session, but ALPN protocol failed to negotiate") && e4.service.typeName !== d.HealthService.typeName) {
              const t6 = { service: e4.service.typeName, method: e4.method.name, requestId: e4.header.get("x-request-id") ?? void 0 };
              this.recordHttp2KillSwitchFlip({ ...t6, action: "disable_http2", reason: "alpn_negotiation_failed", previousMode: this.resolveModeFromSettings() }), this.host.setHttp2Disabled().catch(() => {
              }), r4.metadata && "function" == typeof r4.metadata.get && r4.metadata.get("issuer")?.endsWith("goskope.com") && (this.recordHttp2KillSwitchFlip({ ...t6, action: "disable_http1_sse", reason: "netskope_issuer", previousMode: (0, I.resolveHttpTransportMode)({ http2Disabled: true, http1SseDisabled: this.host.isHttp1SseDisabled() }) }), this.host.setHttp1SseDisabled().catch(() => {
              }));
            }
            throw t5;
          }
        });
        n3.push((n4) => async (s3) => (await this.applyAuthorization(s3, { baseUrl: t3, maybeUseCppSpoofToken: e3, ...void 0 !== r3 ? { overrideAuthToken: r3 } : {} }), await n4(s3)));
        return n3.push((e4) => async (r4) => {
          await this.applyCookie({ baseUrl: t3, url: r4.url, header: r4.header });
          const n4 = await e4(r4);
          try {
            if (n4.header.has("Set-Cookie")) {
              const e5 = n4.header.getSetCookie();
              for (const r5 of e5) await this.cookieJar.setCookie(r5, t3).catch((t4) => {
              });
            }
          } catch (t4) {
            this.debugLog.debug("Failed to set cookie");
          }
          return n4;
        }), n3.push(this.createPrivateInferencePerimeterInterceptor()), n3;
      }
      resolveModeFromSettings() {
        return (0, I.resolveHttpTransportMode)({ http2Disabled: this.host.isHttp2Disabled(), http1SseDisabled: this.host.isHttp1SseDisabled() });
      }
      recordHttp2KillSwitchFlip(t3) {
        this.debugLog.info(`[TransportFactory] HTTP protocol kill switch flipped: ${t3.action} (${t3.reason}) after ${t3.service}/${t3.method} on ${t3.previousMode}`), (0, I.incrementTransportMetric)(this.host, "transport.http2_kill_switch", { action: t3.action, reason: t3.reason, previous_mode: t3.previousMode, service: t3.service, method: t3.method }), (0, I.emitTransportStructuredLog)(this.host, { level: "warn", message: "HTTP protocol kill switch flipped", metadata: { service: "transport_factory", subkey: "http2_kill_switch", action: t3.action, reason: t3.reason, previousMode: t3.previousMode, rpcService: t3.service, rpcMethod: t3.method, requestId: t3.requestId } });
      }
      async createCookie(t3, e3, r3) {
        const n3 = new p.Cookie({ key: "CursorCookie", value: `Cookie-${r3}`, domain: new URL(t3).hostname, path: e3.replace(t3, ""), expires: new Date(Date.now() + 864e5), httpOnly: true, secure: true, sameSite: "Strict" });
        await this.cookieJar.setCookie(n3, t3).catch((t4) => {
        });
      }
      setHttp2SessionEstablishTimeoutMs(t3) {
        this.http2SessionEstablishTimeoutMs = t3;
      }
      retireSessionManager(t3, e3, r3, n3) {
        const s3 = Date.now();
        this.pruneRetiredSessionManagers(s3), this.activeSessionManagers.delete(t3), this.retiredSessionManagers.set(t3, s3);
        const i3 = this.getTransportHost(n3), o3 = Math.round(e3 / 1e3);
        this.debugLog.info("establish_timeout" === r3 ? `[TransportFactory] HTTP/2 session abandoned after a request waited ${o3}s for it to connect to ${i3}` : `[TransportFactory] HTTP/2 session replaced after ${o3}s without response data for ${i3}`), (0, I.incrementTransportMetric)(this.host, "transport.http2_session_replaced", { reason: r3 }), (0, I.emitTransportStructuredLog)(this.host, { level: "warn", message: "establish_timeout" === r3 ? "HTTP/2 session abandoned while connecting" : "HTTP/2 session replaced after a stream read nothing", metadata: { service: "transport_factory", subkey: "http2_session_replaced", reason: r3, ..."establish_timeout" === r3 ? { waitedMs: Math.round(e3) } : { silentForMs: Math.round(e3) }, host: i3 } });
      }
      destroyAllAgents() {
        for (const t4 of this.activeAgents) t4.destroy();
        this.activeAgents.clear();
        const t3 = Date.now();
        this.pruneRetiredSessionManagers(t3);
        for (const e3 of this.activeSessionManagers) this.retiredSessionManagers.set(e3, t3);
        this.activeSessionManagers.clear(), this.dnsOrderCache.clear();
      }
      pruneRetiredSessionManagers(t3) {
        for (const [e3, r3] of this.retiredSessionManagers) if (t3 - r3 > 6e5) {
          const n3 = e3.state(), s3 = Math.round((t3 - r3) / 1e3);
          if ("open" === n3) {
            this.debugLog.info(`[TransportFactory] Deferring abort of retired HTTP/2 session manager with open streams (retired ${s3}s ago)`), A.StructuredLogProviderImpl.info("transport", "Retired HTTP/2 session manager abort deferred (open streams)", { service: "transport_factory", subkey: "retired_session_manager_abort_deferred", retiredSeconds: s3 });
            continue;
          }
          this.debugLog.info(`[TransportFactory] Aborting retired HTTP/2 session manager (state=${n3}, retired ${s3}s ago)`), e3.abort(), this.retiredSessionManagers.delete(e3);
        }
      }
      abortAllSessionManagers() {
        for (const t3 of this.activeSessionManagers) t3.abort();
        this.activeSessionManagers.clear();
        for (const [t3] of this.retiredSessionManagers) t3.abort();
        this.retiredSessionManagers.clear();
      }
    };
  }