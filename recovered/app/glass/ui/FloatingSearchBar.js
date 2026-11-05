// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FloatingSearchBar.js range:16405112..16411427
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.688Z
ZqS = L({ "FloatingSearchBar.js"() {
  "use strict";
  E(), Va(), mf(), qu(), fd(), twt(), hL(), Q3(), Efi = { base: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-5cdhqx", kB7OPa: "ui-9f619", kzqmXN: "ui-h8yej3", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-at24cr", koQZXg: "ui-j3b58b", $$css: true }, sizeMd: { kZKoxP: "ui-eojmab", kpe85a: "ui-g31tg3", kE3dHu: "ui-o7x2bt", $$css: true }, sizeLg: { kZKoxP: "ui-f2gx5w", kpe85a: "ui-1yxiud8", kE3dHu: "ui-1jpuwqu", $$css: true }, variantFloating: { kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kLZC3w: "ui-1aeic0j", kWqL5O: "ui-s1s249", kSWEuD: "ui-32b0ac", k26BEO: "ui-141kqco", kt9PQ7: "ui-so031l", kfdmCh: "ui-1q0q8m5", kL6WhQ: "ui-17fyfba", kZ1KPB: "ui-e0pwq", k4WBpm: "ui-19ypqd9", kaZRDh: "ui-1arpupx", kaIpWk: "ui-1m7fhj7", kWkggS: "ui-f1vpex", kGVxlE: "ui-14cu5b6", $$css: true } }, Gsp = { base: { kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-1r8uery", k7Eaqz: "ui-euugli", koQZXg: "ui-dpwr4b", $$css: true } }, qsp = { base: { kLKAdn: "ui-exx8yu", kpe85a: "ui-1yxiud8", kGO01o: "ui-18d9i69", kE3dHu: "ui-yab65l", kMwMTN: "ui-4b2ntj", kGuDYH: "ui-1wm8ruf", khDVqt: "ui-uxw1ft", kmuXW: "ui-2lah0s", $$css: true } }, zsp = { base: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", $$css: true } };
} });
import { jsx as Ifi, jsxs as QqS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Vsp } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as p0a, useState as xfi, useEffect as m0a, memo as JqS } from "./react-runtime/react/esm-index-production.js";
function ezS(t) {
  const e = Vsp(45), { videoUrl: n, isActive: i, loop: r, onError: s, title: o } = t, a = p0a(null), [l, c] = xfi(0), [u, d] = xfi(0), [h, p] = xfi(false), [g, f] = xfi(1), [_, b] = xfi(Dpa), y = p0a(null), S = p0a(0);
  let k;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = (pe) => {
    S.current = pe, d(pe);
  }, e[0] = k) : k = e[0];
  const C = k;
  let T;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = (pe) => {
    (!(y.current?.(pe) ?? false) || Math.abs(pe - S.current) >= 1) && C(pe);
  }, e[1] = T) : T = e[1];
  const I = T;
  let A;
  e[2] !== g ? (A = () => {
    const pe = a.current;
    pe && (c(pe.duration), C(pe.currentTime), pe.playbackRate = g);
  }, e[2] = g, e[3] = A) : A = e[3];
  const P = A;
  let M;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (M = () => {
    const pe = a.current;
    pe && I(pe.currentTime);
  }, e[4] = M) : M = e[4];
  const O = M;
  let N;
  e[5] !== i ? (N = () => {
    const pe = a.current;
    !pe || !i || (pe.paused ? (pe.ended && (pe.currentTime = 0, C(0)), pe.play().catch(() => {
      p(!pe.paused);
    })) : pe.pause());
  }, e[5] = i, e[6] = N) : N = e[6];
  const U = N;
  let j;
  e[7] !== l ? (j = (pe) => {
    const ve = a.current;
    if (!ve) return;
    const fe = Math.min(Math.max(pe, 0), l);
    ve.currentTime = fe, C(fe);
  }, e[7] = l, e[8] = j) : j = e[8];
  const $ = j;
  let H;
  e[9] !== _ ? (H = () => {
    Npa(!_), b(!_);
  }, e[9] = _, e[10] = H) : H = e[10];
  const G = H;
  let q;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = (pe) => {
    f(pe), a.current && (a.current.playbackRate = pe);
  }, e[11] = q) : q = e[11];
  const K = q;
  let V;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (V = () => {
    a.current && C(a.current.currentTime), p(true);
  }, e[12] = V) : V = e[12];
  const Y = V;
  let J;
  e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (J = () => {
    a.current && C(a.current.currentTime), p(false);
  }, e[13] = J) : J = e[13];
  const Q = J;
  let te, ee;
  e[14] !== i ? (te = () => {
    i || a.current?.pause();
  }, ee = [i], e[14] = i, e[15] = te, e[16] = ee) : (te = e[15], ee = e[16]), m0a(te, ee);
  let re, ie;
  e[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (re = () => {
    const pe = a.current;
    return () => pe?.pause();
  }, ie = [], e[17] = re, e[18] = ie) : (re = e[17], ie = e[18]), m0a(re, ie);
  let oe, se;
  e[19] !== h ? (oe = () => {
    if (!h) return;
    let pe;
    const ve = () => {
      a.current && I(a.current.currentTime), pe = window.requestAnimationFrame(ve);
    };
    return pe = window.requestAnimationFrame(ve), () => {
      pe !== void 0 && window.cancelAnimationFrame(pe);
    };
  }, se = [h, I], e[19] = h, e[20] = oe, e[21] = se) : (oe = e[20], se = e[21]), m0a(oe, se);
  const le = o ?? "Video player";
  let ce;
  e[22] !== P || e[23] !== _ || e[24] !== r || e[25] !== s || e[26] !== n ? (ce = Ifi("video", { loop: r, muted: _, onEnded: Q, onError: s, onLoadedMetadata: P, onPause: Q, onPlay: Y, onTimeUpdate: O, playsInline: true, preload: "metadata", ref: a, src: n, className: "ui-1lliihq ui-193iq5w ui-mz0i5r ui-14atkfc ui-t7dq6l ui-ack27t ui-8x9d4c ui-19kjcj4" }), e[22] = P, e[23] = _, e[24] = r, e[25] = s, e[26] = n, e[27] = ce) : ce = e[27];
  const ae = h ? "Pause video" : "Play video";
  let de;
  e[28] !== U || e[29] !== ae ? (de = Ifi("button", { "aria-label": ae, onClick: U, type: "button", className: "ui-10l6tqk ui-10a8y8t ui-h8yej3 ui-5yr21d ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-972fbf ui-gfja2r ui-1qhh985 ui-yj58a3 ui-jbqb8w ui-1ypdohk" }), e[28] = U, e[29] = ae, e[30] = de) : de = e[30];
  let he;
  e[31] !== u || e[32] !== l || e[33] !== U || e[34] !== $ || e[35] !== G || e[36] !== _ || e[37] !== h || e[38] !== g ? (he = Ifi("div", { className: "ui-10l6tqk ui-10a8y8t ui-47corl", children: Ifi(vOr, { currentTime: u, duration: l, frameWriterRef: y, isPlaying: h, isVisible: true, onPlayPause: U, onSeek: $, onSpeedChange: K, isMuted: _, onToggleMute: G, playbackSpeed: g }) }), e[31] = u, e[32] = l, e[33] = U, e[34] = $, e[35] = G, e[36] = _, e[37] = h, e[38] = g, e[39] = he) : he = e[39];
  let ge;
  return e[40] !== le || e[41] !== ce || e[42] !== de || e[43] !== he ? (ge = QqS("section", { "aria-label": le, "data-component": "inline-video-viewer", className: "ui-1n2onr6 ui-1rg5ohu ui-193iq5w ui-mz0i5r ui-l5c6n8 ui-b3r6kr ui-1m7fhj7 ui-42x0ya ui-14ju556", children: [ce, de, he] }), e[40] = le, e[41] = ce, e[42] = de, e[43] = he, e[44] = ge) : ge = e[44], ge;
}
var g0a, 