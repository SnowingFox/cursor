// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptHumanBubble.js range:15083230..15086783
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, qu
// wrapper-init: bFr
// hoisted-owner: TranscriptCardRoot.js (app-out-vs-workbench-workbench-glass-main-js:2320); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

bFr = L({ "AgentTranscriptHumanBubble.js"() {
  "use strict";
  E(), qu(), VY = { bubble: { kVAEAm: "ui-1n2onr6", kB7OPa: "ui-9f619", k7Eaqz: "ui-t7fyls", kEafiO: "ui-uozvy8", kPef9Z: "ui-13fuv20", kWqL5O: "ui-byklpi", kSWEuD: "ui-32b0ac", kt9PQ7: "ui-vvgp0w", kfdmCh: "ui-1q0q8m5", kZ1KPB: "ui-14p79jd", k4WBpm: "ui-19ypqd9", kVAM5u: "ui-qz0629 ui-1l23nh7", kWkggS: "ui-14n70vg", kGVxlE: "ui-1qu05p9", k6WDB: "ui-gv0goc", kfSwDN: "ui-1hx0egp", $$css: true }, bubbleLayout: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kzqmXN: "ui-h8yej3", kSGwAc: "ui-pvyfi4", $$css: true }, bubbleInteractive: { kVAM5u: "ui-qz0629 ui-1g5a2ak ui-1l23nh7", $$css: true }, bubbleFilled: { kVAM5u: "ui-9r1u3d ui-1l23nh7", kWkggS: "ui-x9tvmx", kGVxlE: "ui-1gnnqk1", k6WDB: "ui-1t853zo", $$css: true }, bubbleFilledInteractive: { kWkggS: "ui-x9tvmx ui-10wwgcw", $$css: true }, bubbleRadius: { kaIpWk: "ui-6iuazf", $$css: true }, bubbleConnectedAbove: { ksF3WI: "ui-y7i79c", $$css: true }, bubbleConnectedBelow: { kYm2EN: "ui-1talola", $$css: true }, bubbleHug: { kzqmXN: "ui-eq5yr9", k7Eaqz: "ui-euugli", ks0D6T: "ui-193iq5w", koQZXg: "ui-8x9d4c", $$css: true }, content: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kOIVth: "ui-pkkfsy", kB7OPa: "ui-9f619", kzqmXN: "ui-h8yej3", kLKAdn: "ui-13ly8rp", kGO01o: "ui-1xlntvz", kE3dHu: "ui-1o7kk3e", kpe85a: "ui-1jkygx", kGuDYH: "ui-n99oxs", kLWn49: "ui-1bcdmom", $$css: true } };
} });
import { jsx as Dva } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as EAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function IAS(t) {
  const e = EAS(30), { children: n, outdent: i, layout: r, width: s, surface: o, rootStyle: a, onClick: l, ariaLabel: c, title: u, dataTestId: d, dataAttributes: h } = t, p = i === void 0 ? true : i, g = r === void 0 ? "stack" : r, f = s === void 0 ? "fill" : s, _ = o === void 0 ? "card" : o;
  let b;
  e[0] !== g ? (b = { layout: g }, e[0] = g, e[1] = b) : b = e[1];
  const y = b, S = l !== void 0, k = _ === "bubble", C = k && p && f === "fill";
  let T;
  e[2] !== C || e[3] !== k || e[4] !== S || e[5] !== g || e[6] !== p || e[7] !== a || e[8] !== f ? (T = gn(srt.root, k ? kHh() : null, p ? srt.rootOutdent : null, g === "row" ? srt.rootRow : srt.rootStack, f === "hug" ? srt.rootHug : srt.rootFill, C ? srt.rootFillOutdent : null, S ? srt.rootButton : null, a), e[2] = C, e[3] = k, e[4] = S, e[5] = g, e[6] = p, e[7] = a, e[8] = f, e[9] = T) : T = e[9];
  const I = T;
  let A;
  if (e[10] !== h) {
    if (A = {}, h) for (const [U, j] of Object.entries(h)) j !== void 0 && (A[U] = j);
    e[10] = h, e[11] = A;
  } else A = e[11];
  let P;
  e[12] !== I.className || e[13] !== I.style || e[14] !== d || e[15] !== A || e[16] !== g || e[17] !== _ || e[18] !== u || e[19] !== f ? (P = { className: I.className, "data-component": "transcript-card-root", "data-layout": g, "data-width": f, "data-surface": _, "data-testid": d, style: I.style, title: u, ...A }, e[12] = I.className, e[13] = I.style, e[14] = d, e[15] = A, e[16] = g, e[17] = _, e[18] = u, e[19] = f, e[20] = P) : P = e[20];
  const M = P;
  let O;
  e[21] !== c || e[22] !== n || e[23] !== S || e[24] !== l || e[25] !== M ? (O = S ? Dva("button", { type: "button", "aria-label": c, onClick: l, ...M, children: n }) : Dva("div", { ...M, children: n }), e[21] = c, e[22] = n, e[23] = S, e[24] = l, e[25] = M, e[26] = O) : O = e[26];
  let N;
  return e[27] !== y || e[28] !== O ? (N = Dva(Iva.Provider, { value: y, children: O }), e[27] = y, e[28] = O, e[29] = N) : N = e[29], N;
}
var srt, 