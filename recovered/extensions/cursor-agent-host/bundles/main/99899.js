// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 99899 range:15143704..15144755
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99899: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.isCompatible = t._makeCompatibilityCheck = void 0;
    const n = r(14913), s = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function o(e2) {
      const t2 = /* @__PURE__ */ new Set([e2]), r2 = /* @__PURE__ */ new Set(), n2 = e2.match(s);
      if (!n2) return () => false;
      const o2 = +n2[1], i = +n2[2], a = +n2[3];
      if (null != n2[4]) return function(t3) {
        return t3 === e2;
      };
      function c(e3) {
        return r2.add(e3), false;
      }
      function l(e3) {
        return t2.add(e3), true;
      }
      return function(e3) {
        if (t2.has(e3)) return true;
        if (r2.has(e3)) return false;
        const n3 = e3.match(s);
        if (!n3) return c(e3);
        const u = +n3[1], d = +n3[2], p = +n3[3];
        return null != n3[4] || o2 !== u ? c(e3) : 0 === o2 ? i === d && a <= p ? l(e3) : c(e3) : i <= d ? l(e3) : c(e3);
      };
    }
    t._makeCompatibilityCheck = o, t.isCompatible = o(n.VERSION);
  }