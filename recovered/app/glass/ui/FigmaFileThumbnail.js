// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FigmaFileThumbnail.js range:17175852..17178533
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.673Z
Dr1 = L({ "FigmaFileThumbnail.js"() {
  "use strict";
  E(), Va(), sgp = { kVAEAm: "ui-10l6tqk", k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", $$css: true }, ogp = { kzqmXN: "ui-5lhr3w", $$css: true }, M2e = { figmaFrame: (t, e, n, i) => [sgp, { kbCHJM: t != null ? "ui-gq9j65" : t, k87sOh: e != null ? "ui-jbys53" : e, kzqmXN: n != null ? "ui-5lhr3w" : n, kZKoxP: i != null ? "ui-16ye13r" : i, $$css: true }, { "--x-left": ((r) => typeof r == "number" ? r + "px" : r ?? void 0)(t), "--x-top": ((r) => typeof r == "number" ? r + "px" : r ?? void 0)(e), "--x-width": ((r) => typeof r == "number" ? r + "px" : r ?? void 0)(n), "--x-height": ((r) => typeof r == "number" ? r + "px" : r ?? void 0)(i) }], figmaBarMuted: { kZKoxP: "ui-uoj239", kaIpWk: "ui-1i4c3av", kWkggS: "ui-1qmjd7y", $$css: true }, figmaBarSoft: { kZKoxP: "ui-uoj239", kaIpWk: "ui-1i4c3av", kWkggS: "ui-1m4ooaa", $$css: true }, figmaBarWidth: (t) => [ogp, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(`${t}%`) }] };
} });
import { jsx as agp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Nr1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as Lr1, useState as Or1, useLayoutEffect as Fr1 } from "./react-runtime/react/esm-index-production.js";
function wvi(t) {
  const e = Nr1(13), { children: n, inset: i, surface: r } = t, s = i === void 0 ? ugp : i, o = r === void 0 ? "card" : r, a = Lr1(null), [l, c] = Or1(0.3);
  let u, d;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = () => {
    const b = a.current;
    if (b === null) return;
    const y = () => {
      b.clientWidth > 0 && c(b.clientWidth / cgp);
    }, S = new ResizeObserver(y);
    return S.observe(b), y(), () => S.disconnect();
  }, d = [], e[0] = u, e[1] = d) : (u = e[0], d = e[1]), Fr1(u, d);
  let h;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (h = { 0: { className: "ui-10l6tqk ui-13vifvy ui-3m8u43 ui-1ey2m1c ui-u96u03 ui-6ikm8r ui-10wlt62 ui-cq4si4" }, 1: { className: "ui-10l6tqk ui-13vifvy ui-3m8u43 ui-1ey2m1c ui-u96u03 ui-6ikm8r ui-10wlt62 ui-jbqb8w" } }, e[2] = h) : h = e[2];
  const p = h[(o === "transparent") << 0];
  let g;
  e[3] !== s || e[4] !== l ? (g = gn(dgp.page(l, s)), e[3] = s, e[4] = l, e[5] = g) : g = e[5];
  let f;
  e[6] !== n || e[7] !== g ? (f = agp("div", { ...g, children: n }), e[6] = n, e[7] = g, e[8] = f) : f = e[8];
  let _;
  return e[9] !== o || e[10] !== p || e[11] !== f ? (_ = agp("div", { ref: a, "data-component": "scaled-preview", "data-surface": o, ...p, children: f }), e[9] = o, e[10] = p, e[11] = f, e[12] = _) : _ = e[12], _;
}
var lgp, cgp, ugp, dgp, 