// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerFileListItemView.js range:30040648..30049829
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, pi, Ul, vo, cVe, ZRn, LIl
// wrapper-init: C$k
// hoisted-owner: ComposerToolbarFileListItem.js (app-out-vs-workbench-workbench-glass-main-js:5340); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

C$k = L({ "ComposerFileListItemView.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), pi(), Ul(), vo(), cVe(), ZRn(), LIl(), Ncf = wt("<span>"), Lcf = wt('<span class="text-[10px] tabular-nums inline-flex gap-0.5">'), Ocf = wt("<div><div><span><span>");
} });
function T$k(t) {
  const e = jp();
  e.set(svs, false), e.set(ovs, 0), e.set(avs, void 0), e.set(lvs, void 0);
  const n = Ca(e, svs), i = (se) => e.set(svs, se), r = Ca(e, ovs), s = (se) => e.set(ovs, se), o = Gr(), { composerService: a, scmService: l, commandService: c, viewsService: u, workspaceContextService: d, instantiationService: h } = o, { location: p } = Vus(), { currentComposer: g } = tBe(t.composerDataHandle), { showHover: f, hideHover: _ } = L6(500), b = vt(() => rt.parse(t.file)), y = vt(() => CXd(o, t.composerDataHandle())), S = vt(() => g().createdFromBackgroundAgent?.bcId), k = Ca(e, avs), C = (se) => e.set(avs, se), T = vt(() => {
    const se = S();
    if (se) return o.backgroundComposerDataService.data.backgroundComposers.find((le) => le.bcId === se);
  });
  Cn(() => {
    const se = S();
    if (!se) {
      C(void 0);
      return;
    }
    const ce = T()?.diffChangesHash;
    let ae = false, de;
    const he = o.composerLogService, ge = o.backgroundComposerCachedDetailsStorageService;
    (async (ve = 10) => {
      for (let fe = 0; fe < ve; fe++) {
        if (ae) return;
        try {
          const Te = await ge.getCachedDetails(se);
          if (!ae && ce === Te?.diffChangesHash && Te?.detailedDiff) {
            C(Te.detailedDiff);
            return;
          }
        } catch (Te) {
          he.error(`Failed to fetch background composer cached details (attempt ${fe + 1}/${ve}):`, Te);
        }
        if (ae) return;
        await new Promise((Te) => {
          de = setTimeout(Te, 100);
        });
      }
    })(), On(() => {
      ae = true, de !== void 0 && (clearTimeout(de), de = void 0);
    });
  });
  const [I] = F9e(o.diffChangeSourceRegistry.descriptorsObservable), A = vt(() => {
    I();
    const se = t.composerDataHandle(), le = b().toString();
    return o.composerCodeBlockService.getAllPendingDiffDescriptors(se).filter((ce) => ce.uri.toString() === le);
  }), P = vt(() => S() ? false : A().length > 0), M = $xi(), O = vt(() => !M()), N = vt(() => A()[0]), U = vt(() => {
    const se = b().toString();
    return A().filter((ae) => ae.uri.toString() === se).flatMap((ae) => (ae.changes ?? []).map((de) => ({ startLineNumber: ae.currentRange.startLineNumber + de.addedRange.startLineNumber - 1 }))).sort((ae, de) => ae.startLineNumber - de.startLineNumber);
  });
  Cn(() => {
    U(), b(), s(0);
  });
  const j = Ca(e, lvs), $ = (se) => e.set(lvs, se);
  Cn(() => {
    let se = false;
    const le = k();
    if (!le) {
      $(void 0);
      return;
    }
    const ce = b(), ae = o.workspaceContextService.asRelativePath(ce), de = (ve) => {
      let fe = ve.startsWith("/") ? ve.substring(1) : ve;
      return fe.startsWith("workspace/") && (fe = fe.substring(fe.indexOf("/") + 1)), fe = fe.replace(/\\/g, "/"), fe;
    }, he = de(ae), ge = de(ce.path);
    (async () => {
      if (le.diff?.diffs) for (const ve of le.diff.diffs) {
        if (se) return;
        const fe = ve.to !== "/dev/null" ? ve.to : ve.from, Te = de(fe);
        if (Te === he || Te === ge) {
          $({ added: ve.added, removed: ve.removed });
          return;
        }
      }
      if (le.submoduleDiffs) {
        for (const ve of le.submoduleDiffs) if (ve.diff?.diffs) for (const fe of ve.diff.diffs) {
          if (se) return;
          const Te = fe.to !== "/dev/null" ? fe.to : fe.from, _e = ve.relativePath ? `${ve.relativePath}/${Te}` : Te, Ce = de(_e);
          if (Ce === he || Ce === ge) {
            $({ added: fe.added, removed: fe.removed });
            return;
          }
        }
      }
      se || $(void 0);
    })(), On(() => {
      se = true;
    });
  });
  const H = vt(() => {
    const se = j();
    if (se) return se;
    const ce = A().filter((he) => he.uri.toString() === b().toString());
    if (ce.length === 0) return { added: 0, removed: 0 };
    let ae = 0, de = 0;
    for (const he of ce) for (const ge of he.changes ?? []) ae += ge.addedRange.endLineNumberExclusive - ge.addedRange.startLineNumber, de += ge.removedLinesOriginalRange.endLineNumberExclusive - ge.removedLinesOriginalRange.startLineNumber;
    return { added: ae, removed: de };
  }), G = S$k(), q = vt(() => {
    const se = b();
    G();
    const le = l.getRepository(se);
    if (le) {
      for (const ce of le.provider.groups) if (ce.id === "workingTree" || ce.id === "untracked") {
        const ae = ce.resources.find((de) => de.sourceUri.toString() === se.toString());
        if (ae) return ae;
      }
    }
  }), K = vt(() => P() ? false : q() !== void 0), V = async (se) => {
    se.stopPropagation();
    const le = q();
    if (le) try {
      await c.executeCommand("git.stage", le);
    } catch (ce) {
      o.composerLogService.error("Failed to stage file:", ce);
    }
  }, Y = vt(() => {
    const se = P(), le = S(), ce = H(), ae = t.getFileChangedInfo();
    return se || le ? ce.added > 0 || ce.removed > 0 ? ce : ae && (ae.added > 0 || ae.removed > 0) ? ae : ce : ae && (ae.added > 0 || ae.removed > 0) ? ae : { added: 0, removed: 0 };
  }), J = (se) => {
    i(true);
    const le = o.workspaceContextService.asRelativePath(b());
    f({ target: se.currentTarget, content: le });
  }, Q = () => {
    i(false), _();
  }, te = async (se) => {
    try {
      if (!d.isInsideWorkspace(se) || !u.isViewVisible("workbench.explorer.fileView")) return;
      const le = h.invokeFunction((ae) => ae.get(CR)), ce = u.getViewWithId("workbench.explorer.fileView");
      ce && (ce.setExpanded(true), await le.select(se, "force"));
    } catch (le) {
      o.composerLogService.error("Failed to reveal file in explorer:", le);
    }
  }, ee = (se) => {
    const le = U();
    let ce;
    if (le.length > 0) {
      const ae = r();
      ce = le[ae % le.length].startLineNumber, s((ae + 1) % le.length);
    } else {
      const ae = N()?.changes?.[0];
      ae && (ce = (N()?.currentRange.startLineNumber ?? 1) + ae.addedRange.startLineNumber - 1);
    }
    E$k(o, b(), ce !== void 0 ? { startLineNumber: ce } : void 0, se.altKey, p() === "editor");
  }, re = (se) => {
    if (!se.defaultPrevented) {
      if (se.stopPropagation(), se.metaKey || se.ctrlKey) {
        ee(se);
        return;
      }
      if (y()) {
        const le = g().createdFromBackgroundAgent?.bcId;
        o.analyticsService.trackEvent("review_changes.opened", { entrypoint: "composer_toolbar_file_list", composer_id: g().composerId }), o.reviewChangesService.openOrUpdateReviewChangesEditor(g().composerId, { fromBackgroundAgent: le !== void 0 ? { bcId: le } : void 0, scrollToFile: b().toString() }), te(b());
      } else ee(se);
    }
  }, ie = vt(() => {
    const se = a.shouldShowAcceptReject(g().composerId, b());
    if (P() && O() || se) return "acceptReject";
    if (K()) return "stage";
  }), oe = T_t(() => Ee(Ut, { get when() {
    return ie();
  }, get children() {
    var se = Fcf();
    return se.style.setProperty("transition", "opacity 0.1s ease-in-out"), se.style.setProperty("align-items", "center"), se.style.setProperty("padding-right", "2px"), se.style.setProperty("flex-shrink", "0"), se.style.setProperty("display", "flex"), Le(se, Ee(Ut, { get when() {
      return ie() === "acceptReject";
    }, get fallback() {
      return Ee(eb, { get codicon() {
        return yt.add;
      }, iconClass: "!text-[12px]", onClick: V, hintText: "Stage File" });
    }, get children() {
      return [Ee(eb, { get codicon() {
        return yt.xTwo;
      }, iconClass: "!text-[16px]", onClick: async (le) => {
        le.stopPropagation();
        const ce = A();
        for (const ae of ce) await o.diffChangeSourceRegistry.reject(ae.id, { close: true });
      }, hintText: "Reject" }), Ee(Ut, { get when() {
        return !M();
      }, get children() {
        return Ee(eb, { get codicon() {
          return yt.checkTwo;
        }, iconClass: "!text-[9px]", onClick: async (le) => {
          le.stopPropagation();
          const ce = A();
          for (const ae of ce) await o.diffChangeSourceRegistry.accept(ae.id);
        }, hintText: "Accept" });
      } })];
    } })), xn((le) => (le = n() ? 1 : 0) != null ? se.style.setProperty("opacity", le) : se.style.removeProperty("opacity")), se;
  } }));
  return Ee(w$k, { get filePath() {
    return b().fsPath;
  }, get displayName() {
    return t.displayName;
  }, get added() {
    return Y().added;
  }, get removed() {
    return Y().removed;
  }, onClick: re, onMouseEnter: J, onMouseLeave: Q, get rightContent() {
    return oe();
  } });
}
function E$k(t, e, n, i, r, s) {
  if (n) {
    mFa({ uri: e, range: { positionLineNumber: n.startLineNumber, positionColumn: 1, selectionStartLineNumber: n.startLineNumber, selectionStartColumn: 1 }, text: "" }, t, { openToSide: i, preferNeighboringGroup: r, composerId: s });
    return;
  }
  IWt(e, t, { openToSide: i, preferNeighboringGroup: r, composerId: s });
}
var Fcf, svs, ovs, avs, lvs, 