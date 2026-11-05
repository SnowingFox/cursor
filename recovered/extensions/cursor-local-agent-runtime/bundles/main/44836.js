// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 44836 range:1343245..1345087
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44836: (e, t, r) => {
    "use strict";
    var n = r(58334), o = r(76966);
    function s(e2, t2) {
      return e2.slice(0, t2.length) === t2 && e2.charAt(t2.length + 1) !== t2.slice(-1);
    }
    function i(e2) {
      return e2;
    }
    e.exports = function(e2, t2) {
      "function" == typeof t2 && (t2 = { parse: t2 });
      var r2 = (function(e3) {
        "object" !== n(e3) && (e3 = { content: e3 });
        if ("string" != typeof e3.content && !(function(e4) {
          if (e4 && e4.constructor && "function" == typeof e4.constructor.isBuffer) return e4.constructor.isBuffer(e4);
          return false;
        })(e3.content)) throw new TypeError("expected a buffer or string");
        return e3.content = e3.content.toString(), e3.sections = [], e3;
      })(e2), a = o({}, { section_delimiter: "---", parse: i }, t2), l = a.section_delimiter, c = r2.content.split(/\r?\n/), u = null, d = { key: "", data: "", content: "" }, p = [], h = [];
      function m(e3) {
        r2.content = e3, u = [], p = [];
      }
      function f(e3) {
        h.length && (d.key = (function(e4, t3) {
          return e4 ? e4.slice(t3.length).trim() : "";
        })(h[0], l), d.content = e3, a.parse(d, u), u.push(d), d = { key: "", data: "", content: "" }, p = [], h = []);
      }
      for (var g = 0; g < c.length; g++) {
        var y = c[g], v = h.length, w = y.trim();
        if (s(w, l)) {
          if (3 === w.length && 0 !== g) {
            if (0 === v || 2 === v) {
              p.push(y);
              continue;
            }
            h.push(w), d.data = p.join("\n"), p = [];
            continue;
          }
          null === u && m(p.join("\n")), 2 === v && f(p.join("\n")), h.push(w);
        } else p.push(y);
      }
      return null === u ? m(p.join("\n")) : f(p.join("\n")), r2.sections = u, r2;
    };
  }