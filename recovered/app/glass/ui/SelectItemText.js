// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectItemText.js range:6158205..6158854
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.980Z
c$y = L({ "SelectItemText.js"() {
  E(), tWe(), cea(), Om(), pea = hea.memo(hea.forwardRef(function(e, n) {
    const { index: i, textRef: r, selectedByFocus: s, hasRegistered: o } = lea(), { firstItemTextRef: a, selectedItemTextRef: l } = Qnt(), { render: c, className: u, style: d, ...h } = e, p = hea.useCallback((f) => {
      f && (o && i === 0 && (a.current = f), o && s && (l.current = f));
    }, [a, l, i, s, o]);
    return Lm("div", e, { ref: [p, n, r], props: h });
  })), process.env.NODE_ENV !== "production" && (pea.displayName = "SelectItemText");
} });
import * as u$y from "./react-runtime/react/esm-index-production.js";
var L2r, 