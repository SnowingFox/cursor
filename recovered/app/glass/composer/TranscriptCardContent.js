// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardContent.js range:15061671..15063790
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, fkt
// wrapper-init: OxS
// hoisted-owner: TranscriptCardFooter.js (app-out-vs-workbench-workbench-glass-main-js:2308); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

OxS = L({ "TranscriptCardContent.js"() {
  "use strict";
  E(), Va(), fkt(), fFr = { content: { kB7OPa: "ui-9f619", k7Eaqz: "ui-euugli", k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kOIVth: "ui-1tczf2g", kGuDYH: "ui-hwpfco", kLWn49: "ui-1bcdmom", $$css: true }, contentInset: { kLKAdn: "ui-13ly8rp", kpe85a: "ui-1yxiud8", kGO01o: "ui-1xlntvz", kE3dHu: "ui-yab65l", $$css: true }, contentRow: { kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-1t1x2f9", kXwgrk: "ui-1q0g3np", kGNEyG: "ui-6s0dn4", kOIVth: "ui-1tczf2g", $$css: true } };
} });
import { jsx as xva, jsxs as FxS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as BxS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function UxS(t) {
  const e = BxS(15), { insetLeading: n, tertiaryAction: i, secondaryAction: r, primaryAction: s, rootStyle: o } = t, a = n === void 0 ? false : n;
  vjt("TranscriptCard.Footer");
  const l = a ? Ava.insetLeading : null;
  let c;
  e[0] !== o || e[1] !== l ? (c = ar({ rootClass: "ui-transcript-card-footer", stylexStyles: [Ava.root, l, o] }), e[0] = o, e[1] = l, e[2] = c) : c = e[2];
  const u = c;
  let d;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = { className: "ui-78zum5 ui-6s0dn4 ui-ack27t ui-euugli" }, e[3] = d) : d = e[3];
  const h = d, p = a || void 0;
  let g;
  e[4] !== i ? (g = i != null ? xva("div", { className: h.className, "data-component": "transcript-card-footer-tertiary", style: h.style, children: i }) : null, e[4] = i, e[5] = g) : g = e[5];
  let f;
  e[6] !== r ? (f = r != null ? xva(NC, { buttonVariant: "text", children: r }) : null, e[6] = r, e[7] = f) : f = e[7];
  let _;
  return e[8] !== u.className || e[9] !== u.style || e[10] !== s || e[11] !== p || e[12] !== g || e[13] !== f ? (_ = xva(NC, { buttonRounded: true, buttonSize: "md", children: FxS("div", { className: u.className, "data-component": "transcript-card-footer", "data-inset-leading": p, style: u.style, children: [g, f, s] }) }), e[8] = u.className, e[9] = u.style, e[10] = s, e[11] = p, e[12] = g, e[13] = f, e[14] = _) : _ = e[14], _;
}
var Ava, 