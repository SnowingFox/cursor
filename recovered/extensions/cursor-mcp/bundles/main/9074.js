// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9074 range:859764..860087
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9074: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.delay = void 0;
    const n2 = r2(2665), o2 = r2(7662), s2 = r2(444);
    t2.delay = function(e3, t3 = n2.asyncScheduler) {
      const r3 = (0, s2.timer)(e3, t3);
      return (0, o2.delayWhen)(() => r3);
    };
  }