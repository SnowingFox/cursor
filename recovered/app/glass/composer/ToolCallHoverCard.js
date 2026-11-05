// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolCallHoverCard.js range:15462347..15465044
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, uae, YSt
// wrapper-init: Ekt
// hoisted-owner: HoverRow.js (app-out-vs-workbench-workbench-glass-main-js:2411); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Ekt = L({ "ToolCallHoverCard.js"() {
  "use strict";
  E(), Va(), uae(), YSt(), Imi = { cardContent: { kLKAdn: "ui-f6zju3", kwRFfy: "ui-1tlft3r", kGO01o: "ui-cnij5n", kZCmMZ: "ui-tw3t59", $$css: true }, list: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", $$css: true }, empty: { kGuDYH: "ui-hwpfco", kLWn49: "ui-1bcdmom", kMwMTN: "ui-4b2ntj", kLKAdn: "ui-f6zju3", kpe85a: "ui-g31tg3", kGO01o: "ui-cnij5n", kE3dHu: "ui-43mhey", $$css: true }, preview: { kGuDYH: "ui-1j6dyjg", kLWn49: "ui-37zpob", kMwMTN: "ui-4b2ntj", khDVqt: "ui-126k92a", kTgw9: "ui-13faqbe", kMv6JI: "ui-7l0hbv", kLKAdn: "ui-exx8yu", kpe85a: "ui-g31tg3", kGO01o: "ui-18d9i69", kE3dHu: "ui-43mhey", $$css: true } };
} });
import { jsx as _ya, jsxs as fNS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as vNS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function _NS(t) {
  return [v1n.root, t.clickable ? v1n.clickable : null];
}
function bNS() {
  return v1n.icon;
}
function yNS() {
  return v1n.primary;
}
function SNS() {
  return v1n.secondary;
}
function Wjt(t) {
  const e = vNS(21), { icon: n, primary: i, secondary: r, onClick: s, onContextMenu: o } = t, a = s ? "button" : "div";
  let l;
  e[0] !== s ? (l = ar({ rootClass: "ui-hover-row", stylexStyles: _NS({ clickable: s !== void 0 }), className: s ? "ui-hover-row--clickable" : void 0 }), e[0] = s, e[1] = l) : l = e[1];
  const c = l;
  let u;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = gn(bNS()), e[2] = u) : u = e[2];
  const d = u;
  let h;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = gn(yNS()), e[3] = h) : h = e[3];
  const p = h;
  let g;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = gn(SNS()), e[4] = g) : g = e[4];
  const f = g, _ = s ? "button" : void 0;
  let b;
  e[5] !== n ? (b = _ya(zt, { name: n, size: "base", color: "tertiary", className: d.className, style: d.style }), e[5] = n, e[6] = b) : b = e[6];
  let y;
  e[7] !== i ? (y = _ya("span", { className: p.className, style: p.style, children: i }), e[7] = i, e[8] = y) : y = e[8];
  let S;
  e[9] !== r ? (S = r && _ya("span", { className: f.className, style: f.style, children: r }), e[9] = r, e[10] = S) : S = e[10];
  let k;
  return e[11] !== a || e[12] !== s || e[13] !== o || e[14] !== c.className || e[15] !== c.style || e[16] !== _ || e[17] !== b || e[18] !== y || e[19] !== S ? (k = fNS(a, { type: _, className: c.className, style: c.style, onClick: s, onContextMenu: o, children: [b, y, S] }), e[11] = a, e[12] = s, e[13] = o, e[14] = c.className, e[15] = c.style, e[16] = _, e[17] = b, e[18] = y, e[19] = S, e[20] = k) : k = e[20], k;
}
var v1n, 