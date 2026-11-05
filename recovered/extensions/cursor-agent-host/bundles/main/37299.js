// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 37299 range:7325717..7326049
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37299: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.partition = void 0;
    const n = r(87029), s = r(4591), o = r(51078);
    t.partition = function(e2, t2, r2) {
      return [(0, s.filter)(t2, r2)((0, o.from)(e2)), (0, s.filter)((0, n.not)(t2, r2))((0, o.from)(e2))];
    };
  }