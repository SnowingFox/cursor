// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogStore.js range:17865704..17868925
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.632Z
$wp = L({ "DialogStore.js"() {
  E(), $nt(), qli(), z_n(), n7t(), FY(), Fwp = Object.defineProperty, Bwp = (t, e, n) => e in t ? Fwp(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, Uwp = (t, e, n) => Bwp(t, typeof e != "symbol" ? e + "" : e, n), jwp = { ...obn, modal: vc((t) => t.modal), nested: vc((t) => t.nested), nestedOpenDialogCount: vc((t) => t.nestedOpenDialogCount), nestedOpenDrawerCount: vc((t) => t.nestedOpenDrawerCount), disablePointerDismissal: vc((t) => t.disablePointerDismissal), openMethod: vc((t) => t.openMethod), descriptionElementId: vc((t) => t.descriptionElementId), titleElementId: vc((t) => t.titleElementId), viewportElement: vc((t) => t.viewportElement), role: vc((t) => t.role) }, ORa = class x2b extends B8t {
    constructor(e, n, i = false) {
      const r = new USt(), s = P_1(e);
      s.floatingRootContext = i2r(r, n, i), super(s, { popupRef: LRa.createRef(), backdropRef: LRa.createRef(), internalBackdropRef: LRa.createRef(), outsidePressEnabledRef: { current: true }, triggerElements: r, onOpenChange: void 0, onOpenChangeComplete: void 0 }, jwp), Uwp(this, "setOpen", (o, a) => {
        if (a.preventUnmountOnClose = () => {
          this.set("preventUnmountingOnClose", true);
        }, !o && a.trigger == null && this.state.activeTriggerId != null && (a.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(o, a), a.isCanceled) return;
        this.state.floatingRootContext.dispatchOpenChange(o, a);
        const l = { open: o };
        t2r(l, o, a.trigger), this.update(l);
      });
    }
    static useStore(e, n) {
      return e2r(e, (r, s) => new x2b(n, r, s), true).store;
    }
  };
} });
import * as M_1 from "./react-runtime/react/esm-index-production.js";
import { jsx as Hwp, jsxs as D_1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
function N_1(t, e = "dialog") {
  const { children: n, open: i, defaultOpen: r = false, onOpenChange: s, onOpenChangeComplete: o, disablePointerDismissal: a = false, modal: l = true, actionsRef: c, handle: u, triggerId: d, defaultTriggerId: h = null } = t, p = e === "drawer", g = e === "alert-dialog", f = g ? true : l, _ = g || a, b = g ? "alertdialog" : "dialog", y = rst(true), k = { modal: f, disablePointerDismissal: _, nested: !!y, role: b }, C = ORa.useStore(u?.store, { open: r, openProp: i, activeTriggerId: h, triggerIdProp: d, ...k });
  ZAr(() => {
    const O = i === void 0 && C.state.open === false && r === true ? { open: true, activeTriggerId: h } : null;
    g ? C.update(O ? { ...k, ...O } : k) : O && C.update(O);
  }), C.useControlledProp("openProp", i), C.useControlledProp("triggerIdProp", d), C.useSyncedValues(k), C.useContextCallback("onOpenChange", s), C.useContextCallback("onOpenChangeComplete", o);
  const T = C.useState("open"), I = C.useState("mounted"), A = C.useState("payload");
  x_1({ store: C, actionsRef: c });
  const P = T || I, M = M_1.useMemo(() => ({ store: C }), [C]);
  return Hwp(qjr.Provider, { value: false, children: D_1(zjr.Provider, { value: M, children: [P && Hwp(A_1, { store: C, parentContext: y?.store.context, isDrawer: p }), typeof n == "function" ? n({ payload: A }) : n] }) });
}
