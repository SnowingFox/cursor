// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 32151 range:1018475..1018798
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32151: (e, t, r) => {
    "use strict";
    const n = r(79896), o = r(70597);
    e.exports = function(e2) {
      const t2 = Buffer.alloc(150);
      let r2;
      try {
        r2 = n.openSync(e2, "r"), n.readSync(r2, t2, 0, 150, 0), n.closeSync(r2);
      } catch (e3) {
      }
      return o(t2.toString());
    };
  }