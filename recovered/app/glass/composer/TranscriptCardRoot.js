// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardRoot.js range:15086783..15090311
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, bFr, fkt
// wrapper-init: xAS
// hoisted-owner: TranscriptCardRow.js (app-out-vs-workbench-workbench-glass-main-js:2321); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

xAS = L({ "TranscriptCardRoot.js"() {
  "use strict";
  E(), Va(), bFr(), fkt(), srt = { root: { kWkggS: "ui-m93sqd", kaIpWk: "ui-1pkpdue", kVQacm: "ui-b3r6kr", kVAEAm: "ui-1n2onr6", kB7OPa: "ui-9f619", kZKoxP: "ui-g7h5cd", kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kWqL5O: "ui-s1s249", kSWEuD: "ui-32b0ac", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kZ1KPB: "ui-e0pwq", k4WBpm: "ui-19ypqd9", kVAM5u: "ui-1rbfygt", kMwMTN: "ui-1heor9g", kMv6JI: "ui-jb2p0i", kGuDYH: "ui-1qlqyl8", k63SB2: "ui-1pd3egz", kLWn49: "ui-15bjb6t", k9WMMc: "ui-dpxx8g", $$css: true }, rootOutdent: { kUOVxO: "ui-aw8jom", $$css: true }, rootStack: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kGNEyG: "ui-1qjc9v5", k7Eaqz: "ui-euugli", $$css: true }, rootRow: { k1xSpc: "ui-78zum5", kXwgrk: "ui-1q0g3np", kGNEyG: "ui-6s0dn4", kwnvtZ: "ui-ozqiw3 ui-sqi3y8", k7Eaqz: "ui-euugli", k9g6sI: "ui-12h1iku", $$css: true }, rootFill: { kzqmXN: "ui-h8yej3", $$css: true }, rootFillOutdent: { kzqmXN: "ui-1ytpl1m", $$css: true }, rootHug: { kzqmXN: "ui-eq5yr9", ks0D6T: "ui-193iq5w", $$css: true }, rootButton: { kysU6D: "ui-jyslct", kkrTdU: "ui-1ypdohk", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kqGvvJ: "ui-10im51j", kMeerF: "ui-1qgsegg", k3XXqK: "ui-aatb59", kjBf7l: "ui-1uczgqu ui-1725o6r", kInvED: "ui-1hl8ikr", kWkggS: "ui-m93sqd ui-1iuyybk ui-1rbbimo", $$css: true } };
} });
import { jsx as Nva, jsxs as AAS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as RAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function PAS(t) {
  const e = RAS(33);
  let n, i, r, s, o, a, l, c, u, d;
  e[0] !== t ? ({ leading: o, children: r, trailing: d, onClick: a, onContextMenu: l, ariaLabel: i, ariaExpanded: n, rootStyle: u, ref: c, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10]), vjt("TranscriptCard.Row");
  const h = a !== void 0, p = h || void 0, g = h ? void 0 : -1;
  let f;
  e[11] !== h || e[12] !== u ? (f = gn(Lva.root, h ? Lva.interactive : null, u), e[11] = h, e[12] = u, e[13] = f) : f = e[13];
  let _;
  e[14] !== o ? (_ = o != null ? Nva("span", { "data-component": "transcript-card-row-leading", className: "ui-9f619 ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-16bvwqk ui-1a6rlst", children: o }) : null, e[14] = o, e[15] = _) : _ = e[15];
  let b;
  e[16] !== r ? (b = Nva("span", { "data-component": "transcript-card-row-content", className: "ui-1iyjqo2 ui-s83m0k ui-1t1x2f9 ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft", children: r }), e[16] = r, e[17] = b) : b = e[17];
  let y;
  e[18] !== d ? (y = d != null ? Nva("span", { "data-component": "transcript-card-row-trailing", className: "ui-3nfvp2 ui-6s0dn4 ui-2lah0s", children: d }) : null, e[18] = d, e[19] = y) : y = e[19];
  let S;
  return e[20] !== n || e[21] !== i || e[22] !== s || e[23] !== a || e[24] !== l || e[25] !== c || e[26] !== p || e[27] !== g || e[28] !== f || e[29] !== _ || e[30] !== b || e[31] !== y ? (S = AAS("button", { ...s, ref: c, type: "button", "aria-label": i, "aria-expanded": n, "data-component": "transcript-card-row", "data-clickable": p, tabIndex: g, onClick: a, onContextMenu: l, ...f, children: [_, b, y] }), e[20] = n, e[21] = i, e[22] = s, e[23] = a, e[24] = l, e[25] = c, e[26] = p, e[27] = g, e[28] = f, e[29] = _, e[30] = b, e[31] = y, e[32] = S) : S = e[32], S;
}
var Lva, 