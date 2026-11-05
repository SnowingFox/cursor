// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BackgroundComposerArtifactsSection.js range:38900041..38901664
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, Am, pi, PoC, DoC, vo, FS, e_, mk
// wrapper-init: LoC
// hoisted-owner: badgesSection.react.js (app-out-vs-workbench-workbench-glass-main-js:7721); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

LoC = L({ "BackgroundComposerArtifactsSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), Am(), pi(), PoC(), DoC(), vo(), FS(), e_(), mk(), xqv = wt("<div><h2>Background Composer Artifacts Preview</h2><p>Enter a Background Composer ID (bcId) to view its artifacts. Supports image, video, and text file previews."), Aqv = wt('<form><input type=text placeholder="Enter bcId (e.g., abc123-def456-...)">'), Rqv = wt("<div><p>Error: "), Pqv = wt("<div><strong>bcId:</strong> <code>"), Mqv = wt("<div><div></div><p>Loading artifacts..."), Dqv = wt("<div><p>No artifacts found"), Nqv = wt("<div><h3>Artifacts (<!>)</h3><div></div><h3>Artifact Previews</h3><div>"), Lqv = wt("<style>"), aLs = cs(""), lLs = cs(null), cLs = cs(false), uLs = cs(null);
} }), Oqv = L({ "badge.css"() {
} });
import { jsx as b8e, jsxs as OoC } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Tdt({ size: t = "medium", text: e, type: n = "default" }) {
  return b8e("span", { className: `cursor-badge cursor-badge-${n} cursor-badge-${t}`, children: e });
}
function FoC() {
  return b8e(XFn, { children: OoC("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }, children: [b8e(Tdt, { text: "Default" }), b8e(Tdt, { text: "Primary", type: "primary" }), b8e(Tdt, { text: "Success", type: "success" }), b8e(Tdt, { text: "Warning", type: "warning" }), b8e(Tdt, { text: "Danger", type: "danger" }), b8e(Tdt, { text: "Subtle", type: "subtle" }), b8e(Tdt, { size: "small", text: "Small" }), b8e(Tdt, { size: "medium", text: "Medium" }), b8e(Tdt, { size: "large", text: "Large" })] }) });
}
