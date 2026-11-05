// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41033 range:7618453..7640803
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41033: function(e, t, r) {
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
    Object.defineProperty(t, "__esModule", { value: true }), t.TransportFactory = void 0;
    const a = r(77598), c = i(r(40610)), l = i(r(37067)), u = i(r(41692)), d = r(17714), p = r(94430), m = (r(22712), r(54384)), h = r(58485), f = r(22642), g = r(15218), y = r(7126), w = r(26920), v = (r(32709), r(12704)), _ = r(49008), A = r(86704), S = r(17319), b = r(78827), E = r(69997), I = r(30668), C = "x-cursor-team-id", k = /* @__PURE__ */ new Set(["authorization", "cf-connecting-ip", "cf-ipcountry", "connection", "content-length", "cookie", "forwarded", "host", "keep-alive", "proxy-authorization", "sec-websocket-accept", "sec-websocket-extensions", "sec-websocket-key", "sec-websocket-protocol", "sec-websocket-version", "te", "trailer", "transfer-encoding", "true-client-ip", "upgrade", "via", "x-client-ip", "x-cursor-cf-origin-secret", "x-forwarded-for", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto", "x-real-ip"]), x = ["cf-", "proxy-", "sec-websocket-", "x-forwarded-"];
    function T(e2) {
      const t2 = e2.toLowerCase();
      return k.has(t2) || x.some((e3) => t2.startsWith(e3));
    }
    function R(e2) {
      const t2 = new Headers();
      return e2.forEach((e3, r2) => {
        T(r2) || t2.append(r2, e3);
      }), t2;
    }
    t.TransportFactory = class {
      constructor(e2, t2, r2, n2, s2) {
        this.host = e2, this.cookieJar = t2, this.getAccessToken = r2, this.clientKey = n2, this.createAbortAndErrorInterceptor = s2, this.dnsOrderCache = /* @__PURE__ */ new Map(), this.activeAgents = /* @__PURE__ */ new Set(), this.activeSessionManagers = /* @__PURE__ */ new Set(), this.retiredSessionManagers = /* @__PURE__ */ new Map(), this.http2SessionEstablishTimeoutMs = A.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS, this.loggedBlockedRpcs = /* @__PURE__ */ new Set(), this.debugLog = e2.debugLog, this.storedRandomness = (0, a.randomUUID)(), this.privateInferenceEnablement = e2.getPrivateInferenceEnablement?.() ?? f.PRIVATE_INFERENCE_DISABLED, this.systemCertificatesReady = this.loadCertificates();
      }
      getPrivateInferenceEnablement() {
        return this.privateInferenceEnablement;
      }
      onPrivateInferenceBlockedRpc(e2, t2) {
        const r2 = `${e2}/${t2}`;
        this.loggedBlockedRpcs.has(r2) || (this.loggedBlockedRpcs.add(r2), this.host.log.info(`[TransportFactory] private inference perimeter refused ${r2} (state=${this.privateInferenceEnablement.state}; further refusals of this RPC are logged at debug level)`)), this.debugLog.debug(`[TransportFactory] private inference perimeter refused ${r2}`);
        try {
          this.host.metricsIncrement({ stat: "transport.private_inference_perimeter_blocked", tags: { service: e2, method: t2 } });
        } catch {
        }
      }
      createPrivateInferencePerimeterInterceptor() {
        return (0, g.createPrivateInferencePerimeterInterceptor)(this.privateInferenceEnablement, (e2, t2) => this.onPrivateInferenceBlockedRpc(e2, t2));
      }
      async loadCertificates() {
        try {
          const e2 = await this.host.loadSystemCertificates(), t2 = u.rootCertificates;
          this.systemCertificates = [...e2 || [], ...t2 || []];
        } catch (e2) {
          this.debugLog.error("[TransportFactory] Failed to load system certificates:", e2), this.systemCertificates = [...u.rootCertificates];
        }
      }
      getTransportHost(e2) {
        try {
          return new URL(e2).host;
        } catch {
          return e2;
        }
      }
      isLocalBaseUrl(e2) {
        return null !== e2.match(/(?:[^/]+\.)?lclhst\.build(?::\d+)?(?:\/|$)/) || null !== e2.match(/(?:[^/]+\.)?localhost(?::\d+)?(?:\/|$)/);
      }
      applyStandardRequestHeaders(e2) {
        const t2 = (0, a.randomUUID)();
        return this.host.applyRequestHeaders(e2, t2, this.clientKey.toString("hex")), e2.header.set("x-cursor-streaming", "true"), t2;
      }
      async applyAuthorization(e2, t2) {
        if (t2.overrideAuthToken) {
          const r3 = await t2.overrideAuthToken();
          if (r3) return e2.header.set("Authorization", `Bearer ${r3}`), void this.addTeamIdHeader(e2);
          try {
            this.debugLog.debug("[TransportFactory] overrideAuthToken provided but returned empty; falling back to stored token", e2.service?.typeName, e2.method?.name), y.StructuredLogProviderImpl.debug("auth", "overrideAuthToken empty; falling back", { subkey: "override_token_empty", service: e2.service?.typeName ?? "unknown", method: e2.method?.name ?? "unknown" });
          } catch {
          }
        }
        const r2 = this.getAccessToken();
        if (void 0 !== r2) (0, S.willAccessTokenExpireSoon)(r2) && this.host.triggerTokenRefresh(), e2.header.set("Authorization", `Bearer ${t2.maybeUseCppSpoofToken ? this.host.maybeGetSpoofedCppAccessToken(r2, t2.baseUrl) : r2}`), this.addTeamIdHeader(e2);
        else try {
          this.debugLog.warn("[TransportFactory] Authorization header omitted: no access token available", e2.service?.typeName, e2.method?.name), y.StructuredLogProviderImpl.warn("auth", "Authorization omitted: no access token", { subkey: "missing_access_token", service: e2.service?.typeName ?? "unknown", method: e2.method?.name ?? "unknown" });
        } catch {
        }
      }
      async applyCookie(e2) {
        const t2 = this.getAccessToken();
        try {
          const r2 = await this.cookieJar.getCookieString(e2.baseUrl);
          if (r2.length > 0) e2.header.set("Cookie", r2);
          else {
            await this.createCookie(e2.baseUrl, e2.url, t2?.slice(0, 15) ?? this.storedRandomness);
            const r3 = await this.cookieJar.getCookieString(e2.baseUrl);
            e2.header.set("Cookie", r3);
          }
        } catch {
          this.debugLog.debug("Failed to set cookie");
        }
      }
      async prepareAgentRunRequest(e2) {
        e2.signal?.throwIfAborted();
        const t2 = new Headers();
        e2.callerHeaders.forEach((e3, r3) => {
          T(r3) || t2.append(r3, e3);
        });
        const r2 = { baseUrl: e2.baseUrl, url: new URL(`/${d.AgentService.typeName}/${d.AgentService.methods.run.name}`, e2.baseUrl).toString(), header: t2, service: d.AgentService, method: d.AgentService.methods.run }, n2 = this.applyStandardRequestHeaders(r2);
        e2.signal?.throwIfAborted(), await this.applyAuthorization(r2, e2), e2.signal?.throwIfAborted(), await this.applyCookie(r2), e2.signal?.throwIfAborted(), await this.systemCertificatesReady, e2.signal?.throwIfAborted();
        const s2 = this.isLocalBaseUrl(e2.baseUrl);
        return { headers: t2, credentialFingerprint: (0, w.fingerprintAgentRunPoolIdentity)(t2), runHeaders: R(t2), requestId: t2.get("x-request-id") ?? n2, nodeOptions: { ...void 0 !== this.systemCertificates ? { ca: this.systemCertificates } : {}, ...this.host.isDevelopment() && s2 ? { rejectUnauthorized: false } : {} } };
      }
      addTeamIdHeader(e2) {
        const t2 = this.host.getTeamId(), r2 = e2.header.has(C) || void 0 !== t2 ? "present" : "absent";
        e2.header.has(C) || void 0 === t2 || e2.header.set(C, t2.toString());
        try {
          this.host.metricsIncrement({ stat: "transport.team_id_header", tags: { status: r2 } });
        } catch {
        }
      }
      createTransport(e2) {
        const { baseUrl: t2, useHttp2: r2, maybeUseCppSpoofToken: n2, overrideAuthToken: s2, pingConfig: o2, getHttp1KeepaliveDisabled: i2, http1KeepaliveInitialDelayMs: a2, sendCompression: u2 = m.compressionGzip } = e2;
        let d2;
        d2 = !r2 && (0, v.isBaseUrlHttp2)(t2) ? new l.Agent({ keepAlive: true }) : new l.Agent({ keepAlive: false }), this.activeAgents.add(d2);
        const p2 = { agent: d2 };
        let h2 = t2;
        !r2 && (0, v.isBaseUrlHttp2)(t2) && (h2 = (0, v.replaceBaseUrlWithApi2)(t2));
        const f2 = this.getTransportHost(h2), g2 = this.isLocalBaseUrl(h2), y2 = this.createInterceptors({ baseUrl: h2, maybeUseCppSpoofToken: n2, overrideAuthToken: s2 }), w2 = h2.includes("gcpp") || h2.includes("api4.cursor.sh") ? { lookup: (e3, t3, r3) => {
          c.lookup(e3, { ...t3, all: true }, (t4, n3, s3) => {
            if (t4 || void 0 === n3) return r3(t4, n3, s3);
            if ("string" == typeof n3) return r3(t4, n3, s3);
            this.dnsOrderCache.has(e3) || this.dnsOrderCache.set(e3, n3);
            const o3 = this.dnsOrderCache.get(e3), i3 = n3.length === o3.length && n3.every((e4) => o3.some((t5) => t5.address === e4.address));
            r3(t4, i3 ? o3 : n3, s3);
          });
        } } : void 0, _2 = this.host.isDevelopment() && g2 ? { rejectUnauthorized: false, ALPNProtocols: [r2 ? "h2" : "http/1.1"] } : {}, A2 = { baseUrl: h2, useBinaryFormat: true, interceptors: y2, sendCompression: u2, acceptCompression: [m.compressionGzip] }, S2 = null != a2 ? { keepAlive: true, keepAliveInitialDelay: a2 } : {};
        return { transport: r2 ? this.createHttp2Transport({ commonOptions: A2, nodeClientAffinityOptions: w2, nodeInDevOptions: _2, pingConfig: o2, usePooledConnections: e2.usePooledConnections, connectionPoolSize: e2.connectionPoolSize, onGoaway: e2.onGoaway }) : this.createHttp1Transport({ commonOptions: A2, http1Options: p2, nodeClientAffinityOptions: w2, nodeInDevOptions: _2, http1KeepaliveOptions: S2, getHttp1KeepaliveDisabled: i2 }), isHttp2: r2, usage: 0, host: f2 };
      }
      createHttp2Transport(e2) {
        const { commonOptions: t2, nodeClientAffinityOptions: r2, nodeInDevOptions: n2, pingConfig: s2, usePooledConnections: o2, connectionPoolSize: i2, onGoaway: a2 } = e2, c2 = { ...r2, ...n2, ca: this.systemCertificates ?? void 0, minVersion: "TLSv1.2" }, l2 = {}, u2 = { service: "transport_factory", subkey: "http2_transport_created", httpVersion: "2", baseUrl: t2.baseUrl, compression: { sendCompression: t2.sendCompression?.name ?? "unknown", acceptCompression: t2.acceptCompression?.map((e3) => e3.name) ?? [] }, tls: { minVersion: c2.minVersion, rejectUnauthorized: c2.rejectUnauthorized ?? "default", alpnProtocols: c2.ALPNProtocols ?? ["h2"], hasCustomCA: void 0 !== c2.ca && Array.isArray(c2.ca) && c2.ca.length > 0, systemCertCount: this.systemCertificates?.length ?? 0 }, http2: { pingIdleConnection: s2?.pingIdleConnection ?? null, pingIntervalMs: s2?.pingIntervalMs ?? null, pingTimeoutMs: s2?.pingTimeoutMs ?? null, idleConnectionTimeoutMs: s2?.idleConnectionTimeoutMs ?? null, settings: { initialWindowSize: l2.settings?.initialWindowSize ?? "default", maxFrameSize: l2.settings?.maxFrameSize ?? "default", maxConcurrentStreams: l2.settings?.maxConcurrentStreams ?? "default", maxHeaderListSize: l2.settings?.maxHeaderListSize ?? "default", enablePush: l2.settings?.enablePush ?? true, headerTableSize: l2.settings?.headerTableSize ?? "default" } }, dnsAffinity: { enabled: void 0 !== r2?.lookup }, dev: { isDevelopment: this.host.isDevelopment(), rejectUnauthorized: n2.rejectUnauthorized ?? "default" } };
        y.StructuredLogProviderImpl.info("transport", "HTTP2 transport created with network settings", u2);
        const d2 = { pingIntervalMs: s2?.pingIntervalMs, pingIdleConnection: s2?.pingIdleConnection, pingTimeoutMs: s2?.pingTimeoutMs, idleConnectionTimeoutMs: s2?.idleConnectionTimeoutMs }, p2 = { ...c2, ...l2 }, h2 = () => new _.Http2SessionReplacer({ create: () => {
          const e3 = new m.Http2SessionManager(t2.baseUrl, d2, p2);
          return this.activeSessionManagers.add(e3), e3;
        }, onReplaced: (e3, r3, n3) => this.retireSessionManager(e3, r3, n3, t2.baseUrl), establishTimeoutMs: () => this.http2SessionEstablishTimeoutMs, onGoaway: a2 });
        if (o2) {
          const e3 = null != i2 && i2 > 0 ? i2 : 4, r3 = [];
          for (let t3 = 0; t3 < e3; t3++) r3.push(h2());
          let n3 = 0;
          const o3 = /* @__PURE__ */ new WeakMap();
          return (0, m.createConnectTransport)({ ...t2, httpVersion: "2", sessionManager: { get authority() {
            return new URL(t2.baseUrl).origin;
          }, async request(t3, s3, i3, a3) {
            const c3 = r3[n3 % e3];
            n3++;
            const l3 = await c3.request(t3, s3, i3, a3);
            return o3.set(l3, c3), l3;
          }, notifyResponseByteRead(e4) {
            const t3 = o3.get(e4);
            if (void 0 === t3) for (const t4 of r3) t4.notifyResponseByteRead(e4);
            else t3.notifyResponseByteRead(e4);
          } }, nodeOptions: c2, http2Options: l2, pingIdleConnection: s2?.pingIdleConnection ?? void 0, pingIntervalMs: s2?.pingIntervalMs ?? void 0, pingTimeoutMs: s2?.pingTimeoutMs ?? void 0, idleConnectionTimeoutMs: s2?.idleConnectionTimeoutMs ?? void 0 });
        }
        const f2 = h2();
        return (0, m.createConnectTransport)({ ...t2, httpVersion: "2", sessionManager: f2, nodeOptions: c2, http2Options: l2, pingIdleConnection: s2?.pingIdleConnection ?? void 0, pingIntervalMs: s2?.pingIntervalMs ?? void 0, pingTimeoutMs: s2?.pingTimeoutMs ?? void 0, idleConnectionTimeoutMs: s2?.idleConnectionTimeoutMs ?? void 0 });
      }
      createHttp1Transport(e2) {
        const { commonOptions: t2, http1Options: r2, nodeClientAffinityOptions: n2, nodeInDevOptions: s2, http1KeepaliveOptions: o2, getHttp1KeepaliveDisabled: i2 } = e2;
        if ("function" == typeof i2) {
          this.debugLog.info("[TransportFactory] Creating dynamic HTTP/1 transports with keepalive killswitch");
          const e3 = (0, m.createConnectTransport)({ ...t2, httpVersion: "1.1", ...r2, nodeOptions: { ...n2, ...s2, ...o2 } }), a3 = (0, m.createConnectTransport)({ ...t2, httpVersion: "1.1", ...r2, nodeOptions: { ...n2, ...s2 } });
          return { unary: (t3, r3, n3, s3, o3, c3, l2) => (i2() ? a3 : e3).unary(t3, r3, n3, s3, o3, c3, l2), stream: (t3, r3, n3, s3, o3, c3, l2) => (i2() ? a3 : e3).stream(t3, r3, n3, s3, o3, c3, l2) };
        }
        const a2 = { ...n2, ...s2, ...o2 }, c2 = { service: "transport_factory", subkey: "http1_transport_created", httpVersion: "1.1", baseUrl: t2.baseUrl, compression: { sendCompression: t2.sendCompression?.name ?? "unknown", acceptCompression: t2.acceptCompression?.map((e3) => e3.name) ?? [] }, tls: { rejectUnauthorized: a2.rejectUnauthorized ?? "default", alpnProtocols: a2.ALPNProtocols ?? ["http/1.1"] }, http1: { keepAlive: r2.agent?.keepAlive ?? false, keepAliveInitialDelay: o2.keepAliveInitialDelay ?? null }, dnsAffinity: { enabled: void 0 !== n2?.lookup }, dev: { isDevelopment: this.host.isDevelopment(), rejectUnauthorized: s2.rejectUnauthorized ?? "default" } };
        return y.StructuredLogProviderImpl.info("transport", "HTTP/1.1 transport created with network settings", c2), (0, m.createConnectTransport)({ ...t2, httpVersion: "1.1", ...r2, nodeOptions: a2 });
      }
      createInterceptors({ baseUrl: e2, maybeUseCppSpoofToken: t2, overrideAuthToken: r2 }) {
        const n2 = [];
        n2.push(this.createPrivateInferencePerimeterInterceptor());
        n2.push((e3) => async (t3) => this.host.runWithNetworkContext(async () => (this.applyStandardRequestHeaders(t3), await e3(t3)))), n2.push((0, b.createLargeProtoLoggingInterceptor)(this.host)), n2.push((0, E.createStreamRetryInterceptor)(this.host, { maxRetries: 3, baseDelayMs: 1e3, maxDelayMs: 3e4 })), n2.push((0, E.createUnaryRetryInterceptor)(this.host, { maxRetries: 3, baseDelayMs: 1e3, maxDelayMs: 3e4 })), this.host.isDevelopment(), n2.push(this.createAbortAndErrorInterceptor());
        n2.push((e3) => async (t3) => {
          try {
            return await e3(t3);
          } catch (e4) {
            const r3 = e4;
            if (r3.message?.includes("expected h2 session, but ALPN protocol failed to negotiate") && t3.service.typeName !== p.HealthService.typeName) {
              const e5 = { service: t3.service.typeName, method: t3.method.name, requestId: t3.header.get("x-request-id") ?? void 0 };
              this.recordHttp2KillSwitchFlip({ ...e5, action: "disable_http2", reason: "alpn_negotiation_failed", previousMode: this.resolveModeFromSettings() }), this.host.setHttp2Disabled().catch(() => {
              }), r3.metadata && "function" == typeof r3.metadata.get && r3.metadata.get("issuer")?.endsWith("goskope.com") && (this.recordHttp2KillSwitchFlip({ ...e5, action: "disable_http1_sse", reason: "netskope_issuer", previousMode: (0, I.resolveHttpTransportMode)({ http2Disabled: true, http1SseDisabled: this.host.isHttp1SseDisabled() }) }), this.host.setHttp1SseDisabled().catch(() => {
              }));
            }
            throw e4;
          }
        });
        n2.push((n3) => async (s2) => (await this.applyAuthorization(s2, { baseUrl: e2, maybeUseCppSpoofToken: t2, ...void 0 !== r2 ? { overrideAuthToken: r2 } : {} }), await n3(s2)));
        return n2.push((t3) => async (r3) => {
          await this.applyCookie({ baseUrl: e2, url: r3.url, header: r3.header });
          const n3 = await t3(r3);
          try {
            if (n3.header.has("Set-Cookie")) {
              const t4 = n3.header.getSetCookie();
              for (const r4 of t4) await this.cookieJar.setCookie(r4, e2).catch((e3) => {
              });
            }
          } catch (e3) {
            this.debugLog.debug("Failed to set cookie");
          }
          return n3;
        }), n2.push(this.createPrivateInferencePerimeterInterceptor()), n2;
      }
      resolveModeFromSettings() {
        return (0, I.resolveHttpTransportMode)({ http2Disabled: this.host.isHttp2Disabled(), http1SseDisabled: this.host.isHttp1SseDisabled() });
      }
      recordHttp2KillSwitchFlip(e2) {
        this.debugLog.info(`[TransportFactory] HTTP protocol kill switch flipped: ${e2.action} (${e2.reason}) after ${e2.service}/${e2.method} on ${e2.previousMode}`), (0, I.incrementTransportMetric)(this.host, "transport.http2_kill_switch", { action: e2.action, reason: e2.reason, previous_mode: e2.previousMode, service: e2.service, method: e2.method }), (0, I.emitTransportStructuredLog)(this.host, { level: "warn", message: "HTTP protocol kill switch flipped", metadata: { service: "transport_factory", subkey: "http2_kill_switch", action: e2.action, reason: e2.reason, previousMode: e2.previousMode, rpcService: e2.service, rpcMethod: e2.method, requestId: e2.requestId } });
      }
      async createCookie(e2, t2, r2) {
        const n2 = new h.Cookie({ key: "CursorCookie", value: `Cookie-${r2}`, domain: new URL(e2).hostname, path: t2.replace(e2, ""), expires: new Date(Date.now() + 864e5), httpOnly: true, secure: true, sameSite: "Strict" });
        await this.cookieJar.setCookie(n2, e2).catch((e3) => {
        });
      }
      setHttp2SessionEstablishTimeoutMs(e2) {
        this.http2SessionEstablishTimeoutMs = e2;
      }
      retireSessionManager(e2, t2, r2, n2) {
        const s2 = Date.now();
        this.pruneRetiredSessionManagers(s2), this.activeSessionManagers.delete(e2), this.retiredSessionManagers.set(e2, s2);
        const o2 = this.getTransportHost(n2), i2 = Math.round(t2 / 1e3);
        this.debugLog.info("establish_timeout" === r2 ? `[TransportFactory] HTTP/2 session abandoned after a request waited ${i2}s for it to connect to ${o2}` : `[TransportFactory] HTTP/2 session replaced after ${i2}s without response data for ${o2}`), (0, I.incrementTransportMetric)(this.host, "transport.http2_session_replaced", { reason: r2 }), (0, I.emitTransportStructuredLog)(this.host, { level: "warn", message: "establish_timeout" === r2 ? "HTTP/2 session abandoned while connecting" : "HTTP/2 session replaced after a stream read nothing", metadata: { service: "transport_factory", subkey: "http2_session_replaced", reason: r2, ..."establish_timeout" === r2 ? { waitedMs: Math.round(t2) } : { silentForMs: Math.round(t2) }, host: o2 } });
      }
      destroyAllAgents() {
        for (const e3 of this.activeAgents) e3.destroy();
        this.activeAgents.clear();
        const e2 = Date.now();
        this.pruneRetiredSessionManagers(e2);
        for (const t2 of this.activeSessionManagers) this.retiredSessionManagers.set(t2, e2);
        this.activeSessionManagers.clear(), this.dnsOrderCache.clear();
      }
      pruneRetiredSessionManagers(e2) {
        for (const [t2, r2] of this.retiredSessionManagers) if (e2 - r2 > 6e5) {
          const n2 = t2.state(), s2 = Math.round((e2 - r2) / 1e3);
          if ("open" === n2) {
            this.debugLog.info(`[TransportFactory] Deferring abort of retired HTTP/2 session manager with open streams (retired ${s2}s ago)`), y.StructuredLogProviderImpl.info("transport", "Retired HTTP/2 session manager abort deferred (open streams)", { service: "transport_factory", subkey: "retired_session_manager_abort_deferred", retiredSeconds: s2 });
            continue;
          }
          this.debugLog.info(`[TransportFactory] Aborting retired HTTP/2 session manager (state=${n2}, retired ${s2}s ago)`), t2.abort(), this.retiredSessionManagers.delete(t2);
        }
      }
      abortAllSessionManagers() {
        for (const e2 of this.activeSessionManagers) e2.abort();
        this.activeSessionManagers.clear();
        for (const [e2] of this.retiredSessionManagers) e2.abort();
        this.retiredSessionManagers.clear();
      }
    };
  }