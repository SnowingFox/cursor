// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 65683 range:1982308..1982650
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65683: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mapOneOrManyArgs = void 0;
    const n = r(38143), { isArray: o } = Array;
    t.mapOneOrManyArgs = function(e2) {
      return (0, n.map)((t2) => (function(e3, t3) {
        return o(t3) ? e3(...t3) : e3(t3);
      })(e2, t2));
    };
  }