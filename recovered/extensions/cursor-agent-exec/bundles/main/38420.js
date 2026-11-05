// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 38420 range:3091647..3092303
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38420: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
    const n = r(63637), s = r(98865), o = /^([0-9a-f]{32})$/i, i = /^[0-9a-f]{16}$/i;
    function a(e2) {
      return o.test(e2) && e2 !== n.INVALID_TRACEID;
    }
    function c(e2) {
      return i.test(e2) && e2 !== n.INVALID_SPANID;
    }
    t.isValidTraceId = a, t.isValidSpanId = c, t.isSpanContextValid = function(e2) {
      return a(e2.traceId) && c(e2.spanId);
    }, t.wrapSpanContext = function(e2) {
      return new s.NonRecordingSpan(e2);
    };
  }