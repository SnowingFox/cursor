// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: RichTextEditor.js range:18305645..18306162
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, gE, v_e, W$r, Qw1, ebi, n01, c01, T01, BPa, Kxp, Aw, qu
// wrapper-init: bC1 -> richTextEditorModuleInit
// hoisted-owner: StreamingPlugin.js (app-out-vs-workbench-workbench-glass-main-js:3188); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: bC1 -> richTextEditorModuleInit (apply-map AST equivalent)

var richTextEditorModuleInit = L({
  "RichTextEditor.js"() {
    "use strict";

    E(), Va(), gE(), v_e(), W$r(), Qw1(), ebi(), n01(), c01(), T01(), BPa(), Kxp(), Aw(), qu();
  }
});
function yC1(t = {}) {
  const e = /* @__PURE__ */new WeakMap();
  return {
    name: "streaming",
    onInit: n => {
      e.set(n, !n.isEditable);
      const i = n.setEditable.bind(n);
      n.setEditable = (r, s) => {
        const o = e.get(n) ?? false;
        i(r, s), e.set(n, !r), o && r && t.onStreamEnd?.(n);
      };
    },
    onDestroy: n => {
      e.delete(n);
    }
  };
}
