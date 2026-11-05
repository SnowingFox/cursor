// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ApplyChangesButton.js range:32835584..32839495
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.486Z
Y2w = L({ "ApplyChangesButton.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), vo(), FS(), b9e(), V2w(), R8f = wt("<div><div class=apply-changes-btn><div><span>");
} }), X2w = L({ "BackgroundComposerActionButtons.css"() {
} }), Z2w = L({ "PullRequestButton.css"() {
} });
function Q2w(t) {
  const e = Gr(), n = vt(() => t.existingPrUrl ? () => t.onCreateOrViewPR() : () => t.onCreateOrViewPR()), i = vt(() => t.existingPrUrl ? "View PR" : "Create PR"), r = vt(() => t.isPrButtonLoading || t.isConvertingDraft || t.isMerging || false), s = () => !!(t.hasLoadedPrStatus && t.isDraft && t.onOpenPrFromDraft), o = () => !!(t.hasLoadedPrStatus && !t.isDraft && t.canMerge && !t.isCheckingMergeability && t.onMergePR), a = () => {
    const u = [];
    return t.existingPrUrl ? (u.push({ id: "view-pr", label: "View PR", tooltip: "Open pull request in browser", class: void 0, enabled: !r(), run: () => t.onCreateOrViewPR() }), s() && u.push({ id: "open-pr-from-draft", label: "Mark ready for review", tooltip: "Convert draft PR to open PR", class: void 0, enabled: !t.isConvertingDraft && !r(), run: () => t.onOpenPrFromDraft?.() }), o() && (u.push({ id: "separator-merge", label: "", tooltip: "", class: "separator", enabled: false, run: () => {
    } }), u.push({ id: "squash-merge", label: "Squash merge", tooltip: "Squash all commits into one", class: void 0, enabled: !t.isMerging, run: () => t.onMergePR?.("squash") }), u.push({ id: "rebase-merge", label: "Rebase merge", tooltip: "Rebase and merge commits", class: void 0, enabled: !t.isMerging, run: () => t.onMergePR?.("rebase") }), u.push({ id: "merge-commit", label: "Merge commit", tooltip: "Create a merge commit", class: void 0, enabled: !t.isMerging, run: () => t.onMergePR?.("merge") }))) : u.push({ id: "create-pr", label: "Create PR", tooltip: "Create a new pull request", class: void 0, enabled: !t.disabled && !r(), run: () => t.onCreateOrViewPR() }), u;
  }, l = vt(() => !!t.existingPrUrl && (s() || o())), c = (u) => {
    u.stopPropagation(), u.preventDefault();
    const d = a();
    e.contextMenuService.showContextMenu({ getAnchor: () => u.target, getActions: () => d });
  };
  return (() => {
    var u = M8f(), d = u.firstChild;
    return Le(d, Ee(Ut, { get when() {
      return l();
    }, get fallback() {
      return Ee(ol, { variant: "outline", onMouseDown: (h) => {
        h.preventDefault(), !t.disabled && !r() && n()();
      }, class: "bc-action-button !shadow-none", get leftContent() {
        return zr(() => !!r())() ? Ee(pTe, { onPrimaryButton: false }) : void 0;
      }, get disabled() {
        return t.disabled || r();
      }, get disabledHintText() {
        return t.disabledHintText;
      }, get children() {
        return i();
      } });
    }, get children() {
      return [Ee(ol, { variant: "outline", onMouseDown: (h) => {
        h.preventDefault(), !t.disabled && !r() && n()();
      }, class: "pull-request-btn-main bc-action-button !rounded-none", get leftContent() {
        return zr(() => !!r())() ? Ee(pTe, { onPrimaryButton: false }) : void 0;
      }, get disabled() {
        return t.disabled || r();
      }, get disabledHintText() {
        return t.disabledHintText;
      }, get children() {
        return i();
      } }), (() => {
        var h = P8f(), p = h.firstChild;
        return h.addEventListener("click", (g) => {
          !t.disabled && !r() && c(g);
        }), xn((g) => {
          var f = `pull-request-btn-chevron ${t.disabled || r() ? "opacity-50 cursor-not-allowed" : ""} pull-request-btn-chevron-outline`, _ = t.disabled ? t.disabledHintText : "More PR options", b = Gn.asClassName(yt.chevronDown);
          return f !== g.e && Er(h, g.e = f), _ !== g.t && lo(h, "title", g.t = _), b !== g.a && Er(p, g.a = b), g;
        }, { e: void 0, t: void 0, a: void 0 }), h;
      })()];
    } })), u;
  })();
}
var P8f, M8f, 