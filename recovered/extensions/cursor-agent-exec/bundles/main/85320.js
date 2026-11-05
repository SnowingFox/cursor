// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 85320 range:10937546..10937877
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85320: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.throttleTime = void 0;
    const n = r(2665), s = r(28733), o = r(80444);
    t.throttleTime = function(e2, t2 = n.asyncScheduler, r2) {
      const i = (0, o.timer)(e2, t2);
      return (0, s.throttle)(() => i, r2);
    };
  }