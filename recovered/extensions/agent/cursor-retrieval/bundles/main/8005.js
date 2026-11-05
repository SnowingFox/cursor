// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8005 range:931911..940909
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8005: (e2, a2, n2) => {
    "use strict";
    const { types: t2 } = n2(9023), { hasOwn: s2, toUSVString: o2 } = n2(5728), r2 = { converters: {}, util: {}, errors: {} };
    r2.errors.exception = function(e3) {
      return new TypeError(`${e3.header}: ${e3.message}`);
    }, r2.errors.conversionFailed = function(e3) {
      const a3 = 1 === e3.types.length ? "" : " one of", n3 = `${e3.argument} could not be converted to${a3}: ${e3.types.join(", ")}.`;
      return r2.errors.exception({ header: e3.prefix, message: n3 });
    }, r2.errors.invalidArgument = function(e3) {
      return r2.errors.exception({ header: e3.prefix, message: `"${e3.value}" is an invalid ${e3.type}.` });
    }, r2.brandCheck = function(e3, a3, n3 = void 0) {
      if (false === n3?.strict || e3 instanceof a3) return e3?.[Symbol.toStringTag] === a3.prototype[Symbol.toStringTag];
      throw new TypeError("Illegal invocation");
    }, r2.argumentLengthCheck = function({ length: e3 }, a3, n3) {
      if (e3 < a3) throw r2.errors.exception({ message: `${a3} argument${1 !== a3 ? "s" : ""} required, but${e3 ? " only" : ""} ${e3} found.`, ...n3 });
    }, r2.illegalConstructor = function() {
      throw r2.errors.exception({ header: "TypeError", message: "Illegal constructor" });
    }, r2.util.Type = function(e3) {
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
    }, r2.util.ConvertToInt = function(e3, a3, n3, t3 = {}) {
      let s3, o3;
      64 === a3 ? (s3 = Math.pow(2, 53) - 1, o3 = "unsigned" === n3 ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === n3 ? (o3 = 0, s3 = Math.pow(2, a3) - 1) : (o3 = Math.pow(-2, a3) - 1, s3 = Math.pow(2, a3 - 1) - 1);
      let i2 = Number(e3);
      if (0 === i2 && (i2 = 0), true === t3.enforceRange) {
        if (Number.isNaN(i2) || i2 === Number.POSITIVE_INFINITY || i2 === Number.NEGATIVE_INFINITY) throw r2.errors.exception({ header: "Integer conversion", message: `Could not convert ${e3} to an integer.` });
        if (i2 = r2.util.IntegerPart(i2), i2 < o3 || i2 > s3) throw r2.errors.exception({ header: "Integer conversion", message: `Value must be between ${o3}-${s3}, got ${i2}.` });
        return i2;
      }
      return Number.isNaN(i2) || true !== t3.clamp ? Number.isNaN(i2) || 0 === i2 && Object.is(0, i2) || i2 === Number.POSITIVE_INFINITY || i2 === Number.NEGATIVE_INFINITY ? 0 : (i2 = r2.util.IntegerPart(i2), i2 %= Math.pow(2, a3), "signed" === n3 && i2 >= Math.pow(2, a3) - 1 ? i2 - Math.pow(2, a3) : i2) : (i2 = Math.min(Math.max(i2, o3), s3), i2 = Math.floor(i2) % 2 == 0 ? Math.floor(i2) : Math.ceil(i2), i2);
    }, r2.util.IntegerPart = function(e3) {
      const a3 = Math.floor(Math.abs(e3));
      return e3 < 0 ? -1 * a3 : a3;
    }, r2.sequenceConverter = function(e3) {
      return (a3) => {
        if ("Object" !== r2.util.Type(a3)) throw r2.errors.exception({ header: "Sequence", message: `Value of type ${r2.util.Type(a3)} is not an Object.` });
        const n3 = a3?.[Symbol.iterator]?.(), t3 = [];
        if (void 0 === n3 || "function" != typeof n3.next) throw r2.errors.exception({ header: "Sequence", message: "Object is not an iterator." });
        for (; ; ) {
          const { done: a4, value: s3 } = n3.next();
          if (a4) break;
          t3.push(e3(s3));
        }
        return t3;
      };
    }, r2.recordConverter = function(e3, a3) {
      return (n3) => {
        if ("Object" !== r2.util.Type(n3)) throw r2.errors.exception({ header: "Record", message: `Value of type ${r2.util.Type(n3)} is not an Object.` });
        const s3 = {};
        if (!t2.isProxy(n3)) {
          const t3 = Object.keys(n3);
          for (const o4 of t3) {
            const t4 = e3(o4), r3 = a3(n3[o4]);
            s3[t4] = r3;
          }
          return s3;
        }
        const o3 = Reflect.ownKeys(n3);
        for (const t3 of o3) {
          const o4 = Reflect.getOwnPropertyDescriptor(n3, t3);
          if (o4?.enumerable) {
            const o5 = e3(t3), r3 = a3(n3[t3]);
            s3[o5] = r3;
          }
        }
        return s3;
      };
    }, r2.interfaceConverter = function(e3) {
      return (a3, n3 = {}) => {
        if (false !== n3.strict && !(a3 instanceof e3)) throw r2.errors.exception({ header: e3.name, message: `Expected ${a3} to be an instance of ${e3.name}.` });
        return a3;
      };
    }, r2.dictionaryConverter = function(e3) {
      return (a3) => {
        const n3 = r2.util.Type(a3), t3 = {};
        if ("Null" === n3 || "Undefined" === n3) return t3;
        if ("Object" !== n3) throw r2.errors.exception({ header: "Dictionary", message: `Expected ${a3} to be one of: Null, Undefined, Object.` });
        for (const n4 of e3) {
          const { key: e4, defaultValue: o3, required: i2, converter: l } = n4;
          if (true === i2 && !s2(a3, e4)) throw r2.errors.exception({ header: "Dictionary", message: `Missing required key "${e4}".` });
          let d = a3[e4];
          const m = s2(n4, "defaultValue");
          if (m && null !== d && (d = d ?? o3), i2 || m || void 0 !== d) {
            if (d = l(d), n4.allowedValues && !n4.allowedValues.includes(d)) throw r2.errors.exception({ header: "Dictionary", message: `${d} is not an accepted type. Expected one of ${n4.allowedValues.join(", ")}.` });
            t3[e4] = d;
          }
        }
        return t3;
      };
    }, r2.nullableConverter = function(e3) {
      return (a3) => null === a3 ? a3 : e3(a3);
    }, r2.converters.DOMString = function(e3, a3 = {}) {
      if (null === e3 && a3.legacyNullToEmptyString) return "";
      if ("symbol" == typeof e3) throw new TypeError("Could not convert argument of type symbol to string.");
      return String(e3);
    }, r2.converters.ByteString = function(e3) {
      const a3 = r2.converters.DOMString(e3);
      for (let e4 = 0; e4 < a3.length; e4++) if (a3.charCodeAt(e4) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e4} has a value of ${a3.charCodeAt(e4)} which is greater than 255.`);
      return a3;
    }, r2.converters.USVString = o2, r2.converters.boolean = function(e3) {
      return Boolean(e3);
    }, r2.converters.any = function(e3) {
      return e3;
    }, r2.converters["long long"] = function(e3) {
      return r2.util.ConvertToInt(e3, 64, "signed");
    }, r2.converters["unsigned long long"] = function(e3) {
      return r2.util.ConvertToInt(e3, 64, "unsigned");
    }, r2.converters["unsigned long"] = function(e3) {
      return r2.util.ConvertToInt(e3, 32, "unsigned");
    }, r2.converters["unsigned short"] = function(e3, a3) {
      return r2.util.ConvertToInt(e3, 16, "unsigned", a3);
    }, r2.converters.ArrayBuffer = function(e3, a3 = {}) {
      if ("Object" !== r2.util.Type(e3) || !t2.isAnyArrayBuffer(e3)) throw r2.errors.conversionFailed({ prefix: `${e3}`, argument: `${e3}`, types: ["ArrayBuffer"] });
      if (false === a3.allowShared && t2.isSharedArrayBuffer(e3)) throw r2.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, r2.converters.TypedArray = function(e3, a3, n3 = {}) {
      if ("Object" !== r2.util.Type(e3) || !t2.isTypedArray(e3) || e3.constructor.name !== a3.name) throw r2.errors.conversionFailed({ prefix: `${a3.name}`, argument: `${e3}`, types: [a3.name] });
      if (false === n3.allowShared && t2.isSharedArrayBuffer(e3.buffer)) throw r2.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, r2.converters.DataView = function(e3, a3 = {}) {
      if ("Object" !== r2.util.Type(e3) || !t2.isDataView(e3)) throw r2.errors.exception({ header: "DataView", message: "Object is not a DataView." });
      if (false === a3.allowShared && t2.isSharedArrayBuffer(e3.buffer)) throw r2.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, r2.converters.BufferSource = function(e3, a3 = {}) {
      if (t2.isAnyArrayBuffer(e3)) return r2.converters.ArrayBuffer(e3, a3);
      if (t2.isTypedArray(e3)) return r2.converters.TypedArray(e3, e3.constructor);
      if (t2.isDataView(e3)) return r2.converters.DataView(e3, a3);
      throw new TypeError(`Could not convert ${e3} to a BufferSource.`);
    }, r2.converters["sequence<ByteString>"] = r2.sequenceConverter(r2.converters.ByteString), r2.converters["sequence<sequence<ByteString>>"] = r2.sequenceConverter(r2.converters["sequence<ByteString>"]), r2.converters["record<ByteString, ByteString>"] = r2.recordConverter(r2.converters.ByteString, r2.converters.ByteString), e2.exports = { webidl: r2 };
  }