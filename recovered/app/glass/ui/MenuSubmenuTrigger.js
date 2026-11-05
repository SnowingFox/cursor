// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuSubmenuTrigger.js range:14570299..14573334
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.818Z
mSS = L({ "MenuSubmenuTrigger.js"() {
  E(), zS(), nQo(), jv(), Vvn(), Qvn(), vA(), F_e(), _A(), I4(), rWe(), EOr(), Om(), WUt(), ima(), FY(), Yli(), Qli(), Z8t(), ama = tpi.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, label: o, id: a, nativeButton: l = false, openOnHover: c = true, delay: u = 100, closeDelay: d = 0, disabled: h = false, ...p } = e, g = iWe({ label: o }), f = gSn(), { store: _ } = O_e(), b = $I(a), y = _.useState("open"), S = _.useState("floatingRootContext"), k = _.useState("floatingTreeRoot"), C = _.useState("triggerPopupId", b), T = Fah(b, _), I = tpi.useCallback((ie) => {
      const oe = T(ie);
      return ie !== null && _.select("open") && _.select("activeTriggerId") == null && _.update({ activeTriggerId: b, activeTriggerElement: ie, closeDelay: d }), oe;
    }, [T, d, _, b]), A = tpi.useRef(null), P = tpi.useCallback((ie) => {
      A.current = ie, _.set("activeTriggerElement", ie);
    }, [_]), M = b6h();
    if (!M?.parentMenu) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.SubmenuTrigger> must be placed in <Menu.SubmenuRoot>." : Oy(37));
    _.useSyncedValue("closeDelay", d);
    const O = M.parentMenu, N = _.useState("disabled"), U = O.useState("disabled"), j = h || N || U;
    process.env.NODE_ENV !== "production" && su(() => {
      const ie = A.current;
      if (ie && tQo(ie) && !j) {
        const oe = BHe.captureOwnerStack?.() || "";
        zvn(`A disabled element was detected on <Menu.SubmenuTrigger>. To properly disable the trigger, use the \`disabled\` prop on the component instead of setting it on the rendered element.${oe}`);
      }
    });
    const $ = O.useState("itemProps"), H = O.useState("isActive", g.index), G = tpi.useMemo(() => ({ type: "submenu-trigger", setActive() {
      O.select("highlightItemOnHover") && O.set("activeIndex", g.index);
    } }), [O, g.index]), { getItemProps: q, itemRef: K } = COr({ closeOnClick: false, disabled: j, highlighted: H, id: b, store: _, typingRef: O.context.typingRef, nativeButton: l, itemMetadata: G, nodeId: f?.context.nodeId }), V = _.useState("hoverEnabled"), Y = Kli(S, { enabled: V && c && !j, handleClose: Zli({ blockPointerEvents: true }), mouseOnly: true, move: true, restMs: u, delay: { open: u, close: d }, shouldOpen: u > 0 ? () => O.select("allowMouseEnter") : void 0, triggerElementRef: A, externalTree: k, isClosing: () => _.select("transitionStatus") === "ending" }), Q = X8t(S, { enabled: !j, event: "mousedown", toggle: !c, ignoreMouse: c, stickIfOpen: false }).reference ?? pE, te = _.useState("triggerProps", true);
    return delete te.id, Lm("div", e, { state: { disabled: j, highlighted: H, open: y }, stateAttributesMapping: abn, props: [Q, Y, te, $, { "aria-controls": C, tabIndex: y || H ? 0 : -1, onBlur() {
      H && O.set("activeIndex", null);
    } }, p, q], ref: [n, g.ref, K, I, P] });
  }), process.env.NODE_ENV !== "production" && (ama.displayName = "MenuSubmenuTrigger");
} });
function gSS() {
  return new I6h();
}
var I6h, 