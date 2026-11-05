// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 60409 range:1881345..1882001
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60409: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.TimeInterval = t.timeInterval = void 0;
    const n = r(2665), o = r(51078);
    t.timeInterval = function(e2 = n.asyncScheduler) {
      return (t2) => new o.Observable((r2) => {
        let n2 = e2.now();
        t2.subscribe((0, o.operate)({ destination: r2, next: (t3) => {
          const o2 = e2.now(), i = o2 - n2;
          n2 = o2, r2.next(new s(t3, i));
        } }));
      });
    };
    class s {
      value;
      interval;
      constructor(e2, t2) {
        this.value = e2, this.interval = t2;
      }
    }
    t.TimeInterval = s;
  }