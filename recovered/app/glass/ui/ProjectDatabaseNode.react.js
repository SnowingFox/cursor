// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectDatabaseNode.react.js range:33760925..33764071
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.923Z
_Yf = L({ "ProjectDatabaseNode.react.js"() {
  "use strict";
  E(), Mt(), OCs(), $Cs(), Njl(), sYf(), uYf(), pYf = 5, mYf = 2, gYf = { node: { k1xSpc: "glass-1lliihq", $$css: true } }, fYf = fBw(function({ node: e, editor: n, getPos: i, extension: r }) {
    const s = e.textContent, { board: o, diagnostics: a, loading: l } = EBw({ loader: r.options.loadProjectDatabase, source: s }), c = Ljl(() => {
      if (!(o === void 0 || o.config.defaultViewMode === "list" || o.config.defaultViewMode === "grid")) return Mph(CBw(o));
    }, [o]), u = EKf({ rootClass: "ui-project-database-node", stylexStyles: gYf.node, style: c === void 0 ? void 0 : { "--project-database-board-min-width": `${c}px` } }), d = r.options.onLinkClick, h = (g) => {
      o !== void 0 && dYf({ board: o, editor: n, getPos: i, node: e, update: { kind: "mode", mode: wBw(g) } });
    }, p = (g) => {
      o !== void 0 && dYf({ board: o, editor: n, getPos: i, node: e, update: { kind: "state", state: g } });
    };
    return NNn(Unt, { className: u.className, "data-project-database-node": "true", style: u.style, children: [NNn("div", { contentEditable: false, "data-rte-prose-boundary": "", className: "glass-1lliihq", suppressContentEditableWarning: true, children: [l ? FZt(nn, { as: "div", color: "secondary", role: "status", size: "sm", children: "Loading project tasks…" }) : null, o !== void 0 ? NNn(Lit, { renderLinkContent: r.options.renderLinkContent, children: [a.length > 0 ? FZt(kBw, { diagnostics: a }) : null, FZt(cYf, { board: o, onLinkClick: d, onViewModeChange: h, onViewStateChange: p })] }) : null, o === void 0 && !l ? FZt(SBw, { diagnostics: a }) : null] }), FZt(gli, { className: "glass-1s85apg" })] });
  }), vYf = o6.create({ name: "projectDatabase", group: "block", content: "text*", inline: false, code: true, marks: "", atom: false, defining: true, addOptions() {
    return {};
  }, renderMarkdown(t) {
    return xBw(IBw(t));
  }, parseHTML() {
    return [{ tag: 'pre[data-language="cursor-project"]', preserveWhitespace: "full" }, { tag: 'div[data-type="projectDatabase"]', preserveWhitespace: "full" }, { tag: "pre", preserveWhitespace: "full", priority: 100, getAttrs: (t) => t instanceof HTMLElement && (t.querySelector("code")?.classList.contains("language-cursor-project") || t.classList.contains("language-cursor-project") || t.getAttribute("data-language") === "cursor-project") ? null : false }];
  }, renderHTML({ HTMLAttributes: t }) {
    return ["pre", fE(t, { "data-language": "cursor-project", "data-type": "projectDatabase" }), ["code", { class: "language-cursor-project" }, 0]];
  }, addNodeView() {
    return PSt(fYf, { ignoreMutation: () => true });
  }, onCreate() {
    const t = this.editor.state.tr;
    hYf(this.editor.state, t) && this.editor.view.dispatch(t);
  }, addProseMirrorPlugins() {
    return [new wKf({ key: new CKf("projectDatabaseTransform"), appendTransaction(t, e, n) {
      if (!t.some((r) => r.docChanged)) return null;
      const i = n.tr;
      return hYf(n, i) ? i : null;
    } })];
  } });
} });
function RBw(t = {}) {
  return { name: "projectDatabase", extensions: [vYf.configure(t)] };
}
