// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogHandle.js range:17872522..17883558
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.607Z
z_1 = L({ "DialogHandle.js"() {
  E(), $wp(), VS(), Zb(), $Ra = class {
    constructor(t) {
      this.store = t ?? new ORa();
    }
    open(t) {
      const e = t ? this.store.context.triggerElements.getById(t) : void 0;
      process.env.NODE_ENV !== "production" && t && !e && console.warn(`Base UI: DialogHandle.open: No trigger found with id "${t}". The dialog will open, but the trigger will not be associated with the dialog.`), this.store.setOpen(true, zd(Uwe, void 0, e));
    }
    openWithPayload(t) {
      this.store.set("payload", t), this.store.setOpen(true, zd(Uwe, void 0, void 0));
    }
    close() {
      this.store.setOpen(false, zd(Uwe, void 0, void 0));
    }
    get isOpen() {
      return this.store.select("open");
    }
  };
} });
import { jsx as xae, jsxs as qwp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as F0e } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as V_1, useContext as K_1, useState as zwp, useLayoutEffect as Y_1 } from "./react-runtime/react/esm-index-production.js";
function X_1(t) {
  const e = K_1(WRa);
  if (e === null) throw new Error(`${t} must be used within DialogNew.Root`);
  return e;
}
function Z_1(t) {
  const e = F0e(27);
  let n, i, r, s, o, a;
  e[0] !== t ? ({ open: s, defaultOpen: a, onOpenChange: i, onOpenChangeComplete: r, children: n, ...o } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6]);
  const l = a === void 0 ? false : a, [c, u] = zwp(l), d = s ?? c, [h, p] = zwp(d);
  let g, f;
  e[7] !== d ? (g = () => {
    d && p(true);
  }, f = [d], e[7] = d, e[8] = g, e[9] = f) : (g = e[8], f = e[9]), Y_1(g, f);
  let _;
  e[10] !== i || e[11] !== s ? (_ = (A, P) => {
    i?.(A, P), s === void 0 && !P.isCanceled && u(A);
  }, e[10] = i, e[11] = s, e[12] = _) : _ = e[12];
  const b = _;
  let y;
  e[13] !== r ? (y = (A) => {
    p(A), r?.(A);
  }, e[13] = r, e[14] = y) : y = e[14];
  const S = y;
  let k;
  e[15] !== h ? (k = { layerActive: h }, e[15] = h, e[16] = k) : k = e[16];
  const C = k;
  let T;
  e[17] !== n || e[18] !== l || e[19] !== b || e[20] !== S || e[21] !== s || e[22] !== o ? (T = xae(F_1, { ...o, open: s, defaultOpen: l, onOpenChange: b, onOpenChangeComplete: S, children: n }), e[17] = n, e[18] = l, e[19] = b, e[20] = S, e[21] = s, e[22] = o, e[23] = T) : T = e[23];
  let I;
  return e[24] !== C || e[25] !== T ? (I = xae(WRa.Provider, { value: C, children: T }), e[24] = C, e[25] = T, e[26] = I) : I = e[26], I;
}
function Q_1(t) {
  const e = F0e(6);
  let n, i;
  e[0] !== t ? ({ ref: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r;
  return e[3] !== n || e[4] !== i ? (r = xae(jRa, { ...i, ref: n, "data-component": "base-dialog-trigger" }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function J_1(t) {
  const e = F0e(9);
  let n, i, r;
  e[0] !== t ? ({ container: n, ref: i, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = wO(), { layerActive: o } = X_1("DialogNew.Portal"), { portalLayerStyles: a } = Yj("modal", o), l = n === void 0 ? s ?? void 0 : n;
  let c;
  return e[4] !== a || e[5] !== i || e[6] !== r || e[7] !== l ? (c = xae(NRa, { ...r, ref: i, container: l, "data-component": "base-dialog-portal", style: a }), e[4] = a, e[5] = i, e[6] = r, e[7] = l, e[8] = c) : c = e[8], c;
}
function eb1(t) {
  const e = F0e(10);
  let n, i, r;
  e[0] !== t ? ({ ref: n, stylexStyles: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] !== r ? (s = gn(sst.backdrop, r), e[4] = r, e[5] = s) : s = e[5];
  let o;
  return e[6] !== n || e[7] !== i || e[8] !== s ? (o = xae(ARa, { ...i, ref: n, "data-component": "base-dialog-backdrop", ...s }), e[6] = n, e[7] = i, e[8] = s, e[9] = o) : o = e[9], o;
}
function tb1(t) {
  const e = F0e(10);
  let n, i, r;
  e[0] !== t ? ({ ref: n, stylexStyles: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] !== r ? (s = gn(sst.viewport, r), e[4] = r, e[5] = s) : s = e[5];
  let o;
  return e[6] !== n || e[7] !== i || e[8] !== s ? (o = xae(BRa, { ...i, ref: n, "data-component": "base-dialog-viewport", ...s }), e[6] = n, e[7] = i, e[8] = s, e[9] = o) : o = e[9], o;
}
function nb1(t) {
  const e = F0e(13);
  let n, i, r, s;
  e[0] !== t ? ({ ref: n, size: s, stylexStyles: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = s === void 0 ? "md" : s;
  let a;
  e[5] !== o || e[6] !== r ? (a = gn(sst.popup, Ywp[o], r), e[5] = o, e[6] = r, e[7] = a) : a = e[7];
  let l;
  return e[8] !== n || e[9] !== i || e[10] !== o || e[11] !== a ? (l = xae(DRa, { ...i, ref: n, "data-component": "base-dialog-popup", "data-size": o, ...a }), e[8] = n, e[9] = i, e[10] = o, e[11] = a, e[12] = l) : l = e[12], l;
}
function ib1(t) {
  const e = F0e(15);
  let n, i, r, s, o;
  e[0] !== t ? ({ ref: r, title: o, description: i, children: n, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = o !== void 0 || i !== void 0;
  let l;
  e[6] !== i || e[7] !== a || e[8] !== o ? (l = a ? qwp(HRa, { children: [o !== void 0 ? xae(Vwp, { children: o }) : null, i !== void 0 ? xae(Kwp, { children: i }) : null] }) : null, e[6] = i, e[7] = a, e[8] = o, e[9] = l) : l = e[9];
  let c;
  return e[10] !== n || e[11] !== r || e[12] !== s || e[13] !== l ? (c = qwp("div", { ...s, ref: r, "data-component": "base-dialog-header", className: "ui-1n2onr6 ui-78zum5 ui-1cy8zhl ui-1qughib ui-ehausa ui-1t8xvyj ui-10cfkro ui-usxwy5 ui-193t4r6", children: [l, n] }), e[10] = n, e[11] = r, e[12] = s, e[13] = l, e[14] = c) : c = e[14], c;
}
function HRa(t) {
  const e = F0e(6);
  let n, i;
  e[0] !== t ? ({ ref: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r;
  return e[3] !== n || e[4] !== i ? (r = xae("div", { ...i, ref: n, "data-component": "base-dialog-header-lead", className: "ui-78zum5 ui-dt5ytf ui-1iyjqo2 ui-euugli ui-11twubx" }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function rb1(t) {
  const e = F0e(11);
  let n, i, r, s;
  e[0] !== t ? ({ ref: n, scrollable: r, topInset: s, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = r === void 0 ? false : r, a = s === void 0 ? "compact" : s, l = o || void 0;
  let c;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = { 0: { className: "ui-euugli ui-2lwn1j ui-10cfkro ui-20eq2h ui-193t4r6 ui-1wd3ewq ui-11wthnw ui-1ja60sm ui-t9g0qb" }, 2: { className: "ui-euugli ui-2lwn1j ui-10cfkro ui-20eq2h ui-193t4r6 ui-1wd3ewq ui-11wthnw ui-1ja60sm ui-exx8yu" }, 1: { className: "ui-euugli ui-2lwn1j ui-10cfkro ui-20eq2h ui-193t4r6 ui-1wd3ewq ui-11wthnw ui-1ja60sm ui-t9g0qb ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1odjw0f" }, 3: { className: "ui-euugli ui-2lwn1j ui-10cfkro ui-20eq2h ui-193t4r6 ui-1wd3ewq ui-11wthnw ui-1ja60sm ui-exx8yu ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1odjw0f" } }, e[5] = c) : c = e[5];
  const u = c[(a === "compact") << 1 | !!o << 0];
  let d;
  return e[6] !== n || e[7] !== i || e[8] !== l || e[9] !== u ? (d = xae("div", { ...i, ref: n, "data-component": "base-dialog-content", "data-scrollable": l, ...u }), e[6] = n, e[7] = i, e[8] = l, e[9] = u, e[10] = d) : d = e[10], d;
}
function sb1(t) {
  const e = F0e(10);
  let n, i, r;
  e[0] !== t ? ({ ref: n, justify: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = r === void 0 ? "end" : r;
  let o;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = { 0: { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-a0y8cy ui-178xt8z ui-13fuv20 ui-1aeic0j" }, 4: { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-a0y8cy ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1nhvcw1" }, 2: { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-a0y8cy ui-178xt8z ui-13fuv20 ui-1aeic0j ui-13a6bvl" }, 6: { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-a0y8cy ui-178xt8z ui-13fuv20 ui-1aeic0j ui-13a6bvl" }, 1: { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-a0y8cy ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1qughib" }, 5: { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-a0y8cy ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1qughib" }, 3: { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-a0y8cy ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1qughib" }, 7: { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-a0y8cy ui-178xt8z ui-13fuv20 ui-1aeic0j ui-1qughib" } }, e[4] = o) : o = e[4];
  const a = o[(s === "start") << 2 | (s === "end") << 1 | (s === "between") << 0];
  let l;
  return e[5] !== s || e[6] !== n || e[7] !== i || e[8] !== a ? (l = xae("div", { ...i, ref: n, "data-component": "base-dialog-footer", "data-justify": s, ...a }), e[5] = s, e[6] = n, e[7] = i, e[8] = a, e[9] = l) : l = e[9], l;
}
function Vwp(t) {
  const e = F0e(6);
  let n, i;
  e[0] !== t ? ({ ref: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r;
  return e[3] !== n || e[4] !== i ? (r = xae(URa, { ...i, ref: n, "data-component": "base-dialog-title", className: "ui-1ghz6dp ui-1wd3ewq ui-fc7y3v ui-1kjrdcj ui-1yxxptd ui-1mzt3pk" }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function Kwp(t) {
  const e = F0e(6);
  let n, i;
  e[0] !== t ? ({ ref: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r;
  return e[3] !== n || e[4] !== i ? (r = xae(PRa, { ...i, ref: n, "data-component": "base-dialog-description", className: "ui-1ghz6dp ui-4b2ntj ui-11wthnw ui-20ajya ui-1ja60sm ui-1mzt3pk" }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function ob1(t) {
  const e = F0e(19);
  let n, i, r, s, o;
  e[0] !== t ? ({ ref: r, render: s, children: i, "aria-label": n, ...o } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = s === void 0 && i === void 0;
  let l;
  e[6] !== a ? (l = a ? { className: "ui-jyslct ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-16bvwqk ui-1a6rlst ui-1717udv ui-19aaqeu ui-7gh5u8 ui-jbqb8w ui-1iuyybk ui-c342km ui-ng3xce ui-1i4c3av ui-1ypdohk ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1uczgqu ui-1725o6r ui-1y3gkto" } : {}, e[6] = a, e[7] = l) : l = e[7];
  const c = l, u = n ?? (a ? "Close" : void 0), d = a ? "icon" : "custom";
  let h;
  e[8] !== i || e[9] !== a ? (h = a ? xae(zt, { "aria-hidden": "true", name: "close", size: "sm", variant: "outline" }) : i, e[8] = i, e[9] = a, e[10] = h) : h = e[10];
  let p;
  return e[11] !== c || e[12] !== r || e[13] !== s || e[14] !== o || e[15] !== u || e[16] !== d || e[17] !== h ? (p = xae(RRa, { ...o, ref: r, render: s, "aria-label": u, "data-component": "base-dialog-close", "data-appearance": d, ...c, children: h }), e[11] = c, e[12] = r, e[13] = s, e[14] = o, e[15] = u, e[16] = d, e[17] = h, e[18] = p) : p = e[18], p;
}
var sst, Ywp, WRa, Xwp, obe, 