// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 6800 range:61770..62480
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6800: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.arrayOrObject = t.argsArgArrayOrObject = void 0;
    const { isArray: r } = Array, { getPrototypeOf: n, prototype: o, keys: s } = Object;
    function i(e2) {
      if (r(e2)) return { args: e2, keys: null };
      if ((t2 = e2) && "object" == typeof t2 && n(t2) === o) {
        const t3 = s(e2);
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