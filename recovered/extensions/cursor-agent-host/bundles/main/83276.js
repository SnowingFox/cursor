// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83276 range:11925856..11926730
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