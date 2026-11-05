// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CloudAgentTurnTimings.js range:31565786..31566285
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.181Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js
// path-candidate: none (no nls basename match; path inferred, confidence C)

var CloudAgentTurnTimingsModule = L({
  "CloudAgentTurnTimings.js"() {
    "use strict";

    E();
  }
});
import { useEffect as NSw, useState as LSw } from "./react-runtime/react/esm-index-production.js";
function vNf(t, e) {
  const [n, i] = LSw(() => e ? t.peekState(e) : void 0);
  return NSw(() => {
    if (!e) {
      i(void 0);
      return;
    }
    const r = t.getState(e);
    i(r.value);
    const s = r.onChange(o => {
      i(o);
    });
    return () => {
      s.dispose(), r.dispose();
    };
  }, [e, t]), n;
}
