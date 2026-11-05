// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GlassLiquidMetalLogo.liquidMetal.js range:16460871..16466305
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.706Z
var FzS = L({ "GlassLiquidMetalLogo.liquidMetal.js"() {
  "use strict";
  E(), OzS();
} });
import { jsx as bkn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as yop } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { lazy as BzS, useSyncExternalStore as UzS, useState as jzS, useRef as C0a, useEffect as $zS, Suspense as HzS } from "./react-runtime/react/esm-index-production.js";
function Sop() {
  return { root: wop.base, wrapper: Cop.base, fallback: Top.base, shader: Eop.base };
}
function WzS(t) {
  if (typeof window > "u") return () => {
  };
  const e = window.matchMedia("(prefers-reduced-motion: reduce)");
  return e.addEventListener("change", t), () => e.removeEventListener("change", t);
}
function GzS() {
  return typeof window > "u" ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function qzS(t) {
  const e = yop(4), { width: n, height: i } = t;
  let r;
  if (e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const a = Sop();
    r = gn(a.fallback), e[0] = r;
  } else r = e[0];
  const s = r;
  let o;
  return e[1] !== i || e[2] !== n ? (o = bkn("div", { className: s.className, style: { ...s.style, width: n, height: i }, "aria-hidden": true }), e[1] = i, e[2] = n, e[3] = o) : o = e[3], o;
}
function kop(t) {
  const e = yop(41), { width: n, height: i, fit: r, colorTint: s, repetition: o, softness: a, shiftRed: l, shiftBlue: c, distortion: u, contour: d, angle: h, speed: p, scale: g, shape: f, className: _, onShaderReady: b } = t, y = r === void 0 ? T0e.fit : r, S = s === void 0 ? T0e.colorTint : s, k = o === void 0 ? T0e.repetition : o, C = a === void 0 ? T0e.softness : a, T = l === void 0 ? T0e.shiftRed : l, I = c === void 0 ? T0e.shiftBlue : c, A = u === void 0 ? T0e.distortion : u, P = d === void 0 ? T0e.contour : d, M = h === void 0 ? T0e.angle : h, O = p === void 0 ? T0e.speed : p, N = g === void 0 ? T0e.scale : g, U = f === void 0 ? T0e.shape : f;
  let j, $;
  if (n !== void 0 && i !== void 0) j = n, $ = i;
  else if (n !== void 0) {
    j = n;
    let _e;
    e[0] !== n ? (_e = f0a(n), e[0] = n, e[1] = _e) : _e = e[1], $ = _e;
  } else if (i !== void 0) {
    $ = i;
    let _e;
    e[2] !== i ? (_e = Ksp(i), e[2] = i, e[3] = _e) : _e = e[3], j = _e;
  } else j = i8r, $ = v0a;
  const G = UzS(WzS, GzS, zzS) ? 0 : O;
  let q, K, V;
  if (e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const _e = Sop();
    q = ar({ rootClass: "ui-glass-liquid-metal-logo", stylexStyles: _e.root }), V = gn(_e.wrapper), K = gn(_e.shader), e[4] = q, e[5] = K, e[6] = V;
  } else q = e[4], K = e[5], V = e[6];
  const J = _ === void 0 ? K.className : _, [Q, te] = jzS(false), ee = C0a(false), re = C0a(null), ie = C0a(b);
  let oe, se;
  e[7] !== b ? (oe = () => {
    ie.current = b;
  }, se = [b], e[7] = b, e[8] = oe, e[9] = se) : (oe = e[8], se = e[9]), $zS(oe, se);
  let le;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (le = () => {
    ee.current || (ee.current = true, te(true), ie.current?.());
  }, e[10] = le) : le = e[10];
  const ce = le;
  let ae;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ae = (_e) => {
    if (!_e) {
      re.current?.disconnect(), re.current = null;
      return;
    }
    if (ee.current) return;
    re.current?.disconnect(), re.current = null;
    const Ce = (we) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          we.getContext("webgl2") ?? we.getContext("webgl"), ce();
        });
      });
    }, Se = _e.querySelector("canvas");
    if (Se) {
      Ce(Se);
      return;
    }
    const Pe = new MutationObserver(() => {
      if (ee.current) return;
      const we = _e.querySelector("canvas");
      we && (Pe.disconnect(), re.current = null, Ce(we));
    });
    re.current = Pe, Pe.observe(_e, { childList: true, subtree: true });
  }, e[11] = ae) : ae = e[11];
  const de = ae, he = Q ? 1 : 0;
  let ge;
  e[12] !== $ || e[13] !== he || e[14] !== j ? (ge = { ...V.style, width: j, height: $, opacity: he }, e[12] = $, e[13] = he, e[14] = j, e[15] = ge) : ge = e[15];
  let pe;
  e[16] !== $ || e[17] !== j ? (pe = bkn(qzS, { width: j, height: $ }), e[16] = $, e[17] = j, e[18] = pe) : pe = e[18];
  let ve;
  e[19] !== M || e[20] !== S || e[21] !== P || e[22] !== A || e[23] !== G || e[24] !== y || e[25] !== $ || e[26] !== k || e[27] !== J || e[28] !== N || e[29] !== U || e[30] !== I || e[31] !== T || e[32] !== C || e[33] !== j ? (ve = bkn(Iop, { image: Ysp, width: j, height: $, fit: y, colorBack: Xsp, colorTint: S, repetition: k, softness: C, shiftRed: T, shiftBlue: I, distortion: A, contour: P, angle: M, speed: G, scale: N, shape: U, className: J }), e[19] = M, e[20] = S, e[21] = P, e[22] = A, e[23] = G, e[24] = y, e[25] = $, e[26] = k, e[27] = J, e[28] = N, e[29] = U, e[30] = I, e[31] = T, e[32] = C, e[33] = j, e[34] = ve) : ve = e[34];
  let fe;
  e[35] !== pe || e[36] !== ve ? (fe = bkn(HzS, { fallback: pe, children: ve }), e[35] = pe, e[36] = ve, e[37] = fe) : fe = e[37];
  let Te;
  return e[38] !== ge || e[39] !== fe ? (Te = bkn("div", { className: q.className, style: q.style, "aria-hidden": true, children: bkn("div", { ref: de, className: V.className, style: ge, children: fe }) }), e[38] = ge, e[39] = fe, e[40] = Te) : Te = e[40], Te;
}
function zzS() {
  return false;
}
var wop, Cop, Top, Eop, Iop, T0e, 