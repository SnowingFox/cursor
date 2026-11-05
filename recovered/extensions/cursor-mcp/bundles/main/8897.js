// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8897 range:854634..855114
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8897: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.merge = void 0;
    const n2 = r2(1078), o2 = r2(6102), s2 = r2(744), i2 = r2(5619), a2 = r2(9880);
    t2.merge = function(...e3) {
      const t3 = (0, i2.popScheduler)(e3), r3 = (0, i2.popNumber)(e3, 1 / 0), c = e3;
      return c.length ? 1 === c.length ? (0, n2.from)(c[0]) : (0, o2.mergeAll)(r3)(t3 ? (0, a2.scheduled)(c, t3) : (0, n2.from)(c)) : s2.EMPTY;
    };
  }