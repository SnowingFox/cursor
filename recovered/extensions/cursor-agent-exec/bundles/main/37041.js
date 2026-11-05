// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 37041 range:3004595..3005211
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
37041: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.exhaustMap = void 0;
    const n = r(51078);
    t.exhaustMap = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = 0, o = null, i = false;
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          o || (o = (0, n.operate)({ destination: r2, complete: () => {
            o = null, i && r2.complete();
          } }), (0, n.from)(e2(t3, s++)).subscribe(o));
        }, complete: () => {
          i = true, !o && r2.complete();
        } }));
      });
    };
  }