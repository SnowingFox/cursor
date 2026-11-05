// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 47662 range:1417932..1418410
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47662: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.delayWhen = void 0;
    const n = r(76409), o = r(37742), s = r(16426), i = r(51207), a = r(87996), l = r(38143);
    t.delayWhen = function e2(t2, r2) {
      return r2 ? (i2) => (0, n.concat)((0, a.rx)(r2, (0, o.take)(1), (0, s.ignoreElements)()), (0, a.rx)(i2, e2(t2))) : (0, i.mergeMap)((e3, r3) => (0, a.rx)(t2(e3, r3), (0, o.take)(1), (0, l.map)(() => e3)));
    };
  }