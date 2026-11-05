// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CompactAgentHistoryHoverMenu.react.js range:32885729..32894720
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.185Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, codicons.js, themables.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, codicons.js, themables.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
vPw = L({ "CompactAgentHistoryHoverMenu.react.js"() {
  "use strict";
  E(), Mt(), gs(), ta(), LBe = 20, sZt = 20;
} }), _Pw = L({ "CompactAgentHistoryHoverPane.css"() {
} });
function bPw(t) {
  const e = Gr(), n = vt(() => e.composerDataService.selectedComposerId), i = vt(() => {
    const U = t.sourceComposerId;
    return U ? e.composerViewsService.getEditorGroupForComposer(U) : void 0;
  }), [r] = YB(e.storageService, "pinnedComposers"), [s] = uBe(rBl, []), o = vt(() => nBl(s())), a = (U) => {
    try {
      const j = e.composerDataService.loadedComposers.byId[U];
      return !j || j.status !== "generating" ? false : j.fullConversationHeadersOnly.some(($) => $.type === bs.HUMAN);
    } catch {
      return false;
    }
  }, l = vt(() => {
    const U = e.composerDataService.allComposersData.allComposers || [], j = o(), $ = U.filter((H) => !H.isSpec && !H.isProject && !H.isEphemeral).filter((H) => !H.isArchived).filter((H) => !IV(H) && !H.isBestOfNSubcomposer).filter((H) => oAt(j, Ews(H))).filter((H) => H.name || H.isDraft || a(H.composerId));
    return pPw($, e.backgroundComposerDataService).sort((H, G) => (G.lastUpdatedAt ?? G.createdAt ?? 0) - (H.lastUpdatedAt ?? H.createdAt ?? 0));
  }), c = vt(() => {
    const U = e.composerDataService.allComposersData.allComposers || [], j = o();
    return U.filter((H) => !H.isSpec && !H.isProject && !H.isEphemeral).filter((H) => H.isArchived).filter((H) => !IV(H) && !H.isBestOfNSubcomposer).filter((H) => oAt(j, Ews(H))).filter((H) => H.name || H.isDraft || a(H.composerId)).sort((H, G) => (G.lastUpdatedAt ?? G.createdAt ?? 0) - (H.lastUpdatedAt ?? H.createdAt ?? 0));
  }), u = vt(() => oAt(o(), "cloud") ? aBl(e.backgroundComposerDataService, e.composerDataService).filter((U) => !U.isArchived) : []), d = vt(() => oAt(o(), "cloud") ? aBl(e.backgroundComposerDataService, e.composerDataService).filter((U) => U.isArchived) : []), h = vt(() => {
    const U = r(), j = l().map((G) => ({ kind: "composer", composer: G, timestamp: G.lastUpdatedAt ?? G.createdAt ?? 0 })), $ = u().map((G) => ({ kind: "background", backgroundComposer: G, timestamp: G.updatedAt ?? G.createdAt ?? 0 })), H = (G) => G.kind === "composer" && MHr(U, G.composer) ? 0 : 1;
    return [...j, ...$].sort((G, q) => {
      const K = H(G) - H(q);
      return K !== 0 ? K : q.timestamp - G.timestamp;
    });
  }), p = vt(() => {
    const U = c().map(($) => ({ kind: "composer", composer: $, timestamp: $.lastUpdatedAt ?? $.createdAt ?? 0 })), j = d().map(($) => ({ kind: "background", backgroundComposer: $, timestamp: $.updatedAt ?? $.createdAt ?? 0 }));
    return [...U, ...j].sort(($, H) => H.timestamp - $.timestamp);
  }), g = (U) => {
    if (U.kind === "composer") {
      if (U.composer.isDraft) {
        const j = U.composer.subtitle?.trim() ?? "";
        return j.length > 0 ? `Draft: ${j}` : "Draft";
      }
      return U.composer.name || "New Agent";
    }
    return U.backgroundComposer.name || "Cloud Agent";
  }, f = (U) => U.kind === "composer" ? e.composerDataService.loadedComposers.byId[U.composer.composerId]?.status === "generating" : U.backgroundComposer.status === Po.RUNNING || U.backgroundComposer.status === Po.CREATING, _ = (U) => f(U) ? { spinner: true } : U.kind === "background" ? { spinner: false, codicon: yt.cloudTwo } : U.composer.createdFromBackgroundAgent?.bcId ? { spinner: false, codicon: yt.cloudTwo } : U.composer.isWorktree ? { spinner: false, codicon: yt.gitBranch } : { spinner: false, codicon: wYg({ isBlocked: false, isGenerating: false, isDraft: (U.kind === "composer" && U.composer.isDraft) ?? false, isArchived: false }) }, b = (U, j) => {
    if (U.kind === "composer") return j === U.composer.composerId;
    const $ = e.agentLayoutService.getActiveComposer();
    return $?.type === "background" && $.id === U.backgroundComposer.bcId;
  }, y = async (U) => {
    if (U.kind === "composer") {
      await e.agentLayoutService.openComposer({ type: "local", id: U.composer.composerId, openInNewTab: true, transient: true, targetGroup: i() });
      return;
    }
    await e.agentLayoutService.openComposer({ type: "background", id: U.backgroundComposer.bcId });
  }, S = async (U) => {
    const j = Date.now();
    if (U.kind === "composer") {
      const G = U.composer.composerId;
      e.composerService.cancelChat(G), e.composerDataService.setAllComposersData("allComposers", (q) => q.composerId === G, { isArchived: true, lastUpdatedAt: j });
      return;
    }
    const $ = e.agentLayoutService.getActiveComposer(), H = $?.type === "background" && $.id === U.backgroundComposer.bcId;
    await e.agentLayoutService.archiveOrUnarchiveBackgroundComposer(U.backgroundComposer.bcId, true, H);
  }, k = async (U) => {
    const j = Date.now();
    if (U.kind === "composer") {
      e.composerDataService.setAllComposersData("allComposers", ($) => $.composerId === U.composer.composerId, { isArchived: false, lastUpdatedAt: j });
      return;
    }
    await e.agentLayoutService.archiveOrUnarchiveBackgroundComposer(U.backgroundComposer.bcId, false, false);
  }, C = async (U) => {
    const j = e.quickInputService.createInputBox();
    j.placeholder = "Enter new name", j.value = U.name || "Cloud Agent", j.show();
    const $ = async () => {
      try {
        const q = j.value.trim();
        q && await e.backgroundComposerService.renameBackgroundComposer(U.bcId, q);
      } finally {
        j.hide();
      }
    }, H = j.onDidAccept($), G = j.onDidHide(() => {
      H.dispose(), G.dispose(), j.dispose();
    });
  }, T = (U) => {
    if (U.kind === "composer") {
      const j = V3n(e, U.composer, { targetGroup: i() }).filter(($) => $.id !== "duplicate-composer" && $.id !== "mark-as-unread");
      return U.composer.isArchived ? [{ id: "restore-composer", label: "Restore", enabled: true, class: "", tooltip: "Restore chat", run: async () => {
        await k(U);
      } }, new Kh(), ...j] : j;
    }
    return [{ id: "rename-background-composer", label: "Rename", enabled: true, class: "", tooltip: "Rename cloud agent", run: async () => {
      await C(U.backgroundComposer);
    } }, new Kh(), { id: U.backgroundComposer.isArchived ? "restore-background-composer" : "archive-background-composer", label: U.backgroundComposer.isArchived ? "Restore" : "Archive", enabled: true, class: "", tooltip: U.backgroundComposer.isArchived ? "Restore cloud agent" : "Archive cloud agent", run: async () => {
      U.backgroundComposer.isArchived ? await k(U) : await S(U);
    } }];
  }, I = (U) => U.kind === "composer" ? `local:${U.composer.composerId}` : `background:${U.backgroundComposer.bcId}`, A = vt(() => {
    const U = /* @__PURE__ */ new Map();
    for (const j of h()) U.set(I(j), j);
    for (const j of p()) U.set(I(j), j);
    return U;
  }), P = (U, j) => {
    const $ = A().get(U);
    if (!$) return;
    const H = T($);
    H.length !== 0 && e.contextMenuService.showContextMenu({ getAnchor: () => ({ x: j.x, y: j.y + 4, width: 0, height: 0 }), getActions: () => H, domForShadowRoot: dE().body });
  }, M = (U) => {
    const j = U.trim();
    j.length !== 0 && (e.analyticsService.trackEvent("unified_sidebar.find_with_agent_clicked"), t.closeHistoryMenu(), e.composerService.createComposer({ partialState: { text: K8f(j), unifiedMode: "agent" }, autoSubmit: true }));
  }, O = vt(() => {
    const U = r(), j = n();
    return h().map(($) => {
      const H = _($), G = g($), q = $.kind === "composer" ? $.composer.subtitle ?? "" : "", K = $.kind === "composer" && MHr(U, $.composer);
      return { id: I($), label: G, searchText: `${G} ${q}`.toLowerCase(), timestamp: $.timestamp, isArchived: false, canTogglePin: $.kind === "composer" && !IV($.composer) && !$.composer.isBestOfNSubcomposer, isPinned: K, isSelected: b($, j), showSpinner: H.spinner, icon: K ? yt.pinned : H.codicon ?? yt.check };
    });
  }), N = vt(() => {
    const U = n();
    return p().map((j) => {
      const $ = _(j), H = g(j), G = j.kind === "composer" ? j.composer.subtitle ?? "" : "";
      return { id: I(j), label: H, searchText: `${H} ${G}`.toLowerCase(), timestamp: j.timestamp, isArchived: true, canTogglePin: false, isPinned: false, isSelected: b(j, U), showSpinner: $.spinner, icon: $.codicon ?? yt.check };
    });
  });
  return Ee(yV, { reactComponent: fPw, get reactProps() {
    return { openPoint: t.position, menuId: t.menuId, entries: O(), archivedEntries: N(), onClose: t.closeHistoryMenu, onFindWithAgent: M, onOpenEntry: (U) => {
      const j = A().get(U);
      j && y(j);
    }, onArchiveEntry: (U) => {
      const j = A().get(U);
      j && S(j);
    }, onRestoreEntry: (U) => {
      const j = A().get(U);
      j && k(j);
    }, onTogglePinnedEntry: (U) => {
      const j = A().get(U);
      if (j?.kind !== "composer") return;
      V3n(e, j.composer, { targetGroup: i() }).find((H) => H.id === "pin-composer" || H.id === "unpin-composer")?.run();
    }, onShowEntryActions: P };
  }, get portalRoot() {
    return e.portalElement;
  } });
}
