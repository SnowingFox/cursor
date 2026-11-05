// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuCheckboxItem.js range:14535300..14536961
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.790Z
FyS = L({ "MenuCheckboxItem.js"() {
  E(), __e(), DyS(), EOr(), rWe(), F_e(), Om(), _A(), YFh(), WUt(), VS(), Zb(), Wpa = XFh.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, label: o, nativeButton: a = false, disabled: l = false, closeOnClick: c = false, checked: u, defaultChecked: d, onCheckedChange: h, style: p, ...g } = e, f = iWe({ label: o }), _ = gSn(true), b = $I(s), { store: y } = O_e(), S = y.useState("isActive", f.index), k = y.useState("itemProps"), [C, T] = yne({ controlled: u, default: d ?? false, name: "MenuCheckboxItem", state: "checked" }), { getItemProps: I, itemRef: A } = COr({ closeOnClick: c, disabled: l, highlighted: S, id: b, store: y, nativeButton: a, nodeId: _?.context.nodeId, itemMetadata: TOr }), P = XFh.useMemo(() => ({ disabled: l, highlighted: S, checked: C }), [l, S, C]);
    function M(N) {
      const U = zd(qnt, N.nativeEvent, void 0, { preventUnmountOnClose() {
      } });
      h?.(!C, U), !U.isCanceled && T((j) => !j);
    }
    const O = Lm("div", e, { state: P, stateAttributesMapping: Hpa, props: [k, { role: "menuitemcheckbox", "aria-checked": C, onClick: M }, g, I], ref: [A, n, f.ref] });
    return OyS(Upa.Provider, { value: P, children: O });
  }), process.env.NODE_ENV !== "production" && (Wpa.displayName = "MenuCheckboxItem");
} });
import * as ZFh from "./react-runtime/react/esm-index-production.js";
function ByS() {
  const t = ZFh.useContext(Zhi);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: MenuGroupContext is missing. Menu group parts must be used within <Menu.Group> or <Menu.RadioGroup>." : Oy(31));
  return t;
}
var Zhi, 