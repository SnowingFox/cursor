// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7126 range:4178631..4190775
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7126: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.StructuredLogProviderImpl = void 0;
    const n2 = r2(6698), s2 = r2(7598), i2 = r2(9081), o2 = r2(7977), a = r2(5289), u = r2(8394), c = r2(4384), l = r2(2642);
    class m extends Error {
      constructor() {
        super("StructuredLogProvider: submitLogs refused under private inference lockdown"), this.name = "PrivateInferenceRefusalError";
      }
    }
    const d = "submitlogs_flush_throttle", f = /* @__PURE__ */ new Set([a.PrivacyMode.UNSPECIFIED, a.PrivacyMode.NO_STORAGE, a.PrivacyMode.NO_TRAINING]), p = /* @__PURE__ */ new Set(["local_request_trace"]);
    class h {
      static _isLocalhostUrl(t3) {
        try {
          const e3 = new URL(t3);
          return "localhost" === e3.hostname || "127.0.0.1" === e3.hostname || "::1" === e3.hostname || "lclhst.build" === e3.hostname || e3.hostname.endsWith(".lclhst.build");
        } catch {
          return false;
        }
      }
      static _resolveAnalyticsUrl(t3) {
        try {
          const e3 = t3.getCursorCreds()?.backendUrl;
          if (e3 && h._isLocalhostUrl(e3)) return e3;
        } catch {
        }
        return "https://api2.cursor.sh";
      }
      static _getActiveInstance() {
        return h._asyncLocalInstance.getStore() ?? h._instance;
      }
      static get instance() {
        return h._getActiveInstance();
      }
      static runWithInstance(t3, e3) {
        return h._asyncLocalInstance.run(t3, e3);
      }
      static debug(t3, e3, r3) {
        h._getActiveInstance()?._addLog("debug", t3, e3, r3);
      }
      static info(t3, e3, r3) {
        h._getActiveInstance()?._addLog("info", t3, e3, r3);
      }
      static warn(t3, e3, r3) {
        h._getActiveInstance()?._addLog("warn", t3, e3, r3);
      }
      static error(t3, e3, r3, n3) {
        h._getActiveInstance()?._addLog("error", t3, e3, n3, r3);
      }
      constructor(t3, { isDevelopment: e3, registerStaticInstance: r3 = true, privateInferenceLockdown: n3 = t3.getPrivateInferenceEnablement?.() ?? l.PRIVATE_INFERENCE_DISABLED }) {
        this.buffer = [], this.disposables = [], this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0, this.forceHttp1ForSession = false, this.hasLoggedUploadFailureDiagnostic = false, this.analyticsUrl = "https://api2.cursor.sh", this.isDisposed = false, this.flushThrottleEnabled = false, this.flushIntervalStartedAt = Date.now(), this.flushThrottleGateGeneration = 0, this.flushRequested = false, this._host = t3, this._isDevelopment = e3, this._privateInferenceLockdown = n3, this.disposables.push(n3.onDidChange((e4) => {
          if (t3.log.info(`[StructuredLogProvider] private inference lockdown ${e4}`), (0, l.isPrivateInferenceLockedDown)(e4)) {
            for (const t4 of this.buffer) this._writePrivacyLog(t4);
            this.buffer = [];
          }
        })), this.analyticsUrl = h._resolveAnalyticsUrl(t3), this.disposables.push(t3.onDidChangeCursorCreds(() => {
          const e4 = h._resolveAnalyticsUrl(t3);
          e4 !== this.analyticsUrl && (this.analyticsUrl = e4, this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0);
        })), this.disposables.push(t3.onDidChangeGates((t4) => {
          (void 0 === t4.changedGates || t4.changedGates.includes(d)) && this._refreshFlushThrottleGate();
        })), this._refreshFlushThrottleGate(), this.flushIntervalStartedAt = Date.now(), this._scheduleFlush(), r3 && (h._instance = this);
      }
      debug(t3, e3, r3) {
        this._addLog("debug", t3, e3, r3);
      }
      info(t3, e3, r3) {
        this._addLog("info", t3, e3, r3);
      }
      warn(t3, e3, r3) {
        this._addLog("warn", t3, e3, r3);
      }
      error(t3, e3, r3, n3) {
        this._addLog("error", t3, e3, n3, r3);
      }
      _isGhostMode() {
        return f.has(this._host.getPrivacyModeEnum());
      }
      _writePrivacyLog(t3) {
        try {
          const e3 = JSON.stringify({ level: t3.level, key: t3.key, message: t3.message, metadata: this._flattenMetadata(t3.metadata), error: t3.error ? { name: t3.error.name, message: t3.error.message, stack: t3.error.stack } : void 0 });
          this._host.writePrivacyLog(t3.level, e3);
        } catch {
        }
      }
      _addLog(t3, e3, r3, n3, s3) {
        if (this.isDisposed) return;
        const i3 = { level: t3, message: r3, metadata: n3 ?? {}, timestamp: Date.now(), error: s3, key: e3 };
        if (this._isPrivateInferenceLocked()) return void this._writePrivacyLog(i3);
        const o3 = this._isGhostMode();
        o3 && this._writePrivacyLog(i3), o3 && p.has(e3) || (this.buffer.push(i3), this.buffer.length > 200 && this.buffer.shift(), this.buffer.length >= this._getImmediateFlushThreshold() && this._flush());
      }
      _getImmediateFlushThreshold() {
        return this.flushThrottleEnabled ? 150 : 10;
      }
      _getFlushIntervalMs() {
        return this.flushThrottleEnabled ? 6e4 : 3e3;
      }
      _refreshFlushThrottleGate() {
        const t3 = ++this.flushThrottleGateGeneration;
        this._host.checkFeatureGate(d).then((e3) => {
          t3 === this.flushThrottleGateGeneration && (this.isDisposed || e3 === this.flushThrottleEnabled || (this.flushThrottleEnabled = e3, this._scheduleFlush()));
        }).catch(() => {
        });
      }
      _scheduleFlush() {
        if (this.isDisposed) return;
        this.flushTimeoutId && clearTimeout(this.flushTimeoutId);
        const t3 = Date.now() - this.flushIntervalStartedAt, e3 = Math.max(0, this._getFlushIntervalMs() - t3);
        this.flushTimeoutId = setTimeout(() => {
          this.flushTimeoutId = void 0, this.isDisposed || (this.flushIntervalStartedAt = Date.now(), this._flush(), void 0 === this.flushTimeoutId && this._scheduleFlush());
        }, e3);
      }
      _restartPeriodicFlushInterval() {
        this.isDisposed || (this.flushIntervalStartedAt = Date.now(), this._scheduleFlush());
      }
      _flush() {
        if (this.flushRequested = true, void 0 !== this.flushPromise) return this.flushPromise;
        const t3 = this._drainFlushes();
        return this.flushPromise = t3, t3.then(() => this._onFlushSettled(t3), () => this._onFlushSettled(t3)), t3;
      }
      _onFlushSettled(t3) {
        this.flushPromise === t3 && (this.flushPromise = void 0, this.flushRequested && this._flush());
      }
      async _drainFlushes() {
        for (; this.flushRequested; ) this.flushRequested = false, 0 !== this.buffer.length && (await this._flushOnce(), this.buffer.length > 0 && (this.isDisposed || this.buffer.length >= this._getImmediateFlushThreshold()) && (this.flushRequested = true));
      }
      async _flushOnce() {
        if (0 === this.buffer.length) return void (this.buffer = []);
        this._restartPeriodicFlushInterval();
        const t3 = this.buffer;
        if (this.buffer = [], this._isPrivateInferenceLocked()) {
          for (const e4 of t3) this._writePrivacyLog(e4);
          return;
        }
        const e3 = t3.map((t4) => this._convertToProto(t4));
        try {
          await this._submitLogs(e3);
        } catch (e4) {
          if ((function(t4) {
            return t4 instanceof m;
          })(e4)) {
            for (const e5 of t3) this._writePrivacyLog(e5);
            return;
          }
          if (!this._shouldFallbackToHttp1(e4)) return void this._logUploadFailureDiagnosticOnce(e4, { httpVersion: this.analyticsClientHttpVersion, fallbackAttempted: false });
          await this._disableHttp2AfterAlpnFailure(), this._requeueLogsForNextFlush(t3);
        }
      }
      _requeueLogsForNextFlush(t3) {
        this.buffer = t3.concat(this.buffer), this.buffer.length > 200 && this.buffer.splice(0, this.buffer.length - 200);
      }
      _isPrivateInferenceLocked() {
        return (0, l.isPrivateInferenceLockedDown)(this._privateInferenceLockdown.state);
      }
      async _submitLogs(t3) {
        if (this._isPrivateInferenceLocked()) throw new m();
        const e3 = this._getOrCreateAnalyticsClient();
        await e3.submitLogs(new o2.SubmitLogsRequest({ logs: t3 }));
      }
      _getDesiredHttpVersion() {
        return this.forceHttp1ForSession || this._host.isHttp2Disabled() ? "1.1" : "2";
      }
      _isHttp2AlpnFailure(t3) {
        return t3 instanceof Error && t3.message.includes("expected h2 session, but ALPN protocol failed to negotiate");
      }
      _shouldFallbackToHttp1(t3) {
        return "2" === this.analyticsClientHttpVersion && this._isHttp2AlpnFailure(t3);
      }
      async _disableHttp2AfterAlpnFailure() {
        this.forceHttp1ForSession = true, this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0;
        try {
          await this._host.setHttp2Disabled();
        } catch {
        }
      }
      _logUploadFailureDiagnosticOnce(t3, e3) {
        if (this.hasLoggedUploadFailureDiagnostic) return;
        this.hasLoggedUploadFailureDiagnostic = true;
        const r3 = t3 instanceof Error ? t3.message : String(t3);
        this._host.log.warn("[StructuredLogProvider] submitLogs failed; structured logs may be unavailable for this session", { httpVersion: e3.httpVersion ?? "unknown", fallbackAttempted: e3.fallbackAttempted, errorMessage: r3 });
      }
      _getOrCreateAnalyticsClient() {
        const t3 = this._getDesiredHttpVersion();
        if (void 0 !== this.analyticsClient && this.analyticsClientHttpVersion === t3) return this.analyticsClient;
        const e3 = this._isDevelopment && h._isLocalhostUrl(this.analyticsUrl), r3 = (0, c.createConnectTransport)({ httpVersion: t3, baseUrl: this.analyticsUrl, interceptors: [(t4) => async (e4) => {
          const r4 = this._host.getCursorAuthToken();
          return void 0 !== r4 && e4.header.set("Authorization", `Bearer ${r4}`), await t4(e4);
        }, (t4) => async (e4) => (this._host.applyRequestHeaders(e4, (0, s2.randomUUID)()), await t4(e4))], useBinaryFormat: true, jsonOptions: { ignoreUnknownFields: true }, sendCompression: c.compressionGzip, acceptCompression: [c.compressionGzip], ...e3 ? { nodeOptions: { rejectUnauthorized: false } } : {} });
        return this.analyticsClient = (0, u.createPromiseClient)(i2.AnalyticsService, r3), this.analyticsClientHttpVersion = t3, this.analyticsClient;
      }
      _convertToProto(t3) {
        const e3 = this._flattenMetadata(t3.metadata);
        return this._host.isLocalMode() && (e3["client.platform"] = "local_on_prem"), new o2.ClientLogEntry({ level: this._convertLogLevel(t3.level), message: t3.message, metadata: e3, timestamp: BigInt(t3.timestamp), errorMessage: t3.error?.message, errorStack: t3.error?.stack, key: t3.key });
      }
      _flattenMetadata(t3, e3 = "", r3 = /* @__PURE__ */ new WeakSet()) {
        const n3 = {};
        for (const [s3, i3] of Object.entries(t3)) {
          if (null == i3) continue;
          const t4 = e3 ? `${e3}.${s3}` : s3;
          if (i3 instanceof Date) n3[t4] = i3.toISOString();
          else if ("object" != typeof i3 || Array.isArray(i3) || i3 instanceof Error) Array.isArray(i3) ? n3[t4] = JSON.stringify(i3) : n3[t4] = String(i3);
          else {
            if (r3.has(i3)) {
              n3[t4] = "[Circular]";
              continue;
            }
            r3.add(i3), Object.assign(n3, this._flattenMetadata(i3, t4, r3));
          }
        }
        return n3;
      }
      _convertLogLevel(t3) {
        switch (t3) {
          case "debug":
            return o2.ClientLogLevel.DEBUG;
          case "info":
            return o2.ClientLogLevel.INFO;
          case "warn":
            return o2.ClientLogLevel.WARN;
          case "error":
            return o2.ClientLogLevel.ERROR;
        }
      }
      dispose() {
        h._instance === this && (h._instance = void 0), this.isDisposed = true, this.flushTimeoutId && (clearTimeout(this.flushTimeoutId), this.flushTimeoutId = void 0), this._flush();
        for (const t3 of this.disposables) t3.dispose();
      }
    }
    e2.StructuredLogProviderImpl = h, h._asyncLocalInstance = new n2.AsyncLocalStorage();
  }