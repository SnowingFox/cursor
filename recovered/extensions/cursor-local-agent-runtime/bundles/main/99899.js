// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 99899 range:7943123..7944174
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99899: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.isCompatible = t._makeCompatibilityCheck = void 0;
    const n = r(14913), o = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function s(e2) {
      const t2 = /* @__PURE__ */ new Set([e2]), r2 = /* @__PURE__ */ new Set(), n2 = e2.match(o);
      if (!n2) return () => false;
      const s2 = +n2[1], i = +n2[2], a = +n2[3];
      if (null != n2[4]) return function(t3) {
        return t3 === e2;
      };
      function l(e3) {
        return r2.add(e3), false;
      }
      function c(e3) {
        return t2.add(e3), true;
      }
      return function(e3) {
        if (t2.has(e3)) return true;
        if (r2.has(e3)) return false;
        const n3 = e3.match(o);
        if (!n3) return l(e3);
        const u = +n3[1], d = +n3[2], p = +n3[3];
        return null != n3[4] || s2 !== u ? l(e3) : 0 === s2 ? i === d && a <= p ? c(e3) : l(e3) : i <= d ? c(e3) : l(e3);
      };
    }
    t._makeCompatibilityCheck = s, t.isCompatible = s(n.VERSION);
  }