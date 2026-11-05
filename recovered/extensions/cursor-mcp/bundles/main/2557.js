// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2557 range:206231..212944
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2557: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { $y: () => s2.$y, O3: () => c, QD: () => o2.QD, VD: () => T, X5: () => E, dE: () => b, e: () => w, q2: () => o2.q2, qY: () => s2.qY, tB: () => s2.tB, wN: () => i2, xn: () => k });
    var n2 = r2(6982), o2 = r2(4792), s2 = r2(1970);
    function i2(e3) {
      if (e3) return (0, n2.createHash)("sha256").update(e3).digest("hex").slice(0, 12);
    }
    function a2(e3) {
      if (e3 && 0 !== e3.length) return i2(JSON.stringify([...e3].sort()));
    }
    function c(e3) {
      return { clientIdHash: i2(e3?.client_id), hasClientSecret: (e3?.client_secret ?? "").length > 0, redirectUrisHash: a2(e3?.redirect_uris), redirectUriCount: e3?.redirect_uris?.length ?? 0 };
    }
    function u(e3, t3) {
      let r3 = e3;
      for (const e4 of t3) {
        if ("object" != typeof r3 || null === r3 || !(e4 in r3)) return;
        r3 = r3[e4];
      }
      return r3;
    }
    function l(e3, t3) {
      for (const r3 of t3) if ("string" == typeof u(e3, r3.split("."))) return u(e3, r3.split("."));
    }
    function d(e3) {
      if (!e3 || "object" != typeof e3) return;
      const t3 = e3.errorCode;
      return "string" == typeof t3 ? t3 : void 0;
    }
    function p(e3) {
      if (!e3) return;
      const t3 = e3.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), r3 = t3?.[1] ?? t3?.[2] ?? t3?.[3];
      if (!r3) return;
      const n3 = Number.parseInt(r3, 10);
      return Number.isNaN(n3) ? void 0 : n3;
    }
    function f(e3) {
      if (e3 instanceof Error) {
        const t3 = e3.message;
        return t3 && t3 !== e3.name ? w(t3) : void 0;
      }
      if (null != e3) {
        const t3 = String(e3);
        return t3 ? w(t3) : void 0;
      }
    }
    function h(e3) {
      if (e3 && "object" == typeof e3) return e3.cause;
    }
    function m(e3, t3 = 4) {
      const r3 = [];
      let n3 = e3;
      for (let e4 = 0; e4 < t3 && null != n3; e4++) {
        if (n3 instanceof Error) {
          const e5 = f(n3);
          r3.push(e5 ? `${n3.name}: ${e5}` : n3.name), n3 = h(n3);
          continue;
        }
        r3.push(w(String(n3)));
        break;
      }
      return r3.length > 1 ? r3.join(" > ") : void 0;
    }
    const g = "[REDACTED]", y = /(^|_|-)(token|secret|password|assertion|authorization|verifier|challenge|code)(_|-|$)/i;
    function _(e3) {
      return e3.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${g}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${g}`);
    }
    function v(e3, t3 = 256) {
      return e3.length > t3 ? `${e3.slice(0, Math.max(0, t3 - 3))}...` : e3;
    }
    function w(e3, t3) {
      return v(_(e3), t3?.maxLength);
    }
    function b(e3) {
      return S(e3);
    }
    function S(e3) {
      if ("string" == typeof e3) return v(_(e3));
      if (void 0 !== e3) try {
        const t3 = JSON.stringify(e3, (e4, t4) => e4 && (function(e5) {
          const t5 = e5.toLowerCase();
          return "code" === t5 || "authorization" === t5 || t5.includes("token") || t5.includes("secret") || t5.includes("password") || t5.includes("assertion") || t5.includes("verifier") || t5.includes("challenge") || y.test(t5);
        })(e4) ? g : "string" == typeof t4 ? _(t4) : t4);
        if (!t3) return;
        return v(t3);
      } catch {
        return;
      }
    }
    function k(e3) {
      if (!e3 || "object" != typeof e3) return;
      const t3 = [e3.response, e3.cause?.response];
      for (const e4 of t3) if (e4 && "object" == typeof e4 && "status" in e4 && "number" == typeof e4.status && "headers" in e4 && "function" == typeof e4.headers?.get) return e4;
    }
    function E(e3) {
      const t3 = h(e3), r3 = e3 instanceof Error ? e3.name : null != e3 ? typeof e3 : void 0, n3 = t3 instanceof Error ? t3.name : void 0, s3 = f(t3), i3 = f(e3) ?? s3, a3 = l(e3, ["code", "cause.code"]), c2 = d(e3) ?? d(t3) ?? l(e3, ["errorCode", "error", "cause.errorCode", "cause.error", "body.error", "response.body.error"]), g2 = (function(e4, t4) {
        for (const r4 of t4) {
          const t5 = u(e4, r4.split("."));
          if ("number" == typeof t5 && Number.isFinite(t5)) return t5;
        }
      })(e3, ["status", "statusCode", "response.status", "response.statusCode", "cause.status", "cause.statusCode", "cause.response.status", "cause.response.statusCode"]) ?? p(i3) ?? p(s3), y2 = S(u(e3, ["response", "body"]) ?? u(e3, ["body"]) ?? u(e3, ["data"]) ?? u(e3, ["cause", "body"]) ?? u(e3, ["cause", "response", "body"])), _2 = (function(e4) {
        const t4 = e4.message?.toLowerCase(), r4 = e4.code?.toLowerCase();
        return t4?.includes("timed out") || t4?.includes("timeout") || t4?.includes("etimedout") || "etimedout" === r4 ? "timeout" : t4?.includes("enotfound") || t4?.includes("eai_again") || t4?.includes("dns") || "enotfound" === r4 || "eai_again" === r4 ? "dns" : t4?.includes("certificate") || t4?.includes("tls") || t4?.includes("ssl") ? "tls" : t4?.includes("econnreset") || t4?.includes("connection reset") || "econnreset" === r4 ? "connection_reset" : t4?.includes("econnrefused") || t4?.includes("connection refused") || "econnrefused" === r4 ? "connection_refused" : void 0;
      })({ message: i3, code: a3 }), v2 = c2 ? "oauth_error" : _2 ? "auth_transport_error" : i3 ? "generic_error" : void 0;
      return (0, o2.zd)({ errorName: r3, errorMessage: i3, errorType: null != e3 ? typeof e3 : void 0, httpStatus: g2, oauthErrorCode: c2, errorResponseSummary: y2, networkClassification: _2, causeName: n3, causeMessage: s3, causeChain: m(e3), sdkErrorKind: v2 });
    }
    const x = { mcp_oauth_provider_initialized: "MCP OAuth provider initialized", mcp_oauth_tokens_loaded: "MCP OAuth tokens loaded", mcp_oauth_tokens_saved: "MCP OAuth tokens saved", mcp_oauth_callback_completion: "MCP OAuth callback exchange completed", mcp_oauth_client_info_loaded: "MCP OAuth client information loaded", mcp_oauth_client_info_saved: "MCP OAuth client information saved", mcp_oauth_refresh_prepare: "MCP OAuth refresh prepared", mcp_oauth_refresh_error_release: "MCP OAuth refresh error released", mcp_oauth_state_transition: "MCP OAuth state transition", mcp_oauth_credentials_invalidated: "MCP OAuth credentials invalidated" };
    function T(e3) {
      const t3 = e3.message ?? x[e3.event], r3 = { event: e3.event, cursorMcp: { oauth: (0, o2.zd)({ ...e3.metadata }) } }, n3 = e3.level ?? "info";
      "error" !== n3 ? "warn" !== n3 ? "debug" !== n3 ? e3.logger.info?.(t3, r3) : e3.logger.debug?.(t3, r3) : e3.logger.warn?.(t3, r3) : e3.logger.error?.(t3, e3.error, r3);
    }
  }