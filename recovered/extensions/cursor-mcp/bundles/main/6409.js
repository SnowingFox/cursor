// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6409 range:474189..474555
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6409: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.concat = void 0;
    const n2 = r2(1078), o2 = r2(3006), s2 = r2(5619), i2 = r2(9880);
    t2.concat = function(...e3) {
      const t3 = (0, s2.popScheduler)(e3);
      return (0, o2.concatAll)()(t3 ? (0, i2.scheduled)(e3, t3) : (0, n2.from)(e3));
    };
  }