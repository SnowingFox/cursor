// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 409 range:25407..26080
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
409: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.TimeInterval = t2.timeInterval = void 0;
    const n2 = r2(2665), o2 = r2(1078);
    t2.timeInterval = function(e3 = n2.asyncScheduler) {
      return (t3) => new o2.Observable((r3) => {
        let n3 = e3.now();
        t3.subscribe((0, o2.operate)({ destination: r3, next: (t4) => {
          const o3 = e3.now(), i2 = o3 - n3;
          n3 = o3, r3.next(new s2(t4, i2));
        } }));
      });
    };
    class s2 {
      value;
      interval;
      constructor(e3, t3) {
        this.value = e3, this.interval = t3;
      }
    }
    t2.TimeInterval = s2;
  }