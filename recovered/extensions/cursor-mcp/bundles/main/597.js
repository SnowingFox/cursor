// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 597 range:46346..46658
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
597: (e2, t2, r2) => {
    "use strict";
    const n2 = r2(5336);
    e2.exports = (e3 = "") => {
      const t3 = e3.match(n2);
      if (!t3) return null;
      const [r3, o2] = t3[0].replace(/#! ?/, "").split(" "), s2 = r3.split("/").pop();
      return "env" === s2 ? o2 : o2 ? `${s2} ${o2}` : s2;
    };
  }