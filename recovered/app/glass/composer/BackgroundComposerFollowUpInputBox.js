// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BackgroundComposerFollowUpInputBox.js range:32797079..32815929
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, at, pi, pd, gs, Ul, ta, Xo, LM, oT, Ak, ju, Rj, pd, Hu, ZEl, vXg, uv, wWt, Ef, rC, vo, xgl, cVe, g0l, FS, ZRn, sye, UVt, b9e, eD, O2w, Sws, F2w
// wrapper-init: U2w
// hoisted-owner: useBackgroundComposerDiffStats.js (app-out-vs-workbench-workbench-glass-main-js:6125); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

U2w = L({ "BackgroundComposerFollowUpInputBox.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), pd(), gs(), Ul(), ta(), Xo(), LM(), oT(), Ak(), ju(), Rj(), pd(), Hu(), ZEl(), vXg(), uv(), wWt(), Ef(), rC(), vo(), xgl(), cVe(), g0l(), FS(), ZRn(), sye(), UVt(), b9e(), eD(), O2w(), Sws(), F2w(), kws = wt("<div>"), e8f = wt("<span>"), t8f = wt("<div class=composer-file-list-item><div><span>"), n8f = wt("<div><span></span><div class=py-0> File"), i8f = wt('<div class="flex gap-1">'), r8f = wt("<div class=bg-composer-followup-input-box-toolbar><div>"), s8f = wt("<div><span></span><div><span> file"), CNi = () => ({ display: "flex", "align-items": "center", gap: "4px", cursor: "pointer", height: "18.5px", "flex-shrink": 0 }), K9l = () => ({ margin: "0", "font-size": "12px", "flex-shrink": 0, "white-space": "nowrap", "text-overflow": "ellipsis", overflow: "hidden", "flex-basis": 0, "flex-grow": 1 }), Y9l = (t = false, e) => ({ "text-wrap": "nowrap", "text-overflow": "ellipsis", overflow: "hidden", "flex-grow": 1, "flex-basis": 0, display: "inline-flex", "align-items": "center", "flex-wrap": "nowrap", gap: "6px", padding: "4px 8px", cursor: t ? "pointer" : "default", ...e ? { "min-width": e } : {} }), o8f = (t) => {
    const e = Gr(), [n, i] = Wt(), r = wEt(n), [s, o] = Wt(false), a = async () => {
      const $ = t.bcId;
      e.backgroundComposerDataService.setData("backgroundComposers", (H) => H.bcId === $, "isApplyingChangesLocally", true);
      try {
        await e.commandService.executeCommand(wNi.ID, { bcId: $ });
      } catch (H) {
        console.error("Apply changes command failed:", H);
      } finally {
        e.backgroundComposerDataService.setData("backgroundComposers", (H) => H.bcId === $, "isApplyingChangesLocally", false);
      }
    }, [l, c] = Wt(void 0), [u, d] = Wt(void 0);
    Cn(() => {
      const $ = t.bcId;
      let H = false;
      (async () => {
        try {
          const q = await e.backgroundComposerCachedDetailsStorageService.getCachedDetails($);
          if (H) return;
          q?.detailedDiff && c(q.detailedDiff), q?.bc?.baseBranch && d(e.backgroundComposerService.getCanonicalBaseBranch(q.bc.baseBranch));
        } catch {
        }
      })(), On(() => {
        H = true;
      });
    });
    const h = vt(() => l()), p = vt(() => e.backgroundComposerService.bcIdForThisWindow() === t.bcId), g = vt(() => {
      const $ = e.backgroundComposerDataService;
      return $.bcIdForThisWindow() === t.bcId ? $.data.backgroundComposers.find((G) => G.bcId === t.bcId) : $.getBcDataInMainWindow(t.bcId);
    }), f = vt(() => g()?.isApplyingChangesLocally ?? false), [_, b] = Wt(Po.UNSPECIFIED);
    Cn(() => {
      const $ = t.composerStatus();
      if ($ === _()) return;
      const H = t.bcId;
      let G = false;
      (async () => {
        try {
          if ($ !== Po.FINISHED) return;
          await e.backgroundComposerService.ensureDiffStatsForBc(H, true);
        } catch (q) {
          console.warn("[BackgroundComposerToolBar] Failed to get background composer changes hash", q);
        } finally {
          G || b($);
        }
      })(), On(() => {
        G = true;
      });
    });
    const y = vt(() => p() ? e.backgroundComposerDataService.doesInWindowBCHaveDiffsReactive() : !!h() && (h()?.diff?.diffs?.length ?? 0) > 0), S = vt(() => p() ? e.backgroundComposerDataService.data.inWindowBackgroundComposerLoadingStatus !== "done" : false), k = vt(() => {
      const $ = h();
      if (!$) return g()?.cachedFileCount ?? 0;
      let H = $.diff?.diffs.length || 0;
      return ($.submoduleDiffs || []).forEach((G) => {
        H += G.diff?.diffs.length || 0;
      }), H;
    }), C = vt(() => k() > 0), T = vt(() => e.composerDataService.scanLoadedComposersForBackgroundAgentId(t.bcId)), I = vt(() => {
      const $ = T();
      if (!$) return false;
      const H = e.composerDataService.getComposerDataIfLoaded($);
      return !!(H?.applied && H?.appliedDiffs && H.appliedDiffs.length > 0);
    }), A = vt(() => {
      const $ = T();
      return $ ? e.composerDataService.getComposerDataIfLoaded($)?.isApplyingWorktree === true : false;
    }), P = vt(() => {
      const $ = T();
      return $ ? e.composerDataService.getComposerDataIfLoaded($)?.isUndoingWorktree === true : false;
    }), M = N6(Sst), O = vt(() => t.composerStatus() === Po.RUNNING && !t.isPaused()), N = vt(() => k() > 0), U = async () => {
      const $ = e.composerDataService.scanLoadedComposersForBackgroundAgentId(t.bcId);
      if (!$) {
        e.notificationService.error("No associated composer found for this background agent");
        return;
      }
      e.analyticsService.trackEvent("review_changes.opened", { entrypoint: "background_composer_followup", composer_id: $ }), await e.reviewChangesService.openOrUpdateReviewChangesEditor($, { fromBackgroundAgent: { bcId: t.bcId } });
    }, j = vt(() => {
      if (t.composerStatus() === Po.CREATING) return false;
      if (!p()) {
        const q = t.composerStatus(), K = y() && q !== Po.RUNNING && q !== Po.CREATING;
        return C() || N() || K;
      }
      const $ = t.composerStatus(), H = C() || S() || $ === Po.CREATING || $ === Po.RUNNING, G = t.isPaused() || $ !== Po.FINISHED && !t.isPaused();
      return H || G;
    });
    return Ee(Ut, { get when() {
      return j();
    }, get children() {
      var $ = r8f(), H = $.firstChild;
      return zu(i, $), $.style.setProperty("display", "flex"), $.style.setProperty("flex-direction", "column"), $.style.setProperty("width", "calc(100% - 18px)"), $.style.setProperty("margin", "0px auto"), $.style.setProperty("padding", "0px 4px 0px 0px"), $.style.setProperty("background", "var(--vscode-input-background)"), $.style.setProperty("border", "1px solid var(--cursor-stroke-secondary)"), $.style.setProperty("border-bottom", "none"), $.style.setProperty("border-top-left-radius", "8px"), $.style.setProperty("border-top-right-radius", "8px"), $.style.setProperty("box-sizing", "border-box"), H.style.setProperty("display", "flex"), H.style.setProperty("justify-content", "space-between"), H.style.setProperty("align-items", "center"), `${_st + 2}px` != null ? H.style.setProperty("height", `${_st + 2}px`) : H.style.removeProperty("height"), Le(H, Ee(Ut, { get when() {
        return N();
      }, get fallback() {
        return Ee(Ut, { get when() {
          return C();
        }, get children() {
          var G = s8f(), q = G.firstChild, K = q.nextSibling, V = K.firstChild, Y = V.firstChild;
          return G.addEventListener("click", () => {
            o(!s());
          }), q.style.setProperty("color", "var(--vscode-foreground)"), q.style.setProperty("opacity", "0.6"), q.style.setProperty("font-size", "12px"), q.style.setProperty("flex-shrink", "0"), Le(V, k, Y), Le(V, () => k() === 1 ? "" : "s", null), xn((J) => {
            var Q = { ...Y9l(true, "120px") }, te = s() ? "rotate(90deg)" : "rotate(0deg)", ee = Gn.asClassName(yt.chevronRight), re = { color: "var(--vscode-input-placeholderForeground)", ...K9l() };
            return J.e = Ea(G, Q, J.e), te !== J.t && ((J.t = te) != null ? q.style.setProperty("transform", te) : q.style.removeProperty("transform")), ee !== J.a && Er(q, J.a = ee), J.o = Ea(K, re, J.o), J;
          }, { e: void 0, t: void 0, a: void 0, o: void 0 }), G;
        } });
      }, get children() {
        var G = n8f(), q = G.firstChild, K = q.nextSibling, V = K.firstChild;
        return q.style.setProperty("color", "var(--vscode-foreground)"), q.style.setProperty("opacity", "0.6"), q.style.setProperty("font-size", "12px"), q.style.setProperty("flex-shrink", "0"), q.style.setProperty("transition", "transform 0.1s"), K.addEventListener("click", U), Le(K, k, V), Le(K, () => k() > 1 ? "s" : "", null), xn((Y) => {
          var J = { ...Y9l(false, "120px"), cursor: "pointer" }, Q = Gn.asClassName(yt.arrowUpRight), te = { ...K9l(), color: "var(--vscode-input-placeholderForeground)" };
          return Y.e = Ea(G, J, Y.e), Q !== Y.t && Er(q, Y.t = Q), Y.a = Ea(K, te, Y.a), Y;
        }, { e: void 0, t: void 0, a: void 0 }), G;
      } }), null), Le(H, Ee(Igl, { noTransition: true, style: { display: "flex", "align-items": "center", "justify-content": "flex-end", margin: "0px", padding: "0" }, forceGap: 4, get children() {
        return [Ee(Ut, { get when() {
          return zr(() => !!(!p() && y() && t.composerStatus() !== Po.RUNNING))() && t.composerStatus() !== Po.CREATING;
        }, get children() {
          var G = i8f();
          return Le(G, Ee(Ut, { get when() {
            return I();
          }, get children() {
            return Ee(ol, { variant: "text", onMouseDown: (q) => {
              q.preventDefault();
              const K = T();
              K && e.composerService.undoAllAppliedChanges(K);
            }, get style() {
              return CNi();
            }, class: "py-0 mr-1", get leftContent() {
              return zr(() => !!P())() ? Ee(pTe, { onPrimaryButton: false }) : void 0;
            }, get disabled() {
              return A() || P() || f();
            }, children: "Undo Apply" });
          } }), null), Le(G, Ee(ol, { variant: "secondary", onMouseDown: (q) => {
            q.preventDefault(), a();
          }, get style() {
            return CNi();
          }, class: "py-0", get leftContent() {
            return zr(() => !!f())() ? Ee(pTe, { onPrimaryButton: false }) : void 0;
          }, get disabled() {
            return A() || P() || f();
          }, get keybinding() {
            return zr(() => (r()?.width ?? 0) > MHt)() ? Cbe("⏎") : void 0;
          }, get children() {
            return I() ? "Reapply" : "Apply";
          } }), null), G;
        } }), Ee(Ut, { get when() {
          return p();
        }, get children() {
          return Ee(Ut, { get when() {
            return zr(() => t.composerStatus() !== Po.FINISHED)() && t.isPaused() === false;
          }, get fallback() {
            return Ee(Ut, { get when() {
              return t.isPaused();
            }, get children() {
              return Ee(ol, { variant: "text", get onClick() {
                return t.onTogglePause;
              }, get style() {
                return CNi();
              }, children: "Resume" });
            } });
          }, get children() {
            return Ee(ol, { variant: "text", get onClick() {
              return t.onTogglePause;
            }, get style() {
              return CNi();
            }, get keybinding() {
              return zr(() => !!O())() ? M() : void 0;
            }, get children() {
              return O() ? "Stop" : "Pause";
            } });
          } });
        } })];
      } }), null), Le($, Ee(Ut, { get when() {
        return zr(() => !!C())() && h();
      }, children: (G) => Ee(B2w, { get detailedDiff() {
        return G() ?? h();
      }, get bcId() {
        return t.bcId;
      }, startingCommit: void 0, get baseBranch() {
        return u();
      }, get isFileListExpanded() {
        return s();
      } }) }), null), $;
    } });
  }, a8f = (t) => {
    const e = Gr(), n = e.backgroundComposerDataService.getBackgroundComposerFollowUpInputDataHandle(), [i, r] = Wt(n), s = vt(() => e.composerDataService.scanLoadedComposersForBackgroundAgentId(t.bcId));
    Cn(() => {
      const y = s();
      if (!y) {
        console.warn("[debug] BackgroundComposerFollowUpInputBox: no composerId found for bcId, using fallback handle. Some operations such as CMD-L may be broken.", t.bcId), r(n);
        return;
      }
      let S = false;
      (async () => {
        const k = await e.composerDataService.getComposerHandleById(y);
        S || (k ? r(k) : (console.warn("[debug] BackgroundComposerFollowUpInputBox: no handle found for composerId. Some operations such as CMD-L may be broken.", y), r(n)));
      })(), On(() => {
        S = true;
      });
    });
    const o = `bg-composer-followup-${Ai()}`, a = e.backgroundComposerDataService.data.backgroundComposerFollowUpInputBoxDelegate, l = JBf(), [c, u] = Wt(""), [d, h] = Wt(false);
    Xc(() => {
      a.focus();
    }), Cn(() => {
      t.forceTextTrigger() > 0 && (u(Math.random().toString()), a.focus());
    });
    const p = m0l(d), g = async (y = false) => {
      const S = i(), k = t.isPaused();
      if (!S || (S.data.text ?? "").trim() === "" || (S.data.richText ?? "").trim() === "") return;
      const C = S.data.text, T = S.data.richText, I = _1(S.data.context), A = Ai();
      S.setData("text", ""), S.setData("richText", ""), S.setData("context", Uy()), u(Math.random().toString());
      try {
        e.backgroundComposerDataService.setData("backgroundComposers", (M) => M.bcId === t.bcId, "status", Po.RUNNING);
      } catch (M) {
        console.warn("[backgroundComposer] failed to set status to RUNNING optimistically", M);
      }
      await (async () => {
        try {
          t.onPreSubmit?.({ message: { text: C, richText: T, context: I, bubbleId: A } }), e.composerViewsService.triggerScrollToBottom(S), e.backgroundComposerService.optimisticFollowUpSubmitted({ bcId: t.bcId, text: C, richText: T, context: I, bubbleId: A });
          const M = await e.aiService.backgroundComposerClient(), O = { ...J_(), text: C, richText: T, context: _1(I), conversationState: B6e(S.data.conversationState), externalLinks: I.externalLinks ?? [], documentationSelections: I.selectedDocs ?? [], bubbleId: A };
          if (O.bcId = t.bcId, await e.composerDataService.appendComposerBubbles(S, [O]), e.composerStorageService.state.value?.shouldSimulateBackgroundFollowUpError) throw new Error("Simulated background follow-up error from dev tools");
          let N;
          try {
            N = await e.backgroundComposerService.buildConversationActionFromComposer(S, A);
          } catch (U) {
            console.error("[backgroundComposer] failed to build conversationAction for follow-up; using minimal fallback action", U);
            const j = new t0({ text: C, messageId: A, selectedContext: new gY({}) });
            N = new MI({ action: { case: "userMessageAction", value: new d5e({ userMessage: j, sendToInteractionListener: true }) } });
          }
          await M.addAsyncFollowupBackgroundComposer({ bcId: t.bcId, synchronous: !y, followupConversationAction: N, modelDetails: t.modelDetails, followupSource: ec.EDITOR }), k && t.onFollowupAcceptedWhilePaused(), t.isAttached() || t.onReconnect();
        } catch (M) {
          S.setData("text", C), S.setData("richText", T), S.setData("context", I), u(Math.random().toString());
          try {
            e.backgroundComposerService.optimisticFollowUpFailed({ bcId: t.bcId, bubbleId: A, errorMessage: M instanceof Error ? M.message : String(M) });
          } catch {
          }
          try {
            e.backgroundComposerDataService.setData("backgroundComposers", (O) => O.bcId === t.bcId, "status", Po.FINISHED);
          } catch (O) {
            console.warn("[backgroundComposer] failed to revert status after follow-up error", O);
          }
          throw t.onSubmitError?.(M), M;
        }
      })();
    }, f = () => {
      e.window.document.getElementById(o)?.click();
    };
    Cn(() => {
      const y = e.backgroundComposerService.onTriggerFollowUpInputModelToggle(() => {
        f();
      });
      On(() => {
        y.dispose();
      });
    });
    const _ = vt(() => t.composerStatus() === Po.CREATING), b = vt(() => t.composerStatus() === Po.RUNNING && !t.isPaused());
    return (() => {
      var y = kws();
      return Le(y, Ee(o8f, { get isAttached() {
        return t.isAttached;
      }, get isPaused() {
        return t.isPaused;
      }, get composerStatus() {
        return t.composerStatus;
      }, get bcId() {
        return t.bcId;
      }, get onReconnect() {
        return t.onReconnect;
      }, get onTogglePause() {
        return t.onTogglePause;
      } }), null), Le(y, Ee(ulf, { get supports() {
        return l();
      }, get style() {
        return { margin: "0px", "backdrop-filter": "none", "-webkit-backdrop-filter": "none", border: p() };
      }, get bottomContainerStyle() {
        return t.bottomContainerStyle;
      }, get forceText() {
        return c();
      }, class: "bg-composer-follow-up-input-box", placeholder: "Ask follow-ups to the Cloud Agent...", get composerDataHandle() {
        return i();
      }, get resolvedBcId() {
        return t.bcId;
      }, nonReactiveInputBoxDelegate: a, location: "editor", suppressDefaultSubmit: true, onSubmit: () => g(false), get hidePills() {
        return t.hidePills;
      }, role: "bottom", setIsInputFocused: (S) => {
        h(S), S && t.composerStatus() !== Po.RUNNING && t.composerStatus() !== Po.CREATING && e.backgroundComposerService.wakePodForFollowupComposition(t.bcId);
      }, onCommandEnter: () => (g(true), true), extraCommandListeners: [{ command: g0t, callback: (S) => i().data.text?.trim() === "" && !(e.backgroundComposerService.bcIdForThisWindow() === t.bcId) && t.composerStatus() !== Po.RUNNING && t.composerStatus() !== Po.CREATING && e.backgroundComposerDataService.getBcDataInMainWindow(t.bcId)?.diffChangesHash !== void 0 ? (S.preventDefault(), e.commandService.executeCommand(wNi.ID, { bcId: t.bcId }).catch((I) => {
        e.notificationService.error(`Failed to apply changes locally: ${I?.message ?? String(I)}`);
      }), true) : false }], get minHeight() {
        return t.minHeight;
      }, get maxHeight() {
        return t.maxHeight;
      }, get customBottomBar() {
        return Ee(NBf, { hasText: () => !!i().data.text, isInputFocused: () => d(), handleSubmit: g, inputBoxDelegate: a, uniqueModelDropdownId: o, get composerDataHandle() {
          return i();
        }, get submitButtonClass() {
          return t.submitButtonClass;
        }, get modelDetails() {
          return t.modelDetails;
        }, onModelChange: (S, k) => {
          t.setModelDetails(new Mg({ modelName: S, maxMode: k }));
        }, get bcId() {
          return t.bcId;
        }, isCreating: _, isGenerating: b, get onStop() {
          return t.onTogglePause;
        } });
      } }), null), xn((S) => {
        var k = { width: "100%", "box-sizing": "border-box", margin: "0 auto", ...t.style }, C = t.class;
        return S.e = Ea(y, k, S.e), C !== S.t && Er(y, S.t = C), S;
      }, { e: void 0, t: void 0 }), y;
    })();
  };
} });
function j2w(t) {
  const e = Gr(), n = vt(() => {
    const r = e.backgroundComposerDataService.data.backgroundComposers.find((s) => s.bcId === t.bcId());
    if (r?.diffStats) return r.diffStats;
    if (t.fallbackDiffStats) return t.fallbackDiffStats();
  }), i = vt(() => e.backgroundComposerDataService.data.backgroundComposers.find((s) => s.bcId === t.bcId())?.isComputingDiffs || false);
  return { diffStats: n, isLoading: i };
}
