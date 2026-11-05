// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarkdownSection.js range:39204811..39206685
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, Am, pi, aS, S9e, lMn, eD, IL, mk
// wrapper-init: BlC
// hoisted-owner: MentionDemoSection.js (app-out-vs-workbench-workbench-glass-main-js:7773); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

BlC = L({ "MarkdownSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), Am(), pi(), aS(), S9e(), lMn(), eD(), IL(), mk(), wYv = wt("<div><h3>Plain Text Stream:</h3><pre>"), CYv = wt("<div><h3>Streamed Chunks:"), TYv = wt("<div><div></div><div>"), EYv = wt('<div><div><div><textarea placeholder="Enter your Markdown here"></textarea></div><div></div></div><div><label><input type=checkbox> Use Cached Chunks'), IYv = wt("<div><span>Chunk <!>:</span> <span>"), xYv = Ok(_Me), AYv = `# Hello World

This is a sample markdown document.

## Lists

- Item 1
- Item 2
  - Nested item
- Item 3

1. Numbered item
2. Another numbered item

> This is a blockquote
> With multiple lines

It has raw urls (with and without backticks): \`https://www.google.com\` and https://www.bing.com

And markdown links: [Google](https://www.google.com)`, l6n = cs(false), Ren = cs(""), Edt = cs(false), c6n = cs(null), Idt = cs([]), RYv = cs(null, (t, e) => {
    e(Ren, ""), e(Idt, []), e(Edt, true);
  }), PYv = cs(null, (t, e, n) => {
    e(Ren, t(Ren) + n), e(Idt, [...t(Idt), n]);
  });
} });
function UlC() {
  const t = () => ({ ...tIt(), namespace: "mention-demo", onError: (e) => {
    console.error(e);
  } });
  return Ee(pk, { title: "Mention Demo", get children() {
    return [(() => {
      var e = MYv();
      return e.style.setProperty("margin-bottom", "12px"), e.style.setProperty("color", "var(--vscode-descriptionForeground)"), e;
    })(), Ee(tYt, Zy(Cnt, { maxHeight: 150, scrollableStyle: { border: "1px solid var(--vscode-input-border)", "border-radius": "6px", padding: "0px" }, innerContainerStyle: { padding: "0px 0.5rem" }, placeholder: "Try typing @ to add a mention...", onSubmit: (e) => console.log("Submitted:", e), supportsGit: false, supportsLink: false, useArrowsForHistory: false, source: "mention_demo", editorConfig: t }))];
  } });
}
var MYv, 