// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LightboxContext.js range:14458310..14473710
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.775Z
kpa = L({ "LightboxContext.js"() {
  "use strict";
  E(), Spa = UbS(null);
} });
import { jsx as UWe, Fragment as $bS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as jWe } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useSyncExternalStore as HbS, useState as U1t, useRef as jUt, forwardRef as wFh, useEffect as gOr } from "./react-runtime/react/esm-index-production.js";
function WbS(t) {
  if (typeof window > "u" || typeof window.matchMedia != "function") return () => {
  };
  const e = window.matchMedia(Cpa);
  return e.addEventListener("change", t), () => {
    e.removeEventListener("change", t);
  };
}
function GbS() {
  return typeof window > "u" || typeof window.matchMedia != "function" ? false : window.matchMedia(Cpa).matches;
}
function qbS() {
  return false;
}
function zbS() {
  return HbS(WbS, GbS, qbS);
}
function $Ut() {
  return { trigger: j1t.trigger, grid: j1t.grid, gridItem: j1t.gridItem, popup: j1t.popup, title: j1t.title, description: j1t.description, close: j1t.close };
}
function VbS(t, e) {
  return e.durationMs <= 0 ? "none" : t.map((n) => `${n} ${e.durationMs}ms ${e.easing}`).join(", ");
}
function KbS(t) {
  return t ? typeof t == "boolean" ? t ? { threshold: 100, velocity: 500 } : null : { threshold: 100, velocity: 500, ...t } : null;
}
function wpa(t) {
  if (!t) return null;
  const e = t.getBoundingClientRect(), n = window.getComputedStyle(t), i = parseFloat(n.borderRadius) || 0;
  return { top: e.top, left: e.left, width: e.width, height: e.height, borderRadius: i };
}
function CFh(t) {
  if (!t) return;
  if (t instanceof HTMLImageElement && t.naturalWidth > 0 && t.naturalHeight > 0) return t.naturalWidth / t.naturalHeight;
  const e = t.getBoundingClientRect();
  if (e.width > 0 && e.height > 0) return e.width / e.height;
}
function YbS(t) {
  return t.button === 0 && !t.ctrlKey;
}
function XbS(t) {
  const e = jWe(51), { children: n, open: i, defaultOpen: r, onOpenChange: s, motion: o, reduceMotion: a, dismissible: l, itemCount: c, loopNavigation: u } = t, d = r === void 0 ? false : r, h = u === void 0 ? true : u, [p, g] = U1t(d), [f, _] = U1t(null), [b, y] = U1t(void 0), [S, k] = U1t(null), [C, T] = U1t(0), [I, A] = U1t(void 0), P = zbS(), M = jUt(null);
  let O;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (O = /* @__PURE__ */ new Map(), e[0] = O) : O = e[0];
  const N = jUt(O);
  let U;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = /* @__PURE__ */ new Map(), e[1] = U) : U = e[1];
  const j = jUt(U), $ = i ?? p, H = i !== void 0;
  let G;
  e[2] !== l ? (G = KbS(l), e[2] = l, e[3] = G) : G = e[3];
  const q = G, K = a ?? P, V = c ?? C;
  let Y;
  e: {
    if (K) {
      Y = "reduced";
      break e;
    }
    if (!o || typeof o == "object") {
      Y = "smooth";
      break e;
    }
    Y = o;
  }
  const J = Y, Q = typeof o == "object" ? o : void 0;
  let te;
  e[4] !== H || e[5] !== s ? (te = ($e) => {
    H || g($e), s?.($e);
  }, e[4] = H, e[5] = s, e[6] = te) : te = e[6];
  const ee = te;
  let re;
  e[7] !== h || e[8] !== V ? (re = ($e) => V <= 0 ? null : h ? ($e % V + V) % V : $e < 0 || $e >= V ? null : $e, e[7] = h, e[8] = V, e[9] = re) : re = e[9];
  const ie = re;
  let oe;
  e[10] !== ie ? (oe = ($e) => {
    const Je = ie($e);
    if (Je === null) return;
    k(Je);
    const Ge = N.current.get(Je) ?? null;
    M.current = Ge ? new WeakRef(Ge) : null, _(wpa(Ge));
    const xe = j.current.get(Je) ?? CFh(Ge);
    y(xe);
  }, e[10] = ie, e[11] = oe) : oe = e[11];
  const se = oe;
  let le;
  e[12] !== ee ? (le = ($e, Je) => {
    if (!$e) return;
    k(Je?.itemIndex ?? null), M.current = new WeakRef($e), _(wpa($e));
    const Ge = Je?.aspectRatio ?? (Je?.itemIndex !== void 0 ? j.current.get(Je.itemIndex) : void 0) ?? CFh($e);
    y(Ge), ee(true);
  }, e[12] = ee, e[13] = le) : le = e[13];
  const ce = le;
  let ae;
  e[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ae = ($e, Je) => {
    const Ge = N.current;
    if (Je) {
      Ge.set($e, Je), T(Ge.size);
      return;
    }
    const xe = Ge.get($e);
    Ge.delete($e), M.current?.deref() === xe && (M.current = null), T(Ge.size);
  }, e[14] = ae) : ae = e[14];
  const de = ae;
  let he;
  e[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (he = ($e, Je) => {
    if (Je === void 0) {
      j.current.delete($e);
      return;
    }
    j.current.set($e, Je);
  }, e[15] = he) : he = e[15];
  const ge = he, pe = S !== null, ve = V > 1 && (h || pe && S > 0), fe = V > 1 && (h || !pe || S < V - 1);
  let Te;
  e[16] !== S || e[17] !== ve || e[18] !== se ? (Te = () => {
    if (!ve) return;
    se((S ?? 0) - 1);
  }, e[16] = S, e[17] = ve, e[18] = se, e[19] = Te) : Te = e[19];
  const _e = Te;
  let Ce;
  e[20] !== S || e[21] !== fe || e[22] !== se ? (Ce = () => {
    if (!fe) return;
    se((S ?? -1) + 1);
  }, e[20] = S, e[21] = fe, e[22] = se, e[23] = Ce) : Ce = e[23];
  const Se = Ce;
  let Pe;
  e[24] !== ee ? (Pe = () => {
    const $e = M.current?.deref();
    _($e?.isConnected === true ? wpa($e) : null), M.current = null, ee(false);
  }, e[24] = ee, e[25] = Pe) : Pe = e[25];
  const we = Pe;
  let Ie;
  e[26] !== we ? (Ie = ($e) => {
    $e || we();
  }, e[26] = we, e[27] = Ie) : Ie = e[27];
  const Me = Ie;
  let De;
  e[28] !== I || e[29] !== Q || e[30] !== K || e[31] !== J ? (De = ($e, Je) => {
    if (K) return "reduced";
    if (Je) return Je;
    if ($e === "backdrop" && I) return I;
    const Ge = Q?.[$e];
    return Ge || J;
  }, e[28] = I, e[29] = Q, e[30] = K, e[31] = J, e[32] = De) : De = e[32];
  let Ne;
  e[33] !== S || e[34] !== f || e[35] !== b || e[36] !== I || e[37] !== fe || e[38] !== ve || e[39] !== we || e[40] !== q || e[41] !== Se || e[42] !== _e || e[43] !== Me || e[44] !== $ || e[45] !== ce || e[46] !== De ? (Ne = { open: $, animationSource: f, aspectRatio: b, backdropMotionOverride: I, setBackdropMotionOverride: A, dismissibleConfig: q, resolveMotionPreset: De, openFromElement: ce, registerItemElement: de, registerItemAspectRatio: ge, activeIndex: S, canNavigatePrevious: ve, canNavigateNext: fe, goToPrevious: _e, goToNext: Se, close: we, onDialogOpenChange: Me }, e[33] = S, e[34] = f, e[35] = b, e[36] = I, e[37] = fe, e[38] = ve, e[39] = we, e[40] = q, e[41] = Se, e[42] = _e, e[43] = Me, e[44] = $, e[45] = ce, e[46] = De, e[47] = Ne) : Ne = e[47];
  const be = Ne;
  let je;
  return e[48] !== n || e[49] !== be ? (je = UWe(Spa.Provider, { value: be, children: n }), e[48] = n, e[49] = be, e[50] = je) : je = e[50], je;
}
function ZbS(t) {
  const e = jWe(13);
  let n, i, r, s;
  e[0] !== t ? ({ children: n, className: i, style: s, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  let o;
  if (e[5] !== i || e[6] !== s) {
    const c = $Ut();
    o = ar({ rootClass: "ui-lightbox-grid", stylexStyles: c.grid, className: i, style: s }), e[5] = i, e[6] = s, e[7] = o;
  } else o = e[7];
  const a = o;
  let l;
  return e[8] !== n || e[9] !== a.className || e[10] !== a.style || e[11] !== r ? (l = UWe("div", { className: a.className, style: a.style, ...r, children: n }), e[8] = n, e[9] = a.className, e[10] = a.style, e[11] = r, e[12] = l) : l = e[12], l;
}
function QbS(t) {
  const e = jWe(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = UWe($bS, { children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function JbS(t) {
  const e = jWe(4), { motion: n } = t, { setBackdropMotionOverride: i } = qhi("Lightbox.Backdrop");
  let r, s;
  return e[0] !== n || e[1] !== i ? (r = () => (i(n), () => {
    i(void 0);
  }), s = [n, i], e[0] = n, e[1] = i, e[2] = r, e[3] = s) : (r = e[2], s = e[3]), gOr(r, s), null;
}
function eyS(t) {
  const e = jWe(66), { children: n, className: i, "aria-label": r, onKeyDown: s, closeOnBackdropClick: o, closeOnEscape: a, aspectRatio: l, onAnimationComplete: c, motion: u, fullscreenViewportPadding: d, fullscreenMaxWidth: h } = t, p = o === void 0 ? true : o, g = a === void 0 ? true : a, { open: f, animationSource: _, aspectRatio: b, dismissibleConfig: y, close: S, resolveMotionPreset: k, onDialogOpenChange: C, activeIndex: T, canNavigatePrevious: I, canNavigateNext: A, goToPrevious: P, goToNext: M } = qhi("Lightbox.Popup"), O = k("popup", u), N = k("backdrop"), U = Tpa[O], j = Tpa[N];
  let $;
  e[0] !== U ? ($ = VbS(["transform", "opacity"], U), e[0] = U, e[1] = $) : $ = e[1];
  const H = $;
  let G;
  if (e[2] !== i) {
    const Ge = $Ut();
    G = ar({ rootClass: "ui-lightbox-popup", stylexStyles: Ge.popup, className: i }), e[2] = i, e[3] = G;
  } else G = e[3];
  const q = G;
  let K;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (K = { x: 0, y: 0 }, e[4] = K) : K = e[4];
  const [V, Y] = U1t(K), [J, Q] = U1t(false);
  let te;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (te = { x: 0, y: 0 }, e[5] = te) : te = e[5];
  const ee = jUt(te);
  let re;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (re = { x: 0, y: 0, t: 0 }, e[6] = re) : re = e[6];
  const ie = jUt(re);
  let oe;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (oe = { vx: 0, vy: 0 }, e[7] = oe) : oe = e[7];
  const se = jUt(oe);
  let le;
  e[8] !== y ? (le = (Ge) => {
    y && YbS(Ge) && (Ge.currentTarget.setPointerCapture(Ge.pointerId), Q(true), ee.current = { x: Ge.clientX, y: Ge.clientY }, ie.current = { x: Ge.clientX, y: Ge.clientY, t: performance.now() }, se.current = { vx: 0, vy: 0 });
  }, e[8] = y, e[9] = le) : le = e[9];
  const ce = le;
  let ae;
  e[10] !== y || e[11] !== J ? (ae = (Ge) => {
    if (!J || !y) return;
    const xe = Ge.clientX - ee.current.x, Oe = Ge.clientY - ee.current.y, ct = performance.now(), Ye = Math.max(1, ct - ie.current.t);
    se.current = { vx: (Ge.clientX - ie.current.x) / Ye * 1e3, vy: (Ge.clientY - ie.current.y) / Ye * 1e3 }, ie.current = { x: Ge.clientX, y: Ge.clientY, t: ct }, Y({ x: xe, y: Oe });
  }, e[10] = y, e[11] = J, e[12] = ae) : ae = e[12];
  const de = ae;
  let he;
  e[13] !== S || e[14] !== y || e[15] !== V.x || e[16] !== V.y || e[17] !== J ? (he = () => {
    if (!J || !y) return;
    const Ge = Math.hypot(V.x, V.y), xe = Math.hypot(se.current.vx, se.current.vy), Oe = y.threshold ?? 100, ct = y.velocity ?? 500, Ye = Ge > Oe || xe > ct;
    if (Q(false), Ye) {
      S(), Y({ x: 0, y: 0 });
      return;
    }
    Y({ x: 0, y: 0 });
  }, e[13] = S, e[14] = y, e[15] = V.x, e[16] = V.y, e[17] = J, e[18] = he) : he = e[18];
  const ge = he, pe = Math.hypot(V.x, V.y), ve = Math.max(0.95, 1 - pe / 2e3), fe = Math.max(0.92, 1 - pe / 1500);
  let Te;
  e[19] !== T || e[20] !== A || e[21] !== I || e[22] !== M || e[23] !== P ? (Te = { activeIndex: T, canGoPrevious: I, canGoNext: A, goPrevious: P, goNext: M }, e[19] = T, e[20] = A, e[21] = I, e[22] = M, e[23] = P, e[24] = Te) : Te = e[24];
  const _e = Te;
  let Ce;
  e[25] !== A || e[26] !== I || e[27] !== M || e[28] !== P ? (Ce = (Ge) => {
    Ge.defaultPrevented || (Ge.key === "ArrowLeft" && I ? (Ge.preventDefault(), P()) : Ge.key === "ArrowRight" && A && (Ge.preventDefault(), M()));
  }, e[25] = A, e[26] = I, e[27] = M, e[28] = P, e[29] = Ce) : Ce = e[29];
  const Se = Ce;
  let Pe, we;
  e[30] !== A || e[31] !== I || e[32] !== Se || e[33] !== f ? (Pe = () => {
    if (!(!f || !I && !A)) return window.addEventListener("keydown", Se), () => {
      window.removeEventListener("keydown", Se);
    };
  }, we = [f, I, A, Se], e[30] = A, e[31] = I, e[32] = Se, e[33] = f, e[34] = Pe, e[35] = we) : (Pe = e[34], we = e[35]), gOr(Pe, we);
  let Ie;
  e[36] !== n || e[37] !== _e ? (Ie = typeof n == "function" ? n(_e) : n, e[36] = n, e[37] = _e, e[38] = Ie) : Ie = e[38];
  const Me = Ie, De = l ?? b, Ne = `translate3d(${V.x}px, ${V.y}px, 0) scale(${ve})`, be = J ? "none" : H;
  let je;
  e[39] !== fe || e[40] !== q.style || e[41] !== Ne || e[42] !== be ? (je = { ...q.style, transform: Ne, opacity: fe, transition: be }, e[39] = fe, e[40] = q.style, e[41] = Ne, e[42] = be, e[43] = je) : je = e[43];
  let $e;
  e[44] !== ce || e[45] !== ge || e[46] !== de || e[47] !== q.className || e[48] !== Me || e[49] !== je ? ($e = UWe("div", { className: q.className, style: je, onPointerDown: ce, onPointerMove: de, onPointerUp: ge, onPointerCancel: ge, children: Me }), e[44] = ce, e[45] = ge, e[46] = de, e[47] = q.className, e[48] = Me, e[49] = je, e[50] = $e) : $e = e[50];
  let Je;
  return e[51] !== _ || e[52] !== r || e[53] !== j || e[54] !== p || e[55] !== g || e[56] !== h || e[57] !== d || e[58] !== c || e[59] !== C || e[60] !== s || e[61] !== f || e[62] !== U || e[63] !== De || e[64] !== $e ? (Je = UWe(Xr, { open: f, onOpenChange: C, size: "fullscreen", animationSource: _, aspectRatio: De, closeOnBackdropClick: p, closeOnEscape: g, onAnimationComplete: c, "aria-label": r, onKeyDown: s, className: "ui-lightbox-popup-dialog", backdropClassName: "ui-lightbox-backdrop", backdropStylexStyles: Ghi, fullscreenTransition: U, fullscreenBackdropTransition: j, fullscreenViewportPadding: d, fullscreenMaxWidth: h, children: $e }), e[51] = _, e[52] = r, e[53] = j, e[54] = p, e[55] = g, e[56] = h, e[57] = d, e[58] = c, e[59] = C, e[60] = s, e[61] = f, e[62] = U, e[63] = De, e[64] = $e, e[65] = Je) : Je = e[65], Je;
}
function tyS(t) {
  const e = jWe(9);
  let n, i, r;
  e[0] !== t ? ({ children: n, style: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = $Ut(), e[4] = s) : s = e[4];
  const o = s;
  let a;
  return e[5] !== n || e[6] !== i || e[7] !== r ? (a = UWe(Xr.Title, { rootStyle: o.title, style: r, ...i, children: n }), e[5] = n, e[6] = i, e[7] = r, e[8] = a) : a = e[8], a;
}
function nyS(t) {
  const e = jWe(9);
  let n, i, r;
  e[0] !== t ? ({ children: n, style: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = $Ut(), e[4] = s) : s = e[4];
  const o = s;
  let a;
  return e[5] !== n || e[6] !== i || e[7] !== r ? (a = UWe(Xr.Description, { rootStyle: o.description, style: r, ...i, children: n }), e[5] = n, e[6] = i, e[7] = r, e[8] = a) : a = e[8], a;
}
function iyS(t) {
  const e = jWe(18);
  let n, i, r, s, o;
  e[0] !== t ? ({ children: o, className: n, onClick: i, style: s, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = o === void 0 ? "Close" : o, { close: l } = qhi("Lightbox.Close");
  let c;
  e[6] !== l || e[7] !== i ? (c = (g) => {
    i?.(g), !g.defaultPrevented && l();
  }, e[6] = l, e[7] = i, e[8] = c) : c = e[8];
  const u = c;
  let d;
  if (e[9] !== n || e[10] !== s) {
    const g = $Ut();
    d = ar({ rootClass: "ui-lightbox-close", stylexStyles: g.close, className: n, style: s }), e[9] = n, e[10] = s, e[11] = d;
  } else d = e[11];
  const h = d;
  let p;
  return e[12] !== a || e[13] !== h.className || e[14] !== h.style || e[15] !== u || e[16] !== r ? (p = UWe("button", { type: "button", className: h.className, style: h.style, onClick: u, ...r, children: a }), e[12] = a, e[13] = h.className, e[14] = h.style, e[15] = u, e[16] = r, e[17] = p) : p = e[17], p;
}
var Cpa, j1t, Tpa, Epa, TFh, EFh, AM, 