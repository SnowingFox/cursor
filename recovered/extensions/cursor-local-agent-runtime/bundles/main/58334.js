// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 58334 range:1819867..1823176
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58334: (e) => {
    var t = Object.prototype.toString;
    function r(e2) {
      return "function" == typeof e2.constructor ? e2.constructor.name : null;
    }
    e.exports = function(e2) {
      if (void 0 === e2) return "undefined";
      if (null === e2) return "null";
      var n = typeof e2;
      if ("boolean" === n) return "boolean";
      if ("string" === n) return "string";
      if ("number" === n) return "number";
      if ("symbol" === n) return "symbol";
      if ("function" === n) return "GeneratorFunction" === r(e2) ? "generatorfunction" : "function";
      if ((function(e3) {
        return Array.isArray ? Array.isArray(e3) : e3 instanceof Array;
      })(e2)) return "array";
      if ((function(e3) {
        if (e3.constructor && "function" == typeof e3.constructor.isBuffer) return e3.constructor.isBuffer(e3);
        return false;
      })(e2)) return "buffer";
      if ((function(e3) {
        try {
          if ("number" == typeof e3.length && "function" == typeof e3.callee) return true;
        } catch (e4) {
          if (-1 !== e4.message.indexOf("callee")) return true;
        }
        return false;
      })(e2)) return "arguments";
      if ((function(e3) {
        return e3 instanceof Date || "function" == typeof e3.toDateString && "function" == typeof e3.getDate && "function" == typeof e3.setDate;
      })(e2)) return "date";
      if ((function(e3) {
        return e3 instanceof Error || "string" == typeof e3.message && e3.constructor && "number" == typeof e3.constructor.stackTraceLimit;
      })(e2)) return "error";
      if ((function(e3) {
        return e3 instanceof RegExp || "string" == typeof e3.flags && "boolean" == typeof e3.ignoreCase && "boolean" == typeof e3.multiline && "boolean" == typeof e3.global;
      })(e2)) return "regexp";
      switch (r(e2)) {
        case "Symbol":
          return "symbol";
        case "Promise":
          return "promise";
        case "WeakMap":
          return "weakmap";
        case "WeakSet":
          return "weakset";
        case "Map":
          return "map";
        case "Set":
          return "set";
        case "Int8Array":
          return "int8array";
        case "Uint8Array":
          return "uint8array";
        case "Uint8ClampedArray":
          return "uint8clampedarray";
        case "Int16Array":
          return "int16array";
        case "Uint16Array":
          return "uint16array";
        case "Int32Array":
          return "int32array";
        case "Uint32Array":
          return "uint32array";
        case "Float32Array":
          return "float32array";
        case "Float64Array":
          return "float64array";
      }
      if ((function(e3) {
        return "function" == typeof e3.throw && "function" == typeof e3.return && "function" == typeof e3.next;
      })(e2)) return "generator";
      switch (n = t.call(e2)) {
        case "[object Object]":
          return "object";
        case "[object Map Iterator]":
          return "mapiterator";
        case "[object Set Iterator]":
          return "setiterator";
        case "[object String Iterator]":
          return "stringiterator";
        case "[object Array Iterator]":
          return "arrayiterator";
      }
      return n.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
  }