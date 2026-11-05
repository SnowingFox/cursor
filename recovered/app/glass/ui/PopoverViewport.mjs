// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverViewport.mjs range:31349708..31350496
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.884Z
pfw = L({ "PopoverViewport.mjs"() {
  "use client";
  E(), PBe(), c1s(), bKe(), Xgw(), dfw(), uMf = { activationDirection: (t) => t ? { "data-activation-direction": t } : null }, zOl = hfw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, ...a } = e, { store: l } = RBe(), { side: c } = AOl(), u = l.useState("instantType"), { children: d, state: h } = afw({ store: l, side: c, cssVars: oMf, children: o }), p = { activationDirection: h.activationDirection, transitioning: h.transitioning, instant: u };
    return _Ke("div", e, { state: p, ref: n, props: [a, { children: d }], stateAttributesMapping: uMf });
  }), process.env.NODE_ENV !== "production" && (zOl.displayName = "PopoverViewport");
} });
function mfw() {
  return new VOl();
}
var VOl, 