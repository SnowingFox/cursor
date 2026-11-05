// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxTrigger.js range:16745069..16749227
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.560Z
wcp = L({ "ComboboxTrigger.js"() {
  E(), Jy(), M7(), hB(), Om(), Y_e(), ZCa(), yGe(), N7(), VQ(), DJo(), VS(), nit(), S2r(), q8r(), TW(), bJo(), Z8t(), Cz(), Sne(), Zb(), $D(), Kfi = 2, Z8r = tTa.forwardRef(function(e, n) {
    const { render: i, className: r, nativeButton: s = true, disabled: o = false, id: a, style: l, ...c } = e, { state: u, disabled: d, setTouched: h, setFocused: p, validationMode: g, validation: f } = Vj(), { labelId: _ } = zQ(), b = x0e(), { filteredItems: y } = bGe(), S = Ic(b, gm.selectionMode), k = Ic(b, gm.disabled), C = Ic(b, gm.readOnly), T = Ic(b, gm.required), I = Ic(b, gm.mounted), A = Ic(b, gm.popupSide), P = Ic(b, gm.positionerElement), M = Ic(b, gm.listElement), O = Ic(b, gm.popupId), N = Ic(b, gm.triggerProps), U = Ic(b, gm.triggerElement), j = Ic(b, gm.inputInsidePopup), $ = Ic(b, gm.id), H = Ic(b, gm.labelId), G = Ic(b, gm.open), q = Ic(b, gm.selectedValue), K = Ic(b, gm.activeIndex), V = Ic(b, gm.selectedIndex), Y = Ic(b, gm.hasSelectedValue), J = U8r(), Q = ccp(), te = a6(), ee = d || k || o, re = y.length === 0, ie = I && P ? A : null;
    tit({ id: j ? a : void 0 });
    const oe = j ? a ?? $ : a, se = y2r(_, H);
    let le;
    G && j ? le = O ?? ucp($) : G && (le = M?.id);
    const ce = tTa.useRef("");
    function ae(Ce) {
      ce.current = Ce.pointerType;
    }
    const de = J.useState("domReferenceElement");
    tTa.useEffect(() => {
      j && U && U !== de && J.set("domReferenceElement", U);
    }, [U, de, J, j]);
    const { reference: he } = _Jo(J, { enabled: !G && !C && !k && S === "single", listRef: b.state.labelsRef, activeIndex: K, selectedIndex: V, onMatch(Ce) {
      const Se = b.state.valuesRef.current[Ce];
      Se !== void 0 && b.state.setSelectedValue(Se, zd("none"));
    } }), { reference: ge } = X8t(J, { enabled: !C && !k, event: "mousedown" }), { buttonRef: pe, getButtonProps: ve } = wz({ native: s, disabled: ee }), fe = { ...u, open: G, disabled: ee, popupSide: ie, listEmpty: re, placeholder: S === "none" ? false : !Y }, Te = pu((Ce) => {
      b.set("triggerElement", Ce);
    });
    return Lm("button", e, { ref: [n, pe, Te], state: fe, props: [N, ge, he, { id: oe, tabIndex: j ? 0 : -1, role: j ? "combobox" : void 0, "aria-expanded": G ? "true" : "false", "aria-haspopup": j ? "dialog" : "listbox", "aria-controls": le, "aria-required": j && T || void 0, "aria-labelledby": se, onPointerDown: ae, onPointerEnter: ae, onFocus() {
      p(true), !(ee || C) && te.start(0, b.state.forceMount);
    }, onBlur(Ce) {
      if (!Nf(P, Ce.relatedTarget) && (h(true), p(false), g === "onBlur")) {
        const Se = S === "none" ? Q : q;
        f.commit(Se);
      }
    }, onMouseDown(Ce) {
      if (ee || C || (j || J.set("domReferenceElement", Ce.currentTarget), b.state.forceMount(), ce.current !== "touch" && (b.state.inputRef.current?.focus(), j || Ce.preventDefault()), G)) return;
      const Se = ak(Ce.currentTarget);
      function Pe(we) {
        if (!U) return;
        const Ie = B5(we), Me = b.state.positionerElement, De = b.state.listElement;
        if (Nf(U, Ie) || Nf(Me, Ie) || Nf(De, Ie) || Ie === U) return;
        const Ne = MJo(U), be = we.clientX >= Ne.left - Kfi && we.clientX <= Ne.right + Kfi, je = we.clientY >= Ne.top - Kfi && we.clientY <= Ne.bottom + Kfi;
        be && je || b.state.setOpen(false, zd("cancel-open", we));
      }
      j && Se.addEventListener("mouseup", Pe, { once: true });
    }, onKeyDown(Ce) {
      ee || C || (Ce.key === "ArrowDown" || Ce.key === "ArrowUp") && (Ez(Ce), b.state.setOpen(true, zd(Eli, Ce.nativeEvent)), b.state.inputRef.current?.focus());
    } }, f ? f.getValidationProps(ee, c) : c, ve], stateAttributesMapping: z8r });
  }), process.env.NODE_ENV !== "production" && (Z8r.displayName = "ComboboxTrigger");
} });
import * as nTa from "./react-runtime/react/esm-index-production.js";
import { jsx as yZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
function SZS() {
  return nTa.useContext(Q8r);
}
function kZS(t) {
  const { children: e, items: n } = t, i = nTa.useMemo(() => ({ items: n }), [n]);
  return yZS(Q8r.Provider, { value: i, children: e });
}
var Q8r, 