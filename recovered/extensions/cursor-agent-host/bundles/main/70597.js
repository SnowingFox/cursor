// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 70597 range:10947869..10948168
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