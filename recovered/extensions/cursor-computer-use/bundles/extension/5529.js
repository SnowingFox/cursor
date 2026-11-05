// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5529 range:475612..475900
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5529: (e2) => {
    "use strict";
    e2.exports = function(e3, n2, t2) {
      if (!e3 || void 0 === e3[n2] || null === e3[n2]) return t2;
      if ("number" != typeof e3[n2] || isNaN(e3[n2])) throw new TypeError("Limit " + n2 + " is not a valid number");
      return e3[n2];
    };
  }