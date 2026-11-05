// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogPopup.js range:17860798..17862688
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.623Z
C_1 = L({ "DialogPopup.js"() {
  E(), FGe(), Om(), I4(), l6(), y_1(), S_1(), MRa(), qQ(), g7t(), FY(), Dli(), Lwp = { ...T_e, ...D7, nestedDialogOpen(t) {
    return t ? { [Mwp.nestedDialogOpen]: "" } : null;
  } }, DRa = k_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, finalFocus: o, initialFocus: a, ...l } = e, { store: c } = rst(), u = c.useState("descriptionElementId"), d = c.useState("disablePointerDismissal"), h = c.useState("floatingRootContext"), p = c.useState("popupProps"), g = c.useState("modal"), f = c.useState("mounted"), _ = c.useState("nested"), b = c.useState("nestedOpenDialogCount"), y = c.useState("open"), S = c.useState("openMethod"), k = c.useState("titleElementId"), C = c.useState("transitionStatus"), T = c.useState("role"), I = h.useState("floatingId"), A = l.id ?? I;
    Nwp(), GQ({ open: y, ref: c.context.popupRef, onComplete() {
      y && c.context.onOpenChangeComplete?.(true);
    } });
    const P = a === void 0 ? Oah(c.context.popupRef) : a, M = b > 0, O = c.useStateSetter("popupElement"), U = Lm("div", e, { state: { open: y, nested: _, transitionStatus: C, nestedDialogOpen: M }, props: [p, { id: A, "aria-labelledby": k ?? void 0, "aria-describedby": u ?? void 0, role: T, ...Znt, hidden: !f, onKeyDown(j) {
      $St.has(j.key) && j.stopPropagation();
    }, style: { [Pwp.nestedDialogs]: b } }, l], ref: [n, c.context.popupRef, O], stateAttributesMapping: Lwp });
    return w_1(Mli, { context: h, openInteractionType: S, disabled: !f, closeOnFocusOut: !d, initialFocus: P, returnFocus: o, modal: g !== false, restoreFocus: "popup", children: U });
  }), process.env.NODE_ENV !== "production" && (DRa.displayName = "DialogPopup");
} });
import * as T_1 from "./react-runtime/react/esm-index-production.js";
import { jsx as Owp, jsxs as E_1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var NRa, 