// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeaderLeading.js range:15072995..15074489
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, vkt
// wrapper-init: hAS
// hoisted-owner: TranscriptCardHeaderTitle.js (app-out-vs-workbench-workbench-glass-main-js:2316); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var hAS = L({ "TranscriptCardHeaderLeading.js"() {
  "use strict";
  E(), vkt();
} });
import { jsx as bHh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as pAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function mAS(t) {
  const e = pAS(16), { children: n, tone: i, truncate: r, title: s } = t, o = i === void 0 ? "secondary" : i, a = r === void 0 ? true : r;
  _jt("TranscriptCard.HeaderTitle");
  const l = t.shimmer === true, c = s ?? (a && typeof n == "string" ? n : void 0), u = o === "primary" ? "primary" : "secondary", d = l || void 0, h = a || void 0, p = a ? _Fr.truncateClamp : null;
  let g;
  e[0] !== p ? (g = [_Fr.root, _Fr.railLineHeight, p], e[0] = p, e[1] = g) : g = e[1];
  const f = o === "primary" ? "medium" : "regular";
  let _;
  e[2] !== n || e[3] !== t.children || e[4] !== t.shimmer || e[5] !== o ? (_ = t.shimmer === true ? bHh(VWe, { color: o, children: t.children }) : n, e[2] = n, e[3] = t.children, e[4] = t.shimmer, e[5] = o, e[6] = _) : _ = e[6];
  let b;
  return e[7] !== c || e[8] !== u || e[9] !== d || e[10] !== h || e[11] !== g || e[12] !== f || e[13] !== _ || e[14] !== o ? (b = bHh(nn, { as: "span", color: u, "data-component": "transcript-card-header-title", "data-shimmer": d, "data-tone": o, "data-truncate": h, rootStyle: g, size: "md", title: c, weight: f, children: _ }), e[7] = c, e[8] = u, e[9] = d, e[10] = h, e[11] = g, e[12] = f, e[13] = _, e[14] = o, e[15] = b) : b = e[15], b;
}
var _Fr, 