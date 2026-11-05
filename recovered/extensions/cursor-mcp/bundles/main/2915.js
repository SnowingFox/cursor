// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2915 range:225438..227170
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2915: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { E7: () => _, FM: () => l, H$: () => h, OV: () => u, UZ: () => y, XP: () => m, YM: () => c, dQ: () => a2, ef: () => v, mY: () => d, zB: () => g });
    var n2 = r2(8691);
    let o2, s2, i2 = "local";
    function a2(e3) {
      o2 = e3;
    }
    function c(e3) {
      i2 = e3;
    }
    function u() {
      return i2;
    }
    function l(e3, t3, r3 = "distribution", n3 = []) {
      if (!o2) return;
      const s3 = [`lease_connection:${i2}`, ...n3];
      try {
        o2.emit(e3, t3, r3, s3);
      } catch {
      }
    }
    function d(e3) {
      s2 = e3;
    }
    let p, f = "v1";
    function h(e3) {
      f = e3;
    }
    function m() {
      return f;
    }
    function g(e3) {
      p = e3;
    }
    function y(e3) {
      return p ? p(e3) : { mcpAuthMeta: e3 };
    }
    function _(e3) {
      const t3 = [`failure_reason:${e3.reason}`, `retryable:${String(e3.retryable)}`];
      return void 0 !== e3.httpStatus && t3.push(`status_code:${String(e3.httpStatus)}`), t3;
    }
    function v({ identifier: e3, phase: t3, error: r3, serverType: o3, classification: i3, captureException: a3 = true, extraData: c2 }) {
      const u2 = i3 ?? (0, n2.FI)(r3, o3), l2 = r3 instanceof Error ? r3.message : String(r3), d2 = { identifier: e3, phase: t3, reason: u2.reason, retryable: u2.retryable, http_status: u2.httpStatus, server_type: o3, ...c2 };
      if (s2 && (s2.addBreadcrumb({ category: "mcp.v2.failure", level: "error", message: l2, data: d2 }), a3)) {
        const e4 = new Error(l2);
        e4.name = "McpV2Error", e4.stack = r3 instanceof Error ? r3.stack : void 0, e4.mcpFailure = d2, s2.captureException(e4);
      }
      return u2;
    }
  }