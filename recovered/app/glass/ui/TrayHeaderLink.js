// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderLink.js range:17657337..17660161
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.110Z
var nm1 = L({ "TrayHeaderLink.js"() {
  "use strict";
  E();
} });
import { jsx as aAa, jsxs as im1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as rm1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function sm1() {
  return { root: vSp.base, body: bSp.base, warning: ySp.base };
}
function fSp(t, e, n) {
  for (const i of e.replace(/\r\n?/g, `
`).split(`
`)) t.push({ text: i, kind: n });
}
function om1(t) {
  return [{ content: t.text, col: 0, className: `ui-update-logs__line ui-update-logs__line--${t.kind}`, color: _Sp[t.kind] }];
}
function am1(t, e) {
  const n = [];
  return t.forEach((i, r) => {
    i.truncated && fSp(n, kSp, "truncated"), i.lines.forEach((s) => {
      const o = e && s.kind === "stderr" ? "stdout" : s.kind;
      fSp(n, s.text, o);
    }), r < t.length - 1 && n.push({ text: "", kind: "stdout" });
  }), { code: n.map((i) => i.text).join(`
`), tokens: n.map(om1) };
}
function lAa(t) {
  const e = rm1(26), { commands: n, warning: i, copyText: r, stderrSameColorAsStdout: s } = t, o = s === void 0 ? false : s;
  let a;
  e[0] !== n ? (a = n ?? [], e[0] = n, e[1] = a) : a = e[1];
  let l;
  e[2] !== a ? (l = a.flatMap(lm1), e[2] = a, e[3] = l) : l = e[3];
  const c = l;
  let u;
  e[4] !== c || e[5] !== o ? (u = am1(c, o), e[4] = c, e[5] = o, e[6] = u) : u = e[6];
  const d = u, h = c.length > 0;
  if (!h && !i) return null;
  let p, g, f;
  if (e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const C = sm1();
    g = ar({ rootClass: "ui-update-logs", stylexStyles: C.root }), p = gn(C.body), f = gn(C.warning), e[7] = p, e[8] = g, e[9] = f;
  } else p = e[7], g = e[8], f = e[9];
  const _ = f;
  let b;
  e[10] !== i || e[11] !== _ ? (b = i != null && i.length > 0 && aAa("div", { className: _.className, style: _.style, children: i }), e[10] = i, e[11] = _, e[12] = b) : b = e[12];
  let y;
  e[13] !== r || e[14] !== h || e[15] !== d ? (y = h && aAa(S1t, { className: "language-text", copyText: r, showIndentGuides: false, scrollMaxHeight: SSp, tokens: d.tokens, children: d.code }), e[13] = r, e[14] = h, e[15] = d, e[16] = y) : y = e[16];
  let S;
  e[17] !== p.className || e[18] !== p.style || e[19] !== b || e[20] !== y ? (S = im1("div", { className: p.className, style: p.style, children: [b, y] }), e[17] = p.className, e[18] = p.style, e[19] = b, e[20] = y, e[21] = S) : S = e[21];
  let k;
  return e[22] !== g.className || e[23] !== g.style || e[24] !== S ? (k = aAa("div", { className: g.className, style: g.style, children: S }), e[22] = g.className, e[23] = g.style, e[24] = S, e[25] = k) : k = e[25], k;
}
function lm1(t) {
  const e = t.lines.filter(cm1);
  return e.length === 0 ? [] : [{ ...t, lines: e }];
}
function cm1(t) {
  return t.text.length > 0;
}
var vSp, _Sp, bSp, ySp, SSp, kSp, 