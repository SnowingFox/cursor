// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PreviewCardPopup.js range:6314151..6315354
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.895Z
Thh = L({ "PreviewCardPopup.js"() {
  E(), Jy(), qci(), Shh(), I4(), l6(), qQ(), Om(), u7t(), l2r(), Chh = { ...T_e, ...D7 }, PPr = TWy.forwardRef(function(e, n) {
    const { className: i, render: r, style: s, ...o } = e, a = Gci(), { side: l, align: c } = wWy(), u = a.useState("open"), d = a.useState("instantType"), h = a.useState("transitionStatus"), p = a.useState("popupProps"), g = a.useState("floatingRootContext");
    GQ({ open: u, ref: a.context.popupRef, onComplete() {
      u && a.context.onOpenChangeComplete?.(true);
    } });
    const f = pu(() => a.context.closeDelayRef.current);
    return a2r(g, { closeDelay: f }), Lm("div", e, { state: { open: u, side: l, align: c, instant: d, transitionStatus: h }, ref: [n, a.context.popupRef, a.useStateSetter("popupElement")], props: [p, c7t(h), o], stateAttributesMapping: Chh });
  }), process.env.NODE_ENV !== "production" && (PPr.displayName = "PreviewCardPopup");
} });
function Ehh(t) {
  const e = hhe(t);
  let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const r = mE(t), s = r ? t.offsetWidth : n, o = r ? t.offsetHeight : i;
  return (z8t(n) !== s || z8t(i) !== o) && (n = s, i = o), { width: n, height: i };
}
