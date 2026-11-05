// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TraySteps.js range:16322045..16330866
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.125Z
PGS = L({ "TraySteps.js"() {
  "use strict";
  E(), Va(), _fi(), h$t(), nsp(), bfi(), FBr = { slide: { kzqmXN: "ui-h8yej3", k44tkh: "ui-gyzkii", kyAemX: "ui-2564zg", kWV6AL: "ui-skzprw", $$css: true }, forward: { kKVMdj: "ui-12ja3x5 ui-1aquc0h", $$css: true }, back: { kKVMdj: "ui-1czni7b ui-1aquc0h", $$css: true } };
} });
import { jsx as BBr, jsxs as MGS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as rsp } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as DGS, useContext as ssp, useRef as osp, useEffect as NGS, Children as LGS, isValidElement as qwa } from "./react-runtime/react/esm-index-production.js";
function OGS(t) {
  const e = rsp(3), { children: n, motion: i } = t, r = i === void 0 ? "suppressed" : i, s = ssp(UBr), o = s === "suppressed" ? s : r;
  let a;
  return e[0] !== n || e[1] !== o ? (a = BBr(UBr.Provider, { value: o, children: n }), e[0] = n, e[1] = o, e[2] = a) : a = e[2], a;
}
function asp(t) {
  const e = rsp(100);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I;
  e[0] !== t ? ({ children: n, currentStepIndex: r, defaultStepIndex: _, onStepChange: o, totalSteps: b, enableKeyboardNavigation: y, onSubmit: a, onCancel: s, maxHeight: S, visible: k, placement: C, motion: u, size: T, surface: I, scrollAreaCollapsed: h, stackPriority: g, stackOrder: p, className: i, style: f, rootStyle: d, ref: c, ...l } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S, e[19] = k, e[20] = C, e[21] = T, e[22] = I) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18], k = e[19], C = e[20], T = e[21], I = e[22]);
  const A = _ === void 0 ? 0 : _, P = b === void 0 ? 1 : b, M = y === void 0 ? true : y, O = S === void 0 ? 220 : S, N = k === void 0 ? true : k, U = C === void 0 ? "bottom" : C, j = T === void 0 ? "fill" : T, $ = I === void 0 ? "elevated" : I, H = ssp(UBr), G = u ?? H ?? "default", [q, K] = IW(r, A, o, "Tray.Root"), V = osp(null);
  let Y;
  e[23] !== c ? (Y = (Ge) => {
    V.current = Ge, typeof c == "function" ? c(Ge) : c && (c.current = Ge);
  }, e[23] = c, e[24] = Y) : Y = e[24];
  const J = Y, Q = osp(null);
  let te;
  e[25] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (te = (Ge) => {
    Q.current = Ge?.viewportElement ?? null;
  }, e[25] = te) : te = e[25];
  const ee = te, re = q === 0, ie = q === P - 1;
  let oe;
  e[26] !== q || e[27] !== ie || e[28] !== K ? (oe = () => {
    ie || K(q + 1);
  }, e[26] = q, e[27] = ie, e[28] = K, e[29] = oe) : oe = e[29];
  const se = oe;
  let le;
  e[30] !== q || e[31] !== re || e[32] !== K ? (le = () => {
    re || K(q - 1);
  }, e[30] = q, e[31] = re, e[32] = K, e[33] = le) : le = e[33];
  const ce = le;
  let ae;
  e[34] !== K || e[35] !== P ? (ae = (Ge) => {
    Ge >= 0 && Ge < P && K(Ge);
  }, e[34] = K, e[35] = P, e[36] = ae) : ae = e[36];
  const de = ae;
  let he, ge;
  e[37] !== M || e[38] !== se || e[39] !== ce || e[40] !== ie || e[41] !== s || e[42] !== a || e[43] !== N ? (he = () => {
    if (!M || !N) return;
    const Ge = (ct) => {
      const Ye = V.current;
      if (!Ye) return;
      const Xe = Ye.ownerDocument.activeElement;
      if (!(Xe instanceof HTMLElement) || !Ye.contains(Xe) || Xe.tagName === "INPUT" || Xe.tagName === "TEXTAREA" || Xe.isContentEditable || ct.metaKey || ct.ctrlKey || ct.altKey) return;
      const He = NBr(Ye) ?? Ye, gt = Nwa(He);
      if ((ct.key === "ArrowDown" || ct.key === "ArrowUp") && gt.length > 0) {
        ct.preventDefault();
        const ht = gt.indexOf(Xe), Ae = ct.key === "ArrowDown" ? 1 : -1, ot = ht < 0 ? 0 : (ht + Ae + gt.length) % gt.length;
        gt[ot]?.focus(zwa);
        return;
      }
      if (ct.key.length === 1) {
        const ht = ct.key.toUpperCase().charCodeAt(0) - 65;
        if (ht >= 0 && ht < gt.length) {
          ct.preventDefault();
          const Ae = gt[ht];
          Ae.click(), Ae.focus(zwa);
          return;
        }
      }
      e: switch (ct.key) {
        case "ArrowDown":
        case "ArrowRight": {
          ct.preventDefault(), se();
          break e;
        }
        case "ArrowUp":
        case "ArrowLeft": {
          ct.preventDefault(), ce();
          break e;
        }
        case "Enter": {
          const ht = Owa(Xe);
          if (!ht || !Fwa(ht)) return;
          ct.preventDefault(), a ? a() : ie || se();
          break e;
        }
        case "Escape": {
          ct.preventDefault(), s?.();
          break e;
        }
        default:
      }
    }, xe = (ct) => {
      if (ct.key !== "Escape" || ct.defaultPrevented || !s) return;
      const Ye = V.current;
      if (!Ye) return;
      const Ve = Ye.ownerDocument.activeElement;
      !(Ve instanceof HTMLElement) || !Ye.contains(Ve) || Ve.tagName !== "INPUT" && Ve.tagName !== "TEXTAREA" && !Ve.isContentEditable || (ct.preventDefault(), s());
    }, Oe = V.current?.ownerDocument.defaultView ?? window;
    return Oe.addEventListener("keydown", Ge, true), Oe.addEventListener("keydown", xe), () => {
      Oe.removeEventListener("keydown", Ge, true), Oe.removeEventListener("keydown", xe);
    };
  }, ge = [M, se, ce, ie, s, a, N], e[37] = M, e[38] = se, e[39] = ce, e[40] = ie, e[41] = s, e[42] = a, e[43] = N, e[44] = he, e[45] = ge) : (he = e[44], ge = e[45]), NGS(he, ge);
  let pe;
  e[46] !== q || e[47] !== M || e[48] !== se || e[49] !== ce || e[50] !== de || e[51] !== re || e[52] !== ie || e[53] !== s || e[54] !== a || e[55] !== j || e[56] !== P ? (pe = { currentStepIndex: q, totalSteps: P, goToNextStep: se, goToPrevStep: ce, goToStep: de, isFirstStep: re, isLastStep: ie, enableKeyboardNavigation: M, onSubmit: a, onCancel: s, scrollViewportRef: Q, size: j }, e[46] = q, e[47] = M, e[48] = se, e[49] = ce, e[50] = de, e[51] = re, e[52] = ie, e[53] = s, e[54] = a, e[55] = j, e[56] = P, e[57] = pe) : pe = e[57];
  const ve = pe;
  let fe, Te, _e, Ce, Se;
  if (e[58] !== n) {
    const Ge = LGS.toArray(n);
    Se = [], fe = [], _e = [];
    for (const xe of Ge) qwa(xe) && xe.type === Rrp ? fe.push(xe) : qwa(xe) && (xe.type === Drp || xe.type === krp) ? Se.push(xe) : _e.push(xe);
    Te = _e.length > 0, Ce = Ge.some(FGS), e[58] = n, e[59] = fe, e[60] = Te, e[61] = _e, e[62] = Ce, e[63] = Se;
  } else fe = e[59], Te = e[60], _e = e[61], Ce = e[62], Se = e[63];
  const Pe = Ce;
  let we;
  if (e[64] !== Pe || e[65] !== Te || e[66] !== re || e[67] !== ie || e[68] !== O || e[69] !== _e) {
    const Ge = gn(tHS());
    we = Te ? Pe ? _e : BBr(xg, { ref: ee, maxHeight: O, topFadeSize: 24, bottomFadeSize: 24, topFadeStartOpacity: re ? 0 : 1, bottomFadeStartOpacity: ie ? 0 : 1, direction: "vertical", className: ri("ui-tray__scroll-area", Ge.className), contentStyle: lsp.content, style: Ge.style, children: _e }) : null, e[64] = Pe, e[65] = Te, e[66] = re, e[67] = ie, e[68] = O, e[69] = _e, e[70] = we;
  } else we = e[70];
  const Ie = we;
  let Me;
  e[71] !== p || e[72] !== g || e[73] !== f ? (Me = { ...f }, g !== void 0 && (Me.zIndex = g), p !== void 0 && (Me.order = p), e[71] = p, e[72] = g, e[73] = f, e[74] = Me) : Me = e[74];
  const De = Me;
  let Ne;
  e[75] !== i || e[76] !== G || e[77] !== d || e[78] !== De || e[79] !== N ? (Ne = ar({ rootClass: "ui-tray", stylexStyles: [J$S({ visible: N, motion: G }), d, G === "suppressed" ? eHS() : null], className: i, style: De }), e[75] = i, e[76] = G, e[77] = d, e[78] = De, e[79] = N, e[80] = Ne) : Ne = e[80];
  const be = Ne;
  let je;
  e[81] !== Ie || e[82] !== h ? (je = Ie && (h !== void 0 ? BBr(k1n, { "aria-hidden": h ? true : void 0, collapsed: h, className: "ui-tray__collapsible-scroll-area", inert: h ? true : void 0, children: Ie }) : Ie), e[81] = Ie, e[82] = h, e[83] = je) : je = e[83];
  let $e;
  e[84] !== J || e[85] !== fe || e[86] !== G || e[87] !== U || e[88] !== l || e[89] !== j || e[90] !== $ || e[91] !== je || e[92] !== Se || e[93] !== be.className || e[94] !== be.style || e[95] !== N ? ($e = MGS("div", { ref: J, className: be.className, "data-tray-motion": G, "data-placement": U, "data-size": j, "data-surface": $, "data-visible": N, style: be.style, ...l, children: [Se, je, fe] }), e[84] = J, e[85] = fe, e[86] = G, e[87] = U, e[88] = l, e[89] = j, e[90] = $, e[91] = je, e[92] = Se, e[93] = be.className, e[94] = be.style, e[95] = N, e[96] = $e) : $e = e[96];
  let Je;
  return e[97] !== ve || e[98] !== $e ? (Je = BBr(RBr.Provider, { value: ve, children: $e }), e[97] = ve, e[98] = $e, e[99] = Je) : Je = e[99], Je;
}
function FGS(t) {
  return qwa(t) && t.type === Trp;
}
var lsp, zwa, UBr, fi, 