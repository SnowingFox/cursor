// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputToolbar.js range:17436775..17438084
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, zrt, qu
// wrapper-init: q_p
// hoisted-owner: prompt-input-editor-text.js (app-out-vs-workbench-workbench-glass-main-js:2954); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

q_p = L({ "PromptInputToolbar.js"() {
  "use strict";
  E(), zrt(), qu(), D0e = { root: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-1qughib", kLKAdn: "ui-13ly8rp", kpe85a: "ui-1yxiud8", kGO01o: "ui-1xlntvz", kE3dHu: "ui-yab65l", kOIVth: "ui-ehausa", $$css: true }, compact: { k1xSpc: "ui-jp7ctv", $$css: true }, compactExpanded: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-1qughib", kLKAdn: "ui-13ly8rp", kpe85a: "ui-1yxiud8", kGO01o: "ui-1xlntvz", kE3dHu: "ui-yab65l", kOIVth: "ui-ehausa", $$css: true }, slot: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", $$css: true }, leftCollapsedHidesUntagged: { kaSXwO: "ui-k1mmrf", $$css: true }, left: { kOIVth: "ui-11twubx", k7Eaqz: "ui-euugli", kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-1r8uery", k9g6sI: "ui-12h1iku", kjooiF: "ui-ee6ls6", $$css: true }, right: { kOIVth: "ui-11twubx", kmuXW: "ui-2lah0s", $$css: true }, compactSlot: { k1xSpc: "ui-jp7ctv", $$css: true }, compactExpandedLeft: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-11twubx", $$css: true }, compactExpandedRight: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-ehausa", $$css: true } };
} });
function IGe(t) {
  return t.state.doc.textBetween(0, t.state.doc.content.size, `
`, (e) => e.type.name === "mentionNode" ? "" : e.text ?? "");
}
