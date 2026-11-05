// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AnyrunSetupUISection.js range:38860120..38867246
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.172Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, backgroundComposerConstants.js, solidContext.js, button.js, gallerySection.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, backgroundComposerConstants.js, solidContext.js, button.js, gallerySection.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
SoC = L({ "AnyrunSetupUISection.js"() {
  "use strict";
  E(), at(), at(), pi(), wYr(), vo(), FS(), mk(), tqv = wt("<h3>Anyrun Setup UI"), nqv = () => {
    const t = Gr();
    return Xc(() => {
      t.commandService.executeCommand(kYr);
    }), Ee(pk, { title: "Anyrun Setup UI", class: "flex flex-col gap-2 !items-center justify-center w-full box-borders", get children() {
      return [tqv(), Ee(ol, { onClick: () => {
        t.commandService.executeCommand(kYr);
      }, children: "Show Modal" })];
    } });
  };
} });
function koC() {
  const t = { isHighlighted: false, isInNavigationMode: false, onClick: () => {
  }, onMouseEnter: () => {
  }, onMouseLeave: () => {
  } }, e = [{ title: "Normal - Unselected", props: { id: "tab-1", name: "Refactor authentication system", isSelected: false, timestamp: Date.now() - 1e3 * 60 * 5 } }, { title: "Normal - Selected", props: { id: "tab-2", name: "Add user profile settings", isSelected: true, timestamp: Date.now() - 1e3 * 60 * 30 } }, { title: "Highlighted (navigation)", props: { id: "tab-3", name: "Fix database migration", isSelected: false, isHighlighted: true, isInNavigationMode: true, timestamp: Date.now() - 1e3 * 60 * 60 * 2 } }, { title: "With Unread Indicator", props: { id: "tab-4", name: "Implement OAuth integration", isSelected: false, isUnread: true, timestamp: Date.now() - 1e3 * 60 * 15 } }, { title: "Draft State", props: { id: "tab-5", name: "Start new feature...", isSelected: false, isDraft: true, timestamp: Date.now() - 1e3 * 60 } }, { title: "Archived", props: { id: "tab-6", name: "Old feature prototype", isSelected: false, isArchived: true, timestamp: Date.now() - 1e3 * 60 * 60 * 24 * 7 } }, { title: "With Diff Stats (Medium)", props: { id: "tab-7", name: "Update authentication flow", isSelected: false, showDiffStats: true, addedLines: 245, removedLines: 128, filesChangedCount: 8, timestamp: Date.now() - 1e3 * 60 * 45 } }, { title: "With Diff Stats (Small)", props: { id: "tab-8", name: "Fix typo in README", isSelected: false, showDiffStats: true, addedLines: 3, removedLines: 2, filesChangedCount: 1, timestamp: Date.now() - 1e3 * 60 * 10 } }, { title: "With Diff Stats (Large)", props: { id: "tab-9", name: "Complete redesign of UI components", isSelected: false, showDiffStats: true, addedLines: 1247, removedLines: 856, filesChangedCount: 23, timestamp: Date.now() - 1e3 * 60 * 60 * 3 } }, { title: "Cloud Agent", props: { id: "tab-10", name: "Migrate to new authentication system", isSelected: false, showCloudIcon: true, showDiffStats: true, addedLines: 156, removedLines: 89, filesChangedCount: 12, timestamp: Date.now() - 1e3 * 60 * 90 } }, { title: "Worktree Composer", props: { id: "tab-11", name: "Implement new feature branch", isSelected: false, showWorktreeIcon: true, showDiffStats: true, addedLines: 342, removedLines: 128, filesChangedCount: 18, timestamp: Date.now() - 1e3 * 60 * 60 } }, { title: "Best-of-N (3x)", props: { id: "tab-12", name: "Optimize database queries", isSelected: false, showSubcomposerIcon: "3 models", modelCount: 3, showDiffStats: true, addedLines: 89, removedLines: 45, filesChangedCount: 7, timestamp: Date.now() - 1e3 * 60 * 120 } }, { title: "With Plan", props: { id: "tab-13", name: "Add payment processing", isSelected: false, showPlanIcon: "Payment Integration Plan", showDiffStats: true, addedLines: 523, removedLines: 12, filesChangedCount: 15, timestamp: Date.now() - 1e3 * 60 * 60 * 4 } }, { title: "Generating (with action)", props: { id: "tab-14", name: "Refactoring user service", isSelected: false, isGenerating: true, currentAction: "Analyzing codebase...", timestamp: Date.now() - 1e3 * 30 } }, { title: "All Icons Combined", props: { id: "tab-15", name: "Complex multi-agent refactor", isSelected: false, showCloudIcon: true, showWorktreeIcon: true, showSubcomposerIcon: "3 models", modelCount: 3, showDiffStats: true, addedLines: 456, removedLines: 234, filesChangedCount: 19, timestamp: Date.now() - 1e3 * 60 * 60 * 6 } }];
  return Ee(pk, { style: { padding: "20px", gap: "32px" }, get children() {
    var n = iqv(), i = n.firstChild, r = i.nextSibling, s = r.firstChild, o = s.nextSibling, a = r.nextSibling, l = a.firstChild, c = l.nextSibling, u = a.nextSibling, d = u.firstChild, h = d.nextSibling, p = u.nextSibling, g = p.firstChild, f = g.nextSibling, _ = f.firstChild, b = _.firstChild, y = b.nextSibling, S = _.nextSibling, k = S.firstChild, C = k.nextSibling;
    return o.style.setProperty("width", "300px"), o.style.setProperty("display", "flex"), o.style.setProperty("flex-direction", "column"), o.style.setProperty("gap", "4px"), Le(o, Ee(Su, { each: e, children: (T) => (() => {
      var I = nLs(), A = I.firstChild;
      return Le(A, () => T.title), Le(I, Ee(IKe, Zy(t, () => T.props, { isCompact: false })), null), I;
    })() })), c.style.setProperty("width", "300px"), c.style.setProperty("display", "flex"), c.style.setProperty("flex-direction", "column"), c.style.setProperty("gap", "4px"), Le(c, Ee(Su, { each: e, children: (T) => (() => {
      var I = nLs(), A = I.firstChild;
      return Le(A, () => T.title), Le(I, Ee(IKe, Zy(t, () => T.props, { isCompact: true })), null), I;
    })() })), h.style.setProperty("width", "200px"), h.style.setProperty("display", "flex"), h.style.setProperty("flex-direction", "column"), h.style.setProperty("gap", "4px"), Le(h, Ee(Su, { get each() {
      return e.slice(0, 4);
    }, children: (T) => (() => {
      var I = nLs(), A = I.firstChild;
      return Le(A, () => T.title), Le(I, Ee(IKe, Zy(t, () => T.props, { isCompact: true })), null), I;
    })() })), y.style.setProperty("width", "280px"), y.style.setProperty("display", "flex"), y.style.setProperty("flex-direction", "column"), y.style.setProperty("gap", "4px"), Le(y, Ee(IKe, Zy(t, { id: "matrix-1", name: "Example agent task", isSelected: false, isCompact: false, get timestamp() {
      return Date.now() - 1e3 * 60 * 5;
    } })), null), Le(y, Ee(IKe, Zy(t, { id: "matrix-2", name: "Example agent task", isSelected: true, isCompact: false, get timestamp() {
      return Date.now() - 1e3 * 60 * 5;
    } })), null), Le(y, Ee(IKe, Zy(t, { id: "matrix-3", name: "Example agent task", isSelected: false, isHighlighted: true, isInNavigationMode: true, isCompact: false, get timestamp() {
      return Date.now() - 1e3 * 60 * 5;
    } })), null), C.style.setProperty("width", "280px"), C.style.setProperty("display", "flex"), C.style.setProperty("flex-direction", "column"), C.style.setProperty("gap", "4px"), Le(C, Ee(IKe, Zy(t, { id: "matrix-compact-1", name: "Example agent task", isSelected: false, isCompact: true, get timestamp() {
      return Date.now() - 1e3 * 60 * 5;
    } })), null), Le(C, Ee(IKe, Zy(t, { id: "matrix-compact-2", name: "Example agent task", isSelected: true, isCompact: true, get timestamp() {
      return Date.now() - 1e3 * 60 * 5;
    } })), null), Le(C, Ee(IKe, Zy(t, { id: "matrix-compact-3", name: "Example agent task", isSelected: false, isHighlighted: true, isInNavigationMode: true, isCompact: true, get timestamp() {
      return Date.now() - 1e3 * 60 * 5;
    } })), null), n;
  } });
}
var iqv, nLs, 