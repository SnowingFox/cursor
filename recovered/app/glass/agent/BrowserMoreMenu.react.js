// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BrowserMoreMenu.react.js range:26905936..26908910
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.178Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
xwg = L({ "BrowserMoreMenu.react.js"() {
  "use strict";
  E(), Mt(), kwg = 25, wwg = 500, Pxi = { display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", padding: 0, background: "transparent", border: "1px solid var(--vscode-panel-border)", color: "var(--vscode-foreground)", cursor: "pointer", opacity: 0.7, fontSize: "12px", lineHeight: 1 }, Rcs = { ...Pxi, cursor: "not-allowed", opacity: 0.3 }, Cwg = { display: "flex", alignItems: "center", gap: "1px", color: "var(--vscode-foreground)" }, Twg = { display: "flex", alignItems: "center", justifyContent: "center", minWidth: "36px", height: "20px", padding: "0 2px", fontSize: "10px", color: "var(--vscode-foreground)", borderTop: "1px solid var(--vscode-panel-border)", borderBottom: "1px solid var(--vscode-panel-border)", userSelect: "none" }, Ewg = { fontSize: "12px" }, Iwg = { history: { title: "Clear Browsing History", description: "This will remove all browsing history entries." }, cookies: { title: "Clear Cookies", description: "This will remove all cookies. You may be signed out of websites." }, cache: { title: "Clear Cache", description: "This will clear the browser cache." }, certificates: { title: "Clear Accepted Certificates", description: "This will remove all manually accepted certificates." } };
} });
function Awg(t) {
  for (const e of t) e.dispose();
}
function TIk(t, e, n, i = {}) {
  if (DYr) {
    const o = t();
    let a = [];
    if (o && o.length) for (let l = 0, c = o.length; l < c; l++) a.push(n(() => o[l], () => l));
    else i.fallback && (a = [i.fallback()]);
    return () => a;
  }
  const r = /* @__PURE__ */ new Map();
  return On(() => Awg(r.values())), () => {
    const o = t() || [];
    return o[v4], ks(() => {
      if (!o.length) return Awg(r.values()), r.clear(), i.fallback ? [gA((d) => (r.set(Pcs, { dispose: d }), i.fallback()))] : [];
      const a = new Array(o.length), l = r.get(Pcs);
      if (!r.size || l) {
        l?.dispose(), r.delete(Pcs);
        for (let u = 0; u < o.length; u++) {
          const d = o[u], h = e(d, u);
          s(a, d, u, h);
        }
        return a;
      }
      const c = new Set(r.keys());
      for (let u = 0; u < o.length; u++) {
        const d = o[u], h = e(d, u);
        c.delete(h);
        const p = r.get(h);
        p ? (a[u] = p.mapped, p.setIndex?.(u), p.setItem(() => d)) : s(a, d, u, h);
      }
      for (const u of c) r.get(u)?.dispose(), r.delete(u);
      return a;
    });
  };
  function s(o, a, l, c) {
    gA((u) => {
      const [d, h] = Wt(a), p = { setItem: h, dispose: u };
      if (n.length > 1) {
        const [g, f] = Wt(l);
        p.setIndex = f, p.mapped = n(d, g);
      } else p.mapped = n(d);
      r.set(c, p), o[l] = p.mapped;
    });
  }
}
function zpl(t) {
  const { by: e } = t;
  return vt(TIk(() => t.each, typeof e == "function" ? e : (n) => n[e], t.children, "fallback" in t ? { fallback: () => t.fallback } : void 0));
}
var Pcs, 