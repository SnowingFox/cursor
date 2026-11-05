// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 98517 range:7921293..7923901
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98517: (e, t, r) => {
    "use strict";
    var n, o;
    r.d(t, { CR: () => i, ZS: () => n, Zp: () => s }), (function(e2) {
      e2.assertEqual = (e3) => {
      }, e2.assertIs = function(e3) {
      }, e2.assertNever = function(e3) {
        throw new Error();
      }, e2.arrayToEnum = (e3) => {
        const t2 = {};
        for (const r2 of e3) t2[r2] = r2;
        return t2;
      }, e2.getValidEnumValues = (t2) => {
        const r2 = e2.objectKeys(t2).filter((e3) => "number" != typeof t2[t2[e3]]), n2 = {};
        for (const e3 of r2) n2[e3] = t2[e3];
        return e2.objectValues(n2);
      }, e2.objectValues = (t2) => e2.objectKeys(t2).map(function(e3) {
        return t2[e3];
      }), e2.objectKeys = "function" == typeof Object.keys ? (e3) => Object.keys(e3) : (e3) => {
        const t2 = [];
        for (const r2 in e3) Object.prototype.hasOwnProperty.call(e3, r2) && t2.push(r2);
        return t2;
      }, e2.find = (e3, t2) => {
        for (const r2 of e3) if (t2(r2)) return r2;
      }, e2.isInteger = "function" == typeof Number.isInteger ? (e3) => Number.isInteger(e3) : (e3) => "number" == typeof e3 && Number.isFinite(e3) && Math.floor(e3) === e3, e2.joinValues = function(e3, t2 = " | ") {
        return e3.map((e4) => "string" == typeof e4 ? `'${e4}'` : e4).join(t2);
      }, e2.jsonStringifyReplacer = (e3, t2) => "bigint" == typeof t2 ? t2.toString() : t2;
    })(n || (n = {})), (function(e2) {
      e2.mergeShapes = (e3, t2) => ({ ...e3, ...t2 });
    })(o || (o = {}));
    const s = n.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), i = (e2) => {
      switch (typeof e2) {
        case "undefined":
          return s.undefined;
        case "string":
          return s.string;
        case "number":
          return Number.isNaN(e2) ? s.nan : s.number;
        case "boolean":
          return s.boolean;
        case "function":
          return s.function;
        case "bigint":
          return s.bigint;
        case "symbol":
          return s.symbol;
        case "object":
          return Array.isArray(e2) ? s.array : null === e2 ? s.null : e2.then && "function" == typeof e2.then && e2.catch && "function" == typeof e2.catch ? s.promise : "undefined" != typeof Map && e2 instanceof Map ? s.map : "undefined" != typeof Set && e2 instanceof Set ? s.set : "undefined" != typeof Date && e2 instanceof Date ? s.date : s.object;
        default:
          return s.unknown;
      }
    };
  }