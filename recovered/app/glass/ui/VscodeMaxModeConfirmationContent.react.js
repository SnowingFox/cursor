// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VscodeMaxModeConfirmationContent.react.js range:29342468..29346521
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.156Z
var y4k = L({ "VscodeMaxModeConfirmationContent.react.js"() {
  "use strict";
  E(), Mt(), K2i();
} });
import { useMemo as S4k } from "./react-runtime/react/esm-index-production.js";
import { jsx as gN } from "./react-runtime/react/esm-jsx-runtime-production.js";
function bCl({ children: t, embedded: e, width: n }) {
  return e ? t : gN(cl.Content, { "aria-label": "Model selection", "data-testid": "model-picker-menu", maxHeight: 320, maxWidth: n, minWidth: n, children: t });
}
function k4k({ viewModel: t }) {
  const { setIsOpen: e } = cl.useLayerContext();
  return gN(Vef, { onDismiss: () => {
    e(false);
  }, viewModel: t });
}
function Yef({ onUpgradeClick: t }) {
  return gN("div", { className: "vscode-model-picker__free-footer", children: gN(cl.Item, { onSelect: t, children: gN("div", { className: "vscode-model-picker__free-footer-content", children: gN(An, { className: "vscode-model-picker__free-footer-button", size: "sm", variant: "primary", children: lCl }) }) }) });
}
function w4k({ viewModel: t }) {
  const { close: e } = sdp();
  return gN(Vef, { onDismiss: e, viewModel: t, wrapAction: (n, i) => gN(hn.Item, { onSelect: i, children: n }) });
}
function C4k({ experimentalModelToggle: t, limitHitViewModel: e, onInteraction: n, onMaxModeConfirmed: i, onViewPricing: r }) {
  const s = D0a(), o = S4k(() => t === void 0 ? [] : [{ id: "use-experimental-model", label: cYt, checked: t.enabled, onCheckedChange: t.onEnabledChange }], [t]);
  return t?.enabled === true ? gN(nX.CompactContent, { panel: { "aria-label": "Model selection", content: gN(hn.SwitchItem, { checked: true, "data-testid": "use-experimental-model-toggle", label: cYt, onChange: () => t.onEnabledChange(false), children: cYt }) } }) : e !== void 0 ? gN(nX.CompactContent, { panel: { "aria-label": "Model selection", width: yCl, content: gN(w4k, { viewModel: e }) } }) : s.status === "pending" ? gN(nX.CompactContent, { panel: { "aria-label": "Model selection", width: yCl, trapFocus: true, content: gN(Kef, { onCancelMaxMode: () => s.cancel(), onConfirmMaxMode: () => s.confirm(), onInteraction: n, onMaxModeConfirmed: i, onViewPricing: r }) } }) : gN(nX.CompactContent, { flyoutControls: o });
}
function HPn({ embedded: t = false, experimentalModelToggle: e, freeUserPolicy: n, limitHitViewModel: i, menuPresentation: r, onInteraction: s, onMaxModeConfirmed: o, onViewPricing: a, presentation: l }) {
  const c = D0a();
  if (r === "selected-model-parameters-submenu") return gN(C4k, { experimentalModelToggle: e, limitHitViewModel: i, onInteraction: s, onMaxModeConfirmed: o, onViewPricing: a });
  const u = () => {
    c.status === "pending" && c.cancel();
  }, d = () => c.status === "pending" ? c.confirm() : false, h = () => {
    (n?.kind === "locked" || n?.kind === "models-disabled") && n.onUpgradeClick();
  }, p = () => {
    e !== void 0 && e.onEnabledChange(!e.enabled);
  }, g = e === void 0 ? null : gN(nX.Control, { id: "use-experimental-model", searchText: cYt, children: gN(cl.SwitchItem, { checked: e.enabled, "data-testid": "use-experimental-model-toggle", label: cYt, onChange: p, children: cYt }) }, "use-experimental-model");
  if (e?.enabled === true) return gN(nX.ControlsContent, { children: g });
  if (i !== void 0) return gN(bCl, { embedded: t, width: 320, children: gN(k4k, { viewModel: i }) });
  if (c.status === "pending") return gN(bCl, { embedded: t, width: 320, children: gN(Kef, { onCancelMaxMode: u, onConfirmMaxMode: d, onInteraction: s, onMaxModeConfirmed: o, onViewPricing: a }) });
  if (n?.kind === "locked") return gN(bCl, { embedded: t, width: 230, children: gN(Yef, { onUpgradeClick: h }) });
  const f = [g, n?.kind === "models-disabled" ? gN(nX.Footer, { children: gN(Yef, { onUpgradeClick: h }) }, "free-user-upgrade") : null];
  return l?.type === "selected-model-parameters-flat" ? gN(nX.SelectedModelParametersContent, { children: f }) : l?.type === "selected-model-parameters-submenu" ? gN(nX.SelectedModelParametersSubmenuContent, { children: f }) : gN(nX.Content, { children: f });
}
var cYt, yCl, 