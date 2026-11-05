// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 84234 range:7504133..7504437
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