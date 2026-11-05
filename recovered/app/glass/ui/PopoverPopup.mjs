// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverPopup.mjs range:31336990..31339194
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.869Z
Bgw = L({ "PopoverPopup.mjs"() {
  "use client";
  E(), t8(), y3n(), PBe(), c1s(), E3i(), GSs(), V2f(), bKe(), rce(), Pgw(), Dgw(), UPf(), tMf(), b3n(), rMf = { ...T3i, ...vOl }, BOl = nMf.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, initialFocus: o, finalFocus: a, ...l } = e, { store: c } = RBe(), u = AOl(), d = Mgw(true) != null, { context: h, hasClosePart: p } = Lgw(), g = c.useState("open"), f = c.useState("openMethod"), _ = c.useState("instantType"), b = c.useState("transitionStatus"), y = c.useState("popupProps"), S = c.useState("titleElementId"), k = c.useState("descriptionElementId"), C = c.useState("modal"), T = c.useState("mounted"), I = c.useState("openChangeReason"), A = c.useState("activeTriggerElement"), P = c.useState("floatingRootContext"), M = P.useState("floatingId"), O = c.useState("disabled"), N = c.useState("openOnHover"), U = c.useState("closeDelay"), j = l.id ?? M;
    z2f({ open: g, ref: c.context.popupRef, onComplete() {
      g && c.context.onOpenChangeComplete?.(true);
    } }), Rmw(P, { enabled: N && !O, closeDelay: U });
    const $ = o === void 0 ? amw(c.context.popupRef) : o, H = C !== false && p;
    c.useSyncedValue("focusManagerModal", H);
    const G = nMf.useCallback((V) => {
      c.set("popupElement", V);
    }, [c]), q = { open: g, side: u.side, align: u.align, instant: _, transitionStatus: b }, K = _Ke("div", e, { state: q, ref: [n, c.context.popupRef, G], props: [y, { id: j, role: "dialog", ..._Ol, "aria-labelledby": S, "aria-describedby": k, onKeyDown(V) {
      d && JPf.has(V.key) && V.stopPropagation();
    } }, BPf(b), l], stateAttributesMapping: rMf });
    return iMf(Xhw, { context: P, openInteractionType: f, modal: H, disabled: !T || I === BA.triggerHover, initialFocus: $, returnFocus: a, restoreFocus: "popup", previousFocusableElement: hU(A) ? A : void 0, nextFocusableElement: c.context.triggerFocusTargetRef, beforeContentFocusGuardRef: c.context.beforeContentFocusGuardRef, children: iMf(Ogw, { value: h, children: K }) });
  }), process.env.NODE_ENV !== "production" && (BOl.displayName = "PopoverPopup");
} });
import * as Ugw from "./react-runtime/react/esm-index-production.js";
var UOl, 