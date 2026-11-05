// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DataFenceNode.js range:18143676..18147336
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.597Z
qEp = L({ "DataFenceNode.js"() {
  "use strict";
  E(), Fy(), gE(), v_e(), Aw(), GEp = cw1(function(e) {
    const n = lw1(18), { node: i, editor: r, extension: s } = e, { renderers: o, showSourceToggle: a } = s.options, l = String(i.attrs.kind ?? ""), c = String(i.attrs.meta ?? ""), u = i.textContent, d = r.isEditable, [h, p] = uw1(false), g = o[l];
    let f;
    n[0] !== g || n[1] !== d || n[2] !== l || n[3] !== c || n[4] !== u ? (f = X_i("div", { contentEditable: false, className: "ui-euugli", children: g ? X_i(g, { kind: l, meta: c, source: u, editable: d }) : $Ep("span", { className: "ui-4b2ntj ui-1j6dyjg ui-1d3mw78", children: ["No renderer for `", l, "`"] }) }), n[0] = g, n[1] = d, n[2] = l, n[3] = c, n[4] = u, n[5] = f) : f = n[5];
    let _;
    n[6] !== d || n[7] !== h || n[8] !== a ? (_ = a ? X_i("div", { contentEditable: false, className: "ui-78zum5 ui-13a6bvl ui-1gslohp", children: X_i("button", { type: "button", "aria-expanded": h, onClick: () => p(hw1), className: "ui-jyslct ui-c342km ui-jbqb8w ui-4b2ntj ui-jb2p0i ui-1j6dyjg ui-1d3mw78 ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-1ypdohk ui-7gh5u8", children: h ? "Hide data" : d ? "Edit data" : "Show data" }) }) : null, n[6] = d, n[7] = h, n[8] = a, n[9] = _) : _ = n[9];
    let b;
    n[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = { 0: { className: "ui-1s85apg" }, 1: { className: "ui-1lliihq ui-1xmf6yo ui-hayvgc ui-tfojpt ui-1evy7pa ui-126k92a ui-1001c07 ui-15ne75x ui-19uwr1l ui-pd0smn ui-1lnot31 ui-15bsgld" } }, n[10] = b) : b = n[10];
    const y = b[!!h << 0];
    let S;
    n[11] !== y ? (S = X_i(gli, { ...y }), n[11] = y, n[12] = S) : S = n[12];
    let k;
    return n[13] !== l || n[14] !== f || n[15] !== _ || n[16] !== S ? (k = $Ep(Unt, { "data-rte-prose-boundary": "", "data-data-fence": l, className: "ui-1n2onr6 ui-12oomfp ui-olhukv", children: [f, _, S] }), n[13] = l, n[14] = f, n[15] = _, n[16] = S, n[17] = k) : k = n[17], k;
  }), CPa = o6.create({ name: "dataFence", group: "block", content: "text*", inline: false, code: true, marks: "", atom: false, defining: true, addOptions() {
    return { HTMLAttributes: {}, renderers: {}, showSourceToggle: true };
  }, addAttributes() {
    return { kind: { default: "", parseHTML: (t) => t.getAttribute("data-fence-kind") ?? "", renderHTML: (t) => ({ "data-fence-kind": t.kind }) }, meta: { default: "", parseHTML: (t) => t.getAttribute("data-fence-meta") ?? "", renderHTML: (t) => ({ "data-fence-meta": t.meta }) } };
  }, renderMarkdown(t) {
    const e = t.content?.map((r) => r.type === "text" ? r.text : "").join("") ?? "", n = t.attrs ?? {};
    return `\`\`\`${[n.kind ?? "", n.meta ?? ""].filter(Boolean).join(" ")}
${e}
\`\`\`

`;
  }, parseHTML() {
    return [{ tag: "pre[data-fence-kind]", preserveWhitespace: "full" }];
  }, renderHTML({ HTMLAttributes: t }) {
    return ["pre", fE(this.options.HTMLAttributes, t, { "data-type": "data-fence" }), ["code", {}, 0]];
  }, addNodeView() {
    return PSt(GEp, { ignoreMutation: () => true });
  }, onCreate() {
    const { state: t } = this.editor, e = HEp(t, this.options.renderers);
    e.length !== 0 && this.editor.view.dispatch(WEp(t.tr, e, t));
  }, addProseMirrorPlugins() {
    const t = this.options.renderers;
    return [new MS({ key: new j1("dataFenceTransform"), appendTransaction(e, n, i) {
      if (!e.some((s) => s.docChanged)) return null;
      const r = HEp(i, t);
      return r.length === 0 ? null : WEp(i.tr, r, i);
    } })];
  } });
} });
function pw1(t) {
  return { name: "dataFence", extensions: [CPa.configure({ renderers: t.renderers, showSourceToggle: t.showSourceToggle ?? true })] };
}
