// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayTitle.js range:16259076..16264488
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.126Z
Srp = L({ "TrayTitle.js"() {
  "use strict";
  E(), dy(), d$t = { root: { kHjlTd: "ui-j0a0fe", $$css: true }, cluster: { kGNEyG: "ui-1pha0wt", kwnvtZ: "ui-1a02dak", kOIVth: "ui-ehausa", $$css: true }, toneDefault: { k1xSpc: "ui-78zum5", kMwMTN: "ui-1hu9yo1", "--markdown-foreground": "ui-1rb9yty", $$css: true }, toneMuted: { k1xSpc: "ui-3nfvp2", "--markdown-foreground": "ui-ue2tf0", $$css: true }, railLineHeight: { kLWn49: "ui-1ejo4ks", $$css: true }, truncateClamp: { k1xSpc: "ui-104kibb", kgKLqz: "ui-1ua5tub", kJFfOR: "ui-h0615m", kdZRtv: "ui-1qxw02l", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kTgw9: "ui-13faqbe", $$css: true } };
} });
import { jsx as C2e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Qkt } from "./react-runtime/react/esm-compiler-runtime-production.js";
function krp(t) {
  const e = Qkt(30);
  let n, i, r, s;
  e[0] !== t ? ({ children: n, inlineActions: s, ref: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = s === void 0 ? false : s, { hasSlot: a, registerSlot: l } = arp();
  let c, u, d, h, p, g, f;
  if (e[5] !== a || e[6] !== o || e[7] !== i || e[8] !== r || e[9] !== l) {
    const S = a("leading"), k = a("close-button");
    c = kwa.Provider, f = l, d = "ui-9f619 ui-h8yej3 ui-2lah0s ui-150vl80 ui-12h1iku", h = i, p = r, g = "tray-banner", u = gn(xrt.layout, S && xrt.leadingRail, k && xrt.closeRail, a("description") && !o && xrt.stacked, !S && k && xrt.columnsCloseOnly, S && !k && xrt.columnsLeadingOnly, !S && !k && xrt.columnsContentOnly), e[5] = a, e[6] = o, e[7] = i, e[8] = r, e[9] = l, e[10] = c, e[11] = u, e[12] = d, e[13] = h, e[14] = p, e[15] = g, e[16] = f;
  } else c = e[10], u = e[11], d = e[12], h = e[13], p = e[14], g = e[15], f = e[16];
  let _;
  e[17] !== n || e[18] !== u ? (_ = C2e("div", { ...u, "data-component": "tray-banner-layout", children: n }), e[17] = n, e[18] = u, e[19] = _) : _ = e[19];
  let b;
  e[20] !== d || e[21] !== h || e[22] !== p || e[23] !== g || e[24] !== _ ? (b = C2e("div", { className: d, ...h, ref: p, "data-component": g, children: _ }), e[20] = d, e[21] = h, e[22] = p, e[23] = g, e[24] = _, e[25] = b) : b = e[25];
  let y;
  return e[26] !== c || e[27] !== f || e[28] !== b ? (y = C2e(c, { value: f, children: b }), e[26] = c, e[27] = f, e[28] = b, e[29] = y) : y = e[29], y;
}
function SHS(t) {
  const e = Qkt(2), { children: n } = t;
  Swa("Tray.BannerLeading", "leading");
  let i;
  return e[0] !== n ? (i = C2e("div", { className: "ui-1kxrqrs ui-78zum5 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-16bvwqk ui-1a6rlst", "data-component": "tray-banner-leading", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function kHS(t) {
  const e = Qkt(2), { children: n } = t;
  vfi("Tray.BannerContent");
  let i;
  return e[0] !== n ? (i = C2e("div", { className: "ui-1fdo2jl ui-78zum5 ui-dt5ytf ui-1iyjqo2 ui-s83m0k ui-dl72j9 ui-l56j7k ui-137clkk ui-euugli ui-4jlmx6", "data-component": "tray-banner-content", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function wHS(t) {
  const e = Qkt(6), { children: n, size: i, tone: r, truncate: s, title: o } = t, a = i === void 0 ? "default" : i, l = r === void 0 ? "default" : r, c = s === void 0 ? false : s;
  vfi("Tray.BannerTitle");
  const u = o ?? (c && typeof n == "string" ? n : void 0);
  let d;
  return e[0] !== u || e[1] !== n || e[2] !== a || e[3] !== l || e[4] !== c ? (d = C2e(yrp, { component: "tray-banner-title", size: a, title: u, tone: l, truncate: c, children: n }), e[0] = u, e[1] = n, e[2] = a, e[3] = l, e[4] = c, e[5] = d) : d = e[5], d;
}
function CHS(t) {
  const e = Qkt(8);
  let n, i, r;
  e[0] !== t ? ({ children: n, truncate: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = r === void 0 ? false : r;
  Swa("Tray.BannerDescription", "description");
  let o;
  return e[4] !== n || e[5] !== i || e[6] !== s ? (o = C2e(mrp, { ...i, component: "tray-banner-description", truncate: s, children: n }), e[4] = n, e[5] = i, e[6] = s, e[7] = o) : o = e[7], o;
}
function THS(t) {
  const e = Qkt(2), { children: n } = t;
  vfi("Tray.BannerActions");
  let i;
  return e[0] !== n ? (i = C2e(NC, { buttonPrimaryTone: "monochrome", buttonRounded: true, buttonSize: "md", children: C2e("div", { className: "ui-9f619 ui-1cfmmib ui-78zum5 ui-6s0dn4 ui-13a6bvl ui-1ll0niq ui-2lah0s ui-1a02dak ui-pkkfsy ui-euugli ui-s7ziog ui-1k74wzl ui-908tnf ui-kyxgop ui-amo9rc ui-1yeaevx ui-wd60oe ui-1hyl37r", "data-component": "tray-banner-actions", children: n }) }), e[0] = n, e[1] = i) : i = e[1], i;
}
function EHS(t) {
  const e = Qkt(2), { children: n } = t;
  vfi("Tray.BannerActionsStart");
  let i;
  return e[0] !== n ? (i = C2e("div", { className: "ui-78zum5 ui-6s0dn4 ui-euugli ui-11t971q", "data-component": "tray-banner-actions-start", children: C2e(NC, { buttonVariant: "ghost", children: n }) }), e[0] = n, e[1] = i) : i = e[1], i;
}
function IHS(t) {
  const e = Qkt(6);
  let n, i;
  e[0] !== t ? ({ "aria-label": i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  const r = i === void 0 ? "Dismiss" : i;
  Swa("Tray.BannerCloseButton", "close-button");
  let s;
  return e[3] !== r || e[4] !== n ? (s = C2e(vrp, { ...n, "aria-label": r, component: "tray-banner-close-button", icon: "x", rootStyle: xrt.close }), e[3] = r, e[4] = n, e[5] = s) : s = e[5], s;
}
var xrt, 