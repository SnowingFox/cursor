// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelListRowLabel.js range:16856145..16856821
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.129Z
// wrapper: ModelListRowLabelModule deps:3 [E, JY, ACa]
// declarations: ModelListRowLabelModule, LJS
// anchors: esm-index-production
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var ModelListRowLabelModule = L({
  "ModelListRowLabel.js"() {
    "use strict";

    E(), JY(), ACa();
  }
});
import { useRef as tdp, useLayoutEffect as NJS } from "./react-runtime/react/esm-index-production.js";
function LJS({
  isOpen: t,
  shouldPin: e,
  liveSelection: n,
  liveModel: i
}) {
  const r = tdp({
      selection: n,
      model: i
    }),
    s = tdp(false),
    o = t && !s.current,
    a = r.current,
    l = t && s.current && e && a.model === void 0 && i !== void 0 && n?.modelId === i.name && (a.selection === void 0 || a.selection.modelId === i.name);
  return NJS(() => {
    (o || l) && (r.current = {
      selection: n,
      model: i
    }), s.current = t;
  }, [l, t, o, i, n]), e && !o && !l ? a : {
    selection: n,
    model: i
  };
}
