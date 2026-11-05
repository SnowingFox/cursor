// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 48553 range:3514610..3515084
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48553: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleArray = void 0;
    const n = r(51078), s = r(55830);
    t.scheduleArray = function(e2, t2) {
      return new n.Observable((r2) => {
        let n2 = 0;
        const o = () => {
          n2 === e2.length ? r2.complete() : (r2.next(e2[n2++]), (0, s.executeSchedule)(r2, t2, o));
        };
        return (0, s.executeSchedule)(r2, t2, o);
      });
    };
  }