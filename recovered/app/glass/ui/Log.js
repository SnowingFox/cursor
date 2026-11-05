// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Log.js range:622762..623404
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.782Z
Nde = L({ "Log.js"() {
  "use strict";
  E(), NQu = " DEBUG ", LQu = "  INFO ", OQu = "  WARN ", FQu = " ERROR ", qdn = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 }, jTo = class aXi {
    static info(...e) {
      aXi.level >= qdn.Info && console.info(LQu, ...igr(e));
    }
    static debug(...e) {
      aXi.level >= qdn.Debug && console.debug(NQu, ...igr(e));
    }
    static warn(...e) {
      aXi.level >= qdn.Warn && console.warn(OQu, ...igr(e));
    }
    static error(...e) {
      aXi.level >= qdn.Error && console.error(FQu, ...igr(e));
    }
  }, jTo.level = qdn.Warn, QR = jTo;
} }), i_t, $To, BQu, T6t, HTo, WTo, GTo, zdn, 