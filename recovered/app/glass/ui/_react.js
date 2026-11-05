// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: _react.js range:5899303..5900510
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.484Z
var UAr = L({ "_react.js"() {
  "use strict";
  E();
} });
import l8y from "./react-runtime/react/esm-index-production.js";
function c8y() {
  if (crh) return BAr;
  crh = 1;
  var t = l8y;
  function e(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : e, i = t.useState, r = t.useEffect, s = t.useLayoutEffect, o = t.useDebugValue;
  function a(d, h) {
    var p = h(), g = i({ inst: { value: p, getSnapshot: h } }), f = g[0].inst, _ = g[1];
    return s(function() {
      f.value = p, f.getSnapshot = h, l(f) && _({ inst: f });
    }, [d, p, h]), r(function() {
      return l(f) && _({ inst: f }), d(function() {
        l(f) && _({ inst: f });
      });
    }, [d]), o(p), p;
  }
  function l(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var p = h();
      return !n(d, p);
    } catch {
      return true;
    }
  }
  function c(d, h) {
    return h();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return BAr.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : u, BAr;
}
var crh, 