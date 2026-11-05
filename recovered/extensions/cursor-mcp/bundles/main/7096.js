// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7096 range:593762..594512
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7096: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.scheduleIterable = void 0;
    const n2 = r2(1078), o2 = r2(5292), s2 = r2(5830);
    t2.scheduleIterable = function(e3, t3) {
      return new n2.Observable((r3) => {
        let i2;
        return (0, s2.executeSchedule)(r3, t3, () => {
          i2 = e3[o2.iterator](), (0, s2.executeSchedule)(r3, t3, () => {
            let e4, t4;
            try {
              ({ value: e4, done: t4 } = i2.next());
            } catch (e5) {
              return void r3.error(e5);
            }
            t4 ? r3.complete() : r3.next(e4);
          }, 0, true);
        }), () => (0, n2.isFunction)(i2?.return) && i2.return();
      });
    };
  }