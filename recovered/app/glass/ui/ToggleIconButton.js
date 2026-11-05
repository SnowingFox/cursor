// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToggleIconButton.js range:7061511..7062159
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.076Z
var X7t = L({ "ToggleIconButton.js"() {
  "use strict";
  E(), mf(), owh(), fd(), m2(), RnS();
} });
function LnS(t, e, n, i) {
  const r = e ? cwh : 0;
  switch (t) {
    case void 0:
      return { sync: !e, asyncDebounceMs: r };
    case "sync":
      return { tokenization: { kind: "inline" } };
    case "async":
    case "worker": {
      if (e) return { tokenization: { kind: "worker", debounceMs: r, onRefusal: "plain" } };
      const s = t === "worker" ? null : n;
      return { tokenization: { kind: "inline-when-warm", ...s === void 0 ? {} : { scheduleWarmup: s }, ...i === void 0 ? {} : { scheduleApply: i } } };
    }
  }
}
var cwh, 