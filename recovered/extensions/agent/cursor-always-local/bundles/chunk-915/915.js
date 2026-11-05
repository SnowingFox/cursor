// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/915.js sha256:a047de6a109482b317cdb9ce470b0c1903b3caa8ebca06fe5218a9e9c369a526
// module: 915 range:3299..6012
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
915: (e, t, n) => {
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
}