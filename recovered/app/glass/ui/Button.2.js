// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Button.js range:5346007..5354130
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.506Z
P0 = L({ "Button.js"() {
  "use strict";
  E(), Va(), fKo(), _Ko(), bKo(), XIr(), mf(), NZd(), Jvn(), GFy(), IKo(), fd(), m2(), dKo(), GZd = { "ui--default-marker": "ui--default-marker", $$css: true };
} });
import { jsx as CRe, jsxs as t_n, Fragment as VFy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as qZd } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as txr, useEffect as zZd, useRef as KFy } from "./react-runtime/react/esm-index-production.js";
function xKo(t, e) {
  return e === void 0 ? t : new URL(t, e).toString();
}
function YFy() {
  const t = qZd(2), [e, n] = txr(XFy);
  let i, r;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = () => {
    if (typeof window.matchMedia != "function") return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), o = () => n(s.matches);
    return s.addEventListener("change", o), () => s.removeEventListener("change", o);
  }, r = [], t[0] = i, t[1] = r) : (i = t[0], r = t[1]), zZd(i, r), e;
}
function XFy() {
  return typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function VZd(t) {
  const e = qZd(49), { contentOverlay: n, cta: i, ctaHref: r, ctaLabel: s, isCtaLoading: o, mediaBaseUrl: a, onGetStarted: l } = t, c = s === void 0 ? "Get Started" : s, u = o === void 0 ? false : o, [d, h] = txr(0), [p, g] = txr(null), [f, _] = txr(QFy);
  let b;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = [], e[0] = b) : b = e[0];
  const y = KFy(b), S = YFy(), k = n_n[d] ?? n_n[0];
  let C;
  e[1] !== d ? (C = (ee) => {
    ee !== d && (g(d), h(ee));
  }, e[1] = d, e[2] = C) : C = e[2];
  const T = C;
  let I, A;
  e[3] !== d || e[4] !== p || e[5] !== S ? (I = () => {
    if (!S) {
      for (const [ee, re] of y.current.entries()) if (re !== null) if (ee === d) {
        re.currentTime = 0;
        const ie = re.play();
        ie !== void 0 && ie.catch(ZFy);
      } else re.pause(), ee !== p && (re.currentTime = 0);
    }
  }, A = [d, p, S], e[3] = d, e[4] = p, e[5] = S, e[6] = I, e[7] = A) : (I = e[6], A = e[7]), zZd(I, A);
  let P;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = CRe(zt, { name: "arrow-right", size: 14, "aria-hidden": true }), e[8] = P) : P = e[8];
  let M;
  e[9] !== c ? (M = t_n(VFy, { children: [c, P] }), e[9] = c, e[10] = M) : M = e[10];
  const O = M;
  let N;
  e[11] !== k.poster || e[12] !== a ? (N = xKo(k.poster, a), e[11] = k.poster, e[12] = a, e[13] = N) : N = e[13];
  const U = S ? `${k.title} demo` : "", j = S ? void 0 : true;
  let $;
  e[14] !== U || e[15] !== j || e[16] !== N ? ($ = CRe("img", { src: N, alt: U, "aria-hidden": j, className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv" }), e[14] = U, e[15] = j, e[16] = N, e[17] = $) : $ = e[17];
  let H;
  e[18] !== d || e[19] !== a || e[20] !== p || e[21] !== f || e[22] !== S || e[23] !== T ? (H = S ? null : n_n.map((ee, re) => {
    const ie = re === d, oe = ie && f.has(ee.id) || re === p;
    return CRe("video", { ref: (se) => {
      y.current[re] = se;
    }, src: xKo(ee.src, a), poster: xKo(ee.poster, a), muted: true, playsInline: true, preload: "auto", onCanPlay: () => _((se) => se.has(ee.id) ? se : new Set(se).add(ee.id)), onEnded: () => {
      re === d && T((re + 1) % n_n.length);
    }, "aria-label": `${ee.title} demo`, "aria-hidden": ie ? void 0 : true, ...{ 0: { className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv ui-19991ni ui-ofcydl ui-wji4o3 ui-g01cxk" }, 4: { className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv ui-19991ni ui-ofcydl ui-wji4o3 ui-1hc1fzr" }, 2: { className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv ui-19991ni ui-ofcydl ui-wji4o3 ui-g01cxk ui-htitgo" }, 6: { className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv ui-19991ni ui-ofcydl ui-wji4o3 ui-1hc1fzr ui-htitgo" }, 1: { className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv ui-19991ni ui-ofcydl ui-wji4o3 ui-g01cxk ui-1vjfegm" }, 5: { className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv ui-19991ni ui-ofcydl ui-wji4o3 ui-1hc1fzr ui-1vjfegm" }, 3: { className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv ui-19991ni ui-ofcydl ui-wji4o3 ui-g01cxk ui-1vjfegm" }, 7: { className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-rsdzbr ui-l1xv1r ui-1ustvz4 ui-1jxq6s ui-yyilfv ui-19991ni ui-ofcydl ui-wji4o3 ui-1hc1fzr ui-1vjfegm" } }[!!oe << 2 | !!ie << 1 | (re === p) << 0] }, ee.id);
  }), e[18] = d, e[19] = a, e[20] = p, e[21] = f, e[22] = S, e[23] = T, e[24] = H) : H = e[24];
  let G;
  e[25] !== $ || e[26] !== H ? (G = t_n("div", { className: "ui-1n2onr6 ui-h8yej3 ui-16wnqx6 ui-wdu8hf ui-t7dq6l ui-cvffhe ui-2lwn1j ui-b3r6kr ui-59yu97 ui-so031l ui-u1s6oc ui-1q0q8m5 ui-17fyfba ui-gfja2r ui-31icev ui-32b0ac ui-141kqco", children: [$, H] }), e[25] = $, e[26] = H, e[27] = G) : G = e[27];
  let q;
  e[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = CRe("h3", { ...gn(sKo.root, rxr.title), children: "Ship better code, faster" }), e[28] = q) : q = e[28];
  let K;
  e[29] !== d || e[30] !== T ? (K = n_n.map((ee, re) => {
    const ie = re === d;
    return t_n("button", { type: "button", "aria-pressed": ie, onClick: () => T(re), ...{ 0: { className: "ui-jyslct ui-78zum5 ui-h8yej3 ui-6s0dn4 ui-1oot3zn ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-1m7fhj7 ui-jbqb8w ui-qjnua1 ui-13ly8rp ui-16b7oty ui-1xlntvz ui-o7x2bt ui-1heor9g ui-1ypdohk ui-ln7xf2 ui-dpxx8g ui-qd5s71 ui-9kvfbb" }, 1: { className: "ui-jyslct ui-78zum5 ui-h8yej3 ui-6s0dn4 ui-1oot3zn ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-1m7fhj7 ui-13ly8rp ui-16b7oty ui-1xlntvz ui-o7x2bt ui-1heor9g ui-1ypdohk ui-ln7xf2 ui-dpxx8g ui-qd5s71 ui-9kvfbb ui-flfp0o" } }[!!ie << 0], children: [CRe(cZd, { icon: ee.icon, size: "md", accentColor: Aoe["--cursor-icon-green-primary"], backgroundColor: Aoe["--cursor-bg-green-secondary"] }), t_n("span", { className: "ui-euugli", children: [CRe("span", { className: "ui-1lliihq ui-1wd3ewq ui-11wthnw ui-20ajya ui-1ja60sm", children: ee.title }), CRe("span", { className: "ui-1lliihq ui-4b2ntj ui-11wthnw ui-1ja60sm", children: ee.description })] })] }, ee.id);
  }), e[29] = d, e[30] = T, e[31] = K) : K = e[31];
  let V;
  e[32] !== K ? (V = CRe("div", { className: "ui-1n2onr6 ui-78zum5 ui-dt5ytf ui-11twubx", children: K }), e[32] = K, e[33] = V) : V = e[33];
  let Y;
  e[34] !== i || e[35] !== O || e[36] !== r || e[37] !== u || e[38] !== l ? (Y = i !== void 0 ? i : r !== void 0 ? CRe(An, { tone: "monochrome", nativeButton: false, render: CRe("a", { href: r }), rootStyle: rxr.ctaFullWidth, rounded: true, size: "lg", variant: "primary", children: O }) : CRe(An, { tone: "monochrome", disabled: u, onClick: l, rootStyle: rxr.ctaFullWidth, rounded: true, size: "lg", variant: "primary", children: O }), e[34] = i, e[35] = O, e[36] = r, e[37] = u, e[38] = l, e[39] = Y) : Y = e[39];
  let J;
  e[40] !== Y ? (J = CRe("div", { className: "ui-yab65l ui-1yxiud8", children: Y }), e[40] = Y, e[41] = J) : J = e[41];
  let Q;
  e[42] !== n || e[43] !== V || e[44] !== J ? (Q = t_n("div", { className: "ui-1n2onr6 ui-78zum5 ui-dt5ytf ui-l56j7k ui-1jlwbde ui-kqs7zo ui-1buc1yo ui-jniwn5 ui-1l37tef ui-gz2kjz", children: [n, q, V, J] }), e[42] = n, e[43] = V, e[44] = J, e[45] = Q) : Q = e[45];
  let te;
  return e[46] !== G || e[47] !== Q ? (te = t_n("div", { "data-component": "managed-agents-get-started-banner", className: "ui-rvj5dj ui-h8yej3 ui-b3r6kr ui-1pkpdue ui-f1vpex ui-cxb6k5 ui-1mkdm3x ui-1um9e8z", children: [G, Q] }), e[46] = G, e[47] = Q, e[48] = te) : te = e[48], te;
}
function ZFy() {
}
function QFy() {
  return /* @__PURE__ */ new Set();
}
var nxr, ixr, n_n, rxr, 