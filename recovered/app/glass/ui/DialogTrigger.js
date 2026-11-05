// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogTrigger.js range:17871195..17872522
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.635Z
G_1 = L({ "DialogTrigger.js"() {
  E(), zS(), FGe(), Cz(), Om(), I4(), k_e(), _A(), nci(), FY(), Z8t(), jRa = Gwp.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = false, nativeButton: a = true, id: l, payload: c, handle: u, ...d } = e, h = rst(true), p = u?.store ?? h?.store;
    if (!p) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle." : Oy(79));
    const g = $I(l), f = p.useState("floatingRootContext"), _ = p.useState("isOpenedByTrigger", g), b = p.useState("triggerPopupId", g), y = Gwp.useRef(null), { registerTrigger: S, isMountedByThisTrigger: k } = jli(g, y, p, { payload: c }), { getButtonProps: C, buttonRef: T } = wz({ disabled: o, native: a }), I = X8t(f, { enabled: f != null }), A = AJo(() => p.select("open"), (O) => {
      p.set("openMethod", O);
    }), P = { disabled: o, open: _ }, M = p.useState("triggerProps", k);
    return Lm("button", e, { state: P, ref: [T, n, S, y], props: [I.reference, M, A, { [MRr]: "", id: g, "aria-haspopup": "dialog", "aria-expanded": _, "aria-controls": b }, d, C], stateAttributesMapping: abn });
  }), process.env.NODE_ENV !== "production" && (jRa.displayName = "DialogTrigger");
} });
function q_1() {
  return new $Ra();
}
var $Ra, 