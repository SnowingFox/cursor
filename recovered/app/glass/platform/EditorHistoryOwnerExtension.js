// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EditorHistoryOwnerExtension.js range:18288182..18290076
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.085Z
// wrapper: Q01 deps:6 [E, Fy, $kt, gE, jkt, Aw]
// declarations: J01, eC1, tC1, nC1
// anchors: data-editor-owns-history, cursor-editor-history-command
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Q01 = L({ "EditorHistoryOwnerExtension.js"() {
  "use strict";
  E(), Fy(), $kt(), gE(), jkt(), Aw(), Nxp = "data-editor-owns-history", sMa = "cursor-editor-history-command", Lxp = { undo: b9r, redo: y9r }, Oxp = new j1("editorHistoryOwner"), Fxp = Rw.create({ name: "editorHistoryOwner", addProseMirrorPlugins() {
    const { editor: t } = this;
    return [new MS({ key: Oxp, props: { attributes: () => t.isEditable ? { [Nxp]: "true" } : {} }, view(e) {
      const n = (i) => {
        const r = Z01(i);
        r === void 0 || !t.isEditable || (i.preventDefault(), Lxp[r](e.state, e.dispatch));
      };
      return e.dom.addEventListener(sMa, n), { destroy() {
        e.dom.removeEventListener(sMa, n);
      } };
    } })];
  } });
} });
function J01(t, e) {
  const { node: n } = t.domAtPos(e);
  (n.nodeType === Node.ELEMENT_NODE ? n : n.parentElement)?.getBoundingClientRect();
}
function eC1(t, e) {
  const { from: n, to: i } = t.state.selection, r = Math.min(n, i), s = Math.max(n, i);
  J01(t, r);
  const o = t.coordsAtPos(r), a = t.coordsAtPos(s), l = Math.min(o.top, a.top), c = Math.max(o.bottom, a.bottom), u = e.getBoundingClientRect(), d = (l + c) / 2, h = (u.top + u.bottom) / 2, p = e.scrollTop + d - h;
  return e.scrollTo({ top: p, behavior: "auto" }), true;
}
function tC1(t) {
  return new MS({ view() {
    return { update(e, n) {
      const i = t.current, r = U0e.getState(n), s = U0e.getState(e.state);
      if (!i || !s || !s.query || s.currentIndex < 0 || !(r?.query !== s.query || r?.currentIndex !== s.currentIndex || r?.matches.length !== s.matches.length)) return;
      const a = s.matches[s.currentIndex];
      !a || e.state.selection.from !== a.from || e.state.selection.to !== a.to || eC1(e, i);
    } };
  } });
}
function nC1(t) {
  return Rw.create({ name: "richTextSearchSelectionScroll", addProseMirrorPlugins() {
    return [tC1(t)];
  } });
}
