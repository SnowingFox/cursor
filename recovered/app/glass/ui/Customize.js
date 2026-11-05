// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Customize.js range:22959384..22964167
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.585Z
UJ1 = L({ "Customize.js"() {
  "use strict";
  E(), ZWm(), KZa = LJ1(null), YZa = ile("Customize.Controller"), XZa = ile("Customize.Browse"), ZZa = ile("Customize.Leaderboard.WorkspaceSelector"), QZa = Object.assign(ile("Customize.Leaderboard"), { WorkspaceSelector: ZZa }), JZa = ile("Customize.Manage.SingleScope"), eQa = ile("Customize.Manage.HookLogDetails"), tQa = Object.assign(ile("Customize.Manage"), { SingleScope: JZa, HookLogDetails: eQa }), nQa = ile("Customize.Detail.GlassChrome"), iQa = Object.assign(ile("Customize.Detail"), { GlassChrome: nQa }), rQa = ile("Customize.GlobalSearch"), sQa = ile("Customize.TeamMarketplace.Admin"), oQa = ile("Customize.TeamMarketplace.McpAuthoring"), aQa = ile("Customize.TeamMarketplace.AccessGrants"), lQa = ile("Customize.TeamMarketplace.OriginDistribution"), cQa = ile("Customize.TeamMarketplace.UserPublish"), uQa = Object.assign(ile("Customize.TeamMarketplace"), { Admin: sQa, McpAuthoring: oQa, AccessGrants: aQa, OriginDistribution: lQa, UserPublish: cQa }), JWm = Object.assign(function({ children: e, ...n }) {
    return QWm(KZa, { value: n, children: e });
  }, { displayName: "Customize.Provider" }), eGm = Object.assign(function({ children: e }) {
    const n = NJ1(KZa);
    if (n === null) throw new Error("Customize.Root must be rendered inside Customize.Provider.");
    const i = BJ1(e);
    if (i.manage === void 0) throw new Error("Customize.Root requires a Customize.Manage part (the manage port is the host's required wiring).");
    if (i.detail === void 0) throw new Error("Customize.Root requires a Customize.Detail part (the plugin-detail port is the host's required wiring).");
    return QWm(bJ1, { ...n, ref: i.controller?.handleRef, onCustomizeViewChange: i.controller?.onViewChange, setNavigateToView: i.controller?.registerNavigate, onSelectedManageWorkspaceChange: i.controller?.onSelectedManageWorkspaceChange, primitiveUsageCacheKey: i.controller?.usageCacheKey, breadcrumbSlot: i.controller?.breadcrumbSlot, headerBanner: i.controller?.banner, leaderboardEnabled: i.leaderboard !== void 0, fetchTeamPrimitiveUsage: i.leaderboard?.fetchTeamPrimitiveUsage, usagePrimitiveDescriptors: i.leaderboard?.usagePrimitiveDescriptors, usagePrimitiveDescriptorLoadState: i.leaderboard?.usagePrimitiveDescriptorLoadState, usagePrimitiveDescriptorLoadFailures: i.leaderboard?.usagePrimitiveDescriptorLoadFailures, onOpenUsagePrimitiveSource: i.leaderboard?.onOpenUsagePrimitiveSource, resolvePrimitiveDescriptorAuthorship: i.leaderboard?.resolvePrimitiveDescriptorAuthorship, leaderboardWorkspaceScope: i.leaderboardWorkspaceSelector, manage: i.manage.port, manageSkillsBanner: i.manage.skillsBanner, manageScopeMultiselectEnabled: !i.manageSingleScope, hookExecutionLogDetailsEnabled: i.manageHookLogDetailsEnabled, pluginDetail: i.detail.port, detailGlassChrome: i.detailGlassChrome, enableGlobalSearch: i.globalSearch, manageTeamMarketplaceClient: i.teamMarketplace?.client, canManageTeamMarketplaces: i.teamMarketplaceAdmin, manageTeamMarketplaceDirectoryGroups: i.teamMarketplace?.directoryGroups, onAfterDeleteTeamMarketplace: i.teamMarketplace?.onAfterDelete, enableTeamMarketplaceMcps: i.teamMarketplaceMcpAuthoring, enableAccessGrants: i.teamMarketplaceAccessGrants !== void 0, manageTeamMarketplaceOrganizationGroups: i.teamMarketplaceAccessGrants?.organizationGroups, enableOriginDistribution: i.teamMarketplaceOriginDistribution, enablePublishUserSkills: i.teamMarketplaceUserPublish });
  }, { displayName: "Customize.Root" }), yX = { Provider: JWm, Root: eGm, Controller: YZa, Browse: XZa, Leaderboard: QZa, Manage: tQa, Detail: iQa, GlobalSearch: rQa, TeamMarketplace: uQa };
} });
function RPe(t) {
  return Array.from(new Set(t.map((e) => e.trim()).filter((e) => e.length > 0)));
}
function jJ1(t) {
  return RPe(t.replaceAll("\\n", `
`).split(`
`));
}
function tGm(t) {
  return t.map((e) => e.replaceAll("\\n", `
`)).join(`
`);
}
function nGm(t, e) {
  const n = RPe(t).sort(), i = RPe(e).sort();
  return n.length !== i.length ? false : n.every((r, s) => r === i[s]);
}
function $J1(t) {
  return t === "default_with_network_settings" || t === "network_settings_only" || t === "parent_plus_network_settings";
}
function HJ1(t, e) {
  if (t === void 0) return e;
  switch (t) {
    case "allow_all":
      return "Allow all network access";
    case "default_with_network_settings":
      return "Defaults + environment allowlist";
    case "network_settings_only":
      return "Environment allowlist only";
    case "parent_plus_network_settings":
      return `${e} + environment allowlist`;
    default:
      return t;
  }
}
function WJ1(t) {
  return t === "allow_all" || t === "default_with_network_settings" || t === "network_settings_only" || t === "parent_plus_network_settings";
}
