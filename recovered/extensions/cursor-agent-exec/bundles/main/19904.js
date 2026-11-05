// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 19904 range:995838..996335
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
19904: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scanInternals = void 0;
    const n = r(51078);
    t.scanInternals = function(e2, t2, r2, s, o, i, a) {
      let c = r2, l = t2, u = 0;
      i.subscribe((0, n.operate)({ destination: a, next: (t3) => {
        const r3 = u++;
        l = c ? e2(l, t3, r3) : (c = true, t3), s && a.next(l);
      }, complete: o ? () => {
        c && a.next(l), a.complete();
      } : void 0 }));
    };
  }