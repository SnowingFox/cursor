// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8005 range:610113..619001
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8005: (e2, A2, t2) => {
    "use strict";
    const { types: n2 } = t2(9023), { hasOwn: r2, toUSVString: o2 } = t2(5728), s = { converters: {}, util: {}, errors: {} };
    s.errors.exception = function(e3) {
      return new TypeError(`${e3.header}: ${e3.message}`);
    }, s.errors.conversionFailed = function(e3) {
      const A3 = 1 === e3.types.length ? "" : " one of", t3 = `${e3.argument} could not be converted to${A3}: ${e3.types.join(", ")}.`;
      return s.errors.exception({ header: e3.prefix, message: t3 });
    }, s.errors.invalidArgument = function(e3) {
      return s.errors.exception({ header: e3.prefix, message: `"${e3.value}" is an invalid ${e3.type}.` });
    }, s.brandCheck = function(e3, A3, t3 = void 0) {
      if (false === t3?.strict || e3 instanceof A3) return e3?.[Symbol.toStringTag] === A3.prototype[Symbol.toStringTag];
      throw new TypeError("Illegal invocation");
    }, s.argumentLengthCheck = function({ length: e3 }, A3, t3) {
      if (e3 < A3) throw s.errors.exception({ message: `${A3} argument${1 !== A3 ? "s" : ""} required, but${e3 ? " only" : ""} ${e3} found.`, ...t3 });
    }, s.illegalConstructor = function() {
      throw s.errors.exception({ header: "TypeError", message: "Illegal constructor" });
    }, s.util.Type = function(e3) {
      switch (typeof e3) {
        case "undefined":
          return "Undefined";
        case "boolean":
          return "Boolean";
        case "string":
          return "String";
        case "symbol":
          return "Symbol";
        case "number":
          return "Number";
        case "bigint":
          return "BigInt";
        case "function":
        case "object":
          return null === e3 ? "Null" : "Object";
      }
    }, s.util.ConvertToInt = function(e3, A3, t3, n3 = {}) {
      let r3, o3;
      64 === A3 ? (r3 = Math.pow(2, 53) - 1, o3 = "unsigned" === t3 ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === t3 ? (o3 = 0, r3 = Math.pow(2, A3) - 1) : (o3 = Math.pow(-2, A3) - 1, r3 = Math.pow(2, A3 - 1) - 1);
      let a = Number(e3);
      if (0 === a && (a = 0), true === n3.enforceRange) {
        if (Number.isNaN(a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY) throw s.errors.exception({ header: "Integer conversion", message: `Could not convert ${e3} to an integer.` });
        if (a = s.util.IntegerPart(a), a < o3 || a > r3) throw s.errors.exception({ header: "Integer conversion", message: `Value must be between ${o3}-${r3}, got ${a}.` });
        return a;
      }
      return Number.isNaN(a) || true !== n3.clamp ? Number.isNaN(a) || 0 === a && Object.is(0, a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY ? 0 : (a = s.util.IntegerPart(a), a %= Math.pow(2, A3), "signed" === t3 && a >= Math.pow(2, A3) - 1 ? a - Math.pow(2, A3) : a) : (a = Math.min(Math.max(a, o3), r3), a = Math.floor(a) % 2 == 0 ? Math.floor(a) : Math.ceil(a), a);
    }, s.util.IntegerPart = function(e3) {
      const A3 = Math.floor(Math.abs(e3));
      return e3 < 0 ? -1 * A3 : A3;
    }, s.sequenceConverter = function(e3) {
      return (A3) => {
        if ("Object" !== s.util.Type(A3)) throw s.errors.exception({ header: "Sequence", message: `Value of type ${s.util.Type(A3)} is not an Object.` });
        const t3 = A3?.[Symbol.iterator]?.(), n3 = [];
        if (void 0 === t3 || "function" != typeof t3.next) throw s.errors.exception({ header: "Sequence", message: "Object is not an iterator." });
        for (; ; ) {
          const { done: A4, value: r3 } = t3.next();
          if (A4) break;
          n3.push(e3(r3));
        }
        return n3;
      };
    }, s.recordConverter = function(e3, A3) {
      return (t3) => {
        if ("Object" !== s.util.Type(t3)) throw s.errors.exception({ header: "Record", message: `Value of type ${s.util.Type(t3)} is not an Object.` });
        const r3 = {};
        if (!n2.isProxy(t3)) {
          const n3 = Object.keys(t3);
          for (const o4 of n3) {
            const n4 = e3(o4), s2 = A3(t3[o4]);
            r3[n4] = s2;
          }
          return r3;
        }
        const o3 = Reflect.ownKeys(t3);
        for (const n3 of o3) {
          const o4 = Reflect.getOwnPropertyDescriptor(t3, n3);
          if (o4?.enumerable) {
            const o5 = e3(n3), s2 = A3(t3[n3]);
            r3[o5] = s2;
          }
        }
        return r3;
      };
    }, s.interfaceConverter = function(e3) {
      return (A3, t3 = {}) => {
        if (false !== t3.strict && !(A3 instanceof e3)) throw s.errors.exception({ header: e3.name, message: `Expected ${A3} to be an instance of ${e3.name}.` });
        return A3;
      };
    }, s.dictionaryConverter = function(e3) {
      return (A3) => {
        const t3 = s.util.Type(A3), n3 = {};
        if ("Null" === t3 || "Undefined" === t3) return n3;
        if ("Object" !== t3) throw s.errors.exception({ header: "Dictionary", message: `Expected ${A3} to be one of: Null, Undefined, Object.` });
        for (const t4 of e3) {
          const { key: e4, defaultValue: o3, required: a, converter: i } = t4;
          if (true === a && !r2(A3, e4)) throw s.errors.exception({ header: "Dictionary", message: `Missing required key "${e4}".` });
          let c = A3[e4];
          const l = r2(t4, "defaultValue");
          if (l && null !== c && (c = c ?? o3), a || l || void 0 !== c) {
            if (c = i(c), t4.allowedValues && !t4.allowedValues.includes(c)) throw s.errors.exception({ header: "Dictionary", message: `${c} is not an accepted type. Expected one of ${t4.allowedValues.join(", ")}.` });
            n3[e4] = c;
          }
        }
        return n3;
      };
    }, s.nullableConverter = function(e3) {
      return (A3) => null === A3 ? A3 : e3(A3);
    }, s.converters.DOMString = function(e3, A3 = {}) {
      if (null === e3 && A3.legacyNullToEmptyString) return "";
      if ("symbol" == typeof e3) throw new TypeError("Could not convert argument of type symbol to string.");
      return String(e3);
    }, s.converters.ByteString = function(e3) {
      const A3 = s.converters.DOMString(e3);
      for (let e4 = 0; e4 < A3.length; e4++) if (A3.charCodeAt(e4) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e4} has a value of ${A3.charCodeAt(e4)} which is greater than 255.`);
      return A3;
    }, s.converters.USVString = o2, s.converters.boolean = function(e3) {
      return Boolean(e3);
    }, s.converters.any = function(e3) {
      return e3;
    }, s.converters["long long"] = function(e3) {
      return s.util.ConvertToInt(e3, 64, "signed");
    }, s.converters["unsigned long long"] = function(e3) {
      return s.util.ConvertToInt(e3, 64, "unsigned");
    }, s.converters["unsigned long"] = function(e3) {
      return s.util.ConvertToInt(e3, 32, "unsigned");
    }, s.converters["unsigned short"] = function(e3, A3) {
      return s.util.ConvertToInt(e3, 16, "unsigned", A3);
    }, s.converters.ArrayBuffer = function(e3, A3 = {}) {
      if ("Object" !== s.util.Type(e3) || !n2.isAnyArrayBuffer(e3)) throw s.errors.conversionFailed({ prefix: `${e3}`, argument: `${e3}`, types: ["ArrayBuffer"] });
      if (false === A3.allowShared && n2.isSharedArrayBuffer(e3)) throw s.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, s.converters.TypedArray = function(e3, A3, t3 = {}) {
      if ("Object" !== s.util.Type(e3) || !n2.isTypedArray(e3) || e3.constructor.name !== A3.name) throw s.errors.conversionFailed({ prefix: `${A3.name}`, argument: `${e3}`, types: [A3.name] });
      if (false === t3.allowShared && n2.isSharedArrayBuffer(e3.buffer)) throw s.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, s.converters.DataView = function(e3, A3 = {}) {
      if ("Object" !== s.util.Type(e3) || !n2.isDataView(e3)) throw s.errors.exception({ header: "DataView", message: "Object is not a DataView." });
      if (false === A3.allowShared && n2.isSharedArrayBuffer(e3.buffer)) throw s.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, s.converters.BufferSource = function(e3, A3 = {}) {
      if (n2.isAnyArrayBuffer(e3)) return s.converters.ArrayBuffer(e3, A3);
      if (n2.isTypedArray(e3)) return s.converters.TypedArray(e3, e3.constructor);
      if (n2.isDataView(e3)) return s.converters.DataView(e3, A3);
      throw new TypeError(`Could not convert ${e3} to a BufferSource.`);
    }, s.converters["sequence<ByteString>"] = s.sequenceConverter(s.converters.ByteString), s.converters["sequence<sequence<ByteString>>"] = s.sequenceConverter(s.converters["sequence<ByteString>"]), s.converters["record<ByteString, ByteString>"] = s.recordConverter(s.converters.ByteString, s.converters.ByteString), e2.exports = { webidl: s };
  }