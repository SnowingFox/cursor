// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 80444 range:7360176..7360891
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80444: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.timer = void 0;
    const n = r(51078), o = r(2665), s = r(82901), i = r(97842), a = r(55830);
    t.timer = function(e2 = 0, t2, r2 = o.asyncScheduler) {
      let l = -1;
      return null != t2 && ((0, s.isScheduler)(t2) ? r2 = t2 : l = t2), new n.Observable((t3) => {
        let n2 = (0, i.isValidDate)(e2) ? +e2 - r2.now() : e2;
        n2 < 0 && (n2 = 0);
        let o2 = 0;
        return (0, a.executeSchedule)(t3, r2, () => {
          t3.next(o2++), 0 <= l ? (0, a.executeSchedule)(t3, r2, () => {
            t3.next(o2++);
          }, l, true) : t3.complete();
        }, n2);
      });
    };
  }