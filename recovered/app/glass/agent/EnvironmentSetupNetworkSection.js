// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnvironmentSetupNetworkSection.js range:22990357..22992458
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.202Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, env-egress-policy.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, env-egress-policy.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
SGm = L({ "EnvironmentSetupNetworkSection.js"() {
  "use strict";
  E(), Mt(), dQa(), lts = "__inherit_settings__", yGm = ["allow_all", "parent_plus_network_settings", "default_with_network_settings", "network_settings_only"];
} });
import { jsx as qot, jsxs as kGm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Sek } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as kek } from "./react-runtime/react/esm-index-production.js";
function wek(t) {
  const e = Sek(14);
  let n, i, r;
  e[0] !== t ? ({ closeOnEscape: r, onClose: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = r === void 0 ? true : r, o = kek(null);
  let a;
  e[4] !== s ? (a = { enabled: s, targetRef: o }, e[4] = s, e[5] = a) : a = e[5], Mjr(n, a);
  let l;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = qot(fi.HeaderContent, { children: qot(fi.HeaderTitle, { tone: "muted", truncate: true, children: "Network Access" }) }), e[6] = l) : l = e[6];
  let c;
  e[7] !== n ? (c = kGm(fi.Header, { children: [l, qot(fi.HeaderTrailing, { children: qot(fi.HeaderCloseButton, { "aria-label": "Close network access tray", onClick: n }) })] }), e[7] = n, e[8] = c) : c = e[8];
  let u;
  e[9] !== i ? (u = qot(fi.Body, { children: qot("div", { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-t7dq6l cursor-ui-2lwn1j cursor-ui-b3r6kr", children: qot("div", { className: "cursor-ui-78zum5 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-1t1x2f9 cursor-ui-dt5ytf cursor-ui-1jlwbde cursor-ui-2lwn1j cursor-ui-1rea2x4 cursor-ui-1t8xvyj cursor-ui-usxwy5", children: qot(bGm, { ...i }) }) }) }), e[9] = i, e[10] = u) : u = e[10];
  let d;
  return e[11] !== c || e[12] !== u ? (d = qot("div", { ref: o, className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-h8yej3 cursor-ui-t7dq6l cursor-ui-cwfpss cursor-ui-2lwn1j", children: kGm(fi.Root, { enableKeyboardNavigation: false, maxHeight: 360, size: "content", visible: true, children: [c, u] }) }), e[11] = c, e[12] = u, e[13] = d) : d = e[13], d;
}
