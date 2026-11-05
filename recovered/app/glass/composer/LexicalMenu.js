// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalMenu.js range:27247494..27247968
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, pi, Hn, Bs, LX, NA, cI
// wrapper-init: Tus
// hoisted-owner: LexicalContextMenuPlugin.js (app-out-vs-workbench-workbench-glass-main-js:4701); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Tus = L({ "LexicalMenu.js"() {
  "use strict";
  E(), at(), pi(), Hn(), Bs(), LX(), NA(), cI(), Vml = (t) => {
    const e = rl().document.getElementById("typeahead-menu");
    if (!e) return;
    const n = e.getBoundingClientRect();
    n.top + n.height > rl().innerHeight && e.scrollIntoView({ block: "center" }), n.top < 0 && e.scrollIntoView({ block: "center" }), t.scrollIntoView({ block: "nearest" });
  }, Kml = jd("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
} }), 