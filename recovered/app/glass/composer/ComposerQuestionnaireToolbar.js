// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerQuestionnaireToolbar.js range:30016013..30018554
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, Mt, pi, tf, Pu, gs, ta, Gu, sk, aIi, aS, vo, FS, F6, $Rn, u$k
// wrapper-init: h$k
// hoisted-owner: ComposerTipTapReadOnlyHost.react.js (app-out-vs-workbench-workbench-glass-main-js:5332); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: m$k -> ComposerTipTapReadOnlyHost (apply-map AST equivalent)

h$k = L({
  "ComposerQuestionnaireToolbar.js"() {
    "use strict";

    E(), at(), at(), at(), at(), at(), at(), at(), at(), Mt(), pi(), tf(), Pu(), gs(), ta(), Gu(), sk(), aIi(), aS(), vo(), FS(), F6(), $Rn(), u$k(), mcf = wt("<span class=composer-questionnaire-toolbar-answered-hint> of <!> answered"), gcf = wt("<div class=composer-questionnaire-toolbar-stepper><span class=composer-questionnaire-toolbar-stepper-label> of "), fcf = wt("<span>Continue"), vcf = wt("<div class=composer-questionnaire-toolbar-actions>"), _cf = wt("<div class=composer-questionnaire-toolbar tabindex=-1><div class=composer-questionnaire-toolbar-header><span></span><span class=composer-questionnaire-toolbar-title>Questions</span></div><div class=composer-questionnaire-toolbar-collapsible><div class=composer-questionnaire-toolbar-collapsible-inner><div class=composer-questionnaire-toolbar-scroll-container>"), bcf = wt("<div class=composer-questionnaire-toolbar-questions>"), ycf = wt("<div class=composer-questionnaire-toolbar-question><div class=composer-questionnaire-toolbar-question-label><div class=composer-questionnaire-toolbar-question-number>.</div></div><div class=composer-questionnaire-toolbar-options>"), Scf = wt("<div class=composer-questionnaire-toolbar-option role=button><button class=composer-questionnaire-toolbar-option-letter type=button></button><span class=composer-questionnaire-toolbar-option-label>"), kcf = wt('<div class="composer-questionnaire-toolbar-option composer-questionnaire-toolbar-option-freeform"role=button><button class=composer-questionnaire-toolbar-option-letter type=button></button><textarea class=composer-questionnaire-toolbar-freeform-input placeholder=Other... rows=1>'), wcf = Ok(dT);
  }
});
import { useCallback as xIl } from "./react-runtime/react/esm-index-production.js";
import { jsx as p$k } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ComposerTipTapReadOnlyHost({
  className: t,
  content: e,
  editorClassName: n,
  mentionChipDispatchRef: i,
  commandChipClickRef: r,
  commandChipClickableRef: s,
  mentionChipResolve: o,
  onMentionChipContextMenu: a,
  onLinkClick: l
}) {
  const c = xIl((h, p) => {
      i?.current?.(h, p);
    }, [i]),
    u = xIl(h => {
      r?.current?.(h);
    }, [r]),
    d = xIl(h => s?.current?.(h) ?? false, [s]);
  return p$k(qgi, {
    className: t,
    content: e,
    editorClassName: n,
    isCommandChipClickable: s ? d : void 0,
    mentionChipResolve: o,
    onCommandChipClick: r ? u : void 0,
    onLinkClick: l,
    onMentionChipAction: i ? c : void 0,
    onMentionChipContextMenu: a,
    readOnlyMentionChrome: true
  });
}
