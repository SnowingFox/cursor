// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 5529 range:751099..751387
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5529: (e2) => {
    "use strict";
    e2.exports = function(e3, a2, n2) {
      if (!e3 || void 0 === e3[a2] || null === e3[a2]) return n2;
      if ("number" != typeof e3[a2] || isNaN(e3[a2])) throw new TypeError("Limit " + a2 + " is not a valid number");
      return e3[a2];
    };
  }