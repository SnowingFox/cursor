// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BackgroundNudge.js range:15052433..15057249
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.501Z
dHh = L({ "BackgroundNudge.js"() {
  "use strict";
  E(), J$h(), qu(), WFe = { stack: { k1xSpc: "ui-ufnvkl", k7Eaqz: "ui-euugli", kzqmXN: "ui-h8yej3", kVAEAm: "ui-1n2onr6", $$css: true }, stackWithTab: { kHBbk8: "ui-c8icb0", "--ui-background-nudge-tab-block-height": "ui-1vmouhm", $$css: true }, shell: { k7Eaqz: "ui-euugli", $$css: true }, shellWithTab: { kVAEAm: "ui-1n2onr6", kY2c9j: "ui-1vjfegm", $$css: true }, tabGap: { kAzted: "ui-fdmdrd", kzqmXN: "ui-h8yej3", kfzvcC: "ui-47corl", $$css: true }, root: { kVAEAm: "ui-10l6tqk", k87sOh: "ui-13vifvy", kCIrl2: "ui-3m8u43", krVfgx: "ui-1ey2m1c", kbCHJM: "ui-u96u03", kY2c9j: "ui-1ja2u2z", kB7OPa: "ui-9f619", k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kMv6JI: "ui-1acoasx", kGuDYH: "ui-1wm8ruf", kLWn49: "ui-x6cpbe", kb6lSQ: "ui-12oo3zp", kMwMTN: "ui-4b2ntj", kWkggS: "ui-jbqb8w", kEafiO: "ui-972fbf", kPef9Z: "ui-1ejq31n", kWqL5O: "ui-gfja2r", kSWEuD: "ui-11pwa6s", kt9PQ7: "ui-1qhh985", kfdmCh: "ui-1sy0etr", kZ1KPB: "ui-yj58a3", k4WBpm: "ui-1b16gh4", kaIpWk: "ui-2u8bby", kfzvcC: "ui-47corl", kfSwDN: "ui-87ps6o", $$css: true }, inner: { kB7OPa: "ui-9f619", kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-dl72j9", kAzted: "ui-fdmdrd", k7Eaqz: "ui-euugli", kzqmXN: "ui-h8yej3", k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kjj79g: "ui-13a6bvl", kfzvcC: "ui-67bb7w", kWkggS: "ui-1fmjivh", kaIpWk: "ui-6iuazf", $$css: true }, row: { kB7OPa: "ui-9f619", k1xSpc: "ui-78zum5", kXwgrk: "ui-1q0g3np", kwnvtZ: "ui-1a02dak", kGNEyG: "ui-6s0dn4", kfiyM8: "ui-c26acl", k1C7PZ: "ui-17wnvr4", kAzted: "ui-fdmdrd", kzqmXN: "ui-h8yej3", kg3NbH: "ui-negsyr", $$css: true }, text: { kMwMTN: "ui-4b2ntj", $$css: true }, button: { kysU6D: "ui-jyslct", kWkggS: "ui-jbqb8w", kEafiO: "ui-972fbf", kPef9Z: "ui-1ejq31n", kWqL5O: "ui-gfja2r", kSWEuD: "ui-11pwa6s", kt9PQ7: "ui-1qhh985", kfdmCh: "ui-1sy0etr", kZ1KPB: "ui-yj58a3", k4WBpm: "ui-1b16gh4", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", keoZOQ: "ui-dj266r", km5ZXQ: "ui-1yf7rl7", k1K539: "ui-at24cr", koQZXg: "ui-j3b58b", kMv6JI: "ui-jb2p0i", kGuDYH: "ui-1qlqyl8", k63SB2: "ui-1pd3egz", kLWn49: "ui-15bjb6t", kMwMTN: "ui-19aaqeu ui-7gh5u8", kkrTdU: "ui-1ypdohk", kMnn75: "ui-krqix3", kXLuUW: "ui-11njtxf", kMeerF: "ui-1k57tk5 ui-4xl6zf", k3XXqK: "ui-1t137rt ui-9v5kkp", kjBf7l: "ui-1uczgqu ui-88thiw", kInvED: "ui-1wfwxd8 ui-13iak60", kaIpWk: "ui-2u8bby ui-1f4ar3y", $$css: true } };
} });
import { c as xxS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as Jpi, useEffect as hHh } from "./react-runtime/react/esm-index-production.js";
function emi(t) {
  const e = xxS(20);
  let n;
  e[0] !== t ? (n = t === void 0 ? {} : t, e[0] = t, e[1] = n) : n = e[1];
  const { rootMargin: i, defaultRoot: r } = n, s = Jpi(r), o = Jpi(r), a = Jpi(null);
  let l;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = /* @__PURE__ */ new Map(), e[2] = l) : l = e[2];
  const c = Jpi(l);
  let u;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = /* @__PURE__ */ new Set(), e[3] = u) : u = e[3];
  const d = Jpi(u);
  let h;
  e[4] !== i ? (h = () => {
    a.current?.disconnect(), a.current = null;
    const P = s.current;
    if (P === void 0) return;
    const M = new IntersectionObserver((O) => {
      if (a.current === M) for (const N of O) {
        if (P !== null && N.rootBounds !== null && (N.rootBounds.width === 0 || N.rootBounds.height === 0)) continue;
        c.current.get(N.target)?.(N);
      }
    }, { root: P ?? null, rootMargin: i, threshold: 0 });
    a.current = M;
    for (const O of d.current) M.observe(O);
  }, e[4] = i, e[5] = h) : h = e[5];
  const p = h;
  let g;
  e[6] !== p ? (g = (P) => {
    s.current !== P && (s.current = P, p());
  }, e[6] = p, e[7] = g) : g = e[7];
  const f = g;
  let _;
  e[8] !== p ? (_ = (P, M) => (c.current.set(P, M), d.current.add(P), a.current === null && s.current !== void 0 && p(), a.current?.observe(P), () => {
    c.current.delete(P), d.current.delete(P), a.current?.unobserve(P);
  }), e[8] = p, e[9] = _) : _ = e[9];
  const b = _;
  let y, S;
  e[10] !== p ? (y = () => {
    p();
  }, S = [p], e[10] = p, e[11] = y, e[12] = S) : (y = e[11], S = e[12]), hHh(y, S);
  let k, C;
  e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = () => {
    const P = c.current, M = d.current;
    return () => {
      a.current?.disconnect(), a.current = null, P.clear(), M.clear(), s.current = o.current;
    };
  }, k = [], e[13] = k, e[14] = C) : (k = e[13], C = e[14]), hHh(C, k);
  let T;
  e[15] !== b ? (T = { observe: b }, e[15] = b, e[16] = T) : T = e[16];
  const I = T;
  let A;
  return e[17] !== I || e[18] !== f ? (A = { intersectionObserver: I, setRootRef: f }, e[17] = I, e[18] = f, e[19] = A) : A = e[19], A;
}
