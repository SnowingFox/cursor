// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/915.js sha256:a047de6a109482b317cdb9ce470b0c1903b3caa8ebca06fe5218a9e9c369a526
// module: 4436 range:16062..31862
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4436: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.AgentWebSocketRunAdapter = void 0;
  const r = n(637), o = n(6402), i = n(3192), s = n(8394), a = n(6157), c = n(5349), l = /* @__PURE__ */ new Set(["acquisition aborted", "binary-frames-only", "cancelled", "client-closed", "context invalidated", "expired", "failed_precondition", "idle", "lease released while retiring", "lease retired", "manager closed", "manager closed during dial", "opening or handshake failed", "permission_denied", "released socket is not open", "resource_exhausted", "retiring idle socket", "run-complete", "socket error", "socket is not reusable", "write-unacknowledged"]);
  function d(e2) {
    if (void 0 === e2 || 0 === e2.byteLength) return "none";
    const t2 = e2.subarray(0, 128).toString("utf8");
    return l.has(t2) ? t2 : `redacted:${e2.byteLength}`;
  }
  function u(e2) {
    if (void 0 === e2) return "unknown";
    const t2 = { 1e3: "normal", 1001: "going-away", 1002: "protocol-error", 1003: "unsupported-data", 1005: "no-status", 1006: "abnormal", 1007: "invalid-payload", 1008: "policy-violation", 1009: "message-too-big", 1010: "extension-required", 1011: "internal-error", 1012: "service-restart", 1013: "try-again-later", 1014: "bad-gateway", 1015: "tls-handshake" }[e2];
    return void 0 !== t2 ? t2 : e2 >= 3e3 && e2 <= 3999 ? "registered" : e2 >= 4e3 && e2 <= 4999 ? "application" : "other";
  }
  const h = { setTimeout: (e2, t2) => setTimeout(e2, t2), clearTimeout(e2) {
    clearTimeout(e2);
  } };
  function f(e2) {
    return e2?.reason instanceof s.ConnectError ? e2.reason : new s.ConnectError("Request canceled", s.Code.Canceled);
  }
  function m(e2) {
    if (e2.byteLength > 5e7) throw new s.ConnectError("Agent WebSocket client message exceeds the 50 MB limit", s.Code.ResourceExhausted);
  }
  function g(e2, t2) {
    let n2 = false;
    return { [Symbol.asyncIterator]() {
      if (n2) throw new Error("Agent WebSocket fallback input is one-shot");
      n2 = true;
      let r2 = true;
      return { next: async () => r2 ? (r2 = false, e2) : t2.next(), return: async () => (r2 = false, await t2.return?.() ?? { done: true, value: void 0 }), throw: async (e3) => {
        if (r2 = false, void 0 !== t2.throw) return t2.throw(e3);
        throw await t2.return?.(), e3;
      } };
    } };
  }
  t.AgentWebSocketRunAdapter = class {
    constructor(e2) {
      this.leaseManager = e2.leaseManager, this.connectionUsePolicy = e2.connectionUsePolicy ?? "sequential-runs", this.acceptTimeoutMs = e2.acceptTimeoutMs ?? 3e4, this.cancelFinalizationTimeoutMs = e2.cancelFinalizationTimeoutMs ?? 5e3, this.maxBufferedBytes = e2.maxBufferedBytes ?? 67108864, this.timers = e2.timers ?? h, this.observeFirstMessagePipeline = e2.observeFirstMessagePipeline;
    }
    observePipeline(e2) {
      try {
        this.observeFirstMessagePipeline?.(e2);
      } catch {
      }
    }
    async run(e2, t2) {
      if (true === t2.signal?.aborted) throw f(t2.signal);
      let n2;
      try {
        n2 = await this.leaseManager.acquire(e2, { signal: t2.signal, contextInvalidationSignal: t2.contextInvalidationSignal, ...void 0 === t2.reuseOnly ? {} : { reuseOnly: t2.reuseOnly } });
      } catch (e3) {
        if (e3 instanceof a.AgentWebSocketLifecycleError && "aborted" === e3.code) throw f(t2.signal);
        return e3 instanceof a.AgentWebSocketLifecycleError && "pool_exhausted" === e3.code ? { kind: "fallback", reason: "busy" } : e3 instanceof a.AgentWebSocketLifecycleError && "no_idle_socket" === e3.code ? { kind: "fallback", reason: "cold-pool" } : { kind: "fallback", reason: "lease-unavailable" };
      }
      try {
        const e3 = await this.startRun(n2, t2);
        return "fallback" === e3.kind && n2.retire(), e3;
      } catch (e3) {
        throw n2.retire(), e3;
      }
    }
    startRun(e2, t2) {
      const { identity: n2 } = t2, o2 = e2.socket;
      return new Promise((s2, a2) => {
        let l2, d2, u2, h2, v, p = false, b = false, S = false, k = false;
        const y = new Promise((e3) => {
          v = e3;
        }), A = () => {
          this.timers.clearTimeout(l2), o2.off("message", W), o2.off("error", I), o2.off("close", x), t2.signal?.removeEventListener("abort", P);
        }, w = (e3) => {
          p || (p = true, A(), s2(e3));
        }, E = (e3) => {
          p || (p = true, ((e4) => {
            if (!k && void 0 !== u2) {
              k = true;
              try {
                const t3 = void 0 !== u2.throw ? u2.throw(e4) : u2.return?.();
                t3?.catch(() => {
                });
              } catch {
              }
            }
          })(e3), A(), a2(e3));
        }, _ = (e3, t3) => {
          void 0 === d2 || b || (b = true, this.observePipeline({ outcome: "ambiguous" })), E(new c.AgentWebSocketDeliveryAmbiguousError(e3, { cause: t3 }));
        }, C = (e3) => {
          v(e3), _("Agent WebSocket write failed before RunAccepted", e3);
        }, W = (o3) => {
          let s3;
          try {
            s3 = i.AgentWebSocketServerFrame.fromBinary((0, c.rawDataBytes)(o3)), (0, r.validateAgentWebSocketServerFrame)(s3);
          } catch (e3) {
            return void _("Agent WebSocket sent an unreadable frame before RunAccepted", e3);
          }
          if ("runRejected" === s3.frame.case) return (0, c.identityMatches)(n2, s3.frame.value.identity) ? (void 0 === d2 || b || (b = true, this.observePipeline({ outcome: "rejected" })), void w({ kind: "fallback", reason: "run-rejected", ...void 0 === h2 || void 0 === u2 ? {} : { replayInput: g(h2, u2) } })) : void _("Agent WebSocket rejected a different run");
          "runAccepted" === s3.frame.case && (0, c.identityMatches)(n2, s3.frame.value.identity) ? (void 0 === d2 || b || (b = true, this.observePipeline({ outcome: "accepted", timeSavedMs: Math.max(0, Date.now() - d2) })), void 0 !== h2 && void 0 !== u2 ? w({ kind: "response", response: this.acceptRun({ lease: e2, request: t2, header: (0, c.agentWebSocketHeadersToHeaders)(s3.frame.value.headers), inputIterator: u2, firstInput: h2, firstMessageQueuedBeforeAcceptance: S, preacceptWriteFailure: y }) }) : _("Agent WebSocket accepted before input was initialized")) : _("Agent WebSocket run was not accepted");
        }, I = (e3) => {
          _("Agent WebSocket failed before RunAccepted", e3);
        }, x = () => {
          _("Agent WebSocket closed before RunAccepted");
        }, P = () => {
          this.trySend(o2, (0, c.cancelRunFrame)(n2.runId)), E(f(t2.signal));
        };
        o2.on("message", W), o2.on("error", I), o2.on("close", x), t2.signal?.addEventListener("abort", P, { once: true }), l2 = this.timers.setTimeout(() => _("Agent WebSocket run was not accepted in time"), this.acceptTimeoutMs);
        try {
          const i2 = (0, c.runStartFrame)(n2, t2.headers, e2.preconnectReservationId);
          if ((0, r.validateAgentWebSocketClientFrame)(i2), 1 !== o2.readyState) throw new Error("Agent WebSocket is not open");
          if (false === t2.canSendRunStart?.()) return void w({ kind: "fallback", reason: "gate-disabled" });
          this.send(o2, i2, C);
        } catch {
          return void w({ kind: "fallback", reason: "run-not-started" });
        }
        if (!p) {
          try {
            u2 = t2.input[Symbol.asyncIterator](), h2 = Promise.resolve().then(() => u2.next());
          } catch (e3) {
            return void _("Agent WebSocket input could not start after RunStart", e3);
          }
          h2.then((e3) => {
            if (!p && true !== e3.done) {
              try {
                m(e3.value);
              } catch (e4) {
                return this.trySend(o2, (0, c.cancelRunFrame)(n2.runId)), void E(e4);
              }
              d2 = Date.now(), this.observePipeline({ outcome: "attempted" });
              try {
                this.send(o2, (0, c.clientMessageFrame)(n2.runId, BigInt(0), e3.value), C), S = true;
              } catch (e4) {
                _("Agent WebSocket first client message could not be queued", e4);
              }
            }
          }, (e3) => {
            p || _("Agent WebSocket first input failed before RunAccepted", e3);
          }), true === t2.signal?.aborted && P();
        }
      });
    }
    acceptRun(e2) {
      const { lease: t2, request: n2 } = e2, { identity: a2 } = n2, l2 = t2.socket, h2 = new Headers(), m2 = new c.SequenceValidator(), g2 = e2.inputIterator, v = Date.now(), p = { stage: e2.firstMessageQueuedBeforeAcceptance ? "client-message-queued" : "awaiting-first-input", messagesQueued: e2.firstMessageQueuedBeforeAcceptance ? 1 : 0, bytesQueued: 0 };
      let b, S, k, y, A, w = false, E = false, _ = false;
      const C = new Promise((e3) => {
        A = e3;
      }), W = (e3) => {
        if (void 0 !== y) return y;
        const t3 = () => {
        };
        try {
          y = void 0 !== e3 && void 0 !== g2.throw ? g2.throw(e3).then(t3, t3) : g2.return?.().then(t3, t3) ?? Promise.resolve();
        } catch {
          y = Promise.resolve();
        }
        return y;
      }, I = () => !w && (w = true, this.timers.clearTimeout(k), this.timers.clearTimeout(S), l2.off("message", L), l2.off("error", q), l2.off("close", O), n2.signal?.removeEventListener("abort", D), true), x = (e3) => {
        e3 ? t2.release() : t2.retire(), A();
      }, P = (e3) => {
        I() && (W(e3), x(false));
      }, T = () => {
        if (I()) {
          if (W(), !_) try {
            this.send(l2, (0, c.halfCloseFrame)(a2.runId)), _ = true;
          } catch {
            return void x(false);
          }
          x(true);
        }
      }, R = (e3, t3, n3) => {
        if (w) return;
        const r2 = (function(e4) {
          const { code: t4, reason: n4, outbound: r3, elapsedMs: o3 } = e4;
          return { agentWsPhase: "accepted", agentWsCloseCode: void 0 === t4 ? "none" : String(t4), agentWsCloseCategory: u(t4), agentWsCloseReason: d(n4), agentWsOutboundStage: r3.stage, agentWsElapsedMs: String(Math.max(0, o3)), agentWsClientMessagesQueued: String(r3.messagesQueued), agentWsClientPayloadBytesQueued: String(r3.bytesQueued) };
        })({ code: n3?.code, reason: n3?.reason, outbound: p, elapsedMs: Date.now() - v }), o2 = new c.AgentWebSocketDeliveryAmbiguousError(e3, { cause: t3, diagnostics: r2 });
        M.error(o2), P(o2);
      }, B = (e3, t3) => {
        w || E || (E = true, t3 && M.error(e3), W(e3), this.trySend(l2, (0, c.cancelRunFrame)(a2.runId)), k = this.timers.setTimeout(() => P(), this.cancelFinalizationTimeoutMs));
      }, M = new c.BoundedFrameQueue(this.maxBufferedBytes, async () => {
        B(new s.ConnectError("Response iterator returned", s.Code.Canceled), false), await C;
      }), L = (e3) => {
        if (w || void 0 !== b) return;
        let t3;
        try {
          t3 = i.AgentWebSocketServerFrame.fromBinary((0, c.rawDataBytes)(e3)), (0, r.validateAgentWebSocketServerFrame)(t3);
        } catch (e4) {
          return void R("Accepted Agent WebSocket run sent an unreadable frame", e4);
        }
        if ("serverMessage" === t3.frame.case) {
          const e4 = t3.frame.value;
          if (e4.runId !== a2.runId) return void R("Agent WebSocket sent a message for a different run");
          try {
            m2.accept(e4.sequence);
          } catch (e5) {
            return void R("Agent WebSocket sent messages out of order", e5);
          }
          return void (M.push(e4.message, e4.message.byteLength) || R("Agent WebSocket receive buffer exceeded"));
        }
        if ("runEnd" !== t3.frame.case || !(0, c.identityMatches)(a2, t3.frame.value.identity)) return void R("Agent WebSocket sent an invalid frame during an accepted run");
        if ((0, c.agentWebSocketHeadersToHeaders)(t3.frame.value.trailers).forEach((e4, t4) => {
          h2.append(t4, e4);
        }), E) return void P();
        const n3 = t3.frame.value.error;
        if (void 0 !== n3) {
          const e4 = (0, c.connectErrorFromAgentWebSocket)(n3);
          return M.error(e4), void P(e4);
        }
        M.end(), "sequential-runs" === this.connectionUsePolicy && (0, r.allowsAgentWebSocketSequentialReuse)(t3.frame.value.trailers) ? T() : P();
      }, q = (e3) => {
        E ? P() : (b ??= e3, W(b), void 0 === S && (S = this.timers.setTimeout(() => {
          S = void 0;
          void 0 !== b && R("Accepted Agent WebSocket connection failed", b);
        }, 100)));
      }, O = (e3, t3) => {
        E ? P() : R(void 0 === b ? "Accepted Agent WebSocket connection closed" : "Accepted Agent WebSocket connection failed", b, { code: e3, reason: t3 });
      }, D = () => {
        B(f(n2.signal), true);
      };
      return l2.on("message", L), l2.on("error", q), l2.on("close", O), n2.signal?.addEventListener("abort", D, { once: true }), e2.preacceptWriteFailure.then((e3) => {
        w || R("Accepted Agent WebSocket write failed", e3);
      }), this.pumpOutbound({ socket: l2, identity: a2, inputIterator: g2, firstInput: e2.firstInput, firstMessageQueuedBeforeAcceptance: e2.firstMessageQueuedBeforeAcceptance, outboundDiagnostics: p, isDone: () => E || w || void 0 !== b, onHalfCloseSent: () => {
        _ = true;
      }, onAmbiguous: R }), true === n2.signal?.aborted && D(), e2.header.set(o.AGENT_WEBSOCKET_SOCKET_REUSE_RESPONSE_HEADER, t2.socketReuse), { header: e2.header, trailer: h2, message: M };
    }
    async pumpOutbound(e2) {
      const { socket: t2, identity: n2, inputIterator: r2, outboundDiagnostics: o2, isDone: i2 } = e2;
      try {
        {
          const r3 = e2.firstInput;
          if (e2.firstInput = void 0, void 0 === r3) throw new Error("Agent WebSocket first input was already released");
          if (!await this.pumpFirstOutbound({ socket: t2, identity: n2, firstInput: r3, firstMessageQueuedBeforeAcceptance: e2.firstMessageQueuedBeforeAcceptance, outboundDiagnostics: o2, isDone: i2, onHalfCloseSent: e2.onHalfCloseSent })) return;
        }
        let s2 = BigInt(1);
        for (; ; ) {
          o2.stage = "awaiting-next-input";
          const a2 = await r2.next();
          if (i2()) return;
          if (true === a2.done) return this.send(t2, (0, c.halfCloseFrame)(n2.runId)), o2.stage = "half-close-queued", void e2.onHalfCloseSent();
          m(a2.value), o2.stage = "input-ready", this.send(t2, (0, c.clientMessageFrame)(n2.runId, s2, a2.value)), o2.messagesQueued += 1, o2.bytesQueued += a2.value.byteLength, o2.stage = "client-message-queued", s2 += BigInt(1);
        }
      } catch (t3) {
        i2() || e2.onAmbiguous("Accepted Agent WebSocket outbound delivery became ambiguous", t3);
      }
    }
    async pumpFirstOutbound(e2) {
      const t2 = await e2.firstInput;
      return !e2.isDone() && (true === t2.done ? (this.send(e2.socket, (0, c.halfCloseFrame)(e2.identity.runId)), e2.outboundDiagnostics.stage = "half-close-queued", e2.onHalfCloseSent(), false) : (m(t2.value), e2.firstMessageQueuedBeforeAcceptance ? e2.outboundDiagnostics.bytesQueued = t2.value.byteLength : (e2.outboundDiagnostics.stage = "input-ready", this.send(e2.socket, (0, c.clientMessageFrame)(e2.identity.runId, BigInt(0), t2.value)), e2.outboundDiagnostics.messagesQueued = 1, e2.outboundDiagnostics.bytesQueued = t2.value.byteLength, e2.outboundDiagnostics.stage = "client-message-queued"), e2.outboundDiagnostics.stage = "awaiting-next-input", true));
    }
    send(e2, t2, n2) {
      if ((0, r.validateAgentWebSocketClientFrame)(t2), 1 !== e2.readyState) throw new Error("Agent WebSocket is not open");
      const o2 = t2.toBinary();
      void 0 !== n2 ? e2.send(o2, (e3) => {
        null != e3 && n2(e3);
      }) : e2.send(o2);
    }
    trySend(e2, t2) {
      try {
        this.send(e2, t2);
      } catch {
      }
    }
  };
}