// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverTrigger.js range:15720827..15723398
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.882Z
V6S = L({ "PopoverTrigger.js"() {
  E(), zS(), Okt(), Cz(), I4(), Om(), k_e(), q6S(), _A(), vRr(), T6h(), nci(), FY(), Yli(), Qli(), Zb(), Z8t(), FSa = Jmi.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = false, nativeButton: a = true, handle: l, payload: c, openOnHover: u = false, delay: d = LZh, closeDelay: h = 0, id: p, ...g } = e, f = Lkt(true), _ = l?.store ?? f?.store;
    if (!_) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle." : Oy(74));
    const b = $I(p), y = _.useState("isTriggerActive", b), S = _.useState("floatingRootContext"), k = _.useState("isOpenedByTrigger", b), C = _.useState("triggerPopupId", b), T = Jmi.useRef(null), { registerTrigger: I, isMountedByThisTrigger: A } = jli(b, T, _, { payload: c, disabled: o, openOnHover: u, closeDelay: h }), P = _.useState("openChangeReason"), M = _.useState("stickIfOpen"), O = _.useState("openMethod"), N = _.useState("focusManagerModal"), U = Kli(S, { enabled: !o && S != null && u && (O !== "touch" || P !== PRe), mouseOnly: true, move: false, handleClose: Zli(), restMs: d, delay: { close: h }, triggerElementRef: T, isActiveTrigger: y, isClosing: () => _.select("transitionStatus") === "ending" }), j = X8t(S, { enabled: S != null, stickIfOpen: M }), $ = AJo(() => _.select("open"), (ee) => {
      _.set("openMethod", ee);
    }), H = _.useState("triggerProps", A), { getButtonProps: G, buttonRef: q } = wz({ disabled: o, native: a }), K = { open(ee) {
      return ee && P === PRe ? a7t.open(ee) : abn.open(ee);
    } }, { preFocusGuardRef: V, handlePreFocusGuardFocus: Y, handleFocusTargetFocus: J } = C6h(_, T), te = Lm("button", e, { state: { disabled: o, open: k }, ref: [q, n, I, T], props: [j.reference, U, H, $, { [MRr]: "", id: b, "aria-haspopup": "dialog", "aria-expanded": k, "aria-controls": C }, g, G], stateAttributesMapping: K });
    return A && !N ? z6S(Jmi.Fragment, { children: [A4r(YHe, { ref: V, onFocus: Y }), A4r(Jmi.Fragment, { children: te }, b), A4r(YHe, { ref: _.context.triggerFocusTargetRef, onFocus: J })] }) : A4r(Jmi.Fragment, { children: te }, b);
  }), process.env.NODE_ENV !== "production" && (FSa.displayName = "PopoverTrigger");
} });
import * as OZh from "./react-runtime/react/esm-index-production.js";
function K6S() {
  const t = OZh.useContext(R4r);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Portal> is missing." : Oy(45));
  return t;
}
var R4r, 