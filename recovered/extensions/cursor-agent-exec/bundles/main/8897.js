// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 8897 range:655416..655876
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8897: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.merge = void 0;
    const n = r(51078), s = r(6102), o = r(744), i = r(25619), a = r(69880);
    t.merge = function(...e2) {
      const t2 = (0, i.popScheduler)(e2), r2 = (0, i.popNumber)(e2, 1 / 0), c = e2;
      return c.length ? 1 === c.length ? (0, n.from)(c[0]) : (0, s.mergeAll)(r2)(t2 ? (0, a.scheduled)(c, t2) : (0, n.from)(c)) : o.EMPTY;
    };
  }