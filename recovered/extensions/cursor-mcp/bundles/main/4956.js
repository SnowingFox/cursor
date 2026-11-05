// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4956 range:325064..335517
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4956: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { jI: () => S });
    var n2 = r2(4792), o2 = r2(2557);
    const s2 = 4096;
    function i2(e3) {
      return "object" == typeof e3 && null !== e3 && "url" in e3 && "string" == typeof e3.url;
    }
    function a2(e3) {
      return "string" == typeof e3 ? e3 : e3 instanceof URL ? e3.toString() : e3.url;
    }
    function c(e3) {
      const t3 = [];
      return e3.forEach((e4, r3) => {
        t3.push(r3);
      }), t3.sort();
    }
    function u(e3) {
      if (null === e3) return null;
      const t3 = Number.parseInt(e3, 10);
      return Number.isNaN(t3) ? null : t3;
    }
    function l(e3, t3) {
      if (null == e3) return { kind: "none", bytes: 0, contentLength: u(t3.get("content-length")) };
      if ("string" == typeof e3) {
        const r3 = new TextEncoder().encode(e3).length;
        return { kind: "text", bytes: r3, contentLength: u(t3.get("content-length")) ?? r3 };
      }
      if (e3 instanceof URLSearchParams) {
        const r3 = e3.toString(), n3 = new TextEncoder().encode(r3).length;
        return { kind: "text", bytes: n3, contentLength: u(t3.get("content-length")) ?? n3 };
      }
      return e3 instanceof Blob ? { kind: "blob", bytes: e3.size, contentLength: u(t3.get("content-length")) ?? e3.size } : e3 instanceof ArrayBuffer || ArrayBuffer.isView(e3) ? { kind: "binary", bytes: e3.byteLength, contentLength: u(t3.get("content-length")) ?? e3.byteLength } : "object" == typeof e3 && null !== e3 && ("getReader" in e3 || Symbol.asyncIterator in e3) ? { kind: "stream", bytes: null, contentLength: u(t3.get("content-length")) } : { kind: "unknown", bytes: null, contentLength: u(t3.get("content-length")) };
    }
    function d(e3, t3) {
      if (null === e3 || !e3.toLowerCase().startsWith("application/x-www-form-urlencoded")) return;
      const r3 = "string" == typeof t3 ? (function(e4, t4) {
        for (const r4 of e4.split("&")) {
          const e5 = r4.indexOf("="), n3 = e5 >= 0 ? r4.slice(0, e5) : r4;
          let o3;
          try {
            o3 = decodeURIComponent(n3.replaceAll("+", " "));
          } catch {
            return;
          }
          if (o3 !== t4) continue;
          const s3 = e5 >= 0 ? r4.slice(e5 + 1) : "";
          try {
            return decodeURIComponent(s3.replaceAll("+", " "));
          } catch {
            return;
          }
        }
      })(t3, "grant_type") : t3 instanceof URLSearchParams ? t3.get("grant_type") ?? void 0 : void 0;
      return r3 ? (function(e4) {
        switch (e4) {
          case "authorization_code":
          case "refresh_token":
          case "client_credentials":
          case "urn:ietf:params:oauth:grant-type:jwt-bearer":
          case "urn:ietf:params:oauth:grant-type:token-exchange":
            return e4;
          default:
            return "other";
        }
      })(r3) : void 0;
    }
    function p(e3) {
      const { input: t3, init: r3 } = e3, s3 = a2(t3), u2 = (0, n2.nT)(s3), d2 = (function(e4, t4) {
        const r4 = new Headers(i2(e4) ? e4.headers : void 0);
        return new Headers(t4?.headers).forEach((e5, t5) => {
          r4.set(t5, e5);
        }), r4;
      })(t3, r3), p2 = c(d2), f2 = d2.get("content-type"), h2 = (0, o2.wN)(d2.get("mcp-session-id") ?? void 0), m2 = d2.get("authorization"), g2 = m2 ? m2.split(/\s+/, 1)[0] ?? null : null;
      return { method: (r3?.method ?? (i2(t3) ? t3.method : void 0) ?? "GET").toUpperCase(), url: u2, headers: { names: p2, count: p2.length }, contentType: f2, body: l(r3?.body, d2), sessionIdHash: h2 ?? null, authorizationScheme: g2 };
    }
    function f(e3, t3) {
      const r3 = c(e3.headers), n3 = u(e3.headers.get("content-length"));
      return { status: e3.status, ok: e3.ok, headers: { names: r3, count: r3.length }, contentType: e3.headers.get("content-type"), body: { kind: null === e3.body ? "none" : "stream", bytes: null === e3.body ? 0 : n3, contentLength: n3, ...void 0 !== t3 ? { errorSummary: t3 } : {} }, sessionIdHash: (0, o2.wN)(e3.headers.get("mcp-session-id") ?? void 0) ?? null, wwwAuthenticateHash: (0, o2.wN)(e3.headers.get("www-authenticate") ?? void 0) ?? null, mcpProtocolVersion: e3.headers.get("mcp-protocol-version") ?? null, requestId: e3.headers.get("x-request-id") ?? null };
    }
    function h(e3) {
      const t3 = {};
      return void 0 !== e3.errorName && (t3.name = e3.errorName), void 0 !== e3.errorMessage && (t3.message = e3.errorMessage), void 0 !== e3.errorType && (t3.type = e3.errorType), void 0 !== e3.oauthErrorCode && (t3.oauthErrorCode = e3.oauthErrorCode), void 0 !== e3.errorResponseSummary && (t3.responseSummary = e3.errorResponseSummary), void 0 !== e3.networkClassification && (t3.networkClassification = e3.networkClassification), void 0 !== e3.sdkErrorKind && (t3.sdkErrorKind = e3.sdkErrorKind), t3;
    }
    function m(e3, t3) {
      const r3 = p({ input: e3, init: t3 });
      if (void 0 !== d(r3.contentType, t3?.body)) return true;
      const n3 = r3.url.path?.toLowerCase() ?? "";
      return n3.endsWith("/token") || n3.includes("/oauth/token") || n3.includes("/connect/token");
    }
    async function g(e3, t3) {
      try {
        const r3 = await e3.clone().text();
        return r3.length > t3 ? r3.slice(0, t3) : r3;
      } catch {
        return;
      }
    }
    function y(e3) {
      if (!(function(e4) {
        return "/mcp" === e4 || true === e4?.endsWith("/mcp");
      })((0, n2.nT)(a2(e3.input)).path)) return (0, o2.e)(e3.rawText, { maxLength: s2 });
      try {
        const t3 = JSON.parse(e3.rawText);
        return "object" == typeof t3 && null !== t3 ? (function(e4) {
          const t4 = e4.error;
          if ("string" == typeof t4) return JSON.stringify({ error: t4 });
          if ("object" != typeof t4 || null === t4) return;
          const r3 = t4, n3 = "number" == typeof r3.code || "string" == typeof r3.code ? r3.code : void 0, i3 = "string" == typeof r3.message ? (0, o2.e)(r3.message, { maxLength: s2 }) : void 0;
          if (void 0 === n3 && void 0 === i3) return;
          return JSON.stringify({ ...void 0 !== n3 ? { code: n3 } : {}, ...void 0 !== i3 ? { message: i3 } : {} });
        })(t3) : void 0;
      } catch {
        return;
      }
    }
    async function _(e3) {
      const t3 = await (async function(e4, t4) {
        try {
          if (t4.ok) return;
          const r4 = t4.headers.get("content-type")?.toLowerCase() ?? "";
          if (!r4.includes("json") && !r4.includes("text")) return;
          const n3 = await g(t4, s2);
          if (void 0 === n3) return;
          return y({ input: e4, rawText: n3 });
        } catch {
          return;
        }
      })(e3.input, e3.response), r3 = void 0 === t3 ? await (async function(e4) {
        if (!m(e4.input, e4.init)) return;
        const t4 = await g(e4.response, s2);
        if (void 0 !== t4) try {
          return (0, o2.dE)(JSON.parse(t4));
        } catch {
          return (0, o2.e)(t4, { maxLength: s2 });
        }
      })({ input: e3.input, response: e3.response, init: e3.init }) : void 0;
      return { responseErrorSummary: t3, oauthTokenErrorBodySummary: r3 };
    }
    function v(e3) {
      const { logger: t3, response: r3 } = e3, n3 = (function(e4) {
        const { input: t4, init: r4, response: n4, durationMs: o3, metadata: s3, responseErrorSummary: i3, oauthTokenErrorBodySummary: a3 } = e4, c2 = p({ input: t4, init: r4 }), u2 = d(c2.contentType, r4?.body);
        return { event: "mcp_http_exchange", outcome: n4.ok ? "success" : "http_error", durationMs: o3, cursorMcp: { transport: { ...s3, request: c2, response: f(n4, i3), ...void 0 !== u2 ? { oauth: { grantType: u2 } } : {}, ...void 0 !== a3 ? { oauthTokenErrorBodySummary: a3 } : {} } } };
      })(e3);
      r3.ok ? t3.info?.("MCP HTTP exchange completed", n3) : !(function(e4) {
        return 401 === e4.response.status && null === e4.request.authorizationScheme && e4.response.headers.has("www-authenticate") && !m(e4.input, e4.init);
      })({ response: r3, request: n3.cursorMcp.transport.request, input: e3.input, init: e3.init }) ? t3.warn?.("MCP HTTP exchange completed", n3) : t3.debug?.("MCP HTTP exchange completed", n3);
    }
    function w(e3) {
      const { logger: t3 } = e3;
      t3.warn?.("MCP HTTP exchange failed", (function(e4) {
        const { input: t4, init: r3, error: n3, durationMs: s3, metadata: i3, responseFromError: a3, responseErrorSummary: c2, oauthTokenErrorBodySummary: u2 } = e4, l2 = (0, o2.X5)(n3), m2 = p({ input: t4, init: r3 }), g2 = d(m2.contentType, r3?.body);
        return { event: "mcp_http_exchange", outcome: "error", durationMs: s3, cursorMcp: { transport: { ...i3, request: m2, response: void 0 !== a3 ? f(a3, c2) : { status: l2.httpStatus ?? null, ok: null, headers: { names: [], count: 0 }, contentType: null, body: { kind: "none", bytes: null, contentLength: null, ...void 0 !== c2 ? { errorSummary: c2 } : {} }, requestId: null, sessionIdHash: null, wwwAuthenticateHash: null, mcpProtocolVersion: null }, ...void 0 !== g2 ? { oauth: { grantType: g2 } } : {}, ...void 0 !== u2 ? { oauthTokenErrorBodySummary: u2 } : {}, error: h(l2) } } };
      })(e3));
    }
    function b(e3, t3, r3) {
      try {
        e3();
      } catch {
        t3.warn?.("MCP HTTP exchange logging failed", { event: "mcp_http_exchange_logging_failure", phase: r3 });
      }
    }
    function S(e3) {
      const { fetch: t3, logger: r3, metadata: n3, logSuccessfulExchanges: s3 = true } = e3;
      return async (e4, i3) => {
        const a3 = Date.now();
        try {
          const o3 = await t3(e4, i3), { responseErrorSummary: c2, oauthTokenErrorBodySummary: u2 } = o3.ok ? {} : await _({ input: e4, init: i3, response: o3 });
          return !s3 && o3.ok || b(() => {
            v({ logger: r3, input: e4, init: i3, response: o3, durationMs: Date.now() - a3, metadata: n3, responseErrorSummary: c2, oauthTokenErrorBodySummary: u2 });
          }, r3, "success"), o3;
        } catch (t4) {
          const s4 = (0, o2.xn)(t4), { responseErrorSummary: c2, oauthTokenErrorBodySummary: u2 } = s4 ? await _({ input: e4, init: i3, response: s4 }) : {};
          throw b(() => {
            w({ logger: r3, input: e4, init: i3, error: t4, durationMs: Date.now() - a3, metadata: n3, responseFromError: s4, responseErrorSummary: c2, oauthTokenErrorBodySummary: u2 });
          }, r3, "failure"), t4;
        }
      };
    }
  }