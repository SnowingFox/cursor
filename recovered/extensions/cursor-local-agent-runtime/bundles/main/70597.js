// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 70597 range:2276002..2276301
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70597: (e, t, r) => {
    "use strict";
    const n = r(5336);
    e.exports = (e2 = "") => {
      const t2 = e2.match(n);
      if (!t2) return null;
      const [r2, o] = t2[0].replace(/#! ?/, "").split(" "), s = r2.split("/").pop();
      return "env" === s ? o : o ? `${s} ${o}` : s;
    };
  }