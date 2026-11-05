// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 29455 range:2864463..2864775
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29455: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.combineLatestWith = void 0;
    const n = r(1503), s = r(51078);
    t.combineLatestWith = function(...e2) {
      return (t2) => new s.Observable((r2) => (0, n.combineLatestInit)([t2, ...e2])(r2));
    };
  }