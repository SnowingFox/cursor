// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeaderExpand.js range:15070183..15071951
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, vkt, fd
// wrapper-init: rAS
// hoisted-owner: TranscriptCardHeaderIcon.js (app-out-vs-workbench-workbench-glass-main-js:2314); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

rAS = L({ "TranscriptCardHeaderExpand.js"() {
  "use strict";
  E(), Va(), vkt(), fd(), tmi = { button: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kmuXW: "ui-2lah0s", kzqmXN: "ui-16bvwqk", kZKoxP: "ui-1a6rlst", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-at24cr", koQZXg: "ui-j3b58b", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kMwMTN: "ui-1lbmi28", kWkggS: "ui-jbqb8w", kEafiO: "ui-972fbf", kPef9Z: "ui-1ejq31n", kWqL5O: "ui-gfja2r", kSWEuD: "ui-11pwa6s", kt9PQ7: "ui-1qhh985", kfdmCh: "ui-1sy0etr", kZ1KPB: "ui-yj58a3", k4WBpm: "ui-1b16gh4", kkrTdU: "ui-1ypdohk", kSiTet: "ui-g01cxk ui-1o7uuvo ui-25t5g8 ui-15aqy90", k1ekBW: "ui-19991ni", kIyJzY: "ui-7pq1vu", kAMwcw: "ui-6ekqhr", $$css: true }, buttonOpen: { kSiTet: "ui-1hc1fzr", $$css: true }, chevron: { k1ekBW: "ui-11xpdln", kIyJzY: "ui-7pq1vu", kAMwcw: "ui-6ekqhr", $$css: true }, chevronOpen: { k3aq6I: "ui-1iffjtl", $$css: true } };
} });
import { jsx as sAS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as oAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function aAS(t) {
  const e = oAS(7), { children: n, color: i } = t, r = i === void 0 ? "tertiary" : i;
  _jt("TranscriptCard.HeaderIcon");
  let s;
  e[0] !== r ? (s = gn(vFr.root, r === "primary" ? vFr.primary : r === "secondary" ? vFr.secondary : null), e[0] = r, e[1] = s) : s = e[1];
  const o = s;
  let a;
  return e[2] !== o.className || e[3] !== o.style || e[4] !== n || e[5] !== r ? (a = sAS("span", { className: o.className, "data-component": "transcript-card-header-icon", "data-color": r, style: o.style, children: n }), e[2] = o.className, e[3] = o.style, e[4] = n, e[5] = r, e[6] = a) : a = e[6], a;
}
var vFr, 