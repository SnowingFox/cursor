// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3276 range:258961..259865
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3276: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getSpanContext = t2.setSpanContext = t2.deleteSpan = t2.setSpan = t2.getActiveSpan = t2.getSpan = void 0;
    const n2 = r2(2954), o2 = r2(8865), s2 = r2(3917), i2 = (0, n2.createContextKey)("OpenTelemetry Context Key SPAN");
    function a2(e3) {
      return e3.getValue(i2) || void 0;
    }
    function c(e3, t3) {
      return e3.setValue(i2, t3);
    }
    t2.getSpan = a2, t2.getActiveSpan = function() {
      return a2(s2.ContextAPI.getInstance().active());
    }, t2.setSpan = c, t2.deleteSpan = function(e3) {
      return e3.deleteValue(i2);
    }, t2.setSpanContext = function(e3, t3) {
      return c(e3, new o2.NonRecordingSpan(t3));
    }, t2.getSpanContext = function(e3) {
      var t3;
      return null === (t3 = a2(e3)) || void 0 === t3 ? void 0 : t3.spanContext();
    };
  }