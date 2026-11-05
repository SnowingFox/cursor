// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 70890 range:6332396..6334635
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70890: (e, t, r) => {
    "use strict";
    const n = r(79896), s = r(44836), o = r(40213), i = r(64211), a = r(49723), c = r(81129), l = r(71096), u = r(34333), d = r(49727);
    function p(e2, t2) {
      if ("" === e2) return { data: {}, content: e2, excerpt: "", orig: e2 };
      let r2 = l(e2);
      const n2 = p.cache[r2.content];
      if (!t2) {
        if (n2) return r2 = Object.assign({}, n2), r2.orig = n2.orig, r2;
        p.cache[r2.content] = r2;
      }
      return (function(e3, t3) {
        const r3 = o(t3), n3 = r3.delimiters[0], i2 = "\n" + r3.delimiters[1];
        let c2 = e3.content;
        r3.language && (e3.language = r3.language);
        const l2 = n3.length;
        if (!d.startsWith(c2, n3, l2)) return a(e3, r3), e3;
        if (c2.charAt(l2) === n3.slice(-1)) return e3;
        c2 = c2.slice(l2);
        const m = c2.length, h = p.language(c2, r3);
        h.name && (e3.language = h.name, c2 = c2.slice(h.raw.length));
        let f = c2.indexOf(i2);
        -1 === f && (f = m);
        e3.matter = c2.slice(0, f);
        const g = e3.matter.replace(/^\s*#[^\n]+/gm, "").trim();
        "" === g ? (e3.isEmpty = true, e3.empty = e3.content, e3.data = {}) : e3.data = u(e3.language, e3.matter, r3);
        f === m ? e3.content = "" : (e3.content = c2.slice(f + i2.length), "\r" === e3.content[0] && (e3.content = e3.content.slice(1)), "\n" === e3.content[0] && (e3.content = e3.content.slice(1)));
        a(e3, r3), (true === r3.sections || "function" == typeof r3.section) && s(e3, r3.section);
        return e3;
      })(r2, t2);
    }
    p.engines = c, p.stringify = function(e2, t2, r2) {
      return "string" == typeof e2 && (e2 = p(e2, r2)), i(e2, t2, r2);
    }, p.read = function(e2, t2) {
      const r2 = p(n.readFileSync(e2, "utf8"), t2);
      return r2.path = e2, r2;
    }, p.test = function(e2, t2) {
      return d.startsWith(e2, o(t2).delimiters[0]);
    }, p.language = function(e2, t2) {
      const r2 = o(t2).delimiters[0];
      p.test(e2) && (e2 = e2.slice(r2.length));
      const n2 = e2.slice(0, e2.search(/\r?\n/));
      return { raw: n2, name: n2 ? n2.trim() : "" };
    }, p.cache = {}, p.clearCache = function() {
      p.cache = {};
    }, e.exports = p;
  }