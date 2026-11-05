// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxGroupLabel.js range:16759980..16760726
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.543Z
lTa = L({ "ComboboxGroupLabel.js"() {
  E(), jv(), _A(), Gcp(), Om(), Zfi = OZS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, id: o, ...a } = e, { setLabelId: l } = LZS(), c = $I(o);
    return su(() => (l(c), () => {
      l(void 0);
    }), [c, l]), Lm("div", e, { ref: n, props: [{ id: c }, a] });
  }), process.env.NODE_ENV !== "production" && (Zfi.displayName = "ComboboxGroupLabel");
} });
import * as zcp from "./react-runtime/react/esm-index-production.js";
function Vcp() {
  const t = zcp.useContext(r7r);
  if (!t) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ComboboxItemContext is missing. ComboboxItem parts must be placed within <Combobox.Item>." : Oy(19));
  return t;
}
var r7r, 