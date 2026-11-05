// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 87339 range:12222145..12226652
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87339: (e, t, r) => {
    "use strict";
    r.d(t, { Z: () => a });
    function n(e2, t2, r2, n2) {
      const s2 = e2;
      true !== s2.header.has?.("x-request-id") && s2.header.set("x-request-id", t2), s2.header.set("x-cursor-client-version", n2?.clientVersionHeader ?? (function() {
        const e3 = process.env.AGENT_HOST_CLIENT_VERSION ?? process.env.HEADLESS_CLIENT_VERSION ?? process.env.CURSOR_CLIENT_VERSION;
        if ("string" == typeof e3 && "" !== e3.trim()) {
          const t4 = e3.trim();
          return t4.startsWith("cli") ? t4 : `cli-${t4}`;
        }
        const t3 = process.env.AGENT_CLI_STATIC_VERSION?.trim();
        if (t3) return `cli-${t3}`;
        const r3 = /* @__PURE__ */ new Date();
        return `cli-${r3.getUTCFullYear()}.${String(r3.getUTCMonth() + 1).padStart(2, "0")}.${String(r3.getUTCDate()).padStart(2, "0")}-agent-host`;
      })()), s2.header.set("x-cursor-client-type", n2?.clientType ?? "cli"), r2 && s2.header.set("x-cursor-client-key", r2);
    }
    const s = { debug: () => {
    }, info: () => {
    }, warn: () => {
    }, error: () => {
    }, trace: () => {
    } }, o = { dispose: () => {
    } };
    class i {
      constructor(e2, t2 = {}) {
        this.platform = e2, this.options = t2, this.log = e2.log ?? s, this.debugLog = e2.debugLog ?? e2.log ?? s;
      }
      async initialize() {
        await this.platform.initialize?.();
      }
      dispose() {
        this.platform.dispose?.();
      }
      getCursorCreds() {
        return this.platform.getCreds();
      }
      onDidChangeCursorCreds(e2) {
        return this.platform.onDidChangeCreds?.(e2) ?? o;
      }
      getCursorAuthToken() {
        return this.platform.getAuthToken();
      }
      onDidChangeCursorAuthToken(e2) {
        return this.platform.onDidChangeAuthToken?.(e2) ?? o;
      }
      triggerTokenRefresh() {
        this.platform.triggerTokenRefresh?.();
      }
      maybeGetSpoofedCppAccessToken(e2, t2) {
        return void 0 === this.platform.maybeGetSpoofedCppAccessToken ? e2 : this.platform.maybeGetSpoofedCppAccessToken(e2, t2);
      }
      getTeamId() {
        return this.platform.getTeamId?.();
      }
      getPrivacyModeEnum() {
        return this.platform.getPrivacyModeEnum?.() ?? 0;
      }
      getPrivateInferenceEnablement() {
        return this.platform.getPrivateInferenceEnablement?.();
      }
      applyRequestHeaders(e2, t2, r2) {
        void 0 === this.platform.applyRequestHeaders ? n(e2, t2, r2, this.options.clientIdentity) : this.platform.applyRequestHeaders(e2, t2, r2);
      }
      runWithNetworkContext(e2) {
        return void 0 !== this.platform.runWithNetworkContext ? this.platform.runWithNetworkContext(e2) : e2();
      }
      async checkFeatureGate(e2) {
        return await this.platform.checkFeatureGate?.(e2) ?? false;
      }
      onDidChangeGates(e2) {
        return this.platform.onDidChangeGates?.(e2) ?? o;
      }
      async getDynamicConfigValue(e2) {
        return this.platform.getDynamicConfigValue?.(e2);
      }
      getDynamicConfigFallbackValues(e2) {
        return this.platform.getDynamicConfigFallbackValues?.(e2);
      }
      async getCachedServerConfigJson() {
        return this.platform.getCachedServerConfigJson?.();
      }
      isHttp2Disabled() {
        return this.platform.isHttp2Disabled?.() ?? false;
      }
      async setHttp2Disabled() {
        await this.platform.setHttp2Disabled?.();
      }
      isHttp1SseDisabled() {
        return this.platform.isHttp1SseDisabled?.() ?? false;
      }
      async setHttp1SseDisabled() {
        await this.platform.setHttp1SseDisabled?.();
      }
      onDidChangeHttpProtocolSettings(e2) {
        return this.platform.onDidChangeHttpProtocolSettings?.(e2) ?? o;
      }
      getDebugTimeoutPreventionMode() {
        return this.platform.getDebugTimeoutPreventionMode?.() ?? "local_only";
      }
      async loadSystemCertificates() {
        return this.platform.loadSystemCertificates?.();
      }
      isLocalMode() {
        return this.platform.isLocalMode?.() ?? false;
      }
      isDevelopment() {
        return this.platform.isDevelopment?.() ?? false;
      }
      metricsIncrement(e2) {
        this.platform.metricsIncrement?.(e2);
      }
      writePrivacyLog(e2, t2) {
        this.platform.writePrivacyLog?.(e2, t2);
      }
      logStructured(e2) {
        this.platform.logStructured?.(e2);
      }
    }
    function a(e2, t2) {
      return new i(e2, t2);
    }
  }