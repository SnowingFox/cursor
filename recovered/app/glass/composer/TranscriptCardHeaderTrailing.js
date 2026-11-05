// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeaderTrailing.js range:15075579..15076379
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, vkt
// wrapper-init: bAS
// hoisted-owner: TranscriptCardMedia.js (app-out-vs-workbench-workbench-glass-main-js:2318); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var bAS = L({ "TranscriptCardHeaderTrailing.js"() {
  "use strict";
  E(), vkt();
} });
import { jsx as yAS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as SAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function kAS(t) {
  const e = SAS(7), { children: n, rootStyle: i } = t, { layout: r } = vjt("TranscriptCard.Media");
  let s;
  e[0] !== r || e[1] !== i ? (s = gn(Mva.media, r === "row" ? Mva.mediaRow : null, i), e[0] = r, e[1] = i, e[2] = s) : s = e[2];
  const o = s;
  let a;
  return e[3] !== o.className || e[4] !== o.style || e[5] !== n ? (a = yAS("div", { className: o.className, "data-component": "transcript-card-media", style: o.style, children: n }), e[3] = o.className, e[4] = o.style, e[5] = n, e[6] = a) : a = e[6], a;
}
var Mva, 