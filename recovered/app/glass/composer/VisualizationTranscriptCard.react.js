// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VisualizationTranscriptCard.react.js range:32177764..32178462
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Hn, Ki, Xo, Aks, yxw, Sxw
// wrapper-init: Ixw
// hoisted-owner: visualizationContentCache.react.js (app-out-vs-workbench-workbench-glass-main-js:6058); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Ixw = L({ "VisualizationTranscriptCard.react.js"() {
  "use strict";
  E(), Mt(), Hn(), Ki(), Xo(), Aks(), yxw(), Sxw(), n4f = "Visualization", i4f = "Rendering visualization…", r4f = "Visualization could not be displayed", s4f = "visualization-render", o4f = em.asBrowserUri("vs/workbench/contrib/composer/browser/transcript/cursorContent/visualization/visualizationFrame.html").toString(true);
} });
import { useCallback as xxw } from "./react-runtime/react/esm-index-production.js";
function Axw(t) {
  return `${t.composerId}\0${t.src}`;
}
function Rxw(t) {
  const e = Axw(t);
  return { initialHeightPx: M4l.peek(e), recordHeight: xxw((n) => {
    M4l.set(e, n);
  }, [e]) };
}
var a4f, M4l, 