// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AvatarFallback.js range:17850418..17853247
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.495Z
l_1 = L({ "AvatarFallback.js"() {
  E(), M7(), Om(), fRa(), vRa(), kRa = SRa.forwardRef(function(e, n) {
    const { className: i, render: r, delay: s, style: o, ...a } = e, { imageLoadingStatus: l } = kwp(), [c, u] = SRa.useState(s === void 0), d = a6();
    return SRa.useEffect(() => (s !== void 0 ? d.start(s, () => u(true)) : u(true), d.clear), [d, s]), Lm("span", e, { state: { imageLoadingStatus: l }, ref: n, props: a, stateAttributesMapping: Wjr, enabled: l !== "loaded" && (s === void 0 || c) });
  }), process.env.NODE_ENV !== "production" && (kRa.displayName = "AvatarFallback");
} });
import { jsx as wRa, jsxs as c_1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as u_1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Iae(t) {
  const e = u_1(26), { alt: n, fallback: i, ref: r, size: s, src: o, loading: a, decoding: l, srcSet: c, sizes: u, fetchPriority: d } = t, h = s === void 0 ? Twp : s, p = a === void 0 ? "lazy" : a, g = l === void 0 ? "async" : l;
  let f;
  e[0] !== h ? (f = gn(TRa.root, TRa[h]), e[0] = h, e[1] = f) : f = e[1];
  const _ = f;
  let b;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = { className: "ui-10l6tqk ui-10a8y8t ui-1lliihq ui-h8yej3 ui-5yr21d ui-l1xv1r ui-1pjcqnp" }, e[2] = b) : b = e[2];
  const y = b;
  let S;
  e[3] !== h ? (S = gn(ERa.root, ERa[h]), e[3] = h, e[4] = S) : S = e[4];
  const k = S;
  let C;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = { className: "ui-1lliihq ui-68av9p" }, e[5] = C) : C = e[5];
  const T = C, I = n.length === 0, A = CRa[h], P = I ? void 0 : n, M = I ? void 0 : "img", O = u ?? `${A}px`;
  let N;
  e[6] !== g || e[7] !== d || e[8] !== p || e[9] !== A || e[10] !== o || e[11] !== c || e[12] !== O ? (N = wRa(yRa, { alt: "", "aria-hidden": true, className: y.className, decoding: g, draggable: false, fetchPriority: d, height: A, loading: p, sizes: O, src: o, srcSet: c, style: y.style, width: A }), e[6] = g, e[7] = d, e[8] = p, e[9] = A, e[10] = o, e[11] = c, e[12] = O, e[13] = N) : N = e[13];
  let U;
  e[14] !== i || e[15] !== k ? (U = i !== void 0 ? wRa(kRa, { "aria-hidden": true, className: k.className, style: k.style, children: wRa("span", { className: T.className, style: T.style, children: i }) }) : null, e[14] = i, e[15] = k, e[16] = U) : U = e[16];
  let j;
  return e[17] !== r || e[18] !== _.className || e[19] !== _.style || e[20] !== h || e[21] !== N || e[22] !== U || e[23] !== P || e[24] !== M ? (j = c_1(bRa, { "aria-label": P, className: _.className, "data-component": "avatar", "data-size": h, ref: r, role: M, style: _.style, children: [N, U] }), e[17] = r, e[18] = _.className, e[19] = _.style, e[20] = h, e[21] = N, e[22] = U, e[23] = P, e[24] = M, e[25] = j) : j = e[25], j;
}
var Twp, CRa, TRa, ERa, 