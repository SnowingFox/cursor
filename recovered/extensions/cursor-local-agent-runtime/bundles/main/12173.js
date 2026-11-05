// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 12173 range:457154..457793
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
      const o = t2.RULES.types[n2];
      return o && true !== o && r(e2, o);
    }, t.shouldUseGroup = r, t.shouldUseRule = n;
  }