// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NumberFieldInput.js range:18011196..18019868
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.834Z
ES1 = L({ "NumberFieldInput.js"() {
  E(), Qvn(), Vvn(), jv(), u$r(), N7(), eit(), C_e(), VQ(), f$r(), d$r(), Om(), VS(), ySn(), rit(), DCp(), Zb(), Sne(), YCp = /* @__PURE__ */ new Set(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Escape"]), nPa = v$r.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { allowInputSyncRef: a, disabled: l, formatOptionsRef: c, getAllowedNonNumericKeys: u, getStepAmount: d, id: h, incrementValue: p, inputMode: g, inputValue: f, max: _, min: b, name: y, nameProp: S, readOnly: k, required: C, setValue: T, state: I, setInputValue: A, locale: P, inputRef: M, value: O, onValueCommitted: N, lastChangedValueRef: U, hasPendingCommitRef: j, valueRef: $ } = P2a(), { clearErrors: H } = w_e(), { validationMode: G, setTouched: q, setFocused: K, invalid: V, shouldValidateOnChange: Y, validation: J } = Vj(), { labelId: Q } = zQ(), te = v$r.useRef(false), ee = v$r.useRef(false), re = v$r.useRef(null);
    return Jnt(M, h, O, void 0, !l, S), su(() => {
      if (re.current != null) {
        const se = re.current;
        re.current = null, M.current?.setSelectionRange(se, se);
      }
    }), URe(O, () => {
      if (H(y), ee.current && !Y()) {
        ee.current = false;
        return;
      }
      J.change(O);
    }), Lm("input", e, { ref: [n, M], state: I, props: [{ id: h, required: C, disabled: l, readOnly: k, inputMode: g, value: f, type: "text", autoComplete: "off", autoCorrect: "off", spellCheck: "false", "aria-roledescription": "Number field", "aria-invalid": !l && V ? true : void 0, "aria-labelledby": Q, suppressHydrationWarning: true, onFocus(se) {
      if (se.defaultPrevented || l || (K(true), te.current)) return;
      te.current = true;
      const le = se.currentTarget, ce = le.value.length;
      le.setSelectionRange(ce, ce);
    }, onBlur(se) {
      if (se.defaultPrevented || l || (q(true), K(false), k)) return;
      const le = !a.current, ce = j.current;
      if (a.current = true, f.trim() === "") {
        const Ce = zd(y_e, se.nativeEvent);
        if (T(null, Ce), Ce.isCanceled) return;
        G === "onBlur" && J.commit(null), (le || ce || O !== null) && N(null, jwe(y_e, se.nativeEvent));
        return;
      }
      const ae = c.current, de = c0n(f, P, ae);
      if (de === null) return;
      const he = X2a(ae);
      let ge;
      !le && !he ? ge = O : he ? ge = RCp(de, ae) : ge = de;
      const pe = jwe(mRr, se.nativeEvent), ve = O !== ge, fe = le || ve || ce;
      let Te = ge;
      if (ve) {
        const Ce = zd(mRr, se.nativeEvent);
        if (ee.current = true, T(ge, Ce), Ce.isCanceled) {
          ee.current = false;
          return;
        }
        Te = U.current ?? ge, Te === O && (ee.current = false);
      }
      G === "onBlur" && J.commit(Te), fe && N(Te, pe);
      const _e = HWe(Te, P, ae);
      f !== _e && A(_e);
    }, onChange(se) {
      if (se.nativeEvent.defaultPrevented) return;
      a.current = false;
      const le = se.currentTarget.value;
      if (le.trim() === "") {
        A(le), T(null, zd(y_e, se.nativeEvent));
        return;
      }
      const ce = u();
      if (!Array.from(le).every((he) => mCp(he) || g$r.test(he) || ce.has(he))) return;
      const de = c0n(le, P, c.current);
      A(le), de !== null && T(de, zd(VHe, se.nativeEvent));
    }, onKeyDown(se) {
      if (se.defaultPrevented || k || l) return;
      const le = se.nativeEvent, ce = !a.current, ae = u();
      let de = ae.has(se.key);
      const { decimal: he, currency: ge, percentSign: pe } = M2a(P, c.current), ve = se.currentTarget.selectionStart, fe = se.currentTarget.selectionEnd, Te = ve === 0 && fe === f.length, _e = (je) => ve != null && fe != null && je >= ve && je < fe;
      [[g$r, V2a], [Y2a, K2a]].forEach(([je, $e]) => {
        if (je.test(se.key) && Array.from(ae).some((Je) => je.test(Je))) {
          const Je = f.search($e), Ge = Je !== -1 && _e(Je);
          de = !(g$r.test(f) || Y2a.test(f)) || Te || Ge;
        }
      }), [he, ge, pe].forEach((je) => {
        if (se.key === je) {
          const $e = f.indexOf(je), Je = _e($e);
          de = !f.includes(je) || Te || Je;
        }
      });
      const Se = YCp.has(se.key), Pe = se.key === "ArrowUp" || se.key === "ArrowDown";
      if (se.which === 229 || se.altKey && !Pe || se.ctrlKey || se.metaKey || de || mCp(se.key) || Se) return;
      const we = se.key === "Home" && b != null, Ie = se.key === "End" && _ != null;
      if (se.key.length > 1 && !Pe && !we && !Ie) return;
      const Me = ce ? c0n(f, P, c.current) : null, De = d(se);
      Ez(se);
      const Ne = jwe(Q_n, le);
      let be = false;
      se.key === "ArrowUp" || se.key === "ArrowDown" ? (a.current = true, ce || (U.current = $.current), be = p(De, { direction: se.key === "ArrowUp" ? 1 : -1, currentValue: Me, event: le, reason: Q_n })) : we ? (a.current = true, be = T(b, zd(Q_n, le))) : Ie && (a.current = true, be = T(_, zd(Q_n, le))), be && N(U.current ?? $.current, Ne);
    }, onPaste(se) {
      if (se.defaultPrevented || k || l) return;
      let le = "";
      try {
        le = se.clipboardData?.getData("text/plain") ?? "";
      } catch {
        if (process.env.NODE_ENV !== "production") {
          const pe = BHe.captureOwnerStack?.() || "";
          zvn("<NumberField.Input> could not read clipboard text during paste handling.", pe);
        }
        return;
      }
      se.preventDefault();
      const ce = se.currentTarget, ae = ce.selectionStart ?? f.length, de = ce.selectionEnd ?? f.length, he = f.slice(0, ae) + le + f.slice(de), ge = c0n(he, P, c.current);
      ge !== null && (a.current = false, re.current = ae + le.length, T(ge, zd(vQo, se.nativeEvent)), A(he));
    } }, o, (se) => J.getValidationProps(l, se)], stateAttributesMapping: N_i });
  }), process.env.NODE_ENV !== "production" && (nPa.displayName = "NumberFieldInput");
} });
import { jsx as Mwt, jsxs as XCp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as IS1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function _$r(t) {
  const e = IS1(33);
  let n, i, r, s, o, a;
  e[0] !== t ? ({ onResetValue: s, disabled: r, readOnly: o, "aria-label": n, "aria-labelledby": i, ...a } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6]);
  const c = _4h()?.disabled === true ? true : r;
  let u;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { className: "ui-1m75nr5 ui-14wmo93" }, e[7] = u) : u = e[7];
  const d = u;
  let h;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = { className: "ui-2b8uid ui-ss6m8b" }, e[8] = h) : h = e[8];
  const p = h;
  let g;
  e[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-11twubx ui--default-marker" }, e[9] = g) : g = e[9];
  let f;
  e[10] !== c || e[11] !== s || e[12] !== o ? (f = s ? Mwt(ho, { size: "sm", "aria-label": "Reset to default", tone: "tertiary", disabled: c || o, icon: "arrow-ccw", onClick: s, variant: "ghost" }) : null, e[10] = c, e[11] = s, e[12] = o, e[13] = f) : f = e[13];
  let _;
  e[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = Mwt(tPa, { render: Mwt(ho, { "aria-label": "Decrease", icon: "minus", size: "md", iconSize: "base", variant: "text" }) }), e[14] = _) : _ = e[14];
  let b;
  e[15] !== n ? (b = n == null ? {} : { "aria-label": n }, e[15] = n, e[16] = b) : b = e[16];
  let y;
  e[17] !== i ? (y = i == null ? {} : { "aria-labelledby": i }, e[17] = i, e[18] = y) : y = e[18];
  let S;
  e[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (S = Mwt(b4h, {}), e[19] = S) : S = e[19];
  let k;
  e[20] !== b || e[21] !== y ? (k = Mwt(nPa, { ...b, ...y, className: p.className, render: S, style: p.style }), e[20] = b, e[21] = y, e[22] = k) : k = e[22];
  let C;
  e[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = Mwt(ePa, { render: Mwt(ho, { "aria-label": "Increase", icon: "plus", size: "md", iconSize: "base", variant: "text" }) }), e[23] = C) : C = e[23];
  let T;
  e[24] !== c || e[25] !== k ? (T = Mwt(Q2a, { children: XCp(_d.Root, { className: d.className, disabled: c, size: "md", children: [_, k, C] }) }), e[24] = c, e[25] = k, e[26] = T) : T = e[26];
  let I;
  return e[27] !== c || e[28] !== o || e[29] !== a || e[30] !== T || e[31] !== f ? (I = XCp(Z2a, { ...a, disabled: c, readOnly: o, "data-component": "number-field", ...g, children: [f, T] }), e[27] = c, e[28] = o, e[29] = a, e[30] = T, e[31] = f, e[32] = I) : I = e[32], I;
}
