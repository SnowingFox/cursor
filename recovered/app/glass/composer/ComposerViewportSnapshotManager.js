// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerViewportSnapshotManager.js range:29800570..29807374
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Lr, UEl, yo
// wrapper-init: UUk
// hoisted-owner: ComposerAutocompleteHeuristicPlugin.js (app-out-vs-workbench-workbench-glass-main-js:5293); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

UUk = L({ "ComposerViewportSnapshotManager.js"() {
  "use strict";
  E(), Lr(), UEl(), yo(), waf = class {
    constructor(t) {
      this.shouldBlockUriFromReading = t, this.snapshots = [], this.outlineEnrichedUris = /* @__PURE__ */ new Set(), this.outlineRetryCountByUri = /* @__PURE__ */ new Map();
    }
    clearSnapshots() {
      this.snapshots = [], this.activeResource = void 0, this.outlineEnrichedUris.clear(), this.outlineRetryCountByUri.clear();
    }
    pruneBlockedSnapshots() {
      this.snapshots = this.snapshots.filter((t) => !this.shouldBlockUriFromReading(t.uri));
    }
    getReadableSnapshots() {
      return this.snapshots.filter((t) => !this.shouldBlockUriFromReading(t.uri));
    }
    getActiveReadableSnapshot() {
      const t = this.snapshots[0];
      if (!(!t || !this.activeResource || !gu(t.uri, this.activeResource) || this.shouldBlockUriFromReading(t.uri))) return t;
    }
    buildOnFocus(t, e = 50, n = 3) {
      const i = t.editorService?.activeEditor?.resource;
      this.activeResource = i, this.pruneBlockedSnapshots();
      const r = [], s = /* @__PURE__ */ new Set(), o = t.editorService?.editors ?? [], a = [];
      i && a.push(i);
      for (const h of o) {
        const p = h.resource;
        p && (!i || p.toString() !== i.toString()) && a.push(p);
      }
      const l = t.codeEditorService?.listCodeEditors?.() ?? [];
      for (const h of a) {
        if (r.length >= n) break;
        if (this.shouldBlockUriFromReading(h)) continue;
        const p = h.toString();
        if (s.has(p)) continue;
        const g = l.find((M) => M.getModel()?.uri.toString() === p);
        if (!g) {
          const M = t.modelService?.getModel;
          if (M) {
            const O = M(h) ?? M(h.with({ scheme: "plan-body", query: h.toString() }));
            if (O) {
              const N = O.getValue(), U = Rfs(N);
              r.push({ uri: h, fileName: Aa(h), ranges: [], ciBuckets: U }), s.add(p);
            }
          }
          continue;
        }
        const f = g.getModel();
        if (!f) continue;
        const _ = g.getVisibleRanges?.() ?? [];
        if (_.length === 0) continue;
        let b = Number.POSITIVE_INFINITY, y = 0;
        for (const M of _) M.startLineNumber < b && (b = M.startLineNumber), M.endLineNumber > y && (y = M.endLineNumber);
        const S = Math.max(1, b - e), k = Math.min(f.getLineCount(), y + e), C = { startLineNumber: S, startColumn: 1, endLineNumber: k, endColumn: f.getLineMaxColumn(k) }, T = Aa(h), I = [];
        f.tokenization.forceTokenization(C.endLineNumber);
        for (let M = C.startLineNumber; M <= C.endLineNumber; M++) {
          const O = f.tokenization.getLineTokens(M), N = O.getCount();
          let U = 0;
          const j = f.getValueInRange({ startLineNumber: M, startColumn: 1, endLineNumber: M, endColumn: f.getLineMaxColumn(M) });
          for (let $ = 0; $ < N; $++) {
            const H = O.getStandardTokenType($), G = O.getEndOffset($);
            (H & 1) === 0 && I.push(j.substring(U, G)), U = G;
          }
        }
        const A = I.join(" "), P = Rfs(A);
        r.push({ uri: h, fileName: T, ranges: _, ciBuckets: P }), s.add(p);
      }
      const c = 5, u = [], d = /* @__PURE__ */ new Set();
      for (const h of r) u.push(h), d.add(h.uri.toString());
      for (const h of this.snapshots) {
        if (this.shouldBlockUriFromReading(h.uri)) continue;
        const p = h.uri.toString();
        if (d.has(p) || (u.push(h), d.add(p)), u.length >= c) break;
      }
      this.snapshots = u;
    }
    getSymbolCompletionSuffix(t) {
      if (t.length < 3) return;
      const e = this.getReadableSnapshots(), n = this.getActiveReadableSnapshot(), i = (l) => {
        const c = l.match(/^[A-Za-z0-9_-]+/);
        return c ? c[0] : "";
      };
      if (n) {
        let c = CPi(t, n.ciBuckets).filter((u) => u.exactCase === true);
        if (c.length === 1) {
          const u = c[0], d = u.token.slice(t.length);
          if (d.trim().length >= 3) return { suffix: d, canonical: u.token };
        }
      }
      const r = /* @__PURE__ */ new Map();
      for (let l = 0; l < e.length; l++) {
        const c = e[l], u = CPi(t, c.ciBuckets);
        for (const d of u) {
          const h = d.token.toLowerCase(), p = r.get(h);
          p ? (d.exactCase && !p.exactCase || d.exactCase === p.exactCase && l < p.mruIndex) && r.set(h, { token: d.token, exactCase: d.exactCase, mruIndex: l }) : r.set(h, { token: d.token, exactCase: d.exactCase, mruIndex: l });
        }
      }
      let s = Array.from(r.values());
      if (s.length === 0) return;
      if (s.length === 1) {
        const l = s[0], c = l.token.slice(t.length);
        return c.trim().length >= 3 ? { suffix: c, canonical: l.token } : void 0;
      }
      const o = s.map((l) => l.token.slice(t.length)), a = wPi(o);
      if (a.length >= 3) {
        const c = (t + a).toLowerCase(), u = s.find((d) => d.token.toLowerCase() === c);
        if (u) return { suffix: u.token.slice(t.length), canonical: u.token };
      }
    }
    getActiveViewportUniqueSuffix(t) {
      if (t.length < HMe) return;
      const e = this.getActiveReadableSnapshot();
      if (!e) return;
      const i = CPi(t, e.ciBuckets).filter((r) => r.exactCase === true);
      if (i.length === 1) {
        const r = i[0], s = r.token.slice(t.length);
        return s.trim().length >= HMe ? { suffix: s, canonical: r.token } : void 0;
      }
    }
    enrichActiveWithOutline(t) {
      const e = t.editorService?.activeEditor?.resource;
      if (!e || this.shouldBlockUriFromReading(e)) return;
      const n = e.toString();
      if (this.outlineEnrichedUris.has(n)) return;
      const s = (t.codeEditorService?.listCodeEditors?.() ?? []).find((l) => l.getModel()?.uri.toString() === n)?.getModel?.();
      if (!s) return;
      const o = (this.outlineRetryCountByUri.get(n) ?? 0) + 1;
      this.outlineRetryCountByUri.set(n, o);
      const a = s;
      t.outlineService.getOrCreate(a, Xs.None).then((l) => {
        if (this.shouldBlockUriFromReading(e)) return;
        const c = l.asListOfDocumentSymbols();
        if (!c || c.length === 0) {
          o < 3 && setTimeout(() => this.enrichActiveWithOutline(t), 2e3);
          return;
        }
        const u = c.map((h) => h.name.split(" ")[0]).filter((h) => h && h.length >= 6), d = [...new Set(u)];
        for (const h of this.getReadableSnapshots()) for (const p of d) {
          const f = p.toLowerCase().slice(0, 3);
          if (f.length === 3) {
            const _ = h.ciBuckets.get(f) ?? [];
            _.length < Afs && _.push(p), h.ciBuckets.set(f, _);
          }
        }
        this.outlineEnrichedUris.add(n);
      }).catch(() => {
      });
    }
  };
} }), Caf, Taf, Eaf, jEl, Iaf, $El, xaf, Aaf, 