// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolApprovalReasonStack.js range:15319198..15321653
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.276Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, ToolApprovalContext.js, ToolApprovalReasonStack.stylex.js, tool-approval-types.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, ToolApprovalContext.js, ToolApprovalReasonStack.stylex.js, tool-approval-types.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
gmi = L({ "ToolApprovalReasonStack.js"() {
  "use strict";
  E(), Va(), l6r(), nDS(), XSn(), hba = " • ", nzh = "Not in allowlist:", izh = "Not in team allowlist:";
} });
function u6r(t) {
  return Math.min(Math.max(0, t), ozh);
}
function rzh(t) {
  const e = t.lines[t.row];
  if (e) return e;
  const n = [];
  return t.lines[t.row] = n, n;
}
function szh(t, e) {
  t.cursor = u6r(t.cursor);
  const n = rzh(t);
  for (; n.length < t.cursor; ) n.push(" ");
  n[t.cursor] = e, t.cursor = u6r(t.cursor + 1);
}
function rDS(t, e) {
  const n = rzh(t);
  switch (e) {
    case 1:
      for (let i = 0; i <= t.cursor && i < n.length; i++) n[i] = " ";
      return;
    case 2:
      n.length = 0, t.cursor = 0;
      return;
    default:
      n.length = Math.min(n.length, t.cursor);
  }
}
function d6r(t, e) {
  const n = t.split(";")[0] ?? "", i = Number.parseInt(n.replace(/^\?/, ""), 10);
  return Number.isFinite(i) ? i : e;
}
function sDS(t, e, n) {
  switch (n) {
    case "K":
      rDS(t, d6r(e, 0));
      return;
    case "G":
      t.cursor = u6r(d6r(e, 1) - 1);
      return;
    case "C":
      t.cursor = u6r(t.cursor + Math.max(1, d6r(e, 1)));
      return;
    case "D":
      t.cursor = Math.max(0, t.cursor - Math.max(1, d6r(e, 1)));
      return;
  }
}
function oDS(t, e, n) {
  for (let i = e + 2; i < t.length; i++) {
    const r = t.charCodeAt(i);
    if (r >= 64 && r <= 126) return sDS(n, t.slice(e + 2, i), t.charAt(i)), i;
  }
  return t.length - 1;
}
function aDS(t, e) {
  for (let n = e + 2; n < t.length; n++) {
    if (t.charCodeAt(n) === 7) return n;
    if (t.charCodeAt(n) === 27 && t[n + 1] === "\\") return n + 1;
  }
  return t.length - 1;
}
function lDS(t, e, n) {
  const i = t[e + 1];
  return i === "[" ? oDS(t, e, n) : i === "]" ? aDS(t, e) : Math.min(i === "(" || i === ")" ? e + 2 : e + 1, t.length - 1);
}
function cDS(t) {
  const e = { lines: [[]], row: 0, cursor: 0 };
  for (let n = 0; n < t.length; n++) {
    const i = t.charAt(n);
    switch (i) {
      case "\r":
        e.cursor = 0;
        break;
      case `
`:
        e.row = e.lines.length, e.lines.push([]), e.cursor = 0;
        break;
      case "\b":
        e.cursor = Math.max(0, e.cursor - 1);
        break;
      case "\x1B":
        n = lDS(t, n, e);
        break;
      case "	":
        szh(e, i);
        break;
      default:
        i >= " " && szh(e, i);
    }
  }
  return e.lines.map((n) => n.join("")).join(`
`);
}
var ozh, 