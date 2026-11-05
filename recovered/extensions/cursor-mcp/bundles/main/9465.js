// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9465 range:887970..888905
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9465: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { L1: () => u, Lt: () => s2, S$: () => i2, ds: () => c, vL: () => a2 });
    var n2 = r2(768), o2 = r2(9206);
    const s2 = { CODE_VERIFIER: "mcp_code_verifier", SERVER_URL: "mcp_server_url", TOKENS: "mcp_tokens", CLIENT_INFORMATION: "mcp_client_information", OAUTH_RETENTION: "mcp_oauth_retention", OAUTH_ATTEMPT: "mcp_oauth_attempt", OAUTH_ATTEMPT_CLIENT_SECRET: "mcp_oauth_attempt_client_secret", UPDATED_AT: "mcp_oauth_updated_at_ms", GRANT_HOLD: "mcp_grant_hold" };
    function i2({ baseKey: e3, identifier: t3 }) {
      return `[${t3}] ${e3}`;
    }
    function a2({ baseKey: e3, serverUrl: t3 }) {
      const r3 = (0, n2.Yl)(t3);
      return `[url:${(0, o2.$)(r3)}] ${e3}`;
    }
    function c(e3) {
      return `[oauth-attempt:${e3}] ${s2.OAUTH_ATTEMPT_CLIENT_SECRET}`;
    }
    function u(e3) {
      return `[oauth-attempt:${e3}] ${s2.CODE_VERIFIER}`;
    }
  }