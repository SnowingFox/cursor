// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 96367 range:14596608..14597145
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96367: (e, t, r) => {
    "use strict";
    r.d(t, { Y: () => s });
    const n = 1024;
    function s(...e2) {
      const t2 = /* @__PURE__ */ new Map(), r2 = e2.reduce((e3, t3) => e3.concat("supported" in t3 ? t3.supported : t3), []);
      function s2(e3) {
        if (null === e3 || 0 == e3.length) return false;
        const s3 = t2.get(e3);
        if (void 0 !== s3) return s3;
        const o = r2.some((t3) => t3.test(e3));
        return t2.size < n && t2.set(e3, o), o;
      }
      return s2.supported = r2, s2;
    }
  }