// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CommandChipPlugin.js range:15918651..15923414
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.184Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, index.js, prompt-chip.stylex.js, insertPlainTextIntoEditor.js, CommandChipNodeView.js, command-chip-shared.js, MentionChipPlugin.js, +1 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, index.js, prompt-chip.stylex.js, insertPlainTextIntoEditor.js, CommandChipNodeView.js, command-chip-shared.js, MentionChipPlugin.js, +1 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
K1n = L({ "CommandChipPlugin.js"() {
  "use strict";
  E(), Va(), Fy(), yXo(), gE(), Doe(), Qjt(), j1a(), J9S(), _rt(), lGe(), k9r(), Aw(), HQ(), bXo(), Sep = "ui-prompt-input-command-chip--selected", Wkt = new j1("commandChipFocus"), kep = "Search or Paste Link", wep = /* @__PURE__ */ new Set(["glass-action-add-plugin"]), Ggi = o6.create({ name: jne, group: "inline", inline: true, atom: true, marks: "", selectable: true, draggable: false, addStorage() {
    return { onCommandChipClick: void 0 };
  }, addNodeView() {
    return Q9S();
  }, addAttributes() {
    return { id: { default: null, parseHTML: (t) => t.getAttribute("data-command-id"), renderHTML: (t) => ({ "data-command-id": t.id }) }, name: { default: null, parseHTML: (t) => t.getAttribute("data-command-name"), renderHTML: (t) => ({ "data-command-name": t.name }) }, content: { default: "", parseHTML: (t) => t.getAttribute("data-command-content"), renderHTML: (t) => ({ "data-command-content": t.content }) }, type: { default: null, parseHTML: (t) => t.getAttribute("data-command-type"), renderHTML: (t) => t.type ? { "data-command-type": t.type } : {} }, slashSubject: { default: null, rendered: false, parseHTML: () => null }, description: { default: "", parseHTML: (t) => t.getAttribute("data-command-description"), renderHTML: (t) => t.description ? { "data-command-description": t.description } : {} }, tooltipPath: { default: "", parseHTML: (t) => t.getAttribute("data-command-tooltip-path"), renderHTML: (t) => t.tooltipPath ? { "data-command-tooltip-path": t.tooltipPath } : {} }, authorshipLabel: { default: "", parseHTML: (t) => t.getAttribute("data-command-authorship-label"), renderHTML: (t) => t.authorshipLabel ? { "data-command-authorship-label": t.authorshipLabel } : {} }, sourceUri: { default: null, parseHTML: (t) => t.getAttribute("data-command-source-uri"), renderHTML: (t) => t.sourceUri ? { "data-command-source-uri": t.sourceUri } : {} }, displayName: { default: null, rendered: false, parseHTML: () => null }, badgeAppearance: { default: null, rendered: false, parseHTML: () => null } };
  }, parseHTML() {
    return [{ tag: 'span[data-type="command"]' }];
  }, renderHTML({ node: t, HTMLAttributes: e }) {
    return ["span", fE({ "data-type": "command", class: "ui-prompt-input-command-chip" }, e), i1a(t.attrs)];
  }, renderText({ node: t }) {
    return L1n(t.attrs.name ?? "");
  }, addCommands() {
    return { insertCommand: (t) => ({ commands: e }) => e.insertContent({ type: this.name, attrs: t }) };
  }, addProseMirrorPlugins() {
    return [new MS({ appendTransaction: (t, e, n) => {
      if (!t.some((s) => s.docChanged)) return null;
      const i = [];
      if (n.doc.descendants((s, o) => {
        s.type.name === jne && s.childCount > 0 && i.push({ pos: o, node: s });
      }), i.length === 0) return null;
      const r = n.tr;
      for (const { pos: s, node: o } of i.reverse()) r.replaceWith(s, s + o.nodeSize, o.type.create(o.attrs));
      return r;
    } }), new MS({ key: Wkt, state: { init: () => false, apply(t, e) {
      const n = t.getMeta(Wkt);
      return typeof n == "boolean" ? n : e;
    } }, props: { handleDOMEvents: { focus(t) {
      return Wkt.getState(t.state) !== true && t.dispatch(t.state.tr.setMeta(Wkt, true)), false;
    }, blur(t) {
      return Wkt.getState(t.state) !== false && t.dispatch(t.state.tr.setMeta(Wkt, false)), false;
    } }, decorations: (t) => {
      const { doc: e, selection: n } = t, i = [], r = Wkt.getState(t) === true;
      return e.descendants((s, o) => {
        if (s.type.name !== this.name || (r && !n.empty && n.from < o + s.nodeSize && n.to > o && i.push(Rx.node(o, o + s.nodeSize, { class: Sep })), !wep.has(String(s.attrs.id ?? "")))) return;
        const a = o + s.nodeSize, l = e.textBetween(a, e.content.size, `
`, (d) => d.type.name === jne ? L1n(d.attrs.name ?? "") : "");
        if (l.trim().length > 0) return;
        const c = l.match(/^\s*/)?.[0]?.length ?? 0, u = a + c;
        i.push(Rx.widget(u, () => {
          const d = document.createElement("span");
          return d.className = ["ui-prompt-input-command-chip__search-placeholder", gn(eGe.searchPlaceholder).className].filter(Boolean).join(" "), d.textContent = kep, d.setAttribute("aria-hidden", "true"), d.contentEditable = "false", d;
        }, { side: 1, ignoreSelection: true }));
      }), i.length === 0 ? null : wP.create(e, i);
    } } })];
  } });
} });
function Cep({ enableListEditing: t }) {
  const e = t ? Fgi : Fgi.extend({ addInputRules: () => [] }), n = t ? Bgi : Bgi.extend({ addInputRules: () => [] });
  return [e.configure({ HTMLAttributes: { class: Tep } }), n.configure({ HTMLAttributes: { class: Eep } }), u9r.configure({ HTMLAttributes: { class: Iep } })];
}
var Tep, Eep, Iep, 