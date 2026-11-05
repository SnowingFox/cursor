// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7223 range:609263..610311
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7223: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { VO: () => l, Zo: () => a2, pt: () => i2 });
    var n2 = r2(496);
    const o2 = 5, s2 = 5e3;
    function i2(e3) {
      const t3 = (0, n2.v)("fastRetryMaxAttempts", e3) ?? o2;
      return Math.max(1, Math.min(Math.trunc(t3), 20));
    }
    function a2(e3) {
      const t3 = (0, n2.v)("maxPeriodicCycles", e3);
      if (void 0 !== t3) return Math.max(0, Math.min(Math.trunc(t3), 1e4));
    }
    function c(e3, t3) {
      return (function(e4) {
        const t4 = (0, n2.v)("networkResumeReconnectDebounceMs", e4) ?? s2;
        return Math.max(0, Math.min(Math.trunc(t4), 18e5));
      })(t3);
    }
    function u(e3, t3) {
      switch (e3) {
        case "power_monitor_resume":
        case "unlock_screen":
          return (function(e4) {
            return (0, n2.v)("networkResumeReconnectEnabled", e4) ?? false;
          })(t3);
        default:
          return e3;
      }
    }
    function l(e3, t3) {
      return { enabled: u(e3, t3), debounceMs: c(0, t3) };
    }
  }