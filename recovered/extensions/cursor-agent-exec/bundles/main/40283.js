// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 40283 range:3129786..3160609
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
40283: (e, t, r) => {
    "use strict";
    function n(e2, t2 = false) {
      const r2 = e2.length;
      let n2 = 0, a2 = "", c2 = 0, l2 = 16, u2 = 0, d2 = 0, p2 = 0, m2 = 0, h2 = 0;
      function f2(t3, r3) {
        let s2 = 0, o2 = 0;
        for (; s2 < t3 || !r3; ) {
          let t4 = e2.charCodeAt(n2);
          if (t4 >= 48 && t4 <= 57) o2 = 16 * o2 + t4 - 48;
          else if (t4 >= 65 && t4 <= 70) o2 = 16 * o2 + t4 - 65 + 10;
          else {
            if (!(t4 >= 97 && t4 <= 102)) break;
            o2 = 16 * o2 + t4 - 97 + 10;
          }
          n2++, s2++;
        }
        return s2 < t3 && (o2 = -1), o2;
      }
      function g2() {
        if (a2 = "", h2 = 0, c2 = n2, d2 = u2, m2 = p2, n2 >= r2) return c2 = r2, l2 = 17;
        let t3 = e2.charCodeAt(n2);
        if (s(t3)) {
          do {
            n2++, a2 += String.fromCharCode(t3), t3 = e2.charCodeAt(n2);
          } while (s(t3));
          return l2 = 15;
        }
        if (o(t3)) return n2++, a2 += String.fromCharCode(t3), 13 === t3 && 10 === e2.charCodeAt(n2) && (n2++, a2 += "\n"), u2++, p2 = n2, l2 = 14;
        switch (t3) {
          case 123:
            return n2++, l2 = 1;
          case 125:
            return n2++, l2 = 2;
          case 91:
            return n2++, l2 = 3;
          case 93:
            return n2++, l2 = 4;
          case 58:
            return n2++, l2 = 6;
          case 44:
            return n2++, l2 = 5;
          case 34:
            return n2++, a2 = (function() {
              let t4 = "", s3 = n2;
              for (; ; ) {
                if (n2 >= r2) {
                  t4 += e2.substring(s3, n2), h2 = 2;
                  break;
                }
                const i2 = e2.charCodeAt(n2);
                if (34 === i2) {
                  t4 += e2.substring(s3, n2), n2++;
                  break;
                }
                if (92 !== i2) {
                  if (i2 >= 0 && i2 <= 31) {
                    if (o(i2)) {
                      t4 += e2.substring(s3, n2), h2 = 2;
                      break;
                    }
                    h2 = 6;
                  }
                  n2++;
                } else {
                  if (t4 += e2.substring(s3, n2), n2++, n2 >= r2) {
                    h2 = 2;
                    break;
                  }
                  switch (e2.charCodeAt(n2++)) {
                    case 34:
                      t4 += '"';
                      break;
                    case 92:
                      t4 += "\\";
                      break;
                    case 47:
                      t4 += "/";
                      break;
                    case 98:
                      t4 += "\b";
                      break;
                    case 102:
                      t4 += "\f";
                      break;
                    case 110:
                      t4 += "\n";
                      break;
                    case 114:
                      t4 += "\r";
                      break;
                    case 116:
                      t4 += "	";
                      break;
                    case 117:
                      const e3 = f2(4, true);
                      e3 >= 0 ? t4 += String.fromCharCode(e3) : h2 = 4;
                      break;
                    default:
                      h2 = 5;
                  }
                  s3 = n2;
                }
              }
              return t4;
            })(), l2 = 10;
          case 47:
            const s2 = n2 - 1;
            if (47 === e2.charCodeAt(n2 + 1)) {
              for (n2 += 2; n2 < r2 && !o(e2.charCodeAt(n2)); ) n2++;
              return a2 = e2.substring(s2, n2), l2 = 12;
            }
            if (42 === e2.charCodeAt(n2 + 1)) {
              n2 += 2;
              const t4 = r2 - 1;
              let i2 = false;
              for (; n2 < t4; ) {
                const t5 = e2.charCodeAt(n2);
                if (42 === t5 && 47 === e2.charCodeAt(n2 + 1)) {
                  n2 += 2, i2 = true;
                  break;
                }
                n2++, o(t5) && (13 === t5 && 10 === e2.charCodeAt(n2) && n2++, u2++, p2 = n2);
              }
              return i2 || (n2++, h2 = 1), a2 = e2.substring(s2, n2), l2 = 13;
            }
            return a2 += String.fromCharCode(t3), n2++, l2 = 16;
          case 45:
            if (a2 += String.fromCharCode(t3), n2++, n2 === r2 || !i(e2.charCodeAt(n2))) return l2 = 16;
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return a2 += (function() {
              let t4 = n2;
              if (48 === e2.charCodeAt(n2)) n2++;
              else for (n2++; n2 < e2.length && i(e2.charCodeAt(n2)); ) n2++;
              if (n2 < e2.length && 46 === e2.charCodeAt(n2)) {
                if (n2++, !(n2 < e2.length && i(e2.charCodeAt(n2)))) return h2 = 3, e2.substring(t4, n2);
                for (n2++; n2 < e2.length && i(e2.charCodeAt(n2)); ) n2++;
              }
              let r3 = n2;
              if (n2 < e2.length && (69 === e2.charCodeAt(n2) || 101 === e2.charCodeAt(n2))) if (n2++, (n2 < e2.length && 43 === e2.charCodeAt(n2) || 45 === e2.charCodeAt(n2)) && n2++, n2 < e2.length && i(e2.charCodeAt(n2))) {
                for (n2++; n2 < e2.length && i(e2.charCodeAt(n2)); ) n2++;
                r3 = n2;
              } else h2 = 3;
              return e2.substring(t4, r3);
            })(), l2 = 11;
          default:
            for (; n2 < r2 && y2(t3); ) n2++, t3 = e2.charCodeAt(n2);
            if (c2 !== n2) {
              switch (a2 = e2.substring(c2, n2), a2) {
                case "true":
                  return l2 = 8;
                case "false":
                  return l2 = 9;
                case "null":
                  return l2 = 7;
              }
              return l2 = 16;
            }
            return a2 += String.fromCharCode(t3), n2++, l2 = 16;
        }
      }
      function y2(e3) {
        if (s(e3) || o(e3)) return false;
        switch (e3) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return false;
        }
        return true;
      }
      return { setPosition: function(e3) {
        n2 = e3, a2 = "", c2 = 0, l2 = 16, h2 = 0;
      }, getPosition: () => n2, scan: t2 ? function() {
        let e3;
        do {
          e3 = g2();
        } while (e3 >= 12 && e3 <= 15);
        return e3;
      } : g2, getToken: () => l2, getTokenValue: () => a2, getTokenOffset: () => c2, getTokenLength: () => n2 - c2, getTokenStartLine: () => d2, getTokenStartCharacter: () => c2 - m2, getTokenError: () => h2 };
    }
    function s(e2) {
      return 32 === e2 || 9 === e2;
    }
    function o(e2) {
      return 10 === e2 || 13 === e2;
    }
    function i(e2) {
      return e2 >= 48 && e2 <= 57;
    }
    var a;
    r.d(t, { ct: () => P, JP: () => C, qg: () => E, _n: () => T }), (function(e2) {
      e2[e2.lineFeed = 10] = "lineFeed", e2[e2.carriageReturn = 13] = "carriageReturn", e2[e2.space = 32] = "space", e2[e2._0 = 48] = "_0", e2[e2._1 = 49] = "_1", e2[e2._2 = 50] = "_2", e2[e2._3 = 51] = "_3", e2[e2._4 = 52] = "_4", e2[e2._5 = 53] = "_5", e2[e2._6 = 54] = "_6", e2[e2._7 = 55] = "_7", e2[e2._8 = 56] = "_8", e2[e2._9 = 57] = "_9", e2[e2.a = 97] = "a", e2[e2.b = 98] = "b", e2[e2.c = 99] = "c", e2[e2.d = 100] = "d", e2[e2.e = 101] = "e", e2[e2.f = 102] = "f", e2[e2.g = 103] = "g", e2[e2.h = 104] = "h", e2[e2.i = 105] = "i", e2[e2.j = 106] = "j", e2[e2.k = 107] = "k", e2[e2.l = 108] = "l", e2[e2.m = 109] = "m", e2[e2.n = 110] = "n", e2[e2.o = 111] = "o", e2[e2.p = 112] = "p", e2[e2.q = 113] = "q", e2[e2.r = 114] = "r", e2[e2.s = 115] = "s", e2[e2.t = 116] = "t", e2[e2.u = 117] = "u", e2[e2.v = 118] = "v", e2[e2.w = 119] = "w", e2[e2.x = 120] = "x", e2[e2.y = 121] = "y", e2[e2.z = 122] = "z", e2[e2.A = 65] = "A", e2[e2.B = 66] = "B", e2[e2.C = 67] = "C", e2[e2.D = 68] = "D", e2[e2.E = 69] = "E", e2[e2.F = 70] = "F", e2[e2.G = 71] = "G", e2[e2.H = 72] = "H", e2[e2.I = 73] = "I", e2[e2.J = 74] = "J", e2[e2.K = 75] = "K", e2[e2.L = 76] = "L", e2[e2.M = 77] = "M", e2[e2.N = 78] = "N", e2[e2.O = 79] = "O", e2[e2.P = 80] = "P", e2[e2.Q = 81] = "Q", e2[e2.R = 82] = "R", e2[e2.S = 83] = "S", e2[e2.T = 84] = "T", e2[e2.U = 85] = "U", e2[e2.V = 86] = "V", e2[e2.W = 87] = "W", e2[e2.X = 88] = "X", e2[e2.Y = 89] = "Y", e2[e2.Z = 90] = "Z", e2[e2.asterisk = 42] = "asterisk", e2[e2.backslash = 92] = "backslash", e2[e2.closeBrace = 125] = "closeBrace", e2[e2.closeBracket = 93] = "closeBracket", e2[e2.colon = 58] = "colon", e2[e2.comma = 44] = "comma", e2[e2.dot = 46] = "dot", e2[e2.doubleQuote = 34] = "doubleQuote", e2[e2.minus = 45] = "minus", e2[e2.openBrace = 123] = "openBrace", e2[e2.openBracket = 91] = "openBracket", e2[e2.plus = 43] = "plus", e2[e2.slash = 47] = "slash", e2[e2.formFeed = 12] = "formFeed", e2[e2.tab = 9] = "tab";
    })(a || (a = {}));
    const c = new Array(20).fill(0).map((e2, t2) => " ".repeat(t2)), l = 200, u = { " ": { "\n": new Array(l).fill(0).map((e2, t2) => "\n" + " ".repeat(t2)), "\r": new Array(l).fill(0).map((e2, t2) => "\r" + " ".repeat(t2)), "\r\n": new Array(l).fill(0).map((e2, t2) => "\r\n" + " ".repeat(t2)) }, "	": { "\n": new Array(l).fill(0).map((e2, t2) => "\n" + "	".repeat(t2)), "\r": new Array(l).fill(0).map((e2, t2) => "\r" + "	".repeat(t2)), "\r\n": new Array(l).fill(0).map((e2, t2) => "\r\n" + "	".repeat(t2)) } }, d = ["\n", "\r", "\r\n"];
    function p(e2, t2, r2) {
      let s2, o2, i2, a2, l2;
      if (t2) {
        for (a2 = t2.offset, l2 = a2 + t2.length, i2 = a2; i2 > 0 && !h(e2, i2 - 1); ) i2--;
        let n2 = l2;
        for (; n2 < e2.length && !h(e2, n2); ) n2++;
        o2 = e2.substring(i2, n2), s2 = (function(e3, t3) {
          let r3 = 0, n3 = 0;
          const s3 = t3.tabSize || 4;
          for (; r3 < e3.length; ) {
            let t4 = e3.charAt(r3);
            if (t4 === c[1]) n3++;
            else {
              if ("	" !== t4) break;
              n3 += s3;
            }
            r3++;
          }
          return Math.floor(n3 / s3);
        })(o2, r2);
      } else o2 = e2, s2 = 0, i2 = 0, a2 = 0, l2 = e2.length;
      const p2 = (function(e3, t3) {
        for (let e4 = 0; e4 < t3.length; e4++) {
          const r3 = t3.charAt(e4);
          if ("\r" === r3) return e4 + 1 < t3.length && "\n" === t3.charAt(e4 + 1) ? "\r\n" : "\r";
          if ("\n" === r3) return "\n";
        }
        return e3 && e3.eol || "\n";
      })(r2, e2), f2 = d.includes(p2);
      let g2, y2 = 0, w2 = 0;
      g2 = r2.insertSpaces ? c[r2.tabSize || 4] ?? m(c[1], r2.tabSize || 4) : "	";
      const v2 = "	" === g2 ? "	" : " ";
      let _2 = n(o2, false), b2 = false;
      function S2() {
        if (y2 > 1) return m(p2, y2) + m(g2, s2 + w2);
        const e3 = g2.length * (s2 + w2);
        return !f2 || e3 > u[v2][p2].length ? p2 + m(g2, s2 + w2) : e3 <= 0 ? p2 : u[v2][p2][e3];
      }
      function k2() {
        let e3 = _2.scan();
        for (y2 = 0; 15 === e3 || 14 === e3; ) 14 === e3 && r2.keepLines ? y2 += 1 : 14 === e3 && (y2 = 1), e3 = _2.scan();
        return b2 = 16 === e3 || 0 !== _2.getTokenError(), e3;
      }
      const x2 = [];
      function E2(r3, n2, s3) {
        b2 || t2 && !(n2 < l2 && s3 > a2) || e2.substring(n2, s3) === r3 || x2.push({ offset: n2, length: s3 - n2, content: r3 });
      }
      let I2 = k2();
      if (r2.keepLines && y2 > 0 && E2(m(p2, y2), 0, 0), 17 !== I2) {
        let e3 = _2.getTokenOffset() + i2;
        E2(g2.length * s2 < 20 && r2.insertSpaces ? c[g2.length * s2] : m(g2, s2), i2, e3);
      }
      for (; 17 !== I2; ) {
        let e3 = _2.getTokenOffset() + _2.getTokenLength() + i2, t3 = k2(), n2 = "", s3 = false;
        for (; 0 === y2 && (12 === t3 || 13 === t3); ) {
          let r3 = _2.getTokenOffset() + i2;
          E2(c[1], e3, r3), e3 = _2.getTokenOffset() + _2.getTokenLength() + i2, s3 = 12 === t3, n2 = s3 ? S2() : "", t3 = k2();
        }
        if (2 === t3) 1 !== I2 && w2--, r2.keepLines && y2 > 0 || !r2.keepLines && 1 !== I2 ? n2 = S2() : r2.keepLines && (n2 = c[1]);
        else if (4 === t3) 3 !== I2 && w2--, r2.keepLines && y2 > 0 || !r2.keepLines && 3 !== I2 ? n2 = S2() : r2.keepLines && (n2 = c[1]);
        else {
          switch (I2) {
            case 3:
            case 1:
              w2++, n2 = r2.keepLines && y2 > 0 || !r2.keepLines ? S2() : c[1];
              break;
            case 5:
              n2 = r2.keepLines && y2 > 0 || !r2.keepLines ? S2() : c[1];
              break;
            case 12:
              n2 = S2();
              break;
            case 13:
              y2 > 0 ? n2 = S2() : s3 || (n2 = c[1]);
              break;
            case 6:
              r2.keepLines && y2 > 0 ? n2 = S2() : s3 || (n2 = c[1]);
              break;
            case 10:
              r2.keepLines && y2 > 0 ? n2 = S2() : 6 !== t3 || s3 || (n2 = "");
              break;
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              r2.keepLines && y2 > 0 ? n2 = S2() : 12 !== t3 && 13 !== t3 || s3 ? 5 !== t3 && 17 !== t3 && (b2 = true) : n2 = c[1];
              break;
            case 16:
              b2 = true;
          }
          y2 > 0 && (12 === t3 || 13 === t3) && (n2 = S2());
        }
        17 === t3 && (n2 = r2.keepLines && y2 > 0 ? S2() : r2.insertFinalNewline ? p2 : "");
        E2(n2, e3, _2.getTokenOffset() + i2), I2 = t3;
      }
      return x2;
    }
    function m(e2, t2) {
      let r2 = "";
      for (let n2 = 0; n2 < t2; n2++) r2 += e2;
      return r2;
    }
    function h(e2, t2) {
      return -1 !== "\r\n".indexOf(e2.charAt(t2));
    }
    var f;
    function g(e2, t2 = [], r2 = f.DEFAULT) {
      let n2 = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
      function s2(e3) {
        "property" === n2.type && (n2.length = e3 - n2.offset, n2 = n2.parent);
      }
      function o2(e3) {
        return n2.children.push(e3), e3;
      }
      w(e2, { onObjectBegin: (e3) => {
        n2 = o2({ type: "object", offset: e3, length: -1, parent: n2, children: [] });
      }, onObjectProperty: (e3, t3, r3) => {
        n2 = o2({ type: "property", offset: t3, length: -1, parent: n2, children: [] }), n2.children.push({ type: "string", value: e3, offset: t3, length: r3, parent: n2 });
      }, onObjectEnd: (e3, t3) => {
        s2(e3 + t3), n2.length = e3 + t3 - n2.offset, n2 = n2.parent, s2(e3 + t3);
      }, onArrayBegin: (e3, t3) => {
        n2 = o2({ type: "array", offset: e3, length: -1, parent: n2, children: [] });
      }, onArrayEnd: (e3, t3) => {
        n2.length = e3 + t3 - n2.offset, n2 = n2.parent, s2(e3 + t3);
      }, onLiteralValue: (e3, t3, r3) => {
        o2({ type: v(e3), offset: t3, length: r3, parent: n2, value: e3 }), s2(t3 + r3);
      }, onSeparator: (e3, t3, r3) => {
        "property" === n2.type && (":" === e3 ? n2.colonOffset = t3 : "," === e3 && s2(t3));
      }, onError: (e3, r3, n3) => {
        t2.push({ error: e3, offset: r3, length: n3 });
      } }, r2);
      const i2 = n2.children[0];
      return i2 && delete i2.parent, i2;
    }
    function y(e2, t2) {
      if (!e2) return;
      let r2 = e2;
      for (let e3 of t2) if ("string" == typeof e3) {
        if ("object" !== r2.type || !Array.isArray(r2.children)) return;
        let t3 = false;
        for (const n2 of r2.children) if (Array.isArray(n2.children) && n2.children[0].value === e3 && 2 === n2.children.length) {
          r2 = n2.children[1], t3 = true;
          break;
        }
        if (!t3) return;
      } else {
        const t3 = e3;
        if ("array" !== r2.type || t3 < 0 || !Array.isArray(r2.children) || t3 >= r2.children.length) return;
        r2 = r2.children[t3];
      }
      return r2;
    }
    function w(e2, t2, r2 = f.DEFAULT) {
      const s2 = n(e2, false), o2 = [];
      let i2 = 0;
      function a2(e3) {
        return e3 ? (t3) => 0 === i2 && e3(t3, s2.getTokenOffset(), s2.getTokenLength(), s2.getTokenStartLine(), s2.getTokenStartCharacter()) : () => true;
      }
      function c2(e3) {
        return e3 ? (t3) => 0 === i2 && e3(t3, s2.getTokenOffset(), s2.getTokenLength(), s2.getTokenStartLine(), s2.getTokenStartCharacter(), () => o2.slice()) : () => true;
      }
      function l2(e3) {
        return e3 ? () => {
          if (i2 > 0) i2++;
          else {
            false === e3(s2.getTokenOffset(), s2.getTokenLength(), s2.getTokenStartLine(), s2.getTokenStartCharacter(), () => o2.slice()) && (i2 = 1);
          }
        } : () => true;
      }
      function u2(e3) {
        return e3 ? () => {
          i2 > 0 && i2--, 0 === i2 && e3(s2.getTokenOffset(), s2.getTokenLength(), s2.getTokenStartLine(), s2.getTokenStartCharacter());
        } : () => true;
      }
      const d2 = l2(t2.onObjectBegin), p2 = c2(t2.onObjectProperty), m2 = u2(t2.onObjectEnd), h2 = l2(t2.onArrayBegin), g2 = u2(t2.onArrayEnd), y2 = c2(t2.onLiteralValue), w2 = a2(t2.onSeparator), v2 = (b2 = t2.onComment) ? () => 0 === i2 && b2(s2.getTokenOffset(), s2.getTokenLength(), s2.getTokenStartLine(), s2.getTokenStartCharacter()) : () => true, _2 = a2(t2.onError);
      var b2;
      const S2 = r2 && r2.disallowComments, k2 = r2 && r2.allowTrailingComma;
      function x2() {
        for (; ; ) {
          const e3 = s2.scan();
          switch (s2.getTokenError()) {
            case 4:
              E2(14);
              break;
            case 5:
              E2(15);
              break;
            case 3:
              E2(13);
              break;
            case 1:
              S2 || E2(11);
              break;
            case 2:
              E2(12);
              break;
            case 6:
              E2(16);
          }
          switch (e3) {
            case 12:
            case 13:
              S2 ? E2(10) : v2();
              break;
            case 16:
              E2(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return e3;
          }
        }
      }
      function E2(e3, t3 = [], r3 = []) {
        if (_2(e3), t3.length + r3.length > 0) {
          let e4 = s2.getToken();
          for (; 17 !== e4; ) {
            if (-1 !== t3.indexOf(e4)) {
              x2();
              break;
            }
            if (-1 !== r3.indexOf(e4)) break;
            e4 = x2();
          }
        }
      }
      function I2(e3) {
        const t3 = s2.getTokenValue();
        return e3 ? y2(t3) : (p2(t3), o2.push(t3)), x2(), true;
      }
      function T2() {
        return 10 !== s2.getToken() ? (E2(3, [], [2, 5]), false) : (I2(false), 6 === s2.getToken() ? (w2(":"), x2(), C2() || E2(4, [], [2, 5])) : E2(5, [], [2, 5]), o2.pop(), true);
      }
      function C2() {
        switch (s2.getToken()) {
          case 3:
            return (function() {
              h2(), x2();
              let e3 = true, t3 = false;
              for (; 4 !== s2.getToken() && 17 !== s2.getToken(); ) {
                if (5 === s2.getToken()) {
                  if (t3 || E2(4, [], []), w2(","), x2(), 4 === s2.getToken() && k2) break;
                } else t3 && E2(6, [], []);
                e3 ? (o2.push(0), e3 = false) : o2[o2.length - 1]++, C2() || E2(4, [], [4, 5]), t3 = true;
              }
              return g2(), e3 || o2.pop(), 4 !== s2.getToken() ? E2(8, [4], []) : x2(), true;
            })();
          case 1:
            return (function() {
              d2(), x2();
              let e3 = false;
              for (; 2 !== s2.getToken() && 17 !== s2.getToken(); ) {
                if (5 === s2.getToken()) {
                  if (e3 || E2(4, [], []), w2(","), x2(), 2 === s2.getToken() && k2) break;
                } else e3 && E2(6, [], []);
                T2() || E2(4, [], [2, 5]), e3 = true;
              }
              return m2(), 2 !== s2.getToken() ? E2(7, [2], []) : x2(), true;
            })();
          case 10:
            return I2(true);
          default:
            return (function() {
              switch (s2.getToken()) {
                case 11:
                  const e3 = s2.getTokenValue();
                  let t3 = Number(e3);
                  isNaN(t3) && (E2(2), t3 = 0), y2(t3);
                  break;
                case 7:
                  y2(null);
                  break;
                case 8:
                  y2(true);
                  break;
                case 9:
                  y2(false);
                  break;
                default:
                  return false;
              }
              return x2(), true;
            })();
        }
      }
      return x2(), 17 === s2.getToken() ? !!r2.allowEmptyContent || (E2(4, [], []), false) : C2() ? (17 !== s2.getToken() && E2(9, [], []), true) : (E2(4, [], []), false);
    }
    function v(e2) {
      switch (typeof e2) {
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        case "object":
          return e2 ? Array.isArray(e2) ? "array" : "object" : "null";
        default:
          return "null";
      }
    }
    function _(e2, t2, r2, n2) {
      const s2 = t2.slice(), o2 = g(e2, []);
      let i2, a2;
      for (; s2.length > 0 && (a2 = s2.pop(), i2 = y(o2, s2), void 0 === i2 && void 0 !== r2); ) r2 = "string" == typeof a2 ? { [a2]: r2 } : [r2];
      if (i2) {
        if ("object" === i2.type && "string" == typeof a2 && Array.isArray(i2.children)) {
          const t3 = y(i2, [a2]);
          if (void 0 !== t3) {
            if (void 0 === r2) {
              if (!t3.parent) throw new Error("Malformed AST");
              const r3 = i2.children.indexOf(t3.parent);
              let s3, o3 = t3.parent.offset + t3.parent.length;
              if (r3 > 0) {
                let e3 = i2.children[r3 - 1];
                s3 = e3.offset + e3.length;
              } else if (s3 = i2.offset + 1, i2.children.length > 1) {
                o3 = i2.children[1].offset;
              }
              return b(e2, { offset: s3, length: o3 - s3, content: "" }, n2);
            }
            return b(e2, { offset: t3.offset, length: t3.length, content: JSON.stringify(r2) }, n2);
          }
          {
            if (void 0 === r2) return [];
            const t4 = `${JSON.stringify(a2)}: ${JSON.stringify(r2)}`, s3 = n2.getInsertionIndex ? n2.getInsertionIndex(i2.children.map((e3) => e3.children[0].value)) : i2.children.length;
            let o3;
            if (s3 > 0) {
              let e3 = i2.children[s3 - 1];
              o3 = { offset: e3.offset + e3.length, length: 0, content: "," + t4 };
            } else o3 = 0 === i2.children.length ? { offset: i2.offset + 1, length: 0, content: t4 } : { offset: i2.offset + 1, length: 0, content: t4 + "," };
            return b(e2, o3, n2);
          }
        }
        if ("array" === i2.type && "number" == typeof a2 && Array.isArray(i2.children)) {
          const t3 = a2;
          if (-1 === t3) {
            const t4 = `${JSON.stringify(r2)}`;
            let s3;
            if (0 === i2.children.length) s3 = { offset: i2.offset + 1, length: 0, content: t4 };
            else {
              const e3 = i2.children[i2.children.length - 1];
              s3 = { offset: e3.offset + e3.length, length: 0, content: "," + t4 };
            }
            return b(e2, s3, n2);
          }
          if (void 0 === r2 && i2.children.length >= 0) {
            const t4 = a2, r3 = i2.children[t4];
            let s3;
            if (1 === i2.children.length) s3 = { offset: i2.offset + 1, length: i2.length - 2, content: "" };
            else if (i2.children.length - 1 === t4) {
              let e3 = i2.children[t4 - 1], r4 = e3.offset + e3.length;
              s3 = { offset: r4, length: i2.offset + i2.length - 2 - r4, content: "" };
            } else s3 = { offset: r3.offset, length: i2.children[t4 + 1].offset - r3.offset, content: "" };
            return b(e2, s3, n2);
          }
          if (void 0 !== r2) {
            let t4;
            const s3 = `${JSON.stringify(r2)}`;
            if (!n2.isArrayInsertion && i2.children.length > a2) {
              const e3 = i2.children[a2];
              t4 = { offset: e3.offset, length: e3.length, content: s3 };
            } else if (0 === i2.children.length || 0 === a2) t4 = { offset: i2.offset + 1, length: 0, content: 0 === i2.children.length ? s3 : s3 + "," };
            else {
              const e3 = a2 > i2.children.length ? i2.children.length : a2, r3 = i2.children[e3 - 1];
              t4 = { offset: r3.offset + r3.length, length: 0, content: "," + s3 };
            }
            return b(e2, t4, n2);
          }
          throw new Error(`Can not ${void 0 === r2 ? "remove" : n2.isArrayInsertion ? "insert" : "modify"} Array index ${t3} as length is not sufficient`);
        }
        throw new Error(`Can not add ${"number" != typeof a2 ? "index" : "property"} to parent of type ${i2.type}`);
      }
      if (void 0 === r2) throw new Error("Can not delete in empty document");
      return b(e2, { offset: o2 ? o2.offset : 0, length: o2 ? o2.length : 0, content: JSON.stringify(r2) }, n2);
    }
    function b(e2, t2, r2) {
      if (!r2.formattingOptions) return [t2];
      let n2 = S(e2, t2), s2 = t2.offset, o2 = t2.offset + t2.content.length;
      if (0 === t2.length || 0 === t2.content.length) {
        for (; s2 > 0 && !h(n2, s2 - 1); ) s2--;
        for (; o2 < n2.length && !h(n2, o2); ) o2++;
      }
      const i2 = p(n2, { offset: s2, length: o2 - s2 }, { ...r2.formattingOptions, keepLines: false });
      for (let e3 = i2.length - 1; e3 >= 0; e3--) {
        const t3 = i2[e3];
        n2 = S(n2, t3), s2 = Math.min(s2, t3.offset), o2 = Math.max(o2, t3.offset + t3.length), o2 += t3.content.length - t3.length;
      }
      return [{ offset: s2, length: e2.length - (n2.length - o2) - s2, content: n2.substring(s2, o2) }];
    }
    function S(e2, t2) {
      return e2.substring(0, t2.offset) + t2.content + e2.substring(t2.offset + t2.length);
    }
    !(function(e2) {
      e2.DEFAULT = { allowTrailingComma: false };
    })(f || (f = {}));
    var k, x;
    !(function(e2) {
      e2[e2.None = 0] = "None", e2[e2.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e2[e2.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e2[e2.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e2[e2.InvalidUnicode = 4] = "InvalidUnicode", e2[e2.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e2[e2.InvalidCharacter = 6] = "InvalidCharacter";
    })(k || (k = {})), (function(e2) {
      e2[e2.OpenBraceToken = 1] = "OpenBraceToken", e2[e2.CloseBraceToken = 2] = "CloseBraceToken", e2[e2.OpenBracketToken = 3] = "OpenBracketToken", e2[e2.CloseBracketToken = 4] = "CloseBracketToken", e2[e2.CommaToken = 5] = "CommaToken", e2[e2.ColonToken = 6] = "ColonToken", e2[e2.NullKeyword = 7] = "NullKeyword", e2[e2.TrueKeyword = 8] = "TrueKeyword", e2[e2.FalseKeyword = 9] = "FalseKeyword", e2[e2.StringLiteral = 10] = "StringLiteral", e2[e2.NumericLiteral = 11] = "NumericLiteral", e2[e2.LineCommentTrivia = 12] = "LineCommentTrivia", e2[e2.BlockCommentTrivia = 13] = "BlockCommentTrivia", e2[e2.LineBreakTrivia = 14] = "LineBreakTrivia", e2[e2.Trivia = 15] = "Trivia", e2[e2.Unknown = 16] = "Unknown", e2[e2.EOF = 17] = "EOF";
    })(x || (x = {}));
    const E = function(e2, t2 = [], r2 = f.DEFAULT) {
      let n2 = null, s2 = [];
      const o2 = [];
      function i2(e3) {
        Array.isArray(s2) ? s2.push(e3) : null !== n2 && (s2[n2] = e3);
      }
      return w(e2, { onObjectBegin: () => {
        const e3 = {};
        i2(e3), o2.push(s2), s2 = e3, n2 = null;
      }, onObjectProperty: (e3) => {
        n2 = e3;
      }, onObjectEnd: () => {
        s2 = o2.pop();
      }, onArrayBegin: () => {
        const e3 = [];
        i2(e3), o2.push(s2), s2 = e3, n2 = null;
      }, onArrayEnd: () => {
        s2 = o2.pop();
      }, onLiteralValue: i2, onError: (e3, r3, n3) => {
        t2.push({ error: e3, offset: r3, length: n3 });
      } }, r2), s2[0];
    };
    var I;
    function T(e2) {
      switch (e2) {
        case 1:
          return "InvalidSymbol";
        case 2:
          return "InvalidNumberFormat";
        case 3:
          return "PropertyNameExpected";
        case 4:
          return "ValueExpected";
        case 5:
          return "ColonExpected";
        case 6:
          return "CommaExpected";
        case 7:
          return "CloseBraceExpected";
        case 8:
          return "CloseBracketExpected";
        case 9:
          return "EndOfFileExpected";
        case 10:
          return "InvalidCommentToken";
        case 11:
          return "UnexpectedEndOfComment";
        case 12:
          return "UnexpectedEndOfString";
        case 13:
          return "UnexpectedEndOfNumber";
        case 14:
          return "InvalidUnicode";
        case 15:
          return "InvalidEscapeCharacter";
        case 16:
          return "InvalidCharacter";
      }
      return "<unknown ParseErrorCode>";
    }
    function C(e2, t2, r2, n2) {
      return _(e2, t2, r2, n2);
    }
    function P(e2, t2) {
      let r2 = t2.slice(0).sort((e3, t3) => {
        const r3 = e3.offset - t3.offset;
        return 0 === r3 ? e3.length - t3.length : r3;
      }), n2 = e2.length;
      for (let t3 = r2.length - 1; t3 >= 0; t3--) {
        let s2 = r2[t3];
        if (!(s2.offset + s2.length <= n2)) throw new Error("Overlapping edit");
        e2 = S(e2, s2), n2 = s2.offset;
      }
      return e2;
    }
    !(function(e2) {
      e2[e2.InvalidSymbol = 1] = "InvalidSymbol", e2[e2.InvalidNumberFormat = 2] = "InvalidNumberFormat", e2[e2.PropertyNameExpected = 3] = "PropertyNameExpected", e2[e2.ValueExpected = 4] = "ValueExpected", e2[e2.ColonExpected = 5] = "ColonExpected", e2[e2.CommaExpected = 6] = "CommaExpected", e2[e2.CloseBraceExpected = 7] = "CloseBraceExpected", e2[e2.CloseBracketExpected = 8] = "CloseBracketExpected", e2[e2.EndOfFileExpected = 9] = "EndOfFileExpected", e2[e2.InvalidCommentToken = 10] = "InvalidCommentToken", e2[e2.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e2[e2.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e2[e2.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e2[e2.InvalidUnicode = 14] = "InvalidUnicode", e2[e2.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e2[e2.InvalidCharacter = 16] = "InvalidCharacter";
    })(I || (I = {}));
  }