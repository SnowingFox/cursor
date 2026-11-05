// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxInput.js range:16735623..16743819
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.545Z
kcp = L({ "ComboboxInput.js"() {
  E(), Jy(), _A(), Om(), Y_e(), ZCa(), yGe(), N7(), BY(), VQ(), hZS(), K8r(), VS(), Wj(), S2r(), ycp(), TW(), Zb(), Sne(), H8t(), Wnt(), X8r = qkn.forwardRef(function(e, n) {
    const { render: i, className: r, disabled: s = false, id: o, style: a, ...l } = e, { state: c, disabled: u, setTouched: d, setFocused: h, validationMode: p, validation: g } = Vj(), { labelId: f } = zQ(), _ = dZS(), y = !!JCa(true), S = x0e(), { filteredItems: k } = bGe(), C = ccp(), T = K3(), I = Ic(S, gm.required), A = Ic(S, gm.disabled), P = Ic(S, gm.readOnly), M = Ic(S, gm.name), O = Ic(S, gm.form), N = Ic(S, gm.selectionMode), U = Ic(S, gm.autoHighlight), j = Ic(S, gm.inputProps), $ = Ic(S, gm.triggerProps), H = Ic(S, gm.open), G = Ic(S, gm.mounted), q = Ic(S, gm.selectedValue), K = Ic(S, gm.popupSide), V = Ic(S, gm.positionerElement), Y = Ic(S, gm.id), J = Ic(S, gm.inline), Q = Ic(S, gm.modal), te = !!U, ee = G && V ? K : null, re = u || A || s, ie = k.length === 0, oe = y || J, se = !oe || Q, le = $I(o ?? (oe ? void 0 : Y)), ce = y2r(f, void 0), ae = y ? r7t : c, [de, he] = qkn.useState(null), ge = qkn.useRef(false), pe = qkn.useRef(null), ve = qkn.useRef(false), fe = N === "none" && !y, Te = pu((Ie) => {
      const Me = y || S.state.inline;
      Me && !S.state.hasInputValue && S.state.setInputValue("", zd(kO)), S.update({ inputElement: Ie, inputInsidePopup: Me, inputOwnsFormValue: fe });
    }), _e = y || !g ? l : g.getValidationProps(re, l), Ce = { ...ae, open: H, disabled: re, readOnly: P, popupSide: ee, listEmpty: ie };
    function Se(Ie) {
      if (!_) return;
      let Me;
      const { highlightedChipIndex: De } = _, Ne = _.chipsRef.current.length, be = T === "rtl", je = be ? "ArrowRight" : "ArrowLeft", $e = be ? "ArrowLeft" : "ArrowRight";
      if (De !== void 0) {
        if (Ie.key === je) Ie.preventDefault(), De > 0 ? Me = De - 1 : Me = void 0;
        else if (Ie.key === $e) Ie.preventDefault(), De < Ne - 1 ? Me = De + 1 : Me = void 0;
        else if (Ie.key === "Backspace" || Ie.key === "Delete") {
          Ie.preventDefault();
          const Je = De >= q.length - 1 ? q.length - 2 : De;
          Me = Je >= 0 ? Je : void 0, S.state.setIndices({ activeIndex: null, selectedIndex: null, type: "keyboard" });
        }
        return Me;
      }
      return Ie.key === je && (Ie.currentTarget.selectionStart ?? 0) === 0 && q.length > 0 ? (Ie.preventDefault(), Me = Ne > 0 ? Ne - 1 : void 0) : Ie.key === "Backspace" && Ie.currentTarget.value === "" && q.length > 0 && (S.state.setIndices({ activeIndex: null, selectedIndex: null, type: "keyboard" }), Ie.preventDefault()), Me;
    }
    const Pe = Lm("input", e, { state: Ce, ref: [n, S.state.inputRef, Te], props: [j, $, { type: "text", value: e.value ?? de ?? C, "aria-readonly": P || void 0, "aria-required": I || void 0, "aria-labelledby": ce, disabled: re, readOnly: P, required: N === "none" ? I : void 0, form: O, ...fe && M && { name: M }, id: le, onFocus() {
      if (h(true), !J || !ve.current) return;
      ve.current = false;
      const Ie = pe.current;
      Ie == null || !Object.hasOwn(S.state.valuesRef.current, Ie) || S.state.setIndices({ activeIndex: Ie });
    }, onBlur() {
      d(true), h(false);
      const Ie = S.state.activeIndex;
      if (J && Ie !== null && U !== "always" && (pe.current = Ie, ve.current = true, S.state.setIndices({ activeIndex: null })), p === "onBlur") {
        const Me = N === "none" ? C : q;
        g.commit(Me);
      }
    }, onCompositionStart(Ie) {
      Y_n || (ge.current = true, he(Ie.currentTarget.value));
    }, onCompositionEnd(Ie) {
      ge.current = false;
      const Me = Ie.currentTarget.value;
      he(null), S.state.setInputValue(Me, zd(VHe, Ie.nativeEvent));
    }, onChange(Ie) {
      const Me = Ie.nativeEvent.inputType, De = !Me || Me === "insertReplacementText", Ne = ge.current || !De;
      if (ge.current) {
        const Ge = Ie.currentTarget.value;
        he(Ge), Ge === "" && !S.state.openOnInputClick && !S.state.inputInsidePopup && S.state.setOpen(false, zd(y_e, Ie.nativeEvent));
        const xe = Ge.trim(), Oe = te && xe !== "";
        !P && !re && xe && Ne && (S.state.setOpen(true, zd(VHe, Ie.nativeEvent)), te || S.state.setIndices({ activeIndex: null, selectedIndex: null, type: S.state.keyboardActiveRef.current ? "keyboard" : "pointer" })), H && S.state.activeIndex !== null && !Oe && S.state.setIndices({ activeIndex: null, selectedIndex: null, type: S.state.keyboardActiveRef.current ? "keyboard" : "pointer" });
        return;
      }
      const be = zd(VHe, Ie.nativeEvent);
      if (S.state.setInputValue(Ie.currentTarget.value, be), be.isCanceled) return;
      const je = Ie.currentTarget.value === "", $e = zd(y_e, Ie.nativeEvent);
      je && !S.state.inputInsidePopup && (N === "single" && S.state.setSelectedValue(null, $e), S.state.openOnInputClick || S.state.setOpen(false, $e));
      const Je = Ie.currentTarget.value.trim();
      !P && !re && Je && Ne && (S.state.setOpen(true, zd(VHe, Ie.nativeEvent)), te || S.state.setIndices({ activeIndex: null, selectedIndex: null, type: S.state.keyboardActiveRef.current ? "keyboard" : "pointer" })), H && S.state.activeIndex !== null && !te && S.state.setIndices({ activeIndex: null, selectedIndex: null, type: S.state.keyboardActiveRef.current ? "keyboard" : "pointer" });
    }, onKeyDown(Ie) {
      if (re || P || Ie.ctrlKey || Ie.shiftKey || Ie.altKey || Ie.metaKey) return;
      S.state.keyboardActiveRef.current = true;
      const Me = Ie.currentTarget, De = Me.scrollWidth - Me.clientWidth, Ne = T === "rtl";
      if (Ie.key === "Home") {
        Ez(Ie);
        const $e = cQo && Ne ? Me.value.length : 0;
        Me.setSelectionRange($e, $e), Me.scrollLeft = 0;
        return;
      }
      if (Ie.key === "End") {
        Ez(Ie);
        const $e = cQo && Ne ? 0 : Me.value.length;
        Me.setSelectionRange($e, $e), Me.scrollLeft = Ne ? -De : De;
        return;
      }
      if (!G && Ie.key === "Escape") {
        const $e = N === "multiple" && Array.isArray(q) ? q.length === 0 : q === null, Je = zd(q8t, Ie.nativeEvent), Ge = N === "multiple" ? [] : null;
        S.state.setInputValue("", Je), S.state.setSelectedValue(Ge, Je), !$e && !S.state.inline && !Je.isPropagationAllowed && Ie.stopPropagation();
        return;
      }
      if (_ && Ie.key === "Backspace" && Me.value === "" && _.highlightedChipIndex === void 0 && Array.isArray(q) && q.length > 0) {
        const $e = _.chipsRef.current.length, Je = $e > 0 ? $e - 1 : q.length - 1, Ge = q.filter((xe, Oe) => Oe !== Je);
        S.state.setIndices({ activeIndex: null, selectedIndex: null, type: S.state.keyboardActiveRef.current ? "keyboard" : "pointer" }), S.state.setSelectedValue(Ge, zd(kO, Ie.nativeEvent));
        return;
      }
      const be = _?.highlightedChipIndex !== void 0, je = Se(Ie);
      if (_?.setHighlightedChipIndex(je), je !== void 0 ? _?.chipsRef.current[je]?.focus() : be && S.state.inputRef.current?.focus(), Ie.which !== 229 && Ie.key === "Enter" && H) {
        const $e = S.state.activeIndex, Je = Ie.nativeEvent;
        if ($e === null) {
          if (J) return;
          S.state.setOpen(false, zd(kO, Je));
          return;
        }
        Ez(Ie);
        const Ge = S.state.listRef.current[$e];
        Ge && (S.state.selectionEventRef.current = Je, Ge.click(), S.state.selectionEventRef.current = null);
      }
    }, onPointerMove() {
      S.state.keyboardActiveRef.current = false;
    }, onPointerDown() {
      S.state.keyboardActiveRef.current = false;
    } }, _e], stateAttributesMapping: z8r }), we = y ? Scp(eci.Provider, { value: kJo, children: Pe }) : Pe;
    return gZS(qkn.Fragment, { children: [H && se && Scp(Y8r, { ref: S.state.startDismissRef }), we] });
  }), process.env.NODE_ENV !== "production" && (X8r.displayName = "ComboboxInput");
} });
function fZS(t, e, n, i, r) {
  if (t.baseUIHandlerPrevented || i) return;
  const s = B5(t.nativeEvent), o = Lb(s) ? s : null;
  o !== t.currentTarget && (r?.(o) || Vsh(o)) || (t.preventDefault(), !n && (e.state.inputRef.current?.focus(), e.state.openOnInputClick && e.state.setOpen(true, zd(_Qo, t.nativeEvent))));
}
