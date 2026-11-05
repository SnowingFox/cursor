// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectPopup.js range:6143736..6151045
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.981Z
n$y = L({ "SelectPopup.js"() {
  E(), Vnt(), b_e(), Jy(), hB(), jv(), Hnt(), tWe(), I4(), jJo(), Flh(), l6(), qQ(), Om(), iit(), HJo(), VS(), YJo(), g7t(), u7t(), sit(), olh(), rea(), Wj(), TW(), aT(), H8t(), Zb(), Dli(), BSt(), Qlh = { ...T_e, ...D7 }, sea = f7t.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, finalFocus: o, ...a } = e, { store: l, popupRef: c, onOpenChangeComplete: u, setOpen: d, valueRef: h, firstItemTextRef: p, selectedItemTextRef: g, multiple: f, handleScrollArrowVisibility: _, scrollHandlerRef: b, listRef: y, highlightItemOnHover: S } = Qnt(), { side: k, align: C, alignItemWithTriggerActive: T, isPositioned: I, setControlledAlignItemWithTrigger: A } = Ilh(), P = VJo(true) != null, M = Yah(), O = K3(), { nonce: N, disableStyleElements: U } = nea(), j = Ic(l, _S.id), $ = Ic(l, _S.open), H = Ic(l, _S.openMethod), G = Ic(l, _S.mounted), q = Ic(l, _S.popupProps), K = Ic(l, _S.transitionStatus), V = Ic(l, _S.triggerElement), Y = Ic(l, _S.positionerElement), J = Ic(l, _S.listElement), Q = f7t.useRef(false), te = f7t.useRef(false), ee = f7t.useRef({}), re = U8t(), ie = pu((ce) => {
      if (!Y || !c.current || !te.current) return;
      if (Q.current || !T) {
        _();
        return;
      }
      const ae = Y.style.top === "0px", de = Y.style.bottom === "0px";
      if (!ae && !de) {
        _();
        return;
      }
      const he = Zlh(Y), ge = hci(Y.getBoundingClientRect().height, "y", he), pe = ak(Y), ve = g2(Y), fe = ve.getComputedStyle(Y), Te = parseFloat(fe.marginTop), _e = parseFloat(fe.marginBottom), Ce = Xlh(ve.getComputedStyle(c.current)), Se = Math.min(pe.documentElement.clientHeight - Te - _e, Ce), Pe = ce.scrollTop, we = x2r(ce);
      let Ie = 0, Me = null, De = false, Ne = false;
      const be = (Ge) => {
        Y.style.height = `${Ge}px`;
      }, je = (Ge, xe) => {
        const Oe = UY(Ge, 0, Se - ge);
        Oe > 0 && be(ge + Oe), ce.scrollTop = xe, Se - (ge + Oe) <= nWe && (Q.current = true), _();
      }, $e = ae ? we - Pe : Pe, Je = Math.min(ge + $e, Se);
      if (Ie = Je, $e <= nWe) {
        je($e, ae ? we : 0);
        return;
      }
      if (Se - Je > nWe) ae ? Ne = true : Me = 0;
      else if (De = true, de && Pe < we) {
        const Ge = ge + $e - Se;
        Me = Pe - ($e - Ge);
      }
      if (Ie = Math.ceil(Ie), Ie !== 0 && be(Ie), Ne || Me != null) {
        const Ge = x2r(ce), xe = Ne ? Ge : UY(Me, 0, Ge);
        Math.abs(ce.scrollTop - xe) > nWe && (ce.scrollTop = xe);
      }
      (De || Ie >= Se - nWe) && (Q.current = true), _();
    });
    f7t.useImperativeHandle(b, () => ie, [ie]), GQ({ open: $, ref: c, onComplete() {
      $ && u?.(true);
    } });
    const oe = { open: $, transitionStatus: K, side: k, align: C };
    su(() => {
      !Y || !c.current || Object.keys(ee.current).length || (ee.current = { top: Y.style.top || "0", left: Y.style.left || "0", right: Y.style.right, height: Y.style.height, bottom: Y.style.bottom, minHeight: Y.style.minHeight, maxHeight: Y.style.maxHeight, marginTop: Y.style.marginTop, marginBottom: Y.style.marginBottom });
    }, [c, Y]), su(() => {
      $ || T || (te.current = false, Q.current = false, C2r(Y, ee.current));
    }, [$, T, Y, c]), su(() => {
      const ce = c.current;
      if (!$ || !V || !Y || !ce || T && !I || l.state.transitionStatus === "ending") return;
      if (!T) {
        te.current = true, re.request(_), ce.style.removeProperty("--transform-origin");
        return;
      }
      const ae = t$y(ce);
      ce.style.removeProperty("--transform-origin");
      try {
        let de = g.current;
        de?.isConnected || (de = !_S.hasSelectedValue(l.state) && p.current?.isConnected ? p.current : null);
        const he = h.current, ge = g2(Y), pe = ge.getComputedStyle(Y), ve = ge.getComputedStyle(ce), fe = ak(V), Te = Zlh(V), _e = A2r(V.getBoundingClientRect(), Te), Ce = A2r(Y.getBoundingClientRect(), Te), Se = _e.height, Pe = J || ce, we = Pe.scrollHeight, Ie = parseFloat(ve.borderBottomWidth), Me = parseFloat(pe.marginTop) || 10, De = parseFloat(pe.marginBottom) || 10, Ne = parseFloat(pe.minHeight) || 100, be = Xlh(ve), je = 5, $e = 5, Je = 20, Ge = fe.documentElement.clientHeight - Me - De, xe = fe.documentElement.clientWidth, Oe = Ge - _e.bottom + Se;
        let ct, Ye = O === "rtl" ? _e.right - Ce.width : _e.left, Ve = 0;
        if (de && he) {
          const qe = A2r(he.getBoundingClientRect(), Te);
          ct = A2r(de.getBoundingClientRect(), Te), Ye = Ce.left + (O === "rtl" ? qe.right - ct.right : qe.left - ct.left);
          const pt = qe.top - _e.top + qe.height / 2;
          Ve = ct.top - Ce.top + ct.height / 2 - pt;
        }
        const Xe = Oe + Ve + De + Ie;
        let lt = Math.min(Ge, Xe);
        const He = Ge - Me - De, gt = Xe - lt, ht = xe - $e;
        Y.style.left = `${UY(Ye, je, ht - Ce.width)}px`, Y.style.height = `${lt}px`, Y.style.maxHeight = "none", Y.style.marginTop = `${Me}px`, Y.style.marginBottom = `${De}px`, ce.style.height = "100%";
        const Ae = x2r(Pe), ot = gt >= Ae - nWe;
        ot && (lt = Math.min(Ge, Ce.height) - (gt - Ae));
        const Be = _e.top < Je || _e.bottom > Ge - Je || Math.ceil(lt) + nWe < Math.min(we, Ne), Ue = (ge.visualViewport?.scale ?? 1) !== 1 && Gnt;
        if (Be || Ue) {
          te.current = true, C2r(Y, ee.current), A(false);
          return;
        }
        const it = Math.max(Ne, lt);
        if (ot) {
          const qe = Math.max(0, Ge - Xe);
          Y.style.top = Ce.height >= He ? "0" : `${qe}px`, Y.style.height = `${lt}px`, Pe.scrollTop = x2r(Pe);
        } else Y.style.bottom = "0", Pe.scrollTop = gt;
        if (ct) {
          const qe = Ce.top, pt = Ce.height, dt = ct.top + ct.height / 2, ft = pt > 0 ? (dt - qe) / pt * 100 : 50, bt = UY(ft, 0, 100);
          ce.style.setProperty("--transform-origin", `50% ${bt}%`);
        }
        (it === Ge || lt >= be) && (Q.current = true), _(), S && l.state.selectedIndex === null && l.state.activeIndex === null && y.current[0] != null && l.set("activeIndex", 0), te.current = true;
      } finally {
        ae();
      }
    }, [l, $, Y, V, h, p, g, c, _, T, A, re, J, y, S, O, I]), f7t.useEffect(() => {
      if (!T || !Y || !$) return;
      const ce = g2(Y);
      function ae(de) {
        d(false, zd(toh, de));
      }
      return r0(ce, "resize", ae);
    }, [d, T, Y, $]);
    const se = { ...J ? { role: "presentation", "aria-orientation": void 0 } : { role: "listbox", "aria-multiselectable": f || void 0, id: `${j}-list` }, onKeyDown(ce) {
      P && $St.has(ce.key) && ce.stopPropagation();
    }, onScroll(ce) {
      J || ie(ce.currentTarget);
    }, ...T && { style: J ? { height: "100%" } : $Jo } }, le = Lm("div", e, { ref: [n, c], state: oe, stateAttributesMapping: Qlh, props: [q, se, c7t(K), { className: !J && T ? dci.className : void 0 }, a] });
    return Jjy(f7t.Fragment, { children: [!U && dci.getElement(N), e$y(Mli, { context: M, modal: false, disabled: !G, openInteractionType: H, returnFocus: o, restoreFocus: true, children: le })] });
  }), process.env.NODE_ENV !== "production" && (sea.displayName = "SelectPopup"), oea = [["transform", "none"], ["scale", "1"], ["translate", "0 0"]];
} });
import * as i$y from "./react-runtime/react/esm-index-production.js";
var aea, 