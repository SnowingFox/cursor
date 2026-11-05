// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 42505 range:3208952..3209549
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42505: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.baggageEntryMetadataFromString = t.createBaggage = void 0;
    const n = r(30071), s = r(91169), o = r(7778), i = n.DiagAPI.instance();
    t.createBaggage = function(e2 = {}) {
      return new s.BaggageImpl(new Map(Object.entries(e2)));
    }, t.baggageEntryMetadataFromString = function(e2) {
      return "string" != typeof e2 && (i.error("Cannot create baggage metadata from unknown type: " + typeof e2), e2 = ""), { __TYPE__: o.baggageEntryMetadataSymbol, toString: () => e2 };
    };
  }