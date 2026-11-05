// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Progress.js range:15566779..15571298
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.909Z
Rkt = L({ "Progress.js"() {
  "use strict";
  E(), xOS(), TYh(), ypi(), Yg = MOS(function(e, n) {
    const i = POS(9);
    switch (e.variant) {
      case "bar": {
        let r;
        return i[0] !== e || i[1] !== n ? (r = Fya(IOS, { ...e, ref: n }), i[0] = e, i[1] = n, i[2] = r) : r = i[2], r;
      }
      case "pie": {
        let r;
        return i[3] !== e || i[4] !== n ? (r = Fya(ROS, { ...e, ref: n }), i[3] = e, i[4] = n, i[5] = r) : r = i[5], r;
      }
      case "ring":
      case void 0: {
        let r;
        return i[6] !== e || i[7] !== n ? (r = Fya(ewS, { ...e, ref: n }), i[6] = e, i[7] = n, i[8] = r) : r = i[8], r;
      }
      default:
        return e;
    }
  });
} });
import { jsx as hrt, jsxs as z6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as DOS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function EYh(t, e) {
  t.stopPropagation(), e?.();
}
function NOS(t, e) {
  return t && e ? `${t} on ${e}` : t ?? e;
}
function LOS(t, e, n) {
  switch (t) {
    case "failed":
      return "GitHub connection failed";
    case "skipped":
      return "Skipped connecting GitHub";
    case "connecting":
      return e ? `Connecting GitHub for ${e}...` : "Connecting GitHub...";
    case "connected":
      return n ? "GitHub is already connected" : "GitHub is connected";
    case "canceled":
      return "Canceled connecting GitHub";
    case "pending":
      return e ? `Connect GitHub for ${e}` : "Connect GitHub";
    default:
      return t;
  }
}
function OOS(t, e, n, i) {
  return t === "failed" ? i ? `Couldn't connect GitHub: ${i}` : "Couldn't connect GitHub" : e && n ? `Connect GitHub for ${e} on ${n} so the agent can review pull requests and access the requested repository.` : e ? `Connect GitHub for ${e} so the agent can review pull requests and access the requested repository.` : n ? `Connect GitHub for ${n} so the agent can review pull requests and access repositories available through that GitHub Enterprise application.` : IYh;
}
function Bya(t) {
  const e = DOS(42), { state: n, githubRepo: i, gheApplication: r, alreadyConnected: s, failureReason: o, onSkip: a, onConnect: l } = t, c = s === void 0 ? false : s, u = n === "connecting", d = n === "pending" || u || n === "failed", h = (n === "pending" || n === "connecting") && l != null;
  let p, g, f, _, b, y, S, k;
  if (e[0] !== c || e[1] !== r || e[2] !== i || e[3] !== h || e[4] !== n) {
    const O = NOS(i, r);
    _ = uh.Root, f = uh.Header, y = "flat", S = !h, e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = hrt(uh.HeaderLeading, { children: hrt(uh.HeaderIcon, { color: "primary", children: hrt(One, { "aria-hidden": true, name: "github", size: "sm", glyphSize: 13 }) }) }), e[13] = k) : k = e[13], g = uh.HeaderContent, p = uh.HeaderTitle, b = LOS(n, O, c), e[0] = c, e[1] = r, e[2] = i, e[3] = h, e[4] = n, e[5] = p, e[6] = g, e[7] = f, e[8] = _, e[9] = b, e[10] = y, e[11] = S, e[12] = k;
  } else p = e[5], g = e[6], f = e[7], _ = e[8], b = e[9], y = e[10], S = e[11], k = e[12];
  let C;
  e[14] !== p || e[15] !== b ? (C = hrt(p, { children: b }), e[14] = p, e[15] = b, e[16] = C) : C = e[16];
  let T;
  e[17] !== o || e[18] !== r || e[19] !== i || e[20] !== d || e[21] !== n ? (T = d ? hrt(uh.HeaderDescription, { lineClamp: 2, children: OOS(n, i, r, o) }) : null, e[17] = o, e[18] = r, e[19] = i, e[20] = d, e[21] = n, e[22] = T) : T = e[22];
  let I;
  e[23] !== g || e[24] !== C || e[25] !== T ? (I = z6r(g, { children: [C, T] }), e[23] = g, e[24] = C, e[25] = T, e[26] = I) : I = e[26];
  let A;
  e[27] !== f || e[28] !== y || e[29] !== S || e[30] !== k || e[31] !== I ? (A = z6r(f, { variant: y, paddingBottom: S, children: [k, I] }), e[27] = f, e[28] = y, e[29] = S, e[30] = k, e[31] = I, e[32] = A) : A = e[32];
  let P;
  e[33] !== u || e[34] !== l || e[35] !== a || e[36] !== h ? (P = h ? hrt(uh.Footer, { secondaryAction: a ? hrt(An, { onClick: (O) => EYh(O, a), children: "Skip" }) : void 0, primaryAction: hrt(An, { variant: "primary", onClick: (O) => EYh(O, l), children: u ? z6r("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-11twubx", children: [hrt(Yg, { variant: "ring", indeterminate: true, size: "sm" }), "Connecting..."] }) : "Connect GitHub" }) }) : null, e[33] = u, e[34] = l, e[35] = a, e[36] = h, e[37] = P) : P = e[37];
  let M;
  return e[38] !== _ || e[39] !== P || e[40] !== A ? (M = z6r(_, { children: [A, P] }), e[38] = _, e[39] = P, e[40] = A, e[41] = M) : M = e[41], M;
}
var IYh, 