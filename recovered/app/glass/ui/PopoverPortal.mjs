// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverPortal.mjs range:31315187..31315645
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.872Z
ugw = L({ "PopoverPortal.mjs"() {
  "use client";
  E(), y3n(), PBe(), SPf(), xOl = cgw.forwardRef(function(e, n) {
    const { keepMounted: i = false, ...r } = e, { store: s } = RBe();
    return s.useState("mounted") || i ? kPf(a1s.Provider, { value: i, children: kPf(eOl, { ref: n, ...r }) }) : null;
  }), process.env.NODE_ENV !== "production" && (xOl.displayName = "PopoverPortal");
} });
function wPf(t) {
  return qLl(19) ? t : t ? "true" : void 0;
}
