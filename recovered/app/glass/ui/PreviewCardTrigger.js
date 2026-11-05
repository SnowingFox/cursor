// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PreviewCardTrigger.js range:6310350..6312116
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.905Z
bhh = L({ "PreviewCardTrigger.js"() {
  E(), zS(), O8t(), jv(), qci(), I4(), Om(), _A(), shh(), FY(), Yli(), Qli(), dJo(), sJo(), xPr = iQo(function(e, n) {
    const { render: i, className: r, delay: s, closeDelay: o, id: a, payload: l, handle: c, style: u, ...d } = e, h = Gci(true), p = c?.store ?? h;
    if (!p) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <PreviewCard.Trigger> must be either used within a <PreviewCard.Root> component or provided with a handle." : Oy(89));
    const g = $I(a), f = p.useState("isTriggerActive", g), _ = p.useState("isOpenedByTrigger", g), b = p.useState("floatingRootContext"), y = p.context.inlineRectCoordsRef, S = kWy.useRef(null), k = s ?? rhh, C = o ?? dna, { registerTrigger: T, isMountedByThisTrigger: I } = jli(g, S, p, { payload: l });
    su(() => {
      I && (p.context.closeDelayRef.current = C);
    }, [p, I, C]);
    const A = Kli(b, { mouseOnly: true, move: false, handleClose: Zli(), delay: () => ({ open: k, close: C }), triggerElementRef: S, isActiveTrigger: f, isClosing: () => p.select("transitionStatus") === "ending" }), P = uJo(b, { delay: k }), M = { open: _ }, O = p.useState("triggerProps", I), N = VUy(y, _);
    return Lm("a", e, { state: M, ref: [n, T, S], props: [A, P.reference, O, N, { id: g }, d], stateAttributesMapping: abn });
  }), process.env.NODE_ENV !== "production" && (xPr.displayName = "PreviewCardTrigger");
} });
import * as yhh from "./react-runtime/react/esm-index-production.js";
function wWy() {
  const t = yhh.useContext(APr);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <PreviewCard.Popup> and <PreviewCard.Arrow> must be used within the <PreviewCard.Positioner> component" : Oy(49));
  return t;
}
var APr, 