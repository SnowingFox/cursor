// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 58254 range:1817751..1818013
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58254: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.count = void 0;
    const n = r(78339);
    t.count = function(e2) {
      return (0, n.reduce)((t2, r2, n2) => !e2 || e2(r2, n2) ? t2 + 1 : t2, 0);
    };
  }