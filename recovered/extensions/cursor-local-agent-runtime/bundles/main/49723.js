// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 49723 range:1473279..1473843
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49723: (e, t, r) => {
    "use strict";
    const n = r(62594);
    e.exports = function(e2, t2) {
      const r2 = n(t2);
      if (null == e2.data && (e2.data = {}), "function" == typeof r2.excerpt) return r2.excerpt(e2, r2);
      const o = e2.data.excerpt_separator || r2.excerpt_separator;
      if (null == o && (false === r2.excerpt || null == r2.excerpt)) return e2;
      const s = "string" == typeof r2.excerpt ? r2.excerpt : o || r2.delimiters[0], i = e2.content.indexOf(s);
      return -1 !== i && (e2.excerpt = e2.content.slice(0, i)), e2;
    };
  }