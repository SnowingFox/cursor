// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 96352 range:7812027..7812713
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96352: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.range = void 0;
    const n = r(51078), o = r(744), s = r(55830);
    t.range = function(e2, t2, r2) {
      if (null == t2 && (t2 = e2, e2 = 0), t2 <= 0) return o.EMPTY;
      const i = t2 + e2;
      return new n.Observable(r2 ? (t3) => {
        let n2 = e2;
        const o2 = () => {
          n2 < i ? (t3.next(n2++), t3.closed || (0, s.executeSchedule)(t3, r2, o2)) : t3.complete();
        };
        (0, s.executeSchedule)(t3, r2, o2);
      } : (t3) => {
        let r3 = e2;
        for (; r3 < i && !t3.closed; ) t3.next(r3++);
        t3.complete();
      });
    };
  }