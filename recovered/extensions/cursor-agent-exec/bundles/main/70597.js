// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 70597 range:6325570..6325869
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70597: (e, t, r) => {
    "use strict";
    const n = r(5336);
    e.exports = (e2 = "") => {
      const t2 = e2.match(n);
      if (!t2) return null;
      const [r2, s] = t2[0].replace(/#! ?/, "").split(" "), o = r2.split("/").pop();
      return "env" === o ? s : s ? `${o} ${s}` : o;
    };
  }