// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 25700 range:1126984..1128718
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
    function r(e2, s, o, i, a, c, l, u, d, p) {
      if (i && "object" == typeof i && !Array.isArray(i)) {
        for (var m in s(i, a, c, l, u, d, p), i) {
          var h = i[m];
          if (Array.isArray(h)) {
            if (m in t.arrayKeywords) for (var f = 0; f < h.length; f++) r(e2, s, o, h[f], a + "/" + m + "/" + f, c, a, m, i, f);
          } else if (m in t.propsKeywords) {
            if (h && "object" == typeof h) for (var g in h) r(e2, s, o, h[g], a + "/" + m + "/" + n(g), c, a, m, i, g);
          } else (m in t.keywords || e2.allKeys && !(m in t.skipKeywords)) && r(e2, s, o, h, a + "/" + m, c, a, m, i);
        }
        o(i, a, c, l, u, d, p);
      }
    }
    function n(e2) {
      return e2.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    t.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true }, t.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true }, t.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true }, t.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  }