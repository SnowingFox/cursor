// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 13786 range:882352..883025
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13786: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.takeLast = void 0;
    const n = r(744), s = r(51078);
    t.takeLast = function(e2) {
      return e2 <= 0 ? () => n.EMPTY : (t2) => new s.Observable((r2) => {
        let n2 = new Array(e2), o = 0;
        t2.subscribe((0, s.operate)({ destination: r2, next: (t3) => {
          n2[o++ % e2] = t3;
        }, complete: () => {
          const t3 = e2 <= o ? o : 0, s2 = Math.min(e2, o);
          for (let o2 = 0; o2 < s2; o2++) r2.next(n2[(t3 + o2) % e2]);
          r2.complete();
        }, finalize: () => {
          n2 = null;
        } }));
      });
    };
  }