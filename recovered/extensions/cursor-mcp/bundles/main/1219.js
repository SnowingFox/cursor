// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1219 range:151945..152777
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1219: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { gO: () => s2, zf: () => i2 });
    class n2 extends Error {
      constructor() {
        super("MCP operation aborted"), this.isMcpAbortError = true, this.name = "McpAbortError";
      }
    }
    function o2(e3) {
      return e3.reason instanceof Error && !("undefined" != typeof DOMException && e3.reason instanceof DOMException) ? e3.reason : new n2();
    }
    function s2(e3, t3) {
      return t3 ? t3.aborted ? (e3.catch(() => {
      }), Promise.reject(o2(t3))) : new Promise((r3, n3) => {
        const s3 = () => n3(o2(t3));
        t3.addEventListener("abort", s3, { once: true }), e3.then(r3, n3).finally(() => t3.removeEventListener("abort", s3));
      }) : e3;
    }
    function i2(e3, t3) {
      return e3 instanceof n2 || true === t3?.aborted;
    }
  }