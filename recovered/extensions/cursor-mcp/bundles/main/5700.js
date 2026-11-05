// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5700 range:439269..441050
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5700: (e2) => {
    "use strict";
    var t2 = e2.exports = function(e3, t3, n3) {
      "function" == typeof t3 && (n3 = t3, t3 = {}), r2(t3, "function" == typeof (n3 = t3.cb || n3) ? n3 : n3.pre || function() {
      }, n3.post || function() {
      }, e3, "", e3);
    };
    function r2(e3, o2, s2, i2, a2, c, u, l, d, p) {
      if (i2 && "object" == typeof i2 && !Array.isArray(i2)) {
        for (var f in o2(i2, a2, c, u, l, d, p), i2) {
          var h = i2[f];
          if (Array.isArray(h)) {
            if (f in t2.arrayKeywords) for (var m = 0; m < h.length; m++) r2(e3, o2, s2, h[m], a2 + "/" + f + "/" + m, c, a2, f, i2, m);
          } else if (f in t2.propsKeywords) {
            if (h && "object" == typeof h) for (var g in h) r2(e3, o2, s2, h[g], a2 + "/" + f + "/" + n2(g), c, a2, f, i2, g);
          } else (f in t2.keywords || e3.allKeys && !(f in t2.skipKeywords)) && r2(e3, o2, s2, h, a2 + "/" + f, c, a2, f, i2);
        }
        s2(i2, a2, c, u, l, d, p);
      }
    }
    function n2(e3) {
      return e3.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    t2.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true }, t2.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true }, t2.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true }, t2.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  }