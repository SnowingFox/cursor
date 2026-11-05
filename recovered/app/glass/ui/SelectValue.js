// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectValue.js range:6112650..6113562
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.989Z
xjy = L({ "SelectValue.js"() {
  E(), Om(), tWe(), o7t(), iit(), TW(), mlh = { value: () => null }, OJo = Ijy.forwardRef(function(e, n) {
    const { className: i, render: r, children: s, placeholder: o, style: a, ...l } = e, { store: c, valueRef: u } = Qnt(), d = Ic(c, _S.value), h = Ic(c, _S.items), p = Ic(c, _S.itemToStringLabel), g = Ic(c, _S.hasSelectedValue), f = !g && o != null && s == null, _ = Ic(c, _S.hasNullItemLabel, f), b = { value: d, placeholder: !g };
    let y = null;
    return typeof s == "function" ? y = s(d) : s != null ? y = s : !g && o != null && !_ ? y = o : Array.isArray(d) ? y = hjy(d, h, p) : y = ilh(d, h, p), Lm("span", e, { state: b, ref: [n, u], props: [{ children: y }, l], stateAttributesMapping: mlh });
  }), process.env.NODE_ENV !== "production" && (OJo.displayName = "SelectValue");
} });
import * as Ajy from "./react-runtime/react/esm-index-production.js";
var FJo, 