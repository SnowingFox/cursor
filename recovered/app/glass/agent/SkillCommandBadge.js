// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SkillCommandBadge.js range:15758758..15760035
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.262Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, IconColorPickerPanel.js, icon.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, IconColorPickerPanel.js, icon.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
pQh = L({ "SkillCommandBadge.js"() {
  "use strict";
  E(), Va(), igi(), fd(), hQh = { root: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-1pha0wt", kXLuUW: "ui-11njtxf", khDVqt: "ui-uxw1ft", $$css: true } };
} });
function mQh(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}
function P4S(t) {
  return mQh(t) && fQh.has(t.nodeName);
}
function gQh(t) {
  if (t.nodeType === Node.TEXT_NODE) return t.nodeValue ?? "";
  if (!mQh(t)) return "";
  if (t.nodeName === "BR") return `
`;
  let e = "";
  return t.childNodes.forEach((n) => {
    e += gQh(n);
  }), e;
}
function t1a(t, e) {
  let n = null;
  const i = () => {
    n !== null && (e.push(...n.split(`
`)), n = null);
  };
  t.childNodes.forEach((r) => {
    if (!P4S(r)) {
      n = (n ?? "") + gQh(r);
      return;
    }
    if (i(), r.nodeName === "P") {
      if (r.hasAttribute(n1a)) {
        e.push("");
        return;
      }
      const s = e.length;
      t1a(r, e), e.length === s && e.push("");
      return;
    }
    t1a(r, e);
  }), i();
}
function M4S(t, e) {
  if (!e || e.rangeCount !== 1) return null;
  const n = e.getRangeAt(0);
  if (n.collapsed || !t.contains(n.startContainer) || !t.contains(n.endContainer)) return null;
  const i = [];
  return t1a(n.cloneContents(), i), i.join(`
`);
}
var n1a, fQh, 