// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 93424 range:7770017..7770361
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93424: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.raceWith = void 0;
    const n = r(20240), o = r(51078), s = r(44896);
    t.raceWith = function(...e2) {
      return e2.length ? (t2) => new o.Observable((r2) => {
        (0, n.raceInit)([t2, ...e2])(r2);
      }) : s.identity;
    };
  }