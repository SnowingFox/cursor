// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 53827 range:1710761..1711358
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53827: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
    const n = r(3917), o = (0, r(92954).createContextKey)("OpenTelemetry Baggage Key");
    function s(e2) {
      return e2.getValue(o) || void 0;
    }
    t.getBaggage = s, t.getActiveBaggage = function() {
      return s(n.ContextAPI.getInstance().active());
    }, t.setBaggage = function(e2, t2) {
      return e2.setValue(o, t2);
    }, t.deleteBaggage = function(e2) {
      return e2.deleteValue(o);
    };
  }