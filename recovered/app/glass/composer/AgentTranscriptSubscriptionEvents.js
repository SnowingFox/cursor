// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptSubscriptionEvents.js range:15979904..15981555
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, etp, ntp, itp, dSa, AO, O9r, fd, c0e
// wrapper-init: atp
// hoisted-owner: AgentTranscriptTimeBoundary.js (app-out-vs-workbench-workbench-glass-main-js:2563); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

atp = L({ "AgentTranscriptSubscriptionEvents.js"() {
  "use strict";
  E(), Va(), etp(), ntp(), itp(), dSa(), AO(), O9r(), fd(), c0e(), F9r = { tightStack: { kOIVth: "ui-lwqa1o", $$css: true }, botMark: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kmuXW: "ui-2lah0s", kLKAdn: "ui-exx8yu", kpe85a: "ui-1jg1sa", kGO01o: "ui-18d9i69", kE3dHu: "ui-1rplcre", kIxVMA: "ui-c8ce4q", ksF3WI: "ui-j5toj7", kYm2EN: "ui-16ti9za", kqGeR4: "ui-11hym3f", kGuDYH: "ui-y5h43f", kLWn49: "ui-19ji09o", khDVqt: "ui-uxw1ft", khiITx: "ui-vmahel", kTUp5R: "ui-lh3980", $$css: true }, instantCollapse: { kaUvHv: "ui-14tz7v1", knUCKd: "ui-f45s7j", $$css: true } };
} });
import { jsx as ltp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as z8S } from "./react-runtime/react/esm-compiler-runtime-production.js";
function V8S(t, e) {
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
}
function ctp(t, e = {}) {
  const n = new Date(t), i = new Date(e.nowMs ?? Date.now()), r = e.locale, s = new Intl.DateTimeFormat(r, { hour: "numeric", minute: "2-digit" }).format(n);
  return V8S(n, i) ? `Today ${s}` : new Intl.DateTimeFormat(r, { dateStyle: "medium", timeStyle: "short" }).format(n);
}
function utp(t) {
  const e = z8S(4), { row: n } = t;
  let i;
  e[0] !== n.timestampMs ? (i = ctp(n.timestampMs), e[0] = n.timestampMs, e[1] = i) : i = e[1];
  let r;
  return e[2] !== i ? (r = ltp("div", { className: "ui-euugli ui-j9xw9b ui-9f619 ui-y3jwiz ui-2b8uid", children: ltp(nn, { as: "span", color: "quaternary", size: "md", children: i }) }), e[2] = i, e[3] = r) : r = e[3], r;
}
var cka, 