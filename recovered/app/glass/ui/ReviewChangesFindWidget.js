// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReviewChangesFindWidget.js range:31739345..31780491
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.959Z
YLf = L({ "ReviewChangesFindWidget.js"() {
  "use strict";
  E(), at(), at(), pi(), Ma(), J0(), Zwt(), rs(), Hi(), pf(), gS(), ru(), YXt(), vo(), zLf = wt("<div class=review-changes-find-widget-container>"), VLf = 310, KLf = class extends eAt {
    constructor(t, e, n, i, r, s) {
      super({ showCommonFindToggles: true, checkImeCompletionState: true, showResultCount: true, initialWidth: VLf, enableSash: false, previousMatchActionId: OC.PreviousMatchFindAction, nextMatchActionId: OC.NextMatchFindAction }, t, e, n, i), this.allMatches = [], this.currentMatchIndex = -1, this.matchDecorations = /* @__PURE__ */ new Map(), this.currentMatchDecoration = /* @__PURE__ */ new Map(), this.mountedEditors = r, this.multiDiffRef = s;
      const o = this.getFindInputDomNode();
      o && this.onkeydown(o, (a) => {
        a.keyCode === Ze.Enter && (this.find(a.shiftKey), a.preventDefault(), a.stopPropagation());
      });
    }
    setMultiDiffRef(t) {
      this.multiDiffRef = t;
    }
    layout(t) {
      super.layout(500);
    }
    show(t) {
      super.show(t), this.updateResultCount();
    }
    hide() {
      this.clearAllDecorations(), this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, super.hide();
    }
    findAllMatches() {
      const t = this.inputValue;
      if (!t || t.length === 0) return [];
      const e = this._getRegexValue(), n = this._getCaseSensitiveValue(), i = this._getWholeWordValue(), r = [];
      let s = 0;
      for (const [o, { resource: a, editor: l }] of this.mountedEditors) {
        const c = l.getModel();
        if (!c) continue;
        const u = l.getVisibleRanges();
        if (u.length !== 0) try {
          const d = c.findMatches(t, u, e, n, i ? null : "", false, 1e4);
          for (const h of d) r.push({ uri: o, resource: a, editor: l, match: h, matchIndex: s++ });
        } catch {
        }
      }
      return r;
    }
    clearAllDecorations() {
      for (const [t, e] of this.matchDecorations) try {
        t.removeDecorations(e);
      } catch {
      }
      this.matchDecorations.clear();
      for (const [t, e] of this.currentMatchDecoration) try {
        t.removeDecorations(e);
      } catch {
      }
      this.currentMatchDecoration.clear();
    }
    applyMatchDecorations() {
      if (this.clearAllDecorations(), this.allMatches.length === 0) return;
      const t = /* @__PURE__ */ new Map();
      for (const e of this.allMatches) {
        const n = t.get(e.editor) || [];
        n.push(e), t.set(e.editor, n);
      }
      for (const [e, n] of t) {
        const i = n.map((r) => ({ range: r.match.range, options: { description: "find-match-highlight", className: "findMatch", stickiness: Ott.NeverGrowsWhenTypingAtEdges } }));
        try {
          const r = e.deltaDecorations([], i);
          this.matchDecorations.set(e, r);
        } catch {
        }
      }
    }
    updateCurrentMatchDecoration() {
      for (const [n, i] of this.currentMatchDecoration) try {
        n.removeDecorations(i);
      } catch {
      }
      if (this.currentMatchDecoration.clear(), this.currentMatchIndex < 0 || this.currentMatchIndex >= this.allMatches.length) return;
      const t = this.allMatches[this.currentMatchIndex], e = { range: t.match.range, options: { description: "find-match-current", className: "currentFindMatch", stickiness: Ott.NeverGrowsWhenTypingAtEdges } };
      try {
        const n = t.editor.deltaDecorations([], [e]);
        this.currentMatchDecoration.set(t.editor, n);
      } catch {
      }
    }
    find(t) {
      const e = this.inputValue;
      if (!e || e.length === 0) {
        this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
        return;
      }
      if (this.allMatches.length === 0 || this.currentMatchIndex < 0) {
        if (this.allMatches = this.findAllMatches(), this.allMatches.length === 0) {
          this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
          return;
        }
        this.currentMatchIndex = t ? this.allMatches.length - 1 : 0, this.applyMatchDecorations();
      } else t ? this.currentMatchIndex = (this.currentMatchIndex - 1 + this.allMatches.length) % this.allMatches.length : this.currentMatchIndex = (this.currentMatchIndex + 1) % this.allMatches.length;
      this.updateCurrentMatchDecoration(), this.goToMatch(this.currentMatchIndex), this.updateResultCount();
    }
    findFirst() {
      const t = this.inputValue;
      if (!t || t.length === 0) {
        this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
        return;
      }
      if (this.allMatches = this.findAllMatches(), this.allMatches.length === 0) {
        this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), this.updateResultCount();
        return;
      }
      this.currentMatchIndex = 0, this.applyMatchDecorations(), this.updateCurrentMatchDecoration(), this.goToMatch(0), this.updateResultCount();
    }
    goToMatch(t) {
      if (t < 0 || t >= this.allMatches.length) return;
      const e = this.allMatches[t], { resource: n, editor: i, match: r } = e;
      if (this.previousEditorMatch) {
        const o = this.previousEditorMatch.editor, a = this.previousEditorMatch.match, l = o !== i, c = a.range.startLineNumber !== r.range.startLineNumber || a.range.startColumn !== r.range.startColumn || a.range.endLineNumber !== r.range.endLineNumber || a.range.endColumn !== r.range.endColumn;
        if (l || c) try {
          const u = { startLineNumber: a.range.startLineNumber, startColumn: a.range.startColumn, endLineNumber: a.range.startLineNumber, endColumn: a.range.startColumn };
          o.setSelection(u);
        } catch {
        }
      }
      const s = n.modifiedUri?.toString() || n.originalUri?.toString();
      s && this.multiDiffRef && this.multiDiffRef.expandResourceByUri(s), setTimeout(() => {
        i.setSelection(r.range), i.revealRangeInCenter(r.range, 0), s && this.multiDiffRef && this.multiDiffRef.scrollToResource({ modifiedUri: s, lineNumber: r.range.startLineNumber, omitHighlight: true });
      }, 100), this.previousEditorMatch = e;
    }
    _onInputChanged() {
      const t = this.inputValue;
      return !t || t.length === 0 ? (this.allMatches = [], this.currentMatchIndex = -1, this.previousEditorMatch = void 0, this.clearAllDecorations(), false) : (this.allMatches = this.findAllMatches(), this.currentMatchIndex = this.allMatches.length > 0 ? 0 : -1, this.allMatches.length > 0 ? (this.applyMatchDecorations(), this.updateCurrentMatchDecoration(), this.goToMatch(0), true) : (this.clearAllDecorations(), false));
    }
    _onFocusTrackerFocus() {
    }
    _onFocusTrackerBlur() {
    }
    _onFindInputFocusTrackerFocus() {
    }
    _onFindInputFocusTrackerBlur() {
    }
    focusInput() {
      this.focusFindBox();
    }
    selectAllText() {
      const t = this.getFindInputDomNode();
      if (t) {
        const e = t.querySelector("input");
        e && e.select();
      }
    }
    updateSearchString(t) {
      const e = this.getFindInputDomNode();
      if (e) {
        const n = e.querySelector("input");
        if (n) {
          n.value = t;
          const i = new Event("input", { bubbles: true });
          n.dispatchEvent(i);
        }
      }
    }
    async _getResultCount() {
      const t = this.inputValue;
      if (!(!t || t.length === 0)) return this.allMatches.length === 0 && (this.allMatches = this.findAllMatches()), this.allMatches.length === 0 ? { resultIndex: 0, resultCount: 0 } : ((this.currentMatchIndex < 0 || this.currentMatchIndex >= this.allMatches.length) && (this.currentMatchIndex = 0), { resultIndex: this.currentMatchIndex, resultCount: this.allMatches.length });
    }
  };
} }), zFl = L({ "reviewChangesPane.css"() {
} });
function ikw(t) {
  let e, n;
  return { updateActiveComposer: (r) => {
    if (r !== e) {
      if (n?.dispose(), e = r, !r) {
        n = void 0;
        return;
      }
      n = t.composerEventService.onDidAiEditFile((s) => {
        s.composerId === r && (uX(s.path) || Kst(s.path.toString()) || t.getCurrentMode() !== l_.DiffWithMain && t.setMode(l_.Pending));
      });
    }
  }, dispose: () => {
    n?.dispose(), n = void 0, e = void 0;
  } };
}
function rkw(t) {
  const e = Gr(), { showHover: n, hideHover: i } = L6(800), r = vt(() => t.composerId), s = vt(() => {
    const En = r();
    if (En) return e.composerDataService.resolveComposerIdToSelected(En);
  }), [o, a] = Wt(void 0);
  Cn(() => {
    const En = s();
    if (!En) {
      a(void 0);
      return;
    }
    let Dn = false;
    e.composerDataService.getComposerHandleById(En).then((Si) => {
      Dn || a(Si);
    }), On(() => {
      Dn = true;
    });
  });
  const l = pgl(() => o()), { hasStagedChanges: c, isLoading: u } = xNf(e.gitContextService), { canCreatePullRequest: d, isLoading: h } = d1w(e.gitContextService), p = () => t.fromBugbot === true ? l_.DiffWithMain : t.fromBackgroundAgent ? l_.All : t.initialMode, [g, f] = Wt(p()), [_] = F9e(e.diffChangeSourceRegistry.descriptorsObservable);
  Xc(() => {
    const En = e.diffChangeSourceRegistry.onDidChange(() => {
      !pe() && t.fromBugbot !== true && !t.fromBackgroundAgent && g() !== l_.DiffWithMain && Ye();
    });
    On(() => En.dispose());
  });
  const [b, y] = Wt(void 0), S = new rHe({ forceIntegerValues: true, smoothScrollDuration: 0, scheduleAtNextAnimationFrame: (En) => Ix(ws(document), En) });
  let k;
  const C = () => {
    k && clearTimeout(k), k = setTimeout(() => {
      I?.dismissHovers();
    }, 50);
  }, T = (En) => {
    const Si = En.detail?.scrollDelta;
    if (typeof Si == "number" && Si !== 0) {
      const Ui = S.getCurrentScrollPosition();
      S.setScrollPositionNow({ scrollTop: Ui.scrollTop + Si });
    }
  };
  On(() => {
    S.dispose(), k && clearTimeout(k);
  }), Cn(() => {
    const En = b();
    En && (En.addEventListener("diff-editor-scroll-compensate", T), On(() => {
      En.removeEventListener("diff-editor-scroll-compensate", T);
    }));
  });
  let I;
  const [A, P] = Wt(false);
  let M;
  const O = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), [U, j] = Wt(/* @__PURE__ */ new Set());
  let $;
  const H = (En) => Y6e(e.workspaceContextService, En), G = () => {
    const Dn = se().getSnapshot(), Si = /* @__PURE__ */ new Set();
    for (const Ui of Dn?.bugs ?? []) {
      const Nn = Ui.locations?.[0];
      if (!Nn) continue;
      const ci = H(Nn.file);
      if (!ci) {
        const Pi = !e.cursorAuthenticationService.reactivePrivacyMode();
        e.analyticsService.trackEvent("bug_bot.url_resolution_failed", { cause: "normalize", ...typeof Ui.id == "string" && Ui.id.length > 0 ? { bugId: Ui.id } : {}, ...Pi ? { file: typeof Nn.file == "string" ? Nn.file : void 0, description: typeof Ui.description == "string" ? Ui.description : void 0, locations: (Ui.locations ?? []).map((vi) => ({ file: typeof vi.file == "string" ? vi.file : void 0, startLine: typeof vi.startLine == "number" ? vi.startLine : void 0, endLine: typeof vi.endLine == "number" ? vi.endLine : void 0 })) } : {} });
      }
      ci && Si.add(ci);
    }
    return Si;
  }, q = (En) => En ? aCt(e.workspaceContextService, En) : void 0, K = (En) => {
    if (En) {
      try {
        const Dn = rt.parse(En), Si = aCt(e.workspaceContextService, Dn);
        if (Si) return Si;
      } catch {
      }
      return Y6e(e.workspaceContextService, En.replace(/^file:\/\//, ""));
    }
  };
  Xc(() => {
    if (t.fromBugbot === true && l()) {
      const Si = G();
      j(Si);
    }
    const En = (Si) => {
      const Ui = Si.detail?.file, Nn = Si.detail?.startLine, ci = Si.detail?.endLine, Pi = K(Ui);
      let vi = typeof ci == "number" ? ci : Nn;
      Pi && (A() && Ve().length > 0 && V(Pi, vi) || (M = { file: Pi, lineNumber: vi }, Ye()));
    };
    window.addEventListener("review-changes-scroll-to-file", En), On(() => {
      window.removeEventListener("review-changes-scroll-to-file", En);
    });
    const Dn = (Si) => {
      const Ui = Si.detail?.file, Nn = Si.detail?.startLine, ci = Si.detail?.endLine;
      let Pi = K(Ui), vi = typeof ci == "number" ? ci : Nn;
      if (!Pi) {
        const Tn = se().getSnapshot(), Zn = nZg(Tn?.bugs ?? []);
        Zn && (Pi = Y6e(e.workspaceContextService, Zn.file), vi = Zn.line);
      }
      if (!Pi) return;
      if (g() !== l_.DiffWithMain) {
        M = { file: Pi, lineNumber: vi }, f(l_.DiffWithMain);
        return;
      }
      const Yi = ee();
      if (Yi.length > 0) {
        const Bn = Yi.findIndex((Tn) => {
          const Zn = Tn.locations?.[0], tr = typeof Zn?.file == "string" ? Zn.file : void 0;
          if (!tr) return false;
          const hi = tr === Pi || tr.endsWith(Pi) || Pi.endsWith(tr);
          if (!hi) return false;
          const ui = typeof Zn?.startLine == "number" ? Zn.startLine : void 0;
          return typeof vi != "number" || typeof ui != "number" ? hi : Math.abs(ui - vi) <= 1;
        });
        Bn >= 0 && oe(Bn);
      }
      A() && Ve().length > 0 && V(Pi, vi) || (M = { file: Pi, lineNumber: vi }, Ye());
    };
    window.addEventListener("bugbot-scroll-to-file", Dn), On(() => {
      window.removeEventListener("bugbot-scroll-to-file", Dn);
    });
  });
  const V = (En, Dn) => {
    if (!I || !En) return false;
    const Si = Ve().find((vi) => {
      const Yi = q(vi.modifiedUri);
      return En === Yi;
    });
    if (Si) {
      const vi = Si.modifiedUri?.toString(), Yi = vi || Si.originalUri?.toString();
      if (vi && I?.expandResourceByUri(vi), Yi) {
        const Bn = typeof Dn == "number" ? Math.max(1, Dn) : void 0;
        return O.has(Yi) ? (setTimeout(() => {
          requestAnimationFrame(() => {
            I?.scrollToResource({ modifiedUri: Yi, lineNumber: Bn });
          });
        }, 100), true) : (N.clear(), N.set(Yi, { line: Bn }), true);
      }
    }
    const Ui = !e.cursorAuthenticationService.reactivePrivacyMode(), Nn = ee()[ie()], ci = g(), Pi = ci === l_.DiffWithMain ? "diff_with_main" : ci === l_.Pending ? "pending" : "all";
    return e.analyticsService.trackEvent("bug_bot.url_resolution_failed", { cause: "scroll_map", mode: Pi, ...Nn?.id && { bugId: Nn.id }, ...Ui && { file: En, description: Nn?.description, locations: Nn?.locations?.map((vi) => ({ file: vi.file, startLine: vi.startLine, endLine: vi.endLine })) } }), false;
  };
  Cn(() => {
    if (!l() || g() !== l_.DiffWithMain) return;
    const En = se();
    let Dn;
    $ === void 0 && ($ = En.getSnapshot()?.runId);
    const Si = En.onDidChange((Ui) => {
      const Nn = Ui?.runId, ci = Nn !== $;
      ci && ($ = Nn, j(() => /* @__PURE__ */ new Set()));
      const Pi = G(), vi = U();
      let Bn = Pi.size === vi.size;
      if (Bn) {
        for (const Zn of Pi) if (!vi.has(Zn)) {
          Bn = false;
          break;
        }
      }
      Bn || j(Pi);
      const Tn = JSON.stringify(Array.from(Pi).sort());
      if (ci) {
        Dn = Tn, Ye();
        return;
      }
      Tn !== Dn && (Dn = Tn, Ye());
    });
    On(() => {
      Si.dispose();
    });
  }), Cn(() => {
    const En = Ve(), Dn = A();
    if (!M || !Dn || En.length === 0) return;
    if (En.find((Ui) => {
      const Nn = q(Ui.modifiedUri), ci = q(Ui.originalUri), Pi = M.file;
      return Nn && (Nn.endsWith(Pi) || Nn.includes(Pi)) || ci && (ci.endsWith(Pi) || ci.includes(Pi));
    })) {
      const Ui = M.file, Nn = M.lineNumber;
      M = void 0, requestAnimationFrame(() => {
        V(Ui, Nn);
      });
    }
  });
  let Y = false;
  Cn(() => {
    const En = !!t.scrollToFile, Dn = A(), Si = Ve().length > 0;
    En && Dn && Si && !Y && (Y = true, requestAnimationFrame(() => {
      const ci = t.scrollToFile, Pi = K(ci);
      if (!Pi) return;
      const vi = V(Pi, t.scrollToLine), Yi = ee();
      if (Yi.length > 0) {
        const Bn = t.scrollToLine, Tn = Yi.findIndex((Zn) => {
          const tr = Zn.locations?.[0], hi = typeof tr?.file == "string" ? tr.file : void 0;
          if (!hi) return false;
          const ui = hi === Pi || hi.endsWith(Pi) || Pi.endsWith(hi);
          if (!ui) return false;
          const Ni = typeof tr?.startLine == "number" ? tr.startLine : void 0;
          return typeof Bn != "number" || typeof Ni != "number" ? ui : Math.abs(Ni - Bn) <= 1;
        });
        Tn >= 0 && oe(Tn);
      }
      vi || (M = { file: Pi, lineNumber: t.scrollToLine });
    }));
  });
  let J = false;
  Cn(() => {
    const En = !!t.scrollToReviewFile, Dn = A(), Si = Ve().length > 0;
    En && Dn && Si && !J && (J = true, requestAnimationFrame(() => {
      const ci = t.scrollToReviewFile, Pi = K(ci);
      Pi && (V(Pi, t.scrollToLine) || (M = { file: Pi, lineNumber: t.scrollToLine }));
    }));
  }), Xc(() => {
    const En = () => {
      Te();
    };
    window.addEventListener("reviewchanges-switch-to-issues", En), On(() => window.removeEventListener("reviewchanges-switch-to-issues", En));
  });
  const [Q, te] = Wt(0), [ee, re] = Wt([]), [ie, oe] = Wt(0), se = () => e.instantiationService.invokeFunction((En) => En.get(OVe)), le = (En, Dn) => {
    const Si = e.instantiationService.invokeFunction((Ui) => Ui.get(Li));
    eee(Si, En, Dn);
  };
  Xc(() => {
    try {
      const Dn = se(), Si = Dn.getSnapshot(), Ui = Si?.bugs.length ?? 0;
      te(Ui), re(Si?.bugs ?? []), t.fromBugbot === true && !(Si?.isRunning || Si?.state === "starting" || Si?.state === "streaming") && Ui === 0 && (le("ReviewChangesPane.onMount.emptySnapshot", { runId: Si?.runId, state: Si?.state, bugCount: Ui, hadSnapshot: Si !== void 0 }), setTimeout(() => {
        de("onMount.emptySnapshot");
      }, 0));
      const Nn = Dn.onDidChange((ci) => {
        const Pi = ci?.bugs ?? [], vi = Pi.length;
        te(vi), re(Pi), vi > 0 ? oe((Yi) => Math.min(Math.max(0, Yi), vi - 1)) : oe(0);
      });
      On(() => Nn.dispose());
    } catch {
    }
    const En = (Dn) => {
      const Ui = Dn.detail?.bugId;
      if (Ui === void 0) return;
      const Pi = (se().getSnapshot()?.bugs ?? []).findIndex((vi) => vi.id === Ui);
      Pi >= 0 && oe(Pi);
    };
    window.addEventListener("bugbot-select-issue", En), On(() => window.removeEventListener("bugbot-select-issue", En));
  });
  const ce = () => `${String(Q())} Issue${Q() !== 1 ? "s" : ""} Found`, ae = () => Q() > 0, de = async (En) => {
    for (const Dn of e.editorGroupService.groups) for (const Si of Dn.editors) if (Si instanceof NV && Si.options?.fromBugbot === true) return le("ReviewChangesPane.closeTab", { reason: En, composerId: Si.composerId, name: Si.getName(), groupId: Dn.id }), await e.editorService.closeEditor({ editor: Si, groupId: Dn.id }), true;
    return le("ReviewChangesPane.closeTab.notFound", { reason: En }), false;
  };
  let he = false, ge;
  Cn(() => {
    const En = Q(), Dn = ge;
    if (ge = En, !he && Dn !== void 0 && Dn > 0 && En === 0) {
      if (t.fromBugbot === true) {
        he = true, le("ReviewChangesPane.issueCountDroppedToZero", { previousCount: Dn, currentCount: En }), setTimeout(async () => {
          await de("issueCountDroppedToZero");
        }, 0);
        return;
      }
      g() === l_.DiffWithMain && (he = true, setTimeout(() => {
        const Si = je() > 0 ? l_.Pending : l_.All;
        f(Si);
      }, 0));
    }
  });
  const pe = vt(() => t.composerId === void 0), ve = vt(() => {
    const En = o();
    return En ? (En.data.subagentComposerIds?.length ?? 0) > 0 : false;
  });
  Cn(() => {
    ve() && g() === l_.All && f(l_.Pending);
  });
  const fe = vt(() => s()), Te = async () => {
    g() !== l_.DiffWithMain && f(l_.DiffWithMain);
    const En = G();
    j(En), await Ye();
    const Si = se().getSnapshot(), Ui = nZg(Si?.bugs ?? []);
    if (Ui && typeof Ui.file == "string") {
      const Nn = Y6e(e.workspaceContextService, Ui.file), ci = new CustomEvent("bugbot-scroll-to-file", { detail: { file: Nn, startLine: Ui.endLine, endLine: Ui.endLine } });
      window.dispatchEvent(ci);
    }
  }, [_e, Ce] = Wt(0);
  let Se;
  const [Pe, we] = Wt(false), Ie = async () => {
    if (Pe()) return;
    const En = fe();
    if (!En) {
      e.notificationService.warn("Cannot create PR: No active composer found");
      return;
    }
    e.analyticsService.trackEvent("diff_review.open_pr_clicked"), we(true);
    try {
      await e.composerService.submitAgentCreatePullRequest(En);
    } catch (Dn) {
      const Si = Dn instanceof Error ? Dn.message : String(Dn);
      e.notificationService.error(`Failed to create PR: ${Si}`);
    } finally {
      we(false);
    }
  };
  let Me;
  const De = /* @__PURE__ */ new Map(), Ne = A0(e.inlineDiffService.inlineDiffs);
  Cn((En) => {
    if (pe()) return [];
    const Dn = new Set((En || []).map((ci) => ci.id)), Si = Ne(), Ui = fe(), Nn = ks(() => Si.filter((ci) => ci.composerMetadata?.composerId === Ui));
    for (const ci of Nn) ci.uri && !Dn.has(ci.id) && I?.expandResourceByUri(ci.uri.toString());
    return t.fromBugbot === true || t.fromBackgroundAgent || g() === l_.DiffWithMain || Dn.size === 0 && Nn.length > 0 && g() !== l_.Pending && f(l_.Pending), Nn;
  });
  let be = false;
  Cn(() => {
    if (pe() || be) return;
    const En = ot(), Dn = Ne();
    En && (be = true, Ye());
  });
  const [je, $e] = Wt(0), [Je, Ge] = Wt(false), [xe, Oe] = Wt(void 0);
  let ct;
  const Ye = async () => {
    ct && ct.abort();
    const En = new AbortController();
    if (ct = En, g() === l_.DiffWithMain && Ve().length === 0 && Ge(true), pe()) {
      try {
        const Si = t.gitMode === "diffWithMain" ? await e.gitContextService.getDefaultBranch() : void 0, Ui = await e.reviewChangesService.getMultiDiffItemsForGit({ mode: t.gitMode ?? "unstaged", signal: En.signal, baseRef: Si });
        En.signal.aborted || (ht.updateResources(Ui.items), $e(0));
      } catch (Si) {
        if (Si instanceof Error && Si.name === "AbortError") return;
        throw Si;
      } finally {
        En.signal.aborted || Ge(false);
      }
      return;
    }
    const Dn = (() => {
      if (g() === l_.DiffWithMain && l()) return Array.from(U());
    })();
    try {
      const Si = fe();
      if (!Si) return;
      const Ui = e.reviewChangesService.getPendingCount(Si), { resources: Nn, contentsOmitted: ci } = await e.reviewChangesService.getResources({ composerId: Si, mode: g(), ...Dn ? { filterRelativePaths: Dn } : {}, ...t.fromBackgroundAgent?.bcId ? { bcId: t.fromBackgroundAgent.bcId } : {}, signal: En.signal });
      if (!En.signal.aborted) {
        Oe(ci === true ? $1s : void 0);
        let Pi = Nn;
        if (g() === l_.DiffWithMain && (Pi = await M1w(Nn, Array.from(U()), e.workspaceContextService, e.fileService, e.instantiationService, e.composerTextModelService), En.signal.aborted)) return;
        ht.updateResources(Pi), $e(Ui);
      }
    } catch (Si) {
      if (Si instanceof Error && Si.name === "AbortError") return;
      throw Si;
    } finally {
      En.signal.aborted || Ge(false);
    }
  }, [Ve, Xe] = Wt([]);
  T1w({ vs: e, bugsList: ee, resources: Ve, isBugbotEnabled: l });
  const lt = vt(() => {
    const En = o()?.data, Dn = En?.totalLinesAdded ?? 0, Si = En?.totalLinesRemoved ?? 0;
    return Dn + Si > 0 || Ve().length > 0 ? true : je() > 0;
  }), He = vt(() => !lt() || u() || h() ? false : c() && d());
  let gt, ht = new eNi(e.instantiationService, e.composerTextModelService);
  const Ae = () => {
    gt && gt.dispose(), ht.dispose();
    const En = fe();
    En && e.reviewChangesService.disposeModels(En), ht = new eNi(e.instantiationService, e.composerTextModelService), gt = new Nt(), ht.resourcesObservable.recomputeInitiallyAndOnChange(gt, (Dn) => {
      Xe(Dn || []);
    });
  };
  Xc(() => {
    Ae();
  }), Cn((En) => {
    const Dn = g(), Si = JSON.stringify({ currMode: Dn });
    return Si !== En && (Ge(true), Ae(), Ye()), Si;
  }), On(() => {
    Dt.dispose(), ct && (ct.abort(), ct = void 0);
    const En = fe();
    En && e.reviewChangesService.disposeModels(En), ht.dispose(), gt && (gt.dispose(), gt = void 0);
  });
  const ot = vt(() => {
    if (pe() || t.fromBugbot === true || t.fromBackgroundAgent) return true;
    const En = fe();
    return En ? e.composerDataService.getHandleIfLoadedReactive(En)?.data.hasLoaded === true : true;
  }), [Be, Ue] = Wt(false), it = vt(() => o()?.data.status === "generating"), [qe, pt] = Wt(false);
  Cn(() => {
    const Dn = o()?.data.isApplyingWorktree === true;
    let Si;
    Dn ? Si = window.setTimeout(() => pt(true), 1e3) : pt(false), On(() => {
      Si !== void 0 && window.clearTimeout(Si);
    });
  });
  const dt = vt(() => o()?.data.isApplyingWorktree === true), ft = vt(() => o()?.data.isUndoingWorktree === true), bt = vt(() => !pe() && t.fromBugbot !== true && !t.fromBackgroundAgent && je() > 0), St = vt(() => !bt() && !ae()), Et = vt(() => Be() ? 520 : 580), kt = vt(() => St()), xt = vt(() => _e() < Et() && !kt()), Pt = vt(() => !t.fromBackgroundAgent && l()), Dt = ikw({ composerEventService: e.composerEventService, getCurrentMode: () => g(), setMode: f });
  Cn(() => {
    if (pe() || t.fromBugbot === true) {
      Dt.updateActiveComposer(void 0);
      return;
    }
    Dt.updateActiveComposer(fe());
  });
  const Vt = vt(() => {
    if (pe()) return false;
    const En = o();
    if (!En) return false;
    const Dn = e.composerDataService.getComposerData(En);
    return !!(Dn?.applied && Dn?.appliedDiffs && Dn.appliedDiffs.length > 0);
  }), tn = vt(() => Vt() ? "Undo all applied changes. This agent will go back to the worktree." : "Undo all applied changes"), un = vt(() => {
    if (pe()) return false;
    const En = o();
    if (!En) return false;
    const Dn = e.composerDataService.getComposerData(En), Si = !!Dn?.gitWorktree?.worktreePath, Ui = Dn?.totalLinesAdded ?? 0, Nn = Dn?.totalLinesRemoved ?? 0;
    return Si && Ui + Nn > 0;
  }), kn = vt(() => Be() && Vt()), oi = vt(() => !Be() && (je() > 0 || Vt())), Fn = vt(() => Vt() ? "Undo all applied changes across all files" : "Undo all pending changes across all files"), Qt = vt(() => oi() || kn()), Sn = $xi(), $n = vt(() => (je() > 0 || un()) && !Be() && !Sn()), Mn = vt(() => Qt() || $n()), Un = vt(() => kn() ? tn() : Fn()), Xn = vt(() => kn() ? "Undo Apply" : "Undo All");
  Cn(() => {
    if (pe()) {
      Ue(false);
      return;
    }
    if (t.fromBugbot === true || t.fromBackgroundAgent) {
      Ue(false);
      return;
    }
    const En = fe();
    if (!En) {
      Ue(false);
      return;
    }
    const Si = e.composerDataService.getHandleIfLoadedReactive(En)?.data;
    Ue(!!Si?.gitWorktree?.worktreePath);
  }), Cn(() => {
    if (pe() || t.fromBugbot === true || t.fromBackgroundAgent) return;
    const En = fe();
    if (!En) return;
    const Dn = e.composerDataService.onDidChangeComposerWorktree(({ composerId: Si, worktreePath: Ui }) => {
      if (Si === En) {
        const Nn = !!Ui, ci = Be();
        Ue(Nn), ci !== Nn && (Ae(), Ye());
      }
    });
    On(() => {
      Dn.dispose();
    });
  }), Cn(() => {
    if (pe() || t.fromBugbot === true || t.fromBackgroundAgent) return;
    const En = fe();
    if (!En) return;
    const Dn = _().filter((Ui) => Ui.metadata?.composerId === En);
    g() === l_.Pending && Dn.length === 0 && !ve() && f(l_.All);
  });
  const Ti = async () => {
    if (e.analyticsService.trackEvent("agent_layout.undo_all_clicked"), !pe()) try {
      const En = o();
      if (!En) return;
      const Dn = e.composerDataService.getComposerData(En);
      if (Dn?.applied && Dn?.appliedDiffs && Dn.appliedDiffs.length > 0) {
        await e.composerService.undoAllAppliedChanges(En.composerId);
        return;
      }
      const Si = Ve() || [];
      for (const Ui of Si) {
        const Nn = Ui.goToFileUri || Ui.modifiedUri || Ui.originalUri;
        if (!Nn) continue;
        const ci = e.diffChangeSourceRegistry.getDescriptorsForUri(Nn);
        for (const Pi of ci) await e.diffChangeSourceRegistry.reject(Pi.id, { close: true });
        try {
          await e.textFileService.save(Nn, { skipSaveParticipants: true });
        } catch (Pi) {
          console.error("[MultiDiffTabContent] Undo save failed:", Pi);
        }
      }
    } catch (En) {
      console.error("[MultiDiffTabContent] Undo all failed:", En);
    }
  }, bi = async () => {
    if (e.analyticsService.trackEvent("agent_layout.keep_all_clicked"), !pe()) try {
      const En = Ve() || [];
      for (const Dn of En) {
        const Si = Dn.goToFileUri || Dn.modifiedUri || Dn.originalUri;
        if (!Si) continue;
        const Ui = e.diffChangeSourceRegistry.getDescriptorsForUri(Si);
        for (const Nn of Ui) await e.diffChangeSourceRegistry.accept(Nn.id);
        try {
          await e.textFileService.save(Si);
        } catch (Nn) {
          console.error("[MultiDiffTabContent] Keep all failed:", Nn);
        }
      }
      await Yst(e), ve() || f(l_.All);
    } catch (En) {
      console.error("[MultiDiffTabContent] Keep all failed:", En);
    }
  }, Qn = async (En) => {
    En !== g() && f(En);
  }, [ni] = F9e(e.reviewChangesService.effectiveDiffViewMode), pn = (En) => {
    En.preventDefault(), En.stopPropagation(), i();
    const Dn = new za("unified-diff-mode", "Unified View", void 0, true, () => {
      e.reviewChangesService.setDiffViewMode(Wse.Unified);
    });
    Dn.checked = ni() === Wse.Unified;
    const Si = new za("split-diff-mode", "Split View", void 0, true, () => {
      e.reviewChangesService.setDiffViewMode(Wse.Split);
    });
    Si.checked = ni() === Wse.Split;
    const Ui = new za("expand-all", "Expand All", void 0, true, () => {
      I && I.expandAll();
    }), Nn = new za("collapse-all", "Collapse All", void 0, true, () => {
      I && I.collapseAll();
    }), ci = [Dn, Si, new Kh(), Ui, Nn];
    e.contextMenuService.showContextMenu({ getAnchor: () => ({ x: En.clientX, y: En.clientY }), getActions: () => ci });
  }, yn = (En) => {
    const Dn = ee();
    if (Dn.length === 0) return;
    const Si = ie(), Ui = En === "prev" ? (Si - 1 + Dn.length) % Dn.length : (Si + 1) % Dn.length;
    oe(Ui);
    const ci = Dn[Ui].locations?.[0], Pi = typeof ci?.file == "string" ? ci.file : void 0;
    if (Pi && !V(Pi, ci?.endLine)) {
      const vi = new CustomEvent("bugbot-scroll-to-file", { detail: { file: Pi, startLine: ci?.endLine, endLine: ci?.endLine } });
      window.dispatchEvent(vi);
    }
  }, Ln = async () => {
    DNf(e);
    const Dn = se().getSnapshot();
    Dn?.bugs && Dn.bugs.length > 0 && await e.composerService.handleBugBotFixAll(Dn.bugs);
  }, xi = () => `${t.composerId}-${g()}-${ni()}`, Ci = () => pe() ? Je() : !ot() || Je();
  return Xc(() => {
    if (Se) {
      const En = new ResizeObserver((Dn) => {
        for (const Si of Dn) Ce(Si.contentRect.width);
      });
      En.observe(Se), On(() => {
        En.disconnect();
      });
    }
  }), (() => {
    var En = aOf(), Dn = En.firstChild, Si = Dn.firstChild, Ui = Si.nextSibling, Nn = Ui.firstChild, ci = Nn.nextSibling, Pi = ci.firstChild, vi = Pi.firstChild, Yi = Dn.nextSibling, Bn = Se;
    return typeof Bn == "function" ? zu(Bn, En) : Se = En, Le(En, Ee(qLf, { containerRef: () => Se, mountedEditors: De, multiDiffRef: I, onWidgetCreated: (Tn) => {
      Me = Tn;
    } }), Dn), Le(Si, Ee(Ut, { get when() {
      return zr(() => t.fromBugbot !== true)() && !ve();
    }, get children() {
      var Tn = XLf();
      return Tn.addEventListener("mouseleave", () => i()), Tn.addEventListener("mouseenter", (Zn) => {
        const tr = Zn.currentTarget.getBoundingClientRect();
        n({ target: { targetElements: [Zn.currentTarget], y: tr.bottom + 2 }, content: pe() ? t.gitModeLabel || "Git changes" : "All changes from this Agent chat", appearance: { compact: true, skipFadeInAnimation: true }, position: { hoverPosition: Bu.BELOW } });
      }), Tn.addEventListener("click", () => Qn(l_.All)), Le(Tn, (() => {
        var Zn = zr(() => !!(pe() && t.gitModeLabel));
        return () => Zn() ? t.gitModeLabel : xt() ? "All" : "All Changes";
      })()), xn((Zn) => {
        var tr = g() === l_.All, hi = g() !== l_.All, ui = !!St();
        return tr !== Zn.e && Tn.classList.toggle("active", Zn.e = tr), hi !== Zn.t && Tn.classList.toggle("inactive", Zn.t = hi), ui !== Zn.a && Tn.classList.toggle("single-tab", Zn.a = ui), Zn;
      }, { e: void 0, t: void 0, a: void 0 }), Tn;
    } }), null), Le(Si, Ee(Ut, { get when() {
      return bt();
    }, get children() {
      var Tn = eOf();
      return Tn.addEventListener("mouseleave", () => i()), Tn.addEventListener("mouseenter", (Zn) => {
        const tr = Zn.currentTarget.getBoundingClientRect();
        n({ target: { targetElements: [Zn.currentTarget], y: tr.bottom + 2 }, content: Sn() ? "Latest changes from this Agent chat" : "Changes waiting to be confirmed", appearance: { compact: true, skipFadeInAnimation: true }, position: { hoverPosition: Bu.BELOW } });
      }), Tn.addEventListener("click", () => Qn(l_.Pending)), Le(Tn, Ee(Ut, { get when() {
        return Sn();
      }, get children() {
        return ZLf();
      } }), null), Le(Tn, Ee(Ut, { get when() {
        return !Sn();
      }, get children() {
        return [(() => {
          var Zn = QLf();
          return Le(Zn, () => String(je())), Zn;
        })(), (() => {
          var Zn = JLf();
          return Le(Zn, (() => {
            var tr = zr(() => !!xt());
            return () => tr() ? "Pending" : `Pending Change${je() > 1 ? "s" : ""}`;
          })()), Zn;
        })()];
      } }), null), xn((Zn) => {
        var tr = g() === l_.Pending, hi = g() !== l_.Pending;
        return tr !== Zn.e && Tn.classList.toggle("active", Zn.e = tr), hi !== Zn.t && Tn.classList.toggle("inactive", Zn.t = hi), Zn;
      }, { e: void 0, t: void 0 }), Tn;
    } }), null), Le(Si, Ee(Ut, { get when() {
      return ae();
    }, get children() {
      var Tn = nOf(), Zn = Tn.firstChild;
      return Le(Zn, ce), Le(Tn, Ee(Ut, { get when() {
        return Q() > 0;
      }, get children() {
        return tOf();
      } }), null), xn((tr) => {
        var hi = g() === l_.DiffWithMain, ui = g() !== l_.DiffWithMain, Ni = t.fromBugbot === true;
        return hi !== tr.e && Tn.classList.toggle("active", tr.e = hi), ui !== tr.t && Tn.classList.toggle("inactive", tr.t = ui), Ni !== tr.a && Tn.classList.toggle("single-tab", tr.a = Ni), tr;
      }, { e: void 0, t: void 0, a: void 0 }), Tn;
    } }), null), Le(Ui, Ee(Ut, { get when() {
      return zr(() => g() === l_.DiffWithMain)() && Q() > 0;
    }, get children() {
      var Tn = iOf(), Zn = Tn.firstChild, tr = Zn.firstChild;
      return Le(Zn, Ee(eb, { get codicon() {
        return yt.chevronUp;
      }, size: 16, iconClass: "review-issues-stepper-icon", onClick: (hi) => {
        hi.stopPropagation(), yn("prev");
      } }), tr), Le(tr, () => `Issue ${Math.min(ie() + 1, Math.max(1, ee().length))}/${ee().length}`), Le(Zn, Ee(eb, { get codicon() {
        return yt.chevronDown;
      }, size: 16, iconClass: "review-issues-stepper-icon", onClick: (hi) => {
        hi.stopPropagation(), yn("next");
      } }), null), Tn;
    } }), Nn), Le(Nn, Ee(Ut, { get when() {
      return zr(() => !!(Be() && !Vt()))() && !it();
    }, get children() {
      return Ee(ol, { variant: "primary", onClick: (async () => {
        const Tn = fe();
        if (Tn) try {
          await e.composerService.applyWorktreeToCurrentBranch(Tn);
          const Zn = e.composerDataService.getComposerDataIfLoaded(Tn);
          Zn?.applied === true && !Zn?.gitWorktree?.worktreePath && f(l_.All);
        } catch (Zn) {
          console.error("[ReviewChangesPane] Failed to apply worktree:", Zn);
        }
      }), hintText: "Apply changes to the main working directory", get showLoadingSpinner() {
        return qe();
      }, get disabled() {
        return ft();
      }, children: "Apply" });
    } }), null), Le(Nn, Ee(Ut, { get when() {
      return Mn();
    }, get children() {
      var Tn = rOf();
      return Le(Tn, Ee(Ut, { get when() {
        return Qt();
      }, get children() {
        return Ee(ol, { variant: "text", get hintText() {
          return Un();
        }, onClick: Ti, get disabled() {
          return dt();
        }, get children() {
          return Xn();
        } });
      } }), null), Le(Tn, Ee(Ut, { get when() {
        return $n();
      }, get children() {
        return Ee(ol, { variant: "text", hintText: "Keep all pending changes and save files", onClick: bi, get disabled() {
          return ft();
        }, children: "Keep All" });
      } }), null), Tn;
    } }), null), Le(Nn, Ee(Ut, { get when() {
      return zr(() => !pe())() && Pt();
    }, get children() {
      var Tn = sOf();
      return Le(Tn, Ee(b1w, { entrypoint: "review_changes" })), Tn;
    } }), null), Le(Nn, Ee(Ut, { get when() {
      return zr(() => g() === l_.DiffWithMain)() && Q() > 0;
    }, get children() {
      return Ee(ol, { variant: "primary", onClick: Ln, children: "Fix All" });
    } }), null), Le(Ui, Ee(H1w, { get hasWorktree() {
      return Be();
    }, get mode() {
      return g();
    }, get fromBackgroundAgent() {
      return t.fromBackgroundAgent;
    }, get canCreatePullRequest() {
      return d();
    }, get isGitOnlyMode() {
      return pe();
    }, get shouldShowCommitPrButton() {
      return He();
    }, get resources() {
      return Ve();
    }, handleCreatePr: Ie }), ci), Pi.addEventListener("mouseleave", () => i()), Pi.addEventListener("mouseenter", (Tn) => {
      n({ target: Tn.currentTarget, content: "More options", appearance: { compact: true, skipFadeInAnimation: true }, position: { hoverPosition: Bu.BELOW } });
    }), Pi.addEventListener("click", pn), Yi.addEventListener("mousedown", (Tn) => {
      const Zn = b();
      if (Ve().length === 0) {
        const tr = Zn ?? Tn.currentTarget;
        tr.tabIndex < 0 && (tr.tabIndex = 0), Tn.preventDefault(), tr.focus();
      }
    }), Le(Yi, Ee(Ut, { get when() {
      return Ci();
    }, get children() {
      var Tn = oOf();
      return Le(Tn, Ee(_De, { size: 20 })), Tn;
    } }), null), Le(Yi, Ee(Ut, { get when() {
      return !Ci();
    }, get children() {
      return Ee(Ut, { get when() {
        return xi();
      }, keyed: true, get children() {
        return Ee(ME, { disableAutoSizing: true, scrollingDirection: "vertical", scrollable: S, style: { height: "100%", "overflow-x": "clip" }, nonReactiveElementOptions: { useShadows: false, mouseWheelSmoothScroll: false }, childStyle: { padding: "0px 8px", overflowX: "clip" }, get innerContainerStyle() {
          return Ve().length === 0 ? { height: "100%", display: "flex", "align-items": "center", "justify-content": "center" } : void 0;
        }, get innerContainerClass() {
          return Ve().length === 0 ? "app-layout-multi-diff-root external-scroll review-changes-empty-scroll-root" : "app-layout-multi-diff-root external-scroll";
        }, setInnerContainerRef: y, onScroll: C, get children() {
          return Ee(q1s, { getShowKeep: () => g() === l_.Pending && !Sn(), getShowUndo: () => g() === l_.Pending, get emptyMessage() {
            return xe() ?? (g() === l_.Pending ? "No pending changes to review" : "No changes to review");
          }, listType: "flat", get resources() {
            return Ve();
          }, get diffViewMode() {
            return ni();
          }, get isLoading() {
            return Ci();
          }, scrollable: S, containerRef: b, ref: (Tn) => {
            I = Tn, P(!!Tn);
            try {
              Me && Me.setMultiDiffRef(Tn);
            } catch {
            }
          }, get readonly() {
            return g() === l_.All;
          }, onReadonlyClick: (Tn, Zn, tr) => {
            const hi = Tn.goToFileUri || Tn.modifiedUri || Tn.originalUri;
            hi && e.editorService.openEditor({ resource: hi, options: { pinned: true, selection: { startLineNumber: Zn, startColumn: tr || 1 } } });
          }, onDiffEditorMount: (Tn, Zn, tr) => {
            const hi = Tn.modifiedUri?.toString() || Tn.originalUri?.toString();
            if (hi && (O.add(hi), De.set(hi, { resource: Tn, editor: Zn, widget: tr }), N.has(hi))) {
              const Ni = N.get(hi)?.line;
              setTimeout(() => {
                requestAnimationFrame(() => {
                  I?.scrollToResource({ modifiedUri: hi, lineNumber: Ni });
                });
              }, 100), N.delete(hi);
            }
          }, onDiffEditorUnmount: (Tn) => {
            const Zn = Tn.modifiedUri?.toString() || Tn.originalUri?.toString();
            Zn && (O.delete(Zn), De.delete(Zn));
          } });
        } });
      } });
    } }), null), xn((Tn) => {
      var Zn = Gn.asClassName(yt.ellipsisTwo), tr = Ve().length === 0 ? 0 : -1;
      return Zn !== Tn.e && Er(vi, Tn.e = Zn), tr !== Tn.t && lo(Yi, "tabindex", Tn.t = tr), Tn;
    }, { e: void 0, t: void 0 }), En;
  })();
}
var XLf, ZLf, QLf, JLf, eOf, tOf, nOf, iOf, rOf, sOf, oOf, aOf, 