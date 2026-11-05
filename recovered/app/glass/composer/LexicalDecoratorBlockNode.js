// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalDecoratorBlockNode.js range:27265982..27266658
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, NA
// wrapper-init: iEg
// hoisted-owner: useLexicalNodeSelection.js (app-out-vs-workbench-workbench-glass-main-js:4717); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

iEg = L({ "LexicalDecoratorBlockNode.js"() {
  "use strict";
  E(), NA();
} });
function rEg(t, e) {
  return t.getEditorState().read(() => {
    const n = AP(e);
    return n === null ? false : n.isSelected();
  });
}
function PAk(t) {
  const [e] = t1(), [n, i] = Wt(rEg(e, t));
  return Xc(() => {
    let o = true;
    const a = e.registerUpdateListener(() => {
      o && i(rEg(e, t));
    });
    On(() => {
      o = false, a();
    });
  }), [n, (o) => {
    e.update(() => {
      let a = ku();
      ipe(a) || (a = CNa(), vbe(a)), o ? a.add(t) : a.delete(t);
    });
  }, () => {
    e.update(() => {
      const o = ku();
      ipe(o) && o.clear();
    });
  }];
}
