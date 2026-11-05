// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 65683 range:10340049..10340391
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65683: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mapOneOrManyArgs = void 0;
    const n = r(38143), { isArray: s } = Array;
    t.mapOneOrManyArgs = function(e2) {
      return (0, n.map)((t2) => (function(e3, t3) {
        return s(t3) ? e3(...t3) : e3(t3);
      })(e2, t2));
    };
  }