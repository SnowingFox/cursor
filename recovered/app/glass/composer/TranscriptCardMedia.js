// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardMedia.js range:15076379..15083230
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, fkt
// wrapper-init: wAS
// hoisted-owner: AgentTranscriptHumanBubble.js (app-out-vs-workbench-workbench-glass-main-js:2319); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

wAS = L({ "TranscriptCardMedia.js"() {
  "use strict";
  E(), Va(), fkt(), Mva = { media: { kmuXW: "ui-2lah0s", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kVQacm: "ui-b3r6kr", kSGwAc: "ui-kh2ocl", $$css: true }, mediaRow: { kIxVMA: "ui-1dcy8l4", kqGeR4: "ui-3n1r3t ui-1x2oorf", ksF3WI: "ui-1a2w583 ui-d123z", kYm2EN: "ui-jppbhk", $$css: true } };
} });
import { jsx as yHh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as CAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function SHh({ interactive: t = false, connectedAbove: e = false, connectedBelow: n = false, hug: i = false, filled: r = false } = {}) {
  return ar({ rootClass: "ui-agent-transcript-human-bubble", stylexStyles: [VY.bubble, VY.bubbleRadius, VY.bubbleLayout, t && VY.bubbleInteractive, e && VY.bubbleConnectedAbove, n && VY.bubbleConnectedBelow, i && VY.bubbleHug, r && VY.bubbleFilled, r && t && VY.bubbleFilledInteractive] });
}
function kHh({ interactive: t = false, connectedAbove: e = false, connectedBelow: n = false, hug: i = false } = {}) {
  return [VY.bubble, VY.bubbleRadius, t && VY.bubbleInteractive, e && VY.bubbleConnectedAbove, n && VY.bubbleConnectedBelow, i && VY.bubbleHug];
}
function TAS({ connectedAbove: t = false, connectedBelow: e = false } = {}) {
  return [VY.bubbleRadius, t && VY.bubbleConnectedAbove, e && VY.bubbleConnectedBelow];
}
function wHh(t) {
  const e = CAS(9), { children: n, interactive: i, connectedAbove: r, connectedBelow: s, hug: o } = t, a = i === void 0 ? false : i, l = r === void 0 ? false : r, c = s === void 0 ? false : s, u = o === void 0 ? false : o, d = l ? "" : void 0, h = c ? "" : void 0, p = u ? "" : void 0;
  let g;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = { 0: { className: "ui-1n2onr6 ui-9f619 ui-t7fyls ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-qz0629 ui-1l23nh7 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-h8yej3 ui-pvyfi4" }, 8: { className: "ui-1n2onr6 ui-9f619 ui-t7fyls ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-h8yej3 ui-pvyfi4 ui-qz0629 ui-1g5a2ak ui-1l23nh7" }, 4: { className: "ui-1n2onr6 ui-9f619 ui-t7fyls ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-qz0629 ui-1l23nh7 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-h8yej3 ui-pvyfi4 ui-y7i79c" }, 12: { className: "ui-1n2onr6 ui-9f619 ui-t7fyls ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-h8yej3 ui-pvyfi4 ui-qz0629 ui-1g5a2ak ui-1l23nh7 ui-y7i79c" }, 2: { className: "ui-1n2onr6 ui-9f619 ui-t7fyls ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-qz0629 ui-1l23nh7 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-h8yej3 ui-pvyfi4 ui-1talola" }, 10: { className: "ui-1n2onr6 ui-9f619 ui-t7fyls ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-h8yej3 ui-pvyfi4 ui-qz0629 ui-1g5a2ak ui-1l23nh7 ui-1talola" }, 6: { className: "ui-1n2onr6 ui-9f619 ui-t7fyls ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-qz0629 ui-1l23nh7 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-h8yej3 ui-pvyfi4 ui-y7i79c ui-1talola" }, 14: { className: "ui-1n2onr6 ui-9f619 ui-t7fyls ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-h8yej3 ui-pvyfi4 ui-qz0629 ui-1g5a2ak ui-1l23nh7 ui-y7i79c ui-1talola" }, 1: { className: "ui-1n2onr6 ui-9f619 ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-qz0629 ui-1l23nh7 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-pvyfi4 ui-eq5yr9 ui-euugli ui-193iq5w ui-8x9d4c" }, 9: { className: "ui-1n2onr6 ui-9f619 ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-pvyfi4 ui-qz0629 ui-1g5a2ak ui-1l23nh7 ui-eq5yr9 ui-euugli ui-193iq5w ui-8x9d4c" }, 5: { className: "ui-1n2onr6 ui-9f619 ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-qz0629 ui-1l23nh7 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-pvyfi4 ui-y7i79c ui-eq5yr9 ui-euugli ui-193iq5w ui-8x9d4c" }, 13: { className: "ui-1n2onr6 ui-9f619 ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-pvyfi4 ui-qz0629 ui-1g5a2ak ui-1l23nh7 ui-y7i79c ui-eq5yr9 ui-euugli ui-193iq5w ui-8x9d4c" }, 3: { className: "ui-1n2onr6 ui-9f619 ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-qz0629 ui-1l23nh7 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-pvyfi4 ui-1talola ui-eq5yr9 ui-euugli ui-193iq5w ui-8x9d4c" }, 11: { className: "ui-1n2onr6 ui-9f619 ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-pvyfi4 ui-qz0629 ui-1g5a2ak ui-1l23nh7 ui-1talola ui-eq5yr9 ui-euugli ui-193iq5w ui-8x9d4c" }, 7: { className: "ui-1n2onr6 ui-9f619 ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-qz0629 ui-1l23nh7 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-pvyfi4 ui-y7i79c ui-1talola ui-eq5yr9 ui-euugli ui-193iq5w ui-8x9d4c" }, 15: { className: "ui-1n2onr6 ui-9f619 ui-uozvy8 ui-13fuv20 ui-byklpi ui-32b0ac ui-vvgp0w ui-1q0q8m5 ui-14p79jd ui-19ypqd9 ui-14n70vg ui-1qu05p9 ui-gv0goc ui-1hx0egp ui-6iuazf ui-78zum5 ui-dt5ytf ui-pvyfi4 ui-qz0629 ui-1g5a2ak ui-1l23nh7 ui-y7i79c ui-1talola ui-eq5yr9 ui-euugli ui-193iq5w ui-8x9d4c" } }, e[0] = g) : g = e[0];
  const f = g[!!a << 3 | !!l << 2 | !!c << 1 | !!u << 0];
  let _;
  e[1] !== n ? (_ = yHh("div", { className: "ui-78zum5 ui-dt5ytf ui-pkkfsy ui-9f619 ui-h8yej3 ui-13ly8rp ui-1xlntvz ui-1o7kk3e ui-1jkygx ui-n99oxs ui-1bcdmom", children: n }), e[1] = n, e[2] = _) : _ = e[2];
  let b;
  return e[3] !== _ || e[4] !== d || e[5] !== h || e[6] !== p || e[7] !== f ? (b = yHh("div", { "data-agent-transcript-human-bubble": "", "data-connected-above": d, "data-connected-below": h, "data-hug": p, ...f, children: _ }), e[3] = _, e[4] = d, e[5] = h, e[6] = p, e[7] = f, e[8] = b) : b = e[8], b;
}
var VY, 