// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuRoot.js range:14556398..14563572
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.809Z
rma = L({ "MenuRoot.js"() {
  E(), M7(), Jy(), V8t(), jv(), vA(), O8t(), F_e(), h6h(), k_e(), Wj(), nci(), VS(), HUt(), v6h(), ima(), FY(), vhe(), Zb(), Mah(), J8t(), vJo(), bJo(), mne(), Qhi = JAr(function(e) {
    const { children: n, open: i, onOpenChange: r, onOpenChangeComplete: s, defaultOpen: o = false, disabled: a = false, modal: l, loopFocus: c = true, orientation: u = "vertical", actionsRef: d, closeParentOnEsc: h = false, handle: p, triggerId: g, defaultTriggerId: f = null, highlightItemOnHover: _ = true } = e, b = mSn(true), y = O_e(true), S = d6h(true), k = b6h(), C = iae.useMemo(() => k && y ? { type: "menu", store: y.store } : S ? { type: "menubar", context: S } : b && !y ? { type: "context-menu", context: b } : { type: void 0 }, [b, y, S, k]), T = nma.useStore(p?.store, { open: o, openProp: i, activeTriggerId: f, triggerIdProp: g, parent: C });
    n2r(T, i, o, f), T.useControlledProp("openProp", i), T.useControlledProp("triggerIdProp", g), T.useContextCallback("onOpenChangeComplete", s);
    const I = FSt(), A = FSt(), P = T.useState("floatingTreeRoot"), M = ORr(P), O = QHe(), N = T.useState("open"), U = T.useState("activeTriggerElement"), j = T.useState("positionerElement"), $ = T.useState("hoverEnabled"), H = T.useState("disabled"), G = T.useState("lastOpenChangeReason"), q = T.useState("parent"), K = T.useState("activeIndex"), V = T.useState("payload"), Y = T.useState("floatingParentNodeId"), J = iae.useRef(null), Q = iae.useRef(q.type !== "context-menu"), te = a6(), ee = iae.useRef(true), re = a6(), ie = Y != null;
    process.env.NODE_ENV !== "production" && q.type !== void 0 && l !== void 0 && console.warn("Base UI: The `modal` prop is not supported on nested menus. It will be ignored.");
    const { openMethod: oe, triggerProps: se } = RJo(N);
    T.useSyncedValues({ disabled: a, highlightItemOnHover: _, modal: q.type === void 0 ? l : void 0, openMethod: oe, rootId: I }), $li(T);
    const { forceUnmount: le } = Hli(N, T, () => {
      T.update({ allowMouseEnter: false, stickIfOpen: true });
    });
    su(() => {
      b && !y ? T.update({ parent: { type: "context-menu", context: b }, floatingNodeId: M, floatingParentNodeId: O }) : y && T.update({ floatingNodeId: M, floatingParentNodeId: O });
    }, [b, y, M, O, T]), iae.useEffect(() => {
      if (N || (J.current = null), q.type === "context-menu") {
        if (!N) {
          te.clear(), Q.current = false;
          return;
        }
        te.start(500, () => {
          Q.current = true;
        });
      }
    }, [te, N, q.type]), su(() => {
      !N && !$ && T.set("hoverEnabled", true);
    }, [N, $, T]);
    const ce = pu((Ne, be) => {
      const je = be.reason;
      if (N === Ne && be.trigger === U && G === je) return;
      const $e = oJo(be);
      if (!Ne && be.trigger == null && (be.trigger = U ?? void 0), r?.(Ne, be), be.isCanceled) return;
      T.state.floatingRootContext.dispatchOpenChange(Ne, be);
      const Je = be.event;
      if (Ne === false && Je?.type === "click" && Je.pointerType === "touch" && !ee.current) return;
      Ne && je === G8t ? (ee.current = false, re.start(300, () => {
        ee.current = true;
      })) : (ee.current = true, re.clear());
      const Ge = (je === PRe || je === qnt) && Je.detail === 0 && Je?.isTrusted, xe = !Ne && (je === q8t || je == null), Oe = { open: Ne, openChangeReason: je };
      J.current = be.event ?? null, t2r(Oe, Ne, be.trigger, $e()), T.update(Oe), q.type === "menubar" && (je === G8t || je === KHe || je === E4 || je === Eli || je === J_n) ? T.set("instantType", "group") : Ge || xe ? T.set("instantType", Ge ? "click" : "dismiss") : T.set("instantType", void 0);
    }), ae = Pah({ popupStore: T, floatingId: A, nested: O != null, onOpenChange: ce }), de = ae.context.events;
    iae.useEffect(() => {
      const Ne = ({ open: be, eventDetails: je }) => ce(be, je);
      return de.on("setOpen", Ne), () => {
        de?.off("setOpen", Ne);
      };
    }, [de, ce]);
    const he = iae.useCallback(() => {
      T.setOpen(false, zd(Uwe));
    }, [T]);
    iae.useImperativeHandle(d, () => ({ unmount: le, close: he }), [le, he]);
    let ge;
    q.type === "context-menu" && (ge = q.context), iae.useImperativeHandle(ge?.positionerRef, () => j, [j]), iae.useImperativeHandle(ge?.actionsRef, () => ({ setOpen: ce }), [ce]);
    const pe = Q8t(ae, { enabled: !H, bubbles: { escapeKey: h && q.type === "menu" }, outsidePress() {
      return q.type !== "context-menu" || J.current?.type === "contextmenu" ? true : Q.current;
    }, externalTree: ie ? P : void 0 }), ve = K3(), fe = iae.useCallback((Ne) => {
      T.select("activeIndex") !== Ne && T.set("activeIndex", Ne);
    }, [T]), Te = fJo(ae, { enabled: !H, listRef: T.context.itemDomElements, activeIndex: K, nested: q.type !== void 0, loopFocus: c, orientation: u, parentOrientation: q.type === "menubar" ? q.context.orientation : void 0, rtl: ve === "rtl", disabledIndices: xoe, onNavigate: fe, openOnArrowKeyDown: q.type !== "context-menu", externalTree: ie ? P : void 0, focusItemOnHover: _ }), _e = iae.useCallback((Ne) => {
      T.context.typingRef.current = Ne;
    }, [T]), Ce = _Jo(ae, { enabled: !H, listRef: T.context.itemLabels, elementsRef: T.context.itemDomElements, activeIndex: K, resetMs: Toh, onMatch: (Ne) => {
      N && Ne !== K && T.set("activeIndex", Ne);
    }, onTyping: _e }), Se = iae.useMemo(() => {
      const Ne = uB(Ce.reference, Te.reference, pe.reference, { onMouseMove() {
        T.set("allowMouseEnter", true);
      } }, se);
      return Ne["aria-haspopup"] = "menu", Ne["aria-expanded"] = N, Ne;
    }, [T, Ce.reference, Te.reference, pe.reference, se, N]), Pe = iae.useMemo(() => {
      const Ne = uB(Te.trigger, pe.trigger, se);
      return Ne["aria-haspopup"] = "menu", Ne["aria-expanded"] = false, Ne;
    }, [Te.trigger, pe.trigger, se]), we = iae.useMemo(() => uB(Znt, { id: A, role: "menu", "aria-labelledby": U?.id, onMouseMove() {
      T.set("allowMouseEnter", true), q.type === "menu" && T.set("hoverEnabled", false);
    }, onClick() {
      T.select("hoverEnabled") && T.set("hoverEnabled", false);
    }, onKeyDown(Ne) {
      const be = T.select("keyboardEventRelay");
      be && !Ne.isPropagationStopped() && be(Ne);
    } }, Ce.floating, Te.floating, pe.floating), [U, A, q.type, T, Ce.floating, Te.floating, pe.floating]), Ie = Te.item ?? pE;
    Wli(T, { floatingRootContext: ae, activeTriggerProps: Se, inactiveTriggerProps: Pe, popupProps: we, itemProps: Ie });
    const Me = iae.useMemo(() => ({ store: T, parent: C }), [T, C]), De = y6h(Xhi.Provider, { value: Me, children: typeof n == "function" ? n({ payload: V }) : n });
    return q.type === void 0 || q.type === "context-menu" ? y6h(VQo, { externalTree: P, children: De }) : De;
  }), process.env.NODE_ENV !== "production" && (Qhi.displayName = "MenuRoot");
} });
import * as rSS from "./react-runtime/react/esm-index-production.js";
import { jsx as S6h } from "./react-runtime/react/esm-jsx-runtime-production.js";
function sSS(t) {
  const e = O_e().store, n = rSS.useMemo(() => ({ parentMenu: e }), [e]);
  return S6h(DOr.Provider, { value: n, children: S6h(Qhi, { ...t }) });
}
