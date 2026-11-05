// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 278 range:4386..5412
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
278: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { NL: () => u, Tw: () => c, kk: () => l });
    var n2 = r2(328), s2 = r2(8032);
    const i2 = 4294967295, o2 = i2, a = 1024;
    function u(t3, e3, r3) {
      if (null != e3 || (e3 = o2), null != t3 || (t3 = i2), null != r3 || (r3 = a), e3 < 1 || e3 > o2) throw new n2.T(`writeMaxBytes ${e3} must be >= 1 and <= ${o2}`, s2.C.Internal);
      if (t3 < 1 || t3 > i2) throw new n2.T(`readMaxBytes ${t3} must be >= 1 and <= ${i2}`, s2.C.Internal);
      return { readMaxBytes: t3, writeMaxBytes: e3, compressMinBytes: r3 };
    }
    function c(t3, e3) {
      if (e3 > t3) throw new n2.T(`message size ${e3} is larger than configured writeMaxBytes ${t3}`, s2.C.ResourceExhausted);
    }
    function l(t3, e3, r3 = false) {
      if (e3 > t3) {
        let i3 = `message size is larger than configured readMaxBytes ${t3}`;
        throw r3 && (i3 = `message size ${e3} is larger than configured readMaxBytes ${t3}`), new n2.T(i3, s2.C.ResourceExhausted);
      }
    }
  }