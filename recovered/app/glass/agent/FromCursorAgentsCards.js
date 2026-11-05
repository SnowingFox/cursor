// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FromCursorAgentsCards.js range:5365957..5369433
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.208Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, tokens.stylex.js, GlassIcon.js, ManagedAgentsGetStartedBanner.js, attach.js, Button.js, useRender.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, tokens.stylex.js, GlassIcon.js, ManagedAgentsGetStartedBanner.js, attach.js, Button.js, useRender.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
o6y = L({ "FromCursorAgentsCards.js"() {
  "use strict";
  E(), B5e(), dZd(), KZd(), qu(), P0(), Yvn(), JZd = { card: { kVAEAm: "ui-1n2onr6", k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", k7Eaqz: "ui-euugli", kaIpWk: "ui-1pkpdue", kGVxlE: "ui-cxb6k5 ui-jzt0fm", kmVPX3: "ui-1n6jgo6", kmkexE: "ui-4s90tq", kJA4h5: "ui-9kvfbb", $$css: true } }, eQd = { description: "Automatically review pull requests (PRs) for bugs and issues.", enabled: false, icon: "bug", id: "bugbot", title: "Bugbot" };
} });
function tQd(t) {
  return Array.from(new Set(t.map((n) => String(n).trim().toUpperCase()).filter((n) => n.length > 0 && uQd.has(n)))).sort((n, i) => {
    const r = bai.get(n) ?? Number.MAX_SAFE_INTEGER, s = bai.get(i) ?? Number.MAX_SAFE_INTEGER;
    return r !== s ? r - s : n.localeCompare(i);
  });
}
function a6y(t) {
  return t === o8t ? sxr : cQd.get(t) ?? t;
}
function nQd(t) {
  const e = t.curatedCategoryKeys;
  return Array.isArray(e) ? tQd(e.filter((n) => typeof n == "string")) : [];
}
function i_n(t) {
  return nQd(t)[0] ?? o8t;
}
function iQd(t) {
  return i_n(t) === "FEATURED";
}
function AKo(t) {
  return [...t].sort((e, n) => {
    const i = i_n(e), r = i_n(n), s = bai.get(i) ?? Number.MAX_SAFE_INTEGER, o = bai.get(r) ?? Number.MAX_SAFE_INTEGER;
    return s !== o ? s - o : i.localeCompare(r);
  });
}
function hSt(t, e) {
  return [...t].sort((n, i) => {
    const r = (e.get(i.id) ?? 0) - (e.get(n.id) ?? 0);
    return r !== 0 ? r : n.displayName.localeCompare(i.displayName);
  });
}
function l6y(t, e, n) {
  return hSt(t, e).filter((i) => (e.get(i.id) ?? 0) > 0).slice(0, n);
}
function rQd(t) {
  const e = Number(t.createdAt ?? 0), n = Number(t.updatedAt ?? 0);
  return Math.max(Number.isFinite(e) ? e : 0, Number.isFinite(n) ? n : 0);
}
function c6y(t, e) {
  const n = t.length;
  if (n <= 1) return [...t];
  const i = (e % n + n) % n;
  return i === 0 ? [...t] : [...t.slice(i), ...t.slice(0, i)];
}
function sQd(t = /* @__PURE__ */ new Date()) {
  const e = Date.UTC(t.getUTCFullYear(), 0, 0);
  return Math.floor((t.getTime() - e) / hQd);
}
function oQd(t, e) {
  const n = [], i = /* @__PURE__ */ new Set(), r = (d, h) => {
    let p = 0;
    for (const g of d) {
      if (p >= h) break;
      i.has(g.id) || (i.add(g.id), n.push(g), p++);
    }
  }, s = hSt(t, e), o = s.filter(iQd), a = s.filter((d) => (e.get(d.id) ?? 0) > 0), l = [...t].sort((d, h) => rQd(h) - rQd(d) || d.displayName.localeCompare(h.displayName)), c = AKo(t.filter((d) => i_n(d) !== o8t)), u = [...t].sort((d, h) => d.displayName.localeCompare(h.displayName));
  return r(o, o.length), r(a, oxr), r(l, oxr), r(c, oxr), r(u, u.length), n;
}
function aQd(t, e, n, i = /* @__PURE__ */ new Date()) {
  const r = t.filter((c) => !c.isDeprecated), s = r.filter((c) => !n.has(c.id));
  let o = oQd(s, e);
  if (o.length < dQd && (o = oQd(r, e)), o.length <= axr) return o.slice(0, RKo);
  const a = o.slice(0, axr), l = c6y(o.slice(axr), sQd(i));
  return [...a, ...l].slice(0, RKo);
}
function lQd(t) {
  const e = /* @__PURE__ */ new Map();
  for (const r of t) {
    const s = i_n(r), o = e.get(s);
    o ? o.push(r) : e.set(s, [r]);
  }
  const n = r_n.map((r) => ({ categoryKey: r.key, categoryDisplayName: r.displayName, plugins: e.get(r.key) ?? [] })).filter((r) => r.plugins.length > 0), i = e.get(o8t) ?? [];
  return i.length > 0 && n.push({ categoryKey: o8t, categoryDisplayName: sxr, plugins: i }), n;
}
var r_n, o8t, sxr, cQd, bai, uQd, RKo, oxr, dQd, axr, hQd, 