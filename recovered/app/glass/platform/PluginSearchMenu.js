// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginSearchMenu.js range:29859703..29862627
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.157Z
// wrapper: sjk deps:14 [E, at, Mt, pi, hr, Pie, Lbe, KO, pMn, KPe, aS, vo]
// declarations: sjk, jfs, ilf, VEl, ojk, rlf, slf
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var sjk = L({ "PluginSearchMenu.js"() {
  "use strict";
  E(), at(), Mt(), pi(), hr(), Pie(), Lbe(), KO(), pMn(), KPe(), aS(), vo(), njk(), wTe();
} });
function jfs(t) {
  const e = ["user"];
  return t.hasWorkspaceFolder && e.push("project"), e;
}
function ilf(t) {
  return $l(t);
}
function VEl(t) {
  return { step: "search", action: t, selectedPlugin: null };
}
function ojk(t) {
  return { step: "pending", action: t.action, selectedPlugin: t.selectedPlugin };
}
function rlf(t) {
  return dPn(t);
}
async function slf({ flowState: t, scope: e, variables: n, pluginsProviderService: i, cursorAuthenticationService: r, instantiationService: s, pluginComponents: o }) {
  if (t.step !== "confirm" || !t.selectedPlugin) throw new Error("Plugin flow is not in confirm state");
  const a = t.action === "add";
  let l = 1;
  const c = t.selectedPlugin, u = o ?? rlf(c), d = await r.dashboardClient(), h = { headers: vh(Ai()) };
  if (!a) {
    const g = c.installedSources;
    l = Array.isArray(g) && g.length > 0 ? g.length : 1;
  }
  let p = false;
  if (a) if (c.sourceType === "third-party" && c.thirdPartySource !== void 0) {
    const f = c.thirdPartySource;
    if (!f) throw new Error("Missing third-party plugin source metadata");
    await VLk({ scope: e, source: { repositoryUrl: f.repositoryUrl, gitRef: f.gitRef, marketplaceName: f.marketplaceName, pluginKey: f.pluginKey, gitPath: f.gitPath, parsedPlugin: f.parsedPlugin }, variables: n, pluginsProviderService: i, cursorAuthenticationService: r });
  } else if (e === "project") await i.installProjectPlugin({ type: "first-party", key: c.name });
  else if (e === "team") {
    const f = r.getTeamId();
    if (!f) throw new Error("No team ID available");
    const _ = await d.installTeamPlugin(new fTn({ pluginId: BigInt(c.id), teamId: f }), h);
    _.install?.plugin && (i.upsertInstalledPluginInCache({ plugin: T6(_.install.plugin), sources: ["team"] }), p = true);
  } else {
    const f = await d.installUserPlugin(new lot({ pluginId: BigInt(c.id), variables: n ? qd.fromJson(n) : void 0 }), h);
    f.install?.plugin && (i.upsertInstalledPluginInCache({ plugin: T6(f.install.plugin), sources: ["user"] }), p = true);
  }
  else if (p = e !== "project", e === "project") await i.removeProjectPlugin(c.name);
  else if (e === "team") {
    const g = r.getTeamId();
    if (!g) throw new Error("No team ID available");
    await d.uninstallTeamPlugin(new SKr({ pluginId: BigInt(c.id), teamId: g }), h), i.removeInstalledPluginSourceFromCache(c.id.toString(), "team");
  } else await d.uninstallUserPlugin(new yKr({ pluginId: BigInt(c.id) }), h), i.removeInstalledPluginSourceFromCache(c.id.toString(), "user");
  return e === "project" || !p ? v2i(i) : i.notifyPluginsChangedWithoutRefetch(), (u.hasMcpServers || u.hasSkillsOrRules || u.hasCommands || u.hasSubagents) && await s.invokeFunction((g) => dwl(g, u)), { removeActionScopeCountBefore: l };
}
