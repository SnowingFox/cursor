// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AvatarRoot.js range:17848139..17849314
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.497Z
i_1 = L({ "AvatarRoot.js"() {
  E(), Om(), fRa(), vRa(), bRa = _Ra.forwardRef(function(e, n) {
    const { className: i, render: r, style: s, ...o } = e, [a, l] = _Ra.useState("idle"), c = { imageLoadingStatus: a }, u = _Ra.useMemo(() => ({ imageLoadingStatus: a, setImageLoadingStatus: l }), [a, l]), d = Lm("span", e, { state: c, ref: n, props: o, stateAttributesMapping: Wjr });
    return n_1(Hjr.Provider, { value: u, children: d });
  }), process.env.NODE_ENV !== "production" && (bRa.displayName = "AvatarRoot");
} });
import * as r_1 from "./react-runtime/react/esm-index-production.js";
function s_1(t, { referrerPolicy: e, crossOrigin: n, sizes: i, srcSet: r }) {
  const [s, o] = r_1.useState("idle");
  return su(() => {
    if (!t && !r) return o("error"), Ax;
    let a = true;
    const l = new window.Image(), c = (u) => () => {
      a && o(u);
    };
    return o("loading"), l.onload = c("loaded"), l.onerror = c("error"), e && (l.referrerPolicy = e), l.crossOrigin = n ?? null, i && (l.sizes = i), r && (l.srcset = r), t && (l.src = t), l.complete && o(l.naturalWidth > 0 ? "loaded" : "error"), () => {
      a = false;
    };
  }, [t, r, i, n, e]), s;
}
