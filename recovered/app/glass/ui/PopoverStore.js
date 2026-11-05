// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverStore.js range:15715989..15720488
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.880Z
j6S = L({ "PopoverStore.js"() {
  E(), M7(), k_e(), qli(), $nt(), z_n(), n7t(), Zb(), FY(), RZh = Object.defineProperty, PZh = (t, e, n) => e in t ? RZh(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, OSa = (t, e, n) => PZh(t, typeof e != "symbol" ? e + "" : e, n), MZh = { ...obn, disabled: vc((t) => t.disabled), instantType: vc((t) => t.instantType), openMethod: vc((t) => t.openMethod), openChangeReason: vc((t) => t.openChangeReason), modal: vc((t) => t.modal), focusManagerModal: vc((t) => t.focusManagerModal), stickIfOpen: vc((t) => t.stickIfOpen), titleElementId: vc((t) => t.titleElementId), descriptionElementId: vc((t) => t.descriptionElementId), openOnHover: vc((t) => t.openOnHover), closeDelay: vc((t) => t.closeDelay), hasViewport: vc((t) => t.hasViewport) }, DZh = class w2b extends B8t {
    constructor(e, n, i = false) {
      const r = { ...U6S(), ...e }, s = new USt();
      r.open && e?.mounted === void 0 && (r.mounted = true), r.floatingRootContext = i2r(s, n, i), super(r, { popupRef: D1n.createRef(), backdropRef: D1n.createRef(), internalBackdropRef: D1n.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerFocusTargetRef: D1n.createRef(), beforeContentFocusGuardRef: D1n.createRef(), stickIfOpenTimeout: new RRe(), triggerElements: s }, MZh), OSa(this, "setOpen", (o, a) => {
        const l = a.reason === E4, c = a.reason === PRe && a.event.detail === 0, u = !o && (a.reason === q8t || a.reason == null), d = oJo(a), h = this.select("activeTriggerId");
        if (!o && a.reason === Tli && a.trigger == null && h != null && (a.trigger = this.context.triggerElements.getById(h) ?? this.select("activeTriggerElement") ?? void 0), this.context.onOpenChange?.(o, a), a.isCanceled) return;
        this.state.floatingRootContext.dispatchOpenChange(o, a);
        const p = () => {
          const g = { open: o, openChangeReason: a.reason };
          t2r(g, o, a.trigger, d()), this.update(g);
        };
        l ? (this.set("stickIfOpen", true), this.context.stickIfOpenTimeout.start($Qo, () => {
          this.set("stickIfOpen", false);
        }), B6S.flushSync(p)) : p(), c || u ? this.set("instantType", c ? "click" : "dismiss") : a.reason === KHe ? this.set("instantType", "focus") : this.set("instantType", void 0);
      }), OSa(this, "disposeEffect", () => this.context.stickIfOpenTimeout.disposeEffect());
    }
    static useStore(e, n) {
      const { store: i, internalStore: r } = e2r(e, (s, o) => new w2b(n, s, o));
      return D1n.useEffect(() => r?.disposeEffect(), [r]), i;
    }
  };
} });
import * as Qmi from "./react-runtime/react/esm-index-production.js";
import { jsxs as $6S, jsx as x4r } from "./react-runtime/react/esm-jsx-runtime-production.js";
function NZh({ props: t }) {
  const { children: e, open: n, defaultOpen: i = false, onOpenChange: r, onOpenChangeComplete: s, modal: o = false, handle: a, triggerId: l, defaultTriggerId: c = null } = t, u = DZh.useStore(a?.store, { modal: o, open: i, openProp: n, activeTriggerId: c, triggerIdProp: l });
  n2r(u, n, i, c), u.useControlledProp("openProp", n), u.useControlledProp("triggerIdProp", l);
  const d = u.useState("open"), h = u.useState("mounted"), p = u.useState("payload"), g = QHe() != null;
  u.useContextCallback("onOpenChange", r), u.useContextCallback("onOpenChangeComplete", s), Uah(u, d), $li(u);
  const { forceUnmount: f } = Hli(d, u, () => {
    u.update({ stickIfOpen: true, openChangeReason: null });
  });
  u.useSyncedValues({ modal: o, nested: g }), Qmi.useEffect(() => {
    d || u.context.stickIfOpenTimeout.clear();
  }, [u, d]);
  const _ = Qmi.useCallback(() => {
    u.setOpen(false, zd(Uwe));
  }, [u]);
  Qmi.useImperativeHandle(t.actionsRef, () => ({ unmount: f, close: _ }), [f, _]);
  const b = d || h, y = Qmi.useMemo(() => ({ store: u }), [u]);
  return $6S(I4r.Provider, { value: y, children: [b && x4r(W6S, { store: u, modal: o }), typeof e == "function" ? e({ payload: p }) : e] });
}
function H6S(t) {
  return Lkt(true) ? x4r(NZh, { props: t }) : x4r(VQo, { children: x4r(NZh, { props: t }) });
}
function W6S({ store: t, modal: e }) {
  const n = t.useState("floatingRootContext"), i = Q8t(n, { outsidePressEvent: { mouse: e === "trap-focus" ? "sloppy" : "intentional", touch: "sloppy" } }), r = i.reference ?? pE, s = i.trigger ?? pE, o = Qmi.useMemo(() => uB(Znt, i.floating), [i.floating]);
  return Wli(t, { activeTriggerProps: r, inactiveTriggerProps: s, popupProps: o }), null;
}
