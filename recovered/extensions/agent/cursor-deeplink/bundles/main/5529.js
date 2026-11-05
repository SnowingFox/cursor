// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5529 range:548855..549143
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5529: (e2) => {
    "use strict";
    e2.exports = function(e3, t2, A2) {
      if (!e3 || void 0 === e3[t2] || null === e3[t2]) return A2;
      if ("number" != typeof e3[t2] || isNaN(e3[t2])) throw new TypeError("Limit " + t2 + " is not a valid number");
      return e3[t2];
    };
  }