// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxGroup.js range:16759353..16759980
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.542Z
aTa = L({ "ComboboxGroup.js"() {
  E(), Om(), Gcp(), Ccp(), L$t = oTa.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, items: o, ...a } = e, [l, c] = oTa.useState(), u = oTa.useMemo(() => ({ labelId: l, setLabelId: c, items: o }), [l, c, o]), d = Lm("div", e, { ref: n, props: [{ role: "group", "aria-labelledby": l }, a] }), h = qcp(i7r.Provider, { value: u, children: d });
    return o ? qcp(kZS, { items: o, children: h }) : h;
  }), process.env.NODE_ENV !== "production" && (L$t.displayName = "ComboboxGroup");
} });
import * as OZS from "./react-runtime/react/esm-index-production.js";
var Zfi, 