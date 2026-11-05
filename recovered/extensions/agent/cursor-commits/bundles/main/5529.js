// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5529 range:444704..444992
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5529: (e2) => {
    "use strict";
    e2.exports = function(e3, n2, a2) {
      if (!e3 || void 0 === e3[n2] || null === e3[n2]) return a2;
      if ("number" != typeof e3[n2] || isNaN(e3[n2])) throw new TypeError("Limit " + n2 + " is not a valid number");
      return e3[n2];
    };
  }