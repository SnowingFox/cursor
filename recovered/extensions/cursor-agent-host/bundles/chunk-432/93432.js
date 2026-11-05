// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/432.js sha256:6fdff49aeb548c0e03e0a9a77534c6bd4d77871b8b99dd459668f687abbfb1e1
// module: 93432 range:10241..12313
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93432: (t, e, r) => {
  r.r(e), r.d(e, { createRemoteEgressLatchedInferenceTransport: () => s, runLatchedConnectCall: () => i });
  var n = r(29580), o = r(93173);
  function s(t2) {
    let e2;
    const r2 = () => (e2 ??= t2.createExternal(), e2);
    let n2;
    const s2 = () => "external" === t2.latch.peekKind() || void 0 !== n2, a = (e3) => {
      const r3 = (0, o.classifyRemoteEgressProbeError)(e3);
      t2.latch.latch("external", { source: "inference_connect_error", reason: r3 }) || "builtin" === t2.latch.peekKind() && void 0 === n2 && (n2 = r3, t2.onInferenceHop?.(r3));
    }, c = t2.builtin.transport;
    return { transport: { unary: (e3, n3, o2, l, u, d, E) => i({ latch: t2.latch, isExternal: s2, onBuiltinConnectError: a, signal: o2, builtin: (t3) => c.unary(e3, n3, t3, l, u, d, E), external: () => r2().unary(e3, n3, o2, l, u, d, E) }), stream: (e3, n3, o2, l, u, d, E) => i({ latch: t2.latch, isExternal: s2, onBuiltinConnectError: a, signal: o2, builtin: (t3) => c.stream(e3, n3, t3, l, u, d, E), external: () => r2().stream(e3, n3, o2, l, u, d, E) }) }, isHttp2TransportFor: (e3) => !!s2() || t2.builtin.isHttp2TransportFor(e3) };
  }
  async function i(t2) {
    if (t2.isExternal()) return t2.external();
    if ("builtin" === t2.latch.peekKind()) try {
      return await t2.builtin(t2.signal);
    } catch (e3) {
      throw true !== t2.signal?.aborted && (0, o.isPreFirstByteConnectClassError)(e3) && t2.onBuiltinConnectError(e3), e3;
    }
    const e2 = new AbortController();
    let r2 = false;
    const s2 = t2.latch.subscribe((t3) => {
      "external" !== t3.kind || r2 || e2.abort();
    });
    try {
      const o2 = await t2.builtin(void 0 === t2.signal ? e2.signal : (0, n.mergeAbortSignals)(t2.signal, e2.signal));
      return r2 = true, o2;
    } catch (s3) {
      if (r2 = true, true === t2.signal?.aborted) throw s3;
      if (e2.signal.aborted) throw (0, n.createRemoteEgressFlipError)();
      throw (0, o.isPreFirstByteConnectClassError)(s3) && t2.onBuiltinConnectError(s3), s3;
    } finally {
      s2();
    }
  }
}