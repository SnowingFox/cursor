// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VoiceDictationServicePlugin.js range:29864152..29956770
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.208Z
// wrapper: ujk deps:18 [E, pi, cI, Ak, vo, J0l, cjk, U0l, t1, Gr, l, cancel]
// declarations: djk, llf, clf, ulf, dlf (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
ujk = L({ "VoiceDictationServicePlugin.js"() {
  "use strict";
  E(), pi(), cI(), Ak(), vo(), J0l(), cjk(), U0l(), alf = (t) => {
    const [e] = t1(), n = Gr(), i = vt(() => Q0l(t.composerId, t.bubbleId)), r = new olf(e);
    let s;
    On(() => {
      s !== void 0 && l() && n.voiceInputService.cancel(), r.reset();
    });
    const o = (...b) => ks(() => {
      const y = n.voiceInputService.getState();
      return b.includes(y.status) && y.ownerId === i();
    }), a = () => o("requesting_permission", "recording"), l = () => o("requesting_permission", "recording", "processing"), c = vt(() => jJg(n.composerDataService, t.composerId, t.bubbleId)), u = vt(() => {
      const b = n.composerDataService.allComposersData.selectedComposerIds;
      return !c() || !b.includes(t.composerId);
    }), d = (b) => {
      const y = b === "mic-open" ? a() : l();
      s === void 0 || !y || (r.reset(), n.voiceInputService.cancel());
    }, h = n.voiceInputService.onTranscriptCommit((b) => {
      s === void 0 || b.ownerId !== ks(i) || r.commit(b.text, b.kind);
    });
    On(() => h.dispose());
    const p = n.voiceInputService.onSubmitRequested((b) => {
      if (s === void 0 || b.ownerId !== ks(i)) return;
      const y = e.getEditorState().read(() => Xg().getTextContent()), S = JSON.stringify(e.getEditorState());
      n.composerChatService.submitChatMaybeAbortCurrent(ks(() => t.composerId), y, { richText: S });
    });
    On(() => p.dispose());
    const g = n.voiceInputService.onStateChanged((b) => {
      if (b.ownerId === ks(i) && (b.status === "requesting_permission" || b.status === "recording")) {
        s ??= e.getEditorState(), ks(u) && d("mic-open");
        return;
      }
      if (b.status !== "idle" && b.status !== "error" || s === void 0) return;
      const y = s;
      s = void 0, b.status === "error" && e.setEditorState(y), r.reset(), b.status === "idle" && ks(c) && e.focus();
    });
    On(() => g.dispose()), Cn(() => {
      u() && d("mic-open");
    });
    const f = e.registerUpdateListener(({ tags: b, dirtyElements: y, dirtyLeaves: S }) => {
      b.has(KEl) || b.has(OPn) || (y.size > 0 || S.size > 0) && d("any");
    });
    On(() => f());
    const _ = e.registerCommand(M6e, () => l() ? (n.voiceInputService.cancel(), true) : false, q2e);
    return On(() => _()), [];
  };
} });
function djk(t) {
  return { id: t.uuid, name: t.filename, url: AAn(t.path, t.loadedAt) };
}
function llf(t) {
  const e = vt(() => t.notification.suggestedMode === "plan"), n = vt(() => t.notification.variant === "control"), i = vt(() => e() ? yt.todos : yt.bug), r = vt(() => e() ? "var(--cursor-text-yellow-primary, #e5c07b)" : "var(--cursor-text-red-primary, #e06c75)"), s = vt(() => e() ? "Plan Mode" : "Debug Mode"), o = () => (() => {
    var a = dlf(), l = a.firstChild, c = l.nextSibling, u = c.nextSibling;
    return a.style.setProperty("display", "flex"), a.style.setProperty("align-items", "center"), a.style.setProperty("gap", "4px"), Le(a, s, c), Le(a, Ee(P7k, { combo: "Shift+Tab" }), null), a;
  })();
  return Ee(Ut, { get when() {
    return n();
  }, get fallback() {
    return Ee(uMn, { ref(a) {
      var l = t.ref;
      typeof l == "function" ? l(a) : t.ref = a;
    }, get icon() {
      return i();
    }, get iconColor() {
      return r();
    }, get description() {
      return o();
    }, get onClick() {
      return t.onClick;
    } });
  }, get children() {
    return Ee(uMn, { ref(a) {
      var l = t.ref;
      typeof l == "function" ? l(a) : t.ref = a;
    }, get description() {
      return o();
    }, get onClick() {
      return t.onClick;
    } });
  } });
}
function clf(t) {
  const e = () => {
    const i = t.pendingNotification();
    return !(!i || i.type === FT.NoInlineDiffsSuggestion || t.hasMessages && !klf.has(i.type));
  };
  let n;
  return Cn(() => {
    const i = t.pendingNotification();
    if (!t.onNotificationVisible || !i) {
      i || (n = void 0);
      return;
    }
    e() && (i.type === FT.ModeNudge && t.shouldShowErrorHere() || i !== n && (n = i, t.onNotificationVisible(i)));
  }), [Ee(Ut, { get when() {
    return e();
  }, get children() {
    return [Ee(Ut, { get when() {
      return t.pendingNotification()?.type === "mcp";
    }, get children() {
      return (() => {
        const i = t.pendingNotification();
        return Ee(uMn, { ref(r) {
          var s = t.notificationRef;
          typeof s == "function" ? s(r) : t.notificationRef = r;
        }, get icon() {
          return i.mcpInfo.icon;
        }, get description() {
          return `Add ${i.mcpInfo.name}`;
        }, onClick: () => t.handleMCPInstall(i.mcpInfo, i.url), get keybinding() {
          return t.keybinding;
        }, get onDismiss() {
          return t.handleNotificationDismiss;
        } });
      })();
    } }), Ee(Ut, { get when() {
      return t.pendingNotification()?.type === "network_access";
    }, get children() {
      return Ee(uMn, { ref(i) {
        var r = t.notificationRef;
        typeof r == "function" ? r(i) : t.notificationRef = i;
      }, get icon() {
        return yt.globe;
      }, description: "Allow network access", get onClick() {
        return t.handleNetworkAccessEnable;
      }, get keybinding() {
        return t.keybinding;
      }, get onDismiss() {
        return t.handleNotificationDismiss;
      } });
    } }), Ee(Ut, { get when() {
      return t.pendingNotification()?.type === "github_auth";
    }, get children() {
      return Ee(uMn, { ref(i) {
        var r = t.notificationRef;
        typeof r == "function" ? r(i) : t.notificationRef = i;
      }, get icon() {
        return yt.github;
      }, description: "Connect GitHub/GitLab", get onClick() {
        return t.handleGitHubAuthConnect;
      }, get keybinding() {
        return t.keybinding;
      }, get onDismiss() {
        return t.handleNotificationDismiss;
      } });
    } }), Ee(Ut, { get when() {
      return t.pendingNotification()?.type === FT.PluginSuggestion;
    }, get children() {
      return (() => {
        const i = t.pendingNotification();
        return Ee(uMn, { ref(r) {
          var s = t.notificationRef;
          typeof s == "function" ? s(r) : t.notificationRef = r;
        }, get icon() {
          return i.pluginLogoUrl || yt.extensions;
        }, get description() {
          return `Add ${i.pluginDisplayName}`;
        }, onClick: () => t.handlePluginSuggestionClick(i), get keybinding() {
          return t.keybinding;
        }, get onDismiss() {
          return t.handleNotificationDismiss;
        } });
      })();
    } }), Ee(Ut, { get when() {
      return zr(() => t.pendingNotification()?.type === FT.ModeNudge)() && !t.shouldShowErrorHere();
    }, get children() {
      return (() => {
        const i = t.pendingNotification();
        return Ee(Ut, { get when() {
          return t.withLayoutPadding;
        }, get fallback() {
          return Ee(llf, { ref(r) {
            var s = t.notificationRef;
            typeof s == "function" ? s(r) : t.notificationRef = r;
          }, notification: i, onClick: () => t.onSwitchMode(i.suggestedMode) });
        }, get children() {
          var r = EPi();
          return r.style.setProperty("display", "flex"), r.style.setProperty("align-items", "center"), r.style.setProperty("padding-left", "8px"), r.style.setProperty("width", "100%"), Le(r, Ee(llf, { ref(s) {
            var o = t.notificationRef;
            typeof o == "function" ? o(s) : t.notificationRef = s;
          }, notification: i, onClick: () => t.onSwitchMode(i.suggestedMode) })), r;
        } });
      })();
    } })];
  } }), Ee(Ut, { get when() {
    return zr(() => !t.shouldShowErrorHere())() && t.shouldShowMCPSuccessNotificationHere();
  }, get children() {
    return Ee(Ut, { get when() {
      return t.withLayoutPadding;
    }, get fallback() {
      return Ee(Baf, { get serverName() {
        return t.mcpSuccessNotification().serverName;
      }, get message() {
        return t.mcpSuccessNotification().message;
      } });
    }, get children() {
      var i = EPi();
      return i.style.setProperty("display", "flex"), i.style.setProperty("align-items", "center"), i.style.setProperty("padding-left", "8px"), i.style.setProperty("padding-right", "8px"), i.style.setProperty("width", "100%"), Le(i, Ee(Baf, { get serverName() {
        return t.mcpSuccessNotification().serverName;
      }, get message() {
        return t.mcpSuccessNotification().message;
      } })), i;
    } });
  } })];
}
function ulf(t) {
  const e = Gr(), { composerDataService: n, composerService: i } = e, r = e.analyticsService, s = URn("new_placeholder", "enabled"), [o] = YB(e.storageService, "chatSubmitOnCmdEnter"), [a] = YB(e.storageService, "modelNudgesEnabled"), l = JI("enable_watch_video_in_ide"), c = vt(() => o() === true), { signedIn: u } = vPn(), [d] = sVe(A_t, e.configurationService, false), [h, p] = Wt(false), { composerDataHandle: g, currentComposer: f, updateCurrentComposer: _, unifiedMode: b, model: y, thinkingLevel: S, composerMode: k } = mPn(() => t.composerDataHandle);
  Cn(() => {
    if (a()) return;
    const gi = f(), Zr = gi.pendingModelNudge !== void 0 && !lEi(gi.pendingModelNudge.experimentName);
    !Zr && gi.pendingAutoSwitchPopup === void 0 && gi.pendingAutoSwitchBanner === void 0 || _({ ...Zr ? { pendingModelNudge: void 0 } : {}, pendingAutoSwitchPopup: void 0, pendingAutoSwitchBanner: void 0 });
  });
  const C = vt(() => f().composerId), T = vt(() => {
    const gi = f().context;
    return (gi?.selectedImages?.length ?? 0) > 0 || (gi?.selectedDocuments?.length ?? 0) > 0 || (gi?.selectedVideos?.length ?? 0) > 0;
  }), I = JI("context_usage_canvas"), [A, P] = Wt(e.cursorAuthenticationService.granularPrivacyModeRawEnum()), M = e.cursorAuthenticationService.onDidPotentiallyChangePrivacyMode(() => {
    P(e.cursorAuthenticationService.granularPrivacyModeRawEnum());
  });
  On(() => M.dispose());
  const O = vt(() => kfs(A())), N = vt(() => {
    const gi = f().createdFromBackgroundAgent?.bcId?.trim();
    return gi === void 0 || gi.length === 0;
  }), U = vt(() => {
    const gi = e.workbenchEnvironmentService.remoteAuthority;
    return !(A6e(gi) === "ssh-remote" || gi?.includes("@ssh-remote+") === true);
  }), j = vt(() => {
    if (!t.bubbleId) return Tfs(f().promptTokenBreakdown);
  }), $ = vt(() => j() !== void 0), [H, G] = Wt(false);
  Cn(() => {
    $() || G(false);
  }), Cn(V_(C, () => {
    G(false);
  }, { defer: true }));
  const q = () => {
    const { agentClientService: gi, agentTranscriptService: Zr } = e.instantiationService.invokeFunction((vs) => ({ agentClientService: vs.get(Q4e), agentTranscriptService: vs.get(I2i) }));
    return Nof({ model: j(), composer: f(), composerHandle: g(), storageService: e.storageService, canvasService: e.canvasService, notificationService: e.notificationService, agentClientService: gi, agentTranscriptService: Zr, privacyMode: A(), workspaceRoots: e.workspaceContextService.getWorkspace().folders.map((vs) => ({ path: vs.uri.fsPath, name: vs.name })), analytics: { service: e.analyticsService, viewMode: "classic" }, focusCategoryId: Sfs });
  }, K = vt(() => f().fullConversationHeadersOnly.length === 0), [V, Y] = e6k();
  Cn(V_(() => f()?.fullConversationHeadersOnly.length ?? 0, (gi, Zr) => {
    if (Zr !== 0 || gi === 0) return;
    const vs = g();
    if (vs.data.isBestOfNParent) return;
    const Jo = vs.data.modelConfig?.modelName;
    if (!Jo || !Jo.includes(",")) return;
    const ac = Jo.split(",").map((Pc) => Pc.trim()).find((Pc) => Pc.length > 0) ?? "default";
    e.modelConfigService.setModelConfigForComposer(vs, { ...vs.data.modelConfig ?? { maxMode: false, modelName: ac }, modelName: ac });
  }, { defer: true }));
  const J = vt(() => !!t.resolvedBcId), Q = vt(() => J() || !!f().createdFromBackgroundAgent?.bcId || !!f().pendingBackgroundAgent), te = vt(() => Q() ? "background" : b()), ee = w2i(g), re = vt(() => ee() === "generating" || ee() === "applying"), ie = A0(e.composerStorageService.state), oe = vt(() => ie()?.shouldHighlightSelectedComposer ?? false), se = vt(() => {
    const gi = e.composerDataService.selectedComposerId;
    return oe() && C() === gi ? { outline: "5px solid var(--vscode-focusBorder)", boxShadow: "0 0 10px var(--vscode-focusBorder)", transition: "outline 0.3s ease, box-shadow 0.3s ease" } : {};
  });
  Xc(() => {
    e.usageLimitPolicyStatusService.refetch();
  });
  const le = Uwm.bindTo(e.contextKeyService), ce = rCt.bindTo(e.contextKeyService);
  On(() => {
    le.reset(), ce.reset();
  });
  const ae = vt(() => t.bubbleId), de = vt(() => t.nonReactiveInputBoxDelegate ? t.nonReactiveInputBoxDelegate : e.composerViewsService.getInputDelegate(C())), he = (gi) => {
    e.composerViewsService.pinComposerEditor(C(), gi);
  }, [ge, pe] = Wt(false), [ve, fe] = Wt(false), [Te, _e] = Wt(void 0), [Ce, Se] = Wt(null), Pe = (gi) => {
    Se(gi);
  }, [we, Ie] = Wt(false), [Me, De] = Wt(-1), [Ne, be] = Wt(false), [je, $e] = Wt(void 0), [Je, Ge] = Wt(false), [xe, Oe] = Wt(false), [ct, Ye] = Wt(false);
  Cn(() => {
    const gi = (Zr) => {
      Zr && (e.aiService.refreshDefaultModels(), e.aiService.performDefaultModelRequest());
    };
    e.cursorAuthenticationService.addLoginChangedListener(gi), On(() => {
      e.cursorAuthenticationService.removeLoginChangedListener(gi);
    });
  }), Cn(() => {
    le.set(ct());
  });
  const [Ve, Xe] = Wt(null);
  Cn(() => {
    const gi = (Zr) => {
      Xe(Zr.target);
    };
    e.window.document.addEventListener("pointerdown", gi, true), On(() => {
      e.window.document.removeEventListener("pointerdown", gi, true);
    });
  });
  const lt = vt(() => t.isInputFocused !== void 0 ? t.isInputFocused() : ge()), He = (gi) => {
    t.setIsInputFocused ? t.setIsInputFocused(gi) : pe(gi);
  }, gt = (gi) => {
    ae() ? n.updateComposerBubble(g(), ae(), gi) : _(gi);
  }, ht = vt(() => t.bubbleId ? n.getComposerBubble(g(), t.bubbleId)?.richText ?? "" : f()?.richText), Ae = vt(() => t.bubbleId ? n.getComposerBubble(g(), t.bubbleId)?.text ?? "" : f()?.text ?? ""), { shouldShowAcceptAll: ot } = sgs(g), Be = AC($Ve), Ue = AC(qEl), it = vt(() => {
    const gi = f();
    if (!gi) return;
    if (gi.hasCorruptedCheckpoints) return { title: "Conversation Corrupted", message: "This conversation has corrupted data. You can view and export it, but new messages cannot be sent. Please start a new conversation to continue.", extraButtons: [{ label: "Start New Chat", variant: "primary", callback: () => {
      e.commandService.executeCommand("composer.createNew");
    } }] };
    if (gi.submitErrorDetails !== void 0) return gi.submitErrorDetails;
    if (gi.text !== "") return;
    const Zr = gi.fullConversationHeadersOnly;
    if (t.bubbleId) {
      const Jo = ks(() => {
        const ac = Zr.findIndex((Pc) => Pc.bubbleId === t.bubbleId);
        if (ac !== -1) {
          const Pc = gi.conversationMap;
          for (let Ed = ac + 1; Ed < Zr.length; Ed++) if (Pc[Zr[Ed].bubbleId]?.type === bs.AI) return Zr[Ed].bubbleId;
        }
      });
      if (Jo) return gi.conversationMap[Jo]?.errorDetails;
    }
    const vs = Ue?.();
    if (vs) return n.getComposerBubble(g(), vs)?.errorDetails;
  }), qe = iJg(g), pt = vt(() => {
    const gi = e.composerNotificationService.notification_reactive();
    if (!(gi && gi.composerId !== C())) return gi;
  }), dt = vt(() => e.mcpInstallationService.mcpSuccessNotification_reactive()), [ft, bt] = Wt(false);
  Cn(() => {
    const gi = pt();
    gi && gi.type === "mcp" && bt(false);
  }), Cn(() => {
    const gi = pt(), Zr = Ae();
    if (gi && gi.type === "mcp") {
      const vs = Zr.includes(gi.url);
      vs && !ft() ? bt(true) : !vs && ft() && (e.mcpInstallationService.clearMCPNotification(), bt(false));
    }
  });
  const St = vt(() => it()?.requestId ?? f()?.latestChatGenerationUUID), { title: Et, detail: kt, allowCommandLinksPotentiallyUnsafe: xt, primaryButton: Pt, secondaryButton: Dt, tertiaryButton: Vt, icon: tn, hideKeybindings: un, children: kn } = r_l({ error: () => it()?.error, generationUUID: St, errorMessage: () => it()?.message, errorStackTrace: () => it()?.stackTrace, errorTitle: () => it()?.error ? void 0 : it()?.title, startNewChatWithSummary: qe, composerHandle: g(), bubbleId: ae(), showUsagePricingOptions: () => it()?.showUsagePricingOptions, extraButtons: () => it()?.extraButtons, connectCode: () => it()?.connectCode }), oi = vt(() => {
    const gi = tn();
    return gi ? `${Gn.asClassName(gi)} ${tn() === yt.warningTwo ? "text-[var(--vscode-editorWarning-foreground)]" : ""}` : null;
  }), Fn = AC(GEl), Qt = (gi) => {
    const Zr = f();
    if (!(Ue?.() !== void 0) && gi) return false;
    const Jo = Fn?.();
    if (Jo === void 0) return !t.bubbleId;
    if (t.bubbleId === Jo) return true;
    const ac = Zr.editingBubbleId === Jo;
    return t.bubbleId ? false : !ac;
  }, Sn = vt(() => ie()?.shouldAlwaysShowError ? true : it() ? f().hasCorruptedCheckpoints || f().submitErrorDetails !== void 0 ? Qt(false) : Qt(true) : false), $n = vt(() => {
    const gi = it()?.error;
    if (gi?.details?.additionalInfo?.autoSwitchToModel) return false;
    const Zr = hRn(gi);
    return Zr === "usage-limit-compact" || Zr === "usage-limit-full";
  }), Mn = vt(() => xhl(it()?.error)), Un = vt(() => e.cursorAuthenticationService.reactiveMembershipType() === Fr.ENTERPRISE), Xn = vt(() => t.bubbleId === void 0), Ti = jVt(Ape, "group", () => Xn() && it() !== void 0 && o1g(it()?.error) && !Un()), bi = JI("limit_hit_ui_kill_switch"), Qn = URn(Ape, "group"), ni = vt(() => {
    const gi = e.usageLimitPolicyStatusService.autoSwitchNoticeComposerId();
    return gi !== void 0 && gi !== C();
  }), pn = vt(() => ni() ? void 0 : e.usageLimitPolicyStatusService.status()?.stage), yn = vt(() => bCe({ group: Qn(), killSwitch: bi(), isEnterprise: Un() })), Ln = vt(() => $n() && yn()), xi = vt(() => Xn() && Ln()), Ci = vt(() => hOm({ group: Qn(), killSwitch: bi(), isEnterprise: Un(), stage: pn() })), En = vt(() => YU1({ group: Qn(), killSwitch: bi(), isEnterprise: Un(), stage: pn() })), Dn = vt(() => Ln() || Ci()), Si = vt(() => Dn()), Ui = vt(() => Si() && Xn()), Nn = vt(() => {
    const gi = bCe({ group: Ti(), killSwitch: bi(), isEnterprise: Un() });
    return s1g({ errorDetails: it()?.error, isLimitHitTreatment: gi, replacementNoticeComposerId: e.usageLimitPolicyStatusService.autoSwitchNoticeComposerId(), composerId: C() });
  }), ci = vt(() => Xn() && it() !== void 0 && Mn() && bCe({ group: Ti(), killSwitch: bi(), isEnterprise: Un() })), Pi = vt(() => Xn() && it() !== void 0 && Ahl(it()?.error)), vi = vt(() => o1g(it()?.error) && yn()), Yi = vt(() => vOm({ limitType: it()?.error?.details?.additionalInfo?.configureSpendLimitKind, polled: e.usageLimitPolicyStatusService.status() })), Bn = vt(() => {
    const gi = it()?.error, Zr = hRn(gi), vs = e.usageLimitPolicyStatusService.status();
    return fOm({ dismissible: true, canAdjustOnDemand: Zr === "usage-limit-full", limitType: gi?.details?.additionalInfo?.configureSpendLimitKind, resetAtMs: vs?.resetAtMs, resetDaysRemaining: vs?.resetDaysRemaining, polled: vs });
  }), Tn = vt(() => e.usageLimitPolicyStatusService.status()?.stage !== Pk.AUTO_SWITCH ? false : e.usageLimitPolicyStatusService.autoSwitchNoticeComposerId() === C()), Zn = vt(() => Xn() && Tn() && bCe({ group: Qn(), killSwitch: bi(), isEnterprise: Un() })), [tr, hi] = Wt(false), ui = vt(() => tr() ? Qt(false) : false), Ni = vt(() => {
    if (t.bubbleId) return;
    const gi = e.serverConfigService.serverConfigStore.inferenceProviderWarnings;
    if (!gi?.length) return;
    const Zr = f().modelConfig?.modelName || "default", vs = Zr.includes(",") ? Zr.split(",").map((Jo) => Jo.trim()) : [Zr];
    for (const Jo of gi) if (!(!Jo.message || !Jo.affectedModels?.length) && Jo.affectedModels.some((ac) => vs.includes(ac))) return { message: Jo.message, fallbackModel: Jo.fallbackModel, trigger: Jo.trigger ?? ckr.ON_SELECT };
  }), [cr, fs] = Wt(false), mi = vt(() => {
    const gi = Ni();
    return !gi || cr() ? false : gi.trigger === ckr.ON_ERROR ? Sn() : true;
  }), [di, Mr] = Wt(void 0);
  Cn(() => {
    const gi = C();
    if (!e.composerViewsService.getModelConfirmation(gi)) {
      const Jo = Dh(e.storageService, "pendingModelConfirmation");
      Jo && Jo.composerId === gi && (Sgs(e.storageService).includes(Jo.key) || e.composerViewsService.setModelConfirmation(gi, { title: Jo.title, body: Jo.body, key: Jo.key, blocksSubmission: Jo.blocksSubmission, priorModelConfig: Jo.priorModelConfig, priorSurface: Jo.priorSurface }));
    }
    const Zr = e.composerViewsService.getModelConfirmation(gi);
    Mr(Zr);
    const vs = e.composerViewsService.onModelConfirmationChanged((Jo) => {
      Jo.composerId === gi && Mr(e.composerViewsService.getModelConfirmation(gi));
    });
    On(() => vs.dispose());
  });
  const jr = () => {
    const gi = C();
    e.composerViewsService.setModelConfirmation(gi, void 0), Dh(e.storageService, "pendingModelConfirmation")?.composerId === gi && gf(e.storageService, "pendingModelConfirmation", null);
  }, Ur = (gi) => {
    kgs(e.storageService, gi);
  }, Ws = () => {
    const gi = di();
    gi && (e.analyticsService.trackEvent("composer.model_confirmation_dialog.action_clicked", { composerId: C(), key: gi.key, action: "go_back" }), e.modelConfigService.setModelConfigForComposer(g(), gi.priorModelConfig, gi.priorSurface), jr());
  }, jo = () => {
    const gi = di();
    gi && (e.analyticsService.trackEvent("composer.model_confirmation_dialog.action_clicked", { composerId: C(), key: gi.key, action: "continue" }), Ur(gi.key), jr());
  }, Ia = vt(() => di() ? Qt(false) : false), [ga, zs] = Wt(false);
  Cn(() => {
    const gi = di(), Zr = Ia();
    if (!gi || !Zr) {
      zs(false);
      return;
    }
    ga() || (e.analyticsService.trackEvent("composer.model_confirmation_dialog.rendered", { composerId: C(), key: gi.key }), zs(true));
  });
  const [Vs, Ra] = Wt(0), [ur, wr] = Wt(0), Es = vt(() => {
    const gi = [Vs(), ur(), 0], Zr = Math.max(...gi);
    return Zr <= 0 ? 0 : Zr;
  });
  Cn(() => {
    if (t.setPopupHeight) {
      if (t.role !== "bottom") {
        t.setPopupHeight(0);
        return;
      }
      t.setPopupHeight(Es());
    }
  });
  const eo = vt(() => !!pt() && !it() && !ui() && !di() ? Qt(false) : false), ts = vt(() => t.role !== "bottom" && !t.hideBottomOptions && (!En() || eo()) && !Sn() && !ui() && !di() && Qt(false)), rr = vt(() => eo() && pt()?.type === FT.NoInlineDiffsSuggestion), [Gs, Vr] = Wt(false);
  Cn(() => {
    eo() && pt()?.type === "github_auth" ? Gs() || (e.analyticsService.trackEvent("github_auth.cta_shown"), Vr(true)) : Vr(false);
  });
  const So = async (gi, Zr) => {
    try {
      let vs;
      if (gi.name === uqt) vs = { command: "npx", args: ["-y", "@playwright/mcp@latest"] }, await e.commandService.executeCommand("mcp.deeplinkInstall", gi.name, vs), await e.mcpInstallationService.installProposedServer(), e.mcpInstallationService.showMCPSuccessNotification(gi.name), setTimeout(() => {
        e.mcpInstallationService.clearMCPNotification();
      }, 100);
      else {
        if (e.mcpInstallationService.getButtonLabelForMCPServer(gi) === "Connect") {
          const ac = e.mcpInstallationService.findMCPServerAuthUrl(gi);
          if (ac) {
            e.openerService.open(ac), e.mcpInstallationService.clearMCPNotification();
            return;
          }
        }
        vs = { url: gi.endpoint }, e.commandService.executeCommand("aiSettings.action.open", "mcp"), e.commandService.executeCommand("mcp.deeplinkInstall", gi.name, vs), e.mcpInstallationService.clearMCPNotification();
      }
      e.analyticsService.trackEvent("mcp.discovery.clicked", { serverName: gi.name });
    } catch (vs) {
      e.composerLogService.error("Failed to install MCP server:", vs);
    }
  }, na = async () => {
    try {
      Pck(e);
    } catch (gi) {
      e.composerLogService.error("Failed to enable network access:", gi);
    }
  }, ll = async () => {
    try {
      e.analyticsService.trackEvent("github_auth.connect_clicked", { entrypoint: "composer_cta" }), await e.githubPRService.triggerGitHubLogin() && (e.analyticsService.trackEvent("github_auth.connected", { entrypoint: "composer_cta" }), e.composerNotificationService.dismissNotification());
    } catch (gi) {
      e.composerLogService.error("Failed to connect GitHub:", gi);
    }
  }, Ol = (gi) => {
    const Jo = (e.instantiationService.invokeFunction((Pc) => Pc.get(VI)).pluginsCache.get()?.allMarketplacePlugins ?? []).find((Pc) => Pc.id === gi.pluginId);
    if (!Jo) {
      e.notificationService.notify({ severity: Yn.Error, message: `Plugin "${gi.pluginName}" could not be found. It may have been removed from the marketplace.` });
      return;
    }
    const ac = Number(Jo.id);
    if (Number.isInteger(ac) && t.onPluginSuggestionAccepted) {
      const Pc = NMe(Jo);
      e.analyticsService.trackEvent("marketplace.plugin_nudge_clicked", { pluginName: Pc.name, pluginId: String(Pc.id) }), t.onPluginSuggestionAccepted(Pc);
    }
    e.composerNotificationService.dismissNotification();
  }, ia = () => {
    const gi = pt();
    if (gi) if (gi.type === "network_access") e.networkAccessNotificationService.dismissSuggestion(), e.analyticsService.trackEvent("network_access.dismissed");
    else if (gi.type === "github_auth") e.composerNotificationService.dismissNotification(), e.analyticsService.trackEvent("github_auth.cta_dismissed");
    else if (gi.type === FT.ModeNudge) e.composerNotificationService.dismissNotification(), e.analyticsService.trackEvent("composer.suggested_mode_switch.opt_out", { fromMode: gi.suggestedMode, composerId: C() });
    else if (gi.type === FT.MCP) {
      const Zr = gi;
      e.mcpInstallationService.dismissMCPServer(Zr.mcpInfo.name), e.composerNotificationService.dismissNotification();
    } else (gi.type === FT.NoInlineDiffsSuggestion || gi.type === FT.PluginSuggestion) && e.composerNotificationService.dismissNotification();
  }, co = () => {
    e.diffDecorationVisibilityService.setNoInlineDiffsSetting(true), e.composerNotificationService.dismissNotification();
  }, Mi = (gi) => {
    const Zr = g();
    e.composerModesService.setComposerUnifiedMode(Zr, gi), e.composerNotificationService.dismissNotification();
    const vs = gi === "plan" ? { planModeSuggestionUsed: true } : { debugModeSuggestionUsed: true };
    e.composerDataService.updateComposerData(Zr, vs);
    const Jo = gi === "plan" ? "composer.plan_mode.entry_point" : "composer.debug_mode.entry_point";
    e.analyticsService.trackEvent(Jo, { entrypoint: "nudge_click", model: Zr.data.modelConfig?.modelName || "unknown", composerId: C() });
  }, vn = () => !(!eo() || t.role === "bottom" && (t.toolbarHeight?.() ?? 0) > 0), [zn, _i] = Wt(), sr = () => {
    if (!vn()) return false;
    const gi = zn();
    return gi ? (gi.click(), true) : false;
  }, Gi = vt(() => (c(), e.keybindingService.lookupKeybinding(O0n, e.contextKeyService, true)?.getLabel() ?? void 0)), ko = e.composerNotificationService.onAcceptNotification(() => {
    sr();
  });
  On(() => ko.dispose());
  const As = vt(() => !!dt() && !it() && !ui() && !pt() ? Qt(false) : false), [Fs, Qo] = Wt(null), hl = async (gi) => {
    if (Si()) return;
    const Zr = di();
    if (Zr?.blocksSubmission) return;
    Zr && !Zr.blocksSubmission && (Ur(Zr.key), jr());
    const vs = f().pluginFlowState;
    if (vs) {
      if (vs.step === "pending") {
        const ac = g();
        if (ac && vs.selectedPlugin && (ac.setData("pluginFlowState", { step: "confirm", action: vs.action, selectedPlugin: vs.selectedPlugin }), !t.bubbleId)) {
          const Pc = vs.selectedPlugin.slashCommandValue ?? vs.selectedPlugin.name, Ed = vs.action === "add" ? `/add-plugin ${Pc}` : `/remove-plugin ${Pc}`, wp = Fs(), zm = wp ? JSON.stringify(wp.getEditorState()) : Ed, wa = { ...J_(), text: Ed, richText: zm };
          n.appendComposerBubbles(ac, [wa]), e.composerViewsService.triggerScrollToBottom(ac), wp && wp.update(() => {
            Xg().clear();
          });
        }
      }
      return;
    }
    if (e.repositoryService.grepProvider?.warmup(), t.isBackgroundAgentRun) return;
    if (pt()) {
      if (pt()?.type === FT.NoInlineDiffsSuggestion && Ae().trim() === "") {
        co();
        return;
      }
      e.composerNotificationService.clearNotification();
    }
    if (dt() && e.mcpInstallationService.clearMCPSuccessNotification(), gi?.modifierStatus && hxn(gi.modifierStatus) && Sn()) {
      const ac = Dt();
      if (ac) {
        ac.onClick();
        return;
      }
    }
    if (!u()) {
      e.cursorAuthenticationService.login(), e.commandService.executeCommand(vP, "general");
      return;
    }
    if (t.onSubmitCompleteOverride && t.onSubmitCompleteOverride(), t.isInputBoxForHumanFeedback) return;
    const Jo = g();
    {
      const ac = e.composerDataService.getComposerCapability(Jo, mo.QUEUING), Pc = ac && ac.getQueueItemsReactive().length > 0;
      let Ed = Fs();
      Ed && (S3p() !== null && await Promise.resolve(), Ed = Fs(), Ed && ogs(Ed));
      const wp = Ed ? B0l(Ed) : Ae();
      if (!t.bubbleId && /^(?:\/summarize|\/compact)\s*$/i.test(wp.trim()) && !T()) {
        Ed && Ed.update(() => {
          Xg().clear();
        }), e.composerChatService.triggerManualSummarization(Jo);
        return;
      }
      const zm = SIt(f());
      if (zm) {
        const ry = f(), zk = ry.conversationState?.goalState, Vk = ry.createdFromBackgroundAgent?.bcId === void 0 && zk !== void 0 && (vki(zk) || oYr(zk)), bI = XYg({ session: zm, draftObjective: wp, currentGoal: zk ? { id: zk.goalId, objective: zk.objective } : void 0, canMutate: Vk });
        if (bI.action === "keep-editing") return;
        if (bI.action === "cancel-stale") {
          C_(zm), e.notificationService.notify({ severity: Yn.Error, message: "Failed to update the goal." });
          return;
        }
        if (bI.action === "cancel-unchanged") {
          C_(zm);
          return;
        }
        try {
          await e.composerAgentService.updateGoalObjective(Jo.composerId, bI.objective), C_(zm);
        } catch (ST) {
          e.structuredLogService.error("composer", "Goal mutation failed", ST instanceof Error ? ST : new Error(String(ST))), e.notificationService.notify({ severity: Yn.Error, message: "Failed to update the goal." });
        }
        return;
      }
      const wa = t.bubbleId;
      let cd = true, Og = true;
      const Of = wa ? i.canComposerSubmit(Jo, wa) : i.canComposerSubmit(Jo);
      if (!t.bubbleId) {
        const ry = e.toolCallHumanReviewService.getReviewModelForLastBubbleUnderReviewUntracked(g()), zk = ry?.getKind() === J2e.PLAN && Of;
        if (ry?.getHighlightedOption() && !zk) {
          ry.setSelectedOption(ry.getHighlightedOption());
          return;
        }
      }
      const Ev = wp.trim() !== "" || T(), Q1 = $X(f()) !== void 0;
      if (!Ev && Pc && !Q1) {
        ac.handleEmptyPromptEnter();
        return;
      }
      if (!Of && !Ev) return;
      let $_;
      if (wa) {
        if (ZJm(te()) && ($_ = await e.composerCheckpointService.validateCheckpointContent(Jo, wa), cd = $_.isSame, !cd && f().currentBubbleId !== wa)) {
          const ry = await e.prettyDialogService.openDialog({ title: "Revert files to this message?", message: "Later messages in this chat will be removed. File changes after this message can be reverted so they match, or kept as they are.", cancelButton: { id: "cancel", label: "Cancel" }, primaryButton: { id: "continue", label: "Revert Files" }, extraButtons: [{ id: "continue-without-reverting", label: "Keep Files", type: "secondary", keybinding: "⇧⏎" }], onCancel: () => {
            de().focus();
          }, width: "480px" });
          if (Og = ry === "continue-without-reverting", ry === "cancel") return;
        }
        e.composerViewsService.focus(C());
      }
      if (t.onSubmit && t.onSubmit(), t.suppressDefaultSubmit) return;
      e.aiService.addToPromptHistory({ prompt: wp, commandType: kIt.COMPOSER });
      const nb = Ed ? JSON.stringify(Ed.getEditorState()) : ht();
      if (wa) {
        const ry = Jo.data, zk = ry.isBestOfNSubcomposer === true && ry.subagentInfo?.parentComposerId, Vk = e.composerDataService.getRootHandle(Jo), bI = Vk?.composerId ?? ry.composerId, ST = Vk ? e.composerDataService.getComposerData(Vk) : ry, Pm = Vk ? e.composerDataService.getLoadedSubComposerHandles(Vk) : [];
        if (ST && Pm.length > 0) {
          const uS = ST.fullConversationHeadersOnly.findIndex((UR) => UR.type === bs.HUMAN);
          let kT = false;
          if (zk) {
            const UR = ry.fullConversationHeadersOnly.findIndex((GC) => GC.type === bs.HUMAN);
            UR >= 0 && (kT = ry.fullConversationHeadersOnly[UR].bubbleId === wa), !kT && uS >= 0 && (kT = ST.fullConversationHeadersOnly[uS].bubbleId === wa);
          } else uS >= 0 && (kT = ST.fullConversationHeadersOnly[uS].bubbleId === wa);
          if (kT) {
            const UR = ry.composerId, GC = zk ? Pm.filter((eM) => eM.composerId !== UR) : Pm, z2 = Pm.length + 1;
            e.notificationService.notify({ severity: 1, message: `Resubmit for all ${z2} agents?`, actions: { primary: [{ id: "resubmit-all", label: "Resubmit", tooltip: "Resubmit for all agents", class: void 0, enabled: true, run: async () => {
              const eM = GC.map((JT) => e.composerChatService.abortChatAndWaitForFinish(JT));
              zk && Vk && eM.push(e.composerChatService.abortChatAndWaitForFinish(Vk)), await Promise.all(eM);
              const Zx = GC.map((JT) => {
                const vr = e.composerDataService.getComposerData(JT)?.fullConversationHeadersOnly.find((gc) => gc.type === bs.HUMAN)?.bubbleId;
                return e.composerChatService.submitChatMaybeAbortCurrent(JT.composerId, wp, { richText: nb, bubbleId: vr, shouldCheckout: !Og, modifierKeyStatus: gi?.modifierStatus });
              });
              if (bI && zk) {
                const JT = uS >= 0 ? ST.fullConversationHeadersOnly[uS].bubbleId : void 0;
                Zx.push(e.composerChatService.submitChatMaybeAbortCurrent(bI, wp, { richText: nb, bubbleId: JT, shouldCheckout: !Og, modifierKeyStatus: gi?.modifierStatus }));
              }
              await Promise.all(Zx);
            } }] } });
          }
        }
      }
      const J1 = gi?.modifierStatus?.altKey === true && gi?.modifierStatus?.shiftKey === true ? "composer-1" : void 0, qk = e.composerDataService.getComposerData(Jo)?.pendingCreateWorktree === true;
      await e.composerChatService.submitChatMaybeAbortCurrent(Jo.data.composerId, wp, { richText: nb, bubbleId: wa, shouldCheckout: !Og && !cd, checkpointValidation: $_, modifierKeyStatus: gi?.modifierStatus, ...J1 ? { modelOverride: J1 } : {} }), qk && e.composerDataService.updateComposerData(Jo, { pendingCreateWorktree: false });
    }
  };
  let lr;
  const mr = O0l(() => f().isNAL === true), Bi = vt(() => t.supports ? t.supports : mr()), Hr = vt(() => {
    const gi = f().pluginFlowState;
    return gi ? !(gi.action === "add" && (gi.step === "search" || gi.step === "pending")) : true;
  }), Ns = L0l(g, Bi, ae() ? ae : void 0), { images: Io, deleteLastImage: fa } = FFk(g, Ns, { bubbleId: ae() });
  Cn(() => {
    f().composerId, fe(true);
  }), Cn(V_(() => t.forceText, () => {
    fe(true);
  }, { defer: true })), Xc(() => {
    const gi = new Nt();
    gi.add(e.composerEventService.onContextRemoved((Zr) => {
      const { composerId: vs, bubbleId: Jo, removedMentionIds: ac } = Zr;
      vs !== g().data.composerId || Jo !== ae() || _e(ac);
    })), gi.add(e.composerEventService.onShouldForceText((Zr) => {
      const { composerId: vs, bubbleId: Jo } = Zr;
      vs !== C() || Jo !== ae() || fe(true);
    })), On(() => {
      gi.dispose();
    });
  });
  const Ls = vt(() => t.bubbleId ? n.getComposerBubble(g(), t.bubbleId)?.context ?? Uy() : f().context), po = vt(() => Ls().selectedVideos ?? []), ka = vt(() => po().map(djk)), Ms = vt(() => Ls().selectedDocuments ?? []), Go = vt(() => Ms().map((gi) => ({ id: gi.uuid, name: gi.filename }))), Fl = (gi) => {
    gi.url && RPn({ videoUrl: gi.url, title: gi.name, instantiationService: e.instantiationService, portalElement: e.portalElement });
  }, Gc = (gi) => {
    const Zr = po().findIndex((vs) => vs.uuid === gi);
    Zr < 0 || Ns().removeVideoAttachment(Zr, true);
  }, cu = (gi) => {
    const Zr = Ms().findIndex((vs) => vs.uuid === gi);
    Zr < 0 || Ns().removeDocumentAttachment(Zr, true);
  }, La = (gi, Zr = "Document") => {
    if (gi.size > tfg) {
      e.notificationService.notify({ severity: Yn.Error, message: `${Zr} file is too large (${(gi.size / (1024 * 1024)).toFixed(2)}MB). Maximum size is 10MB.` });
      return;
    }
    (async () => {
      try {
        const vs = await WPg(gi, g().data.composerId, e);
        if (vs === void 0) return;
        Ns().addDocumentAttachment(vs);
      } catch (vs) {
        e.structuredLogService.error("composer", `Failed to attach ${Zr} file`, vs instanceof Error ? vs : new Error(String(vs))), e.notificationService.notify({ severity: Yn.Error, message: `Failed to attach ${Zr} file. Please try again.` });
        return;
      }
      requestAnimationFrame(() => {
        de().focus(), Fs()?.focus();
      });
    })();
  }, yl = (gi) => {
    (async () => {
      try {
        const Zr = await Xvl(gi, g().data.composerId, e);
        if (Zr === void 0) return;
        Ns().addVideoAttachment(Zr);
      } catch (Zr) {
        e.structuredLogService.error("composer", "Failed to attach video file", Zr instanceof Error ? Zr : new Error(String(Zr))), e.notificationService.notify({ severity: Yn.Error, message: "Failed to attach video file. Please try again." });
        return;
      }
      requestAnimationFrame(() => {
        de().focus(), Fs()?.focus();
      });
    })();
  }, rh = () => {
    const gi = po();
    return gi.length > 0 ? (Ns().removeVideoAttachment(gi.length - 1, true), true) : fa();
  }, Bl = ((...gi) => {
    if (t.isBackgroundAgentRun) return;
    const Zr = ae();
    Zr ? n.updateComposerDataSetStore(g(), (vs) => vs("conversationMap", Zr, "context", ...gi)) : g().setData("context", ...gi);
  }), ai = wEt(() => lr, { width: 1e3, height: 0 }), Jr = (gi) => {
    if (gi.type === FT.PluginSuggestion) return;
    const Zr = gi.type === FT.ModeNudge ? `mode_nudge_${gi.variant}` : gi.type;
    e.analyticsService.trackEvent("composer.notification_shown", { notificationType: Zr, model: f().modelConfig?.modelName || "unknown", composerId: C() });
  }, Br = (gi) => {
    pt() && e.composerNotificationService.clearNotification(), dt() && e.mcpInstallationService.clearMCPSuccessNotification(), e.agentLayoutService.createNewComposer({ openInNewTab: gi ?? false, source: "composer_header" });
  }, oa = vt(() => `f${f().composerId.replaceAll("-", "")}${Ai().replaceAll("-", "")}unifieddropdown`), pl = vt(() => `f${f().composerId.replaceAll("-", "")}${Ai().replaceAll("-", "")}unifiedmodeldropdown`), Tl = [$2p, N0n, UHr, Zhn, dbe, M0n, Hbi, jHr, $Hr, D0n, H2p, Gbi, LRn, Sst, HHr, RDa], [Gl, dc] = Wt({ altKey: false, ctrlKey: false, metaKey: false, shiftKey: false }), Qd = (gi) => !c() || gi.shiftKey ? gi : gi.metaKey || gi.ctrlKey ? { altKey: gi.altKey, shiftKey: gi.shiftKey, metaKey: false, ctrlKey: false } : gi, Sp = vt(() => Qd(Gl())), Rg = vt(() => {
    const gi = e.composerDataService.getComposerCapability(g(), mo.QUEUING);
    return gi ? gi?.getQueueMessageBehavior(Sp()) : { behavior: "stop-and-send", isModifierOverride: false };
  });
  Cn(() => {
    const gi = Fs();
    if (!gi) return;
    const Zr = gi.getRootElement();
    if (!Zr) return;
    const vs = (ac) => {
      dc({ altKey: ac.altKey, ctrlKey: ac.ctrlKey, metaKey: ac.metaKey, shiftKey: ac.shiftKey });
    }, Jo = () => {
      dc({ altKey: false, ctrlKey: false, metaKey: false, shiftKey: false });
    };
    Zr.addEventListener("keyup", vs), Zr.addEventListener("blur", Jo), On(() => {
      Zr.removeEventListener("keyup", vs), Zr.removeEventListener("blur", Jo);
    });
  }), Cn(() => {
    const gi = Fs();
    if (!gi) return;
    const Zr = gi.getRootElement();
    if (!Zr) return;
    const vs = (Pc) => {
      const Ed = Pc ?? "";
      e.composerEventService.fireDidPaste({ composerId: C(), text: Ed, length: Ed.length, newlineCount: (Ed.match(/\n/g) ?? []).length, ts: Date.now() });
    }, Jo = (Pc) => {
      const zm = Array.from(Pc.clipboardData?.items || []).find((cd) => cd.kind === "file")?.getAsFile();
      zm && zm.type.startsWith("image/") && e.composerEventService.fireDidPasteImage({ composerId: C(), mimeType: zm.type, ts: Date.now() });
      const wa = Pc.clipboardData?.getData("text/plain") ?? "";
      vs(wa);
    }, ac = (Pc) => {
      const Ed = Pc.dataTransfer?.getData("text/plain") ?? "";
      Ed && vs(Ed);
    };
    Zr.addEventListener("paste", Jo), Zr.addEventListener("drop", ac), On(() => {
      Zr.removeEventListener("paste", Jo), Zr.removeEventListener("drop", ac);
    });
  });
  const bf = vt(() => [{ command: m0t, callback: (gi) => {
    if (dc({ altKey: gi.altKey, ctrlKey: gi.ctrlKey, metaKey: gi.metaKey, shiftKey: gi.shiftKey }), gi.key === "Backspace") {
      if (hxn(Gl())) Ae() === "" && f().status === "generating" && e.storageService.get(aJn, -1, "false") === "false" && (hi(true), e.storageService.store(aJn, "true", -1, 1));
      else if (gi.shiftKey) {
        const ac = Fs();
        ac && Mu(ac, z2e, true);
      }
    }
    const Zr = new rv(gi), vs = e.keybindingService.softDispatch(Zr, Zr.target, true);
    if (vs.kind === 2) {
      if (gi.key === "Enter" && (vs.commandId === IDa || vs.commandId === xDa || vs.commandId === ADa)) return true;
      for (const Jo of Tl) if (Jo === vs.commandId) return true;
      if (vs.commandId === O0n && (Qp().length > 0 || vn() && pt())) return true;
      if (vs.commandId === fhl) return e.commandService.executeCommand(O0n), true;
    }
    return false;
  } }, { command: aLa, callback: (gi) => {
    if (gi.shiftKey) return false;
    const Zr = e.keybindingService.lookupKeybinding(Zhn);
    return Zr?.getDispatchChords()[0] === "meta+[KeyN]" || Zr?.getDispatchChords()[0] === "ctrl+[KeyN]" ? (Br(false), true) : false;
  } }, { command: JGe, callback: (gi) => {
    const Zr = Fs();
    if (Zr && F0l(Zr) !== void 0 || we() || !f()) return false;
    const Jo = t.bubbleId, ac = Jo ? e.composerDataService.getComposerBubbleIndex(g(), Jo) : -1, Pc = (wp) => {
      _({ selectedBubbleId: void 0, editingBubbleId: wp, lastFocusedBubbleId: wp }), VCn({ composerId: C(), bubbleId: wp }), setTimeout(() => {
        e.composerViewsService.getPrevEditingBubbleInputDelegate(C())?.focus();
      });
    }, Ed = e.composerDataService.getLoadedConversation(g());
    if (gi.shiftKey) {
      if (e.toolCallHumanReviewService.isToolformerCurrentlyWaitingForReview(g())) return false;
      const wp = ac === -1 ? Ed.length - 1 : ac - 1;
      for (let zm = wp; zm >= 0; zm--) {
        const wa = Ed[zm];
        if (wa.type === bs.HUMAN) return Pc(wa.bubbleId), true;
      }
      return false;
    }
    if (ac !== -1) {
      for (let wp = ac + 1; wp < Ed.length; wp++) {
        const zm = Ed[wp];
        if (zm.type === bs.HUMAN) return Pc(zm.bubbleId), true;
      }
      return _({ selectedBubbleId: void 0, editingBubbleId: void 0 }), e.composerViewsService.focus(C(), true), true;
    }
    return false;
  } }]), Qp = vt(() => e.composerDataService.getPendingUserDecisionGroup(g()));
  let um = false;
  const Hh = vt(() => ai().width < 200), Bg = vt(() => g().data.fullConversationHeadersOnly.length > 0), Qf = vt(() => !!g().data.gitWorktree), af = vt(() => {
    const Zr = f().fullConversationHeadersOnly;
    if (Zr.length === 0) return false;
    let vs = Zr[Zr.length - 1];
    if (!vs) return false;
    let Jo = n.getComposerBubble(g(), vs.bubbleId);
    if (Zr.length > 1 && Jo && !Jo.text && !Jo.thinking?.text && Jo.capabilityType !== mo.TOOL_FORMER) {
      if (vs = Zr[Zr.length - 2], !vs) return false;
      Jo = n.getComposerBubble(g(), vs.bubbleId);
    }
    if (!Jo || !(Jo.capabilityType === mo.TOOL_FORMER && Jo.toolFormerData?.tool === Ct.ASK_QUESTION)) return false;
    const Pc = Jo.toolFormerData?.additionalData, Ed = Pc && "status" in Pc ? Pc.status : "pending";
    return Ed === "pending" || Ed === "loading";
  }), lf = vt(() => {
    if (f().unifiedMode !== "debug") return false;
    const Zr = n.getLastAiBubble(g(), { skipSummarization: true });
    return Zr ? kms(Zr.text || "").found : false;
  }), $p = vt(() => kTe(f())), hb = vt(() => $X(f())), kg = vt(() => $p() !== void 0), vv = vt(() => hb() !== void 0), C_ = (gi) => SIt(f())?.editId !== gi.editId ? false : (_(vwl(gi)), e.composerEventService.fireShouldForceText({ composerId: f().composerId }), true), Eb = () => {
    const gi = $p();
    gi && k2i(gi, { goal: (Zr) => {
      C_(Zr);
    }, queueItem: (Zr) => {
      _(nOk(Zr)), Zr.restoreSnapshot || e.composerContextService.resetContext(g()), e.composerEventService.fireShouldForceText({ composerId: f().composerId }), e.composerDataService.getComposerCapability(g(), mo.QUEUING)?.tryDispatchNextQueueItem();
    } });
  }, [Ib, iy] = Wt(void 0), [Kc, Fh] = Wt(void 0);
  Cn(() => {
    const gi = de();
    if (!gi) {
      iy(void 0), Fh(void 0);
      return;
    }
    const Zr = () => {
      iy(gi.getSuggestionText()), Fh(gi.getSuggestionReqId());
    };
    Zr();
    const vs = gi.onSuggestionChange(Zr);
    On(() => vs());
  }), Cn(V_(Ib, (gi, Zr) => {
    const vs = gi != null && gi.length > 0, Jo = Zr != null && Zr.length > 0;
    if (vs && !Jo) try {
      r.trackEvent("composer.prompt_suggestion.appeared", { suggestionLength: gi.length, reqId: Kc() });
    } catch {
    }
  }));
  const Cd = async (gi, Zr) => {
    const vs = Fs();
    if (!vs) return;
    try {
      const [ac, Pc] = await Promise.all([e.cursorCommandsService.getCommands(), e.cursorRulesService.getAllRules()]), Ed = Pfs(gi, ac, Pc), wp = Ed.segments[Ed.segments.length - 1];
      Raf({ editor: vs, parsed: Ed, callbacks: { insertCursorCommand: Ns().insertCursorCommand, insertCursorRule: Ns().insertCursorRule }, ensureTrailingSpaceAfterFinalMention: wp !== void 0 && wp.type !== "text" });
    } catch {
      vs.update(() => {
        const ac = Xg();
        ac.clear();
        const Pc = _2();
        Pc.append(nS(gi)), ac.append(Pc), ac.selectEnd();
      });
    }
    try {
      r.trackEvent("composer.prompt_suggestion.accepted", { suggestionLength: gi.length, reqId: Kc() });
    } catch {
    }
    const Jo = YOe();
    queueMicrotask(() => {
      const ac = () => {
        ks(() => {
          hl({ modifierStatus: Zr });
        });
      };
      Jo ? XOe(Jo, ac) : ac();
    });
  }, Ug = vt(() => {
    if (Ui()) return "You're out of usage";
    if (t.placeholder) return t.placeholder;
    if (Be()?.header?.source === "claude-code") return "Continue chatting in Cursor";
    const gi = Ib();
    if (gi && d() !== false && !T()) return gi;
    const Zr = f(), vs = $p();
    if (vs) return S2i(vs).placeholder;
    if (af()) return "Add more optional details";
    if (lf()) {
      const ac = jwl();
      if (ac && ac.composerId === Zr.composerId) {
        if (ac.button === "proceed") return e.experimentService.getDynamicConfigParam("debug_mode_ui_instructions_config", "proceed_instructions", { disableExposureLog: false }) ?? "Issue reproduced, please proceed";
        if (ac.button === "markFixed") return e.experimentService.getDynamicConfigParam("debug_mode_ui_instructions_config", "mark_fixed_instructions", { disableExposureLog: false }) ?? "The issue has been fixed. Please clean up the instrumentation.";
      }
      return "Enter additional context about the issue";
    }
    if (Qp().filter((ac) => ac.clientSideTool !== Ct.ASK_QUESTION).length > 0) return "Reject, suggest, follow up?";
    if (Bg() && Zr.applied === true && Zr.reservedWorktree) return "Continue locally";
    if (Qf() && Bg()) return "Ask follow-ups in the worktree";
    if (re()) return "Add a follow-up";
    if (s()) return "Plan, Build, / for skills, @ for context";
    switch (te()) {
      case "chat":
        return "Ask, learn, brainstorm";
      case "edit":
        return "Work on explicitly added files (no tools)";
      case "background":
        return KXg;
      case "agent":
      default:
        return "Plan, search, build anything";
    }
  }), ep = vt(() => {
    if (d() !== false && Ib() && !T()) return { opacity: 1, color: "var(--cursor-text-tertiary)" };
  }), dg = () => {
    const gi = Ue?.(), Zr = g();
    gi && Zr && e.composerDataService.updateComposerBubble(Zr, gi, { errorDetails: void 0 });
  }, cf = A0(e.uiOverlayService.forceComposerDropdownRerender), wg = vt(() => !!f()?.gitWorktree?.worktreePath), Wh = Xh(e.storageService, "browserUrlPopupDismissed"), [Cg, kp] = Wt(Wh.get());
  Cn(() => {
    const gi = new Nt();
    gi.add(Wh), Wh.recomputeInitiallyAndOnChange(gi, (Zr) => {
      kp(Zr);
    }), On(() => gi.dispose());
  });
  const [Gh, ng] = Wt(void 0), [bm, Jf] = Wt("editor"), ql = (gi) => {
    Jf(gi);
  }, Eh = vt(() => !(Bg() || t.role === "bottom" || !e.experimentService.checkFeatureGate("show_browser_popup", { disableExposureLog: false }) || Gh() === void 0 || Cg() || Vqe(e.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode) !== "none"));
  Cn(() => {
    Eh() && e.analyticsService.trackEvent("browser_popup.viewed", void 0);
  });
  const U_ = (gi = true) => {
    gi && e.analyticsService.trackEvent("browser_popup.dismissed", void 0), Wh.set(true, void 0);
  };
  Cn(() => {
    Vqe(e.reactiveStorageService.applicationUserPersistentStorage.lastBrowserConnectionMode) !== "none" && !Cg() && Wh.set(true, void 0);
  }), Cn(() => {
    const gi = e.openBrowserUrlsService.getLatestUrl();
    gi && ng(gi);
    const Zr = e.openBrowserUrlsService.onDidChangeUrls((vs) => {
      ng(vs);
    });
    On(() => {
      Zr.dispose();
    });
  });
  const zy = () => {
    if (U_(bm() === "none"), !Gh()) {
      e.notificationService.notify({ severity: Yn.Error, message: "Browser URL not found" });
      return;
    }
    bm() !== "none" && (e.analyticsService.trackEvent("browser_popup.enabled", { mode: bm() }), e.reactiveStorageService.setApplicationUserPersistentStorage("lastBrowserConnectionMode", bm()), bm() === "editor" && e.commandService.executeCommand("workbench.action.openBrowserEditor", { url: Gh(), preserveFocus: true, trackingId: "composer_input" }));
  }, Bw = Ee(KZg, { get readonly() {
    return Si();
  }, get readonlyButSelectable() {
    return t.isBackgroundAgentRun || f()?.hasCorruptedCheckpoints === true;
  }, get mountMenusInPortal() {
    return t.mountMenusInPortal;
  }, closeFilePickerMenuTrigger: () => t.role === "top" && f().fullConversationHeadersOnly.length > 0 ? cf() : 0, isMentionsMenuOpen: we, setIsMentionsMenuOpen: Ie, get composerDataHandle() {
    return g();
  }, get id() {
    return `${f().composerId}-pane`;
  }, get bubbleId() {
    return t.bubbleId;
  }, setContainerRef: (gi) => {
    lr = gi, t.setRef?.(gi);
  }, images: Io, videos: ka, documents: Go, addDocument: La, onVideoClick: Fl, onVideoRemove: Gc, onDocumentRemove: cu, onTryDeleteContext: rh, mentionIdsToDelete: Te, setMentionIdsToDelete: _e, get mentionToAdd() {
    return Ce();
  }, setMentionToAdd: Pe, get class() {
    return t.class;
  }, get placeholderStyle() {
    return ep();
  }, getContext: Ls, setContext: Bl, get forceText() {
    return ve();
  }, setForceText: fe, get richText() {
    return ht();
  }, setRichText: (gi) => {
    if (t.isBackgroundAgentRun) return;
    const Zr = ht() ?? "";
    if (gi !== Zr) {
      if (he("type"), gi && gi.startsWith("{")) try {
        const vs = JSON.parse(gi);
        if (vs?.root?.type === "root" && Array.isArray(vs.root.children) && vs.root.children.length === 0) {
          Zr !== "" && gt({ richText: "" });
          return;
        }
      } catch {
      }
      gt({ richText: gi });
    }
  }, get text() {
    return Ae();
  }, get addVideo() {
    return l() ? yl : void 0;
  }, setText: (gi) => {
    if (t.isBackgroundAgentRun) return;
    const Zr = Ae() ?? "";
    if (gi === Zr) return;
    he("type"), t.onChange?.(gi), gi.length > 0 && e.composerChatService.requestSendPrewarm(g().composerId, "typing"), gt({ text: gi });
    const vs = e.toolCallHumanReviewService.getReviewModelForLastBubbleUnderReviewUntracked(g());
    vs && vs.setHighlightedOption(void 0);
  }, sideEffects: Ns, supports: Bi, get shouldAutoParseLink() {
    return Hr();
  }, isCompactMode: false, get isPaneDragging() {
    return t.isPaneDragging;
  }, overrideArrowUp: (gi) => {
    const Zr = e.toolCallHumanReviewService.getReviewModelForLastBubbleUnderReviewUntracked(g());
    if (Zr && !t.bubbleId) {
      if (gi.preventDefault(), gi.stopPropagation(), Zr.getHighlightedOption()) Zr.highlightOptionAbove();
      else {
        const vs = Zr.getCurrentlyDisplayedOptions();
        vs.length > 0 && Zr.setHighlightedOption(vs[vs.length - 1]);
      }
      return true;
    }
    return false;
  }, overrideArrowDown: (gi) => {
    const Zr = e.toolCallHumanReviewService.getReviewModelForLastBubbleUnderReviewUntracked(g());
    if (Zr && !t.bubbleId) {
      if (gi.preventDefault(), gi.stopPropagation(), Zr.getHighlightedOption()) Zr.highlightOptionBelow();
      else {
        const vs = Zr.getCurrentlyDisplayedOptions();
        vs.length > 0 && Zr.setHighlightedOption(vs[0]);
      }
      return true;
    }
    return false;
  }, onFurtherArrowUp: () => {
    if (t.role === "bottom") {
      const gi = g(), Zr = e.composerDataService.getComposerCapability(gi, mo.QUEUING), vs = Zr?.getQueueItemsReactive() ?? [], Jo = RFk(vs), ac = Zr?.isSteeringFeatureEnabled() ?? false, Pc = PFk({ hasQueueItems: Jo !== void 0, isEditingQueueItem: vv(), hasDraftText: !DCn(f()), focusedQueueActions: ac });
      if (Pc === "focus-last-queue-item") return YQg(gi.composerId, "enterFromPromptUp", () => {
        (f().isQueueExpanded ?? true) || _({ isQueueExpanded: true });
      });
      Pc === "edit-last-queue-item" && Jo !== void 0 ? VQg(e, gi, Jo) : n.selectLastHumanBubbleAboveInput(gi);
    }
    return true;
  }, onFurtherArrowDown: () => {
    if (t.location === "bar" || t.role !== "bottom") return false;
    const gi = g(), Zr = e.composerDataService.getComposerCapability(gi, mo.QUEUING);
    return !(Zr?.isSteeringFeatureEnabled() ?? false) || !DCn(f()) || (Zr?.getQueueItemsReactive() ?? []).length === 0 ? false : YQg(gi.composerId, "moveDownFromPrompt", () => {
      (f().isQueueExpanded ?? true) || _({ isQueueExpanded: true });
    });
  }, get style() {
    return { contain: "unset", background: `color-mix(in srgb, var(--vscode-input-background) ${O2p * 100}%, transparent)`, transition: "box-shadow 100ms ease-in-out, border-color 100ms ease-in-out", position: "relative", "z-index": "1", "--ai-input-full-input-box-border-radius": kg() && t.role === "bottom" ? "0 0 var(--conversation-surface-border-radius) var(--conversation-surface-border-radius)" : "var(--conversation-surface-border-radius)", ...Sn() ? { "z-index": 1 } : {}, ...kg() && t.role === "bottom" ? { "border-radius": "0 0 var(--conversation-surface-border-radius) var(--conversation-surface-border-radius)" } : {}, ...t.style, ...se() };
  }, get role() {
    return t.role ?? (f().fullConversationHeadersOnly.length === 0 ? "top" : "bottom");
  }, get bottomContainerStyle() {
    return { ...t.bottomContainerStyle ?? {} };
  }, get bottomContent() {
    return zr(() => !!(t.hideBottomBar || t.isBackgroundAgentRun))() ? void 0 : (() => {
      var gi = YEl(), Zr = gi.firstChild;
      return gi.style.setProperty("flex", "1"), gi.style.setProperty("width", "100%"), gi.style.setProperty("height", "100%"), gi.style.setProperty("display", "flex"), gi.style.setProperty("align-items", "center"), gi.style.setProperty("flex-shrink", "0"), gi.style.setProperty("flex-direction", "column"), gi.style.setProperty("margin-top", "calc(0.5rem + 1px)"), gi.style.setProperty("gap", "4px"), gi.style.setProperty("cursor", "auto"), Zr.addEventListener("click", (vs) => {
        vs.target === vs.currentTarget && !e.window.getSelection()?.toString() && de().focus();
      }), Zr.style.setProperty("display", "flex"), Zr.style.setProperty("align-items", "center"), Zr.style.setProperty("justify-content", "space-between"), Zr.style.setProperty("gap", "0.25rem"), Zr.style.setProperty("flex-shrink", "0"), Zr.style.setProperty("width", "100%"), Zr.style.setProperty("cursor", "auto"), Le(Zr, Ee(Ut, { get when() {
        return t.customBottomBar;
      }, get fallback() {
        return Ee(Ut, { get when() {
          return u() && !Slf;
        }, get fallback() {
          return Ee(I6k, {});
        }, get children() {
          return Ee(u7k, { get shouldHideModeLabel() {
            return ai().width < 300;
          }, shouldHideContextUsageLabel: true, get shouldHideContextUsageRing() {
            return ai().width < 260;
          }, get shouldShowBrowser() {
            return ai().width >= 250;
          }, get shouldHideAgentLabel() {
            return ai().width < 300;
          }, get shouldAllowSearchMode() {
            return Je();
          }, get bubbleId() {
            return t.bubbleId;
          }, get location() {
            return t.location;
          }, get shouldCollapseModelToggleIn() {
            return Hh();
          }, get shouldShowAgentic() {
            return ai().width > 120;
          }, get showCancelledWhenGenerating() {
            return t.role === "bottom";
          }, get composerDataHandle() {
            return g();
          }, get role() {
            return t.role;
          }, get isFocused() {
            return lt();
          }, isCompactDisplayMode: false, onSubmit: hl, get plainText() {
            return Ae();
          }, get uniqueDropdownId() {
            return oa();
          }, get uniqueModelDropdownId() {
            return pl();
          }, get reactiveMenuCloser() {
            return Me();
          }, get shouldShowModel() {
            return ai().width > 260;
          }, get shouldOpenModelToggleDirectly() {
            return Ne();
          }, onContainerClick: () => {
            de().focus();
          }, onCloseDropdown: () => {
            be(false), Ge(false), Oe(false), de().focus();
          }, onPostPickerModelWarningRequest: $e, get shouldShowHints() {
            return ai().width > 260;
          }, style: { flex: 1, "justify-content": "space-between" }, get isInputBoxHovered() {
            return h();
          }, get isContextUsageTrayAvailable() {
            return $();
          }, get isContextUsageTrayOpen() {
            return H();
          }, onContextUsageTrayToggle: () => G((vs) => !vs), get disablePrimaryAction() {
            return Si();
          }, disabledPrimaryActionHintText: "You're out of usage", onImageUpload: (vs, Jo) => {
            _Ii([Jo], e, Ns().addImage), de().focus();
          }, onPdfUpload: (vs) => {
            La(vs, "PDF");
          }, get onVideoUpload() {
            return l() ? yl : void 0;
          }, get isDropdownShowing() {
            return ct();
          }, setIsDropdownShowing: Ye, get initialShowMaxConfirmation() {
            return xe();
          }, get queueMessageBehavior() {
            return Rg();
          }, get isInputBoxForHumanFeedback() {
            return t.isInputBoxForHumanFeedback;
          }, get overrideUnifiedMode() {
            return te();
          }, get showSendModeSelector() {
            return t.showSendModeSelector;
          }, get onSendToCloud() {
            return t.showSendModeSelector ? (vs = true) => {
              const Jo = g(), ac = Jo.data.composerId;
              vs && e.analyticsService.trackEvent("composer.send_to_cloud.clicked", { composerId: ac }), e.composerDataService.updateComposerData(Jo, { pendingBackgroundAgent: vs });
            } : void 0;
          } });
        } });
      }, get children() {
        return t.customBottomBar;
      } })), gi;
    })();
  }, get placeholder() {
    return Ug();
  }, get undoRedoUri() {
    return e.selectedContextService.getUndoRedoUri(e.composerContextService.getContextId(g().composerId, ae()));
  }, onMouseDownWithinInput: () => {
    he("click");
  }, onFocus: () => {
    He(true), De(Date.now()), t.isBackgroundAgentRun || e.composerChatService.requestSendPrewarm(g().composerId, "input_focus"), ae() ? _({ lastFocusedBubbleId: ae() }) : _({ lastFocusedBubbleId: void 0, editingBubbleId: void 0 }), ce.set(true);
  }, onBlur: () => {
    t.onBlur && t.onBlur(), setTimeout(() => {
      if (e.contextKeyService.getContextKeyValue(xki.key)) return;
      const Zr = e.window.document.activeElement, vs = Zr && lr?.contains(Zr), Jo = ct(), ac = Ve() && lr?.contains(Ve()), Pc = e.window.document.querySelectorAll(".conversations"), Ed = Ve() && Array.from(Pc).some((cd) => cd.contains(Ve()) || cd === Ve()), wp = e.window.document.querySelectorAll(".composer-bar-input-buttons"), zm = Array.from(wp).some((cd) => cd.contains(Ve())), wa = !!e.window.getSelection()?.toString();
      !vs && !Jo && !ac && !zm && Ed && !wa && (He(false), ce.set(false));
    }, 0);
  }, onSubmit: (gi) => {
    const Zr = f().pluginFlowState;
    if (Zr) {
      if (Zr.step === "pending") {
        const Ev = g();
        if (Ev && Zr.selectedPlugin && (Ev.setData("pluginFlowState", { step: "confirm", action: Zr.action, selectedPlugin: Zr.selectedPlugin }), !t.bubbleId)) {
          const Q1 = Zr.selectedPlugin.slashCommandValue ?? Zr.selectedPlugin.name, $_ = Zr.action === "add" ? `/add-plugin ${Q1}` : `/remove-plugin ${Q1}`, nb = Fs(), Gk = nb ? JSON.stringify(nb.getEditorState()) : $_, J1 = { ...J_(), text: $_, richText: Gk };
          n.appendComposerBubbles(Ev, [J1]), e.composerViewsService.triggerScrollToBottom(Ev), nb && nb.update(() => {
            Xg().clear();
          });
        }
      }
      return;
    }
    if (t.onSubmit && t.suppressDefaultSubmit) {
      t.onSubmit();
      return;
    }
    if (gi && Ae().trim() === "" && !T() && d() !== false && de().getSuggestionText()) {
      const Ev = de().getSuggestionText();
      Cd(Ev, Qd(gi));
      return;
    }
    const vs = ks(() => {
      const Ev = e.composerDataService.selectedComposerIds;
      let Q1 = 0;
      for (const $_ of Ev) {
        if ($_ === g().data.composerId) continue;
        const nb = e.composerDataService.getComposerDataIfLoaded($_);
        nb && nb.status === "generating" && Q1++;
      }
      return Q1;
    }), Jo = g().data.modelConfig?.modelName, ac = Jo && Jo !== "" ? Jo : y(), Pc = g().data.composerId, Ed = e.composerModesService.getComposerUnifiedMode(g().composerId), wp = Ed === "chat", zm = g().data, cd = zm?.context?.cursorCommands?.map((Ev) => Ev.filename) ?? [], Og = kTi(zm);
    if (di()?.blocksSubmission) return;
    const Of = osl({ workspaceMetadataService: e.workspaceMetadataService, workspaceContextService: e.workspaceContextService, analyticsService: r });
    r.trackEvent("composer.submit", { mode: k()?.name ?? "unknown", composerId: Pc ?? void 0, entry: "keyboard", isAgentic: true, isEditing: Ed === "edit", isGenerating: re(), queueMessageBehavior: re() ? Rg().behavior : void 0, composerType: t.location, model: ac ?? "unknown", thinkingLevel: S() ?? "none", concurrentRunning: vs, promptLengthChars: Ae()?.length ?? 0, isWorktree: !!g().data.gitWorktree, isSideChat: Og, commandNames: cd.length > 0 ? cd : void 0, invocationID: g().data.latestChatGenerationUUID, activeWorkspaceId: e.cursorAuthenticationService.privacyMode() ? "redacted-workspace" : e.workspaceContextService.getWorkspace().id, ...Of }), wp && r.trackEvent("ask_mode.submit", { composerId: Pc ?? void 0, invocationID: g().data.latestChatGenerationUUID, context: "submit", commandNames: cd.length > 0 ? cd : void 0, promptLength: Ae()?.length ?? 0, model: ac ?? "unknown" }), hl({ modifierStatus: { altKey: gi.altKey, ctrlKey: gi.ctrlKey, metaKey: gi.metaKey, shiftKey: gi.shiftKey } }), hi(false);
  }, onEscape: (gi) => {
    if (gi.stopImmediatePropagation(), gi.preventDefault(), di()) {
      Ws();
      return;
    }
    if (t.onEscape) t.onEscape();
    else if (kg()) Eb();
    else if (Or()) uu();
    else {
      if (!t.bubbleId && Ae().trim() === "") {
        const Zr = e.toolCallHumanReviewService.getReviewModelForLastBubbleUnderReviewUntracked(g());
        Zr && Zr.toggleRejectInputBox();
      }
      e.composerViewsService.blur(C());
    }
  }, get inputBoxDelegate() {
    return de();
  }, setEditor: (gi) => {
    Qo(gi), t.setLexicalEditor?.(gi);
  }, onReset: Br, onManualSummarize: (gi) => {
    const Zr = g();
    Zr && e.composerChatService.triggerManualSummarization(Zr, gi);
  }, onBugbot: () => {
    r.trackEvent("bug_bot.run_ide_bug_finder", { entrypoint: "prompt_bar" }), A2i(e), kPn(e, { where: { location: "allWorkspaces", source: { kind: "workingTree" } }, inBackgroundSubsidized: false });
  }, onOpenBrowser: () => {
    e.commandService.executeCommand("workbench.action.openBrowserEditor");
  }, onRunEverything: () => {
    const gi = g();
    gi && ZQg({ composerHandle: gi, composerModesService: e.composerModesService, notificationService: e.notificationService });
  }, onPluginAdd: () => {
  }, onPluginRemove: () => {
  }, get extraPlugins() {
    return [Ee(FJg, { get composerDataHandle() {
      return g();
    } }), ...t.isBackgroundAgentRun ? [] : [Ee(Aaf, { isMentionsMenuOpen: we, isGenerating: re })], Ee(alf, { get composerId() {
      return C();
    }, get bubbleId() {
      return ae();
    } }), Ee(Daf, { get inputDelegate() {
      return de();
    }, get insertCursorCommand() {
      return Ns().insertCursorCommand;
    }, get insertCursorRule() {
      return Ns().insertCursorRule;
    } })];
  }, get extraCommandListeners() {
    return [...bf(), ...t.extraCommandListeners || [], { command: M6e, callback: (gi) => {
      const Zr = e.toolCallHumanReviewService.getReviewModelForLastBubbleUnderReviewUntracked(g());
      return Zr && !t.bubbleId ? (gi.preventDefault(), gi.stopPropagation(), Zr.toggleRejectInputBox(), true) : false;
    } }, { command: g0t, callback: (gi) => {
      const Zr = gi.key.toLowerCase() === "enter" && (gi.metaKey || gi.ctrlKey) && !gi.altKey && !gi.shiftKey;
      if (gi.repeat) return true;
      if (di()?.blocksSubmission && Zr) return gi.preventDefault(), gi.stopPropagation(), jo(), true;
      if (t.onCommandEnter) return t.onCommandEnter(gi);
      if (di()?.blocksSubmission) return true;
      if (e.toolCallHumanReviewService.isToolformerCurrentlyWaitingForReview(g())) return false;
      if (gi.shiftKey && (gi.metaKey || gi.ctrlKey)) {
        if (i.shouldShowAcceptRejectAll(C()) && Ae().trim() === "") {
          if (wg()) {
            const zm = C();
            e.composerService.applyWorktreeToCurrentBranch(zm);
          } else (async () => (await i.acceptAll(C()), await Yst(e)))();
          return true;
        }
        if (b0()) {
          const zm = e.composerDataService.getToolFormer(g());
          if (zm) return zm.cancel(), true;
        }
        if (!c()) return false;
      }
      const vs = Qp(), Jo = vs.filter((zm) => zm.clientSideTool === Ct.ASK_QUESTION), ac = vs.filter((zm) => zm.clientSideTool !== Ct.ASK_QUESTION);
      if (Jo.length > 0) {
        if (um) return true;
        um = true;
        const zm = Qd(gi);
        return (async () => {
          const wa = Czt({ handle: g(), composerChatService: e.composerChatService });
          let cd = false, Og = false;
          for (const nb of Jo) {
            const Gk = e.composerDataService.getComposerCapability(g(), mo.TOOL_FORMER);
            if (!Gk) continue;
            const J1 = nb.toolCallId, qk = $Ti(Gk, J1), ry = qk?.bubbleData.params;
            if (!qk || !ry) continue;
            const { bubbleId: zk } = qk, Vk = qk.bubbleData.additionalData, bI = Vk?.currentSelections ?? {}, ST = Vk?.freeformTexts ?? {}, Pm = Vk?.freeformRichTexts ?? {}, uS = await WTi({ capability: Gk, toolCallId: J1, bubbleId: zk, decision: { kind: "answer", params: ry, draft: { selections: bI, freeformTexts: ST, freeformRichTexts: Pm } }, commit: wa.commit(() => e.composerDataService.manuallyPersistComposerOrThrow(g().composerId)) });
            if (uS.kind !== "settled") {
              Og = uS.kind === "busy", cd = !Og;
              break;
            }
          }
          const Of = de().getSuggestionText(), $_ = Ae().trim() !== "" || T();
          if (!Og && !(cd && !$_)) {
            for (const nb of ac) nb.accept();
            $_ ? hl({ modifierStatus: zm }) : !cd && d() !== false && Of && Cd(Of, gi);
          }
        })().catch((wa) => {
          e.structuredLogService.error("composer", "Failed to submit pending questionnaire", wa instanceof Error ? wa : new Error(String(wa))), e.notificationService.error("Could not submit the questionnaire. Please try again.");
        }).finally(() => {
          um = false;
        }), true;
      }
      for (const zm of ac) zm.accept();
      const Pc = de().getSuggestionText();
      if (Ae().trim() !== "" || T()) hl({ modifierStatus: Qd(gi) });
      else if (ac.length === 0 && Jo.length === 0) {
        const zm = e.toolCallHumanReviewService.getReviewModelForLastBubbleUnderReview(g());
        if (zm?.getKind() === J2e.PLAN) return zm.getHumanReviewData()?.status === Cv.REQUESTED ? zm.setSelectedOption(rie.APPROVE, "agent") : zm.completeWithRunAction(), true;
        if (ot() && Ae().trim() === "") if (wg()) {
          const wa = C();
          e.composerService.applyWorktreeToCurrentBranch(wa);
        } else (async () => (await i.acceptAll(C()), await Yst(e)))();
        else d() !== false && Pc ? Cd(Pc, gi) : hl({ modifierStatus: Qd(gi) });
      } else d() !== false && Pc && Cd(Pc, gi);
      return true;
    } }];
  }, get maxHeight() {
    return t.maxHeight;
  }, get minHeight() {
    return t.minHeight;
  }, get buttonArea() {
    return t.buttonArea;
  }, get onStartDrag() {
    return t.location === "bar" ? t.onStartDrag : void 0;
  }, get children() {
    return [zr(() => t.children), Ee(e2, { get children() {
      return [Ee(Bp, { get when() {
        return Ia();
      }, get children() {
        return Ee(UIt, { icon: null, get title() {
          return di().title;
        }, get message() {
          return di().body;
        }, secondaryButton: { label: "Go back", onClick: Ws, variant: "outline" }, secondaryButtonHintText: "Revert to previous model choice (Esc)", secondaryButtonKeybinding: [], primaryButton: { label: "Continue", onClick: jo }, primaryButtonHintText: "Confirm model choice", primaryButtonKeybinding: _r ? ["meta", "enter"] : ["ctrl", "enter"], get positionBottom() {
          return t.role === "bottom";
        }, get showBackdrop() {
          return t.role === "bottom";
        }, get toolbarHeight() {
          return t.toolbarHeight?.();
        }, get onHeightChange() {
          return t.setPopupHeight ? (gi) => {
            Ra(gi);
          } : void 0;
        } });
      } }), Ee(Bp, { get when() {
        return rr();
      }, get children() {
        return Ee(UIt, { get icon() {
          return Gn.asClassName(yt.zap);
        }, title: "Disable Inline Diffs", message: "Enable auto-keep to have changes be updated automatically. You can also do this later in Cursor Settings.", primaryButton: { label: "Enable auto-keep", onClick: co }, onDismiss: ia, get positionBottom() {
          return t.role === "bottom";
        }, showBackdrop: false, get toolbarHeight() {
          return t.toolbarHeight?.();
        }, get onHeightChange() {
          return t.setPopupHeight ? (gi) => {
            Ra(gi);
          } : void 0;
        } });
      } }), Ee(Bp, { get when() {
        return mi();
      }, get children() {
        return Ee(UIt, { get icon() {
          return Gn.asClassName(yt.warning);
        }, title: "Model Status", get message() {
          return Ni().message;
        }, get primaryButton() {
          return { label: Sn() ? "Switch Model and Retry" : "Switch Model", onClick: () => {
            const gi = Ni()?.fallbackModel;
            gi && Sn() ? qls({ commandService: e.commandService, openerService: e.openerService, cursorAuthService: e.cursorAuthenticationService, notificationService: e.notificationService, dismissBubbleError: (Zr, vs) => {
              const Jo = vs ?? e.composerDataService.getLastAiBubbleId(Zr);
              Jo && e.composerDataService.updateComposerBubble(Zr, Jo, { errorDetails: void 0 });
            }, retryLastMessage: (Zr, vs) => {
              const Jo = e.composerDataService.getLastHumanBubble(Zr);
              !Jo || Jo.text.trim() === "" || e.composerChatService.submitChatMaybeAbortCurrent(Zr.composerId, Jo.text, { bubbleId: Jo.bubbleId, richText: Jo.richText, sentByVoiceCall: Jo.sentByVoiceCall, pendingServiceStatusUpdate: vs?.pendingServiceStatusUpdate });
            }, aiSettingsService: e.aiSettingsService, modelConfigService: e.modelConfigService, adminSettingsService: e.adminSettingsService, uiOverlayService: e.uiOverlayService, cursorCredsService: e.cursorCredsService }, g(), gi) : gi ? (e.commandService.executeCommand(uJn, gi, "composer"), e.modelConfigService.setModelConfigForComposer(g(), { modelName: gi }, "composer")) : e.composerViewsService.triggerModelToggle(C());
          } };
        }, primaryButtonKeybinding: [], onDismiss: () => fs(true), get positionBottom() {
          return t.role === "bottom";
        }, showBackdrop: false, get toolbarHeight() {
          return t.toolbarHeight?.();
        }, get onHeightChange() {
          return t.setPopupHeight ? (gi) => {
            Ra(gi);
          } : void 0;
        } });
      } }), Ee(Bp, { get when() {
        return zr(() => !!(Sn() && !vi()))() && !Nn();
      }, get children() {
        return Ee(UIt, { get title() {
          return Et();
        }, get isInputFocused() {
          return lt();
        }, get icon() {
          return oi();
        }, get onDismiss() {
          return f()?.hasCorruptedCheckpoints ? void 0 : dg;
        }, get message() {
          return kt();
        }, get children() {
          return kn();
        }, get positionBottom() {
          return t.role === "bottom";
        }, get showBackdrop() {
          return t.role === "bottom";
        }, get allowCommandLinksPotentiallyUnsafe() {
          return xt();
        }, get primaryButton() {
          return Pt();
        }, get secondaryButton() {
          return Dt();
        }, get tertiaryButton() {
          return Vt();
        }, get primaryButtonKeybinding() {
          return un() ? [] : void 0;
        }, get secondaryButtonKeybinding() {
          return un() ? [] : void 0;
        }, get toolbarHeight() {
          return t.toolbarHeight?.();
        }, get onHeightChange() {
          return t.setPopupHeight ? (gi) => {
            Ra(gi);
          } : void 0;
        } });
      } }), Ee(Bp, { get when() {
        return Eh();
      }, get children() {
        return Ee(UIt, { get icon() {
          return Gn.asClassName(yt.globe);
        }, get title() {
          return (() => {
            var gi = hlf(), Zr = gi.firstChild, vs = Zr.nextSibling, Jo = vs.nextSibling;
            return Le(gi, Ee(N7k, { get href() {
              return Gh() ?? "";
            }, get children() {
              return Gh();
            } }), vs), gi;
          })();
        }, primaryButton: { label: "Continue", onClick: zy }, get secondaryDropdown() {
          return { selectedId: bm(), options: [{ id: "editor", label: "Use Cursor Browser" }, { id: "playwright", label: "Use External Browser" }, { id: "none", label: "Do not use browser" }], onSelect: (gi) => {
            ql(gi);
          } };
        }, onDismiss: U_, get positionBottom() {
          return t.role === "bottom";
        }, get showBackdrop() {
          return t.role === "bottom";
        }, get toolbarHeight() {
          return t.toolbarHeight?.();
        }, get onHeightChange() {
          return t.setPopupHeight ? (gi) => {
            Ra(gi);
          } : void 0;
        }, wrapButtons: true });
      } }), Ee(Bp, { get when() {
        return ui();
      }, get children() {
        return Ee(w6k, { get role() {
          return t.role ?? "bottom";
        }, setShowKeybindingPopup: hi, get keybindingService() {
          return e.keybindingService;
        }, get keybindingEditingService() {
          return e.keybindingEditingService;
        }, get toolbarHeight() {
          return t.toolbarHeight?.();
        }, get onHeightChange() {
          return t.setPopupHeight ? (gi) => {
            wr(gi);
          } : void 0;
        } });
      } })];
    } })];
  } }), Uw = vt(() => e.composerDataService.getIsBlockingUserDecision(g())), b0 = UFk(g), y0 = { position: "absolute", bottom: "100%", "margin-bottom": "8px", left: "50%", "z-index": 1e3, transform: "translateX(-50%)", "border-radius": "0.25rem", width: "fit-content", display: "flex", "align-items": "center", "max-width": "calc(100% - 32px)", padding: "4px", gap: "4px" }, GE = { padding: "2px 4px", transition: "100ms", "border-radius": "0.25rem", cursor: "pointer", "margin-left": "auto", "margin-right": "auto", "text-align": "center", "font-size": "12px", "flex-shrink": 0, gap: "4px", display: "flex", "align-items": "center", "white-space": "nowrap", overflow: "hidden", "text-overflow": "ellipsis" };
  Cn(() => {
    const gi = t.bubbleId, Zr = t.customBottomBar, vs = e.composerViewsService.onTriggerModeMenu((Jo) => {
      if (Zr) return;
      const ac = e.composerViewsService.isFocused(Jo.composerId), Pc = e.composerViewsService.isPrevBubbleFocused(Jo.composerId);
      if (!(!ac && !Pc) && f().editingBubbleId === void 0 && f().lastFocusedBubbleId === gi && Jo.composerId === C()) {
        const Ed = e.window.document.getElementById(oa());
        ct() || Ed && (be(false), Ge(true), Ed.click());
      }
    });
    On(() => {
      vs.dispose();
    });
  }), Cn(() => {
    const gi = t.bubbleId, Zr = e.composerViewsService.onTriggerModelToggle((vs) => {
      if (f().editingBubbleId !== void 0) return;
      const Jo = f().lastFocusedBubbleId, ac = C(), Pc = Jo === gi, Ed = vs.composerId === ac;
      Pc && Ed && (be(true), Oe(vs.showMaxConfirmation ?? false));
    });
    On(() => {
      Zr.dispose();
    });
  });
  const _u = /^\/(add|remove)-plugin\s(.*)$/, Rm = "color: var(--cursor-text-yellow-primary)", [ym, j_] = Wt(""), [Nv, _v] = Wt(null), [Or, qo] = Wt(false), [Xi, ua] = Wt(false), Td = (gi) => {
    const Zr = Xg();
    for (const vs of Zr.getChildren()) if (Wc(vs)) {
      for (const Jo of vs.getChildren()) if (Au(Jo) && Jo.getStyle() === Rm && Jo.getTextContent().length > 0) {
        const ac = gi.getElementByKey(Jo.getKey());
        if (!ac) continue;
        const Pc = ac.getBoundingClientRect();
        return { x: Pc.right, yTop: Pc.top, yBottom: Pc.bottom };
      }
    }
    return null;
  }, uu = () => {
    const gi = g();
    if (gi?.data.pluginFlowState?.step !== "search") return;
    ua(true), qo(false), _v(null), gi && gi.setData("pluginFlowState", null);
    const vs = Fs();
    vs && vs.update(() => {
      const Jo = Xg();
      for (const ac of Jo.getChildren()) if (Wc(ac)) for (const Pc of ac.getChildren()) Au(Pc) && Pc.getStyle() === Rm && (Pc.setStyle(""), Pc.setMode("normal"));
    });
  };
  Cn(() => {
    const gi = Fs();
    if (!gi) return;
    const Zr = gi.registerUpdateListener(({ editorState: vs }) => {
      vs.read(() => {
        const Jo = (Ed) => {
          if (Au(Ed)) return Ed.getType() === "composer-ghost-text" ? "" : Ed.getTextContent();
          if (V7(Ed)) return `
`;
          if (Wc(Ed)) {
            let wp = "";
            for (const zm of Ed.getChildren()) wp += Jo(zm);
            return wp;
          }
          return "";
        }, ac = Jo(Xg()).trimStart(), Pc = _u.exec(ac);
        if (Pc) {
          if (Xi()) {
            _v(null);
            return;
          }
          _v(Td(gi));
          const Ed = Pc[1], wp = Pc[2] ?? "", zm = g();
          if (!zm) return;
          const wa = zm.data.pluginFlowState;
          if (wa?.step === "pending") {
            const $_ = wa?.selectedPlugin?.slashCommandValue ?? wa?.selectedPlugin?.name ?? "";
            if (wp.trim() !== $_) {
              ua(true), qo(false), _v(null), zm.setData("pluginFlowState", null), gi.update(() => {
                const nb = Xg();
                for (const Gk of nb.getChildren()) if (Wc(Gk)) for (const J1 of Gk.getChildren()) Au(J1) && J1.getStyle() === Rm && (J1.setStyle(""), J1.setMode("normal"));
              });
              return;
            }
          } else {
            j_(wp), qo(true);
            const $_ = "search";
            (wa?.step !== $_ || wa?.action !== Ed) && zm.setData("pluginFlowState", { step: $_, action: Ed, selectedPlugin: null });
          }
          const Og = `/${Ed}-plugin `, Of = /^\/(add|remove)-plugin\s/, Ev = [], Q1 = Xg();
          for (const $_ of Q1.getChildren()) if (Wc($_)) {
            for (const nb of $_.getChildren()) if (Au(nb) && nb.getType() === "text" && nb.getStyle() !== Rm) {
              const Gk = nb.getTextContent();
              Of.test(Gk) && Ev.push({ key: nb.getKey(), prefix: Og });
            }
          }
          Ev.length > 0 && gi.update(() => {
            for (const { key: $_, prefix: nb } of Ev) {
              const Gk = AP($_);
              if (!Gk || !Au(Gk) || Gk.getStyle() === Rm) continue;
              const J1 = Gk.getTextContent(), qk = nS(nb);
              qk.setStyle(Rm), qk.setMode("token"), Gk.replace(qk);
              const ry = J1.slice(nb.length);
              if (ry) {
                const zk = nS(ry);
                qk.insertAfter(zk), zk.select();
              } else qk.selectEnd();
            }
          });
        } else {
          ua(false), qo(false), _v(null);
          const Ed = g();
          if (!Ed) return;
          const wp = Ed.data.pluginFlowState;
          (wp?.step === "search" || wp?.step === "pending") && Ed.setData("pluginFlowState", null);
        }
      });
    });
    On(() => Zr());
  });
  let im = null;
  return Cn(() => {
    const gi = f().pluginFlowState, Zr = im === "confirm";
    if (im = gi?.step ?? null, Zr && !gi) {
      const vs = Fs();
      vs && vs.update(() => {
        Xg().clear();
      });
    }
  }), (() => {
    var gi = flf(), Zr = gi.firstChild;
    return Le(gi, Ee(Ut, { get when() {
      return !K() && t.role === "bottom";
    }, get children() {
      return Ee(dJg, { position: "above", onVisibilityChange: Y });
    } }), Zr), Le(gi, Ee(Ut, { get when() {
      return zr(() => !K() && t.role === "bottom" && !V())() && !Pi();
    }, get children() {
      return Ee(bof, { position: "above", composerDataHandle: g });
    } }), Zr), Le(gi, Ee(Ut, { get when() {
      return !K() && t.role === "bottom";
    }, get children() {
      return Ee(GQg, { get composerDataHandle() {
        return g();
      }, isDisplayAllowed: () => !V() && !Pi() && !re() && !(K() && f()?.pendingModelNudge), position: "above" });
    } }), Zr), Le(gi, Ee(Ut, { get when() {
      return !K() && t.role === "bottom";
    }, get children() {
      return Ee(LQg, { composerId: () => g().composerId, isDisplayAllowed: () => !V() && !Pi(), position: "above" });
    } }), Zr), Le(gi, Ee(Ut, { get when() {
      return xi();
    }, get children() {
      var vs = $fs();
      return Le(vs, Ee(TQg, { onLimitApplied: dg, get onUpgradeOverride() {
        return TTk({ cursorAuthService: e.cursorAuthenticationService, uiOverlayService: e.uiOverlayService, openerService: e.openerService, cursorCredsService: e.cursorCredsService, notificationService: e.notificationService }, it()?.error, dg);
      }, get status() {
        return Bn();
      } })), vs;
    } }), Zr), Le(gi, Ee(Ut, { get when() {
      return ci();
    }, get children() {
      var vs = $fs();
      return Le(vs, Ee(TQg, { onLimitApplied: dg, get status() {
        return Yi();
      } })), vs;
    } }), Zr), Le(gi, Ee(Ut, { get when() {
      return zr(() => !!(Zn() && !xi()))() && !ci();
    }, get children() {
      var vs = $fs();
      return Le(vs, Ee(CQg, {})), vs;
    } }), Zr), Le(gi, Ee(Ut, { get when() {
      return zr(() => !!($() && H()))() && j();
    }, children: (vs) => (() => {
      var Jo = vlf();
      return Le(Jo, Ee(_lf, Zy(vs, { onDismiss: () => G(false), get onSeeMore() {
        return I() && O() && N() && U() ? q : void 0;
      }, get visible() {
        return H();
      } }))), Jo;
    })() }), Zr), Le(gi, Ee(Ut, { get when() {
      return !t.bubbleId;
    }, get children() {
      return Ee(ylf, { get agentId() {
        return C();
      }, get portalRoot() {
        return e.portalElement;
      } });
    } }), Zr), Le(gi, () => t.aboveContent, Zr), Le(gi, Ee(Ut, { get when() {
      return zr(() => !!(!Sn() && eo() && t.role === "bottom"))() && (t.toolbarHeight?.() ?? 0) === 0;
    }, get children() {
      var vs = EPi();
      return vs.style.setProperty("position", "relative"), vs.style.setProperty("z-index", "11"), vs.style.setProperty("width", "100%"), vs.style.setProperty("padding-bottom", "4px"), Le(vs, Ee(clf, { pendingNotification: pt, mcpSuccessNotification: dt, shouldShowNotificationHere: eo, shouldShowErrorHere: Sn, shouldShowMCPSuccessNotificationHere: As, handleMCPInstall: So, handleNetworkAccessEnable: na, handleGitHubAuthConnect: ll, handlePluginSuggestionClick: Ol, handleNotificationDismiss: ia, onSwitchMode: Mi, withLayoutPadding: true, hasMessages: true, onNotificationVisible: Jr, get keybinding() {
        return Gi();
      }, notificationRef: _i })), vs;
    } }), Zr), Le(gi, Ee(Ut, { get when() {
      return kg() && t.role === "bottom";
    }, get children() {
      var vs = plf(), Jo = vs.firstChild, ac = Jo.nextSibling;
      return Le(Jo, (() => {
        var Pc = zr(() => !!$p());
        return () => Pc() ? S2i($p()).bannerLabel : "";
      })()), ac.addEventListener("click", Eb), Le(ac, (() => {
        var Pc = zr(() => !!$p());
        return () => Pc() ? S2i($p()).cancelLabel : "Cancel";
      })()), vs;
    } }), Zr), Zr.addEventListener("mouseleave", () => p(false)), Zr.addEventListener("mouseenter", () => p(true)), Zr.style.setProperty("position", "relative"), Le(Zr, Bw, null), Le(Zr, Ee(Ut, { get when() {
      return zr(() => !!Or())() && f().pluginFlowState?.step === "search";
    }, get children() {
      return Ee(rjk, { get composerDataHandle() {
        return g();
      }, get action() {
        return f().pluginFlowState?.action ?? "add";
      }, get searchQuery() {
        return ym();
      }, get commandAnchor() {
        return Nv() ?? void 0;
      }, onClose: () => {
        uu(), de()?.focus();
      }, onPluginSelected: (vs) => {
        const ac = (f().pluginFlowState?.action ?? "add") === "add" ? `/add-plugin ${vs}` : `/remove-plugin ${vs}`, Pc = Fs();
        Pc && Pc.update(() => {
          const Ed = Xg();
          Ed.clear();
          const wp = _2();
          wp.append(nS(ac)), Ed.append(wp), Ed.selectEnd();
        }), qo(false), _v(null), de()?.focus();
      } });
    } }), null), Le(gi, Ee(Ut, { get when() {
      return je();
    }, children: (vs) => Ee(blf, { get body() {
      return vs().body || void 0;
    }, onConfirm: () => $e(void 0), onDismissForever: () => {
      kgs(e.storageService, vs().key), $e(void 0);
    }, get title() {
      return vs().title;
    }, visible: true }) }), null), Le(gi, Ee(Ut, { get when() {
      return ts();
    }, get children() {
      var vs = YEl(), Jo = vs.firstChild;
      return vs.style.setProperty("display", "flex"), vs.style.setProperty("align-items", "center"), vs.style.setProperty("justify-content", "flex-end"), vs.style.setProperty("width", "100%"), vs.style.setProperty("min-height", "32px"), Jo.style.setProperty("display", "flex"), Jo.style.setProperty("align-items", "center"), Jo.style.setProperty("justify-content", "flex-end"), Jo.style.setProperty("padding-right", "8px"), Jo.style.setProperty("flex", "1"), Jo.style.setProperty("min-width", "0"), Le(Jo, Ee(Ut, { get when() {
        return eo();
      }, get children() {
        return Ee(clf, { pendingNotification: pt, mcpSuccessNotification: dt, shouldShowNotificationHere: eo, shouldShowErrorHere: Sn, shouldShowMCPSuccessNotificationHere: As, handleMCPInstall: So, handleNetworkAccessEnable: na, handleGitHubAuthConnect: ll, handlePluginSuggestionClick: Ol, handleNotificationDismiss: ia, onSwitchMode: Mi, onNotificationVisible: Jr, get keybinding() {
          return Gi();
        }, notificationRef: _i });
      } })), vs;
    } }), null), Le(gi, Ee(Ut, { get when() {
      return t.belowContent;
    }, get children() {
      return t.belowContent;
    } }), null), Le(gi, Ee(Ut, { get when() {
      return K();
    }, get children() {
      return Ee(dJg, { position: "below", onVisibilityChange: Y });
    } }), null), Le(gi, Ee(Ut, { get when() {
      return zr(() => !!(K() && !V()))() && !Pi();
    }, get children() {
      return Ee(bof, { position: "below", composerDataHandle: g });
    } }), null), Le(gi, Ee(Ut, { get when() {
      return K();
    }, get children() {
      return Ee(GQg, { get composerDataHandle() {
        return g();
      }, isDisplayAllowed: () => !V() && !Pi() && !re() && !(K() && f()?.pendingModelNudge), position: "below" });
    } }), null), Le(gi, Ee(Ut, { get when() {
      return K();
    }, get children() {
      return Ee(LQg, { composerId: () => g().composerId, isDisplayAllowed: () => !V() && !Pi() && !f()?.pendingModelNudge, position: "below" });
    } }), null), Le(gi, Ee(Ut, { get when() {
      return zr(() => !!K())() ? f()?.pendingAutoSwitchPopup : void 0;
    }, children: (vs) => Ee(o6k, { get composerDataHandle() {
      return g();
    }, get previousModel() {
      return vs().previousModel;
    } }) }), null), Le(gi, Ee(Ut, { get when() {
      return zr(() => !!K())() ? f()?.pendingAutoSwitchBanner : void 0;
    }, get children() {
      return Ee(a6k, { get composerDataHandle() {
        return g();
      } });
    } }), null), Le(gi, Ee(Ut, { get when() {
      return zr(() => !!K())() && zr(() => f()?.pendingModelNudge?.uiVariant === "popup")() ? f()?.pendingModelNudge : void 0;
    }, children: (vs) => Ee(r6k, { get composerDataHandle() {
      return g();
    }, get nudge() {
      return vs();
    } }) }), null), Le(gi, Ee(Ut, { get when() {
      return zr(() => !!K())() && zr(() => f()?.pendingModelNudge?.uiVariant === "auto_switch_banner")() ? f()?.pendingModelNudge : void 0;
    }, children: (vs) => Ee(s6k, { get composerDataHandle() {
      return g();
    }, get nudge() {
      return vs();
    } }) }), null), Le(gi, Ee(Ut, { get when() {
      return t.location !== "bar" && !t.bubbleId;
    }, get children() {
      return Ee(e2, { get children() {
        return [Ee(Bp, { get when() {
          return zr(() => !!b0())() && !Uw();
        }, get children() {
          var vs = EPi();
          return Ea(vs, y0), Le(vs, Ee(hp, { type: "true-secondary", style: GE, onClick: () => {
            const Jo = e.composerDataService.getToolFormer(g());
            Jo && Jo.cancel();
          }, get children() {
            return [(() => {
              var Jo = mlf();
              return Le(Jo, () => Cbe("??")), Jo;
            })(), (() => {
              var Jo = glf();
              return Jo.style.setProperty("flex-shrink", "0"), Jo;
            })()];
          } })), vs;
        } }), "*/}"];
      } });
    } }), null), xn((vs) => {
      var Jo = { display: "flex", "flex-direction": "column", "align-items": "stretch", "justify-content": "center", position: "relative", ...t.containerStyle }, ac = t.containerClass, Pc = kg() ? "0 0 var(--conversation-surface-border-radius) var(--conversation-surface-border-radius)" : "var(--conversation-surface-border-radius)";
      return vs.e = Ea(gi, Jo, vs.e), ac !== vs.t && Er(gi, vs.t = ac), Pc !== vs.a && ((vs.a = Pc) != null ? Zr.style.setProperty("border-radius", Pc) : Zr.style.removeProperty("border-radius")), vs;
    }, { e: void 0, t: void 0, a: void 0 }), gi;
  })();
}
var dlf, EPi, YEl, hlf, $fs, plf, mlf, glf, flf, vlf, XEl, _lf, blf, ylf, Slf, klf,
