// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3398 range:260736..261139
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3398: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.joinAllInternals = void 0;
    const n2 = r2(4896), o2 = r2(5683), s2 = r2(7410), i2 = r2(1207), a2 = r2(2471);
    t2.joinAllInternals = function(e3, t3) {
      return (0, s2.pipe)((0, a2.toArray)(), (0, i2.mergeMap)((t4) => e3(t4)), t3 ? (0, o2.mapOneOrManyArgs)(t3) : n2.identity);
    };
  }