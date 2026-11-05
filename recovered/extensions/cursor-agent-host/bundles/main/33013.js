// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 33013 range:6587046..6587324
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33013: (e) => {
    "use strict";
    e.exports = function(e2, t, r) {
      if (!e2 || void 0 === e2[t] || null === e2[t]) return r;
      if ("number" != typeof e2[t] || isNaN(e2[t])) throw new TypeError("Limit " + t + " is not a valid number");
      return e2[t];
    };
  }