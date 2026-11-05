// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2505 range:204973..205584
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2505: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.baggageEntryMetadataFromString = t2.createBaggage = void 0;
    const n2 = r2(71), o2 = r2(1169), s2 = r2(7778), i2 = n2.DiagAPI.instance();
    t2.createBaggage = function(e3 = {}) {
      return new o2.BaggageImpl(new Map(Object.entries(e3)));
    }, t2.baggageEntryMetadataFromString = function(e3) {
      return "string" != typeof e3 && (i2.error("Cannot create baggage metadata from unknown type: " + typeof e3), e3 = ""), { __TYPE__: s2.baggageEntryMetadataSymbol, toString: () => e3 };
    };
  }