// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 53827 range:4552044..4552641
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53827: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
    const n = r(3917), s = (0, r(92954).createContextKey)("OpenTelemetry Baggage Key");
    function o(e2) {
      return e2.getValue(s) || void 0;
    }
    t.getBaggage = o, t.getActiveBaggage = function() {
      return o(n.ContextAPI.getInstance().active());
    }, t.setBaggage = function(e2, t2) {
      return e2.setValue(s, t2);
    }, t.deleteBaggage = function(e2) {
      return e2.deleteValue(s);
    };
  }