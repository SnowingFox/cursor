// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 57589 range:4628427..4633965
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57589: (e, t, r) => {
    "use strict";
    const n = r(68139), { CHAR_ASTERISK: s, CHAR_AT: o, CHAR_BACKWARD_SLASH: i, CHAR_COMMA: a, CHAR_DOT: c, CHAR_EXCLAMATION_MARK: l, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: d, CHAR_LEFT_PARENTHESES: p, CHAR_LEFT_SQUARE_BRACKET: m, CHAR_PLUS: h, CHAR_QUESTION_MARK: f, CHAR_RIGHT_CURLY_BRACE: g, CHAR_RIGHT_PARENTHESES: y, CHAR_RIGHT_SQUARE_BRACKET: w } = r(94443), v = (e2) => e2 === u || e2 === i, _ = (e2) => {
      true !== e2.isPrefix && (e2.depth = e2.isGlobstar ? 1 / 0 : 1);
    };
    e.exports = (e2, t2) => {
      const r2 = t2 || {}, b = e2.length - 1, S = true === r2.parts || true === r2.scanToEnd, k = [], x = [], E = [];
      let I, T, C = e2, P = -1, A = 0, R = 0, M = false, J = false, O = false, B = false, D = false, q = false, N = false, F = false, U = false, L = false, $ = 0, j = { value: "", depth: 0, isGlob: false };
      const G = () => P >= b, z = () => C.charCodeAt(P + 1), W = () => (I = T, C.charCodeAt(++P));
      for (; P < b; ) {
        let e3;
        if (T = W(), T !== i) {
          if (true === q || T === d) {
            for ($++; true !== G() && (T = W()); ) if (T !== i) if (T !== d) {
              if (true !== q && T === c && (T = W()) === c) {
                if (M = j.isBrace = true, O = j.isGlob = true, L = true, true === S) continue;
                break;
              }
              if (true !== q && T === a) {
                if (M = j.isBrace = true, O = j.isGlob = true, L = true, true === S) continue;
                break;
              }
              if (T === g && ($--, 0 === $)) {
                q = false, M = j.isBrace = true, L = true;
                break;
              }
            } else $++;
            else N = j.backslashes = true, W();
            if (true === S) continue;
            break;
          }
          if (T !== u) {
            if (true !== r2.noext) {
              if (true === (T === h || T === o || T === s || T === f || T === l) && z() === p) {
                if (O = j.isGlob = true, B = j.isExtglob = true, L = true, T === l && P === A && (U = true), true === S) {
                  for (; true !== G() && (T = W()); ) if (T !== i) {
                    if (T === y) {
                      O = j.isGlob = true, L = true;
                      break;
                    }
                  } else N = j.backslashes = true, T = W();
                  continue;
                }
                break;
              }
            }
            if (T === s) {
              if (I === s && (D = j.isGlobstar = true), O = j.isGlob = true, L = true, true === S) continue;
              break;
            }
            if (T === f) {
              if (O = j.isGlob = true, L = true, true === S) continue;
              break;
            }
            if (T === m) {
              for (; true !== G() && (e3 = W()); ) if (e3 !== i) {
                if (e3 === w) {
                  J = j.isBracket = true, O = j.isGlob = true, L = true;
                  break;
                }
              } else N = j.backslashes = true, W();
              if (true === S) continue;
              break;
            }
            if (true === r2.nonegate || T !== l || P !== A) {
              if (true !== r2.noparen && T === p) {
                if (O = j.isGlob = true, true === S) {
                  for (; true !== G() && (T = W()); ) if (T !== p) {
                    if (T === y) {
                      L = true;
                      break;
                    }
                  } else N = j.backslashes = true, T = W();
                  continue;
                }
                break;
              }
              if (true === O) {
                if (L = true, true === S) continue;
                break;
              }
            } else F = j.negated = true, A++;
          } else {
            if (k.push(P), x.push(j), j = { value: "", depth: 0, isGlob: false }, true === L) continue;
            if (I === c && P === A + 1) {
              A += 2;
              continue;
            }
            R = P + 1;
          }
        } else N = j.backslashes = true, T = W(), T === d && (q = true);
      }
      true === r2.noext && (B = false, O = false);
      let H = C, K = "", V = "";
      A > 0 && (K = C.slice(0, A), C = C.slice(A), R -= A), H && true === O && R > 0 ? (H = C.slice(0, R), V = C.slice(R)) : true === O ? (H = "", V = C) : H = C, H && "" !== H && "/" !== H && H !== C && v(H.charCodeAt(H.length - 1)) && (H = H.slice(0, -1)), true === r2.unescape && (V && (V = n.removeBackslashes(V)), H && true === N && (H = n.removeBackslashes(H)));
      const Y = { prefix: K, input: e2, start: A, base: H, glob: V, isBrace: M, isBracket: J, isGlob: O, isExtglob: B, isGlobstar: D, negated: F, negatedExtglob: U };
      if (true === r2.tokens && (Y.maxDepth = 0, v(T) || x.push(j), Y.tokens = x), true === r2.parts || true === r2.tokens) {
        let t3;
        for (let n2 = 0; n2 < k.length; n2++) {
          const s2 = t3 ? t3 + 1 : A, o2 = k[n2], i2 = e2.slice(s2, o2);
          r2.tokens && (0 === n2 && 0 !== A ? (x[n2].isPrefix = true, x[n2].value = K) : x[n2].value = i2, _(x[n2]), Y.maxDepth += x[n2].depth), 0 === n2 && "" === i2 || E.push(i2), t3 = o2;
        }
        if (t3 && t3 + 1 < e2.length) {
          const n2 = e2.slice(t3 + 1);
          E.push(n2), r2.tokens && (x[x.length - 1].value = n2, _(x[x.length - 1]), Y.maxDepth += x[x.length - 1].depth);
        }
        Y.slashes = k, Y.parts = E;
      }
      return Y;
    };
  }