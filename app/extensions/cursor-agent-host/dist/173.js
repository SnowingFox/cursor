"use strict";
exports.id = 173, exports.ids = [173], exports.modules = { 93173: (t, e, r) => {
  r.r(e), r.d(e, { AGENT_HOST_PROD_CREDS_DISPLAY_NAME: () => i, AGENT_HOST_REMOTE_EGRESS_PROBE_MS: () => s, awaitRemoteEgressDecision: () => g, classifyRemoteEgressProbeError: () => E, createRemoteEgressFailoverReporter: () => m, isConnectClassProbeFailure: () => h, isMidStreamTransportError: () => R, isPreFirstByteConnectClassError: () => _, loadServerAgentnUrlOverlay: () => u, probeRemoteAgentBackendEgress: () => p, readServerAgentnUrl: () => c, resolveAgentServiceProbeUrl: () => a, resolveRemoteEgressProbeTarget: () => l });
  var n = r(32467), o = r(41692);
  const s = 5e3, i = "Prod";
  function c(t2) {
    if (!t2 || "object" != typeof t2) return;
    const e2 = t2.agentUrlConfig, r2 = e2?.agentnUrl ?? e2?.agentn_url;
    return "string" == typeof r2 && r2.length > 0 ? r2 : void 0;
  }
  async function u(t2) {
    try {
      return c(await t2());
    } catch {
      return;
    }
  }
  function a(t2) {
    const e2 = t2.creds?.backendUrl, r2 = t2.creds?.agentBackendUrlNonPrivacy?.default, n2 = (void 0 !== t2.serverAgentnUrl && t2.serverAgentnUrl.length > 0 && (void 0 === t2.creds?.credentialsDisplayName || t2.creds.credentialsDisplayName === i) ? t2.serverAgentnUrl : r2) || e2;
    return t2.http2Disabled ? void 0 === e2 || 0 === e2.length ? void 0 : { url: e2, http2: false } : void 0 !== n2 && 0 !== n2.length ? { url: n2, http2: true } : void 0;
  }
  function l(t2) {
    const e2 = a(t2);
    if (e2) try {
      const t3 = new URL(e2.url);
      if (!t3.hostname) return;
      const r2 = t3.port ? Number(t3.port) : "http:" === t3.protocol ? 80 : 443;
      if (!Number.isFinite(r2) || r2 <= 0) return;
      return { host: t3.hostname, port: r2, url: e2.url, http2: e2.http2 };
    } catch {
      return;
    }
  }
  function E(t2) {
    const e2 = T(t2);
    for (const t3 of e2) {
      const e3 = d(N(t3));
      if (void 0 !== e3) return e3;
    }
    for (const t3 of e2) {
      const e3 = f(S(t3));
      if (void 0 !== e3) return e3;
    }
    return "unknown";
  }
  function d(t2) {
    if (void 0 !== t2) return "ETIMEDOUT" === t2 || "ERR_SOCKET_TIMEOUT" === t2 || "UND_ERR_CONNECT_TIMEOUT" === t2 ? "timeout" : "EAI_AGAIN" === t2 ? "transient_dns" : "ENOTFOUND" === t2 || "EAI_FAIL" === t2 || "EAI_NONAME" === t2 || "EAI_NODATA" === t2 ? "dns" : "ECONNRESET" === t2 || "ECONNREFUSED" === t2 || "EPIPE" === t2 || "ECONNABORTED" === t2 || "ENETUNREACH" === t2 || "EHOSTUNREACH" === t2 ? "reset" : y(t2, "") ? "tls" : A(t2, "") ? "proxy" : void 0;
  }
  function f(t2) {
    return /timed out|timeout/i.test(t2) ? "timeout" : /read ECONNRESET|connect ECONNRESET|socket hang up/i.test(t2) ? "reset" : y(void 0, t2) ? "tls" : A(void 0, t2) ? "proxy" : void 0;
  }
  function h(t2) {
    return "timeout" === t2 || "reset" === t2 || "dns" === t2 || "tls" === t2 || "proxy" === t2;
  }
  function R(t2) {
    return T(t2).some((t3) => /Premature close|NGHTTP2|http\/2 stream|ERR_HTTP2_SESSION_ERROR/i.test(`${N(t3) ?? ""} ${S(t3)}`));
  }
  function _(t2) {
    if (R(t2)) return false;
    const e2 = E(t2);
    return "transient_dns" === e2 || h(e2);
  }
  async function p(t2) {
    if (!t2.remoteName) return { ok: true, url: "", class: "ok" };
    const e2 = l({ creds: t2.creds, http2Disabled: t2.http2Disabled, serverAgentnUrl: t2.serverAgentnUrl });
    if (!e2) return { ok: true, url: "", class: "ok" };
    const r2 = t2.timeoutMs ?? s, n2 = await (async function(t3) {
      if (void 0 === t3) return;
      try {
        const e3 = await t3();
        if (!e3 || 0 === e3.length) return;
        return [...e3, ...o.rootCertificates];
      } catch {
        return;
      }
    })(t2.loadSystemCertificates), i2 = await v(e2, r2, n2, t2.connectHttp2, t2.connectTls);
    if (i2.ok || "transient_dns" !== i2.reason) return i2;
    const c2 = await v(e2, r2, n2, t2.connectHttp2, t2.connectTls);
    return c2.ok || "transient_dns" !== c2.reason ? c2 : { ...c2, reason: "dns" };
  }
  async function g(t2) {
    const e2 = await t2.probe;
    return e2.ok || !h(e2.reason) ? { kind: "builtin" } : { kind: "external", reason: e2.reason };
  }
  function m(t2) {
    let e2 = false;
    return { announce(r2) {
      e2 || (e2 = true, t2.info(`agent host: routing inference via local client (${r2})`), t2.structuredWarn("agent host: routing inference via local client", { reason: r2 }), t2.metricsIncrement("agent_host.remote_egress_failover", { reason: r2 }), t2.captureException(r2));
    } };
  }
  function v(t2, e2, r2, s2, i2) {
    return t2.http2 ? (function(t3, e3, r3, n2) {
      return new Promise((o2) => {
        let s3 = false;
        const i3 = (t4) => {
          s3 || (s3 = true, o2(t4));
        }, c2 = new URL(t3.url).origin, u2 = n2(c2, { servername: t3.host, timeout: e3, ...void 0 === r3 ? {} : { ca: r3 } }, () => {
          u2.close(), i3({ ok: true, url: t3.url, class: "ok" });
        });
        u2.setTimeout(e3, () => {
          u2.destroy(), i3({ ok: false, reason: "timeout", url: t3.url, host: t3.host });
        }), u2.once("error", (e4) => {
          u2.destroy(), i3({ ok: false, reason: E(e4), url: t3.url, host: t3.host });
        });
      });
    })(t2, e2, r2, s2 ?? n.connect) : (function(t3, e3, r3, n2) {
      return new Promise((o2) => {
        let s3 = false;
        const i3 = (t4) => {
          s3 || (s3 = true, o2(t4));
        }, c2 = n2({ host: t3.host, port: t3.port, servername: t3.host, timeout: e3, ...void 0 === r3 ? {} : { ca: r3 } }, () => {
          c2.destroy(), i3({ ok: true, url: t3.url, class: "ok" });
        });
        c2.setTimeout(e3, () => {
          c2.destroy(), i3({ ok: false, reason: "timeout", url: t3.url, host: t3.host });
        }), c2.once("error", (e4) => {
          c2.destroy(), i3({ ok: false, reason: E(e4), url: t3.url, host: t3.host });
        });
      });
    })(t2, e2, r2, i2 ?? o.connect);
  }
  function T(t2) {
    const e2 = [], r2 = /* @__PURE__ */ new Set();
    let n2 = t2;
    for (; null != n2 && !r2.has(n2); ) r2.add(n2), e2.push(n2), n2 = "object" == typeof n2 && "cause" in n2 ? n2.cause : void 0;
    return e2;
  }
  function N(t2) {
    if ("object" == typeof t2 && null !== t2 && "code" in t2 && "string" == typeof t2.code) return t2.code;
  }
  function S(t2) {
    return t2 instanceof Error ? t2.message : null == t2 ? "" : String(t2);
  }
  function y(t2, e2) {
    return !(void 0 === t2 || !(t2.startsWith("ERR_TLS") || t2.startsWith("ERR_SSL") || t2.startsWith("CERT_") || "UNABLE_TO_VERIFY_LEAF_SIGNATURE" === t2 || "DEPTH_ZERO_SELF_SIGNED_CERT" === t2)) || /certificate|unknown ca|self.signed|SSL alert|unable to verify/i.test(e2);
  }
  function A(t2, e2) {
    return "EPROTO" === t2 || /407|proxy|tunneling socket|ERR_PROXY/i.test(e2);
  }
} };
