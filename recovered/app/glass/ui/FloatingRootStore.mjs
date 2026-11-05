// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FloatingRootStore.mjs range:31266340..31268696
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.686Z
WSs = L({ "FloatingRootStore.mjs"() {
  E(), gOl(), TRf(), fOl(), H2f = { open: Gx((t) => t.open), transitionStatus: Gx((t) => t.transitionStatus), domReferenceElement: Gx((t) => t.domReferenceElement), referenceElement: Gx((t) => t.positionReference ?? t.referenceElement), floatingElement: Gx((t) => t.floatingElement), floatingId: Gx((t) => t.floatingId) }, S3i = class extends mOl {
    constructor(t) {
      const { syncOnly: e, nested: n, onOpenChange: i, triggerElements: r, ...s } = t;
      super({ ...s, positionReference: s.referenceElement, domReferenceElement: s.referenceElement }, { onOpenChange: i, dataRef: { current: {} }, events: CRf(), nested: n, triggerElements: r }, H2f), this.syncOnly = e;
    }
    syncOpenEvent = (t, e) => {
      (!t || !this.state.open || e != null && Ldw(e)) && (this.context.dataRef.current.openEvent = t ? e : void 0);
    };
    dispatchOpenChange = (t, e) => {
      this.syncOpenEvent(t, e.event);
      const n = { open: t, reason: e.reason, nativeEvent: e.event, nested: this.context.nested, triggerElement: e.trigger };
      this.context.events.emit("openchange", n);
    };
    setOpen = (t, e) => {
      if (this.syncOnly) {
        this.context.onOpenChange?.(t, e);
        return;
      }
      this.dispatchOpenChange(t, e), this.context.onOpenChange?.(t, e);
    };
  };
} });
import * as emw from "./react-runtime/react/esm-index-production.js";
function tmw(t) {
  const { popupStore: e, treatPopupAsFloatingElement: n = false, floatingRootContext: i, floatingId: r, nested: s, onOpenChange: o } = t, a = e.useState("open"), l = e.useState("activeTriggerElement"), c = e.useState(n ? "popupElement" : "positionerElement"), u = e.context.triggerElements, d = o, h = emw.useRef(null);
  i === void 0 && h.current === null && (h.current = new S3i({ open: a, transitionStatus: void 0, referenceElement: l, floatingElement: c, triggerElements: u, onOpenChange: d, floatingId: r, syncOnly: true, nested: s }));
  const p = i ?? h.current;
  return e.useSyncedValue("floatingId", r), pC(() => {
    const g = { open: a, floatingId: r, referenceElement: l, floatingElement: c };
    jP(l) && (g.domReferenceElement = l), p.state.positionReference === p.state.referenceElement && (g.positionReference = l), p.update(g);
  }, [a, r, l, c, p]), p.context.onOpenChange = d, p.context.nested = s, p;
}
