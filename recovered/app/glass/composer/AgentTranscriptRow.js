// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptRow.js range:16014795..16016737
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, AO, gSa, uae, YBS, Hmi, bFr, xXh, I8S, atp, $6r, uka, qya, oka, pka, Stp, vba, Vya, Ygi, qu
// wrapper-init: Ctp
// hoisted-owner: auto-routing-placement.js (app-out-vs-workbench-workbench-glass-main-js:2568); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Ctp = L({ "AgentTranscriptRow.js"() {
  "use strict";
  E(), Va(), AO(), gSa(), uae(), YBS(), Hmi(), bFr(), xXh(), I8S(), atp(), $6r(), uka(), qya(), oka(), pka(), Stp(), vba(), Vya(), Ygi(), qu(), QFe = { row: { k7Eaqz: "ui-euugli", $$css: true }, rowInset: { kg3NbH: "ui-198po50", $$css: true }, rowMarkdown: { kMwMTN: "ui-1heor9g", $$css: true }, humanOpposedMessage: { koQZXg: "ui-j2ki9f", $$css: true }, sentMessageBubbleConnectedAbove: { kIxVMA: "ui-1njmyyh", $$css: true }, sentMessageBubbleConnectedBelow: { kqGeR4: "ui-famn59", $$css: true }, sentMessageBubbleInActionsLine: { km5ZXQ: "ui-1yf7rl7", ks0D6T: "ui-8sagbx", kmuXW: "ui-2lah0s", $$css: true }, sentMessageBubble: { kzqmXN: "ui-eq5yr9", kWkggS: "ui-1a2cwn6", kaIpWk: "ui-1nrqswy", kEafiO: "ui-uozvy8", kPef9Z: "ui-13fuv20", kLZC3w: "ui-1aeic0j", kWqL5O: "ui-byklpi", kSWEuD: "ui-32b0ac", k26BEO: "ui-141kqco", kt9PQ7: "ui-vvgp0w", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-17fyfba", kZ1KPB: "ui-14p79jd", k4WBpm: "ui-19ypqd9", kaZRDh: "ui-1arpupx", kGVxlE: "ui-e8b6fs", kLKAdn: "ui-13ly8rp", kpe85a: "ui-1jkygx", kGO01o: "ui-1xlntvz", kE3dHu: "ui-1o7kk3e", koQZXg: "ui-1wt8hlc", km5ZXQ: "ui-w8v1rk", $$css: true }, toolRowContentGap: { "--ui-collapsible-content-gap": "ui-1y2xu63", $$css: true }, toolRowCardOutdent: { "--ui-tool-call-card-outdent": "ui-ncnlsq", $$css: true } };
} });
function Ttp({ rows: t, getTranscriptRow: e, getRoutedLabel: n }) {
  for (let i = t.length - 1; i >= 0; i -= 1) {
    const r = e(t[i]);
    if (r === void 0 || r.kind !== "human" || Hhe(r) || _0e(r)) continue;
    const s = r.sourceIds[0];
    if (s === void 0) return;
    const o = n(s);
    return o === void 0 || o.length === 0 ? void 0 : { anchorIndex: i, humanSourceId: s, label: o };
  }
}
function Etp(t) {
  const e = /* @__PURE__ */ new Map();
  for (const [n, i] of t) {
    const { routedModelLabel: r, ...s } = i;
    Object.keys(s).length !== 0 && e.set(n, s);
  }
  return e;
}
