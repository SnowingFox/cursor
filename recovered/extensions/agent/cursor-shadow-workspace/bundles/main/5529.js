// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5529 range:444286..444574
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5529: (e2) => {
    "use strict";
    e2.exports = function(e3, A2, t2) {
      if (!e3 || void 0 === e3[A2] || null === e3[A2]) return t2;
      if ("number" != typeof e3[A2] || isNaN(e3[A2])) throw new TypeError("Limit " + A2 + " is not a valid number");
      return e3[A2];
    };
  }