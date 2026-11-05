// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputSubmitButton.js range:17432342..17436775
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, mf, zrt, B_p, fd, qu, H1t, hL
// wrapper-init: gxa
// hoisted-owner: PromptInputToolbar.js (app-out-vs-workbench-workbench-glass-main-js:2953); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

gxa = L({ "PromptInputSubmitButton.js"() {
  "use strict";
  E(), mf(), zrt(), B_p(), fd(), qu(), H1t(), hL(), M0e = { root: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kmuXW: "ui-2lah0s", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kEafiO: "ui-972fbf", kWqL5O: "ui-gfja2r", kt9PQ7: "ui-1qhh985", kZ1KPB: "ui-yj58a3", kPef9Z: "ui-1ejq31n", kSWEuD: "ui-11pwa6s", kfdmCh: "ui-1sy0etr", k4WBpm: "ui-1b16gh4", kIxVMA: "ui-c8ce4q", ksF3WI: "ui-j5toj7", kYm2EN: "ui-16ti9za", kqGeR4: "ui-11hym3f", kkrTdU: "ui-1ypdohk", kYPGJ8: "ui-1s07b3s", $$css: true }, arrow: { k1xSpc: "ui-1lliihq", kmuXW: "ui-2lah0s", $$css: true }, sizeMd: { kzqmXN: "ui-6anfts", kZKoxP: "ui-1m1144u", $$css: true }, sizeSm: { kzqmXN: "ui-1f0ij18", kZKoxP: "ui-rar8zy", $$css: true }, active: { kWkggS: "ui-mak4db ui-1b0w63", kMwMTN: "ui-1tc92z3", kSiTet: "ui-1hc1fzr ui-18uuni6", $$css: true }, activeYellow: { kWkggS: "ui-1h2qwge ui-9ykgqd", kMwMTN: "ui-1tc92z3", kSiTet: "ui-1hc1fzr", $$css: true }, activeRed: { kWkggS: "ui-eqke4s ui-qnhvqq", kMwMTN: "ui-1tc92z3", kSiTet: "ui-1hc1fzr", $$css: true }, activeGreen: { kWkggS: "ui-1h27yg5 ui-2i6cxe", kMwMTN: "ui-1tc92z3", kSiTet: "ui-1hc1fzr", $$css: true }, disabled: { kWkggS: "ui-flfp0o", kMwMTN: "ui-1e4uaio", kkrTdU: "ui-t0e3qv", $$css: true }, stop: { kWkggS: "ui-i07v4r ui-1kj6vsg", kMwMTN: "ui-1nqczng ui-5408cx", $$css: true }, compact: { kayTVb: "ui-o1ph6p", $$css: true }, compactExpanded: { kayTVb: "ui-gr9zt7", $$css: true } };
} });
import { jsx as fxa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as vxa } from "./react-runtime/react/esm-compiler-runtime-production.js";
function _xa({ variant: t, isExpanded: e }) {
  const n = t !== "expanded";
  return { root: [D0e.root, n && D0e.compact, n && e && D0e.compactExpanded], left: [D0e.slot, D0e.left, n && !e && D0e.leftCollapsedHidesUntagged, n && D0e.compactSlot, n && e && D0e.compactExpandedLeft], right: [D0e.slot, D0e.right, n && D0e.compactSlot, n && e && D0e.compactExpandedRight] };
}
function H_p(t) {
  const e = vxa(10), { children: n, className: i, onMouseDown: r } = t, { isDynamicIslandActive: s, isExpanded: o, variant: a } = TGe("PromptInput.Toolbar");
  if (a === "dynamic-island" && !s) return null;
  let l;
  if (e[0] !== i || e[1] !== o || e[2] !== a) {
    const d = _xa({ variant: a, isExpanded: o });
    l = ar({ rootClass: "ui-prompt-input-toolbar", stylexStyles: d.root, className: i }), e[0] = i, e[1] = o, e[2] = a, e[3] = l;
  } else l = e[3];
  const c = l;
  let u;
  return e[4] !== c.className || e[5] !== c.style || e[6] !== n || e[7] !== r || e[8] !== a ? (u = fxa("div", { className: c.className, style: c.style, role: "toolbar", "data-variant": a, onMouseDown: r, children: n }), e[4] = c.className, e[5] = c.style, e[6] = n, e[7] = r, e[8] = a, e[9] = u) : u = e[9], u;
}
function W_p(t) {
  const e = vxa(10), { children: n, className: i, rootStyle: r } = t, { isExpanded: s, stylexStyles: o, variant: a } = TGe("PromptInput.Toolbar.Left");
  let l;
  if (e[0] !== i || e[1] !== s || e[2] !== r || e[3] !== o?.toolbarLeft || e[4] !== a) {
    const d = _xa({ variant: a, isExpanded: s });
    l = ar({ rootClass: "ui-prompt-input-toolbar__left", stylexStyles: [d.left, o?.toolbarLeft, r], className: i }), e[0] = i, e[1] = s, e[2] = r, e[3] = o?.toolbarLeft, e[4] = a, e[5] = l;
  } else l = e[5];
  const c = l;
  let u;
  return e[6] !== c.className || e[7] !== c.style || e[8] !== n ? (u = fxa("div", { className: c.className, style: c.style, children: n }), e[6] = c.className, e[7] = c.style, e[8] = n, e[9] = u) : u = e[9], u;
}
function G_p(t) {
  const e = vxa(10), { children: n, className: i, rootStyle: r } = t, { isExpanded: s, stylexStyles: o, variant: a } = TGe("PromptInput.Toolbar.Right");
  let l;
  if (e[0] !== i || e[1] !== s || e[2] !== r || e[3] !== o?.toolbarRight || e[4] !== a) {
    const d = _xa({ variant: a, isExpanded: s });
    l = ar({ rootClass: "ui-prompt-input-toolbar__right", stylexStyles: [d.right, o?.toolbarRight, r], className: i }), e[0] = i, e[1] = s, e[2] = r, e[3] = o?.toolbarRight, e[4] = a, e[5] = l;
  } else l = e[5];
  const c = l;
  let u;
  return e[6] !== c.className || e[7] !== c.style || e[8] !== n ? (u = fxa("div", { className: c.className, style: c.style, children: n }), e[6] = c.className, e[7] = c.style, e[8] = n, e[9] = u) : u = e[9], u;
}
var D0e, 