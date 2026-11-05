// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogClose.js range:17858595..17859275
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.604Z
v_1 = L({ "DialogClose.js"() {
  E(), FGe(), Om(), VS(), Cz(), Zb(), RRa = f_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = false, nativeButton: a = true, ...l } = e, { store: c } = rst(), u = c.useState("open"), { getButtonProps: d, buttonRef: h } = wz({ disabled: o, native: a }), p = { disabled: o };
    function g(f) {
      u && c.setOpen(false, zd(Tli, f.nativeEvent));
    }
    return Lm("button", e, { state: p, ref: [n, h], props: [{ onClick: g }, l, d] });
  }), process.env.NODE_ENV !== "production" && (RRa.displayName = "DialogClose");
} });
import * as __1 from "./react-runtime/react/esm-index-production.js";
var PRa, 