// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FormattingLinkEditor.js range:18191945..18192587
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.693Z
var c01 = L({ "FormattingLinkEditor.js"() {
  "use strict";
  E(), Q3(), fd();
} });
function SIp(t) {
  return t instanceof Q_ && !t.empty;
}
function MPa(t, e) {
  let n = 1, i = 1;
  for (let r = 0; r < t && r < e.length; r++) e[r] === `
` ? (n++, i = 1) : i++;
  return { line: n, column: i };
}
function nbi(t, e, n, i = "markdown") {
  const r = t.state.doc.textBetween(0, t.state.doc.content.size, `
`), s = t.state.doc.textBetween(e, n, " "), o = MPa(e, r), a = MPa(n, r);
  return { selectedText: s, fencedText: `\`\`\`${i}
${s}
\`\`\``, range: { startLine: o.line, startColumn: o.column, endLine: a.line, endColumn: a.column } };
}
