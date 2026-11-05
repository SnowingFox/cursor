// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 85971 range:7510752..7522606
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85971: (e, t, r) => {
    "use strict";
    var n = r(36755), o = r(39425), s = r(80599), i = r(52315), a = Object.prototype.toString, l = Object.prototype.hasOwnProperty, c = { 0: "\\0", 7: "\\a", 8: "\\b", 9: "\\t", 10: "\\n", 11: "\\v", 12: "\\f", 13: "\\r", 27: "\\e", 34: '\\"', 92: "\\\\", 133: "\\N", 160: "\\_", 8232: "\\L", 8233: "\\P" }, u = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];
    function d(e2) {
      var t2, r2, s2;
      if (t2 = e2.toString(16).toUpperCase(), e2 <= 255) r2 = "x", s2 = 2;
      else if (e2 <= 65535) r2 = "u", s2 = 4;
      else {
        if (!(e2 <= 4294967295)) throw new o("code point within a string may not be greater than 0xFFFFFFFF");
        r2 = "U", s2 = 8;
      }
      return "\\" + r2 + n.repeat("0", s2 - t2.length) + t2;
    }
    function p(e2) {
      this.schema = e2.schema || s, this.indent = Math.max(1, e2.indent || 2), this.noArrayIndent = e2.noArrayIndent || false, this.skipInvalid = e2.skipInvalid || false, this.flowLevel = n.isNothing(e2.flowLevel) ? -1 : e2.flowLevel, this.styleMap = (function(e3, t2) {
        var r2, n2, o2, s2, i2, a2, c2;
        if (null === t2) return {};
        for (r2 = {}, o2 = 0, s2 = (n2 = Object.keys(t2)).length; o2 < s2; o2 += 1) i2 = n2[o2], a2 = String(t2[i2]), "!!" === i2.slice(0, 2) && (i2 = "tag:yaml.org,2002:" + i2.slice(2)), (c2 = e3.compiledTypeMap.fallback[i2]) && l.call(c2.styleAliases, a2) && (a2 = c2.styleAliases[a2]), r2[i2] = a2;
        return r2;
      })(this.schema, e2.styles || null), this.sortKeys = e2.sortKeys || false, this.lineWidth = e2.lineWidth || 80, this.noRefs = e2.noRefs || false, this.noCompatMode = e2.noCompatMode || false, this.condenseFlow = e2.condenseFlow || false, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
    }
    function h(e2, t2) {
      for (var r2, o2 = n.repeat(" ", t2), s2 = 0, i2 = -1, a2 = "", l2 = e2.length; s2 < l2; ) -1 === (i2 = e2.indexOf("\n", s2)) ? (r2 = e2.slice(s2), s2 = l2) : (r2 = e2.slice(s2, i2 + 1), s2 = i2 + 1), r2.length && "\n" !== r2 && (a2 += o2), a2 += r2;
      return a2;
    }
    function m(e2, t2) {
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
    function v(e2) {
      return /^\n* /.test(e2);
    }
    function w(e2, t2, r2, n2, o2) {
      var s2, i2, a2, l2, c2 = false, u2 = false, d2 = -1 !== n2, p2 = -1, h2 = g(l2 = e2.charCodeAt(0)) && 65279 !== l2 && !f(l2) && 45 !== l2 && 63 !== l2 && 58 !== l2 && 44 !== l2 && 91 !== l2 && 93 !== l2 && 123 !== l2 && 125 !== l2 && 35 !== l2 && 38 !== l2 && 42 !== l2 && 33 !== l2 && 124 !== l2 && 61 !== l2 && 62 !== l2 && 39 !== l2 && 34 !== l2 && 37 !== l2 && 64 !== l2 && 96 !== l2 && !f(e2.charCodeAt(e2.length - 1));
      if (t2) for (s2 = 0; s2 < e2.length; s2++) {
        if (!g(i2 = e2.charCodeAt(s2))) return 5;
        a2 = s2 > 0 ? e2.charCodeAt(s2 - 1) : null, h2 = h2 && y(i2, a2);
      }
      else {
        for (s2 = 0; s2 < e2.length; s2++) {
          if (10 === (i2 = e2.charCodeAt(s2))) c2 = true, d2 && (u2 = u2 || s2 - p2 - 1 > n2 && " " !== e2[p2 + 1], p2 = s2);
          else if (!g(i2)) return 5;
          a2 = s2 > 0 ? e2.charCodeAt(s2 - 1) : null, h2 = h2 && y(i2, a2);
        }
        u2 = u2 || d2 && s2 - p2 - 1 > n2 && " " !== e2[p2 + 1];
      }
      return c2 || u2 ? r2 > 9 && v(e2) ? 5 : u2 ? 4 : 3 : h2 && !o2(e2) ? 1 : 2;
    }
    function b(e2, t2, r2, n2) {
      e2.dump = (function() {
        if (0 === t2.length) return "''";
        if (!e2.noCompatMode && -1 !== u.indexOf(t2)) return "'" + t2 + "'";
        var s2 = e2.indent * Math.max(1, r2), i2 = -1 === e2.lineWidth ? -1 : Math.max(Math.min(e2.lineWidth, 40), e2.lineWidth - s2), a2 = n2 || e2.flowLevel > -1 && r2 >= e2.flowLevel;
        switch (w(t2, a2, e2.indent, i2, function(t3) {
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
            return "|" + _(t2, e2.indent) + S(h(t2, s2));
          case 4:
            return ">" + _(t2, e2.indent) + S(h((function(e3, t3) {
              var r3, n3, o2 = /(\n+)([^\n]*)/g, s3 = (a3 = e3.indexOf("\n"), a3 = -1 !== a3 ? a3 : e3.length, o2.lastIndex = a3, x(e3.slice(0, a3), t3)), i3 = "\n" === e3[0] || " " === e3[0];
              var a3;
              for (; n3 = o2.exec(e3); ) {
                var l2 = n3[1], c2 = n3[2];
                r3 = " " === c2[0], s3 += l2 + (i3 || r3 || "" === c2 ? "" : "\n") + x(c2, t3), i3 = r3;
              }
              return s3;
            })(t2, i2), s2));
          case 5:
            return '"' + (function(e3) {
              for (var t3, r3, n3, o2 = "", s3 = 0; s3 < e3.length; s3++) (t3 = e3.charCodeAt(s3)) >= 55296 && t3 <= 56319 && (r3 = e3.charCodeAt(s3 + 1)) >= 56320 && r3 <= 57343 ? (o2 += d(1024 * (t3 - 55296) + r3 - 56320 + 65536), s3++) : o2 += !(n3 = c[t3]) && g(t3) ? e3[s3] : n3 || d(t3);
              return o2;
            })(t2) + '"';
          default:
            throw new o("impossible error: invalid scalar style");
        }
      })();
    }
    function _(e2, t2) {
      var r2 = v(e2) ? String(t2) : "", n2 = "\n" === e2[e2.length - 1];
      return r2 + (n2 && ("\n" === e2[e2.length - 2] || "\n" === e2) ? "+" : n2 ? "" : "-") + "\n";
    }
    function S(e2) {
      return "\n" === e2[e2.length - 1] ? e2.slice(0, -1) : e2;
    }
    function x(e2, t2) {
      if ("" === e2 || " " === e2[0]) return e2;
      for (var r2, n2, o2 = / [^ ]/g, s2 = 0, i2 = 0, a2 = 0, l2 = ""; r2 = o2.exec(e2); ) (a2 = r2.index) - s2 > t2 && (n2 = i2 > s2 ? i2 : a2, l2 += "\n" + e2.slice(s2, n2), s2 = n2 + 1), i2 = a2;
      return l2 += "\n", e2.length - s2 > t2 && i2 > s2 ? l2 += e2.slice(s2, i2) + "\n" + e2.slice(i2 + 1) : l2 += e2.slice(s2), l2.slice(1);
    }
    function k(e2, t2, r2) {
      var n2, s2, i2, c2, u2, d2;
      for (i2 = 0, c2 = (s2 = r2 ? e2.explicitTypes : e2.implicitTypes).length; i2 < c2; i2 += 1) if (((u2 = s2[i2]).instanceOf || u2.predicate) && (!u2.instanceOf || "object" == typeof t2 && t2 instanceof u2.instanceOf) && (!u2.predicate || u2.predicate(t2))) {
        if (e2.tag = r2 ? u2.tag : "?", u2.represent) {
          if (d2 = e2.styleMap[u2.tag] || u2.defaultStyle, "[object Function]" === a.call(u2.represent)) n2 = u2.represent(t2, d2);
          else {
            if (!l.call(u2.represent, d2)) throw new o("!<" + u2.tag + '> tag resolver accepts not "' + d2 + '" style');
            n2 = u2.represent[d2](t2, d2);
          }
          e2.dump = n2;
        }
        return true;
      }
      return false;
    }
    function E(e2, t2, r2, n2, s2, i2) {
      e2.tag = null, e2.dump = r2, k(e2, r2, false) || k(e2, r2, true);
      var l2 = a.call(e2.dump);
      n2 && (n2 = e2.flowLevel < 0 || e2.flowLevel > t2);
      var c2, u2, d2 = "[object Object]" === l2 || "[object Array]" === l2;
      if (d2 && (u2 = -1 !== (c2 = e2.duplicates.indexOf(r2))), (null !== e2.tag && "?" !== e2.tag || u2 || 2 !== e2.indent && t2 > 0) && (s2 = false), u2 && e2.usedDuplicates[c2]) e2.dump = "*ref_" + c2;
      else {
        if (d2 && u2 && !e2.usedDuplicates[c2] && (e2.usedDuplicates[c2] = true), "[object Object]" === l2) n2 && 0 !== Object.keys(e2.dump).length ? (!(function(e3, t3, r3, n3) {
          var s3, i3, a2, l3, c3, u3, d3 = "", p3 = e3.tag, h2 = Object.keys(r3);
          if (true === e3.sortKeys) h2.sort();
          else if ("function" == typeof e3.sortKeys) h2.sort(e3.sortKeys);
          else if (e3.sortKeys) throw new o("sortKeys must be a boolean or a function");
          for (s3 = 0, i3 = h2.length; s3 < i3; s3 += 1) u3 = "", n3 && 0 === s3 || (u3 += m(e3, t3)), l3 = r3[a2 = h2[s3]], E(e3, t3 + 1, a2, true, true, true) && ((c3 = null !== e3.tag && "?" !== e3.tag || e3.dump && e3.dump.length > 1024) && (e3.dump && 10 === e3.dump.charCodeAt(0) ? u3 += "?" : u3 += "? "), u3 += e3.dump, c3 && (u3 += m(e3, t3)), E(e3, t3 + 1, l3, true, c3) && (e3.dump && 10 === e3.dump.charCodeAt(0) ? u3 += ":" : u3 += ": ", d3 += u3 += e3.dump));
          e3.tag = p3, e3.dump = d3 || "{}";
        })(e2, t2, e2.dump, s2), u2 && (e2.dump = "&ref_" + c2 + e2.dump)) : (!(function(e3, t3, r3) {
          var n3, o2, s3, i3, a2, l3 = "", c3 = e3.tag, u3 = Object.keys(r3);
          for (n3 = 0, o2 = u3.length; n3 < o2; n3 += 1) a2 = "", 0 !== n3 && (a2 += ", "), e3.condenseFlow && (a2 += '"'), i3 = r3[s3 = u3[n3]], E(e3, t3, s3, false, false) && (e3.dump.length > 1024 && (a2 += "? "), a2 += e3.dump + (e3.condenseFlow ? '"' : "") + ":" + (e3.condenseFlow ? "" : " "), E(e3, t3, i3, false, false) && (l3 += a2 += e3.dump));
          e3.tag = c3, e3.dump = "{" + l3 + "}";
        })(e2, t2, e2.dump), u2 && (e2.dump = "&ref_" + c2 + " " + e2.dump));
        else if ("[object Array]" === l2) {
          var p2 = e2.noArrayIndent && t2 > 0 ? t2 - 1 : t2;
          n2 && 0 !== e2.dump.length ? (!(function(e3, t3, r3, n3) {
            var o2, s3, i3 = "", a2 = e3.tag;
            for (o2 = 0, s3 = r3.length; o2 < s3; o2 += 1) E(e3, t3 + 1, r3[o2], true, true) && (n3 && 0 === o2 || (i3 += m(e3, t3)), e3.dump && 10 === e3.dump.charCodeAt(0) ? i3 += "-" : i3 += "- ", i3 += e3.dump);
            e3.tag = a2, e3.dump = i3 || "[]";
          })(e2, p2, e2.dump, s2), u2 && (e2.dump = "&ref_" + c2 + e2.dump)) : (!(function(e3, t3, r3) {
            var n3, o2, s3 = "", i3 = e3.tag;
            for (n3 = 0, o2 = r3.length; n3 < o2; n3 += 1) E(e3, t3, r3[n3], false, false) && (0 !== n3 && (s3 += "," + (e3.condenseFlow ? "" : " ")), s3 += e3.dump);
            e3.tag = i3, e3.dump = "[" + s3 + "]";
          })(e2, p2, e2.dump), u2 && (e2.dump = "&ref_" + c2 + " " + e2.dump));
        } else {
          if ("[object String]" !== l2) {
            if (e2.skipInvalid) return false;
            throw new o("unacceptable kind of an object to dump " + l2);
          }
          "?" !== e2.tag && b(e2, e2.dump, t2, i2);
        }
        null !== e2.tag && "?" !== e2.tag && (e2.dump = "!<" + e2.tag + "> " + e2.dump);
      }
      return true;
    }
    function T(e2, t2) {
      var r2, n2, o2 = [], s2 = [];
      for (C(e2, o2, s2), r2 = 0, n2 = s2.length; r2 < n2; r2 += 1) t2.duplicates.push(o2[s2[r2]]);
      t2.usedDuplicates = new Array(n2);
    }
    function C(e2, t2, r2) {
      var n2, o2, s2;
      if (null !== e2 && "object" == typeof e2) if (-1 !== (o2 = t2.indexOf(e2))) -1 === r2.indexOf(o2) && r2.push(o2);
      else if (t2.push(e2), Array.isArray(e2)) for (o2 = 0, s2 = e2.length; o2 < s2; o2 += 1) C(e2[o2], t2, r2);
      else for (o2 = 0, s2 = (n2 = Object.keys(e2)).length; o2 < s2; o2 += 1) C(e2[n2[o2]], t2, r2);
    }
    function I(e2, t2) {
      var r2 = new p(t2 = t2 || {});
      return r2.noRefs || T(e2, r2), E(r2, 0, e2, true, true) ? r2.dump + "\n" : "";
    }
    e.exports.dump = I, e.exports.safeDump = function(e2, t2) {
      return I(e2, n.extend({ schema: i }, t2));
    };
  }