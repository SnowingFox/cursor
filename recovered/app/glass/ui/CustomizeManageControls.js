// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageControls.js range:22734822..22737225
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.590Z
var NHm = L({ "CustomizeManageControls.js"() {
  "use strict";
  E(), J7(), $ot();
} });
import { jsxs as PZa, jsx as VCt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as LHm } from "./react-runtime/react/esm-compiler-runtime-production.js";
function $es(t) {
  const e = LHm(21), { title: n, description: i, docsUrl: r, onNew: s, onOpenConfig: o, onBrowse: a, onOpenDocsUrl: l, primaryAction: c } = t, u = c != null, d = !u && s !== void 0, h = !u && !d && o !== void 0, p = !u && !d && !h && a !== void 0, g = l !== void 0;
  let f;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = Sc(Zh.empty), e[0] = f) : f = e[0];
  let _;
  e[1] !== n ? (_ = VCt(nn, { size: "md", weight: "medium", color: "primary", children: n }), e[1] = n, e[2] = _) : _ = e[2];
  let b;
  e[3] !== i ? (b = VCt(nn, { size: "sm", color: "secondary", children: i }), e[3] = i, e[4] = b) : b = e[4];
  let y;
  e[5] !== r || e[6] !== u || e[7] !== a || e[8] !== s || e[9] !== o || e[10] !== l || e[11] !== c || e[12] !== p || e[13] !== g || e[14] !== d || e[15] !== h ? (y = (u || d || h || p || g) && PZa("div", { ...Sc(Zh.emptyActions), children: [u && c, d && VCt(An, { variant: "secondary", size: "md", onClick: () => s(), leadingIcon: "add", children: "New" }), h && VCt(An, { variant: "secondary", size: "md", onClick: () => o(), leadingIcon: "file-arrow-right-up", children: "Open config" }), p && VCt(An, { variant: "secondary", size: "md", onClick: () => a(), children: "Browse Marketplace" }), g && VCt(An, { variant: "outline", size: "md", onClick: () => l(r), children: "Documentation" })] }), e[5] = r, e[6] = u, e[7] = a, e[8] = s, e[9] = o, e[10] = l, e[11] = c, e[12] = p, e[13] = g, e[14] = d, e[15] = h, e[16] = y) : y = e[16];
  let S;
  return e[17] !== _ || e[18] !== b || e[19] !== y ? (S = PZa("div", { ...f, children: [_, b, y] }), e[17] = _, e[18] = b, e[19] = y, e[20] = S) : S = e[20], S;
}
function nCi(t) {
  const e = LHm(4), { message: n } = t;
  let i, r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = Sc(Zh.empty), r = VCt(nn, { size: "md", weight: "medium", color: "primary", children: "No matches" }), e[0] = i, e[1] = r) : (i = e[0], r = e[1]);
  let s;
  return e[2] !== n ? (s = PZa("div", { ...i, children: [r, VCt(nn, { size: "sm", color: "secondary", children: n })] }), e[2] = n, e[3] = s) : s = e[3], s;
}
