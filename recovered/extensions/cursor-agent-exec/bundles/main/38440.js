// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 38440 range:3093180..3093623
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38440: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mergeScan = void 0;
    const n = r(51078), s = r(59935);
    t.mergeScan = function(e2, t2, r2 = 1 / 0) {
      return (o) => new n.Observable((n2) => {
        let i = t2;
        return (0, s.mergeInternals)(o, n2, (t3, r3) => e2(i, t3, r3), r2, (e3) => {
          i = e3;
        }, false, void 0, () => i = null);
      });
    };
  }