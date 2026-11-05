// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolApprovalReasonStack.stylex.js range:15315928..15319198
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.276Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
nDS = L({ "ToolApprovalReasonStack.stylex.js"() {
  "use strict";
  E(), r1n = { reasonStack: { k1xSpc: "ui-ufnvkl", k7Eaqz: "ui-euugli", kzqmXN: "ui-h8yej3", kVAEAm: "ui-1n2onr6", kHBbk8: "ui-c8icb0", "--ui-tool-approval-reason-tab-block-height": "ui-1dmfy5v", $$css: true }, reasonStackShell: { kVAEAm: "ui-1n2onr6", kY2c9j: "ui-1vjfegm", k7Eaqz: "ui-euugli", $$css: true }, reasonPlate: { kVAEAm: "ui-10l6tqk", kpwlN0: "ui-10a8y8t", kY2c9j: "ui-1ja2u2z", kWkggS: "ui-1fmjivh", kaIpWk: "ui-1m7fhj7", kfzvcC: "ui-47corl", $$css: true }, reasonNudge: { kVAEAm: "ui-1n2onr6", kY2c9j: "ui-1vjfegm", kB7OPa: "ui-9f619", k1xSpc: "ui-78zum5", kXwgrk: "ui-1q0g3np", kGNEyG: "ui-6s0dn4", kAzted: "ui-16f84ov", kzqmXN: "ui-h8yej3", kLKAdn: "ui-uve7l6", kGO01o: "ui-cnij5n", kg3NbH: "ui-negsyr", kMv6JI: "ui-1acoasx", kGuDYH: "ui-1wm8ruf", kLWn49: "ui-x6cpbe", kMwMTN: "ui-4b2ntj", kfSwDN: "ui-1hx0egp", $$css: true }, reasonNudgeText: { k7Eaqz: "ui-euugli", kMwMTN: "ui-4b2ntj", kHjlTd: "ui-j0a0fe", $$css: true } };
} });
import { jsx as uba, jsxs as ezh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as iDS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function tzh(t) {
  if (!t) return t;
  const e = t.split(hba);
  return e.some((i) => i.startsWith(izh)) ? e.filter((i) => !i.startsWith(nzh)).join(hba) : t;
}
function dba(t) {
  return t !== "readToolCall" && t !== "editToolCall";
}
function c6r(t) {
  const e = iDS(24), { reason: n, children: i, hideWhenAllowlistMode: r, trailing: s } = t, o = r === void 0 ? true : r, a = a6r();
  let l;
  e[0] !== n ? (l = tzh(n)?.trim(), e[0] = n, e[1] = l) : l = e[1];
  const c = l;
  if (!c || o && a?.autorunMode === tw.USE_ALLOWLIST) return i;
  let u;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = gn(ZMS()), e[2] = u) : u = e[2];
  const d = u.className;
  let h;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = gn(JMS()), e[3] = h) : h = e[3];
  let p;
  e[4] !== h.className ? (p = uba("div", { className: h.className, "aria-hidden": "true" }), e[4] = h.className, e[5] = p) : p = e[5];
  let g;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = gn(QMS()), e[6] = g) : g = e[6];
  let f;
  e[7] !== i || e[8] !== g.className ? (f = uba("div", { className: g.className, children: i }), e[7] = i, e[8] = g.className, e[9] = f) : f = e[9];
  let _;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = gn(eDS()), e[10] = _) : _ = e[10];
  const b = _.className;
  let y;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = gn(tDS()), e[11] = y) : y = e[11];
  let S;
  e[12] !== c || e[13] !== y.className || e[14] !== s ? (S = ezh("span", { className: y.className, children: [c, s] }), e[12] = c, e[13] = y.className, e[14] = s, e[15] = S) : S = e[15];
  let k;
  e[16] !== S || e[17] !== _.className ? (k = uba("div", { className: b, children: S }), e[16] = S, e[17] = _.className, e[18] = k) : k = e[18];
  let C;
  return e[19] !== k || e[20] !== u.className || e[21] !== p || e[22] !== f ? (C = ezh("div", { className: d, children: [p, f, k] }), e[19] = k, e[20] = u.className, e[21] = p, e[22] = f, e[23] = C) : C = e[23], C;
}
var hba, nzh, izh, 