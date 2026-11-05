// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8553 range:778101..778588
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8553: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.scheduleArray = void 0;
    const n2 = r2(1078), o2 = r2(5830);
    t2.scheduleArray = function(e3, t3) {
      return new n2.Observable((r3) => {
        let n3 = 0;
        const s2 = () => {
          n3 === e3.length ? r3.complete() : (r3.next(e3[n3++]), (0, o2.executeSchedule)(r3, t3, s2));
        };
        return (0, o2.executeSchedule)(r3, t3, s2);
      });
    };
  }