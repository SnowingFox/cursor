// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalComposerContext.js range:27234394..27236174
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, pi
// wrapper-init: cI
// hoisted-owner: LexicalComposer.js (app-out-vs-workbench-workbench-glass-main-js:4698); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

cI = L({ "LexicalComposerContext.js"() {
  "use strict";
  E(), pi(), kus = fP(null), t1 = () => {
    const t = AC(kus);
    if (!t) throw Error("useLexicalComposerContext: cannot find a LexicalComposerContext");
    return t;
  };
} });
function Gml(t) {
  const { editable: e, theme: n, namespace: i, nodes: r, onError: s, editorState: o } = t.initialConfig;
  if (AC(kus) != null) return zr(() => t.children);
  const l = eAk(null, n), c = UDp({ editable: e, namespace: i, nodes: r, theme: n });
  if (tAk(c, o), t.reducerRegistration) {
    const d = Gr().lexicalReducerService.registerEditor({ editor: c, id: t.reducerRegistration.id, type: t.reducerRegistration.type });
    d === false && console.error(`Failed to register editor, id: ${t.reducerRegistration.id}, type: ${t.reducerRegistration.type}`), On(() => {
      d && d();
    });
  }
  return Xc(() => {
    const u = t.initialConfig.editable;
    c.setEditable(u !== void 0 ? u : true);
  }), Ee(kus.Provider, { value: [c, l], get children() {
    return t.children;
  } });
}
function tAk(t, e) {
  if (e !== null) {
    if (e === void 0) t.update(() => {
      const n = Xg();
      if (n.isEmpty()) {
        const i = _2();
        n.append(i);
        const r = typeof window < "u" ? document.activeElement : null;
        (ku() !== null || r !== null && r === t.getRootElement()) && i.select();
      }
    }, eAi);
    else if (e !== null) switch (typeof e) {
      case "string": {
        const n = t.parseEditorState(e);
        t.setEditorState(n, eAi);
        break;
      }
      case "object": {
        t.setEditorState(e, eAi);
        break;
      }
      case "function": {
        t.update(() => {
          Xg().isEmpty() && e(t);
        }, eAi);
        break;
      }
    }
  }
}
var eAi, 