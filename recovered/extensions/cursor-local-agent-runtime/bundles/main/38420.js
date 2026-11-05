// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 38420 range:1190091..1190747
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38420: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
    const n = r(63637), o = r(98865), s = /^([0-9a-f]{32})$/i, i = /^[0-9a-f]{16}$/i;
    function a(e2) {
      return s.test(e2) && e2 !== n.INVALID_TRACEID;
    }
    function l(e2) {
      return i.test(e2) && e2 !== n.INVALID_SPANID;
    }
    t.isValidTraceId = a, t.isValidSpanId = l, t.isSpanContextValid = function(e2) {
      return a(e2.traceId) && l(e2.spanId);
    }, t.wrapSpanContext = function(e2) {
      return new o.NonRecordingSpan(e2);
    };
  }