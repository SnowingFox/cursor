// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 31878 range:5127992..5128349
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31878: (e, t, r) => {
    "use strict";
    const n = r(77378);
    e.exports = function({ maxRedirections: e2 }) {
      return (t2) => function(r2, s) {
        const { maxRedirections: o = e2 } = r2;
        if (!o) return t2(r2, s);
        const i = new n(t2, o, r2, s);
        return r2 = { ...r2, maxRedirections: 0 }, t2(r2, i);
      };
    };
  }