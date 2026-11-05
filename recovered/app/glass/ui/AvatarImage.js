// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AvatarImage.js range:17849468..17850418
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.495Z
a_1 = L({ "AvatarImage.js"() {
  E(), Jy(), jv(), Om(), fRa(), vRa(), qQ(), l6(), LRe(), o_1(), Cwp = { ...Wjr, ...D7 }, yRa = wwp.forwardRef(function(e, n) {
    const { className: i, render: r, onLoadingStatusChange: s, style: o, ...a } = e, { setImageLoadingStatus: l } = kwp(), c = s_1(a.src, a), u = c === "loaded", { mounted: d, transitionStatus: h, setMounted: p } = NRe(u), g = wwp.useRef(null), f = pu((y) => {
      s?.(y), l(y);
    });
    su(() => {
      c !== "idle" && f(c);
    }, [c, f]), su(() => () => l("idle"), [l]), GQ({ open: u, ref: g, onComplete() {
      u || p(false);
    } });
    const b = Lm("img", e, { state: { imageLoadingStatus: c, transitionStatus: h }, ref: [n, g], props: a, stateAttributesMapping: Cwp, enabled: d });
    return d ? b : null;
  }), process.env.NODE_ENV !== "production" && (yRa.displayName = "AvatarImage");
} });
import * as SRa from "./react-runtime/react/esm-index-production.js";
var kRa, 