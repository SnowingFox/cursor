// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 7126 range:3187558..3199681
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7126: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.StructuredLogProviderImpl = void 0;
    const n = r(16698), s = r(77598), o = r(9081), i = r(77977), a = r(5289), c = r(22712), l = r(54384), u = r(22642);
    class d extends Error {
      constructor() {
        super("StructuredLogProvider: submitLogs refused under private inference lockdown"), this.name = "PrivateInferenceRefusalError";
      }
    }
    const p = "submitlogs_flush_throttle", m = /* @__PURE__ */ new Set([a.PrivacyMode.UNSPECIFIED, a.PrivacyMode.NO_STORAGE, a.PrivacyMode.NO_TRAINING]), h = /* @__PURE__ */ new Set(["local_request_trace"]);
    class f {
      static _isLocalhostUrl(e2) {
        try {
          const t2 = new URL(e2);
          return "localhost" === t2.hostname || "127.0.0.1" === t2.hostname || "::1" === t2.hostname || "lclhst.build" === t2.hostname || t2.hostname.endsWith(".lclhst.build");
        } catch {
          return false;
        }
      }
      static _resolveAnalyticsUrl(e2) {
        try {
          const t2 = e2.getCursorCreds()?.backendUrl;
          if (t2 && f._isLocalhostUrl(t2)) return t2;
        } catch {
        }
        return "https://api2.cursor.sh";
      }
      static _getActiveInstance() {
        return f._asyncLocalInstance.getStore() ?? f._instance;
      }
      static get instance() {
        return f._getActiveInstance();
      }
      static runWithInstance(e2, t2) {
        return f._asyncLocalInstance.run(e2, t2);
      }
      static debug(e2, t2, r2) {
        f._getActiveInstance()?._addLog("debug", e2, t2, r2);
      }
      static info(e2, t2, r2) {
        f._getActiveInstance()?._addLog("info", e2, t2, r2);
      }
      static warn(e2, t2, r2) {
        f._getActiveInstance()?._addLog("warn", e2, t2, r2);
      }
      static error(e2, t2, r2, n2) {
        f._getActiveInstance()?._addLog("error", e2, t2, n2, r2);
      }
      constructor(e2, { isDevelopment: t2, registerStaticInstance: r2 = true, privateInferenceLockdown: n2 = e2.getPrivateInferenceEnablement?.() ?? u.PRIVATE_INFERENCE_DISABLED }) {
        this.buffer = [], this.disposables = [], this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0, this.forceHttp1ForSession = false, this.hasLoggedUploadFailureDiagnostic = false, this.analyticsUrl = "https://api2.cursor.sh", this.isDisposed = false, this.flushThrottleEnabled = false, this.flushIntervalStartedAt = Date.now(), this.flushThrottleGateGeneration = 0, this.flushRequested = false, this._host = e2, this._isDevelopment = t2, this._privateInferenceLockdown = n2, this.disposables.push(n2.onDidChange((t3) => {
          if (e2.log.info(`[StructuredLogProvider] private inference lockdown ${t3}`), (0, u.isPrivateInferenceLockedDown)(t3)) {
            for (const e3 of this.buffer) this._writePrivacyLog(e3);
            this.buffer = [];
          }
        })), this.analyticsUrl = f._resolveAnalyticsUrl(e2), this.disposables.push(e2.onDidChangeCursorCreds(() => {
          const t3 = f._resolveAnalyticsUrl(e2);
          t3 !== this.analyticsUrl && (this.analyticsUrl = t3, this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0);
        })), this.disposables.push(e2.onDidChangeGates((e3) => {
          (void 0 === e3.changedGates || e3.changedGates.includes(p)) && this._refreshFlushThrottleGate();
        })), this._refreshFlushThrottleGate(), this.flushIntervalStartedAt = Date.now(), this._scheduleFlush(), r2 && (f._instance = this);
      }
      debug(e2, t2, r2) {
        this._addLog("debug", e2, t2, r2);
      }
      info(e2, t2, r2) {
        this._addLog("info", e2, t2, r2);
      }
      warn(e2, t2, r2) {
        this._addLog("warn", e2, t2, r2);
      }
      error(e2, t2, r2, n2) {
        this._addLog("error", e2, t2, n2, r2);
      }
      _isGhostMode() {
        return m.has(this._host.getPrivacyModeEnum());
      }
      _writePrivacyLog(e2) {
        try {
          const t2 = JSON.stringify({ level: e2.level, key: e2.key, message: e2.message, metadata: this._flattenMetadata(e2.metadata), error: e2.error ? { name: e2.error.name, message: e2.error.message, stack: e2.error.stack } : void 0 });
          this._host.writePrivacyLog(e2.level, t2);
        } catch {
        }
      }
      _addLog(e2, t2, r2, n2, s2) {
        if (this.isDisposed) return;
        const o2 = { level: e2, message: r2, metadata: n2 ?? {}, timestamp: Date.now(), error: s2, key: t2 };
        if (this._isPrivateInferenceLocked()) return void this._writePrivacyLog(o2);
        const i2 = this._isGhostMode();
        i2 && this._writePrivacyLog(o2), i2 && h.has(t2) || (this.buffer.push(o2), this.buffer.length > 200 && this.buffer.shift(), this.buffer.length >= this._getImmediateFlushThreshold() && this._flush());
      }
      _getImmediateFlushThreshold() {
        return this.flushThrottleEnabled ? 150 : 10;
      }
      _getFlushIntervalMs() {
        return this.flushThrottleEnabled ? 6e4 : 3e3;
      }
      _refreshFlushThrottleGate() {
        const e2 = ++this.flushThrottleGateGeneration;
        this._host.checkFeatureGate(p).then((t2) => {
          e2 === this.flushThrottleGateGeneration && (this.isDisposed || t2 === this.flushThrottleEnabled || (this.flushThrottleEnabled = t2, this._scheduleFlush()));
        }).catch(() => {
        });
      }
      _scheduleFlush() {
        if (this.isDisposed) return;
        this.flushTimeoutId && clearTimeout(this.flushTimeoutId);
        const e2 = Date.now() - this.flushIntervalStartedAt, t2 = Math.max(0, this._getFlushIntervalMs() - e2);
        this.flushTimeoutId = setTimeout(() => {
          this.flushTimeoutId = void 0, this.isDisposed || (this.flushIntervalStartedAt = Date.now(), this._flush(), void 0 === this.flushTimeoutId && this._scheduleFlush());
        }, t2);
      }
      _restartPeriodicFlushInterval() {
        this.isDisposed || (this.flushIntervalStartedAt = Date.now(), this._scheduleFlush());
      }
      _flush() {
        if (this.flushRequested = true, void 0 !== this.flushPromise) return this.flushPromise;
        const e2 = this._drainFlushes();
        return this.flushPromise = e2, e2.then(() => this._onFlushSettled(e2), () => this._onFlushSettled(e2)), e2;
      }
      _onFlushSettled(e2) {
        this.flushPromise === e2 && (this.flushPromise = void 0, this.flushRequested && this._flush());
      }
      async _drainFlushes() {
        for (; this.flushRequested; ) this.flushRequested = false, 0 !== this.buffer.length && (await this._flushOnce(), this.buffer.length > 0 && (this.isDisposed || this.buffer.length >= this._getImmediateFlushThreshold()) && (this.flushRequested = true));
      }
      async _flushOnce() {
        if (0 === this.buffer.length) return void (this.buffer = []);
        this._restartPeriodicFlushInterval();
        const e2 = this.buffer;
        if (this.buffer = [], this._isPrivateInferenceLocked()) {
          for (const t3 of e2) this._writePrivacyLog(t3);
          return;
        }
        const t2 = e2.map((e3) => this._convertToProto(e3));
        try {
          await this._submitLogs(t2);
        } catch (t3) {
          if ((function(e3) {
            return e3 instanceof d;
          })(t3)) {
            for (const t4 of e2) this._writePrivacyLog(t4);
            return;
          }
          if (!this._shouldFallbackToHttp1(t3)) return void this._logUploadFailureDiagnosticOnce(t3, { httpVersion: this.analyticsClientHttpVersion, fallbackAttempted: false });
          await this._disableHttp2AfterAlpnFailure(), this._requeueLogsForNextFlush(e2);
        }
      }
      _requeueLogsForNextFlush(e2) {
        this.buffer = e2.concat(this.buffer), this.buffer.length > 200 && this.buffer.splice(0, this.buffer.length - 200);
      }
      _isPrivateInferenceLocked() {
        return (0, u.isPrivateInferenceLockedDown)(this._privateInferenceLockdown.state);
      }
      async _submitLogs(e2) {
        if (this._isPrivateInferenceLocked()) throw new d();
        const t2 = this._getOrCreateAnalyticsClient();
        await t2.submitLogs(new i.SubmitLogsRequest({ logs: e2 }));
      }
      _getDesiredHttpVersion() {
        return this.forceHttp1ForSession || this._host.isHttp2Disabled() ? "1.1" : "2";
      }
      _isHttp2AlpnFailure(e2) {
        return e2 instanceof Error && e2.message.includes("expected h2 session, but ALPN protocol failed to negotiate");
      }
      _shouldFallbackToHttp1(e2) {
        return "2" === this.analyticsClientHttpVersion && this._isHttp2AlpnFailure(e2);
      }
      async _disableHttp2AfterAlpnFailure() {
        this.forceHttp1ForSession = true, this.analyticsClient = void 0, this.analyticsClientHttpVersion = void 0;
        try {
          await this._host.setHttp2Disabled();
        } catch {
        }
      }
      _logUploadFailureDiagnosticOnce(e2, t2) {
        if (this.hasLoggedUploadFailureDiagnostic) return;
        this.hasLoggedUploadFailureDiagnostic = true;
        const r2 = e2 instanceof Error ? e2.message : String(e2);
        this._host.log.warn("[StructuredLogProvider] submitLogs failed; structured logs may be unavailable for this session", { httpVersion: t2.httpVersion ?? "unknown", fallbackAttempted: t2.fallbackAttempted, errorMessage: r2 });
      }
      _getOrCreateAnalyticsClient() {
        const e2 = this._getDesiredHttpVersion();
        if (void 0 !== this.analyticsClient && this.analyticsClientHttpVersion === e2) return this.analyticsClient;
        const t2 = this._isDevelopment && f._isLocalhostUrl(this.analyticsUrl), r2 = (0, l.createConnectTransport)({ httpVersion: e2, baseUrl: this.analyticsUrl, interceptors: [(e3) => async (t3) => {
          const r3 = this._host.getCursorAuthToken();
          return void 0 !== r3 && t3.header.set("Authorization", `Bearer ${r3}`), await e3(t3);
        }, (e3) => async (t3) => (this._host.applyRequestHeaders(t3, (0, s.randomUUID)()), await e3(t3))], useBinaryFormat: true, jsonOptions: { ignoreUnknownFields: true }, sendCompression: l.compressionGzip, acceptCompression: [l.compressionGzip], ...t2 ? { nodeOptions: { rejectUnauthorized: false } } : {} });
        return this.analyticsClient = (0, c.createPromiseClient)(o.AnalyticsService, r2), this.analyticsClientHttpVersion = e2, this.analyticsClient;
      }
      _convertToProto(e2) {
        const t2 = this._flattenMetadata(e2.metadata);
        return this._host.isLocalMode() && (t2["client.platform"] = "local_on_prem"), new i.ClientLogEntry({ level: this._convertLogLevel(e2.level), message: e2.message, metadata: t2, timestamp: BigInt(e2.timestamp), errorMessage: e2.error?.message, errorStack: e2.error?.stack, key: e2.key });
      }
      _flattenMetadata(e2, t2 = "", r2 = /* @__PURE__ */ new WeakSet()) {
        const n2 = {};
        for (const [s2, o2] of Object.entries(e2)) {
          if (null == o2) continue;
          const e3 = t2 ? `${t2}.${s2}` : s2;
          if (o2 instanceof Date) n2[e3] = o2.toISOString();
          else if ("object" != typeof o2 || Array.isArray(o2) || o2 instanceof Error) Array.isArray(o2) ? n2[e3] = JSON.stringify(o2) : n2[e3] = String(o2);
          else {
            if (r2.has(o2)) {
              n2[e3] = "[Circular]";
              continue;
            }
            r2.add(o2), Object.assign(n2, this._flattenMetadata(o2, e3, r2));
          }
        }
        return n2;
      }
      _convertLogLevel(e2) {
        switch (e2) {
          case "debug":
            return i.ClientLogLevel.DEBUG;
          case "info":
            return i.ClientLogLevel.INFO;
          case "warn":
            return i.ClientLogLevel.WARN;
          case "error":
            return i.ClientLogLevel.ERROR;
        }
      }
      dispose() {
        f._instance === this && (f._instance = void 0), this.isDisposed = true, this.flushTimeoutId && (clearTimeout(this.flushTimeoutId), this.flushTimeoutId = void 0), this._flush();
        for (const e2 of this.disposables) e2.dispose();
      }
    }
    t.StructuredLogProviderImpl = f, f._asyncLocalInstance = new n.AsyncLocalStorage();
  }