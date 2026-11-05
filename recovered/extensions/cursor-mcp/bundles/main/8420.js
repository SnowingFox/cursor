// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8420 range:775386..776065
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8420: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.wrapSpanContext = t2.isSpanContextValid = t2.isValidSpanId = t2.isValidTraceId = void 0;
    const n2 = r2(3637), o2 = r2(8865), s2 = /^([0-9a-f]{32})$/i, i2 = /^[0-9a-f]{16}$/i;
    function a2(e3) {
      return s2.test(e3) && e3 !== n2.INVALID_TRACEID;
    }
    function c(e3) {
      return i2.test(e3) && e3 !== n2.INVALID_SPANID;
    }
    t2.isValidTraceId = a2, t2.isValidSpanId = c, t2.isSpanContextValid = function(e3) {
      return a2(e3.traceId) && c(e3.spanId);
    }, t2.wrapSpanContext = function(e3) {
      return new o2.NonRecordingSpan(e3);
    };
  }