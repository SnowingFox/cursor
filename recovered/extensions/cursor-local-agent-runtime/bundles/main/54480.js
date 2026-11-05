// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 54480 range:1738572..1738910
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54480: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scan = void 0;
    const n = r(51078), o = r(19904);
    t.scan = function(e2, t2) {
      const r2 = arguments.length >= 2;
      return (s) => new n.Observable((n2) => (0, o.scanInternals)(e2, t2, r2, true, false, s, n2));
    };
  }