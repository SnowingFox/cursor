// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DataAdapterCore.js range:644165..647586
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.597Z
Tyy = L({ "DataAdapterCore.js"() {
  "use strict";
  E(), Nde(), Cgr(), mJu(), a_t(), gJu(), hEo = 10, vJu = class {
    constructor(t, e) {
      this._adapterName = t, this._cacheSuffix = e, this._options = null, this._sdkKey = null, this._lastModifiedStoreKey = `statsig.last_modified_time.${e}`, this._inMemoryCache = new _Ju();
    }
    attach(t, e, n) {
      this._sdkKey = t, this._options = e;
    }
    getDataSync(t) {
      const e = t && DZn(t, this._options), n = this._getCacheKey(e), i = this._inMemoryCache.get(n, e);
      if (i && this._getIsCacheValueValid(i)) return i;
      const r = this._loadFromCache(n);
      return r && this._getIsCacheValueValid(r) ? (this._inMemoryCache.add(n, r), this._inMemoryCache.get(n, e)) : null;
    }
    setData(t, e) {
      const n = e && DZn(e, this._options), i = this._getCacheKey(n);
      this._inMemoryCache.add(i, dEo("Bootstrap", t, null, n));
    }
    _getIsCacheValueValid(t) {
      return t.stableID == null || t.stableID === h$e.get(this._getSdkKey());
    }
    async _getDataAsyncImpl(t, e, n) {
      u7.isReady() || await u7.isReadyResolver();
      const i = t ?? this.getDataSync(e), r = [this._fetchAndPrepFromNetwork(i, e, n)];
      return n?.timeoutMs && r.push(new Promise((s) => setTimeout(s, n.timeoutMs)).then(() => (QR.debug("Fetching latest value timed out"), null))), await Promise.race(r);
    }
    async _prefetchDataImpl(t, e) {
      const n = t && DZn(t, this._options), i = this._getCacheKey(n), r = await this._getDataAsyncImpl(null, n, e);
      r && this._inMemoryCache.add(i, { ...r, source: "Prefetch" });
    }
    async _fetchAndPrepFromNetwork(t, e, n) {
      const i = t?.data ?? null, r = t != null && this._isCachedResultValidFor204(t, e), s = await this._fetchFromNetwork(i, e, n, r);
      if (!s) return QR.debug("No response returned for latest value"), null;
      const o = x6t(s, "has_updates", "Response"), a = this._getSdkKey(), l = h$e.get(a);
      let c = null;
      if (o?.has_updates === true) c = dEo("Network", s, l, e);
      else if (i && o?.has_updates === false) c = dEo("NetworkNotModified", i, l, e);
      else return null;
      const u = this._getCacheKey(e);
      return this._inMemoryCache.add(u, c), this._writeToCache(u, c), c;
    }
    _getSdkKey() {
      return this._sdkKey != null ? this._sdkKey : (QR.error(`${this._adapterName} is not attached to a Client`), "");
    }
    _loadFromCache(t) {
      const e = u7.getItem?.(t);
      if (e == null) return null;
      const n = x6t(e, "source", "Cached Result");
      return n ? { ...n, source: "Cache" } : null;
    }
    _writeToCache(t, e) {
      u7.setItem(t, JSON.stringify(e)), this._runLocalStorageCacheEviction(t);
    }
    _runLocalStorageCacheEviction(t) {
      const e = RZn(this._lastModifiedStoreKey) ?? {};
      e[t] = Date.now();
      const n = fJu(e, hEo);
      n && (delete e[n], u7.removeItem(n)), pgr(this._lastModifiedStoreKey, e);
    }
  }, _Ju = class {
    constructor() {
      this._data = {};
    }
    get(t, e) {
      const n = this._data[t], i = n?.stableID, r = e?.customIDs?.stableID;
      return r && i && r !== i ? (QR.warn("'StatsigUser.customIDs.stableID' mismatch"), null) : n;
    }
    add(t, e) {
      const n = fJu(this._data, hEo - 1);
      n && delete this._data[n], this._data[t] = e;
    }
    merge(t) {
      this._data = { ...this._data, ...t };
    }
  };
} }), 