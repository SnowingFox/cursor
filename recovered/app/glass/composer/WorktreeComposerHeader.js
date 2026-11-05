// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: WorktreeComposerHeader.js range:32941901..33021088
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, Am, pi, Hn, gs, zHt, vo, FS, F6, e_, eMw, ANf, yme, JYg, g7f, T8f, Hu, jMe, KRn, b9e, t7f
// wrapper-init: oMw
// hoisted-owner: ComposerPane.js (app-out-vs-workbench-workbench-glass-main-js:6160); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

oMw = L({ "WorktreeComposerHeader.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), Am(), pi(), Hn(), gs(), zHt(), vo(), FS(), F6(), e_(), eMw(), ANf(), yme(), JYg(), g7f(), T8f(), Hu(), jMe(), KRn(), b9e(), t7f(), bBl = wt("<div>"), F7f = wt('<span class="inline-flex items-center">'), B7f = wt('<div class="flex items-center gap-2"><div class=worktree-composer-header__create-pr-button>'), Nws = cs(false), Lws = cs(false);
} });
function aMw() {
  var t = typeof SuppressedError == "function" ? SuppressedError : function(r, s) {
    var o = Error();
    return o.name = "SuppressedError", o.error = r, o.suppressed = s, o;
  }, e = {}, n = [];
  function i(r, s) {
    if (s != null) {
      if (Object(s) !== s) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
      if (r) var o = s[Symbol.asyncDispose || /* @__PURE__ */ Symbol.for("Symbol.asyncDispose")];
      if (o === void 0 && (o = s[Symbol.dispose || /* @__PURE__ */ Symbol.for("Symbol.dispose")], r)) var a = o;
      if (typeof o != "function") throw new TypeError("Object is not disposable.");
      a && (o = function() {
        try {
          a.call(s);
        } catch (l) {
          return Promise.reject(l);
        }
      }), n.push({ v: s, d: o, a: r });
    } else r && n.push({ d: s, a: r });
    return s;
  }
  return { e, u: i.bind(null, false), a: i.bind(null, true), d: function() {
    var r, s = this.e, o = 0;
    function a() {
      for (; r = n.pop(); ) try {
        if (!r.a && o === 1) return o = 0, n.push(r), Promise.resolve().then(a);
        if (r.d) {
          var c = r.d.call(r.v);
          if (r.a) return o |= 2, Promise.resolve(c).then(a, l);
        } else o |= 1;
      } catch (u) {
        return l(u);
      }
      if (o === 1) return s !== e ? Promise.reject(s) : Promise.resolve();
      if (s !== e) throw s;
    }
    function l(c) {
      return s = s !== e ? new t(c, s) : c, a();
    }
    return a();
  } };
}
function lMw({ event: t, container: e, inputHostedByPane: n, focusInput: i }) {
  if (!n || !e) return false;
  const r = e.ownerDocument;
  return r.getSelection()?.toString() || e !== r.activeElement ? false : (i(), t.preventDefault(), true);
}
function yBl(t, e, n, i, r) {
  const s = r.innerWidth - n - PHt, o = r.innerHeight - i - PHt;
  return { x: DYg(PHt, t, s), y: DYg(PHt, e, o) };
}
function cMw(t) {
  const e = Gr(), [n] = sVe(JOe, e.configurationService, dDa), i = vt(() => {
    const p = n();
    return typeof p != "number" || !Number.isFinite(p) || p <= 0 ? dDa : Math.round(p);
  }), r = SPw(() => t.composerId, () => t.composerDataHandle), s = vt(() => t.composerDataHandle ?? r()), o = A0(e.composerStorageService.state), a = vt(() => o()?.shouldShowComposerSkeleton ?? false), [l, c] = Wt("pending");
  Cn(() => {
    const p = t.composerId;
    if (s()) {
      c("loaded");
      return;
    }
    c("pending"), e.composerDataService.getComposerHandleById(p).then((f) => {
      t.composerId === p && c(WPw(f));
    });
  });
  const u = vt(() => GPw({ handle: s(), lookupState: l(), isReferenced: () => {
    const { allComposers: p, selectedComposerIds: g } = e.composerDataService.allComposersData;
    return p.some((f) => f.composerId === t.composerId) || g.includes(t.composerId);
  } })), d = vt(() => s() && !a());
  return Ee(Ut, { get when() {
    return !u();
  }, get fallback() {
    return (() => {
      var p = U7f(), g = p.firstChild, f = g.nextSibling;
      return p.style.setProperty("display", "flex"), p.style.setProperty("align-items", "center"), p.style.setProperty("justify-content", "center"), p.style.setProperty("height", "100%"), p.style.setProperty("width", "100%"), p.style.setProperty("opacity", "0.5"), p.style.setProperty("flex-direction", "column"), p.style.setProperty("gap", "8px"), f.style.setProperty("font-size", "12px"), p;
    })();
  }, get children() {
    return Ee(Ut, { get when() {
      return zr(() => !!d())() ? s() : false;
    }, get fallback() {
      return Ee(vms, {});
    }, children: (p) => Ee(uMw, Zy(t, { composerDataHandle: p, composerPaneMaxWidth: i, get composerHeader() {
      return t.composerHeader;
    } })) });
  } });
}
function uMw(t) {
  try {
    var e = aMw();
    const n = e.u(hA("openComposerPane")), i = Gr(), r = i.workbenchEnvironmentService.isGlass === true, [s, o] = Wt(i.workbenchLayoutService.isVisible("workbench.parts.unifiedsidebar")), a = () => {
      const Or = i.window ?? rl();
      if (!i.workbenchLayoutService.isVisible("workbench.parts.titlebar", Or)) return true;
      const qo = i.contextKeyService.getContextKeyValue(Eqe);
      if (qo === true) return true;
      if (qo === false) return false;
      try {
        return dE().body.classList.contains("no-titlebar-layout");
      } catch {
        return false;
      }
    }, [l, c] = Wt(a());
    Cn(() => {
      const Or = i.contextKeyService, qo = /* @__PURE__ */ new Set([Eqe]), Xi = Or.onDidChangeContext((ua) => {
        ua.affectsSome(qo) && c(a());
      });
      On(() => Xi.dispose());
    }), Cn(() => {
      const Or = i.workbenchLayoutService.onDidChangePartVisibility(() => {
        o(i.workbenchLayoutService.isVisible("workbench.parts.unifiedsidebar")), c(a());
      });
      On(() => Or.dispose());
    });
    const u = MNk(i.storageService, i.experimentService), { composerDataHandle: d, currentComposer: h, updateCurrentComposer: p, unifiedMode: g } = mPn(t.composerDataHandle);
    let f = s();
    Cn(() => {
      const Or = s(), qo = h(), Xi = qo.shouldShowHistory || qo.shouldShowHistoryEditor;
      !f && Or && Xi && p({ shouldShowHistory: false, shouldShowHistoryEditor: false }), f = Or;
    });
    const _ = vt(() => h().composerId), b = vt(() => i.composerViewsService.getInputDelegate(_())), { selectedConversationComposerId: y, setSelectedConversationComposerId: S, selectedConversationHandle: k, resolvedConversationHandle: C, resolvedBcId: T } = iOk({ composerDataHandle: d, currentComposer: h, composerId: _ }), I = TEt(oQr, () => t.agentReference?.header.source === "cloud");
    On(() => {
      const Or = C();
      Or.setData("lastFocusedBubbleId", void 0), Or.setData("selectedBubbleId", void 0), Or.setData("editingBubbleId", void 0);
    }), Xc(() => {
      const Or = y(), qo = _();
      Or !== qo && !i.composerViewsService.activeEditorHasTextFocus() && i.composerViewsService.focus(Or);
    });
    const { planUsage: A, spendLimitUsage: P, displayMessage: M, autoModelSelectedDisplayMessage: O, namedModelSelectedDisplayMessage: N, autoBucketModels: U, usageDisplayEnabled: j } = rOk(), [$] = sVe(apn, i.configurationService, "auto"), H = rl(), [G, q] = Wt(false), [K, V] = Wt(void 0), [Y, J] = Wt(0), [Q, te] = Wt(0), ee = vt(() => Y() + Q()), re = AC(oAi) ?? jgl();
    JIg(re, { slot: "toolbar", contributor: "ComposerPane", value: ee }), Xc(() => {
      const Or = (im) => {
        if (!im || im.offsetParent === null) return 0;
        let gi = im.offsetHeight;
        const Zr = im.querySelector(".composer-debug-reproduction-toolbar");
        return Zr && (gi -= Zr.offsetHeight), gi;
      }, qo = () => {
        const gi = (dt?.querySelectorAll("#composer-toolbar-section") ?? [])[0];
        J(Or(gi));
      };
      setTimeout(qo, 0);
      const Xi = new ResizeObserver(() => {
        qo();
      }), ua = () => {
        (dt?.querySelectorAll("#composer-toolbar-section") ?? []).forEach((gi) => {
          Xi.observe(gi);
        });
      };
      ua(), On(() => {
        Xi.disconnect();
      });
      const Td = new Vn(), uu = new Nt();
      Cn(() => {
        const im = Pt();
        uu.clear(), im && uu.add(Xde.observe(im, uu, { childList: true, subtree: true })(() => {
          Td.value || (Td.value = e1(() => {
            Td.clear(), ua(), qo();
          }));
        }));
      }), On(() => {
        uu.dispose(), Td.dispose();
      });
    });
    const ie = vt(() => !!h().createdFromBackgroundAgent?.bcId || !!h().pendingBackgroundAgent), oe = vt(() => i.composerUtilsService.shouldSuggestPlanMode(h().text) && g() !== "plan" && !h().createdFromBackgroundAgent?.bcId && !h().planModeSuggestionUsed), se = vt(() => i.composerUtilsService.shouldSuggestDebugMode(h().text) && g() !== "debug" && g() !== "background" && !h().debugModeSuggestionUsed && !oe()), le = vt(() => i.composerUtilsService.shouldSuggestReviewCta(h().text)), ce = vt(() => le() && !oe()), ae = vt(() => i.composerUtilsService.getPluginKeywordSuggestion(h().text), void 0, { equals: (Or, qo) => Or === qo || Or !== void 0 && qo !== void 0 && Or.pluginId === qo.pluginId && Or.pluginKeyword === qo.pluginKeyword });
    Cn((Or) => {
      const qo = oe();
      return qo && Or === false && i.analyticsService.trackEvent("composer.shift_tab_plan_render"), qo;
    }, false), Cn((Or) => {
      const qo = se();
      return qo && Or === false && i.analyticsService.trackEvent("composer.shift_tab_debug_render"), qo;
    }, false), Cn((Or) => {
      const qo = ce();
      return qo && Or === false && i.analyticsService.trackEvent("composer.review_cta_render"), qo;
    }, false);
    const [de, he] = Wt(null), [ge, pe] = Wt(false), [ve, fe] = Wt(null), [Te, _e] = Wt(false), [Ce, Se] = Wt(null), [Pe, we] = Wt(false), [Ie, Me] = Wt(false), [De, Ne] = Wt(null), [be, je] = Wt(null), [$e, Je] = Wt(""), [Ge, xe] = Wt("user"), Oe = vt(() => ({ current: [] })), ct = vt(() => {
      const Or = ["user"];
      return i.workspaceContextService.getWorkspace().folders.length > 0 && Or.push("project"), Or;
    }), Ye = vt(() => i.workspaceContextService.getWorkspace().folders[0]?.name), [Ve] = Det(async () => {
      try {
        return (await i.cursorAuthenticationService.getEmailAndSignUpType()).email ?? void 0;
      } catch {
        return;
      }
    }), Xe = vt(() => {
      const Or = oe(), qo = se();
      return !Or && !qo ? "control" : i.experimentService.getExperimentParam("suggested_mode_switch", "group", { disableExposureLog: false }) ?? "control";
    }), lt = (Or, qo) => {
      pe(true), he(Or), i.composerNotificationService.showNotification({ type: FT.ModeNudge, composerId: h().composerId, suggestedMode: Or, variant: qo, priority: cqe.INFO });
    }, He = (Or) => {
      Or && (_e(true), i.analyticsService.trackEvent("marketplace.plugin_nudge_shown", { pluginName: Or.pluginName, pluginId: Or.pluginId, keyword: Or.pluginKeyword }), fe(Or.pluginId), i.composerNotificationService.showNotification({ type: FT.PluginSuggestion, composerId: h().composerId, pluginId: Or.pluginId, pluginName: Or.pluginName, pluginDisplayName: Or.pluginDisplayName, pluginKeyword: Or.pluginKeyword, pluginLogoUrl: Or.pluginLogoUrl, priority: cqe.ACTION }));
    }, gt = (Or) => {
      Ne(null), xe("user"), Se(Or);
    }, ht = () => {
      xe("user"), Se(null), Ne(null);
    }, Ae = async () => {
      if (Pe() || Ie()) return;
      const Or = Ce();
      if (!Or) return;
      const qo = Ge();
      Me(false), we(true), Ne(null);
      try {
        const Xi = await i.cursorAuthenticationService.dashboardClient(), ua = { headers: vh(Ai()) };
        if (qo === "project") await i.instantiationService.invokeFunction((im) => im.get(VI)).installProjectPlugin({ type: "first-party", key: Or.name });
        else if (qo === "team") {
          const uu = i.cursorAuthenticationService.getTeamId();
          if (!uu) throw new Error("No team ID available");
          await Xi.installTeamPlugin(new fTn({ pluginId: BigInt(Or.id), teamId: uu }), ua);
        } else await Xi.installUserPlugin(new lot({ pluginId: BigInt(Or.id) }), ua);
        i.instantiationService.invokeFunction((uu) => uu.get(VI)).notifyPluginsChanged(), await i.instantiationService.invokeFunction((uu) => dwl(uu, { hasMcpServers: !!Or.mcpServers?.length, hasSkillsOrRules: !!Or.skills?.length || !!Or.rules?.length, hasCommands: !!Or.commands?.length, hasSubagents: !!Or.subagents?.length })), we(false), Je(h().text), i.analyticsService.trackEvent("marketplace.plugin_nudge_installed", { pluginName: Or.name, pluginId: String(Or.id), scope: qo }), je(Or), Se(null), xe("user");
      } catch (Xi) {
        i.composerLogService.error("Failed to process inline plugin installation:", Xi);
        const ua = gwl(Xi);
        Ne(ua ? `Failed to install plugin: ${ua}` : "Failed to process plugin installation");
      } finally {
        we(false);
      }
    }, ot = async (Or) => {
      const Xi = `Show me how the ${yms(Or)} plugin works`;
      i.analyticsService.trackEvent("marketplace.plugin_nudge_post_install_action", { pluginName: Or.name, pluginId: String(Or.id), action: "try_in_chat" }), je(null), d().setData("recentlyAddedPlugin", Or), i.composerChatService.submitChatMaybeAbortCurrent(_(), Xi, { skipClearInput: true });
    };
    Cn(() => {
      if (!be()) return;
      const Or = h().text, qo = $e();
      Or !== qo && je(null);
    }), Cn(() => {
      if (r || !Ce()) return;
      const Or = (qo) => {
        if (Pe() || Ie()) return;
        qo.key === "Enter" && !qo.shiftKey && (_r && qo.metaKey && !qo.ctrlKey || !_r && qo.ctrlKey && !qo.metaKey) && (qo.preventDefault(), qo.stopPropagation(), Ae());
      };
      document.addEventListener("keydown", Or, { capture: true }), On(() => document.removeEventListener("keydown", Or, { capture: true }));
    }), Cn(() => {
      if (r) return;
      const Or = be();
      if (!Or) return;
      const qo = (Xi) => {
        Xi.key === "Enter" && !Xi.shiftKey && (_r && Xi.metaKey && !Xi.ctrlKey || !_r && Xi.ctrlKey && !Xi.metaKey) && (Xi.preventDefault(), Xi.stopPropagation(), ot(Or));
      };
      document.addEventListener("keydown", qo, { capture: true }), On(() => document.removeEventListener("keydown", qo, { capture: true }));
    }), Cn((Or) => {
      const qo = oe(), Xi = se(), ua = g(), Td = Xe(), uu = () => ({ plan: qo, debug: Xi, lastUnifiedMode: ua });
      if (ge()) return uu();
      const im = Or?.plan ?? false, gi = Or?.debug ?? false, Zr = Or?.lastUnifiedMode ?? ua, vs = Td === "nudge" ? "nudge" : "control";
      return it() && (qo && !im && Zr !== "plan" ? lt("plan", vs) : Xi && !gi && Zr !== "debug" && lt("debug", vs)), uu();
    }), Cn(() => {
      const Or = oe(), qo = se(), Xi = de(), ua = g();
      if (Xi !== null) {
        const Td = ua === Xi, uu = !Or && !qo;
        (Td || uu) && (he(null), i.composerNotificationService.clearNotification(FT.ModeNudge), !Td && uu && pe(false));
      }
    }), Cn((Or) => {
      const qo = g();
      if (!it() || Te()) return { pluginId: null, lastUnifiedMode: qo };
      const Xi = ae(), ua = Xi?.pluginId ?? null, Td = Or?.pluginId ?? null, uu = Or?.lastUnifiedMode ?? qo;
      return ua !== null && ua !== Td && uu !== "background" && Xi !== void 0 && He(Xi), { pluginId: ua, lastUnifiedMode: qo };
    }), Cn(() => {
      const Or = ae(), qo = ve();
      qo !== null && (Or?.pluginId === qo || (fe(null), i.composerNotificationService.clearNotification(FT.PluginSuggestion), Or || _e(false)));
    }), Cn(V_(() => h().text, (Or, qo) => {
      Or !== qo && h().planModeSuggestionUsed && p({ planModeSuggestionUsed: false });
    })), Cn(V_(() => h().text, (Or, qo) => {
      Or !== qo && h().debugModeSuggestionUsed && p({ debugModeSuggestionUsed: false });
    }));
    const Be = vt(() => i.composerDataService.getComposerCapability(d(), mo.BACKGROUND_COMPOSER)), Ue = C3k(SMe, i.themeService), it = vt(() => h().fullConversationHeadersOnly.length === 0 && h().plan === void 0), qe = vt(() => !it()), pt = vt(() => !!h().pluginFlowState);
    let dt, ft;
    const [bt, St] = Wt(false);
    let Et;
    On(() => clearTimeout(Et));
    const kt = () => {
      clearTimeout(Et), St(false);
    }, xt = (Or, qo, Xi) => {
      Or.preventDefault(), Or.stopPropagation();
      const ua = new DragEvent(Or.type, Or);
      ua.hardCodedStopper = true, qo.dispatchEvent(ua), kt(), Xi && Dd.stop(Or, true);
    }, [Pt, Dt] = Wt(void 0), Vt = (Or) => lMw({ event: Or, container: dt, inputHostedByPane: true, focusInput: () => b().focus() }), tn = m0l(G), un = vt(() => t.location === "bar"), kn = vt(() => t.hideHeader === true && t.location === "pane"), oi = () => t.getPaneDropForwardTarget?.() ?? dt?.querySelector(SBl) ?? null, Fn = () => t.getPaneDropForwardTarget !== void 0, [Qt, Sn] = Wt(false), [$n, Mn] = Wt(false), [Un, Xn] = Wt({ x: 0, y: 0 }), [Ti, bi] = Wt({ x: 0, y: 0 }), Qn = 5, [ni, pn] = YB(i.storageService, "composerBarPosition"), [yn, Ln] = YB(i.storageService, "isComposerBarChatCollapsed"), xi = vt(() => un() && yn()), Ci = (Or) => {
      if (!Or || !dt) return null;
      const qo = rl(), Xi = uwl(dt), ua = yBl(Or.x, Or.y - Xi.height, Xi.width, Xi.height, qo);
      return { x: ua.x, y: ua.y + Xi.height };
    };
    Cn(() => {
      if (!un()) return;
      const Or = ni();
      if (Or) {
        const qo = Ci(Or);
        qo && (qo.x !== Or.x || qo.y !== Or.y) && pn(qo);
      }
    });
    const En = (Or) => {
      if (!un()) return;
      const qo = dt?.getBoundingClientRect();
      qo && (Xn({ x: Or.clientX - qo.left, y: Or.clientY - (qo.top + qo.height) }), bi({ x: Or.clientX, y: Or.clientY }));
    }, Dn = (Or) => {
      if (!un()) return;
      if (!Qt()) {
        const Td = Or.clientX - Ti().x, uu = Or.clientY - Ti().y;
        if (Math.sqrt(Td * Td + uu * uu) > Qn) Sn(true);
        else return;
      }
      if (!dt) return;
      const qo = rl(), Xi = uwl(dt), ua = yBl(Or.clientX - Un().x, Or.clientY - Un().y - Xi.height, Xi.width, Xi.height, qo);
      pn({ x: ua.x, y: ua.y + Xi.height });
    };
    Cn(() => {
      if (!un()) return;
      const Or = rl(), qo = () => {
        Sn(false), bi({ x: 0, y: 0 }), Or.removeEventListener("mousemove", Dn);
      };
      (Ti().x !== 0 || Ti().y !== 0) && (Or.addEventListener("mousemove", Dn), Or.addEventListener("mouseup", qo)), On(() => {
        Or.removeEventListener("mousemove", Dn), Or.removeEventListener("mouseup", qo);
      });
    });
    const [Si, Ui] = Wt({ width: N2p, height: L2p }), [Nn, ci] = Wt(null), Pi = (Or, qo) => {
      !un() || !qe() && Or !== "e" && Or !== "w" || (qo.preventDefault(), qo.stopPropagation(), ci(Or));
    }, vi = wEt(() => dt), Yi = (Or) => {
      if (!Nn() || !dt) return;
      const qo = Nn();
      if (!qo) return;
      const Xi = uwl(dt);
      let ua = Xi.width, Td = Xi.height, uu = ni() ? { ...ni() } : void 0;
      const im = Or.movementX, gi = Or.movementY, Zr = rl();
      if (qo.includes("e") || qo.includes("w")) if (qo.includes("e")) {
        const vs = ua + im;
        vs >= Dbi && vs <= DHr && (ua = vs);
      } else {
        const vs = ua - im;
        vs >= Dbi && vs <= DHr && (ua = vs, uu && (uu.x += im));
      }
      if (qo.includes("n") || qo.includes("s")) if (qo.includes("n")) {
        const vs = Td - gi;
        vs >= Nbi && vs <= NHr && (Td = vs, xi() && gi < 0 && Ln(false));
      } else {
        const vs = Td + gi;
        vs >= Nbi && vs <= NHr && (Td = vs, uu && (uu.y += gi));
      }
      if (uu) {
        const vs = yBl(uu.x, uu.y - Td, ua, Td, Zr);
        pn({ x: vs.x, y: vs.y + Td });
      }
      Ui({ width: ua, height: Td });
    }, Bn = () => {
      ci(null);
    };
    Cn(() => {
      if (!un()) return;
      const Or = rl();
      Nn() && (Or.addEventListener("mousemove", Yi), Or.addEventListener("mouseup", Bn)), On(() => {
        Or.removeEventListener("mousemove", Yi), Or.removeEventListener("mouseup", Bn);
      });
    });
    const Tn = () => {
      if (Nn()) switch (Nn()) {
        case "n":
        case "s":
          return "ns-resize";
        case "e":
        case "w":
          return "ew-resize";
      }
      return Qt() ? "grabbing" : "auto";
    }, Zn = wEt(() => un() ? K() : void 0);
    Cn(() => {
      if (!un()) return;
      const Or = rl(), qo = () => {
        const Xi = ni();
        if (Xi) {
          const Td = Ci(Xi);
          Td && pn(Td);
        }
        const ua = { width: Math.min(Math.max(Si().width, Dbi), Or.innerWidth - 2 * PHt), height: Math.min(Math.max(Si().height, Nbi), Or.innerHeight - 2 * PHt) };
        Ui(ua);
      };
      Or.addEventListener("resize", qo), On(() => Or.removeEventListener("resize", qo));
    });
    const tr = vt(() => qe() && !xi() ? `${Si().height}px` : "fit-content"), hi = vt(() => qe() && !xi() ? `${Nbi}px` : "0px"), ui = w2i(d), Ni = vt(() => `composer-history-menu-${h().composerId}`), cr = iJg(t.composerDataHandle), [fs, mi] = Wt(false), [di, Mr] = Wt(void 0, { equals: Clf }), [jr, Ur] = Wt(void 0, { equals: Clf }), Ws = vt(() => i.composerDataService.getHandleIfLoaded(y())), jo = vt(() => {
      try {
        const Or = Ws();
        if (!Or) return false;
        const qo = i.toolCallHumanReviewService.getReviewModelForBubbleWithReview(Or, di());
        return qo ? qo.getKind?.() === J2e.TERMINAL && !qo.getIsShowingInput?.() && qo.getHumanReviewData()?.status === Cv.REQUESTED : false;
      } catch (Or) {
        return i.composerLogService.error("[composer-debug] error in isRunCommandReviewVisible", Or, _()), false;
      }
    }), Ia = vt(() => {
      try {
        const Or = Ws();
        if (!Or) return false;
        const qo = i.toolCallHumanReviewService.getReviewModelForBubbleWithReview(Or, di());
        return qo ? !qo.isExecutionBlocking?.() && qo.getIsShowingInput?.() && qo.getHumanReviewData()?.status === Cv.REQUESTED : false;
      } catch (Or) {
        return i.composerLogService.error("[composer-debug] error in isNonBlockingReviewWithRejectReason", Or, _()), false;
      }
    }), ga = vt(() => h().plan !== void 0 ? g() === "plan" : Ia()), zs = vt(() => {
      if (ga()) return "Steer the plan, or add more details";
      if (h().plan?.isSpec === true) return "Spin up a new thread with this plan as context";
    }), Vs = vt(() => 1), Ra = vt(() => {
      const Or = i.composerDataService.getLoadedConversation(d());
      return ks(() => {
        const qo = i.serverConfigService.cachedServerConfig.chatConfig?.numSummarizationsBeforeWarningShown ?? 10;
        let Xi = 0;
        for (const ua of Or) if (ua.conversationSummary !== void 0 && (Xi++, Xi >= qo)) return true;
        return false;
      });
    }), ur = vt(() => {
      if (!(vi().width > 200 && !un())) return false;
      if (fs()) return true;
      const qo = Ra();
      return qo && mi(true), qo;
    }), wr = vt(() => t.location === "editor"), Es = vt(() => {
      const { width: Or, height: qo } = vi();
      return Or > qo;
    }), eo = vt(() => {
      const Or = t.composerPaneMaxWidth();
      return vi().width < Or + 40 || !Es();
    }), ts = vt(() => "var(--composer-max-width, 840px)"), rr = vt(() => it() && !eo()), Gs = vt(() => !s()), Vr = vt(() => IV(h())), So = vt(() => k()?.data ?? h()), na = vt(() => IV(So())), ll = vt(() => na() && !kTi(So())), Ol = vt(() => u() || Vr() || t.location === "editor" ? true : Gs() || !l()), ia = vt(() => !(!Ol() || t.location === "editor")), co = vt(() => u() || t.location === "editor" ? false : Gs() && l()), [Mi, vn] = Wt(false), [zn, _i] = Wt(false), sr = (Or) => {
      _i(Or);
    }, Gi = vt(() => {
      const Or = _(), qo = it();
      if (co() && Or && !qo) return Ee(dBl, { currentComposerId: Or });
    }), ko = vt(() => co() ? "inline-tabs" : "default"), As = vt(() => {
      if (t.backgroundComposerData) return t.backgroundComposerData;
      const Or = T();
      if (Or) return i.backgroundComposerDataService.data.backgroundComposers.find((qo) => qo.bcId === Or);
    }), Fs = vt(() => As()?.status ?? Po.UNSPECIFIED), [Qo, hl] = Wt(true), [lr, mr] = Wt({}), Bi = (Or) => Or ? lr()[Or] ?? false : false, Hr = (Or, qo) => {
      Or && mr((Xi) => ({ ...Xi, [Or]: qo }));
    }, Ns = vt(() => {
      const Or = T();
      return Bi(Or);
    }), [Io] = Wt(0), fa = JI("send_to_cloud_on_followup"), Ls = JI("midturn_move_to_cloud_ads"), po = vt(() => fa() || Ls()), [ka, Ms] = Wt(i.workspaceContextService.getWorkspace().folders.length), Go = () => {
      Ms(i.workspaceContextService.getWorkspace().folders.length);
    };
    Xc(() => {
      const Or = i.workspaceContextService.onDidChangeWorkspaceFolders(() => {
        Go();
      });
      On(() => {
        Or.dispose();
      });
    });
    const Fl = vt(() => ka() === 1), [Gc, cu] = Wt(/* @__PURE__ */ new Set()), La = async () => {
      if (!po()) {
        cu(/* @__PURE__ */ new Set());
        return;
      }
      if (!i.cursorAuthenticationService.isAuthenticated()) {
        cu(/* @__PURE__ */ new Set());
        return;
      }
      try {
        const qo = await (await i.cursorAuthenticationService.dashboardClient()).getAvailableMcpServers({}), Xi = new Set((qo.servers ?? []).filter((ua) => ua.enabled).map((ua) => ua.name));
        cu(Xi);
      } catch {
        cu(/* @__PURE__ */ new Set());
      }
    };
    Cn(() => {
      if (!po()) {
        cu(/* @__PURE__ */ new Set());
        return;
      }
      La();
    }), Xc(() => {
      const Or = (qo) => {
        if (!po()) {
          cu(/* @__PURE__ */ new Set());
          return;
        }
        La();
      };
      i.cursorAuthenticationService.addLoginChangedListener(Or), On(() => {
        i.cursorAuthenticationService.removeLoginChangedListener(Or);
      });
    });
    const [yl] = Det(() => {
      if (!po()) return;
      const Or = C(), qo = i.composerDataService.getComposerData(Or);
      if (!qo) return;
      const Xi = qo.fullConversationHeadersOnly;
      dxn(Xi);
      const ua = aOk(Wu(Xi));
      if (ua !== void 0) return `${Or.composerId}
${ua}`;
    }, (Or) => {
      const [qo, ...Xi] = Or.split(`
`), ua = lOk(Xi);
      return eXg(ua, (Td) => {
        const uu = i.composerDataService.getHandleIfLoaded(qo);
        return uu ? Lzt(i.composerDataService, uu, Td) : Promise.reject(new Error(`composer ${qo} unloaded during MCP peek`));
      });
    }), rh = vt(() => {
      if (yl.loading || yl.error !== void 0) return true;
      const Or = yl();
      if (!Or || Or.size === 0) return false;
      const qo = Gc();
      for (const Xi of Or) if (!qo.has(Xi)) return true;
      return false;
    }), [Bl, ai] = YB(i.storageService, "lastCloudHandoffUpsellAtUnixMs"), [Jr, Br] = Wt(false), [oa, pl] = Wt(false), [Tl, Gl] = Wt(void 0), dc = vt(() => Be()?.backgroundComposerState), Qd = vt(() => dc()?.handoffInProgress?.() ?? false), Sp = vt(() => dc()?.handoffError?.() ?? void 0), Rg = () => {
      const Or = i.window.navigator;
      if (Or.onLine === false) return true;
      const qo = Or.connection ?? Or.mozConnection ?? Or.webkitConnection;
      if (!qo) return false;
      if (qo.saveData === true) return true;
      const Xi = qo.effectiveType;
      if (Xi === "slow-2g" || Xi === "2g") return true;
      const ua = qo.rtt;
      if (typeof ua == "number" && ua >= 800) return true;
      const Td = qo.downlink;
      return typeof Td == "number" && Td > 0 && Td <= 0.5;
    }, [bf, Qp] = Wt(false);
    Xc(() => {
      const Or = () => {
        Qp(Rg());
      };
      Or();
      const qo = i.window.navigator, Xi = qo.connection ?? qo.mozConnection ?? qo.webkitConnection, ua = () => Or(), Td = () => Or();
      i.window.addEventListener("online", ua), i.window.addEventListener("offline", Td), Xi?.addEventListener && Xi?.removeEventListener && (Xi.addEventListener("change", Or), On(() => {
        Xi.removeEventListener?.("change", Or);
      })), On(() => {
        i.window.removeEventListener("online", ua), i.window.removeEventListener("offline", Td);
      });
    });
    const um = vt(() => Tl() ?? "manual"), Hh = vt(() => {
      const Or = Ws();
      return Or ? i.toolCallHumanReviewService.isToolformerCurrentlyWaitingForReview(Or) : false;
    }), Bg = vt(() => jo() || ce() || Hh()), Qf = vt(() => g() === "agent" && !T() && !h().createdFromBackgroundAgent && !!Be() && h().createdFromBackgroundAgent === void 0), af = vt(() => fa() && Qf()), lf = vt(() => Qf() && ui() === "generating"), $p = 864e5, hb = () => {
      const Or = ks(() => Bl());
      return Or <= 0 ? true : Date.now() - Or >= $p;
    }, kg = () => Fl() && !rh(), vv = () => Ls() && kg() && hb(), C_ = vt(() => {
      const Or = g() === "agent" && (Qd() || Sp() !== void 0), qo = Bg(), Xi = kg() && Ls(), ua = Jr() ? Xi : vv();
      return (lf() && ua || Or) && !oa() && (Jr() || Tl() !== void 0 || Or) && (!qo || Or);
    }), Eb = vt(() => vv() && C_());
    Cn((Or) => {
      const qo = Eb();
      return qo && Or === false && ai(Date.now()), qo;
    }, false);
    const Ib = vt(() => {
      switch (Tl()) {
        case "auto_timeout":
          return { title: "Still running locally?", subtitle: "Move to Cloud to keep running longer without your computer open." };
        case "auto_bad_connection":
          return { title: "Connection looks slow", subtitle: "Move to Cloud so the agent can keep running even if you disconnect." };
        default:
          return { title: "Continue running in Cloud?", subtitle: "Move this agent to the Cloud to run longer without your computer open." };
      }
    }), iy = 18e4;
    Cn(V_(() => ui(), (Or, qo) => {
      if (Or !== "generating" || qo === "generating" || !vv()) return;
      const Xi = setTimeout(() => {
        lf() && vv() && Tl() === void 0 && oa() === false && Jr() === false && Qd() === false && Sp() === void 0 && bf() && Gl("auto_bad_connection");
      }, 1e4), ua = setTimeout(() => {
        lf() && vv() && Tl() === void 0 && oa() === false && Jr() === false && Qd() === false && Sp() === void 0 && Gl("auto_timeout");
      }, iy);
      On(() => {
        clearTimeout(Xi), clearTimeout(ua);
      });
    })), Cn(() => {
      lf() && vv() && Tl() === void 0 && oa() === false && Jr() === false && Qd() === false && Sp() === void 0 && bf() && Gl("auto_bad_connection");
    }), Cn(() => {
      ui() !== "generating" && Qd() === false && Sp() === void 0 && (pl(false), Br(false), Gl(void 0));
    }), Cn(() => {
      Jr() && Be() && Be()?.backgroundComposerActions.initializeBackgroundComposerState();
    });
    const Kc = () => {
      Br(true);
    }, Fh = () => {
      i.analyticsService.trackEvent("composer.cloud_handoff.dismissed", { composerId: _() ?? void 0, trigger: um() }), Be()?.backgroundComposerSetters.setHandoffError(void 0), pl(true), Br(false), Gl(void 0);
    }, Cd = async () => {
      const Or = Be();
      Or && (i.analyticsService.trackEvent("composer.send_to_cloud.clicked", { composerId: _() ?? void 0, entrypoint: "move_to_cloud_confirm", trigger: um() }), await Or.backgroundComposerActions.initializeBackgroundComposerState(), await Or.backgroundComposerActions.handoffLocalRunToCloud(um()));
    }, Ug = vt(() => i.composerDataService.getComposerCapability(C(), mo.QUEUING)), ep = vt(() => Ug()?.getQueueItemsReactive() ?? []), dg = vt(() => {
      const Or = C(), qo = i.composerDataService.getComposerData(Or);
      if (!qo) return 0;
      const Xi = qo.fullConversationHeadersOnly.length;
      return ks(() => s5a({ composerDataService: i.composerDataService, handle: Or, conversation: qo.fullConversationHeadersOnly }).length);
    }), cf = vt(() => ep().length > 0 || dg() > 0), wg = vt(() => {
      const Or = C(), qo = i.composerDataService.getComposerData(Or);
      if (!qo) return [];
      const Xi = qo.fullConversationHeadersOnly.length;
      return i.composerDataService.getLoadedBubbleCount(Or), ks(() => {
        const ua = Wu(qo.fullConversationHeadersOnly), Td = Wu(qo.conversationMap), uu = [];
        for (let im = ua.length - 1; im >= 0; im--) {
          const gi = ua[im];
          if (!gi) continue;
          const Zr = Td[gi.bubbleId];
          if (!Zr) continue;
          Zr.capabilityType === mo.TOOL_FORMER && Zr.toolFormerData?.tool === Ct.ASK_QUESTION && uu.push(gi.bubbleId);
        }
        return uu;
      });
    }), Wh = vt(() => {
      const Or = C();
      for (const qo of wg()) {
        const Xi = i.composerDataService.getComposerBubble(Or, qo);
        if (!Xi) continue;
        const ua = Xi.toolFormerData?.additionalData, Td = ua && "status" in ua ? ua.status : "pending";
        if (Td === "pending" || Td === "loading") return true;
      }
      return false;
    }), Cg = vt(() => {
      const Or = C(), qo = i.composerDataService.getComposerData(Or);
      if (!qo || qo.unifiedMode !== "debug") return false;
      const Xi = i.composerDataService.getLastAiBubble(Or, { skipSummarization: true });
      return Xi ? kms(Xi.text || "").found : false;
    }), kp = vt(() => un() && (cf() || Cg() || Wh())), Gh = vt(() => {
      const Or = As();
      return Or?.isLoaded ? Or.modelDetails : void 0;
    }), ng = (Or) => {
      i.modelConfigService.setModelConfig("background-composer", { modelName: Or.modelName, maxMode: Or.maxMode });
    }, [bm, Jf] = Wt(false), [ql, Eh] = Wt(false);
    Cn(() => {
      ql() || (async () => {
        try {
          const Or = i.workspaceContextService.getWorkspace().folders;
          if (Or.length !== 1) {
            Jf(false), Eh(true);
            return;
          }
          const qo = Or[0].uri, Xi = await i.composerFileService.exists({ uri: rt.joinPath(qo, ".git"), composerData: void 0 });
          let ua = false;
          try {
            const Td = await i.gitContextService.getGitUpstreamURL(qo.fsPath);
            ua = typeof Td == "string" && Td.toLowerCase().includes("github");
          } catch {
            ua = false;
          }
          Jf(!!(Xi && ua));
        } catch {
          Jf(false);
        } finally {
          Eh(true);
        }
      })();
    });
    const U_ = vt(() => !t.hideHeader), zy = vt(() => !t.hideHeader && l() && !U_() && !h().isSpec && !Vr()), Bw = QYg(() => h().subagentInfo?.parentComposerId), Uw = vt(() => h().subagentInfo?.parentComposerId), b0 = () => {
      const Or = Uw();
      Or && i.composerService.openComposer(Or);
    }, y0 = rCt.bindTo(i.contextKeyService);
    Cn(() => {
      if (i.workbenchEnvironmentService.isGlass) return;
      const Or = EPw(i.instantiationService, i.contextKeyService);
      On(() => Or.dispose());
    });
    const GE = e7f({ composerDataHandle: () => k() ?? d(), tabComposerId: _ }), [_u, Rm] = Wt(), [ym, j_] = Wt();
    Cn(() => {
      const Or = k()?.data ?? h(), qo = Or.fullConversationHeadersOnly, Xi = Or.conversationMap, ua = qo.length, Td = Or.isNAL === true, uu = ks(() => {
        const Zr = Wu(qo), vs = Wu(Xi), Jo = [];
        let ac = 5;
        for (let Pc = ua - 1; Pc >= 0 && ac > 0; Pc--) {
          const Ed = vs[Zr[Pc].bubbleId];
          if (Ed?.capabilityType !== mo.TOOL_FORMER) continue;
          const wp = Ed.toolFormerData;
          wp && (wp.tool !== Ct.EDIT_FILE && wp.tool !== Ct.EDIT_FILE_V2 && wp.tool !== Ct.RUN_TERMINAL_COMMAND_V2 && wp.tool !== Ct.MCP && wp.tool !== Ct.CALL_MCP_TOOL && wp.tool !== Ct.CREATE_PLAN && wp.tool !== Ct.WEB_FETCH || (Jo.push(Zr[Pc].bubbleId), ac--));
        }
        return Jo;
      }), im = (() => {
        for (const Zr of uu) {
          const vs = Xi[Zr];
          if (!vs) continue;
          const Jo = vs?.toolFormerData?.additionalData, ac = Jo?.reviewData, Pc = Jo?.status;
          if (ac?.status === Cv.REQUESTED && Pc !== "cancelled" && Pc !== "rejected" && Pc !== "skipped" && Pc !== "success" && Pc !== "error") return vs;
        }
      })();
      Mr(im ? { bubbleId: im.bubbleId, bubbleTool: im.toolFormerData.tool } : void 0);
      let gi;
      if (Td) {
        const Zr = ks(() => {
          const vs = Wu(qo), Jo = Wu(Xi), ac = [];
          for (let Pc = 0; Pc < vs.length; Pc++) {
            const Ed = Jo[vs[Pc].bubbleId];
            if (!Ed || Ed.capabilityType !== mo.TOOL_FORMER) continue;
            const wp = Ed.toolFormerData;
            wp && (wp.tool !== Ct.EDIT_FILE && wp.tool !== Ct.EDIT_FILE_V2 && wp.tool !== Ct.RUN_TERMINAL_COMMAND_V2 && wp.tool !== Ct.MCP && wp.tool !== Ct.CALL_MCP_TOOL && wp.tool !== Ct.CREATE_PLAN && wp.tool !== Ct.WEB_FETCH || ac.push(vs[Pc].bubbleId));
          }
          return ac;
        });
        gi = (() => {
          for (const vs of Zr) {
            const Jo = Xi[vs];
            if (!Jo) continue;
            const ac = Jo?.toolFormerData?.additionalData, Pc = ac?.reviewData, Ed = ac?.status;
            if (Pc?.status === Cv.REQUESTED && Ed !== "cancelled" && Ed !== "rejected" && Ed !== "skipped" && Ed !== "success" && Ed !== "error") return Jo;
          }
        })(), Ur(gi ? { bubbleId: gi.bubbleId, bubbleTool: gi.toolFormerData.tool } : void 0);
      } else Ur(void 0);
    });
    const Nv = { isStandalone: () => false, hasScrollInset: () => false, cloudAgentResubmitGateEnabled: I, switchModeAcceptKeybinding: vt(() => t.switchModeAcceptKeybinding), firstUnreadBubbleId: vt(() => t.composerHeader?.firstUnreadBubbleId) }, _v = vt(() => t.agentReference);
    return Ee($Ve.Provider, { value: _v, get children() {
      return Ee(Ffs.Provider, { value: Nv, get children() {
        return Ee(b2k, { hasFocusWithin: $n, setHasFocusWithin: Mn, location: () => t.location, containerDimensions: vi, bottomInsetCtx: re, get transcriptFindRegistry() {
          return t.transcriptFindRegistry;
        }, get children() {
          return Ee(jaf.Provider, { value: di, get children() {
            return Ee($af.Provider, { value: jr, get children() {
              return Ee(GEl.Provider, { value: _u, get children() {
                return Ee(qEl.Provider, { value: ym, get children() {
                  return [Ee(Ut, { get when() {
                    return h().shouldShowHistory || h().shouldShowHistoryEditor;
                  }, children: (Or) => {
                    const [qo, Xi, ua] = nye(), Td = () => {
                      ua(), p({ shouldShowHistory: false, shouldShowHistoryEditor: false });
                    }, uu = () => {
                      const gi = h().shouldShowHistoryEditor ? i.composerViewsService.getEditorGroupForComposer(h().composerId)?.id : void 0, Zr = (Pc) => Array.from(i.window.document.querySelectorAll(Pc)).filter((wp) => {
                        if (!wp.isConnected) return false;
                        const zm = wp.getBoundingClientRect();
                        if (!Number.isFinite(zm.left) || !Number.isFinite(zm.top) || zm.width <= 0 || zm.height <= 0) return false;
                        const wa = i.window.getComputedStyle(wp);
                        return wa.display !== "none" && wa.visibility !== "hidden";
                      }), vs = h().shouldShowHistoryEditor ? (gi !== void 0 ? Zr(`[${SHe}="${LHt}"][data-history-group-id="${String(gi)}"]`)[0] : void 0) ?? Zr(`[${SHe}="${LHt}"][data-history-composer-id="${h().composerId}"]`)[0] : Zr(`[${SHe}="${Jne}"][data-history-surface="auxiliarybar-header"]`)[0];
                      if (!vs) return;
                      const Jo = vs.getBoundingClientRect(), ac = vs.getAttribute("data-history-menu-alignment") === "left-edge-below";
                      Xi({ x: ac ? Jo.left : Jo.right + 3, y: ac ? Jo.bottom + 2 : Jo.bottom + 8 });
                    };
                    Cn(V_(vi, () => {
                      uu();
                    })), Xc(() => {
                      uu();
                    });
                    let im = true;
                    return Cn(() => {
                      const gi = h().shouldShowHistory || h().shouldShowHistoryEditor;
                      im && !gi && ua(), im = gi ?? false;
                    }), Ee(Ut, { get when() {
                      return qo();
                    }, children: (gi) => Ee(bPw, { get position() {
                      return gi();
                    }, get menuId() {
                      return Ni();
                    }, closeHistoryMenu: () => Td(), get sourceComposerId() {
                      return zr(() => !!h().shouldShowHistoryEditor)() ? h().composerId : void 0;
                    } }) });
                  } }), (() => {
                    var Or = Q7f();
                    Or.addEventListener("drop", (Xi) => {
                      if (Xi.defaultPrevented || Xi.hardCodedStopper) {
                        kt();
                        return;
                      }
                      if (wr()) {
                        const uu = !!Xi.target?.closest(".aislash-editor-input, .full-input-box"), im = _ye() || J9e();
                        if (!uu || im) {
                          kt();
                          return;
                        }
                        Xi.stopImmediatePropagation();
                        const gi = dt?.querySelector(SBl);
                        gi ? xt(Xi, gi, true) : (kt(), Dd.stop(Xi, true));
                        return;
                      }
                      const ua = oi();
                      if (ua) {
                        xt(Xi, ua, Fn());
                        return;
                      }
                      kt();
                    }), Or.addEventListener("dragleave", () => {
                      clearTimeout(Et), Et = setTimeout(() => {
                        St(false);
                      }, 50);
                    }), Or.addEventListener("dragover", (Xi) => {
                      const Td = !!Xi.target?.closest(".aislash-editor-input, .full-input-box"), uu = _ye() || J9e();
                      wr() && (!Td || uu) || (Xi.preventDefault(), clearTimeout(Et), St(true), wr() && Xi.stopPropagation());
                    }), Or.addEventListener("dragenter", (Xi) => {
                      const Td = !!Xi.target?.closest(".aislash-editor-input, .full-input-box"), uu = _ye() || J9e();
                      wr() && (!Td || uu) || (Xi.preventDefault(), clearTimeout(Et), St(true), wr() && Xi.stopPropagation());
                    }), Or.addEventListener("click", () => {
                      const Xi = rl().document.activeElement;
                      (!Xi || !dt?.contains(Xi)) && dt?.focus();
                      const ua = !!Xi && (Xi.closest(".aislash-editor-input") || Xi.closest(".composer-bar-input-buttons") || Xi.closest(".ui-prompt-input")), Td = k(), uu = Td?.data.editingBubbleId, im = Td?.data.currentBubbleId;
                      uu !== im && !ua && Td && Td.setData("editingBubbleId", void 0);
                    }), Or.addEventListener("blur", (Xi) => {
                      const ua = Xi.relatedTarget;
                      dt && (!ua || !dt.contains(ua)) && i.composerViewsService.blur(_(), { restoreFocus: false });
                    }), Or.addEventListener("focusout", () => {
                      Mn(false), y0.set(false);
                    }), Or.addEventListener("focusin", () => {
                      Mn(true), y0.set(true);
                    }), Or.addEventListener("keydown", Vt);
                    var qo = dt;
                    return typeof qo == "function" ? zu(qo, Or) : dt = Or, Le(Or, Ee(Ut, { get when() {
                      return t.mountFindWidget !== false;
                    }, get children() {
                      return Ee($Pw, { composerId: _, containerRef: () => dt });
                    } }), null), Le(Or, Ee(Ut, { get when() {
                      return zr(() => !!qe())() && un();
                    }, get children() {
                      return [(() => {
                        var Xi = Lye();
                        return Xi.addEventListener("mousedown", (ua) => Pi("nw", ua)), `${xP}px` != null ? Xi.style.setProperty("height", `${xP}px`) : Xi.style.removeProperty("height"), `${xP}px` != null ? Xi.style.setProperty("width", `${xP}px`) : Xi.style.removeProperty("width"), bst != null ? Xi.style.setProperty("background", bst) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "nwse-resize"), `-${xP / 2}px` != null ? Xi.style.setProperty("top", `-${xP / 2}px`) : Xi.style.removeProperty("top"), `${WGe - xP / 2}px` != null ? Xi.style.setProperty("left", `${WGe - xP / 2}px`) : Xi.style.removeProperty("left"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "11"), Xi;
                      })(), (() => {
                        var Xi = Lye();
                        return Xi.addEventListener("mousedown", (ua) => Pi("ne", ua)), `${xP}px` != null ? Xi.style.setProperty("height", `${xP}px`) : Xi.style.removeProperty("height"), `${xP}px` != null ? Xi.style.setProperty("width", `${xP}px`) : Xi.style.removeProperty("width"), bst != null ? Xi.style.setProperty("background", bst) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "nesw-resize"), `-${xP / 2}px` != null ? Xi.style.setProperty("top", `-${xP / 2}px`) : Xi.style.removeProperty("top"), `${WGe - xP / 2}px` != null ? Xi.style.setProperty("right", `${WGe - xP / 2}px`) : Xi.style.removeProperty("right"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "11"), Xi;
                      })(), (() => {
                        var Xi = Lye();
                        return Xi.addEventListener("mousedown", (ua) => Pi("n", ua)), `${GW}px` != null ? Xi.style.setProperty("height", `${GW}px`) : Xi.style.removeProperty("height"), W0e != null ? Xi.style.setProperty("background", W0e) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "ns-resize"), `-${GW / 2}px` != null ? Xi.style.setProperty("top", `-${GW / 2}px`) : Xi.style.removeProperty("top"), Xi.style.setProperty("left", "0px"), Xi.style.setProperty("right", "0px"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "10"), Xi;
                      })(), (() => {
                        var Xi = Lye();
                        return Xi.addEventListener("mousedown", (ua) => Pi("w", ua)), `${GW + WGe}px` != null ? Xi.style.setProperty("width", `${GW + WGe}px`) : Xi.style.removeProperty("width"), W0e != null ? Xi.style.setProperty("background", W0e) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "ew-resize"), Xi.style.setProperty("top", "0px"), Xi.style.setProperty("left", "0px"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "10"), xn((ua) => (ua = `${Zn().height + 10}px`) != null ? Xi.style.setProperty("bottom", ua) : Xi.style.removeProperty("bottom")), Xi;
                      })(), (() => {
                        var Xi = Lye();
                        return Xi.addEventListener("mousedown", (ua) => Pi("e", ua)), `${GW + WGe}px` != null ? Xi.style.setProperty("width", `${GW + WGe}px`) : Xi.style.removeProperty("width"), W0e != null ? Xi.style.setProperty("background", W0e) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "ew-resize"), Xi.style.setProperty("top", "0px"), Xi.style.setProperty("right", "0px"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "10"), xn((ua) => (ua = `${Zn().height + 10}px`) != null ? Xi.style.setProperty("bottom", ua) : Xi.style.removeProperty("bottom")), Xi;
                      })()];
                    } }), null), Le(Or, Ee(Ut, { get when() {
                      return zr(() => !!(l() && !s() && !it() && co() && !t.hideHeader))() && _();
                    }, get children() {
                      var Xi = j7f();
                      return Xi.style.setProperty("width", "100%"), Xi.style.setProperty("max-width", "none"), Xi.style.setProperty("margin", "0"), Xi.style.setProperty("overflow", "hidden"), Xi.style.setProperty("display", "flex"), Xi.style.setProperty("align-items", "center"), Xi.style.setProperty("padding", "0 8px"), Xi.style.setProperty("box-sizing", "border-box"), Le(Xi, Ee(dBl, { get currentComposerId() {
                        return _();
                      }, get shouldAttach() {
                        return co();
                      }, onReadyChange: sr })), xn(() => Xi.classList.toggle("inline-agent-tabs-container--visible", !!(zn() && co()))), Xi;
                    } }), null), Le(Or, Ee(Ut, { get when() {
                      return qe() || T();
                    }, get children() {
                      var Xi = W7f(), ua = Xi.firstChild;
                      Xi.addEventListener("mousedown", (uu) => {
                        uu.stopImmediatePropagation();
                      });
                      var Td = ft;
                      return typeof Td == "function" ? zu(Td, Xi) : ft = Xi, Le(Xi, Ee(Ut, { get when() {
                        return zy();
                      }, get children() {
                        var uu = $7f(), im = uu.firstChild, gi = im.nextSibling;
                        return Le(im, Ee(c7f, { get title() {
                          return h().name;
                        }, fallback: "New Agent", get hasWorktree() {
                          return !!h().gitWorktree;
                        }, get projectName() {
                          return Bw();
                        }, onProjectClick: b0, get isSpec() {
                          return h().isSpec;
                        }, get isBackgroundMode() {
                          return ie();
                        } })), Le(gi, Ee(eb, { get codicon() {
                          return yt.ellipsisTwo;
                        }, iconClass: "!text-[14px]", onClick: (Zr) => {
                          Zr.stopPropagation(), Zr.preventDefault(), i.contextMenuService.showContextMenu({ getAnchor: () => Zr.currentTarget, getActions: GE, contextKeyService: i.contextKeyService, domForShadowRoot: dE().body });
                        }, hintText: "More actions" })), xn((Zr) => (Zr = ts()) != null ? uu.style.setProperty("max-width", Zr) : uu.style.removeProperty("max-width")), uu;
                      } }), ua), Le(Xi, Ee(YPw, { composerId: _, currentComposer: h, isStandaloneComposer: kn, selectedConversationComposerId: y, setSelectedConversationComposerId: S, updateCurrentComposer: p, sharedBorder: tn }), ua), Le(Xi, Ee(Ut, { get when() {
                        return U_();
                      }, get children() {
                        return Ee(Ut, { get when() {
                          return zr(() => !!ie())() && T();
                        }, get fallback() {
                          return Ee(sMw, { get composerDataHandle() {
                            return k() ?? d();
                          }, get composerHeader() {
                            return t.composerHeader;
                          }, get hideTitleContainer() {
                            return Ol();
                          }, get hideMainRow() {
                            return ia();
                          }, get titleOverride() {
                            return Gi();
                          }, get titleVariant() {
                            return ko();
                          } });
                        }, get children() {
                          return Ee(aPw, { get bcId() {
                            return T();
                          }, get foregroundComposerHandle() {
                            return C();
                          }, bgModelDetails: Gh, get hideTitleContainer() {
                            return Ol();
                          }, hideMainRow: false, get titleOverride() {
                            return Gi();
                          }, get titleVariant() {
                            return ko();
                          } });
                        } });
                      } }), ua), Le(Xi, Ee(Ut, { get when() {
                        return un();
                      }, get children() {
                        var uu = H7f(), im = uu.firstChild, gi = im.firstChild, Zr = im.nextSibling;
                        return uu.addEventListener("mousedown", (vs) => {
                          En(vs);
                        }), uu.addEventListener("mouseup", () => {
                          Qt() || Nn() || Ln((vs) => !vs);
                        }), uu.style.setProperty("padding", "2px 8px"), uu.style.setProperty("padding-right", "4px"), uu.style.setProperty("display", "flex"), uu.style.setProperty("justify-content", "space-between"), uu.style.setProperty("align-items", "center"), im.style.setProperty("color", "var(--vscode-input-placeholderForeground)"), im.style.setProperty("font-size", "12px"), im.style.setProperty("display", "flex"), im.style.setProperty("align-items", "center"), im.style.setProperty("gap", "4px"), Le(im, Ee(pjk, { get status() {
                          return ui();
                        }, size: "small", get style() {
                          return { opacity: xi() ? 1 : 0, transition: "opacity 0.2s" };
                        } }), null), Zr.style.setProperty("display", "flex"), Zr.style.setProperty("align-items", "center"), Zr.style.setProperty("gap", "4px"), Le(Zr, Ee(Ut, { get when() {
                          return Fs() === Po.CREATING || Fs() === Po.RUNNING;
                        }, get children() {
                          return Ee(ol, { variant: "text", hintText: "Cancel Cloud Agent", onClick: (vs) => {
                            vs.stopPropagation(), vs.preventDefault();
                            const Jo = T();
                            Jo && i.backgroundComposerService.archiveBackgroundComposer(Jo);
                          }, children: "Cancel" });
                        } }), null), Le(Zr, Ee(sXg, { get composerId() {
                          return d().data.composerId;
                        }, setPosition: pn, setShouldCollapseMessages: Ln }), null), xn((vs) => (vs = xi() ? "none" : tn()) != null ? uu.style.setProperty("border-bottom", vs) : uu.style.removeProperty("border-bottom")), uu;
                      } }), ua), Le(ua, Ee(e2, { get children() {
                        return [Ee(Bp, { get when() {
                          return zr(() => h().isSpec === true)() && h().plan;
                        }, children: (uu) => Ee(A2w, { plan: uu, composerDataHandle: d }) }), Ee(Bp, { when: true, get children() {
                          return Ee(v2w, { get enableStickyHumanMessages() {
                            return t.enableStickyHumanMessages ?? true;
                          }, disableAutoScrollToBottom: false, get isSubagent() {
                            return ll();
                          }, composerDataHandle: () => k() ?? d(), identityScope: "ambient-agent", hideHints: false, get isInputFocused() {
                            return G();
                          }, get location() {
                            return t.location;
                          }, get resolvedBcId() {
                            return T();
                          }, get stableConversationId() {
                            return t.agentReference?.stableId;
                          }, get reportInitialVisibleContentReady() {
                            return t.reportInitialVisibleContentReady;
                          }, get reportVisibleContentDisturbance() {
                            return t.reportVisibleContentDisturbance;
                          }, get scrollRestoreStore() {
                            return t.scrollRestoreStore;
                          }, get backgroundComposerData() {
                            return As();
                          }, get aiMessageStyle() {
                            return un() ? { "padding-left": "12px", "padding-right": "12px" } : void 0;
                          }, get humanMessageStyle() {
                            return un() ? { "padding-left": "8px", "padding-right": "8px" } : void 0;
                          }, get statusContainerStyle() {
                            return un() ? { "padding-left": "14px", "padding-right": "14px", "padding-bottom": "14px" } : void 0;
                          }, setLastHumanBubbleId: Rm, setLastAiBubbleId: j_, get onScrollStateChange() {
                            return t.scrolledToBottomChanged;
                          }, get setStandaloneSidecarContainer() {
                            return t.setStandaloneSidecarContainer;
                          }, get setConversationNavigationHandle() {
                            return t.setConversationNavigationHandle;
                          } });
                        } })];
                      } })), xn((uu) => {
                        var im = { display: "flex", "flex-direction": "column", ...xi() ? {} : { flex: 1, "min-height": "0px" }, ...un() ? { margin: `0px ${WGe}px`, "box-sizing": "border-box", border: tn(), "border-bottom": "none", "border-top-left-radius": "5px", "border-top-right-radius": "5px", "box-shadow": "0 0 4px 1px var(--vscode-widget-shadow)", position: "relative", overflow: "hidden", background: "var(--vscode-input-background, var(--vscode-editor-background))", "z-index": "8" } : { width: "100%", background: kn() ? "transparent" : Ue() } }, gi = "conversations" + (jo() ? " run-command-review-active" : "") + (zy() ? " has-sticky-title" : ""), Zr = { position: "relative", overflow: "hidden", ...xi() ? { display: "none", "pointer-events": "none" } : { flex: 1 } };
                        return uu.e = Ea(Xi, im, uu.e), gi !== uu.t && Er(Xi, uu.t = gi), uu.a = Ea(ua, Zr, uu.a), uu;
                      }, { e: void 0, t: void 0, a: void 0 }), Xi;
                    } }), null), Le(Or, Ee(Ut, { get when() {
                      return zr(() => !!(l() && !s() && it() && co() && !t.hideHeader))() && _();
                    }, get children() {
                      var Xi = G7f();
                      return Le(Xi, Ee(dBl, { get currentComposerId() {
                        return _();
                      }, get shouldAttach() {
                        return co();
                      }, onReadyChange: vn })), xn((ua) => {
                        var Td = !!(Mi() && co()), uu = { width: "100%", "max-width": "none", margin: "0", overflow: "hidden", display: "flex", "align-items": "center", padding: "0 8px", "box-sizing": "border-box", ...rr() ? { position: "absolute", top: "0", left: "0", right: "0" } : {} };
                        return Td !== ua.e && Xi.classList.toggle("inline-agent-tabs-empty-chat-container--visible", ua.e = Td), ua.t = Ea(Xi, uu, ua.t), ua;
                      }, { e: void 0, t: void 0 }), Xi;
                    } }), null), Le(Or, Ee(Ut, { get when() {
                      return C_();
                    }, get children() {
                      var Xi = X7f();
                      return Le(Xi, Ee(Ut, { get when() {
                        return zr(() => !Jr())() && Tl() !== void 0;
                      }, get children() {
                        var ua = q7f(), Td = ua.firstChild, uu = Td.nextSibling, im = uu.firstChild, gi = im.nextSibling, Zr = uu.nextSibling, vs = Zr.firstChild, Jo = vs.nextSibling;
                        return Le(im, () => Ib().title), Le(gi, () => Ib().subtitle), vs.addEventListener("click", Fh), Jo.addEventListener("click", () => {
                          i.analyticsService.trackEvent("composer.cloud_handoff.ui_opened", { composerId: _() ?? void 0, source: "auto_card", trigger: um() }), Kc();
                        }), ua;
                      } }), null), Le(Xi, Ee(Ut, { get when() {
                        return Jr() || Qd() || Sp() !== void 0;
                      }, get children() {
                        var ua = Y7f(), Td = ua.firstChild, uu = Td.firstChild, im = uu.nextSibling, gi = Td.nextSibling, Zr = gi.nextSibling, vs = Zr.firstChild;
                        return im.addEventListener("click", Fh), Le(ua, Ee(Ut, { get when() {
                          return Be();
                        }, get children() {
                          var Jo = z7f();
                          return Le(Jo, () => {
                            const ac = Be();
                            return Ee(ABf, { get gitState() {
                              return ac.backgroundComposerState.gitState();
                            }, onGitStateChange: (Pc) => ac.backgroundComposerSetters.setGitState(Pc), get isBranchLoading() {
                              return ac.backgroundComposerState.isBranchLoading();
                            }, onPickerClose: () => {
                              b().focus();
                            } });
                          }), Jo;
                        } }), Zr), Le(ua, Ee(Ut, { get when() {
                          return Qd();
                        }, get children() {
                          return V7f();
                        } }), Zr), Le(ua, Ee(Ut, { get when() {
                          return Sp();
                        }, get children() {
                          var Jo = K7f();
                          return Le(Jo, Sp), Jo;
                        } }), Zr), vs.addEventListener("click", () => void Cd()), Le(vs, () => Qd() ? "Transferring…" : "Confirm & Move to Cloud"), xn((Jo) => {
                          var ac = Qd(), Pc = Qd();
                          return ac !== Jo.e && (im.disabled = Jo.e = ac), Pc !== Jo.t && (vs.disabled = Jo.t = Pc), Jo;
                        }, { e: void 0, t: void 0 }), ua;
                      } }), null), xn(() => Xi.classList.toggle("composer-cloud-transfer-wrapper--toolbar-visible", !!kp())), Xi;
                    } }), null), Le(Or, Ee(eOk, { nonReactiveDelay: 0, get children() {
                      return [Ee(Ut, { get when() {
                        return zr(() => !T())() && !Vr();
                      }, get children() {
                        return Ee(ulf, { setRef: V, get composerDataHandle() {
                          return k() ?? d();
                        }, get location() {
                          return t.location;
                        }, isInputFocused: G, setIsInputFocused: q, isPaneDragging: bt, toolbarHeight: Y, setPopupHeight: te, get showSendModeSelector() {
                          return zr(() => !!(af() && kg()))() && qe();
                        }, get minHeight() {
                          return it() ? 100 : void 0;
                        }, get maxHeight() {
                          return it() ? 340 : void 0;
                        }, get overrideShouldCollapse() {
                          return un() && Yhn ? true : void 0;
                        }, get buttonArea() {
                          return zr(() => !!(qe() || !un()))() ? void 0 : Ee(sXg, { get composerId() {
                            return d().data.composerId;
                          }, setPosition: pn, setShouldCollapseMessages: Ln });
                        }, get containerStyle() {
                          return { margin: un() ? "0px" : h().fullConversationHeadersOnly.length === 0 ? "1px 12px 10px 12px" : "0px 10px 10px 10px", ...un() ? { position: "relative", "z-index": "10" } : { "margin-bottom": h().isSpec ? "10px" : h().fullConversationHeadersOnly.length === 0 ? "0px" : "10px" }, "max-width": ts(), width: "100%", "margin-left": "auto", "margin-right": "auto", "box-sizing": "border-box", padding: "0px 16px", "padding-top": it() && t.location === "editor" ? "var(--conversation-editor-message-top-inset, 10px)" : "0px" };
                        }, get style() {
                          return { margin: "0px", border: tn(), ...un() ? { "box-shadow": "0 0 4px 1px var(--vscode-widget-shadow)" } : {}, opacity: Vs(), "pointer-events": "auto" };
                        }, onSubmit: () => {
                          Ln(false);
                        }, extraCommandListeners: [{ command: g0t, callback: (Xi) => {
                          if (r) return false;
                          const ua = k() ?? d();
                          return ua.data.unifiedMode !== "debug" ? false : OXg({ e: Xi, composerDataHandle: ua, plainText: ua.data.text || "", services: i });
                        } }], get role() {
                          return qe() || pt() ? "bottom" : "top";
                        }, onStartDrag: En, get placeholder() {
                          return zs();
                        }, onPluginSuggestionAccepted: gt, get hideBottomOptions() {
                          return !!Ce() || !!be();
                        }, get aboveContent() {
                          return (() => {
                            var Xi = Lye();
                            return zu(Dt, Xi), Xi.style.setProperty("display", "contents"), Le(Xi, Ee(Ut, { get when() {
                              return qe() && !un() && i.workbenchEnvironmentService.isGlass !== true;
                            }, get children() {
                              return Ee(UOk, { composerDataHandle: () => k() ?? d() });
                            } }), null), Le(Xi, Ee(MOk, { get composerDataHandle() {
                              return k() ?? d();
                            } }), null), Le(Xi, Ee(Ut, { get when() {
                              return !un();
                            }, get children() {
                              var ua = Lye();
                              return ua.style.setProperty("position", "relative"), ua.style.setProperty("z-index", "10"), ua.style.setProperty("padding", "0px 9px"), Le(ua, Ee(H$k, { get composerDataHandle() {
                                return k() ?? d();
                              }, isInputFocused: G, get forceCollapsedTopBar() {
                                return xi();
                              }, get forceVisible() {
                                return qe() || pt();
                              }, style: { background: "color-mix(in srgb, var(--vscode-sideBar-background) 30%, var(--vscode-input-background))", border: "1px solid var(--cursor-stroke-tertiary)", "border-bottom": "none", "border-top-left-radius": `${Lbi}px`, "border-top-right-radius": `${Lbi}px` } })), ua;
                            } }), null), Xi;
                          })();
                        }, get belowContent() {
                          return zr(() => !!(Ce() || be() || ur()))() ? [Ee(Ut, { get when() {
                            return Ce();
                          }, children: (Xi) => Ee(hcf, { get selectedPlugin() {
                            return Xi();
                          }, action: "add", get scopeOptions() {
                            return ct();
                          }, get selectedScope() {
                            return Ge();
                          }, onScopeChange: xe, get workspaceName() {
                            return Ye();
                          }, get userEmail() {
                            return Ve();
                          }, get scopeOptionRefsRef() {
                            return Oe();
                          }, location: "below_input", onDetailsClick: () => {
                            i.instantiationService.invokeFunction((ua) => {
                              U4e(ua, { kind: "detail", pluginId: Xi().id.toString() });
                            });
                          }, onConfirm: () => void Ae(), onCancel: ht, get isLoading() {
                            return Pe();
                          }, get error() {
                            return De();
                          }, get portalRoot() {
                            return i.portalElement;
                          } }) }), Ee(Ut, { get when() {
                            return be();
                          }, children: (Xi) => Ee(zPw, { get plugin() {
                            return Xi();
                          }, onTryInChat: ot, onDetailsClick: () => {
                            i.analyticsService.trackEvent("marketplace.plugin_nudge_post_install_action", { pluginName: Xi().name, pluginId: String(Xi().id), action: "details" }), i.instantiationService.invokeFunction((ua) => {
                              U4e(ua, { kind: "detail", pluginId: Xi().id.toString() });
                            }), je(null);
                          } }) }), Ee(Ut, { get when() {
                            return ur();
                          }, get children() {
                            var Xi = J7f(), ua = Xi.firstChild, Td = ua.firstChild;
                            return Xi.style.setProperty("display", "flex"), Xi.style.setProperty("gap", "12px"), Xi.style.setProperty("align-items", "center"), Xi.style.setProperty("justify-content", "space-between"), Xi.style.setProperty("padding", "2px 8px"), Xi.style.setProperty("height", "28px"), ua.style.setProperty("display", "flex"), ua.style.setProperty("gap", "4px"), ua.style.setProperty("align-items", "center"), ua.style.setProperty("justify-content", "flex-end"), ua.style.setProperty("margin-left", "auto"), Le(ua, Ee(ol, { variant: "text", onClick: cr, hintText: "Create a new chat with the summary of this conversation", nonReactiveHintTextDelay: 600, class: "!px-0", children: "New Chat" }), null), Xi;
                          } })] : null;
                        }, get children() {
                          return Ee(Ut, { get when() {
                            return un();
                          }, get children() {
                            return [Ee(Ut, { get when() {
                              return qe();
                            }, get children() {
                              return [(() => {
                                var Xi = Lye();
                                return Xi.addEventListener("mousedown", (ua) => Pi("s", ua)), `${GW}px` != null ? Xi.style.setProperty("height", `${GW}px`) : Xi.style.removeProperty("height"), W0e != null ? Xi.style.setProperty("background", W0e) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "ns-resize"), `-${GW / 2}px` != null ? Xi.style.setProperty("bottom", `-${GW / 2}px`) : Xi.style.removeProperty("bottom"), Xi.style.setProperty("left", "0px"), Xi.style.setProperty("right", "0px"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "10"), Xi;
                              })(), (() => {
                                var Xi = Lye();
                                return Xi.addEventListener("mousedown", (ua) => Pi("sw", ua)), `${xP}px` != null ? Xi.style.setProperty("height", `${xP}px`) : Xi.style.removeProperty("height"), `${xP}px` != null ? Xi.style.setProperty("width", `${xP}px`) : Xi.style.removeProperty("width"), bst != null ? Xi.style.setProperty("background", bst) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "nesw-resize"), `-${xP / 2}px` != null ? Xi.style.setProperty("bottom", `-${xP / 2}px`) : Xi.style.removeProperty("bottom"), `-${xP / 2}px` != null ? Xi.style.setProperty("left", `-${xP / 2}px`) : Xi.style.removeProperty("left"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "11"), Xi;
                              })(), (() => {
                                var Xi = Lye();
                                return Xi.addEventListener("mousedown", (ua) => Pi("se", ua)), `${xP}px` != null ? Xi.style.setProperty("height", `${xP}px`) : Xi.style.removeProperty("height"), `${xP}px` != null ? Xi.style.setProperty("width", `${xP}px`) : Xi.style.removeProperty("width"), bst != null ? Xi.style.setProperty("background", bst) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "nwse-resize"), `-${xP / 2}px` != null ? Xi.style.setProperty("bottom", `-${xP / 2}px`) : Xi.style.removeProperty("bottom"), `-${xP / 2}px` != null ? Xi.style.setProperty("right", `-${xP / 2}px`) : Xi.style.removeProperty("right"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "11"), Xi;
                              })()];
                            } }), (() => {
                              var Xi = Lye();
                              return Xi.addEventListener("mousedown", (ua) => Pi("w", ua)), `${GW}px` != null ? Xi.style.setProperty("width", `${GW}px`) : Xi.style.removeProperty("width"), W0e != null ? Xi.style.setProperty("background", W0e) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "ew-resize"), Xi.style.setProperty("top", "0px"), Xi.style.setProperty("bottom", "0px"), `-${GW / 2}px` != null ? Xi.style.setProperty("left", `-${GW / 2}px`) : Xi.style.removeProperty("left"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "10"), Xi;
                            })(), (() => {
                              var Xi = Lye();
                              return Xi.addEventListener("mousedown", (ua) => Pi("e", ua)), `${GW}px` != null ? Xi.style.setProperty("width", `${GW}px`) : Xi.style.removeProperty("width"), W0e != null ? Xi.style.setProperty("background", W0e) : Xi.style.removeProperty("background"), Xi.style.setProperty("cursor", "ew-resize"), Xi.style.setProperty("top", "0px"), Xi.style.setProperty("bottom", "0px"), `-${GW / 2}px` != null ? Xi.style.setProperty("right", `-${GW / 2}px`) : Xi.style.removeProperty("right"), Xi.style.setProperty("position", "absolute"), Xi.style.setProperty("z-index", "10"), Xi;
                            })()];
                          } });
                        } });
                      } }), Ee(Ut, { get when() {
                        return zr(() => !!T())() && !As()?.isArchived;
                      }, get children() {
                        return Ee(a8f, { get bcId() {
                          return T();
                        }, isAttached: Qo, isPaused: Ns, composerStatus: Fs, get modelDetails() {
                          return Gh();
                        }, setModelDetails: ng, forceTextTrigger: Io, onReconnect: () => hl(true), onFollowupAcceptedWhilePaused: () => Hr(T(), false), onTogglePause: () => {
                          const Xi = T();
                          if (!Xi) {
                            i.composerLogService.error("[background composer] No bcId available");
                            return;
                          }
                          const ua = Bi(Xi);
                          (async () => {
                            try {
                              if (Fs() == Po.CREATING) {
                                i.backgroundComposerService.archiveBackgroundComposer(Xi);
                                return;
                              }
                              const Td = await i.aiService.backgroundComposerClient();
                              ua ? (await Td.resumeBackgroundComposer({ bcId: Xi }), Hr(Xi, false)) : (await Td.pauseBackgroundComposer({ bcId: Xi }), Hr(Xi, true), i.backgroundComposerEventService.fireDidRequestPause({ bcId: Xi }));
                            } catch (Td) {
                              i.composerLogService.error("[background composer] Failed to toggle pause:", Td), i.notificationService.error(`Failed to ${ua ? "resume" : "pause"} background composer: ${Td.message}`);
                            }
                          })();
                        }, get style() {
                          return { "max-width": ts(), width: "100%", "box-sizing": "border-box", padding: "0px 10px", "margin-bottom": "10px" };
                        } });
                      } })];
                    } }), null), Le(Or, Ee(Ut, { get when() {
                      return zr(() => !un() && !qe())() && !T();
                    }, get children() {
                      var Xi = Lye();
                      return Le(Xi, Ee(Ut, { get when() {
                        return ce();
                      }, get children() {
                        return Ee(ol, { variant: "text", class: "composer-tab-to-plan", onClick: () => {
                          i.analyticsService.trackEvent("composer.review_cta_click"), A2i(i), kPn(i, { where: { location: "allWorkspaces", source: { kind: "workingTree" } }, inBackgroundSubsidized: false });
                        }, get children() {
                          return Z7f();
                        } });
                      } })), xn((ua) => Ea(Xi, { display: "flex", "align-items": "center", "justify-content": "space-between", padding: "8px 12px 4px 16px", "min-height": "30px", "flex-wrap": "wrap", "box-sizing": "border-box", "max-width": ts(), width: "100%", "margin-left": "auto", "margin-right": "auto", ...it() ? {} : { "padding-top": "0px" }, "margin-bottom": "16px" }, ua)), Xi;
                    } }), null), Le(Or, Ee(Ut, { get when() {
                      return !kn();
                    }, get children() {
                      return Ee(Fuf, { get autoBucketModels() {
                        return U();
                      }, get autoModelSelectedDisplayMessage() {
                        return O();
                      }, get displayMessage() {
                        return M();
                      }, get displayMode() {
                        return $();
                      }, composerDataHandle: d, get namedModelSelectedDisplayMessage() {
                        return N();
                      }, get planUsage() {
                        return A();
                      }, get spendLimitUsage() {
                        return P();
                      }, get style() {
                        return zr(() => !qe())() ? zr(() => !!rr())() ? { "max-width": ts(), "margin-right": "auto", "margin-left": "auto" } : { display: "flex", "flex-direction": "column", flex: 1, "justify-content": "end" } : { "max-width": ts(), "margin-right": "auto", "margin-left": "auto" };
                      }, get usageDisplayEnabled() {
                        return j();
                      } });
                    } }), null), xn((Xi) => {
                      var ua = { "box-sizing": "border-box", outline: "none", display: "flex", "flex-direction": "column", "--conversation-editor-message-top-inset": "10px", ...t.style, ...kn() ? {} : { "--composer-pane-background": "var(--vscode-editor-background)" }, background: kn() ? "transparent" : "var(--composer-pane-background)", ...un() ? { position: "fixed", ...ni() ? { bottom: `${H.innerHeight - ni().y}px`, left: `${ni().x}px` } : { bottom: "20px", left: "50%", transform: "translateX(-50%)" }, width: `${Si().width}px`, height: tr(), "min-width": `${Dbi}px`, "min-height": hi(), "max-width": `${DHr}px`, "max-height": `${NHr}px`, "z-index": "2548", "justify-content": "flex-end", cursor: Tn(), transition: Qt() || Nn() ? "none" : eUf } : { width: "100%", height: "100%", overflow: "hidden", position: "relative", ...kn() ? { "max-width": "none", margin: "0" } : {}, ...rr() ? { "justify-content": "center" } : {} } }, Td = _(), uu = t.location, im = ui(), gi = $X(h())?.targetId, Zr = "composer-bar editor" + (it() ? " empty" : "");
                      return Xi.e = Ea(Or, ua, Xi.e), Td !== Xi.t && lo(Or, "data-composer-id", Xi.t = Td), uu !== Xi.a && lo(Or, "data-composer-location", Xi.a = uu), im !== Xi.o && lo(Or, "data-composer-status", Xi.o = im), gi !== Xi.i && lo(Or, "data-editing-queue-item-id", Xi.i = gi), Zr !== Xi.n && Er(Or, Xi.n = Zr), Xi;
                    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), Or;
                  })()];
                } });
              } });
            } });
          } });
        } });
      } });
    } });
  } catch (n) {
    e.e = n;
  } finally {
    e.d();
  }
}
var U7f, Lye, j7f, $7f, H7f, W7f, G7f, q7f, z7f, V7f, K7f, Y7f, X7f, Z7f, Q7f, J7f, eUf, SBl, 