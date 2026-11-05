// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 44836 range:3282281..3284123
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44836: (e, t, r) => {
    "use strict";
    var n = r(58334), s = r(76966);
    function o(e2, t2) {
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
      })(e2), a = s({}, { section_delimiter: "---", parse: i }, t2), c = a.section_delimiter, l = r2.content.split(/\r?\n/), u = null, d = { key: "", data: "", content: "" }, p = [], m = [];
      function h(e3) {
        r2.content = e3, u = [], p = [];
      }
      function f(e3) {
        m.length && (d.key = (function(e4, t3) {
          return e4 ? e4.slice(t3.length).trim() : "";
        })(m[0], c), d.content = e3, a.parse(d, u), u.push(d), d = { key: "", data: "", content: "" }, p = [], m = []);
      }
      for (var g = 0; g < l.length; g++) {
        var y = l[g], w = m.length, v = y.trim();
        if (o(v, c)) {
          if (3 === v.length && 0 !== g) {
            if (0 === w || 2 === w) {
              p.push(y);
              continue;
            }
            m.push(v), d.data = p.join("\n"), p = [];
            continue;
          }
          null === u && h(p.join("\n")), 2 === w && f(p.join("\n")), m.push(v);
        } else p.push(y);
      }
      return null === u ? h(p.join("\n")) : f(p.join("\n")), r2.sections = u, r2;
    };
  }