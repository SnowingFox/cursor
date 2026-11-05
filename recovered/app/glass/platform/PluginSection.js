// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginSection.js range:17154021..17154516
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.158Z
// wrapper: PluginSectionModule deps:2 [E, mf]
// declarations: PluginSectionModule, ir1
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var PluginSectionModule = L({
  "PluginSection.js"() {
    "use strict";

    E(), mf();
  }
});
import { jsx as tr1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as nr1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ir1(t) {
  const e = nr1(2),
    {
      title: n
    } = t;
  let i;
  return e[0] !== n ? (i = tr1("div", {
    className: "ui-1iorvi4 ui-y13l1i ui-18d9i69 ui-163pfp ui-y5h43f ui-19ji09o ui-19aaqeu ui-20ajya",
    children: n
  }), e[0] = n, e[1] = i) : i = e[1], i;
}
