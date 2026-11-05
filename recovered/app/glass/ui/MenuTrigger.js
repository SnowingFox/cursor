// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuTrigger.js range:14566062..14570299
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.818Z
pSS = L({ "MenuTrigger.js"() {
  E(), zS(), M7(), hB(), O8t(), Jy(), jv(), vA(), qQo(), F_e(), I4(), Om(), Cz(), DJo(), caa(), qIr(), k6h(), T6h(), _A(), cSS(), HUt(), h6h(), k_e(), vRr(), vhe(), FY(), $D(), Zb(), Yli(), Qli(), Z8t(), dJo(), mne(), epi = 2, oma = iQo(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = false, nativeButton: a = true, id: l, openOnHover: c, delay: u = 100, closeDelay: d = 0, handle: h, payload: p, ...g } = e, f = O_e(true), _ = h?.store ?? f?.store;
    if (!_) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.Trigger> must be either used within a <Menu.Root> component or provided with a handle." : Oy(85));
    const b = $I(l), y = _.useState("isTriggerActive", b), S = _.useState("floatingRootContext"), k = _.useState("isOpenedByTrigger", b), C = _.useState("triggerPopupId", b), T = OFe.useRef(null), I = hSS(), A = uKo(true), P = Knt(), M = OFe.useMemo(() => P ?? new LRr(), [P]), O = ORr(M), N = QHe(), { registerTrigger: U, isMountedByThisTrigger: j } = jli(b, T, _, { payload: p, closeDelay: d, parent: I, floatingTreeRoot: M, floatingNodeId: O, floatingParentNodeId: N, keyboardEventRelay: A?.relayKeyboardEvent }), $ = I.type === "menubar", H = _.useState("disabled"), G = o || H || $ && I.context.disabled, { getButtonProps: q, buttonRef: K } = wz({ disabled: G, native: a });
    OFe.useEffect(() => {
      !k && I.type === void 0 && (_.context.allowMouseUpTriggerRef.current = false);
    }, [_, k, I.type]);
    const V = OFe.useRef(null), Y = a6(), J = pu((Te) => {
      if (!V.current) return;
      Y.clear(), _.context.allowMouseUpTriggerRef.current = false;
      const _e = Te.target;
      if (Nf(V.current, _e) || Nf(_.select("positionerElement"), _e) || _e === V.current || _e != null && sma(_e) === _.select("rootId")) return;
      const Ce = MJo(V.current);
      Te.clientX >= Ce.left - epi && Te.clientX <= Ce.right + epi && Te.clientY >= Ce.top - epi && Te.clientY <= Ce.bottom + epi || M.events.emit("close", { domEvent: Te, reason: gRr });
    });
    OFe.useEffect(() => {
      k && _.select("lastOpenChangeReason") === E4 && ak(V.current).addEventListener("mouseup", J, { once: true });
    }, [k, J, _]);
    const Q = $ && I.context.hasSubmenuOpen, ee = Kli(S, { enabled: (c ?? Q) && !G && I.type !== "context-menu" && (!$ || Q && !j), handleClose: Zli({ blockPointerEvents: !$ }), mouseOnly: true, move: false, restMs: I.type === void 0 ? u : void 0, delay: { close: d }, triggerElementRef: T, externalTree: M, isActiveTrigger: y, isClosing: () => _.select("transitionStatus") === "ending" }), re = dSS(k, _.select("lastOpenChangeReason")), ie = X8t(S, { enabled: !G && I.type !== "context-menu", event: k && $ ? "click" : "mousedown", toggle: true, ignoreMouse: false, stickIfOpen: I.type === void 0 ? re : false }), oe = uJo(S, { enabled: !G && Q }), se = lSS({ open: k, enabled: $, mouseDownAction: "open" }), le = OFe.useMemo(() => uB(oe.reference, ie.reference), [oe.reference, ie.reference]), ce = _.useState("triggerProps", j), { preFocusGuardRef: ae, handlePreFocusGuardFocus: de, handleFocusTargetFocus: he } = C6h(_, T), ge = { disabled: G, open: k }, pe = [V, n, K, U, T], ve = [le, ee ?? pE, ce, { "aria-haspopup": "menu", "aria-controls": C, id: b, onMouseDown: (Te) => {
      if (_.select("open")) return;
      Y.start(200, () => {
        _.context.allowMouseUpTriggerRef.current = true;
      }), ak(Te.currentTarget).addEventListener("mouseup", J, { once: true });
    } }, $ ? { role: "menuitem" } : {}, se, g, q], fe = Lm("button", e, { enabled: !$, stateAttributesMapping: a7t, state: ge, ref: pe, props: ve });
    return $ ? Jhi(laa, { tag: "button", render: i, className: r, style: s, state: ge, refs: pe, props: ve, stateAttributesMapping: a7t }) : k ? uSS(OFe.Fragment, { children: [Jhi(YHe, { ref: ae, onFocus: de }, `${b}-pre-focus-guard`), Jhi(OFe.Fragment, { children: fe }, b), Jhi(YHe, { ref: _.context.triggerFocusTargetRef, onFocus: he }, `${b}-post-focus-guard`)] }) : Jhi(OFe.Fragment, { children: fe }, b);
  }), process.env.NODE_ENV !== "production" && (oma.displayName = "MenuTrigger");
} });
import * as tpi from "./react-runtime/react/esm-index-production.js";
var ama, 