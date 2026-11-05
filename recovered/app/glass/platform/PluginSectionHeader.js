// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginSectionHeader.js range:17154516..17155544
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.158Z
// wrapper: PluginSectionHeaderModule deps:1 [E]
// declarations: PluginSectionHeaderModule, tUr
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production, ui-plugin-detail
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var PluginSectionHeaderModule = L({
  "PluginSectionHeader.js"() {
    "use strict";

    E();
  }
});
import { jsx as Kmp, Fragment as sr1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as or1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function tUr(t) {
  const e = or1(12),
    {
      labels: n,
      surface: i
    } = t,
    r = i === void 0 ? "item" : i;
  if (n.length === 0) return null;
  let s, o;
  e[0] !== r ? (s = gn(r === "detail" ? nmp : AEa), o = ri(r === "detail" ? "ui-plugin-detail-view__imported-tag" : "ui-plugin-item__imported-tag", s.className), e[0] = r, e[1] = s, e[2] = o) : (s = e[1], o = e[2]);
  const a = o;
  let l;
  if (e[3] !== s || e[4] !== a || e[5] !== n) {
    let u;
    e[7] !== s || e[8] !== a ? (u = d => Kmp("span", {
      className: a,
      style: s.style,
      children: d
    }, d), e[7] = s, e[8] = a, e[9] = u) : u = e[9], l = n.map(u), e[3] = s, e[4] = a, e[5] = n, e[6] = l;
  } else l = e[6];
  let c;
  return e[10] !== l ? (c = Kmp(sr1, {
    children: l
  }), e[10] = l, e[11] = c) : c = e[11], c;
}
