// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 28758 range:924641..925374
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