// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6928 range:3768726..3769228
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6928: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { X: () => o2, s: () => s2 });
    var n2 = r2(8032);
    function s2(t3) {
      const e3 = n2.C[t3];
      return "string" != typeof e3 ? t3.toString() : e3[0].toLowerCase() + e3.substring(1).replace(/[A-Z]/g, (t4) => "_" + t4.toLowerCase());
    }
    let i2;
    function o2(t3) {
      if (!i2) {
        i2 = {};
        for (const t4 of Object.values(n2.C)) "string" != typeof t4 && (i2[s2(t4)] = t4);
      }
      return i2[t3];
    }
  }