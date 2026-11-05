// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 42505 range:1272820..1273417
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42505: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.baggageEntryMetadataFromString = t.createBaggage = void 0;
    const n = r(30071), o = r(91169), s = r(7778), i = n.DiagAPI.instance();
    t.createBaggage = function(e2 = {}) {
      return new o.BaggageImpl(new Map(Object.entries(e2)));
    }, t.baggageEntryMetadataFromString = function(e2) {
      return "string" != typeof e2 && (i.error("Cannot create baggage metadata from unknown type: " + typeof e2), e2 = ""), { __TYPE__: s.baggageEntryMetadataSymbol, toString: () => e2 };
    };
  }