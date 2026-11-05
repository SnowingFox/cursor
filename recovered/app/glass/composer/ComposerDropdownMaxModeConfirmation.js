// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerDropdownMaxModeConfirmation.js range:29292208..29321433
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, pi, gs, ta, vo, FS, z6k
// wrapper-init: K6k
// hoisted-owner: ComposerUnifiedDropdown.js (app-out-vs-workbench-workbench-glass-main-js:5128); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

K6k = L({ "ComposerDropdownMaxModeConfirmation.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), gs(), ta(), vo(), FS(), z6k(), QJg = wt("<div class=max-mode-confirmation-container><div class=max-mode-header><div class=max-mode-back><i></i></div><div class=max-mode-label><span class=max-mode-label-text>MAX MODE</span></div></div><div class=max-mode-confirmation-content>Maxes out context windows and tool calls. For advanced users that are cost insensitive.<br>Billed at API-pricing.</div><div class=max-mode-confirmation-footer><div class=max-mode-pricing-button>View Pricing <i>");
} });
function nCl(t) {
  if (t.includes(",")) {
    const n = t.split(","), i = [...new Set(n)];
    let r = "";
    for (const s of i) {
      const o = n.filter((l) => l === s).length, a = nCl(s);
      r += o > 1 ? `${o}× ${a}` : a, s !== i[i.length - 1] && (r += ", ");
    }
    return r;
  }
  if (t === EV) return "Auto";
  if (t === "gpt-3.5-turbo") return "gpt-3.5";
  let e = t;
  return e.includes("-thinking") && (e = e.replace("-thinking", "")), e;
}
function Y6k(t) {
  switch (t) {
    case "background-conversation":
      return "Switching modes is unavailable in background conversations";
    case "background-agent-conversation":
      return "Switching modes is unavailable in conversations created from a background agent";
    case "plan-execution":
      return "Mode used to build this plan";
    default:
      return t;
  }
}
function X6k(t) {
  const e = Gr(), [n] = YB(e.storageService, "planExecUseChatModel"), [i, r] = Wt({ type: "modes" }), s = vt(() => t.availableModels.find((ce) => ce.name === EV)), o = vt(() => t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE === "cmd-k" ? false : s()?.namedModelSectionIndex === 0), a = vt(() => {
    const ce = new Set((t.selectedModelId ?? "").split(","));
    return ce.size === 1 && ce.has(EV);
  }), l = vt(() => {
    const ae = (t.selectedModelId ?? "").split(",").filter((de) => !!de);
    return new Set(ae);
  }), c = ks(l), u = yt.brain, d = () => t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE === "background-composer", [h, p] = Wt(""), [g, f] = Wt(void 0), [_, b] = Wt(false), [y, S] = Wt(false), [k, C] = Wt(void 0);
  let T;
  const I = () => {
    T !== void 0 && (clearTimeout(T), T = void 0);
  }, A = () => {
    y() || k() === void 0 && (H(), C(false), I(), T = window.setTimeout(() => {
      S(true), C(void 0), T = void 0;
    }, ref));
  }, P = () => {
    e.analyticsService.trackEvent("composer.auto_toggled", { initialState: "on", modelUnchangedShowNamedModels: true }), A();
  };
  On(() => {
    I();
  });
  const M = vt(() => o() ? a() && !y() && h() === "" : false), [O, N] = Wt(false);
  Cn(() => {
    O() && N(false);
  });
  const U = (ce) => ce ? ce.includes(",") ? true : e.modelConfigService.doesModelSupportThinking(ce) : false, j = () => {
    const ce = q();
    return ce && ce.getBoundingClientRect().left < 250 ? Bu.RIGHT : Bu.LEFT;
  }, { showMenuHover: $, hideMenuHover: H, MenuHoverPortal: G } = Ccs({ delay: 10, position: j, compact: false }), [q, K] = Wt(null), [V, Y] = Wt(void 0), J = (ce, ae) => {
    if (!ae) return ce;
    const de = OB(ae);
    return ce.map((he) => {
      const { score: ge, labelMatch: pe } = Jz({ label: he.label }, de, true, x7, {});
      return { mode: he, score: ge, labelMatch: pe };
    }).filter((he) => he.score > 0).sort((he, ge) => ge.score - he.score).map((he) => ({ ...he.mode, labelMatch: he.labelMatch }));
  }, Q = (ce) => `composer-mode-${t.dropdownId}-${ce}`, te = (ce) => {
    const ae = ce.filter((de) => de.id !== EV && e.modelConfigService.doesModelSupportMaxMode(de.id));
    return ae.length > 0 ? ae[0].id : void 0;
  }, ee = (ce) => {
    const ae = ce.filter((de) => de.id !== EV && e.modelConfigService.doesModelSupportNonMaxMode(de.id));
    return ae.length > 0 ? ae[0].id : EV;
  }, re = (ce, ae) => {
    if (t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE === "plan-execution" && (n() ?? true)) {
      t.onSelectMaxMode(ae);
      return;
    }
    if (ae) {
      const ge = t.selectedModelId;
      if (!(!a() && e.modelConfigService.doesModelSupportMaxMode(ge))) {
        const ve = te(ce);
        ve && t.onSelectModel(ve);
      }
    } else {
      const ge = t.selectedModelId;
      if (!(!a() && e.modelConfigService.doesModelSupportNonMaxMode(ge))) {
        const ve = ee(ce);
        t.onSelectModel(ve);
      }
    }
    t.onSelectMaxMode(ae);
  }, [ie, oe] = Wt(t.initialShowMaxConfirmation || false), se = vt(() => {
    if (ie()) return [{ id: "max-mode-confirmation", type: "custom", content: Ee(V6k, { onClose: () => {
      oe(false);
    }, onConfirm: () => {
      const he = t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE || "composer";
      e.modelConfigService.setModelConfig(he, { maxMode: true });
      const pe = V();
      if (Y(void 0), pe) {
        t.onSelectModel(pe);
        return;
      }
      const ve = t.availableModels.map((fe) => ({ id: fe.name, title: fe.name }));
      re(ve, true);
    } }) }];
    const ce = () => {
      let he = [];
      const ge = t.selectedModelId, pe = (Ie) => {
        const Me = Ie.name, De = Ie.status, Ne = Ie.clientDisplayName ?? Me, be = nCl(Ne), je = e.modelConfigService.doesModelSupportAgent(Me), $e = U(Me), Je = De !== fbt.UNSPECIFIED, Ge = t.isInMaxMode ? Ie.tooltipDataForMaxMode : Ie.tooltipData;
        let xe;
        Ge?.icon && (xe = Ge.icon.length > 1 ? Gn.fromId(Ge.icon) : Ge.icon), xe = Je ? yt.warningTwo : xe;
        const Oe = xe ? `${Gn.isThemeIcon(xe) ? Gn.asClassName(xe) : ""} !opacity-60` : void 0, ct = t.isInMaxMode, Ye = !e.modelConfigService.doesModelSupportNonMaxMode(Me), Ve = d() && Ie.isRecommendedForBackgroundComposer === true, Xe = Ie.variants?.[0]?.tagline?.trim(), lt = Ie.namedModelSectionIndex === 0 && !!Xe && !M();
        let He;
        Ve ? He = "Recommended" : Ye ? He = "MAX Only" : He = xe;
        const gt = t.composerDataHandle, ht = t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE;
        let Ae;
        if (ht === "background-composer") {
          const Ue = e.modelConfigService.getModelConfig(ht);
          Ae = Ue?.modelName && Ue.modelName !== "" ? Ue.modelName : EV;
        } else Ae = gt?.data.modelConfig?.modelName ?? "";
        const Be = Ae.split(",").map((Ue) => Ue.trim()).filter((Ue) => Ue.length > 0).filter((Ue) => Ue === Me).length;
        return { id: Me, title: t.transformModel?.(be) ?? be, showType: t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE && t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE !== "composer" && t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE !== "background-composer" ? Me === ge ? "check" : void 0 : Be > 0 || Me === ge ? "check" : void 0, onClick: (Ue) => G6k({ isMaxOnly: Ye, isMaxModeActive: !!ct, modelName: Me, vsContext: e, displayMode: i, setPendingMaxOnlyModel: Y, setShowConfirmation: oe, close: () => t.close(), onSelectModel: t.onSelectModel, onSelectMaxMode: t.onSelectMaxMode })(Ue), _supportsAgent: je, _supportsThinking: $e, _supportsMaxMode: Ie.supportsMaxMode, _serializableTitle: () => be, onMouseEnter: Ge ? ggs($, Ge) : void 0, onFocus: Ge ? ggs($, Ge) : void 0, onMouseLeave: H, onBlur: H, subTitle: He, subTitleClass: Ye ? "opacity-[0.60] !text-[12px]" : Oe, isDisabled: De === fbt.DISABLED, isRecommendedForBackgroundComposer: Ie.isRecommendedForBackgroundComposer, backgroundComposerSortOrder: Ie.backgroundComposerSortOrder, namedModelSectionIndex: Ie.namedModelSectionIndex, tagline: Ie.tagline, customSubTitle: (() => {
          var Ue = tef(), it = Ue.firstChild;
          return Le(it, Ee(Ut, { when: $e, get children() {
            var qe = iCl();
            return qe.style.setProperty("line-height", "1"), qe.style.setProperty("vertical-align", "middle"), xn(() => Er(qe, `order-0 !mr-[2px] !text-[10px] opacity-60 ${Gn.asClassName(u)}`)), qe;
          } }), null), Le(it, Ee(Ut, { when: lt, get children() {
            var qe = JJg();
            return lo(qe, "title", Xe), Le(qe, Xe), qe;
          } }), null), Le(Ue, Ee(Ut, { when: Be > 1, get children() {
            var qe = eef(), pt = qe.firstChild;
            return qe.style.setProperty("line-height", "1"), Le(qe, Be, pt), qe;
          } }), null), Ue;
        })() };
      }, ve = t.availableModels.map(pe), fe = d() && !_() && h() === "";
      let Te = fe ? ve.filter((Ie) => Ie.isRecommendedForBackgroundComposer === true || c.has(Ie.id)) : ve;
      fe && ve.length > Te.length && (Te = [...Te, { id: "show-all-models", title: "Show all models…", class: "cursor-pointer opacity-[0.60] !text-[12px]", onClick: () => b(true) }]), d() && (Te = Te.filter((Ie) => Ie.id !== EV));
      const _e = d();
      Te.sort((Ie, Me) => {
        if (Ie.id === EV) return -1;
        if (Me.id === EV) return 1;
        if (_e) {
          const De = Ie.backgroundComposerSortOrder !== void 0, Ne = Me.backgroundComposerSortOrder !== void 0;
          if (De && Ne) return Ie.backgroundComposerSortOrder - Me.backgroundComposerSortOrder;
          if (De !== Ne) return De ? -1 : 1;
          const be = Ie.isRecommendedForBackgroundComposer === true, je = Me.isRecommendedForBackgroundComposer === true;
          if (be !== je) return be ? -1 : 1;
        }
        return 0;
      });
      const Ce = Te.some((Ie) => Ie._supportsMaxMode), Se = t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE, Pe = Se === "plan-execution" ? n() ?? true : false;
      if (Se === "plan-execution") {
        const Me = (t.composerDataHandle?.data.modelConfig ?? e.modelConfigService.getModelConfig("composer")).modelName || EV, Ne = t.availableModels.find(($e) => $e.name === Me)?.clientDisplayName ?? Me, be = Ne.toLowerCase() === EV ? "Auto" : Ne;
        Te = [{ id: "use-chat-model", title: be, subTitle: "Agent model", preventSubTitleShrink: true, showType: Pe ? "check" : void 0, _serializableTitle: () => `${be} agent model`, onClick: () => {
          t.onSelectModel("use-chat-model"), t.close();
        } }, ...Te];
      }
      if (Te.length === 0) he.push({ type: "message", message: "No models found" });
      else {
        const Ie = Te.find((Ne) => Ne.id === EV), Me = Ie !== void 0 && h() === "" && a(), De = ZJg({ isMaxEnabled: d() ? true : t.isInMaxMode, onMaxChange: (Ne) => {
          re(Te, Ne);
        }, enforceMaxMode: t.enforceMaxMode, isDisabled: d() || !Ce, setShowConfirmation: oe, reactiveStorageService: e.reactiveStorageService, openerService: e.openerService });
        if (d()) t.hideMaxMode || (he.push({ type: "items", items: [De] }), he.push({ type: "divider" })), he.push({ type: "items", items: Te });
        else if (Ie !== void 0) {
          const Ne = t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE || "composer", je = o() && (y() || !a() || h() !== ""), $e = () => {
            const Je = Te.filter((xe) => xe.namedModelSectionIndex !== void 0), Ge = [...new Set(Je.map((xe) => xe.namedModelSectionIndex))].sort((xe, Oe) => xe - Oe);
            Ge.forEach((xe, Oe) => {
              const ct = Je.filter((Ye) => Ye.namedModelSectionIndex === xe);
              ct.length !== 0 && (he.push({ type: "items", items: ct }), Oe < Ge.length - 1 && he.push({ type: "divider" }));
            });
          };
          if (M()) he.push({ type: "items", items: [{ ...Ie, titleRightIcon: () => Ee(z2i, { isSelected: () => k() ?? a() }), showType: void 0, description: Ie?.tagline, onClick: P, onMouseEnter: void 0, onFocus: void 0, onMouseLeave: void 0, onBlur: void 0 }] });
          else if (je) {
            const Je = [De];
            !t.hideMaxMode && Je.length > 0 && (he.push({ type: "items", items: Je }), he.push({ type: "divider" })), $e();
          } else he.push({ type: "items", items: [VJg(a, t.onSelectModel, t.availableModels.map((Je) => Je.name), true, Ne), ...!Me && !t.hideMaxMode ? [De] : []] }), Me || (he.push({ type: "divider" }), $e());
        } else t.hideMaxMode || (he.push({ type: "items", items: [De] }), he.push({ type: "divider" })), he.push({ type: "items", items: Te });
      }
      const we = h().toLowerCase().replaceAll("-", "");
      if (we) {
        he = he.map((De) => (De.type === "items" && (De.items = De.items.map((Ne) => {
          const { score: be, labelMatch: je } = Jz({ label: Ne._serializableTitle ? Ne._serializableTitle() : Ne.title }, OB(we), true, x7, {});
          return { ...Ne, labelMatch: je, _score: be };
        }).filter((Ne) => Ne._score > 0).sort((Ne, be) => be._score - Ne._score)), De)).filter((De) => !!De && (De.type === "items" ? De.items.length !== 0 : true)), he = he.filter((De, Ne) => De.type === "divider" ? Ne === 0 || he[Ne - 1].type !== "divider" : true);
        const Ie = he[0];
        Ie && Ie.type === "divider" && (he = he.slice(1));
        const Me = he[he.length - 1];
        Me && Me.type === "divider" && (he = he.slice(0, -1)), he.length === 0 && he.push({ type: "message", message: "No models found" });
      }
      return (!a() || y() === true) && (Te.some((Me) => Me.id !== EV) && he.push({ type: "divider" }), he.push({ type: "items", items: [{ id: "open-model-settings", title: "Add Models", showType: "chevronRight", class: "!text-[10px]", onClick: () => {
        e.commandService.executeCommand(vP, "models"), t.close();
      } }] })), he;
    }, ae = () => {
      const he = h().toLowerCase(), ge = [];
      let pe = J(t.modes, he).map((ve) => {
        const fe = e.composerModesService.getModeDescription(ve.id), Te = ve.isDisabled === true, _e = Te && ve.disabledReason ? ve.disabledReason : fe, Ce = _e ? ggs($, { primaryText: _e, secondaryText: !Te && ve.label === "Agent" ? "Recommended" : void 0, secondaryWarningText: false }, ve.id) : void 0;
        return { title: ve.label, subTitle: ve.keybinding, preventSubTitleShrink: true, id: Q(ve.id), subTitleClass: `keybinding-font-settings ${ve.id === t.selectedModeId ? "opacity-60" : "opacity-40"}`, icon: ve.icon, showType: ve.id === t.selectedModeId ? "check" : void 0, class: "[&_*]:!cursor-pointer", onClick: () => {
          if (Te) return;
          const Se = t.composerDataHandle ? e.composerDataService.getComposerData(t.composerDataHandle) : void 0;
          ve.id !== t.selectedModeId && e.analyticsService.trackEvent("composer.mode_switched", { entrypoint: "dropdown", fromModeId: t.selectedModeId, toModeId: ve.id, model: t.selectedModelId, composerId: Se?.composerId, invocationID: Se?.latestChatGenerationUUID }), ve.id === "plan" && e.analyticsService.trackEvent("composer.plan_mode.entry_point", { entrypoint: "dropdown", model: t.selectedModelId, composerId: Se?.composerId, invocationID: Se?.latestChatGenerationUUID }), t.onSelectMode(ve.id), t.close();
        }, onFocus: Ce, onBlur: H, onMouseEnter: Te ? Ce : void 0, onMouseLeave: Te ? H : void 0, isDisabled: Te, labelMatch: ve.labelMatch, _modeId: ve.id };
      });
      return pe.length === 0 && t.shouldAllowSearchMode ? ge.push({ type: "message", message: "No modes found" }) : ge.push({ type: "items", items: pe }), t.shouldShowModelToggleInMain && (ge.push({ type: "divider" }), ge.push({ type: "items", items: [{ id: "composer-mode-models-hint", title: nCl(t.selectedModelId), subTitle: `${_r ? "⌘⌥" : "⌃⎇"}/`, showType: "chevronRight", onClick: () => {
        r({ type: "models" }), p("");
      } }] })), ge;
    }, de = i();
    switch (de.type) {
      case "models":
        return ce();
      case "modes":
        return ae();
      default: {
        const he = de;
        throw new Error(`Unknown display type: ${he}`);
      }
    }
  });
  Cn(() => {
    const ce = () => {
      if (t.isDropdownShowing) {
        const he = J(t.modes, h()).filter((ge) => !ge.isDisabled);
        if (he.length > 0) {
          const pe = (he.findIndex((fe) => fe.id === t.selectedModeId) + 1) % he.length, ve = he[pe];
          ve && (t.onSelectMode(ve.id), f(Q(ve.id)));
        }
      }
    }, ae = e.composerViewsService.onTriggerModeMenu(ce);
    On(() => {
      ae.dispose();
    });
  });
  const le = vt(() => t.role !== "bottom" && !t.forceAbsolute);
  return [Ee(vMe, { get id() {
    return t.dropdownId;
  }, get shouldMountInPortal() {
    return t.shouldMountInPortal;
  }, get maxHeight() {
    return zr(() => i().type === "models" && !t.shouldShowModelToggleInMain)() ? 250 + (ie() ? 26 : 0) : 250;
  }, get isRelative() {
    return le();
  }, get position() {
    return t.position;
  }, get "data-testid"() {
    return t["data-testid"];
  }, onClose: (ce) => {
    b(false), N(true), I(), C(void 0), t.close(!!ce), S(false);
  }, setInternalMenuDomRef: (ce) => {
    K(ce);
  }, get sections() {
    return se();
  }, get shouldShowInput() {
    return zr(() => t.shouldShowSearch !== false && i().type !== "modes")() && !ie();
  }, get searchTerm() {
    return h();
  }, onSearchTermChange: p, get selectedId() {
    return g();
  }, onSelectedIdChange: f, get inputPlaceholder() {
    return t.searchPlaceholder ?? (i().type === "models" ? "Search models" : "Search");
  }, get enablePrefixMatching() {
    return i().type === "modes";
  }, get nonBlockingRoot() {
    return `#${i().type === "models" && !t.shouldShowModelToggleInMain ? t.uniqueModelDropdownId : t.dropdownId}`;
  }, nonBlockingDirection: "vertical", marginToNonBlockingRoot: 3, get anchor() {
    return t.anchor;
  }, get width() {
    return zr(() => i().type === "models" && !t.shouldShowModelToggleInMain)() ? o() ? 213 : 183 : 140;
  }, get initialFocusSectionIndex() {
    return i().type === "models" ? 1 : 0;
  }, get style() {
    return { ...t.style, ...i().type === "models" || i().type === "modes" ? { "min-width": o() ? "183px" : "170px" } : {} };
  } }), Ee(G, {})];
}
function Z6k(t) {
  const e = Gr(), n = vt(() => t.disabledModeToggleReason !== void 0), [i, r] = YB(e.storageService, "planExecUseChatModel"), [s, o, a] = nye(), l = qgl(), c = vt(() => t.leftAccessory?.()), u = () => {
    a(), t.setIsDropdownShowing?.(false), C();
  };
  Cn(V_(() => l?.containerDimensions()?.width, () => {
    u();
  }));
  const d = vt(() => t.modes.find((M) => M.id === t.selectedModeId)), h = vt(() => t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE ?? "composer"), p = vt(() => h() === "background-composer"), g = B6k({ specificModelField: h }), f = () => t.hardcodedModelDetails, _ = vt(() => {
    const M = f();
    return !M || t.onModelChange !== void 0 ? g.availableModels() : [{ name: M.modelName ?? EV, clientDisplayName: M.modelName ?? EV, status: fbt.UNSPECIFIED, supportsMaxMode: M.maxMode ?? false }];
  }), b = vt(() => {
    const M = f();
    return M ? M.modelName ?? EV : g.currentPersistentModel();
  }), y = vt(() => {
    const M = f();
    if (M) return !!M.maxMode;
    if (p()) return true;
    const O = t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE;
    if (O && O !== "composer" && O !== "background-composer") return g.currentMaxMode();
    if (t.composerDataHandle) {
      const N = t.composerDataHandle.data.modelConfig?.maxMode;
      if (N !== void 0) return N;
    }
    return g.currentMaxMode();
  });
  Cn(() => {
    if (!p()) return;
    let M = true;
    g.currentMaxMode() !== M && (e.modelConfigService.setMaxMode(M, h()), t.composerDataHandle && e.modelConfigService.setModelConfigForComposer(t.composerDataHandle, { maxMode: M }));
  });
  const S = vt(() => {
    const M = t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE;
    if (M && M !== "composer" && M !== "background-composer") return b();
    const O = t.composerDataHandle?.data.modelConfig?.modelName;
    if (t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE !== "background-composer" && O && O !== "") return O;
    const N = b();
    return t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE === "background-composer" && e.composerLogService.debug("[DEBUG currentModel READ background-composer]", { result: N, configFromService: e.modelConfigService.getModelConfig("background-composer"), composerHandleModel: t.composerDataHandle?.data.modelConfig?.modelName }), N;
  }), { showHover: k, hideHover: C } = pme({ delay: 300, additionalClasses: ["chat-hover-tooltip"] });
  Cn((M) => {
    const O = s();
    return !O && M && u(), O;
  });
  const T = (M) => M.endsWith("-thinking") ? M.replace("-thinking", "") : M === "gpt-3.5-turbo" ? "gpt-3.5" : M, I = N6(N0n);
  let A;
  const P = vt(() => t.role !== "bottom" && !t.forceAbsolute);
  return (() => {
    var M = nef(), O = A;
    return typeof O == "function" ? zu(O, M) : A = M, M.style.setProperty("max-width", "100%"), Le(M, Ee(Ut, { when: !EMo, get children() {
      return Ee(Ut, { get when() {
        return d();
      }, children: (N) => (() => {
        var U = ief(), j = U.firstChild;
        return xbe(U, Zy({ get id() {
          return t.uniqueDropdownId;
        }, get style() {
          return { display: "flex", gap: "2px", "font-size": "12px", "align-items": "center", "line-height": "1.4", "min-width": 0, "max-width": "100%", padding: "2px 4px 2px 8px", "border-radius": "24px", "flex-shrink": 0, cursor: n() ? "default" : "pointer", "padding-right": n() && !t.hideModelabel && N().label ? "10px" : void 0, ...t.modeButtonStyle };
        }, get class() {
          return `composer-unified-dropdown !border-none !rounded-full ${n() ? "disabled" : ""}`;
        }, get "data-mode"() {
          return t.selectedModeId;
        } }, () => n() ? { onMouseEnter: ($) => {
          !s() && t.disabledModeToggleReason && k($, Y6k(t.disabledModeToggleReason));
        }, onMouseLeave: () => {
          C();
        } } : { onClick: ($) => {
          if (s()) {
            u();
            return;
          }
          C();
          const H = $.currentTarget.getBoundingClientRect(), G = A?.getBoundingClientRect();
          G && (P() ? t.role === "bottom" ? o({ x: -6, y: -3 }) : o({ x: -6, y: G.height + 3 }) : t.role === "bottom" ? o({ x: H.left - 6, y: H.top - 3 }) : o({ x: H.left - 6, y: H.bottom + 3 }), t.setIsDropdownShowing?.(true));
        }, onMouseEnter: ($) => {
          if (!s()) {
            const H = I();
            k($, H ? `Switch Agent Mode (${H})` : "Switch Agent Mode");
          }
        }, onMouseLeave: () => {
          C();
        } }), false, true), j.style.setProperty("display", "flex"), j.style.setProperty("align-items", "center"), j.style.setProperty("gap", "4px"), j.style.setProperty("min-width", "0"), j.style.setProperty("max-width", "100%"), j.style.setProperty("overflow", "hidden"), Le(j, Ee(Ut, { get when() {
          return N().icon;
        }, children: ($) => (() => {
          var H = fgs();
          return H.style.setProperty("font-size", "16px"), H.style.setProperty("flex-shrink", "0"), H.style.setProperty("width", "16px"), H.style.setProperty("height", "16px"), H.style.setProperty("display", "flex"), H.style.setProperty("align-items", "center"), H.style.setProperty("justify-content", "center"), H.style.setProperty("opacity", "0.5"), (xa ? "18px" : void 0) != null ? H.style.setProperty("line-height", xa ? "18px" : void 0) : H.style.removeProperty("line-height"), xn(() => Er(H, Gn.asClassName($()))), H;
        })() }), null), Le(j, Ee(Ut, { get when() {
          return !t.hideModelabel && N().label && !t.shouldHideAgentLabel;
        }, get children() {
          var $ = fgs();
          return $.style.setProperty("min-width", "0"), $.style.setProperty("max-width", "100%"), $.style.setProperty("overflow", "hidden"), $.style.setProperty("text-overflow", "ellipsis"), $.style.setProperty("white-space", "nowrap"), (_r ? void 0 : "16px") != null ? $.style.setProperty("line-height", _r ? void 0 : "16px") : $.style.removeProperty("line-height"), $.style.setProperty("display", "flex"), $.style.setProperty("align-items", "center"), $.style.setProperty("gap", "0px"), $.style.setProperty("height", "16px"), $.style.setProperty("font-weight", "400"), Le($, Ee(Ut, { get when() {
            return !t.hideModelabel && N().label && !t.shouldHideAgentLabel;
          }, get children() {
            var H = iCl();
            return H.style.setProperty("opacity", "0.8"), H.style.setProperty("max-width", "120px"), H.style.setProperty("overflow", "hidden"), (_r ? void 0 : "16px") != null ? H.style.setProperty("height", _r ? void 0 : "16px") : H.style.removeProperty("height"), (_r ? void 0 : "1.2") != null ? H.style.setProperty("line-height", _r ? void 0 : "1.2") : H.style.removeProperty("line-height"), H.style.setProperty("text-overflow", "ellipsis"), H.style.setProperty("white-space", "nowrap"), H.style.setProperty("min-width", "0"), Le(H, () => N().label), H;
          } })), $;
        } }), null), Le(U, Ee(Ut, { get when() {
          return !n();
        }, get children() {
          var $ = fgs();
          return $.style.setProperty("font-size", "14px"), $.style.setProperty("flex-shrink", "0"), $.style.setProperty("opacity", "0.5"), xn(() => Er($, Gn.asClassName(t.shouldFlipChevron ? yt.chevronUp : yt.chevronDown))), $;
        } }), null), U;
      })() });
    } }), null), Le(M, Ee(Ut, { get when() {
      return c();
    }, children: (N) => N() }), null), Le(M, Ee(Ut, { get when() {
      return s();
    }, children: (N) => Ee(X6k, { get position() {
      return N();
    }, get shouldMountInPortal() {
      return P() ? false : t.shouldMountInPortal;
    }, get composerDataHandle() {
      return t.composerDataHandle;
    }, get bubbleId() {
      return t.bubbleId;
    }, get anchor() {
      return t.anchorOverride ?? (t.anchorBelow !== void 0 ? t.anchorBelow ? "top-left" : "bottom-left" : t.role === "bottom" ? "bottom-left" : "top-left");
    }, onSelectMode: (U) => {
      t.onSelectMode(U);
    }, onSelectModel: (U) => {
      const j = t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE;
      if (j === "background-composer" && e.composerLogService.debug("[DEBUG onSelectModel background-composer]", { selectedId: U, specificField: j, currentConfigBefore: e.modelConfigService.getModelConfig("background-composer"), composerHandleModelBefore: t.composerDataHandle?.data.modelConfig?.modelName }), j === "plan-execution" && U === "use-chat-model") {
        r(true), u();
        return;
      }
      const $ = b();
      if (e.analyticsService.trackEvent("composer.model_selected", { fromModel: $, toModel: U, maxMode: y(), chatGenerationUUID: t.composerDataHandle?.data.latestChatGenerationUUID ?? "" }), e.analyticsService.trackEvent("model_picker.interaction", { action: "model_selected", pickerSource: "ide_legacy", useModelParameters: false, modelId: U, parameters: "[]" }), t.hardcodedModelDetails && t.onModelChange) {
        t.onModelChange(U, y());
        return;
      }
      if (j === "plan-execution" && U !== "use-chat-model" && r(false), j && j !== "background-composer") {
        e.commandService.executeCommand(uJn, U, j);
        return;
      }
      const H = j || "composer";
      e.modelConfigService.setModelConfig(H, { modelName: U }), t.composerDataHandle && (!j || j === "background-composer") && e.modelConfigService.setModelConfigForComposer(t.composerDataHandle, { modelName: U }, H), j === "background-composer" && e.composerLogService.debug("[DEBUG onSelectModel background-composer AFTER]", { selectedId: U, currentConfigAfter: e.modelConfigService.getModelConfig("background-composer"), composerHandleModelAfter: t.composerDataHandle?.data.modelConfig?.modelName });
    }, close: (U) => {
      U || t.onCloseIgnoreClick?.(), t.onClose?.(), u();
    }, get availableModels() {
      return _();
    }, get selectedModelId() {
      const U = S() || EV;
      return t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE === "plan-execution" && (i() ?? true) ? "use-chat-model" : U;
    }, get isInMaxMode() {
      return y();
    }, get enforceMaxMode() {
      return t.enforceMaxMode;
    }, onSelectMaxMode: (U) => {
      if (t.hardcodedModelDetails && t.onModelChange) {
        t.onModelChange(b() || EV, U);
        return;
      }
      const j = t.nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE;
      if (!p()) {
        const $ = j || "composer";
        t.composerDataHandle ? e.modelConfigService.setModelConfigForComposer(t.composerDataHandle, { maxMode: U }, $, { updateGlobalConfig: true }) : e.modelConfigService.setMaxMode(U, $);
      }
    }, get modes() {
      return t.modes;
    }, get selectedModeId() {
      return t.selectedModeId;
    }, get shouldShowModelToggleInMain() {
      return t.shouldCollapseModelToggleIn;
    }, get dropdownId() {
      return t.uniqueDropdownId;
    }, get uniqueModelDropdownId() {
      return t.uniqueModelDropdownId;
    }, transformModel: T, shouldAllowSearchMode: true, get isDropdownShowing() {
      return t.isDropdownShowing;
    }, get nonReactiveSpecificModelField_OVERRIDES_COMPOSER_MODE() {
      return h();
    }, get initialShowMaxConfirmation() {
      return t.initialShowMaxConfirmation;
    }, get hideMaxMode() {
      return t.hideMaxMode;
    }, get role() {
      return t.role;
    }, get shouldShowSearch() {
      return t.shouldShowSearch;
    }, get searchPlaceholder() {
      return t.searchPlaceholder;
    } }) }), null), M;
  })();
}
var iCl, JJg, eef, tef, nef, fgs, ief, EV, ref, 