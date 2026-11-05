// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4420 range:308077..308470
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4420: (e2, t2, r2) => {
    "use strict";
    let n2;
    function o2(e3) {
      n2 = e3;
    }
    function s2() {
      if (!n2) throw new Error("McpLifecycleOAuthClientProviderFactory has not been registered. The host (cursor-mcp or mcpProcess) must call setMcpLifecycleOAuthClientProviderFactory() at activation.");
      return n2;
    }
    r2.d(t2, { KX: () => o2, rl: () => s2 });
  }