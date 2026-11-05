// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 64211 range:1963151..1964267
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64211: (e, t, r) => {
    "use strict";
    const n = r(58334), o = r(3482), s = r(62594);
    function i(e2) {
      return "\n" !== e2.slice(-1) ? e2 + "\n" : e2;
    }
    e.exports = function(e2, t2, r2) {
      if (null == t2 && null == r2) switch (n(e2)) {
        case "object":
          t2 = e2.data, r2 = {};
          break;
        case "string":
          return e2;
        default:
          throw new TypeError("expected file to be a string or object");
      }
      const a = e2.content, l = s(r2);
      if (null == t2) {
        if (!l.data) return e2;
        t2 = l.data;
      }
      const c = e2.language || l.language, u = o(c, l);
      if ("function" != typeof u.stringify) throw new TypeError('expected "' + c + '.stringify" to be a function');
      t2 = Object.assign({}, e2.data, t2);
      const d = l.delimiters[0], p = l.delimiters[1], h = u.stringify(t2, r2).trim();
      let m = "";
      return "{}" !== h && (m = i(d) + i(h) + i(p)), "string" == typeof e2.excerpt && "" !== e2.excerpt && -1 === a.indexOf(e2.excerpt.trim()) && (m += i(e2.excerpt) + i(p)), m + i(a);
    };
  }