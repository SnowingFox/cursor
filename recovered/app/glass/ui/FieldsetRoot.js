// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FieldsetRoot.js range:17965469..17966117
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.671Z
Iy1 = L({ "FieldsetRoot.js"() {
  E(), zOr(), Om(), _2a = v2a.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = false, ...a } = e, [l, c] = v2a.useState(void 0), d = GOr(true)?.disabled || o, p = Lm("fieldset", e, { ref: n, state: { disabled: d }, props: [{ "aria-labelledby": l, disabled: d }, a] }), g = v2a.useMemo(() => ({ legendId: l, setLegendId: c, disabled: d }), [l, c, d]);
    return Ey1(qOr.Provider, { value: g, children: p });
  }), process.env.NODE_ENV !== "production" && (_2a.displayName = "FieldsetRoot");
} });
import * as xy1 from "./react-runtime/react/esm-index-production.js";
var b2a, 