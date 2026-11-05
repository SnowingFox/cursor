// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverBackdrop.mjs range:31339847..31340676
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.864Z
Hgw = L({ "PopoverBackdrop.mjs"() {
  "use client";
  E(), PBe(), E3i(), GSs(), bKe(), rce(), sMf = { ...T3i, ...vOl }, jOl = $gw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { store: a } = RBe(), l = a.useState("open"), c = a.useState("mounted"), u = a.useState("transitionStatus"), d = a.useState("openChangeReason");
    return _Ke("div", e, { state: { open: l, transitionStatus: u }, ref: [a.context.backdropRef, n], props: [{ role: "presentation", hidden: !c, style: { pointerEvents: d === BA.triggerHover ? "none" : void 0, userSelect: "none", WebkitUserSelect: "none" } }, o], stateAttributesMapping: sMf });
  }), process.env.NODE_ENV !== "production" && (jOl.displayName = "PopoverBackdrop");
} });
import * as Wgw from "./react-runtime/react/esm-index-production.js";
var $Ol, 