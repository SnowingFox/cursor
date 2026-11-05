// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProgressRoot.js range:14707079..14708255
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.914Z
fga = L({ "ProgressRoot.js"() {
  E(), Fwe(), WHe(), ySn(), Om(), m9h(), g9h(), SSn = _pi.forwardRef(function(e, n) {
    const { format: i, getAriaValueText: r = $kS, locale: s, max: o = 100, min: a = 0, value: l, render: c, className: u, children: d, style: h, ...p } = e, [g, f] = _pi.useState(), _ = uL(i);
    let b = "indeterminate";
    Number.isFinite(l) && (b = l === o ? "complete" : "progressing");
    const y = FkS(l, s, _.current), S = _pi.useMemo(() => ({ status: b }), [b]), k = { "aria-labelledby": g, "aria-valuemax": o, "aria-valuemin": a, "aria-valuenow": l ?? void 0, "aria-valuetext": r(y, l), role: "progressbar", children: jkS(_pi.Fragment, { children: [d, f9h("span", { role: "presentation", style: Z5e, children: "x" })] }) }, C = _pi.useMemo(() => ({ formattedValue: y, max: o, min: a, setLabelId: f, state: S, status: b, value: l }), [y, o, a, f, S, b, l]), T = Lm("div", e, { state: S, ref: n, props: [k, p], stateAttributesMapping: gga });
    return f9h(h5r.Provider, { value: C, children: T });
  }), process.env.NODE_ENV !== "production" && (SSn.displayName = "ProgressRoot");
} });
function v9h(t, e, n) {
  return (t - e) * 100 / (n - e);
}
