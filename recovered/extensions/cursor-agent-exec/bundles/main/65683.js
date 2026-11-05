// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 65683 range:6026964..6027306
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65683: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mapOneOrManyArgs = void 0;
    const n = r(38143), { isArray: s } = Array;
    t.mapOneOrManyArgs = function(e2) {
      return (0, n.map)((t2) => (function(e3, t3) {
        return s(t3) ? e3(...t3) : e3(t3);
      })(e2, t2));
    };
  }