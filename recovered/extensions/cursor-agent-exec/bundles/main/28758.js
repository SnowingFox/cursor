// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 28758 range:2843175..2843908
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28758: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.getRules = t.isJSONType = void 0;
    const r = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null", "object", "array"]);
    t.isJSONType = function(e2) {
      return "string" == typeof e2 && r.has(e2);
    }, t.getRules = function() {
      const e2 = { number: { type: "number", rules: [] }, string: { type: "string", rules: [] }, array: { type: "array", rules: [] }, object: { type: "object", rules: [] } };
      return { types: { ...e2, integer: true, boolean: true, null: true }, rules: [{ rules: [] }, e2.number, e2.string, e2.array, e2.object], post: { rules: [] }, all: {}, keywords: {} };
    };
  }