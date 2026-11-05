// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2151 range:199008..199339
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2151: (e2, t2, r2) => {
    "use strict";
    const n2 = r2(9896), o2 = r2(597);
    e2.exports = function(e3) {
      const t3 = Buffer.alloc(150);
      let r3;
      try {
        r3 = n2.openSync(e3, "r"), n2.readSync(r3, t3, 0, 150, 0), n2.closeSync(r3);
      } catch (e4) {
      }
      return o2(t3.toString());
    };
  }