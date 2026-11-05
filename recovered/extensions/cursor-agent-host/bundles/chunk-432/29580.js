// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/432.js sha256:6fdff49aeb548c0e03e0a9a77534c6bd4d77871b8b99dd459668f687abbfb1e1
// module: 29580 range:83..3481
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29580: (t, e, r) => {
  r.r(e), r.d(e, { AGENT_HOST_REMOTE_EGRESS_FLIP_MESSAGE: () => s, createRemoteEgressFlipError: () => i, createRemoteEgressKindLatch: () => c, createRemoteEgressLatchedTransport: () => u, decisionFromProbeResult: () => l, isRemoteEgressFlipError: () => a, mergeAbortSignals: () => E, runLatchedAgentService: () => d });
  var n = r(93173), o = r(1444);
  const s = "connection aborted (remote egress probe latched external)";
  function i() {
    return Object.assign(new Error(s), { code: "ECONNRESET" });
  }
  function a(t2) {
    return t2 instanceof Error && t2.message === s;
  }
  function c(t2) {
    let e2 = t2?.initial;
    const r2 = /* @__PURE__ */ new Set(), n2 = (t3) => {
      for (const e3 of r2) e3(t3);
    }, s2 = (r3, s3) => {
      if (void 0 !== e2) return false;
      e2 = r3;
      const i2 = s3?.source ?? ("external" === r3 ? "probe" : "run_first_byte"), a2 = s3?.reason ?? o.YR, c2 = { kind: r3, source: i2, reason: a2 };
      return t2?.onDecision?.(c2), "external" === r3 ? (t2?.onExternal?.(a2), n2({ kind: "external", reason: a2 }), true) : (n2({ kind: "builtin" }), true);
    };
    return void 0 !== t2?.initial && t2.onDecision?.({ kind: t2.initial, source: t2.initialSource ?? "setting", reason: o.YR }), { resolveKind: () => e2 ?? "builtin", peekKind: () => e2, latch: s2, applyProbeResult(t3) {
      const e3 = l(t3);
      return "external" === e3.kind ? s2("external", { source: "probe", reason: e3.reason }) : t3.ok && t3.url.length > 0 && s2("builtin", { source: "probe", reason: o.YR }), e3;
    }, subscribe: (t3) => (r2.add(t3), () => {
      r2.delete(t3);
    }) };
  }
  function l(t2) {
    return t2.ok || !(0, n.isConnectClassProbeFailure)(t2.reason) ? { kind: "builtin" } : { kind: "external", reason: t2.reason };
  }
  function u(t2) {
    let e2;
    const r2 = () => (e2 ??= t2.createExternal(), e2);
    return { run: (e3, n2, o2) => d({ builtin: t2.builtin, getExternal: r2, latch: t2.latch, ctx: e3, request: n2, options: o2 }) };
  }
  async function* d(t2) {
    const e2 = t2.latch.peekKind();
    if ("external" === e2) return void (yield* t2.getExternal().run(t2.ctx, t2.request, t2.options));
    if ("builtin" === e2) return void (yield* t2.builtin.run(t2.ctx, t2.request, t2.options));
    const r2 = new AbortController();
    let o2 = false;
    const s2 = t2.latch.subscribe((t3) => {
      "external" !== t3.kind || o2 || r2.abort();
    });
    try {
      for await (const e3 of t2.builtin.run(t2.ctx, t2.request, { ...t2.options, signal: E(t2.options.signal, r2.signal) })) o2 = true, t2.latch.latch("builtin", { source: "run_first_byte" }), yield e3;
      t2.latch.latch("builtin", { source: "run_first_byte" });
    } catch (e3) {
      if (!o2 && r2.signal.aborted && !t2.options.signal.aborted) throw i();
      throw !o2 && (0, n.isPreFirstByteConnectClassError)(e3) && t2.latch.latch("external", { source: "run_connect_error", reason: (0, n.classifyRemoteEgressProbeError)(e3) }), e3;
    } finally {
      s2();
    }
  }
  function E(t2, e2) {
    const r2 = AbortSignal.any;
    if ("function" == typeof r2) return r2([t2, e2]);
    const n2 = new AbortController(), o2 = () => {
      n2.abort();
    };
    return t2.aborted || e2.aborted ? (n2.abort(), n2.signal) : (t2.addEventListener("abort", o2, { once: true }), e2.addEventListener("abort", o2, { once: true }), n2.signal);
  }
}