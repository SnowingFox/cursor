// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4952 range:324766..325062
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4952: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.interval = void 0;
    const n2 = r2(2665), o2 = r2(444);
    t2.interval = function(e3 = 0, t3 = n2.asyncScheduler) {
      return e3 < 0 && (e3 = 0), (0, o2.timer)(e3, e3, t3);
    };
  }