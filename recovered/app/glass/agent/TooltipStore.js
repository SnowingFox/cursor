// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipStore.js range:6338245..6340328
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.280Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, createBaseUIEventDetails.js, createSelector.js, store.js, ReactStore.js, popupTriggerMap.js, popupStoreUtils.js, reason-parts.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, createBaseUIEventDetails.js, createSelector.js, store.js, ReactStore.js, popupTriggerMap.js, popupStoreUtils.js, reason-parts.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
jhh = L({ "TooltipStore.js"() {
  E(), VS(), $nt(), qli(), z_n(), n7t(), FY(), Zb(), Ohh = Object.defineProperty, Fhh = (t, e, n) => e in t ? Ohh(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, Bhh = (t, e, n) => Fhh(t, typeof e != "symbol" ? e + "" : e, n), Uhh = { ...obn, disabled: vc((t) => t.disabled), instantType: vc((t) => t.instantType), isInstantPhase: vc((t) => t.isInstantPhase), trackCursorAxis: vc((t) => t.trackCursorAxis), disableHoverablePopup: vc((t) => t.disableHoverablePopup), lastOpenChangeReason: vc((t) => t.openChangeReason), closeOnClick: vc((t) => t.closeOnClick), closeDelay: vc((t) => t.closeDelay), hasViewport: vc((t) => t.hasViewport) }, Ina = class p2b extends B8t {
    constructor(e, n, i = false) {
      const r = new USt(), s = { ...tGy(), ...e };
      s.floatingRootContext = i2r(r, n, i), super(s, { popupRef: eGy.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerElements: r }, Uhh), Bhh(this, "setOpen", (o, a) => {
        Bah(this, o, a, { extraState: { openChangeReason: a.reason } });
      });
    }
    cancelPendingOpen(e) {
      this.state.floatingRootContext.dispatchOpenChange(false, zd(PRe, e));
    }
    static useStore(e, n) {
      return e2r(e, (r, s) => new p2b(n, r, s)).store;
    }
  };
} });
import * as Nbn from "./react-runtime/react/esm-index-production.js";
import { jsxs as nGy, jsx as iGy } from "./react-runtime/react/esm-jsx-runtime-production.js";
function rGy({ store: t, disabled: e, trackCursorAxis: n }) {
  const i = t.useState("floatingRootContext"), r = Q8t(i, { enabled: !e, referencePress: () => t.select("closeOnClick") }), s = yUy(i, { enabled: !e && n !== "none", axis: n === "none" ? void 0 : n }), o = Nbn.useMemo(() => uB(s.reference, r.reference), [s.reference, r.reference]), a = Nbn.useMemo(() => uB(s.trigger, r.trigger), [s.trigger, r.trigger]), l = Nbn.useMemo(() => uB(Znt, s.floating, r.floating), [s.floating, r.floating]);
  return Wli(t, { activeTriggerProps: o, inactiveTriggerProps: a, popupProps: l }), null;
}
var jPr, 