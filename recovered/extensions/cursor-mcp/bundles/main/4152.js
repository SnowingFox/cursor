// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4152 range:301283..301997
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4152: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { J_: () => a2, MB: () => i2, X1: () => s2, qh: () => c });
    var n2 = r2(2573), o2 = r2(496);
    function s2(e3) {
      return "connected" === e3?.type;
    }
    function i2(e3) {
      return ("failed" === e3.type || "closed" === e3.type) && false === e3.automaticRetry;
    }
    function a2(e3, t3, r3) {
      return ("failed" === e3.type || "closed" === e3.type) && ((false !== e3.automaticRetry || true === (0, o2.v)("retryNonRetryableOnWake", r3)) && ("needsUserAuth" !== t3.type && "expired" !== t3.type));
    }
    function c(e3, t3) {
      return i2(e3) ? (0, o2.v)("nonRetryableWakeRetryCooldownMs", t3) ?? n2.yw : (0, n2.eu)(t3);
    }
  }