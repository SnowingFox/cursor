// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipRoot.js range:6340328..6342452
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.279Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, fastHooks.js, useIsoLayoutEffect.js, TooltipRootContext.js, createBaseUIEventDetails.js, TooltipStore.js, popupStoreUtils.js, reason-parts.js, +3 more
// anchors: displayName=TooltipRoot
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, fastHooks.js, useIsoLayoutEffect.js, TooltipRootContext.js, createBaseUIEventDetails.js, TooltipStore.js, popupStoreUtils.js, reason-parts.js, +3 more
// anchors: displayName=TooltipRoot
// path-candidate: none (no nls basename match; path inferred, confidence C)
$hh = L({ "TooltipRoot.js"() {
  E(), O8t(), jv(), Kci(), VS(), jhh(), FY(), Zb(), J8t(), SUy(), mne(), jPr = JAr(function(e) {
    const { disabled: n = false, defaultOpen: i = false, open: r, disableHoverablePopup: s = false, trackCursorAxis: o = "none", actionsRef: a, onOpenChange: l, onOpenChangeComplete: c, handle: u, triggerId: d, defaultTriggerId: h = null, children: p } = e, g = Ina.useStore(u?.store, { open: i, openProp: r, activeTriggerId: h, triggerIdProp: d });
    n2r(g, r, i, h), g.useControlledProp("openProp", r), g.useControlledProp("triggerIdProp", d), g.useContextCallback("onOpenChange", l), g.useContextCallback("onOpenChangeComplete", c);
    const f = g.useState("open"), _ = !n && f, b = g.useState("activeTriggerId"), y = g.useState("mounted"), S = g.useState("payload");
    g.useSyncedValues({ trackCursorAxis: o, disableHoverablePopup: s }), g.useSyncedValue("disabled", n), $li(g, { closeOnActiveTriggerUnmount: true });
    const { forceUnmount: k, transitionStatus: C } = Hli(_, g), T = g.useState("isInstantPhase"), I = g.useState("instantType"), A = g.useState("lastOpenChangeReason"), P = Nbn.useRef(null);
    su(() => {
      f && n && g.setOpen(false, zd(bQo));
    }, [f, n, g]), su(() => {
      C === "ending" && A === kO || C !== "ending" && T ? (I !== "delay" && (P.current = I), g.set("instantType", "delay")) : P.current !== null && (g.set("instantType", P.current), P.current = null);
    }, [C, T, A, I, g]), su(() => {
      _ && b == null && g.set("payload", void 0);
    }, [g, b, _]);
    const M = Nbn.useCallback(() => {
      g.setOpen(false, zd(Uwe));
    }, [g]);
    Nbn.useImperativeHandle(a, () => ({ unmount: k, close: M }), [k, M]);
    const O = _ || y || !n && o !== "none";
    return nGy(UPr.Provider, { value: g, children: [O && iGy(rGy, { store: g, disabled: n, trackCursorAxis: o }), typeof p == "function" ? p({ payload: S }) : p] });
  }), process.env.NODE_ENV !== "production" && (jPr.displayName = "TooltipRoot");
} });
import * as Hhh from "./react-runtime/react/esm-index-production.js";
function sGy() {
  return Hhh.useContext($Pr);
}
var $Pr, 