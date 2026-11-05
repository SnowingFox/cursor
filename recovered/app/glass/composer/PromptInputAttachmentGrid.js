// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputAttachmentGrid.js range:17278147..17281584
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, EIa, qu, fd
// wrapper-init: IIa
// hoisted-owner: PromptInputCompactVisible.js (app-out-vs-workbench-workbench-glass-main-js:2918); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

IIa = L({ "PromptInputAttachmentGrid.js"() {
  "use strict";
  E(), Va(), EIa(), qu(), fd(), Dfp = { "ui--default-marker": "ui--default-marker", $$css: true }, m6e = { preview: { "--ui-prompt-input-attachment-tile-width": "ui-r1fuv6", "--ui-prompt-input-attachment-tile-height": "ui-63hrp1", kVAEAm: "ui-1n2onr6", kzqmXN: "ui-1v9gn24", kZKoxP: "ui-19ez2tf", kmuXW: "ui-2lah0s", $$css: true }, badgeRoot: { k1xSpc: "ui-78zum5", kzqmXN: "ui-h8yej3", kZKoxP: "ui-5yr21d", $$css: true }, badgeIndicator: { kSiTet: "ui-g01cxk ui-na0hbv ui-jl3rpq", k1ekBW: "ui-19991ni", kIyJzY: "ui-7pq1vu", kAMwcw: "ui-wji4o3", $$css: true }, grid: { k1xSpc: "ui-78zum5", kwnvtZ: "ui-1a02dak", kOIVth: "ui-ehausa", kLKAdn: "ui-1t8xvyj", kpe85a: "ui-1jkygx", kGO01o: "ui-18d9i69", kE3dHu: "ui-1o7kk3e", $$css: true }, tile: { kVAEAm: "ui-1n2onr6", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kzqmXN: "ui-h8yej3", kZKoxP: "ui-5yr21d", kB7OPa: "ui-9f619", kEafiO: "ui-178xt8z", kWqL5O: "ui-s1s249", kt9PQ7: "ui-so031l", kZ1KPB: "ui-e0pwq", kPef9Z: "ui-13fuv20", kSWEuD: "ui-32b0ac", kfdmCh: "ui-1q0q8m5", k4WBpm: "ui-19ypqd9", kLZC3w: "ui-1sfsec8", k26BEO: "ui-4iup6o", kL6WhQ: "ui-1beuf8l", kaZRDh: "ui-1jucmkn", kIxVMA: "ui-1vb4fzf", ksF3WI: "ui-14gibnr", kYm2EN: "ui-1u51yxl", kqGeR4: "ui-10a2chs", kWkggS: "ui-1xsaq9l", kMwMTN: "ui-19aaqeu", kVQacm: "ui-b3r6kr", $$css: true }, buttonTile: { kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kkrTdU: "ui-1ypdohk", kMv6JI: "ui-jb2p0i", kGuDYH: "ui-1qlqyl8", k63SB2: "ui-1pd3egz", kLWn49: "ui-15bjb6t", $$css: true }, videoTile: { kWkggS: "ui-16tb57e", $$css: true }, video: { kVAEAm: "ui-10l6tqk", kpwlN0: "ui-10a8y8t", kzqmXN: "ui-h8yej3", kZKoxP: "ui-5yr21d", kVIFPx: "ui-l1xv1r", k1xSpc: "ui-1lliihq", $$css: true }, playOverlay: { "--ui-prompt-input-attachment-play-size": "ui-vbrbi7", kVAEAm: "ui-10l6tqk", k87sOh: "ui-wa60dl", kbCHJM: "ui-1nrll8i", kY2c9j: "ui-1vjfegm", k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kzqmXN: "ui-1fxahjc", kZKoxP: "ui-10yevjz", kmuXW: "ui-2lah0s", kIxVMA: "ui-c8ce4q", ksF3WI: "ui-j5toj7", kYm2EN: "ui-16ti9za", kqGeR4: "ui-11hym3f", kWkggS: "ui-3mhq3d", kGVxlE: "ui-1e8dspq", k3aq6I: "ui-11lhmoz", $$css: true }, icon: { kmuXW: "ui-2lah0s", kzqmXN: "ui-1ox8vmk", kZKoxP: "ui-5m6it2", kMwMTN: "ui-1y30pys", $$css: true } }, Nfp = 96, Lfp = 60;
} });
import { jsx as ma1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ga1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function fa1(t) {
  const e = ga1(14);
  let n, i, r;
  e[0] !== t ? ({ children: n, rootStyle: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const { isDynamicIslandActive: s, isExpanded: o, variant: a } = TGe("PromptInput.CompactVisible"), l = a !== "expanded", c = a === "dynamic-island";
  let u;
  e[4] !== l || e[5] !== c || e[6] !== s || e[7] !== o || e[8] !== r ? (u = gn(Ofp, l && !o && Dvi.collapsed, l && o && Dvi.expanded, c && Dvi.dynamicIsland, c && !s && Dvi.dynamicIslandInactive, r), e[4] = l, e[5] = c, e[6] = s, e[7] = o, e[8] = r, e[9] = u) : u = e[9];
  let d;
  return e[10] !== n || e[11] !== i || e[12] !== u ? (d = ma1("span", { ...i, ...u, "data-compact-visible": true, "data-prompt-input-compact-visible-slot": true, children: n }), e[10] = n, e[11] = i, e[12] = u, e[13] = d) : d = e[13], d;
}
var Ofp, Dvi, 