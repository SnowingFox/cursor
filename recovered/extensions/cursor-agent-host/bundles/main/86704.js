// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 86704 range:12190448..12194161
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86704: (e, t) => {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: true }), t.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = t.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = t.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = t.HTTP2_PING_PRODUCTION_DEFAULTS = t.Http2TransportCallSite = void 0, t.getHttp2PingConfig = async function(e2, t2, r2) {
      const n = r2?.fallbackDefaults;
      try {
        const r3 = e2.getDebugTimeoutPreventionMode();
        if ("always" === r3) return void e2.log.info(`[HTTP/2 Ping] Timeout prevention enabled by setting (${t2})`);
        if ("local_only" === r3 && (function(e3) {
          const t3 = e3.getCursorCreds()?.backendUrl;
          if (!t3) return false;
          return t3.includes("localhost") || t3.includes("lclhst.build");
        })(e2)) return void e2.log.info(`[HTTP/2 Ping] Timeout prevention enabled for local backend (${t2})`);
        const s = await e2.getDynamicConfigValue("http2_ping_config");
        if (!s) return n;
        if (!(Array.isArray(s.enabled) ? s.enabled : []).includes(t2)) return;
        const o = { pingIdleConnection: s.pingIdleConnection ?? n?.pingIdleConnection, pingIntervalMs: s.pingIntervalMs ?? n?.pingIntervalMs, pingTimeoutMs: s.pingTimeoutMs ?? n?.pingTimeoutMs, idleConnectionTimeoutMs: s.idleConnectionTimeoutMs ?? n?.idleConnectionTimeoutMs };
        return n && e2.log.info(`[HTTP/2 Ping] ${t2} interval=${o.pingIntervalMs} timeout=${o.pingTimeoutMs}`), o;
      } catch (r3) {
        return e2.log.error(`Failed to get HTTP/2 ping config from Statsig for ${t2}`, r3), n;
      }
    }, t.getHttp2SessionEstablishTimeoutMs = async function(e2) {
      try {
        const r2 = await e2.getDynamicConfigValue(t.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG), n = r2?.timeoutMs;
        return "number" == typeof n && Number.isFinite(n) ? n <= 0 ? 0 : Math.max(n, t.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS) : t.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
      } catch (r2) {
        return e2.log.error("Failed to get the HTTP/2 session establishment timeout from Statsig", r2), t.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
      }
    }, t.getHttp1KeepaliveConfig = async function(e2) {
      try {
        const t2 = await e2.getDynamicConfigValue("http1_keepalive_config");
        return t2 ? null === t2.keepAliveInitialDelayMs ? { keepAliveInitialDelayMs: null } : "number" == typeof t2.keepAliveInitialDelayMs && t2.keepAliveInitialDelayMs > 0 ? { keepAliveInitialDelayMs: t2.keepAliveInitialDelayMs } : { keepAliveInitialDelayMs: null } : { keepAliveInitialDelayMs: null };
      } catch (t2) {
        return e2.log.error("Failed to get HTTP/1 keepalive config from Statsig, defaulting to disabled", t2), { keepAliveInitialDelayMs: null };
      }
    }, (function(e2) {
      e2.BACKEND = "backend", e2.BIDI = "bidi", e2.REPO = "repo", e2.HTTP2_REPO = "http2_repo", e2.GEO_CPP = "geo_cpp", e2.CPP_CONFIG = "cpp_config", e2.CMDK = "cmdk", e2.TELEM = "telem", e2.AGENTIC_COMPOSER = "agentic_composer", e2.AGENT = "agent", e2.LOCAL_LOOP_INFERENCE = "local_loop_inference", e2.ORIGIN = "origin", e2.REMOTE_AGENT_HOST_PRESENCE = "remote_agent_host_presence", e2.METRICS = "metrics", e2.STRUCTURED_LOGS = "structured_logs", e2.NETWORK_MONITOR = "network_monitor", e2.BACKGROUND_COMPOSER_PROXY = "background_composer_proxy";
    })(r || (t.Http2TransportCallSite = r = {})), t.HTTP2_PING_PRODUCTION_DEFAULTS = { pingIdleConnection: true, pingIntervalMs: 1e4, pingTimeoutMs: 2e4, idleConnectionTimeoutMs: 3e5 };
    t.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = 2e4, t.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = 5e3, t.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = "http2_session_establish_timeout";
  }