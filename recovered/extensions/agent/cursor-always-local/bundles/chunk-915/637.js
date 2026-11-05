// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/915.js sha256:a047de6a109482b317cdb9ce470b0c1903b3caa8ebca06fe5218a9e9c369a526
// module: 637 range:73..3297
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
637: (e, t, n) => {
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
}