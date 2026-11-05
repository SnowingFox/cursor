// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputKeymapExtension.js range:17353035..17355357
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Fy, yXo, $kt, gE, WRe, kvp, K1n, jkt, bXo, Aw
// wrapper-init: Al1
// hoisted-owner: PromptSuggestionExtension.js (app-out-vs-workbench-workbench-glass-main-js:2929); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var Al1 = L({ "PromptInputKeymapExtension.js"() {
  "use strict";
  E(), Fy(), yXo(), $kt(), gE(), WRe(), kvp(), K1n(), jkt(), bXo(), Aw();
} });
function kwn(t) {
  return t.storage.promptSuggestion;
}
function Cvp(t) {
  const e = t.doc.firstChild;
  return t.doc.childCount === 1 && e?.type.name === "paragraph" && e.content.size === 0;
}
function Ovi(t) {
  return Cvp(t.state);
}
function Tvp(t, e) {
  const { text: n } = kwn(t);
  return n && Cvp(e) ? n : null;
}
function UIa(t) {
  t.view.dispatch(t.state.tr.setMeta(IUr, Pvp));
}
function Evp(t) {
  return Rw.create({ name: Ivp, priority: 200, addStorage() {
    return { text: void 0, reqId: void 0 };
  }, addCommands() {
    return { setPromptSuggestion: ({ text: e, reqId: n }) => ({ editor: i }) => {
      const r = kwn(i);
      return r.text = e, r.reqId = n, UIa(i), true;
    }, clearPromptSuggestion: () => ({ editor: e }) => {
      const n = kwn(e);
      return n.text ? (n.text = void 0, n.reqId = void 0, UIa(e), true) : false;
    }, acceptPromptSuggestion: () => ({ editor: e }) => {
      const n = kwn(e), { text: i, reqId: r } = n;
      return i ? (t.onAccept?.({ text: i, reqId: r }), n.text = void 0, n.reqId = void 0, UIa(e), true) : false;
    } };
  }, addKeyboardShortcuts() {
    const e = () => {
      const { text: n } = kwn(this.editor);
      return !!n && t.isMenuOpen?.() !== true && Ovi(this.editor);
    };
    return { Tab: () => e() ? (this.editor.commands.acceptPromptSuggestion(), true) : false, Escape: () => {
      if (!e()) return false;
      const { reqId: n } = kwn(this.editor);
      return t.onDismiss?.(n), this.editor.commands.clearPromptSuggestion(), true;
    } };
  }, addProseMirrorPlugins() {
    const e = this.editor;
    return [new MS({ key: IUr, props: { decorations: (n) => {
      const i = Tvp(e, n);
      if (i === null) return null;
      const r = document.createElement("span");
      r.className = t.decorationClassName ?? xvp, r.appendChild(document.createTextNode(i));
      const s = document.createElement("span");
      return s.className = Avp, s.textContent = Rvp, r.appendChild(s), r.setAttribute("aria-hidden", "true"), r.contentEditable = "false", wP.create(n.doc, [Rx.widget(1, r, { side: 1, ignoreSelection: true })]);
    } } })];
  } });
}
var IUr, Ivp, xvp, Avp, Rvp, Pvp, 