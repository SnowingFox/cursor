// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverTrigger.mjs range:31312221..31314831
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.884Z
agw = L({ "PopoverTrigger.mjs"() {
  "use client";
  E(), vKe(), PBe(), uPf(), E3i(), bKe(), g3n(), y3n(), Zmw(), TOl(), CLl(), rce(), b3n(), egw(), sgw(), IOl = I3i.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = false, nativeButton: a = true, handle: l, payload: c, openOnHover: u = false, delay: d = _Pf, closeDelay: h = 0, id: p, ...g } = e, f = RBe(true), _ = l?.store ?? f?.store;
    if (!_) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle." : fKe(74));
    const b = COl(p), y = _.useState("isTriggerActive", b), S = _.useState("floatingRootContext"), k = _.useState("isOpenedByTrigger", b), C = _.useState("triggerPopupId", b), T = I3i.useRef(null), { registerTrigger: I, isMountedByThisTrigger: A } = pmw(b, T, _, { payload: c, disabled: o, openOnHover: u, closeDelay: h }), P = _.useState("openChangeReason"), M = _.useState("stickIfOpen"), O = _.useState("openMethod"), N = _.useState("focusManagerModal"), U = Dmw(S, { enabled: !o && S != null && u && (O !== "touch" || P !== BA.triggerPress), mouseOnly: true, move: false, handleClose: Omw(), restMs: d, delay: { close: h }, triggerElementRef: T, isActiveTrigger: y, isClosing: () => _.select("transitionStatus") === "ending" }), j = Qhw(S, { enabled: S != null, stickIfOpen: M }), $ = rgw(() => _.select("open"), (ee) => {
      _.set("openMethod", ee);
    }), H = _.useState("triggerProps", A), { getButtonProps: G, buttonRef: q } = cPf({ disabled: o, native: a }), K = { open(ee) {
      return ee && P === BA.triggerPress ? vPf.open(ee) : fPf.open(ee);
    } }, { preFocusGuardRef: V, handlePreFocusGuardFocus: Y, handleFocusTargetFocus: J } = Jmw(_, T), te = _Ke("button", e, { state: { disabled: o, open: k }, ref: [q, n, I, T], props: [j.reference, U, H, $, { [ZLl]: "", id: b, "aria-haspopup": "dialog", "aria-expanded": k, "aria-controls": C }, g, G], stateAttributesMapping: K });
    return A && !N ? ogw(I3i.Fragment, { children: [o1s(qxt, { ref: V, onFocus: Y }), o1s(I3i.Fragment, { children: te }, b), o1s(qxt, { ref: _.context.triggerFocusTargetRef, onFocus: J })] }) : o1s(I3i.Fragment, { children: te }, b);
  }), process.env.NODE_ENV !== "production" && (IOl.displayName = "PopoverTrigger");
} });
import * as yPf from "./react-runtime/react/esm-index-production.js";
function lgw() {
  const t = yPf.useContext(a1s);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Portal> is missing." : fKe(45));
  return t;
}
var a1s, 