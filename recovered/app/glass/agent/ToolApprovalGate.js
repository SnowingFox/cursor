// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolApprovalGate.js range:15438145..15440135
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.275Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, useElementWidth.js, Button.js, ToolApprovalReasonStack.js, TranscriptCard.js, useToolApproval.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, useElementWidth.js, Button.js, ToolApprovalReasonStack.js, TranscriptCard.js, useToolApproval.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
aya = L({ "ToolApprovalGate.js"() {
  "use strict";
  E(), YFr(), P0(), gmi(), u0e(), yba(), YVh = 240;
} });
import { jsx as Ujt, jsxs as y6r, Fragment as R3S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as P3S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as M3S } from "./react-runtime/react/esm-index-production.js";
function XVh() {
  return QVh.body;
}
function ZVh(t) {
  const e = P3S(21), { action: n, details: i, loading: r, title: s, children: o } = t, [a, l] = M3S(false);
  let c;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = () => l(false), e[0] = c) : c = e[0];
  const u = c, d = o != null && !r;
  let h;
  e[1] !== o ? (h = typeof o == "function" ? o(u) : o, e[1] = o, e[2] = h) : h = e[2];
  const p = h;
  let g;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = gn(XVh()), e[3] = g) : g = e[3];
  const f = g;
  let _;
  e[4] !== d ? (_ = d ? () => l(true) : void 0, e[4] = d, e[5] = _) : _ = e[5];
  let b;
  e[6] !== n || e[7] !== i || e[8] !== r || e[9] !== _ ? (b = Ujt(LC, { action: n, details: i, loading: r, onClick: _ }), e[6] = n, e[7] = i, e[8] = r, e[9] = _, e[10] = b) : b = e[10];
  let y;
  e[11] !== n || e[12] !== i || e[13] !== d || e[14] !== a || e[15] !== p || e[16] !== s ? (y = d && y6r(Xr, { open: a, onOpenChange: l, size: "xl", children: [y6r(Xr.Header, { children: [y6r("div", { children: [Ujt(Xr.Title, { children: s ?? n }), i && Ujt(Xr.Description, { children: i })] }), Ujt(Xr.Close, {})] }), Ujt(Xr.Content, { children: Ujt(xg, { maxHeight: 600, bottomFadeSize: 40, bottomFadeStartOpacity: 0.15, children: Ujt("div", { className: f.className, style: f.style, children: p }) }) })] }), e[11] = n, e[12] = i, e[13] = d, e[14] = a, e[15] = p, e[16] = s, e[17] = y) : y = e[17];
  let S;
  return e[18] !== b || e[19] !== y ? (S = y6r(R3S, { children: [b, y] }), e[18] = b, e[19] = y, e[20] = S) : S = e[20], S;
}
var QVh, 