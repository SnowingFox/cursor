// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogPortal.js range:17862688..17865214
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.626Z
I_1 = L({ "DialogPortal.js"() {
  E(), cbn(), FGe(), MRa(), cci(), Y8t(), NRa = T_1.forwardRef(function(e, n) {
    const { keepMounted: i = false, ...r } = e, { store: s } = rst(), o = s.useState("mounted"), a = s.useState("modal"), l = s.useState("open");
    return o || i ? Owp(Vjr.Provider, { value: i, children: E_1(K8t, { ref: n, ...r, children: [o && a === true && Owp(l7t, { ref: s.context.internalBackdropRef, inert: lbn(!l) }), e.children] }) }) : null;
  }), process.env.NODE_ENV !== "production" && (NRa.displayName = "DialogPortal");
} });
import * as w_i from "./react-runtime/react/esm-index-production.js";
function x_1(t) {
  const { store: e, actionsRef: n } = t, i = e.useState("open");
  Uah(e, i), $li(e);
  const { forceUnmount: r } = Hli(i, e), s = w_i.useCallback(() => {
    e.setOpen(false, zd(Uwe));
  }, [e]);
  w_i.useImperativeHandle(n, () => ({ unmount: r, close: s }), [r, s]);
}
function A_1({ store: t, parentContext: e, isDrawer: n }) {
  const i = t.useState("open"), r = t.useState("disablePointerDismissal"), s = t.useState("modal"), o = t.useState("popupElement"), a = t.useState("floatingRootContext"), [l, c] = w_i.useState(0), [u, d] = w_i.useState(0), h = l === 0, p = Q8t(a, { outsidePressEvent() {
    return t.context.internalBackdropRef.current || t.context.backdropRef.current ? "intentional" : { mouse: s === "trap-focus" ? "sloppy" : "intentional", touch: "sloppy" };
  }, outsidePress(b) {
    if (!t.context.outsidePressEnabledRef.current || "button" in b && b.button !== 0 || "touches" in b && b.touches.length !== 1) return false;
    const y = B5(b);
    return h && !r ? s && (t.context.internalBackdropRef.current || t.context.backdropRef.current) ? t.context.internalBackdropRef.current === y || t.context.backdropRef.current === y || Nf(y, o) && !y?.hasAttribute("data-base-ui-portal") : true : false;
  }, escapeKey: h });
  xlh(i && s === true, o), t.useContextCallback("onNestedDialogOpen", (b, y) => {
    c(b), d(y);
  }), t.useContextCallback("onNestedDialogClose", () => {
    c(0), d(0);
  }), w_i.useEffect(() => (e?.onNestedDialogOpen && i && e.onNestedDialogOpen(l + 1, u + (n ? 1 : 0)), e?.onNestedDialogClose && !i && e.onNestedDialogClose(), () => {
    e?.onNestedDialogClose && i && e.onNestedDialogClose();
  }), [n, i, l, u, e]);
  const g = p.reference ?? pE, f = p.trigger ?? pE, _ = p.floating ?? pE;
  return Wli(t, { activeTriggerProps: g, inactiveTriggerProps: f, popupProps: _, nestedOpenDialogCount: l, nestedOpenDrawerCount: u }), null;
}
