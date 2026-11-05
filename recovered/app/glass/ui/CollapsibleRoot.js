// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CollapsibleRoot.js range:15022063..15022915
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.533Z
sxS = L({ "CollapsibleRoot.js"() {
  E(), Jy(), Om(), nxS(), fva(), B$h(), bva = _va.forwardRef(function(e, n) {
    const { render: i, className: r, defaultOpen: s = false, disabled: o = false, onOpenChange: a, open: l, style: c, ...u } = e, d = pu(a), h = txS({ open: l, defaultOpen: s, onOpenChange: d, disabled: o }), p = _va.useMemo(() => ({ open: h.open, disabled: h.disabled, transitionStatus: h.transitionStatus }), [h.open, h.disabled, h.transitionStatus]), g = _va.useMemo(() => ({ ...h, onOpenChange: d, state: p }), [h, d, p]), f = Lm("div", e, { state: p, ref: n, props: u, stateAttributesMapping: vva });
    return rxS(uFr.Provider, { value: g, children: f });
  }), process.env.NODE_ENV !== "production" && (bva.displayName = "CollapsibleRoot");
} });
import * as oxS from "./react-runtime/react/esm-index-production.js";
var U$h, hFr, 