// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 17096 range:537300..538032
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
17096: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleIterable = void 0;
    const n = r(51078), o = r(35292), s = r(55830);
    t.scheduleIterable = function(e2, t2) {
      return new n.Observable((r2) => {
        let i;
        return (0, s.executeSchedule)(r2, t2, () => {
          i = e2[o.iterator](), (0, s.executeSchedule)(r2, t2, () => {
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