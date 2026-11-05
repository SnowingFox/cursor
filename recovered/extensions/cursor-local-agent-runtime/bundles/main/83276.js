// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 83276 range:7495162..7496036
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83276: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
    const n = r(92954), o = r(98865), s = r(3917), i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
    function a(e2) {
      return e2.getValue(i) || void 0;
    }
    function l(e2, t2) {
      return e2.setValue(i, t2);
    }
    t.getSpan = a, t.getActiveSpan = function() {
      return a(s.ContextAPI.getInstance().active());
    }, t.setSpan = l, t.deleteSpan = function(e2) {
      return e2.deleteValue(i);
    }, t.setSpanContext = function(e2, t2) {
      return l(e2, new o.NonRecordingSpan(t2));
    }, t.getSpanContext = function(e2) {
      var t2;
      return null === (t2 = a(e2)) || void 0 === t2 ? void 0 : t2.spanContext();
    };
  }