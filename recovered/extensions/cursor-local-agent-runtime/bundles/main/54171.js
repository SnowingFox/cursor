// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 54171 range:1737955..1738251
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54171: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.partition = void 0;
    const n = r(87029), o = r(4591);
    t.partition = function(e2, t2) {
      return (r2) => [(0, o.filter)(e2, t2)(r2), (0, o.filter)((0, n.not)(e2, t2))(r2)];
    };
  }