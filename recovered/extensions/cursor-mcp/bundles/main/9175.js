// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9175 range:879482..881136
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9175: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { Gv: () => h, WQ: () => m, fh: () => p, tz: () => d, yD: () => f });
    var n2 = r2(3168), o2 = r2(496);
    const s2 = 12e4, i2 = 36e5, a2 = 36e5, c = 5e3, u = "MCP error -32001: Request timed out";
    function l(e3) {
      const t3 = (0, o2.v)("toolCallIdleTimeoutMs", e3) ?? s2;
      return Math.max(5e3, Math.min(Math.trunc(t3), 18e5));
    }
    function d(e3, t3, r3) {
      const n3 = t3?.enabled ?? (function(e4) {
        return (0, o2.v)("toolCallBoundedTimeoutEnabled", e4) ?? true;
      })(r3);
      if (!n3) return { timeout: a2, ...void 0 !== e3 ? { onprogress: e3 } : {} };
      const s3 = Math.max(5e3, Math.min(Math.trunc(t3?.timeoutMs ?? l(r3)), 18e5)), c2 = Math.max(s3, Math.min(Math.trunc(t3?.maxTotalTimeoutMs ?? (function(e4) {
        const t4 = l(e4), r4 = (0, o2.v)("toolCallMaxTotalTimeoutMs", e4) ?? i2;
        return Math.max(t4, Math.min(Math.trunc(r4), 36e5));
      })(r3)), 36e5));
      return { timeout: s3, resetTimeoutOnProgress: true, maxTotalTimeout: c2, ...void 0 !== e3 ? { onprogress: e3 } : {} };
    }
    function p(e3, t3, r3 = Date.now()) {
      if (void 0 === e3.maxTotalTimeout) return e3;
      const n3 = e3.maxTotalTimeout - (r3 - t3);
      return n3 <= 0 ? null : { ...e3, timeout: Math.min(e3.timeout, n3), maxTotalTimeout: n3 };
    }
    function f() {
      return new Error(u);
    }
    function h(e3) {
      const t3 = e3 instanceof Error ? e3.message : String(e3);
      return (0, n2.v)(t3);
    }
    function m(e3, t3, r3) {
      return void 0 === r3 ? "legacy" : r3 > t3 && e3 >= r3 - c ? "max_total" : "idle";
    }
  }