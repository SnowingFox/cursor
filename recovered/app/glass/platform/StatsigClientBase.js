// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StatsigClientBase.js range:667063..670805
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.171Z
// wrapper: rSy deps:12 [E, r_t, wJu, cJu, Nde, EJu, I6t, wEo, Cgr, AZn, a_t, Map]
// declarations: (none in segment) (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
rSy = L({ "StatsigClientBase.js"() {
  "use strict";
  E(), r_t(), r_t(), wJu(), cJu(), Nde(), EJu(), I6t(), wEo(), Cgr(), AZn(), a_t(), KJu = 3e3, YJu = class {
    constructor(t, e, n, i) {
      this.loadingStatus = "Uninitialized", this._initializePromise = null, this._listeners = {};
      const r = this.$emt.bind(this);
      i?.logLevel != null && (QR.level = i.logLevel), i?.disableStorage && u7._setDisabled(true), i?.initialSessionID && Egr.overrideInitialSessionID(i.initialSessionID, t), i?.storageProvider && u7._setProvider(i.storageProvider), i?.enableCookies && h$e._setCookiesEnabled(t, i.enableCookies), i?.disableStableID && h$e._setDisabled(t, true), this._sdkKey = t, this._options = i ?? {}, this._memoCache = /* @__PURE__ */ new Map(), this.overrideAdapter = i?.overrideAdapter ?? null, this._logger = new lJu(t, r, n, i), this._errorBoundary = new kJu(t, i, r), this._errorBoundary.wrap(this), this._errorBoundary.wrap(e), this._errorBoundary.wrap(this._logger), n.setErrorBoundary(this._errorBoundary), this.dataAdapter = e, this.dataAdapter.attach(t, i, n), this.storageProvider = u7, this.overrideAdapter?.loadFromStorage?.()?.catch((s) => this._errorBoundary.logError("OA::loadFromStorage", s)), this._primeReadyRipcord(), iSy(t, this);
    }
    updateRuntimeOptions(t) {
      t.loggingEnabled ? (this._options.loggingEnabled = t.loggingEnabled, this._logger.setLoggingEnabled(t.loggingEnabled)) : t.disableLogging != null && (this._options.disableLogging = t.disableLogging, this._logger.setLoggingEnabled(t.disableLogging ? "disabled" : "browser-only")), t.disableStorage != null && (this._options.disableStorage = t.disableStorage, u7._setDisabled(t.disableStorage)), t.enableCookies != null && (this._options.enableCookies = t.enableCookies, h$e._setCookiesEnabled(this._sdkKey, t.enableCookies)), t.logEventCompressionMode ? this._logger.setLogEventCompressionMode(t.logEventCompressionMode) : t.disableCompression && this._logger.setLogEventCompressionMode(o_t.Disabled);
    }
    flush() {
      return this._logger.flush();
    }
    async shutdown() {
      this.$emt({ name: "pre_shutdown" }), this._setStatus("Uninitialized", null), this._initializePromise = null, await this._logger.stop();
    }
    on(t, e) {
      this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e);
    }
    off(t, e) {
      if (this._listeners[t]) {
        const n = this._listeners[t].indexOf(e);
        n !== -1 && this._listeners[t].splice(n, 1);
      }
    }
    $on(t, e) {
      e.__isInternal = true, this.on(t, e);
    }
    $emt(t) {
      const e = (n) => {
        try {
          n(t);
        } catch (i) {
          if (n.__isInternal === true) {
            this._errorBoundary.logError(`__emit:${t.name}`, i);
            return;
          }
          QR.error("An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.", t);
        }
      };
      this._listeners[t.name] && this._listeners[t.name].forEach((n) => e(n)), this._listeners["*"]?.forEach(e);
    }
    _setStatus(t, e) {
      this.loadingStatus = t, this._memoCache.clear(), this.$emt({ name: "values_updated", status: t, values: e });
    }
    _enqueueExposure(t, e, n) {
      if (n?.disableExposureLog === true) {
        this._logger.incrementNonExposureCount(t);
        return;
      }
      this._logger.enqueue(e);
    }
    _memoize(t, e) {
      return (n, i) => {
        if (this._options.disableEvaluationMemoization) return e(n, i);
        const r = Dyy(t, n, i);
        return r ? (this._memoCache.has(r) || (this._memoCache.size >= KJu && this._memoCache.clear(), this._memoCache.set(r, e(n, i))), this._memoCache.get(r)) : e(n, i);
      };
    }
  };
} }), XJu,
