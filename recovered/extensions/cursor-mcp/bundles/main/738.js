// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 738 range:50730..51227
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
738: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { NY: () => s2, X5: () => i2, z9: () => o2 });
    var n2 = r2(1771);
    function o2(e3, t3) {
      return true !== t3?.[n2.TI] ? e3 : { ...e3, [n2.TI]: true };
    }
    function s2(e3) {
      return void 0 !== e3 && (true !== e3.destructiveHint && true === e3.readOnlyHint);
    }
    function i2(e3) {
      return s2(e3) ? "declared_read" : false === e3?.readOnlyHint || true === e3?.destructiveHint ? "write" : "unannotated";
    }
  }