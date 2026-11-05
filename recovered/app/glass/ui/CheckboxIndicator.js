// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CheckboxIndicator.js range:14674088..14674796
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.524Z
dkS = L({ "CheckboxIndicator.js"() {
  E(), j4h(), Om(), B4h(), qQ(), LRe(), l6(), BY(), Jma = W4h.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, keepMounted: o = false, ...a } = e, l = ckS(), c = l.checked || l.indeterminate, { mounted: u, transitionStatus: d, setMounted: h } = NRe(c), p = W4h.useRef(null), g = { ...l, transitionStatus: d };
    GQ({ open: c, ref: p, onComplete() {
      c || h(false);
    } });
    const _ = { ...F4h(l), ...D7, ...wne }, b = o || u, y = Lm("span", e, { ref: [n, p], state: g, stateAttributesMapping: _, props: a });
    return b ? y : null;
  }), process.env.NODE_ENV !== "production" && (Jma.displayName = "CheckboxIndicator");
} }), ega, 