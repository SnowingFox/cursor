// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 6800 range:3186619..3187329
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6800: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.arrayOrObject = t.argsArgArrayOrObject = void 0;
    const { isArray: r } = Array, { getPrototypeOf: n, prototype: s, keys: o } = Object;
    function i(e2) {
      if (r(e2)) return { args: e2, keys: null };
      if ((t2 = e2) && "object" == typeof t2 && n(t2) === s) {
        const t3 = o(e2);
        return { args: t3.map((t4) => e2[t4]), keys: t3 };
      }
      var t2;
      return null;
    }
    t.argsArgArrayOrObject = function(e2) {
      if (1 === e2.length) {
        const t2 = i(e2[0]);
        if (t2) return t2;
      }
      return { args: e2, keys: null };
    }, t.arrayOrObject = i;
  }