// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnvironmentSetupBlockedAgentTray.js range:22978744..22980722
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.195Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
pek = L({ "EnvironmentSetupBlockedAgentTray.js"() {
  "use strict";
  E(), Mt(), mGm = { flexGrow: 0, flexShrink: 0, flexBasis: "auto", paddingRight: 0, whiteSpace: "nowrap" };
} });
import { jsx as lze, jsxs as gGm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as mek } from "./react-runtime/react/esm-compiler-runtime-production.js";
function gek() {
  return null;
}
function fek(t) {
  const e = mek(19), { isCompleting: n, item: i, onCancel: r, onComplete: s } = t, o = n === void 0 ? false : n;
  let a;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = lze(fi.HeaderContent, { children: lze(fi.HeaderTitle, { tone: "muted", children: "Action Needed" }) }), e[0] = a) : a = e[0];
  let l;
  e[1] !== r ? (l = gGm(fi.Header, { children: [a, lze(fi.HeaderTrailing, { children: lze(fi.HeaderCloseButton, { "aria-label": "Close action needed", onClick: r }) })] }), e[1] = r, e[2] = l) : l = e[2];
  let c;
  e[3] !== i.label ? (c = lze(fi.Body, { children: lze(fi.Content, { children: lze(dT, { customComponents: vGm, generatedChildStyles: fGm, normalized: true, size: "md", children: i.label }) }) }), e[3] = i.label, e[4] = c) : c = e[4];
  let u;
  e[5] !== o || e[6] !== i.primaryLabel || e[7] !== s ? (u = lze(An, { disabled: o, onClick: s, variant: "primary", children: i.primaryLabel }), e[5] = o, e[6] = i.primaryLabel, e[7] = s, e[8] = u) : u = e[8];
  let d;
  e[9] !== o || e[10] !== r ? (d = lze(An, { disabled: o, onClick: r, children: "Cancel" }), e[9] = o, e[10] = r, e[11] = d) : d = e[11];
  let h;
  e[12] !== u || e[13] !== d ? (h = lze(fi.Footer, { primaryAction: u, secondaryAction: d }), e[12] = u, e[13] = d, e[14] = h) : h = e[14];
  let p;
  return e[15] !== l || e[16] !== c || e[17] !== h ? (p = gGm(fi.Root, { enableKeyboardNavigation: false, maxHeight: 360, size: "content", visible: true, children: [l, c, h] }), e[15] = l, e[16] = c, e[17] = h, e[18] = p) : p = e[18], p;
}
var gQa, fGm, vGm, 