// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 62594 range:1921381..1921813
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
62594: (e, t, r) => {
    "use strict";
    const n = r(81129), o = r(49727);
    e.exports = function(e2) {
      const t2 = Object.assign({}, e2);
      return t2.delimiters = o.arrayify(t2.delims || t2.delimiters || "---"), 1 === t2.delimiters.length && t2.delimiters.push(t2.delimiters[0]), t2.language = (t2.language || t2.lang || "yaml").toLowerCase(), t2.engines = Object.assign({}, n, t2.parsers, t2.engines), t2;
    };
  }