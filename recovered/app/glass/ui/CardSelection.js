// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CardSelection.js range:18524165..18539649
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.515Z
uI1 = L({ "CardSelection.js"() {
  "use strict";
  E(), Va(), _2p = 4, nDa = zE1(null), iDa = { overlay: { kVAEAm: "ui-ixxii4", kY2c9j: "ui-11uqc5h", kfzvcC: "ui-47corl", kEafiO: "ui-178xt8z", kWqL5O: "ui-s1s249", kt9PQ7: "ui-so031l", kZ1KPB: "ui-e0pwq", kPef9Z: "ui-13fuv20", kSWEuD: "ui-32b0ac", kfdmCh: "ui-1q0q8m5", k4WBpm: "ui-19ypqd9", kLZC3w: "ui-c7gpuc", k26BEO: "ui-lca7l4", kL6WhQ: "ui-vgqpvx", kaZRDh: "ui-12iwwwz", kWkggS: "ui-gsjhps", $$css: true }, rect: (t) => [{ kbCHJM: t.left != null ? "ui-gq9j65" : t.left, k87sOh: t.top != null ? "ui-jbys53" : t.top, kzqmXN: t.width != null ? "ui-5lhr3w" : t.width, kZKoxP: t.height != null ? "ui-16ye13r" : t.height, $$css: true }, { "--x-left": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.left), "--x-top": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.top), "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.width), "--x-height": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t.height) }] }, b2p = { Root: tI1 };
} });
import { jsx as CB, jsxs as qwt, Fragment as dI1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as AHr } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as y2p, useContext as S2p, Children as hI1, useId as k2p, useRef as w2p, useState as pI1, useCallback as Abi } from "./react-runtime/react/esm-index-production.js";
function rDa(t) {
  const e = S2p(oDa);
  if (e === null) throw new Error(`Kanban.${t} must be used within Kanban.Root`);
  return e;
}
function RHr(t) {
  const e = S2p(aDa);
  if (e === null) throw new Error(`Kanban.${t} must be used within Kanban.Column`);
  return e;
}
function mI1(t) {
  const e = Math.max(t, 3);
  return `calc((100% - ${(e - 1) * C2p + T2p}px) / ${e})`;
}
function gI1(t) {
  const e = AHr(16), { "aria-label": n, canMoveCard: i, children: r, contentInset: s, onCardMove: o } = t, a = s === void 0 ? "none" : s;
  let l;
  e[0] !== r ? (l = hI1.count(r), e[0] = r, e[1] = l) : l = e[1];
  const c = l;
  let u;
  e[2] !== i || e[3] !== c || e[4] !== o ? (u = { canMoveCard: i, columnCount: c, onCardMove: o }, e[2] = i, e[3] = c, e[4] = o, e[5] = u) : u = e[5];
  const d = a === "page" && ube.pageColumns;
  let h;
  e[6] !== d ? (h = [ube.columns, d], e[6] = d, e[7] = h) : h = e[7];
  let p;
  e[8] !== n || e[9] !== r || e[10] !== a || e[11] !== h ? (p = CB(Nga, { children: CB(xg, { "aria-label": n, contentStyle: h, "data-component": "kanban-root", "data-content-inset": a, direction: "horizontal", rootStyle: ube.root, scrollPadding: 0, scrollbarVisibility: "hover", viewportStyle: ube.viewport, children: r }) }), e[8] = n, e[9] = r, e[10] = a, e[11] = h, e[12] = p) : p = e[12];
  let g;
  return e[13] !== u || e[14] !== p ? (g = CB(oDa, { value: u, children: p }), e[13] = u, e[14] = p, e[15] = g) : g = e[15], g;
}
function fI1(t) {
  const e = AHr(13), { children: n, id: i } = t, { columnCount: r } = rDa("Column"), s = k2p();
  let o;
  e[0] !== s || e[1] !== i ? (o = { columnId: i, headingId: s }, e[0] = s, e[1] = i, e[2] = o) : o = e[2];
  let a;
  e[3] !== r ? (a = gn(ube.column, ube.columnBasis(mI1(r))), e[3] = r, e[4] = a) : a = e[4];
  let l;
  e[5] !== n || e[6] !== s || e[7] !== i || e[8] !== a ? (l = CB("section", { "aria-labelledby": s, "data-component": "kanban-column", "data-kanban-column-id": i, ...a, children: n }), e[5] = n, e[6] = s, e[7] = i, e[8] = a, e[9] = l) : l = e[9];
  let c;
  return e[10] !== o || e[11] !== l ? (c = CB(aDa, { value: o, children: l }), e[10] = o, e[11] = l, e[12] = c) : c = e[12], c;
}
function vI1(t) {
  const e = AHr(22), { count: n, emphasis: i, icon: r, label: s, tone: o } = t, a = o === void 0 ? "default" : o, { headingId: l } = RHr("ColumnHeader");
  let c;
  e[0] !== a ? (c = gn(ube.columnGlyph, PHr[a]), e[0] = a, e[1] = c) : c = e[1];
  let u;
  e[2] !== r || e[3] !== a ? (u = r === void 0 ? a === "blue" ? CB(i0e, { shape: "sine_3x3", size: "xs" }) : CB(zt, { "aria-hidden": true, name: a === "green" ? "git-pull-request" : "circle-dashed", size: "sm" }) : CB(zt, { "aria-hidden": true, color: r.color, name: r.name, size: "sm" }), e[2] = r, e[3] = a, e[4] = u) : u = e[4];
  let d;
  e[5] !== c || e[6] !== u || e[7] !== a ? (d = CB("span", { "aria-hidden": true, "data-kanban-tone": a, ...c, children: u }), e[5] = c, e[6] = u, e[7] = a, e[8] = d) : d = e[8];
  let h;
  e[9] !== i || e[10] !== a ? (h = gn(ube.columnTitleRow, i === "neutral" && ube.neutralTitle, i === "tone" && PHr[a]), e[9] = i, e[10] = a, e[11] = h) : h = e[11];
  let p;
  e[12] !== n ? (p = n === void 0 || n === 0 ? null : qwt(dI1, { children: [" ", CB(nn, { numeric: true, rootStyle: ube.columnCount, size: "sm", weight: "regular", children: n })] }), e[12] = n, e[13] = p) : p = e[13];
  let g;
  e[14] !== l || e[15] !== s || e[16] !== h || e[17] !== p ? (g = qwt(nn, { "aria-level": 2, as: "div", id: l, role: "heading", size: "sm", weight: "regular", ...h, children: [s, p] }), e[14] = l, e[15] = s, e[16] = h, e[17] = p, e[18] = g) : g = e[18];
  let f;
  return e[19] !== d || e[20] !== g ? (f = qwt("header", { "data-component": "kanban-column-header", className: "ui-78zum5 ui-3zvfii ui-2lah0s ui-6s0dn4 ui-ehausa ui-f6zju3 ui-1yxiud8 ui-cnij5n ui-yab65l", children: [d, g] }), e[19] = d, e[20] = g, e[21] = f) : f = e[21], f;
}
function _I1(t, e, n) {
  if (t === null) return { kind: "empty" };
  const i = [...t.querySelectorAll("[data-kanban-card-id]")].filter((s) => s.dataset.kanbanCardId !== n);
  for (const s of i) {
    const o = s.getBoundingClientRect(), a = s.dataset.kanbanCardId;
    if (a !== void 0 && e < o.top + o.height / 2) return { kind: "before", cardId: a };
  }
  const r = i.at(-1)?.dataset.kanbanCardId;
  return r === void 0 ? { kind: "empty" } : { kind: "after", cardId: r };
}
function bI1({ children: t, scrollMode: e = "contained" }) {
  const { columnId: n } = RHr("ColumnBody"), { canMoveCard: i, onCardMove: r } = rDa("ColumnBody"), s = w2p(null), [o, a] = pI1(false), l = Abi((f, _) => ({ cardId: _.payload.cardId, fromColumnId: _.payload.fromColumnId, toColumnId: n, position: _I1(s.current, f.clientY, _.payload.cardId) }), [n]), c = Abi((f, _) => {
    a(_ !== null && (i?.(l(f, _)) ?? true));
  }, [i, l]), u = Abi(() => a(false), []), d = Abi((f, _) => {
    if (a(false), _ === null || r === void 0) return;
    const b = l(f, _);
    (i?.(b) ?? true) && r(b);
  }, [i, r, l]), h = a2e({ accept: sDa, disabled: r === void 0, onDragEnter: c, onDragLeave: u, onDragOver: c, onDrop: d }), p = Abi((f) => (s.current = f, h.ref(f)), [h.ref]), g = CB("div", { ref: p, "data-component": "kanban-column-body", role: "list", ...{ 0: { className: "ui-78zum5 ui-2lwn1j ui-12lumcd ui-dt5ytf ui-pkkfsy ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-13ly8rp ui-1yxiud8 ui-1xlntvz ui-yab65l ui-1m7fhj7 ui-jbqb8w ui-yl69t7 ui-15406qy ui-g3p6pi ui-6tor67" }, 1: { className: "ui-78zum5 ui-2lwn1j ui-12lumcd ui-dt5ytf ui-pkkfsy ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-13ly8rp ui-1yxiud8 ui-1xlntvz ui-yab65l ui-1m7fhj7 ui-15406qy ui-g3p6pi ui-6tor67 ui-1gae822" } }[!!(h.isOver && h.canDrop && o) << 0], children: t });
  return e === "contained" ? CB(xg, { "data-component": "kanban-column-scroll", direction: "vertical", rootStyle: ube.columnScroll, scrollbarVisibility: "never", children: g }) : g;
}
function yI1({ description: t, icon: e, id: n, label: i, metadata: r, onActivate: s, preview: o, title: a, tone: l = "default", trailing: c }) {
  const { columnId: u } = RHr("Card"), { onCardMove: d } = rDa("Card"), h = k2p(), p = WWe({ data: new sDa({ cardId: n, fromColumnId: u }), disabled: d === void 0, id: `kanban-card-${n}-${h}` }), g = (_) => {
    _.defaultPrevented || s?.(n);
  }, f = (_) => {
    _.target === _.currentTarget && (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s?.(n));
  };
  return qwt("article", { ref: p.ref, "aria-label": s === void 0 ? void 0 : i, "data-component": "kanban-card", "data-kanban-card-id": n, onClick: s === void 0 ? void 0 : g, onKeyDown: s === void 0 ? void 0 : f, role: s === void 0 ? "listitem" : "button", tabIndex: s === void 0 ? void 0 : 0, ...{ 0: { className: "ui--default-marker ui-1n2onr6 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-dpxx8g ui-1wd3ewq ui-178xt8z ui-1lun4ml ui-so031l ui-pilrb4 ui-13fuv20 ui-18b5jzi ui-1q0q8m5 ui-1t7ytsu ui-1aeic0j ui-5q6521 ui-17fyfba ui-4n2izg ui-1q4ynmn ui-f1vpex ui-qjnua1 ui-10co6l2 ui-1gnnqk1 ui-mp3vqe ui-1k57tk5 ui-1okb17s ui-g3p6pi ui-6tor67" }, 4: { className: "ui--default-marker ui-1n2onr6 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-dpxx8g ui-1wd3ewq ui-178xt8z ui-1lun4ml ui-so031l ui-pilrb4 ui-13fuv20 ui-18b5jzi ui-1q0q8m5 ui-1t7ytsu ui-1aeic0j ui-5q6521 ui-17fyfba ui-4n2izg ui-1q4ynmn ui-f1vpex ui-qjnua1 ui-10co6l2 ui-1gnnqk1 ui-mp3vqe ui-1k57tk5 ui-1okb17s ui-g3p6pi ui-6tor67 ui-1jm3nie ui-ch2mbi" }, 2: { className: "ui--default-marker ui-1n2onr6 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-dpxx8g ui-1wd3ewq ui-178xt8z ui-1lun4ml ui-so031l ui-pilrb4 ui-13fuv20 ui-18b5jzi ui-1q0q8m5 ui-1t7ytsu ui-1aeic0j ui-5q6521 ui-17fyfba ui-4n2izg ui-1q4ynmn ui-f1vpex ui-qjnua1 ui-10co6l2 ui-1gnnqk1 ui-mp3vqe ui-1k57tk5 ui-1okb17s ui-g3p6pi ui-6tor67 ui-1ypdohk" }, 6: { className: "ui--default-marker ui-1n2onr6 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-dpxx8g ui-1wd3ewq ui-178xt8z ui-1lun4ml ui-so031l ui-pilrb4 ui-13fuv20 ui-18b5jzi ui-1q0q8m5 ui-1t7ytsu ui-1aeic0j ui-5q6521 ui-17fyfba ui-4n2izg ui-1q4ynmn ui-f1vpex ui-qjnua1 ui-10co6l2 ui-1gnnqk1 ui-mp3vqe ui-1k57tk5 ui-1okb17s ui-g3p6pi ui-6tor67 ui-1ypdohk" }, 1: { className: "ui--default-marker ui-1n2onr6 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-dpxx8g ui-1wd3ewq ui-178xt8z ui-1lun4ml ui-so031l ui-pilrb4 ui-13fuv20 ui-18b5jzi ui-1q0q8m5 ui-1t7ytsu ui-1aeic0j ui-5q6521 ui-17fyfba ui-4n2izg ui-1q4ynmn ui-f1vpex ui-qjnua1 ui-10co6l2 ui-1gnnqk1 ui-mp3vqe ui-1k57tk5 ui-1okb17s ui-g3p6pi ui-6tor67 ui-ti2d7y" }, 5: { className: "ui--default-marker ui-1n2onr6 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-dpxx8g ui-1wd3ewq ui-178xt8z ui-1lun4ml ui-so031l ui-pilrb4 ui-13fuv20 ui-18b5jzi ui-1q0q8m5 ui-1t7ytsu ui-1aeic0j ui-5q6521 ui-17fyfba ui-4n2izg ui-1q4ynmn ui-f1vpex ui-qjnua1 ui-10co6l2 ui-1gnnqk1 ui-mp3vqe ui-1k57tk5 ui-1okb17s ui-g3p6pi ui-6tor67 ui-1jm3nie ui-ch2mbi ui-ti2d7y" }, 3: { className: "ui--default-marker ui-1n2onr6 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-dpxx8g ui-1wd3ewq ui-178xt8z ui-1lun4ml ui-so031l ui-pilrb4 ui-13fuv20 ui-18b5jzi ui-1q0q8m5 ui-1t7ytsu ui-1aeic0j ui-5q6521 ui-17fyfba ui-4n2izg ui-1q4ynmn ui-f1vpex ui-qjnua1 ui-10co6l2 ui-1gnnqk1 ui-mp3vqe ui-1k57tk5 ui-1okb17s ui-g3p6pi ui-6tor67 ui-1ypdohk ui-ti2d7y" }, 7: { className: "ui--default-marker ui-1n2onr6 ui-h8yej3 ui-euugli ui-6ikm8r ui-10wlt62 ui-dpxx8g ui-1wd3ewq ui-178xt8z ui-1lun4ml ui-so031l ui-pilrb4 ui-13fuv20 ui-18b5jzi ui-1q0q8m5 ui-1t7ytsu ui-1aeic0j ui-5q6521 ui-17fyfba ui-4n2izg ui-1q4ynmn ui-f1vpex ui-qjnua1 ui-10co6l2 ui-1gnnqk1 ui-mp3vqe ui-1k57tk5 ui-1okb17s ui-g3p6pi ui-6tor67 ui-1ypdohk ui-ti2d7y" } }[(d !== void 0) << 2 | (s !== void 0) << 1 | !!p.isDragging << 0], children: [qwt("div", { className: "ui-1n2onr6 ui-78zum5 ui-euugli ui-1cy8zhl ui-11twubx ui-oyc9vk ui-1jkygx ui-2lprc ui-1o7kk3e", children: [qwt("div", { className: "ui-78zum5 ui-2lwn1j ui-euugli ui-12lumcd ui-dt5ytf ui-137clkk ui-6ikm8r ui-10wlt62 ui-j9uezu ui-pf9j6y ui-ip9h3s ui-1bxrdft", children: [qwt("div", { className: "ui-78zum5 ui-euugli ui-6s0dn4 ui-ehausa", children: [e === void 0 ? null : CB(zt, { "aria-hidden": true, color: e.color, name: e.name, size: "base" }), CB(nn, { as: "div", "data-kanban-tone": l, rootStyle: [ube.cardTitle, PHr[l]], size: "md", weight: "regular", children: a })] }), t === void 0 ? null : CB(nn, { as: "div", color: "secondary", rootStyle: ube.description, size: "sm", children: t }), r === void 0 ? null : CB("div", { "data-component": "kanban-card-metadata", className: "ui-78zum5 ui-euugli ui-1a02dak ui-11twubx ui-1om1abp ui-4b2ntj", children: r })] }), c === void 0 ? null : CB("div", { "data-component": "kanban-card-trailing", className: "ui-3nfvp2 ui-2lah0s ui-1cy8zhl ui-g01cxk ui-ureibr ui-4hs36o ui-47corl ui-ux4peu ui-rnw4ac ui-19991ni ui-7pq1vu ui-6ekqhr", children: c })] }), o === void 0 ? null : CB("div", { "data-component": "kanban-card-preview", className: "ui-2lwn1j ui-178xt8z ui-13fuv20 ui-1aeic0j", children: o })] });
}
function SI1(t) {
  const e = AHr(26), { children: n, inputLabel: i, onOpenChange: r, onSubmit: s, onValueChange: o, open: a, placeholder: l, value: c } = t, { columnId: u } = RHr("NewItem"), d = w2p(false), h = kI1;
  let p;
  e[0] !== u || e[1] !== r || e[2] !== s || e[3] !== o || e[4] !== c ? (p = () => {
    const P = c.trim();
    P.length !== 0 && s({ columnId: u, label: P }) === "accepted" && (o(""), r(false));
  }, e[0] = u, e[1] = r, e[2] = s, e[3] = o, e[4] = c, e[5] = p) : p = e[5];
  const g = p;
  let f;
  e[6] !== g ? (f = (P) => {
    if (d.current) {
      d.current = false;
      return;
    }
    P.currentTarget.contains(P.relatedTarget) || g();
  }, e[6] = g, e[7] = f) : f = e[7];
  const _ = f;
  let b;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = () => {
    d.current = false;
  }, e[8] = b) : b = e[8];
  const y = b;
  let S;
  e[9] !== g || e[10] !== r ? (S = (P) => {
    P.key === "Enter" ? (P.preventDefault(), g()) : P.key === "Escape" && (P.preventDefault(), d.current = true, r(false));
  }, e[9] = g, e[10] = r, e[11] = S) : S = e[11];
  const k = S;
  let C;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = { 0: { className: "ui-h8yej3 ui-1e4uaio ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1m7fhj7 ui-cq4si4" }, 1: { className: "ui-h8yej3 ui-1e4uaio ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1m7fhj7 ui-jbqb8w ui-1sjiwpj ui-l7u3ym" } }, e[12] = C) : C = e[12];
  const T = C[!a << 0];
  let I;
  e[13] !== n || e[14] !== _ || e[15] !== k || e[16] !== i || e[17] !== r || e[18] !== o || e[19] !== a || e[20] !== l || e[21] !== c ? (I = a ? CB("div", { className: "ui-78zum5 ui-euugli ui-6s0dn4 ui-oyc9vk ui-1jkygx ui-2lprc ui-1o7kk3e", children: CB("input", { ref: h, "aria-label": i, onBlur: _, onChange: (P) => o(P.currentTarget.value), onFocus: y, onKeyDown: k, placeholder: l, type: "text", value: c, className: "ui-h8yej3 ui-euugli ui-rar8zy ui-9f619 ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-c342km ui-1t137rt ui-jbqb8w ui-1heor9g ui-jb2p0i ui-11wthnw ui-1ja60sm ui-1bh5w5" }) }) : qwt("button", { onClick: () => r(true), type: "button", className: "ui-78zum5 ui-h8yej3 ui-6s0dn4 ui-pkkfsy ui-oyc9vk ui-1jkygx ui-2lprc ui-1o7kk3e ui-c342km ui-jbqb8w ui-1heor9g ui-1ypdohk ui-dpxx8g", children: [CB("span", { "aria-hidden": true, className: "ui-3nfvp2 ui-ncpac4 ui-1d74i34 ui-2lah0s ui-6s0dn4 ui-l56j7k ui-1lbmi28", children: CB(zt, { "aria-hidden": true, name: "plus", size: "xs" }) }), CB(nn, { size: "md", children: n })] }), e[13] = n, e[14] = _, e[15] = k, e[16] = i, e[17] = r, e[18] = o, e[19] = a, e[20] = l, e[21] = c, e[22] = I) : I = e[22];
  let A;
  return e[23] !== T || e[24] !== I ? (A = CB("div", { "data-component": "kanban-new-item", ...T, children: I }), e[23] = T, e[24] = I, e[25] = A) : A = e[25], A;
}
function kI1(t) {
  t?.focus();
}
var C2p, T2p, sDa, oDa, aDa, ube, PHr, E2p, 