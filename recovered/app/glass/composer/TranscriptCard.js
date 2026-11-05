// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCard.js range:15093988..15099940
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, OxS, jxS, zxS, XxS, eAS, rAS, lAS, hAS, gAS, bAS, wAS, xAS, MAS, OAS, UAS
// wrapper-init: u0e
// hoisted-owner: ToolCallCard.js (app-out-vs-workbench-workbench-glass-main-js:2325); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

u0e = L({ "TranscriptCard.js"() {
  "use strict";
  E(), OxS(), jxS(), zxS(), XxS(), eAS(), rAS(), lAS(), hAS(), gAS(), bAS(), wAS(), xAS(), MAS(), OAS(), UAS(), uh = { Root: IAS, Media: kAS, Content: LxS, Rows: LAS, Row: PAS, Footer: UxS, Header: qxS, HeaderLeading: dAS, HeaderContent: YxS, HeaderTrailing: _AS, HeaderIcon: aAS, HeaderTitle: mAS, HeaderDescription: JxS, HeaderExpand: iAS, Timeout: BAS };
} });
import { jsx as WSn, jsxs as jAS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as $AS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as EHh, useRef as IHh, useEffect as xHh } from "./react-runtime/react/esm-index-production.js";
function HAS() {
  return qSn.body;
}
function WAS() {
  return qSn.streamingFade;
}
function GAS() {
  return [Fva, qSn.expandButton];
}
function qAS(t) {
  return [qSn.expandIcon, t ? qSn.expandIconVisible : null];
}
function zAS(t) {
  const e = t.querySelector(".ui-scroll-area__viewport");
  return e ? e.scrollHeight > e.clientHeight + Ova : t.scrollHeight > t.clientHeight + Ova;
}
function GSn(t) {
  const e = $AS(63), { header: n, headerTitle: i, children: r, loading: s, expanded: o, expandable: a, defaultExpanded: l, collapsedHeight: c, onHeaderClick: u, onExpandChange: d, headerVariant: h, headerDivider: p, rootStyle: g, headerStyle: f } = t, _ = s === void 0 ? false : s, b = l === void 0 ? false : l, y = c === void 0 ? AHh : c, S = h === void 0 ? "default" : h, [k, C] = j_e(b), T = o ?? k, [I, A] = EHh(false), [P, M] = EHh(false), O = IHh(null), N = IHh(false), U = r != null && r !== false, j = a ?? I, $ = p ?? (U && S === "default");
  let H;
  e[0] !== y || e[1] !== T || e[2] !== _ ? (H = ar({ rootClass: "ui-tool-call-card__body", stylexStyles: HAS(), style: !_ && !T ? { maxHeight: y, overflow: "hidden" } : void 0 }), e[0] = y, e[1] = T, e[2] = _, e[3] = H) : H = e[3];
  const G = H;
  let q;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = gn(WAS()), e[4] = q) : q = e[4];
  const K = q;
  let V;
  e[5] !== T ? (V = ar({ rootClass: "ui-tool-call-card__expand-button", stylexStyles: GAS(), className: T ? "ui-tool-call-card__expand-button--expanded" : "ui-tool-call-card__expand-button--collapsed" }), e[5] = T, e[6] = V) : V = e[6];
  const Y = V;
  let J;
  e[7] !== T ? (J = gn(qAS(T)), e[7] = T, e[8] = J) : J = e[8];
  const Q = J;
  let te;
  e[9] !== U || e[10] !== _ ? (te = () => {
    if (!_ || !U) {
      M(false);
      return;
    }
    const pe = O.current;
    if (!pe) return;
    const ve = () => {
      const Ce = zAS(pe);
      M((Se) => Se === Ce ? Se : Ce);
    };
    let fe;
    const Te = () => {
      fe === void 0 && (fe = requestAnimationFrame(() => {
        fe = void 0, ve();
      }));
    }, _e = new ResizeObserver(Te);
    _e.observe(pe);
    for (const Ce of Array.from(pe.querySelectorAll(".ui-scroll-area__viewport"))) _e.observe(Ce);
    return Te(), () => {
      fe !== void 0 && cancelAnimationFrame(fe), _e.disconnect();
    };
  }, e[9] = U, e[10] = _, e[11] = te) : te = e[11];
  let ee;
  e[12] !== y || e[13] !== U || e[14] !== _ ? (ee = [y, U, _], e[12] = y, e[13] = U, e[14] = _, e[15] = ee) : ee = e[15], xHh(te, ee);
  let re;
  e[16] !== a || e[17] !== T || e[18] !== U || e[19] !== _ ? (re = () => {
    if (a !== void 0) {
      N.current = false, A(false);
      return;
    }
    if (_ || !U || T) return;
    const pe = O.current;
    if (!pe) return;
    let ve;
    const fe = () => {
      ve === void 0 && (ve = requestAnimationFrame(() => {
        ve = void 0;
        const _e = pe.scrollHeight > pe.clientHeight;
        _e !== N.current && (N.current = _e, A(_e));
      }));
    }, Te = new ResizeObserver(fe);
    return Te.observe(pe), fe(), () => {
      ve !== void 0 && cancelAnimationFrame(ve), Te.disconnect();
    };
  }, e[16] = a, e[17] = T, e[18] = U, e[19] = _, e[20] = re) : re = e[20];
  let ie;
  e[21] !== y || e[22] !== a || e[23] !== T || e[24] !== U || e[25] !== _ ? (ie = [y, _, U, T, a], e[21] = y, e[22] = a, e[23] = T, e[24] = U, e[25] = _, e[26] = ie) : ie = e[26], xHh(re, ie);
  let oe;
  e[27] !== o || e[28] !== T || e[29] !== d || e[30] !== C ? (oe = () => {
    const pe = !T;
    o === void 0 && C(pe), d?.(pe);
  }, e[27] = o, e[28] = T, e[29] = d, e[30] = C, e[31] = oe) : oe = e[31];
  const se = oe;
  let le;
  e[32] !== g ? (le = [Fva, g], e[32] = g, e[33] = le) : le = e[33];
  let ce;
  e[34] !== n || e[35] !== f || e[36] !== i || e[37] !== S || e[38] !== u || e[39] !== $ ? (ce = WSn(uh.Header, { variant: S, withDivider: $, title: i, onClick: u, rootStyle: f, children: n }), e[34] = n, e[35] = f, e[36] = i, e[37] = S, e[38] = u, e[39] = $, e[40] = ce) : ce = e[40];
  let ae;
  e[41] !== G || e[42] !== r || e[43] !== U ? (ae = U ? WSn("div", { ref: O, className: G.className, style: G.style, children: r }) : null, e[41] = G, e[42] = r, e[43] = U, e[44] = ae) : ae = e[44];
  let de;
  e[45] !== U || e[46] !== _ || e[47] !== P ? (de = _ && U && P ? WSn("div", { className: K.className, style: K.style }) : null, e[45] = U, e[46] = _, e[47] = P, e[48] = de) : de = e[48];
  let he;
  e[49] !== Y || e[50] !== Q || e[51] !== j || e[52] !== T || e[53] !== U || e[54] !== _ || e[55] !== se ? (he = !_ && U && j ? WSn("button", { type: "button", className: Y.className, style: Y.style, "data-tool-call-card-marker": "button", onClick: se, children: WSn("span", { className: Q.className, style: Q.style, children: WSn(zt, { name: T ? "chevron-up" : "chevron-down", size: "sm" }) }) }) : null, e[49] = Y, e[50] = Q, e[51] = j, e[52] = T, e[53] = U, e[54] = _, e[55] = se, e[56] = he) : he = e[56];
  let ge;
  return e[57] !== le || e[58] !== ce || e[59] !== ae || e[60] !== de || e[61] !== he ? (ge = jAS(uh.Root, { rootStyle: le, children: [ce, ae, de, he] }), e[57] = le, e[58] = ce, e[59] = ae, e[60] = de, e[61] = he, e[62] = ge) : ge = e[62], ge;
}
var AHh, Ova, Fva, qSn, 