// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ContextViewModeMenu.js range:17195401..17204306
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.572Z
ds1 = L({ "ContextViewModeMenu.js"() {
  "use strict";
  E(), Obn(), fd(), ygp = [{ id: "gallery", label: "Gallery", iconName: "grid" }, { id: "icon", label: "Icons", iconName: "folder" }, { id: "list", label: "List", iconName: "list-bullets" }];
} });
import { jsx as Kne, jsxs as tHt, Fragment as hs1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as tIa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Sgp } from "./react-runtime/react/esm-index-production.js";
function ps1(t) {
  const e = tIa(18), { items: n, onLinkClick: i } = t, [r, s] = Sgp("gallery");
  let o;
  e[0] !== n ? (o = vs1(n), e[0] = n, e[1] = o) : o = e[1];
  const a = o, [l, c] = Sgp(ms1);
  let u;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = (b) => {
    c((y) => {
      const S = new Set(y);
      return S.has(b) ? S.delete(b) : S.add(b), S;
    });
  }, e[2] = u) : u = e[2];
  const d = u;
  let h;
  e[3] !== r ? (h = Kne("div", { className: "ui-78zum5 ui-2lah0s ui-6s0dn4 ui-13a6bvl ui-ehausa", children: Kne(cs1, { mode: r, onModeChange: s }) }), e[3] = r, e[4] = h) : h = e[4];
  let p;
  e[5] !== r ? (p = r === "list" ? Kne(gs1, {}) : null, e[5] = r, e[6] = p) : p = e[6];
  let g;
  e[7] !== l || e[8] !== a || e[9] !== i || e[10] !== r ? (g = a.length === 0 ? Kne(nn, { as: "div", size: "md", className: "ui-13ly8rp ui-196pc8s ui-1xlntvz ui-22095l ui-1e4uaio", children: "No context has been added yet." }) : a.map((b) => {
    const y = l.has(b.id);
    return Kne(fs1, { group: b, viewMode: r, collapsed: y, onLinkClick: i, onToggle: () => d(b.id) }, b.id);
  }), e[7] = l, e[8] = a, e[9] = i, e[10] = r, e[11] = g) : g = e[11];
  let f;
  e[12] !== p || e[13] !== g ? (f = tHt("div", { className: "ui-78zum5 ui-2lwn1j ui-12lumcd ui-dt5ytf ui-1oot3zn ui-6ikm8r ui-1odjw0f ui-13ly8rp ui-1xpa7k ui-1xlntvz ui-1uhho1l ui-1rohswg", children: [p, g] }), e[12] = p, e[13] = g, e[14] = f) : f = e[14];
  let _;
  return e[15] !== h || e[16] !== f ? (_ = tHt("div", { className: "ui-78zum5 ui-2lwn1j ui-12lumcd ui-dt5ytf ui-1oot3zn ui-6ikm8r ui-10wlt62", "data-project-surface": "context", children: [h, f] }), e[15] = h, e[16] = f, e[17] = _) : _ = e[17], _;
}
function ms1() {
  return /* @__PURE__ */ new Set();
}
function gs1() {
  const t = tIa(1);
  let e;
  return t[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (e = tHt("div", { className: "ui-rvj5dj ui-6s0dn4 ui-jtu30w ui-1oot3zn ui-uve7l6 ui-1yxiud8 ui-1rgtt3y ui-yab65l ui-so031l ui-1q0q8m5 ui-17fyfba ui-4b2ntj ui-tvhhri ui-1vyo3qp", children: [Kne(nn, { size: "sm", children: "Name" }), Kne(nn, { size: "sm", children: "Kind" }), Kne(nn, { size: "sm", children: "Description" })] }), t[0] = e) : e = t[0], e;
}
function fs1(t) {
  const e = tIa(33), { group: n, viewMode: i, collapsed: r, onLinkClick: s, onToggle: o } = t, a = !r, l = `${r ? "Expand" : "Collapse"} ${n.label}`;
  let c;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = { 0: { className: "ui-78zum5 ui-eq5yr9 ui-6s0dn4 ui-pkkfsy ui-493x5y ui-1yxiud8 ui-b6dno7 ui-yab65l ui-c342km ui-ng3xce ui-1043rbw ui-jbqb8w ui-qjnua1 ui-1wd3ewq ui-1ypdohk ui-dpxx8g" }, 1: { className: "ui-rvj5dj ui-h8yej3 ui-6s0dn4 ui-jtu30w ui-1oot3zn ui-uve7l6 ui-1yxiud8 ui-1rgtt3y ui-yab65l ui-c342km ui-so031l ui-1q0q8m5 ui-17fyfba ui-2u8bby ui-jbqb8w ui-qjnua1 ui-1wd3ewq ui-1ypdohk ui-dpxx8g" } }, e[0] = c) : c = e[0];
  const u = c[(i === "list") << 0];
  let d;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = { 0: { className: "ui-4b2ntj ui-11xpdln ui-gdialr ui-6ekqhr" }, 1: { className: "ui-4b2ntj ui-11xpdln ui-gdialr ui-6ekqhr ui-9tu13d" } }, e[1] = d) : d = e[1];
  const h = d[!!r << 0];
  let p;
  e[2] !== h ? (p = Kne(zt, { name: "chevron-down", size: "xs", "aria-hidden": true, ...h }), e[2] = h, e[3] = p) : p = e[3];
  let g;
  e[4] !== n.iconName ? (g = Kne(zt, { name: n.iconName, size: "base", "aria-hidden": true, className: "ui-1mh7f6w" }), e[4] = n.iconName, e[5] = g) : g = e[5];
  let f;
  e[6] !== n.label ? (f = Kne(nn, { as: "span", size: "md", weight: "medium", children: n.label }), e[6] = n.label, e[7] = f) : f = e[7];
  let _;
  e[8] !== n.items.length ? (_ = Kne(nn, { size: "sm", weight: "regular", numeric: true, className: "ui-1e4uaio ui-ss6m8b", children: n.items.length }), e[8] = n.items.length, e[9] = _) : _ = e[9];
  let b;
  e[10] !== _ || e[11] !== p || e[12] !== g || e[13] !== f ? (b = tHt("span", { className: "ui-78zum5 ui-euugli ui-6s0dn4 ui-pkkfsy", children: [p, g, f, _] }), e[10] = _, e[11] = p, e[12] = g, e[13] = f, e[14] = b) : b = e[14];
  let y;
  e[15] !== i ? (y = i === "list" ? tHt(hs1, { children: [Kne("span", { "aria-hidden": true }), Kne("span", { "aria-hidden": true })] }) : null, e[15] = i, e[16] = y) : y = e[16];
  let S;
  e[17] !== o || e[18] !== a || e[19] !== b || e[20] !== y || e[21] !== l || e[22] !== u ? (S = tHt("button", { type: "button", "aria-expanded": a, "aria-label": l, onClick: o, ...u, children: [b, y] }), e[17] = o, e[18] = a, e[19] = b, e[20] = y, e[21] = l, e[22] = u, e[23] = S) : S = e[23];
  let k;
  e[24] !== r || e[25] !== n.items || e[26] !== s || e[27] !== i ? (k = r ? null : Kne("ul", { ...{ 0: { className: "ui-rvj5dj ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-13ly8rp ui-1yxiud8 ui-cnij5n ui-yab65l ui-3ct3a4" }, 8: { className: "ui-78zum5 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-dt5ytf ui-xhr3t ui-3ct3a4" }, 4: { className: "ui-rvj5dj ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-13ly8rp ui-1yxiud8 ui-cnij5n ui-yab65l ui-3ct3a4 ui-11qjcnl ui-pqajaz ui-j1vagl ui-bldk9i" }, 12: { className: "ui-78zum5 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-dt5ytf ui-xhr3t ui-3ct3a4 ui-11qjcnl ui-pqajaz ui-j1vagl ui-bldk9i" }, 2: { className: "ui-rvj5dj ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-13ly8rp ui-1yxiud8 ui-cnij5n ui-yab65l ui-3ct3a4 ui-1r9gxpu ui-j1vagl ui-bldk9i" }, 10: { className: "ui-78zum5 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-dt5ytf ui-xhr3t ui-3ct3a4 ui-1r9gxpu ui-j1vagl ui-bldk9i" }, 6: { className: "ui-rvj5dj ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-13ly8rp ui-1yxiud8 ui-cnij5n ui-yab65l ui-3ct3a4 ui-pqajaz ui-1r9gxpu ui-j1vagl ui-bldk9i" }, 14: { className: "ui-78zum5 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-dt5ytf ui-xhr3t ui-3ct3a4 ui-pqajaz ui-1r9gxpu ui-j1vagl ui-bldk9i" }, 1: { className: "ui-rvj5dj ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1yxiud8 ui-cnij5n ui-yab65l ui-3ct3a4 ui-f6zju3" }, 9: { className: "ui-78zum5 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-dt5ytf ui-xhr3t ui-3ct3a4 ui-f6zju3" }, 5: { className: "ui-rvj5dj ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1yxiud8 ui-cnij5n ui-yab65l ui-3ct3a4 ui-11qjcnl ui-pqajaz ui-j1vagl ui-bldk9i ui-f6zju3" }, 13: { className: "ui-78zum5 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-dt5ytf ui-xhr3t ui-3ct3a4 ui-11qjcnl ui-pqajaz ui-j1vagl ui-bldk9i ui-f6zju3" }, 3: { className: "ui-rvj5dj ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1yxiud8 ui-cnij5n ui-yab65l ui-3ct3a4 ui-1r9gxpu ui-j1vagl ui-bldk9i ui-f6zju3" }, 11: { className: "ui-78zum5 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-dt5ytf ui-xhr3t ui-3ct3a4 ui-1r9gxpu ui-j1vagl ui-bldk9i ui-f6zju3" }, 7: { className: "ui-rvj5dj ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1yxiud8 ui-cnij5n ui-yab65l ui-3ct3a4 ui-pqajaz ui-1r9gxpu ui-j1vagl ui-bldk9i ui-f6zju3" }, 15: { className: "ui-78zum5 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-dt5ytf ui-xhr3t ui-3ct3a4 ui-pqajaz ui-1r9gxpu ui-j1vagl ui-bldk9i ui-f6zju3" } }[(i === "list") << 3 | (i === "gallery") << 2 | (i === "icon") << 1 | (i === "icon") << 0], children: n.items.map((T) => Kne("li", { ...{ 0: {}, 2: { className: "ui-78zum5 ui-5yr21d ui-uk3077 ui-l56j7k" }, 1: { className: "ui-78zum5 ui-l56j7k" }, 3: { className: "ui-5yr21d ui-uk3077 ui-78zum5 ui-l56j7k" } }[(i === "gallery") << 1 | (i === "icon") << 0], children: Kne(es1, { item: T, viewMode: i, onLinkClick: s }) }, T.id)) }), e[24] = r, e[25] = n.items, e[26] = s, e[27] = i, e[28] = k) : k = e[28];
  let C;
  return e[29] !== n.label || e[30] !== S || e[31] !== k ? (C = tHt("section", { className: "ui-78zum5 ui-dt5ytf ui-xhr3t", "aria-label": n.label, children: [S, k] }), e[29] = n.label, e[30] = S, e[31] = k, e[32] = C) : C = e[32], C;
}
function vs1(t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) {
    const i = n.kind, r = e.get(i) ?? [];
    r.push(n), e.set(i, r);
  }
  return Array.from(e.entries()).sort(([n], [i]) => Cr1(n, i)).map(([n, i]) => ({ id: n, label: bwt[n].groupLabel, iconName: bwt[n].icon, items: i }));
}
