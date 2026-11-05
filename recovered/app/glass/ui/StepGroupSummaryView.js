// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StepGroupSummaryView.js range:15216090..15218747
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.029Z
HGh = L({ "StepGroupSummaryView.js"() {
  "use strict";
  E(), Va(), AO(), e_a(), w_a(), CGh(), HFe(), I_a(), Lz(), MGh(), qu(), c0e(), f2(), FGh = { base: { $$css: true } }, zFr = { base: { kMwMTN: "ui-1heor9g", $$css: true }, collapsibleHeaderInset: { kZCmMZ: "ui-1arelyf", kwRFfy: "ui-6926ek", $$css: true }, loading: { kMwMTN: "ui-1heor9g", kvCCvv: "ui-2hkbg", kCBiRr: "ui-1dn2el2", $$css: true } }, VFr = { base: { kLKAdn: "ui-9ugnww", kkrTdU: "ui-1ypdohk", $$css: true }, scrollable: { kMwMTN: "ui-1heor9g", $$css: true }, scrollableViewportMask: { kX1K2I: "ui-1kr6vls", kAExgp: "ui-u29vvf", $$css: true } }, BGh = { base: { kMwMTN: "ui-1heor9g", $$css: true } }, UGh = { base: { k1xSpc: "ui-3nfvp2", kOIVth: "ui-11twubx", koQZXg: "ui-v5sl7z", kcqcaj: "ui-ss6m8b", $$css: true } }, jGh = { base: { kMwMTN: "ui-t1zr94", $$css: true } }, $Gh = { base: { kMwMTN: "ui-r243le", $$css: true } }, R_a = 144;
} });
import { jsxs as J2S, jsx as KFr } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as ePS, useRef as tPS } from "./react-runtime/react/esm-index-production.js";
function P_a({ steps: t, loading: e = false, showSimulatedThinking: n = false, simulatedThinkingMessage: i, simulatedThinkingDetails: r, showLoadingPreview: s, showFileChangeStats: o = true, options: a, stepGap: l = 6, renderStep: c }) {
  const { conversationDensity: u } = uR();
  let h = ePS(() => QWh(t, a), [t, a]);
  const p = tPS(h);
  h.length > 0 ? p.current = h : e && p.current.length > 0 && (h = p.current);
  const g = h.length - 1, f = h[g], _ = f?.type === "group" || f?.type === "browser-group" || f?.type === "waiting-group", b = n && _, y = n && !_;
  return J2S("div", { style: { display: "flex", flexDirection: "column", gap: l, "--step-gap": `${l}px`, "--ui-collapsible-content-gap": `${l}px`, "--conversation-font-size": "var(--conversation-tool-font-size)", "--card-border-color": "var(--cursor-stroke-secondary)", "--conversation-surface-border-radius": "var(--cursor-radius-xl)" }, children: [h.map((S, k) => {
    if (S.type === "group" || S.type === "browser-group" || S.type === "waiting-group") {
      const T = e && k === g;
      return KFr(X2S, { group: S.group, loading: T, showFileChangeStats: o, showSimulatedThinking: b && k === g, simulatedThinkingMessage: i, simulatedThinkingDetails: r, showLoadingPreview: s, renderStep: c }, `group-${S.startIndex}`);
    }
    const C = S;
    return KFr("div", { style: { paddingInline: wGh(C.step, u) }, children: c(C.step, C.stepIndex) }, `step-${C.stepIndex}`);
  }), y && KFr("div", { style: { paddingInline: Tjt }, children: KFr(IFr, { message: i, details: r }) })] });
}
