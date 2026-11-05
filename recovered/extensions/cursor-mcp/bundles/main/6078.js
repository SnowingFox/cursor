// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6078 range:456894..457329
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6078: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { c: () => n2 });
    class n2 extends Error {
      constructor(e3, t3) {
        super(`MCP server "${e3}" requires sandboxing because MCP Network Controls are enabled, but the sandbox is not supported on this platform or system. The server was not started.`), this.serverName = e3, this.name = "McpSandboxUnavailableError", void 0 !== t3 && (this.cause = t3);
      }
    }
  }