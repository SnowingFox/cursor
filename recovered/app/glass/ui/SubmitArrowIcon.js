// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SubmitArrowIcon.js range:17427673..17432342
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.033Z
var B_p = L({ "SubmitArrowIcon.js"() {
  "use strict";
  E();
} });
import { jsx as kwt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as U_p } from "./react-runtime/react/esm-compiler-runtime-production.js";
function mxa({ variant: t, isExpanded: e, size: n, state: i, color: r }) {
  const s = t !== "expanded";
  return [M0e.root, n === "md" ? M0e.sizeMd : M0e.sizeSm, i === "active" && M0e.active, i === "active" && r === "yellow" && M0e.activeYellow, i === "active" && r === "red" && M0e.activeRed, i === "active" && r === "green" && M0e.activeGreen, i === "disabled" && M0e.disabled, i === "stop" && M0e.stop, s && M0e.compact, s && e && M0e.compactExpanded];
}
function Gc1() {
  return M0e.arrow;
}
function j_p(t) {
  const e = U_p(5), { kind: n, size: i } = t, r = i === void 0 ? "md" : i;
  if (n === "stop") {
    const l = r === "sm" ? "xl" : "2xl";
    let c;
    return e[0] !== l ? (c = kwt(zt, { "aria-hidden": true, name: "stop-circle", size: l, variant: "filled" }), e[0] = l, e[1] = c) : c = e[1], c;
  }
  const s = n === "save" ? "check" : "arrow-up", o = r === "sm" ? "xs" : "sm";
  let a;
  return e[2] !== s || e[3] !== o ? (a = kwt(zt, { "aria-hidden": true, name: s, size: o, variant: "filled" }), e[2] = s, e[3] = o, e[4] = a) : a = e[4], a;
}
function $_p(t) {
  const e = U_p(49), { hasContent: n, isRunning: i, onSubmit: r, onStop: s, className: o, size: a, color: l, tooltipTitle: c, tooltipShortcut: u, tooltipPlacement: d } = t, h = a === void 0 ? "md" : a, p = d === void 0 ? "bottom" : d, g = TGe("PromptInput.SubmitButton"), f = n ?? g.hasContent, _ = i ?? g.isRunning, b = g.onSubmit, y = g.onStop, S = g.getSubmitData, k = g.variant, C = g.isExpanded;
  let T;
  e[0] !== b || e[1] !== S || e[2] !== r ? (T = () => {
    if (r) r();
    else if (b) {
      const Q = S();
      Q.submitEntry = "click", b(Q);
    }
  }, e[0] = b, e[1] = S, e[2] = r, e[3] = T) : T = e[3];
  const I = T;
  let A;
  e[4] !== y || e[5] !== s ? (A = () => {
    s ? s() : y?.();
  }, e[4] = y, e[5] = s, e[6] = A) : A = e[6];
  const P = A;
  if (_ && !f) {
    let Q;
    e[7] !== o || e[8] !== l || e[9] !== C || e[10] !== h || e[11] !== k ? (Q = ar({ rootClass: "ui-prompt-input-submit-button", stylexStyles: mxa({ variant: k, isExpanded: C, size: h, state: "stop", color: l }), className: o }), e[7] = o, e[8] = l, e[9] = C, e[10] = h, e[11] = k, e[12] = Q) : Q = e[12];
    const te = Q, ee = h === "sm" ? "xs" : "sm";
    let re;
    e[13] !== ee ? (re = kwt(One, { name: "primitive-square", size: ee, "aria-hidden": true }), e[13] = ee, e[14] = re) : re = e[14];
    let ie;
    return e[15] !== l || e[16] !== P || e[17] !== h || e[18] !== te.className || e[19] !== te.style || e[20] !== re ? (ie = kwt("button", { type: "button", onClick: P, className: te.className, style: te.style, "data-state": "stop", "data-size": h, "data-color": l, "aria-label": "Stop generation", children: re }), e[15] = l, e[16] = P, e[17] = h, e[18] = te.className, e[19] = te.style, e[20] = re, e[21] = ie) : ie = e[21], ie;
  }
  const M = !f, O = h === "sm" ? 12 : 14, N = f ? "active" : "disabled";
  let U;
  e[22] !== N || e[23] !== o || e[24] !== l || e[25] !== C || e[26] !== h || e[27] !== k ? (U = ar({ rootClass: "ui-prompt-input-submit-button", stylexStyles: mxa({ variant: k, isExpanded: C, size: h, state: N, color: l }), className: o }), e[22] = N, e[23] = o, e[24] = l, e[25] = C, e[26] = h, e[27] = k, e[28] = U) : U = e[28];
  const j = U, $ = j.className, H = j.style;
  let G;
  e[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (G = ri("ui-prompt-input-submit-button__arrow", "ui-1lliihq ui-2lah0s"), e[29] = G) : G = e[29];
  let q;
  e[30] !== O || e[31] !== G ? (q = kwt(F_p, { size: O, className: G }), e[30] = O, e[31] = G, e[32] = q) : q = e[32];
  let K;
  e[33] !== N || e[34] !== l || e[35] !== I || e[36] !== M || e[37] !== h || e[38] !== j.className || e[39] !== j.style || e[40] !== q ? (K = kwt("button", { type: "button", onClick: I, disabled: M, className: $, style: H, "data-state": N, "data-size": h, "data-color": l, "aria-label": "Send message", children: q }), e[33] = N, e[34] = l, e[35] = I, e[36] = M, e[37] = h, e[38] = j.className, e[39] = j.style, e[40] = q, e[41] = K) : K = e[41];
  const V = K;
  if (!c && !u) return V;
  let Y;
  e[42] !== u || e[43] !== c ? (Y = kwt(ao, { title: c, shortcut: u }), e[42] = u, e[43] = c, e[44] = Y) : Y = e[44];
  let J;
  return e[45] !== V || e[46] !== Y || e[47] !== p ? (J = kwt(xs, { content: Y, offset: 6, placement: p, sameAxisOnly: true, children: V }), e[45] = V, e[46] = Y, e[47] = p, e[48] = J) : J = e[48], J;
}
var M0e, 