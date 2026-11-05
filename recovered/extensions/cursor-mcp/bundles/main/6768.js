// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6768 range:576653..577769
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6768: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { Tr: () => m, dg: () => l, eZ: () => f, qA: () => p, sv: () => d, wW: () => h });
    var n2 = r2(496);
    const o2 = 3e4, s2 = 3e4, i2 = 1e4, a2 = 3, c = 3e5, u = 3e4;
    function l(e3) {
      const t3 = (0, n2.v)("stabilityThresholdMs", e3) ?? o2;
      return Math.max(5e3, Math.min(Math.trunc(t3), 6e5));
    }
    function d(e3) {
      const t3 = (0, n2.v)("degradedProbeDelayMs", e3) ?? s2;
      return Math.max(1e3, Math.min(Math.trunc(t3), 36e5));
    }
    function p(e3) {
      const t3 = (0, n2.v)("healthProbeTimeoutMs", e3) ?? i2;
      return Math.max(1e3, Math.min(Math.trunc(t3), 12e4));
    }
    function f(e3) {
      const t3 = (0, n2.v)("maxDegradedProbeFailures", e3) ?? a2;
      return Math.max(1, Math.min(Math.trunc(t3), 20));
    }
    function h(e3) {
      const t3 = (0, n2.v)("keepaliveProbeDelayMs", e3) ?? c;
      return Math.max(1e4, Math.min(Math.trunc(t3), 36e5));
    }
    function m(e3) {
      const t3 = (0, n2.v)("keepaliveJitterMs", e3) ?? u;
      return Math.max(0, Math.min(Math.trunc(t3), 36e5));
    }
  }