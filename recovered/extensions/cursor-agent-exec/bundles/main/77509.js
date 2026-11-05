// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 77509 range:6508873..6532931
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77509: (e, t, r) => {
    "use strict";
    var n = r(36755), s = r(39425), o = r(72519), i = r(52315), a = r(80599), c = Object.prototype.hasOwnProperty, l = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, u = /[\x85\u2028\u2029]/, d = /[,\[\]\{\}]/, p = /^(?:!|!!|![a-z\-]+!)$/i, m = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function h(e2) {
      return Object.prototype.toString.call(e2);
    }
    function f(e2) {
      return 10 === e2 || 13 === e2;
    }
    function g(e2) {
      return 9 === e2 || 32 === e2;
    }
    function y(e2) {
      return 9 === e2 || 32 === e2 || 10 === e2 || 13 === e2;
    }
    function w(e2) {
      return 44 === e2 || 91 === e2 || 93 === e2 || 123 === e2 || 125 === e2;
    }
    function v(e2) {
      var t2;
      return 48 <= e2 && e2 <= 57 ? e2 - 48 : 97 <= (t2 = 32 | e2) && t2 <= 102 ? t2 - 97 + 10 : -1;
    }
    function _(e2) {
      return 120 === e2 ? 2 : 117 === e2 ? 4 : 85 === e2 ? 8 : 0;
    }
    function b(e2) {
      return 48 <= e2 && e2 <= 57 ? e2 - 48 : -1;
    }
    function S(e2) {
      return 48 === e2 ? "\0" : 97 === e2 ? "\x07" : 98 === e2 ? "\b" : 116 === e2 || 9 === e2 ? "	" : 110 === e2 ? "\n" : 118 === e2 ? "\v" : 102 === e2 ? "\f" : 114 === e2 ? "\r" : 101 === e2 ? "\x1B" : 32 === e2 ? " " : 34 === e2 ? '"' : 47 === e2 ? "/" : 92 === e2 ? "\\" : 78 === e2 ? "" : 95 === e2 ? " " : 76 === e2 ? "\u2028" : 80 === e2 ? "\u2029" : "";
    }
    function k(e2) {
      return e2 <= 65535 ? String.fromCharCode(e2) : String.fromCharCode(55296 + (e2 - 65536 >> 10), 56320 + (e2 - 65536 & 1023));
    }
    for (var x = new Array(256), E = new Array(256), I = 0; I < 256; I++) x[I] = S(I) ? 1 : 0, E[I] = S(I);
    function T(e2, t2) {
      this.input = e2, this.filename = t2.filename || null, this.schema = t2.schema || a, this.onWarning = t2.onWarning || null, this.legacy = t2.legacy || false, this.json = t2.json || false, this.listener = t2.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e2.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
    }
    function C(e2, t2) {
      return new s(t2, new o(e2.filename, e2.input, e2.position, e2.line, e2.position - e2.lineStart));
    }
    function P(e2, t2) {
      throw C(e2, t2);
    }
    function A(e2, t2) {
      e2.onWarning && e2.onWarning.call(null, C(e2, t2));
    }
    var R = { YAML: function(e2, t2, r2) {
      var n2, s2, o2;
      null !== e2.version && P(e2, "duplication of %YAML directive"), 1 !== r2.length && P(e2, "YAML directive accepts exactly one argument"), null === (n2 = /^([0-9]+)\.([0-9]+)$/.exec(r2[0])) && P(e2, "ill-formed argument of the YAML directive"), s2 = parseInt(n2[1], 10), o2 = parseInt(n2[2], 10), 1 !== s2 && P(e2, "unacceptable YAML version of the document"), e2.version = r2[0], e2.checkLineBreaks = o2 < 2, 1 !== o2 && 2 !== o2 && A(e2, "unsupported YAML version of the document");
    }, TAG: function(e2, t2, r2) {
      var n2, s2;
      2 !== r2.length && P(e2, "TAG directive accepts exactly two arguments"), n2 = r2[0], s2 = r2[1], p.test(n2) || P(e2, "ill-formed tag handle (first argument) of the TAG directive"), c.call(e2.tagMap, n2) && P(e2, 'there is a previously declared suffix for "' + n2 + '" tag handle'), m.test(s2) || P(e2, "ill-formed tag prefix (second argument) of the TAG directive"), e2.tagMap[n2] = s2;
    } };
    function M(e2, t2, r2, n2) {
      var s2, o2, i2, a2;
      if (t2 < r2) {
        if (a2 = e2.input.slice(t2, r2), n2) for (s2 = 0, o2 = a2.length; s2 < o2; s2 += 1) 9 === (i2 = a2.charCodeAt(s2)) || 32 <= i2 && i2 <= 1114111 || P(e2, "expected valid JSON character");
        else l.test(a2) && P(e2, "the stream contains non-printable characters");
        e2.result += a2;
      }
    }
    function J(e2, t2, r2, s2) {
      var o2, i2, a2, l2;
      for (n.isObject(r2) || P(e2, "cannot merge mappings; the provided source object is unacceptable"), a2 = 0, l2 = (o2 = Object.keys(r2)).length; a2 < l2; a2 += 1) i2 = o2[a2], c.call(t2, i2) || (t2[i2] = r2[i2], s2[i2] = true);
    }
    function O(e2, t2, r2, n2, s2, o2, i2, a2) {
      var l2, u2;
      if (Array.isArray(s2)) for (l2 = 0, u2 = (s2 = Array.prototype.slice.call(s2)).length; l2 < u2; l2 += 1) Array.isArray(s2[l2]) && P(e2, "nested arrays are not supported inside keys"), "object" == typeof s2 && "[object Object]" === h(s2[l2]) && (s2[l2] = "[object Object]");
      if ("object" == typeof s2 && "[object Object]" === h(s2) && (s2 = "[object Object]"), s2 = String(s2), null === t2 && (t2 = {}), "tag:yaml.org,2002:merge" === n2) if (Array.isArray(o2)) for (l2 = 0, u2 = o2.length; l2 < u2; l2 += 1) J(e2, t2, o2[l2], r2);
      else J(e2, t2, o2, r2);
      else e2.json || c.call(r2, s2) || !c.call(t2, s2) || (e2.line = i2 || e2.line, e2.position = a2 || e2.position, P(e2, "duplicated mapping key")), t2[s2] = o2, delete r2[s2];
      return t2;
    }
    function B(e2) {
      var t2;
      10 === (t2 = e2.input.charCodeAt(e2.position)) ? e2.position++ : 13 === t2 ? (e2.position++, 10 === e2.input.charCodeAt(e2.position) && e2.position++) : P(e2, "a line break is expected"), e2.line += 1, e2.lineStart = e2.position;
    }
    function D(e2, t2, r2) {
      for (var n2 = 0, s2 = e2.input.charCodeAt(e2.position); 0 !== s2; ) {
        for (; g(s2); ) s2 = e2.input.charCodeAt(++e2.position);
        if (t2 && 35 === s2) do {
          s2 = e2.input.charCodeAt(++e2.position);
        } while (10 !== s2 && 13 !== s2 && 0 !== s2);
        if (!f(s2)) break;
        for (B(e2), s2 = e2.input.charCodeAt(e2.position), n2++, e2.lineIndent = 0; 32 === s2; ) e2.lineIndent++, s2 = e2.input.charCodeAt(++e2.position);
      }
      return -1 !== r2 && 0 !== n2 && e2.lineIndent < r2 && A(e2, "deficient indentation"), n2;
    }
    function q(e2) {
      var t2, r2 = e2.position;
      return !(45 !== (t2 = e2.input.charCodeAt(r2)) && 46 !== t2 || t2 !== e2.input.charCodeAt(r2 + 1) || t2 !== e2.input.charCodeAt(r2 + 2) || (r2 += 3, 0 !== (t2 = e2.input.charCodeAt(r2)) && !y(t2)));
    }
    function N(e2, t2) {
      1 === t2 ? e2.result += " " : t2 > 1 && (e2.result += n.repeat("\n", t2 - 1));
    }
    function F(e2, t2) {
      var r2, n2, s2 = e2.tag, o2 = e2.anchor, i2 = [], a2 = false;
      for (null !== e2.anchor && (e2.anchorMap[e2.anchor] = i2), n2 = e2.input.charCodeAt(e2.position); 0 !== n2 && 45 === n2 && y(e2.input.charCodeAt(e2.position + 1)); ) if (a2 = true, e2.position++, D(e2, true, -1) && e2.lineIndent <= t2) i2.push(null), n2 = e2.input.charCodeAt(e2.position);
      else if (r2 = e2.line, $(e2, t2, 3, false, true), i2.push(e2.result), D(e2, true, -1), n2 = e2.input.charCodeAt(e2.position), (e2.line === r2 || e2.lineIndent > t2) && 0 !== n2) P(e2, "bad indentation of a sequence entry");
      else if (e2.lineIndent < t2) break;
      return !!a2 && (e2.tag = s2, e2.anchor = o2, e2.kind = "sequence", e2.result = i2, true);
    }
    function U(e2) {
      var t2, r2, n2, s2, o2 = false, i2 = false;
      if (33 !== (s2 = e2.input.charCodeAt(e2.position))) return false;
      if (null !== e2.tag && P(e2, "duplication of a tag property"), 60 === (s2 = e2.input.charCodeAt(++e2.position)) ? (o2 = true, s2 = e2.input.charCodeAt(++e2.position)) : 33 === s2 ? (i2 = true, r2 = "!!", s2 = e2.input.charCodeAt(++e2.position)) : r2 = "!", t2 = e2.position, o2) {
        do {
          s2 = e2.input.charCodeAt(++e2.position);
        } while (0 !== s2 && 62 !== s2);
        e2.position < e2.length ? (n2 = e2.input.slice(t2, e2.position), s2 = e2.input.charCodeAt(++e2.position)) : P(e2, "unexpected end of the stream within a verbatim tag");
      } else {
        for (; 0 !== s2 && !y(s2); ) 33 === s2 && (i2 ? P(e2, "tag suffix cannot contain exclamation marks") : (r2 = e2.input.slice(t2 - 1, e2.position + 1), p.test(r2) || P(e2, "named tag handle cannot contain such characters"), i2 = true, t2 = e2.position + 1)), s2 = e2.input.charCodeAt(++e2.position);
        n2 = e2.input.slice(t2, e2.position), d.test(n2) && P(e2, "tag suffix cannot contain flow indicator characters");
      }
      return n2 && !m.test(n2) && P(e2, "tag name cannot contain such characters: " + n2), o2 ? e2.tag = n2 : c.call(e2.tagMap, r2) ? e2.tag = e2.tagMap[r2] + n2 : "!" === r2 ? e2.tag = "!" + n2 : "!!" === r2 ? e2.tag = "tag:yaml.org,2002:" + n2 : P(e2, 'undeclared tag handle "' + r2 + '"'), true;
    }
    function L(e2) {
      var t2, r2;
      if (38 !== (r2 = e2.input.charCodeAt(e2.position))) return false;
      for (null !== e2.anchor && P(e2, "duplication of an anchor property"), r2 = e2.input.charCodeAt(++e2.position), t2 = e2.position; 0 !== r2 && !y(r2) && !w(r2); ) r2 = e2.input.charCodeAt(++e2.position);
      return e2.position === t2 && P(e2, "name of an anchor node must contain at least one character"), e2.anchor = e2.input.slice(t2, e2.position), true;
    }
    function $(e2, t2, r2, s2, o2) {
      var i2, a2, l2, u2, d2, p2, m2, h2, S2 = 1, I2 = false, T2 = false;
      if (null !== e2.listener && e2.listener("open", e2), e2.tag = null, e2.anchor = null, e2.kind = null, e2.result = null, i2 = a2 = l2 = 4 === r2 || 3 === r2, s2 && D(e2, true, -1) && (I2 = true, e2.lineIndent > t2 ? S2 = 1 : e2.lineIndent === t2 ? S2 = 0 : e2.lineIndent < t2 && (S2 = -1)), 1 === S2) for (; U(e2) || L(e2); ) D(e2, true, -1) ? (I2 = true, l2 = i2, e2.lineIndent > t2 ? S2 = 1 : e2.lineIndent === t2 ? S2 = 0 : e2.lineIndent < t2 && (S2 = -1)) : l2 = false;
      if (l2 && (l2 = I2 || o2), 1 !== S2 && 4 !== r2 || (m2 = 1 === r2 || 2 === r2 ? t2 : t2 + 1, h2 = e2.position - e2.lineStart, 1 === S2 ? l2 && (F(e2, h2) || (function(e3, t3, r3) {
        var n2, s3, o3, i3, a3, c2 = e3.tag, l3 = e3.anchor, u3 = {}, d3 = {}, p3 = null, m3 = null, h3 = null, f2 = false, w2 = false;
        for (null !== e3.anchor && (e3.anchorMap[e3.anchor] = u3), a3 = e3.input.charCodeAt(e3.position); 0 !== a3; ) {
          if (n2 = e3.input.charCodeAt(e3.position + 1), o3 = e3.line, i3 = e3.position, 63 !== a3 && 58 !== a3 || !y(n2)) {
            if (!$(e3, r3, 2, false, true)) break;
            if (e3.line === o3) {
              for (a3 = e3.input.charCodeAt(e3.position); g(a3); ) a3 = e3.input.charCodeAt(++e3.position);
              if (58 === a3) y(a3 = e3.input.charCodeAt(++e3.position)) || P(e3, "a whitespace character is expected after the key-value separator within a block mapping"), f2 && (O(e3, u3, d3, p3, m3, null), p3 = m3 = h3 = null), w2 = true, f2 = false, s3 = false, p3 = e3.tag, m3 = e3.result;
              else {
                if (!w2) return e3.tag = c2, e3.anchor = l3, true;
                P(e3, "can not read an implicit mapping pair; a colon is missed");
              }
            } else {
              if (!w2) return e3.tag = c2, e3.anchor = l3, true;
              P(e3, "can not read a block mapping entry; a multiline key may not be an implicit key");
            }
          } else 63 === a3 ? (f2 && (O(e3, u3, d3, p3, m3, null), p3 = m3 = h3 = null), w2 = true, f2 = true, s3 = true) : f2 ? (f2 = false, s3 = true) : P(e3, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e3.position += 1, a3 = n2;
          if ((e3.line === o3 || e3.lineIndent > t3) && ($(e3, t3, 4, true, s3) && (f2 ? m3 = e3.result : h3 = e3.result), f2 || (O(e3, u3, d3, p3, m3, h3, o3, i3), p3 = m3 = h3 = null), D(e3, true, -1), a3 = e3.input.charCodeAt(e3.position)), e3.lineIndent > t3 && 0 !== a3) P(e3, "bad indentation of a mapping entry");
          else if (e3.lineIndent < t3) break;
        }
        return f2 && O(e3, u3, d3, p3, m3, null), w2 && (e3.tag = c2, e3.anchor = l3, e3.kind = "mapping", e3.result = u3), w2;
      })(e2, h2, m2)) || (function(e3, t3) {
        var r3, n2, s3, o3, i3, a3, c2, l3, u3, d3, p3 = true, m3 = e3.tag, h3 = e3.anchor, f2 = {};
        if (91 === (d3 = e3.input.charCodeAt(e3.position))) s3 = 93, a3 = false, n2 = [];
        else {
          if (123 !== d3) return false;
          s3 = 125, a3 = true, n2 = {};
        }
        for (null !== e3.anchor && (e3.anchorMap[e3.anchor] = n2), d3 = e3.input.charCodeAt(++e3.position); 0 !== d3; ) {
          if (D(e3, true, t3), (d3 = e3.input.charCodeAt(e3.position)) === s3) return e3.position++, e3.tag = m3, e3.anchor = h3, e3.kind = a3 ? "mapping" : "sequence", e3.result = n2, true;
          p3 || P(e3, "missed comma between flow collection entries"), u3 = null, o3 = i3 = false, 63 === d3 && y(e3.input.charCodeAt(e3.position + 1)) && (o3 = i3 = true, e3.position++, D(e3, true, t3)), r3 = e3.line, $(e3, t3, 1, false, true), l3 = e3.tag, c2 = e3.result, D(e3, true, t3), d3 = e3.input.charCodeAt(e3.position), !i3 && e3.line !== r3 || 58 !== d3 || (o3 = true, d3 = e3.input.charCodeAt(++e3.position), D(e3, true, t3), $(e3, t3, 1, false, true), u3 = e3.result), a3 ? O(e3, n2, f2, l3, c2, u3) : o3 ? n2.push(O(e3, null, f2, l3, c2, u3)) : n2.push(c2), D(e3, true, t3), 44 === (d3 = e3.input.charCodeAt(e3.position)) ? (p3 = true, d3 = e3.input.charCodeAt(++e3.position)) : p3 = false;
        }
        P(e3, "unexpected end of the stream within a flow collection");
      })(e2, m2) ? T2 = true : (a2 && (function(e3, t3) {
        var r3, s3, o3, i3, a3 = 1, c2 = false, l3 = false, u3 = t3, d3 = 0, p3 = false;
        if (124 === (i3 = e3.input.charCodeAt(e3.position))) s3 = false;
        else {
          if (62 !== i3) return false;
          s3 = true;
        }
        for (e3.kind = "scalar", e3.result = ""; 0 !== i3; ) if (43 === (i3 = e3.input.charCodeAt(++e3.position)) || 45 === i3) 1 === a3 ? a3 = 43 === i3 ? 3 : 2 : P(e3, "repeat of a chomping mode identifier");
        else {
          if (!((o3 = b(i3)) >= 0)) break;
          0 === o3 ? P(e3, "bad explicit indentation width of a block scalar; it cannot be less than one") : l3 ? P(e3, "repeat of an indentation width identifier") : (u3 = t3 + o3 - 1, l3 = true);
        }
        if (g(i3)) {
          do {
            i3 = e3.input.charCodeAt(++e3.position);
          } while (g(i3));
          if (35 === i3) do {
            i3 = e3.input.charCodeAt(++e3.position);
          } while (!f(i3) && 0 !== i3);
        }
        for (; 0 !== i3; ) {
          for (B(e3), e3.lineIndent = 0, i3 = e3.input.charCodeAt(e3.position); (!l3 || e3.lineIndent < u3) && 32 === i3; ) e3.lineIndent++, i3 = e3.input.charCodeAt(++e3.position);
          if (!l3 && e3.lineIndent > u3 && (u3 = e3.lineIndent), f(i3)) d3++;
          else {
            if (e3.lineIndent < u3) {
              3 === a3 ? e3.result += n.repeat("\n", c2 ? 1 + d3 : d3) : 1 === a3 && c2 && (e3.result += "\n");
              break;
            }
            for (s3 ? g(i3) ? (p3 = true, e3.result += n.repeat("\n", c2 ? 1 + d3 : d3)) : p3 ? (p3 = false, e3.result += n.repeat("\n", d3 + 1)) : 0 === d3 ? c2 && (e3.result += " ") : e3.result += n.repeat("\n", d3) : e3.result += n.repeat("\n", c2 ? 1 + d3 : d3), c2 = true, l3 = true, d3 = 0, r3 = e3.position; !f(i3) && 0 !== i3; ) i3 = e3.input.charCodeAt(++e3.position);
            M(e3, r3, e3.position, false);
          }
        }
        return true;
      })(e2, m2) || (function(e3, t3) {
        var r3, n2, s3;
        if (39 !== (r3 = e3.input.charCodeAt(e3.position))) return false;
        for (e3.kind = "scalar", e3.result = "", e3.position++, n2 = s3 = e3.position; 0 !== (r3 = e3.input.charCodeAt(e3.position)); ) if (39 === r3) {
          if (M(e3, n2, e3.position, true), 39 !== (r3 = e3.input.charCodeAt(++e3.position))) return true;
          n2 = e3.position, e3.position++, s3 = e3.position;
        } else f(r3) ? (M(e3, n2, s3, true), N(e3, D(e3, false, t3)), n2 = s3 = e3.position) : e3.position === e3.lineStart && q(e3) ? P(e3, "unexpected end of the document within a single quoted scalar") : (e3.position++, s3 = e3.position);
        P(e3, "unexpected end of the stream within a single quoted scalar");
      })(e2, m2) || (function(e3, t3) {
        var r3, n2, s3, o3, i3, a3;
        if (34 !== (a3 = e3.input.charCodeAt(e3.position))) return false;
        for (e3.kind = "scalar", e3.result = "", e3.position++, r3 = n2 = e3.position; 0 !== (a3 = e3.input.charCodeAt(e3.position)); ) {
          if (34 === a3) return M(e3, r3, e3.position, true), e3.position++, true;
          if (92 === a3) {
            if (M(e3, r3, e3.position, true), f(a3 = e3.input.charCodeAt(++e3.position))) D(e3, false, t3);
            else if (a3 < 256 && x[a3]) e3.result += E[a3], e3.position++;
            else if ((i3 = _(a3)) > 0) {
              for (s3 = i3, o3 = 0; s3 > 0; s3--) (i3 = v(a3 = e3.input.charCodeAt(++e3.position))) >= 0 ? o3 = (o3 << 4) + i3 : P(e3, "expected hexadecimal character");
              e3.result += k(o3), e3.position++;
            } else P(e3, "unknown escape sequence");
            r3 = n2 = e3.position;
          } else f(a3) ? (M(e3, r3, n2, true), N(e3, D(e3, false, t3)), r3 = n2 = e3.position) : e3.position === e3.lineStart && q(e3) ? P(e3, "unexpected end of the document within a double quoted scalar") : (e3.position++, n2 = e3.position);
        }
        P(e3, "unexpected end of the stream within a double quoted scalar");
      })(e2, m2) ? T2 = true : !(function(e3) {
        var t3, r3, n2;
        if (42 !== (n2 = e3.input.charCodeAt(e3.position))) return false;
        for (n2 = e3.input.charCodeAt(++e3.position), t3 = e3.position; 0 !== n2 && !y(n2) && !w(n2); ) n2 = e3.input.charCodeAt(++e3.position);
        return e3.position === t3 && P(e3, "name of an alias node must contain at least one character"), r3 = e3.input.slice(t3, e3.position), c.call(e3.anchorMap, r3) || P(e3, 'unidentified alias "' + r3 + '"'), e3.result = e3.anchorMap[r3], D(e3, true, -1), true;
      })(e2) ? (function(e3, t3, r3) {
        var n2, s3, o3, i3, a3, c2, l3, u3, d3 = e3.kind, p3 = e3.result;
        if (y(u3 = e3.input.charCodeAt(e3.position)) || w(u3) || 35 === u3 || 38 === u3 || 42 === u3 || 33 === u3 || 124 === u3 || 62 === u3 || 39 === u3 || 34 === u3 || 37 === u3 || 64 === u3 || 96 === u3) return false;
        if ((63 === u3 || 45 === u3) && (y(n2 = e3.input.charCodeAt(e3.position + 1)) || r3 && w(n2))) return false;
        for (e3.kind = "scalar", e3.result = "", s3 = o3 = e3.position, i3 = false; 0 !== u3; ) {
          if (58 === u3) {
            if (y(n2 = e3.input.charCodeAt(e3.position + 1)) || r3 && w(n2)) break;
          } else if (35 === u3) {
            if (y(e3.input.charCodeAt(e3.position - 1))) break;
          } else {
            if (e3.position === e3.lineStart && q(e3) || r3 && w(u3)) break;
            if (f(u3)) {
              if (a3 = e3.line, c2 = e3.lineStart, l3 = e3.lineIndent, D(e3, false, -1), e3.lineIndent >= t3) {
                i3 = true, u3 = e3.input.charCodeAt(e3.position);
                continue;
              }
              e3.position = o3, e3.line = a3, e3.lineStart = c2, e3.lineIndent = l3;
              break;
            }
          }
          i3 && (M(e3, s3, o3, false), N(e3, e3.line - a3), s3 = o3 = e3.position, i3 = false), g(u3) || (o3 = e3.position + 1), u3 = e3.input.charCodeAt(++e3.position);
        }
        return M(e3, s3, o3, false), !!e3.result || (e3.kind = d3, e3.result = p3, false);
      })(e2, m2, 1 === r2) && (T2 = true, null === e2.tag && (e2.tag = "?")) : (T2 = true, null === e2.tag && null === e2.anchor || P(e2, "alias node should not have any properties")), null !== e2.anchor && (e2.anchorMap[e2.anchor] = e2.result)) : 0 === S2 && (T2 = l2 && F(e2, h2))), null !== e2.tag && "!" !== e2.tag) if ("?" === e2.tag) {
        for (null !== e2.result && "scalar" !== e2.kind && P(e2, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e2.kind + '"'), u2 = 0, d2 = e2.implicitTypes.length; u2 < d2; u2 += 1) if ((p2 = e2.implicitTypes[u2]).resolve(e2.result)) {
          e2.result = p2.construct(e2.result), e2.tag = p2.tag, null !== e2.anchor && (e2.anchorMap[e2.anchor] = e2.result);
          break;
        }
      } else c.call(e2.typeMap[e2.kind || "fallback"], e2.tag) ? (p2 = e2.typeMap[e2.kind || "fallback"][e2.tag], null !== e2.result && p2.kind !== e2.kind && P(e2, "unacceptable node kind for !<" + e2.tag + '> tag; it should be "' + p2.kind + '", not "' + e2.kind + '"'), p2.resolve(e2.result) ? (e2.result = p2.construct(e2.result), null !== e2.anchor && (e2.anchorMap[e2.anchor] = e2.result)) : P(e2, "cannot resolve a node with !<" + e2.tag + "> explicit tag")) : P(e2, "unknown tag !<" + e2.tag + ">");
      return null !== e2.listener && e2.listener("close", e2), null !== e2.tag || null !== e2.anchor || T2;
    }
    function j(e2) {
      var t2, r2, n2, s2, o2 = e2.position, i2 = false;
      for (e2.version = null, e2.checkLineBreaks = e2.legacy, e2.tagMap = {}, e2.anchorMap = {}; 0 !== (s2 = e2.input.charCodeAt(e2.position)) && (D(e2, true, -1), s2 = e2.input.charCodeAt(e2.position), !(e2.lineIndent > 0 || 37 !== s2)); ) {
        for (i2 = true, s2 = e2.input.charCodeAt(++e2.position), t2 = e2.position; 0 !== s2 && !y(s2); ) s2 = e2.input.charCodeAt(++e2.position);
        for (n2 = [], (r2 = e2.input.slice(t2, e2.position)).length < 1 && P(e2, "directive name must not be less than one character in length"); 0 !== s2; ) {
          for (; g(s2); ) s2 = e2.input.charCodeAt(++e2.position);
          if (35 === s2) {
            do {
              s2 = e2.input.charCodeAt(++e2.position);
            } while (0 !== s2 && !f(s2));
            break;
          }
          if (f(s2)) break;
          for (t2 = e2.position; 0 !== s2 && !y(s2); ) s2 = e2.input.charCodeAt(++e2.position);
          n2.push(e2.input.slice(t2, e2.position));
        }
        0 !== s2 && B(e2), c.call(R, r2) ? R[r2](e2, r2, n2) : A(e2, 'unknown document directive "' + r2 + '"');
      }
      D(e2, true, -1), 0 === e2.lineIndent && 45 === e2.input.charCodeAt(e2.position) && 45 === e2.input.charCodeAt(e2.position + 1) && 45 === e2.input.charCodeAt(e2.position + 2) ? (e2.position += 3, D(e2, true, -1)) : i2 && P(e2, "directives end mark is expected"), $(e2, e2.lineIndent - 1, 4, false, true), D(e2, true, -1), e2.checkLineBreaks && u.test(e2.input.slice(o2, e2.position)) && A(e2, "non-ASCII line breaks are interpreted as content"), e2.documents.push(e2.result), e2.position === e2.lineStart && q(e2) ? 46 === e2.input.charCodeAt(e2.position) && (e2.position += 3, D(e2, true, -1)) : e2.position < e2.length - 1 && P(e2, "end of the stream or a document separator is expected");
    }
    function G(e2, t2) {
      t2 = t2 || {}, 0 !== (e2 = String(e2)).length && (10 !== e2.charCodeAt(e2.length - 1) && 13 !== e2.charCodeAt(e2.length - 1) && (e2 += "\n"), 65279 === e2.charCodeAt(0) && (e2 = e2.slice(1)));
      var r2 = new T(e2, t2), n2 = e2.indexOf("\0");
      for (-1 !== n2 && (r2.position = n2, P(r2, "null byte is not allowed in input")), r2.input += "\0"; 32 === r2.input.charCodeAt(r2.position); ) r2.lineIndent += 1, r2.position += 1;
      for (; r2.position < r2.length - 1; ) j(r2);
      return r2.documents;
    }
    function z(e2, t2, r2) {
      null !== t2 && "object" == typeof t2 && void 0 === r2 && (r2 = t2, t2 = null);
      var n2 = G(e2, r2);
      if ("function" != typeof t2) return n2;
      for (var s2 = 0, o2 = n2.length; s2 < o2; s2 += 1) t2(n2[s2]);
    }
    function W(e2, t2) {
      var r2 = G(e2, t2);
      if (0 !== r2.length) {
        if (1 === r2.length) return r2[0];
        throw new s("expected a single document in the stream, but found more");
      }
    }
    e.exports.loadAll = z, e.exports.load = W, e.exports.safeLoadAll = function(e2, t2, r2) {
      return "object" == typeof t2 && null !== t2 && void 0 === r2 && (r2 = t2, t2 = null), z(e2, t2, n.extend({ schema: i }, r2));
    }, e.exports.safeLoad = function(e2, t2) {
      return W(e2, n.extend({ schema: i }, t2));
    };
  }