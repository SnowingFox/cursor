// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 496 range:27626..30310
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
496: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { l: () => p, v: () => f });
    var n2 = r2(768);
    const o2 = ["fastRetryBaseDelayMs", "fastRetryMaxDelayMs", "fastRetryMaxAttempts", "periodicRetryBaseDelayMs", "periodicRetryMaxDelayMs", "maxPeriodicCycles", "focusRetryCooldownMs", "inlineReconnectCooldownMs", "streamableHttpSession404TombstoneThreshold", "healthProbeTimeoutMs", "toolCallIdleTimeoutMs", "toolCallMaxTotalTimeoutMs", "degradedProbeDelayMs", "maxDegradedProbeFailures", "keepaliveProbeDelayMs", "keepaliveJitterMs", "stabilityThresholdMs", "nonRetryableWakeRetryCooldownMs", "networkResumeReconnectDebounceMs"], s2 = ["stdioConnectFailuresAreNonRetryable", "retryNonRetryableOnWake", "retryNonRetryableAutomatically", "networkResumeReconnectEnabled", "toolCallBoundedTimeoutEnabled"];
    let i2 = {};
    function a2(e3, t3) {
      const r3 = e3[t3];
      return "number" == typeof r3 && Number.isFinite(r3) ? r3 : void 0;
    }
    function c(e3, t3) {
      const r3 = e3[t3];
      return "boolean" == typeof r3 ? r3 : void 0;
    }
    function u(e3) {
      const t3 = {};
      for (const r3 of o2) {
        const n3 = a2(e3, r3);
        void 0 !== n3 && (t3[r3] = n3);
      }
      for (const r3 of s2) {
        const n3 = c(e3, r3);
        void 0 !== n3 && (t3[r3] = n3);
      }
      return t3;
    }
    function l(e3) {
      if (!e3 || "object" != typeof e3) return;
      const t3 = e3, r3 = "string" == typeof t3.identifier && t3.identifier.length > 0 ? t3.identifier : void 0, n3 = "string" == typeof t3.hostname && t3.hostname.length > 0 ? t3.hostname.toLowerCase() : void 0;
      return void 0 !== r3 || void 0 !== n3 ? { ...u(t3), ...void 0 !== r3 ? { identifier: r3 } : {}, ...void 0 !== n3 ? { hostname: n3 } : {} } : void 0;
    }
    function d(e3, t3) {
      if (!t3) return false;
      if (void 0 !== e3.identifier && e3.identifier !== t3.identifier) return false;
      if (void 0 !== e3.hostname) {
        const r3 = (function(e4) {
          if (e4 && "stdio" !== e4.type) return (0, n2.si)(e4.serverUrl);
        })(t3.serverInfo);
        if (!r3 || r3 !== e3.hostname) return false;
      }
      return true;
    }
    function p(e3) {
      if (!e3 || "object" != typeof e3) return void (i2 = {});
      const t3 = e3, r3 = Array.isArray(t3.overrides) ? t3.overrides.map(l).filter((e4) => void 0 !== e4) : void 0;
      i2 = { ...u(t3), ...void 0 !== r3 ? { overrides: r3 } : {} };
    }
    function f(e3, t3) {
      let r3 = i2[e3];
      for (const n3 of i2.overrides ?? []) {
        if (!d(n3, t3)) continue;
        const o3 = n3[e3];
        void 0 !== o3 && (r3 = o3);
      }
      return r3;
    }
  }