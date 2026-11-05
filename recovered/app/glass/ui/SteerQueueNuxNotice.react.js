// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SteerQueueNuxNotice.react.js range:30062119..30125050
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.028Z
var zcf = L({ "SteerQueueNuxNotice.react.js"() {
  "use strict";
  E(), Mt();
} });
function B$k(t) {
  return Ee(ilt, { useResizeObserver: true, maxHeight: 200, style: { "padding-bottom": "3px" }, contentStyle: { display: "flex", "flex-direction": "column", gap: "4px" }, innerContainerStyle: { "min-height": "unset" }, scrollingDirection: "vertical", nonReactiveElementOptions: { alwaysConsumeMouseWheel: true }, children: (e) => (() => {
    var n = FIl(), i = e;
    return typeof i == "function" ? zu(i, n) : e = n, Le(n, Ee(Su, { get each() {
      return t.items;
    }, children: (r) => {
      const s = () => {
        const o = r.questionCount;
        return o > 0 ? `Question responses queued (${o} ${o === 1 ? "question" : "questions"})` : "Question responses queued";
      };
      return (() => {
        var o = Vcf(), a = o.firstChild, l = a.firstChild;
        return Le(o, Ee(kMn, { isEmpty: true, isLoading: false, class: "composer-toolbar-queue-item-indicator" }), a), a.style.setProperty("display", "flex"), a.style.setProperty("align-items", "center"), a.style.setProperty("flex", "1"), a.style.setProperty("min-width", "0"), Le(l, s), xn((c) => Ea(l, { ...bYt(), color: "var(--vscode-input-placeholderForeground)" }, c)), o;
      })();
    } })), n;
  })() });
}
function U$k(t) {
  const e = Gr(), { currentComposer: n } = mPn(() => t.composerDataHandle), [i] = YB(e.storageService, "chatSubmitOnCmdEnter"), r = () => i() === true, { showHover: s, hideHover: o } = pme({ delay: 300, additionalClasses: ["chat-hover-tooltip"] }), [a, l] = Wt(false);
  Cn(() => {
    const Q = Gve.getInstance(), te = () => {
      const re = Q.keyStatus;
      l(SMn(re));
    };
    te();
    const ee = Q.event(te);
    On(() => ee.dispose());
  });
  const c = vt(() => a() ? _r ? "⌘⏎" : "⌃⏎" : NFk({ submitOnCmdEnter: r(), isMacintosh: _r })), u = () => (t.canSteer?.() ?? false) && t.onQueueItemSteer !== void 0, d = () => RPi({ canSteer: u(), steerEnabled: t.steerEnabled?.() ?? false, oppositeRequested: a() }), [h, p] = Wt(null), [g, f] = Wt(null), [_, b] = Wt(false), [y, S] = Wt(false), [k, C] = Wt(null), T = `composer-queue-${Zld()}`;
  let I;
  const A = () => {
    const Q = k();
    return t.queueItems.find((te) => te.id === Q);
  }, P = () => A() ?? (t.steerFeatureOn?.() && DCn(n()) && t.queueItems.length > 1 ? t.queueItems[0] : void 0), M = () => P()?.id, O = (Q) => `${T}-option-${Q}`, N = () => {
    const Q = M();
    return Q === void 0 ? void 0 : O(Q);
  }, U = () => {
    I?.focus({ preventScroll: true });
  }, j = () => {
    C(null), I?.blur(), t.onReturnFocusToPrompt?.();
  }, $ = () => {
    !t.steerFeatureOn?.() || P() !== void 0 || C(t.queueItems[0]?.id ?? null);
  }, H = (Q) => {
    if (!t.steerFeatureOn?.() || Q.target !== Q.currentTarget) return;
    if (Q.key === "Escape") {
      Q.preventDefault(), Q.stopPropagation(), j();
      return;
    }
    const te = P() ?? t.queueItems[0];
    if (te === void 0) return;
    const ee = t.queueItems.findIndex((ie) => ie.id === te.id);
    if (Q.key === "ArrowDown" || Q.key === "ArrowUp") {
      Q.preventDefault(), Q.stopPropagation();
      const ie = Q.key === "ArrowDown" ? 1 : -1, oe = ee + ie;
      if (oe < 0) return;
      if (oe >= t.queueItems.length) {
        j();
        return;
      }
      C(t.queueItems[oe]?.id ?? null);
      return;
    }
    if (Q.key === "Enter") {
      const ie = _r ? Q.metaKey : Q.ctrlKey, oe = SMn(Q), se = r() ? ie && Q.altKey : !ie && !Q.altKey;
      if (Q.shiftKey || !se && !oe) return;
      Q.preventDefault(), Q.stopPropagation(), RPi({ canSteer: u(), steerEnabled: t.steerEnabled?.() ?? false, oppositeRequested: oe }).effectiveMode === "steer" && t.onQueueItemSteer !== void 0 ? t.onQueueItemSteer(te) : t.onQueueItemSubmit(te);
      return;
    }
    if (Q.key === "ArrowRight" || Q.key === " ") {
      Q.preventDefault(), Q.stopPropagation(), t.onQueueItemEdit(te);
      return;
    }
    (_r ? Q.key === "Backspace" && Q.metaKey && !Q.ctrlKey && !Q.altKey && !Q.shiftKey : Q.key === "Delete" && Q.ctrlKey && !Q.metaKey && !Q.altKey && !Q.shiftKey) && (Q.preventDefault(), Q.stopPropagation(), t.onQueueItemRemove(te));
  };
  Cn(() => {
    const Q = t.composerId, te = MFk(Q, { enterFromPromptUp: () => ks(() => {
      if (!t.steerFeatureOn?.() || t.queueItems.length === 0) return false;
      t.ensureQueueExpanded?.();
      const ee = t.queueItems[t.queueItems.length - 1];
      return ee === void 0 ? false : (C(ee.id), queueMicrotask(() => U()), true);
    }), moveDownFromPrompt: () => ks(() => {
      if (!t.steerFeatureOn?.() || t.queueItems.length === 0) return false;
      t.ensureQueueExpanded?.();
      const ee = DFk(t.queueItems.length);
      if (ee === "prompt") return true;
      const re = t.queueItems[ee];
      return re === void 0 ? false : (C(re.id), queueMicrotask(() => U()), true);
    }) });
    On(te);
  });
  const G = (Q, te) => {
    p(te.id), S(true), Q.dataTransfer && (Q.dataTransfer.effectAllowed = "move", Q.dataTransfer.setData("text/plain", te.id));
  }, q = (Q, te, ee) => {
    Q.preventDefault();
    const re = h();
    if (re === null || re === te.id) {
      f(null);
      return;
    }
    const oe = Q.currentTarget.getBoundingClientRect(), se = oe.top + oe.height / 2;
    if (Q.clientY >= se) f(te.id), b(true);
    else if (ee === 0) f(te.id), b(false);
    else {
      const ae = t.queueItems[ee - 1];
      ae && ae.id !== re ? (f(ae.id), b(true)) : (f(te.id), b(false));
    }
    Q.dataTransfer && (Q.dataTransfer.dropEffect = "move");
  }, K = (Q) => {
    Q.preventDefault();
  }, V = (Q) => {
    const te = Q.relatedTarget, ee = Q.currentTarget;
    (!te || !ee.contains(te)) && f(null);
  }, Y = (Q) => {
    Q.preventDefault();
    const te = h(), ee = g();
    te !== null && ee !== null && t.onQueueItemReorder(te, ee, _());
  }, J = () => {
    p(null), f(null), b(false), S(false);
  };
  return Ee(ilt, { useResizeObserver: true, maxHeight: 200, style: { "padding-bottom": "3px" }, contentStyle: { display: "flex", "flex-direction": "column", gap: "4px" }, innerContainerStyle: { "min-height": "unset" }, scrollingDirection: "vertical", nonReactiveElementOptions: { alwaysConsumeMouseWheel: true }, children: (Q) => (() => {
    var te = FIl();
    return te.addEventListener("mouseleave", (ee) => {
      t.steerFeatureOn?.() && !ee.currentTarget.contains(ee.currentTarget.ownerDocument.activeElement) && C(null);
    }), te.addEventListener("keydown", H), te.addEventListener("focusout", (ee) => {
      ee.currentTarget.contains(ee.relatedTarget) || C(null);
    }), te.addEventListener("focus", $), zu((ee) => {
      Q(ee), I = ee;
    }, te), Le(te, Ee(Su, { get each() {
      return t.queueItems;
    }, children: (ee, re) => {
      const ie = () => re() === 0, oe = () => h() === ee.id, se = () => g() === ee.id, le = () => ie() && se() && !_(), ce = () => se() && _(), ae = () => $X(n())?.targetId === ee.id, de = () => t.steerFeatureOn?.() ? M() === ee.id : false, he = () => ae() ? true : t.steerFeatureOn?.() ? de() : true, ge = () => ae() ? true : t.steerFeatureOn?.() ? de() : ie(), pe = () => {
        const ve = uxn({ type: bs.HUMAN, isSimulatedMsg: ee.extras.simulatedMsgReason !== void 0 ? true : void 0, simulatedMsgReason: ee.extras.simulatedMsgReason, simulatedMessageMetadata: ee.extras.simulatedMessageMetadata, text: ee.query, richText: ee.extras.richText });
        if (ve !== void 0) return ve.action;
        const fe = ee.extras.richText, Te = !!fe && TIl(fe, e.composerLogService).trim().length > 0, _e = UGr(ee.query ?? ""), Ce = TIl(_e, e.composerLogService).trim().length > 0;
        return Xjk({ richText: fe, richTextHasText: Te, strippedQuery: _e, strippedQueryHasText: Ce, contextOverride: ee.extras.contextOverride });
      };
      return (() => {
        var ve = tuf(), fe = ve.firstChild, Te = fe.firstChild, _e = Te.nextSibling;
        return Le(ve, Ee(Ut, { get when() {
          return le();
        }, get children() {
          return Kcf();
        } }), fe), fe.addEventListener("dragend", J), fe.addEventListener("drop", Y), fe.addEventListener("dragleave", V), fe.addEventListener("dragenter", K), fe.addEventListener("dragover", (Ce) => q(Ce, ee, re())), fe.addEventListener("dragstart", (Ce) => G(Ce, ee)), fe.addEventListener("mousemove", () => {
          t.steerFeatureOn?.() && k() !== ee.id && C(ee.id);
        }), fe.addEventListener("dblclick", () => {
          ae() || t.onQueueItemEdit(ee);
        }), fe.addEventListener("click", (Ce) => {
          y() && (Ce.preventDefault(), Ce.stopPropagation());
        }), Le(fe, Ee(kMn, { isEmpty: true, isLoading: false, class: "composer-toolbar-queue-item-indicator" }), Te), Te.style.setProperty("display", "flex"), Te.style.setProperty("flex-direction", "column"), Te.style.setProperty("flex", "1"), Te.style.setProperty("min-width", "0"), Le(Te, Ee(Cwl, { maxHeight: 56, fadePercent: 25, get children() {
          return Ee(f$k, { get text() {
            return pe();
          } });
        } })), _e.style.setProperty("display", "flex"), _e.style.setProperty("align-items", "center"), _e.style.setProperty("gap", "8px"), _e.style.setProperty("margin-left", "auto"), _e.style.setProperty("flex-shrink", "0"), Le(_e, Ee(Ut, { get when() {
          return he();
        }, get children() {
          var Ce = Jcf(), Se = Ce.firstChild;
          return Le(Ce, Ee(Ut, { get when() {
            return zr(() => !ae())() && t.steerFeatureOn?.();
          }, get children() {
            var Pe = Ycf(), we = Pe.firstChild, Ie = we.nextSibling;
            return Pe.addEventListener("click", (Me) => {
              Me.stopPropagation(), o(), RPi({ canSteer: u(), steerEnabled: t.steerEnabled?.() ?? false, oppositeRequested: SMn(Me) }).effectiveMode === "steer" && t.onQueueItemSteer !== void 0 ? t.onQueueItemSteer(ee) : t.onQueueItemSubmit(ee);
            }), Pe.addEventListener("mouseleave", () => {
              o();
            }), Pe.addEventListener("mouseenter", (Me) => {
              s(Me, d().tooltip);
            }), Pe.style.setProperty("font-size", "11px"), Pe.style.setProperty("padding", "0 4px"), Pe.style.setProperty("width", "auto"), Pe.style.setProperty("height", "20px"), Pe.style.setProperty("gap", "4px"), Pe.style.setProperty("filter", "brightness(1.15)"), Le(we, () => d().label), Ie.style.setProperty("font-family", '"SF Pro", var(--vscode-font-family), sans-serif'), Ie.style.setProperty("opacity", "0.75"), Ie.style.setProperty("font-size", "11px"), Ie.style.setProperty("font-weight", "400"), Ie.style.setProperty("letter-spacing", "0.02em"), Le(Ie, c), xn(() => lo(Pe, "data-queue-action", d().effectiveMode === "steer" ? "steer" : "send")), Pe;
          } }), Se), Le(Ce, Ee(Ut, { get when() {
            return !ae();
          }, get children() {
            var Pe = Xcf();
            return Le(Pe, Ee(eb, { get codicon() {
              return yt.edit;
            }, onClick: (we) => {
              we.stopPropagation(), t.onQueueItemEdit(ee);
            }, hintText: "Edit queued message", class: "[&>span]:!text-[14px] text-white ![color:var(--vscode-editor-foreground,white)]", style: { color: "white", filter: "brightness(1.15)" } })), Pe;
          } }), Se), Le(Ce, Ee(Ut, { get when() {
            return zr(() => !ae())() && !t.steerFeatureOn?.();
          }, get children() {
            var Pe = Zcf();
            return Le(Pe, Ee(eb, { get codicon() {
              return yt.arrowUpTwo;
            }, onClick: (we) => {
              we.stopPropagation(), t.onQueueItemSubmit(ee);
            }, hintText: "Send now", class: "[&>span]:!text-[14px] text-white ![color:var(--vscode-editor-foreground,white)]", style: { color: "white", filter: "brightness(1.15)" } })), Pe;
          } }), Se), Le(Se, Ee(eb, { get codicon() {
            return yt.trashcan;
          }, onClick: (Pe) => {
            Pe.stopPropagation(), t.onQueueItemRemove(ee);
          }, hintText: "Remove from queue", class: "[&>span]:!text-[14px] text-white ![color:var(--vscode-editor-foreground,white)]", style: { color: "white", filter: "brightness(1.15)" } })), Le(Ce, Ee(Ut, { get when() {
            return zr(() => !ae())() && t.steerFeatureOn?.();
          }, get children() {
            var Pe = Qcf();
            return Le(Pe, Ee(eb, { get codicon() {
              return yt.ellipsis;
            }, onClick: (we) => {
              we.stopPropagation();
              const Ie = we.currentTarget, Me = d(), De = Me.oppositeMode;
              e.contextMenuService.showContextMenu({ getAnchor: () => Ie, getActions: () => [...t.onQueueItemMoveToNewChat !== void 0 ? [Ig({ id: "composer.queue.moveToNewChat", label: "Move to New Chat", run: () => t.onQueueItemMoveToNewChat?.(ee) })] : [], ...De !== void 0 ? [Ig({ id: De === "steer" ? "composer.queue.steer" : "composer.queue.interrupt", label: Me.oppositeLabel ?? "", tooltip: Me.oppositeDescription, run: () => De === "steer" ? t.onQueueItemSteer?.(ee) : t.onQueueItemSubmit(ee) })] : [], ...t.onOpenNewMessageSettings !== void 0 ? [...t.onQueueItemMoveToNewChat !== void 0 || De !== void 0 ? [new Kh()] : [], Ig({ id: "composer.queue.newMessageSettings", label: "New Message Settings", run: () => t.onOpenNewMessageSettings?.() })] : []] });
            }, hintText: "More actions", class: "[&>span]:!text-[14px] text-white ![color:var(--vscode-editor-foreground,white)]", style: { color: "white", filter: "brightness(1.15)" } })), Pe;
          } }), null), xn(() => Er(Ce, `composer-toolbar-queue-item-actions ${ge() ? "composer-toolbar-queue-item-actions-always-visible" : ""}`)), Ce;
        } })), Le(ve, Ee(Ut, { get when() {
          return ce();
        }, get children() {
          return euf();
        } }), null), xn((Ce) => {
          var Se = t.steerFeatureOn?.() ? de() : void 0, Pe = `composer-toolbar-queue-item ${oe() ? "dragging" : ""} ${ae() ? "editing" : ""} ${de() ? "focused" : ""}`, we = de() ? "true" : void 0, Ie = ee.id, Me = ee.query, De = !ae(), Ne = t.steerFeatureOn?.() ? O(ee.id) : void 0, be = t.steerFeatureOn?.() ? "option" : void 0;
          return Se !== Ce.e && lo(fe, "aria-selected", Ce.e = Se), Pe !== Ce.t && Er(fe, Ce.t = Pe), we !== Ce.a && lo(fe, "data-focused", Ce.a = we), Ie !== Ce.o && lo(fe, "data-queue-item-id", Ce.o = Ie), Me !== Ce.i && lo(fe, "data-queue-item-query", Ce.i = Me), De !== Ce.n && lo(fe, "draggable", Ce.n = De), Ne !== Ce.s && lo(fe, "id", Ce.s = Ne), be !== Ce.h && lo(fe, "role", Ce.h = be), Ce;
        }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), ve;
      })();
    } })), xn((ee) => {
      var re = t.steerFeatureOn?.() ? N() : void 0, ie = t.steerFeatureOn?.() ? "Queued messages" : void 0, oe = t.steerFeatureOn?.() ? "true" : void 0, se = t.queueItems.length, le = t.steerFeatureOn?.() ? "listbox" : void 0, ce = t.steerFeatureOn?.() ? 0 : void 0;
      return re !== ee.e && lo(te, "aria-activedescendant", ee.e = re), ie !== ee.t && lo(te, "aria-label", ee.t = ie), oe !== ee.a && lo(te, "data-focused-actions", ee.a = oe), se !== ee.o && lo(te, "data-queue-count", ee.o = se), le !== ee.i && lo(te, "role", ee.i = le), ce !== ee.n && lo(te, "tabindex", ee.n = ce), ee;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), te;
  })() });
}
function j$k() {
  return nuf();
}
function $$k(t) {
  return Ee(ilt, { useResizeObserver: true, maxHeight: 200, style: { "padding-bottom": "3px" }, contentStyle: { display: "flex", "flex-direction": "column", gap: "4px" }, innerContainerStyle: { "min-height": "unset" }, scrollingDirection: "vertical", nonReactiveElementOptions: { alwaysConsumeMouseWheel: true }, children: (e) => (() => {
    var n = iuf(), i = e;
    return typeof i == "function" ? zu(i, n) : e = n, Le(n, Ee(Su, { get each() {
      return t.items;
    }, children: (r) => (() => {
      var s = ruf(), o = s.firstChild, a = o.nextSibling, l = a.firstChild, c = a.nextSibling;
      return s.addEventListener("click", () => {
        if (r.kind === "subagent") {
          t.onOpenSubagent(r.subagentComposerId ?? r.id);
          return;
        }
        r.kind === "shell" && t.onOpenShell(r.id);
      }), Le(o, Ee(Ut, { get when() {
        return r.kind === "shell";
      }, get fallback() {
        return Ee(j$k, {});
      }, get children() {
        var u = cvs();
        return xn(() => Er(u, `${Gn.asClassName(yt.terminal)} composer-toolbar-background-job-shell-icon`)), u;
      } })), a.style.setProperty("display", "flex"), a.style.setProperty("flex", "1"), a.style.setProperty("min-width", "0"), Le(l, () => r.title), Le(c, Ee(ol, { variant: "text", class: "composer-toolbar-background-job-item-stop", onClick: (u) => {
        u.stopPropagation(), t.onKill(r);
      }, children: "Stop" })), xn((u) => Ea(l, { ...bYt() }, u)), s;
    })() })), n;
  })() });
}
function H$k(t) {
  const e = Gr(), n = e.workbenchEnvironmentService.isGlass === true, { composerDataService: i, composerUtilsService: r } = e, { currentComposer: s, composerDataHandle: o, updateCurrentComposer: a, unifiedMode: l } = mPn(() => t.composerDataHandle), c = vt(() => s().createdFromBackgroundAgent?.bcId), u = vt(() => c() !== void 0), d = vt(() => {
    const Bn = c();
    if (Bn) return e.backgroundComposerDataService.data.backgroundComposers.find((Tn) => Tn.bcId === Bn);
  }), h = vt(() => {
    const Bn = d();
    return Bn?.diffStats?.totalFiles ?? Bn?.cachedFileCount ?? 0;
  }), p = vt(() => l() === "spec" && s().plan?.isSpec === true), g = w2i(o), f = vt(() => {
    if (!n) return t$k(s().conversationState?.goalState);
  }), _ = TEt("agent_goal_continuation", () => f() !== void 0), b = vt(() => {
    if (_()) return f();
  }), y = vt(() => !u()), S = JI("long_running_jobs"), k = A0(e.backgroundWorkService.backgroundWorkItems), C = vt(() => e.composerDataService.getComposerCapability(o(), mo.QUEUING)), T = vt(() => (C()?.getQueueItemsReactive() ?? []).filter((Bn) => vqe(Bn))), I = vt(() => {
    const Bn = s(), Tn = o(), Zn = Bn.fullConversationHeadersOnly.length;
    return ks(() => s5a({ composerDataService: e.composerDataService, handle: Tn, conversation: Bn.fullConversationHeadersOnly }));
  }), A = vt(() => T().length > 0 || I().length > 0), P = vt(() => s().isQueueExpanded ?? true), M = vt(() => A()), O = vt(() => M() && P()), N = vt(() => {
    if (!S()) return [];
    const Bn = s().composerId, Tn = k(), Zn = e.workbenchEnvironmentService.isGlass === true, tr = /* @__PURE__ */ new Map(), hi = (ui) => {
      const Ni = tr.get(ui);
      if (Ni !== void 0) return Ni;
      const cr = Gjk(e.storageService, ui);
      return tr.set(ui, cr), cr;
    };
    return Tn.filter((ui) => !(ui.composerId !== Bn || !Zn && ui.kind === "subagent" && hi(ui.subagentComposerId ?? ui.id))).sort((ui, Ni) => ui.kind === Ni.kind ? 0 : ui.kind === "subagent" ? -1 : 1);
  }), U = vt(() => N().filter((Bn) => Bn.kind === "shell").length), j = vt(() => N().length > 0), $ = vt(() => o$k({ shellCount: U(), totalCount: N().length })), [H, G] = Wt(false), q = vt(() => j() && H()), [K] = Det(async () => {
    const Bn = await e.pathService.userHome();
    return wbe(Bn);
  }), V = vt(() => {
    if (s().isNAL) {
      const Tn = s().conversationState.fileStatesV2;
      return Object.keys(Tn).map((Zn) => x5(rt.file(Zn), e.workbenchEnvironmentService.remoteAuthority, e.pathService.defaultUriScheme).toString()).filter((Zn) => !fPn(Zn, K(), e.workspaceContextService));
    }
    const Bn = Object.keys(s().codeBlockData);
    return Bn ? Bn.filter((Tn) => {
      if (fPn(Tn, K(), e.workspaceContextService)) return false;
      const Zn = s().codeBlockData[Tn];
      return Object.values(Zn).some((tr) => !tr.isNotApplied);
    }) : [];
  }, void 0, { equals: Owl }), Y = ecf(o, { includeSubComposers: true }), J = vt(() => u() ? [] : Y().filter((Bn) => !fPn(Bn.uri.toString(), K(), e.workspaceContextService))), Q = vt(() => {
    const Bn = J();
    return Bn.length > 0 ? [...new Set(Bn.map((Tn) => Tn.uri.toString()))] : [];
  }, void 0, { equals: Owl }), te = vt(() => Lwl(Q())), ee = vt(() => u() ? h() : te().totalCount), re = vt(() => Lwl(V())), ie = vt(() => u() ? ee() > 0 : re().totalCount > 0), oe = vt(() => {
    const Bn = u() ? ee() > 0 : J().length > 0;
    return ee() > 0 || Bn || !!t.forceVisible && ie();
  }), se = vt(() => ee() > 0);
  Cn(() => {
    const Bn = u() ? ee() > 0 : J().length > 0, Tn = s().isFileListExpanded, Zn = ie();
    !Bn && !Zn && Tn && a({ isFileListExpanded: false });
  });
  const le = vt(() => ({ ...t.style, position: "relative", display: "flex", "flex-direction": "column", height: "auto", gap: "0px", background: "var(--composer-pane-background)", transition: "box-shadow 0.2s ease-in-out" })), ce = vt(() => i.getPendingUserDecisionGroup(t.composerDataHandle).filter((Tn) => g6p(Tn.clientSideTool))), ae = vt(() => i.getIsBlockingUserDecision(t.composerDataHandle)), de = Vjk(o), he = { canShowFileList: oe, shouldShowFileCount: se, numFiles: ee, isFileListExpanded: () => s().isFileListExpanded ?? false, onToggleFileList: () => {
    e.analyticsService.trackEvent("composer.toggled_changed_files_drawer");
    const Bn = !s().isFileListExpanded;
    a({ isFileListExpanded: Bn });
  }, chatStatus: () => g(), hasFilesChanged: ie, hasAnyFiles: ie, hasPendingEdits: () => u() ? ee() > 0 : J().length > 0, forceVisible: () => t.forceVisible }, { shouldShowAcceptAll: ge, shouldShowRejectAll: pe } = sgs(o), ve = vt(() => e.composerDataService.getComposerCapability(t.composerDataHandle, mo.TOOL_FORMER)?.isCurrentlyRunningTerminalInForeground() ?? false), fe = vt(() => e.toolCallHumanReviewService.isToolformerCurrentlyWaitingForMCPReview(t.composerDataHandle)), Te = vt(() => e.toolCallHumanReviewService.isToolformerCurrentlyWaitingForReview(t.composerDataHandle)), _e = vt(() => {
    if (!s()) return false;
    if (u()) return ee() > 0;
    if (t.forceVisible && ie() || J().length > 0) return true;
    const Zn = o();
    return e.composerCodeBlockService.getCodeBlockFileUris(Zn).length > 0 ? true : e.composerDataService.getLoadedSubComposerHandles(Zn).some((hi) => e.composerCodeBlockService.getCodeBlockFileUris(hi).length > 0);
  }), Ce = vt(() => (s().fullConversationHeadersOnly.length, r.getHasPendingQuestionnaireAwaitingInput(o()))), Se = vt(() => {
    const Tn = i.getPendingUserDecisionGroup(t.composerDataHandle).find((Zn) => Zn.clientSideTool === Ct.ASK_QUESTION);
    if (Tn) return Tn;
    if (Ce()) {
      const tr = s().fullConversationHeadersOnly;
      if (tr.length === 0) return;
      for (let hi = tr.length - 1; hi >= 0; hi--) {
        const ui = tr[hi];
        if (!ui) continue;
        const Ni = i.getComposerBubble(o(), ui.bubbleId);
        if (!Ni || !Ni.toolFormerData || !(Ni.capabilityType === mo.TOOL_FORMER && Ni.toolFormerData.tool === Ct.ASK_QUESTION)) continue;
        const fs = Ni.toolFormerData.additionalData, mi = fs && "status" in fs ? fs.status : "pending";
        if (mi === "pending" || mi === "loading") {
          const di = Ni.toolFormerData.toolCallId;
          if (!di) continue;
          return { blocking: true, clientSideTool: Ct.ASK_QUESTION, toolCallId: di, decide: () => {
          }, accept: () => {
          }, reject: () => {
          }, startedAt: Date.now() };
        }
      }
    }
  }), Pe = vt(() => Ce() || !!Se()), we = vt(() => {
    const Bn = s();
    if (Bn.unifiedMode !== "debug") return null;
    const Tn = Bn.fullConversationHeadersOnly.length, Zn = Bn.status, hi = i.getLastAiBubble(o(), { skipSummarization: true })?.text;
    return ks(() => E2i(Bn));
  }), Ie = vt(() => {
    const Bn = s();
    if (Bn.unifiedMode !== "debug") return false;
    const Tn = Bn.fullConversationHeadersOnly;
    return Tn.length === 0 || Tn[Tn.length - 1]?.type === bs.HUMAN ? false : !!we();
  }), Me = vt(() => we()), De = vt(() => j() && !Ie()), Ne = vt(() => s().pluginFlowState?.step === "confirm"), be = 320, [je, $e] = Wt(false), [Je, Ge] = Wt(false), [xe, Oe] = Wt(null), [ct, Ye] = Wt("user"), Ve = vt(() => ({ current: [] })), Xe = vt(() => {
    const Bn = e.workspaceContextService.getWorkspace();
    return jfs({ hasWorkspaceFolder: Bn.folders.length > 0 });
  }), lt = vt(() => e.workspaceContextService.getWorkspace().folders[0]?.name), [He] = Det(async () => {
    try {
      return (await e.cursorAuthenticationService.getEmailAndSignUpType()).email ?? void 0;
    } catch {
      return;
    }
  }), gt = async () => {
    if (je() || Je()) return;
    const Bn = s().pluginFlowState;
    if (!Bn?.selectedPlugin || Bn.step !== "confirm") return;
    const Tn = Bn.action === "add", Zn = ct();
    let tr = 1;
    Ge(false), $e(true), Oe(null), Tn && e.analyticsService.trackEvent("marketplace.plugin_install_leadup", { action: "add_plugin_slash_command_submitted", pluginName: Bn.selectedPlugin.name, location: "slash-command" });
    try {
      if (tr = (await slf({ flowState: Bn, scope: Zn, pluginsProviderService: e.pluginsProviderService, cursorAuthenticationService: e.cursorAuthenticationService, instantiationService: e.instantiationService })).removeActionScopeCountBefore, Tn) {
        e.analyticsService.trackEvent("marketplace.plugin_install", { pluginName: Bn.selectedPlugin.name, scope: Zn, location: "slash-command" }), Ge(true), $e(false), await new Promise((fs) => setTimeout(fs, be));
        const Ni = `/add-plugin ${Bn.selectedPlugin.slashCommandValue ?? Bn.selectedPlugin.name}`;
        o().setData("pluginFlowState", null);
        const cr = await e.composerService.createComposer({ ignoreEmptyCheck: true });
        if (cr) {
          e.composerDataService.updateComposerData(cr.weakHandle, { recentlyAddedPlugin: Bn.selectedPlugin });
          const fs = s(), di = [...fs.fullConversationHeadersOnly].reverse().map((Mr) => fs.conversationMap[Mr.bubbleId]).find((Mr) => Mr?.type === bs.HUMAN && Mr.text === Ni)?.richText ?? Ni;
          e.composerChatService.submitChatMaybeAbortCurrent(cr.composerId, Ni, { richText: di });
        }
      } else tr <= 1 ? e.analyticsService.trackEvent("marketplace.plugin_uninstall", { pluginName: Bn.selectedPlugin.name, scope: Zn, location: "slash-command" }) : e.analyticsService.trackEvent("marketplace.plugin_scope_removed", { pluginName: Bn.selectedPlugin.name, scope: Zn, location: "slash-command" }), Ge(true), $e(false), await new Promise((ui) => setTimeout(ui, be)), o().setData("pluginFlowState", null);
    } catch (hi) {
      e.composerLogService.error("Failed to process plugin action:", hi);
      const ui = gwl(hi);
      Oe(ui ? `Failed to install plugin: ${ui}` : "Failed to process plugin installation");
    } finally {
      $e(false), Ge(false);
    }
  }, ht = () => {
    const Bn = s().pluginFlowState;
    Ye("user"), o().setData("pluginFlowState", VEl(Bn?.action ?? "add"));
  };
  Cn(() => {
    if (n || !Ne()) return;
    const Bn = (Tn) => {
      if (je() || Je()) return;
      Tn.key === "Enter" && !Tn.shiftKey && (_r && Tn.metaKey && !Tn.ctrlKey || !_r && Tn.ctrlKey && !Tn.metaKey) && (Tn.preventDefault(), Tn.stopPropagation(), gt());
    };
    document.addEventListener("keydown", Bn, { capture: true }), On(() => document.removeEventListener("keydown", Bn, { capture: true }));
  });
  const Ae = vt(() => "Review"), ot = vt(() => _e()), Be = vt(() => {
    const Bn = s(), Zn = !!((e.composerDataService.getComposerData(o()) ?? Bn)?.gitWorktree?.worktreePath || Bn?.gitWorktree?.worktreePath);
    return Pe() || Ne() || Ie() && !Zn ? false : !!(t.forceVisible && ie() || ot() || J().length > 0 || ee() > 0 || ce().length > 0 || ge() || pe() || ve() || fe() || Te() || g() === "generating" && ae());
  }), Ue = vt(() => {
    const Bn = s();
    return Bn ? Bn.usageData !== void 0 && Object.keys(Bn.usageData).length > 0 : false;
  }), it = (Bn) => {
    const Tn = s(), Zn = Tn.composerId, tr = $X(Tn);
    e.composerViewsService.triggerScrollToBottom(o()), tr?.targetId === Bn.id ? C()?.isSummarizationGenerationInFlight() ? C()?.saveEditedItemBackToQueue({ query: Tn.text ?? "", extras: { ...Bn.extras, richText: Tn.richText, contextOverride: _1(Tn.context) } }) : (C()?.removeFromQueue(Bn.id), e.composerChatService.submitChatMaybeAbortCurrent(Zn, Tn.text ?? "", { ...Bn.extras, richText: Tn.richText, contextOverride: _1(Tn.context), ignoreQueuing: true, skipClearInput: true }), e.composerDataService.updateComposerData(o(), { editingQueueItemId: void 0, ...pPn(), text: "", richText: "" }), e.composerContextService.resetContext(o()), e.composerEventService.fireShouldForceText({ composerId: Zn })) : C()?.submitQueueItem(Bn), e.composerDataService.updateComposerDataSetStore(o(), (hi) => hi("selectedQueueItemId", void 0));
  }, qe = (Bn) => {
    C()?.removeFromQueue(Bn.id, { isUserDiscard: true });
    const Tn = s(), Zn = Tn.composerId;
    e.composerDataService.updateComposerDataSetStore(o(), (tr) => tr("selectedQueueItemId", void 0)), $X(Tn)?.targetId === Bn.id && (e.composerDataService.updateComposerData(o(), { editingQueueItemId: void 0, ...pPn(), text: "", richText: "" }), e.composerContextService.resetContext(o()), e.composerEventService.fireShouldForceText({ composerId: Zn })), C()?.tryDispatchNextQueueItem();
  }, pt = (Bn) => {
    VQg(e, o(), Bn);
  }, dt = vt(() => TJ(s())), ft = (Bn) => {
    dt() || (async () => {
      const Tn = await e.composerService.createComposer({ partialState: { text: Bn.query, richText: Bn.extras.richText ?? "" }, openInNewTab: true });
      Tn && (e.composerEventService.fireShouldForceText({ composerId: Tn.composerId }), C()?.removeFromQueue(Bn.id));
    })();
  }, bt = () => {
    e.commandService.executeCommand(vP, "chat", Pzt);
  }, St = vt(() => C()?.isSteeringAvailable() ?? false), Et = vt(() => C()?.isSteeringFeatureEnabled() ?? false), kt = () => e.configurationService.getValue(_Q) === "steer", xt = () => e.configurationService.getValue(QOe) === "steer", [Pt, Dt] = Wt(kt()), [Vt, tn] = Wt(xt()), un = e.configurationService.onDidChangeConfiguration((Bn) => {
    Bn.affectsConfiguration(_Q) && Dt(kt()), Bn.affectsConfiguration(QOe) && tn(xt());
  });
  On(() => un.dispose());
  const [kn, oi] = YB(e.storageService, "steerQueuedMessagesNuxDismissed"), Fn = vt(() => Et() && Vt() === true), Qt = vt(() => Et() && Pt() !== true && kn() !== true && St() && T().length > 0);
  let Sn = false;
  Cn(() => {
    Qt() && !Sn && (Sn = true, e.analyticsService.trackEvent("composer.steer_queue_nux.shown", { surface: "editor", queuedItemCount: T().length }));
  });
  const $n = () => {
    e.analyticsService.trackEvent("composer.steer_queue_nux.action", { surface: "editor", action: "open_settings", queuedItemCount: T().length }), oi(true), bt();
  }, Mn = () => {
    e.analyticsService.trackEvent("composer.steer_queue_nux.action", { surface: "editor", action: "keep_queuing", queuedItemCount: T().length }), oi(true);
  }, Un = (Bn) => {
    C()?.sendQueueItemPreferringSteer(Bn.id), e.composerDataService.updateComposerDataSetStore(o(), (Tn) => Tn("selectedQueueItemId", void 0));
  }, Xn = (Bn, Tn, Zn) => {
    C()?.reorderQueueById(Bn, Tn, Zn);
  }, Ti = async (Bn) => {
    await e.backgroundWorkService.killBackgroundWork(Bn);
  }, bi = async (Bn) => {
    await e.composerViewsService.showAndFocus(Bn, { view: "editor" }), e.composerDataService.setLastFocusedComposerId(Bn);
  }, Qn = async (Bn) => {
    e.workbenchEnvironmentService.isGlass && e.instantiationService.invokeFunction((Zn) => {
      const tr = Number(Bn);
      if (!Number.isInteger(tr)) return false;
      const hi = s().composerId, ui = Zn.get(Py).instances.find((Ni) => {
        const cr = Ni.reconnectionProperties?.data;
        return cr?.agentOwned === true && cr.backgroundShellId === tr && cr.conversationId === hi;
      });
      return ui ? (Zn.get(evs).setEditorPanelVisibility({ source: "local-user-intent", visible: true }), Zn.get(gMn).activateTerminalResource({ terminalId: ui.instanceId }), true) : false;
    }) || await e.backgroundWorkService.openBackgroundShell(Bn);
  }, ni = vt(() => s().activeCanvas), pn = vt(() => dhe(ni()) !== void 0), yn = vt(() => {
    const Bn = dhe(ni());
    return Bn ? vjk(Bn) : "";
  }), [Ln, xi] = Wt(false), Ci = () => e.instantiationService.invokeFunction((Bn) => Bn.get(P6)), En = () => e.instantiationService.invokeFunction((Bn) => Bn.get(wh)), Dn = async () => {
    const Bn = dhe(ni());
    if (!(!Bn || Ln())) {
      xi(true);
      try {
        const Tn = dt() ? c() : void 0;
        await Elf(Bn, Ci(), e.notificationService, { structuredLogService: En(), openOptions: Tn ? { ownerAgentId: Tn, sourceResource: eIl({ ownerAgentId: Tn, sourcePath: Bn.path }) } : void 0 });
      } catch (Tn) {
        const Zn = Tn instanceof Error ? Tn.message : String(Tn);
        e.notificationService.error(`Failed to open canvas: ${Zn}`);
      } finally {
        xi(false);
      }
    }
  }, Si = vt(() => !!t.forceCollapsedTopBar), [Ui, Nn] = Wt(false);
  Cn(() => {
    const Bn = Si(), Tn = Ui();
    Bn && !Tn && s().isFileListExpanded && a({ isFileListExpanded: false }), Nn(Bn);
  });
  const ci = vt(() => !!s()?.gitWorktree?.worktreePath), Pi = vt(() => J().length > 0 || s().isFileListExpanded || ot() ? true : ce().length > 0 || Pe() || Ie() || Ne() || pn() || ie() && (ci() || J().length > 0) || A() || b() !== void 0 || j()), vi = vt(() => {
    const Bn = de(), Tn = oe(), Zn = M(), tr = b() !== void 0, hi = De(), ui = pn(), Ni = Pi(), cr = Pe(), fs = Ie(), mi = Ne(), di = Be();
    return Ni && (Bn || Tn || Zn || tr || ui || hi || cr || fs || mi || di);
  }), Yi = vt(() => pn() && (De() || M() || Be()));
  return Ee(Ut, { get when() {
    return zr(() => !p())() && (vi() || Ue() || t.forceVisible);
  }, get children() {
    var Bn = ouf();
    return Bn.addEventListener("mousedown", (Tn) => t.onStartDrag?.(Tn)), Le(Bn, Ee(Ut, { get when() {
      return vi() || t.forceVisible;
    }, get children() {
      return [Ee(Ut, { get when() {
        return zr(() => !!Pe())() && Se();
      }, get children() {
        return Ee(d$k, { get composerDataHandle() {
          return o();
        }, get pendingDecision() {
          return Se();
        } });
      } }), Ee(Ut, { get when() {
        return Ie();
      }, get children() {
        return [Ee(POk, { get composerDataHandle() {
          return o();
        }, get lastAiMessage() {
          return Me();
        } }), Ee(Ut, { get when() {
          return Be();
        }, get children() {
          var Tn = CMn();
          return Tn.style.setProperty("height", "1px"), Tn.style.setProperty("background", "color-mix(in srgb, var(--cursor-stroke-tertiary, var(--vscode-widget-border)) 40%, transparent)"), Tn.style.setProperty("margin", "1px 0px"), Tn;
        } })];
      } }), Ee(Ut, { get when() {
        return zr(() => !!Ne())() && s().pluginFlowState?.selectedPlugin;
      }, children: (Tn) => Ee(hcf, { get selectedPlugin() {
        return Tn();
      }, get action() {
        return s().pluginFlowState?.action ?? "add";
      }, get scopeOptions() {
        return Xe();
      }, get selectedScope() {
        return ct();
      }, onScopeChange: Ye, get workspaceName() {
        return lt();
      }, get userEmail() {
        return He();
      }, get scopeOptionRefsRef() {
        return Ve();
      }, location: "toolbar", onDetailsClick: () => {
        const Zn = Tn();
        e.instantiationService.invokeFunction((tr) => {
          U4e(tr, Zn.sourceType === "third-party" ? { kind: "browse" } : { kind: "detail", pluginId: Zn.id.toString() });
        });
      }, onConfirm: () => void gt(), onCancel: ht, get isLoading() {
        return je();
      }, get error() {
        return xe();
      }, get portalRoot() {
        return e.portalElement;
      } }) }), Ee(Ut, { get when() {
        return pn();
      }, get children() {
        return [(() => {
          var Tn = suf(), Zn = Tn.firstChild, tr = Zn.firstChild, hi = tr.firstChild, ui = hi.firstChild, Ni = ui.nextSibling, cr = tr.nextSibling;
          return Tn.style.setProperty("position", "relative"), Zn.style.setProperty("display", "flex"), Zn.style.setProperty("align-items", "center"), Zn.style.setProperty("justify-content", "space-between"), `${_st}px` != null ? Zn.style.setProperty("height", `${_st}px`) : Zn.style.removeProperty("height"), Zn.style.setProperty("gap", "8px"), tr.style.setProperty("display", "flex"), tr.style.setProperty("align-items", "center"), tr.style.setProperty("flex", "1"), tr.style.setProperty("min-width", "0"), ui.style.setProperty("color", "var(--cursor-icon-secondary)"), ui.style.setProperty("font-size", "14px"), ui.style.setProperty("flex-shrink", "0"), Le(Ni, yn), cr.style.setProperty("display", "flex"), cr.style.setProperty("align-items", "center"), cr.style.setProperty("gap", "6px"), cr.style.setProperty("padding-right", "8px"), cr.style.setProperty("flex-shrink", "0"), Le(cr, Ee(ol, { variant: "secondary", class: "py-0", onClick: () => void Dn(), get style() {
            return LMe();
          }, get disabled() {
            return Ln();
          }, get showLoadingSpinner() {
            return Ln();
          }, hintText: "Open or refocus the canvas tab", children: "Open" })), xn((fs) => {
            var mi = DPi(false, "180px"), di = Gn.asClassName(yt.brush), Mr = { ...bYt(), color: "var(--cursor-icon-secondary)" };
            return fs.e = Ea(hi, mi, fs.e), di !== fs.t && Er(ui, fs.t = di), fs.a = Ea(Ni, Mr, fs.a), fs;
          }, { e: void 0, t: void 0, a: void 0 }), Tn;
        })(), Ee(Ut, { get when() {
          return Yi();
        }, get children() {
          var Tn = CMn();
          return Tn.style.setProperty("height", "1px"), Tn.style.setProperty("background", "color-mix(in srgb, var(--cursor-stroke-tertiary, var(--vscode-widget-border)) 40%, transparent)"), Tn.style.setProperty("margin", "1px 0px"), Tn;
        } })];
      } }), Ee(Ut, { get when() {
        return De();
      }, get children() {
        return [(() => {
          var Tn = BIl(), Zn = Tn.firstChild, tr = Zn.firstChild, hi = tr.firstChild, ui = hi.firstChild, Ni = ui.nextSibling;
          return Tn.style.setProperty("position", "relative"), Zn.style.setProperty("display", "flex"), Zn.style.setProperty("align-items", "center"), Zn.style.setProperty("justify-content", "space-between"), `${_st}px` != null ? Zn.style.setProperty("height", `${_st}px`) : Zn.style.removeProperty("height"), tr.addEventListener("click", () => G(!H())), tr.style.setProperty("display", "flex"), tr.style.setProperty("align-items", "center"), tr.style.setProperty("cursor", "pointer"), tr.style.setProperty("flex", "1"), ui.style.setProperty("color", "var(--cursor-icon-secondary)"), ui.style.setProperty("font-size", "14px"), ui.style.setProperty("flex-shrink", "0"), ui.style.setProperty("transition", "transform 0.1s"), Le(Ni, $), Le(Tn, Ee(Ut, { get when() {
            return q();
          }, get children() {
            return Ee($$k, { get items() {
              return N();
            }, onKill: Ti, onOpenSubagent: bi, onOpenShell: Qn });
          } }), null), xn((cr) => {
            var fs = { ...DPi(true, "180px") }, mi = H() ? "rotate(90deg)" : "rotate(0deg)", di = Gn.asClassName(yt.chevronRight), Mr = { ...bYt(), color: "var(--cursor-icon-secondary)" };
            return cr.e = Ea(hi, fs, cr.e), mi !== cr.t && ((cr.t = mi) != null ? ui.style.setProperty("transform", mi) : ui.style.removeProperty("transform")), di !== cr.a && Er(ui, cr.a = di), cr.o = Ea(Ni, Mr, cr.o), cr;
          }, { e: void 0, t: void 0, a: void 0, o: void 0 }), Tn;
        })(), Ee(Ut, { get when() {
          return M() || b() !== void 0 || Be();
        }, get children() {
          var Tn = CMn();
          return Tn.style.setProperty("height", "1px"), Tn.style.setProperty("background", "color-mix(in srgb, var(--cursor-stroke-tertiary, var(--vscode-widget-border)) 40%, transparent)"), Tn.style.setProperty("margin", "1px 0px"), Tn;
        } })];
      } }), Ee(Ut, { get when() {
        return M();
      }, get children() {
        return [(() => {
          var Tn = BIl(), Zn = Tn.firstChild, tr = Zn.firstChild, hi = tr.firstChild, ui = hi.firstChild, Ni = ui.nextSibling;
          return Tn.style.setProperty("position", "relative"), Le(Tn, Ee(Ut, { get when() {
            return Qt();
          }, get children() {
            return Ee(guf, { onKeepQueuing: Mn, onOpenSettings: $n });
          } }), Zn), Zn.style.setProperty("display", "flex"), Zn.style.setProperty("align-items", "center"), Zn.style.setProperty("justify-content", "space-between"), `${_st}px` != null ? Zn.style.setProperty("height", `${_st}px`) : Zn.style.removeProperty("height"), tr.addEventListener("click", () => a({ isQueueExpanded: !P() })), tr.style.setProperty("display", "flex"), tr.style.setProperty("align-items", "center"), tr.style.setProperty("cursor", "pointer"), tr.style.setProperty("flex", "1"), ui.style.setProperty("color", "var(--cursor-icon-secondary)"), ui.style.setProperty("font-size", "14px"), ui.style.setProperty("flex-shrink", "0"), ui.style.setProperty("transition", "transform 0.1s"), Le(Ni, () => {
            const cr = T().length + I().length;
            return Et() ? `${cr} Queued ${cr === 1 ? "Message" : "Messages"}` : `${cr} Queued`;
          }), Le(Tn, Ee(Ut, { get when() {
            return O();
          }, get children() {
            return [Ee(U$k, { get composerId() {
              return s().composerId;
            }, get composerDataHandle() {
              return o();
            }, get queueItems() {
              return T();
            }, onQueueItemSubmit: it, onQueueItemSteer: Un, canSteer: St, steerFeatureOn: Et, steerEnabled: Fn, get onQueueItemMoveToNewChat() {
              return dt() ? void 0 : ft;
            }, onOpenNewMessageSettings: bt, onQueueItemRemove: qe, onQueueItemEdit: pt, onQueueItemReorder: Xn, get isInputFocused() {
              return t.isInputFocused;
            }, ensureQueueExpanded: () => {
              P() || a({ isQueueExpanded: true });
            }, onReturnFocusToPrompt: () => {
              e.composerViewsService.focus(s().composerId, true);
            } }), Ee(Ut, { get when() {
              return I().length > 0;
            }, get children() {
              return Ee(B$k, { get items() {
                return I();
              } });
            } })];
          } }), null), xn((cr) => {
            var fs = { ...DPi(true, "120px") }, mi = P() ? "rotate(90deg)" : "rotate(0deg)", di = Gn.asClassName(yt.chevronRight), Mr = { ...bYt(), color: "var(--cursor-icon-secondary)" };
            return cr.e = Ea(hi, fs, cr.e), mi !== cr.t && ((cr.t = mi) != null ? ui.style.setProperty("transform", mi) : ui.style.removeProperty("transform")), di !== cr.a && Er(ui, cr.a = di), cr.o = Ea(Ni, Mr, cr.o), cr;
          }, { e: void 0, t: void 0, a: void 0, o: void 0 }), Tn;
        })(), Ee(Ut, { get when() {
          return b() !== void 0 || Be();
        }, get children() {
          var Tn = CMn();
          return Tn.style.setProperty("height", "1px"), Tn.style.setProperty("background", "color-mix(in srgb, var(--cursor-stroke-tertiary, var(--vscode-widget-border)) 40%, transparent)"), Tn.style.setProperty("margin", "1px 0px"), Tn;
        } })];
      } }), Ee(Ut, { get when() {
        return b() !== void 0;
      }, get children() {
        return [Ee(a$k, { get composerId() {
          return s().composerId;
        }, composerDataHandle: o, goal: b, canMutate: y }), Ee(Ut, { get when() {
          return Be();
        }, get children() {
          var Tn = CMn();
          return Tn.style.setProperty("height", "1px"), Tn.style.setProperty("background", "color-mix(in srgb, var(--cursor-stroke-tertiary, var(--vscode-widget-border)) 40%, transparent)"), Tn.style.setProperty("margin", "1px 0px"), Tn;
        } })];
      } }), Ee(Ut, { get when() {
        return Be();
      }, get children() {
        return Ee(W$k, Zy({ styles: {}, get composerDataHandle() {
          return o();
        }, get pendingDecisionGroup() {
          return ce();
        }, get isBlockingUserDecision() {
          return ae();
        }, get hasPendingQuestionnaire() {
          return Pe();
        }, get onStartDrag() {
          return t.onStartDrag;
        }, get isDragging() {
          return t.isDragging;
        }, get acceptAllLabelOverride() {
          return t.acceptAllLabelOverride;
        }, get rejectAllLabelOverride() {
          return t.rejectAllLabelOverride;
        }, get onRejectAllOverrideClick() {
          return t.onRejectAllOverrideClick;
        }, get shouldShowReviewChangesButton() {
          return ot();
        }, get reviewButtonText() {
          return Ae();
        } }, he));
      } })];
    } })), xn((Tn) => {
      var Zn = { ...le() }, tr = `hide-if-empty ${Pe() ? "has-pending-questionnaire" : ""} ${Ie() ? "has-pending-debug-reproduction" : ""} ${Ne() ? "has-plugin-confirm" : ""}`;
      return Tn.e = Ea(Bn, Zn, Tn.e), tr !== Tn.t && Er(Bn, Tn.t = tr), Tn;
    }, { e: void 0, t: void 0 }), Bn;
  } });
}
function W$k(t) {
  const e = Gr(), { composerService: n } = e, { composerDataHandle: i, currentComposer: r } = mPn(() => t.composerDataHandle), s = vt(() => r().composerId), o = vt(() => r().createdFromBackgroundAgent?.bcId), a = vt(() => o() !== void 0), l = vt(() => {
    const we = o();
    if (we) return e.backgroundComposerDataService.data.backgroundComposers.find((Ie) => Ie.bcId === we);
  }), c = vt(() => {
    const we = l();
    return we?.diffStats?.totalFiles ?? we?.cachedFileCount ?? 0;
  }), [u] = Det(async () => {
    const we = await e.pathService.userHome();
    return wbe(we);
  }), d = vt(() => {
    if (r().isNAL) {
      const Ie = r().conversationState.fileStatesV2;
      return Object.keys(Ie).map((Me) => x5(rt.file(Me), e.workbenchEnvironmentService.remoteAuthority, e.pathService.defaultUriScheme).toString()).filter((Me) => !fPn(Me, u(), e.workspaceContextService));
    }
    const we = Object.keys(r().codeBlockData || {});
    return we ? we.filter((Ie) => {
      if (fPn(Ie, u(), e.workspaceContextService)) return false;
      const Me = r().codeBlockData[Ie];
      return Object.values(Me).some((De) => !De.isNotApplied);
    }) : [];
  }), h = ecf(i, { includeSubComposers: true }), p = vt(() => a() ? [] : h().filter((we) => !fPn(we.uri.toString(), u(), e.workspaceContextService))), g = vt(() => {
    const we = p();
    return we.length > 0 ? [...new Set(we.map((Ie) => Ie.uri.toString()))] : !a() && t.forceVisible?.() && d().length > 0 ? d() : [];
  }, void 0, { equals: Owl }), f = vt(() => Lwl(g())), _ = vt(() => a() ? c() : f().totalCount), { shouldShowCancel: b, shouldShowAcceptAll: y, shouldShowRejectAll: S } = sgs(i), k = vt(() => e.composerDataService.getComposerCapability(t.composerDataHandle, mo.TOOL_FORMER)?.isCurrentlyRunningTerminalInForeground() ?? false), C = vt(() => e.toolCallHumanReviewService.isToolformerCurrentlyWaitingForReview(t.composerDataHandle)), T = vt(() => e.composerDataService.getToolFormer(t.composerDataHandle)), I = vt(() => t.pendingDecisionGroup.length > 0), A = vt(() => t.pendingDecisionGroup.length === 0 ? null : t.pendingDecisionGroup[0].clientSideTool), P = vt(() => {
    if (!I() || !T()) return 0;
    const we = /* @__PURE__ */ new Set();
    for (const Ie of t.pendingDecisionGroup) {
      const Me = T().getBubbleIdByToolCallId(Ie.toolCallId);
      if (!Me) continue;
      const De = T().getBubbleData(Me);
      if (!De) continue;
      const Ne = De.tool;
      if (Ne === Ct.EDIT_FILE) {
        const be = De.params?.relativeWorkspacePath;
        be && we.add(be);
      } else if (Ne === Ct.EDIT_FILE_V2) {
        const be = De.params?.relativeWorkspacePath;
        be && we.add(be);
      }
    }
    return we.size;
  }), M = vt(() => {
    if (!I()) return "Keep All";
    const we = P();
    if (we === 1) {
      const Ie = A();
      return LCn[Ie]?.accept ?? "Keep";
    }
    if (we === 0 && t.pendingDecisionGroup.length === 1) {
      const Ie = A();
      return LCn[Ie]?.accept ?? "Keep";
    }
    return "Keep All";
  }), O = vt(() => {
    if (!I()) return "Undo All";
    const we = P();
    if (we === 1) {
      const Ie = A();
      return LCn[Ie]?.reject ?? "Undo";
    }
    if (we === 0 && t.pendingDecisionGroup.length === 1) {
      const Ie = A();
      return LCn[Ie]?.reject ?? "Undo";
    }
    return "Undo All";
  }), [N, U] = Wt(), j = wEt(N), $ = vt(() => e.keybindingService.lookupKeybinding(Sst)?.getLabel() ?? void 0), H = vt(() => e.keybindingService.lookupKeybinding(BHt)?.getLabel() ?? void 0), G = "Review Changes", q = async () => {
    const Ie = r().createdFromBackgroundAgent?.bcId, Me = Ie !== void 0;
    if (e.analyticsService.trackEvent("review_changes.opened", { entrypoint: "composer_toolbar_button", composer_id: t.composerDataHandle.data.composerId }), Me) {
      await e.reviewChangesService.openOrUpdateReviewChangesEditor(t.composerDataHandle.data.composerId, { fromBackgroundAgent: { bcId: Ie } });
      return;
    }
    await e.reviewChangesService.openOrUpdateReviewChangesEditor(t.composerDataHandle.data.composerId, void 0);
  }, K = vt(() => {
    const we = r();
    if (!we) return false;
    const Ie = e.composerDataService.getComposerData(i()) ?? we;
    return Ie.gitWorktree?.worktreePath && Ie.applied === true ? true : !!(Ie.applied && Ie.appliedDiffs && Ie.appliedDiffs.length > 0);
  }), V = vt(() => p().length > 0), Y = vt(() => !!r()?.gitWorktree?.worktreePath), J = vt(() => Y() ? K() : S() || K()), Q = vt(() => !(Y() || !y())), te = vt(() => {
    const we = t.chatStatus();
    return we === "generating" || we === "applying";
  }), ee = vt(() => {
    if (!Y() || te()) return false;
    const we = r();
    return !we || (e.composerDataService.getComposerData(i()) ?? we).applied === true ? false : V() || t.shouldShowReviewChangesButton;
  }), re = vt(() => !!(t.forceVisible?.() && t.hasAnyFiles() || I() && T() || b() && !t.hasPendingQuestionnaire || J() || Q() || ee() || t.shouldShowReviewChangesButton || t.hasPendingEdits() || t.numFiles() > 0 || k() || C() || t.chatStatus() === "generating" && t.isBlockingUserDecision && !t.hasPendingQuestionnaire)), ie = vt(() => !t.hasPendingQuestionnaire && re()), oe = vt(() => {
    const we = r();
    return we.isApplyingWorktree === true || we.isUndoingWorktree === true;
  }), se = vt(() => {
    const we = r();
    return we.isApplyingWorktree === true || we.isUndoingWorktree === true;
  }), le = vt(() => K() ? "This agent will go back to the worktree" : "Undo all applied worktree changes"), ce = vt(() => {
    const we = r();
    if (!we) return 0;
    const Ie = e.composerDataService.getComposerData(i()) ?? we;
    if (Ie.applied !== true) return 0;
    const Me = Ie.appliedDiffs?.length ?? 0;
    return Me > 0 ? Me : d().length;
  }), [ae, de] = Wt(false);
  Cn(() => {
    const we = r().isApplyingWorktree === true;
    let Ie;
    we ? Ie = window.setTimeout(() => de(true), 1e3) : de(false), On(() => {
      Ie !== void 0 && window.clearTimeout(Ie);
    });
  });
  const he = vt(() => K()), [ge, pe] = Wt(false);
  Cn(() => {
    s(), pe(false);
  }), Cn(() => {
    (!J() || se()) && pe(false);
  }), Cn(() => {
    if (!ge()) return;
    const we = window.setTimeout(() => pe(false), 4e3);
    On(() => window.clearTimeout(we));
  });
  const ve = vt(() => false), [fe, Te, _e] = nye(), Ce = 140, Se = (we) => {
    const Ie = we.getBoundingClientRect();
    return { x: Ie.right - Ce, y: Ie.top - 4 };
  }, Pe = vt(() => {
    const we = [];
    return Y() ? K() && we.push({ id: "undo-action", title: "Undo Apply", isDisabled: se(), hintText: le(), onClick: async () => {
      const Ie = s();
      await e.composerService.undoAllAppliedChanges(Ie), _e();
    } }) : J() && we.push({ id: "undo-action", title: K() ? "Undo Apply" : "Undo", isDisabled: se(), hintText: K() ? le() : void 0, onClick: async () => {
      const Ie = s(), Me = e.composerDataService.getComposerData(i());
      if (Me?.applied && Me?.appliedDiffs && Me.appliedDiffs.length > 0) {
        await e.composerService.undoAllAppliedChanges(Ie);
        return;
      }
      t.onRejectAllOverrideClick ? t.onRejectAllOverrideClick() : n.rejectAll(Ie), _e();
    } }), Q() && we.push({ id: "keep-action", title: "Keep", isDisabled: oe(), hintText: "Accept all changes", onClick: async () => {
      const Ie = s();
      _e(), await n.acceptAll(Ie), await Yst(e, "composer");
    } }), ee() && we.push({ id: "apply-action", title: "Apply", isDisabled: oe(), hintText: "Apply changes to the main working directory", onClick: async () => {
      const Ie = s();
      await e.composerService.applyWorktreeToCurrentBranch(Ie), _e();
    } }), we.length === 0 ? [] : [{ type: "items", items: we }];
  });
  return (() => {
    var we = muf(), Ie = we.firstChild, Me = Ie.firstChild;
    return zu(U, we), Ie.style.setProperty("display", "flex"), Ie.style.setProperty("align-items", "center"), Ie.style.setProperty("width", "100%"), Ie.style.setProperty("height", "26px"), Le(Ie, Ee(Ut, { get when() {
      return zr(() => !t.hasPendingQuestionnaire)() && re();
    }, get children() {
      var De = puf(), Ne = De.firstChild, be = Ne.firstChild;
      return De.addEventListener("mouseup", () => {
        t.isDragging?.() || t.canShowFileList() && t.onToggleFileList();
      }), Ne.style.setProperty("display", "flex"), Ne.style.setProperty("align-items", "center"), Ne.style.setProperty("gap", "4px"), Le(Ne, Ee(Ut, { get when() {
        return t.canShowFileList();
      }, get children() {
        var je = cvs();
        return je.style.setProperty("color", "var(--cursor-icon-secondary)"), je.style.setProperty("font-size", "14px"), je.style.setProperty("flex-shrink", "0"), xn(($e) => {
          var Je = t.isFileListExpanded() ? "rotate(90deg)" : "rotate(0deg)", Ge = Gn.asClassName(yt.chevronRight);
          return Je !== $e.e && (($e.e = Je) != null ? je.style.setProperty("transform", Je) : je.style.removeProperty("transform")), Ge !== $e.t && Er(je, $e.t = Ge), $e;
        }, { e: void 0, t: void 0 }), je;
      } }), be), Le(be, Ee(e2, { fallback: [], get children() {
        return [Ee(Bp, { get when() {
          return t.hasPendingEdits();
        }, get children() {
          var je = auf(), $e = je.firstChild;
          return Le(je, _, $e), Le(je, () => _() === 1 ? "" : "s", null), je;
        } }), Ee(Bp, { get when() {
          return zr(() => !!(Y() && K()))() && ce() > 0;
        }, get children() {
          var je = luf(), $e = je.firstChild, Je = $e.nextSibling, Ge = Je.nextSibling;
          return Le(je, ce, $e), Le(je, () => ce() === 1 ? "" : "s", Je), je;
        } }), Ee(Bp, { get when() {
          return zr(() => !!t.forceVisible?.())() && t.hasAnyFiles();
        }, get children() {
          var je = cuf(), $e = je.firstChild;
          return Le(je, _, $e), Le(je, () => _() === 1 ? "" : "s", null), je;
        } }), Ee(Bp, { get when() {
          return k();
        }, get children() {
          var je = uuf(), $e = je.firstChild;
          return Le(je, Ee(rlt, { show: true }), null), je;
        } }), Ee(Bp, { get when() {
          return C();
        }, get children() {
          var je = duf(), $e = je.firstChild;
          return Le(je, Ee(rlt, { show: true }), null), je;
        } }), Ee(Bp, { get when() {
          return t.chatStatus() === "generating" && t.isBlockingUserDecision && !t.hasPendingQuestionnaire;
        }, get children() {
          var je = huf(), $e = je.firstChild;
          return Le(je, Ee(rlt, { show: true }), null), je;
        } }), Ee(Bp, { get when() {
          return zr(() => t.chatStatus() in uvs && t.chatStatus() !== "completed")() && !(t.hasPendingQuestionnaire && t.chatStatus() === "generating");
        }, get children() {
          var je = cvs();
          return Le(je, () => uvs[t.chatStatus()].label, null), Le(je, Ee(Ut, { get when() {
            return uvs[t.chatStatus()].loading;
          }, get children() {
            return Ee(rlt, { show: true });
          } }), null), je;
        } })];
      } })), xn((je) => {
        var $e = { ...DPi(t.canShowFileList()) }, Je = { color: "var(--cursor-icon-secondary)", ...bYt() };
        return je.e = Ea(De, $e, je.e), je.t = Ea(be, Je, je.t), je;
      }, { e: void 0, t: void 0 }), De;
    } }), Me), Me.style.setProperty("display", "flex"), Me.style.setProperty("align-items", "center"), Me.style.setProperty("justify-content", "flex-end"), Me.style.setProperty("margin", "0px"), Me.style.setProperty("padding", "4px"), Me.style.setProperty("gap", "4px"), Me.style.setProperty("flex-shrink", "0"), Me.style.setProperty("overflow", "visible"), Le(Me, Ee(Ut, { get when() {
      return zr(() => !!I())() && T();
    }, get children() {
      return Ee(ol, { variant: "text", onClick: () => {
        const De = T();
        if (De) for (const Ne of t.pendingDecisionGroup) De.rejectToolCall(Ne.toolCallId);
      }, get style() {
        return LMe();
      }, get hintText() {
        return zr(() => j().width <= MHt)() ? O() + (H() ? " " + H() : "") : void 0;
      }, get children() {
        return [zr(() => O()), zr(() => zr(() => !!(j().width > MHt && H()))() ? " " + H() : "")];
      } });
    } }), null), Le(Me, Ee(Ut, { get when() {
      return zr(() => !!I())() && T();
    }, get children() {
      return Ee(ol, { variant: "secondary", class: "py-0", onClick: () => {
        const De = T();
        if (De) for (const Ne of t.pendingDecisionGroup) De.acceptToolCall(Ne.toolCallId);
      }, get style() {
        return LMe();
      }, get hintText() {
        return zr(() => j().width <= MHt)() ? `${M()} (${Cbe("⏎")})` : void 0;
      }, get children() {
        return [zr(() => M()), zr(() => zr(() => j().width > MHt)() ? " " + Cbe("⏎") : "")];
      } });
    } }), null), Le(Me, Ee(Ut, { get when() {
      return !(I() && T()) && b() && !t.hasPendingQuestionnaire;
    }, get children() {
      return Ee(ol, { variant: "text", onClick: (De) => {
        const Ne = r().createdFromBackgroundAgent?.bcId;
        if (Ne) {
          De.stopPropagation(), De.preventDefault(), e.backgroundComposerService.archiveBackgroundComposer(Ne);
          return;
        }
        const be = e.composerDataService.resolveComposerIdToSelected(s());
        n.cancelCurrentStep(be), e.analyticsService.trackEvent("composer.cancel_chat", { composerId: s(), source: "composer_cancel_button" });
      }, get style() {
        return LMe();
      }, get keybinding() {
        return zr(() => j().width > MHt)() ? $() : void 0;
      }, children: "Stop" });
    } }), null), Le(Me, Ee(Ut, { get when() {
      return zr(() => !!ve())() && (J() || Q() || ee());
    }, get children() {
      return Ee(eb, { get codicon() {
        return yt.ellipsisTwo;
      }, onClick: (De) => {
        De.stopPropagation();
        const Ne = De.currentTarget;
        Te(Se(Ne));
      }, hintText: "More actions", class: "[&>span]:!text-[14px]" });
    } }), null), Le(Me, Ee(Ut, { get when() {
      return zr(() => !ve())() && J();
    }, get children() {
      return Ee(ol, { variant: "text", onClick: () => {
        (async () => {
          if (!ge()) {
            pe(true);
            return;
          }
          pe(false);
          const De = s(), Ne = e.composerDataService.getComposerData(i());
          if (Y() && he()) {
            await e.composerService.undoAllAppliedChanges(De);
            return;
          }
          if (Ne?.applied && Ne?.appliedDiffs && Ne.appliedDiffs.length > 0) {
            await e.composerService.undoAllAppliedChanges(De);
            return;
          }
          Y() || (t.onRejectAllOverrideClick ? t.onRejectAllOverrideClick() : n.rejectAll(De));
        })();
      }, get style() {
        return { ...LMe(), cursor: se() ? "default" : void 0 };
      }, get disabled() {
        return se();
      }, keybinding: void 0, get hintText() {
        return zr(() => !!ge())() ? "Click again to confirm undo" : zr(() => !!he())() ? le() : void 0;
      }, get children() {
        return zr(() => !!ge())() ? "Confirm" : t.rejectAllLabelOverride ?? (he() ? "Undo Apply" : _() > 1 ? "Undo All" : "Undo");
      } });
    } }), null), Le(Me, Ee(Ut, { get when() {
      return zr(() => !ve())() && Q();
    }, get children() {
      return Ee(ol, { get variant() {
        return t.shouldShowReviewChangesButton ? "text" : "secondary";
      }, class: "py-0", onClick: () => {
        (async () => {
          const De = s();
          await n.acceptAll(De), await Yst(e, "composer");
        })();
      }, get style() {
        return { ...LMe(), cursor: oe() ? "default" : void 0 };
      }, showLoadingSpinner: false, get disabled() {
        return oe();
      }, hintText: "Accept all changes", keybinding: void 0, get children() {
        return _() > 1 ? "Keep All" : "Keep";
      } });
    } }), null), Le(Me, Ee(Ut, { get when() {
      return zr(() => !ve())() && ee();
    }, get children() {
      return Ee(ol, { variant: "text", class: "py-0", onClick: () => {
        (async () => {
          const De = s();
          await e.composerService.applyWorktreeToCurrentBranch(De);
        })();
      }, get style() {
        return { ...LMe(), cursor: oe() ? "default" : void 0 };
      }, get showLoadingSpinner() {
        return ae();
      }, get disabled() {
        return oe();
      }, hintText: "Apply changes to the main working directory", keybinding: void 0, children: "Apply" });
    } }), null), Le(Me, Ee(Ut, { get when() {
      return t.shouldShowReviewChangesButton;
    }, get children() {
      return Ee(ol, { variant: "secondary", class: "py-0", onClick: q, get style() {
        return LMe();
      }, hintText: G, get children() {
        return t.reviewButtonText ?? "Review";
      } });
    } }), null), Le(we, Ee(Ut, { get when() {
      return fe() !== null;
    }, get children() {
      return Ee(vMe, { get position() {
        return fe();
      }, onClose: _e, get sections() {
        return Pe();
      }, width: Ce });
    } }), null), Le(we, Ee(Ut, { get when() {
      return zr(() => !!t.isFileListExpanded())() && t.canShowFileList();
    }, get children() {
      return Ee(O$k, { composerDataHandle: i, get groupedFiles() {
        return f();
      } });
    } }), null), xn((De) => {
      var Ne = { ...t.styles }, be = ie() ? "space-between" : "flex-end";
      return De.e = Ea(we, Ne, De.e), be !== De.t && ((De.t = be) != null ? Ie.style.setProperty("justify-content", be) : Ie.style.removeProperty("justify-content")), De;
    }, { e: void 0, t: void 0 }), we;
  })();
}
var FIl, Vcf, Kcf, Ycf, Xcf, Zcf, Qcf, Jcf, euf, tuf, nuf, iuf, cvs, ruf, CMn, suf, BIl, ouf, auf, luf, cuf, uuf, duf, huf, puf, muf, guf, bYt, DPi, uvs, 