// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 20711 range:1016279..1016955
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20711: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.switchMap = void 0;
    const n = r(51078);
    t.switchMap = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = null, o = 0, i = false;
        const a = () => i && !s && r2.complete();
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          s?.unsubscribe();
          const i2 = o++;
          (0, n.from)(e2(t3, i2)).subscribe(s = (0, n.operate)({ destination: r2, complete: () => {
            s = null, a();
          } }));
        }, complete: () => {
          i = true, a();
        } }));
      });
    };
  }