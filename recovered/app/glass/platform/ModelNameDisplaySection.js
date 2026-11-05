// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelNameDisplaySection.js range:39220923..39224510
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.131Z
// wrapper: GlC deps:6 [E, at, pi, Hu, KRn, mk]
// declarations: zlC, VlC, idc (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
GlC = L({ "ModelNameDisplaySection.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), Hu(), KRn(), mk(), $Yv = wt("<div><div>"), HYv = wt("<div><div></div><div>");
} });
import YG, { useCallback as tdc, useEffect as qlC, useState as ndc } from "./react-runtime/react/esm-index-production.js";
function zlC() {
  const [t, e] = ndc(null), [n, i] = ndc([]), [r, s] = ndc(false);
  qlC(() => {
    const u = document.querySelector(".monaco-workbench");
    u instanceof HTMLElement && e(u);
  }, []);
  const o = tdc((u, d) => {
    i(u), s(d), console.log("Selection changed:", u, "Max mode:", d);
  }, []), a = tdc((u) => {
    console.log("Auto mode changed:", u);
  }, []), l = tdc((u) => {
    s(u), console.log("Max mode changed:", u);
  }, []), c = n.length === 1 && n[0]?.modelId === "default" ? "Auto" + (r ? " [Max]" : "") : n.length === 0 ? "None" : n.map((u) => {
    const d = g1n(u, idc);
    return u.count > 1 ? `${d} (${u.count}x)` : d;
  }).join(", ") + (r ? " [Max]" : "");
  return YG.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "16px" } }, [YG.createElement("div", { key: "info", style: { padding: "12px 16px", backgroundColor: "var(--vscode-editorWidget-background)", borderRadius: "6px", fontSize: "13px", lineHeight: "1.5" } }, [YG.createElement("p", { key: "title", style: { margin: "0 0 8px 0" } }, [YG.createElement("strong", { key: "strong" }, "What this demonstrates:")]), YG.createElement("ul", { key: "list", style: { margin: "0", paddingLeft: "20px" } }, [YG.createElement("li", { key: "1" }, ["New ", YG.createElement("strong", { key: "s1" }, "parameterized model system"), " from PR 46026"]), YG.createElement("li", { key: "2" }, [YG.createElement("code", { key: "c1" }, "parameterDefinitions"), " define available parameters (thinking, context)"]), YG.createElement("li", { key: "3" }, [YG.createElement("code", { key: "c2" }, "variants"), " define parameter combinations with display names"]), YG.createElement("li", { key: "4" }, "Edit button opens parameter submenu for fine-tuning"), YG.createElement("li", { key: "5" }, [YG.createElement("strong", { key: "s3" }, "Multi-model mode"), " allows selecting multiple models with instance counts (1-4x)"])])]), YG.createElement("div", { key: "status", style: { padding: "8px 12px", backgroundColor: "var(--vscode-inputValidation-infoBackground)", border: "1px solid var(--vscode-inputValidation-infoBorder)", borderRadius: "4px", fontSize: "12px" } }, [YG.createElement("strong", { key: "label" }, "Current selection: "), c]), YG.createElement("div", { key: "container", style: { border: "1px solid var(--vscode-panel-border)", borderRadius: "8px", overflow: "hidden" } }, [YG.createElement("div", { key: "header", style: { padding: "8px 12px", backgroundColor: "var(--vscode-sideBarSectionHeader-background)", borderBottom: "1px solid var(--vscode-panel-border)", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--vscode-sideBarSectionHeader-foreground)" } }, "React Component Output"), YG.createElement("div", { key: "content", style: { padding: "16px" } }, YG.createElement(Kj, { root: t, children: YG.createElement(nX, { models: idc, initialSelections: n, initialMaxMode: r, onSelectionChange: o, onAutoModeChange: a, onMaxModeChange: l, placement: "bottom-start", maxModelCount: X2i, displayConfiguration: XTi }) }))])]);
}
function VlC() {
  return Ee(pk, { title: "Model Picker (React) - Parameterized Models", get children() {
    return Ee(yV, { reactComponent: zlC, reactProps: {} });
  } });
}
var idc,
