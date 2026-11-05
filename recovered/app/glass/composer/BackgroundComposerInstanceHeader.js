// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BackgroundComposerInstanceHeader.js range:32862770..32870710
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, Am, pi, qvs, pd, gs, T8f, F6, e_, q2w, z2w, nPw, l8f, KRn, rPw
// wrapper-init: oPw
// hoisted-owner: BackgroundComposerInstanceHeaderForComposerPane.js (app-out-vs-workbench-workbench-glass-main-js:6136); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

oPw = L({ "BackgroundComposerInstanceHeader.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Am(), pi(), qvs(), pd(), gs(), T8f(), F6(), e_(), q2w(), z2w(), nPw(), l8f(), KRn(), rPw(), B8f = wt("<div class=background-composer-instance-header-root>"), Q9l = wt("<span class=bc-instance-header-separator>•"), U8f = wt("<div>"), j8f = wt("<span class=bc-instance-header-separator>"), Cws = cs(0), Tws = cs(false);
} });
function aPw(t) {
  const e = Gr(), n = () => e.contextKeyService.getContextKeyValue(Tm.key) ?? false, i = () => Yhn ? true : n(), r = vt(() => e.backgroundComposerDataService.getBcDataInMainWindow(t.bcId)), { diffStats: s, isLoading: o } = j2w({ bcId: () => t.bcId }), [a, l] = Wt(false);
  Cn(() => {
    t.bcId, l(false);
  });
  const c = icd(() => {
    const f = e.composerDataService.scanAllComposersForBackgroundAgentId(t.bcId);
    if (f) return e.cloudAgentStorageService.getCloudAgentStateProperty({ bcId: t.bcId, composerId: f });
  }, "not_loaded"), u = vt(() => {
    const f = c(), _ = r(), b = { agentName: _?.name?.trim() || "New Cloud Agent", branchName: _?.branchName?.trim() || "New Branch", baseBranch: _?.baseBranch, lastUpdatedAt: new Date(_?.updatedAt ?? _?.createdAt ?? Date.now()), source: _?.source };
    return f === "not_loaded" ? b : { agentName: f.agentName ?? b.agentName, branchName: f.branchName ?? b.branchName, baseBranch: f.baseBranch ?? b.baseBranch, lastUpdatedAt: f.originalRequestStartTime ?? b.lastUpdatedAt, source: f.initialSource ?? b.source };
  });
  Cn(() => {
    const f = r(), _ = t.bcId;
    !a() && f && f.status === Po.FINISHED && f.hasStartedVm && !f.isArchived && !f.isKilled && !f.diffStats && !f.isComputingDiffs && (l(true), e.backgroundComposerService.ensureDiffStatsForBc(_).catch((b) => {
      console.warn(`Fetching diffStats failed for bcId=${_}:`, b);
    }));
  });
  const d = () => {
    const f = r()?.branchName;
    f && e.clipboardService.writeText(f);
  }, h = () => {
    const f = r()?.baseBranch;
    f && e.clipboardService.writeText(f);
  }, p = vt(() => {
    const f = r();
    if (!f) return [];
    const _ = [], b = (y) => e.analyticsService.trackEvent("feature_usage.ui_action_invoked", { feature: "cloud_agent_ide_actions", actionId: y });
    return _.push({ id: "open-in-web", label: "Open in Web", tooltip: "Open in Web", run: () => {
      b("open-in-web");
      const S = e.cursorCredsService.getBackendUrl().includes("localhost") ? "http://localhost:4000" : "https://cursor.com";
      e.openerService.open(`${S}/agents/${t.bcId}`, { openExternal: true });
    }, class: "", enabled: true }), f.hasStartedVm && _.push({ id: "display-machine", label: "Open Virtual Machine", tooltip: "Open Virtual Machine", run: async () => {
      b("display-machine"), e.backgroundComposerService.openVM(t.bcId);
    }, class: "", enabled: true }), _.push(new Kh()), f.isArchived ? _.push({ id: "unarchive", label: kMo, tooltip: kMo, run: () => {
      e.backgroundComposerService.unarchiveBackgroundComposer(t.bcId);
    }, class: "", enabled: true }) : _.push({ id: "archive", label: SMo, tooltip: SMo, run: () => {
      e.backgroundComposerService.archiveBackgroundComposer(t.bcId);
    }, class: "", enabled: true }), _.push({ id: "rename", label: _Mo, tooltip: _Mo, run: async () => {
      const y = e.quickInputService.createInputBox();
      y.placeholder = "Enter new name", y.value = u().agentName, y.show();
      const S = async () => {
        try {
          const T = y.value.trim(), I = u().agentName, A = t.bcId;
          if (T && T !== I) {
            e.backgroundComposerDataService.setData("backgroundComposers", (M) => M.bcId === A, "name", T);
            const P = e.composerDataService.scanLoadedComposersForBackgroundAgentId(A);
            P && e.composerDataService.setAllComposersData("allComposers", (M) => M.composerId === P, "name", T);
            try {
              await (await e.aiService.backgroundComposerClient()).renameBackgroundComposer({ bcId: A, newName: T }), await e.composerDataService.saveComposers();
            } catch (M) {
              console.error("Failed to rename background composer:", M), e.notificationService.error("Failed to rename Background Agent"), e.backgroundComposerDataService.setData("backgroundComposers", (N) => N.bcId === A, "name", I);
              const O = e.composerDataService.scanLoadedComposersForBackgroundAgentId(A);
              O && e.composerDataService.setAllComposersData("allComposers", (N) => N.composerId === O, "name", I);
            }
          }
        } finally {
          y.hide();
        }
      }, k = y.onDidAccept(S), C = y.onDidHide(() => {
        k.dispose(), C.dispose(), y.dispose();
      });
    }, class: "", enabled: true }), _.push(new Kh()), _.push({ id: "copy-request-id", label: bMo, tooltip: bMo, class: "", run: () => {
      e.clipboardService.writeText(t.bcId);
    }, enabled: true }), f.branchName && _.push({ id: "copy-branch-name", label: yMo, tooltip: yMo, class: "", run: () => {
      e.clipboardService.writeText(f.branchName);
    }, enabled: true }), f.baseBranch && _.push({ id: "copy-base-branch-name", label: "Copy Base Branch Name", tooltip: `Copy ${f.baseBranch}`, class: "", run: () => {
      e.clipboardService.writeText(f.baseBranch);
    }, enabled: true }), _.push(new Kh()), f.hasStartedVm && _.push({ id: "refresh-github-access-token", label: vMo, tooltip: vMo, run: async () => {
      const y = await e.aiService.backgroundComposerClient(), S = Ai();
      console.log("[background-composer-context] refreshGithubAccessTokenInBackgroundComposer request id: ", S), await y.refreshGithubAccessTokenInBackgroundComposer({ bcId: t.bcId }, { headers: vh(S) });
    }, class: "", enabled: true }), _.push(new Kh()), i() && _.push(new Kh(), { id: "open-prompt-quality", label: "Open Prompt Quality", tooltip: "Open Prompt Quality", run: () => {
      e.openerService.open(`http://go/pqc/${t.bcId}`, { openExternal: true });
    }, class: "", enabled: true }, { id: "open-datadog-logs", label: "Open Datadog Logs", tooltip: "Open Datadog Logs", run: () => {
      e.openerService.open(`http://go/bcidlogs/${t.bcId}`, { openExternal: true });
    }, class: "", enabled: true }, { id: "open-request-logs", label: "Open Request Logs", tooltip: "Open Request Logs", run: () => {
      e.openerService.open(`http://go/reqlogs/${t.bcId}`, { openExternal: true });
    }, class: "", enabled: true }), _;
  });
  return Ee(sPw, { get bcId() {
    return t.bcId;
  }, get foregroundComposerHandle() {
    return t.foregroundComposerHandle;
  }, get title() {
    return t.titleOverride ?? u().agentName;
  }, get titleVariant() {
    return t.titleVariant;
  }, get branchName() {
    return u().branchName;
  }, get baseBranch() {
    return u().baseBranch;
  }, get source() {
    return u().source;
  }, get timestamp() {
    return u().lastUpdatedAt;
  }, get status() {
    return r()?.status;
  }, get hasStartedVm() {
    return r()?.hasStartedVm;
  }, get isArchived() {
    return r()?.isArchived;
  }, get diffStats() {
    return s();
  }, get isDiffStatsLoading() {
    return o();
  }, get prUrl() {
    return r()?.peekContentPrUrl;
  }, get modelDetails() {
    return t.bgModelDetails() ?? (r()?.isLoaded ? r()?.modelDetails : void 0);
  }, get baseModelId() {
    return r()?.selectedModel?.modelId;
  }, get devBannerText() {
    return t.foregroundComposerHandle?.data.devBannerText;
  }, onCopyBranchName: d, onCopyBaseBranchName: h, onOpenContextMenu: (f) => {
    f.stopPropagation(), f.preventDefault(), f.stopImmediatePropagation(), e.contextMenuService.showContextMenu({ getAnchor: () => ({ x: f.clientX, y: f.clientY + 4, width: 0, height: 0 }), getActions: () => p() });
  }, get hideTitleContainer() {
    return t.hideTitleContainer;
  }, get hideMainRow() {
    return t.hideMainRow;
  }, get titleFallbackContent() {
    return t.titleFallbackContent;
  } });
}
