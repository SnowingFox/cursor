"use strict";
exports.id = 915, exports.ids = [915], exports.modules = { 637: (e, t, n) => {
  n.r(t), n.d(t, { AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER: () => s, AGENT_WEBSOCKET_PRECONNECT_SUBPROTOCOL: () => i, AGENT_WEBSOCKET_PROTOCOL_VERSION: () => a, AGENT_WEBSOCKET_REUSE_HEADER: () => c, AGENT_WEBSOCKET_SEQUENTIAL_V1_REUSE_VALUE: () => l, AGENT_WEBSOCKET_SUBPROTOCOL: () => o, allowsAgentWebSocketSequentialReuse: () => d, validateAgentWebSocketClientFrame: () => g, validateAgentWebSocketConnectError: () => m, validateAgentWebSocketHello: () => h, validateAgentWebSocketRunIdentity: () => f, validateAgentWebSocketServerFrame: () => v });
  var r = n(3192);
  const o = "cursor-agent-v1", i = "cursor-agent-preconnect-v1", s = "x-cursor-agent-websocket-reservation-id", a = r.AgentWebSocketProtocolVersion.V1, c = "x-cursor-agent-websocket-reuse", l = "sequential-v1";
  function d(e2) {
    const t2 = e2.filter((e3) => e3.name.toLowerCase() === c);
    return 1 === t2.length && t2[0]?.value === l;
  }
  function u({ value: e2, field: t2 }) {
    if (0 === e2.length) throw new Error(`missing Agent WebSocket ${t2}`);
  }
  function h(e2) {
    if (e2.protocolVersion !== a) throw new Error("unsupported Agent WebSocket protocol version");
  }
  function f(e2) {
    if (void 0 === e2) throw new Error("missing Agent WebSocket run identity");
    u({ value: e2.runId, field: "run_id" }), u({ value: e2.requestId, field: "request_id" });
  }
  function m(e2) {
    if (void 0 === e2) throw new Error("missing Agent WebSocket Connect error");
    if (e2.code < r.AgentWebSocketConnectCode.CANCELED || e2.code > r.AgentWebSocketConnectCode.UNAUTHENTICATED) throw new Error("invalid Agent WebSocket Connect error code");
    for (const t2 of e2.details) u({ value: t2.typeName, field: "Connect error detail type_name" });
  }
  function g(e2) {
    switch (e2.frame.case) {
      case "hello":
        return void h(e2.frame.value);
      case "runStart":
        return void f(e2.frame.value.identity);
      case "clientMessage":
        if (u({ value: e2.frame.value.runId, field: "client message run_id" }), 0 === e2.frame.value.message.byteLength) throw new Error("missing Agent WebSocket client message bytes");
        return;
      case "halfClose":
        return void u({ value: e2.frame.value.runId, field: "half-close run_id" });
      case "cancelRun":
        return void u({ value: e2.frame.value.runId, field: "cancel run_id" });
      default:
        throw new Error("missing Agent WebSocket client frame variant");
    }
  }
  function v(e2) {
    switch (e2.frame.case) {
      case "hello":
        return void h(e2.frame.value);
      case "runAccepted":
        return void f(e2.frame.value.identity);
      case "serverMessage":
        if (u({ value: e2.frame.value.runId, field: "server message run_id" }), 0 === e2.frame.value.message.byteLength) throw new Error("missing Agent WebSocket server message bytes");
        return;
      case "runEnd":
        return f(e2.frame.value.identity), void (void 0 !== e2.frame.value.error && m(e2.frame.value.error));
      case "runRejected":
        return f(e2.frame.value.identity), void m(e2.frame.value.error);
      default:
        throw new Error("missing Agent WebSocket server frame variant");
    }
  }
}, 915: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.createAgentWebSocketRunSession = void 0;
  const r = n(7670), o = n(6920), i = n(6157), s = n(4436);
  function a(e2) {
    const t2 = {};
    return e2.forEach((e3, n2) => {
      t2[n2] = e3;
    }), t2;
  }
  function c(e2, t2) {
    return new r.WebSocket(e2.url, [t2], { followRedirects: false, perMessageDeflate: false, headers: a(e2.headers), ...void 0 !== e2.nodeOptions.ca ? { ca: [...e2.nodeOptions.ca] } : {}, ...void 0 !== e2.nodeOptions.rejectUnauthorized ? { rejectUnauthorized: e2.nodeOptions.rejectUnauthorized } : {} });
  }
  function l(e2, t2) {
    if (e2.connectionContext.endpoint !== t2.connectionContext.endpoint) return "endpoint_changed";
    if (e2.connectionContext.teamId !== t2.connectionContext.teamId) return "team_changed";
    if (e2.connectionContext.hasEffectiveProxy !== t2.connectionContext.hasEffectiveProxy) return "proxy_changed";
    return (0, o.fingerprintAgentRunCredential)(e2.headers.get("authorization") ?? void 0) !== (0, o.fingerprintAgentRunCredential)(t2.headers.get("authorization") ?? void 0) ? "authorization_changed" : "connection_context_changed";
  }
  t.createAgentWebSocketRunSession = (e2) => {
    const t2 = e2.createSocket ?? c, n2 = new i.AgentWebSocketLeaseManager({ createSocket: (n3, r3) => e2.runWithNetworkContext(() => t2(n3, r3)), contextsEqual: (e3, t3) => (0, o.agentRunWebSocketConnectionContextsEqual)(e3.connectionContext, t3.connectionContext), classifyContextMismatch: l, ...void 0 !== e2.maxConnections ? { maxConnections: e2.maxConnections } : {}, ...void 0 !== e2.keepalivePingIntervalMs ? { keepalivePingIntervalMs: e2.keepalivePingIntervalMs } : {}, ...void 0 !== e2.keepalivePingTimeoutMs ? { keepalivePingTimeoutMs: e2.keepalivePingTimeoutMs } : {}, ...void 0 !== e2.timers ? { timers: e2.timers } : {}, ...void 0 === e2.observePreconnect ? {} : { observePreconnect: e2.observePreconnect }, ...void 0 === e2.onPoolWentCold ? {} : { onPoolWentCold: e2.onPoolWentCold }, ...void 0 === e2.onIdleSocketsExhausted ? {} : { onIdleSocketsExhausted: e2.onIdleSocketsExhausted }, ...void 0 === e2.observeLifecycle ? {} : { observeLifecycle: e2.observeLifecycle } }), r2 = new s.AgentWebSocketRunAdapter({ leaseManager: n2, connectionUsePolicy: "sequential-runs", ...void 0 !== e2.timers ? { timers: e2.timers } : {}, ...void 0 !== e2.observeFirstMessagePipeline ? { observeFirstMessagePipeline: e2.observeFirstMessagePipeline } : {} });
    return { run: (e3, t3) => r2.run(e3, t3), preconnect: (e3, t3 = {}) => n2.preconnect(e3, { ...t3, reservationId: e3.requestId }), retireWhenIdle: (e3) => n2.retireWhenIdle(e3), close: (e3) => n2.close(e3) };
  };
}, 3192: (e, t, n) => {
  n.r(t), n.d(t, { AgentWebSocketCancelRun: () => g, AgentWebSocketClientFrame: () => A, AgentWebSocketClientHalfClose: () => m, AgentWebSocketClientMessage: () => f, AgentWebSocketConnectCode: () => c, AgentWebSocketConnectError: () => S, AgentWebSocketConnectErrorDetail: () => b, AgentWebSocketHeader: () => u, AgentWebSocketHello: () => l, AgentWebSocketProtocolVersion: () => a, AgentWebSocketRunAccepted: () => v, AgentWebSocketRunEnd: () => k, AgentWebSocketRunIdentity: () => d, AgentWebSocketRunRejected: () => y, AgentWebSocketRunStart: () => h, AgentWebSocketServerFrame: () => w, AgentWebSocketServerMessage: () => p });
  var r = n(6038), o = n(8592);
  const i = "agent.v1.";
  class s extends o.HL {
    static get runtime() {
      return (0, o.kU)(this, "runtime", r.proto3);
    }
    static $p() {
      return i;
    }
  }
  var a = (0, o.QT)(r.proto3, i, "AgentWebSocketProtocolVersion", [[0, "UNSPECIFIED"], [1, "V1"]], 1), c = (0, o.QT)(r.proto3, i, "AgentWebSocketConnectCode", [[0, "UNSPECIFIED"], [1, "CANCELED"], [2, "UNKNOWN"], [3, "INVALID_ARGUMENT"], [4, "DEADLINE_EXCEEDED"], [5, "NOT_FOUND"], [6, "ALREADY_EXISTS"], [7, "PERMISSION_DENIED"], [8, "RESOURCE_EXHAUSTED"], [9, "FAILED_PRECONDITION"], [10, "ABORTED"], [11, "OUT_OF_RANGE"], [12, "UNIMPLEMENTED"], [13, "INTERNAL"], [14, "UNAVAILABLE"], [15, "DATA_LOSS"], [16, "UNAUTHENTICATED"]], 1);
  class l extends s {
    constructor(e2) {
      super(), this.protocolVersion = a.UNSPECIFIED, r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new l().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new l().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new l().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(l, e2, t2);
    }
    static $() {
      return ["AgentWebSocketHello|1 protocol_version #0", a];
    }
  }
  class d extends s {
    constructor(e2) {
      super(), this.runId = "", this.requestId = "", r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new d().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new d().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new d().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(d, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunIdentity|1 run_id 9|2 request_id 9"];
    }
  }
  class u extends s {
    constructor(e2) {
      super(), this.name = "", this.value = "", r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new u().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new u().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new u().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(u, e2, t2);
    }
    static $() {
      return ["AgentWebSocketHeader|1 name 9|2 value 9"];
    }
  }
  class h extends s {
    constructor(e2) {
      super(), this.headers = [], r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new h().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new h().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new h().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(h, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunStart|1 identity #0|2 headers #1*", d, u];
    }
  }
  class f extends s {
    constructor(e2) {
      super(), this.runId = "", this.sequence = r.protoInt64.zero, this.message = new Uint8Array(0), r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new f().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new f().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new f().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(f, e2, t2);
    }
    static $() {
      return ["AgentWebSocketClientMessage|1 run_id 9|2 sequence 4|3 message 12"];
    }
  }
  class m extends s {
    constructor(e2) {
      super(), this.runId = "", r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new m().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new m().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new m().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(m, e2, t2);
    }
    static $() {
      return ["AgentWebSocketClientHalfClose|1 run_id 9"];
    }
  }
  class g extends s {
    constructor(e2) {
      super(), this.runId = "", r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new g().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new g().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new g().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(g, e2, t2);
    }
    static $() {
      return ["AgentWebSocketCancelRun|1 run_id 9"];
    }
  }
  class v extends s {
    constructor(e2) {
      super(), this.headers = [], r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new v().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new v().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new v().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(v, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunAccepted|1 identity #0|2 headers #1*", d, u];
    }
  }
  class p extends s {
    constructor(e2) {
      super(), this.runId = "", this.sequence = r.protoInt64.zero, this.message = new Uint8Array(0), r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new p().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new p().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new p().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(p, e2, t2);
    }
    static $() {
      return ["AgentWebSocketServerMessage|1 run_id 9|2 sequence 4|3 message 12"];
    }
  }
  class b extends s {
    constructor(e2) {
      super(), this.typeName = "", this.binaryValue = new Uint8Array(0), r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new b().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new b().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new b().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(b, e2, t2);
    }
    static $() {
      return ["AgentWebSocketConnectErrorDetail|1 type_name 9|2 binary_value 12"];
    }
  }
  class S extends s {
    constructor(e2) {
      super(), this.code = c.UNSPECIFIED, this.rawMessage = "", this.metadata = [], this.details = [], r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new S().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new S().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new S().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(S, e2, t2);
    }
    static $() {
      return ["AgentWebSocketConnectError|1 code #0|2 raw_message 9|3 metadata #1*|4 details #2*", c, u, b];
    }
  }
  class k extends s {
    constructor(e2) {
      super(), this.trailers = [], r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new k().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new k().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new k().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(k, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunEnd|1 identity #0|2 trailers #1*|3 error #2?", d, u, S];
    }
  }
  class y extends s {
    constructor(e2) {
      super(), r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new y().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new y().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new y().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(y, e2, t2);
    }
    static $() {
      return ["AgentWebSocketRunRejected|1 identity #0|2 error #1", d, S];
    }
  }
  class A extends s {
    constructor(e2) {
      super(), this.frame = { case: void 0 }, r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new A().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new A().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new A().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(A, e2, t2);
    }
    static $() {
      return ["AgentWebSocketClientFrame|1 hello #0 frame|2 run_start #1 frame|3 client_message #2 frame|4 half_close #3 frame|5 cancel_run #4 frame", l, h, f, m, g];
    }
  }
  class w extends s {
    constructor(e2) {
      super(), this.frame = { case: void 0 }, r.proto3.util.initPartial(e2, this);
    }
    static fromBinary(e2, t2) {
      return new w().fromBinary(e2, t2);
    }
    static fromJson(e2, t2) {
      return new w().fromJson(e2, t2);
    }
    static fromJsonString(e2, t2) {
      return new w().fromJsonString(e2, t2);
    }
    static equals(e2, t2) {
      return r.proto3.util.equals(w, e2, t2);
    }
    static $() {
      return ["AgentWebSocketServerFrame|1 hello #0 frame|2 run_accepted #1 frame|3 server_message #2 frame|4 run_end #3 frame|5 run_rejected #4 frame", l, v, p, k, y];
    }
  }
}, 4436: (e, t, n) => {
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
}, 5349: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.BoundedFrameQueue = t.SequenceValidator = t.AgentWebSocketDeliveryAmbiguousError = void 0, t.identityMatches = function(e2, t2) {
    return void 0 !== t2 && t2.runId === e2.runId && t2.requestId === e2.requestId;
  }, t.headersToAgentWebSocketHeaders = a, t.agentWebSocketHeadersToHeaders = c, t.connectErrorFromAgentWebSocket = function(e2) {
    const t2 = new i.ConnectError(e2.rawMessage, e2.code, c(e2.metadata));
    return t2.details = e2.details.map((e3) => ({ type: e3.typeName, value: e3.binaryValue })), t2;
  }, t.runStartFrame = function(e2, t2, n2) {
    const i2 = new Headers(t2);
    void 0 !== n2 && i2.set(r.AGENT_WEBSOCKET_PRECONNECT_RESERVATION_HEADER, n2);
    return new o.AgentWebSocketClientFrame({ frame: { case: "runStart", value: new o.AgentWebSocketRunStart({ identity: e2, headers: a(i2) }) } });
  }, t.clientMessageFrame = function(e2, t2, n2) {
    return new o.AgentWebSocketClientFrame({ frame: { case: "clientMessage", value: new o.AgentWebSocketClientMessage({ runId: e2, sequence: t2, message: n2 }) } });
  }, t.halfCloseFrame = function(e2) {
    return new o.AgentWebSocketClientFrame({ frame: { case: "halfClose", value: new o.AgentWebSocketClientHalfClose({ runId: e2 }) } });
  }, t.cancelRunFrame = function(e2) {
    return new o.AgentWebSocketClientFrame({ frame: { case: "cancelRun", value: new o.AgentWebSocketCancelRun({ runId: e2 }) } });
  }, t.rawDataBytes = function(e2) {
    if (Array.isArray(e2)) return Buffer.concat(e2);
    if (e2 instanceof ArrayBuffer) return new Uint8Array(e2);
    return new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength);
  };
  const r = n(637), o = n(3192), i = n(8394);
  class s extends Error {
    constructor(e2, t2) {
      super(e2), Object.defineProperty(this, "message", { configurable: true, enumerable: true, writable: true, value: e2 }), void 0 !== t2 && "cause" in t2 && Object.defineProperty(this, "cause", { configurable: true, writable: true, value: t2.cause }), this.agentWebSocketDiagnostics = t2?.diagnostics, this.name = "AgentWebSocketDeliveryAmbiguousError";
    }
  }
  function a(e2) {
    const t2 = [];
    return e2.forEach((e3, n2) => {
      t2.push(new o.AgentWebSocketHeader({ name: n2, value: e3 }));
    }), t2;
  }
  function c(e2) {
    const t2 = new Headers();
    for (const n2 of e2) t2.append(n2.name, n2.value);
    return t2;
  }
  t.AgentWebSocketDeliveryAmbiguousError = s;
  t.SequenceValidator = class {
    constructor() {
      this.next = BigInt(0);
    }
    accept(e2) {
      if (e2 !== this.next) throw new Error(`Agent WebSocket sequence ${e2} arrived out of order`);
      this.next += BigInt(1);
    }
  };
  class l {
    constructor(e2, t2) {
      this.maxBufferedBytes = e2, this.onReturn = t2, this.values = [], this.readers = [], this.bufferedBytes = 0;
    }
    push(e2, t2) {
      if (void 0 !== this.terminal) return true;
      const n2 = this.readers.shift();
      return void 0 !== n2 ? (n2.resolve({ done: false, value: e2 }), true) : !(this.bufferedBytes + t2 > this.maxBufferedBytes) && (this.bufferedBytes += t2, this.values.push({ value: e2, bytes: t2 }), true);
    }
    end() {
      this.settle(void 0);
    }
    error(e2) {
      this.settle(e2);
    }
    settle(e2) {
      if (void 0 === this.terminal) {
        this.terminal = { error: e2 }, void 0 !== e2 && (this.values.length = 0, this.bufferedBytes = 0);
        for (const t2 of this.readers.splice(0)) void 0 === e2 ? t2.resolve({ done: true, value: void 0 }) : t2.reject(e2);
      }
    }
    [Symbol.asyncIterator]() {
      return { next: () => {
        const e2 = this.values.shift();
        if (void 0 !== e2) return this.bufferedBytes -= e2.bytes, Promise.resolve({ done: false, value: e2.value });
        const t2 = this.terminal;
        return void 0 !== t2 ? void 0 === t2.error ? Promise.resolve({ done: true, value: void 0 }) : Promise.reject(t2.error) : new Promise((e3, t3) => {
          this.readers.push({ resolve: e3, reject: t3 });
        });
      }, return: async () => (await this.onReturn(), { done: true, value: void 0 }) };
    }
  }
  t.BoundedFrameQueue = l;
}, 6157: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.AgentWebSocketLeaseManager = t.AgentWebSocketLifecycleError = void 0;
  const r = n(637), o = n(3192);
  class i extends Error {
    constructor(e2, t2) {
      super(t2), this.name = "AgentWebSocketLifecycleError", this.code = e2;
    }
  }
  t.AgentWebSocketLifecycleError = i;
  const s = { setTimeout: (e2, t2) => setTimeout(e2, t2), clearTimeout(e2) {
    clearTimeout(e2);
  } };
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
