// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 76409 range:6484544..6484896
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76409: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.concat = void 0;
    const n = r(51078), s = r(3006), o = r(25619), i = r(69880);
    t.concat = function(...e2) {
      const t2 = (0, o.popScheduler)(e2);
      return (0, s.concatAll)()(t2 ? (0, i.scheduled)(e2, t2) : (0, n.from)(e2));
    };
  }