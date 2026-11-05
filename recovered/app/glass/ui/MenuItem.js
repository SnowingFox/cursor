// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuItem.js range:14538277..14539113
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.796Z
GyS = L({ "MenuItem.js"() {
  E(), EOr(), F_e(), Om(), _A(), rWe(), WUt(), Vpa = WyS.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = false, disabled: l = false, closeOnClick: c = true, style: u, ...d } = e, h = iWe({ label: o }), p = gSn(true), g = $I(s), { store: f } = O_e(), _ = f.useState("isActive", h.index), b = f.useState("itemProps"), { getItemProps: y, itemRef: S } = COr({ closeOnClick: c, disabled: l, highlighted: _, id: g, store: f, nativeButton: a, nodeId: p?.context.nodeId, itemMetadata: TOr });
    return Lm("div", e, { state: { disabled: l, highlighted: _ }, props: [b, d, y], ref: [S, n, h.ref] });
  }), process.env.NODE_ENV !== "production" && (Vpa.displayName = "MenuItem");
} });
import * as JFh from "./react-runtime/react/esm-index-production.js";
var Kpa, 