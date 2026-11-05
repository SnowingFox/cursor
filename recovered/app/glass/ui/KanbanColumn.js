// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: KanbanColumn.js range:14806928..14810753
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.767Z
D0S = L({ "KanbanColumn.js"() {
  "use strict";
  E(), Va(), git(), Jci(), $ga(), n0S(), rkt(), dy(), f2(), D5r(), fd(), CSn = { column: { k1xSpc: "ui-78zum5", kAzted: "ui-2lwn1j", k7Eaqz: "ui-12rczxh", kzQI83: "ui-1c4vz4f", kmuXW: "ui-2lah0s", kXwgrk: "ui-dt5ytf", km5ZXQ: "ui-1yf7rl7", k5xd4v: "ui-1bhewko", $$css: true }, columnBasis: (t) => [{ kCS8Yb: t != null ? "ui-1mz2wy7" : t, $$css: true }, { "--x-flexBasis": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t) }], trailingInset: { km5ZXQ: "ui-16gtfvg", $$css: true }, glyph: { k1xSpc: "ui-3nfvp2", kzqmXN: "ui-ncpac4", kZKoxP: "ui-1d74i34", kmuXW: "ui-2lah0s", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", $$css: true }, title: { k7Eaqz: "ui-euugli", $$css: true } };
} });
import { jsx as Yga } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as N0S } from "./react-runtime/react/esm-compiler-runtime-production.js";
function _Bh(t) {
  return (e) => t({ type: "card.create", card: { id: `task-${globalThis.crypto.randomUUID()}`, title: e.title, properties: e.properties } }).accepted;
}
function Xga(t) {
  const e = N0S(46), { board: n, onAction: i, onLinkClick: r, newTaskEditor: s, dependencyGraph: o, visibleTaskIds: a, columnScrollMode: l, contentInset: c, onCardActivate: u, getCardContextMenu: d, getCardPresentation: h, getCardSelectionValue: p, headingTone: g } = t, f = l === void 0 ? "contained" : l, _ = c === void 0 ? "none" : c, b = g === void 0 ? "group" : g;
  let y;
  e[0] !== n ? (y = eia(n), e[0] = n, e[1] = y) : y = e[1];
  const k = o ?? y;
  let C;
  e[2] !== n || e[3] !== a ? (C = tia(n, a), e[2] = n, e[3] = a, e[4] = C) : C = e[4];
  const T = C;
  let I;
  e[5] !== n ? (I = tia(n), e[5] = n, e[6] = I) : I = e[6];
  const A = I;
  let P;
  e[7] !== i ? (P = i === void 0 ? void 0 : _Bh(i), e[7] = i, e[8] = P) : P = e[8];
  const M = P, O = _ === "document" && L5r.documentColumns;
  let N;
  e[9] !== O ? (N = [L5r.columns, O], e[9] = O, e[10] = N) : N = e[10];
  const U = _ === "document" ? "--cursor-spacing-12" : void 0;
  let j;
  if (e[11] !== A || e[12] !== n || e[13] !== f || e[14] !== k || e[15] !== d || e[16] !== h || e[17] !== p || e[18] !== b || e[19] !== s || e[20] !== i || e[21] !== u || e[22] !== M || e[23] !== r || e[24] !== T) {
    let H;
    e[26] !== A || e[27] !== n || e[28] !== f || e[29] !== k || e[30] !== d || e[31] !== h || e[32] !== p || e[33] !== b || e[34] !== s || e[35] !== i || e[36] !== u || e[37] !== M || e[38] !== r || e[39] !== T.length ? (H = (G, q) => Yga(x0S, { board: n, groupValue: G.groupValue, label: G.label, tone: G.tone, icon: G.icon, cards: G.cards, allCards: A[q]?.cards ?? G.cards, dependencyGraph: k, onAction: i, onCreateTask: M, onCardActivate: u, getCardContextMenu: d, getCardPresentation: h, getCardSelectionValue: p, headingTone: b, onLinkClick: r, newTaskEditor: s, columnScrollMode: f, columnCount: T.length, isLastColumn: q === T.length - 1 }, G.groupValue), e[26] = A, e[27] = n, e[28] = f, e[29] = k, e[30] = d, e[31] = h, e[32] = p, e[33] = b, e[34] = s, e[35] = i, e[36] = u, e[37] = M, e[38] = r, e[39] = T.length, e[40] = H) : H = e[40], j = T.map(H), e[11] = A, e[12] = n, e[13] = f, e[14] = k, e[15] = d, e[16] = h, e[17] = p, e[18] = b, e[19] = s, e[20] = i, e[21] = u, e[22] = M, e[23] = r, e[24] = T, e[25] = j;
  } else j = e[25];
  let $;
  return e[41] !== _ || e[42] !== U || e[43] !== j || e[44] !== N ? ($ = Yga(Nga, { children: Yga(xg, { contentStyle: N, direction: "horizontal", scrollPadding: 0, scrollbarVisibility: "hover", viewportStyle: L5r.viewport, "data-project-surface": "kanban", "data-project-board-content-inset": _, "data-project-board-content-inset-token": U, className: "ui-2lwn1j ui-euugli ui-12lumcd", children: j }) }), e[41] = _, e[42] = U, e[43] = j, e[44] = N, e[45] = $) : $ = e[45], $;
}
var L5r, 