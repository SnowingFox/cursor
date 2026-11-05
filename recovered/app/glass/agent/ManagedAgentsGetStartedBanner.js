// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ManagedAgentsGetStartedBanner.js range:5354130..5365957
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.213Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, typography.stylex.js, tokens.stylex.js, GlassIcon.js, icon.js, Button.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, typography.stylex.js, tokens.stylex.js, GlassIcon.js, icon.js, Button.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
KZd = L({ "ManagedAgentsGetStartedBanner.js"() {
  "use strict";
  E(), Va(), P7(), B5e(), dZd(), fd(), P0(), nxr = "/assets/videos/managed-agents", ixr = "/assets/images/managed-agents", n_n = [{ id: "bugbot", title: "Review Code with Bugbot", description: "Catch bugs and auto-fix before they ship.", icon: "bug", src: `${nxr}/bugbot.mp4`, poster: `${ixr}/bugbot.webp` }, { id: "security", title: "Scan and Triage Security Vulnerabilities", description: "Security checks on every change.", icon: "shield", src: `${nxr}/vulnerability-review.mp4`, poster: `${ixr}/vulnerability.webp` }, { id: "assign", title: "Route PR Reviews and Auto-Approve", description: "Assign reviewers and approve PRs.", icon: "lightning", src: `${nxr}/assign-reviewer.mp4`, poster: `${ixr}/assign.webp` }], rxr = { title: { kVAEAm: "ui-1n2onr6", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-at24cr", koQZXg: "ui-j3b58b", kMwMTN: "ui-1wd3ewq", k63SB2: "ui-20ajya", k9WMMc: "ui-2b8uid", $$css: true }, ctaFullWidth: { kzqmXN: "ui-h8yej3", $$css: true } };
} });
import { jsx as Y3, jsxs as dSt, Fragment as JFy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as s8t } from "./react-runtime/react/esm-compiler-runtime-production.js";
function YZd({ approvalEnabled: t, availability: e, bugbotEnabled: n, securityEnabled: i }) {
  return [{ ...eQd, enabled: n }, ...e.security ? [{ description: "Automatically review and scan code for security-related bugs, issues, and vulnerabilities.", enabled: i, icon: "shield", id: "security", title: "Security" }] : [], ...e.approval ? [{ description: "Automatically assign reviewers and approve pull requests.", enabled: t, icon: "lightning", id: "pr-routing", title: "PR Routing & Approval" }] : []];
}
function e6y(t) {
  const e = s8t(4), { enabled: n, icon: i } = t, r = n ? "var(--cursor-terminal-ansi-white)" : Aoe["--cursor-icon-tertiary"], s = n ? "var(--cursor-terminal-ansi-black)" : Aoe["--cursor-bg-tertiary"];
  let o;
  return e[0] !== i || e[1] !== r || e[2] !== s ? (o = Y3(cZd, { icon: i, size: "lg", accentColor: r, backgroundColor: s }), e[0] = i, e[1] = r, e[2] = s, e[3] = o) : o = e[3], o;
}
function t6y(t) {
  const e = s8t(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = Y3("div", { className: "ui-rvj5dj ui-185a7wo ui-1oot3zn ui-kh2ocl ui-1c0t91c ui-b2s05o", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function XZd() {
  return ar({ rootClass: "ui-from-cursor-agent-card", stylexStyles: JZd.card, style: { "--from-cursor-card-bg": Aoe["--cursor-bg-elevated"], backgroundColor: "var(--from-cursor-card-bg)" } });
}
function n6y(t) {
  const e = s8t(10), { action: n, title: i } = t;
  let r;
  e[0] !== n.onClick || e[1] !== n.render ? (r = n.render !== void 0 ? { nativeButton: false, render: n.render } : { onClick: n.onClick }, e[0] = n.onClick, e[1] = n.render, e[2] = r) : r = e[2];
  const s = r;
  if (n.kind === "manage") {
    const c = `Manage ${i}`;
    let u;
    return e[3] !== s || e[4] !== c ? (u = Y3(An, { ...s, "aria-label": c, rounded: true, size: "lg", trailingIcon: "arrow-right-up", variant: "outline", children: "Manage" }), e[3] = s, e[4] = c, e[5] = u) : u = e[5], u;
  }
  const o = `Enable ${i}`, a = n.render === void 0 && n.onClick === void 0;
  let l;
  return e[6] !== s || e[7] !== o || e[8] !== a ? (l = Y3(An, { ...s, "aria-label": o, disabled: a, rounded: true, size: "lg", tone: "monochrome", variant: "primary", children: "Enable" }), e[6] = s, e[7] = o, e[8] = a, e[9] = l) : l = e[9], l;
}
function i6y(t) {
  const e = s8t(38), { action: n, description: i, enabled: r, icon: s, id: o, onOpen: a, render: l, statusKnown: c, title: u, titleAccessory: d } = t, h = c === void 0 ? true : c;
  let p;
  e[0] !== a || e[1] !== l || e[2] !== u ? (p = l === void 0 ? { type: "button", onClick: a, "aria-label": u } : {}, e[0] = a, e[1] = l, e[2] = u, e[3] = p) : p = e[3];
  let g;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = { className: "ui-jyslct ui-78zum5 ui-dt5ytf ui-1qjc9v5 ui-98rzlu ui-euugli ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-jbqb8w ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-1heor9g ui-1ypdohk ui-ln7xf2 ui-dpxx8g ui-1hl2dhg" }, e[4] = g) : g = e[4];
  const f = r || !h;
  let _;
  e[5] !== s || e[6] !== f ? (_ = Y3("span", { className: "ui-78zum5 ui-1cy8zhl ui-16ry4p3 ui-14q74kp", children: Y3(e6y, { icon: s, enabled: f }) }), e[5] = s, e[6] = f, e[7] = _) : _ = e[7];
  let b;
  e[8] !== u ? (b = Y3("span", { className: "ui-euugli ui-b3r6kr ui-1wd3ewq ui-11wthnw ui-1yl5bsf ui-1ja60sm ui-lyipyv ui-uxw1ft", children: u }), e[8] = u, e[9] = b) : b = e[9];
  let y;
  e[10] !== r || e[11] !== h ? (y = h && !r ? Y3("span", { className: "ui-2lah0s ui-1e4uaio ui-11wthnw ui-20ajya ui-1ja60sm", children: "Disabled" }) : null, e[10] = r, e[11] = h, e[12] = y) : y = e[12];
  let S;
  e[13] !== b || e[14] !== y || e[15] !== d ? (S = dSt("span", { className: "ui-3nfvp2 ui-euugli ui-6s0dn4 ui-ehausa ui-jpr12u", children: [b, d, y] }), e[13] = b, e[14] = y, e[15] = d, e[16] = S) : S = e[16];
  let k;
  e[17] !== i ? (k = Y3("span", { className: "ui-104kibb ui-1ua5tub ui-1h7i4cw ui-1lydckn ui-euugli ui-b3r6kr ui-4b2ntj ui-11wthnw ui-1ja60sm", children: i }), e[17] = i, e[18] = k) : k = e[18];
  let C;
  e[19] !== _ || e[20] !== S || e[21] !== k ? (C = dSt(JFy, { children: [_, S, k] }), e[19] = _, e[20] = S, e[21] = k, e[22] = C) : C = e[22];
  let T;
  e[23] !== C || e[24] !== p ? (T = { ...p, ...g, children: C }, e[23] = C, e[24] = p, e[25] = T) : T = e[25];
  let I;
  e[26] !== l || e[27] !== T ? (I = { defaultTagName: "button", render: l, props: T }, e[26] = l, e[27] = T, e[28] = I) : I = e[28];
  const A = Kvn(I);
  let P;
  e[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = XZd(), e[29] = P) : P = e[29];
  const M = P;
  let O;
  e[30] !== n || e[31] !== u ? (O = n !== void 0 ? Y3("span", { className: "ui-10l6tqk ui-e6tamo ui-a6qrhg ui-1vjfegm ui-3nfvp2", children: Y3(n6y, { action: n, title: u }) }) : null, e[30] = n, e[31] = u, e[32] = O) : O = e[32];
  let N;
  return e[33] !== r || e[34] !== o || e[35] !== A || e[36] !== O ? (N = dSt("div", { className: M.className, "data-agent-id": o, "data-enabled": r, "data-layout": "card", style: M.style, children: [A, O] }), e[33] = r, e[34] = o, e[35] = A, e[36] = O, e[37] = N) : N = e[37], N;
}
function r6y() {
  const t = s8t(1);
  let e;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = Y3("div", { role: "status", "aria-label": "Loading agents from Cursor", className: "ui-rvj5dj ui-185a7wo ui-1oot3zn ui-kh2ocl ui-1c0t91c ui-b2s05o", children: [0, 1, 2].map(s6y) }), t[0] = e) : e = t[0], e;
}
function s6y(t) {
  const e = XZd();
  return dSt("div", { className: e.className, style: e.style, children: [Y3("span", { className: "ui-78zum5 ui-1cy8zhl ui-16ry4p3 ui-14q74kp", children: Y3("span", { className: "ui-i07v4r ui-15527fg ui-1c74tu6 ui-w1l40g ui-a4qsjk ui-1aquc0h ui-2lah0s ui-jst10v ui-170hpbr ui-1i4c3av" }) }), Y3("span", { className: "ui-78zum5 ui-6s0dn4 ui-1b6ohxb", children: Y3("span", { className: "ui-i07v4r ui-15527fg ui-1c74tu6 ui-w1l40g ui-a4qsjk ui-1aquc0h ui-vipqoc ui-1e1y6u3 ui-z84dc7" }) }), Y3("span", { className: "ui-78zum5 ui-6s0dn4 ui-1b6ohxb", children: Y3("span", { className: "ui-i07v4r ui-15527fg ui-1c74tu6 ui-w1l40g ui-a4qsjk ui-1aquc0h ui-vipqoc ui-1e1y6u3 ui-ktia5q" }) }), Y3("span", { className: "ui-78zum5 ui-6s0dn4 ui-1b6ohxb", children: Y3("span", { className: "ui-i07v4r ui-15527fg ui-1c74tu6 ui-w1l40g ui-a4qsjk ui-1aquc0h ui-vipqoc ui-1e1y6u3 ui-ktia5q" }) }), Y3("span", { className: "ui-i07v4r ui-15527fg ui-1c74tu6 ui-w1l40g ui-a4qsjk ui-1aquc0h ui-10l6tqk ui-e6tamo ui-a6qrhg ui-1fu8urw ui-170hpbr ui-1i4c3av" })] }, t);
}
function ZZd(t) {
  const e = s8t(12), { card: n, onEnable: i, onOpen: r } = t;
  let s;
  e[0] !== n.enabled || e[1] !== i || e[2] !== r ? (s = n.enabled ? { kind: "manage", onClick: r } : { kind: "enable", onClick: i }, e[0] = n.enabled, e[1] = i, e[2] = r, e[3] = s) : s = e[3];
  let o;
  return e[4] !== n.description || e[5] !== n.enabled || e[6] !== n.icon || e[7] !== n.id || e[8] !== n.title || e[9] !== r || e[10] !== s ? (o = Y3(i6y, { id: n.id, icon: n.icon, title: n.title, description: n.description, enabled: n.enabled, onOpen: r, action: s }), e[4] = n.description, e[5] = n.enabled, e[6] = n.icon, e[7] = n.id, e[8] = n.title, e[9] = r, e[10] = s, e[11] = o) : o = e[11], o;
}
function QZd(t) {
  const e = s8t(24), { changeMonitor: n, mediaBaseUrl: i, onboardingCta: r, onEnableAgent: s, onGetStarted: o, onOpenAgent: a, onOpenDashboard: l, state: c } = t;
  let u;
  if (e[0] !== n || e[1] !== i || e[2] !== s || e[3] !== o || e[4] !== a || e[5] !== l || e[6] !== r || e[7] !== c.approvalEnabled || e[8] !== c.availability || e[9] !== c.bugbotEnabled || e[10] !== c.kind || e[11] !== c.message || e[12] !== c.onRetry || e[13] !== c.securityEnabled) {
    const d = c.kind === "dashboard-only" ? YZd({ approvalEnabled: false, availability: c.availability, bugbotEnabled: false, securityEnabled: false }) : c.kind === "configuration" ? YZd({ approvalEnabled: c.approvalEnabled, availability: c.availability, bugbotEnabled: c.bugbotEnabled, securityEnabled: c.securityEnabled }) : [];
    let h;
    e[15] !== n || e[16] !== c.kind ? (h = n !== void 0 && (c.kind === "configuration" || c.kind === "dashboard-only") ? Y3(ZZd, { card: { description: n.description, enabled: n.enabled, icon: "pulse", id: "change-monitor", title: n.title }, onEnable: n.onEnable, onOpen: n.onOpen }) : null, e[15] = n, e[16] = c.kind, e[17] = h) : h = e[17];
    const p = h;
    let g;
    e[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = Y3("h2", { id: "from-cursor-agents-heading", className: "ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-19aaqeu ui-11wthnw ui-20ajya ui-1ja60sm", children: "From Cursor" }), e[18] = g) : g = e[18];
    let f;
    e[19] !== r || e[20] !== c.kind ? (f = c.kind !== "loading" && c.kind !== "get-started" && r ? Y3("button", { type: "button", onClick: r.onClick, className: "ui-jyslct ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-jbqb8w ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-1e4uaio ui-1imywvh ui-1ypdohk ui-11wthnw ui-1ja60sm ui-po99wt ui-9kvfbb", children: r.label }) : null, e[19] = r, e[20] = c.kind, e[21] = f) : f = e[21];
    let _;
    e[22] !== f ? (_ = dSt("div", { className: "ui-78zum5 ui-1pha0wt ui-1qughib ui-1oot3zn ui-14q74kp ui-yab65l ui-1yxiud8", children: [g, f] }), e[22] = f, e[23] = _) : _ = e[23], u = dSt("section", { "data-component": "glass-from-cursor", "data-state": c.kind, "aria-labelledby": "from-cursor-agents-heading", className: "ui-78zum5 ui-dt5ytf ui-kh2ocl", children: [_, c.kind === "loading" ? Y3(r6y, {}) : c.kind === "error" ? dSt("div", { className: "ui-78zum5 ui-6s0dn4 ui-1qughib ui-1oot3zn ui-1m7fhj7 ui-f1vpex ui-cxb6k5 ui-1t8xvyj ui-10cfkro ui-usxwy5 ui-193t4r6 ui-4b2ntj ui-11wthnw", children: [Y3("span", { children: c.message }), Y3("button", { type: "button", onClick: c.onRetry, className: "ui-jyslct ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-jbqb8w ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-1e4uaio ui-1imywvh ui-1ypdohk ui-11wthnw ui-1ja60sm ui-po99wt ui-9kvfbb", children: "Retry" })] }) : c.kind === "get-started" ? Y3(VZd, { mediaBaseUrl: i, onGetStarted: o ?? l }) : dSt(t6y, { children: [d.map((b) => Y3(ZZd, { card: b, onEnable: s !== void 0 ? () => s(b.id) : void 0, onOpen: a !== void 0 ? () => a(b.id) : l }, b.id)), p] })] }), e[0] = n, e[1] = i, e[2] = s, e[3] = o, e[4] = a, e[5] = l, e[6] = r, e[7] = c.approvalEnabled, e[8] = c.availability, e[9] = c.bugbotEnabled, e[10] = c.kind, e[11] = c.message, e[12] = c.onRetry, e[13] = c.securityEnabled, e[14] = u;
  } else u = e[14];
  return u;
}
var JZd, eQd, 