// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8691 range:781336..809661
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8691: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { CX: () => m, Xo: () => Y, k8: () => o2, FI: () => B, yZ: () => H, fX: () => Z, Vz: () => K, nw: () => W, K9: () => $, ZR: () => L, qw: () => q, I5: () => G, KS: () => U, J3: () => V });
    var n2 = r2(6768);
    function o2(e3, t3) {
      switch (e3.type) {
        case "idle":
        case "connecting":
        case "dormant":
          return i2;
        case "connected":
          return e3.stabilized ? e3.probing || false === t3?.getKeepaliveProbesEnabled?.() ? i2 : (function(e4) {
            return /* @__PURE__ */ new Map([["health_probe_timer", { delayMs: c(e4) + Math.floor(Math.random() * u(e4)) }]]);
          })(t3) : (function(e4) {
            return /* @__PURE__ */ new Map([["stability_timer", { delayMs: a2(e4) }]]);
          })(t3);
        case "degraded":
          return e3.probing ? i2 : (function(e4) {
            return /* @__PURE__ */ new Map([["health_probe_timer", { delayMs: l(e4) }]]);
          })(t3);
        case "transient_failure":
          return /* @__PURE__ */ new Map([["backoff_timer", { delayMs: e3.nextDelayMs }]]);
        case "failed":
        case "closed":
          return false === e3.automaticRetry && true !== t3?.getRetryNonRetryableAutomatically?.() || e3.exhausted ? i2 : /* @__PURE__ */ new Map([["periodic_retry_timer", { delayMs: e3.periodicRetryDelayMs }]]);
        default:
          return e3;
      }
    }
    function s2(e3) {
      switch (e3.type) {
        case "idle":
        case "dormant":
        case "transient_failure":
        case "failed":
        case "closed":
          return d;
        case "connecting":
          return p;
        case "connected":
        case "degraded":
          return e3.probing ? f : d;
        default:
          return e3;
      }
    }
    const i2 = /* @__PURE__ */ new Map();
    function a2(e3) {
      return e3?.getStabilityThresholdMs?.() ?? (0, n2.dg)();
    }
    function c(e3) {
      return e3?.getKeepaliveProbeDelayMs?.() ?? (0, n2.wW)();
    }
    function u(e3) {
      return e3?.getKeepaliveJitterMs?.() ?? (0, n2.Tr)();
    }
    function l(e3) {
      return e3?.getDegradedProbeDelayMs?.() ?? (0, n2.sv)();
    }
    const d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(["connection_attempt"]), f = /* @__PURE__ */ new Set(["health_probe"]);
    function h(e3) {
      return "connected" === e3.type && e3.stabilized && !e3.probing ? "keepalive" : "degraded" !== e3.type || e3.probing ? void 0 : "degraded";
    }
    class m {
      constructor(e3 = o2) {
        this.resolveActivities = e3, this.activeTimers = /* @__PURE__ */ new Map(), this.activeServiceHandles = /* @__PURE__ */ new Map(), this.activeServicePromises = /* @__PURE__ */ new Map();
      }
      reconcile(e3, t3, r3) {
        const n3 = this.resolveActivities(e3), o3 = this.resolveActivities(t3);
        for (const [r4, s3] of this.activeTimers) {
          const i3 = o3.get(r4), a3 = n3.get(r4), c2 = "health_probe_timer" === r4 && h(e3) !== h(t3);
          (!i3 || c2 || "health_probe_timer" !== r4 && i3?.delayMs !== a3?.delayMs) && (s3.cancel(), this.activeTimers.delete(r4));
        }
        for (const [e4, t4] of o3) if (!this.activeTimers.has(e4)) {
          const n4 = this.startTimer(e4, t4, r3);
          this.activeTimers.set(e4, n4);
        }
      }
      reconcileServices(e3, t3, r3, n3) {
        s2(e3);
        const o3 = s2(t3), i3 = "connecting" === e3.type ? e3.generation : -1, a3 = "connecting" === t3.type ? t3.generation : -1, c2 = e3.type === t3.type && i3 !== a3 && a3 >= 0;
        for (const [e4, t4] of this.activeServiceHandles) o3.has(e4) && !c2 || (t4.cancel(), this.activeServiceHandles.delete(e4), this.activeServicePromises.delete(e4));
        for (const e4 of o3) if (!this.activeServiceHandles.has(e4)) {
          const { handle: t4, promise: o4 } = n3(e4, r3);
          this.activeServiceHandles.set(e4, t4), this.activeServicePromises.set(e4, o4.catch(() => {
          }));
        }
      }
      getServicePromise(e3) {
        return this.activeServicePromises.get(e3);
      }
      dispose() {
        for (const [, e3] of this.activeTimers) e3.cancel();
        this.activeTimers.clear();
        for (const [, e3] of this.activeServiceHandles) e3.cancel();
        this.activeServiceHandles.clear(), this.activeServicePromises.clear();
      }
      get activeCount() {
        return this.activeTimers.size;
      }
      get activeServiceCount() {
        return this.activeServiceHandles.size;
      }
      has(e3) {
        return this.activeTimers.has(e3);
      }
      hasService(e3) {
        return this.activeServiceHandles.has(e3);
      }
      startTimer(e3, t3, r3) {
        const n3 = (function(e4) {
          switch (e4) {
            case "backoff_timer":
              return { target: "connection", kind: "backoff_timer_expired" };
            case "stability_timer":
              return { target: "connection", kind: "connection_stabilized" };
            case "periodic_retry_timer":
              return { target: "connection", kind: "periodic_retry_expired" };
            case "health_probe_timer":
              return { target: "connection", kind: "health_probe_due" };
            default:
              return e4;
          }
        })(e3);
        let o3 = false;
        const s3 = setTimeout(() => {
          o3 || (this.activeTimers.delete(e3), r3([n3]));
        }, t3.delayMs);
        return { cancel: () => {
          o3 = true, clearTimeout(s3);
        } };
      }
    }
    var g = r2(7223);
    function y(e3) {
      return e3.maxAttempts ?? e3.getMaxAttempts?.() ?? (0, g.pt)();
    }
    function _(e3) {
      return void 0 !== e3.maxPeriodicCycles ? e3.maxPeriodicCycles : e3.getMaxPeriodicCycles?.() ?? (0, g.Zo)();
    }
    function v(e3) {
      return e3.getStabilityThresholdMs?.() ?? (0, n2.dg)();
    }
    const w = { state: null, commands: [] };
    function b(e3) {
      return (function(e4) {
        return "connecting" === e4.type ? e4.generation : 0;
      })(e3) + 1;
    }
    function S(e3, t3, r3 = 0) {
      return { state: { type: "connecting", attempt: t3, generation: b(e3), periodicCycle: r3 }, commands: [] };
    }
    function k(e3, t3, r3, n3 = 0) {
      return { state: { type: "connecting", attempt: t3, generation: b(e3), periodicCycle: n3 }, commands: r3 };
    }
    function E(e3, t3, r3 = 0, n3 = true) {
      return { state: { type: "failed", error: e3, periodicRetryDelayMs: t3.getPeriodicRetryDelay(r3), periodicCycle: r3, ...false === n3 ? { automaticRetry: false } : {} }, commands: [] };
    }
    function x(e3, t3, r3, n3 = 0, o3 = true) {
      return { state: { type: "failed", error: e3, periodicRetryDelayMs: t3.getPeriodicRetryDelay(n3), periodicCycle: n3, ...false === o3 ? { automaticRetry: false } : {} }, commands: r3 };
    }
    function T(e3, t3, r3 = [], n3 = 0, o3 = true) {
      return { state: { type: "closed", error: e3, periodicRetryDelayMs: t3.getPeriodicRetryDelay(n3), periodicCycle: n3, ...false === o3 ? { automaticRetry: false } : {} }, commands: r3 };
    }
    function O(e3, t3, r3 = 0) {
      const n3 = t3.getBackoffDelay(e3);
      return { state: { type: "transient_failure", attempt: e3, nextDelayMs: n3, periodicCycle: r3 }, commands: [{ type: "start_backoff_timer", delayMs: n3 }] };
    }
    function P(e3, t3, r3) {
      switch (t3.kind) {
        case "connect_success":
          return { state: { type: "connected", attempt: e3.attempt, stabilized: false, probing: false }, commands: [{ type: "cancel_backoff_timer" }, { type: "start_stability_timer", delayMs: v(r3) }] };
        case "connect_failure":
          return (function(e4, t4, r4, n3, o3 = 0) {
            if (!r4) return E(t4, n3, o3, false);
            const s3 = e4 + 1;
            return s3 >= y(n3) ? E(t4, n3, o3) : O(s3, n3, o3);
          })(e3.attempt, t3.error, t3.isRetryable, r3, e3.periodicCycle);
        case "server_removed":
          return { state: { type: "idle" }, commands: [{ type: "cancel_backoff_timer" }] };
        case "connect_start":
        case "transport_error":
        case "transport_closed":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "periodic_retry_expired":
        case "request_degraded":
        case "health_probe_due":
        case "health_probe_succeeded":
        case "health_probe_failed":
          return w;
        case "session_invalidated":
          return k(e3, 0, [{ type: "initiate_connection" }]);
        default:
          return t3;
      }
    }
    function I(e3, t3, r3) {
      switch (t3.kind) {
        case "health_probe_due":
          return e3.probing ? w : { state: { ...e3, probing: true }, commands: [] };
        case "health_probe_succeeded":
          return { state: { type: "connected", attempt: 0, stabilized: true, probing: false }, commands: [] };
        case "health_probe_failed": {
          const o3 = e3.consecutiveFailures + 1;
          return o3 >= (function(e4) {
            return e4.getMaxDegradedProbeFailures?.() ?? (0, n2.eZ)();
          })(r3) ? O(0, r3) : { state: { type: "degraded", consecutiveFailures: o3, reason: t3.error, probing: false }, commands: [] };
        }
        case "request_degraded":
          return { state: { type: "degraded", consecutiveFailures: 0, reason: t3.reason, probing: e3.probing }, commands: [] };
        case "transport_error":
          return t3.isRetryable ? O(0, r3) : E(t3.error, r3, 0, false);
        case "transport_closed":
          return t3.isStdio ? T("Client closed", r3) : O(0, r3);
        case "session_invalidated":
          return k(e3, 0, [{ type: "cancel_backoff_timer" }, { type: "initiate_connection" }]);
        case "server_removed":
          return { state: { type: "idle" }, commands: [] };
        case "connect_start":
        case "connect_success":
        case "connect_failure":
        case "idle_suspend":
        case "backoff_timer_expired":
        case "connection_stabilized":
        case "periodic_retry_expired":
          return w;
        default:
          return t3;
      }
    }
    function C(e3, t3, r3) {
      switch (e3.type) {
        case "idle":
          return (function(e4, t4, r4) {
            switch (t4.kind) {
              case "connect_start":
                return S(e4, 0);
              case "connect_failure":
                return E(t4.error, r4, 0, t4.isRetryable);
              case "server_removed":
              case "connect_success":
              case "transport_error":
              case "transport_closed":
              case "session_invalidated":
              case "idle_suspend":
              case "backoff_timer_expired":
              case "connection_stabilized":
              case "periodic_retry_expired":
              case "request_degraded":
              case "health_probe_due":
              case "health_probe_succeeded":
              case "health_probe_failed":
                return w;
              default:
                return t4;
            }
          })(e3, t3, r3);
        case "connecting":
          return P(e3, t3, r3);
        case "connected":
          return (function(e4, t4, r4) {
            switch (t4.kind) {
              case "connect_start":
              case "connect_success":
              case "connect_failure":
              case "backoff_timer_expired":
              case "periodic_retry_expired":
                return w;
              case "connection_stabilized":
                return { state: { type: "connected", attempt: 0, stabilized: true, probing: false }, commands: [] };
              case "transport_error":
                if (t4.isRetryable) {
                  const n3 = e4.stabilized ? 0 : e4.attempt + 1;
                  return n3 >= y(r4) ? x(t4.error, r4, [{ type: "cancel_stability_timer" }]) : { state: { type: "transient_failure", attempt: n3, nextDelayMs: r4.getBackoffDelay(n3), periodicCycle: 0 }, commands: [{ type: "cancel_stability_timer" }, { type: "start_backoff_timer", delayMs: r4.getBackoffDelay(n3) }] };
                }
                return x(t4.error, r4, [{ type: "cancel_stability_timer" }], 0, false);
              case "transport_closed":
                if (t4.isStdio) return T("Client closed", r4, [{ type: "cancel_stability_timer" }]);
                {
                  const t5 = e4.stabilized ? 0 : e4.attempt + 1;
                  return t5 >= y(r4) ? x("Transport closed", r4, [{ type: "cancel_stability_timer" }]) : { state: { type: "transient_failure", attempt: t5, nextDelayMs: r4.getBackoffDelay(t5), periodicCycle: 0 }, commands: [{ type: "cancel_stability_timer" }, { type: "start_backoff_timer", delayMs: r4.getBackoffDelay(t5) }] };
                }
              case "session_invalidated":
                return k(e4, 0, [{ type: "cancel_backoff_timer" }, { type: "cancel_stability_timer" }, { type: "initiate_connection" }]);
              case "idle_suspend":
                return { state: { type: "dormant" }, commands: [{ type: "cancel_stability_timer" }] };
              case "server_removed":
                return { state: { type: "idle" }, commands: [{ type: "cancel_backoff_timer" }, { type: "cancel_stability_timer" }] };
              case "request_degraded":
                return { state: { type: "degraded", consecutiveFailures: 0, reason: t4.reason, probing: false }, commands: [{ type: "cancel_stability_timer" }] };
              case "health_probe_due":
                return e4.probing ? w : { state: { ...e4, probing: true }, commands: [] };
              case "health_probe_succeeded":
                return e4.probing ? { state: { ...e4, probing: false }, commands: [] } : w;
              case "health_probe_failed":
                return { state: { type: "degraded", consecutiveFailures: 1, reason: t4.error, probing: false }, commands: [{ type: "cancel_stability_timer" }] };
              default:
                return t4;
            }
          })(e3, t3, r3);
        case "dormant":
          return (function(e4, t4) {
            switch (t4.kind) {
              case "connect_start":
              case "session_invalidated":
                return S(e4, 0);
              case "server_removed":
                return { state: { type: "idle" }, commands: [{ type: "cancel_backoff_timer" }] };
              case "idle_suspend":
              case "connect_success":
              case "connect_failure":
              case "transport_error":
              case "transport_closed":
              case "backoff_timer_expired":
              case "connection_stabilized":
              case "periodic_retry_expired":
              case "request_degraded":
              case "health_probe_due":
              case "health_probe_succeeded":
              case "health_probe_failed":
                return w;
              default:
                return t4;
            }
          })(e3, t3);
        case "degraded":
          return I(e3, t3, r3);
        case "transient_failure":
          return (function(e4, t4) {
            switch (t4.kind) {
              case "backoff_timer_expired":
                return { state: { type: "connecting", attempt: e4.attempt, generation: b(e4), periodicCycle: e4.periodicCycle }, commands: [{ type: "initiate_connection" }] };
              case "connect_start":
                return k(e4, 0, [{ type: "cancel_backoff_timer" }]);
              case "server_removed":
                return { state: { type: "idle" }, commands: [{ type: "cancel_backoff_timer" }] };
              case "connect_success":
              case "connect_failure":
              case "transport_error":
              case "transport_closed":
              case "session_invalidated":
              case "idle_suspend":
              case "connection_stabilized":
              case "periodic_retry_expired":
              case "request_degraded":
              case "health_probe_due":
              case "health_probe_succeeded":
              case "health_probe_failed":
                return w;
              default:
                return t4;
            }
          })(e3, t3);
        case "failed":
          return (function(e4, t4, r4) {
            switch (t4.kind) {
              case "connect_start":
                return S(e4, 0);
              case "periodic_retry_expired": {
                const t5 = _(r4);
                return void 0 !== t5 && e4.periodicCycle >= t5 ? e4.exhausted ? w : { state: { ...e4, exhausted: true }, commands: [] } : S(e4, 0, e4.periodicCycle + 1);
              }
              case "server_removed":
                return { state: { type: "idle" }, commands: [] };
              case "connect_success":
              case "connect_failure":
              case "transport_error":
              case "transport_closed":
              case "session_invalidated":
              case "idle_suspend":
              case "backoff_timer_expired":
              case "connection_stabilized":
              case "request_degraded":
              case "health_probe_due":
              case "health_probe_succeeded":
              case "health_probe_failed":
                return w;
              default:
                return t4;
            }
          })(e3, t3, r3);
        case "closed":
          return (function(e4, t4, r4) {
            switch (t4.kind) {
              case "connect_start":
                return S(e4, 0);
              case "periodic_retry_expired": {
                const t5 = _(r4);
                return void 0 !== t5 && e4.periodicCycle >= t5 ? e4.exhausted ? w : { state: { ...e4, exhausted: true }, commands: [] } : S(e4, 0, e4.periodicCycle + 1);
              }
              case "server_removed":
                return { state: { type: "idle" }, commands: [] };
              case "connect_success":
              case "connect_failure":
              case "transport_error":
              case "transport_closed":
              case "session_invalidated":
              case "idle_suspend":
              case "backoff_timer_expired":
              case "connection_stabilized":
              case "request_degraded":
              case "health_probe_due":
              case "health_probe_succeeded":
              case "health_probe_failed":
                return w;
              default:
                return t4;
            }
          })(e3, t3, r3);
        default:
          return e3;
      }
    }
    function A(e3, t3) {
      switch (t3.kind) {
        case "auth_required":
          return { type: "needsUserAuth", authorizationUrl: t3.authorizationUrl };
        case "tokens_saved":
          switch (e3.type) {
            case "needsUserAuth":
            case "expired":
              return { type: "valid" };
            case "unknown":
            case "valid":
              return null;
            default:
              return e3;
          }
        case "auth_completed":
          switch (e3.type) {
            case "needsUserAuth":
              return { type: "valid" };
            case "unknown":
            case "valid":
            case "expired":
              return null;
            default:
              return e3;
          }
        case "operation_auth_failed":
          switch (e3.type) {
            case "valid":
            case "unknown":
              return { type: "expired", error: t3.error };
            case "needsUserAuth":
            case "expired":
              return null;
            default:
              return e3;
          }
        case "operation_succeeded":
          switch (e3.type) {
            case "expired":
            case "unknown":
              return { type: "valid" };
            case "valid":
            case "needsUserAuth":
              return null;
            default:
              return e3;
          }
        case "server_removed":
          return { type: "unknown" };
        default:
          return t3;
      }
    }
    function $(e3, t3, r3, n3) {
      let o3 = e3, s3 = t3, i3 = [];
      switch (r3.target) {
        case "connection": {
          const a4 = "needsUserAuth" === t3.type || "expired" === t3.type;
          if ("backoff_timer_expired" !== r3.kind && "periodic_retry_expired" !== r3.kind || !a4) {
            const { target: a5, ...c2 } = r3, u2 = C(e3, c2, n3.backoff);
            if (null !== u2.state && (o3 = u2.state), i3 = u2.commands, "connect_success" === r3.kind && "expired" === t3.type) {
              const e4 = A(t3, { kind: "operation_succeeded" });
              null !== e4 && (s3 = e4);
            }
          } else ;
          break;
        }
        case "auth": {
          const e4 = t3, { target: a4, ...c2 } = r3, u2 = A(t3, c2);
          null !== u2 && (s3 = u2);
          const l2 = "needsUserAuth" === e4.type || "expired" === e4.type, d2 = "needsUserAuth" !== s3.type && "expired" !== s3.type, p2 = "transient_failure" === o3.type || "failed" === o3.type || "closed" === o3.type;
          if (l2 && d2 && p2) {
            const e5 = C(o3, { kind: "connect_start" }, n3.backoff);
            null !== e5.state && (o3 = e5.state), i3.push(...e5.commands), i3.push({ type: "initiate_connection" });
          }
          break;
        }
        default:
          return r3;
      }
      const a3 = (function(e4, t4) {
        return "needsUserAuth" === t4.type ? { type: "needsAuth", authorizationUrl: t4.authorizationUrl } : "expired" === t4.type ? { type: "error", error: t4.error } : "failed" === e4.type || "closed" === e4.type && e4.error ? false === e4.automaticRetry ? { type: "error", error: e4.error, isRetryable: false } : { type: "error", error: e4.error } : "connecting" === e4.type ? { type: "initializing" } : "degraded" === e4.type ? { type: "degraded", reason: e4.reason } : "connected" !== e4.type && "dormant" !== e4.type || "valid" !== t4.type && "unknown" !== t4.type ? "transient_failure" === e4.type ? { type: "connected" } : { type: "disconnected" } : { type: "connected" };
      })(o3, s3);
      return { connectionState: o3, authState: s3, commands: i3, projectedStatus: a3 };
    }
    var R = r2(8891), N = r2(5977), M = r2(1521), J = r2(3168), j = r2(1195);
    function D(e3) {
      if ("object" == typeof e3 && null !== e3 && "code" in e3) return e3.code;
    }
    function F(e3) {
      return e3.message.includes("Received a response for an unknown message ID");
    }
    function q(e3) {
      if (e3 instanceof R.D_) return true;
      if (e3 instanceof N.Gy || e3 instanceof N.Pg || e3 instanceof N.g || e3 instanceof N.hY) return true;
      if (e3 instanceof N.W5 && ("string" == typeof (t3 = e3.errorCode) && M.S2.has(t3.toLowerCase()))) return true;
      var t3;
      if ((0, M.Gp)(e3)) return true;
      if (e3 instanceof Error) {
        const t4 = e3.message.toLowerCase();
        if (t4.includes("unauthorized") || /\b401\b/.test(t4)) return true;
        if (401 === D(e3)) return true;
      }
      return false;
    }
    function z(e3) {
      return !!e3.message.includes("SSE stream disconnected") || !!e3.message.startsWith("SSE error:") && (void 0 === (0, j.RI)(e3) && !e3.message.includes("Maximum reconnection attempts"));
    }
    function U(e3, t3) {
      return "streamableHttp" === t3 && (e3 instanceof Error && (404 === (0, j.RI)(e3) || (404 === D(e3) || (!!e3.message.includes("Maximum reconnection attempts") || (!!e3.message.includes("MCP error -32000: Connection closed") || (function(e4) {
        const t4 = e4.match(/MCP error -3200[01]:\s*(.+)/i);
        if (t4) {
          const e5 = t4[1];
          if (/session/i.test(e5)) return true;
        }
        const r3 = e4.match(/\{[\s\S]*"jsonrpc"[\s\S]*\}/);
        if (r3) try {
          const e5 = JSON.parse(r3[0]), t5 = e5?.error?.code;
          if ((-32e3 === t5 || -32001 === t5) && "string" == typeof e5?.error?.message && /session/i.test(e5.error.message)) return true;
        } catch {
        }
        return false;
      })(e3.message))))));
    }
    function B(e3, t3) {
      const r3 = (function(e4) {
        return e4 instanceof M.Nj ? { reason: "sibling_refreshed", retryable: true } : (0, M.zG)(e4) ? { reason: "network", retryable: true } : (0, M.ZN)(e4) ? { reason: "oauth_loopback_unavailable", retryable: false } : void 0;
      })(e3);
      if (void 0 !== r3) return r3;
      const n3 = e3 instanceof Error ? e3.message : String(e3), o3 = e3 instanceof Error && (0, j.Hr)(e3), s3 = (0, J.v)(n3), i3 = o3 || s3;
      if (q(e3)) return { reason: "auth", retryable: false };
      if (void 0 !== t3 && U(e3, t3)) return { reason: "session_invalidated", retryable: true, httpStatus: 404 };
      const a3 = e3 instanceof Error ? (0, j.RI)(e3) : void 0;
      if (void 0 !== a3) {
        if (a3 >= 500) return { reason: "http_5xx", retryable: i3, httpStatus: a3 };
        if (a3 >= 400) return { reason: "http_4xx", retryable: i3, httpStatus: a3 };
      }
      return s3 ? { reason: "timeout", retryable: true, httpStatus: a3 } : o3 ? { reason: "network", retryable: true, httpStatus: a3 } : { reason: "unknown", retryable: i3, httpStatus: a3 };
    }
    function L(e3, t3, r3) {
      if (z(e3) || F(e3)) return "suppress";
      const n3 = r3 ?? B(e3, t3);
      return "session_invalidated" === n3.reason ? "warn" : n3.retryable ? "debug" : "warn";
    }
    function V(e3, t3) {
      if (t3) return true;
      switch (e3.kind) {
        case "connect_failure":
        case "transport_error":
          return !e3.isRetryable;
        case "transport_closed":
          return e3.isStdio;
        case "session_invalidated":
          return false;
        default:
          return e3;
      }
    }
    function K(e3, t3) {
      const { authState: r3, transportType: n3 } = t3;
      if (z(e3)) return [];
      if (F(e3)) return [];
      if ("needsUserAuth" === r3.type) return [];
      const o3 = B(e3, n3);
      if ("auth" === o3.reason) return [{ target: "auth", kind: "operation_auth_failed", error: e3.message }];
      if ("session_invalidated" === o3.reason) return [{ target: "connection", kind: "session_invalidated" }];
      if ("stdio" !== n3) {
        const e4 = o3.httpStatus;
        if (429 === e4 || 503 === e4) return [{ target: "connection", kind: "request_degraded", reason: `HTTP ${e4}` }];
      }
      return "stdio" !== n3 && o3.retryable ? [{ target: "connection", kind: "transport_error", error: e3.message, isRetryable: true }] : [{ target: "connection", kind: "transport_error", error: e3.message, isRetryable: false }];
    }
    function Z(e3) {
      const { authState: t3, transportType: r3 } = e3;
      if ("needsUserAuth" === t3.type) return [];
      return [{ target: "connection", kind: "transport_closed", isStdio: "stdio" === r3 }];
    }
    function W(e3) {
      const { result: t3, error: r3, authState: n3 } = e3;
      if (void 0 !== r3) {
        if (q(r3) && "needsUserAuth" !== n3.type) {
          return [{ target: "auth", kind: "operation_auth_failed", error: r3 instanceof Error ? r3.message : String(r3) }];
        }
        return [];
      }
      return void 0 === t3 ? [] : (t3.isError, [{ target: "auth", kind: "operation_succeeded" }]);
    }
    function H(e3) {
      const { authError: t3, authState: r3 } = e3;
      return void 0 !== t3 ? "needsUserAuth" !== r3.type ? [{ target: "auth", kind: "operation_auth_failed", error: t3 }] : [] : [{ target: "auth", kind: "operation_succeeded" }];
    }
    class Y {
      constructor(e3 = 200) {
        this.head = 0, this.count = 0, this.capacity = e3, this.buffer = new Array(e3);
      }
      push(e3) {
        this.buffer[this.head] = e3, this.head = (this.head + 1) % this.capacity, this.count < this.capacity && this.count++;
      }
      getEntries() {
        return 0 === this.count ? [] : this.count < this.capacity ? this.buffer.slice(0, this.count) : [...this.buffer.slice(this.head), ...this.buffer.slice(0, this.head)];
      }
      clear() {
        this.head = 0, this.count = 0, this.buffer = new Array(this.capacity);
      }
      get size() {
        return this.count;
      }
    }
    function G(e3) {
      return !e3.ok && true !== e3.needsAuth && true === e3.sessionReuseRequired;
    }
  }