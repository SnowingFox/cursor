// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverStore.mjs range:31299783..31304100
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.881Z
sPf = L({ "PopoverStore.mjs"() {
  "use client";
  E(), gOl(), xct(), rce(), b3n(), g3n(), rPf = { ...Y2f, disabled: Gx((t) => t.disabled), instantType: Gx((t) => t.instantType), openMethod: Gx((t) => t.openMethod), openChangeReason: Gx((t) => t.openChangeReason), modal: Gx((t) => t.modal), focusManagerModal: Gx((t) => t.focusManagerModal), stickIfOpen: Gx((t) => t.stickIfOpen), titleElementId: Gx((t) => t.titleElementId), descriptionElementId: Gx((t) => t.descriptionElementId), openOnHover: Gx((t) => t.openOnHover), closeDelay: Gx((t) => t.closeDelay), hasViewport: Gx((t) => t.hasViewport) }, SOl = class _Mb extends mOl {
    constructor(e, n, i = false) {
      const r = { ...Umw(), ...e }, s = new KSs();
      r.open && e?.mounted === void 0 && (r.mounted = true), r.floatingRootContext = wmw(s, n, i), super(r, { popupRef: S3n.createRef(), backdropRef: S3n.createRef(), internalBackdropRef: S3n.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerFocusTargetRef: S3n.createRef(), beforeContentFocusGuardRef: S3n.createRef(), stickIfOpenTimeout: new pKe(), triggerElements: s }, rPf);
    }
    setOpen = (e, n) => {
      const i = n.reason === BA.triggerHover, r = n.reason === BA.triggerPress && n.event.detail === 0, s = !e && (n.reason === BA.escapeKey || n.reason == null), o = dmw(n), a = this.select("activeTriggerId");
      if (!e && n.reason === BA.closePress && n.trigger == null && a != null && (n.trigger = this.context.triggerElements.getById(a) ?? this.select("activeTriggerElement") ?? void 0), this.context.onOpenChange?.(e, n), n.isCanceled) return;
      this.state.floatingRootContext.dispatchOpenChange(e, n);
      const l = () => {
        const c = { open: e, openChangeReason: n.reason };
        umw(c, e, n.trigger, o()), this.update(c);
      };
      i ? (this.set("stickIfOpen", true), this.context.stickIfOpenTimeout.start(mRf, () => {
        this.set("stickIfOpen", false);
      }), Bmw.flushSync(l)) : l(), r || s ? this.set("instantType", r ? "click" : "dismiss") : n.reason === BA.focusOut ? this.set("instantType", "focus") : this.set("instantType", void 0);
    };
    static useStore(e, n) {
      const { store: i, internalStore: r } = lmw(e, (s, o) => new _Mb(n, s, o));
      return S3n.useEffect(() => r?.disposeEffect(), [r]), i;
    }
    disposeEffect = () => this.context.stickIfOpenTimeout.disposeEffect();
  };
} });
import * as C3i from "./react-runtime/react/esm-index-production.js";
import { jsx as t1s, jsxs as jmw } from "./react-runtime/react/esm-jsx-runtime-production.js";
function oPf({ props: t }) {
  const { children: e, open: n, defaultOpen: i = false, onOpenChange: r, onOpenChangeComplete: s, modal: o = false, handle: a, triggerId: l, defaultTriggerId: c = null } = t, u = SOl.useStore(a?.store, { modal: o, open: i, openProp: n, activeTriggerId: c, triggerIdProp: l });
  hmw(u, n, i, c), u.useControlledProp("openProp", n), u.useControlledProp("triggerIdProp", l);
  const d = u.useState("open"), h = u.useState("mounted"), p = u.useState("payload"), g = $Xt() != null;
  u.useContextCallback("onOpenChange", r), u.useContextCallback("onOpenChangeComplete", s), vmw(u, d), mmw(u);
  const { forceUnmount: f } = gmw(d, u, () => {
    u.update({ stickIfOpen: true, openChangeReason: null });
  });
  u.useSyncedValues({ modal: o, nested: g }), C3i.useEffect(() => {
    d || u.context.stickIfOpenTimeout.clear();
  }, [u, d]);
  const _ = C3i.useCallback(() => {
    u.setOpen(false, NG(BA.imperativeAction));
  }, [u]);
  C3i.useImperativeHandle(t.actionsRef, () => ({ unmount: f, close: _ }), [f, _]);
  const b = d || h, y = C3i.useMemo(() => ({ store: u }), [u]);
  return jmw(e1s.Provider, { value: y, children: [b && t1s(Hmw, { store: u, modal: o }), typeof e == "function" ? e({ payload: p }) : e] });
}
function $mw(t) {
  return RBe(true) ? t1s(oPf, { props: t }) : t1s(zhw, { children: t1s(oPf, { props: t }) });
}
function Hmw({ store: t, modal: e }) {
  const n = t.useState("floatingRootContext"), i = npw(n, { outsidePressEvent: { mouse: e === "trap-focus" ? "sloppy" : "intentional", touch: "sloppy" } }), r = i.reference ?? JX, s = i.trigger ?? JX, o = C3i.useMemo(() => MSs(_Ol, i.floating), [i.floating]);
  return fmw(t, { activeTriggerProps: r, inactiveTriggerProps: s, popupProps: o }), null;
}
