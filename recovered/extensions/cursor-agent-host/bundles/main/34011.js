// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 34011 range:6608006..6608477
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34011: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.fromEventPattern = void 0;
    const n = r(51078), s = r(65683);
    t.fromEventPattern = function e2(t2, r2, o) {
      return o ? (0, s.mapOneOrManyArgs)(o)(e2(t2, r2)) : new n.Observable((e3) => {
        const s2 = (...t3) => e3.next(1 === t3.length ? t3[0] : t3), o2 = t2(s2);
        return (0, n.isFunction)(r2) ? () => r2(s2, o2) : void 0;
      });
    };
  }