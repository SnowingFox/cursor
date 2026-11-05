// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9329 range:6066106..6091315
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9329: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.AGENT_WEBSOCKET_POOL_CONFIG = e2.AGENT_WEBSOCKET_FEATURE_GATE = void 0, e2.resolveAgentWebSocketUrl = m, e2.resolveAgentWebSocketMaxConnections = d, e2.resolveAgentWebSocketFallbackOnColdPool = f, e2.resolveAgentWebSocketWarmSpareOnLease = p, e2.resolveAgentWebSocketKeepalive = A, e2.resolveAgentWebSocketPreconnectMaxRetryDelay = S, e2.createAgentRunWebSocketSelection = function(t3) {
      const e3 = new k(t3);
      return { transport: e3, drain: () => e3.drain(), dispose: () => e3.dispose() };
    };
    const n2 = r2(6402), s2 = r2(7714), i2 = r2(8394), o2 = r2(6920);
    e2.AGENT_WEBSOCKET_FEATURE_GATE = "nal_websocket_client", e2.AGENT_WEBSOCKET_POOL_CONFIG = "nal_websocket_client_pool";
    const a = 1, u = 4, c = /* @__PURE__ */ new Set(["https://api.playground.cursor.sh", "https://api2.cursor.sh"]), l = "/agent/v1/run";
    function m(t3) {
      let e3;
      try {
        e3 = new URL(t3);
      } catch {
        return;
      }
      if (!("https:" === e3.protocol && c.has(e3.origin) && "" === e3.port && "" === e3.username && "" === e3.password && ("" === e3.pathname || "/" === e3.pathname) && "" === e3.search && "" === e3.hash && (t3 === e3.origin || t3 === `${e3.origin}/`))) return;
      const r3 = new URL(l, e3);
      return r3.protocol = "wss:", r3.toString();
    }
    function d(t3) {
      if ("object" != typeof t3 || null === t3) return a;
      const e3 = t3.maxConnections;
      return "number" != typeof e3 || !Number.isInteger(e3) || e3 < a || e3 > u ? a : e3;
    }
    function f(t3) {
      return "object" == typeof t3 && null !== t3 && true === t3.fallbackOnColdPool;
    }
    function p(t3) {
      return "object" == typeof t3 && null !== t3 && true === t3.warmSpareOnLease;
    }
    const h = 6e4, g = 1e3;
    function A(t3) {
      if ("object" != typeof t3 || null === t3) return {};
      const e3 = t3, r3 = _(e3.keepalivePingIntervalMs, 0), n3 = _(e3.keepalivePingTimeoutMs, g);
      return { ...void 0 === r3 ? {} : { pingIntervalMs: r3 }, ...void 0 === n3 ? {} : { pingTimeoutMs: n3 } };
    }
    function _(t3, e3) {
      return "number" == typeof t3 && Number.isInteger(t3) && t3 >= e3 && t3 <= h ? t3 : void 0;
    }
    const y = 1e3, w = 18e5;
    function S(t3) {
      if ("object" != typeof t3 || null === t3) return;
      const e3 = t3.preconnectMaxRetryDelayMs;
      return "number" == typeof e3 && Number.isInteger(e3) && e3 >= y && e3 <= w ? e3 : void 0;
    }
    function J(t3) {
      const e3 = new Headers();
      if (void 0 === t3) return e3;
      if (t3 instanceof Headers) return t3.forEach((t4, r3) => {
        e3.append(r3, t4);
      }), e3;
      if (Array.isArray(t3)) {
        for (const [r3, n3] of t3) e3.append(r3, n3);
        return e3;
      }
      for (const [r3, n3] of Object.entries(t3)) for (const t4 of Array.isArray(n3) ? n3 : [n3]) e3.append(r3, t4);
      return e3;
    }
    async function* B(t3, e3) {
      for await (const r3 of t3) yield r3 instanceof e3 ? r3.toBinary() : new e3(r3).toBinary();
    }
    async function* E(t3, e3, r3) {
      try {
        for await (const r4 of t3) yield e3.fromBinary(r4);
      } finally {
        r3();
      }
    }
    class I extends i2.ConnectError {
      constructor() {
        super("Agent WebSocket transport was closed", i2.Code.Canceled);
      }
    }
    function C(t3) {
      return t3.reason instanceof Error ? t3.reason : new i2.ConnectError("Request canceled", i2.Code.Canceled);
    }
    function b(t3, e3) {
      const r3 = e3.filter((t4) => void 0 !== t4), n3 = r3.find((t4) => t4.aborted);
      return void 0 !== n3 ? Promise.reject(C(n3)) : 0 === r3.length ? t3 : new Promise((e4, n4) => {
        let s3 = false;
        const i3 = /* @__PURE__ */ new Map(), o3 = (t4) => {
          if (!s3) {
            s3 = true;
            for (const [t5, e5] of i3) t5.removeEventListener("abort", e5);
            t4();
          }
        };
        for (const t4 of r3) {
          const e5 = () => o3(() => n4(C(t4)));
          i3.set(t4, e5), t4.addEventListener("abort", e5, { once: true });
        }
        t3.then((t4) => o3(() => e4(t4)), (t4) => o3(() => n4(t4)));
      });
    }
    class k {
      constructor(t3) {
        this.options = t3, this.closedController = new AbortController(), this.webSocketAdmissionGeneration = 0, this.poolConfigRefreshGeneration = 0, this.gateAllowsWebSocketCached = false, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.preconnectFailures = 0, this.preconnectPending = false, this.observedConnectionSignals = /* @__PURE__ */ new WeakSet(), this.draining = false, this.closed = false, this.connectionContextTracker = new o2.AgentRunWebSocketConnectionContextTracker(t3.connectionContext, (t4) => this.emitMetric({ stat: "transport.agent_websocket_context_change", tags: { cause: t4.cause, identity_changed: String(t4.identityChanged) } }), () => this.gateAllowsWebSocketCached), this.websocketUrl = t3.agentUsesHttp2 ? void 0 : m(t3.baseUrl), this.loadRunSessionFactory = t3.loadRunSessionFactory ?? (async () => (await r2.e(915).then(r2.bind(r2, 915))).createAgentWebSocketRunSession), this.now = t3.now ?? Date.now, this.gateChangeSubscription = void 0 === this.websocketUrl ? void 0 : t3.onDidChangeFeatureGate?.(e2.AGENT_WEBSOCKET_FEATURE_GATE, () => {
          this.gateAllowsWebSocketCached = false, this.cancelPreconnect();
          try {
            this.connectionContextTracker.pause();
          } catch (t5) {
            this.options.debugLog.info("[AgentRunWebSocket] context subscription cleanup failed while disabling the gate", t5);
          }
          const t4 = ++this.webSocketAdmissionGeneration;
          this.refreshGateSnapshot(t4);
        }), this.poolConfigChangeSubscription = void 0 === this.websocketUrl || void 0 === t3.getDynamicConfigValue ? void 0 : t3.onDidChangeDynamicConfig?.(e2.AGENT_WEBSOCKET_POOL_CONFIG, () => {
          !this.closed && this.gateAllowsWebSocketCached && this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration);
        }), void 0 !== this.gateChangeSubscription && this.refreshGateSnapshot(this.webSocketAdmissionGeneration);
      }
      unary(t3, e3, r3, n3, s3, i3, o3) {
        return this.options.httpTransport.unary(t3, e3, r3, n3, s3, i3, o3);
      }
      async stream(t3, e3, r3, o3, a2, u2, c2) {
        const l2 = (n3, s3, i3 = u2) => this.options.httpTransport.stream(t3, e3, r3, s3, n3, i3, c2), m2 = this.websocketUrl, d2 = void 0 === m2 || !(function(t4, e4) {
          return t4.typeName === s2.AgentService.typeName && e4.name === s2.AgentService.methods.run.name;
        })(t3, e3) || this.draining || true === r3?.aborted || void 0 !== o3 && o3 <= 0;
        if (d2) return l2(a2, o3);
        this.assertOpen();
        const f2 = this.webSocketAdmissionGeneration;
        if (!this.isWebSocketAdmissionCurrent(f2)) return l2(a2, o3);
        const p2 = this.now(), h2 = () => void 0 === o3 ? void 0 : Math.max(0, o3 - (this.now() - p2)), g2 = () => {
          const t4 = h2();
          if (void 0 !== t4 && t4 <= 0) throw new i2.ConnectError("Agent WebSocket deadline exceeded", i2.Code.DeadlineExceeded);
          return t4;
        }, A2 = (function(t4, e4) {
          if (void 0 === e4) return { signal: t4, dispose: () => {
          } };
          const r4 = new AbortController();
          let n3;
          const s3 = () => {
            void 0 !== n3 && (clearTimeout(n3), n3 = void 0), t4?.removeEventListener("abort", a3);
          }, o4 = (t5) => {
            r4.signal.aborted || r4.abort(t5), s3();
          };
          function a3() {
            o4(t4?.reason);
          }
          return true === t4?.aborted ? o4(t4.reason) : (t4?.addEventListener("abort", a3, { once: true }), n3 = setTimeout(() => o4(new i2.ConnectError("Agent WebSocket deadline exceeded", i2.Code.DeadlineExceeded)), e4)), { signal: r4.signal, dispose: s3 };
        })(r3, o3), _2 = J(a2);
        let y2, w2, S2;
        try {
          if (y2 = await b(this.loadSessionFactory(), [A2.signal, this.closedController.signal]), this.assertOpen(), !this.isWebSocketAdmissionCurrent(f2)) return A2.dispose(), l2(a2, g2());
          this.throwIfCanceled(A2.signal), S2 = this.connectionContextTracker.current();
          const t4 = void 0 === A2.signal ? S2.signal : AbortSignal.any([A2.signal, S2.signal]);
          w2 = await b(this.options.prepareUpgrade({ callerHeaders: _2, signal: t4 }), [t4, this.closedController.signal]), this.assertOpen(), this.throwIfCanceled(A2.signal);
        } catch (t4) {
          if (A2.dispose(), t4 instanceof I) throw t4;
          return this.assertOpen(), this.throwIfCanceled(A2.signal), this.options.debugLog.info("[AgentRunWebSocket] preparation failed before dialing; using HTTP", t4), l2(a2, g2());
        }
        const C2 = () => {
          const t4 = J(_2);
          return t4.set("x-request-id", w2.requestId), t4;
        };
        if (!this.isConnectionGenerationCurrent(S2)) return A2.dispose(), l2(C2(), g2());
        if (!this.isWebSocketAdmissionCurrent(f2)) return A2.dispose(), l2(C2(), g2());
        const k2 = this.ensureSession(y2);
        let v;
        try {
          v = await k2.run({ url: m2, requestId: w2.requestId, connectionContext: { ...S2.context, credentialFingerprint: w2.credentialFingerprint }, headers: w2.headers, nodeOptions: w2.nodeOptions }, { identity: { runId: _2.get("x-original-request-id") ?? w2.requestId, requestId: w2.requestId }, headers: w2.runHeaders, input: B(u2, e3.I), canSendRunStart: () => this.isWebSocketAdmissionCurrent(f2) && this.isConnectionGenerationCurrent(S2), contextInvalidationSignal: S2.signal, reuseOnly: this.fallbackOnColdPoolCached, ...void 0 !== A2.signal ? { signal: A2.signal } : {} });
        } catch (t4) {
          throw A2.dispose(), t4;
        }
        if ("fallback" === v.kind) {
          A2.dispose();
          const t4 = void 0 === v.replayInput ? void 0 : /* @__PURE__ */ (function(t5) {
            let e4, r4 = false, n3 = false;
            const s3 = () => {
              if (r4) throw new Error("Agent WebSocket replay input is one-shot");
              return r4 = true, e4 = t5[Symbol.asyncIterator](), e4;
            };
            return { input: { [Symbol.asyncIterator]: s3 }, stop(t6) {
              if (!n3) {
                n3 = true;
                try {
                  const r5 = e4 ?? s3(), n4 = void 0 !== r5.throw ? r5.throw(t6) : r5.return?.();
                  n4?.catch(() => {
                  });
                } catch {
                }
              }
            } };
          })(v.replayInput);
          "cold-pool" === v.reason && this.schedulePreconnect();
          try {
            return this.assertOpen(), this.throwIfCanceled(A2.signal), this.options.debugLog.info(`[AgentRunWebSocket] run did not start (${v.reason}); using HTTP`), l2(C2(), g2(), void 0 === t4 ? u2 : (async function* (t5, e4) {
              for await (const r4 of t5) yield e4.fromBinary(r4);
            })(t4.input, e3.I));
          } catch (e4) {
            throw t4?.stop(e4), e4;
          }
        }
        return v.response.header.set(n2.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, "websocket"), { stream: true, service: t3, method: e3, header: v.response.header, trailer: v.response.trailer, message: E(v.response.message, e3.O, () => A2.dispose()) };
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
        const t3 = this.session;
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
              t3?.close("selection_disposed");
            }
          }
        }
      }
      isWebSocketAdmissionCurrent(t3) {
        return !this.closed && !this.draining && this.gateAllowsWebSocketCached && t3 === this.webSocketAdmissionGeneration;
      }
      isConnectionGenerationCurrent(t3) {
        if (t3.signal.aborted) return false;
        try {
          return this.connectionContextTracker.current().signal === t3.signal;
        } catch (t4) {
          return this.options.debugLog.info("[AgentRunWebSocket] could not verify connection context; using HTTP", t4), false;
        }
      }
      refreshGateSnapshot(t3) {
        Promise.resolve().then(() => this.options.checkFeatureGate(e2.AGENT_WEBSOCKET_FEATURE_GATE)).then((e3) => {
          if (!this.closed && !this.draining && t3 === this.webSocketAdmissionGeneration) {
            const t4 = true === e3;
            this.gateAllowsWebSocketCached = t4, t4 ? (this.preconnectFailures = 0, this.preconnectOncePoolConfigSettles()) : (this.poolConfigRefreshGeneration += 1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.retireCurrentSessionWhenIdle("gate_disabled"));
          }
        }, (r3) => {
          this.closed || this.draining || t3 !== this.webSocketAdmissionGeneration || (this.gateAllowsWebSocketCached = false, this.poolConfigRefreshGeneration += 1, this.maxConnectionsCached = a, this.keepaliveCached = {}, this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.retireCurrentSessionWhenIdle("gate_lookup_failed"), this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${e2.AGENT_WEBSOCKET_FEATURE_GATE}; using HTTP`, r3));
        });
      }
      preconnectOncePoolConfigSettles() {
        this.refreshMaxConnectionsSnapshot(++this.poolConfigRefreshGeneration).then(() => this.schedulePreconnect(), () => this.schedulePreconnect());
      }
      refreshMaxConnectionsSnapshot(t3) {
        const r3 = this.options.getDynamicConfigValue;
        return void 0 === r3 ? Promise.resolve() : (n3 = Promise.resolve().then(() => r3(e2.AGENT_WEBSOCKET_POOL_CONFIG)), s3 = this.options.poolConfigTimeoutMs ?? 1e3, new Promise((t4, e3) => {
          const r4 = setTimeout(() => e3(new Error(`timed out after ${s3}ms`)), s3);
          n3.then(t4, e3).finally(() => clearTimeout(r4));
        })).then((e3) => {
          if (this.closed || this.draining || !this.gateAllowsWebSocketCached || t3 !== this.poolConfigRefreshGeneration) return;
          const r4 = d(e3);
          this.applyKeepalive(A(e3)), this.applyMaxConnections(r4), this.preconnectMaxRetryDelayCached = S(e3), this.fallbackOnColdPoolCached = f(e3), this.warmSpareOnLeaseCached = p(e3), r4 !== a && this.options.debugLog.info(`[AgentRunWebSocket] sizing new sessions to ${r4} connections`);
        }, (r4) => {
          this.closed || this.draining || !this.gateAllowsWebSocketCached || t3 !== this.poolConfigRefreshGeneration || (this.applyKeepalive({}), this.applyMaxConnections(a), this.preconnectMaxRetryDelayCached = void 0, this.fallbackOnColdPoolCached = false, this.warmSpareOnLeaseCached = false, this.options.debugLog.info(`[AgentRunWebSocket] could not resolve ${e2.AGENT_WEBSOCKET_POOL_CONFIG}; using one connection`, r4));
        });
        var n3, s3;
      }
      applyMaxConnections(t3) {
        this.maxConnectionsCached !== t3 && (this.maxConnectionsCached = t3, this.retireCurrentSessionWhenIdle("pool_resized"));
      }
      applyKeepalive(t3) {
        this.keepaliveCached.pingIntervalMs === t3.pingIntervalMs && this.keepaliveCached.pingTimeoutMs === t3.pingTimeoutMs || (this.keepaliveCached = t3, this.retireCurrentSessionWhenIdle("keepalive_reconfigured"));
      }
      retireCurrentSessionWhenIdle(t3) {
        const e3 = this.session;
        void 0 !== e3 && (this.session = void 0, e3.retireWhenIdle(t3));
      }
      preconnectRetryDelayMs() {
        const t3 = Math.max(1, this.options.preconnectRetryBaseMs ?? 1e3), e3 = Math.max(t3, this.options.preconnectMaxRetryDelayMs ?? this.preconnectMaxRetryDelayCached ?? 3e5), r3 = Math.min(Math.max(0, this.preconnectFailures - 1), 30);
        return Math.min(t3 * 2 ** r3, e3);
      }
      schedulePreconnect(t3 = 0) {
        if (!this.closed && !this.draining && this.gateAllowsWebSocketCached && void 0 !== this.websocketUrl && true !== this.options.preconnectDisabled) return void 0 !== this.preconnectPromise ? (this.preconnectPending = true, void (this.preconnectPendingDelayMs = void 0 === this.preconnectPendingDelayMs ? t3 : Math.min(this.preconnectPendingDelayMs, t3))) : void (void 0 === this.preconnectRetryTimer && (this.preconnectRetryTimer = setTimeout(() => {
          this.preconnectRetryTimer = void 0, this.startPreconnect();
        }, Math.max(0, t3))));
      }
      startPreconnect() {
        if (this.closed || this.draining || !this.gateAllowsWebSocketCached || void 0 === this.websocketUrl || true === this.options.preconnectDisabled) return;
        this.emitPreconnect({ outcome: "attempted" });
        const t3 = new AbortController();
        this.preconnectController = t3;
        const e3 = this.webSocketAdmissionGeneration, r3 = this.performPreconnect(t3.signal, e3).then((t4) => {
          if (void 0 === t4) return this.preconnectFailures = 0, void this.emitPreconnect({ outcome: "succeeded" });
          this.closed || this.draining || !this.isWebSocketAdmissionCurrent(e3) || (this.emitPreconnect({ outcome: "failed", failureCategory: t4 }), "context_invalidated" !== t4 && "stale" !== t4 ? (this.preconnectFailures += 1, this.schedulePreconnect(this.preconnectRetryDelayMs())) : this.preconnectFailures = 0);
        });
        this.preconnectPromise = r3, r3.finally(() => {
          if (this.preconnectController === t3 && (this.preconnectController = void 0), this.preconnectPromise === r3 && (this.preconnectPromise = void 0), this.preconnectPending) {
            const t4 = this.preconnectPendingDelayMs ?? 0;
            this.preconnectPending = false, this.preconnectPendingDelayMs = void 0, this.schedulePreconnect(t4);
          }
        });
      }
      async performPreconnect(t3, e3) {
        const r3 = this.websocketUrl;
        if (void 0 === r3) return "stale";
        let n3, s3 = "load";
        const i3 = new AbortController(), o3 = setTimeout(() => i3.abort(), Math.max(1, this.options.preconnectAttemptTimeoutMs ?? 1e4)), a2 = AbortSignal.any([t3, i3.signal, this.closedController.signal]);
        try {
          const t4 = await b(this.loadSessionFactory(), [a2]);
          if (!this.isWebSocketAdmissionCurrent(e3)) return "stale";
          s3 = "preparation", n3 = this.connectionContextTracker.current(), this.observeConnectionGeneration(n3);
          const i4 = AbortSignal.any([a2, n3.signal]), o4 = await b(this.options.prepareUpgrade({ callerHeaders: new Headers(), signal: i4 }), [i4]);
          if (!this.isWebSocketAdmissionCurrent(e3) || !this.isConnectionGenerationCurrent(n3)) return "stale";
          const u2 = this.ensureSession(t4);
          return await u2.preconnect({ url: r3, requestId: o4.requestId, connectionContext: { ...n3.context, credentialFingerprint: o4.credentialFingerprint }, headers: o4.headers, nodeOptions: o4.nodeOptions }, { signal: i4, contextInvalidationSignal: n3.signal }), this.isWebSocketAdmissionCurrent(e3) && this.isConnectionGenerationCurrent(n3) ? void 0 : (u2.retireWhenIdle(n3.signal.aborted ? "context_invalidated" : "preconnect_stale"), n3.signal.aborted ? "context_invalidated" : "stale");
        } catch (t4) {
          return true === n3?.signal.aborted ? "context_invalidated" : i3.signal.aborted ? "attempt_timeout" : this.preconnectLifecycleCategory(t4) ?? s3;
        } finally {
          clearTimeout(o3);
        }
      }
      observeConnectionGeneration(t3) {
        this.observedConnectionSignals.has(t3.signal) || (this.observedConnectionSignals.add(t3.signal), t3.signal.addEventListener("abort", () => {
          if (this.closed || this.draining || !this.gateAllowsWebSocketCached) return;
          const t4 = void 0 !== this.preconnectPromise;
          this.cancelPreconnect(), this.preconnectFailures = 0, t4 ? (this.preconnectPending = true, this.preconnectPendingDelayMs = 0) : this.schedulePreconnect();
        }, { once: true }));
      }
      preconnectLifecycleCategory(t3) {
        if ("object" != typeof t3 || null === t3 || !("code" in t3)) return;
        const e3 = t3.code;
        switch (e3) {
          case "aborted":
          case "context_invalidated":
          case "handshake_failed":
          case "handshake_timeout":
          case "manager_closed":
          case "open_failed":
          case "open_timeout":
          case "pool_exhausted":
            return e3;
          default:
            return;
        }
      }
      cancelPreconnect() {
        void 0 !== this.preconnectRetryTimer && (clearTimeout(this.preconnectRetryTimer), this.preconnectRetryTimer = void 0), this.preconnectPending = false, this.preconnectPendingDelayMs = void 0, this.preconnectController?.abort(), this.preconnectController = void 0;
      }
      emitPreconnect(t3) {
        try {
          this.options.observePreconnect?.(t3);
        } catch {
        }
      }
      emitMetric(t3) {
        try {
          this.options.metricsIncrement?.(t3);
        } catch {
        }
      }
      emitLifecycle(t3) {
        switch (t3.type) {
          case "acquire":
            return void this.emitMetric({ stat: "transport.agent_websocket_acquire", tags: { outcome: t3.outcome, failure_category: "failed" === t3.outcome ? t3.failureCategory : "none", miss_reason: "reused" === t3.outcome ? "none" : t3.missReason, idle_age_bucket: "reused" === t3.outcome ? t3.idleAgeBucket : "none" } });
          case "retired":
            return void this.emitMetric({ stat: "transport.agent_websocket_retired", tags: { cause: t3.cause, phase: t3.phase, socket_age_bucket: t3.socketAgeBucket, idle_age_bucket: t3.idleAgeBucket, last_claimed_idle_age_bucket: t3.lastClaimedIdleAgeBucket, lease_count_bucket: t3.leaseCountBucket } });
          case "peer_closed":
            return void this.emitMetric({ stat: "transport.agent_websocket_peer_close", tags: { close_code_category: t3.closeCodeCategory, has_reason: String(t3.hasReason), phase: t3.phase, socket_age_bucket: t3.socketAgeBucket, idle_age_bucket: t3.idleAgeBucket, last_claimed_idle_age_bucket: t3.lastClaimedIdleAgeBucket, lease_count_bucket: t3.leaseCountBucket } });
          default:
            return;
        }
      }
      throwIfCanceled(t3) {
        if (true === t3?.aborted) throw C(t3);
      }
      loadSessionFactory() {
        return this.sessionFactory ??= this.loadRunSessionFactory(), this.sessionFactory;
      }
      ensureSession(t3) {
        return this.session ??= t3({ runWithNetworkContext: (t4) => this.options.runWithNetworkContext(t4), maxConnections: this.maxConnectionsCached, ...void 0 === this.keepaliveCached.pingIntervalMs ? {} : { keepalivePingIntervalMs: this.keepaliveCached.pingIntervalMs }, ...void 0 === this.keepaliveCached.pingTimeoutMs ? {} : { keepalivePingTimeoutMs: this.keepaliveCached.pingTimeoutMs }, onPoolWentCold: () => this.schedulePreconnect(), onIdleSocketsExhausted: () => {
          this.warmSpareOnLeaseCached && this.schedulePreconnect();
        }, observePreconnect: (t4) => {
          this.emitPreconnect({ outcome: t4 }), "expired" === t4 && this.schedulePreconnect(this.preconnectRetryDelayMs());
        }, observeLifecycle: (t4) => this.emitLifecycle(t4), observeFirstMessagePipeline: (t4) => {
          try {
            this.options.metricsIncrement?.({ stat: "transport.agent_websocket_first_message_pipeline", tags: { outcome: t4.outcome } }), "accepted" === t4.outcome && this.options.metricsIncrement?.({ stat: "transport.agent_websocket_first_message_pipeline_time_saved_ms", value: t4.timeSavedMs });
          } catch {
          }
        } }), this.session;
      }
      assertOpen() {
        if (this.closed) throw new I();
      }
    }
  }