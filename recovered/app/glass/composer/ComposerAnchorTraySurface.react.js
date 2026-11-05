// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerAnchorTraySurface.react.js range:31353802..31355661
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, $b, uSs
// wrapper-init: gMf
// hoisted-owner: anchoredTraySourceLabels.js (app-out-vs-workbench-workbench-glass-main-js:5830); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

gMf = L({ "ComposerAnchorTraySurface.react.js"() {
  "use strict";
  E(), $b(), uSs(), f1s = { root: { kVAEAm: "glass-1n2onr6", k1xSpc: "glass-78zum5", kXwgrk: "glass-dt5ytf", kAzted: "glass-2lwn1j", kskxy: "glass-mz0i5r", kOIVth: "glass-5cdhqx", kzqmXN: "glass-h8yej3", kXHlph: "glass-6ikm8r", kORKVm: "glass-10wlt62", kB7OPa: "glass-9f619", kaIpWk: "glass-1pkpdue", kLKAdn: "glass-exx8yu", kGO01o: "glass-18d9i69", kE3dHu: "glass-1lfpczk", kpe85a: "glass-17v7654", $$css: true }, defaultSurface: { kWkggS: "glass-f1vpex", $$css: true }, padBottomSearch: { kGO01o: "glass-b6dno7", $$css: true } };
} });
function yfw(t) {
  switch (t) {
    case "skill":
      return "Skill";
    case "subagent":
      return "Subagent";
    case "command":
      return "Command";
    case "mode":
      return "Mode";
    case "action":
      return "Action";
    case "mention":
      return "Mention";
    case "heading":
      return "Heading";
    case "divider":
      return "Divider";
    default:
      return t;
  }
}
function Sfw(t) {
  return YOl[t].trailing;
}
function kfw(t, e) {
  if (t.trailingText !== void 0 && t.trailingText.length > 0) return t.trailingText;
  if (!e) return;
  if (t.type === "mode" || t.sectionTitle === "Modes") return "Mode";
  if (t.sectionTitle === "Models") return "Model";
  if (t.sectionTitle === "Projects") return "Project";
  if (t.isNavigationRow) return "Navigation";
  if (t.trayCategory !== void 0) return fMf[t.trayCategory];
  const n = yfw(t.type);
  return t.scope !== void 0 ? `${Sfw(t.scope)} ${n}` : t.type === "action" ? "Built-in Action" : n;
}
function wfw(t) {
  const e = t.tooltipPath?.trim();
  if (e) return e;
  const n = Ies(t);
  if (n !== void 0) return n === "plugin" && t.pluginAttribution !== void 0 ? `${t.pluginAttribution.displayName} plugin skill` : `${YOl[n].source} skill`;
}
var YOl, fMf, 