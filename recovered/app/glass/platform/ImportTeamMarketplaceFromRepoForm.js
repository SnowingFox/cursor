// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ImportTeamMarketplaceFromRepoForm.js range:16982968..16984850
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.091Z
// wrapper: ImportTeamMarketplaceFromRepoFormModule deps:7 [E, lEa, I7r, xt1, QQ, twt, P0]
// declarations: ImportTeamMarketplaceFromRepoFormModule, Whp
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production, esm-index-production
// group: team-marketplace
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var ImportTeamMarketplaceFromRepoFormModule = L({
  "ImportTeamMarketplaceFromRepoForm.js"() {
    "use strict";

    E(), lEa(), I7r(), xt1(), QQ(), twt(), P0();
  }
});
import { jsxs as Pt1, Fragment as Mt1, jsx as cvi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Dt1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Nt1 } from "./react-runtime/react/esm-index-production.js";
function Whp(t) {
  const e = Dt1(22),
    {
      open: n,
      onOpenChange: i,
      mode: r,
      teamName: s,
      directoryGroups: o,
      organizationGroups: a,
      enableAccessGrants: l,
      onSubmit: c
    } = t;
  let u;
  e[0] !== o ? (u = o === void 0 ? [] : o, e[0] = o, e[1] = u) : u = e[1];
  const d = u;
  let h;
  e[2] !== a ? (h = a === void 0 ? [] : a, e[2] = a, e[3] = h) : h = e[3];
  const p = h,
    g = l === void 0 ? false : l,
    [f, _] = Nt1(null),
    b = r === "manual" ? "Add Marketplace" : "Import Marketplace";
  let y;
  e[4] !== d || e[5] !== g || e[6] !== r || e[7] !== i || e[8] !== c || e[9] !== n || e[10] !== p || e[11] !== s || e[12] !== b ? (y = n ? Pt1(Mt1, {
    children: [cvi(Xr.Header, {
      title: b
    }), r === "manual" ? cvi(Uhp, {
      teamName: s,
      directoryGroups: d,
      organizationGroups: p,
      enableAccessGrants: g,
      onCancel: () => i(false),
      onSubmit: c
    }) : cvi(At1, {
      teamName: s,
      directoryGroups: d,
      organizationGroups: p,
      enableAccessGrants: g,
      onCancel: () => i(false),
      onSubmit: c
    })]
  }) : null, e[4] = d, e[5] = g, e[6] = r, e[7] = i, e[8] = c, e[9] = n, e[10] = p, e[11] = s, e[12] = b, e[13] = y) : y = e[13];
  let S;
  e[14] !== f || e[15] !== y ? (S = cvi(Kj, {
    root: f,
    children: y
  }), e[14] = f, e[15] = y, e[16] = S) : S = e[16];
  let k;
  return e[17] !== i || e[18] !== n || e[19] !== S || e[20] !== b ? (k = cvi(Xr, {
    open: n,
    onOpenChange: i,
    "aria-label": b,
    ref: _,
    className: "ui-1xwk8fm",
    children: S
  }), e[17] = i, e[18] = n, e[19] = S, e[20] = b, e[21] = k) : k = e[21], k;
}
