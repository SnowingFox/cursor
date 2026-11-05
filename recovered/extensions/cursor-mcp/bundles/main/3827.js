// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3827 range:290762..291380
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3827: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.deleteBaggage = t2.setBaggage = t2.getActiveBaggage = t2.getBaggage = void 0;
    const n2 = r2(3917), o2 = (0, r2(2954).createContextKey)("OpenTelemetry Baggage Key");
    function s2(e3) {
      return e3.getValue(o2) || void 0;
    }
    t2.getBaggage = s2, t2.getActiveBaggage = function() {
      return s2(n2.ContextAPI.getInstance().active());
    }, t2.setBaggage = function(e3, t3) {
      return e3.setValue(o2, t3);
    }, t2.deleteBaggage = function(e3) {
      return e3.deleteValue(o2);
    };
  }