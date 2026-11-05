// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 66608 range:10366233..10370784
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66608: (e, t, r) => {
    "use strict";
    r.d(t, { P7: () => a, PJ: () => o, yj: () => c });
    var n = r(43955), s = r(89396);
    function o(e2) {
      return void 0 !== e2 && (void 0 !== e2.smartModeClassifierAutoModeEnabled || e2.disabledTeamRules.length > 0 || void 0 !== e2.adminCommandDenylist || void 0 !== e2.commitAttributionMessage || void 0 !== e2.prAttributionMessage || void 0 !== e2.mountedAgentStores || void 0 !== e2.webSearchEnabled || void 0 !== e2.webFetchEnabled || void 0 !== e2.readLintsEnabled || void 0 !== e2.searchConversationsEnabled || e2.appendedRules.length > 0 || e2.filteredBrowserMcpProviderIds.length > 0 || void 0 !== e2.gitRepoBranchAncestry || void 0 !== e2.adminPermissionsAutoRun || void 0 !== e2.userPermissionsAutoRun || void 0 !== e2.projectPermissionsAutoRun || void 0 !== e2.hooksConfig || void 0 !== e2.hooksAdditionalContext || void 0 !== e2.debugModeConfig || void 0 !== e2.recentlyAddedPlugin || (e2.prefetchFileUris ?? []).length > 0 || void 0 !== e2.sandboxEnabled);
    }
    function i(e2, t2) {
      return e2.source === n.gv.TEAM && true !== e2.isRequired && t2.has((function(e3) {
        return e3.fullPath.split("/").pop() ?? e3.fullPath;
      })(e2));
    }
    function a(e2, t2) {
      if (!o(t2)) return e2;
      if (t2.disabledTeamRules.length > 0) {
        const r3 = /* @__PURE__ */ new Set([...e2.disabledTeamRules, ...t2.disabledTeamRules]);
        e2.disabledTeamRules = [...r3], e2.rules = e2.rules.filter((e3) => !i(e3, r3)), e2.nonFileRules = e2.nonFileRules.filter((e3) => !i(e3, r3));
      }
      if (t2.filteredBrowserMcpProviderIds.length > 0) {
        const r3 = new Set(t2.filteredBrowserMcpProviderIds);
        e2.tools = e2.tools.filter((e3) => !r3.has(e3.providerIdentifier));
      }
      var r2, n2;
      t2.appendedRules.length > 0 && (e2.rules = (function(e3, t3) {
        if (0 === t3.length) return [...e3];
        const r3 = new Set(e3.map((e4) => e4.fullPath)), n3 = [...e3];
        for (const e4 of t3) r3.has(e4.fullPath) || (r3.add(e4.fullPath), n3.push(e4));
        return n3;
      })(e2.rules, t2.appendedRules)), void 0 !== t2.gitRepoBranchAncestry && (e2.gitRepos = (r2 = e2.gitRepos, void 0 === (n2 = t2.gitRepoBranchAncestry) ? [...r2] : r2.map((e3) => e3.path !== n2.repoPath ? e3 : new s.DS({ ...e3, branchName: n2.currentBranch, previousBranchIsAncestor: n2.isAncestor })))), void 0 !== t2.adminCommandDenylist && (e2.adminCommandDenylist = [...t2.adminCommandDenylist.values]), void 0 !== t2.commitAttributionMessage && (e2.commitAttributionMessage = t2.commitAttributionMessage), void 0 !== t2.prAttributionMessage && (e2.prAttributionMessage = t2.prAttributionMessage), void 0 !== t2.webSearchEnabled && (e2.webSearchEnabled = t2.webSearchEnabled), void 0 !== t2.webFetchEnabled && (e2.webFetchEnabled = t2.webFetchEnabled), void 0 !== t2.readLintsEnabled && (e2.readLintsEnabled = t2.readLintsEnabled), void 0 !== t2.searchConversationsEnabled && (e2.searchConversationsEnabled = t2.searchConversationsEnabled), void 0 !== t2.adminPermissionsAutoRun && (e2.adminPermissionsAutoRun = t2.adminPermissionsAutoRun), void 0 !== t2.userPermissionsAutoRun && (e2.userPermissionsAutoRun = t2.userPermissionsAutoRun), void 0 !== t2.projectPermissionsAutoRun && (e2.projectPermissionsAutoRun = t2.projectPermissionsAutoRun), void 0 !== t2.hooksConfig && (e2.hooksConfig = t2.hooksConfig), void 0 !== t2.hooksAdditionalContext && (e2.hooksAdditionalContext = t2.hooksAdditionalContext), void 0 !== t2.debugModeConfig && (e2.debugModeConfig = t2.debugModeConfig), void 0 !== t2.recentlyAddedPlugin && (e2.recentlyAddedPlugin = t2.recentlyAddedPlugin);
      return (void 0 !== t2.smartModeClassifierAutoModeEnabled || void 0 !== t2.mountedAgentStores || void 0 !== t2.sandboxEnabled) && (e2.env ??= new s.GE(), void 0 !== t2.smartModeClassifierAutoModeEnabled && (e2.env.smartModeClassifierAutoModeEnabled = t2.smartModeClassifierAutoModeEnabled), void 0 !== t2.mountedAgentStores && (e2.env.mountedAgentStores = [...t2.mountedAgentStores.values]), void 0 !== t2.sandboxEnabled && (e2.env.sandboxEnabled = t2.sandboxEnabled)), e2;
    }
    function c(e2) {
      const t2 = e2.clone();
      return t2.fileContents = {}, t2.precomputedHumanChanges = [], t2.recentlyAddedPlugin = void 0, t2.matchedInstalledPlugin = void 0, t2.debugModeConfig = void 0, t2.hooksAdditionalContext = void 0, void 0 !== t2.env && (t2.env.devForceNextSmartModeClassifierBlockToken = void 0, t2.env.devDelayNextSmartModeClassifierToken = void 0), t2;
    }
  }