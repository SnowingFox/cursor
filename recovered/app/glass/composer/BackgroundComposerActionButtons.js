// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BackgroundComposerActionButtons.js range:32851090..32858263
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, pi, pd, sk, vo, Rme, FS, Sws, Y2w, X2w, J2w
// wrapper-init: nPw
// hoisted-owner: PullRequestMergeStatusIndicator.js (app-out-vs-workbench-workbench-glass-main-js:6134); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

nPw = L({ "BackgroundComposerActionButtons.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), pd(), sk(), vo(), Rme(), FS(), Sws(), Y2w(), X2w(), J2w(), D8f = wt('<div class="background-composer-header-action-buttons flex gap-2">'), N8f = wt("<div class=bc-action-buttons-placeholder>");
} });
function iPw(t) {
  const e = Gr(), n = vt(() => e.backgroundComposerDataService.getBcDataInMainWindow(t.bcId)), i = vt(() => n()?.peekContentPrUrl), { showLargeHover: r, hideHover: s } = aVe(), [o, a] = Wt(null), [l, c] = Wt(null), u = jp(), d = Ca(u, Z9l), h = (N) => u.set(Z9l, N);
  let p = false;
  On(() => {
    p = true;
  });
  const g = (N) => p || ks(() => N.bcId !== t.bcId || N.prUrl !== i()), f = async (N) => {
    if (!N) return;
    const U = ks(() => t.bcId), j = { bcId: U, prUrl: N };
    if (!g(j)) {
      h(true);
      try {
        const $ = await e.aiService.backgroundComposerClient(), H = new BZr({ prUrl: N }), G = await $.getPullRequestMergeStatus(H);
        if (g(j)) return;
        a(G), e.backgroundComposerDataService.setData("backgroundComposers", (q) => q.bcId === U, "cachedPrStatus", { isDraft: G.isDraft, isMerged: G.isMerged, isClosed: G.isClosed, state: G.state, mergeableState: G.mergeableState });
      } catch ($) {
        console.error("Error fetching PR merge status:", $), g(j) || a(null);
      } finally {
        g(j) || h(false);
      }
    }
  }, _ = async (N) => {
    if (!N) return;
    const U = ks(() => t.bcId), j = { bcId: U, prUrl: N };
    if (!g(j)) try {
      const $ = await e.aiService.backgroundComposerClient(), H = new UZr({ prUrl: N }), G = await $.checkPullRequestMergeability(H);
      if (g(j)) return;
      c(G), e.backgroundComposerDataService.setData("backgroundComposers", (q) => q.bcId === U, "cachedPrMergeability", { canMerge: G.canMerge, error: G.error });
    } catch ($) {
      console.error("Error checking PR mergeability:", $), g(j) || c(null);
    }
  };
  Xc(() => {
    const N = n(), U = N?.cachedPrStatus, j = N?.cachedPrMergeability;
    U && a({ isDraft: U.isDraft ?? false, isMerged: U.isMerged ?? false, isClosed: U.isClosed ?? false, state: U.state ?? "", mergeableState: U.mergeableState ?? "" }), j && c({ canMerge: j.canMerge ?? false, error: j.error ?? "" });
  }), Cn(() => {
    const N = i();
    N ? (n()?.cachedPrStatus || (a(null), c(null)), f(N), _(N)) : (a(null), c(null), h(false));
  });
  let b, y;
  const S = () => {
    b?.dispose(), b = void 0, y = void 0;
  }, k = (N) => {
    if (b !== void 0 && y === N) return;
    S();
    const U = e.experimentService.checkFeatureGate("background_composer_list_focus_aware_poll", { disableExposureLog: true }) ? wws * F8f : wws;
    y = N, b = new lie(async () => {
      await Promise.all([f(N), _(N)]);
    }, { focusedIntervalMs: wws, unfocusedIntervalMs: U, maxIntervalMs: U, focus: e.hostService, context: e.window }), b.start({ immediate: false });
  };
  On(S), Cn(() => {
    const N = o(), U = i();
    if (!U || !N) {
      S();
      return;
    }
    N.mergeableState === "unstable" ? k(U) : S();
  });
  const C = vt(() => {
    const N = o();
    if (!N || !N.isMerged && !N.isClosed && !N.isDraft && N.state !== "open") return null;
    if (N.isMerged) return (() => {
      var U = sAt();
      return xn(() => Er(U, `${Gn.asClassName(yt.gitBranch)} text-purple-400 !text-[12px]`)), U;
    })();
    if (N.isClosed) return (() => {
      var U = sAt();
      return xn(() => Er(U, `${Gn.asClassName(yt.gitPullRequestClosed)} text-[var(--cursor-text-red-primary)] !text-[12px]`)), U;
    })();
    if (N.isDraft) return (() => {
      var U = sAt();
      return xn(() => Er(U, `${Gn.asClassName(yt.gitPullRequestDraft)} text-gray-400 !text-[12px]`)), U;
    })();
    if (N.state === "open") {
      if (N.mergeableState === "unstable") return L8f();
      const U = l();
      return N.mergeableState === "clean" && U?.canMerge ? (() => {
        var j = sAt();
        return xn(() => Er(j, `${Gn.asClassName(yt.check)} text-[var(--vscode-testing-iconPassed)] !text-[12px]`)), j;
      })() : N.mergeableState === "clean" && !U ? null : N.mergeableState === "blocked" ? (() => {
        var j = sAt();
        return xn(() => Er(j, `${Gn.asClassName(yt.error)} text-[var(--cursor-text-red-primary)] !text-[12px]`)), j;
      })() : (() => {
        var j = sAt();
        return xn(() => Er(j, `${Gn.asClassName(yt.gitBranch)} text-[var(--vscode-testing-iconPassed)] !text-[12px]`)), j;
      })();
    }
    return null;
  }), T = vt(() => {
    const N = o(), U = l();
    return d() ? "Checking..." : N ? N.isMerged ? "Merged" : N.isClosed ? "Closed" : N.isDraft ? "Draft" : N.state === "open" ? N.mergeableState === "unstable" ? "Checks running" : N.mergeableState === "blocked" ? "Blocked" : N.mergeableState === "dirty" ? "Conflicts" : N.mergeableState === "clean" && U?.canMerge ? "Ready to merge" : "Open" : "" : "";
  }), I = vt(() => {
    const N = o();
    return N ? N.isMerged ? "text-purple-400" : N.isClosed ? "text-[var(--cursor-text-red-primary)]" : N.isDraft ? "text-gray-400" : N.state === "open" ? N.mergeableState === "unstable" ? "text-yellow-400" : N.mergeableState === "blocked" ? "text-[var(--cursor-text-red-primary)]" : N.mergeableState === "dirty" ? "text-orange-400" : (N.mergeableState === "clean", "text-[var(--vscode-testing-iconPassed)]") : "text-[var(--vscode-descriptionForeground)]" : "text-[var(--vscode-descriptionForeground)]";
  }), A = vt(() => {
    const N = o(), U = l();
    return d() ? "Checking pull request status..." : N ? N.isMerged ? "Pull request has been merged" : N.isClosed ? "Pull request has been closed without merging" : N.isDraft ? "Pull request is in draft state" : N.state === "open" ? N.mergeableState === "unstable" ? "Checks are currently running on this pull request" : N.mergeableState === "blocked" ? "Pull request is blocked by required checks or reviews" : N.mergeableState === "dirty" ? "Pull request has merge conflicts that need to be resolved" : N.mergeableState === "clean" && U?.canMerge ? "Pull request is ready to merge" : "Pull request is open and ready for review" : "Pull request status" : "Pull request status unavailable";
  }), P = vt(() => {
    const N = C(), U = T();
    return !!N || !t.isCompact && !!U;
  }), M = vt(() => {
    const U = n()?.status;
    return (U === Po.FINISHED || U === Po.RUNNING) && i();
  }), O = vt(() => M() && P());
  return Ee(Ut, { get when() {
    return M();
  }, get children() {
    var N = O8f();
    return N.addEventListener("mouseleave", () => s()), N.addEventListener("mouseenter", (U) => r(U, A(), Bu.BELOW)), N.style.setProperty("min-width", "12px"), N.style.setProperty("align-self", "center"), Le(N, Ee(Ut, { get when() {
      return C();
    }, get children() {
      return C();
    } }), null), Le(N, Ee(Ut, { get when() {
      return !t.isCompact;
    }, get children() {
      var U = sAt();
      return Le(U, T), xn(() => Er(U, `${I()} !text-[12px]`)), U;
    } }), null), xn((U) => (U = O() ? "visible" : "hidden") != null ? N.style.setProperty("visibility", U) : N.style.removeProperty("visibility")), N;
  } });
}
var sAt, L8f, O8f, Z9l, wws, F8f, 