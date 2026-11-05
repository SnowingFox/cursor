// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerAutocompleteHeuristics.js range:29796152..29800570
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Lr, UEl
// wrapper-init: BUk
// hoisted-owner: ComposerViewportSnapshotManager.js (app-out-vs-workbench-workbench-glass-main-js:5292); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

BUk = L({ "ComposerAutocompleteHeuristics.js"() {
  "use strict";
  E(), Lr(), UEl(), Saf = (t, e) => {
    if (t.length < xfs) return;
    const n = e.editorService?.editors ?? [], i = [];
    for (const l of n) {
      const c = l?.resource;
      if (c === void 0 || e.cursorIgnoreService.shouldBlockUriFromReading(c)) continue;
      const u = Aa(c), d = e.workspaceContextService.asRelativePath(c) ?? c.path;
      i.push({ name: u, uri: c, relativePath: d });
    }
    if (i.length === 0) return;
    const r = t.toLowerCase(), o = i.filter((l) => l.name.toLowerCase().startsWith(r)).filter((l) => l.name.length - t.length >= HMe);
    if (o.length === 0) return;
    if (o.length === 1) {
      const l = o[0], c = l.name.slice(t.length), u = { name: l.name, relativePath: l.relativePath, uri: l.uri.toJSON(), typedFragmentLength: t.length };
      return { suffix: c, meta: u };
    }
    if (!t.includes(".")) {
      const l = o.map((d) => {
        const h = d.name, p = h.indexOf("."), g = p >= 0 ? h.slice(0, p) : h, f = t.length <= g.length ? g.slice(t.length) : "";
        return { e: d, name: h, baseName: g, baseSuffix: f };
      }), c = l.map((d) => d.baseSuffix).filter((d) => d.length > 0);
      if (c.length >= 2) {
        const d = /* @__PURE__ */ new Set();
        for (const p of l) d.add(p.baseName.toLowerCase());
        const h = wPi(c);
        if (h.length >= HMe) {
          const p = t + h;
          return d.has(p.toLowerCase()) ? { suffix: l[0].baseSuffix.slice(0, h.length) } : void 0;
        }
      }
      if (new Set(l.map((d) => d.baseName)).size === 1) {
        const d = [...o].sort((h, p) => {
          const g = h.name.length - t.length, f = p.name.length - t.length;
          return g !== f ? g - f : h.name.localeCompare(p.name);
        });
        for (const h of d) {
          const p = h.name.slice(t.length);
          if (p.trim().length >= HMe) {
            const g = { name: h.name, relativePath: h.relativePath, uri: h.uri.toJSON(), typedFragmentLength: t.length };
            return { suffix: p, meta: g };
          }
        }
      }
    }
    o.sort((l, c) => {
      const u = l.name.length - t.length, d = c.name.length - t.length;
      return u !== d ? u - d : l.name.localeCompare(c.name);
    });
    for (const l of o) {
      const c = l.name.slice(t.length), u = { name: l.name, relativePath: l.relativePath, uri: l.uri.toJSON(), typedFragmentLength: t.length };
      return { suffix: c, meta: u };
    }
  }, kaf = (t, e) => {
    if (t.length < xfs) return;
    const n = e.snapshotProvider?.getActiveViewportUniqueSuffix?.(t);
    if (n !== void 0 && n.suffix.trim().length >= HMe) return { suffix: n.suffix, canonical: n.canonical };
    const i = [];
    {
      const r = e.snapshotProvider?.getSymbolCompletionSuffix(t);
      r && r.suffix.trim().length >= HMe && i.push({ suffix: r.suffix, canonical: r.canonical });
    }
    if (e.promptBuckets) {
      const r = CPi(t, e.promptBuckets);
      if (r.length > 0) {
        const s = r;
        if (s.length > 0) if (s.length === 1) {
          const o = s[0].token.slice(t.length);
          o.trim().length >= HMe && i.push({ suffix: o, canonical: s[0].token });
        } else {
          const o = /* @__PURE__ */ new Set();
          for (const c of s) o.add(c.token.toLowerCase());
          const a = s.map((c) => c.token.slice(t.length)), l = wPi(a);
          if (l.length >= HMe) {
            const c = (t + l).toLowerCase(), u = s.find((d) => d.token.toLowerCase() === c);
            u && i.push({ suffix: u.token.slice(t.length), canonical: u.token });
          }
        }
      }
    }
    {
      const r = Saf(t, e.vs);
      r && i.push(r.meta ? { suffix: r.suffix, meta: r.meta } : { suffix: r.suffix });
    }
    if (i.length > 0) {
      if (i.length === 1) return i[0];
      const r = /* @__PURE__ */ new Set();
      for (const a of i) {
        const l = a.canonical || t + a.suffix;
        r.add(l.toLowerCase());
      }
      const s = i.map((a) => a.suffix.toLowerCase()), o = wPi(s);
      if (o.length >= HMe) {
        const a = (t + o).toLowerCase();
        if (!r.has(a)) return;
        const l = i.find((c) => (c.canonical || t + c.suffix).toLowerCase() === a);
        return l ? { suffix: l.suffix, canonical: l.canonical || t + l.suffix } : { suffix: i[0].suffix.slice(0, o.length) };
      }
      return;
    }
  };
} }), waf, 