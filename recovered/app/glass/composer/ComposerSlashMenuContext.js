// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerSlashMenuContext.js range:22648959..22650000
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt
// wrapper-init: Ees
// hoisted-owner: composerSlashItemScope.js (app-out-vs-workbench-workbench-glass-main-js:3914); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Ees = L({ "ComposerSlashMenuContext.js"() {
  "use strict";
  E(), Mt(), Q0i = 3, rZa = x$m(null), sZa = x$m(null);
} });
function yY1(t) {
  if (t !== void 0) switch (t.scope) {
    case "builtin":
    case "managed":
      return "built-in";
    case "workspace":
      return "repo";
    case "team":
      return "team";
    case "user":
      return "user";
    case "plugin":
      return "plugin";
    case "legacy":
      return;
    default:
      return t.scope;
  }
}
function Ies(t) {
  return t.scope ?? yY1(t.slashSubject);
}
function oZa(t) {
  return t.pluginAttribution?.publishedByCursor === true || Ies(t) === "built-in";
}
function xes(t) {
  return (t.type === "skill" || t.type === "command" || t.type === "subagent") && oZa(t);
}
function SY1(t) {
  const e = t.pluginAttribution?.publisherDisplayName?.trim();
  if (e) return { label: e, source: "plugin" };
  if (xes(t)) return { label: "Cursor", source: "cursor" };
  const n = t.authorshipLabel?.trim();
  return n ? { label: n, source: "authorship" } : void 0;
}
