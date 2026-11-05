// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelPickerContent.js range:16899313..16900522
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.134Z
// wrapper: xe1 deps:12 [E, a8r, JY, Drt, Tkn, lcp, oe1, ge1, Nkn, qu, aJ, awt]
// declarations: Ddp, WTa, GTa, Pe1, Me1, C7r (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
xe1 = L({ "ModelPickerContent.js"() {
  "use strict";
  E(), a8r(), JY(), Drt(), Tkn(), lcp(), oe1(), ge1(), Nkn(), qu(), aJ(), awt(), Rdp = { root: { kcJrgF: "ui-lfarnw", kVlHPT: "ui-auhbfc", $$css: true } };
} });
import { jsx as SGe, jsxs as Ae1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Pdp } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as Mdp, useState as Re1 } from "./react-runtime/react/esm-index-production.js";
function Ddp() {
  return C7r.root;
}
function WTa(t) {
  return t === "prompt" ? C7r.prompt : t === "input-shell" ? C7r.inputShell : false;
}
function GTa() {
  return a6e.nonSelectableLabel;
}
function Pe1(t, e) {
  if (!t.startsWith(`${e} `) || /[<>]/.test(t)) return;
  const n = t.slice(e.length + 1).trim();
  return n.length === 0 ? void 0 : { name: e, detail: n };
}
function Me1(t, e, n) {
  if (t.selections.length === 0) return "Select model";
  const i = t.selections.reduce((s, o) => s + (o.count ?? 1), 0);
  return i <= 1 ? n ? Fjt(t.selections[0], e) : f1n(t.selections[0], e, t.maxMode) : `${n ? Fjt(t.selections[0], e) : f1n(t.selections[0], e, t.maxMode)} + ${i - 1}`;
}
var C7r, a6e, Ndp, qTa, twn,
