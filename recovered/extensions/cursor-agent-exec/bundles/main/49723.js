// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 49723 range:3559879..3560443
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49723: (e, t, r) => {
    "use strict";
    const n = r(40213);
    e.exports = function(e2, t2) {
      const r2 = n(t2);
      if (null == e2.data && (e2.data = {}), "function" == typeof r2.excerpt) return r2.excerpt(e2, r2);
      const s = e2.data.excerpt_separator || r2.excerpt_separator;
      if (null == s && (false === r2.excerpt || null == r2.excerpt)) return e2;
      const o = "string" == typeof r2.excerpt ? r2.excerpt : s || r2.delimiters[0], i = e2.content.indexOf(o);
      return -1 !== i && (e2.excerpt = e2.content.slice(0, i)), e2;
    };
  }