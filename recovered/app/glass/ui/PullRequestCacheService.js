// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PullRequestCacheService.js range:33573798..33579153
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.934Z
Zzf = L({ "PullRequestCacheService.js"() {
  "use strict";
  E(), Qe(), Rn(), It(), zzf = "pullRequestCache", Vzf = 1, wLi = "metadata", kAt = "files", Kzf = ":meta", UUl = ":diff:", Yzf = 8, jUl = jn("pullRequestCacheService"), Xzf = class extends st {
    constructor() {
      super(...arguments), this._pendingWrites = [], this._isWriteFlushScheduled = false;
    }
    _getDb() {
      return this._dbPromise || (this._dbPromise = new Promise((t, e) => {
        const n = indexedDB.open(zzf, Vzf);
        n.onupgradeneeded = () => {
          const i = n.result;
          i.objectStoreNames.contains(wLi) || i.createObjectStore(wLi), i.objectStoreNames.contains(kAt) || i.createObjectStore(kAt);
        }, n.onsuccess = () => t(n.result), n.onerror = () => e(n.error);
      })), this._dbPromise;
    }
    async _idbGet(t, e) {
      const n = await this._getDb();
      return new Promise((i, r) => {
        const a = n.transaction(t, "readonly").objectStore(t).get(e);
        a.onsuccess = () => i(a.result), a.onerror = () => r(a.error);
      });
    }
    async _idbGetByPrefix(t, e) {
      const n = await this._getDb();
      return new Promise((i, r) => {
        const s = n.transaction(t, "readonly"), o = s.objectStore(t), a = IDBKeyRange.bound(e, `${e}￿`, false, false), l = o.openCursor(a), c = [];
        l.onsuccess = () => {
          const u = l.result;
          if (!u) {
            i(c);
            return;
          }
          c.push({ key: u.key, value: u.value }), u.continue();
        }, l.onerror = () => r(l.error), s.onabort = () => r(s.error);
      });
    }
    _enqueueWrite(t, e, n) {
      this._pendingWrites.push({ storeName: t, key: e, value: n }), this._isWriteFlushScheduled || (this._isWriteFlushScheduled = true, queueMicrotask(() => {
        this._isWriteFlushScheduled = false, this._flushPendingWrites();
      }));
    }
    async _flushPendingWrites() {
      if (this._pendingWrites.length === 0) return;
      const t = this._pendingWrites;
      this._pendingWrites = [];
      try {
        const e = await this._getDb(), n = new Set(t.map((i) => i.storeName));
        await new Promise((i, r) => {
          const s = e.transaction(Array.from(n), "readwrite");
          for (const o of t) s.objectStore(o.storeName).put(o.value, o.key);
          s.oncomplete = () => i(), s.onerror = () => r(s.error), s.onabort = () => r(s.error);
        });
      } catch {
      }
    }
    _readCachedValue(t) {
      if (t != null) {
        if (typeof t == "string") try {
          return JSON.parse(t);
        } catch {
          return;
        }
        if (typeof t == "object") return t;
      }
    }
    _isPullRequestFilesMeta(t) {
      if (typeof t != "object" || t === null) return false;
      const e = t;
      return typeof e.baseSha == "string" && typeof e.headSha == "string" && typeof e.fileCount == "number" && Number.isInteger(e.fileCount) && e.fileCount >= 0;
    }
    _isPullRequestChangedFile(t) {
      return typeof t == "object" && t !== null;
    }
    _makeFilesMetaStorageKey(t) {
      return `${t}${Kzf}`;
    }
    _makeFilesDiffStorageKey(t, e) {
      return `${t}${UUl}${e.toString().padStart(Yzf, "0")}`;
    }
    _makeFilesDiffPrefix(t) {
      return `${t}${UUl}`;
    }
    async loadPullRequestMetadata(t) {
      const e = await this._idbGet(wLi, t);
      return this._readCachedValue(e);
    }
    savePullRequestMetadata(t, e) {
      this._enqueueWrite(wLi, t, e);
    }
    async loadPullRequestFiles(t) {
      const e = await this._idbGet(kAt, this._makeFilesMetaStorageKey(t)), n = this._readCachedValue(e);
      if (this._isPullRequestFilesMeta(n)) {
        const r = await this._idbGetByPrefix(kAt, this._makeFilesDiffPrefix(t));
        if (r.length < n.fileCount) return;
        const s = [];
        for (let o = 0; o < n.fileCount; o++) {
          const a = this._readCachedValue(r[o]?.value);
          if (!this._isPullRequestChangedFile(a)) return;
          s.push(a);
        }
        return { baseSha: n.baseSha, headSha: n.headSha, files: s };
      }
      const i = await this._idbGet(kAt, t);
      return this._readCachedValue(i);
    }
    savePullRequestFiles(t, e) {
      const n = { baseSha: e.baseSha, headSha: e.headSha, fileCount: e.files.length };
      this._enqueueWrite(kAt, this._makeFilesMetaStorageKey(t), n);
      for (let i = 0; i < e.files.length; i++) this._enqueueWrite(kAt, this._makeFilesDiffStorageKey(t, i), e.files[i]);
    }
    dispose() {
      super.dispose(), this._pendingWrites = [], this._dbPromise?.then((t) => t.close()).catch(() => {
      }), this._dbPromise = void 0;
    }
  }, bn(jUl, Xzf, 1);
} });
function uCs(t) {
  const e = t.detailsUrl?.trim();
  if (e && e.length > 0) return `url:${e}`;
  if (t.provider === "github_actions_job") {
    const n = t.providerCheckId?.trim();
    if (n && n.length > 0) return `gha:${n}`;
  }
  return `name:${t.name}`;
}
function $Ul(t) {
  const e = [uCs(t)], n = t.detailsUrl?.trim();
  if (n && n.length > 0 && e.push(`url:${n}`), t.provider === "github_actions_job") {
    const i = t.providerCheckId?.trim();
    i && i.length > 0 && e.push(`gha:${i}`);
  }
  return e.push(`name:${t.name}`), [...new Set(e)];
}
function HUl(t, e) {
  for (const n of $Ul(e)) {
    const i = t.get(n);
    if (i !== void 0) return i;
  }
}
var Qzf, 