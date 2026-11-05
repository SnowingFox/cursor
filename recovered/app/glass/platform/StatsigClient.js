// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: StatsigClient.js range:681584..689958
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.170Z
// wrapper: TSy deps:10 [E, l_t, mSy, ted, CSy, ied, REo, kgr, i_t, xZn]
// declarations: VQc (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
TSy = L({ "StatsigClient.js"() {
  "use strict";
  E(), l_t(), mSy(), ted(), CSy(), ied(), PEo = class VQc extends YJu {
    constructor(e, n, i = null) {
      NZn._setClientType(e, "javascript-client");
      const r = new Igr(i, (o) => {
        this.$emt(o);
      });
      super(e, i?.dataAdapter ?? new REo(), r, i), this._possibleFirstTouchMetadata = {}, this.getFeatureGate = this._memoize(A6t._gate, this._getFeatureGateImpl.bind(this)), this.getDynamicConfig = this._memoize(A6t._dynamicConfig, this._getDynamicConfigImpl.bind(this)), this.getExperiment = this._memoize(A6t._experiment, this._getExperimentImpl.bind(this)), this.getConfigList = this._memoize(A6t._configList, this._getConfigListImpl.bind(this)), this.getLayer = this._memoize(A6t._layer, this._getLayerImpl.bind(this)), this.getParameterStore = this._memoize(A6t._paramStore, this._getParameterStoreImpl.bind(this)), this._store = new JJu(e), this._network = r, this._user = this._configureUser(n, i), this._sdkInstanceID = kgr();
      const s = i?.plugins ?? [];
      for (const o of s) o.bind(this);
    }
    static instance(e) {
      const n = i_t().instance(e);
      return n instanceof VQc ? n : (QR.warn(xZn() ? "StatsigClient.instance is not supported in server environments" : "Unable to find StatsigClient instance"), new VQc(e ?? "", {}));
    }
    initializeSync(e) {
      return this.loadingStatus !== "Uninitialized" ? R6t(true, this._store.getSource(), -1, null, null, ["MultipleInitializations", ...this._store.getWarnings() ?? []]) : (this._logger.start(), this.updateUserSync(this._user, e));
    }
    async initializeAsync(e) {
      return this._initializePromise ? this._initializePromise : (this._initializePromise = this._initializeAsyncImpl(e), this._initializePromise);
    }
    updateUserSync(e, n) {
      const i = performance.now();
      try {
        return this._updateUserSyncImpl(e, n, i);
      } catch (r) {
        const s = r instanceof Error ? r : new Error(String(r));
        return this._createErrorUpdateDetails(s, i);
      }
    }
    _updateUserSyncImpl(e, n, i) {
      const r = [...this._store.getWarnings() ?? []];
      this._resetForUser(e);
      const s = this.dataAdapter.getDataSync(this._user);
      s == null && r.push("NoCachedValues"), this._store.setValues(s, this._user), this._finalizeUpdate(s);
      const o = n?.disableBackgroundCacheRefresh;
      return o === true || o == null && s?.source === "Bootstrap" ? R6t(true, this._store.getSource(), performance.now() - i, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), r) : (this._runPostUpdate(s ?? null, this._user), R6t(true, this._store.getSource(), performance.now() - i, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), r));
    }
    async updateUserAsync(e, n) {
      const i = performance.now();
      try {
        return await this._updateUserAsyncImpl(e, n);
      } catch (r) {
        const s = r instanceof Error ? r : new Error(String(r));
        return this._createErrorUpdateDetails(s, i);
      }
    }
    async _updateUserAsyncImpl(e, n) {
      this._resetForUser(e);
      const i = this._user;
      aAe._markInitOverallStart(this._sdkKey);
      let r = this.dataAdapter.getDataSync(i);
      if (this._store.setValues(r, this._user), this._setStatus("Loading", r), r = await this.dataAdapter.getDataAsync(r, i, n), i !== this._user) return R6t(false, this._store.getSource(), -1, new Error("User changed during update"), this._network.getLastUsedInitUrlAndReset());
      let s = false;
      r != null && (aAe._markInitProcessStart(this._sdkKey), s = this._store.setValues(r, this._user), aAe._markInitProcessEnd(this._sdkKey, { success: s })), this._finalizeUpdate(r), s || (this._errorBoundary.attachErrorIfNoneExists(QJu.NO_NETWORK_DATA), this.$emt({ name: "initialization_failure" })), aAe._markInitOverallEnd(this._sdkKey, s, this._store.getCurrentSourceDetails());
      const o = aAe._enqueueDiagnosticsEvent(this._user, this._logger, this._sdkKey, this._options);
      return R6t(s, this._store.getSource(), o, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings());
    }
    getContext() {
      return { sdkKey: this._sdkKey, options: this._options, values: this._store.getValues(), user: JSON.parse(JSON.stringify(this._user)), errorBoundary: this._errorBoundary, session: Egr.get(this._sdkKey), stableID: h$e.get(this._sdkKey), sdkInstanceID: this._sdkInstanceID };
    }
    checkGate(e, n) {
      return this.getFeatureGate(e, n).value;
    }
    logEvent(e, n, i) {
      const r = typeof e == "string" ? { eventName: e, value: n, metadata: i } : e;
      this.$emt({ name: "log_event_called", event: r }), this._logger.enqueue({ ...r, user: this._user, time: Date.now() });
    }
    updateUserWithAnalyticsOnlyMetadata(e) {
      this._user = this._configureUser({ ...this._user, analyticsOnlyMetadata: e }, this._options);
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    async _initializeAsyncImpl(e) {
      return u7.isReady() || await u7.isReadyResolver(), this._logger.start(), this.updateUserAsync(this._user, e);
    }
    _createErrorUpdateDetails(e, n) {
      return R6t(false, this._store.getSource(), performance.now() - n, e, null, [...this._store.getWarnings() ?? []]);
    }
    _finalizeUpdate(e) {
      this._store.finalize(), this._setStatus("Ready", e);
    }
    _runPostUpdate(e, n) {
      this.dataAdapter.getDataAsync(e, n, { priority: "low" }).catch((i) => {
        QR.error("An error occurred after update.", i);
      });
    }
    _resetForUser(e) {
      this._logger.reset(), this._store.reset(), this._user = this._configureUser(e, this._options);
    }
    _configureUser(e, n) {
      const i = DZn(e, n), r = i.customIDs?.stableID;
      return r && h$e.setOverride(r, this._sdkKey), i.analyticsOnlyMetadata = { ...i.analyticsOnlyMetadata, ...this._possibleFirstTouchMetadata }, i;
    }
    _getFeatureGateImpl(e, n) {
      const { result: i, details: r } = this._store.getGate(e), s = aSy(e, r, i), a = this.overrideAdapter?.getGateOverride?.(s, this._user, n) ?? s;
      return this._enqueueExposure(e, KQu(this._user, a, this._store.getExposureMapping()), n), this.$emt({ name: "gate_evaluation", gate: a }), a;
    }
    _getDynamicConfigImpl(e, n) {
      const { result: i, details: r } = this._store.getConfig(e), s = ZJu(e, r, i), a = this.overrideAdapter?.getDynamicConfigOverride?.(s, this._user, n) ?? s;
      return this._enqueueExposure(e, JTo(this._user, a, this._store.getExposureMapping()), n), this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: a }), a;
    }
    _getExperimentImpl(e, n) {
      const { result: i, details: r } = this._store.getConfig(e), s = lSy(e, r, i);
      s.__evaluation != null && (s.__evaluation.secondary_exposures = dgr(s.__evaluation?.secondary_exposures ?? [], this._store.getExposureMapping()));
      const a = this.overrideAdapter?.getExperimentOverride?.(s, this._user, n) ?? s;
      return this._enqueueExposure(e, JTo(this._user, a, this._store.getExposureMapping()), n), this.$emt({ name: "experiment_evaluation", experiment: a }), a;
    }
    _getConfigListImpl() {
      return this._store.getConfigList();
    }
    _getLayerImpl(e, n) {
      const { result: i, details: r } = this._store.getLayer(e), s = cSy(e, r, i), o = this.overrideAdapter?.getLayerOverride?.(s, this._user, n);
      n?.disableExposureLog && this._logger.incrementNonExposureCount(e);
      const a = uSy(s, o, o?.__value ?? s.__value, (l) => {
        n?.disableExposureLog || this._enqueueExposure(e, YQu(this._user, a, l, this._store.getExposureMapping()), n);
      });
      return this.$emt({ name: "layer_evaluation", layer: a }), a;
    }
    _getParameterStoreImpl(e, n) {
      const { result: i, details: r } = this._store.getParamStore(e);
      this._logger.incrementNonExposureCount(e);
      const s = { name: e, details: r, __configuration: i, get: ned(this, i, n) }, o = this.overrideAdapter?.getParamStoreOverride?.(s, n);
      return o != null && (s.__configuration = o.config, s.details = o.details, s.get = ned(this, o.config, n)), s;
    }
  };
} }), ESy,
