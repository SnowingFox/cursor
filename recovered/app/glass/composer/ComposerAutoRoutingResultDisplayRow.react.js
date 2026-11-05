// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerAutoRoutingResultDisplayRow.react.js range:30956849..30958329
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, daw
// wrapper-init: Cwf
// hoisted-owner: worktreeSetupTypes.js (app-out-vs-workbench-workbench-glass-main-js:5609); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var Cwf = L({ "ComposerAutoRoutingResultDisplayRow.react.js"() {
  "use strict";
  E(), daw();
} });
function Twf(t, e) {
  return e === "failed" ? Rwf[t] : e === "running" ? xwf[t] : Awf[t];
}
function vaw() {
  return { phases: [{ phase: "creatingWorktree", startedAt: Date.now() }], currentPhase: "creatingWorktree" };
}
function _aw(t, e) {
  const n = Date.now();
  return { phases: [...t.phases.map((r) => r.phase === t.currentPhase && !r.completedAt ? { ...r, completedAt: n } : r), { phase: e, startedAt: n }], currentPhase: e };
}
function $Ml(t, e) {
  const n = t.phases.find((i) => i.phase === e);
  return n ? n.completedAt !== void 0 ? "completed" : "running" : "pending";
}
function Ewf(t, e = Date.now()) {
  if (t.completedAt === void 0) return PPi({ startTimeMs: t.startedAt, nowMs: e });
  const n = t.completedAt - t.startedAt;
  if (n < 1e3) return;
  const i = Math.round(n / 1e3);
  if (i < 60) return `${i}s`;
  const r = Math.floor(i / 60), s = i % 60;
  return s > 0 ? `${r}m ${s}s` : `${r}m`;
}
function HMl(t, e, n) {
  const i = Date.now(), r = t.phases.map((o) => {
    const a = o.phase === t.currentPhase, l = e === "failed" && a && !o.completedAt;
    return { ...o, completedAt: o.completedAt ?? i, ...l ? { failed: true } : {} };
  });
  return { type: "worktree-creation", startedAt: r[0]?.startedAt ?? i, completedAt: i, outcome: e, phases: r, failureMessage: n?.failureMessage, scriptOutput: n?.scriptOutput };
}
var Iwf, xwf, Awf, Rwf, Pwf, 