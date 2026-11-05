// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SentryIcon.js range:17818299..17822364
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.993Z
var Sv1 = L({ "SentryIcon.js"() {
  "use strict";
  E();
} });
import { jsx as Awt, jsxs as awp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as kv1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useId as wv1 } from "./react-runtime/react/esm-index-production.js";
function Cv1(t) {
  const e = kv1(31);
  let n, i, r, s;
  e[0] !== t ? ({ size: i, title: r, variant: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = i === void 0 ? 24 : i, a = r === void 0 ? "SharePoint" : r, c = (s === void 0 ? "monochrome" : s) === "brand", u = wv1();
  let d;
  if (e[5] !== u) {
    let M;
    e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (M = /:/g, e[7] = M) : M = e[7], d = u.replace(M, ""), e[5] = u, e[6] = d;
  } else d = e[6];
  const h = `sharepoint-icon-${d}`, p = c ? void 0 : "currentColor", g = c ? "#036C70" : p;
  let f;
  e[8] !== g ? (f = Awt("circle", { fill: g, cx: "1019.333", cy: "556", r: "556" }), e[8] = g, e[9] = f) : f = e[9];
  const _ = c ? "#1A9BA1" : p;
  let b;
  e[10] !== _ ? (b = Awt("circle", { fill: _, cx: "1482.667", cy: "1065.667", r: "509.667" }), e[10] = _, e[11] = b) : b = e[11];
  const y = c ? "#37C6D0" : p;
  let S;
  e[12] !== y ? (S = Awt("circle", { fill: y, cx: "1088.833", cy: "1552.167", r: "393.833" }), e[12] = y, e[13] = S) : S = e[13];
  let k;
  e[14] !== h || e[15] !== c ? (k = c ? awp("linearGradient", { id: h, gradientUnits: "userSpaceOnUse", x1: "177.0788", y1: "1551.0284", x2: "842.2545", y2: "398.9716", gradientTransform: "matrix(1 0 0 -1 0 1948)", children: [Awt("stop", { offset: "0", stopColor: "#058F92" }), Awt("stop", { offset: "0.5", stopColor: "#038489" }), Awt("stop", { offset: "1", stopColor: "#026D71" })] }) : null, e[14] = h, e[15] = c, e[16] = k) : k = e[16];
  const C = c ? `url(#${h})` : p;
  let T;
  e[17] !== C ? (T = Awt("path", { fill: C, d: "M84.929,463.333h849.475c46.905,0,84.929,38.024,84.929,84.929v849.475c0,46.905-38.024,84.929-84.929,84.929H84.929c-46.905,0-84.929-38.024-84.929-84.929V548.262C0,501.357,38.024,463.333,84.929,463.333z" }), e[17] = C, e[18] = T) : T = e[18];
  const I = c ? "#FFFFFF" : "Canvas";
  let A;
  e[19] !== I ? (A = Awt("path", { fill: I, d: "M379.331,962.621c-19.903-13.202-36.528-30.777-48.604-51.384c-11.701-21.542-17.533-45.781-16.912-70.288c-1.042-33.181,10.155-65.586,31.46-91.045c22.388-25.49,51.326-44.366,83.678-54.581c36.871-12.136,75.49-18.116,114.304-17.699c51.043-1.865,102.015,5.272,150.583,21.082v106.567c-21.103-12.784-44.088-22.166-68.11-27.8c-26.065-6.392-52.81-9.597-79.647-9.545c-28.3-1.039-56.419,4.913-81.871,17.329c-19.65,8.475-32.392,27.807-32.433,49.206c-0.08,12.981,4.907,25.481,13.9,34.843c10.622,11.037,23.187,20.021,37.067,26.503c15.444,7.691,38.611,17.916,69.5,30.673c3.401,1.075,6.716,2.407,9.915,3.985c30.401,11.881,59.729,26.344,87.663,43.229c21.154,13.043,38.908,30.924,51.801,52.171c13.218,24.085,19.625,51.315,18.533,78.767c1.509,34.066-8.913,67.591-29.468,94.798c-20.488,25.012-47.88,43.446-78.767,53.005c-36.329,11.387-74.245,16.892-112.312,16.309c-34.154,0.155-68.258-2.635-101.933-8.34c-28.434-4.653-56.182-12.807-82.612-24.279v-112.358c25.264,18.043,53.489,31.529,83.4,39.847c29.81,9.289,60.798,14.251,92.018,14.734c28.895,1.83,57.739-4.291,83.4-17.699c17.976-10.144,28.909-29.358,28.449-49.994c0.12-14.359-5.56-28.158-15.753-38.271c-12.676-12.444-27.352-22.671-43.414-30.256c-18.533-9.267-45.824-21.483-81.871-36.65C432.618,993.951,405.161,979.594,379.331,962.621z" }), e[19] = I, e[20] = A) : A = e[20];
  let P;
  return e[21] !== n || e[22] !== o || e[23] !== S || e[24] !== k || e[25] !== T || e[26] !== A || e[27] !== f || e[28] !== b || e[29] !== a ? (P = awp("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1992.333 1946", width: o, height: o, role: "img", "aria-label": a, ...n, children: [f, b, S, k, T, A] }), e[21] = n, e[22] = o, e[23] = S, e[24] = k, e[25] = T, e[26] = A, e[27] = f, e[28] = b, e[29] = a, e[30] = P) : P = e[30], P;
}
