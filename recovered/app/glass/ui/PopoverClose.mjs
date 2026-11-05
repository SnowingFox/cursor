// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverClose.mjs range:31341717..31342324
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.865Z
Ygw = L({ "PopoverClose.mjs"() {
  "use client";
  E(), PBe(), bKe(), Vgw(), xBe(), rce(), tMf(), WOl = Kgw.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = false, nativeButton: a = true, ...l } = e, { buttonRef: c, getButtonProps: u } = cPf({ disabled: o, focusableWhenDisabled: false, native: a }), { store: d } = RBe();
    return Fgw(), _Ke("button", e, { ref: [n, c], props: [{ onClick(p) {
      d.setOpen(false, NG(BA.closePress, p.nativeEvent));
    } }, l, u] });
  }), process.env.NODE_ENV !== "production" && (WOl.displayName = "PopoverClose");
} }), oMf, 