// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 54171 range:8613471..8613767
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54171: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.partition = void 0;
    const n = r(87029), s = r(4591);
    t.partition = function(e2, t2) {
      return (r2) => [(0, s.filter)(e2, t2)(r2), (0, s.filter)((0, n.not)(e2, t2))(r2)];
    };
  }