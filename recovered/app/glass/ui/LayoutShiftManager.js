// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LayoutShiftManager.js range:238016..238631
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.769Z
gvy = L({ "LayoutShiftManager.js"() {
  "use strict";
  E(), eKu = class {
    constructor() {
      this._sessionValue = 0, this._sessionEntries = [];
    }
    _processEntry(t) {
      if (t.hadRecentInput) return;
      const e = this._sessionEntries[0], n = this._sessionEntries[this._sessionEntries.length - 1];
      this._sessionValue && e && n && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (this._sessionValue += t.value, this._sessionEntries.push(t)) : (this._sessionValue = t.value, this._sessionEntries = [t]), this._onAfterProcessingUnexpectedShift?.(t);
    }
  };
} }), qFt, 