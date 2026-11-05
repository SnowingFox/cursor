// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DiscoverCard.js range:22824371..22832914
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.644Z
sQ1 = L({ "DiscoverCard.js"() {
  "use strict";
  E(), Mt(), J7(), hWm = { root: { k1xSpc: "cursor-ui-78zum5", kzQI83: "cursor-ui-1c4vz4f", kmuXW: "cursor-ui-2lah0s", kCS8Yb: "cursor-ui-5z4jtk", kXwgrk: "cursor-ui-1q0g3np", kGNEyG: "cursor-ui-1cy8zhl", kOIVth: "cursor-ui-1oot3zn", kLKAdn: "cursor-ui-1gkbk22", kpe85a: "cursor-ui-1yraood", kGO01o: "cursor-ui-1mdop1q", kE3dHu: "cursor-ui-1jpuwqu", kEafiO: "cursor-ui-178xt8z", kWqL5O: "cursor-ui-s1s249", kt9PQ7: "cursor-ui-so031l", kZ1KPB: "cursor-ui-e0pwq", kPef9Z: "cursor-ui-13fuv20", kSWEuD: "cursor-ui-32b0ac", kfdmCh: "cursor-ui-1q0q8m5", k4WBpm: "cursor-ui-19ypqd9", kLZC3w: "cursor-ui-1aeic0j", k26BEO: "cursor-ui-141kqco", kL6WhQ: "cursor-ui-17fyfba", kaZRDh: "cursor-ui-1arpupx", kaIpWk: "cursor-ui-1q4ynmn", kWkggS: "cursor-ui-1ua6jya cursor-ui-1iuyybk", kMwMTN: "cursor-ui-1wd3ewq", k9WMMc: "cursor-ui-dpxx8g", kkrTdU: "cursor-ui-1ypdohk", k5xd4v: "cursor-ui-1bhewko", k1ekBW: "cursor-ui-15406qy", kIyJzY: "cursor-ui-gdialr", kAMwcw: "cursor-ui-6ekqhr", k7Eaqz: "cursor-ui-euugli", kysU6D: "cursor-ui-jyslct", kMv6JI: "cursor-ui-jb2p0i", kGuDYH: "cursor-ui-1qlqyl8", kKX8nH: "cursor-ui-1t35e8", k63SB2: "cursor-ui-1pd3egz", kLWn49: "cursor-ui-15bjb6t", kMeerF: "cursor-ui-1k57tk5 cursor-ui-4xl6zf", k3XXqK: "cursor-ui-1t137rt cursor-ui-9v5kkp", kjBf7l: "cursor-ui-1uczgqu cursor-ui-1725o6r", kInvED: "cursor-ui-1wfwxd8 cursor-ui-13iak60", $$css: true } }, pWm = new Intl.NumberFormat(void 0, { notation: "compact", maximumFractionDigits: 1 });
} });
import { jsx as wIn, jsxs as oQ1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as aQ1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as lQ1, useState as mWm, useLayoutEffect as cQ1, useEffect as uQ1 } from "./react-runtime/react/esm-index-production.js";
function dQ1(t) {
  const e = aQ1(38), { plugins: n, installedPluginIdSet: i, installCountByPluginId: r, onPluginClick: s } = t, o = lQ1(null), [a, l] = mWm(false), [c, u] = mWm(false);
  let d;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = () => {
    const $ = o.current;
    if (!$) return;
    const H = $.scrollWidth - $.clientWidth;
    l($.scrollLeft > 1), u($.scrollLeft < H - 1);
  }, e[0] = d) : d = e[0];
  const h = d, p = n.length;
  let g;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = () => {
    h();
  }, e[1] = g) : g = e[1];
  let f;
  e[2] !== p ? (f = [h, p], e[2] = p, e[3] = f) : f = e[3], cQ1(g, f);
  let _, b;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = () => {
    const $ = o.current;
    if (!$) return;
    const H = () => h();
    $.addEventListener("scroll", H, { passive: true });
    const G = new ResizeObserver(() => h());
    return G.observe($), () => {
      $.removeEventListener("scroll", H), G.disconnect();
    };
  }, b = [h], e[4] = _, e[5] = b) : (_ = e[4], b = e[5]), uQ1(_, b);
  let y;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = ($) => {
    const H = o.current;
    if (!H) return;
    const G = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    H.scrollBy({ left: $ * H.clientWidth * gWm, behavior: G ? "auto" : "smooth" });
  }, e[6] = y) : y = e[6];
  const S = y;
  let k, C, T;
  if (e[7] !== a || e[8] !== c) {
    k = { 0: { className: "cursor-ui-1n2onr6 cursor-ui-h8yej3 cursor-ui-1cpjm7i cursor-ui-1hmns74 cursor-ui-1y3wzot cursor-ui-hq5o37 cursor-ui-1wlytlt cursor-ui-12maryy cursor-ui-jyez6j cursor-ui-kk1bqk cursor-ui-124lp2h cursor-ui-1de4urk cursor-ui-qfulrc cursor-ui-jnukix cursor-ui-i9wlq6 cursor-ui-1s928wv cursor-ui-1j6awrg cursor-ui-1m1drc7 cursor-ui-nbfe2x cursor-ui-1xrz1ek cursor-ui-itxdhh cursor-ui-2wmc1r cursor-ui-2q1x1w cursor-ui-mf22ne cursor-ui-1hbq0ec cursor-ui-1ikho1h cursor-ui-e7ju4t cursor-ui-1b45uga" }, 2: { className: "cursor-ui-1n2onr6 cursor-ui-h8yej3 cursor-ui-1cpjm7i cursor-ui-1hmns74 cursor-ui-1y3wzot cursor-ui-hq5o37 cursor-ui-1wlytlt cursor-ui-12maryy cursor-ui-jyez6j cursor-ui-kk1bqk cursor-ui-1de4urk cursor-ui-qfulrc cursor-ui-jnukix cursor-ui-i9wlq6 cursor-ui-1s928wv cursor-ui-1j6awrg cursor-ui-1m1drc7 cursor-ui-nbfe2x cursor-ui-1xrz1ek cursor-ui-itxdhh cursor-ui-2wmc1r cursor-ui-2q1x1w cursor-ui-mf22ne cursor-ui-1hbq0ec cursor-ui-1ikho1h cursor-ui-e7ju4t cursor-ui-1b45uga cursor-ui-fbg1o9" }, 1: { className: "cursor-ui-1n2onr6 cursor-ui-h8yej3 cursor-ui-1cpjm7i cursor-ui-1hmns74 cursor-ui-1y3wzot cursor-ui-hq5o37 cursor-ui-1wlytlt cursor-ui-12maryy cursor-ui-jyez6j cursor-ui-kk1bqk cursor-ui-124lp2h cursor-ui-1de4urk cursor-ui-qfulrc cursor-ui-jnukix cursor-ui-i9wlq6 cursor-ui-1s928wv cursor-ui-1j6awrg cursor-ui-1m1drc7 cursor-ui-nbfe2x cursor-ui-1xrz1ek cursor-ui-itxdhh cursor-ui-2wmc1r cursor-ui-2q1x1w cursor-ui-1hbq0ec cursor-ui-1ikho1h cursor-ui-e7ju4t cursor-ui-1b45uga cursor-ui-1rw2j67" }, 3: { className: "cursor-ui-1n2onr6 cursor-ui-h8yej3 cursor-ui-1cpjm7i cursor-ui-1hmns74 cursor-ui-1y3wzot cursor-ui-hq5o37 cursor-ui-1wlytlt cursor-ui-12maryy cursor-ui-jyez6j cursor-ui-kk1bqk cursor-ui-1de4urk cursor-ui-qfulrc cursor-ui-jnukix cursor-ui-i9wlq6 cursor-ui-1s928wv cursor-ui-1j6awrg cursor-ui-1m1drc7 cursor-ui-nbfe2x cursor-ui-1xrz1ek cursor-ui-itxdhh cursor-ui-2wmc1r cursor-ui-2q1x1w cursor-ui-1hbq0ec cursor-ui-1ikho1h cursor-ui-e7ju4t cursor-ui-1b45uga cursor-ui-fbg1o9 cursor-ui-1rw2j67" } }[!!a << 1 | !!c << 0];
    let $;
    e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-1oot3zn cursor-ui-w2csxc cursor-ui-10wlt62 cursor-ui-kcv6ua cursor-ui-g83hb1 cursor-ui-1di6z1p cursor-ui-1rohswg cursor-ui-fk6m8 cursor-ui-jx87ck cursor-ui-1yqm8si" }, e[12] = $) : $ = e[12], T = $, C = ri("ui-discover-row", a && "ui-discover-row--can-scroll-left", c && "ui-discover-row--can-scroll-right", k.className), e[7] = a, e[8] = c, e[9] = k, e[10] = C, e[11] = T;
  } else k = e[9], C = e[10], T = e[11];
  const I = k.style, A = T.className;
  let P;
  e[13] !== T.style ? (P = { ...T.style, scrollbarWidth: "none" }, e[13] = T.style, e[14] = P) : P = e[14];
  let M;
  if (e[15] !== r || e[16] !== i || e[17] !== s || e[18] !== n) {
    let $;
    e[20] !== r || e[21] !== i || e[22] !== s ? ($ = (H) => wIn(rQ1, { plugin: H, installed: i.has(H.id), installCount: r?.get(H.id), onClick: s ? () => s(H) : void 0 }, H.id), e[20] = r, e[21] = i, e[22] = s, e[23] = $) : $ = e[23], M = n.map($), e[15] = r, e[16] = i, e[17] = s, e[18] = n, e[19] = M;
  } else M = e[19];
  let O;
  e[24] !== P || e[25] !== M || e[26] !== T.className ? (O = wIn("div", { ref: o, className: A, style: P, children: M }), e[24] = P, e[25] = M, e[26] = T.className, e[27] = O) : O = e[27];
  let N;
  e[28] !== a ? (N = a && wIn("div", { className: "cursor-ui-10l6tqk cursor-ui-wa60dl cursor-ui-htitgo cursor-ui-78zum5 cursor-ui-1cb1t30 cursor-ui-ud0vyx", children: wIn(ho, { icon: "chevron-left", rounded: true, variant: "secondary", size: "md", iconSize: "base", "aria-label": "Scroll left", className: "cursor-ui-f1vpex cursor-ui-1kj6vsg cursor-ui-178xt8z cursor-ui-1lun4ml cursor-ui-so031l cursor-ui-pilrb4 cursor-ui-13fuv20 cursor-ui-18b5jzi cursor-ui-1q0q8m5 cursor-ui-1t7ytsu cursor-ui-1aeic0j cursor-ui-5q6521 cursor-ui-17fyfba cursor-ui-4n2izg cursor-ui-gv0goc cursor-ui-e8b6fs cursor-ui-1i4c3av cursor-ui-1wd3ewq", onMouseDown: pQ1, onClick: () => S(-1) }) }), e[28] = a, e[29] = N) : N = e[29];
  let U;
  e[30] !== c ? (U = c && wIn("div", { className: "cursor-ui-10l6tqk cursor-ui-wa60dl cursor-ui-htitgo cursor-ui-78zum5 cursor-ui-1cb1t30 cursor-ui-1s3hisn", children: wIn(ho, { icon: "chevron-right", rounded: true, variant: "secondary", size: "md", iconSize: "base", "aria-label": "Scroll right", className: "cursor-ui-f1vpex cursor-ui-1kj6vsg cursor-ui-178xt8z cursor-ui-1lun4ml cursor-ui-so031l cursor-ui-pilrb4 cursor-ui-13fuv20 cursor-ui-18b5jzi cursor-ui-1q0q8m5 cursor-ui-1t7ytsu cursor-ui-1aeic0j cursor-ui-5q6521 cursor-ui-17fyfba cursor-ui-4n2izg cursor-ui-gv0goc cursor-ui-e8b6fs cursor-ui-1i4c3av cursor-ui-1wd3ewq", onMouseDown: hQ1, onClick: () => S(1) }) }), e[30] = c, e[31] = U) : U = e[31];
  let j;
  return e[32] !== k.style || e[33] !== O || e[34] !== N || e[35] !== U || e[36] !== C ? (j = oQ1("div", { className: C, style: I, children: [O, N, U] }), e[32] = k.style, e[33] = O, e[34] = N, e[35] = U, e[36] = C, e[37] = j) : j = e[37], j;
}
function hQ1(t) {
  return t.preventDefault();
}
function pQ1(t) {
  return t.preventDefault();
}
var gWm, 