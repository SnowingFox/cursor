// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SidebarPaginatedMenu.js range:15002863..15006787
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.010Z
b$h = L({ "SidebarPaginatedMenu.js"() {
  "use strict";
  E(), U5(), Va(), mf(), j5r(), V5r(), qu(), _$h = { end: tN.paginatedEnd }, OSn = DIS(function({ children: e, className: n, rootStyle: i, maxVisible: r = 5, initialMaxVisible: s, expanded: o, forcedVisibleCount: a, resetKey: l = 0, onShowMore: c, followScrollOnShowMore: u = false, moreLabel: d = "Show more", moreIcon: h, showMoreHighlighted: p, totalCount: g, ...f }, _) {
    const [b, y] = f$h(0), [S, k] = f$h(l);
    l !== S && (k(l), y(0));
    const C = typeof e == "function" ? e : void 0;
    if (C !== void 0 && g === void 0) throw new Error("SidebarPaginatedMenu requires totalCount when children is a render function");
    const T = C === void 0 ? NIS.toArray(e) : [], I = C !== void 0 ? g ?? 0 : T.length, P = Math.min(I, s ?? r), M = dva({ totalCount: I, initialPageSize: P, extraBatches: b, maxVisible: r, forceExpanded: o, forcedVisibleCount: a }), N = I - M === 1 ? I : M, U = N < I, j = I > P, $ = v$h(null), H = v$h(false);
    LIS(() => {
      H.current && (H.current = false, $.current?.lastElementChild?.scrollIntoView({ block: "nearest", inline: "nearest" }));
    });
    const G = c6([$, _]), q = OIS(() => {
      const Q = dva({ totalCount: I, initialPageSize: P, extraBatches: b, maxVisible: r, forceExpanded: o, forcedVisibleCount: a }), te = Math.min(Q + r, I);
      te <= Q || (H.current = u, c?.(te), c === void 0 && y((ee) => {
        const re = dva({ totalCount: I, initialPageSize: P, extraBatches: ee, maxVisible: r, forceExpanded: o, forcedVisibleCount: a }), ie = Math.min(re + r, I);
        if (ie <= re || Math.max(o ? I : 0, a ?? 0) >= ie) return ee;
        const le = Math.min(I, ie) - P, ce = Math.max(1, r), ae = Math.ceil(Math.max(0, le) / ce);
        return Math.max(ee, ae);
      }));
    }, [I, P, b, r, o, a, c, u]), K = { canShowMore: U, effectiveVisible: N, initialPageSize: P, nextVisible: Math.min(N + r, I) }, V = C !== void 0 ? C(K) : T.slice(0, N), Y = ar({ rootClass: "ui-sidebar-menu", stylexStyles: [wBh(), i], className: n }), J = gn(rfa.root);
    return MIS("ul", { ref: G, className: Y.className, style: Y.style, ...f, children: [V, j && U && g$h("li", { className: ri("ui-sidebar-menu-item", J.className), style: J.style, children: g$h(Fhe, { "data-sidebar-paginated-menu-toggle": "", endIcon: p ? "return" : void 0, endIconColor: "quaternary", icon: h, isHighlighted: p, onClick: q, reserveIconSpace: h === void 0, stylexStyles: _$h, tone: "muted", children: d }) })] });
  });
} });
import { jsx as y$h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as UIS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function jIS(t) {
  switch (t) {
    case "needs-attention":
      return [lae.base, lae.visibleSize, lae.needsAttention];
    case "error":
      return [lae.base, lae.visibleSize, lae.error];
    case "done-unseen":
      return [lae.base, lae.visibleSize, lae.doneUnseen];
    case "done-seen":
      return [lae.base, lae.visibleSize, lae.doneSeen];
    case "draft":
      return [lae.base, lae.visibleSize, lae.draft];
  }
}
function FSn(t) {
  const e = UIS(9), { variant: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = ar({ rootClass: "ui-agent-status-dot", stylexStyles: S$h.base }), e[0] = i) : i = e[0];
  const r = i;
  let s;
  e[1] !== n ? (s = ar({ rootClass: "ui-agent-status-dot__indicator", stylexStyles: jIS(n) }), e[1] = n, e[2] = s) : s = e[2];
  const o = s;
  let a;
  e[3] !== o.className || e[4] !== o.style ? (a = y$h("span", { "aria-hidden": true, className: o.className, style: o.style }), e[3] = o.className, e[4] = o.style, e[5] = a) : a = e[5];
  let l;
  return e[6] !== a || e[7] !== n ? (l = y$h("span", { "aria-hidden": true, className: r.className, "data-variant": n, style: r.style, children: a }), e[6] = a, e[7] = n, e[8] = l) : l = e[8], l;
}
var S$h, lae, 