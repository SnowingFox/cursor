// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalErrorBoundary.js range:27248387..27248971
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, pi
// wrapper-init: Xml
// hoisted-owner: LexicalOnChangePlugin.js (app-out-vs-workbench-workbench-glass-main-js:4703); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Xml = L({ "LexicalErrorBoundary.js"() {
  "use strict";
  E(), at(), at(), pi(), DTg = wt("<div>An error was thrown.");
} });
function aAk(t) {
  t = Zy({ ignoreSelectionChange: false, ignoreHistoryMergeTagChange: true }, t);
  const [e] = t1();
  return Cn(() => {
    t.onChange && On(e.registerUpdateListener(({ editorState: n, dirtyElements: i, dirtyLeaves: r, prevEditorState: s, tags: o }) => {
      t.ignoreSelectionChange && i.size === 0 && r.size === 0 || t.ignoreHistoryMergeTagChange && o.has("history-merge") || s.isEmpty() || t.onChange(n, o, e);
    }));
  }), null;
}
