// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BrowserScriptToolCallView.js range:15508858..15517365
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, uae, bya, QQ, f2
// wrapper-init: yLS
// hoisted-owner: ComputerUseToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2428); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

yLS = L({ "BrowserScriptToolCallView.js"() {
  "use strict";
  E(), Va(), uae(), bya(), QQ(), f2(), F6r = { actions: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kOIVth: "ui-1oot3zn", $$css: true }, action: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kOIVth: "ui-11twubx", $$css: true }, actionLabel: { kMwMTN: "ui-19aaqeu", kGuDYH: "ui-hwpfco", kLWn49: "ui-1bcdmom", k63SB2: "ui-1yl5bsf", $$css: true } };
} });
import { jsx as nJ, jsxs as H_e, Fragment as SLS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as B6r } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Rmi } from "./react-runtime/react/esm-index-production.js";
function WKh(t) {
  const e = B6r(11), { cursorPosition: n, renderedWidth: i, naturalWidth: r, renderedHeight: s, naturalHeight: o } = t, a = n.x / r * 100, l = n.y / o * 100, c = i / r, u = s / o, d = (c + u) / 2, h = Math.max(24, 32 * d);
  let p;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = { className: "ui-10l6tqk ui-47corl ui-ewr88n" }, e[0] = p) : p = e[0];
  const g = p;
  let f;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = { className: "ui-10l6tqk ui-u96u03 ui-13vifvy ui-16rqkct ui-dh2fpr ui-1y0btm7 ui-1rwoj0y ui-11lhmoz ui-1isz15 ui-1m9vv7p ui-a3vuyk ui-a4qsjk" }, e[1] = f) : f = e[1];
  const _ = f, b = `${a}%`, y = `${l}%`;
  let S;
  e[2] !== b || e[3] !== y ? (S = { ...g.style, left: b, top: y }, e[2] = b, e[3] = y, e[4] = S) : S = e[4];
  let k;
  e[5] !== n.type || e[6] !== h ? (k = n.type === "click" && nJ("div", { className: _.className, style: { ..._.style, width: h, height: h } }), e[5] = n.type, e[6] = h, e[7] = k) : k = e[7];
  let C;
  return e[8] !== S || e[9] !== k ? (C = H_e("div", { className: g.className, style: S, children: [qKh, k] }), e[8] = S, e[9] = k, e[10] = C) : C = e[10], C;
}
function kLS(t) {
  const e = B6r(11), { screenshotDataUri: n, cursorPosition: i } = t, [r, s] = Rmi(null), [o, a] = Rmi(null);
  let l;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = (f) => {
    if (!f) return;
    const _ = new ResizeObserver((b) => {
      for (const y of b) {
        const { width: S, height: k } = y.contentRect;
        a({ w: S, h: k });
      }
    });
    return _.observe(f), () => _.disconnect();
  }, e[0] = l) : l = e[0];
  const c = l;
  let u;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = (f) => {
    const _ = f.currentTarget;
    s({ w: _.naturalWidth, h: _.naturalHeight }), a({ w: _.clientWidth, h: _.clientHeight });
  }, e[1] = u) : u = e[1];
  const d = u;
  let h;
  e[2] !== n ? (h = nJ("img", { ref: c, src: n, alt: "Computer use screenshot", className: "ui-h8yej3 ui-5yr21d ui-l1xv1r ui-1lliihq ui-1e1y6u3", onLoad: d }), e[2] = n, e[3] = h) : h = e[3];
  let p;
  e[4] !== i || e[5] !== r || e[6] !== o ? (p = i && r && o && nJ(WKh, { cursorPosition: i, renderedWidth: o.w, naturalWidth: r.w, renderedHeight: o.h, naturalHeight: r.h }), e[4] = i, e[5] = r, e[6] = o, e[7] = p) : p = e[7];
  let g;
  return e[8] !== h || e[9] !== p ? (g = H_e("div", { "data-computer-use-screenshot": "", className: "ui-1n2onr6 ui-2lah0s ui-1lliihq ui-upz64d ui-1mm9u0k ui-pgsqhg ui-h2ylfo ui-11fneen ui-1mds6oj ui-1e1y6u3 ui-b3r6kr ui-i07v4r", children: [h, p] }), e[8] = h, e[9] = p, e[10] = g) : g = e[10], g;
}
function wLS(t) {
  const e = B6r(19), { screenshotDataUri: n, cursorPosition: i, isOpen: r, onOpenChange: s, children: o } = t, [a, l] = Rmi(null), [c, u] = Rmi(null);
  let d;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = (C) => {
    if (!C) return;
    const T = new ResizeObserver((I) => {
      for (const A of I) {
        const { width: P, height: M } = A.contentRect;
        u({ w: P, h: M });
      }
    });
    return T.observe(C), () => T.disconnect();
  }, e[0] = d) : d = e[0];
  const h = d;
  let p;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = (C) => {
    const T = C.currentTarget;
    l({ w: T.naturalWidth, h: T.naturalHeight }), u({ w: T.clientWidth, h: T.clientHeight });
  }, e[1] = p) : p = e[1];
  const g = p;
  let f;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = H_e(Xr.Header, { children: [nJ(Xr.Title, { children: "Screenshot" }), nJ(Xr.Close, {})] }), e[2] = f) : f = e[2];
  let _;
  e[3] !== n ? (_ = nJ("img", { ref: h, src: n, alt: "Computer use screenshot (full)", className: "ui-193iq5w ui-t7dq6l ui-1lliihq", onLoad: g }), e[3] = n, e[4] = _) : _ = e[4];
  let b;
  e[5] !== i || e[6] !== a || e[7] !== c ? (b = i && a && c && nJ(WKh, { cursorPosition: i, renderedWidth: c.w, naturalWidth: a.w, renderedHeight: c.h, naturalHeight: a.h }), e[5] = i, e[6] = a, e[7] = c, e[8] = b) : b = e[8];
  let y;
  e[9] !== _ || e[10] !== b ? (y = H_e("div", { className: "ui-1n2onr6 ui-1rg5ohu", children: [_, b] }), e[9] = _, e[10] = b, e[11] = y) : y = e[11];
  let S;
  e[12] !== o || e[13] !== y ? (S = nJ(Xr.Content, { children: H_e("div", { className: "ui-78zum5 ui-dt5ytf ui-167g77z ui-t970qd ui-13e3tqs", children: [o, y] }) }), e[12] = o, e[13] = y, e[14] = S) : S = e[14];
  let k;
  return e[15] !== r || e[16] !== s || e[17] !== S ? (k = H_e(Xr, { open: r, onOpenChange: s, size: "xl", children: [f, S] }), e[15] = r, e[16] = s, e[17] = S, e[18] = k) : k = e[18], k;
}
function GKh(t) {
  const e = B6r(37), { action: n, details: i, loading: r, screenshotDataUri: s, error: o, actions: a, durationMs: l, cursorPosition: c } = t, [u, d] = Rmi(false), h = s != null && s !== "", p = o ?? i, g = h && r !== true, f = h ? "row" : "stack";
  let _;
  e[0] !== g ? (_ = g ? () => d(true) : void 0, e[0] = g, e[1] = _) : _ = e[1];
  const b = g ? n : void 0;
  let y;
  e[2] !== c || e[3] !== h || e[4] !== s ? (y = h ? nJ(uh.Media, { rootStyle: U6r.mediaPad, children: nJ(kLS, { screenshotDataUri: s, cursorPosition: c }) }) : null, e[2] = c, e[3] = h, e[4] = s, e[5] = y) : y = e[5];
  const S = h ? U6r.headerInRow : void 0, k = r === true;
  let C;
  e[6] !== n || e[7] !== k ? (C = nJ(uh.HeaderTitle, { shimmer: k, tone: "primary", truncate: true, children: n }), e[6] = n, e[7] = k, e[8] = C) : C = e[8];
  let T;
  e[9] !== p ? (T = p ? nJ(uh.HeaderDescription, { children: p }) : null, e[9] = p, e[10] = T) : T = e[10];
  let I;
  e[11] !== C || e[12] !== T ? (I = H_e(uh.HeaderContent, { children: [C, T] }), e[11] = C, e[12] = T, e[13] = I) : I = e[13];
  let A;
  e[14] !== g ? (A = g ? nJ(uh.HeaderTrailing, { children: nJ("span", { className: "ui-9f619 ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-1th6cxs ui-exx8yu ui-1jkygx ui-18d9i69 ui-1o7kk3e ui-jb2p0i ui-11wthnw ui-k50ysn ui-o5v014 ui-1wd3ewq ui-i07v4r ui-1kj6vsg ui-972fbf ui-1ejq31n ui-gfja2r ui-11pwa6s ui-1qhh985 ui-1sy0etr ui-yj58a3 ui-1b16gh4 ui-1i4c3av ui-1ypdohk ui-s2xxs2 ui-g3p6pi ui-1bt1wk1", "aria-hidden": "true", children: "Open" }) }) : null, e[14] = g, e[15] = A) : A = e[15];
  let P;
  e[16] !== A || e[17] !== S || e[18] !== I ? (P = H_e(uh.Header, { variant: "flat", rootStyle: S, children: [I, A] }), e[16] = A, e[17] = S, e[18] = I, e[19] = P) : P = e[19];
  let M;
  e[20] !== f || e[21] !== P || e[22] !== _ || e[23] !== b || e[24] !== y ? (M = H_e(uh.Root, { dataTestId: "computer-use-card", layout: f, outdent: false, rootStyle: U6r.cardLayout, onClick: _, ariaLabel: b, children: [y, P] }), e[20] = f, e[21] = P, e[22] = _, e[23] = b, e[24] = y, e[25] = M) : M = e[25];
  let O;
  e[26] !== a || e[27] !== c || e[28] !== l || e[29] !== o || e[30] !== h || e[31] !== u || e[32] !== s ? (O = h ? H_e(wLS, { screenshotDataUri: s, cursorPosition: c, isOpen: u, onOpenChange: d, children: [o ? nJ("div", { className: "ui-hwpfco ui-1bcdmom ui-1jh5svw ui-126k92a ui-13faqbe", children: o }) : null, a !== void 0 && a.length > 1 ? nJ("div", { className: "ui-78zum5 ui-dt5ytf ui-195vfkc", children: a.map(CLS) }) : null, l !== void 0 ? H_e("div", { className: "ui-1j6dyjg ui-4b2ntj", children: ["Completed in ", l, "ms"] }) : null] }) : null, e[26] = a, e[27] = c, e[28] = l, e[29] = o, e[30] = h, e[31] = u, e[32] = s, e[33] = O) : O = e[33];
  let N;
  return e[34] !== M || e[35] !== O ? (N = H_e(SLS, { children: [M, O] }), e[34] = M, e[35] = O, e[36] = N) : N = e[36], N;
}
function CLS(t, e) {
  const n = `${t.description}-${e}`;
  return H_e("div", { className: "ui-hwpfco ui-1bcdmom ui-19aaqeu", children: [H_e("span", { className: "ui-4b2ntj", children: [e + 1, "."] }), " ", t.description] }, n);
}
var U6r, qKh, 