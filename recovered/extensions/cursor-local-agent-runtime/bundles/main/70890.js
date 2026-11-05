// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 70890 range:2282828..2285067
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70890: (e, t, r) => {
    "use strict";
    const n = r(79896), o = r(44836), s = r(62594), i = r(64211), a = r(49723), l = r(81129), c = r(71096), u = r(34333), d = r(49727);
    function p(e2, t2) {
      if ("" === e2) return { data: {}, content: e2, excerpt: "", orig: e2 };
      let r2 = c(e2);
      const n2 = p.cache[r2.content];
      if (!t2) {
        if (n2) return r2 = Object.assign({}, n2), r2.orig = n2.orig, r2;
        p.cache[r2.content] = r2;
      }
      return (function(e3, t3) {
        const r3 = s(t3), n3 = r3.delimiters[0], i2 = "\n" + r3.delimiters[1];
        let l2 = e3.content;
        r3.language && (e3.language = r3.language);
        const c2 = n3.length;
        if (!d.startsWith(l2, n3, c2)) return a(e3, r3), e3;
        if (l2.charAt(c2) === n3.slice(-1)) return e3;
        l2 = l2.slice(c2);
        const h = l2.length, m = p.language(l2, r3);
        m.name && (e3.language = m.name, l2 = l2.slice(m.raw.length));
        let f = l2.indexOf(i2);
        -1 === f && (f = h);
        e3.matter = l2.slice(0, f);
        const g = e3.matter.replace(/^\s*#[^\n]+/gm, "").trim();
        "" === g ? (e3.isEmpty = true, e3.empty = e3.content, e3.data = {}) : e3.data = u(e3.language, e3.matter, r3);
        f === h ? e3.content = "" : (e3.content = l2.slice(f + i2.length), "\r" === e3.content[0] && (e3.content = e3.content.slice(1)), "\n" === e3.content[0] && (e3.content = e3.content.slice(1)));
        a(e3, r3), (true === r3.sections || "function" == typeof r3.section) && o(e3, r3.section);
        return e3;
      })(r2, t2);
    }
    p.engines = l, p.stringify = function(e2, t2, r2) {
      return "string" == typeof e2 && (e2 = p(e2, r2)), i(e2, t2, r2);
    }, p.read = function(e2, t2) {
      const r2 = p(n.readFileSync(e2, "utf8"), t2);
      return r2.path = e2, r2;
    }, p.test = function(e2, t2) {
      return d.startsWith(e2, s(t2).delimiters[0]);
    }, p.language = function(e2, t2) {
      const r2 = s(t2).delimiters[0];
      p.test(e2) && (e2 = e2.slice(r2.length));
      const n2 = e2.slice(0, e2.search(/\r?\n/));
      return { raw: n2, name: n2 ? n2.trim() : "" };
    }, p.cache = {}, p.clearCache = function() {
      p.cache = {};
    }, e.exports = p;
  }