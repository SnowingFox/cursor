// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 32151 range:2905170..2905493
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32151: (e, t, r) => {
    "use strict";
    const n = r(79896), s = r(70597);
    e.exports = function(e2) {
      const t2 = Buffer.alloc(150);
      let r2;
      try {
        r2 = n.openSync(e2, "r"), n.readSync(r2, t2, 0, 150, 0), n.closeSync(r2);
      } catch (e3) {
      }
      return s(t2.toString());
    };
  }