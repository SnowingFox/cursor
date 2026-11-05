// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 18193 range:4313545..4322414
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18193: (e, t, r) => {
    "use strict";
    const { types: n } = r(39023), { hasOwn: s, toUSVString: o } = r(98116), i = { converters: {}, util: {}, errors: {} };
    i.errors.exception = function(e2) {
      return new TypeError(`${e2.header}: ${e2.message}`);
    }, i.errors.conversionFailed = function(e2) {
      const t2 = 1 === e2.types.length ? "" : " one of", r2 = `${e2.argument} could not be converted to${t2}: ${e2.types.join(", ")}.`;
      return i.errors.exception({ header: e2.prefix, message: r2 });
    }, i.errors.invalidArgument = function(e2) {
      return i.errors.exception({ header: e2.prefix, message: `"${e2.value}" is an invalid ${e2.type}.` });
    }, i.brandCheck = function(e2, t2, r2 = void 0) {
      if (false === r2?.strict || e2 instanceof t2) return e2?.[Symbol.toStringTag] === t2.prototype[Symbol.toStringTag];
      throw new TypeError("Illegal invocation");
    }, i.argumentLengthCheck = function({ length: e2 }, t2, r2) {
      if (e2 < t2) throw i.errors.exception({ message: `${t2} argument${1 !== t2 ? "s" : ""} required, but${e2 ? " only" : ""} ${e2} found.`, ...r2 });
    }, i.illegalConstructor = function() {
      throw i.errors.exception({ header: "TypeError", message: "Illegal constructor" });
    }, i.util.Type = function(e2) {
      switch (typeof e2) {
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
          return null === e2 ? "Null" : "Object";
      }
    }, i.util.ConvertToInt = function(e2, t2, r2, n2 = {}) {
      let s2, o2;
      64 === t2 ? (s2 = Math.pow(2, 53) - 1, o2 = "unsigned" === r2 ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === r2 ? (o2 = 0, s2 = Math.pow(2, t2) - 1) : (o2 = Math.pow(-2, t2) - 1, s2 = Math.pow(2, t2 - 1) - 1);
      let a = Number(e2);
      if (0 === a && (a = 0), true === n2.enforceRange) {
        if (Number.isNaN(a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY) throw i.errors.exception({ header: "Integer conversion", message: `Could not convert ${e2} to an integer.` });
        if (a = i.util.IntegerPart(a), a < o2 || a > s2) throw i.errors.exception({ header: "Integer conversion", message: `Value must be between ${o2}-${s2}, got ${a}.` });
        return a;
      }
      return Number.isNaN(a) || true !== n2.clamp ? Number.isNaN(a) || 0 === a && Object.is(0, a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY ? 0 : (a = i.util.IntegerPart(a), a %= Math.pow(2, t2), "signed" === r2 && a >= Math.pow(2, t2) - 1 ? a - Math.pow(2, t2) : a) : (a = Math.min(Math.max(a, o2), s2), a = Math.floor(a) % 2 == 0 ? Math.floor(a) : Math.ceil(a), a);
    }, i.util.IntegerPart = function(e2) {
      const t2 = Math.floor(Math.abs(e2));
      return e2 < 0 ? -1 * t2 : t2;
    }, i.sequenceConverter = function(e2) {
      return (t2) => {
        if ("Object" !== i.util.Type(t2)) throw i.errors.exception({ header: "Sequence", message: `Value of type ${i.util.Type(t2)} is not an Object.` });
        const r2 = t2?.[Symbol.iterator]?.(), n2 = [];
        if (void 0 === r2 || "function" != typeof r2.next) throw i.errors.exception({ header: "Sequence", message: "Object is not an iterator." });
        for (; ; ) {
          const { done: t3, value: s2 } = r2.next();
          if (t3) break;
          n2.push(e2(s2));
        }
        return n2;
      };
    }, i.recordConverter = function(e2, t2) {
      return (r2) => {
        if ("Object" !== i.util.Type(r2)) throw i.errors.exception({ header: "Record", message: `Value of type ${i.util.Type(r2)} is not an Object.` });
        const s2 = {};
        if (!n.isProxy(r2)) {
          const n2 = Object.keys(r2);
          for (const o3 of n2) {
            const n3 = e2(o3), i2 = t2(r2[o3]);
            s2[n3] = i2;
          }
          return s2;
        }
        const o2 = Reflect.ownKeys(r2);
        for (const n2 of o2) {
          const o3 = Reflect.getOwnPropertyDescriptor(r2, n2);
          if (o3?.enumerable) {
            const o4 = e2(n2), i2 = t2(r2[n2]);
            s2[o4] = i2;
          }
        }
        return s2;
      };
    }, i.interfaceConverter = function(e2) {
      return (t2, r2 = {}) => {
        if (false !== r2.strict && !(t2 instanceof e2)) throw i.errors.exception({ header: e2.name, message: `Expected ${t2} to be an instance of ${e2.name}.` });
        return t2;
      };
    }, i.dictionaryConverter = function(e2) {
      return (t2) => {
        const r2 = i.util.Type(t2), n2 = {};
        if ("Null" === r2 || "Undefined" === r2) return n2;
        if ("Object" !== r2) throw i.errors.exception({ header: "Dictionary", message: `Expected ${t2} to be one of: Null, Undefined, Object.` });
        for (const r3 of e2) {
          const { key: e3, defaultValue: o2, required: a, converter: c } = r3;
          if (true === a && !s(t2, e3)) throw i.errors.exception({ header: "Dictionary", message: `Missing required key "${e3}".` });
          let l = t2[e3];
          const u = s(r3, "defaultValue");
          if (u && null !== l && (l = l ?? o2), a || u || void 0 !== l) {
            if (l = c(l), r3.allowedValues && !r3.allowedValues.includes(l)) throw i.errors.exception({ header: "Dictionary", message: `${l} is not an accepted type. Expected one of ${r3.allowedValues.join(", ")}.` });
            n2[e3] = l;
          }
        }
        return n2;
      };
    }, i.nullableConverter = function(e2) {
      return (t2) => null === t2 ? t2 : e2(t2);
    }, i.converters.DOMString = function(e2, t2 = {}) {
      if (null === e2 && t2.legacyNullToEmptyString) return "";
      if ("symbol" == typeof e2) throw new TypeError("Could not convert argument of type symbol to string.");
      return String(e2);
    }, i.converters.ByteString = function(e2) {
      const t2 = i.converters.DOMString(e2);
      for (let e3 = 0; e3 < t2.length; e3++) if (t2.charCodeAt(e3) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${e3} has a value of ${t2.charCodeAt(e3)} which is greater than 255.`);
      return t2;
    }, i.converters.USVString = o, i.converters.boolean = function(e2) {
      return Boolean(e2);
    }, i.converters.any = function(e2) {
      return e2;
    }, i.converters["long long"] = function(e2) {
      return i.util.ConvertToInt(e2, 64, "signed");
    }, i.converters["unsigned long long"] = function(e2) {
      return i.util.ConvertToInt(e2, 64, "unsigned");
    }, i.converters["unsigned long"] = function(e2) {
      return i.util.ConvertToInt(e2, 32, "unsigned");
    }, i.converters["unsigned short"] = function(e2, t2) {
      return i.util.ConvertToInt(e2, 16, "unsigned", t2);
    }, i.converters.ArrayBuffer = function(e2, t2 = {}) {
      if ("Object" !== i.util.Type(e2) || !n.isAnyArrayBuffer(e2)) throw i.errors.conversionFailed({ prefix: `${e2}`, argument: `${e2}`, types: ["ArrayBuffer"] });
      if (false === t2.allowShared && n.isSharedArrayBuffer(e2)) throw i.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e2;
    }, i.converters.TypedArray = function(e2, t2, r2 = {}) {
      if ("Object" !== i.util.Type(e2) || !n.isTypedArray(e2) || e2.constructor.name !== t2.name) throw i.errors.conversionFailed({ prefix: `${t2.name}`, argument: `${e2}`, types: [t2.name] });
      if (false === r2.allowShared && n.isSharedArrayBuffer(e2.buffer)) throw i.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e2;
    }, i.converters.DataView = function(e2, t2 = {}) {
      if ("Object" !== i.util.Type(e2) || !n.isDataView(e2)) throw i.errors.exception({ header: "DataView", message: "Object is not a DataView." });
      if (false === t2.allowShared && n.isSharedArrayBuffer(e2.buffer)) throw i.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
      return e2;
    }, i.converters.BufferSource = function(e2, t2 = {}) {
      if (n.isAnyArrayBuffer(e2)) return i.converters.ArrayBuffer(e2, t2);
      if (n.isTypedArray(e2)) return i.converters.TypedArray(e2, e2.constructor);
      if (n.isDataView(e2)) return i.converters.DataView(e2, t2);
      throw new TypeError(`Could not convert ${e2} to a BufferSource.`);
    }, i.converters["sequence<ByteString>"] = i.sequenceConverter(i.converters.ByteString), i.converters["sequence<sequence<ByteString>>"] = i.sequenceConverter(i.converters["sequence<ByteString>"]), i.converters["record<ByteString, ByteString>"] = i.recordConverter(i.converters.ByteString, i.converters.ByteString), e.exports = { webidl: i };
  }