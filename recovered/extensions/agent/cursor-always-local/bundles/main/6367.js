// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6367 range:3437918..3438466
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6367: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Y: () => s2 });
    const n2 = 1024;
    function s2(...t3) {
      const e3 = /* @__PURE__ */ new Map(), r3 = t3.reduce((t4, e4) => t4.concat("supported" in e4 ? e4.supported : e4), []);
      function s3(t4) {
        if (null === t4 || 0 == t4.length) return false;
        const s4 = e3.get(t4);
        if (void 0 !== s4) return s4;
        const i2 = r3.some((e4) => e4.test(t4));
        return e3.size < n2 && e3.set(t4, i2), i2;
      }
      return s3.supported = r3, s3;
    }
  }