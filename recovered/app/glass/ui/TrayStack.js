// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayStack.js range:16316467..16320847
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.124Z
yGS = L({ "TrayStack.js"() {
  "use strict";
  E(), Zkt(), qu(), Zrp = 68, Qrp = 8, Jrp = 0.95, esp = 2;
} });
import { jsx as Gwa, jsxs as SGS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as kGS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as wGS, useEffect as CGS } from "./react-runtime/react/esm-index-production.js";
function tsp(t) {
  const e = kGS(67);
  let n, i, r, s, o, a, l, c, u;
  e[0] !== t ? ({ id: r, stepIndex: o, title: u, children: n, allowMultiple: l, scrollBlock: c, className: i, style: a, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9]);
  const d = l === void 0 ? false : l, h = c === void 0 ? "nearest" : c;
  dkn("Tray.Step");
  const { currentStepIndex: p, goToStep: g, scrollViewportRef: f } = hkn("Tray.Step"), _ = wGS(null), b = p === o;
  let y;
  e[10] !== g || e[11] !== b || e[12] !== o ? (y = () => {
    b || g(o);
  }, e[10] = g, e[11] = b, e[12] = o, e[13] = y) : y = e[13];
  const S = y;
  let k;
  e[14] !== g || e[15] !== b || e[16] !== o ? (k = (ee) => {
    !b && (ee.key === "Enter" || ee.key === " ") && (ee.preventDefault(), g(o));
  }, e[14] = g, e[15] = b, e[16] = o, e[17] = k) : k = e[17];
  const C = k;
  let T, I;
  e[18] !== b || e[19] !== h || e[20] !== f ? (T = () => {
    if (b && _.current && f.current) {
      const ee = f.current, re = _.current, ie = re.offsetTop, oe = re.offsetHeight, se = ee.clientHeight;
      let le;
      e: switch (h) {
        case "start": {
          le = ie;
          break e;
        }
        case "center": {
          le = ie - se / 2 + oe / 2;
          break e;
        }
        case "end": {
          le = ie - se + oe;
          break e;
        }
        default: {
          const ce = ee.scrollTop, ae = ce + se;
          if (ie >= ce && ie + oe <= ae) return;
          ie < ce ? le = ie : le = ie - se + oe;
        }
      }
      ee.scrollTo({ top: le, behavior: "smooth" });
    }
  }, I = [b, h, f], e[18] = b, e[19] = h, e[20] = f, e[21] = T, e[22] = I) : (T = e[21], I = e[22]), CGS(T, I);
  let A, P, M, O, N, U, j, $, H, G, q, K, V, Y, J;
  if (e[23] !== d || e[24] !== i || e[25] !== S || e[26] !== C || e[27] !== r || e[28] !== b || e[29] !== s || e[30] !== a || e[31] !== u) {
    const ee = sHS(), re = ar({ rootClass: "ui-tray-step", stylexStyles: ee.root, className: i, style: { cursor: b ? void 0 : "pointer", ...a } }), ie = gn(ee.header), oe = gn(ee.title);
    A = gn(ee.options), Y = _, J = r, P = b ? "group" : "button", M = b ? void 0 : 0, O = re.className, e[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = $rp(), e[47] = N) : N = e[47], U = b || void 0, j = d || void 0, $ = b ? void 0 : S, H = b ? void 0 : C, G = re.style, q = s, K = Gwa("div", { className: ri("ui-tray-step__header", ie.className), style: ie.style, children: Gwa("div", { className: ri("ui-tray-step__title", oe.className), style: oe.style, children: u }) }), V = ri("ui-tray-step__options", A.className), e[23] = d, e[24] = i, e[25] = S, e[26] = C, e[27] = r, e[28] = b, e[29] = s, e[30] = a, e[31] = u, e[32] = A, e[33] = P, e[34] = M, e[35] = O, e[36] = N, e[37] = U, e[38] = j, e[39] = $, e[40] = H, e[41] = G, e[42] = q, e[43] = K, e[44] = V, e[45] = Y, e[46] = J;
  } else A = e[32], P = e[33], M = e[34], O = e[35], N = e[36], U = e[37], j = e[38], $ = e[39], H = e[40], G = e[41], q = e[42], K = e[43], V = e[44], Y = e[45], J = e[46];
  let Q;
  e[48] !== n || e[49] !== A.style || e[50] !== V ? (Q = Gwa("div", { className: V, style: A.style, children: n }), e[48] = n, e[49] = A.style, e[50] = V, e[51] = Q) : Q = e[51];
  let te;
  return e[52] !== P || e[53] !== M || e[54] !== O || e[55] !== N || e[56] !== U || e[57] !== j || e[58] !== $ || e[59] !== H || e[60] !== G || e[61] !== q || e[62] !== K || e[63] !== Q || e[64] !== Y || e[65] !== J ? (te = SGS("div", { ref: Y, id: J, role: P, tabIndex: M, className: O, ...N, "data-active": U, "data-allow-multiple": j, onClick: $, onKeyDown: H, style: G, ...q, children: [K, Q] }), e[52] = P, e[53] = M, e[54] = O, e[55] = N, e[56] = U, e[57] = j, e[58] = $, e[59] = H, e[60] = G, e[61] = q, e[62] = K, e[63] = Q, e[64] = Y, e[65] = J, e[66] = te) : te = e[66], te;
}
