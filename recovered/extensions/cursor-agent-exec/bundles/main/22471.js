// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 22471 range:1054703..1055042
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22471: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.toArray = void 0;
    const n = r(78339), s = r(51078), o = (e2, t2) => (e2.push(t2), e2);
    t.toArray = function() {
      return (e2) => new s.Observable((t2) => {
        (0, n.reduce)(o, [])(e2).subscribe(t2);
      });
    };
  }