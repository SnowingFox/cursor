// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 15599 range:4023840..4024657
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15599: (e, t, r) => {
    "use strict";
    r.d(t, { A: () => c, K: () => a });
    var n = r(98875), s = r(13920), o = r(91398), i = r(77273);
    function a(e2) {
      const t2 = (0, n.mJ)(e2), r2 = e2.get(s.zN);
      return { spanContext: t2 ? { traceId: t2.traceId, spanId: t2.spanId, traceFlags: t2.traceFlags } : void 0, name: e2.name, conversationId: (0, i.L)(e2, r2?.conversationId), composerId: (0, i.o)(e2, r2?.composerId) };
    }
    function c(e2) {
      const t2 = a(e2), r2 = new o.CancellationTokenSource(), n2 = () => {
        r2.cancel();
      };
      return e2.signal.aborted ? r2.cancel() : e2.signal.addEventListener("abort", n2), { serializableContext: t2, cancellationTokenSource: r2, dispose: () => {
        e2.signal.removeEventListener("abort", n2), r2.dispose();
      } };
    }
  }