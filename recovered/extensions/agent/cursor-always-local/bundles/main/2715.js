// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2715 range:779169..780281
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2715: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.ParameterError = void 0, e2.isNonEmptyString = function(t3) {
      return s2(t3) && "" !== t3;
    }, e2.isDate = function(t3) {
      return t3 instanceof Date && o2(t3.getTime());
    }, e2.isEmptyString = function(t3) {
      return "" === t3 || t3 instanceof String && "" === t3.toString();
    }, e2.isString = s2, e2.isObject = i2, e2.isInteger = o2, e2.validate = function(t3, e3, r3) {
      if (t3) return;
      const s3 = "function" == typeof e3 ? e3 : void 0;
      let o3 = "function" == typeof e3 ? r3 : e3;
      i2(o3) || (o3 = "[object Object]");
      const u = new a((0, n2.safeToString)(o3));
      if (!s3) throw u;
      s3(u);
    };
    const n2 = r2(5779);
    function s2(t3) {
      return "string" == typeof t3 || t3 instanceof String;
    }
    function i2(t3) {
      return "[object Object]" === (0, n2.objectToString)(t3);
    }
    function o2(t3) {
      return "number" == typeof t3 && t3 % 1 == 0;
    }
    class a extends Error {
    }
    e2.ParameterError = a;
  }