// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LeadingContentExtension.js range:17347907..17349137
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.100Z
// wrapper: yl1 deps:6 [E, Fy, gE, Doe, Aw, HQ]
// declarations: Sl1, kl1, wl1, _vp, Cl1, bvp (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
yl1 = L({ "LeadingContentExtension.js"() {
  "use strict";
  E(), Fy(), gE(), Doe(), Aw(), HQ(), ywt = new j1("promptInputLeadingContent");
} });
function Sl1(t) {
  let e = false;
  return t.descendants((n) => {
    if (e || n.type.name === jne) return false;
    if (n.isText && (n.text ?? "").trim().length > 0) return e = true, false;
  }), e;
}
function kl1(t) {
  if (t) switch (t.kind) {
    case "single-line-truncated":
      return "white-space: nowrap";
    default:
      return t.kind;
  }
}
function wl1(t) {
  let e = null;
  return t.descendants((n, i) => n.isTextblock ? (hep(n) && (e = { pos: i, node: n }), false) : true), e;
}
function _vp(t) {
  return Sl1(t) ? null : wl1(t);
}
function Cl1(t) {
  return Rw.create({ name: "mentionOnlyPlaceholder", addProseMirrorPlugins() {
    return [new MS({ key: new j1("mentionOnlyPlaceholder"), props: { decorations: (e) => {
      const n = t.getPlaceholder();
      if (!n) return null;
      const i = _vp(e.doc);
      if (!i) return null;
      const r = kl1(t.getMentionChipPresentation());
      return wP.create(e.doc, [Rx.node(i.pos, i.pos + i.node.nodeSize, { class: bvp, "data-placeholder": n, ...r ? { style: r } : {} })]);
    } } })];
  } });
}
var bvp,
