// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptActivityGroupSummary.js range:15532014..15536707
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, $LS, HGh
// wrapper-init: eOS
// hoisted-owner: AgentTranscriptTailStatus.js (app-out-vs-workbench-workbench-glass-main-js:2434); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

eOS = L({ "AgentTranscriptActivityGroupSummary.js"() {
  "use strict";
  E(), $LS(), HGh(), ZKh = 0.5, QKh = { headerContainer: { k9g6sI: "ui-12h1iku", $$css: true } }, JKh = QKh.headerContainer;
} });
import { jsx as Dmi, jsxs as tOS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as eYh } from "./react-runtime/react/esm-compiler-runtime-production.js";
function tYh(t) {
  const e = eYh(12), n = t.awaitCountdown, i = n?.vm.blockUntilMs, r = t.loading === true && n !== void 0 && i !== void 0 && i > 0, s = kya(r), o = wya(r, n?.startedAtMs);
  if (t.updatesInPlace === true) {
    const c = t.detail ? `${t.action} ${t.detail}` : t.action;
    let u;
    return e[0] !== c ? (u = { statusText: c, updatesInPlace: true }, e[0] = c, e[1] = u) : u = e[1], u;
  }
  if (r && n) {
    let c;
    e[2] !== n.vm || e[3] !== s || e[4] !== o || e[5] !== t.action || e[6] !== t.detail ? (c = umi({ vm: n.vm, loading: true, nowMs: s, startedAtMs: o }) ?? (t.detail ? `${t.action} ${t.detail}` : t.action), e[2] = n.vm, e[3] = s, e[4] = o, e[5] = t.action, e[6] = t.detail, e[7] = c) : c = e[7];
    let u;
    return e[8] !== c ? (u = { statusText: c, updatesInPlace: true }, e[8] = c, e[9] = u) : u = e[9], u;
  }
  const a = t.detail ? `${t.action} ${t.detail}` : t.action;
  let l;
  return e[10] !== a ? (l = { statusText: a, updatesInPlace: false }, e[10] = a, e[11] = l) : l = e[11], l;
}
function Nmi(t) {
  const e = eYh(32), { status: n } = t, { statusText: i, updatesInPlace: r } = tYh(n), s = n.onActivate !== void 0;
  let o;
  e[0] !== s ? (o = ar({ rootClass: "agent-transcript-tail-status", stylexStyles: s ? [Lmi.tailStatus, Lmi.activatable] : Lmi.tailStatus }), e[0] = s, e[1] = o) : o = e[1];
  const a = o;
  let l;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = ar({ rootClass: "agent-transcript-tail-status-cancel", stylexStyles: Lmi.cancel }), e[2] = l) : l = e[2];
  const c = l;
  let u;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { className: "ui-1c4vz4f ui-dl72j9 ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-1ejq31n ui-11pwa6s ui-1sy0etr ui-1b16gh4 ui-1b4hy2t ui-1ws9gjp ui-1tnzt7h ui-1pjslub ui-jbqb8w ui-1ypdohk ui-ln7xf2 ui-15bjb6t ui-s83m0k ui-euugli ui-1bl94mz ui-1heor9g ui-7gh5u8 ui-4xl6zf ui-9v5kkp ui-1725o6r ui-13iak60" }, e[3] = u) : u = e[3];
  const d = u;
  let h;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = { className: "ui-euugli ui-ln7xf2 ui-15bjb6t" }, e[4] = h) : h = e[4];
  let p;
  e[5] !== n.loading || e[6] !== i || e[7] !== r ? (p = Dmi(GFe, { className: h.className, clipping: "fade", disabled: r, minHoldMs: p6r, shimmer: n.loading, size: "inherit", text: i, textKey: i }), e[5] = n.loading, e[6] = i, e[7] = r, e[8] = p) : p = e[8];
  const g = p;
  let f;
  e[9] !== n ? (f = () => {
    n.onActivate?.();
  }, e[9] = n, e[10] = f) : f = e[10];
  const _ = f, b = s ? 0 : void 0, y = s ? `${i}. Open activity` : void 0;
  let S;
  e[11] !== _ || e[12] !== s ? (S = s ? (A) => {
    A.preventDefault(), _();
  } : void 0, e[11] = _, e[12] = s, e[13] = S) : S = e[13];
  let k;
  e[14] !== _ || e[15] !== s ? (k = s ? (A) => {
    A.target === A.currentTarget && (A.key !== "Enter" && A.key !== " " || (A.preventDefault(), _()));
  } : void 0, e[14] = _, e[15] = s, e[16] = k) : k = e[16];
  let C;
  e[17] !== n || e[18] !== g ? (C = n.onViewOutput ? Dmi(xs, { content: Dmi(ao, { title: "View Details" }), placement: "top", children: Dmi("button", { "aria-label": "View Details", className: d.className, onClick: (A) => {
    A.preventDefault(), A.stopPropagation(), n.onViewOutput?.();
  }, style: d.style, type: "button", children: g }) }) : g, e[17] = n, e[18] = g, e[19] = C) : C = e[19];
  let T;
  e[20] !== n ? (T = n.onCancel ? Dmi("button", { className: c.className, style: c.style, onClick: (A) => {
    A.preventDefault(), A.stopPropagation(), n.onCancel?.();
  }, type: "button", children: "Cancel" }) : null, e[20] = n, e[21] = T) : T = e[21];
  let I;
  return e[22] !== a.className || e[23] !== a.style || e[24] !== n.priority || e[25] !== k || e[26] !== C || e[27] !== T || e[28] !== b || e[29] !== y || e[30] !== S ? (I = tOS("div", { className: a.className, style: a.style, "data-priority": n.priority, role: "status", tabIndex: b, "aria-label": y, onClick: S, onKeyDown: k, children: [C, n.loading && typeof n.lcpTurnKey === "string" ? __lcpView("TurnStatusSuffix", { turnKey: n.lcpTurnKey }) : null, T] }), e[22] = a.className, e[23] = a.style, e[24] = n.priority, e[25] = k, e[26] = C, e[27] = T, e[28] = b, e[29] = y, e[30] = S, e[31] = I) : I = e[31], I;
}
var Lmi, 