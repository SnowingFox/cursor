// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipTrigger.js range:6343478..6347460
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.280Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, formatErrorMessage.js, floating-ui.utils.dom.js, fastHooks.js, useTimeout.js, useValueAsRef.js, TooltipRootContext.js, popupStateMapping.js, +15 more
// anchors: displayName=TooltipTrigger
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, formatErrorMessage.js, floating-ui.utils.dom.js, fastHooks.js, useTimeout.js, useValueAsRef.js, TooltipRootContext.js, popupStateMapping.js, +15 more
// anchors: displayName=TooltipTrigger
// path-candidate: none (no nls basename match; path inferred, confidence C)
Vhh = L({ "TooltipTrigger.js"() {
  E(), zS(), aT(), O8t(), M7(), Fwe(), Kci(), I4(), Om(), _A(), Whh(), Sne(), VS(), oGy(), mJo(), aGy(), FY(), noh(), $D(), Yli(), Qli(), dJo(), Zb(), Ana = "data-base-ui-tooltip-trigger", HPr = iQo(function(e, n) {
    const { render: i, className: r, style: s, handle: o, payload: a, disabled: l, delay: c, closeOnClick: u = true, closeDelay: d, id: h, ...p } = e, g = BPr(true), f = o?.store ?? g;
    if (!f) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle." : Oy(82));
    const _ = $I(h), b = f.useState("isTriggerActive", _), y = f.useState("isOpenedByTrigger", _), S = f.useState("floatingRootContext"), k = xna.useRef(null), C = c ?? qhh, T = d ?? 0, { registerTrigger: I, isMountedByThisTrigger: A } = jli(_, k, f, { payload: a, closeOnClick: u, closeDelay: T }), P = sGy(), { delayRef: M, isInstantPhase: O, hasProvider: N } = Y7y(S, { open: y }), U = hJo(S);
    f.useSyncedValue("isInstantPhase", O);
    const j = f.useState("disabled"), $ = l ?? j, H = uL($), G = f.useState("trackCursorAxis"), q = f.useState("disableHoverablePopup"), K = xna.useRef(false), V = a6(), Y = xna.useRef(void 0);
    function J() {
      const ae = P?.delay, de = typeof M.current == "object" ? M.current.open : void 0;
      let he = C;
      return N && (de !== 0 ? he = c ?? ae ?? C : he = 0), he;
    }
    function Q(ae) {
      const de = k.current;
      if (!de || !ae) return false;
      const he = lGy(ae);
      return he !== null && he !== de && Nf(de, he);
    }
    function te(ae) {
      const de = Q(ae);
      return K.current = de, de && (U.openChangeTimeout.clear(), U.restTimeout.clear(), U.restTimeoutPending = false, V.clear()), de;
    }
    const ee = Kli(S, { enabled: !$, mouseOnly: true, move: false, handleClose: !q && G !== "both" ? Zli() : null, restMs: J, delay() {
      const ae = typeof M.current == "object" ? M.current.close : void 0;
      let de = T;
      return d == null && N && (de = ae), { close: de };
    }, triggerElementRef: k, isActiveTrigger: b, isClosing: () => f.select("transitionStatus") === "ending", shouldOpen() {
      return !K.current;
    } }), re = uJo(S, { enabled: !$ }).reference, ie = (ae) => {
      const de = K.current, he = zhh(ae), ge = te(he), pe = k.current, ve = pe && he && Nf(pe, he);
      if (ge && f.select("open") && f.select("lastOpenChangeReason") === E4) {
        f.setOpen(false, zd(E4, ae));
        return;
      }
      if (de && !ge && ve && !H.current && !f.select("open") && pe && W8t(Y.current)) {
        const fe = () => {
          !K.current && !H.current && !f.select("open") && f.setOpen(true, zd(E4, ae, pe));
        }, Te = J();
        Te === 0 ? (V.clear(), fe()) : V.start(Te, fe);
      }
    }, oe = f.useState("triggerProps", A);
    return Lm("button", e, { state: { open: y }, ref: [n, I, k], props: [ee, re, A || G !== "none" ? oe : void 0, { onMouseOver(ae) {
      ie(ae.nativeEvent);
    }, onFocus(ae) {
      Q(zhh(ae.nativeEvent)) && ae.preventBaseUIHandler();
    }, onMouseLeave() {
      K.current = false, V.clear(), Y.current = void 0;
    }, onPointerEnter(ae) {
      Y.current = ae.pointerType;
    }, onPointerDown(ae) {
      Y.current = ae.pointerType, f.set("closeOnClick", u), u && !f.select("open") && f.cancelPendingOpen(ae.nativeEvent);
    }, onClick(ae) {
      u && !f.select("open") && f.cancelPendingOpen(ae.nativeEvent);
    }, id: _, [Ghh.triggerDisabled]: $ ? "" : void 0, [Ana]: $ ? void 0 : "" }, p], stateAttributesMapping: abn });
  }), process.env.NODE_ENV !== "production" && (HPr.displayName = "TooltipTrigger");
} });
import * as Khh from "./react-runtime/react/esm-index-production.js";
function cGy() {
  const t = Khh.useContext(WPr);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Tooltip.Portal> is missing." : Oy(70));
  return t;
}
var WPr, 