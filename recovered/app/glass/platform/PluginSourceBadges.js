// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginSourceBadges.js range:17155544..17156521
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.159Z
// wrapper: PluginSourceBadgesModule deps:4 [E, Va, imp, mf]
// declarations: PluginSourceBadgesModule, lr1, Ymp
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var PluginSourceBadgesModule = L({
  "PluginSourceBadges.js"() {
    "use strict";

    E(), Va(), imp(), mf();
  }
});
function lr1(t) {
  const e = t.marketplace?.name;
  return e && e !== "cursor-public" ? `${t.name}@${e}` : t.name;
}
function Ymp(t) {
  const e = [];
  return t.subagents && t.subagents.length > 0 && e.push(`${t.subagents.length} ${t.subagents.length === 1 ? "subagent" : "subagents"}`), t.skills && t.skills.length > 0 && e.push(`${t.skills.length} ${t.skills.length === 1 ? "skill" : "skills"}`), t.hooks && t.hooks.length > 0 && e.push(`${t.hooks.length} ${t.hooks.length === 1 ? "hook" : "hooks"}`), t.rules && t.rules.length > 0 && e.push(`${t.rules.length} ${t.rules.length === 1 ? "rule" : "rules"}`), t.mcpServers && t.mcpServers.length > 0 && e.push(`${t.mcpServers.length} ${t.mcpServers.length === 1 ? "MCP server" : "MCP servers"}`), t.commands && t.commands.length > 0 && e.push(`${t.commands.length} ${t.commands.length === 1 ? "command" : "commands"}`), e.join(", ");
}
