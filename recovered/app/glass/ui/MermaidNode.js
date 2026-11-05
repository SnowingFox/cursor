// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MermaidNode.js range:18160907..18166197
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.820Z
pIp = L({ "MermaidNode.js"() {
  "use strict";
  E(), Fy(), gE(), v_e(), ebi(), Pha(), tIp(), Aw(), dIp = 3, hIp = Ww1(function(e) {
    const n = Hw1(18), { node: i, editor: r, getPos: s, extension: o } = e, a = i.textContent, { showErrorDetails: l, onNodeLinkClick: c } = o.options, d = Gw1(f0n)?.isStreaming ?? false;
    let h;
    n[0] !== r ? (h = (P) => (r.on("update", P), () => {
      r.off("update", P);
    }), n[0] = r, n[1] = h) : h = n[1];
    const p = h;
    let g;
    n[2] !== r.state.doc.content.size ? (g = () => r.state.doc.content.size, n[2] = r.state.doc.content.size, n[3] = g) : g = n[3];
    const f = g, _ = qw1(p, f, f);
    let b;
    n[4] !== _ || n[5] !== s || n[6] !== i.nodeSize ? (b = zw1(s, i.nodeSize, _), n[4] = _, n[5] = s, n[6] = i.nodeSize, n[7] = b) : b = n[7];
    const S = d && !b;
    let k;
    n[8] !== a || n[9] !== S || n[10] !== c || n[11] !== l ? (k = xPa(Ahi, { content: a, showErrorDetails: l, isStreaming: S, onNodeLinkClick: c }), n[8] = a, n[9] = S, n[10] = c, n[11] = l, n[12] = k) : k = n[12];
    const C = k;
    let T;
    n[13] !== C ? (T = xPa(eIp, { title: "Mermaid Diagram", children: C }), n[13] = C, n[14] = T) : T = n[14];
    let I;
    n[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (I = xPa(gli, { className: "ui-1s85apg" }), n[15] = I) : I = n[15];
    let A;
    return n[16] !== T ? (A = $w1(Unt, { className: "ui-mermaid-node", children: [T, I] }), n[16] = T, n[17] = A) : A = n[17], A;
  }), APa = o6.create({ name: "mermaid", group: "block", content: "text*", inline: false, code: true, marks: "", atom: false, defining: true, addOptions() {
    return { HTMLAttributes: {}, showErrorDetails: true };
  }, renderMarkdown(t) {
    return `\`\`\`mermaid
${t.content?.map((n) => n.type === "text" ? n.text : "").join("") ?? ""}
\`\`\`

`;
  }, parseHTML() {
    return [{ tag: 'pre[data-language="mermaid"]', preserveWhitespace: "full" }, { tag: 'div[data-type="mermaid"]', preserveWhitespace: "full" }, { tag: "pre", preserveWhitespace: "full", priority: 100, getAttrs: (t) => {
      const e = t;
      return e.querySelector("code")?.classList.contains("language-mermaid") || e.classList.contains("language-mermaid") || e.getAttribute("data-language") === "mermaid" ? null : false;
    } }];
  }, renderHTML({ HTMLAttributes: t }) {
    return ["pre", fE(this.options.HTMLAttributes, t, { "data-language": "mermaid", "data-type": "mermaid", class: "language-mermaid" }), ["code", { class: "language-mermaid" }, 0]];
  }, addNodeView() {
    return PSt(hIp, { ignoreMutation: () => true });
  }, addKeyboardShortcuts() {
    return { Tab: () => this.editor.isActive("mermaid") ? this.editor.commands.insertContent("	") : false, "Shift-Tab": () => {
      if (this.editor.isActive("mermaid")) {
        const { state: t } = this.editor, { from: e } = t.selection, n = t.doc.textBetween(Math.max(0, e - 2), e, `
`);
        if (n.endsWith("	")) return this.editor.commands.deleteRange({ from: e - 1, to: e });
        if (n.endsWith("  ")) return this.editor.commands.deleteRange({ from: e - 2, to: e });
      }
      return false;
    } };
  }, addCommands() {
    return { setMermaid: (t) => ({ commands: e }) => e.insertContent({ type: this.name, content: t ? [{ type: "text", text: t }] : [] }), toggleMermaid: () => ({ commands: t }) => t.toggleNode(this.name, "paragraph", {}), transformMermaidCodeBlocks: () => ({ tr: t, state: e }) => {
      const n = e.schema.nodes.mermaid;
      if (!n) return false;
      let i = false;
      return e.doc.descendants((r, s) => {
        if (r.type.name === "codeBlock" && r.attrs.language === "mermaid") {
          const o = n.create({}, r.content.size > 0 ? r.content : void 0);
          t.replaceWith(s, s + r.nodeSize, o), i = true;
        }
      }), i;
    } };
  }, onCreate() {
    const { state: t } = this.editor, e = t.schema.nodes.mermaid, n = t.schema.nodes.codeBlock;
    if (!e || !n) return;
    const i = [];
    if (t.doc.descendants((s, o) => {
      s.type === n && s.attrs.language === "mermaid" && i.push({ pos: o, node: s });
    }), i.length === 0) return;
    const r = t.tr;
    for (let s = i.length - 1; s >= 0; s--) {
      const { pos: o, node: a } = i[s], l = e.create({}, a.content.size > 0 ? a.content : void 0);
      r.replaceWith(o, o + a.nodeSize, l);
    }
    this.editor.view.dispatch(r);
  }, addProseMirrorPlugins() {
    return [new MS({ key: new j1("mermaidTransform"), appendTransaction(t, e, n) {
      if (!t.some((l) => l.docChanged)) return null;
      const r = n.schema.nodes.mermaid, s = n.schema.nodes.codeBlock;
      if (!r || !s) return null;
      const o = [];
      if (n.doc.descendants((l, c) => {
        l.type === s && l.attrs.language === "mermaid" && o.push({ pos: c, node: l });
      }), o.length === 0) return null;
      const a = n.tr;
      for (let l = o.length - 1; l >= 0; l--) {
        const { pos: c, node: u } = o[l], d = r.create({}, u.content.size > 0 ? u.content : void 0);
        a.replaceWith(c, c + u.nodeSize, d);
      }
      return a;
    } })];
  } });
} });
function z$r(t = {}) {
  const { showErrorDetails: e = true, onNodeLinkClick: n } = t;
  return { name: "mermaid", extensions: [APa.configure({ showErrorDetails: e, onNodeLinkClick: n })] };
}
