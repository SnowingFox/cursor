// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PreviewCardStore.js range:6305463..6308258
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.904Z
uhh = L({ "PreviewCardStore.js"() {
  E(), shh(), $nt(), qli(), z_n(), n7t(), FY(), Zb(), sJo(), ohh = Object.defineProperty, ahh = (t, e, n) => e in t ? ohh(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, lhh = (t, e, n) => ahh(t, typeof e != "symbol" ? e + "" : e, n), chh = { ...obn, instantType: vc((t) => t.instantType), hasViewport: vc((t) => t.hasViewport) }, hna = class h2b extends B8t {
    constructor(e, n, i = false) {
      const r = new USt(), s = { ...gWy(), ...e };
      s.floatingRootContext = i2r(r, n, i), super(s, { popupRef: mWy.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerElements: r, closeDelayRef: { current: dna }, inlineRectCoordsRef: { current: void 0 } }, chh), lhh(this, "setOpen", (o, a) => {
        const { inlineRectCoordsRef: l } = this.context;
        Bah(this, o, a, { onBeforeDispatch() {
          const c = a.event;
          o && a.reason === E4 && a.trigger && "clientX" in c && "clientY" in c && l.current?.element !== a.trigger && Iah(l, a.trigger, c.clientX, c.clientY);
        } });
      });
    }
    static useStore(e, n) {
      return e2r(e, (r, s) => new h2b(n, r, s)).store;
    }
  };
} });
import * as pna from "./react-runtime/react/esm-index-production.js";
import { jsxs as fWy, jsx as wPr } from "./react-runtime/react/esm-jsx-runtime-production.js";
function dhh(t) {
  const { open: e, defaultOpen: n = false, onOpenChange: i, onOpenChangeComplete: r, actionsRef: s, handle: o, triggerId: a, defaultTriggerId: l = null, children: c } = t, u = hna.useStore(o?.store, { open: n, openProp: e, activeTriggerId: l, triggerIdProp: a });
  n2r(u, e, n, l), u.useControlledProp("openProp", e), u.useControlledProp("triggerIdProp", a), u.useContextCallback("onOpenChange", i), u.useContextCallback("onOpenChangeComplete", r);
  const d = u.useState("open"), h = u.useState("activeTriggerId"), p = u.useState("mounted"), g = u.useState("payload");
  $li(u, { closeOnActiveTriggerUnmount: true });
  const { forceUnmount: f } = Hli(d, u, () => {
    u.context.inlineRectCoordsRef.current = void 0;
  });
  su(() => {
    d && h == null && u.set("payload", void 0);
  }, [u, h, d]);
  const _ = pna.useCallback(() => {
    u.setOpen(false, zd(Uwe));
  }, [u]);
  pna.useImperativeHandle(s, () => ({ unmount: f, close: _ }), [f, _]);
  const b = d || p;
  return fWy(kPr.Provider, { value: u, children: [b && wPr(vWy, { store: u }), typeof c == "function" ? c({ payload: g }) : c] });
}
function vWy({ store: t }) {
  const e = t.useState("floatingRootContext"), n = Q8t(e), i = n.reference ?? pE, r = n.trigger ?? pE, s = pna.useMemo(() => uB(Znt, n.floating), [n.floating]);
  return Wli(t, { activeTriggerProps: i, inactiveTriggerProps: r, popupProps: s }), null;
}
var CPr, 