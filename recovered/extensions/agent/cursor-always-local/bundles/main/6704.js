// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6704 range:3751740..3755500
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6704: (t2, e2) => {
    "use strict";
    var r2;
    Object.defineProperty(e2, "__esModule", { value: true }), e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = e2.HTTP2_PING_PRODUCTION_DEFAULTS = e2.Http2TransportCallSite = void 0, e2.getHttp2PingConfig = async function(t3, e3, r3) {
      const n2 = r3?.fallbackDefaults;
      try {
        const r4 = t3.getDebugTimeoutPreventionMode();
        if ("always" === r4) return void t3.log.info(`[HTTP/2 Ping] Timeout prevention enabled by setting (${e3})`);
        if ("local_only" === r4 && (function(t4) {
          const e4 = t4.getCursorCreds()?.backendUrl;
          if (!e4) return false;
          return e4.includes("localhost") || e4.includes("lclhst.build");
        })(t3)) return void t3.log.info(`[HTTP/2 Ping] Timeout prevention enabled for local backend (${e3})`);
        const s2 = await t3.getDynamicConfigValue("http2_ping_config");
        if (!s2) return n2;
        if (!(Array.isArray(s2.enabled) ? s2.enabled : []).includes(e3)) return;
        const i2 = { pingIdleConnection: s2.pingIdleConnection ?? n2?.pingIdleConnection, pingIntervalMs: s2.pingIntervalMs ?? n2?.pingIntervalMs, pingTimeoutMs: s2.pingTimeoutMs ?? n2?.pingTimeoutMs, idleConnectionTimeoutMs: s2.idleConnectionTimeoutMs ?? n2?.idleConnectionTimeoutMs };
        return n2 && t3.log.info(`[HTTP/2 Ping] ${e3} interval=${i2.pingIntervalMs} timeout=${i2.pingTimeoutMs}`), i2;
      } catch (r4) {
        return t3.log.error(`Failed to get HTTP/2 ping config from Statsig for ${e3}`, r4), n2;
      }
    }, e2.getHttp2SessionEstablishTimeoutMs = async function(t3) {
      try {
        const r3 = await t3.getDynamicConfigValue(e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG), n2 = r3?.timeoutMs;
        return "number" == typeof n2 && Number.isFinite(n2) ? n2 <= 0 ? 0 : Math.max(n2, e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS) : e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
      } catch (r3) {
        return t3.log.error("Failed to get the HTTP/2 session establishment timeout from Statsig", r3), e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS;
      }
    }, e2.getHttp1KeepaliveConfig = async function(t3) {
      try {
        const e3 = await t3.getDynamicConfigValue("http1_keepalive_config");
        return e3 ? null === e3.keepAliveInitialDelayMs ? { keepAliveInitialDelayMs: null } : "number" == typeof e3.keepAliveInitialDelayMs && e3.keepAliveInitialDelayMs > 0 ? { keepAliveInitialDelayMs: e3.keepAliveInitialDelayMs } : { keepAliveInitialDelayMs: null } : { keepAliveInitialDelayMs: null };
      } catch (e3) {
        return t3.log.error("Failed to get HTTP/1 keepalive config from Statsig, defaulting to disabled", e3), { keepAliveInitialDelayMs: null };
      }
    }, (function(t3) {
      t3.BACKEND = "backend", t3.BIDI = "bidi", t3.REPO = "repo", t3.HTTP2_REPO = "http2_repo", t3.GEO_CPP = "geo_cpp", t3.CPP_CONFIG = "cpp_config", t3.CMDK = "cmdk", t3.TELEM = "telem", t3.AGENTIC_COMPOSER = "agentic_composer", t3.AGENT = "agent", t3.LOCAL_LOOP_INFERENCE = "local_loop_inference", t3.ORIGIN = "origin", t3.REMOTE_AGENT_HOST_PRESENCE = "remote_agent_host_presence", t3.METRICS = "metrics", t3.STRUCTURED_LOGS = "structured_logs", t3.NETWORK_MONITOR = "network_monitor", t3.BACKGROUND_COMPOSER_PROXY = "background_composer_proxy";
    })(r2 || (e2.Http2TransportCallSite = r2 = {})), e2.HTTP2_PING_PRODUCTION_DEFAULTS = { pingIdleConnection: true, pingIntervalMs: 1e4, pingTimeoutMs: 2e4, idleConnectionTimeoutMs: 3e5 };
    e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_DEFAULT_MS = 2e4, e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_MIN_MS = 5e3, e2.HTTP2_SESSION_ESTABLISH_TIMEOUT_CONFIG = "http2_session_establish_timeout";
  }