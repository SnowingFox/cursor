// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 58254 range:9164143..9164405
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