// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerCreatePlanTranscriptCard.react.js range:32091781..32092746
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, cFf, Pu, Lr, rs, hle, ru, _s, ZB, Sks, Pl, mV, I6, YFf, AB, iAt, mks
// wrapper-init: MEw
// hoisted-owner: mcpAppController.js (app-out-vs-workbench-workbench-glass-main-js:6035); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var MEw = L({ "ComposerCreatePlanTranscriptCard.react.js"() {
  "use strict";
  E(), Mt(), cFf(), Pu(), Lr(), rs(), hle(), ru(), _s(), ZB(), Sks(), Pl(), mV(), I6(), YFf(), AB(), iAt(), mks();
} });
function DEw(t) {
  const e = t.length;
  try {
    const n = JSON.parse(t);
    if (c6f(n)) return { value: n, estimatedByteLength: e };
  } catch {
  }
  return { value: { content: [{ type: "text", text: t }] }, estimatedByteLength: e };
}
function NEw(t) {
  const e = t?.meta?.ui?.resourceUri ?? t?.meta?.["ui/resourceUri"];
  return typeof e == "string" && e.startsWith("ui://") ? e : void 0;
}
function LEw(t, e, n) {
  if (e.includes(t)) return t;
  const i = n.find((o) => o.name === t || o.identifier === t);
  if (i) return i.identifier;
  const r = nzt(t);
  return n.find((o) => o.identifier === r || nzt(o.name) === r)?.identifier ?? t;
}
var r6f, s6f, s4l, o6f, a6f, o4l, l6f, a4l, c6f, u6f, d6f, h6f, p6f, l4l, m6f, g6f, zct, f6f, v6f, _6f, b6f, y6f, 