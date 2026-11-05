// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NetworkFallbackResolver.js range:653804..656735
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.828Z
jyy = L({ "NetworkFallbackResolver.js"() {
  "use strict";
  E(), Oyy(), Ydn(), Nde(), a_t(), vEo = 10080 * 60 * 1e3, MJu = 14400 * 1e3, DJu = class {
    constructor(t) {
      this._fallbackInfo = null, this._errorBoundary = null, this._dnsQueryCooldowns = {}, this._networkOverrideFunc = t.networkConfig?.networkOverrideFunc;
    }
    setErrorBoundary(t) {
      this._errorBoundary = t;
    }
    tryBumpExpiryTime(t, e) {
      const n = this._fallbackInfo?.[e.endpoint];
      n && (n.expiryTime = Date.now() + vEo, fEo(t, { ...this._fallbackInfo, [e.endpoint]: n }));
    }
    getActiveFallbackUrl(t, e) {
      if (e.customUrl != null && e.fallbackUrls != null) return null;
      let n = this._fallbackInfo;
      n == null && (n = Byy(t) ?? {}, this._fallbackInfo = n);
      const i = n[e.endpoint];
      return !i || Date.now() > (i.expiryTime ?? 0) || e.getChecksum() !== i.urlConfigChecksum ? (delete n[e.endpoint], this._fallbackInfo = n, fEo(t, this._fallbackInfo), null) : i.url ? i.url : null;
    }
    async tryFetchUpdatedFallbackInfo(t, e, n, i) {
      try {
        if (!Fyy(n, i)) return false;
        const s = e.customUrl == null && e.fallbackUrls == null ? await this._tryFetchFallbackUrlsFromNetwork(e) : e.fallbackUrls, o = this._pickNewFallbackUrl(this._fallbackInfo?.[e.endpoint], s);
        return o ? (this._updateFallbackInfoWithNewUrl(t, e, o), true) : false;
      } catch (r) {
        return this._errorBoundary?.logError("tryFetchUpdatedFallbackInfo", r), false;
      }
    }
    _updateFallbackInfoWithNewUrl(t, e, n) {
      const i = { urlConfigChecksum: e.getChecksum(), url: n, expiryTime: Date.now() + vEo, previous: [] }, r = e.endpoint, s = this._fallbackInfo?.[r];
      s && i.previous.push(...s.previous), i.previous.length > 10 && (i.previous = []);
      const o = this._fallbackInfo?.[r]?.url;
      o != null && i.previous.push(o), this._fallbackInfo = { ...this._fallbackInfo, [r]: i }, fEo(t, this._fallbackInfo);
    }
    async _tryFetchFallbackUrlsFromNetwork(t) {
      const e = this._dnsQueryCooldowns[t.endpoint];
      if (e && Date.now() < e) return null;
      this._dnsQueryCooldowns[t.endpoint] = Date.now() + MJu;
      const n = [], i = await Nyy(this._networkOverrideFunc ?? fetch), r = Uyy(t.defaultUrl);
      for (const s of i) {
        if (!s.startsWith(t.endpointDnsKey + "=")) continue;
        const o = s.split("=");
        if (o.length > 1) {
          let a = o[1];
          a.endsWith("/") && (a = a.slice(0, -1)), n.push(`https://${a}${r}`);
        }
      }
      return n;
    }
    _pickNewFallbackUrl(t, e) {
      if (e == null) return null;
      const n = new Set(t?.previous ?? []), i = t?.url;
      let r = null;
      for (const s of e) {
        const o = s.endsWith("/") ? s.slice(0, -1) : s;
        if (!n.has(s) && o !== i) {
          r = o;
          break;
        }
      }
      return r;
    }
  };
} }), _Eo, bEo, 