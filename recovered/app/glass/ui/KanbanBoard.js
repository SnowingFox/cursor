// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: KanbanBoard.js range:14810753..14815174
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.764Z
Zga = L({ "KanbanBoard.js"() {
  "use strict";
  E(), oMr(), nia(), D0S(), C5r(), f2(), L5r = { viewport: { kc424l: "ui-hfbhpw", kphCe6: "ui-1ukjkrz", kC2sXz: "ui-e8dkwi", $$css: true }, columns: { kOIVth: "ui-ehausa", kZCmMZ: "ui-1gltl91", kwRFfy: "ui-469ih9", kzqmXN: "ui-ugqocm", k7Eaqz: "ui-gqtt45", ks0D6T: "ui-1x1rfll", $$css: true }, documentColumns: { kB7OPa: "ui-9f619", kwRFfy: "ui-1rkwzo6", kZCmMZ: "ui-18edtka", $$css: true } };
} });
import { jsx as GWe, jsxs as Qga, Fragment as L0S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Api } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useId as O0S } from "./react-runtime/react/esm-index-production.js";
function F0S(t) {
  const e = Api(8), { "aria-label": n, children: i, contentInset: r, scrollMode: s, surface: o } = t, a = r === void 0 ? "default" : r, l = s === void 0 ? "contained" : s;
  let c;
  e[0] !== i || e[1] !== a || e[2] !== l || e[3] !== o ? (c = l === "contained" ? GWe(xg, { contentStyle: [TSn.sectionStack, TSn.content, a === "none" && TSn.contentFlush], direction: "vertical", rootStyle: TSn.gutter, scrollbarVisibility: "never", "data-project-content-inset": a, "data-project-list-gutter": true, "data-project-surface": o, children: i }) : GWe("div", { ...{ 0: { className: "ui-8ky9kg ui-2imrbv ui-1qhopif ui-78zum5 ui-dt5ytf ui-uve7l6 ui-1w8q5y7 ui-1rgtt3y ui-9s6atj" }, 1: { className: "ui-8ky9kg ui-2imrbv ui-1qhopif ui-78zum5 ui-dt5ytf ui-exx8yu ui-13botnq ui-18d9i69 ui-1sudrl5" } }[(a === "none") << 0], "data-project-content-inset": a, "data-project-list-gutter": true, "data-project-surface": o, children: i }), e[0] = i, e[1] = a, e[2] = l, e[3] = o, e[4] = c) : c = e[4];
  const u = c;
  let d;
  return e[5] !== n || e[6] !== u ? (d = GWe("section", { className: "ui-rvj5dj ui-2lwn1j ui-12lumcd ui-5o4joa ui-1mkdm3x", "aria-label": n, children: u }), e[5] = n, e[6] = u, e[7] = d) : d = e[7], d;
}
function B0S(t) {
  const e = Api(16), { children: n, count: i, title: r, titleTone: s, tone: o } = t, a = s === void 0 ? "default" : s, l = O0S(), c = a === "neutral" ? "secondary" : void 0;
  let u;
  e[0] !== r || e[1] !== o ? (u = o === void 0 ? r : GWe(mit, { tone: o, children: r }), e[0] = r, e[1] = o, e[2] = u) : u = e[2];
  let d;
  e[3] !== i ? (d = i === void 0 || i === 0 ? null : Qga(L0S, { children: [" ", GWe(nn, { size: "sm", weight: "regular", color: "quaternary", numeric: true, className: "ui-ss6m8b", children: i })] }), e[3] = i, e[4] = d) : d = e[4];
  let h;
  e[5] !== l || e[6] !== c || e[7] !== u || e[8] !== d ? (h = GWe("header", { className: "ui-78zum5 ui-3zvfii ui-6s0dn4 ui-f6zju3 ui-cnij5n", children: Qga(nn, { as: "div", id: l, role: "heading", "aria-level": 2, color: c, size: "sm", weight: "regular", className: "ui-78zum5 ui-euugli ui-1a02dak ui-1pha0wt ui-pkkfsy", children: [u, d] }) }), e[5] = l, e[6] = c, e[7] = u, e[8] = d, e[9] = h) : h = e[9];
  let p;
  e[10] !== n ? (p = GWe("div", { className: "ui-78zum5 ui-euugli ui-dt5ytf ui-5cdhqx", "data-project-list-rows": true, children: n }), e[10] = n, e[11] = p) : p = e[11];
  let g;
  return e[12] !== l || e[13] !== h || e[14] !== p ? (g = Qga("section", { className: "ui-78zum5 ui-euugli ui-2lah0s ui-dt5ytf ui-137clkk", "aria-labelledby": l, "data-project-list-section": true, children: [h, p] }), e[12] = l, e[13] = h, e[14] = p, e[15] = g) : g = e[15], g;
}
function U0S(t) {
  const e = Api(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = GWe("div", { className: "ui-1n2onr6 ui-78zum5 ui-euugli ui-2lah0s", "data-project-list-row": true, children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function j0S(t) {
  const e = Api(6);
  let n, i;
  e[0] !== t ? ({ children: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r;
  return e[3] !== n || e[4] !== i ? (r = GWe("div", { "data-project-list-content-inset": true, ...i, className: "ui-1qhopif ui-78zum5 ui-h8yej3 ui-euugli ui-9f619 ui-dt5ytf ui-t9g0qb ui-1lg90n0 ui-20eq2h ui-1h3bj18", children: n }), e[3] = n, e[4] = i, e[5] = r) : r = e[5], r;
}
function $0S(t) {
  const e = Api(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = GWe(nn, { as: "div", color: "tertiary", "data-project-list-empty": true, "data-project-list-empty-presentation": "centered-padded", rootStyle: TSn.empty, size: "md", children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
var TSn, ESn, 