// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PreviewCard.js range:6380157..6382515
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.891Z
YSt = L({ "PreviewCard.js"() {
  "use strict";
  E(), Va(), oWe(), E_e(), mf(), yhe(), She(), MPr(), Ooe(), whh(), Thh(), f2(), Yvn(), pB(), bhh(), _hh(), hhh(), QPr = { base: { kVAEAm: "ui-1n2onr6", kfSwDN: "ui-1hx0egp", kfzvcC: "ui-67bb7w", $$css: true }, width: (t) => [{ kzqmXN: t != null ? "ui-5lhr3w" : t, $$css: true }, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t) }], maxWidth: (t) => [{ ks0D6T: t != null ? "ui-f68679" : t, $$css: true }, { "--x-maxWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t) }] }, kph = { base: { kB7OPa: "ui-9f619", $$css: true } };
} });
import { jsx as Ona } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as QGy } from "./react-runtime/react/esm-compiler-runtime-production.js";
function M7t(t) {
  const e = QGy(26), { children: n, content: i, contentKey: r, disabled: s, openDelay: o, closeDelay: a, interactive: l, surfaceStyle: c } = t, u = s === void 0 ? false : s, d = o === void 0 ? 0 : o, h = a === void 0 ? 0 : a, p = l === void 0 ? true : l;
  if (wna() != null) {
    let S;
    return e[0] !== n || e[1] !== h || e[2] !== i || e[3] !== r || e[4] !== u || e[5] !== d || e[6] !== c ? (S = Ona(Phh, { closeDelay: h, content: i, contentKey: r, disabled: u, openDelay: d, surfaceStyle: c, children: n }), e[0] = n, e[1] = h, e[2] = i, e[3] = r, e[4] = u, e[5] = d, e[6] = c, e[7] = S) : S = e[7], S;
  }
  if (!p) {
    let S;
    return e[8] !== n || e[9] !== h || e[10] !== i || e[11] !== u || e[12] !== d ? (S = Ona(xs, { closeDelay: h, content: i, disabled: u, offset: 6, openDelay: d, placement: "right", sameAxisOnly: true, children: n }), e[8] = n, e[9] = h, e[10] = i, e[11] = u, e[12] = d, e[13] = S) : S = e[13], S;
  }
  let f;
  e[14] !== h ? (f = kna(h), e[14] = h, e[15] = f) : f = e[15];
  let _;
  e[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = ita(), e[16] = _) : _ = e[16];
  let b;
  e[17] !== c ? (b = [_, c], e[17] = c, e[18] = b) : b = e[18];
  let y;
  return e[19] !== n || e[20] !== i || e[21] !== u || e[22] !== d || e[23] !== f || e[24] !== b ? (y = Ona(mB, { closeDelay: f, content: i, disabled: u, offset: 6, openDelay: d, placement: "right", sameAxisOnly: true, surfaceStyle: b, children: n }), e[19] = n, e[20] = i, e[21] = u, e[22] = d, e[23] = f, e[24] = b, e[25] = y) : y = e[25], y;
}
