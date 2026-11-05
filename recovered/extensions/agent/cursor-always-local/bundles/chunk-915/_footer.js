// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/915.js sha256:a047de6a109482b317cdb9ce470b0c1903b3caa8ebca06fe5218a9e9c369a526
// module: (footer) range:36538..57737
// basis: webpack-container confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
};
  function a(e2, t2) {
    const n2 = t2 instanceof Error && t2.message.length > 0 ? `: ${t2.message}` : "";
    return new i(e2, { aborted: "Agent WebSocket acquisition aborted", context_invalidated: "Agent WebSocket context invalidated", handshake_failed: `Agent WebSocket hello handshake failed${n2}`, handshake_timeout: "Agent WebSocket hello handshake timed out", manager_closed: "Agent WebSocket lease manager is closed", no_idle_socket: "Agent WebSocket pool had no warm socket to reuse", open_failed: `Agent WebSocket failed to open${n2}`, open_timeout: "Agent WebSocket opening timed out", pool_exhausted: "Agent WebSocket connection pool is at capacity" }[e2]);
  }
  function c(e2) {
    return true === e2?.aborted;
  }
  function l(e2, t2) {
    return "number" == typeof e2 && Number.isFinite(e2) && e2 > 0 ? e2 : t2;
  }
  function d(e2, t2) {
    if (void 0 === e2) return "none";
    const n2 = Math.max(0, t2 - e2);
    return n2 < 1e3 ? "under_1s" : n2 < 1e4 ? "1s_to_10s" : n2 < 6e4 ? "10s_to_1m" : n2 < 3e5 ? "1m_to_5m" : "5m_plus";
  }
  function u(e2) {
    return 0 === e2 ? "none" : 1e3 === e2 ? "normal" : 1001 === e2 ? "going_away" : 1006 === e2 ? "abnormal" : 1008 === e2 ? "policy" : 1012 === e2 ? "restart" : "other";
  }
  function h(e2, t2) {
    e2.activePhaseSocketEventOwner === t2 && (e2.activePhaseSocketEventOwner = void 0);
  }
  t.AgentWebSocketLeaseManager = class {
    constructor(e2) {
      this.generations = [], this.closingSockets = /* @__PURE__ */ new Set(), this.reservations = 0, this.retirementDepth = 0, this.closed = false, this.createSocket = e2.createSocket, this.contextsEqual = e2.contextsEqual ?? Object.is, this.classifyContextMismatch = e2.classifyContextMismatch;
      const t2 = l(e2.maxConnections, 1);
      var n2, r2;
      this.maxConnections = Math.max(1, Math.trunc(t2)), this.openTimeoutMs = l(e2.openTimeoutMs, 1e4), this.handshakeTimeoutMs = l(e2.handshakeTimeoutMs, 1e4), this.closeGraceTimeoutMs = l(e2.closeGraceTimeoutMs, 5e3), this.keepalivePingIntervalMs = (n2 = e2.keepalivePingIntervalMs, r2 = 1e4, "number" == typeof n2 && Number.isFinite(n2) && n2 >= 0 ? n2 : r2), this.keepalivePingTimeoutMs = l(e2.keepalivePingTimeoutMs, 2e4), this.timers = e2.timers ?? s, this.now = e2.now ?? Date.now, this.observePreconnect = e2.observePreconnect, this.onPoolWentCold = e2.onPoolWentCold, this.onIdleSocketsExhausted = e2.onIdleSocketsExhausted, this.observeLifecycle = e2.observeLifecycle;
    }
    async acquire(e2, t2 = {}) {
      let n2, o2 = "no_idle_socket";
      try {
        if (this.closed) throw a("manager_closed");
        if (this.retirementDepth > 0) throw a("pool_exhausted");
        if (c(t2.signal)) throw a("aborted");
        if (c(t2.contextInvalidationSignal)) throw a("context_invalidated");
        const i2 = this.claimIdleGeneration(e2, t2.contextInvalidationSignal);
        o2 = i2.missReason;
        const s2 = i2.generation;
        if (void 0 === s2 && true === t2.reuseOnly) throw a(this.occupancy() >= this.maxConnections ? "pool_exhausted" : "no_idle_socket");
        const l2 = s2 ?? await this.openGeneration(e2, t2, r.AGENT_WEBSOCKET_SUBPROTOCOL);
        if (n2 = l2, c(t2.signal)) throw this.retireGeneration(l2, "acquisition aborted", "acquisition_aborted"), a("aborted");
        if (c(t2.contextInvalidationSignal)) throw this.retireGeneration(l2, "context invalidated", "context_invalidated"), a("context_invalidated");
        if ("ready" !== l2.state || 1 !== l2.socket.readyState || !this.generations.includes(l2)) throw this.retireGeneration(l2, "socket is not reusable", "socket_unusable"), a("open_failed");
        let d2;
        l2.leased = true, l2.leaseCount += 1, l2.lastClaimedIdleAgeBucket = void 0 === s2 ? "none" : i2.idleAgeBucket, this.exitIdle(l2), l2.preconnectReady && !l2.preconnectClaimed && (l2.preconnectClaimed = true, d2 = l2.preconnectReservationId, this.emitPreconnect("claimed"));
        const u2 = void 0 === s2 ? "opened" : l2.leaseCount <= 1 ? "preconnected" : "reused", h2 = this.createLease(l2, u2, d2);
        return this.emitLifecycle(void 0 === s2 ? { type: "acquire", outcome: "opened", missReason: o2 } : { type: "acquire", outcome: "reused", idleAgeBucket: i2.idleAgeBucket }), this.maybeEmitIdleSocketsExhausted(), h2;
      } catch (e3) {
        throw this.emitLifecycle({ type: "acquire", outcome: "failed", failureCategory: e3 instanceof i ? e3.code : "unknown", missReason: o2 }), e3;
      } finally {
        void 0 !== n2 && (n2.acquiring = false);
      }
    }
    async preconnect(e2, t2) {
      if (this.closed) throw a("manager_closed");
      if (this.retirementDepth > 0) throw a("pool_exhausted");
      if (c(t2.signal)) throw a("aborted");
      if (c(t2.contextInvalidationSignal)) throw a("context_invalidated");
      const n2 = this.claimIdleGeneration(e2, t2.contextInvalidationSignal).generation;
      if (void 0 !== n2) return void (n2.acquiring = false);
      const o2 = await this.openGeneration(e2, t2, r.AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL, t2.reservationId);
      if (c(t2.signal)) throw this.retireGeneration(o2, "preconnect aborted", "preconnect_aborted"), a("aborted");
      if (c(t2.contextInvalidationSignal)) throw this.retireGeneration(o2, "preconnect context invalidated", "context_invalidated"), a("context_invalidated");
      if ("ready" !== o2.state || 1 !== o2.socket.readyState || !this.generations.includes(o2)) throw this.retireGeneration(o2, "preconnected socket is not reusable", "preconnect_unusable"), a("open_failed");
      if (o2.preconnectReady = true, o2.acquiring = false, this.enterIdle(o2), o2.retireAfterLease) throw this.retireGeneration(o2, "preconnect completed while retiring", o2.deferredRetirementCause ?? "preconnect_stale"), a("open_failed");
    }
    close(e2 = "manager_closed") {
      if (!this.closed) {
        this.closed = true;
        for (const t2 of [...this.generations]) this.retireGeneration(t2, "manager closed", e2);
      }
    }
    retireWhenIdle(e2 = "unknown") {
      this.retirementDepth += 1;
      try {
        for (const t2 of [...this.generations]) t2.retireAfterLease = true, t2.deferredRetirementCause ??= e2;
        for (const t2 of [...this.generations]) this.isIdle(t2) && this.retireGeneration(t2, "retiring idle socket", e2);
      } finally {
        this.retirementDepth -= 1;
      }
    }
    isIdle(e2) {
      return "ready" === e2.state && !e2.leased && !e2.acquiring;
    }
    occupancy() {
      return this.generations.length + this.closingSockets.size + this.reservations;
    }
    claimIdleGeneration(e2, t2) {
      this.retirementDepth += 1;
      try {
        return this.claimIdleGenerationDuringRetirement(e2, t2);
      } finally {
        this.retirementDepth -= 1;
      }
    }
    claimIdleGenerationDuringRetirement(e2, t2) {
      let n2, r2 = "none";
      const o2 = /* @__PURE__ */ new Set(), i2 = [];
      for (const s3 of [...this.generations]) {
        if (!this.isIdle(s3)) continue;
        s3.acquiring = true;
        let a2 = false;
        const c2 = s3.contextInvalidationSignal === t2;
        try {
          a2 = c2 && this.contextsEqual(s3.context, e2);
        } finally {
          a2 && void 0 === n2 || (s3.acquiring = false);
        }
        a2 ? "ready" === s3.state && this.generations.includes(s3) ? s3.retireAfterLease || 1 !== s3.socket.readyState ? (s3.acquiring = false, o2.add("idle_unusable"), this.terminateIdleGeneration(s3, "idle_unusable")) : void 0 === n2 && (n2 = s3, r2 = d(s3.idleSinceMs, this.readNow())) : s3.acquiring = false : (o2.add(c2 ? this.contextMismatchReason(s3.context, e2) : "context_generation_changed"), i2.push(s3));
      }
      if (void 0 !== n2) return { generation: n2, idleAgeBucket: r2, missReason: "no_idle_socket" };
      for (const e3 of i2) {
        if (this.occupancy() < this.maxConnections) break;
        this.terminateIdleGeneration(e3, "context_mismatch");
      }
      let s2 = "no_idle_socket";
      if (o2.size > 1) s2 = "multiple_idle_mismatches";
      else for (const e3 of o2) s2 = e3;
      return { generation: void 0, idleAgeBucket: "none", missReason: s2 };
    }
    dialGeneration(e2, t2, n2, r2) {
      if (this.closed) throw a("manager_closed");
      if (this.occupancy() >= this.maxConnections) throw a("pool_exhausted");
      this.reservations += 1;
      try {
        let o2;
        try {
          o2 = this.createSocket(e2, n2);
        } catch (e3) {
          throw a("open_failed", e3);
        }
        const i2 = { context: e2, contextInvalidationSignal: t2.contextInvalidationSignal, socket: o2, subprotocol: n2, preconnectReservationId: r2, createdAtMs: this.readNow(), state: "opening", acquiring: true, leased: false, preconnectReady: false, preconnectClaimed: false, retireAfterLease: false, deferredRetirementCause: void 0, idleSinceMs: void 0, lastClaimedIdleAgeBucket: "none", leaseCount: 0, keepalivePingTimeout: void 0, keepalivePongTimeout: void 0, onKeepalivePong: void 0, activePhaseSocketEventOwner: void 0, cancelPending: void 0, onContextInvalidated: void 0, durableLifecycleListeners: void 0 };
        if (this.generations.push(i2), this.attachDurableGenerationLifecycleListeners(i2), this.closed) throw this.retireGeneration(i2, "manager closed during dial", "manager_closed"), a("manager_closed");
        return i2;
      } finally {
        this.reservations -= 1;
      }
    }
    async openGeneration(e2, t2, n2, r2) {
      const o2 = this.dialGeneration(e2, t2, n2, r2);
      try {
        await this.waitForOpen(o2, t2.signal);
        const e3 = o2.socket;
        if (this.assertPooled(o2), e3.protocol !== n2) throw a("handshake_failed", new Error(`server did not negotiate ${n2}`));
        if (await this.exchangeHello(o2, t2.signal), true === o2.contextInvalidationSignal?.aborted) throw a("context_invalidated");
        return this.assertPooled(o2), o2.state = "ready", this.attachContextInvalidation(o2), o2;
      } catch (e3) {
        throw this.retireGeneration(o2, "opening or handshake failed", "open_or_handshake_failed"), e3;
      }
    }
    waitForOpen(e2, t2) {
      return 1 === e2.socket.readyState ? Promise.resolve() : new Promise((n2, r2) => {
        let o2, i2 = false;
        const s2 = (a2) => {
          i2 || (i2 = true, this.timers.clearTimeout(o2), e2.socket.off("open", c2), h(e2, u2), t2?.removeEventListener("abort", l2), e2.contextInvalidationSignal?.removeEventListener("abort", d2), e2.cancelPending === s2 && (e2.cancelPending = void 0), void 0 === a2 ? n2() : r2(a2));
        }, c2 = () => s2(), l2 = () => s2(a("aborted")), d2 = () => s2(a("context_invalidated")), u2 = { phase: "opening", onError: (e3) => s2(a("open_failed", e3)), onClose: () => s2(a("open_failed")) };
        e2.socket.on("open", c2), e2.activePhaseSocketEventOwner = u2, t2?.addEventListener("abort", l2, { once: true }), e2.contextInvalidationSignal?.addEventListener("abort", d2, { once: true }), e2.cancelPending = s2, o2 = this.timers.setTimeout(() => s2(a("open_timeout")), this.openTimeoutMs), true === t2?.aborted ? l2() : true === e2.contextInvalidationSignal?.aborted && d2();
      });
    }
    exchangeHello(e2, t2) {
      return new Promise((n2, i2) => {
        let s2, c2 = false;
        const l2 = (r2) => {
          c2 || (c2 = true, this.timers.clearTimeout(s2), e2.socket.off("message", d2), h(e2, m), t2?.removeEventListener("abort", u2), e2.contextInvalidationSignal?.removeEventListener("abort", f), e2.cancelPending === l2 && (e2.cancelPending = void 0), void 0 === r2 ? n2() : i2(r2));
        }, d2 = (e3) => {
          try {
            const t3 = o.AgentWebSocketServerFrame.fromBinary((function(e4) {
              return Array.isArray(e4) ? Buffer.concat(e4) : e4 instanceof ArrayBuffer ? new Uint8Array(e4) : new Uint8Array(e4.buffer, e4.byteOffset, e4.byteLength);
            })(e3));
            if ((0, r.validateAgentWebSocketServerFrame)(t3), "hello" !== t3.frame.case) throw new Error("first server frame was not hello");
            l2();
          } catch (e4) {
            l2(a("handshake_failed", e4));
          }
        }, u2 = () => l2(a("aborted")), f = () => l2(a("context_invalidated")), m = { phase: "hello-handshake", onError: (e3) => l2(a("handshake_failed", e3)), onClose: () => l2(a("handshake_failed")) };
        e2.socket.on("message", d2), e2.activePhaseSocketEventOwner = m, t2?.addEventListener("abort", u2, { once: true }), e2.contextInvalidationSignal?.addEventListener("abort", f, { once: true }), e2.cancelPending = l2, s2 = this.timers.setTimeout(() => l2(a("handshake_timeout")), this.handshakeTimeoutMs);
        try {
          const t3 = new o.AgentWebSocketClientFrame({ frame: { case: "hello", value: new o.AgentWebSocketHello({ protocolVersion: r.AGENT_WEBSOCKET_PROTOCOL_VERSION }) } });
          (0, r.validateAgentWebSocketClientFrame)(t3), e2.socket.send(t3.toBinary());
        } catch (e3) {
          l2(a("handshake_failed", e3));
        }
        true === t2?.aborted ? u2() : true === e2.contextInvalidationSignal?.aborted && f();
      });
    }
    attachContextInvalidation(e2) {
      const t2 = e2.contextInvalidationSignal;
      if (void 0 === t2) return;
      const n2 = () => {
        if (e2.leased) return e2.retireAfterLease = true, void (e2.deferredRetirementCause ??= "context_invalidated");
        this.retireGeneration(e2, "context invalidated", "context_invalidated");
      };
      e2.onContextInvalidated = n2, t2.addEventListener("abort", n2, { once: true });
    }
    attachDurableGenerationLifecycleListeners(e2) {
      const t2 = (t3) => {
        const n3 = e2.activePhaseSocketEventOwner;
        void 0 === n3 ? this.retireGeneration(e2, "socket error", "socket_error") : n3.onError(t3);
      }, n2 = (t3, n3) => {
        this.emitPeerClosed(e2, t3 ?? 0, (n3?.length ?? 0) > 0);
        const r2 = e2.activePhaseSocketEventOwner;
        void 0 === r2 ? this.abandonGeneration(e2) : r2.onClose();
      };
      e2.durableLifecycleListeners = { onSocketError: t2, onSocketClose: n2 }, e2.socket.on("error", t2), e2.socket.on("close", n2);
    }
    createLease(e2, t2, n2) {
      let r2 = false;
      return { socket: e2.socket, socketReuse: t2, ...void 0 === n2 ? {} : { preconnectReservationId: n2 }, release: () => {
        r2 || (r2 = true, "retired" !== e2.state && (e2.leased = false, e2.retireAfterLease ? this.retireGeneration(e2, "lease released while retiring", e2.deferredRetirementCause ?? "unknown") : 1 !== e2.socket.readyState ? this.retireGeneration(e2, "released socket is not open", "released_socket_not_open") : this.enterIdle(e2)));
      }, retire: () => {
        r2 || (r2 = true, e2.leased = false, this.retireGeneration(e2, "lease retired", "lease_retired"));
      } };
    }
    assertPooled(e2) {
      if ("retired" === e2.state || !this.generations.includes(e2) || this.closed) throw a(this.closed ? "manager_closed" : "open_failed");
    }
    enterIdle(e2) {
      e2.idleSinceMs = this.readNow(), this.armKeepalive(e2);
    }
    exitIdle(e2) {
      e2.idleSinceMs = void 0, this.clearKeepalive(e2);
    }
    armKeepalive(e2) {
      this.keepalivePingIntervalMs <= 0 || (this.clearKeepalive(e2), e2.keepalivePingTimeout = this.timers.setTimeout(() => {
        e2.keepalivePingTimeout = void 0, this.sendKeepalivePing(e2);
      }, this.keepalivePingIntervalMs));
    }
    clearKeepalive(e2) {
      void 0 !== e2.keepalivePingTimeout && (this.timers.clearTimeout(e2.keepalivePingTimeout), e2.keepalivePingTimeout = void 0), void 0 !== e2.keepalivePongTimeout && (this.timers.clearTimeout(e2.keepalivePongTimeout), e2.keepalivePongTimeout = void 0), void 0 !== e2.onKeepalivePong && (e2.socket.off("pong", e2.onKeepalivePong), e2.onKeepalivePong = void 0);
    }
    sendKeepalivePing(e2) {
      if (this.closed || !this.isIdle(e2)) return;
      if (1 !== e2.socket.readyState) return void this.retireGeneration(e2, "idle socket is not open", "socket_unusable");
      const t2 = () => {
        this.clearKeepalive(e2), !this.closed && this.isIdle(e2) && this.armKeepalive(e2);
      };
      e2.onKeepalivePong = t2, e2.socket.on("pong", t2), e2.keepalivePongTimeout = this.timers.setTimeout(() => {
        e2.keepalivePongTimeout = void 0, this.terminateIdleGeneration(e2, "keepalive_timeout");
      }, this.keepalivePingTimeoutMs);
      try {
        e2.socket.ping();
      } catch {
        this.clearKeepalive(e2), this.retireGeneration(e2, "keepalive ping failed", "socket_unusable");
      }
    }
    abandonGeneration(e2) {
      if ("retired" === e2.state) return;
      this.clearKeepalive(e2), e2.state = "retired", e2.leased = false, e2.preconnectReady && !e2.preconnectClaimed && (e2.preconnectClaimed = true, this.emitPreconnect("expired"));
      const t2 = e2.cancelPending;
      e2.cancelPending = void 0, t2?.(a(this.closed ? "manager_closed" : "open_failed")), e2.activePhaseSocketEventOwner = void 0, this.detachDurableGenerationLifecycleListeners(e2);
      const n2 = this.generations.indexOf(e2);
      -1 !== n2 && this.generations.splice(n2, 1), e2.socket.on("error", () => {
      }), 3 === e2.socket.readyState && this.maybeEmitPoolWentCold();
    }
    maybeEmitPoolWentCold() {
      if (!(this.closed || this.occupancy() > 0)) try {
        this.onPoolWentCold?.();
      } catch {
      }
    }
    maybeEmitIdleSocketsExhausted() {
      if (!(this.closed || void 0 === this.onIdleSocketsExhausted || 0 === this.occupancy() || this.occupancy() >= this.maxConnections)) {
        for (const e2 of this.generations) if (this.isIdle(e2)) return;
        try {
          this.onIdleSocketsExhausted();
        } catch {
        }
      }
    }
    emitPreconnect(e2) {
      try {
        this.observePreconnect?.(e2);
      } catch {
      }
    }
    lifecycleDimensions(e2) {
      const t2 = this.readNow(), n2 = e2.activePhaseSocketEventOwner;
      return { phase: "hello-handshake" === n2?.phase ? "hello_handshake" : "opening" === e2.state ? "opening" : e2.leased ? "leased" : e2.preconnectReady && !e2.preconnectClaimed ? "preconnect_idle" : "idle", socketAgeBucket: (o2 = Math.max(0, t2 - e2.createdAtMs), o2 < 1e4 ? "under_10s" : o2 < 6e4 ? "10s_to_1m" : o2 < 3e5 ? "1m_to_5m" : o2 < 6e5 ? "5m_to_10m" : o2 < 12e5 ? "10m_to_20m" : "20m_plus"), idleAgeBucket: d(e2.idleSinceMs, t2), lastClaimedIdleAgeBucket: e2.lastClaimedIdleAgeBucket, leaseCountBucket: (r2 = e2.leaseCount, r2 <= 0 ? "0" : 1 === r2 ? "1" : r2 <= 4 ? "2_to_4" : r2 <= 8 ? "5_to_8" : r2 <= 16 ? "9_to_16" : "17_plus") };
      var r2, o2;
    }
    contextMismatchReason(e2, t2) {
      try {
        return this.classifyContextMismatch?.(e2, t2) ?? "connection_context_changed";
      } catch {
        return "connection_context_changed";
      }
    }
    readNow() {
      try {
        return this.now();
      } catch {
        return Date.now();
      }
    }
    emitLifecycle(e2) {
      try {
        this.observeLifecycle?.(e2);
      } catch {
      }
    }
    emitPeerClosed(e2, t2, n2) {
      this.emitLifecycle({ type: "peer_closed", closeCodeCategory: u(t2), hasReason: n2, ...this.lifecycleDimensions(e2) });
    }
    terminateIdleGeneration(e2, t2) {
      if ("retired" !== e2.state && (this.emitLifecycle({ type: "retired", cause: t2, ...this.lifecycleDimensions(e2) }), this.abandonGeneration(e2), 3 !== e2.socket.readyState)) try {
        e2.socket.terminate();
      } catch {
        this.trackClosingSocket(e2.socket);
      }
    }
    retireGeneration(e2, t2, n2) {
      if ("retired" === e2.state) return;
      if (this.emitLifecycle({ type: "retired", cause: n2, ...this.lifecycleDimensions(e2) }), this.abandonGeneration(e2), 3 === e2.socket.readyState) return;
      const r2 = this.trackClosingSocket(e2.socket);
      try {
        e2.socket.close(1e3, t2);
      } catch {
        try {
          e2.socket.terminate();
        } catch {
          return;
        }
        return void (void 0 !== r2 && this.releaseClosingSocket(r2));
      }
      void 0 !== r2 && 3 === e2.socket.readyState && this.releaseClosingSocket(r2);
    }
    trackClosingSocket(e2) {
      if (3 === e2.readyState) return;
      const t2 = { socket: e2, onClose: () => {
        this.releaseClosingSocket(t2);
      }, timeout: void 0 };
      return this.closingSockets.add(t2), e2.on("close", t2.onClose), t2.timeout = this.timers.setTimeout(() => {
        try {
          e2.terminate();
        } catch {
          return;
        }
        this.releaseClosingSocket(t2);
      }, this.closeGraceTimeoutMs), t2;
    }
    releaseClosingSocket(e2) {
      this.closingSockets.delete(e2) && (this.timers.clearTimeout(e2.timeout), e2.socket.off("close", e2.onClose), this.maybeEmitPoolWentCold());
    }
    detachDurableGenerationLifecycleListeners(e2) {
      void 0 !== e2.onContextInvalidated && (e2.contextInvalidationSignal?.removeEventListener("abort", e2.onContextInvalidated), e2.onContextInvalidated = void 0);
      const t2 = e2.durableLifecycleListeners;
      void 0 !== t2 && (e2.socket.off("error", t2.onSocketError), e2.socket.off("close", t2.onSocketClose), e2.durableLifecycleListeners = void 0);
    }
  };
} };
