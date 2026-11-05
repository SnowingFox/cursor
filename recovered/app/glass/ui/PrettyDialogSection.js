// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PrettyDialogSection.js range:39263010..39265821
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.891Z
hcC = L({ "PrettyDialogSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), pi(), Am(), gs(), vo(), FS(), mk(), nXv = wt('<div class="flex gap-2 flex-wrap items-center">'), iXv = wt('<div class="mt-4 p-2 border border-input-border bg-input-background rounded"><strong>Last Dialog Result:</strong> '), oBi = cs(null);
} });
import { jsx as Y6, jsxs as h6n } from "./react-runtime/react/esm-jsx-runtime-production.js";
function pdc({ color: t }) {
  return Y6("span", { "aria-hidden": true, style: { backgroundColor: t, borderRadius: "50%", height: 8, width: 8 } });
}
function rXv() {
}
function CLs({ rows: t, surface: e, title: n }) {
  return Y6("div", { "data-project-surface": e, children: Y6(o0e.Root, { contentInset: "none", scrollMode: "expand", children: h6n(o0e.Section, { id: e, children: [Y6(o0e.SectionHeader, { count: t.length, emphasis: "muted", label: n }), h6n(o0e.Items, { children: [t.map((i) => Y6(o0e.Row, { children: Y6(o0e.Item, { id: i.id, label: `${i.title} ${i.description}`, leading: i.leading, onActivate: rXv, children: h6n("div", { style: { display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden" }, children: [Y6("span", { style: { overflow: "hidden", textOverflow: "ellipsis" }, children: i.title }), Y6("span", { style: { color: "var(--vscode-descriptionForeground)", fontSize: 11, overflow: "hidden", textOverflow: "ellipsis" }, children: i.description })] }) }) }, i.id)), Y6(o0e.Row, { children: Y6(o0e.OverflowToggle, { onStateChange: rXv, state: "collapsed" }) })] })] }) }) });
}
function TLs({ children: t, title: e, width: n }) {
  return h6n("div", { style: { display: "flex", flexDirection: "column", minWidth: 0, width: n }, children: [Y6("div", { style: { color: "var(--vscode-foreground)", fontSize: 12, fontWeight: 600, marginBottom: 10 }, children: e }), Y6("div", { style: { paddingInline: 12 }, children: t })] });
}
function pcC() {
  return h6n("div", { "data-component": "project-tab-lists-gallery", style: { boxSizing: "border-box", display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", padding: 16, width: "100%" }, children: [Y6(TLs, { title: "Project · PRs", children: Y6(CLs, { rows: mdc, surface: "gallery-project-prs", title: "Pull requests" }) }), Y6(TLs, { title: "Project · Agents", children: Y6(CLs, { rows: gdc, surface: "gallery-project-agents", title: "Agents" }) }), h6n("div", { style: { display: "flex", flexWrap: "wrap", gap: 24, gridColumn: "1 / -1" }, children: [Y6(TLs, { title: "Narrow · PR truncation", width: 240, children: Y6(CLs, { rows: mdc, surface: "gallery-project-prs", title: "Pull requests" }) }), Y6(TLs, { title: "Narrow · Agent status", width: 240, children: Y6(CLs, { rows: gdc, surface: "gallery-project-agents", title: "Agents" }) })] })] });
}
var mdc, gdc, 