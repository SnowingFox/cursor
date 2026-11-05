// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ManageTeamMarketplaceModalContent.js range:17099274..17105125
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.109Z
// wrapper: wmp deps:15 [E, Va, R7r, Cn1, Vn1, jEa, ri1, Hrt, avi, ai1, pi1, Ti1]
// declarations: Cmp, xi1, Ai1, Ri1, getPluginId, Mi1
// anchors: cursor-font-weight-semibold, esm-compiler-runtime-production
// group: team-marketplace
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
wmp = L({
  "ManageTeamMarketplaceModalContent.js"() {
    "use strict";

    E(), Va(), R7r(), Cn1(), Vn1(), jEa(), ri1(), Hrt(), avi(), ai1(), pi1(), Ti1(), Nhe(), P0(), QQ(), Smp = {
      footerFlush: {
        kLKAdn: "ui-exx8yu",
        kwRFfy: "ui-yri2b",
        kGO01o: "ui-18d9i69",
        kZCmMZ: "ui-1c1uobl",
        kEafiO: "ui-972fbf",
        kPef9Z: "ui-1ejq31n",
        $$css: true
      }
    }, kmp = {
      fontSize: "18px",
      lineHeight: 1,
      fontWeight: "var(--cursor-font-weight-semibold, 590)"
    };
  }
});
import { c as Ii1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Cmp(t, e, n, i) {
  const r = Ii1(56),
    s = i?.onAfterDelete;
  let o;
  r[0] !== t || r[1] !== e.id || r[2] !== e.name || r[3] !== e.teamId ? (o = async j => {
    const [$, H] = await Promise.all([Promise.all(j.addedParsedBatches.map(q => t.registerMarketplaceAndPlugins({
        marketplaceName: e.name,
        teamId: e.teamId,
        repositoryUrl: q.parseResult.repositoryUrl,
        commitSha: q.parseResult.commitSha,
        entries: q.entries
      }))), Promise.all(j.addedMcpServers.map(q => t.createPlugin(gn1(q, e.id, e.teamId))))]),
      G = [...$.flatMap(Mi1), ...H.map(getPluginId)];
    await t.setPluginPolicies({
      marketplaceId: e.id,
      teamId: e.teamId,
      policies: [...j.pluginPolicies, ...j.addedGlobalPlugins.map(Ri1), ...G.map(Ai1)]
    });
  }, r[0] = t, r[1] = e.id, r[2] = e.name, r[3] = e.teamId, r[4] = o) : o = r[4];
  const a = o;
  let l;
  r[5] !== t || r[6] !== e.directoryGroupIds || r[7] !== e.id || r[8] !== e.teamId || r[9] !== a ? (l = async j => {
    const $ = j.marketplace?.displayName;
    j.pluginPolicies !== void 0 && (await a(j.pluginPolicies)), (j.access?.directoryGroupIds !== void 0 || j.access?.accessGrants !== void 0 || j.access?.syncAccessGrants === true) && (await t.updateTeamMarketplaceConfig({
      marketplaceId: e.id,
      teamId: e.teamId,
      directoryGroupIds: j.access?.directoryGroupIds ?? (e.directoryGroupIds ?? []).map(xi1),
      accessGrants: j.access?.accessGrants,
      syncAccessGrants: j.access?.syncAccessGrants
    })), ($ !== void 0 || j.access?.autoReindex !== void 0 || j.access?.allowUserPublish !== void 0) && (await t.updateMarketplace({
      marketplaceId: e.id,
      teamId: e.teamId,
      displayName: $,
      autoReindex: j.access?.autoReindex,
      allowUserPublish: j.access?.allowUserPublish
    })), j.access?.originDistributionEnabled !== void 0 && t.setMarketplaceOriginDistribution !== void 0 && (await t.setMarketplaceOriginDistribution({
      marketplaceId: e.id,
      teamId: e.teamId,
      enabled: j.access.originDistributionEnabled
    }));
  }, r[5] = t, r[6] = e.directoryGroupIds, r[7] = e.id, r[8] = e.teamId, r[9] = a, r[10] = l) : l = r[10];
  const c = l;
  let u;
  r[11] !== t || r[12] !== e.id || r[13] !== e.teamId ? (u = async (j, $) => {
    await t.setPluginPolicyVariables({
      marketplaceId: e.id,
      teamId: e.teamId,
      pluginId: j.id,
      variables: $
    });
  }, r[11] = t, r[12] = e.id, r[13] = e.teamId, r[14] = u) : u = r[14];
  const d = u,
    h = t.getPluginMcpConfig,
    p = t.updatePluginMcpConfig,
    g = e.teamId;
  let f;
  r[15] !== h ? (f = h === void 0 ? void 0 : async j => (await h(j.id)).configJson, r[15] = h, r[16] = f) : f = r[16];
  const _ = f;
  let b;
  r[17] !== g || r[18] !== p ? (b = p === void 0 ? void 0 : async (j, $) => {
    await p({
      pluginId: j.id,
      teamId: g,
      mcpConfigJson: $
    });
  }, r[17] = g, r[18] = p, r[19] = b) : b = r[19];
  const y = b;
  let S;
  r[20] !== t || r[21] !== e.gitUrl || r[22] !== e.id || r[23] !== e.teamId ? (S = async () => {
    await t.reindex({
      marketplaceId: e.id,
      teamId: e.teamId,
      hasGitUrl: !!e.gitUrl
    });
  }, r[20] = t, r[21] = e.gitUrl, r[22] = e.id, r[23] = e.teamId, r[24] = S) : S = r[24];
  const k = S;
  let C;
  r[25] !== t || r[26] !== e.id || r[27] !== e.teamId || r[28] !== s ? (C = async () => {
    await t.removeMarketplace({
      marketplaceId: e.id,
      teamId: e.teamId
    }), s?.();
  }, r[25] = t, r[26] = e.id, r[27] = e.teamId, r[28] = s, r[29] = C) : C = r[29];
  const T = C;
  let I;
  r[30] !== t ? (I = t.parseGitHubRepoForPlugins.bind(t), r[30] = t, r[31] = I) : I = r[31];
  const A = I;
  let P;
  r[32] !== t || r[33] !== e.id || r[34] !== e.teamId ? (P = j => t.previewMcpImpact({
    kind: "setPolicies",
    marketplaceId: e.id,
    teamId: e.teamId,
    policies: j
  }), r[32] = t, r[33] = e.id, r[34] = e.teamId, r[35] = P) : P = r[35];
  const M = P;
  let O;
  r[36] !== t || r[37] !== e.id || r[38] !== e.teamId ? (O = () => t.previewMcpImpact({
    kind: "removeMarketplace",
    marketplaceId: e.id,
    teamId: e.teamId
  }), r[36] = t, r[37] = e.id, r[38] = e.teamId, r[39] = O) : O = r[39];
  const N = O;
  let U;
  return r[40] !== n.availableGlobalPlugins || r[41] !== n.directoryGroups || r[42] !== n.isLoadingGlobalPlugins || r[43] !== n.isLoadingPlugins || r[44] !== n.organizationGroups || r[45] !== n.plugins || r[46] !== T || r[47] !== _ || r[48] !== A || r[49] !== M || r[50] !== N || r[51] !== k || r[52] !== c || r[53] !== y || r[54] !== d ? (U = {
    plugins: n.plugins,
    isLoadingPlugins: n.isLoadingPlugins,
    availableGlobalPlugins: n.availableGlobalPlugins,
    isLoadingGlobalPlugins: n.isLoadingGlobalPlugins,
    directoryGroups: n.directoryGroups,
    organizationGroups: n.organizationGroups,
    onSave: c,
    onSavePluginVariables: d,
    onLoadPluginMcpConfig: _,
    onSavePluginMcpConfig: y,
    onReindex: k,
    onDeleteMarketplace: T,
    onParseGitHubUrl: A,
    onPreviewPolicyMcpImpact: M,
    onPreviewRemoveMarketplaceMcpImpact: N
  }, r[40] = n.availableGlobalPlugins, r[41] = n.directoryGroups, r[42] = n.isLoadingGlobalPlugins, r[43] = n.isLoadingPlugins, r[44] = n.organizationGroups, r[45] = n.plugins, r[46] = T, r[47] = _, r[48] = A, r[49] = M, r[50] = N, r[51] = k, r[52] = c, r[53] = y, r[54] = d, r[55] = U) : U = r[55], U;
}
function xi1(t) {
  return Number(t);
}
function Ai1(t) {
  return {
    pluginId: t,
    installMode: "available"
  };
}
function Ri1(t) {
  return {
    pluginId: t.id,
    installMode: "available"
  };
}
function getPluginId(t) {
  return t.pluginId;
}
function Mi1(t) {
  return t.pluginIds;
}
