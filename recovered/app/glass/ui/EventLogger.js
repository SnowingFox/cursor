// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EventLogger.js range:633996..640782
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.660Z
cJu = L({ "EventLogger.js"() {
  "use strict";
  E(), agr(), Ydn(), Nde(), lgr(), I6t(), ZQu(), AZn(), a_t(), eJu(), sEo(), nJu = 100, iJu = 100, rJu = 1e4, sJu = 1e3, oJu = 6e5, aJu = 500, oEo = 200, Zdn = {}, Qdn = { Startup: "startup", GainedFocus: "gained_focus" }, lJu = class Gjn {
    constructor(e, n, i, r) {
      this._sdkKey = e, this._emitter = n, this._network = i, this._options = r, this._queue = [], this._lastExposureTimeMap = {}, this._lastExposureTimeMapSize = 0, this._nonExposedChecks = {}, this._hasRunQuickFlush = false, this._creationTime = Date.now(), this._loggingEnabled = r?.loggingEnabled ?? (r?.disableLogging === true ? eEo.disabled : eEo.browserOnly), r?.loggingEnabled && r.disableLogging !== void 0 && QR.warn("Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging."), this._maxQueueSize = r?.loggingBufferMaxSize ?? nJu;
      const s = r?.networkConfig;
      this._logEventUrlConfig = new nEo(Dke._rgstr, s?.logEventUrl, s?.api, s?.logEventFallbackUrls);
    }
    static _safeFlushAndForget(e) {
      Zdn[e]?.flush().catch(() => {
      });
    }
    static _safeRetryFailedLogs(e) {
      Zdn[e]?._retryFailedLogs(Qdn.GainedFocus);
    }
    setLogEventCompressionMode(e) {
      this._network.setLogEventCompressionMode(e);
    }
    setLoggingEnabled(e) {
      this._loggingEnabled = e;
    }
    enqueue(e) {
      this._shouldLogEvent(e) && (this._normalizeAndAppendEvent(e), this._quickFlushIfNeeded(), this._queue.length > this._maxQueueSize && Gjn._safeFlushAndForget(this._sdkKey));
    }
    incrementNonExposureCount(e) {
      const n = this._nonExposedChecks[e] ?? 0;
      this._nonExposedChecks[e] = n + 1;
    }
    reset() {
      this.flush().catch(() => {
      }), this._lastExposureTimeMap = {}, this._lastExposureTimeMapSize = 0;
    }
    start() {
      const e = xZn();
      e && this._options?.loggingEnabled !== "always" || (Zdn[this._sdkKey] = this, e || tJu((n) => {
        n === "background" ? Gjn._safeFlushAndForget(this._sdkKey) : n === "foreground" && Gjn._safeRetryFailedLogs(this._sdkKey);
      }), this._retryFailedLogs(Qdn.Startup), this._startBackgroundFlushInterval());
    }
    async stop() {
      this._flushIntervalId && (clearInterval(this._flushIntervalId), this._flushIntervalId = null), delete Zdn[this._sdkKey], await this.flush();
    }
    async flush() {
      for (this._appendAndResetNonExposedChecks(); this._queue.length > 0; ) {
        if (PZn() || await new Promise((n) => setTimeout(n, 0)), PZn()) {
          const n = this._queue;
          this._queue = [], n.length > 0 && await this._sendEvents(n);
          return;
        }
        const e = this._queue.splice(0, iJu);
        if (e.length === 0) return;
        await this._sendEvents(e);
      }
    }
    _quickFlushIfNeeded() {
      this._hasRunQuickFlush || (this._hasRunQuickFlush = true, !(Date.now() - this._creationTime > oEo) && setTimeout(() => Gjn._safeFlushAndForget(this._sdkKey), oEo));
    }
    _shouldLogEvent(e) {
      if (this._options?.loggingEnabled !== "always" && xZn()) return false;
      if (!VQu(e)) return true;
      const n = e.user ? e.user : { statsigEnvironment: void 0 }, i = HQu(this._sdkKey, n), r = e.metadata ? e.metadata : {}, s = [e.eventName, i, r.gate, r.config, r.ruleID, r.allocatedExperiment, r.parameterName, String(r.isExplicitParameter), r.reason].join("|"), o = this._lastExposureTimeMap[s], a = Date.now();
      return o && a - o < oJu ? false : (this._lastExposureTimeMapSize > sJu && (this._lastExposureTimeMap = {}, this._lastExposureTimeMapSize = 0), this._lastExposureTimeMap[s] === void 0 && this._lastExposureTimeMapSize++, this._lastExposureTimeMap[s] = a, true);
    }
    async _sendEvents(e, n = true) {
      if (this._loggingEnabled === "disabled") return n && this._saveFailedLogsToStorage(e), false;
      try {
        const r = PZn() && this._network.isBeaconSupported() && this._options?.networkConfig?.networkOverrideFunc == null;
        return this._emitter({ name: "pre_logs_flushed", events: e }), (r ? this._sendEventsViaBeacon(e) : await this._sendEventsViaPost(e)).success ? (this._emitter({ name: "logs_flushed", events: e }), true) : (QR.warn("Failed to flush events."), n && this._saveFailedLogsToStorage(e), false);
      } catch {
        return QR.warn("Failed to flush events."), false;
      }
    }
    async _sendEventsViaPost(e) {
      const i = (await this._network.post(this._getRequestData(e)))?.code ?? -1;
      return { success: i >= 200 && i < 300 };
    }
    _sendEventsViaBeacon(e) {
      return { success: this._network.beacon(this._getRequestData(e)) };
    }
    _getRequestData(e) {
      return { sdkKey: this._sdkKey, data: { events: e }, urlConfig: this._logEventUrlConfig, retries: 3, isCompressable: true, params: { [yet.EventCount]: String(e.length) }, credentials: "same-origin" };
    }
    _saveFailedLogsToStorage(e) {
      const n = this._getStorageKey();
      try {
        const i = RZn(n);
        for (i && i.length > 0 && (e = i.concat(e)); e.length > aJu; ) e.shift();
        pgr(n, e);
      } catch {
        QR.warn("Unable to save failed logs to storage");
      }
    }
    _retryFailedLogs(e) {
      const n = this._getStorageKey();
      (async () => {
        u7.isReady() || await u7.isReadyResolver();
        const i = RZn(n);
        if (!i) return;
        e === Qdn.Startup && u7.removeItem(n), await this._sendEvents(i, e === Qdn.Startup) && e === Qdn.GainedFocus && u7.removeItem(n);
      })().catch(() => {
        QR.warn("Failed to flush stored logs");
      });
    }
    _getStorageKey() {
      return `statsig.failed_logs.${s_t(this._sdkKey)}`;
    }
    _normalizeAndAppendEvent(e) {
      e.user && (e.user = { ...e.user }, delete e.user.privateAttributes);
      const n = {}, i = this._getCurrentPageUrl();
      i && (n.statsigMetadata = { currentPage: i });
      const r = { ...e, ...n };
      QR.debug("Enqueued Event:", r), this._queue.push(r);
    }
    _appendAndResetNonExposedChecks() {
      Object.keys(this._nonExposedChecks).length !== 0 && (this._normalizeAndAppendEvent({ eventName: "statsig::non_exposed_checks", user: null, time: Date.now(), metadata: { checks: { ...this._nonExposedChecks } } }), this._nonExposedChecks = {});
    }
    _getCurrentPageUrl() {
      if (this._options?.includeCurrentPageUrlWithEvents !== false) return qQu();
    }
    _startBackgroundFlushInterval() {
      const e = this._options?.loggingIntervalMs ?? rJu, n = setInterval(() => {
        const i = Zdn[this._sdkKey];
        !i || i._flushIntervalId !== n ? clearInterval(n) : Gjn._safeFlushAndForget(this._sdkKey);
      }, e);
      this._flushIntervalId = n;
    }
  };
} }), bgr, ygr, aEo, 