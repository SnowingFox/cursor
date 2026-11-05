// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CompactModelFlyoutRows.js range:16855362..16856145
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.077Z
// wrapper: RJS deps:9 [E, JY, Tkn, $Ca, $he, lcp, ocp, NTa, fd]
// declarations: FTa
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production, model-list-dismissible-dot
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
RJS = L({ "CompactModelFlyoutRows.js"() {
  "use strict";
  E(), JY(), Tkn(), $Ca(), $he(), lcp(), ocp(), NTa(), fd(), LTa = "MAX Mode", OTa = "Use Multiple Models";
} });
import { jsx as PJS, jsxs as MJS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as DJS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function FTa(t) {
  const e = DJS(3), { children: n } = t, { showNewModelsDot: i } = nw();
  if (!i) return n;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = PJS(xCa, { testId: "model-list-dismissible-dot" }), e[0] = r) : r = e[0];
  let s;
  return e[1] !== n ? (s = MJS("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-11twubx ui-euugli", children: [n, r] }), e[1] = n, e[2] = s) : s = e[2], s;
}
