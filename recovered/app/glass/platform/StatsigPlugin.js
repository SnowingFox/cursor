// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StatsigPlugin.js range:670896..671970
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.178Z
// wrapper: oSy deps:1 [E]
// declarations: EEo, aSy, ZJu, lSy, cSy, uSy, IEo
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
oSy = L({ "StatsigPlugin.js"() {
  "use strict";
  E();
} });
function EEo(t, e, n, i) {
  return { name: t, details: e, ruleID: n?.rule_id ?? "", __evaluation: n, value: i };
}
function aSy(t, e, n) {
  return { ...EEo(t, e, n, n?.value === true), idType: n?.id_type ?? null };
}
function ZJu(t, e, n) {
  const i = n?.value ?? {};
  return { ...EEo(t, e, n, i), get: IEo(t, n?.value) };
}
function lSy(t, e, n) {
  return { ...ZJu(t, e, n), groupName: n?.group_name ?? null };
}
function cSy(t, e, n, i) {
  return { ...EEo(t, e, n, void 0), get: IEo(t, n?.value, i), groupName: n?.group_name ?? null, __value: n?.value ?? {} };
}
function uSy(t, e, n, i) {
  return { ...t, ...e, get: IEo(t.name, n, i) };
}
function IEo(t, e, n) {
  return (i, r) => {
    const s = e?.[i] ?? null;
    return s == null ? r ?? null : r != null && !$Qu(s, r) ? (QR.warn(`Parameter type mismatch. '${t}.${i}' was found to be type '${typeof s}' but fallback/return type is '${typeof r}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`), r ?? null) : (n?.(i), s);
  };
}
