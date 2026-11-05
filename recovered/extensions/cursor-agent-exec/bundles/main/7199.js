// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 7199 range:446393..446687
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7199: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.auditTime = void 0;
    const n = r(2665), s = r(72698), o = r(80444);
    t.auditTime = function(e2, t2 = n.asyncScheduler) {
      return (0, s.audit)(() => (0, o.timer)(e2, t2));
    };
  }