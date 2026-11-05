// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 10278 range:3632933..3633937
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10278: (e, t, r) => {
    "use strict";
    r.d(t, { NL: () => c, Tw: () => l, kk: () => u });
    var n = r(40328), s = r(8032);
    const o = 4294967295, i = o, a = 1024;
    function c(e2, t2, r2) {
      if (null != t2 || (t2 = i), null != e2 || (e2 = o), null != r2 || (r2 = a), t2 < 1 || t2 > i) throw new n.T(`writeMaxBytes ${t2} must be >= 1 and <= ${i}`, s.C.Internal);
      if (e2 < 1 || e2 > o) throw new n.T(`readMaxBytes ${e2} must be >= 1 and <= ${o}`, s.C.Internal);
      return { readMaxBytes: e2, writeMaxBytes: t2, compressMinBytes: r2 };
    }
    function l(e2, t2) {
      if (t2 > e2) throw new n.T(`message size ${t2} is larger than configured writeMaxBytes ${e2}`, s.C.ResourceExhausted);
    }
    function u(e2, t2, r2 = false) {
      if (t2 > e2) {
        let o2 = `message size is larger than configured readMaxBytes ${e2}`;
        throw r2 && (o2 = `message size ${t2} is larger than configured readMaxBytes ${e2}`), new n.T(o2, s.C.ResourceExhausted);
      }
    }
  }