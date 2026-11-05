// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxItemIndicator.js range:16764692..16765639
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.554Z
Qcp = L({ "ComboboxItemIndicator.js"() {
  E(), Kcp(), LRe(), qQ(), Om(), l6(), Kkn = a7r.forwardRef(function(e, n) {
    const i = e.keepMounted ?? false, { selected: r } = Vcp();
    return i || r ? $ZS(uTa, { ...e, ref: n }) : null;
  }), process.env.NODE_ENV !== "production" && (Kkn.displayName = "ComboboxItemIndicator"), uTa = a7r.memo(a7r.forwardRef((t, e) => {
    const { render: n, className: i, style: r, keepMounted: s, ...o } = t, { selected: a } = Vcp(), l = a7r.useRef(null), { transitionStatus: c, setMounted: u } = NRe(a), h = Lm("span", t, { ref: [e, l], state: { selected: a, transitionStatus: c }, props: [{ "aria-hidden": true, children: "✔️" }, o], stateAttributesMapping: D7 });
    return GQ({ open: a, ref: l, onComplete() {
      a || u(false);
    } }), h;
  })), process.env.NODE_ENV !== "production" && (uTa.displayName = "Inner");
} });
import * as HZS from "./react-runtime/react/esm-index-production.js";
var l7r, 