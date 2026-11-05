// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 84234 range:10931687..10931991
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84234: (e) => {
    "use strict";
    const t = (e2 = {}) => {
      const t2 = e2.env || process.env;
      return "win32" !== (e2.platform || process.platform) ? "PATH" : Object.keys(t2).reverse().find((e3) => "PATH" === e3.toUpperCase()) || "Path";
    };
    e.exports = t, e.exports.default = t;
  }