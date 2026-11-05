// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeaderContent.js range:15067783..15068680
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, vkt
// wrapper-init: XxS
// hoisted-owner: TranscriptCardHeaderDescription.js (app-out-vs-workbench-workbench-glass-main-js:2312); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var XxS = L({ "TranscriptCardHeaderContent.js"() {
  "use strict";
  E(), vkt();
} });
import { jsx as ZxS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as QxS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function JxS(t) {
  const e = QxS(7), { children: n, lineClamp: i } = t, r = i === void 0 ? 1 : i;
  _jt("TranscriptCard.HeaderDescription");
  const s = r === 2 ? Pva.clamp2 : null;
  let o;
  e[0] !== s ? (o = [Pva.root, s], e[0] = s, e[1] = o) : o = e[1];
  const a = r === 1 ? true : void 0;
  let l;
  return e[2] !== n || e[3] !== r || e[4] !== o || e[5] !== a ? (l = ZxS(nn, { as: "span", color: "tertiary", "data-component": "transcript-card-header-description", "data-line-clamp": r, rootStyle: o, size: "md", truncate: a, weight: "regular", children: n }), e[2] = n, e[3] = r, e[4] = o, e[5] = a, e[6] = l) : l = e[6], l;
}
var Pva, 