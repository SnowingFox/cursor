// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PlanBuildMessageSection.js range:39248382..39254964
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, pi, aS, Lwf, q3f, mk, ecC
// wrapper-init: ncC
// hoisted-owner: prettyDialogGlassDemo.react.js (app-out-vs-workbench-workbench-glass-main-js:7780); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

ncC = L({ "PlanBuildMessageSection.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), aS(), Lwf(), q3f(), mk(), ecC(), ZYv = wt("<div class=plan-build-gallery-container>"), QYv = wt("<div class=plan-build-example-container><div class=plan-build-example-label>Example <!>: <!> characters"), JYv = Ok(G3f), eXv = async () => {
  }, udc = async () => {
  }, tXv = () => {
  };
} });
import { useCallback as ddc, useState as hdc } from "./react-runtime/react/esm-index-production.js";
import { jsx as US, jsxs as m9 } from "./react-runtime/react/esm-jsx-runtime-production.js";
function u6n(t) {
  return ddc((e) => {
    e || t();
  }, [t]);
}
function icC({ onClose: t }) {
  const e = u6n(t);
  return m9(Xr, { "aria-label": "Confirm Action", closeOnEscape: true, onOpenChange: e, open: true, size: "sm", width: 450, children: [m9(Xr.Header, { children: [m9("div", { className: "flex min-w-0 flex-col gap-1", children: [US(Xr.Title, { children: "Confirm Action" }), US(Xr.Description, { children: "Are you sure you want to perform this action?" })] }), US(Xr.Close, {})] }), m9(Xr.Footer, { children: [US(An, { onClick: t, size: "sm", variant: "text", children: "Cancel (esc)" }), US(An, { kbs: "⏎", onClick: t, size: "sm", variant: "primary", children: "Confirm" })] })] });
}
function rcC({ onClose: t }) {
  const e = u6n(t);
  return m9(Xr, { "aria-label": "Warning", closeOnEscape: true, onOpenChange: e, open: true, size: "sm", width: 450, children: [m9(Xr.Header, { children: [m9("div", { className: "flex min-w-0 flex-col gap-1", children: [US(Xr.Title, { children: "Warning" }), US(Xr.Description, { children: "This action cannot be undone. Proceed anyway?" })] }), US(Xr.Close, {})] }), m9(Xr.Footer, { children: [US(An, { onClick: t, size: "sm", variant: "text", children: "Cancel (esc)" }), US(An, { kbs: "⏎", onClick: t, size: "sm", variant: "primary", children: "Proceed" })] })] });
}
function scC({ onClose: t }) {
  const e = u6n(t);
  return m9(Xr, { "aria-label": "Multiple Messages", closeOnEscape: true, onOpenChange: e, open: true, size: "sm", width: 450, children: [US(Xr.Header, { children: US("div", { className: "flex min-w-0 flex-col gap-1", children: US(Xr.Title, { children: "Multiple Messages" }) }) }), US(Xr.Content, { children: m9("div", { className: "flex flex-col gap-1 text-xs text-secondary-foreground", children: [US("div", { children: "This is the first message." }), US("div", { className: "opacity-60", children: "This is the second message, which is de-emphasized." }), US("div", { className: "rounded bg-black/5 p-2", children: "This is a callout message." }), US("div", { children: "This is the fourth message." })] }) }), US(Xr.Footer, { children: US(An, { kbs: "⏎", onClick: t, size: "sm", variant: "primary", children: "OK" }) })] });
}
function ocC({ onClose: t }) {
  const [e, n] = hdc(false), i = u6n(t);
  return m9(Xr, { "aria-label": "Remember Preference", closeOnEscape: true, onOpenChange: i, open: true, size: "sm", width: 450, children: [m9(Xr.Header, { children: [m9("div", { className: "flex min-w-0 flex-col gap-1", children: [US(Xr.Title, { children: "Remember Preference" }), US(Xr.Description, { children: "Would you like to remember this preference for future sessions?" })] }), US(Xr.Close, {})] }), US(Xr.Content, { children: US("div", { className: "flex flex-col gap-3", children: m9("label", { className: "flex items-center gap-2 text-xs cursor-pointer select-none text-secondary-foreground", children: [US(G5, { checked: e, onCheckedChange: n, size: "sm" }), "Don't ask again"] }) }) }), m9(Xr.Footer, { children: [US(An, { onClick: t, size: "sm", variant: "text", children: "No (esc)" }), US(An, { kbs: "⏎", onClick: t, size: "sm", variant: "primary", children: "Yes" })] })] });
}
function acC({ onClose: t }) {
  const e = u6n(t);
  return m9(Xr, { "aria-label": "Error", closeOnEscape: true, onOpenChange: e, open: true, size: "sm", width: 450, children: [US(Xr.Header, { children: m9("div", { className: "flex min-w-0 flex-col gap-1", children: [US(Xr.Title, { children: "Error" }), US(Xr.Description, { children: "An error occurred while processing your request." })] }) }), m9(Xr.Footer, { children: [US(An, { onClick: t, size: "sm", variant: "secondary", children: "Retry" }), US(An, { kbs: "⏎", onClick: t, size: "sm", variant: "primary", children: "OK" })] })] });
}
function lcC({ onClose: t }) {
  const [e, n] = hdc(false), i = u6n(t);
  return m9(Xr, { "aria-label": "Destructive Action", closeOnEscape: true, onOpenChange: i, open: true, size: "sm", width: 450, children: [m9(Xr.Header, { children: [m9("div", { className: "flex min-w-0 flex-col gap-1", children: [US(Xr.Title, { children: "Delete All Data" }), US(Xr.Description, { children: "This will permanently delete all your data. This action cannot be undone." })] }), US(Xr.Close, {})] }), US(Xr.Content, { children: US("div", { className: "flex flex-col gap-3", children: m9("label", { className: "flex items-center gap-2 text-xs cursor-pointer select-none text-secondary-foreground", children: [US(G5, { checked: e, onCheckedChange: n, size: "sm" }), "I understand this action is irreversible"] }) }) }), m9(Xr.Footer, { children: [US(An, { onClick: t, size: "sm", variant: "text", children: "Cancel (esc)" }), US(An, { disabled: !e, kbs: e ? "⏎" : void 0, onClick: t, size: "sm", tone: "danger", variant: "primary", children: "Delete" })] })] });
}
function d6n({ label: t, variant: e, onSelect: n }) {
  const i = ddc(() => n(e), [n, e]);
  return US(An, { onClick: i, size: "sm", variant: "secondary", children: t });
}
function ccC() {
  const [t, e] = hdc(null), n = ddc(() => e(null), []);
  return m9("div", { style: { display: "flex", flexDirection: "column", gap: "16px", padding: "16px", width: "100%" }, children: [m9("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [US(d6n, { label: "Basic", onSelect: e, variant: "basic" }), US(d6n, { label: "Warning", onSelect: e, variant: "warning" }), US(d6n, { label: "Multi Message", onSelect: e, variant: "multiMessage" }), US(d6n, { label: "Don’t Ask Again", onSelect: e, variant: "dontAskAgain" }), US(d6n, { label: "Extra Buttons", onSelect: e, variant: "extraButtons" }), US(d6n, { label: "Confirmation Checkbox", onSelect: e, variant: "confirmation" })] }), t === "basic" && US(icC, { onClose: n }), t === "warning" && US(rcC, { onClose: n }), t === "multiMessage" && US(scC, { onClose: n }), t === "dontAskAgain" && US(ocC, { onClose: n }), t === "extraButtons" && US(acC, { onClose: n }), t === "confirmation" && US(lcC, { onClose: n })] });
}
