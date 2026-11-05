// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 9329 range:3488988..3514159
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9329: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AGENT_WEBSOCKET_POOL_CONFIG = t.AGENT_WEBSOCKET_FEATURE_GATE = void 0, t.resolveAgentWebSocketUrl = d, t.resolveAgentWebSocketMaxConnections = p, t.resolveAgentWebSocketFallbackOnColdPool = m, t.resolveAgentWebSocketWarmSpareOnLease = h, t.resolveAgentWebSocketKeepalive = y, t.resolveAgentWebSocketPreconnectMaxRetryDelay = A, t.createAgentRunWebSocketSelection = function(e2) {
      const t2 = new x(e2);
      return { transport: t2, drain: () => t2.drain(), dispose: () => t2.dispose() };
    };
    const n = r(96980), s = r(17714), o = r(22712), i = r(26920);
    t.AGENT_WEBSOCKET_FEATURE_GATE = "nal_websocket_client", t.AGENT_WEBSOCKET_POOL_CONFIG = "nal_websocket_client_pool";
    const a = 1, c = 4, l = /* @__PURE__ */ new Set(["https://api.playground.cursor.sh", "https://api2.cursor.sh"]), u = "/agent/v1/run";
    function d(e2) {
      let t2;
      try {
        t2 = new URL(e2);
      } catch {
        return;
      }
      if (!("https:" === t2.protocol && l.has(t2.origin) && "" === t2.port && "" === t2.username && "" === t2.password && ("" === t2.pathname || "/" === t2.pathname) && "" === t2.search && "" === t2.hash && (e2 === t2.origin || e2 === `${t2.origin}/`))) return;
      const r2 = new URL(u, t2);
      return r2.protocol = "wss:", r2.toString();
    }
    function p(e2) {
      if ("object" != typeof e2 || null === e2) return a;
      const t2 = e2.maxConnections;
      return "number" != typeof t2 || !Number.isInteger(t2) || t2 < a || t2 > c ? a : t2;
    }
    function m(e2) {
      return "object" == typeof e2 && null !== e2 && true === e2.fallbackOnColdPool;
    }
    function h(e2) {
      return "object" == typeof e2 && null !== e2 && true === e2.warmSpareOnLease;
    }
    const f = 6e4, g = 1e3;
    function y(e2) {
      if ("object" != typeof e2 || null === e2) return {};
      const t2 = e2, r2 = w(t2.keepalivePingIntervalMs, 0), n2 = w(t2.keepalivePingTimeoutMs, g);
      return { ...void 0 === r2 ? {} : { pingIntervalMs: r2 }, ...void 0 === n2 ? {} : { pingTimeoutMs: n2 } };
    }
    function w(e2, t2) {
      return "number" == typeof e2 && Number.isInteger(e2) && e2 >= t2 && e2 <= f ? e2 : void 0;
    }
    const v = 1e3, _ = 18e5;
    function A(e2) {
      if ("object" != typeof e2 || null === e2) return;
      const t2 = e2.preconnectMaxRetryDelayMs;
      return "number" == typeof t2 && Number.isInteger(t2) && t2 >= v && t2 <= _ ? t2 : void 0;
    }
    function S(e2) {
      const t2 = new Headers();
      if (void 0 === e2) return t2;
      if (e2 instanceof Headers) return e2.forEach((e3, r2) => {
        t2.append(r2, e3);
      }), t2;
      if (Array.isArray(e2)) {
        for (const [r2, n2] of e2) t2.append(r2, n2);
        return t2;
      }
      for (const [r2, n2] of Object.entries(e2)) for (const e3 of Array.isArray(n2) ? n2 : [n2]) t2.append(r2, e3);
      return t2;
    }
    async function* b(e2, t2) {
      for await (const r2 of e2) yield r2 instanceof t2 ? r2.toBinary() : new t2(r2).toBinary();
    }
    async function* E(e2, t2, r2) {
      try {
        for await (const r3 of e2) yield t2.fromBinary(r3);
      } finally {
        r2();
      }
    }
    class I extends o.ConnectError {
      constructor() {
        super("Agent WebSocket transport was closed", o.Code.Canceled);
      }
    }
    function C(e2) {
      return e2.reason instanceof Error ? e2.reason : new o.ConnectError("Request canceled", o.Code.Canceled);
    }
    function k(e2, t2) {
      const r2 = t2.filter((e3) => void 0 !== e3), n2 = r2.find((e3) => e3.aborted);
      return void 0 !== n2 ? Promise.reject(C(n2)) : 0 === r2.length ? e2 : new Promise((t3, n3) => {
        let s2 = false;
        const o2 = /* @__PURE__ */ new Map(), i2 = (e3) => {
          if (!s2) {
            s2 = true;
            for (const [e4, t4] of o2) e4.removeEventListener("abort", t4);
            e3();
          }
        };
        for (const e3 of r2) {
          const t4 = () => i2(() => n3(C(e3)));
          o2.set(e3, t4), e3.addEventListener("abort", t4, { once: true });
        }
        e2.then((e3) => i2(() => t3(e3)), (e3) => i2(() => n3(e3)));
      });
    }
    class x {
      constructor(e2) {
        this.options = e2, this.closedController = new AbortController(), this.webSocketAdmissionGeneration = 0, this.poolConfigRefreshGeneration = 0, this.gateAllowsWebSocketCached = false, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.preconnectFailures = 0, this.preconnectPending = false, this.observedConnectionSignals = /* @__PURE__ */ new WeakSet(), this.draining = false, this.closed = false, this.connectionContextTracker = new i.AgentRunWebSocketConnectionContextTracker(e2.connectionContext, (e3) => this.emitMetric({ stat: "transport.agent_websocket_context_change", tags: { cause: e3.cause, identity_changed: String(e3.identityChanged) } }), () => this.gateAllowsWebSocketCached), this.websocketUrl = e2.agentUsesHttp2 ? void 0 : d(e2.baseUrl), this.loadRunSessionFactory = e2.loadRunSessionFactory ?? (async () => (await r.e(915).then(r.bind(r, 40915))).createAgentWebSocketRunSession), this.now = e2.now ?? Date.now, this.gateChangeSubscription = void 0 === this.websocketUrl ? void 0 : e2.onDidChangeFeatureGate?.(t.AGENT_WEBSOCKET_FEATURE_GATE, () => {
          this.gateAllowsWebSocketCached = false, this.cancelPreconnect();
          try {
            this.connectionContextTracker.pause();
          } catch (e4) {
            this.options.debugLog.info("[AgentRunWebSocket] context subscription cleanup failed while disabling the gate", e4);
          }
          const e3 = ++this.webSocketAdmissionGeneration;
          this.refreshGateSnapshot(e3);
        }), this.poolConfigChangeSubscription = void 0 === this.websocketUrl || void 0 === e2.getDynamicConfigValue ? void 0 : e2.onDidChangeDynamicConfig?.(t.AGENT_WEBSOCKET_POOL_CONFIG, () => {
          !this.closed && this.gateAllowsWebSocketCached && this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration);
        }), void 0 !== this.gateChangeSubscription && this.refreshGateSnapshot(this.webSocketAdmissionGeneration);
      }
      unary(e2, t2, r2, n2, s2, o2, i2) {
        return this.options.httpTransport.unary(e2, t2, r2, n2, s2, o2, i2);
      }
      async stream(e2, t2, r2, i2, a2, c2, l2) {
        const u2 = (n2, s2, o2 = c2) => this.options.httpTransport.stream(e2, t2, r2, s2, n2, o2, l2), d2 = this.websocketUrl, p2 = void 0 === d2 || !(function(e3, t3) {
          return e3.typeName === s.AgentService.typeName && t3.name === s.AgentService.methods.run.name;
        })(e2, t2) || this.draining || true === r2?.aborted || void 0 !== i2 && i2 <= 0;
        if (p2) return u2(a2, i2);
        this.assertOpen();
        const m2 = this.webSocketAdmissionGeneration;
        if (!this.isWebSocketAdmissionCurrent(m2)) return u2(a2, i2);
        const h2 = this.now(), f2 = () => void 0 === i2 ? void 0 : Math.max(0, i2 - (this.now() - h2)), g2 = () => {
          const e3 = f2();
          if (void 0 !== e3 && e3 <= 0) throw new o.ConnectError("Agent WebSocket deadline exceeded", o.Code.DeadlineExceeded);
          return e3;
        }, y2 = (function(e3, t3) {
          if (void 0 === t3) return { signal: e3, dispose: () => {
          } };
          const r3 = new AbortController();
          let n2;
          const s2 = () => {
            void 0 !== n2 && (clearTimeout(n2), n2 = void 0), e3?.removeEventListener("abort", a3);
          }, i3 = (e4) => {
            r3.signal.aborted || r3.abort(e4), s2();
          };
          function a3() {
            i3(e3?.reason);
          }
          return true === e3?.aborted ? i3(e3.reason) : (e3?.addEventListener("abort", a3, { once: true }), n2 = setTimeout(() => i3(new o.ConnectError("Agent WebSocket deadline exceeded", o.Code.DeadlineExceeded)), t3)), { signal: r3.signal, dispose: s2 };
        })(r2, i2), w2 = S(a2);
        let v2, _2, A2;
        try {
          if (v2 = await k(this.loadSessionFactory(), [y2.signal, this.closedController.signal]), this.assertOpen(), !this.isWebSocketAdmissionCurrent(m2)) return y2.dispose(), u2(a2, g2());
          this.throwIfCanceled(y2.signal), A2 = this.connectionContextTracker.current();
          const e3 = void 0 === y2.signal ? A2.signal : AbortSignal.any([y2.signal, A2.signal]);
          _2 = await k(this.options.prepareUpgrade({ callerHeaders: w2, signal: e3 }), [e3, this.closedController.signal]), this.assertOpen(), this.throwIfCanceled(y2.signal);
        } catch (e3) {
          if (y2.dispose(), e3 instanceof I) throw e3;
          return this.assertOpen(), this.throwIfCanceled(y2.signal), this.options.debugLog.info("[AgentRunWebSocket] preparation failed before dialing; using HTTP", e3), u2(a2, g2());
        }
        const C2 = () => {
          const e3 = S(w2);
          return e3.set("x-request-id", _2.requestId), e3;
        };
        if (!this.isConnectionGenerationCurrent(A2)) return y2.dispose(), u2(C2(), g2());
        if (!this.isWebSocketAdmissionCurrent(m2)) return y2.dispose(), u2(C2(), g2());
        const x2 = this.ensureSession(v2);
        let T;
        try {
          T = await x2.run({ url: d2, requestId: _2.requestId, connectionContext: { ...A2.context, credentialFingerprint: _2.credentialFingerprint }, headers: _2.headers, nodeOptions: _2.nodeOptions }, { identity: { runId: w2.get("x-original-request-id") ?? _2.requestId, requestId: _2.requestId }, headers: _2.runHeaders, input: b(c2, t2.I), canSendRunStart: () => this.isWebSocketAdmissionCurrent(m2) && this.isConnectionGenerationCurrent(A2), contextInvalidationSignal: A2.signal, reuseOnly: this.fallbackOnColdPoolCached, ...void 0 !== y2.signal ? { signal: y2.signal } : {} });
        } catch (e3) {
          throw y2.dispose(), e3;
        }
        if ("fallback" === T.kind) {
          y2.dispose();
          const e3 = void 0 === T.replayInput ? void 0 : /* @__PURE__ */ (function(e4) {
            let t3, r3 = false, n2 = false;
            const s2 = () => {
              if (r3) throw new Error("Agent WebSocket replay input is one-shot");
              return r3 = true, t3 = e4[Symbol.asyncIterator](), t3;
            };
            return { input: { [Symbol.asyncIterator]: s2 }, stop(e5) {
              if (!n2) {
                n2 = true;
                try {
                  const r4 = t3 ?? s2(), n3 = void 0 !== r4.throw ? r4.throw(e5) : r4.return?.();
                  n3?.catch(() => {
                  });
                } catch {
                }
              }
            } };
          })(T.replayInput);
          "cold-pool" === T.reason && this.schedulePreconnect();
          try {
            return this.assertOpen(), this.throwIfCanceled(y2.signal), this.options.debugLog.info(`[AgentRunWebSocket] run did not start (${T.reason}); using HTTP`), u2(C2(), g2(), void 0 === e3 ? c2 : (async function* (e4, t3) {
              for await (const r3 of e4) yield t3.fromBinary(r3);
            })(e3.input, t2.I));
          } catch (t3) {
            throw e3?.stop(t3), t3;
          }
        }
        return T.response.header.set(n.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, "websocket"), { stream: true, service: e2, method: t2, header: T.response.header, trailer: T.response.trailer, message: E(T.response.message, t2.O, () => y2.dispose()) };
      }
      drain() {
        if (!this.closed && !this.draining) {
          this.draining = true, this.gateAllowsWebSocketCached = false, this.cancelPreconnect(), this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.poolConfigRefreshGeneration += 1, this.webSocketAdmissionGeneration += 1;
          try {
            this.gateChangeSubscription?.dispose();
          } finally {
            try {
              this.poolConfigChangeSubscription?.dispose();
            } finally {
              try {
                this.connectionContextTracker.invalidate();
              } finally {
                this.session?.retireWhenIdle("selection_drained");
              }
            }
          }
        }
      }
      dispose() {
        if (this.closed) return;
        this.closed = true, this.draining = false, this.gateAllowsWebSocketCached = false, this.cancelPreconnect();
        const e2 = this.session;
        this.session = void 0;
        try {
          this.gateChangeSubscription?.dispose();
        } finally {
          try {
            this.poolConfigChangeSubscription?.dispose();
          } finally {
            this.closedController.abort(new I());
            try {
              this.connectionContextTracker.invalidate();
            } finally {
              e2?.close("selection_disposed");
            }
          }
        }
      }
      isWebSocketAdmissionCurrent(e2) {
        return !this.closed && !this.draining && this.gateAllowsWebSocketCached && e2 === this.webSocketAdmissionGeneration;
      }
      isConnectionGenerationCurrent(e2) {
        if (e2.signal.aborted) return false;
        try {
          return this.connectionContextTracker.current().signal === e2.signal;
        } catch (e3) {
          return this.options.debugLog.info("[AgentRunWebSocket] could not verify connection context; using HTTP", e3), false;
        }
      }
      refreshGateSnapshot(e2) {
        Promise.resolve().then(() => this.options.checkFeatureGate(t.AGENT_WEBSOCKET_FEATURE_GATE)).then((t2) => {
          if (!this.closed && !this.draining && e2 === this.webSocketAdmissionGeneration) {
            const e3 = true === t2;
            this.gateAllowsWebSocketCached = e3, e3 ? (this.preconnectFailures = 0, this.preconnectOncePoolConfigSettles()) : (this.poolConfigRefreshGeneration += 1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.retireCurrentSessionWhenIdle("gate_disabled"));
          }
        }, (r2) => {
          this.closed || this.draining || e2 !== this.webSocketAdmissionGeneration || (this.gateAllowsWebSocketCached = false, this.poolConfigRefreshGeneration += 1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.retireCurrentSessionWhenIdle("gate_lookup_failed"), this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${t.AGENT_WEBSOCKET_FEATURE_GATE}; using HTTP`, r2));
        });
      }
      preconnectOncePoolConfigSettles() {
        this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration).then(() => this.schedulePreconnect(), () => this.schedulePreconnect());
      }
      refreshMaxConnectionsSnapshot(e2) {
        const r2 = this.options.getDynamicConfigValue;
        return void 0 === r2 ? Promise.resolve() : (n2 = Promise.resolve().then(() => r2(t.AGENT_WEBSOCKET_POOL_CONFIG)), s2 = this.options.poolConfigTimeoutMs ?? 1e3, new Promise((e3, t2) => {
          const r3 = setTimeout(() => t2(new Error(`timed out after ${s2}ms`)), s2);
          n2.then(e3, t2).finally(() => clearTimeout(r3));
        })).then((t2) => {
          if (this.closed || this.draining || !this.gateAllowsWebSocketCached || e2 !== this.poolConfigRefreshGeneration) return;
          const r3 = p(t2);
          this.applyKeepalive(y(t2)), this.applyMaxConnections(r3), this.preconnectMaxRetryDelayCached = A(t2), this.fallbackOnColdPoolCached = m(t2), this.warmSpareOnLeaseCached = h(t2), r3 !== a && this.options.debugLog.info(`[AgentRunWebSocket] sizing new sessions to ${r3} connections`);
        }, (r3) => {
          this.closed || this.draining || !this.gateAllowsWebSocketCached || e2 !== this.poolConfigRefreshGeneration || (this.applyKeepalive({}), this.applyMaxConnections(a), this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${t.AGENT_WEBSOCKET_POOL_CONFIG}; using one connection`, r3));
        });
        var n2, s2;
      }
      applyMaxConnections(e2) {
        this.maxConnectionsCached !== e2 && (this.maxConnectionsCached = e2, this.retireCurrentSessionWhenIdle("pool_resized"));
      }
      applyKeepalive(e2) {
        this.keepaliveCached.pingIntervalMs === e2.pingIntervalMs && this.keepaliveCached.pingTimeoutMs === e2.pingTimeoutMs || (this.keepaliveCached = e2, this.retireCurrentSessionWhenIdle("keepalive_reconfigured"));
      }
      retireCurrentSessionWhenIdle(e2) {
        const t2 = this.session;
        void 0 !== t2 && (this.session = void 0, t2.retireWhenIdle(e2));
      }
      preconnectRetryDelayMs() {
        const e2 = Math.max(1, this.options.preconnectRetryBaseMs ?? 1e3), t2 = Math.max(e2, this.options.preconnectMaxRetryDelayMs ?? this.preconnectMaxRetryDelayCached ?? 3e5), r2 = Math.min(Math.max(0, this.preconnectFailures - 1), 30);
        return Math.min(e2 * 2 ** r2, t2);
      }
      schedulePreconnect(e2 = 0) {
        if (!this.closed && !this.draining && this.gateAllowsWebSocketCached && void 0 !== this.websocketUrl && true !== this.options.preconnectDisabled) return void 0 !== this.preconnectPromise ? (this.preconnectPending = true, void (this.preconnectPendingDelayMs = void 0 === this.preconnectPendingDelayMs ? e2 : Math.min(this.preconnectPendingDelayMs, e2))) : void (void 0 === this.preconnectRetryTimer && (this.preconnectRetryTimer = setTimeout(() => {
          this.preconnectRetryTimer = void 0, this.startPreconnect();
        }, Math.max(0, e2))));
      }
      startPreconnect() {
        if (this.closed || this.draining || !this.gateAllowsWebSocketCached || void 0 === this.websocketUrl || true === this.options.preconnectDisabled) return;
        this.emitPreconnect({ outcome: "attempted" });
        const e2 = new AbortController();
        this.preconnectController = e2;
        const t2 = this.webSocketAdmissionGeneration, r2 = this.performPreconnect(e2.signal, t2).then((e3) => {
          if (void 0 === e3) return this.preconnectFailures = 0, void this.emitPreconnect({ outcome: "succeeded" });
          this.closed || this.draining || !this.isWebSocketAdmissionCurrent(t2) || (this.emitPreconnect({ outcome: "failed", failureCategory: e3 }), "context_invalidated" !== e3 && "stale" !== e3 ? (this.preconnectFailures += 1, this.schedulePreconnect(this.preconnectRetryDelayMs())) : this.preconnectFailures = 0);
        });
        this.preconnectPromise = r2, r2.finally(() => {
          if (this.preconnectController === e2 && (this.preconnectController = void 0), this.preconnectPromise === r2 && (this.preconnectPromise = void 0), this.preconnectPending) {
            const e3 = this.preconnectPendingDelayMs ?? 0;
            this.preconnectPending = false, this.preconnectPendingDelayMs = void 0, this.schedulePreconnect(e3);
          }
        });
      }
      async performPreconnect(e2, t2) {
        const r2 = this.websocketUrl;
        if (void 0 === r2) return "stale";
        let n2, s2 = "load";
        const o2 = new AbortController(), i2 = setTimeout(() => o2.abort(), Math.max(1, this.options.preconnectAttemptTimeoutMs ?? 1e4)), a2 = AbortSignal.any([e2, o2.signal, this.closedController.signal]);
        try {
          const e3 = await k(this.loadSessionFactory(), [a2]);
          if (!this.isWebSocketAdmissionCurrent(t2)) return "stale";
          s2 = "preparation", n2 = this.connectionContextTracker.current(), this.observeConnectionGeneration(n2);
          const o3 = AbortSignal.any([a2, n2.signal]), i3 = await k(this.options.prepareUpgrade({ callerHeaders: new Headers(), signal: o3 }), [o3]);
          if (!this.isWebSocketAdmissionCurrent(t2) || !this.isConnectionGenerationCurrent(n2)) return "stale";
          const c2 = this.ensureSession(e3);
          return await c2.preconnect({ url: r2, requestId: i3.requestId, connectionContext: { ...n2.context, credentialFingerprint: i3.credentialFingerprint }, headers: i3.headers, nodeOptions: i3.nodeOptions }, { signal: o3, contextInvalidationSignal: n2.signal }), this.isWebSocketAdmissionCurrent(t2) && this.isConnectionGenerationCurrent(n2) ? void 0 : (c2.retireWhenIdle(n2.signal.aborted ? "context_invalidated" : "preconnect_stale"), n2.signal.aborted ? "context_invalidated" : "stale");
        } catch (e3) {
          return true === n2?.signal.aborted ? "context_invalidated" : o2.signal.aborted ? "attempt_timeout" : this.preconnectLifecycleCategory(e3) ?? s2;
        } finally {
          clearTimeout(i2);
        }
      }
      observeConnectionGeneration(e2) {
        this.observedConnectionSignals.has(e2.signal) || (this.observedConnectionSignals.add(e2.signal), e2.signal.addEventListener("abort", () => {
          if (this.closed || this.draining || !this.gateAllowsWebSocketCached) return;
          const e3 = void 0 !== this.preconnectPromise;
          this.cancelPreconnect(), this.preconnectFailures = 0, e3 ? (this.preconnectPending = true, this.preconnectPendingDelayMs = 0) : this.schedulePreconnect();
        }, { once: true }));
      }
      preconnectLifecycleCategory(e2) {
        if ("object" != typeof e2 || null === e2 || !("code" in e2)) return;
        const t2 = e2.code;
        switch (t2) {
          case "aborted":
          case "context_invalidated":
          case "handshake_failed":
          case "handshake_timeout":
          case "manager_closed":
          case "open_failed":
          case "open_timeout":
          case "pool_exhausted":
            return t2;
          default:
            return;
        }
      }
      cancelPreconnect() {
        void 0 !== this.preconnectRetryTimer && (clearTimeout(this.preconnectRetryTimer), this.preconnectRetryTimer = void 0), this.preconnectPending = false, this.preconnectPendingDelayMs = void 0, this.preconnectController?.abort(), this.preconnectController = void 0;
      }
      emitPreconnect(e2) {
        try {
          this.options.observePreconnect?.(e2);
        } catch {
        }
      }
      emitMetric(e2) {
        try {
          this.options.metricsIncrement?.(e2);
        } catch {
        }
      }
      emitLifecycle(e2) {
        switch (e2.type) {
          case "acquire":
            return void this.emitMetric({ stat: "transport.agent_websocket_acquire", tags: { outcome: e2.outcome, failure_category: "failed" === e2.outcome ? e2.failureCategory : "none", miss_reason: "reused" === e2.outcome ? "none" : e2.missReason, idle_age_bucket: "reused" === e2.outcome ? e2.idleAgeBucket : "none" } });
          case "retired":
            return void this.emitMetric({ stat: "transport.agent_websocket_retired", tags: { cause: e2.cause, phase: e2.phase, socket_age_bucket: e2.socketAgeBucket, idle_age_bucket: e2.idleAgeBucket, last_claimed_idle_age_bucket: e2.lastClaimedIdleAgeBucket, lease_count_bucket: e2.leaseCountBucket } });
          case "peer_closed":
            return void this.emitMetric({ stat: "transport.agent_websocket_peer_close", tags: { close_code_category: e2.closeCodeCategory, has_reason: String(e2.hasReason), phase: e2.phase, socket_age_bucket: e2.socketAgeBucket, idle_age_bucket: e2.idleAgeBucket, last_claimed_idle_age_bucket: e2.lastClaimedIdleAgeBucket, lease_count_bucket: e2.leaseCountBucket } });
          default:
            return;
        }
      }
      throwIfCanceled(e2) {
        if (true === e2?.aborted) throw C(e2);
      }
      loadSessionFactory() {
        return this.sessionFactory ??= this.loadRunSessionFactory(), this.sessionFactory;
      }
      ensureSession(e2) {
        return this.session ??= e2({ runWithNetworkContext: (e3) => this.options.runWithNetworkContext(e3), maxConnections: this.maxConnectionsCached, ...void 0 === this.keepaliveCached.pingIntervalMs ? {} : { keepalivePingIntervalMs: this.keepaliveCached.pingIntervalMs }, ...void 0 === this.keepaliveCached.pingTimeoutMs ? {} : { keepalivePingTimeoutMs: this.keepaliveCached.pingTimeoutMs }, onPoolWentCold: () => this.schedulePreconnect(), onIdleSocketsExhausted: () => {
          this.warmSpareOnLeaseCached && this.schedulePreconnect();
        }, observePreconnect: (e3) => {
          this.emitPreconnect({ outcome: e3 }), "expired" === e3 && this.schedulePreconnect(this.preconnectRetryDelayMs());
        }, observeLifecycle: (e3) => this.emitLifecycle(e3), observeFirstMessagePipeline: (e3) => {
          try {
            this.options.metricsIncrement?.({ stat: "transport.agent_websocket_first_message_pipeline", tags: { outcome: e3.outcome } }), "accepted" === e3.outcome && this.options.metricsIncrement?.({ stat: "transport.agent_websocket_first_message_pipeline_time_saved_ms", value: e3.timeSavedMs });
          } catch {
          }
        } }), this.session;
      }
      assertOpen() {
        if (this.closed) throw new I();
      }
    }
  }