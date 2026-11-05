// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerTaskBriefMarkdown.react.js range:34760403..34761569
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, ju, Bs, Ki, fn, bb, rs, ru, Ks, qc, mN, Ss, py, fo, PYf, LMi, EPn, zMi, ZPl, Kct, mn0
// wrapper-init: FIs
// hoisted-owner: use-delayed-flag.react.js (app-out-vs-workbench-workbench-glass-main-js:6626); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

FIs = L({ "ComposerTaskBriefMarkdown.react.js"() {
  "use strict";
  E(), Mt(), ju(), Bs(), Ki(), fn(), bb(), rs(), ru(), Ks(), qc(), mN(), Ss(), py(), fo(), PYf(), LMi(), EPn(), zMi(), ZPl(), Kct(), mn0(), OIs = { button: 0, altKey: false, ctrlKey: false, metaKey: false };
} });
import { c as huv } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as puv, useState as BIs } from "./react-runtime/react/esm-index-production.js";
function muv(t) {
  const e = huv(3), [n, i] = BIs(false);
  let r, s;
  return e[0] !== t ? (r = () => {
    const o = setTimeout(() => i(true), t);
    return () => clearTimeout(o);
  }, s = [t], e[0] = t, e[1] = r, e[2] = s) : (r = e[1], s = e[2]), puv(r, s), n;
}
function UIs(t, e) {
  const n = huv(4), [i, r] = BIs(false), [s, o] = BIs(t), [a, l] = BIs(e);
  !t && i && r(false), (s !== t || a !== e) && (o(t), l(e), t && r(false));
  let c, u;
  return n[0] !== t || n[1] !== e ? (c = () => {
    if (!t) return;
    const d = setTimeout(() => r(true), e);
    return () => clearTimeout(d);
  }, u = [t, e], n[0] = t, n[1] = e, n[2] = c, n[3] = u) : (c = n[2], u = n[3]), puv(c, u), t && i;
}
