// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 57589 range:1775048..1780586
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57589: (e, t, r) => {
    "use strict";
    const n = r(68139), { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: i, CHAR_COMMA: a, CHAR_DOT: l, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: d, CHAR_LEFT_PARENTHESES: p, CHAR_LEFT_SQUARE_BRACKET: h, CHAR_PLUS: m, CHAR_QUESTION_MARK: f, CHAR_RIGHT_CURLY_BRACE: g, CHAR_RIGHT_PARENTHESES: y, CHAR_RIGHT_SQUARE_BRACKET: v } = r(94443), w = (e2) => e2 === u || e2 === i, b = (e2) => {
      true !== e2.isPrefix && (e2.depth = e2.isGlobstar ? 1 / 0 : 1);
    };
    e.exports = (e2, t2) => {
      const r2 = t2 || {}, _ = e2.length - 1, S = true === r2.parts || true === r2.scanToEnd, x = [], k = [], E = [];
      let T, C, I = e2, A = -1, P = 0, M = 0, R = false, O = false, D = false, N = false, F = false, L = false, U = false, B = false, $ = false, q = false, j = 0, J = { value: "", depth: 0, isGlob: false };
      const z = () => A >= _, H = () => I.charCodeAt(A + 1), W = () => (T = C, I.charCodeAt(++A));
      for (; A < _; ) {
        let e3;
        if (C = W(), C !== i) {
          if (true === L || C === d) {
            for (j++; true !== z() && (C = W()); ) if (C !== i) if (C !== d) {
              if (true !== L && C === l && (C = W()) === l) {
                if (R = J.isBrace = true, D = J.isGlob = true, q = true, true === S) continue;
                break;
              }
              if (true !== L && C === a) {
                if (R = J.isBrace = true, D = J.isGlob = true, q = true, true === S) continue;
                break;
              }
              if (C === g && (j--, 0 === j)) {
                L = false, R = J.isBrace = true, q = true;
                break;
              }
            } else j++;
            else U = J.backslashes = true, W();
            if (true === S) continue;
            break;
          }
          if (C !== u) {
            if (true !== r2.noext) {
              if (true === (C === m || C === s || C === o || C === f || C === c) && H() === p) {
                if (D = J.isGlob = true, N = J.isExtglob = true, q = true, C === c && A === P && ($ = true), true === S) {
                  for (; true !== z() && (C = W()); ) if (C !== i) {
                    if (C === y) {
                      D = J.isGlob = true, q = true;
                      break;
                    }
                  } else U = J.backslashes = true, C = W();
                  continue;
                }
                break;
              }
            }
            if (C === o) {
              if (T === o && (F = J.isGlobstar = true), D = J.isGlob = true, q = true, true === S) continue;
              break;
            }
            if (C === f) {
              if (D = J.isGlob = true, q = true, true === S) continue;
              break;
            }
            if (C === h) {
              for (; true !== z() && (e3 = W()); ) if (e3 !== i) {
                if (e3 === v) {
                  O = J.isBracket = true, D = J.isGlob = true, q = true;
                  break;
                }
              } else U = J.backslashes = true, W();
              if (true === S) continue;
              break;
            }
            if (true === r2.nonegate || C !== c || A !== P) {
              if (true !== r2.noparen && C === p) {
                if (D = J.isGlob = true, true === S) {
                  for (; true !== z() && (C = W()); ) if (C !== p) {
                    if (C === y) {
                      q = true;
                      break;
                    }
                  } else U = J.backslashes = true, C = W();
                  continue;
                }
                break;
              }
              if (true === D) {
                if (q = true, true === S) continue;
                break;
              }
            } else B = J.negated = true, P++;
          } else {
            if (x.push(A), k.push(J), J = { value: "", depth: 0, isGlob: false }, true === q) continue;
            if (T === l && A === P + 1) {
              P += 2;
              continue;
            }
            M = A + 1;
          }
        } else U = J.backslashes = true, C = W(), C === d && (L = true);
      }
      true === r2.noext && (N = false, D = false);
      let G = I, Y = "", V = "";
      P > 0 && (Y = I.slice(0, P), I = I.slice(P), M -= P), G && true === D && M > 0 ? (G = I.slice(0, M), V = I.slice(M)) : true === D ? (G = "", V = I) : G = I, G && "" !== G && "/" !== G && G !== I && w(G.charCodeAt(G.length - 1)) && (G = G.slice(0, -1)), true === r2.unescape && (V && (V = n.removeBackslashes(V)), G && true === U && (G = n.removeBackslashes(G)));
      const K = { prefix: Y, input: e2, start: P, base: G, glob: V, isBrace: R, isBracket: O, isGlob: D, isExtglob: N, isGlobstar: F, negated: B, negatedExtglob: $ };
      if (true === r2.tokens && (K.maxDepth = 0, w(C) || k.push(J), K.tokens = k), true === r2.parts || true === r2.tokens) {
        let t3;
        for (let n2 = 0; n2 < x.length; n2++) {
          const o2 = t3 ? t3 + 1 : P, s2 = x[n2], i2 = e2.slice(o2, s2);
          r2.tokens && (0 === n2 && 0 !== P ? (k[n2].isPrefix = true, k[n2].value = Y) : k[n2].value = i2, b(k[n2]), K.maxDepth += k[n2].depth), 0 === n2 && "" === i2 || E.push(i2), t3 = s2;
        }
        if (t3 && t3 + 1 < e2.length) {
          const n2 = e2.slice(t3 + 1);
          E.push(n2), r2.tokens && (k[k.length - 1].value = n2, b(k[k.length - 1]), K.maxDepth += k[k.length - 1].depth);
        }
        K.slashes = x, K.parts = E;
      }
      return K;
    };
  }