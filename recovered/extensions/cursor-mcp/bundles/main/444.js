// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 444 range:26893..27624
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
444: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.timer = void 0;
    const n2 = r2(1078), o2 = r2(2665), s2 = r2(2901), i2 = r2(7842), a2 = r2(5830);
    t2.timer = function(e3 = 0, t3, r3 = o2.asyncScheduler) {
      let c = -1;
      return null != t3 && ((0, s2.isScheduler)(t3) ? r3 = t3 : c = t3), new n2.Observable((t4) => {
        let n3 = (0, i2.isValidDate)(e3) ? +e3 - r3.now() : e3;
        n3 < 0 && (n3 = 0);
        let o3 = 0;
        return (0, a2.executeSchedule)(t4, r3, () => {
          t4.next(o3++), 0 <= c ? (0, a2.executeSchedule)(t4, r3, () => {
            t4.next(o3++);
          }, c, true) : t4.complete();
        }, n3);
      });
    };
  }