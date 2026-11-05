// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StableID.js range:642462..643439
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.027Z
Cgr = L({ "StableID.js"() {
  "use strict";
  E(), agr(), Nde(), I6t(), a_t(), lEo(), Jdn = {}, wgr = {}, uEo = {}, h$e = { cookiesEnabled: false, randomID: Math.random().toString(36), get: (t) => {
    if (uEo[t]) return null;
    if (Jdn[t] != null) return Jdn[t];
    let e = null;
    return e = Cyy(t), e != null ? (Jdn[t] = e, cEo(e, t), e) : (e = wyy(t), e == null && (e = kgr()), cEo(e, t), dJu(e, t), Jdn[t] = e, e);
  }, setOverride: (t, e) => {
    Jdn[e] = t, cEo(t, e), dJu(t, e);
  }, _setCookiesEnabled: (t, e) => {
    wgr[t] = e;
  }, _setDisabled: (t, e) => {
    uEo[t] = e;
  } };
} });
function DZn(t, e, n) {
  try {
    const i = JSON.parse(JSON.stringify(t));
    return e != null && e.environment != null ? i.statsigEnvironment = e.environment : n != null && (i.statsigEnvironment = { tier: n }), i;
  } catch {
    return QR.error("Failed to JSON.stringify user"), { statsigEnvironment: void 0 };
  }
}
function pJu(t) {
  return t ? KTo(t) : null;
}
