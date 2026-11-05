// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5320 range:387006..387350
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5320: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.throttleTime = void 0;
    const n2 = r2(2665), o2 = r2(8733), s2 = r2(444);
    t2.throttleTime = function(e3, t3 = n2.asyncScheduler, r3) {
      const i2 = (0, s2.timer)(e3, t3);
      return (0, o2.throttle)(() => i2, r3);
    };
  }