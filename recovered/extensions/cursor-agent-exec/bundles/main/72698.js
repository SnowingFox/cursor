// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 72698 range:6365200..6366070
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72698: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.audit = void 0;
    const n = r(51078);
    t.audit = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = false, o = null, i = null, a = false;
        const c = () => {
          if (i?.unsubscribe(), i = null, s) {
            s = false;
            const e3 = o;
            o = null, r2.next(e3);
          }
          a && r2.complete();
        }, l = () => {
          i = null, a && r2.complete();
        };
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          s = true, o = t3, i || (0, n.from)(e2(t3)).subscribe(i = (0, n.operate)({ destination: r2, next: c, complete: l }));
        }, complete: () => {
          a = true, (!s || !i || i.closed) && r2.complete();
        } }));
      });
    };
  }