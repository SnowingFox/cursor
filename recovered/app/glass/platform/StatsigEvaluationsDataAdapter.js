// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StatsigEvaluationsDataAdapter.js range:680286..681584
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.172Z
// wrapper: ied deps:5 [E, l_t, ted, constructor, _getSdkKey]
// declarations: extends (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
ied = L({ "StatsigEvaluationsDataAdapter.js"() {
  "use strict";
  E(), l_t(), ted(), REo = class extends vJu {
    constructor() {
      super("EvaluationsDataAdapter", "evaluations"), this._network = null, this._options = null;
    }
    attach(t, e, n) {
      super.attach(t, e, n), n !== null && n instanceof Igr ? this._network = n : this._network = new Igr(e ?? {});
    }
    getDataAsync(t, e, n) {
      return this._getDataAsyncImpl(t, DZn(e, this._options), n);
    }
    prefetchData(t, e) {
      return this._prefetchDataImpl(t, e);
    }
    setData(t) {
      const e = x6t(t, "has_updates", "data");
      e && "user" in e ? super.setData(t, e.user) : QR.error("StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.");
    }
    setDataLegacy(t, e) {
      super.setData(t, e);
    }
    async _fetchFromNetwork(t, e, n, i) {
      return await this._network?.fetchEvaluations(this._getSdkKey(), t, n?.priority, e, i) ?? null;
    }
    _getCacheKey(t) {
      const e = ogr(this._getSdkKey(), t, this._options?.customUserCacheKeyFunc);
      return `${XJu}.${this._cacheSuffix}.${e}`;
    }
    _isCachedResultValidFor204(t, e) {
      return t.fullUserHash != null && t.fullUserHash === pJu(e);
    }
  };
} }), PEo,
