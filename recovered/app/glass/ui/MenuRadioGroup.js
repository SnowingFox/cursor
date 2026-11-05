// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuRadioGroup.js range:14549307..14550232
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.806Z
QyS = L({ "MenuRadioGroup.js"() {
  E(), __e(), Jy(), a6h(), Gpa(), Om(), Qpa = POr.memo(POr.forwardRef(function(e, n) {
    const { render: i, className: r, value: s, defaultValue: o, onValueChange: a, disabled: l = false, style: c, "aria-labelledby": u, ...d } = e, [h, p] = POr.useState(void 0), [g, f] = yne({ controlled: s, default: o, name: "MenuRadioGroup" }), _ = pu((k, C) => {
      a?.(k, C), !C.isCanceled && f(k);
    }), y = Lm("div", e, { state: { disabled: l }, ref: n, props: { role: "group", "aria-labelledby": u ?? h, "aria-disabled": l || void 0, ...d } }), S = POr.useMemo(() => ({ value: g, setValue: _, disabled: l }), [g, _, l]);
    return l6h(Zhi.Provider, { value: p, children: l6h(ROr.Provider, { value: S, children: y }) });
  })), process.env.NODE_ENV !== "production" && (Qpa.displayName = "MenuRadioGroup");
} });
import * as JyS from "./react-runtime/react/esm-index-production.js";
var Jpa, 