// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 54171 range:4579238..4579534
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