// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BackgroundComposerInstanceHeaderForComposerPane.js range:32870710..32871805
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, pi, pd, vu, pa, Xo, x_, sk, gT, vo, $2w, oPw
// wrapper-init: lPw -> backgroundComposerInstanceHeaderForComposerPaneModuleInit
// hoisted-owner: filterGroup.js (app-out-vs-workbench-workbench-glass-main-js:6137); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: lPw -> backgroundComposerInstanceHeaderForComposerPaneModuleInit (apply-map AST equivalent)

var backgroundComposerInstanceHeaderForComposerPaneModuleInit = L({
  "BackgroundComposerInstanceHeaderForComposerPane.js"() {
    "use strict";

    E(), at(), pi(), pd(), vu(), pa(), Xo(), x_(), sk(), gT(), vo(), $2w(), oPw();
  }
});
function cPw(t, e) {
  const n = new Set(t),
    i = [];
  for (const r of e) n.has(r) && i.push(r);
  return i;
}
function J9l({
  allValues: t,
  selectedValues: e
}) {
  const n = cPw(e, t),
    i = n.length === 0 || n.length === t.length,
    r = i ? t : n;
  return {
    isAllSelected: i,
    selectedValues: r,
    selectedValueSet: new Set(r)
  };
}
function $8f(t, e) {
  return t.isAllSelected || t.selectedValueSet.has(e);
}
function H8f({
  allValues: t,
  selectedValues: e,
  value: n
}) {
  const i = J9l({
      allValues: t,
      selectedValues: e
    }),
    r = i.selectedValues.filter(s => s !== n);
  return r.length === i.selectedValues.length && r.push(n), r.length === 0 || r.length === t.length ? [...t] : t.filter(s => r.includes(s));
}
function eBl({
  allValues: t,
  currentValues: e,
  nextValues: n
}) {
  const i = new Set(t),
    r = /* @__PURE__ */new Set();
  for (const s of e) i.has(s) || r.add(s);
  for (const s of n) r.add(s);
  return r;
}
