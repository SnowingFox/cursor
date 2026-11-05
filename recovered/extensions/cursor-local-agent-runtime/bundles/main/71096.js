// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 71096 range:2285069..2285714
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
71096: (e, t, r) => {
    "use strict";
    const n = r(58334), o = r(64211), s = r(49727);
    e.exports = function(e2) {
      return "object" !== n(e2) && (e2 = { content: e2 }), "object" !== n(e2.data) && (e2.data = {}), e2.contents && null == e2.content && (e2.content = e2.contents), s.define(e2, "orig", s.toBuffer(e2.content)), s.define(e2, "language", e2.language || ""), s.define(e2, "matter", e2.matter || ""), s.define(e2, "stringify", function(t2, r2) {
        return r2 && r2.language && (e2.language = r2.language), o(e2, t2, r2);
      }), e2.content = s.toString(e2.content), e2.isEmpty = false, e2.excerpt = "", e2;
    };
  }