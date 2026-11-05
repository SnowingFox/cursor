// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 519 range:19526..25082
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
519: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(8977), { CHAR_ASTERISK: s2, CHAR_AT: o2, CHAR_BACKWARD_SLASH: r2, CHAR_COMMA: i2, CHAR_DOT: l, CHAR_EXCLAMATION_MARK: d, CHAR_FORWARD_SLASH: m, CHAR_LEFT_CURLY_BRACE: c, CHAR_LEFT_PARENTHESES: p, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: u, CHAR_QUESTION_MARK: g, CHAR_RIGHT_CURLY_BRACE: T, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: k } = n2(557), _ = (e3) => e3 === m || e3 === r2, E = (e3) => {
      true !== e3.isPrefix && (e3.depth = e3.isGlobstar ? 1 / 0 : 1);
    };
    e2.exports = (e3, a3) => {
      const n3 = a3 || {}, f = e3.length - 1, C = true === n3.parts || true === n3.scanToEnd, I = [], v = [], y = [];
      let S, R, N = e3, B = -1, w = 0, b = 0, Q = false, D = false, M = false, O = false, U = false, F = false, P = false, L = false, G = false, x = false, V = 0, Y = { value: "", depth: 0, isGlob: false };
      const q = () => B >= f, H = () => N.charCodeAt(B + 1), J = () => (S = R, N.charCodeAt(++B));
      for (; B < f; ) {
        let e4;
        if (R = J(), R !== r2) {
          if (true === F || R === c) {
            for (V++; true !== q() && (R = J()); ) if (R !== r2) if (R !== c) {
              if (true !== F && R === l && (R = J()) === l) {
                if (Q = Y.isBrace = true, M = Y.isGlob = true, x = true, true === C) continue;
                break;
              }
              if (true !== F && R === i2) {
                if (Q = Y.isBrace = true, M = Y.isGlob = true, x = true, true === C) continue;
                break;
              }
              if (R === T && (V--, 0 === V)) {
                F = false, Q = Y.isBrace = true, x = true;
                break;
              }
            } else V++;
            else P = Y.backslashes = true, J();
            if (true === C) continue;
            break;
          }
          if (R !== m) {
            if (true !== n3.noext) {
              if (true === (R === u || R === o2 || R === s2 || R === g || R === d) && H() === p) {
                if (M = Y.isGlob = true, O = Y.isExtglob = true, x = true, R === d && B === w && (G = true), true === C) {
                  for (; true !== q() && (R = J()); ) if (R !== r2) {
                    if (R === h) {
                      M = Y.isGlob = true, x = true;
                      break;
                    }
                  } else P = Y.backslashes = true, R = J();
                  continue;
                }
                break;
              }
            }
            if (R === s2) {
              if (S === s2 && (U = Y.isGlobstar = true), M = Y.isGlob = true, x = true, true === C) continue;
              break;
            }
            if (R === g) {
              if (M = Y.isGlob = true, x = true, true === C) continue;
              break;
            }
            if (R === A) {
              for (; true !== q() && (e4 = J()); ) if (e4 !== r2) {
                if (e4 === k) {
                  D = Y.isBracket = true, M = Y.isGlob = true, x = true;
                  break;
                }
              } else P = Y.backslashes = true, J();
              if (true === C) continue;
              break;
            }
            if (true === n3.nonegate || R !== d || B !== w) {
              if (true !== n3.noparen && R === p) {
                if (M = Y.isGlob = true, true === C) {
                  for (; true !== q() && (R = J()); ) if (R !== p) {
                    if (R === h) {
                      x = true;
                      break;
                    }
                  } else P = Y.backslashes = true, R = J();
                  continue;
                }
                break;
              }
              if (true === M) {
                if (x = true, true === C) continue;
                break;
              }
            } else L = Y.negated = true, w++;
          } else {
            if (I.push(B), v.push(Y), Y = { value: "", depth: 0, isGlob: false }, true === x) continue;
            if (S === l && B === w + 1) {
              w += 2;
              continue;
            }
            b = B + 1;
          }
        } else P = Y.backslashes = true, R = J(), R === c && (F = true);
      }
      true === n3.noext && (O = false, M = false);
      let W = N, K = "", j = "";
      w > 0 && (K = N.slice(0, w), N = N.slice(w), b -= w), W && true === M && b > 0 ? (W = N.slice(0, b), j = N.slice(b)) : true === M ? (W = "", j = N) : W = N, W && "" !== W && "/" !== W && W !== N && _(W.charCodeAt(W.length - 1)) && (W = W.slice(0, -1)), true === n3.unescape && (j && (j = t2.removeBackslashes(j)), W && true === P && (W = t2.removeBackslashes(W)));
      const $ = { prefix: K, input: e3, start: w, base: W, glob: j, isBrace: Q, isBracket: D, isGlob: M, isExtglob: O, isGlobstar: U, negated: L, negatedExtglob: G };
      if (true === n3.tokens && ($.maxDepth = 0, _(R) || v.push(Y), $.tokens = v), true === n3.parts || true === n3.tokens) {
        let a4;
        for (let t3 = 0; t3 < I.length; t3++) {
          const s3 = a4 ? a4 + 1 : w, o3 = I[t3], r3 = e3.slice(s3, o3);
          n3.tokens && (0 === t3 && 0 !== w ? (v[t3].isPrefix = true, v[t3].value = K) : v[t3].value = r3, E(v[t3]), $.maxDepth += v[t3].depth), 0 === t3 && "" === r3 || y.push(r3), a4 = o3;
        }
        if (a4 && a4 + 1 < e3.length) {
          const t3 = e3.slice(a4 + 1);
          y.push(t3), n3.tokens && (v[v.length - 1].value = t3, E(v[v.length - 1]), $.maxDepth += v[v.length - 1].depth);
        }
        $.slashes = I, $.parts = y;
      }
      return $;
    };
  }