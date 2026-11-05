// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxPopup.js range:16756822..16759015
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.556Z
sTa = L({ "ComboboxPopup.js"() {
  E(), jv(), Om(), Y_e(), yGe(), I4(), K8r(), qQ(), l6(), u7t(), ycp(), q8r(), TW(), $D(), Dli(), Hcp = { ...T_e, ...D7 }, Xfi = jcp.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, initialFocus: o, finalFocus: a, ...l } = e, c = x0e(), u = JCa(), d = U8r(), { filteredItems: h } = bGe(), p = Ic(c, gm.mounted), g = Ic(c, gm.open), f = Ic(c, gm.openMethod), _ = Ic(c, gm.transitionStatus), b = Ic(c, gm.inputInsidePopup), y = Ic(c, gm.inputElement), S = Ic(c, gm.modal), k = Ic(c, gm.id), C = h.length === 0, T = l.id ?? (b ? ucp(k) : void 0);
    su(() => (c.set("popupId", c.state.popupRef.current?.id || T), () => {
      c.set("popupId", void 0);
    }), [c, T]), GQ({ open: g, ref: c.state.popupRef, onComplete() {
      g && c.state.onOpenChangeComplete(true);
    } });
    const I = { open: g, side: u.side, align: u.align, anchorHidden: u.anchorHidden, transitionStatus: _, empty: C }, A = Lm("div", e, { state: I, ref: [n, c.state.popupRef], props: [{ id: T, role: b ? "dialog" : "presentation", tabIndex: -1, onFocus(U) {
      const j = B5(U.nativeEvent);
      f !== "touch" && (Nf(c.state.listElement, j) || j === U.currentTarget) && c.state.inputRef.current?.focus();
    } }, c7t(_), l], stateAttributesMapping: Hcp }), M = o === void 0 ? b ? (U) => U === "touch" ? c.state.popupRef.current : y : false : o;
    let O;
    a != null ? O = a : O = b ? void 0 : false;
    const N = !b || S;
    return $cp(Mli, { context: d, disabled: !p, modal: N, openInteractionType: f, initialFocus: M, returnFocus: O, getInsideElements: () => [c.state.startDismissRef.current, c.state.endDismissRef.current], children: NZS(jcp.Fragment, { children: [A, N && $cp(Y8r, { ref: c.state.endDismissRef })] }) });
  }), process.env.NODE_ENV !== "production" && (Xfi.displayName = "ComboboxPopup");
} });
import * as Wcp from "./react-runtime/react/esm-index-production.js";
function LZS() {
  const t = Wcp.useContext(i7r);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ComboboxGroupContext is missing. ComboboxGroup parts must be placed within <Combobox.Group>." : Oy(18));
  return t;
}
var i7r, 