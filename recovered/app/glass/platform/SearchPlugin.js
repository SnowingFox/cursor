// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SearchPlugin.js range:18149877..18153580
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.164Z
// wrapper: W$r deps:7 [E, Fy, gE, Doe, Aw, HQ, Sw1]
// declarations: eIp
// anchors: ui-rich-text, esm-jsx-runtime-production, esm-compiler-runtime-production, esm-index-production
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
W$r = L({ "SearchPlugin.js"() {
  "use strict";
  E(), Fy(), gE(), Doe(), Aw(), HQ(), ZEp = "ui-rich-text-editor__search-result ui-6chtzl", QEp = "ui-rich-text-editor__search-result ui-rich-text-editor__search-result--current ui-13eqifn", H$r = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, w6e = { query: "", total: 0, currentIndex: -1, current: 0 }, U0e = new j1("richTextSearch"), TPa = Rw.create({ name: "richTextSearch", addProseMirrorPlugins() {
    return [Sw1()];
  }, addCommands() {
    return { setRichTextSearchQuery: (t) => ({ tr: e, dispatch: n }) => {
      const i = $$r(e.doc, t, 0);
      return e.setMeta(U0e, { nextState: i }), KEp(e, i), n?.(e), true;
    }, selectNextRichTextSearchResult: () => ({ state: t, tr: e, dispatch: n }) => {
      const i = U0e.getState(t);
      if (!YEp(i)) return false;
      const r = (i.currentIndex + 1) % i.matches.length;
      return XEp(e, i, r, n);
    }, selectPreviousRichTextSearchResult: () => ({ state: t, tr: e, dispatch: n }) => {
      const i = U0e.getState(t);
      if (!YEp(i)) return false;
      const r = (i.currentIndex - 1 + i.matches.length) % i.matches.length;
      return XEp(e, i, r, n);
    }, clearRichTextSearchQuery: () => ({ tr: t, dispatch: e }) => {
      const n = $$r(t.doc, "", -1);
      return t.setMeta(U0e, { nextState: n }), e?.(t), true;
    } };
  } });
} });
import { jsx as Q_i, jsxs as JEp, Fragment as kw1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ww1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Cw1 } from "./react-runtime/react/esm-index-production.js";
function eIp(t) {
  const e = ww1(23), { children: n, title: i, showExpandButton: r, enableZoom: s, enablePan: o } = t, a = r === void 0 ? true : r, l = s === void 0 ? true : s, c = o === void 0 ? true : o, [u, d] = Cw1(false);
  let h;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = ar({ rootClass: "ui-expandable-node", stylexStyles: $pS() }), e[0] = h) : h = e[0];
  const p = h;
  let g;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = gn(HpS()), e[1] = g) : g = e[1];
  const f = g;
  let _;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = ar({ rootClass: "ui-expandable-node__modal", stylexStyles: hNh() }), e[2] = _) : _ = e[2];
  const b = _;
  let y;
  e[3] !== n ? (y = Q_i("div", { className: "ui-expandable-node__content", children: n }), e[3] = n, e[4] = y) : y = e[4];
  let S;
  e[5] !== a ? (S = a && Q_i("div", { className: f.className, contentEditable: false, style: f.style, children: Q_i(ho, { icon: "arrows-expand", size: "sm", "aria-label": "Expand to fullscreen", onClick: () => d(true) }) }), e[5] = a, e[6] = S) : S = e[6];
  let k;
  e[7] !== y || e[8] !== S ? (k = JEp("div", { className: p.className, style: p.style, "data-expandable-node": true, children: [y, S] }), e[7] = y, e[8] = S, e[9] = k) : k = e[9];
  const C = i ?? "Expanded view";
  let T;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = () => d(false), e[10] = T) : T = e[10];
  let I;
  e[11] !== n || e[12] !== c || e[13] !== l || e[14] !== u ? (I = Q_i(wLr, { isActive: u, enableZoom: l, enablePan: c, onClose: T, children: n }), e[11] = n, e[12] = c, e[13] = l, e[14] = u, e[15] = I) : I = e[15];
  let A;
  e[16] !== u || e[17] !== C || e[18] !== I ? (A = Q_i(Xr, { open: u, onOpenChange: d, "aria-label": C, className: b.className, style: b.style, children: I }), e[16] = u, e[17] = C, e[18] = I, e[19] = A) : A = e[19];
  let P;
  return e[20] !== A || e[21] !== k ? (P = JEp(kw1, { children: [k, A] }), e[20] = A, e[21] = k, e[22] = P) : P = e[22], P;
}
