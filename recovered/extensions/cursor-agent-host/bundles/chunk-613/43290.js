// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 43290 range:236512..246687
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43290: (A, e, t) => {
  "use strict";
  const { types: r, inspect: s } = t(57975), { markAsUncloneable: o } = t(75919), { toUSVString: n } = t(55201), i = { converters: {}, util: {}, errors: {} };
  i.errors.exception = function(A2) {
    return new TypeError(`${A2.header}: ${A2.message}`);
  }, i.errors.conversionFailed = function(A2) {
    const e2 = 1 === A2.types.length ? "" : " one of", t2 = `${A2.argument} could not be converted to${e2}: ${A2.types.join(", ")}.`;
    return i.errors.exception({ header: A2.prefix, message: t2 });
  }, i.errors.invalidArgument = function(A2) {
    return i.errors.exception({ header: A2.prefix, message: `"${A2.value}" is an invalid ${A2.type}.` });
  }, i.brandCheck = function(A2, e2, t2) {
    if (false !== t2?.strict) {
      if (!(A2 instanceof e2)) {
        const A3 = new TypeError("Illegal invocation");
        throw A3.code = "ERR_INVALID_THIS", A3;
      }
    } else if (A2?.[Symbol.toStringTag] !== e2.prototype[Symbol.toStringTag]) {
      const A3 = new TypeError("Illegal invocation");
      throw A3.code = "ERR_INVALID_THIS", A3;
    }
  }, i.argumentLengthCheck = function({ length: A2 }, e2, t2) {
    if (A2 < e2) throw i.errors.exception({ message: `${e2} argument${1 !== e2 ? "s" : ""} required, but${A2 ? " only" : ""} ${A2} found.`, header: t2 });
  }, i.illegalConstructor = function() {
    throw i.errors.exception({ header: "TypeError", message: "Illegal constructor" });
  }, i.util.Type = function(A2) {
    switch (typeof A2) {
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
        return null === A2 ? "Null" : "Object";
    }
  }, i.util.markAsUncloneable = o || (() => {
  }), i.util.ConvertToInt = function(A2, e2, t2, r2) {
    let s2, o2;
    64 === e2 ? (s2 = Math.pow(2, 53) - 1, o2 = "unsigned" === t2 ? 0 : Math.pow(-2, 53) + 1) : "unsigned" === t2 ? (o2 = 0, s2 = Math.pow(2, e2) - 1) : (o2 = Math.pow(-2, e2) - 1, s2 = Math.pow(2, e2 - 1) - 1);
    let n2 = Number(A2);
    if (0 === n2 && (n2 = 0), true === r2?.enforceRange) {
      if (Number.isNaN(n2) || n2 === Number.POSITIVE_INFINITY || n2 === Number.NEGATIVE_INFINITY) throw i.errors.exception({ header: "Integer conversion", message: `Could not convert ${i.util.Stringify(A2)} to an integer.` });
      if (n2 = i.util.IntegerPart(n2), n2 < o2 || n2 > s2) throw i.errors.exception({ header: "Integer conversion", message: `Value must be between ${o2}-${s2}, got ${n2}.` });
      return n2;
    }
    return Number.isNaN(n2) || true !== r2?.clamp ? Number.isNaN(n2) || 0 === n2 && Object.is(0, n2) || n2 === Number.POSITIVE_INFINITY || n2 === Number.NEGATIVE_INFINITY ? 0 : (n2 = i.util.IntegerPart(n2), n2 %= Math.pow(2, e2), "signed" === t2 && n2 >= Math.pow(2, e2) - 1 ? n2 - Math.pow(2, e2) : n2) : (n2 = Math.min(Math.max(n2, o2), s2), n2 = Math.floor(n2) % 2 == 0 ? Math.floor(n2) : Math.ceil(n2), n2);
  }, i.util.IntegerPart = function(A2) {
    const e2 = Math.floor(Math.abs(A2));
    return A2 < 0 ? -1 * e2 : e2;
  }, i.util.Stringify = function(A2) {
    switch (i.util.Type(A2)) {
      case "Symbol":
        return `Symbol(${A2.description})`;
      case "Object":
        return s(A2);
      case "String":
        return `"${A2}"`;
      default:
        return `${A2}`;
    }
  }, i.sequenceConverter = function(A2) {
    return (e2, t2, r2, s2) => {
      if ("Object" !== i.util.Type(e2)) throw i.errors.exception({ header: t2, message: `${r2} (${i.util.Stringify(e2)}) is not iterable.` });
      const o2 = "function" == typeof s2 ? s2() : e2?.[Symbol.iterator]?.(), n2 = [];
      let a = 0;
      if (void 0 === o2 || "function" != typeof o2.next) throw i.errors.exception({ header: t2, message: `${r2} is not iterable.` });
      for (; ; ) {
        const { done: e3, value: s3 } = o2.next();
        if (e3) break;
        n2.push(A2(s3, t2, `${r2}[${a++}]`));
      }
      return n2;
    };
  }, i.recordConverter = function(A2, e2) {
    return (t2, s2, o2) => {
      if ("Object" !== i.util.Type(t2)) throw i.errors.exception({ header: s2, message: `${o2} ("${i.util.Type(t2)}") is not an Object.` });
      const n2 = {};
      if (!r.isProxy(t2)) {
        const r2 = [...Object.getOwnPropertyNames(t2), ...Object.getOwnPropertySymbols(t2)];
        for (const i2 of r2) {
          const r3 = A2(i2, s2, o2), a2 = e2(t2[i2], s2, o2);
          n2[r3] = a2;
        }
        return n2;
      }
      const a = Reflect.ownKeys(t2);
      for (const r2 of a) {
        const i2 = Reflect.getOwnPropertyDescriptor(t2, r2);
        if (i2?.enumerable) {
          const i3 = A2(r2, s2, o2), a2 = e2(t2[r2], s2, o2);
          n2[i3] = a2;
        }
      }
      return n2;
    };
  }, i.interfaceConverter = function(A2) {
    return (e2, t2, r2, s2) => {
      if (false !== s2?.strict && !(e2 instanceof A2)) throw i.errors.exception({ header: t2, message: `Expected ${r2} ("${i.util.Stringify(e2)}") to be an instance of ${A2.name}.` });
      return e2;
    };
  }, i.dictionaryConverter = function(A2) {
    return (e2, t2, r2) => {
      const s2 = i.util.Type(e2), o2 = {};
      if ("Null" === s2 || "Undefined" === s2) return o2;
      if ("Object" !== s2) throw i.errors.exception({ header: t2, message: `Expected ${e2} to be one of: Null, Undefined, Object.` });
      for (const s3 of A2) {
        const { key: A3, defaultValue: n2, required: a, converter: Q } = s3;
        if (true === a && !Object.hasOwn(e2, A3)) throw i.errors.exception({ header: t2, message: `Missing required key "${A3}".` });
        let g = e2[A3];
        const E = Object.hasOwn(s3, "defaultValue");
        if (E && null !== g && (g ??= n2()), a || E || void 0 !== g) {
          if (g = Q(g, t2, `${r2}.${A3}`), s3.allowedValues && !s3.allowedValues.includes(g)) throw i.errors.exception({ header: t2, message: `${g} is not an accepted type. Expected one of ${s3.allowedValues.join(", ")}.` });
          o2[A3] = g;
        }
      }
      return o2;
    };
  }, i.nullableConverter = function(A2) {
    return (e2, t2, r2) => null === e2 ? e2 : A2(e2, t2, r2);
  }, i.converters.DOMString = function(A2, e2, t2, r2) {
    if (null === A2 && r2?.legacyNullToEmptyString) return "";
    if ("symbol" == typeof A2) throw i.errors.exception({ header: e2, message: `${t2} is a symbol, which cannot be converted to a DOMString.` });
    return String(A2);
  }, i.converters.ByteString = function(A2, e2, t2) {
    const r2 = i.converters.DOMString(A2, e2, t2);
    for (let A3 = 0; A3 < r2.length; A3++) if (r2.charCodeAt(A3) > 255) throw new TypeError(`Cannot convert argument to a ByteString because the character at index ${A3} has a value of ${r2.charCodeAt(A3)} which is greater than 255.`);
    return r2;
  }, i.converters.USVString = n, i.converters.boolean = function(A2) {
    return Boolean(A2);
  }, i.converters.any = function(A2) {
    return A2;
  }, i.converters["long long"] = function(A2, e2, t2) {
    return i.util.ConvertToInt(A2, 64, "signed", void 0, e2, t2);
  }, i.converters["unsigned long long"] = function(A2, e2, t2) {
    return i.util.ConvertToInt(A2, 64, "unsigned", void 0, e2, t2);
  }, i.converters["unsigned long"] = function(A2, e2, t2) {
    return i.util.ConvertToInt(A2, 32, "unsigned", void 0, e2, t2);
  }, i.converters["unsigned short"] = function(A2, e2, t2, r2) {
    return i.util.ConvertToInt(A2, 16, "unsigned", r2, e2, t2);
  }, i.converters.ArrayBuffer = function(A2, e2, t2, s2) {
    if ("Object" !== i.util.Type(A2) || !r.isAnyArrayBuffer(A2)) throw i.errors.conversionFailed({ prefix: e2, argument: `${t2} ("${i.util.Stringify(A2)}")`, types: ["ArrayBuffer"] });
    if (false === s2?.allowShared && r.isSharedArrayBuffer(A2)) throw i.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
    if (A2.resizable || A2.growable) throw i.errors.exception({ header: "ArrayBuffer", message: "Received a resizable ArrayBuffer." });
    return A2;
  }, i.converters.TypedArray = function(A2, e2, t2, s2, o2) {
    if ("Object" !== i.util.Type(A2) || !r.isTypedArray(A2) || A2.constructor.name !== e2.name) throw i.errors.conversionFailed({ prefix: t2, argument: `${s2} ("${i.util.Stringify(A2)}")`, types: [e2.name] });
    if (false === o2?.allowShared && r.isSharedArrayBuffer(A2.buffer)) throw i.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
    if (A2.buffer.resizable || A2.buffer.growable) throw i.errors.exception({ header: "ArrayBuffer", message: "Received a resizable ArrayBuffer." });
    return A2;
  }, i.converters.DataView = function(A2, e2, t2, s2) {
    if ("Object" !== i.util.Type(A2) || !r.isDataView(A2)) throw i.errors.exception({ header: e2, message: `${t2} is not a DataView.` });
    if (false === s2?.allowShared && r.isSharedArrayBuffer(A2.buffer)) throw i.errors.exception({ header: "ArrayBuffer", message: "SharedArrayBuffer is not allowed." });
    if (A2.buffer.resizable || A2.buffer.growable) throw i.errors.exception({ header: "ArrayBuffer", message: "Received a resizable ArrayBuffer." });
    return A2;
  }, i.converters.BufferSource = function(A2, e2, t2, s2) {
    if (r.isAnyArrayBuffer(A2)) return i.converters.ArrayBuffer(A2, e2, t2, { ...s2, allowShared: false });
    if (r.isTypedArray(A2)) return i.converters.TypedArray(A2, A2.constructor, e2, t2, { ...s2, allowShared: false });
    if (r.isDataView(A2)) return i.converters.DataView(A2, e2, t2, { ...s2, allowShared: false });
    throw i.errors.conversionFailed({ prefix: e2, argument: `${t2} ("${i.util.Stringify(A2)}")`, types: ["BufferSource"] });
  }, i.converters["sequence<ByteString>"] = i.sequenceConverter(i.converters.ByteString), i.converters["sequence<sequence<ByteString>>"] = i.sequenceConverter(i.converters["sequence<ByteString>"]), i.converters["record<ByteString, ByteString>"] = i.recordConverter(i.converters.ByteString, i.converters.ByteString), A.exports = { webidl: i };
}