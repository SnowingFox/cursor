// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7837 range:703784..704107
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7837: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.min = void 0;
    const n2 = r2(8339), o2 = r2(1078);
    t2.min = function(e3) {
      return (0, n2.reduce)((0, o2.isFunction)(e3) ? (t3, r3) => e3(t3, r3) < 0 ? t3 : r3 : (e4, t3) => e4 < t3 ? e4 : t3);
    };
  }