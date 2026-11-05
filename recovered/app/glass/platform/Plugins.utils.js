// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Plugins.utils.js range:16941923..16949966
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.156Z
// wrapper: Hrt deps:10 [E, Va, joe, mf, S6r, qnS, ihp, Iwh, kwh, riS]
// declarations: rt1, st1, ot1, at1, php (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Hrt = L({ "Plugins.utils.js"() {
  "use strict";
  E(), Va(), joe(), mf(), S6r(), qnS(), ihp(), Iwh(), kwh(), riS(), iwn = { pluginItemIcon: { kmuXW: "ui-2lah0s", kzqmXN: "ui-1tsk5d4", kZKoxP: "ui-tsj531", kVQacm: "ui-b3r6kr", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", $$css: true }, pluginItemIconFallback: { kzqmXN: "ui-h8yej3", kZKoxP: "ui-5yr21d", kB7OPa: "ui-9f619", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kEafiO: "ui-178xt8z", kWqL5O: "ui-s1s249", kt9PQ7: "ui-so031l", kZ1KPB: "ui-e0pwq", kPef9Z: "ui-13fuv20", kSWEuD: "ui-32b0ac", kfdmCh: "ui-1q0q8m5", k4WBpm: "ui-19ypqd9", kLZC3w: "ui-1aeic0j", k26BEO: "ui-141kqco", kL6WhQ: "ui-17fyfba", kaZRDh: "ui-1arpupx", kaIpWk: "ui-ur7f20", kMwMTN: "ui-1mh7f6w", $$css: true }, iconSquircle: { kaIpWk: "ui-120w5o1", $$css: true }, iconRounded: { kaIpWk: "ui-1kogg8i", $$css: true } }, rvi = { canvas: { label: "Canvas", description: "Produces canvases" } }, ZTa = "__DEFAULT__";
} });
import { jsxs as Wrt, jsx as X_e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as nt1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as it1, useEffect as hhp } from "./react-runtime/react/esm-index-production.js";
function rt1(t) {
  if (t.kind === "project") return "Add to Project";
  switch (t.scope) {
    case "user":
      return "Add for Myself";
    case "team":
      return "Add to Team";
    case "project":
      return "Add to Project";
  }
}
function st1({ scopeOptions: t, localProjects: e, userEmail: n, workspaceName: i, teamName: r }) {
  const s = e != null && e.length > 0, o = [];
  for (const a of t) {
    if (a === "project" && s) {
      for (const c of e) o.push({ kind: "project", project: c });
      continue;
    }
    const l = a === "user" ? n : a === "project" ? i : a === "team" ? r : void 0;
    o.push({ kind: "scope", scope: a, subtitle: l });
  }
  return o;
}
function ot1(t) {
  const e = nt1(25), { plugin: n, action: i, scopeOptions: r, selectedScope: s, onScopeChange: o, workspaceName: a, teamName: l, userEmail: c, scopeOptionRefsRef: u, onDetailsClick: d, onConfirm: h, onCancel: p, isLoading: g, error: f, localProjects: _, selectedProjectId: b, onProjectChange: y, hideChrome: S } = t, k = i === void 0 ? "add" : i, C = g === void 0 ? false : g, T = f === void 0 ? null : f, I = S === void 0 ? false : S, A = it1(null), P = n.publisher?.isVerified === true, M = P ? "Verified plugin" : void 0, O = T != null && T !== "", N = k === "add" && r.length > 1, U = st1({ scopeOptions: r, localProjects: _, userEmail: c, workspaceName: a, teamName: l });
  let j, $;
  e[0] !== C || e[1] !== p ? (j = () => {
    const ie = at1, oe = (se) => {
      C || se.target instanceof HTMLElement && se.target.closest("[data-ui-dialog-root]") != null || ie(se.target) || se.key === "Escape" && p != null && (se.preventDefault(), se.stopPropagation(), p());
    };
    return document.addEventListener("keydown", oe, { capture: true }), () => document.removeEventListener("keydown", oe, { capture: true });
  }, $ = [C, p], e[0] = C, e[1] = p, e[2] = j, e[3] = $) : (j = e[2], $ = e[3]), hhp(j, $);
  let H, G;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (H = () => {
    const ie = requestAnimationFrame(() => {
      A.current?.focus();
    });
    return () => cancelAnimationFrame(ie);
  }, G = [], e[4] = H, e[5] = G) : (H = e[4], G = e[5]), hhp(H, G);
  const q = C ? k === "remove" ? "Removing..." : "Installing..." : k === "remove" ? "Remove" : "Install";
  let K;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (K = { 0: { className: "ui-78zum5 ui-dt5ytf ui-1dbef6d ui-13ly8rp ui-1xlntvz ui-1k57tk5 ui-1t137rt ui-1uczgqu ui-esxkg8" }, 1: { className: "ui-78zum5 ui-dt5ytf ui-1dbef6d ui-1k57tk5 ui-1t137rt ui-1uczgqu ui-esxkg8 ui-exx8yu ui-18d9i69" } }, e[6] = K) : K = e[6];
  const V = K[!!I << 0], Y = -1, J = "add-plugin-banner";
  let Q;
  e[7] !== I || e[8] !== C || e[9] !== P || e[10] !== p || e[11] !== h || e[12] !== d || e[13] !== n || e[14] !== q || e[15] !== M ? (Q = !I && Wrt("div", { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-o7x2bt ui-16b7oty", children: [Wrt("div", { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-euugli", children: [X_e("span", { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-1td3qas ui-10w6t97 ui-2lah0s ui-1e1y6u3 ui-b3r6kr", "aria-hidden": true, children: W7(n, php) }), Wrt("div", { className: "ui-78zum5 ui-dt5ytf ui-l56j7k ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-euugli", children: [Wrt("div", { className: "ui-78zum5 ui-6s0dn4 ui-137clkk ui-euugli", children: [X_e("p", { className: "ui-1ghz6dp ui-11wthnw ui-1ja60sm ui-1wd3ewq ui-uxw1ft ui-b3r6kr ui-lyipyv ui-euugli", children: n.displayName }), P && X_e(zt, { color: "blue", name: "verified", size: "sm", title: "Verified", variant: "filled" })] }), (M != null || d != null) && Wrt("p", { className: "ui-1ghz6dp ui-78zum5 ui-1pha0wt ui-11twubx ui-y5h43f ui-19ji09o ui-19aaqeu ui-uxw1ft ui-b3r6kr ui-euugli", children: [M != null && X_e("span", { className: "ui-b3r6kr ui-lyipyv ui-euugli", children: M }), M != null && d != null && X_e("span", { className: "ui-2lah0s ui-4b2ntj", "aria-hidden": true, children: "•" }), d != null && X_e("button", { type: "button", className: "ui-2lah0s ui-t0psk2 ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-19aaqeu ui-7gh5u8 ui-jbqb8w ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-1ejq31n ui-11pwa6s ui-1sy0etr ui-1b16gh4 ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-1ypdohk", onClick: d, children: "Details" })] })] })] }), Wrt("div", { className: "ui-78zum5 ui-6s0dn4 ui-1dbef6d ui-2lah0s", children: [p != null && X_e(An, { disabled: C, onClick: p, size: "sm", variant: "text", children: "Dismiss" }), X_e(An, { disabled: C, onClick: h, rounded: true, size: "md", variant: "primary", children: q })] })] }), e[7] = I, e[8] = C, e[9] = P, e[10] = p, e[11] = h, e[12] = d, e[13] = n, e[14] = q, e[15] = M, e[16] = Q) : Q = e[16];
  let te;
  e[17] !== T || e[18] !== O ? (te = O && X_e("p", { className: "ui-1ghz6dp ui-o7x2bt ui-16b7oty ui-y5h43f ui-19ji09o ui-1jh5svw", children: T }), e[17] = T, e[18] = O, e[19] = te) : te = e[19];
  const ee = N && X_e("div", { className: "ui-78zum5 ui-dt5ytf ui-o7x2bt ui-16b7oty", children: U.map((ie, oe) => {
    const se = ie.kind === "project" ? `project:${ie.project.id}` : ie.scope, le = ie.kind === "project" ? ie.project.displayName : ie.subtitle, ce = ie.kind === "project" ? s === "project" && b === ie.project.id : s === ie.scope;
    return Wrt("button", { type: "button", "aria-pressed": ce, className: "ui-78zum5 ui-6s0dn4 ui-1qughib ui-ehausa ui-h8yej3 ui-uve7l6 ui-1yxiud8 ui-1rgtt3y ui-yab65l ui-1e1y6u3 ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-1ejq31n ui-11pwa6s ui-1sy0etr ui-1b16gh4 ui-jbqb8w ui-mj0db2 ui-1w9gnzd ui-jb2p0i ui-1ypdohk ui-dpxx8g ui-1l9t207 ui-1x65lqo ui-hlp2gg ui-i5y0ii ui-1xwnvu1 ui-z2lg3n", "data-selected": ce || void 0, onClick: () => {
      ie.kind === "project" ? (o("project"), y?.(ie.project.id)) : o(ie.scope);
    }, ref: u ? (ae) => {
      u.current && (u.current[oe] = ae);
    } : void 0, children: [Wrt("span", { className: "ui-78zum5 ui-6s0dn4 ui-ehausa ui-euugli ui-y5h43f ui-19ji09o", children: [X_e("span", { className: "ui-2lah0s ui-uxw1ft ui-1wd3ewq", children: rt1(ie) }), le != null && le !== "" && X_e("span", { className: "ui-4b2ntj ui-b3r6kr ui-lyipyv ui-uxw1ft ui-euugli", children: le })] }), ce && X_e("span", { className: "ui-2lah0s ui-78zum5 ui-6s0dn4", "aria-hidden": true, children: X_e(zt, { color: "green", name: "check", size: "sm" }) })] }, se);
  }) });
  let re;
  return e[20] !== V || e[21] !== Q || e[22] !== te || e[23] !== ee ? (re = Wrt("div", { ...V, ref: A, tabIndex: Y, "data-testid": J, children: [Q, te, ee] }), e[20] = V, e[21] = Q, e[22] = te, e[23] = ee, e[24] = re) : re = e[24], re;
}
function at1(t) {
  return t instanceof HTMLElement ? t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable : false;
}
var php,
