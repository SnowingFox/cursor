// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerToolCallBlockContainer.js range:29031747..29033670
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, yOk
// wrapper-init: kOk
// hoisted-owner: ComposerToolCallSimpleLayout.js (app-out-vs-workbench-workbench-glass-main-js:5029); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

kOk = L({ "ComposerToolCallBlockContainer.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), yOk(), _Xg = wt("<div class=composer-tool-call-block-wrapper><div>");
} }), wOk = L({ "ComposerToolCallSimpleLayout.css"() {
} });
function COk(t) {
  const e = () => t.density ?? "standard";
  return Ee(SOk, { get class() {
    return `composer-tool-call-simple-layout ${t.class ?? ""}`;
  }, get cardDensity() {
    return e();
  }, get style() {
    return t.style;
  }, get backgroundColor() {
    return t.backgroundColor;
  }, get setRef() {
    return t.setRef;
  }, get onClick() {
    return t.onClick;
  }, get tabIndex() {
    return t.tabIndex;
  }, get children() {
    return [(() => {
      var n = SXg(), i = n.firstChild;
      return Le(i, Ee(Ut, { get when() {
        return t.topHeaderIconClass;
      }, get children() {
        var r = bXg();
        return xn(() => Er(r, `${t.topHeaderIconClass} composer-tool-call-simple-layout-header-icon !text-[13px]`)), r;
      } }), null), Le(i, () => t.topHeader, null), Le(n, Ee(Ut, { get when() {
        return t.topHeaderRightContent && !t.topHeaderLoadingShimmer;
      }, get children() {
        var r = yXg();
        return Le(r, () => t.topHeaderRightContent), r;
      } }), null), xn((r) => {
        var s = `composer-tool-call-simple-layout-header ${t.body ? "" : "composer-tool-call-simple-layout-header-no-divider"}`, o = e(), a = `composer-tool-call-simple-layout-header-content ${t.topHeaderLoadingShimmer ? "make-shine" : ""}`;
        return s !== r.e && Er(n, r.e = s), o !== r.t && lo(n, "data-density", r.t = o), a !== r.a && Er(i, r.a = a), r;
      }, { e: void 0, t: void 0, a: void 0 }), n;
    })(), Ee(Ut, { get when() {
      return t.body;
    }, get children() {
      var n = kXg();
      return Le(n, () => t.body), xn(() => lo(n, "data-density", e())), n;
    } })];
  } });
}
var bXg, yXg, SXg, kXg, 