// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: RepoThumbnail.js range:17184495..17185095
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.953Z
var Yr1 = L({ "RepoThumbnail.js"() {
  "use strict";
  E(), fd();
} });
import { jsx as fgp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Xr1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function vgp(t) {
  const e = Xr1(6), { inset: n, markdown: i, surface: r } = t;
  let s;
  e[0] !== i ? (s = fgp(dT, { size: "sm", gfm: true, children: i }), e[0] = i, e[1] = s) : s = e[1];
  let o;
  return e[2] !== n || e[3] !== r || e[4] !== s ? (o = fgp(wvi, { inset: n, surface: r, children: s }), e[2] = n, e[3] = r, e[4] = s, e[5] = o) : o = e[5], o;
}
