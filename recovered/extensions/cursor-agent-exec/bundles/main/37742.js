// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 37742 range:3019651..3020137
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37742: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.take = void 0;
    const n = r(744), s = r(51078);
    t.take = function(e2) {
      return e2 <= 0 ? () => n.EMPTY : (t2) => new s.Observable((r2) => {
        let n2 = 0;
        const o = (0, s.operate)({ destination: r2, next: (t3) => {
          ++n2 < e2 ? r2.next(t3) : (o.unsubscribe(), r2.next(t3), r2.complete());
        } });
        t2.subscribe(o);
      });
    };
  }