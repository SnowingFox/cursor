// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 41250 range:3170576..3200512
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41250: (e, t, r) => {
    "use strict";
    r.d(t, { B1j: () => l, c8u: () => ce, uOd: () => me, E_S: () => he, Ico: () => se, O3I: () => v, tBH: () => g, MEY: () => n.ME, eod: () => d, Fmf: () => ae, jIB: () => ee, VDJ: () => B, X5z: () => J, $HQ: () => n.$H, YaX: () => c, Gpm: () => pe, PKk: () => xe, _NE: () => n._N, Ezk: () => be, qFm: () => ye, eaG: () => R, q2e: () => h, mtU: () => Se, utF: () => ke });
    var n = r(50768);
    const s = "mcp-provider://";
    function o(e2) {
      const t2 = e2?.trim();
      return void 0 === t2 || 0 === t2.length ? void 0 : t2;
    }
    function i(e2) {
      const t2 = e2?.trim();
      return void 0 === t2 || 0 === t2.length ? void 0 : t2;
    }
    function a(e2, t2, r2) {
      return t2.length > 0 && (function(e3, t3, r3) {
        const s2 = r3?.matchesServerUrlPattern ?? n.vc;
        return t3.some((t4) => {
          const r4 = o(t4.command), a2 = i(t4.serverUrl);
          if (!(void 0 !== r4) && !(void 0 !== a2)) return false;
          const c2 = void 0 === r4 || void 0 !== e3.command && (0, n.mD)(r4, e3.command), l2 = void 0 === a2 || void 0 !== e3.url && s2(a2, e3.url);
          return c2 && l2;
        });
      })(e2, t2, r2);
    }
    function c(e2, t2, r2) {
      if (void 0 === t2) return true;
      if (true === t2.disableAll) return false;
      if ((function(e3) {
        return true === e3.url?.startsWith(s);
      })(e2)) return true;
      const c2 = t2.allowedMcpServers ?? [];
      return 0 === c2.length && true !== t2.allowUserOverrideMcpServers || (!!a(e2, c2, r2) || true === t2.allowUserOverrideMcpServers && !(function(e3, t3, r3) {
        const s2 = r3?.matchesServerUrlPattern ?? n.vc;
        return (t3 ?? []).some((t4) => {
          const r4 = o(t4.command), a2 = i(t4.serverUrl);
          if (void 0 === r4 && void 0 === a2) return false;
          const c3 = void 0 === r4 || void 0 !== e3.command && (0, n.mD)(r4, e3.command), l2 = void 0 === a2 || void 0 !== e3.url && s2(a2, e3.url);
          return c3 && l2;
        });
      })(e2, t2.deniedMcpServers, r2));
    }
    r(50623);
    class l {
      constructor(e2 = 864e5) {
        this.ttl = e2, this.staleDirty = false, this.refreshGeneration = 0;
      }
      async get(e2) {
        const t2 = performance.now();
        if (this.state && this.state.expiresAt > t2 && !this.staleDirty) return this.state.value;
        if (this.staleDirty && this.state) {
          const t3 = this.state.value;
          if (!this.refreshInFlight) {
            const t4 = this.refreshGeneration;
            let r3;
            r3 = (async () => {
              try {
                const r4 = await e2();
                if (t4 !== this.refreshGeneration) return;
                this.state = { expiresAt: performance.now() + this.ttl, value: r4 }, this.staleDirty = false;
              } catch {
              } finally {
                r3 && this.refreshInFlight === r3 && (this.refreshInFlight = void 0);
              }
            })(), this.refreshInFlight = r3;
          }
          return t3;
        }
        const r2 = await e2();
        return this.state = { expiresAt: performance.now() + this.ttl, value: r2 }, this.staleDirty = false, r2;
      }
      invalidate() {
        this.refreshGeneration++, this.state = void 0, this.staleDirty = false, this.refreshInFlight = void 0;
      }
      invalidateKeepingStale() {
        this.state && (this.staleDirty = true);
      }
    }
    const u = 1e3;
    async function d(e2) {
      const t2 = [], r2 = /* @__PURE__ */ new Set();
      let n2;
      for (let s2 = 1; ; s2++) {
        const o2 = await e2.fetchPage(n2), i2 = e2.itemsOf(o2);
        t2.push(...i2);
        const a2 = e2.nextCursorOf(o2);
        if (!a2 || r2.has(a2)) return t2;
        if (s2 >= u) throw new Error(`MCP list did not end after ${u} pages; refusing to keep paging`);
        r2.add(a2), n2 = a2;
      }
    }
    function p(e2) {
      return Object.fromEntries(Object.entries(e2).filter(([, e3]) => void 0 !== e3));
    }
    function m(e2, t2) {
      const r2 = (function(e3) {
        try {
          const t3 = new URL(e3);
          return { host: t3.host, origin: t3.origin, pathname: t3.pathname };
        } catch {
          return { host: null, origin: null, pathname: null };
        }
      })(e2), n2 = false !== t2?.includePath;
      return { host: r2.host, origin: r2.origin, path: n2 ? r2.pathname : null };
    }
    function h(e2, t2) {
      return m(e2, t2);
    }
    var f = r(76982);
    function g(e2, t2) {
      const r2 = e2?.access_token, n2 = "string" == typeof r2 ? r2.length : 0, s2 = Boolean(e2?.refresh_token), o2 = "number" == typeof e2?.expires_in && Number.isFinite(e2.expires_in) ? e2.expires_in : null;
      return { accessTokenLen: n2, refreshTokenPresent: s2, expiresAtTimestamp: t2?.expiresInIsFresh && null !== o2 ? Date.now() + Math.round(1e3 * o2) : null, grantedScope: "string" == typeof e2?.scope && e2.scope.length > 0 ? e2.scope : null };
    }
    function y(e2) {
      if (e2) return (0, f.createHash)("sha256").update(e2).digest("hex").slice(0, 12);
    }
    function w(e2) {
      if (e2 && 0 !== e2.length) return y(JSON.stringify([...e2].sort()));
    }
    function v(e2) {
      return { clientIdHash: y(e2?.client_id), hasClientSecret: (e2?.client_secret ?? "").length > 0, redirectUrisHash: w(e2?.redirect_uris), redirectUriCount: e2?.redirect_uris?.length ?? 0 };
    }
    function _(e2, t2) {
      let r2 = e2;
      for (const e3 of t2) {
        if ("object" != typeof r2 || null === r2 || !(e3 in r2)) return;
        r2 = r2[e3];
      }
      return r2;
    }
    function b(e2, t2) {
      for (const r2 of t2) if ("string" == typeof _(e2, r2.split("."))) return _(e2, r2.split("."));
    }
    function S(e2) {
      if (!e2 || "object" != typeof e2) return;
      const t2 = e2.errorCode;
      return "string" == typeof t2 ? t2 : void 0;
    }
    function k(e2) {
      if (!e2) return;
      const t2 = e2.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), r2 = t2?.[1] ?? t2?.[2] ?? t2?.[3];
      if (!r2) return;
      const n2 = Number.parseInt(r2, 10);
      return Number.isNaN(n2) ? void 0 : n2;
    }
    function x(e2) {
      if (e2 instanceof Error) {
        const t2 = e2.message;
        return t2 && t2 !== e2.name ? R(t2) : void 0;
      }
      if (null != e2) {
        const t2 = String(e2);
        return t2 ? R(t2) : void 0;
      }
    }
    function E(e2) {
      if (e2 && "object" == typeof e2) return e2.cause;
    }
    function I(e2, t2 = 4) {
      const r2 = [];
      let n2 = e2;
      for (let e3 = 0; e3 < t2 && null != n2; e3++) {
        if (n2 instanceof Error) {
          const e4 = x(n2);
          r2.push(e4 ? `${n2.name}: ${e4}` : n2.name), n2 = E(n2);
          continue;
        }
        r2.push(R(String(n2)));
        break;
      }
      return r2.length > 1 ? r2.join(" > ") : void 0;
    }
    const T = "[REDACTED]", C = /(^|_|-)(token|secret|password|assertion|authorization|verifier|challenge|code)(_|-|$)/i;
    function P(e2) {
      return e2.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${T}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${T}`);
    }
    function A(e2, t2 = 256) {
      return e2.length > t2 ? `${e2.slice(0, Math.max(0, t2 - 3))}...` : e2;
    }
    function R(e2, t2) {
      return A(P(e2), t2?.maxLength);
    }
    function M(e2) {
      if ("string" == typeof e2) return A(P(e2));
      if (void 0 !== e2) try {
        const t2 = JSON.stringify(e2, (e3, t3) => e3 && (function(e4) {
          const t4 = e4.toLowerCase();
          return "code" === t4 || "authorization" === t4 || t4.includes("token") || t4.includes("secret") || t4.includes("password") || t4.includes("assertion") || t4.includes("verifier") || t4.includes("challenge") || C.test(t4);
        })(e3) ? T : "string" == typeof t3 ? P(t3) : t3);
        if (!t2) return;
        return A(t2);
      } catch {
        return;
      }
    }
    function J(e2) {
      const t2 = E(e2), r2 = e2 instanceof Error ? e2.name : null != e2 ? typeof e2 : void 0, n2 = t2 instanceof Error ? t2.name : void 0, s2 = x(t2), o2 = x(e2) ?? s2, i2 = b(e2, ["code", "cause.code"]), a2 = S(e2) ?? S(t2) ?? b(e2, ["errorCode", "error", "cause.errorCode", "cause.error", "body.error", "response.body.error"]), c2 = (function(e3, t3) {
        for (const r3 of t3) {
          const t4 = _(e3, r3.split("."));
          if ("number" == typeof t4 && Number.isFinite(t4)) return t4;
        }
      })(e2, ["status", "statusCode", "response.status", "response.statusCode", "cause.status", "cause.statusCode", "cause.response.status", "cause.response.statusCode"]) ?? k(o2) ?? k(s2), l2 = M(_(e2, ["response", "body"]) ?? _(e2, ["body"]) ?? _(e2, ["data"]) ?? _(e2, ["cause", "body"]) ?? _(e2, ["cause", "response", "body"])), u2 = (function(e3) {
        const t3 = e3.message?.toLowerCase(), r3 = e3.code?.toLowerCase();
        return t3?.includes("timed out") || t3?.includes("timeout") || t3?.includes("etimedout") || "etimedout" === r3 ? "timeout" : t3?.includes("enotfound") || t3?.includes("eai_again") || t3?.includes("dns") || "enotfound" === r3 || "eai_again" === r3 ? "dns" : t3?.includes("certificate") || t3?.includes("tls") || t3?.includes("ssl") ? "tls" : t3?.includes("econnreset") || t3?.includes("connection reset") || "econnreset" === r3 ? "connection_reset" : t3?.includes("econnrefused") || t3?.includes("connection refused") || "econnrefused" === r3 ? "connection_refused" : void 0;
      })({ message: o2, code: i2 }), d2 = a2 ? "oauth_error" : u2 ? "auth_transport_error" : o2 ? "generic_error" : void 0;
      return p({ errorName: r2, errorMessage: o2, errorType: null != e2 ? typeof e2 : void 0, httpStatus: c2, oauthErrorCode: a2, errorResponseSummary: l2, networkClassification: u2, causeName: n2, causeMessage: s2, causeChain: I(e2), sdkErrorKind: d2 });
    }
    const O = { mcp_oauth_provider_initialized: "MCP OAuth provider initialized", mcp_oauth_tokens_loaded: "MCP OAuth tokens loaded", mcp_oauth_tokens_saved: "MCP OAuth tokens saved", mcp_oauth_callback_completion: "MCP OAuth callback exchange completed", mcp_oauth_client_info_loaded: "MCP OAuth client information loaded", mcp_oauth_client_info_saved: "MCP OAuth client information saved", mcp_oauth_refresh_prepare: "MCP OAuth refresh prepared", mcp_oauth_refresh_error_release: "MCP OAuth refresh error released", mcp_oauth_state_transition: "MCP OAuth state transition", mcp_oauth_credentials_invalidated: "MCP OAuth credentials invalidated" };
    function B(e2) {
      const t2 = e2.message ?? O[e2.event], r2 = { event: e2.event, cursorMcp: { oauth: p({ ...e2.metadata }) } }, n2 = e2.level ?? "info";
      "error" !== n2 ? "warn" !== n2 ? "debug" !== n2 ? e2.logger.info?.(t2, r2) : e2.logger.debug?.(t2, r2) : e2.logger.warn?.(t2, r2) : e2.logger.error?.(t2, e2.error, r2);
    }
    const D = 4096;
    function q(e2) {
      return "object" == typeof e2 && null !== e2 && "url" in e2 && "string" == typeof e2.url;
    }
    function N(e2) {
      return "string" == typeof e2 ? e2 : e2 instanceof URL ? e2.toString() : e2.url;
    }
    function F(e2) {
      const t2 = [];
      return e2.forEach((e3, r2) => {
        t2.push(r2);
      }), t2.sort();
    }
    function U(e2) {
      if (null === e2) return null;
      const t2 = Number.parseInt(e2, 10);
      return Number.isNaN(t2) ? null : t2;
    }
    function L(e2, t2) {
      if (null == e2) return { kind: "none", bytes: 0, contentLength: U(t2.get("content-length")) };
      if ("string" == typeof e2) {
        const r2 = new TextEncoder().encode(e2).length;
        return { kind: "text", bytes: r2, contentLength: U(t2.get("content-length")) ?? r2 };
      }
      if (e2 instanceof URLSearchParams) {
        const r2 = e2.toString(), n2 = new TextEncoder().encode(r2).length;
        return { kind: "text", bytes: n2, contentLength: U(t2.get("content-length")) ?? n2 };
      }
      return e2 instanceof Blob ? { kind: "blob", bytes: e2.size, contentLength: U(t2.get("content-length")) ?? e2.size } : e2 instanceof ArrayBuffer || ArrayBuffer.isView(e2) ? { kind: "binary", bytes: e2.byteLength, contentLength: U(t2.get("content-length")) ?? e2.byteLength } : "object" == typeof e2 && null !== e2 && ("getReader" in e2 || Symbol.asyncIterator in e2) ? { kind: "stream", bytes: null, contentLength: U(t2.get("content-length")) } : { kind: "unknown", bytes: null, contentLength: U(t2.get("content-length")) };
    }
    function $(e2, t2) {
      if (null === e2 || !e2.toLowerCase().startsWith("application/x-www-form-urlencoded")) return;
      const r2 = "string" == typeof t2 ? (function(e3, t3) {
        for (const r3 of e3.split("&")) {
          const e4 = r3.indexOf("="), n2 = e4 >= 0 ? r3.slice(0, e4) : r3;
          let s2;
          try {
            s2 = decodeURIComponent(n2.replaceAll("+", " "));
          } catch {
            return;
          }
          if (s2 !== t3) continue;
          const o2 = e4 >= 0 ? r3.slice(e4 + 1) : "";
          try {
            return decodeURIComponent(o2.replaceAll("+", " "));
          } catch {
            return;
          }
        }
      })(t2, "grant_type") : t2 instanceof URLSearchParams ? t2.get("grant_type") ?? void 0 : void 0;
      return r2 ? (function(e3) {
        switch (e3) {
          case "authorization_code":
          case "refresh_token":
          case "client_credentials":
          case "urn:ietf:params:oauth:grant-type:jwt-bearer":
          case "urn:ietf:params:oauth:grant-type:token-exchange":
            return e3;
          default:
            return "other";
        }
      })(r2) : void 0;
    }
    function j(e2) {
      const { input: t2, init: r2 } = e2, n2 = m(N(t2)), s2 = (function(e3, t3) {
        const r3 = new Headers(q(e3) ? e3.headers : void 0);
        return new Headers(t3?.headers).forEach((e4, t4) => {
          r3.set(t4, e4);
        }), r3;
      })(t2, r2), o2 = F(s2), i2 = s2.get("content-type"), a2 = y(s2.get("mcp-session-id") ?? void 0), c2 = s2.get("authorization"), l2 = c2 ? c2.split(/\s+/, 1)[0] ?? null : null;
      return { method: (r2?.method ?? (q(t2) ? t2.method : void 0) ?? "GET").toUpperCase(), url: n2, headers: { names: o2, count: o2.length }, contentType: i2, body: L(r2?.body, s2), sessionIdHash: a2 ?? null, authorizationScheme: l2 };
    }
    function G(e2, t2) {
      const r2 = F(e2.headers), n2 = U(e2.headers.get("content-length"));
      return { status: e2.status, ok: e2.ok, headers: { names: r2, count: r2.length }, contentType: e2.headers.get("content-type"), body: { kind: null === e2.body ? "none" : "stream", bytes: null === e2.body ? 0 : n2, contentLength: n2, ...void 0 !== t2 ? { errorSummary: t2 } : {} }, sessionIdHash: y(e2.headers.get("mcp-session-id") ?? void 0) ?? null, wwwAuthenticateHash: y(e2.headers.get("www-authenticate") ?? void 0) ?? null, mcpProtocolVersion: e2.headers.get("mcp-protocol-version") ?? null, requestId: e2.headers.get("x-request-id") ?? null };
    }
    function z(e2) {
      const t2 = {};
      return void 0 !== e2.errorName && (t2.name = e2.errorName), void 0 !== e2.errorMessage && (t2.message = e2.errorMessage), void 0 !== e2.errorType && (t2.type = e2.errorType), void 0 !== e2.oauthErrorCode && (t2.oauthErrorCode = e2.oauthErrorCode), void 0 !== e2.errorResponseSummary && (t2.responseSummary = e2.errorResponseSummary), void 0 !== e2.networkClassification && (t2.networkClassification = e2.networkClassification), void 0 !== e2.sdkErrorKind && (t2.sdkErrorKind = e2.sdkErrorKind), t2;
    }
    function W(e2, t2) {
      const r2 = j({ input: e2, init: t2 });
      if (void 0 !== $(r2.contentType, t2?.body)) return true;
      const n2 = r2.url.path?.toLowerCase() ?? "";
      return n2.endsWith("/token") || n2.includes("/oauth/token") || n2.includes("/connect/token");
    }
    async function H(e2, t2) {
      try {
        const r2 = await e2.clone().text();
        return r2.length > t2 ? r2.slice(0, t2) : r2;
      } catch {
        return;
      }
    }
    function K(e2) {
      if (!(function(e3) {
        return "/mcp" === e3 || true === e3?.endsWith("/mcp");
      })(m(N(e2.input)).path)) return R(e2.rawText, { maxLength: D });
      try {
        const t2 = JSON.parse(e2.rawText);
        return "object" == typeof t2 && null !== t2 ? (function(e3) {
          const t3 = e3.error;
          if ("string" == typeof t3) return JSON.stringify({ error: t3 });
          if ("object" != typeof t3 || null === t3) return;
          const r2 = t3, n2 = "number" == typeof r2.code || "string" == typeof r2.code ? r2.code : void 0, s2 = "string" == typeof r2.message ? R(r2.message, { maxLength: D }) : void 0;
          if (void 0 === n2 && void 0 === s2) return;
          return JSON.stringify({ ...void 0 !== n2 ? { code: n2 } : {}, ...void 0 !== s2 ? { message: s2 } : {} });
        })(t2) : void 0;
      } catch {
        return;
      }
    }
    async function V(e2) {
      if (!W(e2.input, e2.init)) return;
      const t2 = await H(e2.response, D);
      if (void 0 !== t2) try {
        return M(JSON.parse(t2));
      } catch {
        return R(t2, { maxLength: D });
      }
    }
    async function Y(e2) {
      const t2 = await (async function(e3, t3) {
        try {
          if (t3.ok) return;
          const r2 = t3.headers.get("content-type")?.toLowerCase() ?? "";
          if (!r2.includes("json") && !r2.includes("text")) return;
          const n2 = await H(t3, D);
          if (void 0 === n2) return;
          return K({ input: e3, rawText: n2 });
        } catch {
          return;
        }
      })(e2.input, e2.response);
      return { responseErrorSummary: t2, oauthTokenErrorBodySummary: void 0 === t2 ? await V({ input: e2.input, response: e2.response, init: e2.init }) : void 0 };
    }
    function Q(e2) {
      const { logger: t2, response: r2 } = e2, n2 = (function(e3) {
        const { input: t3, init: r3, response: n3, durationMs: s2, metadata: o2, responseErrorSummary: i2, oauthTokenErrorBodySummary: a2 } = e3, c2 = j({ input: t3, init: r3 }), l2 = $(c2.contentType, r3?.body);
        return { event: "mcp_http_exchange", outcome: n3.ok ? "success" : "http_error", durationMs: s2, cursorMcp: { transport: { ...o2, request: c2, response: G(n3, i2), ...void 0 !== l2 ? { oauth: { grantType: l2 } } : {}, ...void 0 !== a2 ? { oauthTokenErrorBodySummary: a2 } : {} } } };
      })(e2);
      r2.ok ? t2.info?.("MCP HTTP exchange completed", n2) : !(function(e3) {
        return 401 === e3.response.status && null === e3.request.authorizationScheme && e3.response.headers.has("www-authenticate") && !W(e3.input, e3.init);
      })({ response: r2, request: n2.cursorMcp.transport.request, input: e2.input, init: e2.init }) ? t2.warn?.("MCP HTTP exchange completed", n2) : t2.debug?.("MCP HTTP exchange completed", n2);
    }
    function X(e2) {
      const { logger: t2 } = e2;
      t2.warn?.("MCP HTTP exchange failed", (function(e3) {
        const { input: t3, init: r2, error: n2, durationMs: s2, metadata: o2, responseFromError: i2, responseErrorSummary: a2, oauthTokenErrorBodySummary: c2 } = e3, l2 = J(n2), u2 = j({ input: t3, init: r2 }), d2 = $(u2.contentType, r2?.body);
        return { event: "mcp_http_exchange", outcome: "error", durationMs: s2, cursorMcp: { transport: { ...o2, request: u2, response: void 0 !== i2 ? G(i2, a2) : { status: l2.httpStatus ?? null, ok: null, headers: { names: [], count: 0 }, contentType: null, body: { kind: "none", bytes: null, contentLength: null, ...void 0 !== a2 ? { errorSummary: a2 } : {} }, requestId: null, sessionIdHash: null, wwwAuthenticateHash: null, mcpProtocolVersion: null }, ...void 0 !== d2 ? { oauth: { grantType: d2 } } : {}, ...void 0 !== c2 ? { oauthTokenErrorBodySummary: c2 } : {}, error: z(l2) } } };
      })(e2));
    }
    function Z(e2, t2, r2) {
      try {
        e2();
      } catch {
        t2.warn?.("MCP HTTP exchange logging failed", { event: "mcp_http_exchange_logging_failure", phase: r2 });
      }
    }
    function ee(e2) {
      const { fetch: t2, logger: r2, metadata: n2, logSuccessfulExchanges: s2 = true } = e2;
      return async (e3, o2) => {
        const i2 = Date.now();
        try {
          const a2 = await t2(e3, o2), { responseErrorSummary: c2, oauthTokenErrorBodySummary: l2 } = a2.ok ? {} : await Y({ input: e3, init: o2, response: a2 });
          return !s2 && a2.ok || Z(() => {
            Q({ logger: r2, input: e3, init: o2, response: a2, durationMs: Date.now() - i2, metadata: n2, responseErrorSummary: c2, oauthTokenErrorBodySummary: l2 });
          }, r2, "success"), a2;
        } catch (t3) {
          const s3 = (function(e4) {
            if (!e4 || "object" != typeof e4) return;
            const t4 = [e4.response, e4.cause?.response];
            for (const e5 of t4) if (e5 && "object" == typeof e5 && "status" in e5 && "number" == typeof e5.status && "headers" in e5 && "function" == typeof e5.headers?.get) return e5;
          })(t3), { responseErrorSummary: a2, oauthTokenErrorBodySummary: c2 } = s3 ? await Y({ input: e3, init: o2, response: s3 }) : {};
          throw Z(() => {
            X({ logger: r2, input: e3, init: o2, error: t3, durationMs: Date.now() - i2, metadata: n2, responseFromError: s3, responseErrorSummary: a2, oauthTokenErrorBodySummary: c2 });
          }, r2, "failure"), t3;
        }
      };
    }
    /* @__PURE__ */ new Set(["access_not_configured", "admin_policy_enforced", "policy_enforced"]), /* @__PURE__ */ new Set(["invalid_grant", "interaction_required", "unauthorized_client"]), /* @__PURE__ */ new Set(["50105", "53000", "53001", "53002", "53003", "53004", "530032", "90094", "7000112"]), /* @__PURE__ */ new Set(["InvalidGrantError", "InvalidRequestError"]);
    const te = ["0.0.0.0/0", "::/0"];
    function re(e2) {
      const t2 = (e2 ?? []).filter((e3) => e3.trim().length > 0), r2 = t2.flatMap((e3) => {
        const t3 = (0, n.bi)(e3);
        return void 0 === t3 ? [] : [t3];
      });
      return { hasConfiguredEntries: t2.length > 0, hasInvalidEntries: r2.length !== t2.length, entries: r2 };
    }
    function ne(e2) {
      const t2 = re(e2.mcpNetworkAllowlist), r2 = re(e2.mcpNetworkDenylist), n2 = e2.mcpNetworkMode;
      if ("deny_all" === n2 || r2.entries.includes("*") || r2.hasInvalidEntries) return { version: 1, default: "deny" };
      if ("allow_all" === n2) return { version: 1, default: "deny", allow: [...te], ...r2.entries.length > 0 ? { deny: r2.entries } : {} };
      if ("allowlist" === n2 || t2.hasConfiguredEntries) {
        const e3 = (function(e4) {
          return e4.entries.includes("*") ? [...te] : e4.entries;
        })(t2);
        return e3.length > 0 ? { version: 1, default: "deny", allow: e3, ...r2.entries.length > 0 ? { deny: r2.entries } : {} } : { version: 1, default: "deny" };
      }
      return { version: 1, default: "deny", allow: [...te], ...r2.entries.length > 0 ? { deny: r2.entries } : {} };
    }
    async function se(e2, t2) {
      const { resolveSandboxPolicyForWorkspace: n2 } = await Promise.resolve().then(r.bind(r, 25925)), s2 = { type: "workspace_readwrite", sandboxWorkspaceRoot: t2, networkPolicy: ne(e2), networkPolicyStrict: true }, { policy: o2 } = await n2(t2, { perUser: s2 });
      return o2;
    }
    const oe = ["0.0.0.0/0", "::/0"];
    function ie(e2) {
      const t2 = (e2 ?? []).filter((e3) => e3.trim().length > 0), r2 = t2.flatMap((e3) => {
        const t3 = (0, n.bi)(e3);
        return void 0 === t3 ? [] : [t3];
      });
      return { hasInvalidEntries: r2.length !== t2.length, entries: r2 };
    }
    function ae(e2) {
      const t2 = true === e2.enabled, r2 = ie(e2.mcpNetworkDenylist), s2 = "deny_all" === e2.mcpNetworkMode || r2.entries.includes("*") || r2.hasInvalidEntries, o2 = t2 ? (function(e3) {
        if ("allow_all" === e3.mcpNetworkMode) return [...oe];
        const t3 = ie(e3.mcpNetworkAllowlist);
        if ("allowlist" === e3.mcpNetworkMode) return t3.entries.includes("*") ? [...oe] : t3.entries;
        if (!(function(e4) {
          return (e4.mcpNetworkAllowlist ?? []).some((e5) => e5.trim().length > 0);
        })(e3)) return [...oe];
        const r3 = (0, n.b6)(e3);
        return r3.includes("*") ? [...oe] : r3;
      })(e2) : [], i2 = t2 ? s2 ? ["*"] : r2.entries : [];
      return JSON.stringify({ enabled: t2, mode: e2.mcpNetworkMode, allow: s2 ? [] : o2, deny: i2 });
    }
    class ce extends Error {
      constructor(e2, t2) {
        super(`MCP server "${e2}" requires sandboxing because MCP Network Controls are enabled, but the sandbox is not supported on this platform or system. The server was not started.`), this.serverName = e2, this.name = "McpSandboxUnavailableError", void 0 !== t2 && (this.cause = t2);
      }
    }
    /* @__PURE__ */ new Map();
    /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(["connection_attempt"]), /* @__PURE__ */ new Set(["health_probe"]);
    r(48891), r(25977);
    Error;
    Error;
    const le = /* @__PURE__ */ new Set(["UnauthorizedError", "InvalidGrantError", "InvalidTokenError", "InvalidClientError", "UnauthorizedClientError"]), ue = /* @__PURE__ */ new Set(["invalid_grant", "invalid_token", "invalid_client", "unauthorized_client"]), de = [/\btoken (?:has |is )?expired\b/i, /\btoken (?:was|is) invalid\b/i, /\binvalid (?:refresh[ _]?)?token\b/i, /\btoken (?:has been |was )?revoked\b/i];
    function pe(e2) {
      if (null === e2 || "object" != typeof e2) return false;
      const t2 = e2.name;
      if ("string" == typeof t2 && le.has(t2)) return true;
      const r2 = e2.errorCode;
      return !("string" != typeof r2 || !ue.has(r2.toLowerCase())) || (function(e3) {
        if (null === e3 || "object" != typeof e3) return false;
        const t3 = e3.name, r3 = e3.errorCode;
        if ("InvalidRequestError" !== t3 && ("string" != typeof r3 || "invalid_request" !== r3.toLowerCase())) return false;
        const n2 = e3.message;
        return "string" == typeof n2 && de.some((e4) => e4.test(n2));
      })(e2);
    }
    /* @__PURE__ */ new Set(["EAI_AGAIN", "ECONNABORTED", "ECONNREFUSED", "ECONNRESET", "EHOSTUNREACH", "ENETDOWN", "ENETUNREACH", "ENOTFOUND", "EPIPE", "ETIMEDOUT", "EADDRNOTAVAIL", "UND_ERR_CONNECT_TIMEOUT"]), /* @__PURE__ */ new Set(["ECONNRESET", "EPIPE"]), /* @__PURE__ */ new Set([429, 502, 503, 504]);
    const me = 8192;
    /* @__PURE__ */ new Set(["ENOENT", "EACCES", "ENOTDIR", "EPERM"]);
    function he(e2, t2) {
      void 0 !== t2 && t2.length > 0 && e2.searchParams.set("scope", t2.join(" "));
    }
    /* @__PURE__ */ new Set(["invalid_refresh_token", "token_revoked", "token_expired"]);
    const fe = /\$\{[^}]*\}/;
    function ge(e2) {
      if (void 0 === e2) return;
      const t2 = e2.trim();
      return 0 !== t2.length && fe.test(t2) ? t2 : void 0;
    }
    function ye(e2) {
      if (void 0 !== ge(e2)) return;
      const t2 = e2?.trim();
      return t2 && t2.length > 0 ? t2 : void 0;
    }
    var we = r(61771);
    const ve = 3e5, _e = /* @__PURE__ */ new Map();
    async function be(e2, t2 = fetch) {
      if (void 0 === (0, we.sr)(e2)) return;
      const r2 = new URL(e2), n2 = `${r2.origin}/.well-known/oauth-protected-resource${r2.pathname.replace(/\/+$/, "")}`, s2 = _e.get(n2);
      if (void 0 !== s2 && s2.expiresAtMs > Date.now()) return s2.metadata;
      let o2;
      try {
        const e3 = await t2(n2);
        if (!e3.ok) return;
        o2 = (0, we.vI)(await e3.json());
      } catch {
        return;
      }
      return _e.set(n2, { metadata: o2, expiresAtMs: Date.now() + ve }), o2;
    }
    Error;
    function Se(e2, t2) {
      if (void 0 === t2) return { headers: t2, cursorAuthHeaderValue: void 0, cursorAuthOrigin: void 0 };
      const r2 = Object.entries(t2), n2 = r2.find(([e3]) => e3.toLowerCase() === we.Qy);
      if (void 0 === n2) return { headers: t2, cursorAuthHeaderValue: void 0, cursorAuthOrigin: void 0 };
      let s2;
      try {
        s2 = new URL(e2).origin;
      } catch {
        s2 = void 0;
      }
      return { headers: Object.fromEntries(r2.filter(([e3]) => e3.toLowerCase() !== we.Qy)), cursorAuthHeaderValue: n2[1], cursorAuthOrigin: s2 };
    }
    function ke(e2, t2, r2) {
      return async (n2, s2) => {
        let o2;
        try {
          o2 = new URL("string" == typeof n2 ? n2 : n2.toString()).origin;
        } catch {
          return r2(n2, s2);
        }
        if (o2 !== t2) return r2(n2, s2);
        const i2 = await e2();
        if (void 0 === i2 || 0 === i2.length) return r2(n2, s2);
        const a2 = new Headers(s2?.headers);
        return a2.set(we.Qy, i2), r2(n2, { ...s2, headers: a2, redirect: "manual" });
      };
    }
    function xe(e2) {
      const t2 = (function(e3) {
        if (!e3 || "object" != typeof e3) return;
        const t3 = e3.code;
        if ("number" == typeof t3 && t3 >= 100 && t3 <= 599) return t3;
        if ("string" == typeof t3 && /^\d{3}$/.test(t3) && Number(t3) >= 100 && Number(t3) <= 599) return Number(t3);
        const r2 = e3 instanceof Error || "string" == typeof e3.message ? e3.message : void 0;
        if (!r2) return;
        const n2 = r2.match(/\bHTTP\s+(\d{3})\b/i);
        if (!n2?.[1]) return;
        const s2 = Number.parseInt(n2[1], 10);
        return Number.isNaN(s2) ? void 0 : s2;
      })(e2);
      return void 0 !== t2 ? 400 === t2 || 404 === t2 || 405 === t2 : !!(e2 instanceof Error && e2.message.toLowerCase().includes("sessionid must be provided")) || (function(e3) {
        if (!(e3 instanceof Error)) return false;
        const t3 = e3, r2 = e3.cause?.code;
        return "ECONNREFUSED" === t3.code || "ECONNREFUSED" === r2 || e3.message.includes("ECONNREFUSED");
      })(e2);
    }
  }