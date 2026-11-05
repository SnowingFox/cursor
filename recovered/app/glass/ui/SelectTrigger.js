// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectTrigger.js range:6109581..6112650
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.986Z
Ejy = L({ "SelectTrigger.js"() {
  E(), hB(), M7(), Jy(), Fwe(), tWe(), N7(), VQ(), I4(), BY(), Om(), iit(), DJo(), VS(), nit(), S2r(), TW(), Cz(), mne(), $D(), Zb(), zHe(), rci = 2, hlh = 400, plh = { ...a7t, ...wne, popupSide: (t) => t ? { "data-popup-side": t } : null, value: () => null }, LJo = NJo.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, disabled: o = false, nativeButton: a = true, style: l, ...c } = e, { setTouched: u, setFocused: d, validationMode: h, state: p, disabled: g } = Vj(), { labelId: f } = zQ(), { store: _, setOpen: b, selectionRef: y, validation: S, readOnly: k, required: C, alignItemWithTriggerActiveRef: T, disabled: I } = Qnt(), A = g || I || o, P = Ic(_, _S.open), M = Ic(_, _S.mounted), O = Ic(_, _S.value), N = Ic(_, _S.triggerProps), U = Ic(_, _S.positionerElement), j = Ic(_, _S.listElement), $ = Ic(_, _S.popupSide), H = Ic(_, _S.id), G = Ic(_, _S.labelId), q = Ic(_, _S.hasSelectedValue), K = M && U ? $ : null, V = s ?? H, Y = y2r(f, G);
    tit({ id: V });
    const J = uL(U), Q = NJo.useRef(null), { getButtonProps: te, buttonRef: ee } = wz({ disabled: A, native: a }), re = pu((de) => {
      _.set("triggerElement", de);
    }), ie = a6(), oe = a6(), se = a6();
    NJo.useEffect(() => {
      if (P) return se.start(hlh, () => {
        y.current.allowUnselectedMouseUp = true, y.current.allowSelectedMouseUp = true;
      }), () => {
        se.clear();
      };
      y.current = { allowSelectedMouseUp: false, allowUnselectedMouseUp: false, dragY: 0 }, oe.clear();
    }, [P, y, oe, se]);
    const le = uB(N, { id: V, role: "combobox", "aria-expanded": P ? "true" : "false", "aria-haspopup": "listbox", "aria-controls": P ? j?.id ?? pRr(U)?.id : void 0, "aria-labelledby": Y, "aria-readonly": k || void 0, "aria-required": C || void 0, tabIndex: A ? -1 : 0, onFocus(de) {
      d(true), P && T.current && b(false, zd(kO, de.nativeEvent)), ie.start(0, () => {
        _.set("forceMount", true);
      });
    }, onBlur(de) {
      Nf(U, de.relatedTarget) || (u(true), d(false), h === "onBlur" && S.commit(O));
    }, onMouseDown(de) {
      if (P) return;
      const he = ak(de.currentTarget);
      function ge(pe) {
        if (!Q.current) return;
        const ve = pe.target;
        if (Nf(Q.current, ve) || Nf(J.current, ve)) return;
        const fe = MJo(Q.current);
        pe.clientX >= fe.left - rci && pe.clientX <= fe.right + rci && pe.clientY >= fe.top - rci && pe.clientY <= fe.bottom + rci || b(false, zd(gRr, pe));
      }
      oe.start(0, () => {
        he.addEventListener("mouseup", ge, { once: true });
      });
    } }, c, te), ce = S.getValidationProps(A, le);
    ce.role = "combobox";
    const ae = { ...p, open: P, disabled: A, value: O, readOnly: k, popupSide: K, placeholder: !q };
    return Lm("button", e, { ref: [n, Q, ee, re], state: ae, stateAttributesMapping: plh, props: ce });
  }), process.env.NODE_ENV !== "production" && (LJo.displayName = "SelectTrigger");
} });
import * as Ijy from "./react-runtime/react/esm-index-production.js";
var mlh, OJo, 