// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1521 range:170857..172799
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1521: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { Gp: () => d, Nj: () => n2, RR: () => o2, S2: () => u, ZN: () => s2, k_: () => c, yV: () => i2, zG: () => a2 });
    class n2 extends Error {
      constructor(e3) {
        super(`OAuth refresh race detected for ${e3}: sibling already rotated tokens; reconnecting to use fresh credentials`), this.name = "SiblingAlreadyRefreshedError";
      }
    }
    class o2 extends Error {
      constructor(e3) {
        super(`OAuth loopback redirect ${e3} could not be bound; it is the only redirect registered for this desktop client`), this.name = "McpOAuthLoopbackUnavailableError";
      }
    }
    function s2(e3) {
      return e3 instanceof Error && "McpOAuthLoopbackUnavailableError" === e3.name;
    }
    const i2 = "OAuthRefreshTransientError";
    function a2(e3) {
      return e3 instanceof Error && e3.name === i2;
    }
    const c = /* @__PURE__ */ new Set(["UnauthorizedError", "InvalidGrantError", "InvalidTokenError", "InvalidClientError", "UnauthorizedClientError"]), u = /* @__PURE__ */ new Set(["invalid_grant", "invalid_token", "invalid_client", "unauthorized_client"]), l = [/\btoken (?:has |is )?expired\b/i, /\btoken (?:was|is) invalid\b/i, /\binvalid (?:refresh[ _]?)?token\b/i, /\btoken (?:has been |was )?revoked\b/i];
    function d(e3) {
      if (null === e3 || "object" != typeof e3) return false;
      const t3 = e3.name;
      if ("string" == typeof t3 && c.has(t3)) return true;
      const r3 = e3.errorCode;
      return !("string" != typeof r3 || !u.has(r3.toLowerCase())) || (function(e4) {
        if (null === e4 || "object" != typeof e4) return false;
        const t4 = e4.name, r4 = e4.errorCode;
        if ("InvalidRequestError" !== t4 && ("string" != typeof r4 || "invalid_request" !== r4.toLowerCase())) return false;
        const n3 = e4.message;
        return "string" == typeof n3 && l.some((e5) => e5.test(n3));
      })(e3);
    }
  }