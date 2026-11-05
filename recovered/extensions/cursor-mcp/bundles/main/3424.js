// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3424 range:271325..271679
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3424: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.raceWith = void 0;
    const n2 = r2(240), o2 = r2(1078), s2 = r2(4896);
    t2.raceWith = function(...e3) {
      return e3.length ? (t3) => new o2.Observable((r3) => {
        (0, n2.raceInit)([t3, ...e3])(r3);
      }) : s2.identity;
    };
  }