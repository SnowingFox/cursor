// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardContext.js range:15060518..15061671
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: fkt
// hoisted-owner: TranscriptCardContent.js (app-out-vs-workbench-workbench-glass-main-js:2307); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

fkt = L({ "TranscriptCardContext.js"() {
  "use strict";
  E(), Iva = PxS(null);
} });
import { jsx as DxS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as NxS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function LxS(t) {
  const e = NxS(13), { children: n, inset: i, rootStyle: r, contentRef: s, style: o } = t, a = i === void 0 ? "tool-card" : i, { layout: l } = vjt("TranscriptCard.Content");
  let c;
  e[0] !== a || e[1] !== l || e[2] !== r ? (c = gn(fFr.content, a === "tool-card" ? fFr.contentInset : null, l === "row" ? fFr.contentRow : null, r), e[0] = a, e[1] = l, e[2] = r, e[3] = c) : c = e[3];
  const u = c;
  let d;
  e[4] !== u.style || e[5] !== o ? (d = o === void 0 ? u.style : { ...u.style, ...o }, e[4] = u.style, e[5] = o, e[6] = d) : d = e[6];
  let h;
  return e[7] !== u.className || e[8] !== n || e[9] !== s || e[10] !== a || e[11] !== d ? (h = DxS("div", { ref: s, className: u.className, "data-component": "transcript-card-content", "data-inset": a, style: d, children: n }), e[7] = u.className, e[8] = n, e[9] = s, e[10] = a, e[11] = d, e[12] = h) : h = e[12], h;
}
var fFr, 