// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 82715 range:11876166..11877254
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82715: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ParameterError = void 0, t.isNonEmptyString = function(e2) {
      return s(e2) && "" !== e2;
    }, t.isDate = function(e2) {
      return e2 instanceof Date && i(e2.getTime());
    }, t.isEmptyString = function(e2) {
      return "" === e2 || e2 instanceof String && "" === e2.toString();
    }, t.isString = s, t.isObject = o, t.isInteger = i, t.validate = function(e2, t2, r2) {
      if (e2) return;
      const s2 = "function" == typeof t2 ? t2 : void 0;
      let i2 = "function" == typeof t2 ? r2 : t2;
      o(i2) || (i2 = "[object Object]");
      const c = new a((0, n.safeToString)(i2));
      if (!s2) throw c;
      s2(c);
    };
    const n = r(95779);
    function s(e2) {
      return "string" == typeof e2 || e2 instanceof String;
    }
    function o(e2) {
      return "[object Object]" === (0, n.objectToString)(e2);
    }
    function i(e2) {
      return "number" == typeof e2 && e2 % 1 == 0;
    }
    class a extends Error {
    }
    t.ParameterError = a;
  }