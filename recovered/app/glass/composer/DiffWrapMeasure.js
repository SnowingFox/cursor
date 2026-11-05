// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DiffWrapMeasure.js range:14327846..14333407
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, joe, mf, e5h, JLr
// wrapper-init: b5h
// hoisted-owner: default-diff-presentation.js (app-out-vs-workbench-workbench-glass-main-js:2033); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

b5h = L({ "DiffWrapMeasure.js"() {
  "use strict";
  E(), Va(), joe(), mf(), e5h(), JLr(), zha = 64, Vha = 32, g5h = "x".repeat(zha), f5h = "一".repeat(Vha), v5h = 8, _5h = __S(function(e) {
    const n = p5h(46), { viewMode: i, showLineNumbers: r, showPlusMinus: s, showAccentStrip: o, interactionEnabled: a, onMetrics: l } = e, c = m5h(null), u = m5h(null), d = ro(l);
    let h;
    n[0] !== d ? (h = (V) => {
      if (!V) return;
      const Y = (Q) => {
        const te = c.current?.getBoundingClientRect().width, ee = u.current?.getBoundingClientRect().width;
        if (!te || Q <= 0) return;
        const re = te / zha, ie = ee ? ee / Vha : re * 2;
        d.current({ contentWidthPx: Q, charWidthPx: re, columnsForFullWidthChar: ie / re });
      }, J = new ResizeObserver((Q) => {
        const te = Q[0]?.contentRect.width;
        te !== void 0 && Y(te);
      });
      return J.observe(V), () => J.disconnect();
    }, n[0] = d, n[1] = h) : h = n[1];
    const p = h;
    let g;
    if (n[2] !== o || n[3] !== r || n[4] !== s || n[5] !== i) {
      const V = gn(ZLr({ dataType: void 0 })), Y = (te) => MFe("span", { className: ri("ui-default-diff__line-number", V.className), style: V.style }, te), J = gn(XLr({ type: void 0, rangeSelected: false, withIndicatorStrip: o })), Q = gn(c5h({ type: "unchanged" }));
      g = r !== false ? eOr("div", { className: ri("ui-default-diff__gutter", J.className), style: J.style, children: [r === "partial" || i === "split" ? Y("partial") : [Y("orig"), Y("mod")], s && i === "unified" && MFe("span", { className: ri("ui-default-diff__line-indicator", Q.className), style: Q.style, children: " " })] }) : null, n[2] = o, n[3] = r, n[4] = s, n[5] = i, n[6] = g;
    } else g = n[6];
    const f = g;
    let _;
    n[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = gn(YLr({ type: "unchanged", rangeSelected: false })), n[7] = _) : _ = n[7];
    const b = _;
    let y;
    n[8] !== o ? (y = o ? MFe("div", { className: b.className, style: b.style }) : null, n[8] = o, n[9] = y) : y = n[9];
    const S = y;
    let k, C;
    n[10] !== a ? (k = gn(Lhi(), a && KLr()), C = ri("ui-default-diff__line-content", a && "ui-default-diff__line-content--interaction", k.className), n[10] = a, n[11] = k, n[12] = C) : (k = n[11], C = n[12]);
    let T, I;
    n[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = MFe("span", { ref: c, children: g5h }), I = MFe("span", { ref: u, children: f5h }), n[13] = T, n[14] = I) : (T = n[13], I = n[14]);
    let A;
    n[15] !== p || n[16] !== k.style || n[17] !== C ? (A = eOr("div", { className: C, ref: p, style: k.style, children: [T, I] }), n[15] = p, n[16] = k.style, n[17] = C, n[18] = A) : A = n[18];
    const P = A;
    let M;
    n[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (M = gn(u_S()), n[19] = M) : M = n[19];
    const O = M;
    if (i === "split") {
      let V;
      n[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (V = gn(Gha({ type: "unchanged", rangeSelected: false })), n[20] = V) : V = n[20];
      const Y = V;
      let J;
      n[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (J = gn(o5h()), n[21] = J) : J = n[21];
      const Q = J;
      let te;
      n[22] !== Q.className || n[23] !== Q.style || n[24] !== P ? (te = MFe("div", { className: Q.className, style: Q.style, children: P }), n[22] = Q.className, n[23] = Q.style, n[24] = P, n[25] = te) : te = n[25];
      let ee;
      return n[26] !== S || n[27] !== Y.className || n[28] !== Y.style || n[29] !== f || n[30] !== te ? (ee = MFe("div", { "aria-hidden": true, className: O.className, style: O.style, children: eOr("div", { className: Y.className, style: Y.style, children: [S, f, te] }) }), n[26] = S, n[27] = Y.className, n[28] = Y.style, n[29] = f, n[30] = te, n[31] = ee) : ee = n[31], ee;
    }
    let N;
    n[32] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = gn(l5h({ type: "unchanged", rangeSelected: false })), n[32] = N) : N = n[32];
    const U = N;
    let j;
    n[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = gn(s5h()), n[33] = j) : j = n[33];
    const $ = j;
    let H;
    n[34] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (H = gn(r5h()), n[34] = H) : H = n[34];
    const G = H;
    let q;
    n[35] !== P || n[36] !== a || n[37] !== G || n[38] !== $ ? (q = a ? MFe("div", { className: $.className, style: $.style, children: MFe("div", { className: G.className, style: G.style, children: P }) }) : P, n[35] = P, n[36] = a, n[37] = G, n[38] = $, n[39] = q) : q = n[39];
    let K;
    return n[40] !== S || n[41] !== f || n[42] !== U.className || n[43] !== U.style || n[44] !== q ? (K = MFe("div", { "aria-hidden": true, className: O.className, style: O.style, children: eOr("div", { className: U.className, style: U.style, children: [S, f, q] }) }), n[40] = S, n[41] = f, n[42] = U.className, n[43] = U.style, n[44] = q, n[45] = K) : K = n[45], K;
  });
} });
import { jsx as S_S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as k_S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as w_S, useContext as C_S } from "./react-runtime/react/esm-index-production.js";
function T_S(t) {
  const e = k_S(3), { children: n, presentation: i } = t;
  let r;
  return e[0] !== n || e[1] !== i ? (r = S_S(Kha.Provider, { value: i, children: n }), e[0] = n, e[1] = i, e[2] = r) : r = e[2], r;
}
function E_S() {
  return C_S(Kha);
}
var Kha, 