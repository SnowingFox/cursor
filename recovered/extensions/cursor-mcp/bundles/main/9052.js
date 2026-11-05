// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9052 range:859445..859762
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9052: (e2, t2, r2) => {
    "use strict";
    let n2;
    function o2(e3) {
      n2 = e3;
    }
    r2.d(t2, { KR: () => i2, iO: () => o2 });
    const s2 = { info: () => {
    }, warn: () => {
    }, error: () => {
    }, debug: () => {
    } };
    function i2(e3) {
      return n2?.getLogger(e3) ?? s2;
    }
  }