// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: XAIIcon.js range:17830939..17843644
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.162Z
var Lv1 = L({ "XAIIcon.js"() {
  "use strict";
  E();
} });
import { jsx as Eae, jsxs as fHt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as gwp } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as gRa, useRef as Ov1, useEffect as Fv1 } from "./react-runtime/react/esm-index-production.js";
function Bv1({ instruction: t }) {
  return t ? [L0e.description, L0e.instructionDescription] : L0e.description;
}
function Uv1() {
  return L0e.instructionBody;
}
function jv1() {
  return L0e.footer;
}
function $v1() {
  return L0e.trailingActions;
}
function Hv1() {
  return L0e.doubleConfirm;
}
function Wv1() {
  return L0e.doubleConfirmHint;
}
function Gv1() {
  return L0e.doubleConfirmKeyword;
}
function qv1(t) {
  return t?.variant === "secondary" ? { tone: t.tone, variant: "secondary" } : { tone: t?.tone ?? "accent", variant: "primary" };
}
function Ujr(t) {
  const e = gwp(24), { action: n, actionType: i, buttonProps: r, helpers: s, doubleConfirmText: o, doubleConfirmInput: a, isAnyLoading: l, isSelfLoading: c, kbs: u } = t;
  if (!n) return null;
  const h = o != null && o !== "" && i === "destructive" && a !== o;
  let p;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = ar({ rootClass: "ui-alert-dialog-action", stylexStyles: L0e.actionLoading }), e[0] = p) : p = e[0];
  const g = p;
  let f;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = { className: "ui-10l6tqk ui-wa60dl ui-1nrll8i ui-11lhmoz" }, e[1] = f) : f = e[1];
  const _ = f;
  let b;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = { 0: {}, 1: { className: "ui-g01cxk" } }, e[2] = b) : b = e[2];
  const y = b[!!c << 0], S = c || void 0, k = c || void 0, C = h || l;
  let T;
  e[3] !== n || e[4] !== s || e[5] !== h ? (T = async () => {
    if (!h) {
      if (!n.action) {
        s.dismiss();
        return;
      }
      try {
        const M = n.action(s);
        M instanceof Promise && await M;
      } catch (M) {
        const O = M;
        throw s.setIsLoading(false), O;
      }
    }
  }, e[3] = n, e[4] = s, e[5] = h, e[6] = T) : T = e[6];
  let I;
  e[7] !== c ? (I = c && Eae(zt, { className: _.className, style: _.style, name: "loading" }), e[7] = c, e[8] = I) : I = e[8];
  let A;
  e[9] !== n.label || e[10] !== y.className || e[11] !== y.style ? (A = Eae("span", { className: y.className, style: y.style, children: n.label }), e[9] = n.label, e[10] = y.className, e[11] = y.style, e[12] = A) : A = e[12];
  let P;
  return e[13] !== g.className || e[14] !== g.style || e[15] !== r || e[16] !== u || e[17] !== S || e[18] !== k || e[19] !== C || e[20] !== T || e[21] !== I || e[22] !== A ? (P = fHt(An, { ...r, className: g.className, style: g.style, "data-loading": S, "aria-busy": k, disabled: C, kbs: u, onClick: T, size: "md", children: [I, A] }), e[13] = g.className, e[14] = g.style, e[15] = r, e[16] = u, e[17] = S, e[18] = k, e[19] = C, e[20] = T, e[21] = I, e[22] = A, e[23] = P) : P = e[23], P;
}
function zv1() {
  return null;
}
function fwp(t) {
  const e = gwp(109), { onDismiss: n, isTopOfStack: i, title: r, description: s, descriptionRenderingMode: o, presentation: a, destructiveAction: l, suggestedAction: c, normalAction: u, regretAction: d } = t, h = i === void 0 ? true : i, p = o === void 0 ? "plain" : o, g = a === void 0 ? "default" : a, [f, _] = gRa(true), [b, y] = gRa(null), [S, k] = gRa("");
  let C;
  e[0] !== n ? (C = () => {
    _(false), n();
  }, e[0] = n, e[1] = C) : C = e[1];
  const T = C;
  let I;
  e[2] !== T ? (I = (Ae) => ({ dismiss: T, setIsLoading: (ot) => {
    y(ot ? Ae : null);
  } }), e[2] = T, e[3] = I) : I = e[3];
  const A = I;
  let P;
  e[4] !== n ? (P = (Ae) => {
    Ae || (_(false), n());
  }, e[4] = n, e[5] = P) : P = e[5];
  const M = P;
  let O;
  e[6] !== d ? (O = d ?? { label: "Cancel" }, e[6] = d, e[7] = O) : O = e[7];
  const N = O, U = l?.doubleConfirm?.text, j = U != null && U !== "", $ = Ov1(null), H = b !== null;
  let G;
  e: {
    if (c) {
      let Ae;
      e[8] !== c ? (Ae = { action: c, type: "suggested" }, e[8] = c, e[9] = Ae) : Ae = e[9], G = Ae;
      break e;
    }
    if (l) {
      let Ae;
      e[10] !== l ? (Ae = { action: l, type: "destructive" }, e[10] = l, e[11] = Ae) : Ae = e[11], G = Ae;
      break e;
    }
    if (u) {
      let Ae;
      e[12] !== u ? (Ae = { action: u, type: "normal" }, e[12] = u, e[13] = Ae) : Ae = e[13], G = Ae;
      break e;
    }
    G = void 0;
  }
  const q = G;
  let K;
  e[14] !== S || e[15] !== U || e[16] !== H || e[17] !== A ? (K = async (Ae, ot) => {
    if (!Ae || H || U != null && U !== "" && ot === "destructive" && S !== U) return;
    const Ue = A(ot);
    if (!Ae.action) {
      Ue.dismiss();
      return;
    }
    try {
      const it = Ae.action(Ue);
      it instanceof Promise && await it;
    } catch (it) {
      const qe = it;
      throw Ue.setIsLoading(false), qe;
    }
  }, e[14] = S, e[15] = U, e[16] = H, e[17] = A, e[18] = K) : K = e[18];
  const V = K;
  let Y;
  e[19] !== l || e[20] !== S || e[21] !== U || e[22] !== H || e[23] !== V ? (Y = (Ae) => {
    Ae.key !== "Enter" || Ae.nativeEvent.isComposing || Ae.defaultPrevented || H || !l || S !== U || (Ae.preventDefault(), Ae.stopPropagation(), V(l, "destructive"));
  }, e[19] = l, e[20] = S, e[21] = U, e[22] = H, e[23] = V, e[24] = Y) : Y = e[24];
  const J = Y;
  let Q;
  e[25] !== j || e[26] !== f ? (Q = (Ae) => {
    if (!(!Ae || !f)) {
      if (j) {
        queueMicrotask(() => {
          $.current?.focus({ preventScroll: true });
        });
        return;
      }
      Ae.focus({ preventScroll: true });
    }
  }, e[25] = j, e[26] = f, e[27] = Q) : Q = e[27];
  const te = Q;
  let ee, re;
  e[28] !== S || e[29] !== U || e[30] !== N || e[31] !== q || e[32] !== H || e[33] !== f || e[34] !== h || e[35] !== V ? (ee = () => {
    if (!f || !h) return;
    const Ae = (ot) => {
      if (H || ot.defaultPrevented || ot.key !== "Escape" && ot.key !== "Enter") return;
      if (ot.key === "Escape") {
        ot.preventDefault(), ot.stopPropagation(), ot.stopImmediatePropagation(), V(N, "regret");
        return;
      }
      if (ot.isComposing) return;
      const Be = ot.target;
      if (!(Be instanceof HTMLElement && (Be.tagName === "INPUT" || Be.tagName === "TEXTAREA" || Be.tagName === "SELECT" || Be.isContentEditable || Be.closest("button, a[href], [role='button'], [role='link'], [role='menuitem']"))) && q) {
        if (q.type === "destructive") {
          const Ue = U;
          if (Ue != null && Ue !== "" && S !== Ue) return;
        }
        ot.preventDefault(), ot.stopPropagation(), ot.stopImmediatePropagation(), V(q.action, q.type);
      }
    };
    return document.addEventListener("keydown", Ae, true), () => {
      document.removeEventListener("keydown", Ae, true);
    };
  }, re = [S, U, N, q, H, f, h, V], e[28] = S, e[29] = U, e[30] = N, e[31] = q, e[32] = H, e[33] = f, e[34] = h, e[35] = V, e[36] = ee, e[37] = re) : (ee = e[36], re = e[37]), Fv1(ee, re);
  const ie = q !== void 0 ? "⏎" : void 0, oe = u !== void 0 || l !== void 0 || c !== void 0, se = g === "instruction";
  let le;
  e[38] !== s || e[39] !== p || e[40] !== se ? (le = p === "markdown" && typeof s == "string" ? Eae(dT, { customComponents: vwp, generatedChildStyles: se ? _wp : void 0, normalized: true, size: "md", stylexStyles: se ? L0e.markdownInheritColor : void 0, children: s }) : s, e[38] = s, e[39] = p, e[40] = se, e[41] = le) : le = e[41];
  const ce = le;
  let ae;
  e[42] !== se ? (ae = Bv1({ instruction: se }), e[42] = se, e[43] = ae) : ae = e[43];
  const de = ae;
  let he;
  e[44] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (he = gn(Uv1()), e[44] = he) : he = e[44];
  const ge = he;
  let pe;
  e[45] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (pe = gn(Hv1()), e[45] = pe) : pe = e[45];
  const ve = pe;
  let fe;
  e[46] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (fe = gn(Wv1()), e[46] = fe) : fe = e[46];
  const Te = fe;
  let _e;
  e[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_e = gn(Gv1()), e[47] = _e) : _e = e[47];
  const Ce = _e;
  let Se;
  e[48] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Se = gn(jv1()), e[48] = Se) : Se = e[48];
  const Pe = Se;
  let we;
  e[49] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (we = gn($v1()), e[49] = we) : we = e[49];
  const Ie = we, Me = !H, De = se ? "instruction" : void 0, Ne = j ? -1 : 0, be = se ? "tertiary" : void 0;
  let je;
  e[50] !== be || e[51] !== r ? (je = Eae(Xr.Title, { color: be, children: r }), e[50] = be, e[51] = r, e[52] = je) : je = e[52];
  let $e;
  e[53] !== s || e[54] !== de || e[55] !== se || e[56] !== ce ? ($e = !se && s != null && Eae(Xr.Description, { rootStyle: de, children: ce }), e[53] = s, e[54] = de, e[55] = se, e[56] = ce, e[57] = $e) : $e = e[57];
  let Je;
  e[58] !== je || e[59] !== $e ? (Je = Eae(Xr.Header, { children: fHt(Xr.HeaderLead, { children: [je, $e] }) }), e[58] = je, e[59] = $e, e[60] = Je) : Je = e[60];
  let Ge;
  e[61] !== s || e[62] !== de || e[63] !== se || e[64] !== ce ? (Ge = se && s != null && Eae(Xr.Content, { className: ge.className, style: ge.style, children: Eae(Xr.Description, { as: "div", rootStyle: de, children: ce }) }), e[61] = s, e[62] = de, e[63] = se, e[64] = ce, e[65] = Ge) : Ge = e[65];
  let xe;
  e[66] !== S || e[67] !== U || e[68] !== J || e[69] !== j ? (xe = j && fHt("div", { className: ve.className, style: ve.style, children: [Eae(nn, { color: "secondary", size: "md", children: fHt("span", { className: Te.className, style: Te.style, children: ["Please type", " ", Eae("span", { className: Ce.className, style: Ce.style, children: U }), " ", "to confirm this operation."] }) }), Eae(nI, { "aria-label": "Confirmation input", onChange: (Ae) => k(Ae.target.value), onKeyDown: J, placeholder: U, ref: $, size: "lg", tabIndex: 0, value: S })] }), e[66] = S, e[67] = U, e[68] = J, e[69] = j, e[70] = xe) : xe = e[70];
  const Oe = Pe.className, ct = Pe.style;
  let Ye;
  e[71] !== N.tone ? (Ye = { tone: N.tone, variant: "ghost" }, e[71] = N.tone, e[72] = Ye) : Ye = e[72];
  let Ve;
  e[73] !== A ? (Ve = A("regret"), e[73] = A, e[74] = Ve) : Ve = e[74];
  const Xe = b === "regret";
  let lt;
  e[75] !== S || e[76] !== U || e[77] !== N || e[78] !== H || e[79] !== Ye || e[80] !== Ve || e[81] !== Xe ? (lt = Eae(Ujr, { action: N, actionType: "regret", buttonProps: Ye, doubleConfirmInput: S, doubleConfirmText: U, helpers: Ve, isAnyLoading: H, isSelfLoading: Xe, kbs: "Esc" }), e[75] = S, e[76] = U, e[77] = N, e[78] = H, e[79] = Ye, e[80] = Ve, e[81] = Xe, e[82] = lt) : lt = e[82];
  let He;
  e[83] !== l || e[84] !== S || e[85] !== U || e[86] !== q?.type || e[87] !== ie || e[88] !== oe || e[89] !== H || e[90] !== b || e[91] !== A || e[92] !== u || e[93] !== c ? (He = oe && fHt("div", { className: Ie.className, style: Ie.style, children: [Eae(Ujr, { action: u, actionType: "normal", buttonProps: { tone: u?.tone, variant: "ghost" }, doubleConfirmInput: S, doubleConfirmText: U, helpers: A("normal"), isAnyLoading: H, isSelfLoading: b === "normal", kbs: q?.type === "normal" ? ie : void 0 }), Eae(Ujr, { action: l, actionType: "destructive", buttonProps: { tone: l?.tone ?? "danger", variant: "primary" }, doubleConfirmInput: S, doubleConfirmText: U, helpers: A("destructive"), isAnyLoading: H, isSelfLoading: b === "destructive", kbs: q?.type === "destructive" ? ie : void 0 }), Eae(Ujr, { action: c, actionType: "suggested", buttonProps: qv1(c), doubleConfirmInput: S, doubleConfirmText: U, helpers: A("suggested"), isAnyLoading: H, isSelfLoading: b === "suggested", kbs: q?.type === "suggested" ? ie : void 0 })] }), e[83] = l, e[84] = S, e[85] = U, e[86] = q?.type, e[87] = ie, e[88] = oe, e[89] = H, e[90] = b, e[91] = A, e[92] = u, e[93] = c, e[94] = He) : He = e[94];
  let gt;
  e[95] !== lt || e[96] !== He ? (gt = Eae(Xr.Footer, { children: fHt("div", { className: Oe, style: ct, children: [lt, He] }) }), e[95] = lt, e[96] = He, e[97] = gt) : gt = e[97];
  let ht;
  return e[98] !== te || e[99] !== M || e[100] !== f || e[101] !== Me || e[102] !== De || e[103] !== Ne || e[104] !== Je || e[105] !== Ge || e[106] !== xe || e[107] !== gt ? (ht = fHt(Xr, { closeOnBackdropClick: Me, closeOnEscape: false, "data-presentation": De, dialogRootTabIndex: Ne, initialFocus: -1, onOpenChange: M, open: f, ref: te, size: "lg", children: [Je, Ge, xe, gt] }), e[98] = te, e[99] = M, e[100] = f, e[101] = Me, e[102] = De, e[103] = Ne, e[104] = Je, e[105] = Ge, e[106] = xe, e[107] = gt, e[108] = ht) : ht = e[108], ht;
}
var L0e, vwp, _wp, 