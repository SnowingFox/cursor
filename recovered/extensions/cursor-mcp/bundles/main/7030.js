// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7030 range:588257..588828
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7030: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { Dk: () => s2, Vi: () => i2 });
    var n2 = r2(496);
    const o2 = 5;
    function s2(e3) {
      if (!e3.sawSession404) return { nextCount: 0, shouldTombstone: false };
      const t3 = e3.currentCount + 1;
      return t3 >= e3.threshold ? { nextCount: 0, shouldTombstone: true } : { nextCount: t3, shouldTombstone: false };
    }
    function i2(e3) {
      const t3 = (0, n2.v)("streamableHttpSession404TombstoneThreshold", e3) ?? o2, r3 = Math.trunc(t3);
      return Math.max(1, Math.min(r3, 50));
    }
  }