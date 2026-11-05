// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GalleryThumbnail.js range:17186527..17194431
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.699Z
var Jr1 = L({ "GalleryThumbnail.js"() {
  "use strict";
  E(), Ir1(), Dr1(), jr1(), zr1(), Yr1(), _gp(), fd();
} });
import { jsx as Hz, jsxs as Cvi, Fragment as JEa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as oUr } from "./react-runtime/react/esm-compiler-runtime-production.js";
function es1(t) {
  const e = oUr(22), { item: n, viewMode: i, onLinkClick: r } = t;
  let s;
  e[0] !== n || e[1] !== i ? (s = i === "list" ? Hz(is1, { item: n }) : i === "icon" ? Hz(ns1, { item: n }) : Hz(ts1, { item: n }), e[0] = n, e[1] = i, e[2] = s) : s = e[2];
  const o = s;
  let a;
  e[3] !== n.href ? (a = Rhe(n.href), e[3] = n.href, e[4] = a) : a = e[4];
  const l = a;
  if (l) {
    let d;
    e[5] !== r || e[6] !== l ? (d = (f) => {
      r?.(l, f) && f.preventDefault();
    }, e[5] = r, e[6] = l, e[7] = d) : d = e[7];
    const h = d;
    let p;
    e[8] !== i ? (p = i === "list" ? { className: "ui-rvj5dj ui-h8yej3 ui-1rz828m ui-6s0dn4 ui-jtu30w ui-1oot3zn ui-uve7l6 ui-1yxiud8 ui-1rgtt3y ui-yab65l ui-972fbf ui-gfja2r ui-so031l ui-yj58a3 ui-1ejq31n ui-11pwa6s ui-1q0q8m5 ui-1b16gh4 ui-17fyfba ui-jbqb8w ui-qjnua1 ui-1wd3ewq ui-dpxx8g ui-krqix3 ui-1ypdohk" } : i === "icon" ? { className: "ui-78zum5 ui-h8yej3 ui-2aouup ui-dt5ytf ui-6s0dn4 ui-pkkfsy ui-f6zju3 ui-g31tg3 ui-cnij5n ui-43mhey ui-c342km ui-ng3xce ui-1043rbw ui-jbqb8w ui-1wd3ewq ui-6ikm8r ui-10wlt62 ui-2b8uid ui-krqix3 ui-1ypdohk" } : { className: "ui-krqix3 ui-78zum5 ui-h8yej3 ui-1e4dklr ui-dt5ytf ui-6s0dn4 ui-pkkfsy ui-f6zju3 ui-g31tg3 ui-cnij5n ui-43mhey ui-c342km ui-ng3xce ui-1043rbw ui-jbqb8w ui-1wd3ewq ui-t0e3qv ui-2b8uid" }, e[8] = i, e[9] = p) : p = e[9];
    let g;
    return e[10] !== o || e[11] !== h || e[12] !== l || e[13] !== p ? (g = Hz("a", { href: l, target: "_blank", rel: "noopener noreferrer", onClick: h, ...p, children: o }), e[10] = o, e[11] = h, e[12] = l, e[13] = p, e[14] = g) : g = e[14], g;
  }
  if (i === "list") {
    let d;
    return e[15] !== o ? (d = Hz("div", { className: "ui-rvj5dj ui-h8yej3 ui-1rz828m ui-6s0dn4 ui-jtu30w ui-1oot3zn ui-uve7l6 ui-1yxiud8 ui-1rgtt3y ui-yab65l ui-972fbf ui-gfja2r ui-so031l ui-yj58a3 ui-1ejq31n ui-11pwa6s ui-1q0q8m5 ui-1b16gh4 ui-17fyfba ui-jbqb8w ui-qjnua1 ui-1wd3ewq ui-t0e3qv ui-dpxx8g ui-krqix3", children: o }), e[15] = o, e[16] = d) : d = e[16], d;
  }
  let c;
  e[17] !== i ? (c = i === "icon" ? { className: "ui-78zum5 ui-h8yej3 ui-2aouup ui-dt5ytf ui-6s0dn4 ui-pkkfsy ui-f6zju3 ui-g31tg3 ui-cnij5n ui-43mhey ui-c342km ui-ng3xce ui-1043rbw ui-jbqb8w ui-1wd3ewq ui-t0e3qv ui-6ikm8r ui-10wlt62 ui-2b8uid ui-krqix3" } : { className: "ui-krqix3 ui-78zum5 ui-h8yej3 ui-1e4dklr ui-dt5ytf ui-6s0dn4 ui-pkkfsy ui-f6zju3 ui-g31tg3 ui-cnij5n ui-43mhey ui-c342km ui-ng3xce ui-1043rbw ui-jbqb8w ui-1wd3ewq ui-t0e3qv ui-2b8uid" }, e[17] = i, e[18] = c) : c = e[18];
  let u;
  return e[19] !== o || e[20] !== c ? (u = Hz("article", { ...c, children: o }), e[19] = o, e[20] = c, e[21] = u) : u = e[21], u;
}
function ts1(t) {
  const e = oUr(19), { item: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = { 0: { className: "ui-1n2onr6 ui-6ikm8r ui-10wlt62 ui-2lah0s ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-cq4si4 ui-1mh7f6w ui-h8yej3 ui-1lne3s1 ui-1043rbw" }, 1: { className: "ui-1n2onr6 ui-6ikm8r ui-10wlt62 ui-2lah0s ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-cq4si4 ui-1mh7f6w ui-h8yej3 ui-1043rbw ui-pi5jss" } }, e[0] = i) : i = e[0];
  const r = i[(n.kind === "figma") << 0];
  let s;
  e[1] !== n ? (s = eIa(n), e[1] = n, e[2] = s) : s = e[2];
  let o;
  e[3] !== n || e[4] !== s ? (o = Hz(Qr1, { item: n, icon: s }), e[3] = n, e[4] = s, e[5] = o) : o = e[5];
  let a;
  e[6] !== n ? (a = ss1(n), e[6] = n, e[7] = a) : a = e[7];
  let l;
  e[8] !== a ? (l = Hz(nn, { size: "xs", weight: "medium", className: "ui-10l6tqk ui-8hg36d ui-8v6s6i ui-1e1y6u3 ui-4p5aij ui-1tlft3r ui-1j85h84 ui-tw3t59 ui-3dhcaw ui-19aaqeu ui-tvhhri", children: a }), e[8] = a, e[9] = l) : l = e[9];
  let c;
  e[10] !== r || e[11] !== o || e[12] !== l ? (c = Cvi("span", { ...r, children: [o, l] }), e[10] = r, e[11] = o, e[12] = l, e[13] = c) : c = e[13];
  let u;
  e[14] !== n.title ? (u = Hz("span", { className: "ui-78zum5 ui-h8yej3 ui-euugli ui-dt5ytf ui-195vfkc ui-exx8yu ui-17v7654 ui-18d9i69 ui-1lfpczk", children: Hz(nn, { as: "span", size: "md", weight: "regular", className: "ui-1lliihq ui-euugli ui-193iq5w ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft ui-2b8uid", children: n.title }) }), e[14] = n.title, e[15] = u) : u = e[15];
  let d;
  return e[16] !== c || e[17] !== u ? (d = Cvi(JEa, { children: [c, u] }), e[16] = c, e[17] = u, e[18] = d) : d = e[18], d;
}
function ns1(t) {
  const e = oUr(9), { item: n } = t;
  let i;
  e[0] !== n ? (i = eIa(n), e[0] = n, e[1] = i) : i = e[1];
  let r;
  e[2] !== i ? (r = Hz("span", { className: "ui-1n2onr6 ui-6ikm8r ui-10wlt62 ui-2lah0s ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1mh7f6w ui-78zum5 ui-1fu8urw ui-1peatla ui-6s0dn4 ui-l56j7k ui-c342km ui-ng3xce ui-1m7fhj7 ui-flfp0o", children: Hz(zt, { name: i, size: 40, "aria-hidden": true }) }), e[2] = i, e[3] = r) : r = e[3];
  let s;
  e[4] !== n.title ? (s = Hz("span", { className: "ui-78zum5 ui-h8yej3 ui-euugli ui-dt5ytf ui-195vfkc", children: Hz(nn, { as: "span", size: "md", weight: "regular", className: "ui-1lliihq ui-euugli ui-193iq5w ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft", children: n.title }) }), e[4] = n.title, e[5] = s) : s = e[5];
  let o;
  return e[6] !== r || e[7] !== s ? (o = Cvi(JEa, { children: [r, s] }), e[6] = r, e[7] = s, e[8] = o) : o = e[8], o;
}
function is1(t) {
  const e = oUr(21), { item: n } = t;
  let i;
  e[0] !== n ? (i = eIa(n), e[0] = n, e[1] = i) : i = e[1];
  let r;
  e[2] !== i ? (r = Hz("span", { className: "ui-1n2onr6 ui-6ikm8r ui-10wlt62 ui-2lah0s ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1mh7f6w ui-78zum5 ui-1xp8n7a ui-mix8c7 ui-6s0dn4 ui-l56j7k ui-c342km ui-ng3xce ui-2u8bby ui-jbqb8w", children: Hz(zt, { name: i, size: "base", "aria-hidden": true }) }), e[2] = i, e[3] = r) : r = e[3];
  let s;
  e[4] !== n.title ? (s = Hz("span", { className: "ui-78zum5 ui-h8yej3 ui-euugli ui-dt5ytf ui-195vfkc", children: Hz(nn, { as: "span", size: "md", weight: "regular", className: "ui-1lliihq ui-euugli ui-193iq5w ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft", children: n.title }) }), e[4] = n.title, e[5] = s) : s = e[5];
  let o;
  e[6] !== r || e[7] !== s ? (o = Cvi("span", { className: "ui-78zum5 ui-euugli ui-6s0dn4 ui-ehausa ui-v0g687", children: [r, s] }), e[6] = r, e[7] = s, e[8] = o) : o = e[8];
  let a;
  e[9] !== n ? (a = rs1(n), e[9] = n, e[10] = a) : a = e[10];
  let l;
  e[11] !== a ? (l = Hz(nn, { as: "span", size: "md", weight: "regular", className: "ui-1lliihq ui-euugli ui-193iq5w ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft ui-19aaqeu", children: a }), e[11] = a, e[12] = l) : l = e[12];
  let c;
  e[13] !== n ? (c = os1(n), e[13] = n, e[14] = c) : c = e[14];
  let u;
  e[15] !== c ? (u = Hz(nn, { as: "span", size: "md", weight: "regular", numeric: true, className: "ui-1lliihq ui-euugli ui-193iq5w ui-6ikm8r ui-10wlt62 ui-lyipyv ui-uxw1ft ui-1e4uaio ui-ss6m8b", children: c }), e[15] = c, e[16] = u) : u = e[16];
  let d;
  return e[17] !== o || e[18] !== l || e[19] !== u ? (d = Cvi(JEa, { children: [o, l, u] }), e[17] = o, e[18] = l, e[19] = u, e[20] = d) : d = e[20], d;
}
function eIa(t) {
  return bwt[t.kind].icon;
}
function rs1(t) {
  return bwt[t.kind].kindLabel;
}
function ss1(t) {
  return bwt[t.kind].badgeLabel;
}
function os1(t) {
  return t.subtitle ?? "-";
}
