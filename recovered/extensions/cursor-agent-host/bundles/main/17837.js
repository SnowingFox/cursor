// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 17837 range:4302371..4302685
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
17837: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.min = void 0;
    const n = r(78339), s = r(51078);
    t.min = function(e2) {
      return (0, n.reduce)((0, s.isFunction)(e2) ? (t2, r2) => e2(t2, r2) < 0 ? t2 : r2 : (e3, t2) => e3 < t2 ? e3 : t2);
    };
  }