// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 60409 range:9221749..9222405
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