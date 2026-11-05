// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginItem.js range:23102915..23105175
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.150Z
// wrapper: Etk deps:4 [E, Mt, J7, AQa]
// declarations: Itk, EIn, xtk, Atk, RQa (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Etk = L({ "PluginItem.js"() {
  "use strict";
  E(), Mt(), J7(), AQa(), cqm = { "cursor-ui--default-marker": "cursor-ui--default-marker", $$css: true }, uqm = { "cursor-ui--default-marker": "cursor-ui--default-marker", $$css: true }, cCi = { collapsed: { k1xSpc: "cursor-ui-1s85apg", $$css: true }, loadError: { kzqmXN: "cursor-ui-h8yej3", ks0D6T: "cursor-ui-193iq5w", k7Eaqz: "cursor-ui-euugli", kVQacm: "cursor-ui-b3r6kr", kOIVth: "cursor-ui-xhr3t", $$css: true }, main: { kUk6DE: "cursor-ui-98rzlu", k7Eaqz: "cursor-ui-euugli", kWkggS: "cursor-ui-jbqb8w", $$css: true }, chevronEmphasisHover: { kMwMTN: "cursor-ui-1qh17o cursor-ui-1uosulm cursor-ui-j6bow0", k1ekBW: "cursor-ui-1a0aruy", kIyJzY: "cursor-ui-1vaoic9", kAMwcw: "cursor-ui-1aiz5cx", $$css: true } }, dqm = new Intl.NumberFormat(void 0, { notation: "compact", maximumFractionDigits: 1 }), hqm = { get: { label: "Get", className: "ui-plugin-item__cta--primary" }, authenticate: { label: "Auth", className: "ui-plugin-item__cta--accent", ariaLabel: "Authenticate this plugin", busyAriaLabel: "Authenticating" }, try: { label: "Try", className: "ui-plugin-item__cta--try", ariaLabel: "Try this plugin in chat", busyAriaLabel: "Opening chat" } };
} });
function Itk(t) {
  if (!(t === void 0 || t <= 0)) return `Used by ${_qm.format(t)} ${t === 1 ? "teammate" : "teammates"}`;
}
function EIn(t) {
  return !t || t.length === 0 ? [] : t.flatMap((e) => {
    if (e.name.length === 0) return [];
    const n = typeof e.sourcePath == "string" && e.sourcePath.length > 0 ? e.sourcePath : void 0, i = typeof e.sourceUrl == "string" && e.sourceUrl.length > 0 ? e.sourceUrl : n;
    return [{ name: e.name, description: e.description, path: n, sourceUrl: i }];
  });
}
function xtk(t) {
  return [{ label: "MCPs", items: EIn(t.mcpServers) }, { label: "Skills", items: EIn(t.skills) }, { label: "Subagents", items: EIn(t.subagents) }, { label: "Rules", items: EIn(t.rules) }, { label: "Commands", items: EIn(t.commands) }, { label: "Hooks", items: EIn(t.hooks) }].filter((n) => n.items.length > 0);
}
function Atk(t) {
  return t.trim().split(/[\s_-]+/).filter((e) => e.length > 0).map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ");
}
var RQa, pqm, pts, mqm, gqm, PQa, fqm, vqm, _qm,
