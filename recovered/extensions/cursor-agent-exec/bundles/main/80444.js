// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 80444 range:10755164..10755879
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80444: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.timer = void 0;
    const n = r(51078), s = r(2665), o = r(82901), i = r(97842), a = r(55830);
    t.timer = function(e2 = 0, t2, r2 = s.asyncScheduler) {
      let c = -1;
      return null != t2 && ((0, o.isScheduler)(t2) ? r2 = t2 : c = t2), new n.Observable((t3) => {
        let n2 = (0, i.isValidDate)(e2) ? +e2 - r2.now() : e2;
        n2 < 0 && (n2 = 0);
        let s2 = 0;
        return (0, a.executeSchedule)(t3, r2, () => {
          t3.next(s2++), 0 <= c ? (0, a.executeSchedule)(t3, r2, () => {
            t3.next(s2++);
          }, c, true) : t3.complete();
        }, n2);
      });
    };
  }