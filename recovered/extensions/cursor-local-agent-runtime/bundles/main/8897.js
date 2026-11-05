// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 8897 range:271395..271855
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8897: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.merge = void 0;
    const n = r(51078), o = r(6102), s = r(744), i = r(25619), a = r(69880);
    t.merge = function(...e2) {
      const t2 = (0, i.popScheduler)(e2), r2 = (0, i.popNumber)(e2, 1 / 0), l = e2;
      return l.length ? 1 === l.length ? (0, n.from)(l[0]) : (0, o.mergeAll)(r2)(t2 ? (0, a.scheduled)(l, t2) : (0, n.from)(l)) : s.EMPTY;
    };
  }