// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6800 range:578054..578782
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6800: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.arrayOrObject = t2.argsArgArrayOrObject = void 0;
    const { isArray: r2 } = Array, { getPrototypeOf: n2, prototype: o2, keys: s2 } = Object;
    function i2(e3) {
      if (r2(e3)) return { args: e3, keys: null };
      if ((t3 = e3) && "object" == typeof t3 && n2(t3) === o2) {
        const t4 = s2(e3);
        return { args: t4.map((t5) => e3[t5]), keys: t4 };
      }
      var t3;
      return null;
    }
    t2.argsArgArrayOrObject = function(e3) {
      if (1 === e3.length) {
        const t3 = i2(e3[0]);
        if (t3) return t3;
      }
      return { args: e3, keys: null };
    }, t2.arrayOrObject = i2;
  }