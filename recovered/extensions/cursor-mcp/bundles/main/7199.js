// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7199 range:604077..604383
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7199: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.auditTime = void 0;
    const n2 = r2(2665), o2 = r2(2698), s2 = r2(444);
    t2.auditTime = function(e3, t3 = n2.asyncScheduler) {
      return (0, o2.audit)(() => (0, s2.timer)(e3, t3));
    };
  }