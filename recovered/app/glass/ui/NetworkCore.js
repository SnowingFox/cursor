// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NetworkCore.js range:659904..666516
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.827Z
Jyy = L({ "NetworkCore.js"() {
  "use strict";
  E(), r_t(), r_t(), zTo(), Nde(), lgr(), jyy(), NJu(), mEo(), I6t(), wEo(), Cgr(), BJu(), Sgr(), AZn(), sEo(), jJu = 1e4, $Ju = 500, HJu = 3e4, WJu = 1e3, CEo = 50, GJu = CEo / WJu, qJu = /* @__PURE__ */ new Set([408, 500, 502, 503, 504, 522, 524, 599]), zJu = class {
    constructor(t, e) {
      this._emitter = e, this._errorBoundary = null, this._timeout = jJu, this._netConfig = {}, this._options = {}, this._leakyBucket = {}, this._lastUsedInitUrl = null, t && (this._options = t), this._options.networkConfig && (this._netConfig = this._options.networkConfig), this._netConfig.networkTimeoutMs && (this._timeout = this._netConfig.networkTimeoutMs), this._fallbackResolver = new DJu(this._options), this.setLogEventCompressionMode(this._getLogEventCompressionMode(t));
    }
    setLogEventCompressionMode(t) {
      this._options.logEventCompressionMode = t;
    }
    setErrorBoundary(t) {
      this._errorBoundary = t, this._errorBoundary.wrap(this), this._errorBoundary.wrap(this._fallbackResolver), this._fallbackResolver.setErrorBoundary(t);
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon == "function";
    }
    getLastUsedInitUrlAndReset() {
      const t = this._lastUsedInitUrl;
      return this._lastUsedInitUrl = null, t;
    }
    beacon(t) {
      if (!TEo(t)) return false;
      const e = this._getInternalRequestArgs("POST", t), n = this._getPopulatedURL(e), i = navigator;
      return i.sendBeacon.bind(i)(n, e.body);
    }
    async post(t) {
      const e = this._getInternalRequestArgs("POST", t);
      return this._tryEncodeBody(e), await this._tryToCompressBody(e), this._sendRequest(e);
    }
    get(t) {
      const e = this._getInternalRequestArgs("GET", t);
      return this._sendRequest(e);
    }
    async _sendRequest(t) {
      if (!TEo(t) || this._netConfig.preventAllNetworkTraffic) return null;
      const { method: e, body: n, retries: i, attempt: r } = t, s = t.urlConfig.endpoint;
      if (this._isRateLimited(s)) return QR.warn(`Request to ${s} was blocked because you are making requests too frequently.`), null;
      const o = r ?? 1, a = typeof AbortController < "u" ? new AbortController() : null, l = setTimeout(() => {
        a?.abort(`Timeout of ${this._timeout}ms expired.`);
      }, this._timeout), c = this._getPopulatedURL(t);
      let u = null;
      const d = PZn();
      try {
        const h = { method: e, body: n, headers: { ...t.headers }, signal: a?.signal, priority: t.priority, keepalive: d };
        Zyy(t, o);
        const p = this._leakyBucket[s];
        if (p && (p.lastRequestTime = Date.now(), this._leakyBucket[s] = p), u = await (this._netConfig.networkOverrideFunc ?? fetch)(c, h), clearTimeout(l), !u.ok) {
          const _ = await u.text().catch(() => "No Text"), b = new Error(`NetworkError: ${c} ${_}`);
          throw b.name = "NetworkError", b;
        }
        const f = await u.text();
        return UJu(t, u, o, f), this._fallbackResolver.tryBumpExpiryTime(t.sdkKey, t.urlConfig), { body: f, code: u.status };
      } catch (h) {
        const p = Yyy(a, h), g = Xyy(a);
        if (UJu(t, u, o, "", h), await this._fallbackResolver.tryFetchUpdatedFallbackInfo(t.sdkKey, t.urlConfig, p, g) && (t.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(t.sdkKey, t.urlConfig)), !i || o > i || !qJu.has(u?.status ?? 500)) {
          this._emitter?.({ name: "error", error: h, tag: FJu.NetworkError, requestArgs: t });
          const _ = `A networking error occurred during ${e} request to ${c}.`;
          return QR.error(_, p, h), this._errorBoundary?.attachErrorIfNoneExists(_), null;
        }
        return await Qyy(o), this._sendRequest({ ...t, retries: i, attempt: o + 1 });
      }
    }
    _getLogEventCompressionMode(t) {
      let e = t?.logEventCompressionMode;
      return !e && t?.disableCompression === true && (e = o_t.Disabled), e || (e = o_t.Enabled), e;
    }
    _isRateLimited(t) {
      const e = Date.now(), n = this._leakyBucket[t] ?? { count: 0, lastRequestTime: e }, i = e - n.lastRequestTime, r = Math.floor(i * GJu);
      return n.count = Math.max(0, n.count - r), n.count >= CEo ? true : (n.count += 1, n.lastRequestTime = e, this._leakyBucket[t] = n, false);
    }
    _getPopulatedURL(t) {
      const e = t.fallbackUrl ?? t.urlConfig.getUrl();
      (t.urlConfig.endpoint === Dke._initialize || t.urlConfig.endpoint === Dke._download_config_specs) && (this._lastUsedInitUrl = e);
      const n = { [yet.SdkKey]: t.sdkKey, [yet.SdkType]: NZn._get(t.sdkKey), [yet.SdkVersion]: bgr, [yet.Time]: String(Date.now()), [yet.SessionID]: kEo.get(t.sdkKey), ...t.params }, i = Object.keys(n).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&");
      return `${e}${i ? `?${i}` : ""}`;
    }
    _tryEncodeBody(t) {
      const e = E6t(), n = t.body;
      if (!(!t.isStatsigEncodable || this._options.disableStatsigEncoding || typeof n != "string" || $To("no-encode") != null || !e?.btoa)) try {
        t.body = e.btoa(n).split("").reverse().join(""), t.params = { ...t.params ?? {}, [yet.StatsigEncoded]: "1" };
      } catch (i) {
        QR.warn(`Request encoding failed for ${t.urlConfig.getUrl()}`, i);
      }
    }
    async _tryToCompressBody(t) {
      const e = t.body;
      if (!(typeof e != "string" || !Kyy(t, this._options))) try {
        const n = new TextEncoder().encode(e), i = new CompressionStream("gzip"), r = i.writable.getWriter();
        r.write(n).catch(QR.error), r.close().catch(QR.error);
        const s = i.readable.getReader(), o = [];
        let a;
        for (; !(a = await s.read()).done; ) o.push(a.value);
        const l = o.reduce((d, h) => d + h.length, 0), c = new Uint8Array(l);
        let u = 0;
        for (const d of o) c.set(d, u), u += d.length;
        t.body = c, t.params = { ...t.params ?? {}, [yet.IsGzipped]: "1" };
      } catch (n) {
        QR.warn(`Request compression failed for ${t.urlConfig.getUrl()}`, n);
      }
    }
    _getInternalRequestArgs(t, e) {
      const n = this._fallbackResolver.getActiveFallbackUrl(e.sdkKey, e.urlConfig), i = { ...e, method: t, fallbackUrl: n };
      return "data" in e && VJu(i, e.data), i;
    }
  }, TEo = (t) => t.sdkKey ? true : (QR.warn("Unable to make request without an SDK key"), false), VJu = (t, e) => {
    const { sdkKey: n, fallbackUrl: i } = t, r = h$e.get(n), s = kEo.get(n), o = NZn._get(n);
    t.body = JSON.stringify({ ...e, statsigMetadata: { ...aEo.get(), stableID: r, sessionID: s, sdkType: o, fallbackUrl: i } });
  };
} }), 