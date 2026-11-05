// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 32279 range:1018800..1019114
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32279: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.max = void 0;
    const n = r(78339), o = r(51078);
    t.max = function(e2) {
      return (0, n.reduce)((0, o.isFunction)(e2) ? (t2, r2) => e2(t2, r2) > 0 ? t2 : r2 : (e3, t2) => e3 > t2 ? e3 : t2);
    };
  }