// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 1261 range:21338..21668
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1261: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mergeWith = void 0;
    const n = r(51078), s = r(6102);
    t.mergeWith = function(...e2) {
      return (t2) => new n.Observable((r2) => {
        (0, s.mergeAll)()((0, n.from)([t2, ...e2])).subscribe(r2);
      });
    };
  }