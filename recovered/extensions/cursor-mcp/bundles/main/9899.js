// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9899 range:918608..919679
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9899: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.isCompatible = t2._makeCompatibilityCheck = void 0;
    const n2 = r2(4913), o2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function s2(e3) {
      const t3 = /* @__PURE__ */ new Set([e3]), r3 = /* @__PURE__ */ new Set(), n3 = e3.match(o2);
      if (!n3) return () => false;
      const s3 = +n3[1], i2 = +n3[2], a2 = +n3[3];
      if (null != n3[4]) return function(t4) {
        return t4 === e3;
      };
      function c(e4) {
        return r3.add(e4), false;
      }
      function u(e4) {
        return t3.add(e4), true;
      }
      return function(e4) {
        if (t3.has(e4)) return true;
        if (r3.has(e4)) return false;
        const n4 = e4.match(o2);
        if (!n4) return c(e4);
        const l = +n4[1], d = +n4[2], p = +n4[3];
        return null != n4[4] || s3 !== l ? c(e4) : 0 === s3 ? i2 === d && a2 <= p ? u(e4) : c(e4) : i2 <= d ? u(e4) : c(e4);
      };
    }
    t2._makeCompatibilityCheck = s2, t2.isCompatible = s2(n2.VERSION);
  }