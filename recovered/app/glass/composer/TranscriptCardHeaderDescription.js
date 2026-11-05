// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeaderDescription.js range:15068680..15070183
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, dy, vkt
// wrapper-init: eAS
// hoisted-owner: TranscriptCardHeaderExpand.js (app-out-vs-workbench-workbench-glass-main-js:2313); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

eAS = L({ "TranscriptCardHeaderDescription.js"() {
  "use strict";
  E(), dy(), vkt(), Pva = { root: { k7Eaqz: "ui-euugli", ks0D6T: "ui-193iq5w", $$css: true }, clamp2: { k1xSpc: "ui-104kibb", kJFfOR: "ui-1h7i4cw", kgKLqz: "ui-1ua5tub", kVQacm: "ui-b3r6kr", $$css: true } };
} });
import { jsx as _Hh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as tAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function nAS(t) {
  return [tmi.button, t ? tmi.buttonOpen : null];
}
function iAS(t) {
  const e = tAS(13), { expanded: n, onClick: i, label: r } = t;
  _jt("TranscriptCard.HeaderExpand");
  let s;
  e[0] !== n ? (s = gn(nAS(n)), e[0] = n, e[1] = s) : s = e[1];
  const o = s;
  let a;
  e[2] !== i ? (a = (h) => {
    h.stopPropagation(), i(), h.detail > 0 && h.currentTarget.blur();
  }, e[2] = i, e[3] = a) : a = e[3];
  const l = a, c = n ? tmi.chevronOpen : null;
  let u;
  e[4] !== c ? (u = _Hh(zt, { "aria-hidden": true, name: "chevron-right", rootStyle: [tmi.chevron, c], size: 10 }), e[4] = c, e[5] = u) : u = e[5];
  let d;
  return e[6] !== o.className || e[7] !== o.style || e[8] !== n || e[9] !== l || e[10] !== r || e[11] !== u ? (d = _Hh("button", { type: "button", "aria-expanded": n, "aria-label": r, className: o.className, "data-component": "transcript-card-header-expand", style: o.style, onClick: l, children: u }), e[6] = o.className, e[7] = o.style, e[8] = n, e[9] = l, e[10] = r, e[11] = u, e[12] = d) : d = e[12], d;
}
var tmi, 