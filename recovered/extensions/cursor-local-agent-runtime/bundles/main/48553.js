// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 48553 range:1446307..1446781
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48553: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleArray = void 0;
    const n = r(51078), o = r(55830);
    t.scheduleArray = function(e2, t2) {
      return new n.Observable((r2) => {
        let n2 = 0;
        const s = () => {
          n2 === e2.length ? r2.complete() : (r2.next(e2[n2++]), (0, o.executeSchedule)(r2, t2, s));
        };
        return (0, o.executeSchedule)(r2, t2, s);
      });
    };
  }