// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 41334 range:3200514..3200809
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41334: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.sampleTime = void 0;
    const n = r(2665), s = r(22227), o = r(14952);
    t.sampleTime = function(e2, t2 = n.asyncScheduler) {
      return (0, s.sample)((0, o.interval)(e2, t2));
    };
  }