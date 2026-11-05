// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 17837 range:949048..949362
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
17837: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.min = void 0;
    const n = r(78339), s = r(51078);
    t.min = function(e2) {
      return (0, n.reduce)((0, s.isFunction)(e2) ? (t2, r2) => e2(t2, r2) < 0 ? t2 : r2 : (e3, t2) => e3 < t2 ? e3 : t2);
    };
  }