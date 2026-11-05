// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerTipTapReadOnlyHost.react.js range:30018554..30019634
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt
// wrapper-init: g$k
// hoisted-owner: ComposerRichTextInline.js (app-out-vs-workbench-workbench-glass-main-js:5333); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var g$k = L({ "ComposerTipTapReadOnlyHost.react.js"() {
  "use strict";
  E(), Mt();
} });
function f$k(t) {
  const e = Gr(), n = vt(() => e.workbenchEnvironmentService.isGlass === true ? "cursor-mixed" : "seti"), i = vt(() => Vz(t.text));
  return Ee(Ut, { get when() {
    return i();
  }, get fallback() {
    return Ee(c$k, { get fileIconVariant() {
      return n();
    }, get text() {
      return t.text;
    } });
  }, get children() {
    return Ee(Ccf, { class: "aislash-editor-input-readonly", editorClassName: "composer-human-tiptap-readonly-editor", get content() {
      return t.text;
    }, get mentionChipResolve() {
      return t.mentionChipResolve;
    }, get mentionChipDispatchRef() {
      return t.mentionChipDispatchRef;
    }, get commandChipClickRef() {
      return t.commandChipClickRef;
    }, get commandChipClickableRef() {
      return t.commandChipClickableRef;
    }, get onMentionChipContextMenu() {
      return t.onMentionChipContextMenu;
    }, get onLinkClick() {
      return t.onLinkClick;
    }, style: Tcf });
  } });
}
var Ccf, Tcf, 