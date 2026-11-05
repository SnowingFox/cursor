// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 74179 range:6408759..6409363
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74179: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.first = void 0;
    const n = r(51078), s = r(50231);
    t.first = function(e2, t2) {
      const r2 = arguments.length >= 2;
      return (o) => new n.Observable((i) => {
        let a = 0;
        const c = (0, n.operate)({ destination: i, next: (t3) => {
          (!e2 || e2(t3, a++, o)) && (c.unsubscribe(), i.next(t3), i.complete());
        }, complete: () => {
          r2 ? (i.next(t2), i.complete()) : i.error(new s.EmptyError());
        } });
        o.subscribe(c);
      });
    };
  }