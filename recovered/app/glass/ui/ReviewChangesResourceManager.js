// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReviewChangesResourceManager.js range:31647751..31650417
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.960Z
iLf = L({ "ReviewChangesResourceManager.js"() {
  "use strict";
  E(), Gt(), Jc(), D3n(), eNi = class {
    constructor(t, e) {
      this.instantiationService = t, this.composerTextModelService = e, this._onDidChangeResources = new tt(), this._currentResources = [], this._resourcesMap = /* @__PURE__ */ new Map(), this._resourcesObservable = Yv(this._onDidChangeResources.event, () => this._currentResources), this.resources = new hgn(this._resourcesObservable), this.contextKeys = { appLayoutMultiDiff: true };
    }
    get resourcesObservable() {
      return this._resourcesObservable;
    }
    updateResources(t) {
      const e = new Map(t.map((o) => [this._getResourceKey(o), o]));
      let n = false;
      const i = [], r = [], s = this._currentResources.filter((o) => {
        const a = this._getResourceKey(o);
        return e.has(a) ? true : (n = true, this._resourcesMap.delete(a), i.push(o), false);
      });
      for (const [o, a] of e) if (!this._resourcesMap.has(o)) {
        n = true;
        const c = yN.hydrateSkeleton(a);
        this._resourcesMap.set(o, c), s.push(c), r.push(c);
      }
      if (n) {
        for (const o of i) o.dispose();
        this._currentResources = s, this._onDidChangeResources.fire();
      }
      return this._currentResources;
    }
    _getResourceKey(t) {
      return JSON.stringify([t.modifiedUri?.path, t.originalUri?.path]);
    }
    dispose() {
      this._onDidChangeResources.dispose();
      for (const t of this._currentResources) t.dispose();
      this._resourcesMap.clear();
    }
  };
} });
async function M1w(t, e, n, i, r, s) {
  if (e.length === 0) return t;
  const o = /* @__PURE__ */ new Map();
  for (const h of t) {
    const p = h.goToFileUri || h.modifiedUri || h.originalUri, g = p ? aCt(n, p) : void 0;
    g && o.set(g, h);
  }
  const a = e.filter((h) => !o.has(h)), l = n.getWorkspace().folders || [], c = await Promise.all(a.map(async (h) => {
    for (const p of l) {
      const g = rt.joinPath(p.uri, h);
      let f = false;
      try {
        f = await i.exists(g);
      } catch {
        f = false;
      }
      if (f) {
        const _ = new Ume({ instantiationService: r, composerTextModelService: s, originalUri: g, modifiedUri: g, goToFileUri: g, contextKeys: void 0, status: "modified", originalContents: void 0, modifiedContents: void 0 });
        return { rel: h, item: _ };
      }
    }
  })), u = /* @__PURE__ */ new Map();
  for (const h of c) h && u.set(h.rel, h.item);
  const d = [];
  for (const h of e) {
    const p = o.get(h);
    if (p) {
      d.push(p);
      continue;
    }
    const g = u.get(h);
    g && d.push(g);
  }
  return d;
}
