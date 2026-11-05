// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MentionOnlyPlaceholderExtension.js range:17349137..17349558
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.121Z
// wrapper: Tl1 deps:8 [E, Fy, gE, Doe, lGe, _rt, Aw, HQ]
// declarations: yvp, Svp
// anchors: is-editor-mention-only
// group: unclassified
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Tl1 = L({ "MentionOnlyPlaceholderExtension.js"() {
  "use strict";
  E(), Fy(), gE(), Doe(), lGe(), _rt(), Aw(), HQ(), bvp = "is-editor-mention-only";
} });
function yvp(t) {
  t.chain().focus().insertContent("	").run();
}
function Svp({ event: t, editor: e, shouldConsumeTabForIndent: n, visibleItemCount: i }) {
  return t.key !== "Tab" || t.shiftKey || !n || i > 0 ? false : (t.preventDefault(), e && yvp(e), true);
}
