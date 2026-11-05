// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 60409 range:4735771..4736427
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60409: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.TimeInterval = t.timeInterval = void 0;
    const n = r(2665), s = r(51078);
    t.timeInterval = function(e2 = n.asyncScheduler) {
      return (t2) => new s.Observable((r2) => {
        let n2 = e2.now();
        t2.subscribe((0, s.operate)({ destination: r2, next: (t3) => {
          const s2 = e2.now(), i = s2 - n2;
          n2 = s2, r2.next(new o(t3, i));
        } }));
      });
    };
    class o {
      value;
      interval;
      constructor(e2, t2) {
        this.value = e2, this.interval = t2;
      }
    }
    t.TimeInterval = o;
  }