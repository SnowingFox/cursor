// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 25700 range:715817..717551
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25700: (e) => {
    "use strict";
    var t = e.exports = function(e2, t2, n2) {
      "function" == typeof t2 && (n2 = t2, t2 = {}), r(t2, "function" == typeof (n2 = t2.cb || n2) ? n2 : n2.pre || function() {
      }, n2.post || function() {
      }, e2, "", e2);
    };
    function r(e2, o, s, i, a, l, c, u, d, p) {
      if (i && "object" == typeof i && !Array.isArray(i)) {
        for (var h in o(i, a, l, c, u, d, p), i) {
          var m = i[h];
          if (Array.isArray(m)) {
            if (h in t.arrayKeywords) for (var f = 0; f < m.length; f++) r(e2, o, s, m[f], a + "/" + h + "/" + f, l, a, h, i, f);
          } else if (h in t.propsKeywords) {
            if (m && "object" == typeof m) for (var g in m) r(e2, o, s, m[g], a + "/" + h + "/" + n(g), l, a, h, i, g);
          } else (h in t.keywords || e2.allKeys && !(h in t.skipKeywords)) && r(e2, o, s, m, a + "/" + h, l, a, h, i);
        }
        s(i, a, l, c, u, d, p);
      }
    }
    function n(e2) {
      return e2.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    t.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true }, t.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true }, t.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true }, t.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  }