// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4234 range:304656..304965
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4234: (e2) => {
    "use strict";
    const t2 = (e3 = {}) => {
      const t3 = e3.env || process.env;
      return "win32" !== (e3.platform || process.platform) ? "PATH" : Object.keys(t3).reverse().find((e4) => "PATH" === e4.toUpperCase()) || "Path";
    };
    e2.exports = t2, e2.exports.default = t2;
  }