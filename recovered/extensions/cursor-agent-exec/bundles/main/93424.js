// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 93424 range:11305865..11306209
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93424: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.raceWith = void 0;
    const n = r(20240), s = r(51078), o = r(44896);
    t.raceWith = function(...e2) {
      return e2.length ? (t2) => new s.Observable((r2) => {
        (0, n.raceInit)([t2, ...e2])(r2);
      }) : o.identity;
    };
  }