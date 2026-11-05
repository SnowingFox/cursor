// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 34011 range:1034301..1034772
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34011: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.fromEventPattern = void 0;
    const n = r(51078), o = r(65683);
    t.fromEventPattern = function e2(t2, r2, s) {
      return s ? (0, o.mapOneOrManyArgs)(s)(e2(t2, r2)) : new n.Observable((e3) => {
        const o2 = (...t3) => e3.next(1 === t3.length ? t3[0] : t3), s2 = t2(o2);
        return (0, n.isFunction)(r2) ? () => r2(o2, s2) : void 0;
      });
    };
  }