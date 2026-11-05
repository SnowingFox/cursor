// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerDiffStatusDisplay.js range:30037903..30040648
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, pi
// wrapper-init: LIl
// hoisted-owner: ComposerFileListItemView.js (app-out-vs-workbench-workbench-glass-main-js:5339); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

LIl = L({ "ComposerDiffStatusDisplay.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), Rcf = wt("<span aria-id=chat-code-block-header>+"), Pcf = wt("<span aria-id=chat-code-block-header>-"), Mcf = wt("<span>•"), Dcf = wt("<div>");
} });
function w$k(t) {
  const e = XRn(), n = Gr();
  return (() => {
    var i = Ocf(), r = i.firstChild, s = r.firstChild, o = s.firstChild;
    return BM(i, "mouseleave", t.onMouseLeave), BM(i, "mouseenter", t.onMouseEnter), BM(i, "click", t.onClick), i.style.setProperty("display", "flex"), i.style.setProperty("align-items", "center"), i.style.setProperty("justify-content", "space-between"), i.style.setProperty("gap", "4px"), i.style.setProperty("cursor", "pointer"), i.style.setProperty("border-radius", "4px"), i.style.setProperty("padding", "1px 4px"), i.style.setProperty("height", "20px"), i.style.setProperty("min-width", "0"), r.style.setProperty("display", "flex"), r.style.setProperty("align-items", "center"), r.style.setProperty("gap", "2px"), r.style.setProperty("min-width", "0"), r.style.setProperty("flex", "1"), r.style.setProperty("overflow-x", "hidden"), Le(r, Ee(Ut, { get when() {
      return e();
    }, get children() {
      var a = Ncf();
      return a.style.setProperty("height", "12px"), a.style.setProperty("display", "flex"), a.style.setProperty("align-items", "center"), Le(a, Ee(fMe, { get fileName() {
        return t.filePath;
      }, get workspaceContextService() {
        return n.workspaceContextService;
      }, get modelService() {
        return n.modelService;
      }, get languageService() {
        return n.languageService;
      }, height: 16 })), a;
    } }), s), s.style.setProperty("gap", "4px"), s.style.setProperty("display", "flex"), s.style.setProperty("align-items", "center"), s.style.setProperty("overflow-x", "hidden"), s.style.setProperty("text-overflow", "ellipsis"), o.style.setProperty("font-size", "12px"), o.style.setProperty("white-space", "nowrap"), o.style.setProperty("overflow", "hidden"), o.style.setProperty("text-overflow", "ellipsis"), o.style.setProperty("line-height", "16px"), o.style.setProperty("color", "var(--vscode-input-foreground)"), Le(o, () => t.displayName ?? Ku(t.filePath)), Le(s, Ee(Ut, { get when() {
      return t.added > 0 || t.removed > 0;
    }, get children() {
      var a = Lcf();
      return a.style.setProperty("line-height", "10px"), Le(a, Ee(NIl, { get added() {
        return t.added;
      }, get removed() {
        return t.removed;
      }, lints: 0 })), a;
    } }), null), Le(i, Ee(Ut, { get when() {
      return t.rightContent;
    }, get children() {
      return t.rightContent;
    } }), null), xn(() => Er(i, t.class || "composer-file-list-item")), i;
  })();
}
var Ncf, Lcf, Ocf, 