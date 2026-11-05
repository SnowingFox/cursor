// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 64211 range:10309662..10310778
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64211: (e, t, r) => {
    "use strict";
    const n = r(58334), s = r(3482), o = r(40213);
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
      const a = e2.content, c = o(r2);
      if (null == t2) {
        if (!c.data) return e2;
        t2 = c.data;
      }
      const l = e2.language || c.language, u = s(l, c);
      if ("function" != typeof u.stringify) throw new TypeError('expected "' + l + '.stringify" to be a function');
      t2 = Object.assign({}, e2.data, t2);
      const d = c.delimiters[0], p = c.delimiters[1], m = u.stringify(t2, r2).trim();
      let h = "";
      return "{}" !== m && (h = i(d) + i(m) + i(p)), "string" == typeof e2.excerpt && "" !== e2.excerpt && -1 === a.indexOf(e2.excerpt.trim()) && (h += i(e2.excerpt) + i(p)), h + i(a);
    };
  }