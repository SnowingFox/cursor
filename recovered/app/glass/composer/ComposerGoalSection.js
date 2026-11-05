// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerGoalSection.js range:29992490..29994241
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, FO, Am, pi, gs, Xo, Ks, LM, oT, vo, F6, e_, bme, ncf, $It
// wrapper-init: l$k
// hoisted-owner: ComposerLexicalRenderer.js (app-out-vs-workbench-workbench-glass-main-js:5328); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

l$k = L({ "ComposerGoalSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), FO(), Am(), pi(), gs(), Xo(), Ks(), LM(), oT(), vo(), F6(), e_(), bme(), ncf(), $It(), rcf = wt("<span class=composer-toolbar-goal-elapsed>"), scf = wt("<div class=composer-toolbar-goal-trailing><div class=composer-toolbar-goal-actions><div data-goal-action=edit></div><div></div><div data-goal-action=clear>"), ocf = wt("<div class=composer-toolbar-goal-item-container><div class=composer-toolbar-goal-row data-goal-row=true><span class=composer-toolbar-goal-icon data-goal-icon=target></span><span class=composer-toolbar-goal-state></span><span class=composer-toolbar-goal-objective>"), tvs = cs(void 0);
} });
function c$k(t) {
  const e = Gr(), n = { ...XEl(), namespace: "composer-lexical-display", onError: (r) => {
    e.composerLogService.error(r);
  }, editable: false }, i = () => Ee(qml, { class: "aislash-editor-input-readonly", style: { resize: "none", "grid-area": "1 / 1 / 1 / 1", overflow: "hidden", "line-height": "var(--composer-human-message-line-height, 1.5)", "font-family": "inherit", color: "var(--vscode-input-foreground)", "background-color": "transparent", display: "block", outline: "none", "scrollbar-width": "none", "box-sizing": "border-box", border: "none", "word-wrap": "break-word", "word-break": "break-word", padding: "0px" }, turnOffCmdZ: true, spellCheck: false, autoCapitalize: "off", readOnly: true });
  return Ee(Gml, { initialConfig: n, get children() {
    return [Ee(tEg, { get contentEditable() {
      return i();
    }, placeholder: [], errorBoundary: Yml }), Ee(acf, { get fileIconVariant() {
      return t.fileIconVariant;
    }, get text() {
      return t.text;
    } })];
  } });
}
var TIl, EIl, IIl, acf, 