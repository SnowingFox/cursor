// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VscodeModelPickerProductTrigger.react.js range:29347388..29355619
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.212Z
// wrapper: nPi deps:5 [E, Mt, K2i, GTa, u]
// declarations: Cgs
// anchors: data-pointer-hover-intent, new-models-dot, model-picker-new-models-dot, max-badge-text
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
nPi = L({ "VscodeModelPickerProductTrigger.react.js"() {
  "use strict";
  E(), Mt(), K2i(), SCl = Xef(function({ displayName: e, inheritColor: n = false, stylexStyles: i }) {
    return ree(N4, { className: n ? "vscode-model-picker__trigger-markdown vscode-model-picker__trigger-markdown--inherit" : "vscode-model-picker__trigger-markdown", singleLine: true, stylexStyles: [GTa(), i], children: e });
  }), WPn = Xef(function({ appearance: e = "default", buttonVariant: n = "ghost", chevronSize: i = 9, displayNameOverride: r, freeUserPolicy: s, isMaxMode: o, loading: a = false, modelPickerNudge: l, models: c, onMarkNudgeAsSeen: u, open: d = false, ref: h, selections: p, rounded: g, showChevron: f = true, showMaxBadge: _ = false, showNewModelsDot: b = false, showTriggerAlertIcon: y = false, size: S = "sm", splitVariantDetail: k = false, tooltipPlacement: C = "bottom", tooltipShortcut: T, tooltipShortcutRows: I, tooltipTitle: A, triggerAlertLabel: P, triggerProps: M, triggerStyle: O, triggerTextStyle: N, useBaseModelDisplayName: U = false }) {
    const j = s?.kind === "models-disabled", $ = P?.trim(), H = y || $ !== void 0 && $.length > 0, G = a ? "Loading models" : r ?? A4k(p, c, U, o), q = $ !== void 0 && $.length > 0 ? $ : j ? "Auto" : G, K = _ && o && !j && !H, V = b && !j && !H, Y = p[0], J = k && q === G && l === void 0 && Y !== void 0 ? x4k(G, Fjt(Y, c)) : void 0, Q = J ? `${G}${K ? " MAX" : ""}` : void 0, te = Qef(d), ee = Qef(false);
    T4k(() => {
      const ge = te.current;
      te.current = d, !ge && d && (ee.current = l !== void 0 && l.length > 0), ge && !d && ee.current && u && (u(), ee.current = false);
    }, [l, u, d]);
    const re = e === "prompt" ? "vscode-model-picker__trigger--prompt" : e === "input-shell" ? "vscode-model-picker__trigger--input-shell" : void 0, [ie, oe] = E4k(false), se = M?.onPointerMove, le = M?.onPointerLeave, ce = Zef((ge) => {
      se?.(ge), oe(true);
    }, [se]), ae = Zef((ge) => {
      le?.(ge), oe(false);
    }, [le]), de = I4k(An, { "aria-busy": a || void 0, "aria-label": Q, className: ri("vscode-model-picker__trigger", re), ref: h, ...M, "data-pointer-hover-intent": ie ? true : void 0, onPointerLeave: ae, onPointerMove: ce, rootStyle: [WTa(e), O], rounded: g, size: S, variant: n, children: [H ? ree(zt, { "aria-hidden": true, className: "vscode-model-picker__trigger-alert", color: "red", name: "exclamation-triangle", size: 12 }) : null, V ? ree("span", { "aria-hidden": true, className: "vscode-model-picker__trigger-new-models-dot", "data-testid": "model-picker-new-models-dot" }) : null, a ? ree(zt, { "aria-hidden": true, className: "vscode-model-picker__trigger-loading", modifier: "spin", name: "loading", size: 12 }) : null, ree("span", { className: ri("vscode-model-picker__trigger-text", e === "input-shell" && "vscode-model-picker__trigger-text--input-shell"), children: ree(SCl, { displayName: J?.name ?? q, inheritColor: true, stylexStyles: N }, J?.name ?? q) }), J ? ree("span", { className: "vscode-model-picker__trigger-variant-suffix", children: ree(SCl, { displayName: J.detail }, J.detail) }) : null, K ? ree("span", { className: "vscode-model-picker__trigger-max-badge", children: ree("span", { className: "vscode-model-picker__trigger-max-badge-text", children: "MAX" }) }) : null, l && !j && !H ? ree("span", { children: ree(N4, { className: "vscode-model-picker__trigger-markdown", stylexStyles: GTa(), children: l }) }) : null, j && !H ? ree(zt, { className: "vscode-model-picker__trigger-lock", name: "lock", size: i }) : null, f ? ree(zt, { className: ri("vscode-model-picker__trigger-chevron", e === "input-shell" && "vscode-model-picker__trigger-chevron--input-shell"), name: "chevron-down", size: i }) : null] });
    if (!A && !T && !I?.length) return de;
    const he = I?.length ? ree(ao, { shortcutRows: I, title: A }) : T ? ree(ao, { shortcut: T, title: A }) : ree(ao, { title: A });
    return ree(xs, { content: he, offset: 6, placement: C, sameAxisOnly: true, children: de });
  });
} });
import { useCallback as Jef, useEffect as kCl, useRef as R4k, useState as wCl } from "./react-runtime/react/esm-index-production.js";
import { jsx as wgs } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Cgs({ defaultVisibleModelIds: t, disabled: e, disableModelParameterEditing: n, displayConfiguration: i, enableMultiModel: r, experimentalModelToggle: s, freeUserPolicy: o, hideAutoToggle: a, hideSearchBar: l, initialAutoMode: c, initialMaxMode: u, initialMultiModelMode: d, initialSelections: h, interceptBeforeSetMultiModel: p, isModelCatalogLoading: g, limitHitViewModel: f, maxModelCount: _, maxModeControlPolicy: b, modelPickerNudge: y, models: S, onAddModels: k, onAutoModeChange: C, onClearParameterPreferences: T, onClose: I, onHandleReady: A, onInteraction: P, onMarkDismissibleModelBadgeSelected: M, onMarkNewParameterValueSeen: O, onMarkNudgeAsSeen: N, onMaxModeChange: U, onMaxModeConfirmed: j, onMultiModelModeChange: $, onOpenChange: H, onParameterPreferencesChange: G, onSelectionChange: q, onViewPricing: K, pickerResetKey: V, placement: Y, presentation: J, promotedSectionLayout: Q, savedModelParameters: te, seenNewParameterValueKeys: ee, selectedDismissibleModelBadgeKeys: re, selectionFocusTarget: ie, showChevronInTrigger: oe, showMaxBadgeInTrigger: se, showModelOptionsOnHover: le, showNewModelsDotInTrigger: ce, showTriggerAlertIcon: ae, splitVariantDetailInTrigger: de, tooltipContent: he, triggerAlertLabel: ge, triggerAppearance: pe, useBaseModelDisplayNameInTrigger: ve }) {
  const fe = R4k(null), [Te, _e] = wCl(false), [Ce, Se] = wCl(V), [Pe, we] = wCl(d);
  kCl(() => {
    A?.(fe.current);
  }, [A]), kCl(() => {
    Te || Se(V);
  }, [Te, V]), kCl(() => {
    Te || we(d);
  }, [d, Te]);
  const Ie = Jef((Ne) => {
    e && Ne || (_e(Ne), H?.(Ne));
  }, [e, H]), Me = Jef(({ isMaxMode: Ne, models: be, selections: je, triggerProps: $e }) => {
    const Je = je.length === 1 ? je[0] : void 0, Ge = V2i(J) && Je !== void 0 && J.compactTrigger.modelIds.includes(Je.modelId) ? J.compactTrigger.formatLabel({ selection: Je, models: be, maxMode: Ne }) : void 0;
    return wgs(WPn, { appearance: pe, displayNameOverride: s?.enabled === true ? s.displayName : Ge, freeUserPolicy: o, isMaxMode: Ne, loading: g, modelPickerNudge: y, models: be, onMarkNudgeAsSeen: N, open: Te, selections: je, showChevron: oe, showMaxBadge: se, showNewModelsDot: ce, showTriggerAlertIcon: ae, splitVariantDetail: de, triggerAlertLabel: ge, triggerProps: { ...$e, disabled: e }, useBaseModelDisplayName: ve });
  }, [e, s, o, g, Te, y, N, J, oe, se, ce, ae, de, ge, pe, ve]), De = wgs(nX, { defaultVisibleModelIds: t, disableModelParameterEditing: n, disableNamedModelSelection: o?.kind === "models-disabled" || o?.kind === "locked" || s?.enabled === true, displayConfiguration: i, hideAutoToggle: a, hideMaxToggle: b.hideMaxToggle, hideMultiModelToggle: r === false, hideSearchBar: l || s?.enabled === true, initialAutoMode: c, initialMaxMode: u, initialMultiModelMode: Pe, initialSelections: h, interceptBeforeSetMultiModel: p, maxModeActionMode: b.maxModeActionMode, maxModeToggleDisabled: b.toggle.kind === "disabled", maxModeToggleDisabledTooltip: b.toggle.kind === "disabled" ? b.toggle.maxModeToggleDisabledTooltip : void 0, maxModelCount: _ ?? X2i, maxSelectedModelCount: r ? gCl : void 0, models: S, namedModelSelectionDisabledTooltipMarkdown: o?.kind === "models-disabled" ? aCl : void 0, onAddModels: k, onAutoModeChange: C, onClearParameterPreferences: T, onClose: I, onInteraction: P, onMarkDismissibleModelBadgeSelected: M, onMarkNewParameterValueSeen: O, onMaxModeChange: U, onMultiModelModeChange: $, onOpenChange: Ie, onParameterPreferencesChange: G, onSelectionChange: q, open: Te, placement: Y ?? "bottom-start", promotedSectionLayout: Q, ref: fe, savedModelParameters: te, seenNewParameterValueKeys: ee, selectedDismissibleModelBadgeKeys: re, selectionFocusTarget: ie, showModelOptionsOnHover: le, trigger: Me, children: wgs(HPn, { experimentalModelToggle: s, freeUserPolicy: o, limitHitViewModel: f, onInteraction: P, onMaxModeConfirmed: j, onViewPricing: K, presentation: J }) }, Ce);
  return he ? wgs(xs, { content: he, placement: "top", children: De }) : De;
}
