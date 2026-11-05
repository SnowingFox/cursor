// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2573 range:213508..213872
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2573: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { NO: () => i2, eu: () => s2, yw: () => o2 });
    var n2 = r2(496);
    const o2 = 3e5;
    function s2(e3) {
      const t3 = (0, n2.v)("focusRetryCooldownMs", e3) ?? o2;
      return Math.max(o2, Math.min(t3, 36e5));
    }
    function i2(e3, t3, r3) {
      return void 0 !== t3 && e3 - t3 < r3;
    }
  }