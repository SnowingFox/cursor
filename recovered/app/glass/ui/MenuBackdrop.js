// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuBackdrop.js range:14531687..14532516
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.787Z
PyS = L({ "MenuBackdrop.js"() {
  E(), F_e(), Om(), I4(), l6(), HUt(), Zb(), zFh = { ...T_e, ...D7 }, Bpa = RyS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = O_e(), l = a.useState("open"), c = a.useState("mounted"), u = a.useState("transitionStatus"), d = a.useState("lastOpenChangeReason"), h = mSn(), p = { open: l, transitionStatus: u };
    return Lm("div", e, { ref: h?.backdropRef ? [n, h.backdropRef] : n, state: p, stateAttributesMapping: zFh, props: [{ role: "presentation", hidden: !c, style: { pointerEvents: d === E4 ? "none" : void 0, userSelect: "none", WebkitUserSelect: "none" } }, o] });
  }), process.env.NODE_ENV !== "production" && (Bpa.displayName = "MenuBackdrop");
} });
import * as MyS from "./react-runtime/react/esm-index-production.js";
var Upa, 