// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 40213 range:7509293..7509725
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
40213: (e, t, r) => {
    "use strict";
    const n = r(81129), s = r(49727);
    e.exports = function(e2) {
      const t2 = Object.assign({}, e2);
      return t2.delimiters = s.arrayify(t2.delims || t2.delimiters || "---"), 1 === t2.delimiters.length && t2.delimiters.push(t2.delimiters[0]), t2.language = (t2.language || t2.lang || "yaml").toLowerCase(), t2.engines = Object.assign({}, n, t2.parsers, t2.engines), t2;
    };
  }