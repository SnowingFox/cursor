// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5683 range:438916..439267
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5683: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.mapOneOrManyArgs = void 0;
    const n2 = r2(8143), { isArray: o2 } = Array;
    t2.mapOneOrManyArgs = function(e3) {
      return (0, n2.map)((t3) => (function(e4, t4) {
        return o2(t4) ? e4(...t4) : e4(t4);
      })(e3, t3));
    };
  }