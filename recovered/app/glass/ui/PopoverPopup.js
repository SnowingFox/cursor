// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverPopup.js range:15728048..15730220
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.868Z
r4S = L({ "PopoverPopup.js"() {
  E(), aT(), Okt(), jZh(), I4(), l6(), qQ(), Om(), g7t(), YJo(), u7t(), HZh(), l2r(), FY(), Dli(), Zb(), qZh = { ...T_e, ...D7 }, $Sa = WZh.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, initialFocus: o, finalFocus: a, ...l } = e, { store: c } = Lkt(), u = Z6S(), d = VJo(true) != null, { context: h, hasClosePart: p } = t4S(), g = c.useState("open"), f = c.useState("openMethod"), _ = c.useState("instantType"), b = c.useState("transitionStatus"), y = c.useState("popupProps"), S = c.useState("titleElementId"), k = c.useState("descriptionElementId"), C = c.useState("modal"), T = c.useState("mounted"), I = c.useState("openChangeReason"), A = c.useState("activeTriggerElement"), P = c.useState("floatingRootContext"), M = P.useState("floatingId"), O = c.useState("disabled"), N = c.useState("openOnHover"), U = c.useState("closeDelay"), j = l.id ?? M;
    GQ({ open: g, ref: c.context.popupRef, onComplete() {
      g && c.context.onOpenChangeComplete?.(true);
    } }), a2r(P, { enabled: N && !O, closeDelay: U });
    const $ = o === void 0 ? Oah(c.context.popupRef) : o, H = C !== false && p;
    c.useSyncedValue("focusManagerModal", H);
    const G = WZh.useCallback((V) => {
      c.set("popupElement", V);
    }, [c]), q = { open: g, side: u.side, align: u.align, instant: _, transitionStatus: b }, K = Lm("div", e, { state: q, ref: [n, c.context.popupRef, G], props: [y, { id: j, role: "dialog", ...Znt, "aria-labelledby": S, "aria-describedby": k, onKeyDown(V) {
      d && $St.has(V.key) && V.stopPropagation();
    } }, c7t(b), l], stateAttributesMapping: qZh });
    return GZh(Mli, { context: P, openInteractionType: f, modal: H, disabled: !T || I === E4, initialFocus: $, returnFocus: a, restoreFocus: "popup", previousFocusableElement: mE(A) ? A : void 0, nextFocusableElement: c.context.triggerFocusTargetRef, beforeContentFocusGuardRef: c.context.beforeContentFocusGuardRef, children: GZh(n4S, { value: h, children: K }) });
  }), process.env.NODE_ENV !== "production" && ($Sa.displayName = "PopoverPopup");
} });
import * as s4S from "./react-runtime/react/esm-index-production.js";
var HSa, 