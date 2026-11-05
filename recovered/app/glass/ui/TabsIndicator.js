// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TabsIndicator.js range:16380923..16383086
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.057Z
Psp = L({ "TabsIndicator.js"() {
  E(), Nsh(), Om(), EWy(), xsp(), Cfi(), Tfi(), n0a(), EqS(), IqS(), rea(), Rsp = { ...gkn, activeTabPosition: () => null, activeTabSize: () => null }, XBr = i0a.forwardRef(function(e, n) {
    const { className: i, render: r, renderBeforeHydration: s = false, style: o, ...a } = e, { nonce: l } = nea(), { getTabElementBySelectedValue: c, orientation: u, tabActivationDirection: d, value: h } = qBr(), { tabsListElement: p, registerIndicatorUpdateListener: g } = Tsp(), f = Isp(), _ = Dsh();
    i0a.useEffect(() => g(_), [g, _]);
    let b = 0, y = 0, S = 0, k = 0, C = 0, T = 0, I = false;
    if (h != null && p != null) {
      const j = c(h);
      if (j != null) {
        I = true;
        const { width: $, height: H } = Ehh(j), { width: G, height: q } = Ehh(p), K = j.getBoundingClientRect(), V = p.getBoundingClientRect(), Y = G > 0 ? V.width / G : 1, J = q > 0 ? V.height / q : 1;
        if (Math.abs(Y) > Number.EPSILON && Math.abs(J) > Number.EPSILON) {
          const te = K.left - V.left, ee = K.top - V.top;
          b = te / Y + p.scrollLeft - p.clientLeft, S = ee / J + p.scrollTop - p.clientTop;
        } else b = j.offsetLeft, S = j.offsetTop;
        C = $, T = H, y = p.scrollWidth - b - C, k = p.scrollHeight - S - T;
      }
    }
    const A = I ? { left: b, right: y, top: S, bottom: k } : null, P = I ? { width: C, height: T } : null, M = I ? { [y$t.activeTabLeft]: `${b}px`, [y$t.activeTabRight]: `${y}px`, [y$t.activeTabTop]: `${S}px`, [y$t.activeTabBottom]: `${k}px`, [y$t.activeTabWidth]: `${C}px`, [y$t.activeTabHeight]: `${T}px` } : void 0, O = I && C > 0 && T > 0, U = Lm("span", e, { state: { orientation: u, activeTabPosition: A, activeTabSize: P, tabActivationDirection: d }, ref: n, props: [{ role: "presentation", style: M, hidden: !O }, a, { suppressHydrationWarning: true }], stateAttributesMapping: Rsp });
    return h == null ? null : xqS(i0a.Fragment, { children: [U, f && s && AqS("script", { nonce: l, dangerouslySetInnerHTML: { __html: Asp }, suppressHydrationWarning: true })] });
  }), process.env.NODE_ENV !== "production" && (XBr.displayName = "TabsIndicator");
} }), Msp, 