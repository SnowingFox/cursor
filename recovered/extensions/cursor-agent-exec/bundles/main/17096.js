// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 17096 range:948314..949046
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
17096: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleIterable = void 0;
    const n = r(51078), s = r(35292), o = r(55830);
    t.scheduleIterable = function(e2, t2) {
      return new n.Observable((r2) => {
        let i;
        return (0, o.executeSchedule)(r2, t2, () => {
          i = e2[s.iterator](), (0, o.executeSchedule)(r2, t2, () => {
            let e3, t3;
            try {
              ({ value: e3, done: t3 } = i.next());
            } catch (e4) {
              return void r2.error(e4);
            }
            t3 ? r2.complete() : r2.next(e3);
          }, 0, true);
        }), () => (0, n.isFunction)(i?.return) && i.return();
      });
    };
  }