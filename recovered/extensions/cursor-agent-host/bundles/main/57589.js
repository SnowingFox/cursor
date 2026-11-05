// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 57589 range:8725641..8731179
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57589: (e, t, r) => {
    "use strict";
    const n = r(68139), { CHAR_ASTERISK: s, CHAR_AT: o, CHAR_BACKWARD_SLASH: i, CHAR_COMMA: a, CHAR_DOT: c, CHAR_EXCLAMATION_MARK: l, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: d, CHAR_LEFT_PARENTHESES: p, CHAR_LEFT_SQUARE_BRACKET: m, CHAR_PLUS: h, CHAR_QUESTION_MARK: f, CHAR_RIGHT_CURLY_BRACE: g, CHAR_RIGHT_PARENTHESES: y, CHAR_RIGHT_SQUARE_BRACKET: w } = r(94443), v = (e2) => e2 === u || e2 === i, _ = (e2) => {
      true !== e2.isPrefix && (e2.depth = e2.isGlobstar ? 1 / 0 : 1);
    };
    e.exports = (e2, t2) => {
      const r2 = t2 || {}, A = e2.length - 1, S = true === r2.parts || true === r2.scanToEnd, b = [], E = [], I = [];
      let C, k, x = e2, T = -1, R = 0, B = 0, P = false, J = false, M = false, q = false, D = false, O = false, N = false, F = false, U = false, L = false, $ = 0, Q = { value: "", depth: 0, isGlob: false };
      const j = () => T >= A, G = () => x.charCodeAt(T + 1), H = () => (C = k, x.charCodeAt(++T));
      for (; T < A; ) {
        let e3;
        if (k = H(), k !== i) {
          if (true === O || k === d) {
            for ($++; true !== j() && (k = H()); ) if (k !== i) if (k !== d) {
              if (true !== O && k === c && (k = H()) === c) {
                if (P = Q.isBrace = true, M = Q.isGlob = true, L = true, true === S) continue;
                break;
              }
              if (true !== O && k === a) {
                if (P = Q.isBrace = true, M = Q.isGlob = true, L = true, true === S) continue;
                break;
              }
              if (k === g && ($--, 0 === $)) {
                O = false, P = Q.isBrace = true, L = true;
                break;
              }
            } else $++;
            else N = Q.backslashes = true, H();
            if (true === S) continue;
            break;
          }
          if (k !== u) {
            if (true !== r2.noext) {
              if (true === (k === h || k === o || k === s || k === f || k === l) && G() === p) {
                if (M = Q.isGlob = true, q = Q.isExtglob = true, L = true, k === l && T === R && (U = true), true === S) {
                  for (; true !== j() && (k = H()); ) if (k !== i) {
                    if (k === y) {
                      M = Q.isGlob = true, L = true;
                      break;
                    }
                  } else N = Q.backslashes = true, k = H();
                  continue;
                }
                break;
              }
            }
            if (k === s) {
              if (C === s && (D = Q.isGlobstar = true), M = Q.isGlob = true, L = true, true === S) continue;
              break;
            }
            if (k === f) {
              if (M = Q.isGlob = true, L = true, true === S) continue;
              break;
            }
            if (k === m) {
              for (; true !== j() && (e3 = H()); ) if (e3 !== i) {
                if (e3 === w) {
                  J = Q.isBracket = true, M = Q.isGlob = true, L = true;
                  break;
                }
              } else N = Q.backslashes = true, H();
              if (true === S) continue;
              break;
            }
            if (true === r2.nonegate || k !== l || T !== R) {
              if (true !== r2.noparen && k === p) {
                if (M = Q.isGlob = true, true === S) {
                  for (; true !== j() && (k = H()); ) if (k !== p) {
                    if (k === y) {
                      L = true;
                      break;
                    }
                  } else N = Q.backslashes = true, k = H();
                  continue;
                }
                break;
              }
              if (true === M) {
                if (L = true, true === S) continue;
                break;
              }
            } else F = Q.negated = true, R++;
          } else {
            if (b.push(T), E.push(Q), Q = { value: "", depth: 0, isGlob: false }, true === L) continue;
            if (C === c && T === R + 1) {
              R += 2;
              continue;
            }
            B = T + 1;
          }
        } else N = Q.backslashes = true, k = H(), k === d && (O = true);
      }
      true === r2.noext && (q = false, M = false);
      let z = x, W = "", V = "";
      R > 0 && (W = x.slice(0, R), x = x.slice(R), B -= R), z && true === M && B > 0 ? (z = x.slice(0, B), V = x.slice(B)) : true === M ? (z = "", V = x) : z = x, z && "" !== z && "/" !== z && z !== x && v(z.charCodeAt(z.length - 1)) && (z = z.slice(0, -1)), true === r2.unescape && (V && (V = n.removeBackslashes(V)), z && true === N && (z = n.removeBackslashes(z)));
      const K = { prefix: W, input: e2, start: R, base: z, glob: V, isBrace: P, isBracket: J, isGlob: M, isExtglob: q, isGlobstar: D, negated: F, negatedExtglob: U };
      if (true === r2.tokens && (K.maxDepth = 0, v(k) || E.push(Q), K.tokens = E), true === r2.parts || true === r2.tokens) {
        let t3;
        for (let n2 = 0; n2 < b.length; n2++) {
          const s2 = t3 ? t3 + 1 : R, o2 = b[n2], i2 = e2.slice(s2, o2);
          r2.tokens && (0 === n2 && 0 !== R ? (E[n2].isPrefix = true, E[n2].value = W) : E[n2].value = i2, _(E[n2]), K.maxDepth += E[n2].depth), 0 === n2 && "" === i2 || I.push(i2), t3 = o2;
        }
        if (t3 && t3 + 1 < e2.length) {
          const n2 = e2.slice(t3 + 1);
          I.push(n2), r2.tokens && (E[E.length - 1].value = n2, _(E[E.length - 1]), K.maxDepth += E[E.length - 1].depth);
        }
        K.slashes = b, K.parts = I;
      }
      return K;
    };
  }