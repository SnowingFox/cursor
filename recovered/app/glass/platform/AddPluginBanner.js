// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AddPluginBanner.js range:16949966..16951612
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.053Z
// wrapper: lt1 deps:4 [E, Hrt, fd, P0]
// declarations: svi, ovi, Grt, mhp, ghp, ct1, fhp, vhp, l6e, QTa (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
lt1 = L({ "AddPluginBanner.js"() {
  "use strict";
  E(), Hrt(), fd(), P0(), php = 32;
} });
function svi(t) {
  const e = t.trim().toLowerCase();
  if (e.length === 0) return { normalized: "", spaced: "", collapsed: "" };
  const n = e.replace(QTa, " ").replace(/\s+/g, " ").trim(), i = e.replace(QTa, "");
  return { normalized: e, spaced: n, collapsed: i };
}
function ovi(t) {
  return t.normalized.length > 0;
}
function Grt(t, e) {
  if (t === void 0) return false;
  if (!ovi(e)) return true;
  const n = svi(t);
  return !!(e.normalized.length > 0 && n.normalized.includes(e.normalized) || e.spaced.length > 0 && n.spaced.includes(e.spaced) || e.collapsed.length > 0 && n.collapsed.includes(e.collapsed));
}
function mhp(t, e) {
  return !ovi(e) || Grt(t.publisher?.displayName, e);
}
function ghp(t, e) {
  return ovi(e) ? Grt(t.displayName, e) || Grt(t.name, e) : true;
}
function ct1(t, e) {
  return [t.skills, t.mcpServers, t.subagents, t.commands, t.hooks, t.rules].some((n) => n.some((i) => Grt(i.name, e) || Grt(i.description, e)));
}
function fhp(t, e) {
  const n = svi(e);
  return ovi(n) ? t.some((i) => Grt(i, n)) : true;
}
function vhp(t, e) {
  const n = svi(e);
  return !ovi(n) || ghp(t, n) || Grt(t.description, n) || t.tags?.some((i) => Grt(i, n)) || t.keywords?.some((i) => Grt(i, n)) || ct1(t, n) ? true : mhp(t, n);
}
function l6e(t, e) {
  const n = e.trim();
  if (n.length === 0) return t;
  const i = n.indexOf("/");
  if (i !== -1) {
    const r = n.slice(0, i), s = n.slice(i + 1), o = svi(r), a = svi(s);
    return t.filter((l) => mhp(l, o) && ghp(l, a));
  }
  return t.filter((r) => vhp(r, n));
}
var QTa,
