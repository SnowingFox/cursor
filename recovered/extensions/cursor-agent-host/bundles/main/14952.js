// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 14952 range:3995321..3995608
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14952: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.interval = void 0;
    const n = r(2665), s = r(80444);
    t.interval = function(e2 = 0, t2 = n.asyncScheduler) {
      return e2 < 0 && (e2 = 0), (0, s.timer)(e2, e2, t2);
    };
  }