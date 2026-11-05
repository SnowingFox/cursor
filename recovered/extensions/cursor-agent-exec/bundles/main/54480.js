// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 54480 range:4579855..4580193
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54480: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scan = void 0;
    const n = r(51078), s = r(19904);
    t.scan = function(e2, t2) {
      const r2 = arguments.length >= 2;
      return (o) => new n.Observable((n2) => (0, s.scanInternals)(e2, t2, r2, true, false, o, n2));
    };
  }