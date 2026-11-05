// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 85971 range:10999726..11011580
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85971: (e, t, r) => {
    "use strict";
    var n = r(36755), s = r(39425), o = r(80599), i = r(52315), a = Object.prototype.toString, c = Object.prototype.hasOwnProperty, l = { 0: "\\0", 7: "\\a", 8: "\\b", 9: "\\t", 10: "\\n", 11: "\\v", 12: "\\f", 13: "\\r", 27: "\\e", 34: '\\"', 92: "\\\\", 133: "\\N", 160: "\\_", 8232: "\\L", 8233: "\\P" }, u = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];
    function d(e2) {
      var t2, r2, o2;
      if (t2 = e2.toString(16).toUpperCase(), e2 <= 255) r2 = "x", o2 = 2;
      else if (e2 <= 65535) r2 = "u", o2 = 4;
      else {
        if (!(e2 <= 4294967295)) throw new s("code point within a string may not be greater than 0xFFFFFFFF");
        r2 = "U", o2 = 8;
      }
      return "\\" + r2 + n.repeat("0", o2 - t2.length) + t2;
    }
    function p(e2) {
      this.schema = e2.schema || o, this.indent = Math.max(1, e2.indent || 2), this.noArrayIndent = e2.noArrayIndent || false, this.skipInvalid = e2.skipInvalid || false, this.flowLevel = n.isNothing(e2.flowLevel) ? -1 : e2.flowLevel, this.styleMap = (function(e3, t2) {
        var r2, n2, s2, o2, i2, a2, l2;
        if (null === t2) return {};
        for (r2 = {}, s2 = 0, o2 = (n2 = Object.keys(t2)).length; s2 < o2; s2 += 1) i2 = n2[s2], a2 = String(t2[i2]), "!!" === i2.slice(0, 2) && (i2 = "tag:yaml.org,2002:" + i2.slice(2)), (l2 = e3.compiledTypeMap.fallback[i2]) && c.call(l2.styleAliases, a2) && (a2 = l2.styleAliases[a2]), r2[i2] = a2;
        return r2;
      })(this.schema, e2.styles || null), this.sortKeys = e2.sortKeys || false, this.lineWidth = e2.lineWidth || 80, this.noRefs = e2.noRefs || false, this.noCompatMode = e2.noCompatMode || false, this.condenseFlow = e2.condenseFlow || false, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
    }
    function m(e2, t2) {
      for (var r2, s2 = n.repeat(" ", t2), o2 = 0, i2 = -1, a2 = "", c2 = e2.length; o2 < c2; ) -1 === (i2 = e2.indexOf("\n", o2)) ? (r2 = e2.slice(o2), o2 = c2) : (r2 = e2.slice(o2, i2 + 1), o2 = i2 + 1), r2.length && "\n" !== r2 && (a2 += s2), a2 += r2;
      return a2;
    }
    function h(e2, t2) {
      return "\n" + n.repeat(" ", e2.indent * t2);
    }
    function f(e2) {
      return 32 === e2 || 9 === e2;
    }
    function g(e2) {
      return 32 <= e2 && e2 <= 126 || 161 <= e2 && e2 <= 55295 && 8232 !== e2 && 8233 !== e2 || 57344 <= e2 && e2 <= 65533 && 65279 !== e2 || 65536 <= e2 && e2 <= 1114111;
    }
    function y(e2, t2) {
      return g(e2) && 65279 !== e2 && 44 !== e2 && 91 !== e2 && 93 !== e2 && 123 !== e2 && 125 !== e2 && 58 !== e2 && (35 !== e2 || t2 && (function(e3) {
        return g(e3) && !f(e3) && 65279 !== e3 && 13 !== e3 && 10 !== e3;
      })(t2));
    }
    function w(e2) {
      return /^\n* /.test(e2);
    }
    function v(e2, t2, r2, n2, s2) {
      var o2, i2, a2, c2, l2 = false, u2 = false, d2 = -1 !== n2, p2 = -1, m2 = g(c2 = e2.charCodeAt(0)) && 65279 !== c2 && !f(c2) && 45 !== c2 && 63 !== c2 && 58 !== c2 && 44 !== c2 && 91 !== c2 && 93 !== c2 && 123 !== c2 && 125 !== c2 && 35 !== c2 && 38 !== c2 && 42 !== c2 && 33 !== c2 && 124 !== c2 && 61 !== c2 && 62 !== c2 && 39 !== c2 && 34 !== c2 && 37 !== c2 && 64 !== c2 && 96 !== c2 && !f(e2.charCodeAt(e2.length - 1));
      if (t2) for (o2 = 0; o2 < e2.length; o2++) {
        if (!g(i2 = e2.charCodeAt(o2))) return 5;
        a2 = o2 > 0 ? e2.charCodeAt(o2 - 1) : null, m2 = m2 && y(i2, a2);
      }
      else {
        for (o2 = 0; o2 < e2.length; o2++) {
          if (10 === (i2 = e2.charCodeAt(o2))) l2 = true, d2 && (u2 = u2 || o2 - p2 - 1 > n2 && " " !== e2[p2 + 1], p2 = o2);
          else if (!g(i2)) return 5;
          a2 = o2 > 0 ? e2.charCodeAt(o2 - 1) : null, m2 = m2 && y(i2, a2);
        }
        u2 = u2 || d2 && o2 - p2 - 1 > n2 && " " !== e2[p2 + 1];
      }
      return l2 || u2 ? r2 > 9 && w(e2) ? 5 : u2 ? 4 : 3 : m2 && !s2(e2) ? 1 : 2;
    }
    function _(e2, t2, r2, n2) {
      e2.dump = (function() {
        if (0 === t2.length) return "''";
        if (!e2.noCompatMode && -1 !== u.indexOf(t2)) return "'" + t2 + "'";
        var o2 = e2.indent * Math.max(1, r2), i2 = -1 === e2.lineWidth ? -1 : Math.max(Math.min(e2.lineWidth, 40), e2.lineWidth - o2), a2 = n2 || e2.flowLevel > -1 && r2 >= e2.flowLevel;
        switch (v(t2, a2, e2.indent, i2, function(t3) {
          return (function(e3, t4) {
            var r3, n3;
            for (r3 = 0, n3 = e3.implicitTypes.length; r3 < n3; r3 += 1) if (e3.implicitTypes[r3].resolve(t4)) return true;
            return false;
          })(e2, t3);
        })) {
          case 1:
            return t2;
          case 2:
            return "'" + t2.replace(/'/g, "''") + "'";
          case 3:
            return "|" + b(t2, e2.indent) + S(m(t2, o2));
          case 4:
            return ">" + b(t2, e2.indent) + S(m((function(e3, t3) {
              var r3, n3, s2 = /(\n+)([^\n]*)/g, o3 = (a3 = e3.indexOf("\n"), a3 = -1 !== a3 ? a3 : e3.length, s2.lastIndex = a3, k(e3.slice(0, a3), t3)), i3 = "\n" === e3[0] || " " === e3[0];
              var a3;
              for (; n3 = s2.exec(e3); ) {
                var c2 = n3[1], l2 = n3[2];
                r3 = " " === l2[0], o3 += c2 + (i3 || r3 || "" === l2 ? "" : "\n") + k(l2, t3), i3 = r3;
              }
              return o3;
            })(t2, i2), o2));
          case 5:
            return '"' + (function(e3) {
              for (var t3, r3, n3, s2 = "", o3 = 0; o3 < e3.length; o3++) (t3 = e3.charCodeAt(o3)) >= 55296 && t3 <= 56319 && (r3 = e3.charCodeAt(o3 + 1)) >= 56320 && r3 <= 57343 ? (s2 += d(1024 * (t3 - 55296) + r3 - 56320 + 65536), o3++) : s2 += !(n3 = l[t3]) && g(t3) ? e3[o3] : n3 || d(t3);
              return s2;
            })(t2) + '"';
          default:
            throw new s("impossible error: invalid scalar style");
        }
      })();
    }
    function b(e2, t2) {
      var r2 = w(e2) ? String(t2) : "", n2 = "\n" === e2[e2.length - 1];
      return r2 + (n2 && ("\n" === e2[e2.length - 2] || "\n" === e2) ? "+" : n2 ? "" : "-") + "\n";
    }
    function S(e2) {
      return "\n" === e2[e2.length - 1] ? e2.slice(0, -1) : e2;
    }
    function k(e2, t2) {
      if ("" === e2 || " " === e2[0]) return e2;
      for (var r2, n2, s2 = / [^ ]/g, o2 = 0, i2 = 0, a2 = 0, c2 = ""; r2 = s2.exec(e2); ) (a2 = r2.index) - o2 > t2 && (n2 = i2 > o2 ? i2 : a2, c2 += "\n" + e2.slice(o2, n2), o2 = n2 + 1), i2 = a2;
      return c2 += "\n", e2.length - o2 > t2 && i2 > o2 ? c2 += e2.slice(o2, i2) + "\n" + e2.slice(i2 + 1) : c2 += e2.slice(o2), c2.slice(1);
    }
    function x(e2, t2, r2) {
      var n2, o2, i2, l2, u2, d2;
      for (i2 = 0, l2 = (o2 = r2 ? e2.explicitTypes : e2.implicitTypes).length; i2 < l2; i2 += 1) if (((u2 = o2[i2]).instanceOf || u2.predicate) && (!u2.instanceOf || "object" == typeof t2 && t2 instanceof u2.instanceOf) && (!u2.predicate || u2.predicate(t2))) {
        if (e2.tag = r2 ? u2.tag : "?", u2.represent) {
          if (d2 = e2.styleMap[u2.tag] || u2.defaultStyle, "[object Function]" === a.call(u2.represent)) n2 = u2.represent(t2, d2);
          else {
            if (!c.call(u2.represent, d2)) throw new s("!<" + u2.tag + '> tag resolver accepts not "' + d2 + '" style');
            n2 = u2.represent[d2](t2, d2);
          }
          e2.dump = n2;
        }
        return true;
      }
      return false;
    }
    function E(e2, t2, r2, n2, o2, i2) {
      e2.tag = null, e2.dump = r2, x(e2, r2, false) || x(e2, r2, true);
      var c2 = a.call(e2.dump);
      n2 && (n2 = e2.flowLevel < 0 || e2.flowLevel > t2);
      var l2, u2, d2 = "[object Object]" === c2 || "[object Array]" === c2;
      if (d2 && (u2 = -1 !== (l2 = e2.duplicates.indexOf(r2))), (null !== e2.tag && "?" !== e2.tag || u2 || 2 !== e2.indent && t2 > 0) && (o2 = false), u2 && e2.usedDuplicates[l2]) e2.dump = "*ref_" + l2;
      else {
        if (d2 && u2 && !e2.usedDuplicates[l2] && (e2.usedDuplicates[l2] = true), "[object Object]" === c2) n2 && 0 !== Object.keys(e2.dump).length ? (!(function(e3, t3, r3, n3) {
          var o3, i3, a2, c3, l3, u3, d3 = "", p3 = e3.tag, m2 = Object.keys(r3);
          if (true === e3.sortKeys) m2.sort();
          else if ("function" == typeof e3.sortKeys) m2.sort(e3.sortKeys);
          else if (e3.sortKeys) throw new s("sortKeys must be a boolean or a function");
          for (o3 = 0, i3 = m2.length; o3 < i3; o3 += 1) u3 = "", n3 && 0 === o3 || (u3 += h(e3, t3)), c3 = r3[a2 = m2[o3]], E(e3, t3 + 1, a2, true, true, true) && ((l3 = null !== e3.tag && "?" !== e3.tag || e3.dump && e3.dump.length > 1024) && (e3.dump && 10 === e3.dump.charCodeAt(0) ? u3 += "?" : u3 += "? "), u3 += e3.dump, l3 && (u3 += h(e3, t3)), E(e3, t3 + 1, c3, true, l3) && (e3.dump && 10 === e3.dump.charCodeAt(0) ? u3 += ":" : u3 += ": ", d3 += u3 += e3.dump));
          e3.tag = p3, e3.dump = d3 || "{}";
        })(e2, t2, e2.dump, o2), u2 && (e2.dump = "&ref_" + l2 + e2.dump)) : (!(function(e3, t3, r3) {
          var n3, s2, o3, i3, a2, c3 = "", l3 = e3.tag, u3 = Object.keys(r3);
          for (n3 = 0, s2 = u3.length; n3 < s2; n3 += 1) a2 = "", 0 !== n3 && (a2 += ", "), e3.condenseFlow && (a2 += '"'), i3 = r3[o3 = u3[n3]], E(e3, t3, o3, false, false) && (e3.dump.length > 1024 && (a2 += "? "), a2 += e3.dump + (e3.condenseFlow ? '"' : "") + ":" + (e3.condenseFlow ? "" : " "), E(e3, t3, i3, false, false) && (c3 += a2 += e3.dump));
          e3.tag = l3, e3.dump = "{" + c3 + "}";
        })(e2, t2, e2.dump), u2 && (e2.dump = "&ref_" + l2 + " " + e2.dump));
        else if ("[object Array]" === c2) {
          var p2 = e2.noArrayIndent && t2 > 0 ? t2 - 1 : t2;
          n2 && 0 !== e2.dump.length ? (!(function(e3, t3, r3, n3) {
            var s2, o3, i3 = "", a2 = e3.tag;
            for (s2 = 0, o3 = r3.length; s2 < o3; s2 += 1) E(e3, t3 + 1, r3[s2], true, true) && (n3 && 0 === s2 || (i3 += h(e3, t3)), e3.dump && 10 === e3.dump.charCodeAt(0) ? i3 += "-" : i3 += "- ", i3 += e3.dump);
            e3.tag = a2, e3.dump = i3 || "[]";
          })(e2, p2, e2.dump, o2), u2 && (e2.dump = "&ref_" + l2 + e2.dump)) : (!(function(e3, t3, r3) {
            var n3, s2, o3 = "", i3 = e3.tag;
            for (n3 = 0, s2 = r3.length; n3 < s2; n3 += 1) E(e3, t3, r3[n3], false, false) && (0 !== n3 && (o3 += "," + (e3.condenseFlow ? "" : " ")), o3 += e3.dump);
            e3.tag = i3, e3.dump = "[" + o3 + "]";
          })(e2, p2, e2.dump), u2 && (e2.dump = "&ref_" + l2 + " " + e2.dump));
        } else {
          if ("[object String]" !== c2) {
            if (e2.skipInvalid) return false;
            throw new s("unacceptable kind of an object to dump " + c2);
          }
          "?" !== e2.tag && _(e2, e2.dump, t2, i2);
        }
        null !== e2.tag && "?" !== e2.tag && (e2.dump = "!<" + e2.tag + "> " + e2.dump);
      }
      return true;
    }
    function I(e2, t2) {
      var r2, n2, s2 = [], o2 = [];
      for (T(e2, s2, o2), r2 = 0, n2 = o2.length; r2 < n2; r2 += 1) t2.duplicates.push(s2[o2[r2]]);
      t2.usedDuplicates = new Array(n2);
    }
    function T(e2, t2, r2) {
      var n2, s2, o2;
      if (null !== e2 && "object" == typeof e2) if (-1 !== (s2 = t2.indexOf(e2))) -1 === r2.indexOf(s2) && r2.push(s2);
      else if (t2.push(e2), Array.isArray(e2)) for (s2 = 0, o2 = e2.length; s2 < o2; s2 += 1) T(e2[s2], t2, r2);
      else for (s2 = 0, o2 = (n2 = Object.keys(e2)).length; s2 < o2; s2 += 1) T(e2[n2[s2]], t2, r2);
    }
    function C(e2, t2) {
      var r2 = new p(t2 = t2 || {});
      return r2.noRefs || I(e2, r2), E(r2, 0, e2, true, true) ? r2.dump + "\n" : "";
    }
    e.exports.dump = C, e.exports.safeDump = function(e2, t2) {
      return C(e2, n.extend({ schema: i }, t2));
    };
  }