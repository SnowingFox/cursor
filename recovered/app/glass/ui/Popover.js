// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Popover.js range:15737872..15750402
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.862Z
N1n = L({ "Popover.js"() {
  "use strict";
  E(), Va(), oWe(), E_e(), mf(), yhe(), She(), G6S(), V6S(), pB(), X6S(), Ooe(), J6S(), r4S(), o4S(), l4S(), u4S(), qSa = d4S(false), (function(t) {
    t.Root = p4S, t.Trigger = m4S, t.Popup = g4S, t.Title = v4S, t.Description = _4S, t.Close = b4S;
  })(yA || (yA = {}));
} });
import { jsx as iN, jsxs as zSa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Fkt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as VSa, useDeferredValue as y4S, useRef as KSa, useEffect as zZh, forwardRef as S4S } from "./react-runtime/react/esm-index-production.js";
function YSa(t) {
  return JZh.includes(t);
}
function VZh(t) {
  return eQh.includes(t);
}
function nGe(t) {
  if (typeof t != "object" || t === null) return;
  const e = "icon" in t ? t.icon : void 0, n = "colorId" in t ? t.colorId : void 0;
  if (!(typeof e != "string" || typeof n != "string")) return YSa(e) && VZh(n) ? { icon: e, colorId: n } : void 0;
}
function N4r(t) {
  const { icon: e, colorId: n } = t;
  if (e === void 0 && n === void 0) return;
  const i = typeof e == "string" && YSa(e) ? e : tQh, r = typeof n == "string" && VZh(n) ? n : nQh;
  return { icon: i, colorId: r };
}
function L4r(t) {
  return Tnt[t];
}
function KZh(t) {
  return !t.toLowerCase().includes("legacy") && !t.includes("filled");
}
function k4S(t) {
  if (ZSa === void 0) {
    const e = /* @__PURE__ */ new Map();
    for (const n of LHe) {
      if (!KZh(n)) continue;
      const i = L4r(n), r = e.get(i);
      r === void 0 ? e.set(i, [n.toLowerCase()]) : r.push(n.toLowerCase());
    }
    ZSa = new Map(Array.from(e, ([n, i]) => [n, i.join(" ")]));
  }
  return ZSa.get(L4r(t)) ?? t.toLowerCase();
}
function w4S({ candidate: t, incumbent: e }) {
  const n = tgi.includes(t) ? 0 : 1, i = tgi.includes(e) ? 0 : 1;
  return n !== i ? n - i : t.length !== e.length ? t.length - e.length : t.localeCompare(e);
}
function XSa(t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) {
    const i = L4r(n), r = e.get(i);
    (r === void 0 || w4S({ candidate: n, incumbent: r }) < 0) && e.set(i, n);
  }
  return t.filter((n) => e.get(L4r(n)) === n);
}
function YZh(t = U4r) {
  return { icon: t[Math.floor(Math.random() * t.length)], colorId: XZh() };
}
function XZh() {
  const t = egi;
  return t[Math.floor(Math.random() * t.length)];
}
function C4S(t, e) {
  const n = k4S(t);
  return e.every((i) => n.includes(i));
}
function T4S(t) {
  return t !== null && "closest" in t && typeof t.closest == "function";
}
function hae(t) {
  const e = Fkt(6), { value: n, size: i, "aria-label": r, placeholder: s, muted: o } = t, a = i === void 0 ? "base" : i, l = s === void 0 ? false : s, c = o === void 0 ? false : o, u = l ? void 0 : n.colorId === "default" ? "secondary" : n.colorId, d = l || !c ? null : aQh[n.colorId];
  let h;
  return e[0] !== r || e[1] !== a || e[2] !== u || e[3] !== d || e[4] !== n.icon ? (h = iN("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-xymvpz", children: iN(zt, { name: n.icon, size: a, color: u, rootStyle: d, "aria-label": r }) }), e[0] = r, e[1] = a, e[2] = u, e[3] = d, e[4] = n.icon, e[5] = h) : h = e[5], h;
}
function ZZh(t) {
  const e = Fkt(58), { value: n, onChange: i, onClear: r, onDone: s, icons: o } = t, a = o === void 0 ? U4r : o, [l, c] = VSa(""), [u, d] = VSa(n?.colorId ?? "default"), h = y4S(l), p = KSa(null), g = KSa(h), f = KSa(null), _ = n?.colorId ?? u;
  let b, y;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = () => {
    f.current?.focus();
  }, y = [], e[0] = b, e[1] = y) : (b = e[0], y = e[1]), zZh(b, y);
  let S;
  e[2] !== h ? (S = h.trim().toLowerCase().split(/[\s/_]+/).filter(Boolean), e[2] = h, e[3] = S) : S = e[3];
  const k = S;
  let C;
  e[4] !== a || e[5] !== r || e[6] !== n?.icon ? (C = () => {
    const ce = XSa(a).filter((ge) => r === void 0 || ge !== T4r), ae = n?.icon, de = ae !== void 0 && ce.some((ge) => MSa(ge, ae));
    return ae !== void 0 && !de && (r === void 0 || ae !== T4r) ? [ae, ...ce] : ce;
  }, e[4] = a, e[5] = r, e[6] = n?.icon, e[7] = C) : C = e[7], n?.icon;
  let T;
  e[8] !== C ? (T = C(), e[8] = C, e[9] = T) : T = e[9];
  const I = T;
  let A;
  e[10] !== I || e[11] !== k ? (A = k.length === 0 ? I : I.filter((ce) => C4S(ce, k)), e[10] = I, e[11] = k, e[12] = A) : A = e[12];
  const P = A;
  let M;
  e[13] !== P || e[14] !== r ? (M = r === void 0 ? P : [C4r, ...P], e[13] = P, e[14] = r, e[15] = M) : M = e[15];
  const O = M;
  let N;
  e[16] !== O.length ? (N = O6S(O.length, rQh), e[16] = O.length, e[17] = N) : N = e[17];
  const U = N;
  let j, $;
  e[18] !== h || e[19] !== O.length ? (j = () => {
    if (g.current === h || (g.current = h, O.length === 0)) return;
    const ce = p.current;
    ce?.scrollToRow({ index: 0, align: "start", behavior: "instant" });
    const ae = ce?.element;
    ae != null && (ae.scrollTop = 0);
  }, $ = [O.length, h], e[18] = h, e[19] = O.length, e[20] = j, e[21] = $) : (j = e[20], $ = e[21]), zZh(j, $);
  let H;
  e[22] !== _ || e[23] !== i || e[24] !== r || e[25] !== s || e[26] !== n ? (H = (ce) => {
    if (!T4S(ce)) return;
    const ae = ce.closest("[data-icon-color-picker-option]");
    if (ae === null) return;
    const de = ae.dataset.iconColorPickerOption;
    if (de === C4r) {
      n !== void 0 && r !== void 0 && r(), s?.();
      return;
    }
    de === void 0 || !YSa(de) || (i({ icon: de, colorId: _ }), s?.());
  }, e[22] = _, e[23] = i, e[24] = r, e[25] = s, e[26] = n, e[27] = H) : H = e[27];
  const G = H;
  let q;
  e[28] !== G ? (q = (ce) => {
    G(ce.target);
  }, e[28] = G, e[29] = q) : q = e[29];
  const K = q;
  let V;
  e[30] !== G ? (V = (ce) => {
    ce.key !== "Enter" && ce.key !== " " || (ce.preventDefault(), G(ce.target));
  }, e[30] = G, e[31] = V) : V = e[31];
  const Y = V;
  let J;
  e[32] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (J = (ce) => c(ce.target.value), e[32] = J) : J = e[32];
  let Q;
  e[33] !== l ? (Q = iN("div", { className: "ui-1qhh985 ui-1sy0etr ui-uve7l6 ui-1yxiud8 ui-1rgtt3y ui-yab65l ui-umbfn", children: iN("input", { ref: f, className: "ui-9f619 ui-1lliihq ui-h8yej3 ui-euugli ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-jbqb8w ui-1wd3ewq ui-1acoasx ui-11wthnw ui-1sqdly8 ui-12oo3zp ui-1k57tk5 ui-1t137rt ui-1wfwxd8 ui-1uczgqu ui-493x5y ui-g31tg3 ui-b6dno7 ui-43mhey ui-ompknl", type: "text", "aria-label": "Search icons", placeholder: "Search icons...", value: l, onChange: J, onKeyDown: E4S }) }), e[33] = l, e[34] = Q) : Q = e[34];
  let te;
  e[35] !== _ || e[36] !== i || e[37] !== n ? (te = sQh.map((ce) => {
    const ae = ce.id === _;
    return iN(xs, { content: ce.label, children: zSa("button", { type: "button", ...gn(IZh.cell, QSa[ce.id], ae ? JSa[ce.id] : null), "aria-label": ce.label, "aria-pressed": ae, "data-selected": ae || void 0, onClick: () => {
      d(ce.id), n !== void 0 && i({ icon: n.icon, colorId: ce.id });
    }, children: [iN("span", { ...gn(vrt.swatch, oQh[ce.id]) }), ae ? iN("span", { className: "ui-47corl ui-10l6tqk ui-10a8y8t ui-78zum5 ui-6s0dn4 ui-l56j7k ui-70xvah", children: iN(zt, { name: "check", size: "xs" }) }) : null] }) }, ce.id);
  }), e[35] = _, e[36] = i, e[37] = n, e[38] = te) : te = e[38];
  let ee;
  e[39] !== te ? (ee = iN("fieldset", { className: "ui-rvj5dj ui-1is1m60 ui-6s0dn4 ui-5cdhqx ui-euugli ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-13ly8rp ui-1yxiud8 ui-1xlntvz ui-yab65l", "aria-label": "Icon color", children: iN($oe, { children: te }) }), e[39] = te, e[40] = ee) : ee = e[40];
  let re;
  e[41] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (re = iN("div", { className: "ui-jm9jq1 ui-2lah0s ui-8nignz ui-v5sl7z ui-1qmjd7y", "aria-hidden": true }), e[41] = re) : re = e[41];
  let ie;
  e[42] !== _ ? (ie = gn(vrt.iconScroll, ngi[_]), e[42] = _, e[43] = ie) : ie = e[43];
  let oe;
  e[44] !== O || e[45] !== K || e[46] !== Y || e[47] !== U || e[48] !== n?.icon ? (oe = O.length > 0 ? iN("div", { role: "listbox", "aria-label": "Icons", onClick: K, onKeyDown: Y, style: { height: U }, children: iN(xZh, { height: U, icons: O, listRef: p, selectedIcon: n?.icon }) }) : iN("div", { className: "ui-78zum5 ui-1lfmsv0 ui-6s0dn4 ui-l56j7k ui-4b2ntj", children: iN(nn, { size: "sm", color: "tertiary", children: "No icons found" }) }), e[44] = O, e[45] = K, e[46] = Y, e[47] = U, e[48] = n?.icon, e[49] = oe) : oe = e[49];
  let se;
  e[50] !== _ || e[51] !== ie || e[52] !== oe ? (se = iN("div", { "data-icon-color-picker-tint": _, ...ie, children: oe }), e[50] = _, e[51] = ie, e[52] = oe, e[53] = se) : se = e[53];
  let le;
  return e[54] !== Q || e[55] !== ee || e[56] !== se ? (le = zSa("div", { className: "ui-78zum5 ui-h8yej3 ui-dt5ytf ui-6ikm8r ui-10wlt62", children: [Q, ee, re, se] }), e[54] = Q, e[55] = ee, e[56] = se, e[57] = le) : le = e[57], le;
}
function E4S(t) {
  t.key !== "Escape" && t.key !== "Tab" && t.stopPropagation();
}
function O4r(t) {
  const e = Fkt(2);
  let n;
  return e[0] !== t ? (n = iN("div", { className: "ui-78zum5 ui-dt5ytf ui-6ikm8r ui-10wlt62 ui-165vjil", children: iN(ZZh, { ...t }) }), e[0] = t, e[1] = n) : n = e[1], n;
}
function QZh(t) {
  const e = Fkt(2);
  let n;
  return e[0] !== t ? (n = iN("div", { className: "ui-78zum5 ui-dt5ytf ui-6ikm8r ui-10wlt62 ui-165vjil", children: iN(ZZh, { ...t }) }), e[0] = t, e[1] = n) : n = e[1], n;
}
function I4S(t) {
  const e = Fkt(6), { value: n, triggerSize: i, triggerVariant: r, placeholder: s, "aria-label": o } = t, a = o === void 0 ? "Edit icon color" : o;
  let l;
  return e[0] !== a || e[1] !== s || e[2] !== i || e[3] !== r || e[4] !== n ? (l = iN(e1a, { value: n, triggerSize: i, triggerVariant: r, placeholder: s, "aria-label": a, disabled: true }), e[0] = a, e[1] = s, e[2] = i, e[3] = r, e[4] = n, e[5] = l) : l = e[5], l;
}
function x4S(t) {
  const e = Fkt(25), { value: n, onChange: i, onDone: r, icons: s, "aria-label": o, popoverLabel: a, finalFocus: l, placement: c, offset: u, triggerSize: d, triggerVariant: h, placeholder: p } = t, g = o === void 0 ? "Edit icon color" : o, f = a === void 0 ? "Icon color picker" : a, _ = c === void 0 ? "bottom-start" : c, b = u === void 0 ? 4 : u, y = d === void 0 ? "default" : d, S = h === void 0 ? "default" : h, k = p === void 0 ? false : p, [C, T] = VSa(false);
  let I;
  e[0] !== g || e[1] !== k || e[2] !== y || e[3] !== S || e[4] !== n ? (I = iN(yA.Trigger, { render: iN(e1a, { value: n, triggerSize: y, triggerVariant: S, placeholder: k, "aria-label": g }) }), e[0] = g, e[1] = k, e[2] = y, e[3] = S, e[4] = n, e[5] = I) : I = e[5];
  let A, P;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = [vrt.popover, lit.border], A = { [B4r]: true }, e[6] = A, e[7] = P) : (A = e[6], P = e[7]);
  let M;
  e[8] !== r ? (M = () => {
    r?.(), T(false);
  }, e[8] = r, e[9] = M) : M = e[9];
  let O;
  e[10] !== s || e[11] !== i || e[12] !== M || e[13] !== n ? (O = iN("div", { ...A, children: iN(O4r, { value: n, icons: s, onChange: i, onDone: M }) }), e[10] = s, e[11] = i, e[12] = M, e[13] = n, e[14] = O) : O = e[14];
  let N;
  e[15] !== l || e[16] !== b || e[17] !== _ || e[18] !== f || e[19] !== O ? (N = iN(yA.Popup, { "aria-label": f, finalFocus: l, offset: b, placement: _, surfaceStyle: P, children: O }), e[15] = l, e[16] = b, e[17] = _, e[18] = f, e[19] = O, e[20] = N) : N = e[20];
  let U;
  return e[21] !== C || e[22] !== N || e[23] !== I ? (U = zSa(yA.Root, { onOpenChange: T, open: C, children: [I, N] }), e[21] = C, e[22] = N, e[23] = I, e[24] = U) : U = e[24], U;
}
function F4r(t) {
  const e = Fkt(11);
  let n, i;
  if (e[0] !== t ? ({ disabled: i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]), i === void 0 ? false : i) {
    const o = n["aria-label"];
    let a;
    return e[3] !== n.placeholder || e[4] !== n.triggerSize || e[5] !== n.triggerVariant || e[6] !== n.value || e[7] !== o ? (a = iN(I4S, { value: n.value, triggerSize: n.triggerSize, triggerVariant: n.triggerVariant, placeholder: n.placeholder, "aria-label": o }), e[3] = n.placeholder, e[4] = n.triggerSize, e[5] = n.triggerVariant, e[6] = n.value, e[7] = o, e[8] = a) : a = e[8], a;
  }
  let s;
  return e[9] !== n ? (s = iN(x4S, { ...n }), e[9] = n, e[10] = s) : s = e[10], s;
}
var B4r, egi, JZh, eQh, tQh, nQh, iQh, rQh, sQh, tgi, ZSa, U4r, vrt, oQh, ngi, aQh, QSa, lQh, cQh, JSa, e1a, 