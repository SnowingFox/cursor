// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 12173 range:862118..862757
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12173: (e, t) => {
    "use strict";
    function r(e2, t2) {
      return t2.rules.some((t3) => n(e2, t3));
    }
    function n(e2, t2) {
      var r2;
      return void 0 !== e2[t2.keyword] || (null === (r2 = t2.definition.implements) || void 0 === r2 ? void 0 : r2.some((t3) => void 0 !== e2[t3]));
    }
    Object.defineProperty(t, "__esModule", { value: true }), t.shouldUseRule = t.shouldUseGroup = t.schemaHasRulesForType = void 0, t.schemaHasRulesForType = function({ schema: e2, self: t2 }, n2) {
      const s = t2.RULES.types[n2];
      return s && true !== s && r(e2, s);
    }, t.shouldUseGroup = r, t.shouldUseRule = n;
  }