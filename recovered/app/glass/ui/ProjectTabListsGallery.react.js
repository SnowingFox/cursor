// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectTabListsGallery.react.js range:39265821..39267704
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.930Z
mcC = L({ "ProjectTabListsGallery.react.js"() {
  "use strict";
  E(), Mt(), mdc = [{ description: "Ready to merge · #142", id: "pr-ready", leading: Y6(zt, { "aria-hidden": true, name: "git-pull-request-done", size: "base" }), title: "Fix habit streak off-by-one" }, { description: "Merged · #128", id: "pr-merged", leading: Y6(zt, { "aria-hidden": true, name: "git-merge", size: "base" }), title: "Raise dark-mode contrast" }, { description: "Waiting for reviewers · #151", id: "pr-long", leading: Y6(zt, { "aria-hidden": true, name: "rect-magnifying-glass", size: "base" }), title: "Recompute habit streaks from local midnight so timezone changes stop double-counting yesterday" }], gdc = [{ description: "Wiring the digest template", id: "agent-working", leading: Y6(pdc, { color: "var(--vscode-testing-iconQueued)" }), title: "Add weekly recap email" }, { description: "Waiting on command approval", id: "agent-attention", leading: Y6(pdc, { color: "var(--vscode-list-warningForeground)" }), title: "Add-habit keyboard flow" }, { description: "Reconciling streak totals against the reminder schedule", id: "agent-long", leading: Y6(pdc, { color: "var(--vscode-testing-iconQueued)" }), title: "Rewrite the weekly recap digest template and all supporting copy" }];
} });
import sXv from "./react-runtime/react/esm-index-production.js";
import { jsxs as fdc } from "./react-runtime/react/esm-jsx-runtime-production.js";
function gcC({ index: t }) {
  const [e, n] = sXv.useState(0), i = sXv.useCallback(() => {
    n((r) => r + 1);
  }, []);
  return fdc("div", { style: { padding: "8px 12px", background: "var(--vscode-editor-background)", borderLeft: "3px solid #61dafb", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [fdc("span", { children: ["React #", t] }), fdc("button", { onClick: i, type: "button", children: ["clicks: ", e] })] });
}
