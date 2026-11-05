// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1334 range:163260..163567
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1334: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.sampleTime = void 0;
    const n2 = r2(2665), o2 = r2(2227), s2 = r2(4952);
    t2.sampleTime = function(e3, t3 = n2.asyncScheduler) {
      return (0, o2.sample)((0, s2.interval)(e3, t3));
    };
  }