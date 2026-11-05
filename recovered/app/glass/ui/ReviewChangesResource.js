// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReviewChangesResource.js range:31638947..31647751
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.960Z
D3n = L({ "ReviewChangesResource.js"() {
  "use strict";
  E(), pa(), Qe(), Jc(), fn(), zHt(), QNf(), kKt(), R1w(), LFl(), Ume = class bMb extends SKt {
    constructor(e) {
      if (super(e.originalUri, e.modifiedUri, e.goToFileUri, e.contextKeys, e.status, e.originalContents, e.modifiedContents), this.type = "skeleton", this.args = e, e.linesAdded !== void 0 && e.linesRemoved !== void 0) this.linesAdded = e.linesAdded, this.linesRemoved = e.linesRemoved;
      else {
        const i = P1w(e.originalContents, e.modifiedContents);
        this.linesAdded = i.linesAdded, this.linesRemoved = i.linesRemoved;
      }
      this.skipInlineDiffSync = e.skipInlineDiffSync ?? false, this.skipLineCounts = e.skipLineCounts ?? false, this.renamedFromPath = e.renamedFromPath;
    }
    getKey() {
      return JSON.stringify([this.modifiedUri?.toString(), this.originalUri?.toString()]);
    }
    static revive(e, n, i) {
      const r = e.originalUri ? rt.revive(e.originalUri) : void 0, s = e.modifiedUri ? rt.revive(e.modifiedUri) : void 0, o = e.goToFileUri ? rt.revive(e.goToFileUri) : void 0, a = { instantiationService: n, composerTextModelService: i, originalUri: r, modifiedUri: s, goToFileUri: o, contextKeys: e.contextKeys, status: e.status, originalContents: e.originalContents, modifiedContents: e.modifiedContents, linesAdded: e.linesAdded, linesRemoved: e.linesRemoved, skipLineCounts: e.skipLineCounts, renamedFromPath: e.renamedFromPath };
      return new bMb(a);
    }
  }, wKe = class XZi extends SKt {
    constructor(e) {
      super(e.originalUri, e.modifiedUri, e.goToFileUri, e.contextKeys, e.status, e.originalContents, e.modifiedContents), this.type = "resource", this._textModelDisposables = new Nt(), this.args = e, this.instantiationService = e.instantiationService, this.composerTextModelService = e.composerTextModelService, this.skipInlineDiffSync = e.skipInlineDiffSync ?? false, this._skipLineCounts = e.skipLineCounts === true && e.linesAdded !== void 0 && e.linesRemoved !== void 0, this._linesAdded = bc("ReviewChangesResource.linesAdded", 0), this.linesAdded = this._linesAdded, this._linesRemoved = bc("ReviewChangesResource.linesRemoved", 0), this.linesRemoved = this._linesRemoved, e.linesAdded !== void 0 && e.linesRemoved !== void 0 && (this._linesAdded.set(e.linesAdded, void 0), this._linesRemoved.set(e.linesRemoved, void 0)), this._comments = bc("ReviewChangesResource.comments", []), this.comments = this._comments, this.hydrate();
    }
    static hydrateSkeleton(e) {
      const n = e.args;
      return new XZi(n);
    }
    static generateScheme(e) {
      const n = this.computeStableHash(e);
      return `${IJn}-${n}-anysphere`;
    }
    static computeStableHash(e) {
      const n = this._hashCache.get(e);
      if (n !== void 0) return this._hashCache.delete(e), this._hashCache.set(e, n), n;
      let i = 2166136261;
      const r = (a, l) => {
        for (let c = a; c < l; c++) i ^= e.charCodeAt(c), i += (i << 1) + (i << 4) + (i << 7) + (i << 8) + (i << 24);
      };
      if (e.length <= XZi.STABLE_HASH_SAMPLE_LIMIT) r(0, e.length);
      else {
        const a = XZi.STABLE_HASH_SAMPLE_WINDOWS, l = Math.floor(XZi.STABLE_HASH_SAMPLE_LIMIT / a), c = (e.length - l) / (a - 1);
        for (let u = 0; u < a; u++) {
          const d = Math.round(u * c);
          r(d, Math.min(d + l, e.length));
        }
        for (let u = e.length; u > 0; u = Math.floor(u / 256)) i ^= u & 255, i += (i << 1) + (i << 4) + (i << 7) + (i << 8) + (i << 24);
      }
      const o = (i >>> 0).toString(16).padStart(8, "0");
      if (e.length <= this._hashCacheMaxKeyUnits) for (this._hashCache.set(e, o), this._hashCacheUnits += e.length; this._hashCache.size > this._hashCacheMaxEntries || this._hashCacheUnits > this._hashCacheMaxUnits; ) {
        const a = this._hashCache.keys().next();
        if (a.done) break;
        this._hashCache.delete(a.value), this._hashCacheUnits -= a.value.length;
      }
      return o;
    }
    getSkeleton() {
      return new Ume(this.args);
    }
    hydrate() {
      this.originalUri && this._registerURI(this.originalUri, "original"), this.modifiedUri && this._registerURI(this.modifiedUri, "modified"), Promise.all([this.originalModel, this.modifiedModel]).then(([e, n]) => {
        this._updateCounts();
      });
    }
    _registerURI(e, n) {
      const i = e.scheme, r = n === "original" ? this.originalContents : this.modifiedContents;
      if ((i.startsWith(IJn) || i === "untitled") && r !== void 0) {
        const a = this.instantiationService.createInstance(J3i, r), l = this.composerTextModelService.registerTextModelContentProvider(i, a);
        this._textModelDisposables.add(l);
      }
      const o = this.composerTextModelService.createModelReference(e, void 0).then(async (a) => this._textModelDisposables.isDisposed ? (a.dispose(), a) : (this._textModelDisposables.add(a), this._textModelDisposables.add(a.object.textEditorModel.onDidChangeContent(() => {
        this._updateCounts();
      })), a));
      n === "original" ? this.originalModel = o : this.modifiedModel = o;
    }
    async _updateCounts() {
      if (!this._skipLineCounts) {
        if (!this.originalModel && this.modifiedModel) {
          try {
            const n = (await this.modifiedModel).object.textEditorModel;
            mg((i) => {
              this._linesAdded.set(n.getLineCount(), i), this._linesRemoved.set(0, i);
            });
          } catch {
            mg((e) => {
              this._linesAdded.set(0, e), this._linesRemoved.set(0, e);
            });
          }
          return;
        }
        if (this.originalModel && !this.modifiedModel) {
          try {
            const n = (await this.originalModel).object.textEditorModel;
            mg((i) => {
              this._linesAdded.set(0, i), this._linesRemoved.set(n.getLineCount(), i);
            });
          } catch {
            mg((e) => {
              this._linesAdded.set(0, e), this._linesRemoved.set(0, e);
            });
          }
          return;
        }
        if (!(!this.originalModel || !this.modifiedModel)) try {
          const e = await this.originalModel, n = await this.modifiedModel, i = e.object.textEditorModel, r = n.object.textEditorModel;
          if (i.getValueLength() === 0) {
            mg((d) => {
              this._linesAdded.set(r.getLineCount(), d), this._linesRemoved.set(0, d);
            });
            return;
          }
          const s = i.getLinesContent(), o = r.getLinesContent(), l = tpe.getDefault().computeDiff(s, o, { ignoreTrimWhitespace: false, maxComputationTimeMs: 1e3, computeMoves: false, skipDiffRefinement: true });
          let c = 0, u = 0;
          for (const d of l.changes) {
            const h = d.original.length, p = d.modified.length;
            h === 0 && p > 0 ? c += p : h > 0 && p === 0 ? u += h : h > 0 && p > 0 && (u += h, c += p);
          }
          mg((d) => {
            this._linesAdded.set(c, d), this._linesRemoved.set(u, d);
          });
        } catch {
          mg((n) => {
            this._linesAdded.set(0, n), this._linesRemoved.set(0, n);
          });
        }
      }
    }
    setComments(e) {
      this._comments.set(e, void 0);
    }
    addComment(e) {
      const n = this._comments.get(), i = n.findIndex((r) => r.id === e.id);
      if (i >= 0) {
        const r = [...n];
        r[i] = e, this._comments.set(r, void 0);
      } else this._comments.set([...n, e], void 0);
    }
    removeComment(e) {
      const n = this._comments.get();
      this._comments.set(n.filter((i) => i.id !== e), void 0);
    }
    clearComments() {
      this._comments.set([], void 0);
    }
    createCommentRenderer(e, n, i, r) {
      if (NFl(e)) return st.None;
      const s = new tLf({ comments: this.comments, editor: e, widget: n, githubPRService: i, onCommentPosted: r, instantiationService: this.instantiationService });
      return { dispose: () => s.dispose() };
    }
    dispose() {
      const e = this.originalUri?.toString(), n = this.modifiedUri?.toString();
      this._textModelDisposables.dispose();
    }
    toArgs() {
      return { instantiationService: this.instantiationService, composerTextModelService: this.composerTextModelService, originalUri: this.originalUri, modifiedUri: this.modifiedUri, goToFileUri: this.goToFileUri, contextKeys: this.contextKeys, status: this.status, originalContents: this.originalContents, modifiedContents: this.modifiedContents };
    }
  }, wKe.STABLE_HASH_SAMPLE_LIMIT = 2 * 1024 * 1024, wKe.STABLE_HASH_SAMPLE_WINDOWS = 32, wKe._hashCache = /* @__PURE__ */ new Map(), wKe._hashCacheUnits = 0, wKe._hashCacheMaxEntries = 512, wKe._hashCacheMaxUnits = 16 * 1024 * 1024, wKe._hashCacheMaxKeyUnits = wKe._hashCacheMaxUnits / 2, yN = wKe;
} }), eNi, 