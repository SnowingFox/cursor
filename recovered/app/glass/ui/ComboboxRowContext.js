// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxRowContext.js range:16761029..16764060
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.559Z
BZS = L({ "ComboboxRowContext.js"() {
  E(), cTa = Ycp.createContext(false), process.env.NODE_ENV !== "production" && (cTa.displayName = "ComboboxRowContext");
} });
import * as Vkn from "./react-runtime/react/esm-index-production.js";
import * as UZS from "./react-runtime/react-dom/esm-index-production.js";
import { jsx as s7r } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Xcp(t) {
  const { componentProps: e, forwardedRef: n, virtualized: i, indexFromFilter: r } = t, { render: s, className: o, style: a, value: l = null, index: c, disabled: u = false, nativeButton: d = false, ...h } = e, p = Vkn.useRef(false), g = Vkn.useRef(null), f = iWe({ index: c, textRef: g, indexGuessBehavior: P2r.GuessFromOrder }), _ = x0e(), b = FZS(), y = iZS(), S = Ic(_, gm.open), k = Ic(_, gm.selectionMode), C = Ic(_, gm.readOnly), T = Ic(_, gm.isItemEqualToValue), I = k !== "none", A = c ?? (i ? r ?? -1 : f.index), P = f.index !== -1, M = Ic(_, gm.id), O = Ic(_, gm.isActive, A), N = Ic(_, gm.isSelected, l), U = Ic(_, gm.itemProps), j = Vkn.useRef(null), $ = M != null && P ? `${M}-${A}` : void 0, H = N && I;
  su(() => {
    if (!(P && (i || c != null))) return;
    const ee = _.state.listRef.current;
    return ee[A] = j.current, () => {
      delete ee[A];
    };
  }, [P, i, A, c, _]), su(() => {
    if (!P || y) return;
    const te = _.state.valuesRef.current;
    return te[A] = l, k !== "none" && _.state.allValuesRef.current.push(l), () => {
      delete te[A];
    };
  }, [P, y, A, l, _, k]), su(() => {
    if (!S) {
      p.current = false;
      return;
    }
    if (!P || y) return;
    const te = _.state.selectedValue, ee = Array.isArray(te) ? te[te.length - 1] : te;
    FRe(l, ee, T) && _.set("selectedIndex", A);
  }, [P, y, S, _, A, l, T]);
  const { getButtonProps: G, buttonRef: q } = wz({ disabled: u, focusableWhenDisabled: true, native: d, composite: true }), K = { disabled: u, selected: H, highlighted: O };
  function V(te) {
    function ee() {
      _.state.handleSelection(te, l);
    }
    _.state.submitOnItemClick ? (UZS.flushSync(ee), _.state.requestSubmit()) : ee();
  }
  const Y = { id: $, role: b ? "gridcell" : "option", "aria-selected": I ? H : void 0, tabIndex: void 0, onPointerDownCapture(te) {
    p.current = true, te.preventDefault();
  }, onMouseDown(te) {
    te.preventDefault();
  }, onClick(te) {
    u || C || V(te.nativeEvent);
  }, onMouseUp(te) {
    const ee = p.current;
    p.current = false, !(u || C || te.button !== 0 || ee || !O) && V(te.nativeEvent);
  } }, J = Lm("div", e, { ref: [q, n, f.ref, j], state: K, props: [U, Y, h, G] }), Q = Vkn.useMemo(() => ({ selected: H, textRef: g }), [H, g]);
  return s7r(r7r.Provider, { value: Q, children: J });
}
function jZS(t) {
  const { componentProps: e, forwardedRef: n } = t, i = x0e(), r = Ic(i, gm.isItemEqualToValue), { flatFilteredItems: s } = bGe(), o = jSt(s, e.value ?? null, r);
  return s7r(Xcp, { componentProps: e, forwardedRef: n, virtualized: true, indexFromFilter: o });
}
var o7r, 