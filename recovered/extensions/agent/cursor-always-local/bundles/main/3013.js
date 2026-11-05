// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3013 range:906680..906968
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3013: (t2) => {
    "use strict";
    t2.exports = function(t3, e2, r2) {
      if (!t3 || void 0 === t3[e2] || null === t3[e2]) return r2;
      if ("number" != typeof t3[e2] || isNaN(t3[e2])) throw new TypeError("Limit " + e2 + " is not a valid number");
      return t3[e2];
    };
  }