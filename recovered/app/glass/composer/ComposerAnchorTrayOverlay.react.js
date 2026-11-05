// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerAnchorTrayOverlay.react.js range:31353386..31353802
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, vfw, Mt
// wrapper-init: pMf
// hoisted-owner: ComposerAnchorTraySurface.react.js (app-out-vs-workbench-workbench-glass-main-js:5829); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

pMf = L({ "ComposerAnchorTrayOverlay.react.js"() {
  "use strict";
  E(), vfw(), Mt(), KOl = 8;
} });
import { jsx as bfw } from "./react-runtime/react/esm-jsx-runtime-production.js";
function mMf({ ref: t, children: e, padBottom: n, surfaceStyle: i }) {
  return bfw("div", { ref: t, ...Ac(f1s.root, YIf.border, i == null && f1s.defaultSurface, n === "search" && f1s.padBottomSearch, i), children: e });
}
var f1s, 