// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 18130 range:4304767..4307262
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18130: (e, t, r) => {
    "use strict";
    r.d(t, { $l: () => i, He: () => o });
    var n = r(60525);
    const s = ["cursor-ide-browser", "cursor-browser-extension"];
    function o(e2) {
      const t2 = e2.gitRepos.find((e3) => void 0 !== e3.previousBranchIsAncestor && e3.branchName.length > 0);
      return new n.hV({ ...void 0 !== e2.env?.smartModeClassifierAutoModeEnabled ? { smartModeClassifierAutoModeEnabled: e2.env.smartModeClassifierAutoModeEnabled } : {}, disabledTeamRules: [...e2.disabledTeamRules], adminCommandDenylist: new n.Yv({ values: [...e2.adminCommandDenylist] }), ...void 0 !== e2.commitAttributionMessage ? { commitAttributionMessage: e2.commitAttributionMessage } : {}, ...void 0 !== e2.prAttributionMessage ? { prAttributionMessage: e2.prAttributionMessage } : {}, ...void 0 !== e2.env ? { mountedAgentStores: new n.kc({ values: [...e2.env.mountedAgentStores] }) } : {}, ...false === e2.env?.sandboxEnabled ? { sandboxEnabled: false } : {}, ...void 0 !== e2.webSearchEnabled ? { webSearchEnabled: e2.webSearchEnabled } : {}, ...void 0 !== e2.webFetchEnabled ? { webFetchEnabled: e2.webFetchEnabled } : {}, ...void 0 !== e2.readLintsEnabled ? { readLintsEnabled: e2.readLintsEnabled } : {}, ...void 0 !== e2.searchConversationsEnabled ? { searchConversationsEnabled: e2.searchConversationsEnabled } : {}, appendedRules: [...e2.rules], ...void 0 !== t2 ? { gitRepoBranchAncestry: new n.ky({ repoPath: t2.path, currentBranch: t2.branchName, isAncestor: true === t2.previousBranchIsAncestor }) } : {}, ...void 0 !== e2.adminPermissionsAutoRun ? { adminPermissionsAutoRun: e2.adminPermissionsAutoRun } : {}, ...void 0 !== e2.userPermissionsAutoRun ? { userPermissionsAutoRun: e2.userPermissionsAutoRun } : {}, ...void 0 !== e2.projectPermissionsAutoRun ? { projectPermissionsAutoRun: e2.projectPermissionsAutoRun } : {}, ...void 0 !== e2.hooksConfig ? { hooksConfig: e2.hooksConfig } : {}, ...void 0 !== e2.hooksAdditionalContext ? { hooksAdditionalContext: e2.hooksAdditionalContext } : {}, ...void 0 !== e2.debugModeConfig ? { debugModeConfig: e2.debugModeConfig } : {}, ...void 0 !== e2.recentlyAddedPlugin ? { recentlyAddedPlugin: e2.recentlyAddedPlugin } : {}, filteredBrowserMcpProviderIds: i(s, e2.tools.map((e3) => e3.providerIdentifier)), prefetchFileUris: Object.keys(e2.fileContents) });
    }
    function i(e2, t2) {
      if (void 0 === t2) return [];
      const r2 = new Set(t2);
      return s.filter((t3) => e2.includes(t3) && !r2.has(t3));
    }
  }