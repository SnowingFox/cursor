// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1195 range:147367..151632
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1195: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { AR: () => _, Hr: () => p, QB: () => v, R0: () => o2, RI: () => d, a6: () => u, qL: () => i2, uO: () => f });
    var n2 = r2(3168);
    const o2 = /* @__PURE__ */ new Set(["EAI_AGAIN", "ECONNABORTED", "ECONNREFUSED", "ECONNRESET", "EHOSTUNREACH", "ENETDOWN", "ENETUNREACH", "ENOTFOUND", "EPIPE", "ETIMEDOUT", "EADDRNOTAVAIL", "UND_ERR_CONNECT_TIMEOUT"]), s2 = /net::ERR_(?:CERT_[A-Z_]+|SSL_[A-Z_]+|BAD_SSL_[A-Z_]+|BLOCKED_BY_[A-Z_]+|DISALLOWED_URL_SCHEME|UNKNOWN_URL_SCHEME|INVALID_[A-Z_]+|ACCESS_DENIED|NETWORK_ACCESS_DENIED|PROXY_AUTH_[A-Z_]+|INSUFFICIENT_RESOURCES|OUT_OF_MEMORY)\b/, i2 = [/fetch failed/i, /network error/i, /socket hang up/i, /client network socket disconnected/i, /connection (?:timed out|timeout|closed|terminated)/i, /request timed out/i, /net::ERR_(?:NETWORK_CHANGED|NETWORK_IO_SUSPENDED|INTERNET_DISCONNECTED|CONNECTION_(?:RESET|CLOSED|ABORTED|FAILED|REFUSED|TIMED_OUT)|TIMED_OUT|ABORTED|NAME_NOT_RESOLVED|NAME_RESOLUTION_FAILED|DNS_TIMED_OUT|SOCKET_NOT_CONNECTED|ADDRESS_UNREACHABLE|TUNNEL_CONNECTION_FAILED|EMPTY_RESPONSE|HTTP2_(?:PROTOCOL_ERROR|PING_FAILED)|QUIC_PROTOCOL_ERROR)\b/], a2 = /* @__PURE__ */ new Set(["ECONNRESET", "EPIPE"]), c = [/socket hang up/i, /client network socket disconnected/i, /connection (?:closed|terminated)/i, /ERR_STREAM_PREMATURE_CLOSE/i, /premature close/i, /net::ERR_(?:NETWORK_CHANGED|NETWORK_IO_SUSPENDED|CONNECTION_(?:RESET|CLOSED|ABORTED)|HTTP2_(?:PROTOCOL_ERROR|PING_FAILED)|QUIC_PROTOCOL_ERROR|EMPTY_RESPONSE)\b/], u = /* @__PURE__ */ new Set([429, 502, 503, 504]);
    function l(e3) {
      const t3 = e3.code, r3 = (e3 instanceof Error || "string" == typeof e3.message ? e3.message : "").match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), n3 = r3?.[1] ?? r3?.[2] ?? r3?.[3], o3 = void 0 !== n3 ? parseInt(n3, 10) : void 0;
      if ("number" == typeof t3 && t3 >= 100) return void 0 !== o3 && u.has(o3) && !u.has(t3) ? o3 : t3;
      if ("string" == typeof t3 && /^\d{3}$/.test(t3)) {
        const e4 = Number.parseInt(t3, 10);
        return e4 >= 100 && e4 <= 599 ? e4 : o3;
      }
      return o3;
    }
    function d(e3) {
      if (!e3 || "object" != typeof e3) return;
      const t3 = l(e3);
      if (void 0 !== t3) return t3;
      const r3 = e3.cause;
      return r3 && "object" == typeof r3 ? l(r3) : void 0;
    }
    function p(e3) {
      const t3 = e3.message ?? "", r3 = d(e3);
      if ((function(e4) {
        return /Failed to open SSE stream:?\s*$/i.test(e4.trim());
      })(t3)) return void 0 !== r3 && u.has(r3);
      if (s2.test(t3)) return false;
      const n3 = e3.code ?? e3.cause?.code;
      return !("string" != typeof n3 || !o2.has(n3)) || (!(void 0 === r3 || !u.has(r3)) || i2.some((e4) => e4.test(t3)));
    }
    const f = 8192, h = /* @__PURE__ */ new Set(["ENOENT", "EACCES", "ENOTDIR", "EPERM"]), m = [/cannot find module/i, /module not found/i, /syntaxerror/i, /command not found/i, /is not recognized as an internal or external command/i, /no such file or directory/i, /err_module_not_found/i];
    function g(e3) {
      return /MCP error -32000:\s*Connection closed/i.test(e3.message ?? "");
    }
    function y(e3, t3) {
      return [e3, ...t3].map((e4) => e4.toLowerCase()).some((e4) => e4.includes("mcp-remote"));
    }
    function _(e3, t3, r3, s3, a3) {
      if (e3 instanceof Error) {
        const t4 = e3.code ?? e3.cause?.code;
        if ("string" == typeof t4 && h.has(t4)) return false;
        if (y(s3, a3) && (0, n2.v)(e3.message ?? "")) return true;
        if (!g(e3) && p(e3)) return true;
      }
      const c2 = t3;
      if (c2.trim().length > 0) {
        if ((function(e4) {
          return m.some((t4) => t4.test(e4));
        })(c2)) return false;
        if ((function(e4) {
          for (const t4 of o2) if (e4.includes(t4)) return true;
          return i2.some((t4) => t4.test(e4));
        })(c2)) return true;
      }
      return !(e3 instanceof Error && g(e3) && 0 === c2.trim().length && !y(s3, a3)) && !r3;
    }
    function v(e3) {
      const t3 = e3.code ?? e3.cause?.code;
      if ("string" == typeof t3 && a2.has(t3)) return true;
      const r3 = e3.message ?? "";
      return c.some((e4) => e4.test(r3));
    }
  }