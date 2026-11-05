// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 96352 range:11348669..11349355
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96352: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.range = void 0;
    const n = r(51078), s = r(744), o = r(55830);
    t.range = function(e2, t2, r2) {
      if (null == t2 && (t2 = e2, e2 = 0), t2 <= 0) return s.EMPTY;
      const i = t2 + e2;
      return new n.Observable(r2 ? (t3) => {
        let n2 = e2;
        const s2 = () => {
          n2 < i ? (t3.next(n2++), t3.closed || (0, o.executeSchedule)(t3, r2, s2)) : t3.complete();
        };
        (0, o.executeSchedule)(t3, r2, s2);
      } : (t3) => {
        let r3 = e2;
        for (; r3 < i && !t3.closed; ) t3.next(r3++);
        t3.complete();
      });
    };
  }