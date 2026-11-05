// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VscodeLimitHitPickerContent.react.js range:29340303..29342468
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.155Z
var v4k = L({ "VscodeLimitHitPickerContent.react.js"() {
  "use strict";
  E(), Mt(), K2i();
} });
import { useEffect as _4k, useRef as b4k } from "./react-runtime/react/esm-index-production.js";
import { jsx as lYt, jsxs as ePi } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Kef({ onCancelMaxMode: t, onConfirmMaxMode: e, onInteraction: n, onMaxModeConfirmed: i, onViewPricing: r }) {
  const s = b4k(null);
  _4k(() => {
    s.current?.focus();
  }, []);
  const o = () => {
    e() && (i?.(), n?.({ kind: "maxModeConfirmed" }));
  }, a = () => {
    t(), n?.({ kind: "maxModeConfirmationCancelled" });
  };
  return ePi("div", { "aria-label": "Enable MAX Mode", className: "vscode-model-picker__max-confirm", onKeyDown: (c) => {
    if (!c.repeat) if (c.key === "Enter") {
      if (c.target instanceof HTMLElement && c.target.closest('button, a, [role="button"]')) return;
      o();
    } else (c.key === "Backspace" || c.key === "Escape") && a();
  }, ref: s, role: "dialog", tabIndex: -1, children: [ePi("div", { className: "vscode-model-picker__max-confirm-header", children: [lYt("button", { "aria-label": "Go back", className: "vscode-model-picker__max-confirm-back", onClick: a, type: "button", children: lYt(zt, { name: "arrow-left", size: "lg" }) }), lYt("div", { className: "vscode-model-picker__max-confirm-badge", children: lYt("span", { className: "vscode-model-picker__max-confirm-badge-text", children: "MAX MODE" }) })] }), ePi("div", { className: "vscode-model-picker__max-confirm-body", children: ["Maxes out context windows and tool calls. For advanced users that are cost insensitive.", lYt("br", {}), "Billed at API-pricing."] }), ePi("div", { className: "vscode-model-picker__max-confirm-footer", children: [lYt(An, { className: "vscode-model-picker__max-confirm-enable-btn", onClick: o, size: "sm", variant: "primary", children: "Enable MAX Mode" }), r ? ePi("button", { className: "vscode-model-picker__max-confirm-pricing-btn", onClick: () => {
    r(), n?.({ kind: "viewPricingRequested" });
  }, type: "button", children: ["View Pricing ", lYt(zt, { name: "arrow-right-up", size: "sm" })] }) : null] })] });
}
