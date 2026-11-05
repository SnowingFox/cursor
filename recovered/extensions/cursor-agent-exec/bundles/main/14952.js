// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 14952 range:906011..906298
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