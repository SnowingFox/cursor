// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 71096 range:6334637..6335282
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
71096: (e, t, r) => {
    "use strict";
    const n = r(58334), s = r(64211), o = r(49727);
    e.exports = function(e2) {
      return "object" !== n(e2) && (e2 = { content: e2 }), "object" !== n(e2.data) && (e2.data = {}), e2.contents && null == e2.content && (e2.content = e2.contents), o.define(e2, "orig", o.toBuffer(e2.content)), o.define(e2, "language", e2.language || ""), o.define(e2, "matter", e2.matter || ""), o.define(e2, "stringify", function(t2, r2) {
        return r2 && r2.language && (e2.language = r2.language), s(e2, t2, r2);
      }), e2.content = o.toString(e2.content), e2.isEmpty = false, e2.excerpt = "", e2;
    };
  }