// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogBackdrop.js range:17857821..17858595
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.603Z
g_1 = L({ "DialogBackdrop.js"() {
  E(), FGe(), Om(), I4(), l6(), Rwp = { ...T_e, ...D7 }, ARa = m_1.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, forceRender: o = false, ...a } = e, { store: l } = rst(), c = l.useState("open"), u = l.useState("nested"), d = l.useState("mounted"), h = l.useState("transitionStatus");
    return Lm("div", e, { state: { open: c, transitionStatus: h }, ref: [l.context.backdropRef, n], stateAttributesMapping: Rwp, props: [{ role: "presentation", hidden: !d, style: { userSelect: "none", WebkitUserSelect: "none" } }, a], enabled: o || !u });
  }), process.env.NODE_ENV !== "production" && (ARa.displayName = "DialogBackdrop");
} });
import * as f_1 from "./react-runtime/react/esm-index-production.js";
var RRa, 