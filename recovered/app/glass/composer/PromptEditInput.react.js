// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptEditInput.react.js range:31521897..31522925
// basis: nls-exact + esbuild-wrapper
// confidence: B
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, pa, wm, TNl, gIf, Hn, Bs, Bt, Jle, yEf, HIf, KIf, PMf, A5l, N5l, L5l, xDf, D$, BDf, W_w, WDf, YDf, DDf, ZDf, h3f, zIt, JM, ZB, Lg, f3f, R1s, xd, hFl, I3f, bb, rs, bd, ms, It, Ks, qc, tee, Zi, Hx, A3f, wS, Kf, Fxn, Sr, fo, Ss, ACe, DJ, a0, Xbw, gFl, ICi, L1s, uv, iCt, Ux, TIt, N3f, EPn, PPn, O3f, Fx, BVe, jPn, Hle, tPi, nPi, _Fl
// wrapper-init: hyw
// hoisted-owner: composerHumanRowEditWheel.js (app-out-vs-workbench-workbench-glass-main-js:5897); trailing declarations ownership inferred from segment adjacency
// path: src/vs/workbench/contrib/composer/browser/components/PromptEditInput.react.tsx
// renamed: none

hyw = L({ "PromptEditInput.react.js"() {
  "use strict";
  E(), Mt(), pa(), wm(), TNl(), gIf(), Hn(), Bs(), Bt(), Jle(), yEf(), HIf(), KIf(), PMf(), A5l(), N5l(), L5l(), xDf(), D$(), BDf(), W_w(), WDf(), YDf(), DDf(), ZDf(), h3f(), zIt(), JM(), ZB(), Lg(), f3f(), R1s(), xd(), hFl(), I3f(), bb(), rs(), bd(), ms(), It(), Ks(), qc(), tee(), Zi(), Hx(), A3f(), wS(), Kf(), Fxn(), Sr(), fo(), Ss(), ACe(), DJ(), a0(), Xbw(), gFl(), ICi(), L1s(), uv(), iCt(), Ux(), TIt(), N3f(), EPn(), PPn(), O3f(), Fx(), BVe(), jPn(), Hle(), tPi(), nPi(), _Fl(), F3f = new ca([]), B3f = {};
} });
function pyw(t, e) {
  const n = t.closest(`.${U3f}`);
  if (!n) return false;
  const { scrollTop: i, scrollHeight: r, clientHeight: s } = n;
  return e < 0 ? i > 0 : e > 0 ? i + s < r : false;
}
function myw(t, e) {
  return $u(t) && pyw(t, e);
}
function gyw(t) {
  const e = (n) => {
    myw(n.target, n.deltaY) && n.stopPropagation();
  };
  return t.addEventListener("wheel", e), () => {
    t.removeEventListener("wheel", e);
  };
}
var U3f, 