// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderLeading.js range:16287423..16289499
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.109Z
var BWS = L({ "TrayHeaderLeading.js"() {
  "use strict";
  E(), Art();
} });
import { jsx as DBr, jsxs as Frp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Mwa } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Brp(t) {
  const e = Mwa(16), { componentName: n, contextName: i } = t, { currentStepIndex: r, totalSteps: s, goToNextStep: o, goToPrevStep: a, isFirstStep: l, isLastStep: c } = hkn(i);
  if (s <= 1) return null;
  const u = `${n}-previous`;
  let d;
  e[0] !== a || e[1] !== l || e[2] !== u ? (d = DBr(ho, { "aria-label": "Previous step", "data-component": u, disabled: l, icon: "chevron-left", rootStyle: Dwa.previousButton, size: "sm", variant: "text", onClick: a }), e[0] = a, e[1] = l, e[2] = u, e[3] = d) : d = e[3];
  const h = r + 1;
  let p;
  e[4] !== h || e[5] !== s ? (p = Frp("span", { className: "ui-9ek82g ui-2b8uid ui-11wthnw ui-ss6m8b ui-uxw1ft ui-13gy8z5", children: [h, " of ", s] }), e[4] = h, e[5] = s, e[6] = p) : p = e[6];
  const g = `${n}-next`;
  let f;
  e[7] !== o || e[8] !== c || e[9] !== g ? (f = DBr(ho, { "aria-label": "Next step", "data-component": g, disabled: c, icon: "chevron-right", rootStyle: Dwa.nextButton, size: "sm", variant: "text", onClick: o }), e[7] = o, e[8] = c, e[9] = g, e[10] = f) : f = e[10];
  let _;
  return e[11] !== n || e[12] !== d || e[13] !== p || e[14] !== f ? (_ = Frp("div", { className: "ui-78zum5 ui-6s0dn4 ui-xhr3t", "data-component": n, children: [d, p, f] }), e[11] = n, e[12] = d, e[13] = p, e[14] = f, e[15] = _) : _ = e[15], _;
}
function UWS() {
  const t = Mwa(1);
  p$t("Tray.HeaderStepper");
  let e;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = DBr(Brp, { componentName: "tray-header-stepper", contextName: "Tray.HeaderStepper" }), t[0] = e) : e = t[0], e;
}
function jWS() {
  const t = Mwa(1);
  let e;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = DBr(Brp, { componentName: "tray-stepper", contextName: "Tray.Stepper" }), t[0] = e) : e = t[0], e;
}
var Dwa, 