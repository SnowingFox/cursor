// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 58254 range:4672017..4672279
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