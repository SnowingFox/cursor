// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 84234 range:12000628..12000932
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