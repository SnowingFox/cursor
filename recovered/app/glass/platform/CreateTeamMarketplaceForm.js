// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CreateTeamMarketplaceForm.js range:16977704..16978519
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.080Z
// wrapper: lEa deps:6 [E, I7r, QQ, twt, Nhe, P0]
// declarations: It1, $hp (segment truncated)
// anchors: (none)
// group: team-marketplace
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
lEa = L({ "CreateTeamMarketplaceForm.js"() {
  "use strict";
  E(), I7r(), QQ(), twt(), Nhe(), P0(), jhp = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
} });
import { jsx as Tt1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Et1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function It1(t) {
  const e = Et1(7), { scope: n, onScopeChange: i, disabled: r, id: s } = t;
  let o;
  e[0] !== i ? (o = (l) => {
    l !== null && i(l);
  }, e[0] = i, e[1] = o) : o = e[1];
  let a;
  return e[2] !== r || e[3] !== s || e[4] !== n || e[5] !== o ? (a = Tt1(b1, { id: s, value: n, onValueChange: o, options: $hp, variant: "outline", size: "lg", hug: true, disabled: r, "aria-label": "Marketplace scope" }), e[2] = r, e[3] = s, e[4] = n, e[5] = o, e[6] = a) : a = e[6], a;
}
var $hp,
