// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReadTodosToolCallView.js range:15553714..15556798
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, uae, mYh
// wrapper-init: yOS
// hoisted-owner: AgentTranscriptAskQuestionCard.js (app-out-vs-workbench-workbench-glass-main-js:2438); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var yOS = L({ "ReadTodosToolCallView.js"() {
  "use strict";
  E(), uae(), mYh();
} });
import { jsx as zjt, jsxs as fYh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as vYh } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { Fragment as SOS } from "./react-runtime/react/esm-index-production.js";
function _Yh(t) {
  const e = vYh(10), { answer: n, prompt: i, skipped: r } = t, s = r === void 0 ? false : r;
  let o;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = [Gj.root, Lya.question], e[0] = o) : o = e[0];
  let a;
  e[1] !== i ? (a = zjt(dT, { normalized: true, stylexStyles: o, children: i }), e[1] = i, e[2] = a) : a = e[2];
  let l;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = { 0: { className: "ui-104kibb ui-1gzmk7r ui-1ua5tub ui-b3r6kr ui-1wd3ewq ui-1hx0egp ui-126k92a ui-13faqbe" }, 1: { className: "ui-104kibb ui-1gzmk7r ui-1ua5tub ui-b3r6kr ui-1hx0egp ui-126k92a ui-13faqbe ui-19aaqeu ui-1k4tb9n" } }, e[3] = l) : l = e[3];
  const c = l[!!s << 0];
  let u;
  e[4] !== n || e[5] !== c ? (u = zjt("div", { ...c, children: n }), e[4] = n, e[5] = c, e[6] = u) : u = e[6];
  let d;
  return e[7] !== a || e[8] !== u ? (d = fYh("div", { className: "ui-78zum5 ui-dt5ytf ui-11twubx ui-euugli", children: [a, u] }), e[7] = a, e[8] = u, e[9] = d) : d = e[9], d;
}
function Nya(t) {
  const e = vYh(24), { variant: n, items: i, skippedQuestionPrompts: r, skipTooltip: s } = t;
  let o, a, l, c, u, d, h, p, g;
  if (e[0] !== i || e[1] !== s || e[2] !== r || e[3] !== n) {
    g = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    e: {
      const y = n === "skipped" ? (r === void 0 ? [] : r).map(COS) : i.map(wOS);
      if (y.length === 0) {
        g = null;
        break e;
      }
      a = uh.Root, d = "agent-transcript-ask-question-card", h = "bubble", p = n === "skipped" ? s : void 0, o = uh.Content, l = "none", c = Lya.content, u = y.map(kOS);
    }
    e[0] = i, e[1] = s, e[2] = r, e[3] = n, e[4] = o, e[5] = a, e[6] = l, e[7] = c, e[8] = u, e[9] = d, e[10] = h, e[11] = p, e[12] = g;
  } else o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], d = e[9], h = e[10], p = e[11], g = e[12];
  if (g !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return g;
  let f;
  e[13] !== o || e[14] !== l || e[15] !== c || e[16] !== u ? (f = zjt(o, { inset: l, rootStyle: c, children: u }), e[13] = o, e[14] = l, e[15] = c, e[16] = u, e[17] = f) : f = e[17];
  let _;
  return e[18] !== a || e[19] !== d || e[20] !== h || e[21] !== p || e[22] !== f ? (_ = zjt(a, { dataTestId: d, surface: h, title: p, children: f }), e[18] = a, e[19] = d, e[20] = h, e[21] = p, e[22] = f, e[23] = _) : _ = e[23], _;
}
function kOS(t, e) {
  return fYh(SOS, { children: [e > 0 ? zjt(BFe, { spacing: "none" }) : null, t] }, t.key);
}
function wOS(t) {
  return zjt(_Yh, { prompt: t.questionPrompt, answer: t.selectedAnswers.join(", ") }, t.questionPrompt);
}
function COS(t) {
  return zjt(_Yh, { prompt: t, skipped: true, answer: "Skipped" }, t);
}
var Lya, 