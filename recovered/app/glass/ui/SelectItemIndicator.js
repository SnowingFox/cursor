// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectItemIndicator.js range:6157262..6158205
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.976Z
l$y = L({ "SelectItemIndicator.js"() {
  E(), cea(), LRe(), qQ(), Om(), l6(), N2r = D2r.forwardRef(function(e, n) {
    const i = e.keepMounted ?? false, { selected: r } = lea();
    return i || r ? a$y(dea, { ...e, ref: n }) : null;
  }), process.env.NODE_ENV !== "production" && (N2r.displayName = "SelectItemIndicator"), dea = D2r.memo(D2r.forwardRef((t, e) => {
    const { render: n, className: i, style: r, keepMounted: s, ...o } = t, { selected: a } = lea(), l = D2r.useRef(null), { transitionStatus: c, setMounted: u } = NRe(a), h = Lm("span", t, { ref: [e, l], state: { selected: a, transitionStatus: c }, props: [{ "aria-hidden": true, children: "✔️" }, o], stateAttributesMapping: D7 });
    return GQ({ open: a, ref: l, onComplete() {
      a || u(false);
    } }), h;
  })), process.env.NODE_ENV !== "production" && (dea.displayName = "Inner");
} });
import * as hea from "./react-runtime/react/esm-index-production.js";
var pea, 