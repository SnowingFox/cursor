// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverPortal.js range:15723736..15724449
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.871Z
X6S = L({ "PopoverPortal.js"() {
  E(), Okt(), FZh(), Y8t(), BSa = Y6S.forwardRef(function(e, n) {
    const { keepMounted: i = false, ...r } = e, { store: s } = Lkt();
    return s.useState("mounted") || i ? BZh(R4r.Provider, { value: i, children: BZh(K8t, { ref: n, ...r }) }) : null;
  }), process.env.NODE_ENV !== "production" && (BSa.displayName = "PopoverPortal");
} });
import * as UZh from "./react-runtime/react/esm-index-production.js";
function Z6S() {
  const t = UZh.useContext(P4r);
  if (!t) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: PopoverPositionerContext is missing. PopoverPositioner parts must be placed within <Popover.Positioner>." : Oy(46));
  return t;
}
var P4r, 