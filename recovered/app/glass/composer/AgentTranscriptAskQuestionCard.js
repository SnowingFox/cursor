// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptAskQuestionCard.js range:15556798..15559937
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Lz, P7, u0e, efa
// wrapper-init: bYh
// hoisted-owner: ProgressBar.js (app-out-vs-workbench-workbench-glass-main-js:2439); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

bYh = L({ "AgentTranscriptAskQuestionCard.js"() {
  "use strict";
  E(), Lz(), P7(), u0e(), efa(), Lya = { content: { kLKAdn: "ui-1t8xvyj", kpe85a: "ui-1jkygx", kGO01o: "ui-2lprc", kE3dHu: "ui-1o7kk3e", kOIVth: "ui-1oot3zn", kGuDYH: "ui-n99oxs", $$css: true }, question: { k63SB2: "ui-1yl5bsf", kMwMTN: "ui-19aaqeu", k7Eaqz: "ui-euugli", kHjlTd: "ui-j0a0fe", kTgw9: "ui-13faqbe", $$css: true } };
} });
import { jsx as G6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
function TOS(t) {
  switch (t) {
    case "neutral":
      return iJ.fillColorNeutral;
    case "foreground":
      return iJ.fillColorForeground;
    case "secondary":
      return iJ.fillColorSecondary;
    case "primary":
      return iJ.fillColorPrimary;
    case "yellow":
      return iJ.fillColorYellow;
    case "red":
      return iJ.fillColorRed;
  }
}
function EOS(t) {
  switch (t) {
    case "primary":
      return iJ.segmentColorPrimary;
    case "blue":
      return iJ.segmentColorBlue;
    case "yellow":
      return iJ.segmentColorYellow;
    case "green":
      return iJ.segmentColorGreen;
    case "magenta":
      return iJ.segmentColorMagenta;
    case "red":
      return iJ.segmentColorRed;
    case "cyan":
      return iJ.segmentColorCyan;
    case "orange":
      return iJ.segmentColorOrange;
  }
}
function IOS({ value: t = 0, color: e = "primary", indeterminate: n = false, segments: i, fillStyle: r, className: s, style: o, ref: a, variant: l, size: c, ...u }) {
  if (i && i.length > 0) {
    const g = i.reduce((S, k) => S + k.value, 0), f = Math.min(1, Math.max(0, g)), _ = { className: "ui-h8yej3 ui-wbbb81 ui-6ikm8r ui-10wlt62 ui-1n2onr6 ui-1bl94mz ui-1cpjm7i ui-1hmns74 ui-2hztxu ui-1y3wzot ui-1682cnc ui-1rmj1tg ui-szcg87 ui-ytzyjz ui-xyica1 ui-78zum5 ui-1qjc9v5 ui-137clkk ui-59yu97 ui-15ozc13" };
    let b = 0;
    const y = i.map((S) => {
      const k = Math.min(1, Math.max(0, S.value));
      if (k <= 0) return null;
      const C = `${S.color}-${b}-${k}`;
      b += k;
      const T = gn(iJ.segment, EOS(S.color));
      return G6r("div", { className: ri("ui-progress-bar-segment", T.className), "data-color": S.color, style: { ...T.style, flexGrow: k }, title: S.label }, C);
    });
    return G6r(SSn, { ref: a, ...u, value: Math.round(f * 100), className: ri("ui-progress", _.className, "ui-progress-bar", "ui-progress-bar--segmented", s), style: { ..._.style, ...o }, children: y });
  }
  const d = Math.min(1, Math.max(0, t)), h = { className: "ui-h8yej3 ui-wbbb81 ui-6ikm8r ui-10wlt62 ui-1n2onr6 ui-1bl94mz ui-1cpjm7i ui-1hmns74 ui-2hztxu ui-1y3wzot ui-1682cnc ui-1rmj1tg ui-szcg87 ui-ytzyjz ui-xyica1" }, p = gn(iJ.fill, n && iJ.fillIndeterminate, TOS(e), r);
  return G6r(SSn, { ref: a, ...u, value: n ? null : Math.round(d * 100), "data-color": e, "aria-busy": n || void 0, className: ri("ui-progress", h.className, "ui-progress-bar", n && "ui-progress-bar--indeterminate", s), style: { ...h.style, ...o }, children: G6r(vga, { className: ri("ui-progress-bar-fill", p.className), style: n ? p.style : { ...p.style, width: "100%", transform: `translateX(${(d - 1) * 100}%)` } }) });
}
var iJ, 