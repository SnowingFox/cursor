// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FeedbackForm.js range:16342323..16346952
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.663Z
YGS = L({ "FeedbackForm.js"() {
  "use strict";
  E(), joe(), Nhe(), dy(), mf(), WRe(), g$t(), I9r(), P0(), Ywa = BGS(void 0), Sfi = "none", hsp = [], kfi = { Root: zGS, Categories: KGS, CategoryGroups: dsp };
} });
import { jsx as v$t, jsxs as wfi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as XGS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ZGS({ clickable: t }) {
  return { root: [Xwa.base, t ? Xwa.clickable : null], icon: psp.base, providerIconWrapper: Zwa.wrapper, providerIconLabel: Zwa.label, info: msp.base, renameArrow: pkn.renameArrow, filename: [pkn.base, pkn.filename], path: [pkn.base, pkn.path], stats: mkn.base, statAdded: [mkn.stat, mkn.added], statDeleted: [mkn.stat, mkn.deleted] };
}
function QGS(t) {
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.substring(0, e + 1);
}
function JGS(t) {
  return t.split("/").pop() || t;
}
function eqS(t) {
  const e = XGS(49), { path: n, fileName: i, additions: r, deletions: s, previousPath: o, iconProvider: a, onClick: l } = t;
  let c;
  e[0] !== n || e[1] !== i ? (c = i ?? JGS(n), e[0] = n, e[1] = i, e[2] = c) : c = e[2];
  const u = c;
  let d;
  e[3] !== n ? (d = QGS(n), e[3] = n, e[4] = d) : d = e[4];
  const h = d, p = !!o, g = p ? `${o} → ${n}` : void 0;
  let f;
  e: {
    if (a) {
      let q;
      e[5] !== a || e[6] !== n ? (q = a(n), e[5] = a, e[6] = n, e[7] = q) : q = e[7];
      const K = q;
      if (K && K.length > 0) {
        f = K;
        break e;
      }
    }
    f = void 0;
  }
  const _ = f, b = (r ?? 0) > 0, y = (s ?? 0) > 0;
  let S, k, C, T, I, A, P, M, O, N, U, j, $;
  if (e[8] !== r || e[9] !== s || e[10] !== h || e[11] !== u || e[12] !== b || e[13] !== y || e[14] !== p || e[15] !== l || e[16] !== _ || e[17] !== g) {
    const q = ZGS({ clickable: !!l }), K = ar({ rootClass: "ui-file-header", stylexStyles: q.root, className: ri(l && "ui-file-header--clickable") }), V = gn(q.icon), Y = gn(q.providerIconWrapper), J = gn(q.providerIconLabel), Q = gn(q.info), te = gn(q.renameArrow), ee = gn(q.filename), re = gn(q.path), ie = gn(q.stats), oe = gn(q.statAdded), se = gn(q.statDeleted);
    let le;
    e[31] !== l ? (le = l ? (ae) => {
      (ae.key === "Enter" || ae.key === " ") && (ae.preventDefault(), l(ae));
    } : void 0, e[31] = l, e[32] = le) : le = e[32];
    const ce = le;
    S = K.className, k = K.style, C = l ? "button" : void 0, T = l ? 0 : void 0, I = l, A = ce, P = v$t("span", { className: ri("ui-file-header__icon", V.className), style: V.style, children: _ ? v$t("span", { className: ri("show-file-icons", Y.className), style: Y.style, children: v$t("span", { className: ri("monaco-icon-label", ..._, J.className), style: J.style }) }) : v$t(W5, { name: u }) }), M = ri("ui-file-header__info", Q.className), O = Q.style, N = p && v$t("span", { className: ri("ui-file-header__rename-arrow", te.className), style: te.style, title: g, children: "→" }), U = v$t("span", { className: ri("ui-file-header__filename", ee.className), style: ee.style, children: u }), j = h && v$t("span", { className: ri("ui-file-header__path", re.className), style: re.style, children: h }), $ = (b || y) && wfi("span", { className: ri("ui-file-header__stats", ie.className), style: ie.style, children: [b && wfi("span", { className: ri("ui-file-header__stat ui-file-header__stat--added", oe.className), style: oe.style, children: ["+", r] }), y && wfi("span", { className: ri("ui-file-header__stat ui-file-header__stat--deleted", se.className), style: se.style, children: ["-", s] })] }), e[8] = r, e[9] = s, e[10] = h, e[11] = u, e[12] = b, e[13] = y, e[14] = p, e[15] = l, e[16] = _, e[17] = g, e[18] = S, e[19] = k, e[20] = C, e[21] = T, e[22] = I, e[23] = A, e[24] = P, e[25] = M, e[26] = O, e[27] = N, e[28] = U, e[29] = j, e[30] = $;
  } else S = e[18], k = e[19], C = e[20], T = e[21], I = e[22], A = e[23], P = e[24], M = e[25], O = e[26], N = e[27], U = e[28], j = e[29], $ = e[30];
  let H;
  e[33] !== M || e[34] !== O || e[35] !== N || e[36] !== U || e[37] !== j || e[38] !== $ ? (H = wfi("span", { className: M, style: O, children: [N, U, j, $] }), e[33] = M, e[34] = O, e[35] = N, e[36] = U, e[37] = j, e[38] = $, e[39] = H) : H = e[39];
  let G;
  return e[40] !== S || e[41] !== k || e[42] !== C || e[43] !== T || e[44] !== I || e[45] !== A || e[46] !== P || e[47] !== H ? (G = wfi("div", { className: S, style: k, role: C, tabIndex: T, onClick: I, onKeyDown: A, children: [P, H] }), e[40] = S, e[41] = k, e[42] = C, e[43] = T, e[44] = I, e[45] = A, e[46] = P, e[47] = H, e[48] = G) : G = e[48], G;
}
var Xwa, psp, Zwa, msp, pkn, mkn, 