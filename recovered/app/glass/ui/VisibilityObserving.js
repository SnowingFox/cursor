// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VisibilityObserving.js range:633433..633996
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.143Z
sEo = L({ "VisibilityObserving.js"() {
  "use strict";
  E(), I6t(), fgr = "foreground", vgr = "background", iEo = [], rEo = fgr, _gr = false, PZn = () => _gr, tJu = (t) => {
    iEo.unshift(t);
  }, MZn = (t) => {
    t !== rEo && (rEo = t, iEo.forEach((e) => e(t)));
  }, ugr("focus", () => {
    _gr = false, MZn(fgr);
  }), ugr("blur", () => MZn(vgr)), GQu("visibilitychange", () => {
    MZn(document.visibilityState === "visible" ? fgr : vgr);
  }), ugr(zQu(), () => {
    _gr = true, MZn(vgr);
  });
} }), nJu, iJu, rJu, sJu, oJu, aJu, oEo, Zdn, Qdn, lJu, 