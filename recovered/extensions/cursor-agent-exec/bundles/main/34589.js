// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 34589 range:2931040..2931435
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34589: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.using = void 0;
    const n = r(51078), s = r(744);
    t.using = function(e2, t2) {
      return new n.Observable((r2) => {
        const o = e2(), i = t2(o);
        return (i ? (0, n.from)(i) : s.EMPTY).subscribe(r2), () => {
          o && o.unsubscribe();
        };
      });
    };
  }