// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MermaidDiagram.js range:14279465..14286762
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.819Z
Pha = L({ "MermaidDiagram.js"() {
  "use strict";
  E(), I_n(), Va(), qu(), OWe = { root: { kVAEAm: "ui-1n2onr6", kzqmXN: "ui-h8yej3", knGrYV: "ui-zx44go", kfSwDN: "ui-1hx0egp", $$css: true }, loading: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kLKAdn: "ui-1avjwpx", kpe85a: "ui-10cfkro", kGO01o: "ui-ab0n8b", kE3dHu: "ui-193t4r6", kMwMTN: "ui-4b2ntj", kGuDYH: "ui-11wthnw", kKX8nH: "ui-1k4tb9n", $$css: true }, error: { kLKAdn: "ui-1t8xvyj", kpe85a: "ui-1jkygx", kGO01o: "ui-usxwy5", kE3dHu: "ui-1o7kk3e", kWkggS: "ui-1xnwcy6", kaIpWk: "ui-1043rbw", k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kOIVth: "ui-ehausa", $$css: true }, errorHeader: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-pkkfsy", kMwMTN: "ui-1jh5svw", k63SB2: "ui-1yl5bsf", kGuDYH: "ui-fc7y3v", $$css: true }, errorIcon: { kGuDYH: "ui-fc7y3v", $$css: true }, errorDetails: { keoZOQ: "ui-1om1abp", $$css: true }, errorDetailsSummary: { kkrTdU: "ui-1ypdohk", kMwMTN: "ui-1d0l12", kGuDYH: "ui-11wthnw", kfSwDN: "ui-87ps6o", kMnn75: "ui-krqix3 ui-1sur9pj", $$css: true }, errorSource: { keoZOQ: "ui-1e66mq1", kLKAdn: "ui-1t8xvyj", kpe85a: "ui-1jkygx", kGO01o: "ui-usxwy5", kE3dHu: "ui-1o7kk3e", kWkggS: "ui-59yu97", kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kLZC3w: "ui-1aeic0j", kWqL5O: "ui-s1s249", kSWEuD: "ui-32b0ac", k26BEO: "ui-141kqco", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-17fyfba", kZ1KPB: "ui-e0pwq", k4WBpm: "ui-19ypqd9", kaZRDh: "ui-1arpupx", kaIpWk: "ui-1e1y6u3", khDVqt: "ui-126k92a", kMv6JI: "ui-1dxl8qv", kGuDYH: "ui-1wm8ruf", kLWn49: "ui-1evy7pa", kXHlph: "ui-w2csxc", kMwMTN: "ui-1wd3ewq", $$css: true }, content: { k1xSpc: "ui-78zum5", kjj79g: "ui-l56j7k", kLKAdn: "ui-13ly8rp", kpe85a: "ui-1xpa7k", kGO01o: "ui-1xlntvz", kE3dHu: "ui-1uhho1l", kGz5aQ: "ui-1l2wm4q", kKiNUR: "ui-ngyayp", kTn8FI: "ui-fwpr6d", k9YE0c: "ui-ulwhhz", konh6h: "ui-60gtn5", kPEr7q: "ui-n4ses", kTUM2a: "ui-16q83f0", $$css: true } }, POh = "a.ui-mermaid-diagram__node-link", MOh = /^[ \t]*click[ \t]+(\S+)[ \t]+([^\n]*)$/gm, DOh = /^(?:href[ \t]+)?"([^"]*)"/, Aha = "https://mermaid-node-link.invalid/", NOh = new URL(Aha).origin, LOh = "http://www.w3.org/2000/svg", ULr = null, Rhi = null, jLr = null, Rha = ["var(--cursor-text-cyan-primary)", "var(--cursor-text-magenta-primary)", "var(--cursor-text-green-primary)", "var(--cursor-text-yellow-primary)", "var(--cursor-text-blue-primary)", "var(--cursor-text-purple-primary)", "var(--cursor-text-orange-primary)", "var(--cursor-text-red-primary)"];
} }), OOh = {};
Sa(OOh, { MermaidCodeBlock: () => QvS });
import { jsx as Vit, jsxs as Mha, Fragment as KvS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as YvS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as FOh, useRef as XvS, useEffect as ZvS } from "./react-runtime/react/esm-index-production.js";
function QvS(t) {
  const e = YvS(49), { content: n, isStreaming: i, copyText: r, onRenderStateChange: s, fit: o } = t, a = i === void 0 ? false : i, l = o === void 0 ? "scroll" : o, [c, u] = FOh(false), [d, h] = FOh(false), p = XvS(void 0);
  let g;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = gn(hNh()), e[0] = g) : g = e[0];
  const f = g;
  let _;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = ar({ rootClass: "ui-code-block", stylexStyles: hca() }), e[1] = _) : _ = e[1];
  const b = _;
  let y;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = ar({ rootClass: "ui-code-block-content", stylexStyles: pca() }), e[2] = y) : y = e[2];
  const S = y;
  let k;
  e[3] !== l ? (k = ar({ rootClass: "ui-code-block-copy-overlay", stylexStyles: [mca(), Dha.copyOverlayGap, l === "contain" ? Dha.copyOverlayPinned : null] }), e[3] = l, e[4] = k) : k = e[4];
  const C = k;
  let T;
  e[5] !== c ? (T = ar({ rootClass: "ui-code-block-copy", stylexStyles: gca(c) }), e[5] = c, e[6] = T) : T = e[6];
  const I = T;
  let A, P;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = () => () => clearTimeout(p.current), P = [], e[7] = A, e[8] = P) : (A = e[7], P = e[8]), ZvS(A, P);
  let M;
  e[9] !== n || e[10] !== r ? (M = () => {
    clearTimeout(p.current), u(true), r?.(n), p.current = setTimeout(() => u(false), 2e3);
  }, e[9] = n, e[10] = r, e[11] = M) : M = e[11];
  const O = M;
  let N;
  e[12] !== s ? (N = (ie) => {
    switch (ie.status) {
      case "loading": {
        s?.({ contentType: "mermaid", state: "attempt" });
        return;
      }
      case "ready": {
        s?.({ contentType: "mermaid", state: "success" });
        return;
      }
      case "error": {
        s?.({ contentType: "mermaid", state: "error" });
        return;
      }
      default:
        return;
    }
  }, e[12] = s, e[13] = N) : N = e[13];
  const U = N;
  let j;
  e[14] !== n || e[15] !== U || e[16] !== a ? (j = Vit(Ahi, { content: n, isStreaming: a, onRenderStateChange: U }), e[14] = n, e[15] = U, e[16] = a, e[17] = j) : j = e[17];
  const $ = j;
  let H;
  e[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (H = Vit(ho, { "aria-label": "Expand diagram", icon: "arrows-expand-simple", onClick: () => h(true), rootStyle: iNr(), size: "sm", variant: "outline" }), e[18] = H) : H = e[18];
  let G;
  e[19] !== c || e[20] !== I || e[21] !== r || e[22] !== O ? (G = r && Vit("div", { className: I.className, "data-copied": c || void 0, style: I.style, children: Vit(YRe, { "aria-label": c ? "Copied" : "Copy code", tone: c ? "success" : void 0, icon: "copy", onPressedChange: (ie) => {
    ie && O();
  }, pressed: c, pressedIcon: "check", rootStyle: iNr(), size: "sm", variant: "outline" }) }), e[19] = c, e[20] = I, e[21] = r, e[22] = O, e[23] = G) : G = e[23];
  let q;
  e[24] !== C.className || e[25] !== C.style || e[26] !== G ? (q = Mha("div", { className: C.className, style: C.style, children: [H, G] }), e[24] = C.className, e[25] = C.style, e[26] = G, e[27] = q) : q = e[27];
  let K;
  e[28] !== $ || e[29] !== l ? (K = l === "contain" ? $ : Vit(xg, { contentStyle: d2h(), direction: "horizontal", scrollbarVisibility: "hover", children: $ }), e[28] = $, e[29] = l, e[30] = K) : K = e[30];
  let V;
  e[31] !== q || e[32] !== K ? (V = Mha("div", { className: S.className, style: S.style, children: [q, K] }), e[31] = q, e[32] = K, e[33] = V) : V = e[33];
  let Y;
  e[34] !== l || e[35] !== V ? (Y = Vit("div", { className: b.className, "data-fit": l, style: b.style, children: V }), e[34] = l, e[35] = V, e[36] = Y) : Y = e[36];
  let J;
  e[37] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (J = () => h(false), e[37] = J) : J = e[37];
  let Q;
  e[38] !== n ? (Q = Vit(Ahi, { content: n, isStreaming: false }), e[38] = n, e[39] = Q) : Q = e[39];
  let te;
  e[40] !== d || e[41] !== Q ? (te = Vit(wLr, { isActive: d, onClose: J, children: Q }), e[40] = d, e[41] = Q, e[42] = te) : te = e[42];
  let ee;
  e[43] !== d || e[44] !== te ? (ee = Vit(Xr, { open: d, onOpenChange: h, "aria-label": "Mermaid Diagram", className: f.className, style: f.style, children: te }), e[43] = d, e[44] = te, e[45] = ee) : ee = e[45];
  let re;
  return e[46] !== Y || e[47] !== ee ? (re = Mha(KvS, { children: [Y, ee] }), e[46] = Y, e[47] = ee, e[48] = re) : re = e[48], re;
}
var Dha, 