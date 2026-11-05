// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PullRequestButton.js range:32839495..32851090
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.933Z
J2w = L({ "PullRequestButton.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), vo(), FS(), b9e(), Z2w(), P8f = wt("<div><span>"), M8f = wt("<div class=pull-request-btn-container><div class=pull-request-btn>");
} });
function ePw(t) {
  const [e, n] = Wt("squash"), i = vt(() => !!t.isDiffStatsLoading), r = vt(() => {
    if (t.isDiffStatsLoading) return "Loading...";
  }), s = vt(() => {
    if (t.isPrStatusLoading) return "Loading PR status...";
    if (!t.existingPrUrl && !t.isDiffStatsLoading && i()) return "No changes to create PR";
  }), o = vt(() => !!(t.isCheckingReviewChanges || !t.hasReviewChanges)), a = vt(() => {
    if (t.isCheckingReviewChanges) return "Checking for changes...";
    if (!t.hasReviewChanges) return "No changes to review";
  }), l = async (d) => {
    try {
      await t.onCheckoutLocally?.(d);
    } finally {
    }
  }, c = async () => {
    try {
      await t.onApplyChangesLocally?.();
    } finally {
    }
  }, u = vt(() => t.hasStartedVm && !t.isArchived && !t.isAgentRunning);
  return Ee(Ut, { get when() {
    return u();
  }, get fallback() {
    return N8f();
  }, get children() {
    var d = D8f();
    return Le(d, Ee(Q2w, { get existingPrUrl() {
      return t.existingPrUrl;
    }, get isDraft() {
      return t.isDraft;
    }, get canMerge() {
      return t.canMerge;
    }, get hasLoadedPrStatus() {
      return t.hasLoadedPrStatus;
    }, get isPrButtonLoading() {
      return t.isPrButtonLoading;
    }, get isPrStatusLoading() {
      return t.isPrStatusLoading;
    }, get isConvertingDraft() {
      return t.isConvertingDraft;
    }, get isMerging() {
      return t.isMerging;
    }, get isCheckingMergeability() {
      return t.isCheckingMergeability;
    }, get disabled() {
      return t.isPrStatusLoading || !t.existingPrUrl && i();
    }, get disabledHintText() {
      return s();
    }, get onCreateOrViewPR() {
      return t.onCreateOrViewPR;
    }, get onOpenPrFromDraft() {
      return t.onOpenPrFromDraft;
    }, get onMergePR() {
      return t.onMergePR;
    }, get mergeType() {
      return e();
    }, onMergeTypeChange: n }), null), Le(d, Ee(K2w, { onApplyChangesLocally: c, onCheckoutLocally: l, get isLoading() {
      return t.isApplyingChangesLocally;
    }, get disabled() {
      return i();
    }, get disabledHintText() {
      return r();
    } }), null), Le(d, Ee(ol, { variant: "secondary", get onClick() {
      return t.handleReviewAll;
    }, class: "!gap-1.5 bc-action-button", get disabled() {
      return o();
    }, get disabledHintText() {
      return a();
    }, children: "Review" }), null), d;
  } });
}
function tPw(t) {
  const e = Gr(), [n, i] = Wt(false), [r, s] = Wt(null), [o, a] = Wt(false), [l, c] = Wt(false), [u, d] = Wt(null), [h, p] = Wt(false), [g, f] = Wt(false), [_, b] = Wt(void 0), y = icd(() => {
    const te = e.composerDataService.scanAllComposersForBackgroundAgentId(t.bcId);
    if (te) return e.cloudAgentStorageService.getCloudAgentStateProperty({ bcId: t.bcId, composerId: te });
  }, "not_loaded"), S = () => e.backgroundComposerDataService.getBcDataInMainWindow(t.bcId), k = vt(() => S()?.isCreatingPR ?? false), C = vt(() => S()?.isCheckingOutLocally ?? false), T = vt(() => S()?.isApplyingChangesLocally ?? false), I = vt(() => _()), [A, P] = Wt(false), [M, O] = Wt(true), N = vt(() => A() || k() || n()), U = vt(() => {
    const te = e.backgroundComposerDataService.data.backgroundComposers.find((oe) => oe.bcId === t.bcId), ee = () => {
      if (te?.diffStats) return (te.diffStats.totalFiles ?? 0) > 0 || (te.diffStats.totalAdded ?? 0) > 0 || (te.diffStats.totalRemoved ?? 0) > 0;
      if (te?.cachedFileCount !== void 0) return te.cachedFileCount > 0;
    };
    if (te?.diffChangesHash, e.backgroundComposerService.bcIdForThisWindow() === t.bcId) {
      const oe = e.backgroundComposerDataService.getInWindowBcData(), se = oe?.detailedDiff ?? oe?.renderedDetailedDiffs;
      if (se) {
        const ce = (se.diff?.diffs?.length ?? 0) > 0, ae = (se.submoduleDiffs ?? []).some((de) => (de.diff?.diffs?.length ?? 0) > 0);
        if (ce || ae) return true;
      }
      const le = ee();
      return le !== void 0 ? le : !!t.hasChanges;
    }
    const ie = ee();
    return ie !== void 0 ? ie : !!t.hasChanges;
  });
  Cn(() => {
    if (!t.bcId) {
      O(false);
      return;
    }
    O(U());
  });
  const j = async () => {
    const te = e.composerDataService.scanLoadedComposersForBackgroundAgentId(t.bcId);
    if (!te) {
      e.notificationService.error("No associated composer found for this background agent");
      return;
    }
    e.analyticsService.trackEvent("review_changes.opened", { entrypoint: "background_composer_actions", composer_id: te }), await e.reviewChangesService.openOrUpdateReviewChangesEditor(te, { fromBackgroundAgent: { bcId: t.bcId } });
  };
  Cn(() => {
    t.bcId;
    const te = y();
    te !== "not_loaded" ? (P(false), b(te.prUrl)) : P(true);
  });
  const $ = (te) => te.bcId !== t.bcId || te.prUrl !== I(), H = async (te) => {
    if (!te) return;
    const ee = t.bcId, re = { bcId: ee, prUrl: te };
    if (!$(re)) {
      a(true);
      try {
        const ie = await e.aiService.backgroundComposerClient(), oe = new UZr({ prUrl: te }), se = await ie.checkPullRequestMergeability(oe);
        if ($(re)) return;
        s(se), e.backgroundComposerDataService.setData("backgroundComposers", (le) => le.bcId === ee, "cachedPrMergeability", { canMerge: se.canMerge, error: se.error });
      } catch {
        $(re) || s(null);
      } finally {
        $(re) || a(false);
      }
    }
  }, G = async (te) => {
    if (!te) return;
    const ee = t.bcId, re = { bcId: ee, prUrl: te };
    if (!$(re)) try {
      const ie = await e.aiService.backgroundComposerClient(), oe = new BZr({ prUrl: te }), se = await ie.getPullRequestMergeStatus(oe);
      if ($(re)) return;
      d(se), f(true), e.backgroundComposerDataService.setData("backgroundComposers", (le) => le.bcId === ee, "cachedPrStatus", { isDraft: se.isDraft, isMerged: se.isMerged, isClosed: se.isClosed, state: se.state, mergeableState: se.mergeableState });
    } catch {
      if ($(re)) return;
      d(null), f(true);
    }
  };
  Xc(() => {
    const te = S(), ee = te?.cachedPrStatus, re = te?.cachedPrMergeability;
    te?.peekContentPrUrl && b(te.peekContentPrUrl), ee && (d({ isDraft: ee.isDraft ?? false, isMerged: ee.isMerged ?? false, isClosed: ee.isClosed ?? false, state: ee.state ?? "", mergeableState: ee.mergeableState ?? "" }), f(true)), re && s({ canMerge: re.canMerge ?? false, error: re.error ?? "" });
  }), Cn(() => {
    const te = I();
    te ? (G(te), H(te)) : (s(null), d(null), a(false));
  });
  const q = vt(() => r()?.canMerge ?? false);
  return Ee(ePw, { get existingPrUrl() {
    return I();
  }, handleReviewAll: j, get isAgentRunning() {
    return t.isAgentRunning;
  }, get isDiffStatsLoading() {
    return t.isDiffStatsLoading;
  }, get hasChanges() {
    return t.hasChanges;
  }, get hasStartedVm() {
    return t.hasStartedVm;
  }, get isArchived() {
    return t.isArchived;
  }, get isPrButtonLoading() {
    return N();
  }, get isPrStatusLoading() {
    return A();
  }, get isCheckingMergeability() {
    return o();
  }, get isMerging() {
    return l();
  }, get canMerge() {
    return q();
  }, get mergeError() {
    return r()?.error;
  }, get mergeableState() {
    return r()?.mergeableState;
  }, get isCheckingOutLocally() {
    return C();
  }, get isApplyingChangesLocally() {
    return T();
  }, get isDraft() {
    return u()?.isDraft;
  }, get isConvertingDraft() {
    return h();
  }, get hasLoadedPrStatus() {
    return g();
  }, isCheckingReviewChanges: false, get hasReviewChanges() {
    return M();
  }, get chatWidth() {
    return t.chatWidth;
  }, vsContext: e, onCheckoutLocally: async (te) => {
    await e.commandService.executeCommand(V9l.ID, { bcId: t.bcId, convertToLocal: te ?? false });
  }, onApplyChangesLocally: async () => {
    await e.commandService.executeCommand(wNi.ID, { bcId: t.bcId });
  }, onCreateOrViewPR: async () => {
    const te = t.bcId, ee = e.cloudEnvironmentTemplateService, re = I();
    if (re) {
      try {
        const ie = await B2l({ prUrl: re, aiService: e.aiService, adminSettingsService: e.adminSettingsService, experimentService: e.experimentService, cloudEnvironmentTemplateService: ee });
        await e.openerService.open(ie);
      } catch (ie) {
        console.error("[BackgroundComposerActionButtons] Failed to open preferred PR URL:", ie);
        try {
          await e.openerService.open(re);
        } catch (oe) {
          console.error("[BackgroundComposerActionButtons] Failed to open PR URL:", oe);
        }
      }
      return;
    }
    i(true), e.backgroundComposerDataService.setData("backgroundComposers", (ie) => ie.bcId === te, "isCreatingPR", true);
    try {
      const oe = await (await e.aiService.backgroundComposerClient()).openPRBackgroundComposer({ bcId: te });
      if (!oe.success) e.notificationService.error(`Failed to create pull request: ${oe.error ?? "Unknown error"}`);
      else if (oe.prUrl) {
        e.backgroundComposerDataService.setData("backgroundComposers", (se) => se.bcId === te, "peekContentPrUrl", oe.prUrl), b(oe.prUrl);
        try {
          await VMi({ prUrl: oe.prUrl, aiService: e.aiService, adminSettingsService: e.adminSettingsService, experimentService: e.experimentService, cloudEnvironmentTemplateService: ee, openPullRequestUrl: async (se) => {
            await e.openerService.open(se);
          }, onPreferredOpenError: (se) => {
            console.error("[BackgroundComposerActionButtons] Failed to open preferred PR URL:", se);
          } }), e.notificationService.info("Pull Request created");
        } catch (se) {
          e.notificationService.error(`Pull request created, but failed to open it: ${se?.message ?? String(se)}`);
        }
        await new Promise((se) => setTimeout(se, 500));
      } else e.notificationService.info("Pull Request created");
    } catch (ie) {
      e.notificationService.error(`Failed to create pull request: ${ie?.message ?? String(ie)}`);
    } finally {
      i(false), e.backgroundComposerDataService.setData("backgroundComposers", (ie) => ie.bcId === te, "isCreatingPR", false);
    }
  }, onMergePR: async (te) => {
    const ee = I();
    if (!(!ee || !q())) {
      c(true);
      try {
        const re = await e.aiService.backgroundComposerClient(), ie = new HZr({ prUrl: ee, mergeMethod: te }), oe = await re.mergePullRequest(ie);
        oe.success ? (e.notificationService.info("Pull Request merged successfully"), await H(ee)) : e.notificationService.error(`Failed to merge PR: ${oe.error}`);
      } catch (re) {
        e.notificationService.error(`Failed to merge PR: ${re?.message ?? String(re)}`);
      } finally {
        c(false);
      }
    }
  }, onOpenPrFromDraft: async () => {
    const te = t.bcId;
    if (te) {
      p(true);
      try {
        const ee = await e.aiService.backgroundComposerClient(), re = new WZr({ bcId: te }), ie = await ee.convertPullRequestFromDraft(re);
        if (!ie.success) {
          e.notificationService.error(`Failed to open PR: ${ie.error}`);
          return;
        }
        const oe = I();
        oe && (await G(oe), await H(oe)), e.notificationService.info("Pull Request marked ready for review");
      } catch (ee) {
        e.notificationService.error(`Failed to open PR: ${ee?.message ?? String(ee)}`);
      } finally {
        p(false);
      }
    }
  } });
}
var D8f, N8f, 