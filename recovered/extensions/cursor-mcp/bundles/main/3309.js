// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3309 range:260214..260475
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3309: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { C: () => s2 });
    var n2 = r2(496);
    const o2 = 3e5;
    function s2(e3) {
      const t3 = (0, n2.v)("inlineReconnectCooldownMs", e3) ?? o2;
      return Math.max(1e3, Math.min(t3, 36e5));
    }
  }