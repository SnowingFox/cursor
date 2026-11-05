// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 77509 range:7290801..7314859
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77509: (e, t, r) => {
    "use strict";
    var n = r(36755), o = r(39425), s = r(72519), i = r(52315), a = r(80599), l = Object.prototype.hasOwnProperty, c = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, u = /[\x85\u2028\u2029]/, d = /[,\[\]\{\}]/, p = /^(?:!|!!|![a-z\-]+!)$/i, h = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function m(e2) {
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
    function v(e2) {
      return 44 === e2 || 91 === e2 || 93 === e2 || 123 === e2 || 125 === e2;
    }
    function w(e2) {
      var t2;
      return 48 <= e2 && e2 <= 57 ? e2 - 48 : 97 <= (t2 = 32 | e2) && t2 <= 102 ? t2 - 97 + 10 : -1;
    }
    function b(e2) {
      return 120 === e2 ? 2 : 117 === e2 ? 4 : 85 === e2 ? 8 : 0;
    }
    function _(e2) {
      return 48 <= e2 && e2 <= 57 ? e2 - 48 : -1;
    }
    function S(e2) {
      return 48 === e2 ? "\0" : 97 === e2 ? "\x07" : 98 === e2 ? "\b" : 116 === e2 || 9 === e2 ? "	" : 110 === e2 ? "\n" : 118 === e2 ? "\v" : 102 === e2 ? "\f" : 114 === e2 ? "\r" : 101 === e2 ? "\x1B" : 32 === e2 ? " " : 34 === e2 ? '"' : 47 === e2 ? "/" : 92 === e2 ? "\\" : 78 === e2 ? "" : 95 === e2 ? " " : 76 === e2 ? "\u2028" : 80 === e2 ? "\u2029" : "";
    }
    function x(e2) {
      return e2 <= 65535 ? String.fromCharCode(e2) : String.fromCharCode(55296 + (e2 - 65536 >> 10), 56320 + (e2 - 65536 & 1023));
    }
    for (var k = new Array(256), E = new Array(256), T = 0; T < 256; T++) k[T] = S(T) ? 1 : 0, E[T] = S(T);
    function C(e2, t2) {
      this.input = e2, this.filename = t2.filename || null, this.schema = t2.schema || a, this.onWarning = t2.onWarning || null, this.legacy = t2.legacy || false, this.json = t2.json || false, this.listener = t2.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e2.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
    }
    function I(e2, t2) {
      return new o(t2, new s(e2.filename, e2.input, e2.position, e2.line, e2.position - e2.lineStart));
    }
    function A(e2, t2) {
      throw I(e2, t2);
    }
    function P(e2, t2) {
      e2.onWarning && e2.onWarning.call(null, I(e2, t2));
    }
    var M = { YAML: function(e2, t2, r2) {
      var n2, o2, s2;
      null !== e2.version && A(e2, "duplication of %YAML directive"), 1 !== r2.length && A(e2, "YAML directive accepts exactly one argument"), null === (n2 = /^([0-9]+)\.([0-9]+)$/.exec(r2[0])) && A(e2, "ill-formed argument of the YAML directive"), o2 = parseInt(n2[1], 10), s2 = parseInt(n2[2], 10), 1 !== o2 && A(e2, "unacceptable YAML version of the document"), e2.version = r2[0], e2.checkLineBreaks = s2 < 2, 1 !== s2 && 2 !== s2 && P(e2, "unsupported YAML version of the document");
    }, TAG: function(e2, t2, r2) {
      var n2, o2;
      2 !== r2.length && A(e2, "TAG directive accepts exactly two arguments"), n2 = r2[0], o2 = r2[1], p.test(n2) || A(e2, "ill-formed tag handle (first argument) of the TAG directive"), l.call(e2.tagMap, n2) && A(e2, 'there is a previously declared suffix for "' + n2 + '" tag handle'), h.test(o2) || A(e2, "ill-formed tag prefix (second argument) of the TAG directive"), e2.tagMap[n2] = o2;
    } };
    function R(e2, t2, r2, n2) {
      var o2, s2, i2, a2;
      if (t2 < r2) {
        if (a2 = e2.input.slice(t2, r2), n2) for (o2 = 0, s2 = a2.length; o2 < s2; o2 += 1) 9 === (i2 = a2.charCodeAt(o2)) || 32 <= i2 && i2 <= 1114111 || A(e2, "expected valid JSON character");
        else c.test(a2) && A(e2, "the stream contains non-printable characters");
        e2.result += a2;
      }
    }
    function O(e2, t2, r2, o2) {
      var s2, i2, a2, c2;
      for (n.isObject(r2) || A(e2, "cannot merge mappings; the provided source object is unacceptable"), a2 = 0, c2 = (s2 = Object.keys(r2)).length; a2 < c2; a2 += 1) i2 = s2[a2], l.call(t2, i2) || (t2[i2] = r2[i2], o2[i2] = true);
    }
    function D(e2, t2, r2, n2, o2, s2, i2, a2) {
      var c2, u2;
      if (Array.isArray(o2)) for (c2 = 0, u2 = (o2 = Array.prototype.slice.call(o2)).length; c2 < u2; c2 += 1) Array.isArray(o2[c2]) && A(e2, "nested arrays are not supported inside keys"), "object" == typeof o2 && "[object Object]" === m(o2[c2]) && (o2[c2] = "[object Object]");
      if ("object" == typeof o2 && "[object Object]" === m(o2) && (o2 = "[object Object]"), o2 = String(o2), null === t2 && (t2 = {}), "tag:yaml.org,2002:merge" === n2) if (Array.isArray(s2)) for (c2 = 0, u2 = s2.length; c2 < u2; c2 += 1) O(e2, t2, s2[c2], r2);
      else O(e2, t2, s2, r2);
      else e2.json || l.call(r2, o2) || !l.call(t2, o2) || (e2.line = i2 || e2.line, e2.position = a2 || e2.position, A(e2, "duplicated mapping key")), t2[o2] = s2, delete r2[o2];
      return t2;
    }
    function N(e2) {
      var t2;
      10 === (t2 = e2.input.charCodeAt(e2.position)) ? e2.position++ : 13 === t2 ? (e2.position++, 10 === e2.input.charCodeAt(e2.position) && e2.position++) : A(e2, "a line break is expected"), e2.line += 1, e2.lineStart = e2.position;
    }
    function F(e2, t2, r2) {
      for (var n2 = 0, o2 = e2.input.charCodeAt(e2.position); 0 !== o2; ) {
        for (; g(o2); ) o2 = e2.input.charCodeAt(++e2.position);
        if (t2 && 35 === o2) do {
          o2 = e2.input.charCodeAt(++e2.position);
        } while (10 !== o2 && 13 !== o2 && 0 !== o2);
        if (!f(o2)) break;
        for (N(e2), o2 = e2.input.charCodeAt(e2.position), n2++, e2.lineIndent = 0; 32 === o2; ) e2.lineIndent++, o2 = e2.input.charCodeAt(++e2.position);
      }
      return -1 !== r2 && 0 !== n2 && e2.lineIndent < r2 && P(e2, "deficient indentation"), n2;
    }
    function L(e2) {
      var t2, r2 = e2.position;
      return !(45 !== (t2 = e2.input.charCodeAt(r2)) && 46 !== t2 || t2 !== e2.input.charCodeAt(r2 + 1) || t2 !== e2.input.charCodeAt(r2 + 2) || (r2 += 3, 0 !== (t2 = e2.input.charCodeAt(r2)) && !y(t2)));
    }
    function U(e2, t2) {
      1 === t2 ? e2.result += " " : t2 > 1 && (e2.result += n.repeat("\n", t2 - 1));
    }
    function B(e2, t2) {
      var r2, n2, o2 = e2.tag, s2 = e2.anchor, i2 = [], a2 = false;
      for (null !== e2.anchor && (e2.anchorMap[e2.anchor] = i2), n2 = e2.input.charCodeAt(e2.position); 0 !== n2 && 45 === n2 && y(e2.input.charCodeAt(e2.position + 1)); ) if (a2 = true, e2.position++, F(e2, true, -1) && e2.lineIndent <= t2) i2.push(null), n2 = e2.input.charCodeAt(e2.position);
      else if (r2 = e2.line, j(e2, t2, 3, false, true), i2.push(e2.result), F(e2, true, -1), n2 = e2.input.charCodeAt(e2.position), (e2.line === r2 || e2.lineIndent > t2) && 0 !== n2) A(e2, "bad indentation of a sequence entry");
      else if (e2.lineIndent < t2) break;
      return !!a2 && (e2.tag = o2, e2.anchor = s2, e2.kind = "sequence", e2.result = i2, true);
    }
    function $(e2) {
      var t2, r2, n2, o2, s2 = false, i2 = false;
      if (33 !== (o2 = e2.input.charCodeAt(e2.position))) return false;
      if (null !== e2.tag && A(e2, "duplication of a tag property"), 60 === (o2 = e2.input.charCodeAt(++e2.position)) ? (s2 = true, o2 = e2.input.charCodeAt(++e2.position)) : 33 === o2 ? (i2 = true, r2 = "!!", o2 = e2.input.charCodeAt(++e2.position)) : r2 = "!", t2 = e2.position, s2) {
        do {
          o2 = e2.input.charCodeAt(++e2.position);
        } while (0 !== o2 && 62 !== o2);
        e2.position < e2.length ? (n2 = e2.input.slice(t2, e2.position), o2 = e2.input.charCodeAt(++e2.position)) : A(e2, "unexpected end of the stream within a verbatim tag");
      } else {
        for (; 0 !== o2 && !y(o2); ) 33 === o2 && (i2 ? A(e2, "tag suffix cannot contain exclamation marks") : (r2 = e2.input.slice(t2 - 1, e2.position + 1), p.test(r2) || A(e2, "named tag handle cannot contain such characters"), i2 = true, t2 = e2.position + 1)), o2 = e2.input.charCodeAt(++e2.position);
        n2 = e2.input.slice(t2, e2.position), d.test(n2) && A(e2, "tag suffix cannot contain flow indicator characters");
      }
      return n2 && !h.test(n2) && A(e2, "tag name cannot contain such characters: " + n2), s2 ? e2.tag = n2 : l.call(e2.tagMap, r2) ? e2.tag = e2.tagMap[r2] + n2 : "!" === r2 ? e2.tag = "!" + n2 : "!!" === r2 ? e2.tag = "tag:yaml.org,2002:" + n2 : A(e2, 'undeclared tag handle "' + r2 + '"'), true;
    }
    function q(e2) {
      var t2, r2;
      if (38 !== (r2 = e2.input.charCodeAt(e2.position))) return false;
      for (null !== e2.anchor && A(e2, "duplication of an anchor property"), r2 = e2.input.charCodeAt(++e2.position), t2 = e2.position; 0 !== r2 && !y(r2) && !v(r2); ) r2 = e2.input.charCodeAt(++e2.position);
      return e2.position === t2 && A(e2, "name of an anchor node must contain at least one character"), e2.anchor = e2.input.slice(t2, e2.position), true;
    }
    function j(e2, t2, r2, o2, s2) {
      var i2, a2, c2, u2, d2, p2, h2, m2, S2 = 1, T2 = false, C2 = false;
      if (null !== e2.listener && e2.listener("open", e2), e2.tag = null, e2.anchor = null, e2.kind = null, e2.result = null, i2 = a2 = c2 = 4 === r2 || 3 === r2, o2 && F(e2, true, -1) && (T2 = true, e2.lineIndent > t2 ? S2 = 1 : e2.lineIndent === t2 ? S2 = 0 : e2.lineIndent < t2 && (S2 = -1)), 1 === S2) for (; $(e2) || q(e2); ) F(e2, true, -1) ? (T2 = true, c2 = i2, e2.lineIndent > t2 ? S2 = 1 : e2.lineIndent === t2 ? S2 = 0 : e2.lineIndent < t2 && (S2 = -1)) : c2 = false;
      if (c2 && (c2 = T2 || s2), 1 !== S2 && 4 !== r2 || (h2 = 1 === r2 || 2 === r2 ? t2 : t2 + 1, m2 = e2.position - e2.lineStart, 1 === S2 ? c2 && (B(e2, m2) || (function(e3, t3, r3) {
        var n2, o3, s3, i3, a3, l2 = e3.tag, c3 = e3.anchor, u3 = {}, d3 = {}, p3 = null, h3 = null, m3 = null, f2 = false, v2 = false;
        for (null !== e3.anchor && (e3.anchorMap[e3.anchor] = u3), a3 = e3.input.charCodeAt(e3.position); 0 !== a3; ) {
          if (n2 = e3.input.charCodeAt(e3.position + 1), s3 = e3.line, i3 = e3.position, 63 !== a3 && 58 !== a3 || !y(n2)) {
            if (!j(e3, r3, 2, false, true)) break;
            if (e3.line === s3) {
              for (a3 = e3.input.charCodeAt(e3.position); g(a3); ) a3 = e3.input.charCodeAt(++e3.position);
              if (58 === a3) y(a3 = e3.input.charCodeAt(++e3.position)) || A(e3, "a whitespace character is expected after the key-value separator within a block mapping"), f2 && (D(e3, u3, d3, p3, h3, null), p3 = h3 = m3 = null), v2 = true, f2 = false, o3 = false, p3 = e3.tag, h3 = e3.result;
              else {
                if (!v2) return e3.tag = l2, e3.anchor = c3, true;
                A(e3, "can not read an implicit mapping pair; a colon is missed");
              }
            } else {
              if (!v2) return e3.tag = l2, e3.anchor = c3, true;
              A(e3, "can not read a block mapping entry; a multiline key may not be an implicit key");
            }
          } else 63 === a3 ? (f2 && (D(e3, u3, d3, p3, h3, null), p3 = h3 = m3 = null), v2 = true, f2 = true, o3 = true) : f2 ? (f2 = false, o3 = true) : A(e3, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e3.position += 1, a3 = n2;
          if ((e3.line === s3 || e3.lineIndent > t3) && (j(e3, t3, 4, true, o3) && (f2 ? h3 = e3.result : m3 = e3.result), f2 || (D(e3, u3, d3, p3, h3, m3, s3, i3), p3 = h3 = m3 = null), F(e3, true, -1), a3 = e3.input.charCodeAt(e3.position)), e3.lineIndent > t3 && 0 !== a3) A(e3, "bad indentation of a mapping entry");
          else if (e3.lineIndent < t3) break;
        }
        return f2 && D(e3, u3, d3, p3, h3, null), v2 && (e3.tag = l2, e3.anchor = c3, e3.kind = "mapping", e3.result = u3), v2;
      })(e2, m2, h2)) || (function(e3, t3) {
        var r3, n2, o3, s3, i3, a3, l2, c3, u3, d3, p3 = true, h3 = e3.tag, m3 = e3.anchor, f2 = {};
        if (91 === (d3 = e3.input.charCodeAt(e3.position))) o3 = 93, a3 = false, n2 = [];
        else {
          if (123 !== d3) return false;
          o3 = 125, a3 = true, n2 = {};
        }
        for (null !== e3.anchor && (e3.anchorMap[e3.anchor] = n2), d3 = e3.input.charCodeAt(++e3.position); 0 !== d3; ) {
          if (F(e3, true, t3), (d3 = e3.input.charCodeAt(e3.position)) === o3) return e3.position++, e3.tag = h3, e3.anchor = m3, e3.kind = a3 ? "mapping" : "sequence", e3.result = n2, true;
          p3 || A(e3, "missed comma between flow collection entries"), u3 = null, s3 = i3 = false, 63 === d3 && y(e3.input.charCodeAt(e3.position + 1)) && (s3 = i3 = true, e3.position++, F(e3, true, t3)), r3 = e3.line, j(e3, t3, 1, false, true), c3 = e3.tag, l2 = e3.result, F(e3, true, t3), d3 = e3.input.charCodeAt(e3.position), !i3 && e3.line !== r3 || 58 !== d3 || (s3 = true, d3 = e3.input.charCodeAt(++e3.position), F(e3, true, t3), j(e3, t3, 1, false, true), u3 = e3.result), a3 ? D(e3, n2, f2, c3, l2, u3) : s3 ? n2.push(D(e3, null, f2, c3, l2, u3)) : n2.push(l2), F(e3, true, t3), 44 === (d3 = e3.input.charCodeAt(e3.position)) ? (p3 = true, d3 = e3.input.charCodeAt(++e3.position)) : p3 = false;
        }
        A(e3, "unexpected end of the stream within a flow collection");
      })(e2, h2) ? C2 = true : (a2 && (function(e3, t3) {
        var r3, o3, s3, i3, a3 = 1, l2 = false, c3 = false, u3 = t3, d3 = 0, p3 = false;
        if (124 === (i3 = e3.input.charCodeAt(e3.position))) o3 = false;
        else {
          if (62 !== i3) return false;
          o3 = true;
        }
        for (e3.kind = "scalar", e3.result = ""; 0 !== i3; ) if (43 === (i3 = e3.input.charCodeAt(++e3.position)) || 45 === i3) 1 === a3 ? a3 = 43 === i3 ? 3 : 2 : A(e3, "repeat of a chomping mode identifier");
        else {
          if (!((s3 = _(i3)) >= 0)) break;
          0 === s3 ? A(e3, "bad explicit indentation width of a block scalar; it cannot be less than one") : c3 ? A(e3, "repeat of an indentation width identifier") : (u3 = t3 + s3 - 1, c3 = true);
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
          for (N(e3), e3.lineIndent = 0, i3 = e3.input.charCodeAt(e3.position); (!c3 || e3.lineIndent < u3) && 32 === i3; ) e3.lineIndent++, i3 = e3.input.charCodeAt(++e3.position);
          if (!c3 && e3.lineIndent > u3 && (u3 = e3.lineIndent), f(i3)) d3++;
          else {
            if (e3.lineIndent < u3) {
              3 === a3 ? e3.result += n.repeat("\n", l2 ? 1 + d3 : d3) : 1 === a3 && l2 && (e3.result += "\n");
              break;
            }
            for (o3 ? g(i3) ? (p3 = true, e3.result += n.repeat("\n", l2 ? 1 + d3 : d3)) : p3 ? (p3 = false, e3.result += n.repeat("\n", d3 + 1)) : 0 === d3 ? l2 && (e3.result += " ") : e3.result += n.repeat("\n", d3) : e3.result += n.repeat("\n", l2 ? 1 + d3 : d3), l2 = true, c3 = true, d3 = 0, r3 = e3.position; !f(i3) && 0 !== i3; ) i3 = e3.input.charCodeAt(++e3.position);
            R(e3, r3, e3.position, false);
          }
        }
        return true;
      })(e2, h2) || (function(e3, t3) {
        var r3, n2, o3;
        if (39 !== (r3 = e3.input.charCodeAt(e3.position))) return false;
        for (e3.kind = "scalar", e3.result = "", e3.position++, n2 = o3 = e3.position; 0 !== (r3 = e3.input.charCodeAt(e3.position)); ) if (39 === r3) {
          if (R(e3, n2, e3.position, true), 39 !== (r3 = e3.input.charCodeAt(++e3.position))) return true;
          n2 = e3.position, e3.position++, o3 = e3.position;
        } else f(r3) ? (R(e3, n2, o3, true), U(e3, F(e3, false, t3)), n2 = o3 = e3.position) : e3.position === e3.lineStart && L(e3) ? A(e3, "unexpected end of the document within a single quoted scalar") : (e3.position++, o3 = e3.position);
        A(e3, "unexpected end of the stream within a single quoted scalar");
      })(e2, h2) || (function(e3, t3) {
        var r3, n2, o3, s3, i3, a3;
        if (34 !== (a3 = e3.input.charCodeAt(e3.position))) return false;
        for (e3.kind = "scalar", e3.result = "", e3.position++, r3 = n2 = e3.position; 0 !== (a3 = e3.input.charCodeAt(e3.position)); ) {
          if (34 === a3) return R(e3, r3, e3.position, true), e3.position++, true;
          if (92 === a3) {
            if (R(e3, r3, e3.position, true), f(a3 = e3.input.charCodeAt(++e3.position))) F(e3, false, t3);
            else if (a3 < 256 && k[a3]) e3.result += E[a3], e3.position++;
            else if ((i3 = b(a3)) > 0) {
              for (o3 = i3, s3 = 0; o3 > 0; o3--) (i3 = w(a3 = e3.input.charCodeAt(++e3.position))) >= 0 ? s3 = (s3 << 4) + i3 : A(e3, "expected hexadecimal character");
              e3.result += x(s3), e3.position++;
            } else A(e3, "unknown escape sequence");
            r3 = n2 = e3.position;
          } else f(a3) ? (R(e3, r3, n2, true), U(e3, F(e3, false, t3)), r3 = n2 = e3.position) : e3.position === e3.lineStart && L(e3) ? A(e3, "unexpected end of the document within a double quoted scalar") : (e3.position++, n2 = e3.position);
        }
        A(e3, "unexpected end of the stream within a double quoted scalar");
      })(e2, h2) ? C2 = true : !(function(e3) {
        var t3, r3, n2;
        if (42 !== (n2 = e3.input.charCodeAt(e3.position))) return false;
        for (n2 = e3.input.charCodeAt(++e3.position), t3 = e3.position; 0 !== n2 && !y(n2) && !v(n2); ) n2 = e3.input.charCodeAt(++e3.position);
        return e3.position === t3 && A(e3, "name of an alias node must contain at least one character"), r3 = e3.input.slice(t3, e3.position), l.call(e3.anchorMap, r3) || A(e3, 'unidentified alias "' + r3 + '"'), e3.result = e3.anchorMap[r3], F(e3, true, -1), true;
      })(e2) ? (function(e3, t3, r3) {
        var n2, o3, s3, i3, a3, l2, c3, u3, d3 = e3.kind, p3 = e3.result;
        if (y(u3 = e3.input.charCodeAt(e3.position)) || v(u3) || 35 === u3 || 38 === u3 || 42 === u3 || 33 === u3 || 124 === u3 || 62 === u3 || 39 === u3 || 34 === u3 || 37 === u3 || 64 === u3 || 96 === u3) return false;
        if ((63 === u3 || 45 === u3) && (y(n2 = e3.input.charCodeAt(e3.position + 1)) || r3 && v(n2))) return false;
        for (e3.kind = "scalar", e3.result = "", o3 = s3 = e3.position, i3 = false; 0 !== u3; ) {
          if (58 === u3) {
            if (y(n2 = e3.input.charCodeAt(e3.position + 1)) || r3 && v(n2)) break;
          } else if (35 === u3) {
            if (y(e3.input.charCodeAt(e3.position - 1))) break;
          } else {
            if (e3.position === e3.lineStart && L(e3) || r3 && v(u3)) break;
            if (f(u3)) {
              if (a3 = e3.line, l2 = e3.lineStart, c3 = e3.lineIndent, F(e3, false, -1), e3.lineIndent >= t3) {
                i3 = true, u3 = e3.input.charCodeAt(e3.position);
                continue;
              }
              e3.position = s3, e3.line = a3, e3.lineStart = l2, e3.lineIndent = c3;
              break;
            }
          }
          i3 && (R(e3, o3, s3, false), U(e3, e3.line - a3), o3 = s3 = e3.position, i3 = false), g(u3) || (s3 = e3.position + 1), u3 = e3.input.charCodeAt(++e3.position);
        }
        return R(e3, o3, s3, false), !!e3.result || (e3.kind = d3, e3.result = p3, false);
      })(e2, h2, 1 === r2) && (C2 = true, null === e2.tag && (e2.tag = "?")) : (C2 = true, null === e2.tag && null === e2.anchor || A(e2, "alias node should not have any properties")), null !== e2.anchor && (e2.anchorMap[e2.anchor] = e2.result)) : 0 === S2 && (C2 = c2 && B(e2, m2))), null !== e2.tag && "!" !== e2.tag) if ("?" === e2.tag) {
        for (null !== e2.result && "scalar" !== e2.kind && A(e2, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e2.kind + '"'), u2 = 0, d2 = e2.implicitTypes.length; u2 < d2; u2 += 1) if ((p2 = e2.implicitTypes[u2]).resolve(e2.result)) {
          e2.result = p2.construct(e2.result), e2.tag = p2.tag, null !== e2.anchor && (e2.anchorMap[e2.anchor] = e2.result);
          break;
        }
      } else l.call(e2.typeMap[e2.kind || "fallback"], e2.tag) ? (p2 = e2.typeMap[e2.kind || "fallback"][e2.tag], null !== e2.result && p2.kind !== e2.kind && A(e2, "unacceptable node kind for !<" + e2.tag + '> tag; it should be "' + p2.kind + '", not "' + e2.kind + '"'), p2.resolve(e2.result) ? (e2.result = p2.construct(e2.result), null !== e2.anchor && (e2.anchorMap[e2.anchor] = e2.result)) : A(e2, "cannot resolve a node with !<" + e2.tag + "> explicit tag")) : A(e2, "unknown tag !<" + e2.tag + ">");
      return null !== e2.listener && e2.listener("close", e2), null !== e2.tag || null !== e2.anchor || C2;
    }
    function J(e2) {
      var t2, r2, n2, o2, s2 = e2.position, i2 = false;
      for (e2.version = null, e2.checkLineBreaks = e2.legacy, e2.tagMap = {}, e2.anchorMap = {}; 0 !== (o2 = e2.input.charCodeAt(e2.position)) && (F(e2, true, -1), o2 = e2.input.charCodeAt(e2.position), !(e2.lineIndent > 0 || 37 !== o2)); ) {
        for (i2 = true, o2 = e2.input.charCodeAt(++e2.position), t2 = e2.position; 0 !== o2 && !y(o2); ) o2 = e2.input.charCodeAt(++e2.position);
        for (n2 = [], (r2 = e2.input.slice(t2, e2.position)).length < 1 && A(e2, "directive name must not be less than one character in length"); 0 !== o2; ) {
          for (; g(o2); ) o2 = e2.input.charCodeAt(++e2.position);
          if (35 === o2) {
            do {
              o2 = e2.input.charCodeAt(++e2.position);
            } while (0 !== o2 && !f(o2));
            break;
          }
          if (f(o2)) break;
          for (t2 = e2.position; 0 !== o2 && !y(o2); ) o2 = e2.input.charCodeAt(++e2.position);
          n2.push(e2.input.slice(t2, e2.position));
        }
        0 !== o2 && N(e2), l.call(M, r2) ? M[r2](e2, r2, n2) : P(e2, 'unknown document directive "' + r2 + '"');
      }
      F(e2, true, -1), 0 === e2.lineIndent && 45 === e2.input.charCodeAt(e2.position) && 45 === e2.input.charCodeAt(e2.position + 1) && 45 === e2.input.charCodeAt(e2.position + 2) ? (e2.position += 3, F(e2, true, -1)) : i2 && A(e2, "directives end mark is expected"), j(e2, e2.lineIndent - 1, 4, false, true), F(e2, true, -1), e2.checkLineBreaks && u.test(e2.input.slice(s2, e2.position)) && P(e2, "non-ASCII line breaks are interpreted as content"), e2.documents.push(e2.result), e2.position === e2.lineStart && L(e2) ? 46 === e2.input.charCodeAt(e2.position) && (e2.position += 3, F(e2, true, -1)) : e2.position < e2.length - 1 && A(e2, "end of the stream or a document separator is expected");
    }
    function z(e2, t2) {
      t2 = t2 || {}, 0 !== (e2 = String(e2)).length && (10 !== e2.charCodeAt(e2.length - 1) && 13 !== e2.charCodeAt(e2.length - 1) && (e2 += "\n"), 65279 === e2.charCodeAt(0) && (e2 = e2.slice(1)));
      var r2 = new C(e2, t2), n2 = e2.indexOf("\0");
      for (-1 !== n2 && (r2.position = n2, A(r2, "null byte is not allowed in input")), r2.input += "\0"; 32 === r2.input.charCodeAt(r2.position); ) r2.lineIndent += 1, r2.position += 1;
      for (; r2.position < r2.length - 1; ) J(r2);
      return r2.documents;
    }
    function H(e2, t2, r2) {
      null !== t2 && "object" == typeof t2 && void 0 === r2 && (r2 = t2, t2 = null);
      var n2 = z(e2, r2);
      if ("function" != typeof t2) return n2;
      for (var o2 = 0, s2 = n2.length; o2 < s2; o2 += 1) t2(n2[o2]);
    }
    function W(e2, t2) {
      var r2 = z(e2, t2);
      if (0 !== r2.length) {
        if (1 === r2.length) return r2[0];
        throw new o("expected a single document in the stream, but found more");
      }
    }
    e.exports.loadAll = H, e.exports.load = W, e.exports.safeLoadAll = function(e2, t2, r2) {
      return "object" == typeof t2 && null !== t2 && void 0 === r2 && (r2 = t2, t2 = null), H(e2, t2, n.extend({ schema: i }, r2));
    }, e.exports.safeLoad = function(e2, t2) {
      return W(e2, n.extend({ schema: i }, t2));
    };
  }