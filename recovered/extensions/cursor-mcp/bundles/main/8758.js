// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8758 range:810734..811475
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8758: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getRules = t2.isJSONType = void 0;
    const r2 = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null", "object", "array"]);
    t2.isJSONType = function(e3) {
      return "string" == typeof e3 && r2.has(e3);
    }, t2.getRules = function() {
      const e3 = { number: { type: "number", rules: [] }, string: { type: "string", rules: [] }, array: { type: "array", rules: [] }, object: { type: "object", rules: [] } };
      return { types: { ...e3, integer: true, boolean: true, null: true }, rules: [{ rules: [] }, e3.number, e3.string, e3.array, e3.object], post: { rules: [] }, all: {}, keywords: {} };
    };
  }