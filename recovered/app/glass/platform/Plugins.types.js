// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Plugins.types.js range:17156521..17157551
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.155Z
// wrapper: PluginsModule deps:1 [E]
// declarations: PluginsModule, pwn, ur1
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var PluginsModule = L({
  "Plugins.types.js"() {
    "use strict";

    E();
  }
});
function pwn(t) {
  return t.map(e => ({
    name: e.name,
    description: e.description,
    sourceUrl: e.sourceUrl,
    sourcePath: e.sourcePath
  })).filter(e => e.name.length > 0);
}
function ur1(t, e) {
  const n = e.marketplaceName,
    i = `${n}/${t.name}`,
    r = e.commitSha || e.defaultBranch;
  return {
    id: i,
    name: t.name,
    displayName: t.displayName || t.name,
    description: t.description || "",
    status: "unspecified",
    repositoryUrl: e.repositoryUrl,
    tags: [],
    logoUrl: t.logoUrl ?? void 0,
    isPublished: true,
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    isDeprecated: false,
    marketplace: {
      name: n
    },
    gitUrl: e.repositoryUrl,
    gitRef: r,
    gitPath: t.gitPath,
    fullRef: i,
    curatedCategoryKeys: [],
    lifecycleState: "unspecified",
    keywords: [],
    capabilities: [],
    variables: t.variables,
    loadError: t.parseError ?? void 0,
    skills: pwn(t.skills),
    subagents: pwn(t.subagents),
    hooks: pwn(t.hooks),
    rules: pwn(t.rules),
    mcpServers: pwn(t.mcpServers),
    commands: pwn(t.commands)
  };
}
