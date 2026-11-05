// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8193 range:5122617..5131581
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8193: (t2, e2, r2) => {
    "use strict";
    const { types: n2 } = r2(9023), { hasOwn: s2, toUSVString: i2 } = r2(8116), o2 = { converters: {}, util: {}, errors: {} };
    o2.errors.exception = function(t3) {
      return new TypeError(`${t3.header}: ${t3.message}`);
    }, o2.errors.conversionFailed = function(t3) {
      const e3 = 1 === t3.types.length ? "" : " one of", r3 = `${t3.argument} could not be converted to${e3}: ${t3.types.join(", ")}.`;
      return o2.errors.exception({ header: t3.prefix, message: r3 });
    }, o2.errors.invalidArgument = function(t3) {
      return o2.errors.exception({ header: t3.prefix, message: `"${t3.value}" is an invalid ${t3.type}.` });
    }, o2.brandCheck = function(t3, e3, r3 = void 0) {
      if (false === r3?.strict || t3 instanceof e3) return t3?.[Symbol.toStringTag] === e3.prototype[Symbol.toStringTag];
      throw new TypeError("Illegal invocation");
    }, o2.argumentLengthCheck = function({ length: t3 }, e3, r3) {
      if (t3 < e3) throw o2.errors.exception({ message: `${e3} argument${1 !== e3 ? "s" : ""} required, but${t3 ? " only" : ""} ${t3} found.`, ...r3 });
    }, o2.illegalConstructor = function() {
      throw o2.errors.exception({ header: "TypeError", message: "Illegal constructor" });
    }, o2.util.Type = function(t3) {
      switch (typeof t3) {
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
          return null === t3 ? "Null" : "Object";
      }
    }, o2.util.ConvertToInt = function(t3, e3, r3, n3 = {}) {
      let s3, i3;
      64 === e3 ? (s3 = Math.pow(2, 53) - 1, i3 = "unsigned" === r3 ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === r3 ? (i3 = 0, s3 = Math.pow(2, e3) - 1) : (i3 = Math.pow(-2, e3) - 1, s3 = Math.pow(2, e3 - 1) - 1);
      let a = Number(t3);
      if (0 === a && (a = 0), true === n3.enforceRange) {
        if (Number.isNaN(a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY) throw o2.errors.exception({ header: "Integer conversion", message: `Could not convert ${t3} to an integer.` });
        if (a = o2.util.IntegerPart(a), a < i3 || a > s3) throw o2.errors.exception({ header: "Integer conversion", message: `Value must be between ${i3}-${s3}, got ${a}.` });
        return a;
      }
      return Number.isNaN(a) || true !== n3.clamp ? Number.isNaN(a) || 0 === a && Object.is(0, a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY ? 0 : (a = o2.util.IntegerPart(a), a %= Math.pow(2, e3), "signed" === r3 && a >= Math.pow(2, e3) - 1 ? a - Math.pow(2, e3) : a) : (a = Math.min(Math.max(a, i3), s3), a = Math.floor(a) % 2 == 0 ? Math.floor(a) : Math.ceil(a), a);
    }, o2.util.IntegerPart = function(t3) {
      const e3 = Math.floor(Math.abs(t3));
      return t3 < 0 ? -1 * e3 : e3;
    }, o2.sequenceConverter = function(t3) {
      return (e3) => {
        if ("Object" !== o2.util.Type(e3)) throw o2.errors.exception({ header: "Sequence", message: `Value of type ${o2.util.Type(e3)} is not an Object.` });
        const r3 = e3?.[Symbol.iterator]?.(), n3 = [];
        if (void 0 === r3 || "function" != typeof r3.next) throw o2.errors.exception({ header: "Sequence", message: "Object is not an iterator." });
        for (; ; ) {
          const { done: e4, value: s3 } = r3.next();
          if (e4) break;
          n3.push(t3(s3));
        }
        return n3;
      };
    }, o2.recordConverter = function(t3, e3) {
      return (r3) => {
        if ("Object" !== o2.util.Type(r3)) throw o2.errors.exception({ header: "Record", message: `Value of type ${o2.util.Type(r3)} is not an Object.` });
        const s3 = {};
        if (!n2.isProxy(r3)) {
          const n3 = Object.keys(r3);
          for (const i4 of n3) {
            const n4 = t3(i4), o3 = e3(r3[i4]);
            s3[n4] = o3;
          }
          return s3;
        }
        const i3 = Reflect.ownKeys(r3);
        for (const n3 of i3) {
          const i4 = Reflect.getOwnPropertyDescriptor(r3, n3);
          if (i4?.enumerable) {
            const i5 = t3(n3), o3 = e3(r3[n3]);
            s3[i5] = o3;
          }
        }
        return s3;
      };
    }, o2.interfaceConverter = function(t3) {
      return (e3, r3 = {}) => {
        if (false !== r3.strict && !(e3 instanceof t3)) throw o2.errors.exception({ header: t3.name, message: `Expected ${e3} to be an instance of ${t3.name}.` });
        return e3;
      };
    }, o2.dictionaryConverter = function(t3) {
      return (e3) => {
        const r3 = o2.util.Type(e3), n3 = {};
        if ("Null" === r3 || "Undefined" === r3) return n3;
        if ("Object" !== r3) throw o2.errors.exception({ header: "Dictionary", message: `Expected ${e3} to be one of: Null, Undefined, Object.` });
        for (const r4 of t3) {
          const { key: t4, defaultValue: i3, required: a, converter: u } = r4;
          if (true === a && !s2(e3, t4)) throw o2.errors.exception({ header: "Dictionary", message: `Missing required key "${t4}".` });
          let c = e3[t4];
          const l = s2(r4, "defaultValue");
          if (l && null !== c && (c = c ?? i3), a || l || void 0 !== c) {
            if (c = u(c), r4.allowedValues && !r4.allowedValues.includes(c)) throw o2.errors.exception({ header: "Dictionary", message: `${c} is not an accepted type. Expected one of ${r4.allowedValues.join(", ")}.` });
            n3[t4] = c;
          }
        }
        return n3;
      };
    }, o2.nullableConverter = function(t3) {
      return (e3) => null === e3 ? e3 : t3(e3);
    }, o2.converters.DOMString = function(t3, e3 = {}) {
      if (null === t3 && e3.legacyNullToEmptyString) return "";
      if ("symbol" == typeof t3) throw new TypeError("Could not convert argument of type symbol to string.");
      return String(t3);
    }, o2.converters.ByteString = function(t3) {
      const e3 = o2.converters.DOMString(t3);
      for (let t4 = 0; t4 < e3.length; t4++) if (e3.charCodeAt(t4) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${t4} has a value of ${e3.charCodeAt(t4)} which is greater than 255.`);
      return e3;
    }, o2.converters.USVString = i2, o2.converters.boolean = function(t3) {
      return Boolean(t3);
    }, o2.converters.any = function(t3) {
      return t3;
    }, o2.converters["long long"] = function(t3) {
      return o2.util.ConvertToInt(t3, 64, "signed");
    }, o2.converters["unsigned long long"] = function(t3) {
      return o2.util.ConvertToInt(t3, 64, "unsigned");
    }, o2.converters["unsigned long"] = function(t3) {
      return o2.util.ConvertToInt(t3, 32, "unsigned");
    }, o2.converters["unsigned short"] = function(t3, e3) {
      return o2.util.ConvertToInt(t3, 16, "unsigned", e3);
    }, o2.converters.ArrayBuffer = function(t3, e3 = {}) {
      if ("Object" !== o2.util.Type(t3) || !n2.isAnyArrayBuffer(t3)) throw o2.errors.conversionFailed({ prefix: `${t3}`, argument: `${t3}`, types: ["ArrayBuffer"] });
      if (false === e3.allowShared && n2.isSharedArrayBuffer(t3)) throw o2.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return t3;
    }, o2.converters.TypedArray = function(t3, e3, r3 = {}) {
      if ("Object" !== o2.util.Type(t3) || !n2.isTypedArray(t3) || t3.constructor.name !== e3.name) throw o2.errors.conversionFailed({ prefix: `${e3.name}`, argument: `${t3}`, types: [e3.name] });
      if (false === r3.allowShared && n2.isSharedArrayBuffer(t3.buffer)) throw o2.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return t3;
    }, o2.converters.DataView = function(t3, e3 = {}) {
      if ("Object" !== o2.util.Type(t3) || !n2.isDataView(t3)) throw o2.errors.exception({ header: "DataView", message: "Object is not a DataView." });
      if (false === e3.allowShared && n2.isSharedArrayBuffer(t3.buffer)) throw o2.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return t3;
    }, o2.converters.BufferSource = function(t3, e3 = {}) {
      if (n2.isAnyArrayBuffer(t3)) return o2.converters.ArrayBuffer(t3, e3);
      if (n2.isTypedArray(t3)) return o2.converters.TypedArray(t3, t3.constructor);
      if (n2.isDataView(t3)) return o2.converters.DataView(t3, e3);
      throw new TypeError(`Could not convert ${t3} to a BufferSource.`);
    }, o2.converters["sequence<ByteString>"] = o2.sequenceConverter(o2.converters.ByteString), o2.converters["sequence<sequence<ByteString>>"] = o2.sequenceConverter(o2.converters["sequence<ByteString>"]), o2.converters["record<ByteString, ByteString>"] = o2.recordConverter(o2.converters.ByteString, o2.converters.ByteString), t2.exports = { webidl: o2 };
  }