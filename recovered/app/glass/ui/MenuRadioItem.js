// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuRadioItem.js range:14550564..14552093
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.807Z
nSS = L({ "MenuRadioItem.js"() {
  E(), F_e(), Om(), _A(), a6h(), eSS(), YFh(), rWe(), EOr(), WUt(), VS(), Zb(), ema = c6h.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = false, disabled: l = false, closeOnClick: c = false, value: u, style: d, ...h } = e, p = iWe({ label: o }), g = gSn(true), f = $I(s), { store: _ } = O_e(), b = _.useState("isActive", p.index), y = _.useState("itemProps"), { value: S, setValue: k, disabled: C } = ZyS(), T = C || l, I = S === u, { getItemProps: A, itemRef: P } = COr({ closeOnClick: c, disabled: T, highlighted: b, id: f, store: _, nativeButton: a, nodeId: g?.context.nodeId, itemMetadata: TOr }), M = c6h.useMemo(() => ({ disabled: T, highlighted: b, checked: I }), [T, b, I]);
    function O(U) {
      const j = zd(qnt, U.nativeEvent, void 0, { preventUnmountOnClose() {
      } });
      k(u, j);
    }
    const N = Lm("div", e, { state: M, stateAttributesMapping: Hpa, props: [y, { role: "menuitemradio", "aria-checked": I, onClick: O }, h, A], ref: [P, n, p.ref] });
    return tSS(Jpa.Provider, { value: M, children: N });
  }), process.env.NODE_ENV !== "production" && (ema.displayName = "MenuRadioItem");
} });
import * as u6h from "./react-runtime/react/esm-index-production.js";
function d6h(t) {
  const e = u6h.useContext(tma);
  if (e === null && !t) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: MenubarContext is missing. Menubar parts must be placed within <Menubar>." : Oy(5));
  return e;
}
var tma, 