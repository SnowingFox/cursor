// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: (footer) range:212887..368557
// basis: webpack-container confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
}, t = {};
  function n(r2) {
    var o2 = t[r2];
    if (void 0 !== o2) return o2.exports;
    var a2 = t[r2] = { exports: {} };
    return e[r2].call(a2.exports, a2, a2.exports, n), a2.exports;
  }
  n.d = (e2, t2) => {
    for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  };
  var r = {};
  n.r(r), n.d(r, { activate: () => Kr, deactivate: () => Zr });
  const o = require("vscode");
  var a = n(38);
  function s(e2, t2) {
    if (!e2) throw new Error(t2);
  }
  function i(e2) {
    if ("number" != typeof e2) throw new Error("invalid int 32: " + typeof e2);
    if (!Number.isInteger(e2) || e2 > 2147483647 || e2 < -2147483648) throw new Error("invalid int 32: " + e2);
  }
  function l(e2) {
    if ("number" != typeof e2) throw new Error("invalid uint 32: " + typeof e2);
    if (!Number.isInteger(e2) || e2 > 4294967295 || e2 < 0) throw new Error("invalid uint 32: " + e2);
  }
  function u(e2) {
    if ("number" != typeof e2) throw new Error("invalid float 32: " + typeof e2);
    if (Number.isFinite(e2) && (e2 > 34028234663852886e22 || e2 < -34028234663852886e22)) throw new Error("invalid float 32: " + e2);
  }
  const c = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
  function m(e2) {
    const t2 = e2[c];
    return s(t2, "missing enum type on enum object"), t2;
  }
  function p(e2, t2, n2, r2) {
    e2[c] = d(t2, n2.map((t3) => ({ no: t3.no, name: t3.name, localName: e2[t3.no] })), r2);
  }
  function d(e2, t2, n2) {
    const r2 = /* @__PURE__ */ Object.create(null), o2 = /* @__PURE__ */ Object.create(null), a2 = [];
    for (const e3 of t2) {
      const t3 = T(e3);
      a2.push(t3), r2[e3.name] = t3, o2[e3.no] = t3;
    }
    return { typeName: e2, values: a2, findName: (e3) => r2[e3], findNumber: (e3) => o2[e3] };
  }
  function f(e2, t2, n2) {
    const r2 = {};
    for (const e3 of t2) {
      const t3 = T(e3);
      r2[t3.localName] = t3.no, r2[t3.no] = t3.localName;
    }
    return p(r2, e2, t2, n2), r2;
  }
  function T(e2) {
    return "localName" in e2 ? e2 : { ...e2, localName: e2.name };
  }
  class g {
    equals(e2) {
      return this.getType().runtime.util.equals(this.getType(), this, e2);
    }
    clone() {
      return this.getType().runtime.util.clone(this);
    }
    fromBinary(e2, t2) {
      const n2 = this.getType().runtime.bin, r2 = n2.makeReadOptions(t2);
      return n2.readMessage(this, r2.readerFactory(e2), e2.byteLength, r2), this;
    }
    fromJson(e2, t2) {
      const n2 = this.getType(), r2 = n2.runtime.json, o2 = r2.makeReadOptions(t2);
      return r2.readMessage(n2, e2, o2, this), this;
    }
    fromJsonString(e2, t2) {
      let n2;
      try {
        n2 = JSON.parse(e2);
      } catch (e3) {
        throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e3 instanceof Error ? e3.message : String(e3)}`);
      }
      return this.fromJson(n2, t2);
    }
    toBinary(e2) {
      const t2 = this.getType().runtime.bin, n2 = t2.makeWriteOptions(e2), r2 = n2.writerFactory();
      return t2.writeMessage(this, r2, n2), r2.finish();
    }
    toJson(e2) {
      const t2 = this.getType().runtime.json, n2 = t2.makeWriteOptions(e2);
      return t2.writeMessage(this, n2);
    }
    toJsonString(e2) {
      const t2 = this.toJson(e2);
      return JSON.stringify(t2, null, e2?.prettySpaces ?? 0);
    }
    toJSON() {
      return this.toJson({ emitDefaultValues: true });
    }
    getType() {
      return Object.getPrototypeOf(this).constructor;
    }
  }
  function E() {
    let e2 = 0, t2 = 0;
    for (let n3 = 0; n3 < 28; n3 += 7) {
      let r2 = this.buf[this.pos++];
      if (e2 |= (127 & r2) << n3, !(128 & r2)) return this.assertBounds(), [e2, t2];
    }
    let n2 = this.buf[this.pos++];
    if (e2 |= (15 & n2) << 28, t2 = (112 & n2) >> 4, !(128 & n2)) return this.assertBounds(), [e2, t2];
    for (let n3 = 3; n3 <= 31; n3 += 7) {
      let r2 = this.buf[this.pos++];
      if (t2 |= (127 & r2) << n3, !(128 & r2)) return this.assertBounds(), [e2, t2];
    }
    throw new Error("invalid varint");
  }
  function y(e2, t2, n2) {
    for (let r3 = 0; r3 < 28; r3 += 7) {
      const o3 = e2 >>> r3, a2 = !(o3 >>> 7 == 0 && 0 == t2), s2 = 255 & (a2 ? 128 | o3 : o3);
      if (n2.push(s2), !a2) return;
    }
    const r2 = e2 >>> 28 & 15 | (7 & t2) << 4, o2 = !!(t2 >> 3);
    if (n2.push(255 & (o2 ? 128 | r2 : r2)), o2) {
      for (let e3 = 3; e3 < 31; e3 += 7) {
        const r3 = t2 >>> e3, o3 = !(r3 >>> 7 == 0), a2 = 255 & (o3 ? 128 | r3 : r3);
        if (n2.push(a2), !o3) return;
      }
      n2.push(t2 >>> 31 & 1);
    }
  }
  const h = 4294967296;
  function N(e2) {
    const t2 = "-" === e2[0];
    t2 && (e2 = e2.slice(1));
    const n2 = 1e6;
    let r2 = 0, o2 = 0;
    function a2(t3, a3) {
      const s2 = Number(e2.slice(t3, a3));
      o2 *= n2, r2 = r2 * n2 + s2, r2 >= h && (o2 += r2 / h | 0, r2 %= h);
    }
    return a2(-24, -18), a2(-18, -12), a2(-12, -6), a2(-6), t2 ? S(r2, o2) : I(r2, o2);
  }
  function _(e2, t2) {
    if ({ lo: e2, hi: t2 } = (function(e3, t3) {
      return { lo: e3 >>> 0, hi: t3 >>> 0 };
    })(e2, t2), t2 <= 2097151) return String(h * t2 + e2);
    const n2 = 16777215 & (e2 >>> 24 | t2 << 8), r2 = t2 >> 16 & 65535;
    let o2 = (16777215 & e2) + 6777216 * n2 + 6710656 * r2, a2 = n2 + 8147497 * r2, s2 = 2 * r2;
    const i2 = 1e7;
    return o2 >= i2 && (a2 += Math.floor(o2 / i2), o2 %= i2), a2 >= i2 && (s2 += Math.floor(a2 / i2), a2 %= i2), s2.toString() + w(a2) + w(o2);
  }
  function I(e2, t2) {
    return { lo: 0 | e2, hi: 0 | t2 };
  }
  function S(e2, t2) {
    return t2 = ~t2, e2 ? e2 = 1 + ~e2 : t2 += 1, I(e2, t2);
  }
  const w = (e2) => {
    const t2 = String(e2);
    return "0000000".slice(t2.length) + t2;
  };
  function O(e2, t2) {
    if (e2 >= 0) {
      for (; e2 > 127; ) t2.push(127 & e2 | 128), e2 >>>= 7;
      t2.push(e2);
    } else {
      for (let n2 = 0; n2 < 9; n2++) t2.push(127 & e2 | 128), e2 >>= 7;
      t2.push(1);
    }
  }
  function b() {
    let e2 = this.buf[this.pos++], t2 = 127 & e2;
    if (!(128 & e2)) return this.assertBounds(), t2;
    if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 7, !(128 & e2)) return this.assertBounds(), t2;
    if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 14, !(128 & e2)) return this.assertBounds(), t2;
    if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 21, !(128 & e2)) return this.assertBounds(), t2;
    e2 = this.buf[this.pos++], t2 |= (15 & e2) << 28;
    for (let t3 = 5; 128 & e2 && t3 < 10; t3++) e2 = this.buf[this.pos++];
    if (128 & e2) throw new Error("invalid varint");
    return this.assertBounds(), t2 >>> 0;
  }
  const k = (function() {
    const e2 = new DataView(new ArrayBuffer(8));
    if ("function" == typeof BigInt && "function" == typeof e2.getBigInt64 && "function" == typeof e2.getBigUint64 && "function" == typeof e2.setBigInt64 && "function" == typeof e2.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
      const t3 = BigInt("-9223372036854775808"), n3 = BigInt("9223372036854775807"), r2 = BigInt("0"), o2 = BigInt("18446744073709551615");
      return { zero: BigInt(0), supported: true, parse(e3) {
        const r3 = "bigint" == typeof e3 ? e3 : BigInt(e3);
        if (r3 > n3 || r3 < t3) throw new Error(`int64 invalid: ${e3}`);
        return r3;
      }, uParse(e3) {
        const t4 = "bigint" == typeof e3 ? e3 : BigInt(e3);
        if (t4 > o2 || t4 < r2) throw new Error(`uint64 invalid: ${e3}`);
        return t4;
      }, enc(t4) {
        return e2.setBigInt64(0, this.parse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
      }, uEnc(t4) {
        return e2.setBigInt64(0, this.uParse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
      }, dec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigInt64(0, true)), uDec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigUint64(0, true)) };
    }
    const t2 = (e3) => s(/^-?[0-9]+$/.test(e3), `int64 invalid: ${e3}`), n2 = (e3) => s(/^[0-9]+$/.test(e3), `uint64 invalid: ${e3}`);
    return { zero: "0", supported: false, parse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), e3), uParse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), n2(e3), e3), enc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), N(e3)), uEnc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), n2(e3), N(e3)), dec: (e3, t3) => (function(e4, t4) {
      let n3 = I(e4, t4);
      const r2 = 2147483648 & n3.hi;
      r2 && (n3 = S(n3.lo, n3.hi));
      const o2 = _(n3.lo, n3.hi);
      return r2 ? "-" + o2 : o2;
    })(e3, t3), uDec: (e3, t3) => _(e3, t3) };
  })();
  var v = ((e2) => (e2[e2.DOUBLE = 1] = "DOUBLE", e2[e2.FLOAT = 2] = "FLOAT", e2[e2.INT64 = 3] = "INT64", e2[e2.UINT64 = 4] = "UINT64", e2[e2.INT32 = 5] = "INT32", e2[e2.FIXED64 = 6] = "FIXED64", e2[e2.FIXED32 = 7] = "FIXED32", e2[e2.BOOL = 8] = "BOOL", e2[e2.STRING = 9] = "STRING", e2[e2.BYTES = 12] = "BYTES", e2[e2.UINT32 = 13] = "UINT32", e2[e2.SFIXED32 = 15] = "SFIXED32", e2[e2.SFIXED64 = 16] = "SFIXED64", e2[e2.SINT32 = 17] = "SINT32", e2[e2.SINT64 = 18] = "SINT64", e2))(v || {}), P = ((e2) => (e2[e2.BIGINT = 0] = "BIGINT", e2[e2.STRING = 1] = "STRING", e2))(P || {});
  function F(e2, t2, n2) {
    if (t2 === n2) return true;
    if (e2 == v.BYTES) {
      if (!(t2 instanceof Uint8Array && n2 instanceof Uint8Array)) return false;
      if (t2.length !== n2.length) return false;
      for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3] !== n2[e3]) return false;
      return true;
    }
    switch (e2) {
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return t2 == n2;
    }
    return false;
  }
  function D(e2, t2) {
    switch (e2) {
      case v.BOOL:
        return false;
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return 0 == t2 ? k.zero : "0";
      case v.DOUBLE:
      case v.FLOAT:
        return 0;
      case v.BYTES:
        return new Uint8Array(0);
      case v.STRING:
        return "";
      default:
        return 0;
    }
  }
  function R(e2, t2) {
    switch (e2) {
      case v.BOOL:
        return false === t2;
      case v.STRING:
        return "" === t2;
      case v.BYTES:
        return t2 instanceof Uint8Array && !t2.byteLength;
      default:
        return 0 == t2;
    }
  }
  function J(e2) {
    const t2 = e2.field.localName, n2 = /* @__PURE__ */ Object.create(null);
    return n2[t2] = (function(e3) {
      const t3 = e3.field;
      if (t3.repeated) return [];
      if (void 0 !== t3.default) return t3.default;
      switch (t3.kind) {
        case "enum":
          return t3.T.values[0].no;
        case "scalar":
          return D(t3.T, t3.L);
        case "message":
          const e4 = t3.T, n3 = new e4();
          return e4.fieldWrapper ? e4.fieldWrapper.unwrapField(n3) : n3;
        case "map":
          throw "map fields are not allowed to be extensions";
      }
    })(e2), [n2, () => n2[t2]];
  }
  let U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), A = [];
  for (let e2 = 0; e2 < U.length; e2++) A[U[e2].charCodeAt(0)] = e2;
  A["-".charCodeAt(0)] = U.indexOf("+"), A["_".charCodeAt(0)] = U.indexOf("/");
  const L = { dec(e2) {
    let t2 = 3 * e2.length / 4;
    "=" == e2[e2.length - 2] ? t2 -= 2 : "=" == e2[e2.length - 1] && (t2 -= 1);
    let n2, r2 = new Uint8Array(t2), o2 = 0, a2 = 0, s2 = 0;
    for (let t3 = 0; t3 < e2.length; t3++) {
      if (n2 = A[e2.charCodeAt(t3)], void 0 === n2) switch (e2[t3]) {
        case "=":
          a2 = 0;
        case "\n":
        case "\r":
        case "	":
        case " ":
          continue;
        default:
          throw Error("invalid base64 string.");
      }
      switch (a2) {
        case 0:
          s2 = n2, a2 = 1;
          break;
        case 1:
          r2[o2++] = s2 << 2 | (48 & n2) >> 4, s2 = n2, a2 = 2;
          break;
        case 2:
          r2[o2++] = (15 & s2) << 4 | (60 & n2) >> 2, s2 = n2, a2 = 3;
          break;
        case 3:
          r2[o2++] = (3 & s2) << 6 | n2, a2 = 0;
      }
    }
    if (1 == a2) throw Error("invalid base64 string.");
    return r2.subarray(0, o2);
  }, enc(e2) {
    let t2, n2 = "", r2 = 0, o2 = 0;
    for (let a2 = 0; a2 < e2.length; a2++) switch (t2 = e2[a2], r2) {
      case 0:
        n2 += U[t2 >> 2], o2 = (3 & t2) << 4, r2 = 1;
        break;
      case 1:
        n2 += U[o2 | t2 >> 4], o2 = (15 & t2) << 2, r2 = 2;
        break;
      case 2:
        n2 += U[o2 | t2 >> 6], n2 += U[63 & t2], r2 = 0;
    }
    return r2 && (n2 += U[o2], n2 += "=", 1 == r2 && (n2 += "=")), n2;
  } };
  function B(e2, t2, n2) {
    Y(t2, e2);
    const r2 = t2.runtime.bin.makeReadOptions(n2), o2 = (function(e3, t3) {
      if (!t3.repeated && ("enum" == t3.kind || "scalar" == t3.kind)) {
        for (let n3 = e3.length - 1; n3 >= 0; --n3) if (e3[n3].no == t3.no) return [e3[n3]];
        return [];
      }
      return e3.filter((e4) => e4.no === t3.no);
    })(e2.getType().runtime.bin.listUnknownFields(e2), t2.field), [a2, s2] = J(t2);
    for (const e3 of o2) t2.runtime.bin.readField(a2, r2.readerFactory(e3.data), t2.field, e3.wireType, r2);
    return s2();
  }
  function M(e2, t2, n2, r2) {
    Y(t2, e2);
    const o2 = t2.runtime.bin.makeReadOptions(r2), a2 = t2.runtime.bin.makeWriteOptions(r2);
    if (x(e2, t2)) {
      const n3 = e2.getType().runtime.bin.listUnknownFields(e2).filter((e3) => e3.no != t2.field.no);
      e2.getType().runtime.bin.discardUnknownFields(e2);
      for (const t3 of n3) e2.getType().runtime.bin.onUnknownField(e2, t3.no, t3.wireType, t3.data);
    }
    const s2 = a2.writerFactory();
    let i2 = t2.field;
    i2.opt || i2.repeated || "enum" != i2.kind && "scalar" != i2.kind || (i2 = { ...t2.field, opt: true }), t2.runtime.bin.writeField(i2, n2, s2, a2);
    const l2 = o2.readerFactory(s2.finish());
    for (; l2.pos < l2.len; ) {
      const [t3, n3] = l2.tag(), r3 = l2.skip(n3, t3);
      e2.getType().runtime.bin.onUnknownField(e2, t3, n3, r3);
    }
  }
  function x(e2, t2) {
    const n2 = e2.getType();
    return t2.extendee.typeName === n2.typeName && !!n2.runtime.bin.listUnknownFields(e2).find((e3) => e3.no == t2.field.no);
  }
  function Y(e2, t2) {
    s(e2.extendee.typeName == t2.getType().typeName, `extension ${e2.typeName} can only be applied to message ${e2.extendee.typeName}`);
  }
  function C(e2, t2) {
    const n2 = e2.localName;
    if (e2.repeated) return t2[n2].length > 0;
    if (e2.oneof) return t2[e2.oneof.localName].case === n2;
    switch (e2.kind) {
      case "enum":
      case "scalar":
        return e2.opt || e2.req ? void 0 !== t2[n2] : "enum" == e2.kind ? t2[n2] !== e2.T.values[0].no : !R(e2.T, t2[n2]);
      case "message":
        return void 0 !== t2[n2];
      case "map":
        return Object.keys(t2[n2]).length > 0;
    }
  }
  function j(e2, t2) {
    const n2 = e2.localName, r2 = !e2.opt && !e2.req;
    if (e2.repeated) t2[n2] = [];
    else if (e2.oneof) t2[e2.oneof.localName] = { case: void 0 };
    else switch (e2.kind) {
      case "map":
        t2[n2] = {};
        break;
      case "enum":
        t2[n2] = r2 ? e2.T.values[0].no : void 0;
        break;
      case "scalar":
        t2[n2] = r2 ? D(e2.T, e2.L) : void 0;
        break;
      case "message":
        t2[n2] = void 0;
    }
  }
  function V(e2, t2) {
    if (null === e2 || "object" != typeof e2) return false;
    if (!Object.getOwnPropertyNames(g.prototype).every((t3) => t3 in e2 && "function" == typeof e2[t3])) return false;
    const n2 = e2.getType();
    return null !== n2 && "function" == typeof n2 && "typeName" in n2 && "string" == typeof n2.typeName && (void 0 === t2 || n2.typeName == t2.typeName);
  }
  function G(e2, t2) {
    const n2 = V(t2);
    return n2 || e2.fieldWrapper ? n2 || !e2.fieldWrapper ? t2 : e2.fieldWrapper.wrapField(t2) : new e2(t2);
  }
  v.DOUBLE, v.FLOAT, v.INT64, v.UINT64, v.INT32, v.UINT32, v.BOOL, v.STRING, v.BYTES;
  const q = { ignoreUnknownFields: false }, $ = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
  function W(e2) {
    return e2 ? { ...q, ...e2 } : q;
  }
  function X(e2) {
    return e2 ? { ...$, ...e2 } : $;
  }
  const K = /* @__PURE__ */ Symbol(), Z = /* @__PURE__ */ Symbol();
  function H(e2) {
    if (null === e2) return "null";
    switch (typeof e2) {
      case "object":
        return Array.isArray(e2) ? "array" : "object";
      case "string":
        return e2.length > 100 ? "string" : `"${e2.split('"').join('\\"')}"`;
      default:
        return String(e2);
    }
  }
  function z(e2, t2, n2, r2, o2) {
    let a2 = n2.localName;
    if (n2.repeated) {
      if (s("map" != n2.kind), null === t2) return;
      if (!Array.isArray(t2)) throw new Error(`cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`);
      const i2 = e2[a2];
      for (const e3 of t2) {
        if (null === e3) throw new Error(`cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(e3)}`);
        switch (n2.kind) {
          case "message":
            i2.push(n2.T.fromJson(e3, r2));
            break;
          case "enum":
            const t3 = te(n2.T, e3, r2.ignoreUnknownFields, true);
            t3 !== Z && i2.push(t3);
            break;
          case "scalar":
            try {
              i2.push(ee(n2.T, e3, n2.L, true));
            } catch (t4) {
              let r3 = `cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(e3)}`;
              throw t4 instanceof Error && t4.message.length > 0 && (r3 += `: ${t4.message}`), new Error(r3);
            }
        }
      }
    } else if ("map" == n2.kind) {
      if (null === t2) return;
      if ("object" != typeof t2 || Array.isArray(t2)) throw new Error(`cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`);
      const s2 = e2[a2];
      for (const [e3, a3] of Object.entries(t2)) {
        if (null === a3) throw new Error(`cannot decode field ${o2.typeName}.${n2.name} from JSON: map value null`);
        let i2;
        try {
          i2 = Q(n2.K, e3);
        } catch (e4) {
          let r3 = `cannot decode map key for field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`;
          throw e4 instanceof Error && e4.message.length > 0 && (r3 += `: ${e4.message}`), new Error(r3);
        }
        switch (n2.V.kind) {
          case "message":
            s2[i2] = n2.V.T.fromJson(a3, r2);
            break;
          case "enum":
            const e4 = te(n2.V.T, a3, r2.ignoreUnknownFields, true);
            e4 !== Z && (s2[i2] = e4);
            break;
          case "scalar":
            try {
              s2[i2] = ee(n2.V.T, a3, P.BIGINT, true);
            } catch (e5) {
              let r3 = `cannot decode map value for field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`;
              throw e5 instanceof Error && e5.message.length > 0 && (r3 += `: ${e5.message}`), new Error(r3);
            }
        }
      }
    } else switch (n2.oneof && (e2 = e2[n2.oneof.localName] = { case: a2 }, a2 = "value"), n2.kind) {
      case "message":
        const s2 = n2.T;
        if (null === t2 && "google.protobuf.Value" != s2.typeName) return;
        let i2 = e2[a2];
        V(i2) ? i2.fromJson(t2, r2) : (e2[a2] = i2 = s2.fromJson(t2, r2), s2.fieldWrapper && !n2.oneof && (e2[a2] = s2.fieldWrapper.unwrapField(i2)));
        break;
      case "enum":
        const l2 = te(n2.T, t2, r2.ignoreUnknownFields, false);
        switch (l2) {
          case K:
            j(n2, e2);
            break;
          case Z:
            break;
          default:
            e2[a2] = l2;
        }
        break;
      case "scalar":
        try {
          const r3 = ee(n2.T, t2, n2.L, false);
          if (r3 === K) j(n2, e2);
          else e2[a2] = r3;
        } catch (e3) {
          let r3 = `cannot decode field ${o2.typeName}.${n2.name} from JSON: ${H(t2)}`;
          throw e3 instanceof Error && e3.message.length > 0 && (r3 += `: ${e3.message}`), new Error(r3);
        }
    }
  }
  function Q(e2, t2) {
    if (e2 === v.BOOL) switch (t2) {
      case "true":
        t2 = true;
        break;
      case "false":
        t2 = false;
    }
    return ee(e2, t2, P.BIGINT, true).toString();
  }
  function ee(e2, t2, n2, r2) {
    if (null === t2) return r2 ? D(e2, n2) : K;
    switch (e2) {
      case v.DOUBLE:
      case v.FLOAT:
        if ("NaN" === t2) return Number.NaN;
        if ("Infinity" === t2) return Number.POSITIVE_INFINITY;
        if ("-Infinity" === t2) return Number.NEGATIVE_INFINITY;
        if ("" === t2) break;
        if ("string" == typeof t2 && t2.trim().length !== t2.length) break;
        if ("string" != typeof t2 && "number" != typeof t2) break;
        const r3 = Number(t2);
        if (Number.isNaN(r3)) break;
        if (!Number.isFinite(r3)) break;
        return e2 == v.FLOAT && u(r3), r3;
      case v.INT32:
      case v.FIXED32:
      case v.SFIXED32:
      case v.SINT32:
      case v.UINT32:
        let o2;
        if ("number" == typeof t2 ? o2 = t2 : "string" == typeof t2 && t2.length > 0 && t2.trim().length === t2.length && (o2 = Number(t2)), void 0 === o2) break;
        return e2 == v.UINT32 || e2 == v.FIXED32 ? l(o2) : i(o2), o2;
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        if ("number" != typeof t2 && "string" != typeof t2) break;
        const a2 = k.parse(t2);
        return n2 ? a2.toString() : a2;
      case v.FIXED64:
      case v.UINT64:
        if ("number" != typeof t2 && "string" != typeof t2) break;
        const s2 = k.uParse(t2);
        return n2 ? s2.toString() : s2;
      case v.BOOL:
        if ("boolean" != typeof t2) break;
        return t2;
      case v.STRING:
        if ("string" != typeof t2) break;
        try {
          encodeURIComponent(t2);
        } catch (e3) {
          throw new Error("invalid UTF8");
        }
        return t2;
      case v.BYTES:
        if ("" === t2) return new Uint8Array(0);
        if ("string" != typeof t2) break;
        return L.dec(t2);
    }
    throw new Error();
  }
  function te(e2, t2, n2, r2) {
    if (null === t2) return "google.protobuf.NullValue" == e2.typeName ? 0 : r2 ? e2.values[0].no : K;
    switch (typeof t2) {
      case "number":
        if (Number.isInteger(t2)) return t2;
        break;
      case "string":
        const r3 = e2.findName(t2);
        if (void 0 !== r3) return r3.no;
        if (n2) return Z;
    }
    throw new Error(`cannot decode enum ${e2.typeName} from JSON: ${H(t2)}`);
  }
  function ne(e2) {
    return !(!e2.repeated && "map" != e2.kind) || !e2.oneof && ("message" != e2.kind && (!e2.opt && !e2.req));
  }
  function re(e2, t2, n2) {
    if ("map" == e2.kind) {
      s("object" == typeof t2 && null != t2);
      const r2 = {}, o2 = Object.entries(t2);
      switch (e2.V.kind) {
        case "scalar":
          for (const [t4, n3] of o2) r2[t4.toString()] = ae(e2.V.T, n3);
          break;
        case "message":
          for (const [e3, t4] of o2) r2[e3.toString()] = t4.toJson(n2);
          break;
        case "enum":
          const t3 = e2.V.T;
          for (const [e3, a2] of o2) r2[e3.toString()] = oe(t3, a2, n2.enumAsInteger);
      }
      return n2.emitDefaultValues || o2.length > 0 ? r2 : void 0;
    }
    if (e2.repeated) {
      s(Array.isArray(t2));
      const r2 = [];
      switch (e2.kind) {
        case "scalar":
          for (let n3 = 0; n3 < t2.length; n3++) r2.push(ae(e2.T, t2[n3]));
          break;
        case "enum":
          for (let o2 = 0; o2 < t2.length; o2++) r2.push(oe(e2.T, t2[o2], n2.enumAsInteger));
          break;
        case "message":
          for (let e3 = 0; e3 < t2.length; e3++) r2.push(t2[e3].toJson(n2));
      }
      return n2.emitDefaultValues || r2.length > 0 ? r2 : void 0;
    }
    switch (e2.kind) {
      case "scalar":
        return ae(e2.T, t2);
      case "enum":
        return oe(e2.T, t2, n2.enumAsInteger);
      case "message":
        return G(e2.T, t2).toJson(n2);
    }
  }
  function oe(e2, t2, n2) {
    if (s("number" == typeof t2), "google.protobuf.NullValue" == e2.typeName) return null;
    if (n2) return t2;
    const r2 = e2.findNumber(t2);
    return r2?.name ?? t2;
  }
  function ae(e2, t2) {
    switch (e2) {
      case v.INT32:
      case v.SFIXED32:
      case v.SINT32:
      case v.FIXED32:
      case v.UINT32:
        return s("number" == typeof t2), t2;
      case v.FLOAT:
      case v.DOUBLE:
        return s("number" == typeof t2), Number.isNaN(t2) ? "NaN" : t2 === Number.POSITIVE_INFINITY ? "Infinity" : t2 === Number.NEGATIVE_INFINITY ? "-Infinity" : t2;
      case v.STRING:
        return s("string" == typeof t2), t2;
      case v.BOOL:
        return s("boolean" == typeof t2), t2;
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return s("bigint" == typeof t2 || "string" == typeof t2 || "number" == typeof t2), t2.toString();
      case v.BYTES:
        return s(t2 instanceof Uint8Array), L.enc(t2);
    }
  }
  var se = ((e2) => (e2[e2.Varint = 0] = "Varint", e2[e2.Bit64 = 1] = "Bit64", e2[e2.LengthDelimited = 2] = "LengthDelimited", e2[e2.StartGroup = 3] = "StartGroup", e2[e2.EndGroup = 4] = "EndGroup", e2[e2.Bit32 = 5] = "Bit32", e2))(se || {});
  class ie {
    constructor(e2) {
      this.stack = [], this.textEncoder = e2 ?? new TextEncoder(), this.chunks = [], this.buf = [];
    }
    finish() {
      this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
      let e2 = 0;
      for (let t3 = 0; t3 < this.chunks.length; t3++) e2 += this.chunks[t3].length;
      let t2 = new Uint8Array(e2), n2 = 0;
      for (let e3 = 0; e3 < this.chunks.length; e3++) t2.set(this.chunks[e3], n2), n2 += this.chunks[e3].length;
      return this.chunks = [], t2;
    }
    fork() {
      return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
    }
    join() {
      let e2 = this.finish(), t2 = this.stack.pop();
      if (!t2) throw new Error("invalid state, fork stack empty");
      return this.chunks = t2.chunks, this.buf = t2.buf, this.uint32(e2.byteLength), this.raw(e2);
    }
    tag(e2, t2) {
      return this.uint32((e2 << 3 | t2) >>> 0);
    }
    raw(e2) {
      return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e2), this;
    }
    uint32(e2) {
      for (l(e2); e2 > 127; ) this.buf.push(127 & e2 | 128), e2 >>>= 7;
      return this.buf.push(e2), this;
    }
    int32(e2) {
      return i(e2), O(e2, this.buf), this;
    }
    bool(e2) {
      return this.buf.push(e2 ? 1 : 0), this;
    }
    bytes(e2) {
      return this.uint32(e2.byteLength), this.raw(e2);
    }
    string(e2) {
      let t2 = this.textEncoder.encode(e2);
      return this.uint32(t2.byteLength), this.raw(t2);
    }
    float(e2) {
      u(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setFloat32(0, e2, true), this.raw(t2);
    }
    double(e2) {
      let t2 = new Uint8Array(8);
      return new DataView(t2.buffer).setFloat64(0, e2, true), this.raw(t2);
    }
    fixed32(e2) {
      l(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setUint32(0, e2, true), this.raw(t2);
    }
    sfixed32(e2) {
      i(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setInt32(0, e2, true), this.raw(t2);
    }
    sint32(e2) {
      return i(e2), O(e2 = (e2 << 1 ^ e2 >> 31) >>> 0, this.buf), this;
    }
    sfixed64(e2) {
      let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), r2 = k.enc(e2);
      return n2.setInt32(0, r2.lo, true), n2.setInt32(4, r2.hi, true), this.raw(t2);
    }
    fixed64(e2) {
      let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), r2 = k.uEnc(e2);
      return n2.setInt32(0, r2.lo, true), n2.setInt32(4, r2.hi, true), this.raw(t2);
    }
    int64(e2) {
      let t2 = k.enc(e2);
      return y(t2.lo, t2.hi, this.buf), this;
    }
    sint64(e2) {
      let t2 = k.enc(e2), n2 = t2.hi >> 31;
      return y(t2.lo << 1 ^ n2, (t2.hi << 1 | t2.lo >>> 31) ^ n2, this.buf), this;
    }
    uint64(e2) {
      let t2 = k.uEnc(e2);
      return y(t2.lo, t2.hi, this.buf), this;
    }
  }
  class le {
    constructor(e2, t2) {
      this.varint64 = E, this.uint32 = b, this.buf = e2, this.len = e2.length, this.pos = 0, this.view = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), this.textDecoder = t2 ?? new TextDecoder();
    }
    tag() {
      let e2 = this.uint32(), t2 = e2 >>> 3, n2 = 7 & e2;
      if (t2 <= 0 || n2 < 0 || n2 > 5) throw new Error("illegal tag: field no " + t2 + " wire type " + n2);
      return [t2, n2];
    }
    skip(e2, t2) {
      let n2 = this.pos;
      switch (e2) {
        case 0:
          for (; 128 & this.buf[this.pos++]; ) ;
          break;
        case 1:
          this.pos += 4;
        case 5:
          this.pos += 4;
          break;
        case 2:
          let n3 = this.uint32();
          this.pos += n3;
          break;
        case 3:
          for (; ; ) {
            const [e3, n4] = this.tag();
            if (4 === n4) {
              if (void 0 !== t2 && e3 !== t2) throw new Error("invalid end group tag");
              break;
            }
            this.skip(n4, e3);
          }
          break;
        default:
          throw new Error("cant skip wire type " + e2);
      }
      return this.assertBounds(), this.buf.subarray(n2, this.pos);
    }
    assertBounds() {
      if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
      return 0 | this.uint32();
    }
    sint32() {
      let e2 = this.uint32();
      return e2 >>> 1 ^ -(1 & e2);
    }
    int64() {
      return k.dec(...this.varint64());
    }
    uint64() {
      return k.uDec(...this.varint64());
    }
    sint64() {
      let [e2, t2] = this.varint64(), n2 = -(1 & e2);
      return e2 = (e2 >>> 1 | (1 & t2) << 31) ^ n2, t2 = t2 >>> 1 ^ n2, k.dec(e2, t2);
    }
    bool() {
      let [e2, t2] = this.varint64();
      return 0 !== e2 || 0 !== t2;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, true);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, true);
    }
    fixed64() {
      return k.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return k.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    bytes() {
      let e2 = this.uint32(), t2 = this.pos;
      return this.pos += e2, this.assertBounds(), this.buf.subarray(t2, t2 + e2);
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  }
  const ue = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), ce = { readUnknownFields: true, readerFactory: (e2) => new le(e2) }, me = { writeUnknownFields: true, writerFactory: () => new ie() };
  function pe(e2) {
    return e2 ? { ...ce, ...e2 } : ce;
  }
  function de(e2) {
    return e2 ? { ...me, ...e2 } : me;
  }
  function fe(e2, t2, n2, r2, o2) {
    let { repeated: a2, localName: s2 } = n2;
    switch (n2.oneof && ((e2 = e2[n2.oneof.localName]).case != s2 && delete e2.value, e2.case = s2, s2 = "value"), n2.kind) {
      case "scalar":
      case "enum":
        const i2 = "enum" == n2.kind ? v.INT32 : n2.T;
        let l2 = Ee;
        if ("scalar" == n2.kind && n2.L > 0 && (l2 = ge), a2) {
          let n3 = e2[s2];
          if (r2 == se.LengthDelimited && i2 != v.STRING && i2 != v.BYTES) {
            let e3 = t2.uint32() + t2.pos;
            for (; t2.pos < e3; ) n3.push(l2(t2, i2));
          } else n3.push(l2(t2, i2));
        } else e2[s2] = l2(t2, i2);
        break;
      case "message":
        const u2 = n2.T;
        a2 ? e2[s2].push(Te(t2, new u2(), o2, n2)) : V(e2[s2]) ? Te(t2, e2[s2], o2, n2) : (e2[s2] = Te(t2, new u2(), o2, n2), !u2.fieldWrapper || n2.oneof || n2.repeated || (e2[s2] = u2.fieldWrapper.unwrapField(e2[s2])));
        break;
      case "map":
        let [c2, m2] = (function(e3, t3, n3) {
          const r3 = t3.uint32(), o3 = t3.pos + r3;
          let a3, s3;
          for (; t3.pos < o3; ) {
            const [r4] = t3.tag();
            switch (r4) {
              case 1:
                a3 = Ee(t3, e3.K);
                break;
              case 2:
                switch (e3.V.kind) {
                  case "scalar":
                    s3 = Ee(t3, e3.V.T);
                    break;
                  case "enum":
                    s3 = t3.int32();
                    break;
                  case "message":
                    s3 = Te(t3, new e3.V.T(), n3, void 0);
                }
            }
          }
          void 0 === a3 && (a3 = D(e3.K, P.BIGINT));
          "string" != typeof a3 && "number" != typeof a3 && (a3 = a3.toString());
          if (void 0 === s3) switch (e3.V.kind) {
            case "scalar":
              s3 = D(e3.V.T, P.BIGINT);
              break;
            case "enum":
              s3 = e3.V.T.values[0].no;
              break;
            case "message":
              s3 = new e3.V.T();
          }
          return [a3, s3];
        })(n2, t2, o2);
        e2[s2][c2] = m2;
    }
  }
  function Te(e2, t2, n2, r2) {
    const o2 = t2.getType().runtime.bin, a2 = r2?.delimited;
    return o2.readMessage(t2, e2, a2 ? r2.no : e2.uint32(), n2, a2), t2;
  }
  function ge(e2, t2) {
    const n2 = Ee(e2, t2);
    return "bigint" == typeof n2 ? n2.toString() : n2;
  }
  function Ee(e2, t2) {
    switch (t2) {
      case v.STRING:
        return e2.string();
      case v.BOOL:
        return e2.bool();
      case v.DOUBLE:
        return e2.double();
      case v.FLOAT:
        return e2.float();
      case v.INT32:
        return e2.int32();
      case v.INT64:
        return e2.int64();
      case v.UINT64:
        return e2.uint64();
      case v.FIXED64:
        return e2.fixed64();
      case v.BYTES:
        return e2.bytes();
      case v.FIXED32:
        return e2.fixed32();
      case v.SFIXED32:
        return e2.sfixed32();
      case v.SFIXED64:
        return e2.sfixed64();
      case v.SINT64:
        return e2.sint64();
      case v.UINT32:
        return e2.uint32();
      case v.SINT32:
        return e2.sint32();
    }
  }
  function ye(e2, t2, n2, r2) {
    s(void 0 !== t2);
    const o2 = e2.repeated;
    switch (e2.kind) {
      case "scalar":
      case "enum":
        let a2 = "enum" == e2.kind ? v.INT32 : e2.T;
        if (o2) if (s(Array.isArray(t2)), e2.packed) !(function(e3, t3, n3, r3) {
          if (!r3.length) return;
          e3.tag(n3, se.LengthDelimited).fork();
          let [, o3] = Ie(t3);
          for (let t4 = 0; t4 < r3.length; t4++) e3[o3](r3[t4]);
          e3.join();
        })(n2, a2, e2.no, t2);
        else for (const r3 of t2) _e(n2, a2, e2.no, r3);
        else _e(n2, a2, e2.no, t2);
        break;
      case "message":
        if (o2) {
          s(Array.isArray(t2));
          for (const o3 of t2) Ne(n2, r2, e2, o3);
        } else Ne(n2, r2, e2, t2);
        break;
      case "map":
        s("object" == typeof t2 && null != t2);
        for (const [o3, a3] of Object.entries(t2)) he(n2, r2, e2, o3, a3);
    }
  }
  function he(e2, t2, n2, r2, o2) {
    e2.tag(n2.no, se.LengthDelimited), e2.fork();
    let a2 = r2;
    switch (n2.K) {
      case v.INT32:
      case v.FIXED32:
      case v.UINT32:
      case v.SFIXED32:
      case v.SINT32:
        a2 = Number.parseInt(r2);
        break;
      case v.BOOL:
        s("true" == r2 || "false" == r2), a2 = "true" == r2;
    }
    switch (_e(e2, n2.K, 1, a2), n2.V.kind) {
      case "scalar":
        _e(e2, n2.V.T, 2, o2);
        break;
      case "enum":
        _e(e2, v.INT32, 2, o2);
        break;
      case "message":
        s(void 0 !== o2), e2.tag(2, se.LengthDelimited).bytes(o2.toBinary(t2));
    }
    e2.join();
  }
  function Ne(e2, t2, n2, r2) {
    const o2 = G(n2.T, r2);
    n2.delimited ? e2.tag(n2.no, se.StartGroup).raw(o2.toBinary(t2)).tag(n2.no, se.EndGroup) : e2.tag(n2.no, se.LengthDelimited).bytes(o2.toBinary(t2));
  }
  function _e(e2, t2, n2, r2) {
    s(void 0 !== r2);
    let [o2, a2] = Ie(t2);
    e2.tag(n2, o2)[a2](r2);
  }
  function Ie(e2) {
    let t2 = se.Varint;
    switch (e2) {
      case v.BYTES:
      case v.STRING:
        t2 = se.LengthDelimited;
        break;
      case v.DOUBLE:
      case v.FIXED64:
      case v.SFIXED64:
        t2 = se.Bit64;
        break;
      case v.FIXED32:
      case v.SFIXED32:
      case v.FLOAT:
        t2 = se.Bit32;
    }
    return [t2, v[e2].toLowerCase()];
  }
  function Se(e2) {
    if (void 0 === e2) return e2;
    if (V(e2)) return e2.clone();
    if (e2 instanceof Uint8Array) {
      const t2 = new Uint8Array(e2.byteLength);
      return t2.set(e2), t2;
    }
    return e2;
  }
  function we(e2) {
    return e2 instanceof Uint8Array ? e2 : new Uint8Array(e2);
  }
  function Oe(e2, t2, n2) {
    return { syntax: e2, json: { makeReadOptions: W, makeWriteOptions: X, readMessage(e3, t3, n3, r2) {
      if (null == t3 || Array.isArray(t3) || "object" != typeof t3) throw new Error(`cannot decode message ${e3.typeName} from JSON: ${H(t3)}`);
      r2 = r2 ?? new e3();
      const o2 = /* @__PURE__ */ new Map(), a2 = n3.typeRegistry;
      for (const [s2, i2] of Object.entries(t3)) {
        const t4 = e3.fields.findJsonName(s2);
        if (t4) {
          if (t4.oneof) {
            if (null === i2 && "scalar" == t4.kind) continue;
            const n4 = o2.get(t4.oneof);
            if (void 0 !== n4) throw new Error(`cannot decode message ${e3.typeName} from JSON: multiple keys for oneof "${t4.oneof.name}" present: "${n4}", "${s2}"`);
            o2.set(t4.oneof, s2);
          }
          z(r2, i2, t4, n3, e3);
        } else {
          let t5 = false;
          if (a2?.findExtension && s2.startsWith("[") && s2.endsWith("]")) {
            const o3 = a2.findExtension(s2.substring(1, s2.length - 1));
            if (o3 && o3.extendee.typeName == e3.typeName) {
              t5 = true;
              const [e4, a3] = J(o3);
              z(e4, i2, o3.field, n3, o3), M(r2, o3, a3(), n3);
            }
          }
          if (!t5 && !n3.ignoreUnknownFields) throw new Error(`cannot decode message ${e3.typeName} from JSON: key "${s2}" is unknown`);
        }
      }
      return r2;
    }, writeMessage(e3, t3) {
      const n3 = e3.getType(), r2 = {};
      let o2;
      try {
        for (o2 of n3.fields.byNumber()) {
          if (!C(o2, e3)) {
            if (o2.req) throw "required field not set";
            if (!t3.emitDefaultValues) continue;
            if (!ne(o2)) continue;
          }
          const n4 = re(o2, o2.oneof ? e3[o2.oneof.localName].value : e3[o2.localName], t3);
          void 0 !== n4 && (r2[t3.useProtoFieldName ? o2.name : o2.jsonName] = n4);
        }
        const a2 = t3.typeRegistry;
        if (a2?.findExtensionFor) for (const o3 of n3.runtime.bin.listUnknownFields(e3)) {
          const s2 = a2.findExtensionFor(n3.typeName, o3.no);
          if (s2 && x(e3, s2)) {
            const n4 = B(e3, s2, t3), o4 = re(s2.field, n4, t3);
            void 0 !== o4 && (r2[s2.field.jsonName] = o4);
          }
        }
      } catch (e4) {
        const t4 = o2 ? `cannot encode field ${n3.typeName}.${o2.name} to JSON` : `cannot encode message ${n3.typeName} to JSON`, r3 = e4 instanceof Error ? e4.message : String(e4);
        throw new Error(t4 + (r3.length > 0 ? `: ${r3}` : ""));
      }
      return r2;
    }, readScalar: (e3, t3, n3) => ee(e3, t3, n3 ?? P.BIGINT, true), writeScalar(e3, t3, n3) {
      if (void 0 !== t3) return n3 || R(e3, t3) ? ae(e3, t3) : void 0;
    }, debug: H }, bin: { makeReadOptions: pe, makeWriteOptions: de, listUnknownFields: (e3) => e3[ue] ?? [], discardUnknownFields(e3) {
      delete e3[ue];
    }, writeUnknownFields(e3, t3) {
      const n3 = e3[ue];
      if (n3) for (const e4 of n3) t3.tag(e4.no, e4.wireType).raw(e4.data);
    }, onUnknownField(e3, t3, n3, r2) {
      const o2 = e3;
      Array.isArray(o2[ue]) || (o2[ue] = []), o2[ue].push({ no: t3, wireType: n3, data: new Uint8Array(r2) });
    }, readMessage(e3, t3, n3, r2, o2) {
      const a2 = e3.getType(), s2 = o2 ? t3.len : t3.pos + n3;
      let i2, l2;
      for (; t3.pos < s2 && ([i2, l2] = t3.tag(), true !== o2 || l2 != se.EndGroup); ) {
        const n4 = a2.fields.find(i2);
        if (!n4) {
          const n5 = t3.skip(l2, i2);
          r2.readUnknownFields && this.onUnknownField(e3, i2, l2, n5);
          continue;
        }
        fe(e3, t3, n4, l2, r2);
      }
      if (o2 && (l2 != se.EndGroup || i2 !== n3)) throw new Error("invalid end group tag");
    }, readField: fe, writeMessage(e3, t3, n3) {
      const r2 = e3.getType();
      for (const o2 of r2.fields.byNumber()) if (C(o2, e3)) ye(o2, o2.oneof ? e3[o2.oneof.localName].value : e3[o2.localName], t3, n3);
      else if (o2.req) throw new Error(`cannot encode field ${r2.typeName}.${o2.name} to binary: required field not set`);
      return n3.writeUnknownFields && this.writeUnknownFields(e3, t3), t3;
    }, writeField(e3, t3, n3, r2) {
      void 0 !== t3 && ye(e3, t3, n3, r2);
    } }, util: { ...{ setEnumType: p, initPartial(e3, t3) {
      if (void 0 === e3) return;
      const n3 = t3.getType();
      for (const r2 of n3.fields.byMember()) {
        const n4 = r2.localName, o2 = t3, a2 = e3;
        if (null != a2[n4]) switch (r2.kind) {
          case "oneof":
            const e4 = a2[n4].case;
            if (void 0 === e4) continue;
            const t4 = r2.findField(e4);
            let s2 = a2[n4].value;
            t4 && "message" == t4.kind && !V(s2, t4.T) ? s2 = new t4.T(s2) : t4 && "scalar" === t4.kind && t4.T === v.BYTES && (s2 = we(s2)), o2[n4] = { case: e4, value: s2 };
            break;
          case "scalar":
          case "enum":
            let i2 = a2[n4];
            r2.T === v.BYTES && (i2 = r2.repeated ? i2.map(we) : we(i2)), o2[n4] = i2;
            break;
          case "map":
            switch (r2.V.kind) {
              case "scalar":
              case "enum":
                if (r2.V.T === v.BYTES) for (const [e6, t5] of Object.entries(a2[n4])) o2[n4][e6] = we(t5);
                else Object.assign(o2[n4], a2[n4]);
                break;
              case "message":
                const e5 = r2.V.T;
                for (const t5 of Object.keys(a2[n4])) {
                  let r3 = a2[n4][t5];
                  e5.fieldWrapper || (r3 = new e5(r3)), o2[n4][t5] = r3;
                }
            }
            break;
          case "message":
            const l2 = r2.T;
            if (r2.repeated) o2[n4] = a2[n4].map((e5) => V(e5, l2) ? e5 : new l2(e5));
            else {
              const e5 = a2[n4];
              l2.fieldWrapper ? "google.protobuf.BytesValue" === l2.typeName ? o2[n4] = we(e5) : o2[n4] = e5 : o2[n4] = V(e5, l2) ? e5 : new l2(e5);
            }
        }
      }
    }, equals: (e3, t3, n3) => t3 === n3 || !(!t3 || !n3) && e3.fields.byMember().every((e4) => {
      const r2 = t3[e4.localName], o2 = n3[e4.localName];
      if (e4.repeated) {
        if (r2.length !== o2.length) return false;
        switch (e4.kind) {
          case "message":
            return r2.every((t4, n4) => e4.T.equals(t4, o2[n4]));
          case "scalar":
            return r2.every((t4, n4) => F(e4.T, t4, o2[n4]));
          case "enum":
            return r2.every((e5, t4) => F(v.INT32, e5, o2[t4]));
        }
        throw new Error(`repeated cannot contain ${e4.kind}`);
      }
      switch (e4.kind) {
        case "message":
          return e4.T.equals(r2, o2);
        case "enum":
          return F(v.INT32, r2, o2);
        case "scalar":
          return F(e4.T, r2, o2);
        case "oneof":
          if (r2.case !== o2.case) return false;
          const t4 = e4.findField(r2.case);
          if (void 0 === t4) return true;
          switch (t4.kind) {
            case "message":
              return t4.T.equals(r2.value, o2.value);
            case "enum":
              return F(v.INT32, r2.value, o2.value);
            case "scalar":
              return F(t4.T, r2.value, o2.value);
          }
          throw new Error(`oneof cannot contain ${t4.kind}`);
        case "map":
          const n4 = Object.keys(r2).concat(Object.keys(o2));
          switch (e4.V.kind) {
            case "message":
              const t5 = e4.V.T;
              return n4.every((e5) => t5.equals(r2[e5], o2[e5]));
            case "enum":
              return n4.every((e5) => F(v.INT32, r2[e5], o2[e5]));
            case "scalar":
              const a2 = e4.V.T;
              return n4.every((e5) => F(a2, r2[e5], o2[e5]));
          }
      }
    }), clone(e3) {
      const t3 = e3.getType(), n3 = new t3(), r2 = n3;
      for (const n4 of t3.fields.byMember()) {
        const t4 = e3[n4.localName];
        let o2;
        if (n4.repeated) o2 = t4.map(Se);
        else if ("map" == n4.kind) {
          o2 = r2[n4.localName];
          for (const [e4, n5] of Object.entries(t4)) o2[e4] = Se(n5);
        } else o2 = "oneof" == n4.kind ? n4.findField(t4.case) ? { case: t4.case, value: Se(t4.value) } : { case: void 0 } : Se(t4);
        r2[n4.localName] = o2;
      }
      for (const n4 of t3.runtime.bin.listUnknownFields(e3)) t3.runtime.bin.onUnknownField(r2, n4.no, n4.wireType, n4.data);
      return n3;
    } }, newFieldList: t2, initFields: n2 }, makeMessageType(e3, t3, n3) {
      return (function(e4, t4, n4, r2) {
        const o2 = r2?.localName ?? t4.substring(t4.lastIndexOf(".") + 1), a2 = { [o2]: function(t5) {
          e4.util.initFields(this), e4.util.initPartial(t5, this);
        } }[o2];
        return Object.setPrototypeOf(a2.prototype, new g()), Object.assign(a2, { runtime: e4, typeName: t4, fields: e4.util.newFieldList(n4), fromBinary: (e5, t5) => new a2().fromBinary(e5, t5), fromJson: (e5, t5) => new a2().fromJson(e5, t5), fromJsonString: (e5, t5) => new a2().fromJsonString(e5, t5), equals: (t5, n5) => e4.util.equals(a2, t5, n5) }), a2;
      })(this, e3, t3, n3);
    }, makeEnum: f, makeEnumType: d, getEnumType: m, makeExtension(e3, t3, n3) {
      return /* @__PURE__ */ (function(e4, t4, n4, r2) {
        let o2;
        return { typeName: t4, extendee: n4, get field() {
          if (!o2) {
            const n5 = "function" == typeof r2 ? r2() : r2;
            n5.name = t4.split(".").pop(), n5.jsonName = `[${t4}]`, o2 = e4.util.newFieldList([n5]).list()[0];
          }
          return o2;
        }, runtime: e4 };
      })(this, e3, t3, n3);
    } };
  }
  class be {
    constructor(e2, t2) {
      this._fields = e2, this._normalizer = t2;
    }
    findJsonName(e2) {
      if (!this.jsonNames) {
        const e3 = {};
        for (const t2 of this.list()) e3[t2.jsonName] = e3[t2.name] = t2;
        this.jsonNames = e3;
      }
      return this.jsonNames[e2];
    }
    find(e2) {
      if (!this.numbers) {
        const e3 = {};
        for (const t2 of this.list()) e3[t2.no] = t2;
        this.numbers = e3;
      }
      return this.numbers[e2];
    }
    list() {
      return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
      return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e2, t2) => e2.no - t2.no)), this.numbersAsc;
    }
    byMember() {
      if (!this.members) {
        this.members = [];
        const e2 = this.members;
        let t2;
        for (const n2 of this.list()) n2.oneof ? n2.oneof !== t2 && (t2 = n2.oneof, e2.push(t2)) : e2.push(n2);
      }
      return this.members;
    }
  }
  function ke(e2, t2) {
    const n2 = Fe(e2);
    return t2 ? n2 : Ae(Ue(n2));
  }
  function ve(e2) {
    return ke(e2, false);
  }
  const Pe = Fe;
  function Fe(e2) {
    let t2 = false;
    const n2 = [];
    for (let r2 = 0; r2 < e2.length; r2++) {
      let o2 = e2.charAt(r2);
      switch (o2) {
        case "_":
          t2 = true;
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          n2.push(o2), t2 = false;
          break;
        default:
          t2 && (t2 = false, o2 = o2.toUpperCase()), n2.push(o2);
      }
    }
    return n2.join("");
  }
  const De = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), Re = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), Je = (e2) => `${e2}$`, Ue = (e2) => Re.has(e2) ? Je(e2) : e2, Ae = (e2) => De.has(e2) ? Je(e2) : e2;
  class Le {
    constructor(e2) {
      this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e2, this.localName = ve(e2);
    }
    addField(e2) {
      s(e2.oneof === this, `field ${e2.name} not one of ${this.name}`), this.fields.push(e2);
    }
    findField(e2) {
      if (!this._lookup) {
        this._lookup = /* @__PURE__ */ Object.create(null);
        for (let e3 = 0; e3 < this.fields.length; e3++) this._lookup[this.fields[e3].localName] = this.fields[e3];
      }
      return this._lookup[e2];
    }
  }
  function Be(e2, t2) {
    const n2 = [];
    let r2;
    for (const o2 of "function" == typeof e2 ? e2() : e2) {
      const e3 = o2;
      if (e3.localName = ke(o2.name, void 0 !== o2.oneof), e3.jsonName = o2.jsonName ?? Pe(o2.name), e3.repeated = o2.repeated ?? false, "scalar" == o2.kind && (e3.L = o2.L ?? P.BIGINT), e3.delimited = o2.delimited ?? false, e3.req = o2.req ?? false, e3.opt = o2.opt ?? false, void 0 === o2.packed && (e3.packed = !!t2 && ("enum" == o2.kind || "scalar" == o2.kind && o2.T != v.BYTES && o2.T != v.STRING)), void 0 !== o2.oneof) {
        const t3 = "string" == typeof o2.oneof ? o2.oneof : o2.oneof.name;
        r2 && r2.name == t3 || (r2 = new Le(t3)), e3.oneof = r2, r2.addField(e3);
      }
      n2.push(e3);
    }
    return n2;
  }
  const Me = Oe("proto3", (e2) => new be(e2, (e3) => Be(e3, true)), (e2) => {
    for (const t2 of e2.getType().fields.byMember()) {
      if (t2.opt) continue;
      const n2 = t2.localName, r2 = e2;
      if (t2.repeated) r2[n2] = [];
      else switch (t2.kind) {
        case "oneof":
          r2[n2] = { case: void 0 };
          break;
        case "enum":
          r2[n2] = 0;
          break;
        case "map":
          r2[n2] = {};
          break;
        case "scalar":
          r2[n2] = D(t2.T, t2.L);
      }
    }
  }), xe = Oe("proto2", (e2) => new be(e2, (e3) => Be(e3, false)), (e2) => {
    for (const t2 of e2.getType().fields.byMember()) {
      const n2 = t2.localName, r2 = e2;
      if (t2.repeated) r2[n2] = [];
      else switch (t2.kind) {
        case "oneof":
          r2[n2] = { case: void 0 };
          break;
        case "map":
          r2[n2] = {};
      }
    }
  });
  Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
  var Ye = ((e2) => (e2[e2.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e2[e2.EDITION_LEGACY = 900] = "EDITION_LEGACY", e2[e2.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e2[e2.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e2[e2.EDITION_2023 = 1e3] = "EDITION_2023", e2[e2.EDITION_2024 = 1001] = "EDITION_2024", e2[e2.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e2[e2.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e2[e2.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e2[e2.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e2[e2.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e2[e2.EDITION_MAX = 2147483647] = "EDITION_MAX", e2))(Ye || {});
  xe.util.setEnumType(Ye, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
  const Ce = class e2 extends g {
    constructor(e3) {
      super(), this.file = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ce.runtime = xe, Ce.typeName = "google.protobuf.FileDescriptorSet", Ce.fields = xe.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: Ve, repeated: true }]);
  const je = class e2 extends g {
    constructor(e3) {
      super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  je.runtime = xe, je.typeName = "google.protobuf.FileDescriptorProto", je.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: qe, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: lt, repeated: true }, { no: 6, name: "service", kind: "message", T: ft, repeated: true }, { no: 7, name: "extension", kind: "message", T: nt, repeated: true }, { no: 8, name: "options", kind: "message", T: yt, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: an, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }]);
  let Ve = je;
  const Ge = class e2 extends g {
    constructor(e3) {
      super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ge.runtime = xe, Ge.typeName = "google.protobuf.DescriptorProto", Ge.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: nt, repeated: true }, { no: 6, name: "extension", kind: "message", T: nt, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: Ge, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: lt, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: We, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: st, repeated: true }, { no: 7, name: "options", kind: "message", T: _t, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: Ke, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
  let qe = Ge;
  const $e = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  $e.runtime = xe, $e.typeName = "google.protobuf.DescriptorProto.ExtensionRange", $e.fields = xe.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: He, opt: true }]);
  let We = $e;
  const Xe = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Xe.runtime = xe, Xe.typeName = "google.protobuf.DescriptorProto.ReservedRange", Xe.fields = xe.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
  let Ke = Xe;
  const Ze = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], this.declaration = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ze.runtime = xe, Ze.typeName = "google.protobuf.ExtensionRangeOptions", Ze.fields = xe.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }, { no: 2, name: "declaration", kind: "message", T: et, repeated: true }, { no: 50, name: "features", kind: "message", T: Xt, opt: true }, { no: 3, name: "verification", kind: "enum", T: xe.getEnumType(ze), opt: true, default: 1 }]);
  let He = Ze;
  var ze = ((e2) => (e2[e2.DECLARATION = 0] = "DECLARATION", e2[e2.UNVERIFIED = 1] = "UNVERIFIED", e2))(ze || {});
  xe.util.setEnumType(ze, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
  const Qe = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Qe.runtime = xe, Qe.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", Qe.fields = xe.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
  let et = Qe;
  const tt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  tt.runtime = xe, tt.typeName = "google.protobuf.FieldDescriptorProto", tt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: xe.getEnumType(ot), opt: true }, { no: 5, name: "type", kind: "enum", T: xe.getEnumType(rt), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: St, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
  let nt = tt;
  var rt = ((e2) => (e2[e2.DOUBLE = 1] = "DOUBLE", e2[e2.FLOAT = 2] = "FLOAT", e2[e2.INT64 = 3] = "INT64", e2[e2.UINT64 = 4] = "UINT64", e2[e2.INT32 = 5] = "INT32", e2[e2.FIXED64 = 6] = "FIXED64", e2[e2.FIXED32 = 7] = "FIXED32", e2[e2.BOOL = 8] = "BOOL", e2[e2.STRING = 9] = "STRING", e2[e2.GROUP = 10] = "GROUP", e2[e2.MESSAGE = 11] = "MESSAGE", e2[e2.BYTES = 12] = "BYTES", e2[e2.UINT32 = 13] = "UINT32", e2[e2.ENUM = 14] = "ENUM", e2[e2.SFIXED32 = 15] = "SFIXED32", e2[e2.SFIXED64 = 16] = "SFIXED64", e2[e2.SINT32 = 17] = "SINT32", e2[e2.SINT64 = 18] = "SINT64", e2))(rt || {});
  xe.util.setEnumType(rt, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
  var ot = ((e2) => (e2[e2.OPTIONAL = 1] = "OPTIONAL", e2[e2.REPEATED = 3] = "REPEATED", e2[e2.REQUIRED = 2] = "REQUIRED", e2))(ot || {});
  xe.util.setEnumType(ot, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
  const at = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  at.runtime = xe, at.typeName = "google.protobuf.OneofDescriptorProto", at.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: Jt, opt: true }]);
  let st = at;
  const it = class e2 extends g {
    constructor(e3) {
      super(), this.value = [], this.reservedRange = [], this.reservedName = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  it.runtime = xe, it.typeName = "google.protobuf.EnumDescriptorProto", it.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: pt, repeated: true }, { no: 3, name: "options", kind: "message", T: At, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: ct, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
  let lt = it;
  const ut = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  ut.runtime = xe, ut.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", ut.fields = xe.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
  let ct = ut;
  const mt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  mt.runtime = xe, mt.typeName = "google.protobuf.EnumValueDescriptorProto", mt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: Bt, opt: true }]);
  let pt = mt;
  const dt = class e2 extends g {
    constructor(e3) {
      super(), this.method = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  dt.runtime = xe, dt.typeName = "google.protobuf.ServiceDescriptorProto", dt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: gt, repeated: true }, { no: 3, name: "options", kind: "message", T: xt, opt: true }]);
  let ft = dt;
  const Tt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Tt.runtime = xe, Tt.typeName = "google.protobuf.MethodDescriptorProto", Tt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: Ct, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
  let gt = Tt;
  const Et = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Et.runtime = xe, Et.typeName = "google.protobuf.FileOptions", Et.fields = xe.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: xe.getEnumType(ht), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let yt = Et;
  var ht = ((e2) => (e2[e2.SPEED = 1] = "SPEED", e2[e2.CODE_SIZE = 2] = "CODE_SIZE", e2[e2.LITE_RUNTIME = 3] = "LITE_RUNTIME", e2))(ht || {});
  xe.util.setEnumType(ht, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
  const Nt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Nt.runtime = xe, Nt.typeName = "google.protobuf.MessageOptions", Nt.fields = xe.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let _t = Nt;
  const It = class e2 extends g {
    constructor(e3) {
      super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  It.runtime = xe, It.typeName = "google.protobuf.FieldOptions", It.fields = xe.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: xe.getEnumType(wt), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: xe.getEnumType(Ot), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: xe.getEnumType(bt), opt: true }, { no: 19, name: "targets", kind: "enum", T: xe.getEnumType(kt), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: Pt, repeated: true }, { no: 21, name: "features", kind: "message", T: Xt, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Dt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let St = It;
  var wt = ((e2) => (e2[e2.STRING = 0] = "STRING", e2[e2.CORD = 1] = "CORD", e2[e2.STRING_PIECE = 2] = "STRING_PIECE", e2))(wt || {});
  xe.util.setEnumType(wt, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
  var Ot = ((e2) => (e2[e2.JS_NORMAL = 0] = "JS_NORMAL", e2[e2.JS_STRING = 1] = "JS_STRING", e2[e2.JS_NUMBER = 2] = "JS_NUMBER", e2))(Ot || {});
  xe.util.setEnumType(Ot, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
  var bt = ((e2) => (e2[e2.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e2[e2.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e2[e2.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e2))(bt || {});
  xe.util.setEnumType(bt, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
  var kt = ((e2) => (e2[e2.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e2[e2.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e2[e2.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e2[e2.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e2[e2.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e2[e2.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e2[e2.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e2[e2.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e2[e2.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e2[e2.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e2))(kt || {});
  xe.util.setEnumType(kt, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
  const vt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  vt.runtime = xe, vt.typeName = "google.protobuf.FieldOptions.EditionDefault", vt.fields = xe.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
  let Pt = vt;
  const Ft = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ft.runtime = xe, Ft.typeName = "google.protobuf.FieldOptions.FeatureSupport", Ft.fields = xe.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: xe.getEnumType(Ye), opt: true }]);
  let Dt = Ft;
  const Rt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Rt.runtime = xe, Rt.typeName = "google.protobuf.OneofOptions", Rt.fields = xe.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let Jt = Rt;
  const Ut = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ut.runtime = xe, Ut.typeName = "google.protobuf.EnumOptions", Ut.fields = xe.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let At = Ut;
  const Lt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Lt.runtime = xe, Lt.typeName = "google.protobuf.EnumValueOptions", Lt.fields = xe.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: Xt, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Dt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let Bt = Lt;
  const Mt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Mt.runtime = xe, Mt.typeName = "google.protobuf.ServiceOptions", Mt.fields = xe.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: Xt, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let xt = Mt;
  const Yt = class e2 extends g {
    constructor(e3) {
      super(), this.uninterpretedOption = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Yt.runtime = xe, Yt.typeName = "google.protobuf.MethodOptions", Yt.fields = xe.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: xe.getEnumType(jt), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: Xt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: true }]);
  let Ct = Yt;
  var jt = ((e2) => (e2[e2.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e2[e2.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e2[e2.IDEMPOTENT = 2] = "IDEMPOTENT", e2))(jt || {});
  xe.util.setEnumType(jt, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
  const Vt = class e2 extends g {
    constructor(e3) {
      super(), this.name = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Vt.runtime = xe, Vt.typeName = "google.protobuf.UninterpretedOption", Vt.fields = xe.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: $t, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
  let Gt = Vt;
  const qt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  qt.runtime = xe, qt.typeName = "google.protobuf.UninterpretedOption.NamePart", qt.fields = xe.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
  let $t = qt;
  const Wt = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Wt.runtime = xe, Wt.typeName = "google.protobuf.FeatureSet", Wt.fields = xe.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: xe.getEnumType(Kt), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: xe.getEnumType(Zt), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: xe.getEnumType(Ht), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: xe.getEnumType(zt), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: xe.getEnumType(Qt), opt: true }, { no: 6, name: "json_format", kind: "enum", T: xe.getEnumType(en), opt: true }]);
  let Xt = Wt;
  var Kt = ((e2) => (e2[e2.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e2[e2.EXPLICIT = 1] = "EXPLICIT", e2[e2.IMPLICIT = 2] = "IMPLICIT", e2[e2.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e2))(Kt || {});
  xe.util.setEnumType(Kt, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
  var Zt = ((e2) => (e2[e2.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e2[e2.OPEN = 1] = "OPEN", e2[e2.CLOSED = 2] = "CLOSED", e2))(Zt || {});
  xe.util.setEnumType(Zt, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
  var Ht = ((e2) => (e2[e2.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e2[e2.PACKED = 1] = "PACKED", e2[e2.EXPANDED = 2] = "EXPANDED", e2))(Ht || {});
  xe.util.setEnumType(Ht, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
  var zt = ((e2) => (e2[e2.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e2[e2.VERIFY = 2] = "VERIFY", e2[e2.NONE = 3] = "NONE", e2))(zt || {});
  xe.util.setEnumType(zt, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
  var Qt = ((e2) => (e2[e2.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e2[e2.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e2[e2.DELIMITED = 2] = "DELIMITED", e2))(Qt || {});
  xe.util.setEnumType(Qt, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
  var en = ((e2) => (e2[e2.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e2[e2.ALLOW = 1] = "ALLOW", e2[e2.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e2))(en || {});
  xe.util.setEnumType(en, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
  const tn = class e2 extends g {
    constructor(e3) {
      super(), this.defaults = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  tn.runtime = xe, tn.typeName = "google.protobuf.FeatureSetDefaults", tn.fields = xe.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: rn, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }]);
  const nn = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  nn.runtime = xe, nn.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", nn.fields = xe.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: Xt, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: Xt, opt: true }]);
  let rn = nn;
  const on = class e2 extends g {
    constructor(e3) {
      super(), this.location = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  on.runtime = xe, on.typeName = "google.protobuf.SourceCodeInfo", on.fields = xe.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: ln, repeated: true }]);
  let an = on;
  const sn = class e2 extends g {
    constructor(e3) {
      super(), this.path = [], this.span = [], this.leadingDetachedComments = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  sn.runtime = xe, sn.typeName = "google.protobuf.SourceCodeInfo.Location", sn.fields = xe.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
  let ln = sn;
  const un = class e2 extends g {
    constructor(e3) {
      super(), this.annotation = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  un.runtime = xe, un.typeName = "google.protobuf.GeneratedCodeInfo", un.fields = xe.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: pn, repeated: true }]);
  let cn = un;
  const mn = class e2 extends g {
    constructor(e3) {
      super(), this.path = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  mn.runtime = xe, mn.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", mn.fields = xe.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: xe.getEnumType(dn), opt: true }]);
  let pn = mn;
  var dn = ((e2) => (e2[e2.NONE = 0] = "NONE", e2[e2.SET = 1] = "SET", e2[e2.ALIAS = 2] = "ALIAS", e2))(dn || {});
  xe.util.setEnumType(dn, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
  rt.DOUBLE, v.DOUBLE, rt.FLOAT, v.FLOAT, rt.INT64, v.INT64, rt.UINT64, v.UINT64, rt.INT32, v.INT32, rt.FIXED64, v.FIXED64, rt.FIXED32, v.FIXED32, rt.BOOL, v.BOOL, rt.STRING, v.STRING, rt.GROUP, rt.MESSAGE, rt.BYTES, v.BYTES, rt.UINT32, v.UINT32, rt.ENUM, rt.SFIXED32, v.SFIXED32, rt.SFIXED64, v.SFIXED64, rt.SINT32, v.SINT32, rt.SINT64, v.SINT64;
  const fn = class e2 extends g {
    constructor(e3) {
      super(), this.seconds = k.zero, this.nanos = 0, Me.util.initPartial(e3, this);
    }
    fromJson(e3, t2) {
      if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${Me.json.debug(e3)}`);
      const n2 = e3.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
      if (!n2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
      const r2 = Date.parse(n2[1] + "-" + n2[2] + "-" + n2[3] + "T" + n2[4] + ":" + n2[5] + ":" + n2[6] + (n2[8] ? n2[8] : "Z"));
      if (Number.isNaN(r2)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
      if (r2 < Date.parse("0001-01-01T00:00:00Z") || r2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
      return this.seconds = k.parse(r2 / 1e3), this.nanos = 0, n2[7] && (this.nanos = parseInt("1" + n2[7] + "0".repeat(9 - n2[7].length)) - 1e9), this;
    }
    toJson(e3) {
      const t2 = 1e3 * Number(this.seconds);
      if (t2 < Date.parse("0001-01-01T00:00:00Z") || t2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
      if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
      let n2 = "Z";
      if (this.nanos > 0) {
        const e4 = (this.nanos + 1e9).toString().substring(1);
        n2 = "000000" === e4.substring(3) ? "." + e4.substring(0, 3) + "Z" : "000" === e4.substring(6) ? "." + e4.substring(0, 6) + "Z" : "." + e4 + "Z";
      }
      return new Date(t2).toISOString().replace(".000Z", n2);
    }
    toDate() {
      return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
    }
    static now() {
      return e2.fromDate(/* @__PURE__ */ new Date());
    }
    static fromDate(t2) {
      const n2 = t2.getTime();
      return new e2({ seconds: k.parse(Math.floor(n2 / 1e3)), nanos: n2 % 1e3 * 1e6 });
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  fn.runtime = Me, fn.typeName = "google.protobuf.Timestamp", fn.fields = Me.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  const Tn = class e2 extends g {
    constructor(e3) {
      super(), this.seconds = k.zero, this.nanos = 0, Me.util.initPartial(e3, this);
    }
    fromJson(e3, t2) {
      if ("string" != typeof e3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e3)}`);
      const n2 = e3.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
      if (null === n2) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e3)}`);
      const r2 = Number(n2[1]);
      if (r2 > 315576e6 || r2 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e3)}`);
      if (this.seconds = k.parse(r2), "string" == typeof n2[2]) {
        const e4 = n2[2] + "0".repeat(9 - n2[2].length);
        this.nanos = parseInt(e4), (r2 < 0 || Object.is(r2, -0)) && (this.nanos = -this.nanos);
      }
      return this;
    }
    toJson(e3) {
      if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
      let t2 = this.seconds.toString();
      if (0 !== this.nanos) {
        let e4 = Math.abs(this.nanos).toString();
        e4 = "0".repeat(9 - e4.length) + e4, "000000" === e4.substring(3) ? e4 = e4.substring(0, 3) : "000" === e4.substring(6) && (e4 = e4.substring(0, 6)), t2 += "." + e4, this.nanos < 0 && 0 == Number(this.seconds) && (t2 = "-" + t2);
      }
      return t2 + "s";
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Tn.runtime = Me, Tn.typeName = "google.protobuf.Duration", Tn.fields = Me.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
  const gn = class e2 extends g {
    constructor(e3) {
      super(), this.typeUrl = "", this.value = new Uint8Array(0), Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      if ("" === this.typeUrl) return {};
      const t2 = this.typeUrlToName(this.typeUrl), n2 = e3?.typeRegistry?.findMessage(t2);
      if (!n2) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
      let r2 = n2.fromBinary(this.value).toJson(e3);
      return (t2.startsWith("google.protobuf.") || null === r2 || Array.isArray(r2) || "object" != typeof r2) && (r2 = { value: r2 }), r2["@type"] = this.typeUrl, r2;
    }
    fromJson(e3, t2) {
      if (null === e3 || Array.isArray(e3) || "object" != typeof e3) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e3 ? "null" : Array.isArray(e3) ? "array" : typeof e3));
      if (0 == Object.keys(e3).length) return this;
      const n2 = e3["@type"];
      if ("string" != typeof n2 || "" == n2) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
      const r2 = this.typeUrlToName(n2), o2 = t2?.typeRegistry?.findMessage(r2);
      if (!o2) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${n2} is not in the type registry`);
      let a2;
      if (r2.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e3, "value")) a2 = o2.fromJson(e3.value, t2);
      else {
        const n3 = Object.assign({}, e3);
        delete n3["@type"], a2 = o2.fromJson(n3, t2);
      }
      return this.packFrom(a2), this;
    }
    packFrom(e3) {
      this.value = e3.toBinary(), this.typeUrl = this.typeNameToUrl(e3.getType().typeName);
    }
    unpackTo(e3) {
      return !!this.is(e3.getType()) && (e3.fromBinary(this.value), true);
    }
    unpack(e3) {
      if ("" === this.typeUrl) return;
      const t2 = e3.findMessage(this.typeUrlToName(this.typeUrl));
      return t2 ? t2.fromBinary(this.value) : void 0;
    }
    is(e3) {
      if ("" === this.typeUrl) return false;
      const t2 = this.typeUrlToName(this.typeUrl);
      let n2 = "";
      return n2 = "string" == typeof e3 ? e3 : e3.typeName, t2 === n2;
    }
    typeNameToUrl(e3) {
      return `type.googleapis.com/${e3}`;
    }
    typeUrlToName(e3) {
      if (!e3.length) throw new Error(`invalid type url: ${e3}`);
      const t2 = e3.lastIndexOf("/"), n2 = t2 >= 0 ? e3.substring(t2 + 1) : e3;
      if (!n2.length) throw new Error(`invalid type url: ${e3}`);
      return n2;
    }
    static pack(t2) {
      const n2 = new e2();
      return n2.packFrom(t2), n2;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  gn.runtime = Me, gn.typeName = "google.protobuf.Any", gn.fields = Me.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
  let En = gn;
  const yn = class e2 extends g {
    constructor(e3) {
      super(), Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  yn.runtime = Me, yn.typeName = "google.protobuf.Empty", yn.fields = Me.util.newFieldList(() => []);
  const hn = class e2 extends g {
    constructor(e3) {
      super(), this.paths = [], Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return this.paths.map((e4) => {
        if (e4.match(/_[0-9]?_/g) || e4.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e4 + '" is irreversible');
        return (function(e5) {
          let t2 = false;
          const n2 = [];
          for (let r2 = 0; r2 < e5.length; r2++) {
            let o2 = e5.charAt(r2);
            switch (o2) {
              case "_":
                t2 = true;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                n2.push(o2), t2 = false;
                break;
              default:
                t2 && (t2 = false, o2 = o2.toUpperCase()), n2.push(o2);
            }
          }
          return n2.join("");
        })(e4);
      }).join(",");
    }
    fromJson(e3, t2) {
      if ("string" != typeof e3) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + Me.json.debug(e3));
      if ("" === e3) return this;
      return this.paths = e3.split(",").map(function(e4) {
        if (e4.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
        const t3 = e4.replace(/[A-Z]/g, (e5) => "_" + e5.toLowerCase());
        return "_" === t3[0] ? t3.substring(1) : t3;
      }), this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  hn.runtime = Me, hn.typeName = "google.protobuf.FieldMask", hn.fields = Me.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
  var Nn = ((e2) => (e2[e2.NULL_VALUE = 0] = "NULL_VALUE", e2))(Nn || {});
  Me.util.setEnumType(Nn, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
  const _n = class e2 extends g {
    constructor(e3) {
      super(), this.fields = {}, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      const t2 = {};
      for (const [n2, r2] of Object.entries(this.fields)) t2[n2] = r2.toJson(e3);
      return t2;
    }
    fromJson(e3, t2) {
      if ("object" != typeof e3 || null == e3 || Array.isArray(e3)) throw new Error("cannot decode google.protobuf.Struct from JSON " + Me.json.debug(e3));
      for (const [t3, n2] of Object.entries(e3)) this.fields[t3] = wn.fromJson(n2);
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  _n.runtime = Me, _n.typeName = "google.protobuf.Struct", _n.fields = Me.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: wn } }]);
  let In = _n;
  const Sn = class e2 extends g {
    constructor(e3) {
      super(), this.kind = { case: void 0 }, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      switch (this.kind.case) {
        case "nullValue":
          return null;
        case "numberValue":
          if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
          return this.kind.value;
        case "boolValue":
        case "stringValue":
          return this.kind.value;
        case "structValue":
        case "listValue":
          return this.kind.value.toJson({ ...e3, emitDefaultValues: true });
      }
      throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(e3, t2) {
      switch (typeof e3) {
        case "number":
          this.kind = { case: "numberValue", value: e3 };
          break;
        case "string":
          this.kind = { case: "stringValue", value: e3 };
          break;
        case "boolean":
          this.kind = { case: "boolValue", value: e3 };
          break;
        case "object":
          null === e3 ? this.kind = { case: "nullValue", value: 0 } : Array.isArray(e3) ? this.kind = { case: "listValue", value: bn.fromJson(e3) } : this.kind = { case: "structValue", value: In.fromJson(e3) };
          break;
        default:
          throw new Error("cannot decode google.protobuf.Value from JSON " + Me.json.debug(e3));
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Sn.runtime = Me, Sn.typeName = "google.protobuf.Value", Sn.fields = Me.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: Me.getEnumType(Nn), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: In, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: bn, oneof: "kind" }]);
  let wn = Sn;
  const On = class e2 extends g {
    constructor(e3) {
      super(), this.values = [], Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return this.values.map((e4) => e4.toJson());
    }
    fromJson(e3, t2) {
      if (!Array.isArray(e3)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + Me.json.debug(e3));
      for (let t3 of e3) this.values.push(wn.fromJson(t3));
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  On.runtime = Me, On.typeName = "google.protobuf.ListValue", On.fields = Me.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: wn, repeated: true }]);
  let bn = On;
  const kn = class e2 extends g {
    constructor(e3) {
      super(), this.value = 0, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.DOUBLE, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.DOUBLE, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  kn.runtime = Me, kn.typeName = "google.protobuf.DoubleValue", kn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), kn.fieldWrapper = { wrapField: (e2) => new kn({ value: e2 }), unwrapField: (e2) => e2.value };
  const vn = class e2 extends g {
    constructor(e3) {
      super(), this.value = 0, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.FLOAT, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.FLOAT, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.FloatValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  vn.runtime = Me, vn.typeName = "google.protobuf.FloatValue", vn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), vn.fieldWrapper = { wrapField: (e2) => new vn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Pn = class e2 extends g {
    constructor(e3) {
      super(), this.value = k.zero, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.INT64, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.INT64, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.Int64Value from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Pn.runtime = Me, Pn.typeName = "google.protobuf.Int64Value", Pn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), Pn.fieldWrapper = { wrapField: (e2) => new Pn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Fn = class e2 extends g {
    constructor(e3) {
      super(), this.value = k.zero, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.UINT64, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.UINT64, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Fn.runtime = Me, Fn.typeName = "google.protobuf.UInt64Value", Fn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), Fn.fieldWrapper = { wrapField: (e2) => new Fn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Dn = class e2 extends g {
    constructor(e3) {
      super(), this.value = 0, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.INT32, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.INT32, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.Int32Value from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Dn.runtime = Me, Dn.typeName = "google.protobuf.Int32Value", Dn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), Dn.fieldWrapper = { wrapField: (e2) => new Dn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Rn = class e2 extends g {
    constructor(e3) {
      super(), this.value = 0, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.UINT32, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.UINT32, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Rn.runtime = Me, Rn.typeName = "google.protobuf.UInt32Value", Rn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), Rn.fieldWrapper = { wrapField: (e2) => new Rn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Jn = class e2 extends g {
    constructor(e3) {
      super(), this.value = false, Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.BOOL, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.BOOL, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.BoolValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Jn.runtime = Me, Jn.typeName = "google.protobuf.BoolValue", Jn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), Jn.fieldWrapper = { wrapField: (e2) => new Jn({ value: e2 }), unwrapField: (e2) => e2.value };
  const Un = class e2 extends g {
    constructor(e3) {
      super(), this.value = "", Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.STRING, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.STRING, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.StringValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Un.runtime = Me, Un.typeName = "google.protobuf.StringValue", Un.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), Un.fieldWrapper = { wrapField: (e2) => new Un({ value: e2 }), unwrapField: (e2) => e2.value };
  const An = class e2 extends g {
    constructor(e3) {
      super(), this.value = new Uint8Array(0), Me.util.initPartial(e3, this);
    }
    toJson(e3) {
      return Me.json.writeScalar(v.BYTES, this.value, true);
    }
    fromJson(e3, t2) {
      try {
        this.value = Me.json.readScalar(v.BYTES, e3);
      } catch (e4) {
        let t3 = 'cannot decode message google.protobuf.BytesValue from JSON"';
        throw e4 instanceof Error && e4.message.length > 0 && (t3 += `: ${e4.message}`), new Error(t3);
      }
      return this;
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  An.runtime = Me, An.typeName = "google.protobuf.BytesValue", An.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), An.fieldWrapper = { wrapField: (e2) => new An({ value: e2 }), unwrapField: (e2) => e2.value };
  m(Nn);
  const Ln = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Ln.runtime = xe, Ln.typeName = "google.protobuf.compiler.Version", Ln.fields = xe.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
  let Bn = Ln;
  const Mn = class e2 extends g {
    constructor(e3) {
      super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Mn.runtime = xe, Mn.typeName = "google.protobuf.compiler.CodeGeneratorRequest", Mn.fields = xe.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: Ve, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: Ve, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: Bn, opt: true }]);
  const xn = class e2 extends g {
    constructor(e3) {
      super(), this.file = [], xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  xn.runtime = xe, xn.typeName = "google.protobuf.compiler.CodeGeneratorResponse", xn.fields = xe.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: jn, repeated: true }]);
  var Yn = ((e2) => (e2[e2.NONE = 0] = "NONE", e2[e2.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e2[e2.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e2))(Yn || {});
  xe.util.setEnumType(Yn, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
  const Cn = class e2 extends g {
    constructor(e3) {
      super(), xe.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return xe.util.equals(e2, t2, n2);
    }
  };
  Cn.runtime = xe, Cn.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", Cn.fields = xe.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: cn, opt: true }]);
  let jn = Cn;
  const Vn = class e2 extends g {
    constructor(e3) {
      super(), this.fileName = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Vn.runtime = Me, Vn.typeName = "google.protobuf.SourceContext", Vn.fields = Me.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
  let Gn = Vn;
  var qn = ((e2) => (e2[e2.PROTO2 = 0] = "PROTO2", e2[e2.PROTO3 = 1] = "PROTO3", e2[e2.EDITIONS = 2] = "EDITIONS", e2))(qn || {});
  Me.util.setEnumType(qn, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
  const $n = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  $n.runtime = Me, $n.typeName = "google.protobuf.Type", $n.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: Xn, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: tr, repeated: true }, { no: 5, name: "source_context", kind: "message", T: Gn }, { no: 6, name: "syntax", kind: "enum", T: Me.getEnumType(qn) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
  const Wn = class e2 extends g {
    constructor(e3) {
      super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Wn.runtime = Me, Wn.typeName = "google.protobuf.Field", Wn.fields = Me.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: Me.getEnumType(Kn) }, { no: 2, name: "cardinality", kind: "enum", T: Me.getEnumType(Zn) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: tr, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
  let Xn = Wn;
  var Kn = ((e2) => (e2[e2.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e2[e2.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e2[e2.TYPE_FLOAT = 2] = "TYPE_FLOAT", e2[e2.TYPE_INT64 = 3] = "TYPE_INT64", e2[e2.TYPE_UINT64 = 4] = "TYPE_UINT64", e2[e2.TYPE_INT32 = 5] = "TYPE_INT32", e2[e2.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e2[e2.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e2[e2.TYPE_BOOL = 8] = "TYPE_BOOL", e2[e2.TYPE_STRING = 9] = "TYPE_STRING", e2[e2.TYPE_GROUP = 10] = "TYPE_GROUP", e2[e2.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e2[e2.TYPE_BYTES = 12] = "TYPE_BYTES", e2[e2.TYPE_UINT32 = 13] = "TYPE_UINT32", e2[e2.TYPE_ENUM = 14] = "TYPE_ENUM", e2[e2.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e2[e2.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e2[e2.TYPE_SINT32 = 17] = "TYPE_SINT32", e2[e2.TYPE_SINT64 = 18] = "TYPE_SINT64", e2))(Kn || {});
  Me.util.setEnumType(Kn, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
  var Zn = ((e2) => (e2[e2.UNKNOWN = 0] = "UNKNOWN", e2[e2.OPTIONAL = 1] = "OPTIONAL", e2[e2.REQUIRED = 2] = "REQUIRED", e2[e2.REPEATED = 3] = "REPEATED", e2))(Zn || {});
  Me.util.setEnumType(Zn, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
  const Hn = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  Hn.runtime = Me, Hn.typeName = "google.protobuf.Enum", Hn.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: Qn, repeated: true }, { no: 3, name: "options", kind: "message", T: tr, repeated: true }, { no: 4, name: "source_context", kind: "message", T: Gn }, { no: 5, name: "syntax", kind: "enum", T: Me.getEnumType(qn) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
  const zn = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.number = 0, this.options = [], Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  zn.runtime = Me, zn.typeName = "google.protobuf.EnumValue", zn.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: tr, repeated: true }]);
  let Qn = zn;
  const er = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  er.runtime = Me, er.typeName = "google.protobuf.Option", er.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: En }]);
  let tr = er;
  const nr = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = qn.PROTO2, Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  nr.runtime = Me, nr.typeName = "google.protobuf.Api", nr.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: or, repeated: true }, { no: 3, name: "options", kind: "message", T: tr, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: Gn }, { no: 6, name: "mixins", kind: "message", T: sr, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: Me.getEnumType(qn) }]);
  const rr = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = qn.PROTO2, Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  rr.runtime = Me, rr.typeName = "google.protobuf.Method", rr.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: tr, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: Me.getEnumType(qn) }]);
  let or = rr;
  const ar = class e2 extends g {
    constructor(e3) {
      super(), this.name = "", this.root = "", Me.util.initPartial(e3, this);
    }
    static fromBinary(t2, n2) {
      return new e2().fromBinary(t2, n2);
    }
    static fromJson(t2, n2) {
      return new e2().fromJson(t2, n2);
    }
    static fromJsonString(t2, n2) {
      return new e2().fromJsonString(t2, n2);
    }
    static equals(t2, n2) {
      return Me.util.equals(e2, t2, n2);
    }
  };
  ar.runtime = Me, ar.typeName = "google.protobuf.Mixin", ar.fields = Me.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
  let sr = ar;
  const ir = Me.makeMessageType("aiserver.v1.ErrorDetails", () => [{ no: 1, name: "error", kind: "enum", T: Me.getEnumType(lr) }, { no: 2, name: "details", kind: "message", T: ur }, { no: 3, name: "is_expected", kind: "scalar", T: 8, opt: true }]), lr = Me.makeEnum("aiserver.v1.ErrorDetails.Error", [{ no: 0, name: "ERROR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "ERROR_BAD_API_KEY", localName: "BAD_API_KEY" }, { no: 42, name: "ERROR_BAD_USER_API_KEY", localName: "BAD_USER_API_KEY" }, { no: 2, name: "ERROR_NOT_LOGGED_IN", localName: "NOT_LOGGED_IN" }, { no: 3, name: "ERROR_INVALID_AUTH_ID", localName: "INVALID_AUTH_ID" }, { no: 4, name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS", localName: "NOT_HIGH_ENOUGH_PERMISSIONS" }, { no: 18, name: "ERROR_AGENT_REQUIRES_LOGIN", localName: "AGENT_REQUIRES_LOGIN" }, { no: 5, name: "ERROR_BAD_MODEL_NAME", localName: "BAD_MODEL_NAME" }, { no: 39, name: "ERROR_NOT_FOUND", localName: "NOT_FOUND" }, { no: 40, name: "ERROR_DEPRECATED", localName: "DEPRECATED" }, { no: 6, name: "ERROR_USER_NOT_FOUND", localName: "USER_NOT_FOUND" }, { no: 7, name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED", localName: "FREE_USER_RATE_LIMIT_EXCEEDED" }, { no: 8, name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED", localName: "PRO_USER_RATE_LIMIT_EXCEEDED" }, { no: 9, name: "ERROR_FREE_USER_USAGE_LIMIT", localName: "FREE_USER_USAGE_LIMIT" }, { no: 10, name: "ERROR_PRO_USER_USAGE_LIMIT", localName: "PRO_USER_USAGE_LIMIT" }, { no: 41, name: "ERROR_RESOURCE_EXHAUSTED", localName: "RESOURCE_EXHAUSTED" }, { no: 11, name: "ERROR_AUTH_TOKEN_NOT_FOUND", localName: "AUTH_TOKEN_NOT_FOUND" }, { no: 12, name: "ERROR_AUTH_TOKEN_EXPIRED", localName: "AUTH_TOKEN_EXPIRED" }, { no: 13, name: "ERROR_OPENAI", localName: "OPENAI" }, { no: 14, name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED", localName: "OPENAI_RATE_LIMIT_EXCEEDED" }, { no: 20, name: "ERROR_MAX_TOKENS", localName: "MAX_TOKENS" }, { no: 23, name: "ERROR_PRO_USER_ONLY", localName: "PRO_USER_ONLY" }, { no: 21, name: "ERROR_USER_ABORTED_REQUEST", localName: "USER_ABORTED_REQUEST" }, { no: 25, name: "ERROR_TIMEOUT", localName: "TIMEOUT" }, { no: 22, name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED", localName: "GENERIC_RATE_LIMIT_EXCEEDED" }, { no: 28, name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT", localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT" }, { no: 29, name: "ERROR_CUSTOM_MESSAGE", localName: "CUSTOM_MESSAGE" }, { no: 30, name: "ERROR_OUTDATED_CLIENT", localName: "OUTDATED_CLIENT" }, { no: 31, name: "ERROR_CLAUDE_IMAGE_TOO_LARGE", localName: "CLAUDE_IMAGE_TOO_LARGE" }, { no: 33, name: "ERROR_FILE_NOT_FOUND", localName: "FILE_NOT_FOUND" }, { no: 34, name: "ERROR_API_KEY_RATE_LIMIT", localName: "API_KEY_RATE_LIMIT" }, { no: 35, name: "ERROR_DEBOUNCED", localName: "DEBOUNCED" }, { no: 36, name: "ERROR_BAD_REQUEST", localName: "BAD_REQUEST" }, { no: 37, name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED", localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED" }, { no: 38, name: "ERROR_UNAUTHORIZED", localName: "UNAUTHORIZED" }, { no: 43, name: "ERROR_CONVERSATION_TOO_LONG", localName: "CONVERSATION_TOO_LONG" }, { no: 44, name: "ERROR_USAGE_PRICING_REQUIRED", localName: "USAGE_PRICING_REQUIRED" }, { no: 45, name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE", localName: "USAGE_PRICING_REQUIRED_CHANGEABLE" }, { no: 46, name: "ERROR_GITHUB_NO_USER_CREDENTIALS", localName: "GITHUB_NO_USER_CREDENTIALS" }, { no: 47, name: "ERROR_GITHUB_USER_NO_ACCESS", localName: "GITHUB_USER_NO_ACCESS" }, { no: 48, name: "ERROR_GITHUB_APP_NO_ACCESS", localName: "GITHUB_APP_NO_ACCESS" }, { no: 49, name: "ERROR_GITHUB_MULTIPLE_OWNERS", localName: "GITHUB_MULTIPLE_OWNERS" }, { no: 50, name: "ERROR_RATE_LIMITED", localName: "RATE_LIMITED" }, { no: 51, name: "ERROR_RATE_LIMITED_CHANGEABLE", localName: "RATE_LIMITED_CHANGEABLE" }, { no: 52, name: "ERROR_CUSTOM", localName: "CUSTOM" }, { no: 53, name: "ERROR_HOOKS_BLOCKED", localName: "HOOKS_BLOCKED" }, { no: 54, name: "ERROR_SUSPICIOUS_USAGE_BLOCKED", localName: "SUSPICIOUS_USAGE_BLOCKED" }, { no: 55, name: "ERROR_EXTENSION_HOST_TIMEOUT", localName: "EXTENSION_HOST_TIMEOUT" }, { no: 56, name: "ERROR_NETWORK_ERROR", localName: "NETWORK_ERROR" }, { no: 57, name: "ERROR_PROVIDER_ERROR", localName: "PROVIDER_ERROR" }, { no: 58, name: "ERROR_MODEL_BLOCKED", localName: "MODEL_BLOCKED" }, { no: 59, name: "ERROR_INTERNAL", localName: "INTERNAL" }, { no: 60, name: "ERROR_MAX_MODE_REQUIRED", localName: "MAX_MODE_REQUIRED" }, { no: 61, name: "ERROR_MODEL_NO_LONGER_SUPPORTED", localName: "MODEL_NO_LONGER_SUPPORTED" }, { no: 62, name: "ERROR_PRICING_WARNING", localName: "PRICING_WARNING" }, { no: 63, name: "ERROR_SLOW_POOL", localName: "SLOW_POOL" }, { no: 64, name: "ERROR_UNSUPPORTED_REGION", localName: "UNSUPPORTED_REGION" }, { no: 65, name: "ERROR_ACCOUNT_CLOSED", localName: "ACCOUNT_CLOSED" }, { no: 66, name: "ERROR_TENANT_RESTRICTION_VIOLATION", localName: "TENANT_RESTRICTION_VIOLATION" }]), ur = Me.makeMessageType("aiserver.v1.CustomErrorDetails", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "detail", kind: "scalar", T: 9 }, { no: 3, name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_retryable", kind: "scalar", T: 8, opt: true }, { no: 5, name: "show_request_id", kind: "scalar", T: 8, opt: true }, { no: 6, name: "should_show_immediate_error", kind: "scalar", T: 8, opt: true }, { no: 8, name: "buttons", kind: "message", T: pr, repeated: true }, { no: 7, name: "additional_info", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 9, name: "plan_choices", kind: "message", T: mr, repeated: true }, { no: 10, name: "analytics_metadata", kind: "message", T: cr, opt: true }]), cr = Me.makeMessageType("aiserver.v1.ErrorAnalyticsMetadata", () => [{ no: 1, name: "action_required", kind: "scalar", T: 9, opt: true }]), mr = Me.makeMessageType("aiserver.v1.PlanChoice", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "sublabel", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "value", kind: "scalar", T: 9 }]), pr = Me.makeMessageType("aiserver.v1.ErrorButton", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "upgrade", kind: "message", T: Er, oneof: "action" }, { no: 3, name: "switch_model", kind: "message", T: yr, oneof: "action" }, { no: 4, name: "configure_spend_limit", kind: "message", T: Nr, oneof: "action" }, { no: 5, name: "url", kind: "message", T: _r, oneof: "action" }, { no: 6, name: "upgrade_choice", kind: "message", T: gr, oneof: "action" }, { no: 7, name: "dashboard_action", kind: "message", T: Tr, oneof: "action" }, { no: 8, name: "reload_window", kind: "message", T: fr, oneof: "action" }, { no: 9, name: "client_action", kind: "message", T: dr, oneof: "action" }]), dr = Me.makeMessageType("aiserver.v1.ClientAction", () => [{ no: 1, name: "command_id", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), fr = Me.makeMessageType("aiserver.v1.ReloadWindowAction", []), Tr = Me.makeMessageType("aiserver.v1.DashboardAction", () => [{ no: 1, name: "action", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 3, name: "success_message", kind: "scalar", T: 9, opt: true }]), gr = Me.makeMessageType("aiserver.v1.UpgradeChoice", []), Er = Me.makeMessageType("aiserver.v1.UpgradeAction", () => [{ no: 1, name: "membership_to_upgrade_to", kind: "scalar", T: 9 }, { no: 2, name: "try_immediate_upgrade", kind: "scalar", T: 8, opt: true }, { no: 3, name: "allow_trial", kind: "scalar", T: 8, opt: true }, { no: 4, name: "dashboard_action", kind: "message", T: Tr, opt: true }]), yr = Me.makeMessageType("aiserver.v1.SwitchModelAction", () => [{ no: 1, name: "suggested_model", kind: "scalar", T: 9, opt: true }, { no: 2, name: "parameters", kind: "message", T: hr, repeated: true }, { no: 3, name: "max_mode", kind: "scalar", T: 8, opt: true }]), hr = Me.makeMessageType("aiserver.v1.SwitchModelAction.ModelParameterValue", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "SwitchModelAction_ModelParameterValue" }), Nr = Me.makeMessageType("aiserver.v1.ConfigureSpendLimitAction", () => [{ no: 1, name: "confirm_label", kind: "scalar", T: 9 }]), _r = Me.makeMessageType("aiserver.v1.UrlAction", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }]), Ir = Me.makeMessageType("aiserver.v1.GetCursorServerUrlResponse", () => [{ no: 1, name: "host", kind: "scalar", T: 9 }, { no: 2, name: "port", kind: "scalar", T: 5 }, { no: 3, name: "connection_token", kind: "scalar", T: 9 }, { no: 4, name: "headers", kind: "message", T: Sr, repeated: true }, { no: 5, name: "upgrade_path", kind: "scalar", T: 9 }]), Sr = Me.makeMessageType("aiserver.v1.GetCursorServerUrlResponse.Header", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "GetCursorServerUrlResponse_Header" });
  function wr(e2) {
    return void 0 !== e2.upgradePath && "" !== e2.upgradePath;
  }
  var Or;
  function br(e2) {
    const t2 = Or[e2];
    return "string" != typeof t2 ? e2.toString() : t2[0].toLowerCase() + t2.substring(1).replace(/[A-Z]/g, (e3) => "_" + e3.toLowerCase());
  }
  !(function(e2) {
    e2[e2.Canceled = 1] = "Canceled", e2[e2.Unknown = 2] = "Unknown", e2[e2.InvalidArgument = 3] = "InvalidArgument", e2[e2.DeadlineExceeded = 4] = "DeadlineExceeded", e2[e2.NotFound = 5] = "NotFound", e2[e2.AlreadyExists = 6] = "AlreadyExists", e2[e2.PermissionDenied = 7] = "PermissionDenied", e2[e2.ResourceExhausted = 8] = "ResourceExhausted", e2[e2.FailedPrecondition = 9] = "FailedPrecondition", e2[e2.Aborted = 10] = "Aborted", e2[e2.OutOfRange = 11] = "OutOfRange", e2[e2.Unimplemented = 12] = "Unimplemented", e2[e2.Internal = 13] = "Internal", e2[e2.Unavailable = 14] = "Unavailable", e2[e2.DataLoss = 15] = "DataLoss", e2[e2.Unauthenticated = 16] = "Unauthenticated";
  })(Or || (Or = {}));
  class kr extends Error {
    constructor(e2, t2 = Or.Unknown, n2, r2, o2) {
      super((function(e3, t3) {
        return e3.length ? `[${br(t3)}] ${e3}` : `[${br(t3)}]`;
      })(e2, t2)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e2, this.code = t2, this.metadata = new Headers(null != n2 ? n2 : {}), this.details = null != r2 ? r2 : [], this.cause = o2;
    }
    static from(e2, t2 = Or.Unknown) {
      return e2 instanceof kr ? e2 : e2 instanceof Error ? "AbortError" == e2.name ? new kr(e2.message, Or.Canceled) : new kr(e2.message, t2, void 0, void 0, e2) : new kr(String(e2), t2, void 0, void 0, e2);
    }
    static [Symbol.hasInstance](e2) {
      return e2 instanceof Error && (Object.getPrototypeOf(e2) === kr.prototype || "ConnectError" === e2.name && "code" in e2 && "number" == typeof e2.code && "metadata" in e2 && "details" in e2 && Array.isArray(e2.details) && "rawMessage" in e2 && "string" == typeof e2.rawMessage && "cause" in e2);
    }
    findDetails(e2) {
      const t2 = "typeName" in e2 ? { findMessage: (t3) => t3 === e2.typeName ? e2 : void 0 } : e2, n2 = [];
      for (const e3 of this.details) {
        if ("getType" in e3) {
          t2.findMessage(e3.getType().typeName) && n2.push(e3);
          continue;
        }
        const r2 = t2.findMessage(e3.type);
        if (r2) try {
          n2.push(r2.fromBinary(e3.value));
        } catch (e4) {
        }
      }
      return n2;
    }
  }
  const vr = [0, 5e3, 5e3, 1e4, 1e4, 1e4, 3e4, 3e4, 6e4], Pr = 18e4, Fr = 63e4;
  function Dr(e2) {
    return vr[Math.min(e2, vr.length - 1)];
  }
  function Rr(e2, t2 = 0) {
    const n2 = Jr(e2);
    return void 0 !== n2 && t2 < n2;
  }
  function Jr(e2) {
    const t2 = Ur(e2);
    if (void 0 !== t2) return (function(e3) {
      switch (e3) {
        case "NO_POD_INFO_YET":
          return 1e4;
        case "NO_VM_CONNECTION_INFO_YET":
          return 3e4;
        case "EXEC_DAEMON_NOT_READY":
        case "POD_REPLACEMENT_IN_PROGRESS":
        case "WORKER_OFFLINE":
          return Pr;
        case "POD_MIGRATING":
          return Fr;
        default:
          return;
      }
    })(t2);
    const n2 = Br(e2);
    return n2 === Or.DeadlineExceeded || n2 === Or.Unavailable ? Pr : void 0;
  }
  function Ur(e2) {
    const t2 = e2 instanceof kr ? e2.findDetails(ir)[0] : void 0, n2 = t2?.details?.additionalInfo?.cursorServerUrlRetryReason;
    if (void 0 !== n2 && "" !== n2) return n2;
    const r2 = t2?.details?.additionalInfo?.cursorServerUrlReason;
    if (void 0 !== r2 && "" !== r2) return r2;
    const o2 = e2 instanceof Error ? e2.message : void 0, a2 = o2 ? /cursorServerUrlRetryReason=([A-Z_]+)/.exec(o2) : null;
    if (a2?.[1]) return a2[1];
    const s2 = o2 ? /cursorServerUrlReason=([A-Z_]+)/.exec(o2) : null;
    return s2?.[1];
  }
  const Ar = /* @__PURE__ */ new Set(["WORKER_UPDATE_REQUIRED"]);
  async function Lr(e2) {
    await new Promise((t2) => setTimeout(t2, e2));
  }
  function Br(e2) {
    if (e2 instanceof kr) return e2.code;
    if ("object" == typeof e2 && null !== e2 && "code" in e2) {
      const t3 = e2.code;
      if ("number" == typeof t3) return (function(e3) {
        switch (e3) {
          case Or.InvalidArgument:
            return Or.InvalidArgument;
          case Or.DeadlineExceeded:
            return Or.DeadlineExceeded;
          case Or.Unavailable:
            return Or.Unavailable;
          case Or.Internal:
            return Or.Internal;
          case Or.Unknown:
            return Or.Unknown;
          case Or.NotFound:
            return Or.NotFound;
          default:
            return;
        }
      })(t3);
    }
    if (!(e2 instanceof Error)) return;
    const t2 = /^\[([a-z_]+)\](?:\s|$)/.exec(e2.message);
    if (t2) return Mr(t2[1]);
    const n2 = "string" == typeof e2.stack ? /(?:^|\n)\s*ConnectError:\s*\[([a-z_]+)\](?:\s|$)/.exec(e2.stack) : null;
    return n2 ? Mr(n2[1]) : void 0;
  }
  function Mr(e2) {
    switch (e2) {
      case "invalid_argument":
        return Or.InvalidArgument;
      case "deadline_exceeded":
        return Or.DeadlineExceeded;
      case "unavailable":
        return Or.Unavailable;
      case "internal":
        return Or.Internal;
      case "unknown":
        return Or.Unknown;
      case "not_found":
        return Or.NotFound;
      default:
        return;
    }
  }
  function xr(e2) {
    return e2 instanceof Error && "CursorSocketTransient" === e2.code ? o.RemoteAuthorityResolverError.TemporarilyNotAvailable(e2.message) : e2;
  }
  function Yr(e2) {
    if ((function(e3) {
      return Br(e3) === Or.NotFound;
    })(e2)) return o.RemoteAuthorityResolverError.NotAvailable("This cloud agent's environment is no longer available.");
    const t2 = (function(e3) {
      const t3 = Ur(e3);
      if (void 0 === t3 || !Ar.has(t3)) return;
      const n2 = e3 instanceof kr ? e3.findDetails(ir)[0]?.details?.detail : void 0;
      if (void 0 !== n2 && "" !== n2) return n2;
      const r2 = (e3 instanceof Error ? e3.message : String(e3)).replace(/^\[[a-z_]+\]\s*/, "").replace(/\s*\(cursorServerUrlReason=[A-Z_]+\)\s*$/, "").trim();
      return "" !== r2 ? r2 : "This cloud agent's workspace is unavailable on its self-hosted worker.";
    })(e2);
    return void 0 !== t2 ? o.RemoteAuthorityResolverError.NotAvailable(t2) : e2;
  }
  function Cr(e2) {
    if (!(function(e3) {
      const t3 = Br(e3);
      return t3 === Or.Internal || t3 === Or.Unknown || t3 === Or.DeadlineExceeded || t3 === Or.Unavailable;
    })(e2)) return e2;
    const t2 = e2 instanceof Error ? e2.message : String(e2);
    return o.RemoteAuthorityResolverError.TemporarilyNotAvailable(t2);
  }
  let jr;
  function Vr(...e2) {
    const t2 = e2.map(String).join(" ");
    console.log(`[cursor-resolver]  ${t2}`), jr?.appendLine(`[INFO]  ${t2}`);
  }
  function Gr(...e2) {
    const t2 = e2.map(String).join(" ");
    jr?.appendLine(`[ERROR] ${t2}`);
  }
  class qr {
    constructor(e2, t2) {
      this.connectionTokenProvider = e2, this.staleCursorServerUrlBcIds = /* @__PURE__ */ new Set(), this.alwaysShowPortsView = true, (function(e3) {
        jr = e3;
      })(t2), Vr("RemoteAuthorityResolver constructor");
    }
    createManagedResolvedAuthority(e2, t2, n2) {
      return Object.assign(new o.ManagedResolvedAuthority(e2, t2, n2), { skipCreateInspectTunnel: true, isTrusted: true });
    }
    async showCandidatePort(e2, t2, n2) {
      return !(function(e3) {
        return !!(function(e4) {
          return e4 >= 26e3 && e4 <= 26999;
        })(e3) || e3 >= 5870 && e3 <= 5890 || 2375 === e3 || 5901 === e3 || 50052 === e3;
      })(t2) || (Vr(`Filtering out reserved/internal port ${t2} from candidates`), false);
    }
    async fetchCursorServerUrl({ bcId: e2, commit: t2, initialUseCache: n2, progress: r2 }) {
      return (async function({ getCursorServerUrl: e3, initialUseCache: t3, sleep: n3 = Lr, onRetry: r3 }) {
        let o2 = t3;
        const a2 = Date.now();
        for (let t4 = 0; ; t4++) try {
          return await e3(o2);
        } catch (e4) {
          const s2 = Date.now() - a2;
          if (!Rr(e4, s2)) throw e4;
          const i2 = Jr(e4), l2 = void 0 !== i2 ? i2 - s2 : 0, u2 = Math.min(Dr(t4), Math.max(0, l2));
          r3?.(e4, t4 + 1, u2), u2 > 0 && await n3(u2), o2 = false;
        }
      })({ initialUseCache: n2, getCursorServerUrl: (n3) => Xr("getCursorServerUrl", async () => {
        try {
          return await this.connectionTokenProvider.getOrCreateCursorServerUrl(e2, t2, n3);
        } catch (e3) {
          throw Gr("Error getting cursor server url", e3), e3;
        }
      }), onRetry: (e3, t3, n3) => {
        const o2 = (function(e4) {
          if ("POD_MIGRATING" !== Ur(e4)) return;
          const t4 = e4 instanceof kr ? e4.findDetails(ir)[0]?.details?.detail.trim() : void 0;
          if (t4) return t4;
          const n4 = e4 instanceof kr ? e4.rawMessage : e4 instanceof Error ? e4.message : void 0, r3 = n4?.replace(/\s*(?:\(cursorServerUrl(?:Retry)?Reason=[A-Z_]+\)\s*)+$/, "").trim();
          return r3 || void 0;
        })(e3);
        void 0 !== o2 && r2?.report({ kind: "retrying", phase: "connect", attempt: t3, detail: o2 });
        Vr("Error getting cursor server url,", n3 > 0 ? `retrying in ${n3 / 1e3}s` : "retrying immediately", `attempt=${t3}`, e3);
      } });
    }
    async resolve(e2, t2, n2) {
      return Xr("resolve", async () => {
        Vr("resolve", e2, `resolveAttempt=${t2.resolveAttempt}`), n2?.report({ phase: "init" });
        const r2 = (function(e3, t3) {
          const n3 = e3.indexOf("+"), r3 = e3.substring(n3 + 1).trim();
          if (-1 === n3 || 0 === r3.length) throw new Error("No bcId found in authority");
          if (!r3.startsWith("{")) return { kind: "bcId", bcId: r3 };
          if (!t3.allowInlineJson) throw new Error("Inline remote authority is not supported");
          let o2;
          try {
            o2 = Ir.fromJsonString(r3, { ignoreUnknownFields: true });
          } catch {
            throw new Error("Invalid url found in authority");
          }
          if (0 === o2.host.trim().length || !Number.isInteger(o2.port) || o2.port < 1 || o2.port > 65535) throw new Error("Invalid url found in authority");
          return { kind: "inlineUrl", url: (0, a.toPlainMessage)(o2) };
        })(e2, { allowInlineJson: (s2 = o.env.uriScheme, "cursor-dev" === s2) });
        var s2;
        if ("inlineUrl" === r2.kind) {
          const e3 = r2.url;
          Vr("resolved url (inline)", e3.host, e3.port);
          const t3 = async () => {
            try {
              return await Wr(e3);
            } catch (e4) {
              throw xr(e4);
            }
          }, n3 = o.cursor.createSocketConsumerTunnelFactory({ makeConnection: t3, connectionToken: e3.connectionToken });
          return this.createManagedResolvedAuthority(t3, e3.connectionToken, n3);
        }
        const i2 = r2.bcId;
        n2?.report({ phase: "auth" });
        const l2 = (function() {
          const e3 = o.cursor.productCommit ?? o.cursor.cursorServerCommit;
          if (!e3 || !/^[a-zA-Z0-9\-_.]+$/.test(e3)) throw Gr("Invalid or missing product commit", e3), new Error("Invalid or missing product commit");
          return e3;
        })(), { connectionToken: u2 } = await this.connectionTokenProvider.getOrCreateConnectionToken(i2, l2);
        n2?.report({ phase: "get-url" });
        const c2 = !this.staleCursorServerUrlBcIds.delete(i2);
        let m2;
        try {
          m2 = await this.fetchCursorServerUrl({ bcId: i2, commit: l2, initialUseCache: c2, progress: n2 });
        } catch (e3) {
          throw Cr(Yr(e3));
        }
        Vr("resolved url", m2.host, m2.port, `useCachedUrl=${c2}`);
        const p2 = (d2 = { returnedToken: m2.connectionToken, mintedToken: u2 }).returnedToken || d2.mintedToken;
        var d2;
        const f2 = () => {
          this.staleCursorServerUrlBcIds.has(i2) || (Vr("marking cursor server url suspect, next resolve fetches fresh", i2), this.staleCursorServerUrlBcIds.add(i2));
        }, T2 = (E2 = async () => {
          try {
            return await this.fetchCursorServerUrl({ bcId: i2, commit: l2, initialUseCache: !this.staleCursorServerUrlBcIds.delete(i2), progress: n2 });
          } catch (e3) {
            throw Cr(Yr(e3));
          }
        }, wr(g2 = m2) ? E2 : async () => g2);
        var g2, E2;
        const y2 = async () => {
          n2?.report({ phase: "socket" });
          const e3 = await T2();
          try {
            return await Wr(e3, f2);
          } catch (e4) {
            throw f2(), xr(e4);
          }
        }, h2 = o.cursor.createSocketConsumerTunnelFactory({ makeConnection: y2, connectionToken: p2 });
        return this.createManagedResolvedAuthority(y2, p2, h2);
      });
    }
  }
  const $r = 1e4;
  async function Wr(e2, t2) {
    const n2 = 443 === e2.port || wr(e2), r2 = await o.cursor.createTcpConnection({ host: e2.host, port: e2.port, tls: n2 ? { rejectUnauthorized: true, servername: e2.host } : void 0 });
    Vr("tcp connection established", `${e2.host}:${e2.port}`, n2 ? "(tls)" : "(plain)");
    const a2 = new o.EventEmitter(), s2 = new o.EventEmitter(), i2 = new o.EventEmitter(), l2 = Date.now();
    let u2 = false;
    return r2.onDidReceiveData((e3) => a2.fire(e3)), r2.onDidClose((e3) => {
      const n3 = Date.now() - l2 < $r;
      u2 || void 0 === e3 && !n3 || t2?.(), s2.fire(e3), i2.fire();
    }), { onDidReceiveMessage: a2.event, onDidClose: s2.event, onDidEnd: i2.event, send: (e3) => {
      r2.send(e3);
    }, end: () => {
      u2 = true, r2.close();
    }, connectionOptions: { headers: [`Host: ${e2.host}:${e2.port}`, ...e2.headers.map((e3) => `${e3.key}: ${e3.value}`)], doNotIncludeWsLocalhostPrefix: true, ...wr(e2) ? { path: e2.upgradePath } : {} } };
  }
  async function Xr(e2, t2) {
    const n2 = performance.now();
    try {
      return await t2();
    } finally {
      !(function(e3, t3) {
        try {
          o.cursor.metricsDistribution({ stat: `background-composer.${e3}`, value: t3, tags: {} });
        } catch {
        }
      })(e2, performance.now() - n2);
    }
  }
  function Kr(e2) {
    const t2 = o.window.createOutputChannel("Cursor Resolver");
    e2.subscriptions.push(t2);
    const n2 = "undefined" != typeof process && !!process.versions?.node;
    t2.appendLine(`[cursor-resolver] Running in ${n2 ? "Node.js" : "web-worker"} extension host`);
    const r2 = new qr(o.cursor.connectionTokenProvider, t2);
    e2.subscriptions.push(o.workspace.registerRemoteAuthorityResolver("background-composer", r2));
  }
  function Zr() {
  }
  var Hr = exports;
  for (var zr in r) Hr[zr] = r[zr];
  r.__esModule && Object.defineProperty(Hr, "__esModule", { value: true });
})();
