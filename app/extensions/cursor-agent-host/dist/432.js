"use strict";
exports.id = 432, exports.ids = [173, 432, 580], exports.modules = { 29580: (t, e, r) => {
  r.r(e), r.d(e, { AGENT_HOST_REMOTE_EGRESS_FLIP_MESSAGE: () => s, createRemoteEgressFlipError: () => i, createRemoteEgressKindLatch: () => c, createRemoteEgressLatchedTransport: () => u, decisionFromProbeResult: () => l, isRemoteEgressFlipError: () => a, mergeAbortSignals: () => E, runLatchedAgentService: () => d });
  var n = r(93173), o = r(1444);
  const s = "connection aborted (remote egress probe latched external)";
  function i() {
    return Object.assign(new Error(s), { code: "ECONNRESET" });
  }
  function a(t2) {
    return t2 instanceof Error && t2.message === s;
  }
  function c(t2) {
    let e2 = t2?.initial;
    const r2 = /* @__PURE__ */ new Set(), n2 = (t3) => {
      for (const e3 of r2) e3(t3);
    }, s2 = (r3, s3) => {
      if (void 0 !== e2) return false;
      e2 = r3;
      const i2 = s3?.source ?? ("external" === r3 ? "probe" : "run_first_byte"), a2 = s3?.reason ?? o.YR, c2 = { kind: r3, source: i2, reason: a2 };
      return t2?.onDecision?.(c2), "external" === r3 ? (t2?.onExternal?.(a2), n2({ kind: "external", reason: a2 }), true) : (n2({ kind: "builtin" }), true);
    };
    return void 0 !== t2?.initial && t2.onDecision?.({ kind: t2.initial, source: t2.initialSource ?? "setting", reason: o.YR }), { resolveKind: () => e2 ?? "builtin", peekKind: () => e2, latch: s2, applyProbeResult(t3) {
      const e3 = l(t3);
      return "external" === e3.kind ? s2("external", { source: "probe", reason: e3.reason }) : t3.ok && t3.url.length > 0 && s2("builtin", { source: "probe", reason: o.YR }), e3;
    }, subscribe: (t3) => (r2.add(t3), () => {
      r2.delete(t3);
    }) };
  }
  function l(t2) {
    return t2.ok || !(0, n.isConnectClassProbeFailure)(t2.reason) ? { kind: "builtin" } : { kind: "external", reason: t2.reason };
  }
  function u(t2) {
    let e2;
    const r2 = () => (e2 ??= t2.createExternal(), e2);
    return { run: (e3, n2, o2) => d({ builtin: t2.builtin, getExternal: r2, latch: t2.latch, ctx: e3, request: n2, options: o2 }) };
  }
  async function* d(t2) {
    const e2 = t2.latch.peekKind();
    if ("external" === e2) return void (yield* t2.getExternal().run(t2.ctx, t2.request, t2.options));
    if ("builtin" === e2) return void (yield* t2.builtin.run(t2.ctx, t2.request, t2.options));
    const r2 = new AbortController();
    let o2 = false;
    const s2 = t2.latch.subscribe((t3) => {
      "external" !== t3.kind || o2 || r2.abort();
    });
    try {
      for await (const e3 of t2.builtin.run(t2.ctx, t2.request, { ...t2.options, signal: E(t2.options.signal, r2.signal) })) o2 = true, t2.latch.latch("builtin", { source: "run_first_byte" }), yield e3;
      t2.latch.latch("builtin", { source: "run_first_byte" });
    } catch (e3) {
      if (!o2 && r2.signal.aborted && !t2.options.signal.aborted) throw i();
      throw !o2 && (0, n.isPreFirstByteConnectClassError)(e3) && t2.latch.latch("external", { source: "run_connect_error", reason: (0, n.classifyRemoteEgressProbeError)(e3) }), e3;
    } finally {
      s2();
    }
  }
  function E(t2, e2) {
    const r2 = AbortSignal.any;
    if ("function" == typeof r2) return r2([t2, e2]);
    const n2 = new AbortController(), o2 = () => {
      n2.abort();
    };
    return t2.aborted || e2.aborted ? (n2.abort(), n2.signal) : (t2.addEventListener("abort", o2, { once: true }), e2.addEventListener("abort", o2, { once: true }), n2.signal);
  }
}, 93173: (t, e, r) => {
  r.r(e), r.d(e, { AGENT_HOST_PROD_CREDS_DISPLAY_NAME: () => i, AGENT_HOST_REMOTE_EGRESS_PROBE_MS: () => s, awaitRemoteEgressDecision: () => R, classifyRemoteEgressProbeError: () => d, createRemoteEgressFailoverReporter: () => _, isConnectClassProbeFailure: () => h, isMidStreamTransportError: () => g, isPreFirstByteConnectClassError: () => b, loadServerAgentnUrlOverlay: () => c, probeRemoteAgentBackendEgress: () => p, readServerAgentnUrl: () => a, resolveAgentServiceProbeUrl: () => l, resolveRemoteEgressProbeTarget: () => u });
  var n = r(32467), o = r(41692);
  const s = 5e3, i = "Prod";
  function a(t2) {
    if (!t2 || "object" != typeof t2) return;
    const e2 = t2.agentUrlConfig, r2 = e2?.agentnUrl ?? e2?.agentn_url;
    return "string" == typeof r2 && r2.length > 0 ? r2 : void 0;
  }
  async function c(t2) {
    try {
      return a(await t2());
    } catch {
      return;
    }
  }
  function l(t2) {
    const e2 = t2.creds?.backendUrl, r2 = t2.creds?.agentBackendUrlNonPrivacy?.default, n2 = (void 0 !== t2.serverAgentnUrl && t2.serverAgentnUrl.length > 0 && (void 0 === t2.creds?.credentialsDisplayName || t2.creds.credentialsDisplayName === i) ? t2.serverAgentnUrl : r2) || e2;
    return t2.http2Disabled ? void 0 === e2 || 0 === e2.length ? void 0 : { url: e2, http2: false } : void 0 !== n2 && 0 !== n2.length ? { url: n2, http2: true } : void 0;
  }
  function u(t2) {
    const e2 = l(t2);
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
  function d(t2) {
    const e2 = y(t2);
    for (const t3 of e2) {
      const e3 = E(v(t3));
      if (void 0 !== e3) return e3;
    }
    for (const t3 of e2) {
      const e3 = f(T(t3));
      if (void 0 !== e3) return e3;
    }
    return "unknown";
  }
  function E(t2) {
    if (void 0 !== t2) return "ETIMEDOUT" === t2 || "ERR_SOCKET_TIMEOUT" === t2 || "UND_ERR_CONNECT_TIMEOUT" === t2 ? "timeout" : "EAI_AGAIN" === t2 ? "transient_dns" : "ENOTFOUND" === t2 || "EAI_FAIL" === t2 || "EAI_NONAME" === t2 || "EAI_NODATA" === t2 ? "dns" : "ECONNRESET" === t2 || "ECONNREFUSED" === t2 || "EPIPE" === t2 || "ECONNABORTED" === t2 || "ENETUNREACH" === t2 || "EHOSTUNREACH" === t2 ? "reset" : S(t2, "") ? "tls" : k(t2, "") ? "proxy" : void 0;
  }
  function f(t2) {
    return /timed out|timeout/i.test(t2) ? "timeout" : /read ECONNRESET|connect ECONNRESET|socket hang up/i.test(t2) ? "reset" : S(void 0, t2) ? "tls" : k(void 0, t2) ? "proxy" : void 0;
  }
  function h(t2) {
    return "timeout" === t2 || "reset" === t2 || "dns" === t2 || "tls" === t2 || "proxy" === t2;
  }
  function g(t2) {
    return y(t2).some((t3) => /Premature close|NGHTTP2|http\/2 stream|ERR_HTTP2_SESSION_ERROR/i.test(`${v(t3) ?? ""} ${T(t3)}`));
  }
  function b(t2) {
    if (g(t2)) return false;
    const e2 = d(t2);
    return "transient_dns" === e2 || h(e2);
  }
  async function p(t2) {
    if (!t2.remoteName) return { ok: true, url: "", class: "ok" };
    const e2 = u({ creds: t2.creds, http2Disabled: t2.http2Disabled, serverAgentnUrl: t2.serverAgentnUrl });
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
    })(t2.loadSystemCertificates), i2 = await m(e2, r2, n2, t2.connectHttp2, t2.connectTls);
    if (i2.ok || "transient_dns" !== i2.reason) return i2;
    const a2 = await m(e2, r2, n2, t2.connectHttp2, t2.connectTls);
    return a2.ok || "transient_dns" !== a2.reason ? a2 : { ...a2, reason: "dns" };
  }
  async function R(t2) {
    const e2 = await t2.probe;
    return e2.ok || !h(e2.reason) ? { kind: "builtin" } : { kind: "external", reason: e2.reason };
  }
  function _(t2) {
    let e2 = false;
    return { announce(r2) {
      e2 || (e2 = true, t2.info(`agent host: routing inference via local client (${r2})`), t2.structuredWarn("agent host: routing inference via local client", { reason: r2 }), t2.metricsIncrement("agent_host.remote_egress_failover", { reason: r2 }), t2.captureException(r2));
    } };
  }
  function m(t2, e2, r2, s2, i2) {
    return t2.http2 ? (function(t3, e3, r3, n2) {
      return new Promise((o2) => {
        let s3 = false;
        const i3 = (t4) => {
          s3 || (s3 = true, o2(t4));
        }, a2 = new URL(t3.url).origin, c2 = n2(a2, { servername: t3.host, timeout: e3, ...void 0 === r3 ? {} : { ca: r3 } }, () => {
          c2.close(), i3({ ok: true, url: t3.url, class: "ok" });
        });
        c2.setTimeout(e3, () => {
          c2.destroy(), i3({ ok: false, reason: "timeout", url: t3.url, host: t3.host });
        }), c2.once("error", (e4) => {
          c2.destroy(), i3({ ok: false, reason: d(e4), url: t3.url, host: t3.host });
        });
      });
    })(t2, e2, r2, s2 ?? n.connect) : (function(t3, e3, r3, n2) {
      return new Promise((o2) => {
        let s3 = false;
        const i3 = (t4) => {
          s3 || (s3 = true, o2(t4));
        }, a2 = n2({ host: t3.host, port: t3.port, servername: t3.host, timeout: e3, ...void 0 === r3 ? {} : { ca: r3 } }, () => {
          a2.destroy(), i3({ ok: true, url: t3.url, class: "ok" });
        });
        a2.setTimeout(e3, () => {
          a2.destroy(), i3({ ok: false, reason: "timeout", url: t3.url, host: t3.host });
        }), a2.once("error", (e4) => {
          a2.destroy(), i3({ ok: false, reason: d(e4), url: t3.url, host: t3.host });
        });
      });
    })(t2, e2, r2, i2 ?? o.connect);
  }
  function y(t2) {
    const e2 = [], r2 = /* @__PURE__ */ new Set();
    let n2 = t2;
    for (; null != n2 && !r2.has(n2); ) r2.add(n2), e2.push(n2), n2 = "object" == typeof n2 && "cause" in n2 ? n2.cause : void 0;
    return e2;
  }
  function v(t2) {
    if ("object" == typeof t2 && null !== t2 && "code" in t2 && "string" == typeof t2.code) return t2.code;
  }
  function T(t2) {
    return t2 instanceof Error ? t2.message : null == t2 ? "" : String(t2);
  }
  function S(t2, e2) {
    return !(void 0 === t2 || !(t2.startsWith("ERR_TLS") || t2.startsWith("ERR_SSL") || t2.startsWith("CERT_") || "UNABLE_TO_VERIFY_LEAF_SIGNATURE" === t2 || "DEPTH_ZERO_SELF_SIGNED_CERT" === t2)) || /certificate|unknown ca|self.signed|SSL alert|unable to verify/i.test(e2);
  }
  function k(t2, e2) {
    return "EPROTO" === t2 || /407|proxy|tunneling socket|ERR_PROXY/i.test(e2);
  }
}, 93432: (t, e, r) => {
  r.r(e), r.d(e, { createRemoteEgressLatchedInferenceTransport: () => s, runLatchedConnectCall: () => i });
  var n = r(29580), o = r(93173);
  function s(t2) {
    let e2;
    const r2 = () => (e2 ??= t2.createExternal(), e2);
    let n2;
    const s2 = () => "external" === t2.latch.peekKind() || void 0 !== n2, a = (e3) => {
      const r3 = (0, o.classifyRemoteEgressProbeError)(e3);
      t2.latch.latch("external", { source: "inference_connect_error", reason: r3 }) || "builtin" === t2.latch.peekKind() && void 0 === n2 && (n2 = r3, t2.onInferenceHop?.(r3));
    }, c = t2.builtin.transport;
    return { transport: { unary: (e3, n3, o2, l, u, d, E) => i({ latch: t2.latch, isExternal: s2, onBuiltinConnectError: a, signal: o2, builtin: (t3) => c.unary(e3, n3, t3, l, u, d, E), external: () => r2().unary(e3, n3, o2, l, u, d, E) }), stream: (e3, n3, o2, l, u, d, E) => i({ latch: t2.latch, isExternal: s2, onBuiltinConnectError: a, signal: o2, builtin: (t3) => c.stream(e3, n3, t3, l, u, d, E), external: () => r2().stream(e3, n3, o2, l, u, d, E) }) }, isHttp2TransportFor: (e3) => !!s2() || t2.builtin.isHttp2TransportFor(e3) };
  }
  async function i(t2) {
    if (t2.isExternal()) return t2.external();
    if ("builtin" === t2.latch.peekKind()) try {
      return await t2.builtin(t2.signal);
    } catch (e3) {
      throw true !== t2.signal?.aborted && (0, o.isPreFirstByteConnectClassError)(e3) && t2.onBuiltinConnectError(e3), e3;
    }
    const e2 = new AbortController();
    let r2 = false;
    const s2 = t2.latch.subscribe((t3) => {
      "external" !== t3.kind || r2 || e2.abort();
    });
    try {
      const o2 = await t2.builtin(void 0 === t2.signal ? e2.signal : (0, n.mergeAbortSignals)(t2.signal, e2.signal));
      return r2 = true, o2;
    } catch (s3) {
      if (r2 = true, true === t2.signal?.aborted) throw s3;
      if (e2.signal.aborted) throw (0, n.createRemoteEgressFlipError)();
      throw (0, o.isPreFirstByteConnectClassError)(s3) && t2.onBuiltinConnectError(s3), s3;
    } finally {
      s2();
    }
  }
} };
