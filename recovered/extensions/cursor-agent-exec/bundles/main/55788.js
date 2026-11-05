// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 55788 range:4601896..4604805
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55788: (e, t, r) => {
    "use strict";
    var n = r(36755), s = r(77454);
    function o(e2) {
      return 48 <= e2 && e2 <= 57 || 65 <= e2 && e2 <= 70 || 97 <= e2 && e2 <= 102;
    }
    function i(e2) {
      return 48 <= e2 && e2 <= 55;
    }
    function a(e2) {
      return 48 <= e2 && e2 <= 57;
    }
    e.exports = new s("tag:yaml.org,2002:int", { kind: "scalar", resolve: function(e2) {
      if (null === e2) return false;
      var t2, r2 = e2.length, n2 = 0, s2 = false;
      if (!r2) return false;
      if ("-" !== (t2 = e2[n2]) && "+" !== t2 || (t2 = e2[++n2]), "0" === t2) {
        if (n2 + 1 === r2) return true;
        if ("b" === (t2 = e2[++n2])) {
          for (n2++; n2 < r2; n2++) if ("_" !== (t2 = e2[n2])) {
            if ("0" !== t2 && "1" !== t2) return false;
            s2 = true;
          }
          return s2 && "_" !== t2;
        }
        if ("x" === t2) {
          for (n2++; n2 < r2; n2++) if ("_" !== (t2 = e2[n2])) {
            if (!o(e2.charCodeAt(n2))) return false;
            s2 = true;
          }
          return s2 && "_" !== t2;
        }
        for (; n2 < r2; n2++) if ("_" !== (t2 = e2[n2])) {
          if (!i(e2.charCodeAt(n2))) return false;
          s2 = true;
        }
        return s2 && "_" !== t2;
      }
      if ("_" === t2) return false;
      for (; n2 < r2; n2++) if ("_" !== (t2 = e2[n2])) {
        if (":" === t2) break;
        if (!a(e2.charCodeAt(n2))) return false;
        s2 = true;
      }
      return !(!s2 || "_" === t2) && (":" !== t2 || /^(:[0-5]?[0-9])+$/.test(e2.slice(n2)));
    }, construct: function(e2) {
      var t2, r2, n2 = e2, s2 = 1, o2 = [];
      return -1 !== n2.indexOf("_") && (n2 = n2.replace(/_/g, "")), "-" !== (t2 = n2[0]) && "+" !== t2 || ("-" === t2 && (s2 = -1), t2 = (n2 = n2.slice(1))[0]), "0" === n2 ? 0 : "0" === t2 ? "b" === n2[1] ? s2 * parseInt(n2.slice(2), 2) : "x" === n2[1] ? s2 * parseInt(n2, 16) : s2 * parseInt(n2, 8) : -1 !== n2.indexOf(":") ? (n2.split(":").forEach(function(e3) {
        o2.unshift(parseInt(e3, 10));
      }), n2 = 0, r2 = 1, o2.forEach(function(e3) {
        n2 += e3 * r2, r2 *= 60;
      }), s2 * n2) : s2 * parseInt(n2, 10);
    }, predicate: function(e2) {
      return "[object Number]" === Object.prototype.toString.call(e2) && e2 % 1 == 0 && !n.isNegativeZero(e2);
    }, represent: { binary: function(e2) {
      return e2 >= 0 ? "0b" + e2.toString(2) : "-0b" + e2.toString(2).slice(1);
    }, octal: function(e2) {
      return e2 >= 0 ? "0" + e2.toString(8) : "-0" + e2.toString(8).slice(1);
    }, decimal: function(e2) {
      return e2.toString(10);
    }, hexadecimal: function(e2) {
      return e2 >= 0 ? "0x" + e2.toString(16).toUpperCase() : "-0x" + e2.toString(16).toUpperCase().slice(1);
    } }, defaultStyle: "decimal", styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] } });
  }