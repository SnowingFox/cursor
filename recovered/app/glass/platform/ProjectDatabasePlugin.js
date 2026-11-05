// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectDatabasePlugin.js range:33764071..33764634
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.163Z
// wrapper: ProjectDatabasePluginModule deps:2 [E, _Yf]
// declarations: ProjectDatabasePluginModule, MBw
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var ProjectDatabasePluginModule = L({
  "ProjectDatabasePlugin.js"() {
    "use strict";

    E(), _Yf(), _Yf();
  }
});
function MBw(t, e) {
  const n = BW1(t, e);
  if (n !== void 0) return em.uriToBrowserUri(n.uri).toString(true);
  const i = URL.parse(t);
  if (i) {
    const s = rt.parse(i.toString());
    return s.scheme === Ot.file || s.scheme === Ot.vscodeRemote ? em.uriToBrowserUri(s).toString(true) : t;
  }
  if (t.startsWith("//")) return `${Ot.https}:${t}`;
  const r = URL.parse(t, e.toString(true));
  return r ? em.uriToBrowserUri(rt.parse(r.toString())).toString(true) : t;
}
