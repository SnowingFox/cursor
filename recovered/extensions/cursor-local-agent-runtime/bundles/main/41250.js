// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 41250 range:1237318..1265542
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41250: (e, t, r) => {
    "use strict";
    r.d(t, { B1j: () => o, c8u: () => ne, uOd: () => le, E_S: () => ce, Ico: () => Q, O3I: () => m, tBH: () => d, eod: () => i, Fmf: () => re, jIB: () => V, VDJ: () => P, X5z: () => I, $HQ: () => n.$H, Gpm: () => ae, PKk: () => we, Ezk: () => ge, qFm: () => pe, eaG: () => T, q2e: () => c, mtU: () => ye, utF: () => ve });
    var n = r(50768);
    r(50623);
    class o {
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
    const s = 1e3;
    async function i(e2) {
      const t2 = [], r2 = /* @__PURE__ */ new Set();
      let n2;
      for (let o2 = 1; ; o2++) {
        const i2 = await e2.fetchPage(n2), a2 = e2.itemsOf(i2);
        t2.push(...a2);
        const l2 = e2.nextCursorOf(i2);
        if (!l2 || r2.has(l2)) return t2;
        if (o2 >= s) throw new Error(`MCP list did not end after ${s} pages; refusing to keep paging`);
        r2.add(l2), n2 = l2;
      }
    }
    function a(e2) {
      return Object.fromEntries(Object.entries(e2).filter(([, e3]) => void 0 !== e3));
    }
    function l(e2, t2) {
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
    function c(e2, t2) {
      return l(e2, t2);
    }
    var u = r(76982);
    function d(e2, t2) {
      const r2 = e2?.access_token, n2 = "string" == typeof r2 ? r2.length : 0, o2 = Boolean(e2?.refresh_token), s2 = "number" == typeof e2?.expires_in && Number.isFinite(e2.expires_in) ? e2.expires_in : null;
      return { accessTokenLen: n2, refreshTokenPresent: o2, expiresAtTimestamp: t2?.expiresInIsFresh && null !== s2 ? Date.now() + Math.round(1e3 * s2) : null, grantedScope: "string" == typeof e2?.scope && e2.scope.length > 0 ? e2.scope : null };
    }
    function p(e2) {
      if (e2) return (0, u.createHash)("sha256").update(e2).digest("hex").slice(0, 12);
    }
    function h(e2) {
      if (e2 && 0 !== e2.length) return p(JSON.stringify([...e2].sort()));
    }
    function m(e2) {
      return { clientIdHash: p(e2?.client_id), hasClientSecret: (e2?.client_secret ?? "").length > 0, redirectUrisHash: h(e2?.redirect_uris), redirectUriCount: e2?.redirect_uris?.length ?? 0 };
    }
    function f(e2, t2) {
      let r2 = e2;
      for (const e3 of t2) {
        if ("object" != typeof r2 || null === r2 || !(e3 in r2)) return;
        r2 = r2[e3];
      }
      return r2;
    }
    function g(e2, t2) {
      for (const r2 of t2) if ("string" == typeof f(e2, r2.split("."))) return f(e2, r2.split("."));
    }
    function y(e2) {
      if (!e2 || "object" != typeof e2) return;
      const t2 = e2.errorCode;
      return "string" == typeof t2 ? t2 : void 0;
    }
    function v(e2) {
      if (!e2) return;
      const t2 = e2.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), r2 = t2?.[1] ?? t2?.[2] ?? t2?.[3];
      if (!r2) return;
      const n2 = Number.parseInt(r2, 10);
      return Number.isNaN(n2) ? void 0 : n2;
    }
    function w(e2) {
      if (e2 instanceof Error) {
        const t2 = e2.message;
        return t2 && t2 !== e2.name ? T(t2) : void 0;
      }
      if (null != e2) {
        const t2 = String(e2);
        return t2 ? T(t2) : void 0;
      }
    }
    function b(e2) {
      if (e2 && "object" == typeof e2) return e2.cause;
    }
    function _(e2, t2 = 4) {
      const r2 = [];
      let n2 = e2;
      for (let e3 = 0; e3 < t2 && null != n2; e3++) {
        if (n2 instanceof Error) {
          const e4 = w(n2);
          r2.push(e4 ? `${n2.name}: ${e4}` : n2.name), n2 = b(n2);
          continue;
        }
        r2.push(T(String(n2)));
        break;
      }
      return r2.length > 1 ? r2.join(" > ") : void 0;
    }
    const S = "[REDACTED]", x = /(^|_|-)(token|secret|password|assertion|authorization|verifier|challenge|code)(_|-|$)/i;
    function k(e2) {
      return e2.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${S}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${S}`);
    }
    function E(e2, t2 = 256) {
      return e2.length > t2 ? `${e2.slice(0, Math.max(0, t2 - 3))}...` : e2;
    }
    function T(e2, t2) {
      return E(k(e2), t2?.maxLength);
    }
    function C(e2) {
      if ("string" == typeof e2) return E(k(e2));
      if (void 0 !== e2) try {
        const t2 = JSON.stringify(e2, (e3, t3) => e3 && (function(e4) {
          const t4 = e4.toLowerCase();
          return "code" === t4 || "authorization" === t4 || t4.includes("token") || t4.includes("secret") || t4.includes("password") || t4.includes("assertion") || t4.includes("verifier") || t4.includes("challenge") || x.test(t4);
        })(e3) ? S : "string" == typeof t3 ? k(t3) : t3);
        if (!t2) return;
        return E(t2);
      } catch {
        return;
      }
    }
    function I(e2) {
      const t2 = b(e2), r2 = e2 instanceof Error ? e2.name : null != e2 ? typeof e2 : void 0, n2 = t2 instanceof Error ? t2.name : void 0, o2 = w(t2), s2 = w(e2) ?? o2, i2 = g(e2, ["code", "cause.code"]), l2 = y(e2) ?? y(t2) ?? g(e2, ["errorCode", "error", "cause.errorCode", "cause.error", "body.error", "response.body.error"]), c2 = (function(e3, t3) {
        for (const r3 of t3) {
          const t4 = f(e3, r3.split("."));
          if ("number" == typeof t4 && Number.isFinite(t4)) return t4;
        }
      })(e2, ["status", "statusCode", "response.status", "response.statusCode", "cause.status", "cause.statusCode", "cause.response.status", "cause.response.statusCode"]) ?? v(s2) ?? v(o2), u2 = C(f(e2, ["response", "body"]) ?? f(e2, ["body"]) ?? f(e2, ["data"]) ?? f(e2, ["cause", "body"]) ?? f(e2, ["cause", "response", "body"])), d2 = (function(e3) {
        const t3 = e3.message?.toLowerCase(), r3 = e3.code?.toLowerCase();
        return t3?.includes("timed out") || t3?.includes("timeout") || t3?.includes("etimedout") || "etimedout" === r3 ? "timeout" : t3?.includes("enotfound") || t3?.includes("eai_again") || t3?.includes("dns") || "enotfound" === r3 || "eai_again" === r3 ? "dns" : t3?.includes("certificate") || t3?.includes("tls") || t3?.includes("ssl") ? "tls" : t3?.includes("econnreset") || t3?.includes("connection reset") || "econnreset" === r3 ? "connection_reset" : t3?.includes("econnrefused") || t3?.includes("connection refused") || "econnrefused" === r3 ? "connection_refused" : void 0;
      })({ message: s2, code: i2 }), p2 = l2 ? "oauth_error" : d2 ? "auth_transport_error" : s2 ? "generic_error" : void 0;
      return a({ errorName: r2, errorMessage: s2, errorType: null != e2 ? typeof e2 : void 0, httpStatus: c2, oauthErrorCode: l2, errorResponseSummary: u2, networkClassification: d2, causeName: n2, causeMessage: o2, causeChain: _(e2), sdkErrorKind: p2 });
    }
    const A = { mcp_oauth_provider_initialized: "MCP OAuth provider initialized", mcp_oauth_tokens_loaded: "MCP OAuth tokens loaded", mcp_oauth_tokens_saved: "MCP OAuth tokens saved", mcp_oauth_callback_completion: "MCP OAuth callback exchange completed", mcp_oauth_client_info_loaded: "MCP OAuth client information loaded", mcp_oauth_client_info_saved: "MCP OAuth client information saved", mcp_oauth_refresh_prepare: "MCP OAuth refresh prepared", mcp_oauth_refresh_error_release: "MCP OAuth refresh error released", mcp_oauth_state_transition: "MCP OAuth state transition", mcp_oauth_credentials_invalidated: "MCP OAuth credentials invalidated" };
    function P(e2) {
      const t2 = e2.message ?? A[e2.event], r2 = { event: e2.event, cursorMcp: { oauth: a({ ...e2.metadata }) } }, n2 = e2.level ?? "info";
      "error" !== n2 ? "warn" !== n2 ? "debug" !== n2 ? e2.logger.info?.(t2, r2) : e2.logger.debug?.(t2, r2) : e2.logger.warn?.(t2, r2) : e2.logger.error?.(t2, e2.error, r2);
    }
    const M = 4096;
    function R(e2) {
      return "object" == typeof e2 && null !== e2 && "url" in e2 && "string" == typeof e2.url;
    }
    function O(e2) {
      return "string" == typeof e2 ? e2 : e2 instanceof URL ? e2.toString() : e2.url;
    }
    function D(e2) {
      const t2 = [];
      return e2.forEach((e3, r2) => {
        t2.push(r2);
      }), t2.sort();
    }
    function N(e2) {
      if (null === e2) return null;
      const t2 = Number.parseInt(e2, 10);
      return Number.isNaN(t2) ? null : t2;
    }
    function F(e2, t2) {
      if (null == e2) return { kind: "none", bytes: 0, contentLength: N(t2.get("content-length")) };
      if ("string" == typeof e2) {
        const r2 = new TextEncoder().encode(e2).length;
        return { kind: "text", bytes: r2, contentLength: N(t2.get("content-length")) ?? r2 };
      }
      if (e2 instanceof URLSearchParams) {
        const r2 = e2.toString(), n2 = new TextEncoder().encode(r2).length;
        return { kind: "text", bytes: n2, contentLength: N(t2.get("content-length")) ?? n2 };
      }
      return e2 instanceof Blob ? { kind: "blob", bytes: e2.size, contentLength: N(t2.get("content-length")) ?? e2.size } : e2 instanceof ArrayBuffer || ArrayBuffer.isView(e2) ? { kind: "binary", bytes: e2.byteLength, contentLength: N(t2.get("content-length")) ?? e2.byteLength } : "object" == typeof e2 && null !== e2 && ("getReader" in e2 || Symbol.asyncIterator in e2) ? { kind: "stream", bytes: null, contentLength: N(t2.get("content-length")) } : { kind: "unknown", bytes: null, contentLength: N(t2.get("content-length")) };
    }
    function L(e2, t2) {
      if (null === e2 || !e2.toLowerCase().startsWith("application/x-www-form-urlencoded")) return;
      const r2 = "string" == typeof t2 ? (function(e3, t3) {
        for (const r3 of e3.split("&")) {
          const e4 = r3.indexOf("="), n2 = e4 >= 0 ? r3.slice(0, e4) : r3;
          let o2;
          try {
            o2 = decodeURIComponent(n2.replaceAll("+", " "));
          } catch {
            return;
          }
          if (o2 !== t3) continue;
          const s2 = e4 >= 0 ? r3.slice(e4 + 1) : "";
          try {
            return decodeURIComponent(s2.replaceAll("+", " "));
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
    function U(e2) {
      const { input: t2, init: r2 } = e2, n2 = l(O(t2)), o2 = (function(e3, t3) {
        const r3 = new Headers(R(e3) ? e3.headers : void 0);
        return new Headers(t3?.headers).forEach((e4, t4) => {
          r3.set(t4, e4);
        }), r3;
      })(t2, r2), s2 = D(o2), i2 = o2.get("content-type"), a2 = p(o2.get("mcp-session-id") ?? void 0), c2 = o2.get("authorization"), u2 = c2 ? c2.split(/\s+/, 1)[0] ?? null : null;
      return { method: (r2?.method ?? (R(t2) ? t2.method : void 0) ?? "GET").toUpperCase(), url: n2, headers: { names: s2, count: s2.length }, contentType: i2, body: F(r2?.body, o2), sessionIdHash: a2 ?? null, authorizationScheme: u2 };
    }
    function B(e2, t2) {
      const r2 = D(e2.headers), n2 = N(e2.headers.get("content-length"));
      return { status: e2.status, ok: e2.ok, headers: { names: r2, count: r2.length }, contentType: e2.headers.get("content-type"), body: { kind: null === e2.body ? "none" : "stream", bytes: null === e2.body ? 0 : n2, contentLength: n2, ...void 0 !== t2 ? { errorSummary: t2 } : {} }, sessionIdHash: p(e2.headers.get("mcp-session-id") ?? void 0) ?? null, wwwAuthenticateHash: p(e2.headers.get("www-authenticate") ?? void 0) ?? null, mcpProtocolVersion: e2.headers.get("mcp-protocol-version") ?? null, requestId: e2.headers.get("x-request-id") ?? null };
    }
    function $(e2) {
      const t2 = {};
      return void 0 !== e2.errorName && (t2.name = e2.errorName), void 0 !== e2.errorMessage && (t2.message = e2.errorMessage), void 0 !== e2.errorType && (t2.type = e2.errorType), void 0 !== e2.oauthErrorCode && (t2.oauthErrorCode = e2.oauthErrorCode), void 0 !== e2.errorResponseSummary && (t2.responseSummary = e2.errorResponseSummary), void 0 !== e2.networkClassification && (t2.networkClassification = e2.networkClassification), void 0 !== e2.sdkErrorKind && (t2.sdkErrorKind = e2.sdkErrorKind), t2;
    }
    function q(e2, t2) {
      const r2 = U({ input: e2, init: t2 });
      if (void 0 !== L(r2.contentType, t2?.body)) return true;
      const n2 = r2.url.path?.toLowerCase() ?? "";
      return n2.endsWith("/token") || n2.includes("/oauth/token") || n2.includes("/connect/token");
    }
    async function j(e2, t2) {
      try {
        const r2 = await e2.clone().text();
        return r2.length > t2 ? r2.slice(0, t2) : r2;
      } catch {
        return;
      }
    }
    function J(e2) {
      if (!(function(e3) {
        return "/mcp" === e3 || true === e3?.endsWith("/mcp");
      })(l(O(e2.input)).path)) return T(e2.rawText, { maxLength: M });
      try {
        const t2 = JSON.parse(e2.rawText);
        return "object" == typeof t2 && null !== t2 ? (function(e3) {
          const t3 = e3.error;
          if ("string" == typeof t3) return JSON.stringify({ error: t3 });
          if ("object" != typeof t3 || null === t3) return;
          const r2 = t3, n2 = "number" == typeof r2.code || "string" == typeof r2.code ? r2.code : void 0, o2 = "string" == typeof r2.message ? T(r2.message, { maxLength: M }) : void 0;
          if (void 0 === n2 && void 0 === o2) return;
          return JSON.stringify({ ...void 0 !== n2 ? { code: n2 } : {}, ...void 0 !== o2 ? { message: o2 } : {} });
        })(t2) : void 0;
      } catch {
        return;
      }
    }
    async function z(e2) {
      if (!q(e2.input, e2.init)) return;
      const t2 = await j(e2.response, M);
      if (void 0 !== t2) try {
        return C(JSON.parse(t2));
      } catch {
        return T(t2, { maxLength: M });
      }
    }
    async function H(e2) {
      const t2 = await (async function(e3, t3) {
        try {
          if (t3.ok) return;
          const r2 = t3.headers.get("content-type")?.toLowerCase() ?? "";
          if (!r2.includes("json") && !r2.includes("text")) return;
          const n2 = await j(t3, M);
          if (void 0 === n2) return;
          return J({ input: e3, rawText: n2 });
        } catch {
          return;
        }
      })(e2.input, e2.response);
      return { responseErrorSummary: t2, oauthTokenErrorBodySummary: void 0 === t2 ? await z({ input: e2.input, response: e2.response, init: e2.init }) : void 0 };
    }
    function W(e2) {
      const { logger: t2, response: r2 } = e2, n2 = (function(e3) {
        const { input: t3, init: r3, response: n3, durationMs: o2, metadata: s2, responseErrorSummary: i2, oauthTokenErrorBodySummary: a2 } = e3, l2 = U({ input: t3, init: r3 }), c2 = L(l2.contentType, r3?.body);
        return { event: "mcp_http_exchange", outcome: n3.ok ? "success" : "http_error", durationMs: o2, cursorMcp: { transport: { ...s2, request: l2, response: B(n3, i2), ...void 0 !== c2 ? { oauth: { grantType: c2 } } : {}, ...void 0 !== a2 ? { oauthTokenErrorBodySummary: a2 } : {} } } };
      })(e2);
      r2.ok ? t2.info?.("MCP HTTP exchange completed", n2) : !(function(e3) {
        return 401 === e3.response.status && null === e3.request.authorizationScheme && e3.response.headers.has("www-authenticate") && !q(e3.input, e3.init);
      })({ response: r2, request: n2.cursorMcp.transport.request, input: e2.input, init: e2.init }) ? t2.warn?.("MCP HTTP exchange completed", n2) : t2.debug?.("MCP HTTP exchange completed", n2);
    }
    function G(e2) {
      const { logger: t2 } = e2;
      t2.warn?.("MCP HTTP exchange failed", (function(e3) {
        const { input: t3, init: r2, error: n2, durationMs: o2, metadata: s2, responseFromError: i2, responseErrorSummary: a2, oauthTokenErrorBodySummary: l2 } = e3, c2 = I(n2), u2 = U({ input: t3, init: r2 }), d2 = L(u2.contentType, r2?.body);
        return { event: "mcp_http_exchange", outcome: "error", durationMs: o2, cursorMcp: { transport: { ...s2, request: u2, response: void 0 !== i2 ? B(i2, a2) : { status: c2.httpStatus ?? null, ok: null, headers: { names: [], count: 0 }, contentType: null, body: { kind: "none", bytes: null, contentLength: null, ...void 0 !== a2 ? { errorSummary: a2 } : {} }, requestId: null, sessionIdHash: null, wwwAuthenticateHash: null, mcpProtocolVersion: null }, ...void 0 !== d2 ? { oauth: { grantType: d2 } } : {}, ...void 0 !== l2 ? { oauthTokenErrorBodySummary: l2 } : {}, error: $(c2) } } };
      })(e2));
    }
    function Y(e2, t2, r2) {
      try {
        e2();
      } catch {
        t2.warn?.("MCP HTTP exchange logging failed", { event: "mcp_http_exchange_logging_failure", phase: r2 });
      }
    }
    function V(e2) {
      const { fetch: t2, logger: r2, metadata: n2, logSuccessfulExchanges: o2 = true } = e2;
      return async (e3, s2) => {
        const i2 = Date.now();
        try {
          const a2 = await t2(e3, s2), { responseErrorSummary: l2, oauthTokenErrorBodySummary: c2 } = a2.ok ? {} : await H({ input: e3, init: s2, response: a2 });
          return !o2 && a2.ok || Y(() => {
            W({ logger: r2, input: e3, init: s2, response: a2, durationMs: Date.now() - i2, metadata: n2, responseErrorSummary: l2, oauthTokenErrorBodySummary: c2 });
          }, r2, "success"), a2;
        } catch (t3) {
          const o3 = (function(e4) {
            if (!e4 || "object" != typeof e4) return;
            const t4 = [e4.response, e4.cause?.response];
            for (const e5 of t4) if (e5 && "object" == typeof e5 && "status" in e5 && "number" == typeof e5.status && "headers" in e5 && "function" == typeof e5.headers?.get) return e5;
          })(t3), { responseErrorSummary: a2, oauthTokenErrorBodySummary: l2 } = o3 ? await H({ input: e3, init: s2, response: o3 }) : {};
          throw Y(() => {
            G({ logger: r2, input: e3, init: s2, error: t3, durationMs: Date.now() - i2, metadata: n2, responseFromError: o3, responseErrorSummary: a2, oauthTokenErrorBodySummary: l2 });
          }, r2, "failure"), t3;
        }
      };
    }
    /* @__PURE__ */ new Set(["access_not_configured", "admin_policy_enforced", "policy_enforced"]), /* @__PURE__ */ new Set(["invalid_grant", "interaction_required", "unauthorized_client"]), /* @__PURE__ */ new Set(["50105", "53000", "53001", "53002", "53003", "53004", "530032", "90094", "7000112"]), /* @__PURE__ */ new Set(["InvalidGrantError", "InvalidRequestError"]);
    const K = ["0.0.0.0/0", "::/0"];
    function Z(e2) {
      const t2 = (e2 ?? []).filter((e3) => e3.trim().length > 0), r2 = t2.flatMap((e3) => {
        const t3 = (0, n.bi)(e3);
        return void 0 === t3 ? [] : [t3];
      });
      return { hasConfiguredEntries: t2.length > 0, hasInvalidEntries: r2.length !== t2.length, entries: r2 };
    }
    function X(e2) {
      const t2 = Z(e2.mcpNetworkAllowlist), r2 = Z(e2.mcpNetworkDenylist), n2 = e2.mcpNetworkMode;
      if ("deny_all" === n2 || r2.entries.includes("*") || r2.hasInvalidEntries) return { version: 1, default: "deny" };
      if ("allow_all" === n2) return { version: 1, default: "deny", allow: [...K], ...r2.entries.length > 0 ? { deny: r2.entries } : {} };
      if ("allowlist" === n2 || t2.hasConfiguredEntries) {
        const e3 = (function(e4) {
          return e4.entries.includes("*") ? [...K] : e4.entries;
        })(t2);
        return e3.length > 0 ? { version: 1, default: "deny", allow: e3, ...r2.entries.length > 0 ? { deny: r2.entries } : {} } : { version: 1, default: "deny" };
      }
      return { version: 1, default: "deny", allow: [...K], ...r2.entries.length > 0 ? { deny: r2.entries } : {} };
    }
    async function Q(e2, t2) {
      const { resolveSandboxPolicyForWorkspace: n2 } = await Promise.resolve().then(r.bind(r, 25925)), o2 = { type: "workspace_readwrite", sandboxWorkspaceRoot: t2, networkPolicy: X(e2), networkPolicyStrict: true }, { policy: s2 } = await n2(t2, { perUser: o2 });
      return s2;
    }
    const ee = ["0.0.0.0/0", "::/0"];
    function te(e2) {
      const t2 = (e2 ?? []).filter((e3) => e3.trim().length > 0), r2 = t2.flatMap((e3) => {
        const t3 = (0, n.bi)(e3);
        return void 0 === t3 ? [] : [t3];
      });
      return { hasInvalidEntries: r2.length !== t2.length, entries: r2 };
    }
    function re(e2) {
      const t2 = true === e2.enabled, r2 = te(e2.mcpNetworkDenylist), o2 = "deny_all" === e2.mcpNetworkMode || r2.entries.includes("*") || r2.hasInvalidEntries, s2 = t2 ? (function(e3) {
        if ("allow_all" === e3.mcpNetworkMode) return [...ee];
        const t3 = te(e3.mcpNetworkAllowlist);
        if ("allowlist" === e3.mcpNetworkMode) return t3.entries.includes("*") ? [...ee] : t3.entries;
        if (!(function(e4) {
          return (e4.mcpNetworkAllowlist ?? []).some((e5) => e5.trim().length > 0);
        })(e3)) return [...ee];
        const r3 = (0, n.b6)(e3);
        return r3.includes("*") ? [...ee] : r3;
      })(e2) : [], i2 = t2 ? o2 ? ["*"] : r2.entries : [];
      return JSON.stringify({ enabled: t2, mode: e2.mcpNetworkMode, allow: o2 ? [] : s2, deny: i2 });
    }
    class ne extends Error {
      constructor(e2, t2) {
        super(`MCP server "${e2}" requires sandboxing because MCP Network Controls are enabled, but the sandbox is not supported on this platform or system. The server was not started.`), this.serverName = e2, this.name = "McpSandboxUnavailableError", void 0 !== t2 && (this.cause = t2);
      }
    }
    /* @__PURE__ */ new Map();
    /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(["connection_attempt"]), /* @__PURE__ */ new Set(["health_probe"]);
    r(48891), r(25977);
    Error;
    Error;
    const oe = /* @__PURE__ */ new Set(["UnauthorizedError", "InvalidGrantError", "InvalidTokenError", "InvalidClientError", "UnauthorizedClientError"]), se = /* @__PURE__ */ new Set(["invalid_grant", "invalid_token", "invalid_client", "unauthorized_client"]), ie = [/\btoken (?:has |is )?expired\b/i, /\btoken (?:was|is) invalid\b/i, /\binvalid (?:refresh[ _]?)?token\b/i, /\btoken (?:has been |was )?revoked\b/i];
    function ae(e2) {
      if (null === e2 || "object" != typeof e2) return false;
      const t2 = e2.name;
      if ("string" == typeof t2 && oe.has(t2)) return true;
      const r2 = e2.errorCode;
      return !("string" != typeof r2 || !se.has(r2.toLowerCase())) || (function(e3) {
        if (null === e3 || "object" != typeof e3) return false;
        const t3 = e3.name, r3 = e3.errorCode;
        if ("InvalidRequestError" !== t3 && ("string" != typeof r3 || "invalid_request" !== r3.toLowerCase())) return false;
        const n2 = e3.message;
        return "string" == typeof n2 && ie.some((e4) => e4.test(n2));
      })(e2);
    }
    /* @__PURE__ */ new Set(["EAI_AGAIN", "ECONNABORTED", "ECONNREFUSED", "ECONNRESET", "EHOSTUNREACH", "ENETDOWN", "ENETUNREACH", "ENOTFOUND", "EPIPE", "ETIMEDOUT", "EADDRNOTAVAIL", "UND_ERR_CONNECT_TIMEOUT"]), /* @__PURE__ */ new Set(["ECONNRESET", "EPIPE"]), /* @__PURE__ */ new Set([429, 502, 503, 504]);
    const le = 8192;
    /* @__PURE__ */ new Set(["ENOENT", "EACCES", "ENOTDIR", "EPERM"]);
    function ce(e2, t2) {
      void 0 !== t2 && t2.length > 0 && e2.searchParams.set("scope", t2.join(" "));
    }
    /* @__PURE__ */ new Set(["invalid_refresh_token", "token_revoked", "token_expired"]);
    const ue = /\$\{[^}]*\}/;
    function de(e2) {
      if (void 0 === e2) return;
      const t2 = e2.trim();
      return 0 !== t2.length && ue.test(t2) ? t2 : void 0;
    }
    function pe(e2) {
      if (void 0 !== de(e2)) return;
      const t2 = e2?.trim();
      return t2 && t2.length > 0 ? t2 : void 0;
    }
    var he = r(61771);
    const me = 3e5, fe = /* @__PURE__ */ new Map();
    async function ge(e2, t2 = fetch) {
      if (void 0 === (0, he.sr)(e2)) return;
      const r2 = new URL(e2), n2 = `${r2.origin}/.well-known/oauth-protected-resource${r2.pathname.replace(/\/+$/, "")}`, o2 = fe.get(n2);
      if (void 0 !== o2 && o2.expiresAtMs > Date.now()) return o2.metadata;
      let s2;
      try {
        const e3 = await t2(n2);
        if (!e3.ok) return;
        s2 = (0, he.vI)(await e3.json());
      } catch {
        return;
      }
      return fe.set(n2, { metadata: s2, expiresAtMs: Date.now() + me }), s2;
    }
    Error;
    function ye(e2, t2) {
      if (void 0 === t2) return { headers: t2, cursorAuthHeaderValue: void 0, cursorAuthOrigin: void 0 };
      const r2 = Object.entries(t2), n2 = r2.find(([e3]) => e3.toLowerCase() === he.Qy);
      if (void 0 === n2) return { headers: t2, cursorAuthHeaderValue: void 0, cursorAuthOrigin: void 0 };
      let o2;
      try {
        o2 = new URL(e2).origin;
      } catch {
        o2 = void 0;
      }
      return { headers: Object.fromEntries(r2.filter(([e3]) => e3.toLowerCase() !== he.Qy)), cursorAuthHeaderValue: n2[1], cursorAuthOrigin: o2 };
    }
    function ve(e2, t2, r2) {
      return async (n2, o2) => {
        let s2;
        try {
          s2 = new URL("string" == typeof n2 ? n2 : n2.toString()).origin;
        } catch {
          return r2(n2, o2);
        }
        if (s2 !== t2) return r2(n2, o2);
        const i2 = await e2();
        if (void 0 === i2 || 0 === i2.length) return r2(n2, o2);
        const a2 = new Headers(o2?.headers);
        return a2.set(he.Qy, i2), r2(n2, { ...o2, headers: a2, redirect: "manual" });
      };
    }
    function we(e2) {
      const t2 = (function(e3) {
        if (!e3 || "object" != typeof e3) return;
        const t3 = e3.code;
        if ("number" == typeof t3 && t3 >= 100 && t3 <= 599) return t3;
        if ("string" == typeof t3 && /^\d{3}$/.test(t3) && Number(t3) >= 100 && Number(t3) <= 599) return Number(t3);
        const r2 = e3 instanceof Error || "string" == typeof e3.message ? e3.message : void 0;
        if (!r2) return;
        const n2 = r2.match(/\bHTTP\s+(\d{3})\b/i);
        if (!n2?.[1]) return;
        const o2 = Number.parseInt(n2[1], 10);
        return Number.isNaN(o2) ? void 0 : o2;
      })(e2);
      return void 0 !== t2 ? 400 === t2 || 404 === t2 || 405 === t2 : !!(e2 instanceof Error && e2.message.toLowerCase().includes("sessionid must be provided")) || (function(e3) {
        if (!(e3 instanceof Error)) return false;
        const t3 = e3, r2 = e3.cause?.code;
        return "ECONNREFUSED" === t3.code || "ECONNREFUSED" === r2 || e3.message.includes("ECONNREFUSED");
      })(e2);
    }
  }