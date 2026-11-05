// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 34333 range:6620923..6621224
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34333: (e, t, r) => {
    "use strict";
    const n = r(3482), s = r(40213);
    e.exports = function(e2, t2, r2) {
      const o = s(r2), i = n(e2, o);
      if ("function" != typeof i.parse) throw new TypeError('expected "' + e2 + '.parse" to be a function');
      return i.parse(t2, o);
    };
  }