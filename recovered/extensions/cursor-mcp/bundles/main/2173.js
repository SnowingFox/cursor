// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2173 range:199341..199998
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2173: (e2, t2) => {
    "use strict";
    function r2(e3, t3) {
      return t3.rules.some((t4) => n2(e3, t4));
    }
    function n2(e3, t3) {
      var r3;
      return void 0 !== e3[t3.keyword] || (null === (r3 = t3.definition.implements) || void 0 === r3 ? void 0 : r3.some((t4) => void 0 !== e3[t4]));
    }
    Object.defineProperty(t2, "__esModule", { value: true }), t2.shouldUseRule = t2.shouldUseGroup = t2.schemaHasRulesForType = void 0, t2.schemaHasRulesForType = function({ schema: e3, self: t3 }, n3) {
      const o2 = t3.RULES.types[n3];
      return o2 && true !== o2 && r2(e3, o2);
    }, t2.shouldUseGroup = r2, t2.shouldUseRule = n2;
  }