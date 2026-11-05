// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxInputGroup.js range:16743982..16745069
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.545Z
bZS = L({ "ComboboxInputGroup.js"() {
  E(), Jy(), Om(), N7(), Y_e(), yGe(), ZCa(), vZS(), TW(), $D(), eTa = _ZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { state: a } = Vj(), l = x0e(), { filteredItems: c } = bGe(), u = Ic(l, gm.open), d = Ic(l, gm.mounted), h = Ic(l, gm.popupSide), p = Ic(l, gm.positionerElement), g = Ic(l, gm.disabled), f = Ic(l, gm.readOnly), _ = Ic(l, gm.hasSelectedValue), b = Ic(l, gm.selectionMode), y = d && p ? h : null, S = g, k = c.length === 0, T = { ...a, open: u, disabled: S, readOnly: f, popupSide: y, listEmpty: k, placeholder: b === "none" ? false : !_ }, I = pu((A) => {
      l.set("inputGroupElement", A);
    });
    return Lm("div", e, { ref: [n, I], props: [{ role: "group", onMouseDown(A) {
      fZS(A, l, S, f, (P) => Nf(l.state.chipsContainerRef.current, P));
    } }, o], state: T, stateAttributesMapping: z8r });
  }), process.env.NODE_ENV !== "production" && (eTa.displayName = "ComboboxInputGroup");
} });
import * as tTa from "./react-runtime/react/esm-index-production.js";
var Kfi, Z8r, 