// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1970 range:192126..194985
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1970: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { $y: () => c, qY: () => i2, tB: () => s2 });
    var n2 = r2(4792), o2 = r2(9465);
    function s2(e3, t3) {
      const r3 = e3?.access_token, n3 = "string" == typeof r3 ? r3.length : 0, o3 = Boolean(e3?.refresh_token), s3 = "number" == typeof e3?.expires_in && Number.isFinite(e3.expires_in) ? e3.expires_in : null;
      return { accessTokenLen: n3, refreshTokenPresent: o3, expiresAtTimestamp: t3?.expiresInIsFresh && null !== s3 ? Date.now() + Math.round(1e3 * s3) : null, grantedScope: "string" == typeof e3?.scope && e3.scope.length > 0 ? e3.scope : null };
    }
    function i2(e3) {
      return e3.includes(o2.Lt.TOKENS) ? "tokens" : e3.includes(o2.Lt.CLIENT_INFORMATION) ? "client_information" : e3.includes(o2.Lt.CODE_VERIFIER) ? "verifier" : "multiple";
    }
    const a2 = { mcp_oauth_callback_completion: "MCP OAuth callback exchange completed", mcp_oauth_token_save: "MCP OAuth tokens persisted", mcp_oauth_token_client_binding_mismatch: "MCP OAuth token client binding mismatch", mcp_oauth_tokens_returned: "MCP OAuth tokens returned to SDK", mcp_oauth_refresh_prepare: "MCP OAuth refresh prepared", mcp_oauth_refresh_error: "MCP OAuth refresh error", mcp_oauth_refresh_result: "MCP OAuth refresh result", mcp_oauth_refresh_lease_acquired: "MCP OAuth refresh lock acquired", mcp_oauth_refresh_lease_waiting: "MCP OAuth refresh lock held by sibling", mcp_oauth_refresh_lease_wait_complete: "MCP OAuth refresh lock released by sibling", mcp_oauth_refresh_lease_released: "MCP OAuth refresh lock released", mcp_oauth_refresh_lease_heartbeat_renewed: "MCP OAuth refresh lock heartbeat renewed", mcp_oauth_refresh_lease_heartbeat_lost: "MCP OAuth refresh lock heartbeat lost", mcp_oauth_sibling_refresh_detected: "MCP OAuth sibling already refreshed", mcp_oauth_invalidate_credentials_skipped: "MCP OAuth invalidate skipped — preserving tokens", mcp_oauth_sdk_refresh_catch_branch: "MCP OAuth SDK refresh catch branch", mcp_oauth_invalidate_credentials: "MCP OAuth credentials invalidated", mcp_oauth_credentials_cleared: "MCP OAuth credentials cleared (local housekeeping)", mcp_oauth_redirect: "MCP OAuth redirect" };
    function c(e3) {
      !(function(e4) {
        (0, n2.EL)({ identifier: e4.identifier, level: e4.level ?? "info", message: e4.message ?? a2[e4.event], metadata: (0, n2.Qt)({ event: e4.event, commandsVersion: e4.commandsVersion ?? "process", mcpOAuthOwner: e4.mcpOAuthOwner ?? "mcp_process", ...e4.fields ?? {} }), error: e4.error });
      })({ identifier: e3.identifier, event: "mcp_oauth_credentials_cleared", level: e3.level ?? "debug", commandsVersion: e3.commandsVersion, mcpOAuthOwner: e3.mcpOAuthOwner, fields: { reason: e3.reason, clearScope: e3.clearScope, storageKey: e3.storageKey, hadRefreshToken: e3.hadRefreshToken, ...e3.fields ?? {} } });
    }
  }