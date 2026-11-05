// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputTipTapReadOnly.js range:15929066..15935986
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, v_e, cNr, jXh, u4r, mf, wQh, Pep, lGe, K1n, qu
// wrapper-init: Nep
// hoisted-owner: UserMessageBox.js (app-out-vs-workbench-workbench-glass-main-js:2549); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Nep = L({ "PromptInputTipTapReadOnly.js"() {
  "use strict";
  E(), v_e(), cNr(), jXh(), u4r(), mf(), wQh(), Pep(), lGe(), K1n(), qu(), Dep = { root: { kVAEAm: "ui-1n2onr6", kB7OPa: "ui-9f619", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", k7Eaqz: "ui-euugli", kzqmXN: "ui-h8yej3", ks0D6T: "ui-193iq5w", k1xSpc: "ui-1lliihq ui-880zt1", kGNEyG: "ui-xj8w0f", khDVqt: "ui-sm89cj", kRjxab: "ui-1sv9zbw", k5snZI: "ui-6ymzhe", kmZExJ: "ui-1jo41r8", kuMEO4: "ui-1x4lnlc", kQZ5rw: "ui-sr8ihg", kugqUs: "ui-1c10ra7", kTCzNM: "ui-6uh7ae", kVeWk8: "ui-1r93fqe", kLApEV: "ui-5tzr1x", kpHEKb: "ui-kqkpty", kbpjgQ: "ui-1xnqh3", kk30Ms: "ui-epom9e", k9nQ2g: "ui-1mu90nf", k8jvs2: "ui-84occm", kjMNlz: "ui-12tipwd", kaD4FP: "ui-xa5vs1", kzI5JZ: "ui-umo4fp", kQXoKf: "ui-1iyb17t", kAgekp: "ui-12eu45j", kDYUIR: "ui-11gsd7i", k7gSPv: "ui-1k1qsat", kwnTn8: "ui-yg8d7j", $$css: true } };
} });
import { jsx as wrt, jsxs as FBS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Lep } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as BBS } from "./react-runtime/react/esm-index-production.js";
function UBS(t = {}) {
  return [uGe.root, TAS(t), t.hug === true && uGe.rootHug];
}
function jBS(t = {}) {
  return [kHh({ interactive: true, ...t }), uGe.card];
}
function $BS() {
  return uGe.content;
}
function HBS(t) {
  return [uGe.text, t && uGe.textFallback];
}
function WBS() {
  return uGe.richText;
}
function GBS() {
  return uGe.toggle;
}
function qBS(t) {
  const e = Lep(55), { message: n, connectedAbove: i, connectedBelow: r, hug: s } = t, o = i === void 0 ? false : i, a = r === void 0 ? false : r, l = s === void 0 ? false : s, [c, u] = BBS(false), { ref: d, isOverflowing: h } = l4r(Oep), p = n.richText && K1a(n.richText) ? n.richText : void 0;
  let g;
  e[0] !== n.fallback ? (g = KBS(n.fallback), e[0] = n.fallback, e[1] = g) : g = e[1];
  const f = g;
  let _;
  e[2] !== n.text ? (_ = n.text.trim().length > 0 ? TFS(n.text) : void 0, e[2] = n.text, e[3] = _) : _ = e[3];
  const b = _, y = n.fallback?.kind === "tooLong", S = y ? void 0 : p, k = y ? void 0 : b;
  let C;
  e[4] !== n.attachments ? (C = n.attachments ?? [], e[4] = n.attachments, e[5] = C) : C = e[5];
  const T = C, { userMessageActions: I } = uR(), A = I?.onOpenAttachment, P = !!(S || k || f);
  if (!P && T.length === 0) return null;
  const M = h && !c;
  let O;
  e[6] !== o || e[7] !== a || e[8] !== l ? (O = gn(UBS({ connectedAbove: o, connectedBelow: a, hug: l })), e[6] = o, e[7] = a, e[8] = l, e[9] = O) : O = e[9];
  const N = O;
  let U;
  e[10] !== o || e[11] !== a || e[12] !== l ? (U = gn(jBS({ connectedAbove: o, connectedBelow: a, hug: l })), e[10] = o, e[11] = a, e[12] = l, e[13] = U) : U = e[13];
  const j = U;
  let $;
  e[14] !== M ? ($ = gn($BS(), M && uGe.contentFaded), e[14] = M, e[15] = $) : $ = e[15];
  const H = $;
  let G;
  e[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (G = gn(GBS()), e[16] = G) : G = e[16];
  const q = G, K = !k && !S;
  let V;
  e[17] !== f || e[18] !== k || e[19] !== S || e[20] !== K ? (V = wrt(VBS, { fallbackText: f, plainText: k, richText: S, isFallback: K }), e[17] = f, e[18] = k, e[19] = S, e[20] = K, e[21] = V) : V = e[21];
  const Y = V, J = o ? "" : void 0, Q = a ? "" : void 0, te = l ? "" : void 0;
  let ee;
  e[22] !== n.sender ? (ee = n.sender !== void 0 && wrt(rSa, { sender: n.sender }), e[22] = n.sender, e[23] = ee) : ee = e[23];
  let re;
  e[24] !== T || e[25] !== A ? (re = A === void 0 ? void 0 : (ae) => A(T, ae), e[24] = T, e[25] = A, e[26] = re) : re = e[26];
  let ie;
  e[27] !== T || e[28] !== re ? (ie = wrt(iSa, { attachments: T, onOpen: re }), e[27] = T, e[28] = re, e[29] = ie) : ie = e[29];
  let oe;
  e[30] !== H || e[31] !== d || e[32] !== P || e[33] !== c || e[34] !== Y || e[35] !== M ? (oe = P && (c ? wrt(xg, { maxHeight: Fep, allowScrollChaining: true, topFadeSize: 16, bottomFadeSize: 16, children: Y }) : wrt("div", { className: H.className, style: H.style, "data-faded": M ? "true" : void 0, ref: d, children: Y })), e[30] = H, e[31] = d, e[32] = P, e[33] = c, e[34] = Y, e[35] = M, e[36] = oe) : oe = e[36];
  let se;
  e[37] !== c || e[38] !== h || e[39] !== q ? (se = h && wrt(An, { className: q.className, style: q.style, variant: "text", size: "sm", onClick: () => u(zBS), children: c ? "Show less" : "Show more" }), e[37] = c, e[38] = h, e[39] = q, e[40] = se) : se = e[40];
  let le;
  e[41] !== j.className || e[42] !== j.style || e[43] !== J || e[44] !== Q || e[45] !== te || e[46] !== ee || e[47] !== ie || e[48] !== oe || e[49] !== se ? (le = FBS("div", { className: j.className, "data-agent-transcript-human-bubble": "", "data-connected-above": J, "data-connected-below": Q, "data-hug": te, style: j.style, children: [ee, ie, oe, se] }), e[41] = j.className, e[42] = j.style, e[43] = J, e[44] = Q, e[45] = te, e[46] = ee, e[47] = ie, e[48] = oe, e[49] = se, e[50] = le) : le = e[50];
  let ce;
  return e[51] !== N.className || e[52] !== N.style || e[53] !== le ? (ce = wrt("div", { className: N.className, style: N.style, children: le }), e[51] = N.className, e[52] = N.style, e[53] = le, e[54] = ce) : ce = e[54], ce;
}
function zBS(t) {
  return !t;
}
function VBS(t) {
  const e = Lep(14), { fallbackText: n, isFallback: i, plainText: r, richText: s } = t, { userMessageActions: o } = uR();
  if (s) {
    let h;
    e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = gn(WBS()), e[0] = h) : h = e[0];
    const p = h, g = o?.onMentionChipAction, f = o?.onCommandChipClick, _ = o?.isCommandChipClickable;
    let b;
    return e[1] !== s || e[2] !== p.className || e[3] !== g || e[4] !== f || e[5] !== _ ? (b = wrt(qgi, { className: p.className, content: s, onMentionChipAction: g, onCommandChipClick: f, isCommandChipClickable: _ }), e[1] = s, e[2] = p.className, e[3] = g, e[4] = f, e[5] = _, e[6] = b) : b = e[6], b;
  }
  let a;
  e[7] !== i ? (a = gn(HBS(i)), e[7] = i, e[8] = a) : a = e[8];
  const l = a, c = i ? "true" : void 0, u = r ?? n;
  let d;
  return e[9] !== c || e[10] !== u || e[11] !== l.className || e[12] !== l.style ? (d = wrt("div", { className: l.className, style: l.style, "data-fallback": c, children: u }), e[9] = c, e[10] = u, e[11] = l.className, e[12] = l.style, e[13] = d) : d = e[13], d;
}
function KBS(t) {
  switch (t?.kind) {
    case void 0:
      return;
    case "empty":
      return "Empty message...";
    case "tooLong":
      return "Message is too long to display";
    case "images":
      return `Using ${t.count === 1 ? "image" : `${t.count} images`}`;
    case "videos":
      return `Using ${t.count === 1 ? "video" : `${t.count} videos`}`;
    case "terminalSelections":
      return "Using terminal selections";
    default: {
      const e = t;
      throw new Error(`Unhandled user message fallback: ${e}`);
    }
  }
}
var uGe, Oep, Fep, 