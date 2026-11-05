// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 83276 range:10904300..10905174
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83276: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
    const n = r(92954), s = r(98865), o = r(3917), i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
    function a(e2) {
      return e2.getValue(i) || void 0;
    }
    function c(e2, t2) {
      return e2.setValue(i, t2);
    }
    t.getSpan = a, t.getActiveSpan = function() {
      return a(o.ContextAPI.getInstance().active());
    }, t.setSpan = c, t.deleteSpan = function(e2) {
      return e2.deleteValue(i);
    }, t.setSpanContext = function(e2, t2) {
      return c(e2, new s.NonRecordingSpan(t2));
    }, t.getSpanContext = function(e2) {
      var t2;
      return null === (t2 = a(e2)) || void 0 === t2 ? void 0 : t2.spanContext();
    };
  }