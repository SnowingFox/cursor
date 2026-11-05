// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogViewport.js range:17869688..17870725
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.635Z
$_1 = L({ "DialogViewport.js"() {
  E(), Om(), I4(), l6(), FGe(), MRa(), U_1(), Wwp = { ...T_e, ...D7, nested(t) {
    return t ? { [FRa.nested]: "" } : null;
  }, nestedDialogOpen(t) {
    return t ? { [FRa.nestedDialogOpen]: "" } : null;
  } }, BRa = j_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, ...a } = e, l = Nwp(), { store: c } = rst(), u = c.useState("open"), d = c.useState("nested"), h = c.useState("transitionStatus"), p = c.useState("nestedOpenDialogCount"), g = c.useState("mounted"), f = c.useStateSetter("viewportElement"), _ = p > 0;
    return Lm("div", e, { enabled: l || g, state: { open: u, nested: d, transitionStatus: h, nestedDialogOpen: _ }, ref: [n, f], stateAttributesMapping: Wwp, props: [{ role: "presentation", hidden: !g, style: { pointerEvents: u ? void 0 : "none" }, children: o }, a] });
  }), process.env.NODE_ENV !== "production" && (BRa.displayName = "DialogViewport");
} });
import * as H_1 from "./react-runtime/react/esm-index-production.js";
var URa, 