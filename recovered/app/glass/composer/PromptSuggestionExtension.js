// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptSuggestionExtension.js range:17355357..17356041
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Fy, gE, Doe, Aw, HQ
// wrapper-init: Mvp
// hoisted-owner: recognizeSlash.js (app-out-vs-workbench-workbench-glass-main-js:2930); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Mvp = L({ "PromptSuggestionExtension.js"() {
  "use strict";
  E(), Fy(), gE(), Doe(), Aw(), HQ(), IUr = new j1("promptSuggestion"), Ivp = "promptSuggestion", xvp = "ui-prompt-input-suggestion-ghost", Avp = "ui-prompt-input-suggestion-ghost__tab-badge", Rvp = "tab", Pvp = "sync";
} });
function Rl1(t, e, n) {
  let i = e.exec(t);
  if (i === null && (i = n.exec(t)), i === null) return null;
  const r = i[1], s = i[3], o = s.indexOf(" "), a = o === -1 ? s : s.slice(0, o);
  return Dvp.test(a) ? null : { leadOffset: i.index + r.length, matchingString: s, replaceableString: i[2] };
}
function Pl1(t) {
  return Rl1(t, Lvp, Ovp);
}
var jIa, xUr, Dvp, $Ia, Nvp, HIa, WIa, Lvp, Ovp, 