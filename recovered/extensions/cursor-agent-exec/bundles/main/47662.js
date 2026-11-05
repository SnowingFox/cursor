// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 47662 range:3485372..3485850
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47662: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.delayWhen = void 0;
    const n = r(76409), s = r(37742), o = r(16426), i = r(51207), a = r(87996), c = r(38143);
    t.delayWhen = function e2(t2, r2) {
      return r2 ? (i2) => (0, n.concat)((0, a.rx)(r2, (0, s.take)(1), (0, o.ignoreElements)()), (0, a.rx)(i2, e2(t2))) : (0, i.mergeMap)((e3, r3) => (0, a.rx)(t2(e3, r3), (0, s.take)(1), (0, c.map)(() => e3)));
    };
  }