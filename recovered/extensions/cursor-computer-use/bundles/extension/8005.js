// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8005 range:641533..650421
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8005: (e2, n2, t2) => {
    "use strict";
    const { types: a2 } = t2(9023), { hasOwn: s2, toUSVString: o2 } = t2(5728), r = { converters: {}, util: {}, errors: {} };
    r.errors.exception = function(e3) {
      return new TypeError(`${e3.header}: ${e3.message}`);
    }, r.errors.conversionFailed = function(e3) {
      const n3 = 1 === e3.types.length ? "" : " one of", t3 = `${e3.argument} could not be converted to${n3}: ${e3.types.join(", ")}.`;
      return r.errors.exception({ header: e3.prefix, message: t3 });
    }, r.errors.invalidArgument = function(e3) {
      return r.errors.exception({ header: e3.prefix, message: `"${e3.value}" is an invalid ${e3.type}.` });
    }, r.brandCheck = function(e3, n3, t3 = void 0) {
      if (false === t3?.strict || e3 instanceof n3) return e3?.[Symbol.toStringTag] === n3.prototype[Symbol.toStringTag];
      throw new TypeError("Illegal invocation");
    }, r.argumentLengthCheck = function({ length: e3 }, n3, t3) {
      if (e3 < n3) throw r.errors.exception({ message: `${n3} argument${1 !== n3 ? "s" : ""} required, but${e3 ? " only" : ""} ${e3} found.`, ...t3 });
    }, r.illegalConstructor = function() {
      throw r.errors.exception({ header: "TypeError", message: "Illegal constructor" });
    }, r.util.Type = function(e3) {
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
    }, r.util.ConvertToInt = function(e3, n3, t3, a3 = {}) {
      let s3, o3;
      64 === n3 ? (s3 = Math.pow(2, 53) - 1, o3 = "unsigned" === t3 ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === t3 ? (o3 = 0, s3 = Math.pow(2, n3) - 1) : (o3 = Math.pow(-2, n3) - 1, s3 = Math.pow(2, n3 - 1) - 1);
      let i = Number(e3);
      if (0 === i && (i = 0), true === a3.enforceRange) {
        if (Number.isNaN(i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY) throw r.errors.exception({ header: "Integer conversion", message: `Could not convert ${e3} to an integer.` });
        if (i = r.util.IntegerPart(i), i < o3 || i > s3) throw r.errors.exception({ header: "Integer conversion", message: `Value must be between ${o3}-${s3}, got ${i}.` });
        return i;
      }
      return Number.isNaN(i) || true !== a3.clamp ? Number.isNaN(i) || 0 === i && Object.is(0, i) || i === Number.POSITIVE_INFINITY || i === Number.NEGATIVE_INFINITY ? 0 : (i = r.util.IntegerPart(i), i %= Math.pow(2, n3), "signed" === t3 && i >= Math.pow(2, n3) - 1 ? i - Math.pow(2, n3) : i) : (i = Math.min(Math.max(i, o3), s3), i = Math.floor(i) % 2 == 0 ? Math.floor(i) : Math.ceil(i), i);
    }, r.util.IntegerPart = function(e3) {
      const n3 = Math.floor(Math.abs(e3));
      return e3 < 0 ? -1 * n3 : n3;
    }, r.sequenceConverter = function(e3) {
      return (n3) => {
        if ("Object" !== r.util.Type(n3)) throw r.errors.exception({ header: "Sequence", message: `Value of type ${r.util.Type(n3)} is not an Object.` });
        const t3 = n3?.[Symbol.iterator]?.(), a3 = [];
        if (void 0 === t3 || "function" != typeof t3.next) throw r.errors.exception({ header: "Sequence", message: "Object is not an iterator." });
        for (; ; ) {
          const { done: n4, value: s3 } = t3.next();
          if (n4) break;
          a3.push(e3(s3));
        }
        return a3;
      };
    }, r.recordConverter = function(e3, n3) {
      return (t3) => {
        if ("Object" !== r.util.Type(t3)) throw r.errors.exception({ header: "Record", message: `Value of type ${r.util.Type(t3)} is not an Object.` });
        const s3 = {};
        if (!a2.isProxy(t3)) {
          const a3 = Object.keys(t3);
          for (const o4 of a3) {
            const a4 = e3(o4), r2 = n3(t3[o4]);
            s3[a4] = r2;
          }
          return s3;
        }
        const o3 = Reflect.ownKeys(t3);
        for (const a3 of o3) {
          const o4 = Reflect.getOwnPropertyDescriptor(t3, a3);
          if (o4?.enumerable) {
            const o5 = e3(a3), r2 = n3(t3[a3]);
            s3[o5] = r2;
          }
        }
        return s3;
      };
    }, r.interfaceConverter = function(e3) {
      return (n3, t3 = {}) => {
        if (false !== t3.strict && !(n3 instanceof e3)) throw r.errors.exception({ header: e3.name, message: `Expected ${n3} to be an instance of ${e3.name}.` });
        return n3;
      };
    }, r.dictionaryConverter = function(e3) {
      return (n3) => {
        const t3 = r.util.Type(n3), a3 = {};
        if ("Null" === t3 || "Undefined" === t3) return a3;
        if ("Object" !== t3) throw r.errors.exception({ header: "Dictionary", message: `Expected ${n3} to be one of: Null, Undefined, Object.` });
        for (const t4 of e3) {
          const { key: e4, defaultValue: o3, required: i, converter: A } = t4;
          if (true === i && !s2(n3, e4)) throw r.errors.exception({ header: "Dictionary", message: `Missing required key "${e4}".` });
          let c = n3[e4];
          const l = s2(t4, "defaultValue");
          if (l && null !== c && (c = c ?? o3), i || l || void 0 !== c) {
            if (c = A(c), t4.allowedValues && !t4.allowedValues.includes(c)) throw r.errors.exception({ header: "Dictionary", message: `${c} is not an accepted type. Expected one of ${t4.allowedValues.join(", ")}.` });
            a3[e4] = c;
          }
        }
        return a3;
      };
    }, r.nullableConverter = function(e3) {
      return (n3) => null === n3 ? n3 : e3(n3);
    }, r.converters.DOMString = function(e3, n3 = {}) {
      if (null === e3 && n3.legacyNullToEmptyString) return "";
      if ("symbol" == typeof e3) throw new TypeError("Could not convert argument of type symbol to string.");
      return String(e3);
    }, r.converters.ByteString = function(e3) {
      const n3 = r.converters.DOMString(e3);
      for (let e4 = 0; e4 < n3.length; e4++) if (n3.charCodeAt(e4) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e4} has a value of ${n3.charCodeAt(e4)} which is greater than 255.`);
      return n3;
    }, r.converters.USVString = o2, r.converters.boolean = function(e3) {
      return Boolean(e3);
    }, r.converters.any = function(e3) {
      return e3;
    }, r.converters["long long"] = function(e3) {
      return r.util.ConvertToInt(e3, 64, "signed");
    }, r.converters["unsigned long long"] = function(e3) {
      return r.util.ConvertToInt(e3, 64, "unsigned");
    }, r.converters["unsigned long"] = function(e3) {
      return r.util.ConvertToInt(e3, 32, "unsigned");
    }, r.converters["unsigned short"] = function(e3, n3) {
      return r.util.ConvertToInt(e3, 16, "unsigned", n3);
    }, r.converters.ArrayBuffer = function(e3, n3 = {}) {
      if ("Object" !== r.util.Type(e3) || !a2.isAnyArrayBuffer(e3)) throw r.errors.conversionFailed({ prefix: `${e3}`, argument: `${e3}`, types: ["ArrayBuffer"] });
      if (false === n3.allowShared && a2.isSharedArrayBuffer(e3)) throw r.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, r.converters.TypedArray = function(e3, n3, t3 = {}) {
      if ("Object" !== r.util.Type(e3) || !a2.isTypedArray(e3) || e3.constructor.name !== n3.name) throw r.errors.conversionFailed({ prefix: `${n3.name}`, argument: `${e3}`, types: [n3.name] });
      if (false === t3.allowShared && a2.isSharedArrayBuffer(e3.buffer)) throw r.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, r.converters.DataView = function(e3, n3 = {}) {
      if ("Object" !== r.util.Type(e3) || !a2.isDataView(e3)) throw r.errors.exception({ header: "DataView", message: "Object is not a DataView." });
      if (false === n3.allowShared && a2.isSharedArrayBuffer(e3.buffer)) throw r.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e3;
    }, r.converters.BufferSource = function(e3, n3 = {}) {
      if (a2.isAnyArrayBuffer(e3)) return r.converters.ArrayBuffer(e3, n3);
      if (a2.isTypedArray(e3)) return r.converters.TypedArray(e3, e3.constructor);
      if (a2.isDataView(e3)) return r.converters.DataView(e3, n3);
      throw new TypeError(`Could not convert ${e3} to a BufferSource.`);
    }, r.converters["sequence<ByteString>"] = r.sequenceConverter(r.converters.ByteString), r.converters["sequence<sequence<ByteString>>"] = r.sequenceConverter(r.converters["sequence<ByteString>"]), r.converters["record<ByteString, ByteString>"] = r.recordConverter(r.converters.ByteString, r.converters.ByteString), e2.exports = { webidl: r };
  }