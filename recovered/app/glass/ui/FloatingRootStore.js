// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FloatingRootStore.js range:6041077..6043699
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.686Z
XRr = L({ "FloatingRootStore.js"() {
  E(), Loh(), $nt(), z_n(), Sne(), xah = Object.defineProperty, Aah = (t, e, n) => e in t ? xah(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, YRr = (t, e, n) => Aah(t, typeof e != "symbol" ? e + "" : e, n), Rah = { open: vc((t) => t.open), transitionStatus: vc((t) => t.transitionStatus), domReferenceElement: vc((t) => t.domReferenceElement), referenceElement: vc((t) => t.positionReference ?? t.referenceElement), floatingElement: vc((t) => t.floatingElement), floatingId: vc((t) => t.floatingId) }, Uli = class extends B8t {
    constructor(t) {
      const { syncOnly: e, nested: n, onOpenChange: i, triggerElements: r, ...s } = t;
      super({ ...s, positionReference: s.referenceElement, domReferenceElement: s.referenceElement }, { onOpenChange: i, dataRef: { current: {} }, events: Noh(), nested: n, triggerElements: r }, Rah), YRr(this, "syncOpenEvent", (o, a) => {
        (!o || !this.state.open || a != null && H7y(a)) && (this.context.dataRef.current.openEvent = o ? a : void 0);
      }), YRr(this, "dispatchOpenChange", (o, a) => {
        this.syncOpenEvent(o, a.event);
        const l = { open: o, reason: a.reason, nativeEvent: a.event, nested: this.context.nested, triggerElement: a.trigger };
        this.context.events.emit("openchange", l);
      }), YRr(this, "setOpen", (o, a) => {
        if (this.syncOnly) {
          this.context.onOpenChange?.(o, a);
          return;
        }
        this.dispatchOpenChange(o, a), this.context.onOpenChange?.(o, a);
      }), this.syncOnly = e;
    }
  };
} });
import * as YUy from "./react-runtime/react/esm-index-production.js";
function Pah(t) {
  const { popupStore: e, treatPopupAsFloatingElement: n = false, floatingRootContext: i, floatingId: r, nested: s, onOpenChange: o } = t, a = e.useState("open"), l = e.useState("activeTriggerElement"), c = e.useState(n ? "popupElement" : "positionerElement"), u = e.context.triggerElements, d = o, h = YUy.useRef(null);
  i === void 0 && h.current === null && (h.current = new Uli({ open: a, transitionStatus: void 0, referenceElement: l, floatingElement: c, triggerElements: u, onOpenChange: d, floatingId: r, syncOnly: true, nested: s }));
  const p = i ?? h.current;
  return e.useSyncedValue("floatingId", r), su(() => {
    const g = { open: a, floatingId: r, referenceElement: l, floatingElement: c };
    Lb(l) && (g.domReferenceElement = l), p.state.positionReference === p.state.referenceElement && (g.positionReference = l), p.update(g);
  }, [a, r, l, c, p]), p.context.onOpenChange = d, p.context.nested = s, p;
}
