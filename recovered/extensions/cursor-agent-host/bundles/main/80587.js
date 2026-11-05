// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 80587 range:11648997..11651010
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80587: (e, t, r) => {
    "use strict";
    var n = r(36755), s = r(77454), o = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
    var i = /^[-+]?[0-9]+e/;
    e.exports = new s("tag:yaml.org,2002:float", { kind: "scalar", resolve: function(e2) {
      return null !== e2 && !(!o.test(e2) || "_" === e2[e2.length - 1]);
    }, construct: function(e2) {
      var t2, r2, n2, s2;
      return r2 = "-" === (t2 = e2.replace(/_/g, "").toLowerCase())[0] ? -1 : 1, s2 = [], "+-".indexOf(t2[0]) >= 0 && (t2 = t2.slice(1)), ".inf" === t2 ? 1 === r2 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t2 ? NaN : t2.indexOf(":") >= 0 ? (t2.split(":").forEach(function(e3) {
        s2.unshift(parseFloat(e3, 10));
      }), t2 = 0, n2 = 1, s2.forEach(function(e3) {
        t2 += e3 * n2, n2 *= 60;
      }), r2 * t2) : r2 * parseFloat(t2, 10);
    }, predicate: function(e2) {
      return "[object Number]" === Object.prototype.toString.call(e2) && (e2 % 1 != 0 || n.isNegativeZero(e2));
    }, represent: function(e2, t2) {
      var r2;
      if (isNaN(e2)) switch (t2) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
      else if (Number.POSITIVE_INFINITY === e2) switch (t2) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
      else if (Number.NEGATIVE_INFINITY === e2) switch (t2) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
      else if (n.isNegativeZero(e2)) return "-0.0";
      return r2 = e2.toString(10), i.test(r2) ? r2.replace("e", ".e") : r2;
    }, defaultStyle: "lowercase" });
  }