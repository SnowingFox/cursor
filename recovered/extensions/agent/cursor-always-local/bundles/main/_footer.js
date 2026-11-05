// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: (footer) range:6247885..6922488
// basis: webpack-container confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
}, r = {};
  function n(t2) {
    var s2 = r[t2];
    if (void 0 !== s2) return s2.exports;
    var i2 = r[t2] = { exports: {} };
    return e[t2].call(i2.exports, i2, i2.exports, n), i2.exports;
  }
  n.m = e, n.d = (t2, e2) => {
    for (var r2 in e2) n.o(e2, r2) && !n.o(t2, r2) && Object.defineProperty(t2, r2, { enumerable: true, get: e2[r2] });
  }, n.f = {}, n.e = (t2) => Promise.all(Object.keys(n.f).reduce((e2, r2) => (n.f[r2](t2, e2), e2), [])), n.u = (t2) => t2 + ".js", n.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), n.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, t = { 792: 1 }, n.f.require = (e2, r2) => {
    t[e2] || ((e3) => {
      var r3 = e3.modules, s2 = e3.ids, i2 = e3.runtime;
      for (var o2 in r3) n.o(r3, o2) && (n.m[o2] = r3[o2]);
      i2 && i2(n);
      for (var a = 0; a < s2.length; a++) t[s2[a]] = 1;
    })(require("./" + n.u(e2)));
  };
  var s = {};
  (() => {
    "use strict";
    n.r(s), n.d(s, { activate: () => j_, deactivate: () => X_, stats: () => Y_ });
    var t2 = {};
    n.r(t2), n.d(t2, { base64: () => dc, base64url: () => fc, bigint: () => Bc, boolean: () => Cc, browserEmail: () => sc, cidrv4: () => lc, cidrv6: () => mc, cuid: () => Ou, cuid2: () => Fu, date: () => _c, datetime: () => Sc, domain: () => hc, duration: () => Ku, e164: () => gc, email: () => Zu, emoji: () => oc, extendedDuration: () => Vu, guid: () => zu, hex: () => Rc, hostname: () => pc, html5Email: () => tc, idnEmail: () => nc, integer: () => Ec, ipv4: () => ac, ipv6: () => uc, ksuid: () => Gu, lowercase: () => vc, mac: () => cc, md5_base64: () => Nc, md5_base64url: () => Dc, md5_hex: () => xc, nanoid: () => Hu, null: () => bc, number: () => Ic, rfc5322Email: () => ec, sha1_base64: () => Qc, sha1_base64url: () => Mc, sha1_hex: () => Uc, sha256_base64: () => Fc, sha256_base64url: () => Lc, sha256_hex: () => Oc, sha384_base64: () => Gc, sha384_base64url: () => Hc, sha384_hex: () => $c, sha512_base64: () => Vc, sha512_base64url: () => zc, sha512_hex: () => Kc, string: () => Jc, time: () => wc, ulid: () => Lu, undefined: () => kc, unicodeEmail: () => rc, uppercase: () => qc, uuid: () => Wu, uuid4: () => Yu, uuid6: () => ju, uuid7: () => Xu, xid: () => $u });
    var e2 = {};
    n.r(e2), n.d(e2, { endsWith: () => Xd, gt: () => xd, gte: () => Nd, includes: () => Yd, length: () => Kd, lowercase: () => zd, lt: () => Pd, lte: () => Td, maxLength: () => Gd, maxSize: () => Fd, mime: () => tf, minLength: () => Hd, minSize: () => Ld, multipleOf: () => Od, negative: () => Ud, nonnegative: () => Md, nonpositive: () => Qd, normalize: () => rf, overwrite: () => ef, positive: () => Dd, property: () => Zd, regex: () => Vd, size: () => $d, slugify: () => af, startsWith: () => jd, toLowerCase: () => sf, toUpperCase: () => of, trim: () => nf, uppercase: () => Wd });
    var r2 = {};
    n.r(r2), n.d(r2, { ZodISODate: () => rp, ZodISODateTime: () => tp, ZodISODuration: () => op, ZodISOTime: () => sp, date: () => np, datetime: () => ep, duration: () => ap, time: () => ip });
    var i2 = {};
    n.r(i2), n.d(i2, { ZodAny: () => $h, ZodArray: () => Zh, ZodBase64: () => ch, ZodBase64URL: () => mh, ZodBigInt: () => Ph, ZodBigIntFormat: () => xh, ZodBoolean: () => qh, ZodCIDRv4: () => ih, ZodCIDRv6: () => ah, ZodCUID: () => $p, ZodCUID2: () => Hp, ZodCatch: () => zg, ZodCodec: () => tA, ZodCustom: () => dA, ZodCustomStringFormat: () => Ah, ZodDate: () => jh, ZodDefault: () => Og, ZodDiscriminatedUnion: () => lg, ZodE164: () => fh, ZodEmail: () => bp, ZodEmoji: () => Mp, ZodEnum: () => Eg, ZodExactOptional: () => Ng, ZodFile: () => vg, ZodFunction: () => lA, ZodGUID: () => vp, ZodIPv4: () => Zp, ZodIPv6: () => nh, ZodIntersection: () => dg, ZodJWT: () => hh, ZodKSUID: () => jp, ZodLazy: () => oA, ZodLiteral: () => bg, ZodMAC: () => eh, ZodMap: () => wg, ZodNaN: () => Yg, ZodNanoID: () => Fp, ZodNever: () => Vh, ZodNonOptional: () => Gg, ZodNull: () => Fh, ZodNullable: () => Ug, ZodNumber: () => Jh, ZodNumberFormat: () => Eh, ZodObject: () => rg, ZodOptional: () => Tg, ZodPipe: () => Xg, ZodPrefault: () => Lg, ZodPromise: () => uA, ZodReadonly: () => rA, ZodRecord: () => gg, ZodSet: () => Jg, ZodString: () => Ep, ZodStringFormat: () => Cp, ZodSuccess: () => Kg, ZodSymbol: () => Uh, ZodTemplateLiteral: () => sA, ZodTransform: () => Rg, ZodTuple: () => pg, ZodType: () => Jp, ZodULID: () => Vp, ZodURL: () => Dp, ZodUUID: () => Rp, ZodUndefined: () => Mh, ZodUnion: () => og, ZodUnknown: () => Hh, ZodVoid: () => Wh, ZodXID: () => Wp, ZodXor: () => ug, _ZodString: () => Bp, _default: () => Fg, _function: () => mA, any: () => Gh, array: () => tg, base64: () => lh, base64url: () => dh, bigint: () => Th, boolean: () => Rh, catch: () => Wg, check: () => fA, cidrv4: () => oh, cidrv6: () => uh, codec: () => eA, cuid: () => Gp, cuid2: () => Kp, custom: () => pA, date: () => Xh, describe: () => AA, discriminatedUnion: () => mg, e164: () => ph, email: () => kp, emoji: () => Op, enum: () => Ig, exactOptional: () => Dg, file: () => qg, float32: () => Ch, float64: () => bh, function: () => mA, guid: () => qp, hash: () => Sh, hex: () => wh, hostname: () => yh, httpUrl: () => Qp, instanceof: () => yA, int: () => Ih, int32: () => kh, int64: () => Nh, intersection: () => fg, ipv4: () => th, ipv6: () => sh, json: () => SA, jwt: () => gh, keyof: () => eg, ksuid: () => Xp, lazy: () => aA, literal: () => kg, looseObject: () => ig, looseRecord: () => yg, mac: () => rh, map: () => Sg, meta: () => _A, nan: () => jg, nanoid: () => Lp, nativeEnum: () => Cg, never: () => zh, nonoptional: () => Hg, null: () => Lh, nullable: () => Qg, nullish: () => Mg, number: () => Bh, object: () => ng, optional: () => xg, partialRecord: () => _g, pipe: () => Zg, prefault: () => $g, preprocess: () => JA, promise: () => cA, readonly: () => nA, record: () => Ag, refine: () => hA, set: () => Bg, strictObject: () => sg, string: () => Ip, stringFormat: () => _h, stringbool: () => wA, success: () => Vg, superRefine: () => gA, symbol: () => Qh, templateLiteral: () => iA, transform: () => Pg, tuple: () => hg, uint32: () => vh, uint64: () => Dh, ulid: () => zp, undefined: () => Oh, union: () => ag, unknown: () => Kh, url: () => Up, uuid: () => Pp, uuidv4: () => Tp, uuidv6: () => xp, uuidv7: () => Np, void: () => Yh, xid: () => Yp, xor: () => cg });
    const o2 = require("vscode");
    var a = n(5588);
    class u {
      static init() {
        u.output = o2.window.createOutputChannel("Cursor Always Local", { log: true });
      }
      static setUser(t3) {
      }
      static setRepo(t3) {
      }
      static error(t3, ...e3) {
        u.output.error(t3, ...e3);
      }
      static warn(t3, ...e3) {
        u.output.warn(t3, ...e3);
      }
      static info(t3, ...e3) {
        u.output.info(t3, ...e3);
      }
      static debug(t3, ...e3) {
        u.output.debug(t3, ...e3);
      }
      static trace(t3, ...e3) {
        u.output.trace(t3, ...e3);
      }
    }
    class c {
      static init() {
        c.output = o2.window.createOutputChannel("Filesync", { log: true });
      }
      static error(t3, ...e3) {
        c.output.error(t3, ...e3);
      }
      static warn(t3, ...e3) {
        c.output.warn(t3, ...e3);
      }
      static info(t3, ...e3) {
        c.output.info(t3, ...e3);
      }
      static debug(t3, ...e3) {
        c.output.debug(t3, ...e3);
      }
      static trace(t3, ...e3) {
        c.output.trace(t3, ...e3);
      }
    }
    var l = n(6022);
    class m {
      constructor() {
        const t3 = { wordDiff: async (t4, e3) => ({ changes: new l.diff_match_patch().diff_main(t4, e3).map((t5) => ({ value: t5[1], added: 1 === t5[0] || void 0, removed: -1 === t5[0] || void 0 })) }) };
        o2.cursor.registerDiffingProvider(t3);
      }
      dispose() {
      }
    }
    const d = {};
    function f(t3, e3) {
      if (t3 in d) throw new Error(`Action ${t3} already registered`);
      d[t3] = e3;
    }
    function p(t3, e3) {
      if (!t3) throw new Error(e3);
    }
    function h(t3) {
      if ("number" != typeof t3) throw new Error("invalid int 32: " + typeof t3);
      if (!Number.isInteger(t3) || t3 > 2147483647 || t3 < -2147483648) throw new Error("invalid int 32: " + t3);
    }
    function g(t3) {
      if ("number" != typeof t3) throw new Error("invalid uint 32: " + typeof t3);
      if (!Number.isInteger(t3) || t3 > 4294967295 || t3 < 0) throw new Error("invalid uint 32: " + t3);
    }
    function A(t3) {
      if ("number" != typeof t3) throw new Error("invalid float 32: " + typeof t3);
      if (Number.isFinite(t3) && (t3 > 34028234663852886e22 || t3 < -34028234663852886e22)) throw new Error("invalid float 32: " + t3);
    }
    const _ = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function y(t3) {
      const e3 = t3[_];
      return p(e3, "missing enum type on enum object"), e3;
    }
    function w(t3, e3, r3, n2) {
      t3[_] = S(e3, r3.map((e4) => ({ no: e4.no, name: e4.name, localName: t3[e4.no] })), n2);
    }
    function S(t3, e3, r3) {
      const n2 = /* @__PURE__ */ Object.create(null), s2 = /* @__PURE__ */ Object.create(null), i3 = [];
      for (const t4 of e3) {
        const e4 = B(t4);
        i3.push(e4), n2[t4.name] = e4, s2[t4.no] = e4;
      }
      return { typeName: t3, values: i3, findName: (t4) => n2[t4], findNumber: (t4) => s2[t4] };
    }
    function J(t3, e3, r3) {
      const n2 = {};
      for (const t4 of e3) {
        const e4 = B(t4);
        n2[e4.localName] = e4.no, n2[e4.no] = e4.localName;
      }
      return w(n2, t3, e3, r3), n2;
    }
    function B(t3) {
      return "localName" in t3 ? t3 : { ...t3, localName: t3.name };
    }
    class E {
      equals(t3) {
        return this.getType().runtime.util.equals(this.getType(), this, t3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(t3, e3) {
        const r3 = this.getType().runtime.bin, n2 = r3.makeReadOptions(e3);
        return r3.readMessage(this, n2.readerFactory(t3), t3.byteLength, n2), this;
      }
      fromJson(t3, e3) {
        const r3 = this.getType(), n2 = r3.runtime.json, s2 = n2.makeReadOptions(e3);
        return n2.readMessage(r3, t3, s2, this), this;
      }
      fromJsonString(t3, e3) {
        let r3;
        try {
          r3 = JSON.parse(t3);
        } catch (t4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${t4 instanceof Error ? t4.message : String(t4)}`);
        }
        return this.fromJson(r3, e3);
      }
      toBinary(t3) {
        const e3 = this.getType().runtime.bin, r3 = e3.makeWriteOptions(t3), n2 = r3.writerFactory();
        return e3.writeMessage(this, n2, r3), n2.finish();
      }
      toJson(t3) {
        const e3 = this.getType().runtime.json, r3 = e3.makeWriteOptions(t3);
        return e3.writeMessage(this, r3);
      }
      toJsonString(t3) {
        const e3 = this.toJson(t3);
        return JSON.stringify(e3, null, t3?.prettySpaces ?? 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    }
    function I() {
      let t3 = 0, e3 = 0;
      for (let r4 = 0; r4 < 28; r4 += 7) {
        let n2 = this.buf[this.pos++];
        if (t3 |= (127 & n2) << r4, !(128 & n2)) return this.assertBounds(), [t3, e3];
      }
      let r3 = this.buf[this.pos++];
      if (t3 |= (15 & r3) << 28, e3 = (112 & r3) >> 4, !(128 & r3)) return this.assertBounds(), [t3, e3];
      for (let r4 = 3; r4 <= 31; r4 += 7) {
        let n2 = this.buf[this.pos++];
        if (e3 |= (127 & n2) << r4, !(128 & n2)) return this.assertBounds(), [t3, e3];
      }
      throw new Error("invalid varint");
    }
    function C(t3, e3, r3) {
      for (let n3 = 0; n3 < 28; n3 += 7) {
        const s3 = t3 >>> n3, i3 = !(s3 >>> 7 == 0 && 0 == e3), o3 = 255 & (i3 ? 128 | s3 : s3);
        if (r3.push(o3), !i3) return;
      }
      const n2 = t3 >>> 28 & 15 | (7 & e3) << 4, s2 = !!(e3 >> 3);
      if (r3.push(255 & (s2 ? 128 | n2 : n2)), s2) {
        for (let t4 = 3; t4 < 31; t4 += 7) {
          const n3 = e3 >>> t4, s3 = !(n3 >>> 7 == 0), i3 = 255 & (s3 ? 128 | n3 : n3);
          if (r3.push(i3), !s3) return;
        }
        r3.push(e3 >>> 31 & 1);
      }
    }
    const b = 4294967296;
    function k(t3) {
      const e3 = "-" === t3[0];
      e3 && (t3 = t3.slice(1));
      const r3 = 1e6;
      let n2 = 0, s2 = 0;
      function i3(e4, i4) {
        const o3 = Number(t3.slice(e4, i4));
        s2 *= r3, n2 = n2 * r3 + o3, n2 >= b && (s2 += n2 / b | 0, n2 %= b);
      }
      return i3(-24, -18), i3(-18, -12), i3(-12, -6), i3(-6), e3 ? R(n2, s2) : q(n2, s2);
    }
    function v(t3, e3) {
      if ({ lo: t3, hi: e3 } = (function(t4, e4) {
        return { lo: t4 >>> 0, hi: e4 >>> 0 };
      })(t3, e3), e3 <= 2097151) return String(b * e3 + t3);
      const r3 = 16777215 & (t3 >>> 24 | e3 << 8), n2 = e3 >> 16 & 65535;
      let s2 = (16777215 & t3) + 6777216 * r3 + 6710656 * n2, i3 = r3 + 8147497 * n2, o3 = 2 * n2;
      const a2 = 1e7;
      return s2 >= a2 && (i3 += Math.floor(s2 / a2), s2 %= a2), i3 >= a2 && (o3 += Math.floor(i3 / a2), i3 %= a2), o3.toString() + P(i3) + P(s2);
    }
    function q(t3, e3) {
      return { lo: 0 | t3, hi: 0 | e3 };
    }
    function R(t3, e3) {
      return e3 = ~e3, t3 ? t3 = 1 + ~t3 : e3 += 1, q(t3, e3);
    }
    const P = (t3) => {
      const e3 = String(t3);
      return "0000000".slice(e3.length) + e3;
    };
    function T(t3, e3) {
      if (t3 >= 0) {
        for (; t3 > 127; ) e3.push(127 & t3 | 128), t3 >>>= 7;
        e3.push(t3);
      } else {
        for (let r3 = 0; r3 < 9; r3++) e3.push(127 & t3 | 128), t3 >>= 7;
        e3.push(1);
      }
    }
    function x() {
      let t3 = this.buf[this.pos++], e3 = 127 & t3;
      if (!(128 & t3)) return this.assertBounds(), e3;
      if (t3 = this.buf[this.pos++], e3 |= (127 & t3) << 7, !(128 & t3)) return this.assertBounds(), e3;
      if (t3 = this.buf[this.pos++], e3 |= (127 & t3) << 14, !(128 & t3)) return this.assertBounds(), e3;
      if (t3 = this.buf[this.pos++], e3 |= (127 & t3) << 21, !(128 & t3)) return this.assertBounds(), e3;
      t3 = this.buf[this.pos++], e3 |= (15 & t3) << 28;
      for (let e4 = 5; 128 & t3 && e4 < 10; e4++) t3 = this.buf[this.pos++];
      if (128 & t3) throw new Error("invalid varint");
      return this.assertBounds(), e3 >>> 0;
    }
    const N = (function() {
      const t3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof t3.getBigInt64 && "function" == typeof t3.getBigUint64 && "function" == typeof t3.setBigInt64 && "function" == typeof t3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const e4 = BigInt("-9223372036854775808"), r4 = BigInt("9223372036854775807"), n2 = BigInt("0"), s2 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(t4) {
          const n3 = "bigint" == typeof t4 ? t4 : BigInt(t4);
          if (n3 > r4 || n3 < e4) throw new Error(`int64 invalid: ${t4}`);
          return n3;
        }, uParse(t4) {
          const e5 = "bigint" == typeof t4 ? t4 : BigInt(t4);
          if (e5 > s2 || e5 < n2) throw new Error(`uint64 invalid: ${t4}`);
          return e5;
        }, enc(e5) {
          return t3.setBigInt64(0, this.parse(e5), true), { lo: t3.getInt32(0, true), hi: t3.getInt32(4, true) };
        }, uEnc(e5) {
          return t3.setBigInt64(0, this.uParse(e5), true), { lo: t3.getInt32(0, true), hi: t3.getInt32(4, true) };
        }, dec: (e5, r5) => (t3.setInt32(0, e5, true), t3.setInt32(4, r5, true), t3.getBigInt64(0, true)), uDec: (e5, r5) => (t3.setInt32(0, e5, true), t3.setInt32(4, r5, true), t3.getBigUint64(0, true)) };
      }
      const e3 = (t4) => p(/^-?[0-9]+$/.test(t4), `int64 invalid: ${t4}`), r3 = (t4) => p(/^[0-9]+$/.test(t4), `uint64 invalid: ${t4}`);
      return { zero: "0", supported: false, parse: (t4) => ("string" != typeof t4 && (t4 = t4.toString()), e3(t4), t4), uParse: (t4) => ("string" != typeof t4 && (t4 = t4.toString()), r3(t4), t4), enc: (t4) => ("string" != typeof t4 && (t4 = t4.toString()), e3(t4), k(t4)), uEnc: (t4) => ("string" != typeof t4 && (t4 = t4.toString()), r3(t4), k(t4)), dec: (t4, e4) => (function(t5, e5) {
        let r4 = q(t5, e5);
        const n2 = 2147483648 & r4.hi;
        n2 && (r4 = R(r4.lo, r4.hi));
        const s2 = v(r4.lo, r4.hi);
        return n2 ? "-" + s2 : s2;
      })(t4, e4), uDec: (t4, e4) => v(t4, e4) };
    })();
    var D = ((t3) => (t3[t3.DOUBLE = 1] = "DOUBLE", t3[t3.FLOAT = 2] = "FLOAT", t3[t3.INT64 = 3] = "INT64", t3[t3.UINT64 = 4] = "UINT64", t3[t3.INT32 = 5] = "INT32", t3[t3.FIXED64 = 6] = "FIXED64", t3[t3.FIXED32 = 7] = "FIXED32", t3[t3.BOOL = 8] = "BOOL", t3[t3.STRING = 9] = "STRING", t3[t3.BYTES = 12] = "BYTES", t3[t3.UINT32 = 13] = "UINT32", t3[t3.SFIXED32 = 15] = "SFIXED32", t3[t3.SFIXED64 = 16] = "SFIXED64", t3[t3.SINT32 = 17] = "SINT32", t3[t3.SINT64 = 18] = "SINT64", t3))(D || {}), U = ((t3) => (t3[t3.BIGINT = 0] = "BIGINT", t3[t3.STRING = 1] = "STRING", t3))(U || {});
    function Q(t3, e3, r3) {
      if (e3 === r3) return true;
      if (t3 == D.BYTES) {
        if (!(e3 instanceof Uint8Array && r3 instanceof Uint8Array)) return false;
        if (e3.length !== r3.length) return false;
        for (let t4 = 0; t4 < e3.length; t4++) if (e3[t4] !== r3[t4]) return false;
        return true;
      }
      switch (t3) {
        case D.UINT64:
        case D.FIXED64:
        case D.INT64:
        case D.SFIXED64:
        case D.SINT64:
          return e3 == r3;
      }
      return false;
    }
    function M(t3, e3) {
      switch (t3) {
        case D.BOOL:
          return false;
        case D.UINT64:
        case D.FIXED64:
        case D.INT64:
        case D.SFIXED64:
        case D.SINT64:
          return 0 == e3 ? N.zero : "0";
        case D.DOUBLE:
        case D.FLOAT:
          return 0;
        case D.BYTES:
          return new Uint8Array(0);
        case D.STRING:
          return "";
        default:
          return 0;
      }
    }
    function O(t3, e3) {
      switch (t3) {
        case D.BOOL:
          return false === e3;
        case D.STRING:
          return "" === e3;
        case D.BYTES:
          return e3 instanceof Uint8Array && !e3.byteLength;
        default:
          return 0 == e3;
      }
    }
    function F(t3) {
      const e3 = t3.field.localName, r3 = /* @__PURE__ */ Object.create(null);
      return r3[e3] = (function(t4) {
        const e4 = t4.field;
        if (e4.repeated) return [];
        if (void 0 !== e4.default) return e4.default;
        switch (e4.kind) {
          case "enum":
            return e4.T.values[0].no;
          case "scalar":
            return M(e4.T, e4.L);
          case "message":
            const t5 = e4.T, r4 = new t5();
            return t5.fieldWrapper ? t5.fieldWrapper.unwrapField(r4) : r4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(t3), [r3, () => r3[e3]];
    }
    let L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), $ = [];
    for (let t3 = 0; t3 < L.length; t3++) $[L[t3].charCodeAt(0)] = t3;
    $["-".charCodeAt(0)] = L.indexOf("+"), $["_".charCodeAt(0)] = L.indexOf("/");
    const G = { dec(t3) {
      let e3 = 3 * t3.length / 4;
      "=" == t3[t3.length - 2] ? e3 -= 2 : "=" == t3[t3.length - 1] && (e3 -= 1);
      let r3, n2 = new Uint8Array(e3), s2 = 0, i3 = 0, o3 = 0;
      for (let e4 = 0; e4 < t3.length; e4++) {
        if (r3 = $[t3.charCodeAt(e4)], void 0 === r3) switch (t3[e4]) {
          case "=":
            i3 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (i3) {
          case 0:
            o3 = r3, i3 = 1;
            break;
          case 1:
            n2[s2++] = o3 << 2 | (48 & r3) >> 4, o3 = r3, i3 = 2;
            break;
          case 2:
            n2[s2++] = (15 & o3) << 4 | (60 & r3) >> 2, o3 = r3, i3 = 3;
            break;
          case 3:
            n2[s2++] = (3 & o3) << 6 | r3, i3 = 0;
        }
      }
      if (1 == i3) throw Error("invalid base64 string.");
      return n2.subarray(0, s2);
    }, enc(t3) {
      let e3, r3 = "", n2 = 0, s2 = 0;
      for (let i3 = 0; i3 < t3.length; i3++) switch (e3 = t3[i3], n2) {
        case 0:
          r3 += L[e3 >> 2], s2 = (3 & e3) << 4, n2 = 1;
          break;
        case 1:
          r3 += L[s2 | e3 >> 4], s2 = (15 & e3) << 2, n2 = 2;
          break;
        case 2:
          r3 += L[s2 | e3 >> 6], r3 += L[63 & e3], n2 = 0;
      }
      return n2 && (r3 += L[s2], r3 += "=", 1 == n2 && (r3 += "=")), r3;
    } };
    function H(t3, e3, r3) {
      z(e3, t3);
      const n2 = e3.runtime.bin.makeReadOptions(r3), s2 = (function(t4, e4) {
        if (!e4.repeated && ("enum" == e4.kind || "scalar" == e4.kind)) {
          for (let r4 = t4.length - 1; r4 >= 0; --r4) if (t4[r4].no == e4.no) return [t4[r4]];
          return [];
        }
        return t4.filter((t5) => t5.no === e4.no);
      })(t3.getType().runtime.bin.listUnknownFields(t3), e3.field), [i3, o3] = F(e3);
      for (const t4 of s2) e3.runtime.bin.readField(i3, n2.readerFactory(t4.data), e3.field, t4.wireType, n2);
      return o3();
    }
    function K(t3, e3, r3, n2) {
      z(e3, t3);
      const s2 = e3.runtime.bin.makeReadOptions(n2), i3 = e3.runtime.bin.makeWriteOptions(n2);
      if (V(t3, e3)) {
        const r4 = t3.getType().runtime.bin.listUnknownFields(t3).filter((t4) => t4.no != e3.field.no);
        t3.getType().runtime.bin.discardUnknownFields(t3);
        for (const e4 of r4) t3.getType().runtime.bin.onUnknownField(t3, e4.no, e4.wireType, e4.data);
      }
      const o3 = i3.writerFactory();
      let a2 = e3.field;
      a2.opt || a2.repeated || "enum" != a2.kind && "scalar" != a2.kind || (a2 = { ...e3.field, opt: true }), e3.runtime.bin.writeField(a2, r3, o3, i3);
      const u2 = s2.readerFactory(o3.finish());
      for (; u2.pos < u2.len; ) {
        const [e4, r4] = u2.tag(), n3 = u2.skip(r4, e4);
        t3.getType().runtime.bin.onUnknownField(t3, e4, r4, n3);
      }
    }
    function V(t3, e3) {
      const r3 = t3.getType();
      return e3.extendee.typeName === r3.typeName && !!r3.runtime.bin.listUnknownFields(t3).find((t4) => t4.no == e3.field.no);
    }
    function z(t3, e3) {
      p(t3.extendee.typeName == e3.getType().typeName, `extension ${t3.typeName} can only be applied to message ${t3.extendee.typeName}`);
    }
    function W(t3, e3) {
      const r3 = t3.localName;
      if (t3.repeated) return e3[r3].length > 0;
      if (t3.oneof) return e3[t3.oneof.localName].case === r3;
      switch (t3.kind) {
        case "enum":
        case "scalar":
          return t3.opt || t3.req ? void 0 !== e3[r3] : "enum" == t3.kind ? e3[r3] !== t3.T.values[0].no : !O(t3.T, e3[r3]);
        case "message":
          return void 0 !== e3[r3];
        case "map":
          return Object.keys(e3[r3]).length > 0;
      }
    }
    function Y(t3, e3) {
      const r3 = t3.localName, n2 = !t3.opt && !t3.req;
      if (t3.repeated) e3[r3] = [];
      else if (t3.oneof) e3[t3.oneof.localName] = { case: void 0 };
      else switch (t3.kind) {
        case "map":
          e3[r3] = {};
          break;
        case "enum":
          e3[r3] = n2 ? t3.T.values[0].no : void 0;
          break;
        case "scalar":
          e3[r3] = n2 ? M(t3.T, t3.L) : void 0;
          break;
        case "message":
          e3[r3] = void 0;
      }
    }
    function j(t3, e3) {
      if (null === t3 || "object" != typeof t3) return false;
      if (!Object.getOwnPropertyNames(E.prototype).every((e4) => e4 in t3 && "function" == typeof t3[e4])) return false;
      const r3 = t3.getType();
      return null !== r3 && "function" == typeof r3 && "typeName" in r3 && "string" == typeof r3.typeName && (void 0 === e3 || r3.typeName == e3.typeName);
    }
    function X(t3, e3) {
      const r3 = j(e3);
      return r3 || t3.fieldWrapper ? r3 || !t3.fieldWrapper ? e3 : t3.fieldWrapper.wrapField(e3) : new t3(e3);
    }
    D.DOUBLE, D.FLOAT, D.INT64, D.UINT64, D.INT32, D.UINT32, D.BOOL, D.STRING, D.BYTES;
    const Z = { ignoreUnknownFields: false }, tt = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function et(t3) {
      return t3 ? { ...Z, ...t3 } : Z;
    }
    function rt(t3) {
      return t3 ? { ...tt, ...t3 } : tt;
    }
    const nt = /* @__PURE__ */ Symbol(), st = /* @__PURE__ */ Symbol();
    function it(t3) {
      if (null === t3) return "null";
      switch (typeof t3) {
        case "object":
          return Array.isArray(t3) ? "array" : "object";
        case "string":
          return t3.length > 100 ? "string" : `"${t3.split('"').join('\\"')}"`;
        default:
          return String(t3);
      }
    }
    function ot(t3, e3, r3, n2, s2) {
      let i3 = r3.localName;
      if (r3.repeated) {
        if (p("map" != r3.kind), null === e3) return;
        if (!Array.isArray(e3)) throw new Error(`cannot decode field ${s2.typeName}.${r3.name} from JSON: ${it(e3)}`);
        const o3 = t3[i3];
        for (const t4 of e3) {
          if (null === t4) throw new Error(`cannot decode field ${s2.typeName}.${r3.name} from JSON: ${it(t4)}`);
          switch (r3.kind) {
            case "message":
              o3.push(r3.T.fromJson(t4, n2));
              break;
            case "enum":
              const e4 = ct(r3.T, t4, n2.ignoreUnknownFields, true);
              e4 !== st && o3.push(e4);
              break;
            case "scalar":
              try {
                o3.push(ut(r3.T, t4, r3.L, true));
              } catch (e5) {
                let n3 = `cannot decode field ${s2.typeName}.${r3.name} from JSON: ${it(t4)}`;
                throw e5 instanceof Error && e5.message.length > 0 && (n3 += `: ${e5.message}`), new Error(n3);
              }
          }
        }
      } else if ("map" == r3.kind) {
        if (null === e3) return;
        if ("object" != typeof e3 || Array.isArray(e3)) throw new Error(`cannot decode field ${s2.typeName}.${r3.name} from JSON: ${it(e3)}`);
        const o3 = t3[i3];
        for (const [t4, i4] of Object.entries(e3)) {
          if (null === i4) throw new Error(`cannot decode field ${s2.typeName}.${r3.name} from JSON: map value null`);
          let a2;
          try {
            a2 = at(r3.K, t4);
          } catch (t5) {
            let n3 = `cannot decode map key for field ${s2.typeName}.${r3.name} from JSON: ${it(e3)}`;
            throw t5 instanceof Error && t5.message.length > 0 && (n3 += `: ${t5.message}`), new Error(n3);
          }
          switch (r3.V.kind) {
            case "message":
              o3[a2] = r3.V.T.fromJson(i4, n2);
              break;
            case "enum":
              const t5 = ct(r3.V.T, i4, n2.ignoreUnknownFields, true);
              t5 !== st && (o3[a2] = t5);
              break;
            case "scalar":
              try {
                o3[a2] = ut(r3.V.T, i4, U.BIGINT, true);
              } catch (t6) {
                let n3 = `cannot decode map value for field ${s2.typeName}.${r3.name} from JSON: ${it(e3)}`;
                throw t6 instanceof Error && t6.message.length > 0 && (n3 += `: ${t6.message}`), new Error(n3);
              }
          }
        }
      } else switch (r3.oneof && (t3 = t3[r3.oneof.localName] = { case: i3 }, i3 = "value"), r3.kind) {
        case "message":
          const o3 = r3.T;
          if (null === e3 && "google.protobuf.Value" != o3.typeName) return;
          let a2 = t3[i3];
          j(a2) ? a2.fromJson(e3, n2) : (t3[i3] = a2 = o3.fromJson(e3, n2), o3.fieldWrapper && !r3.oneof && (t3[i3] = o3.fieldWrapper.unwrapField(a2)));
          break;
        case "enum":
          const u2 = ct(r3.T, e3, n2.ignoreUnknownFields, false);
          switch (u2) {
            case nt:
              Y(r3, t3);
              break;
            case st:
              break;
            default:
              t3[i3] = u2;
          }
          break;
        case "scalar":
          try {
            const n3 = ut(r3.T, e3, r3.L, false);
            if (n3 === nt) Y(r3, t3);
            else t3[i3] = n3;
          } catch (t4) {
            let n3 = `cannot decode field ${s2.typeName}.${r3.name} from JSON: ${it(e3)}`;
            throw t4 instanceof Error && t4.message.length > 0 && (n3 += `: ${t4.message}`), new Error(n3);
          }
      }
    }
    function at(t3, e3) {
      if (t3 === D.BOOL) switch (e3) {
        case "true":
          e3 = true;
          break;
        case "false":
          e3 = false;
      }
      return ut(t3, e3, U.BIGINT, true).toString();
    }
    function ut(t3, e3, r3, n2) {
      if (null === e3) return n2 ? M(t3, r3) : nt;
      switch (t3) {
        case D.DOUBLE:
        case D.FLOAT:
          if ("NaN" === e3) return Number.NaN;
          if ("Infinity" === e3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === e3) return Number.NEGATIVE_INFINITY;
          if ("" === e3) break;
          if ("string" == typeof e3 && e3.trim().length !== e3.length) break;
          if ("string" != typeof e3 && "number" != typeof e3) break;
          const n3 = Number(e3);
          if (Number.isNaN(n3)) break;
          if (!Number.isFinite(n3)) break;
          return t3 == D.FLOAT && A(n3), n3;
        case D.INT32:
        case D.FIXED32:
        case D.SFIXED32:
        case D.SINT32:
        case D.UINT32:
          let s2;
          if ("number" == typeof e3 ? s2 = e3 : "string" == typeof e3 && e3.length > 0 && e3.trim().length === e3.length && (s2 = Number(e3)), void 0 === s2) break;
          return t3 == D.UINT32 || t3 == D.FIXED32 ? g(s2) : h(s2), s2;
        case D.INT64:
        case D.SFIXED64:
        case D.SINT64:
          if ("number" != typeof e3 && "string" != typeof e3) break;
          const i3 = N.parse(e3);
          return r3 ? i3.toString() : i3;
        case D.FIXED64:
        case D.UINT64:
          if ("number" != typeof e3 && "string" != typeof e3) break;
          const o3 = N.uParse(e3);
          return r3 ? o3.toString() : o3;
        case D.BOOL:
          if ("boolean" != typeof e3) break;
          return e3;
        case D.STRING:
          if ("string" != typeof e3) break;
          try {
            encodeURIComponent(e3);
          } catch (t4) {
            throw new Error("invalid UTF8");
          }
          return e3;
        case D.BYTES:
          if ("" === e3) return new Uint8Array(0);
          if ("string" != typeof e3) break;
          return G.dec(e3);
      }
      throw new Error();
    }
    function ct(t3, e3, r3, n2) {
      if (null === e3) return "google.protobuf.NullValue" == t3.typeName ? 0 : n2 ? t3.values[0].no : nt;
      switch (typeof e3) {
        case "number":
          if (Number.isInteger(e3)) return e3;
          break;
        case "string":
          const n3 = t3.findName(e3);
          if (void 0 !== n3) return n3.no;
          if (r3) return st;
      }
      throw new Error(`cannot decode enum ${t3.typeName} from JSON: ${it(e3)}`);
    }
    function lt(t3) {
      return !(!t3.repeated && "map" != t3.kind) || !t3.oneof && ("message" != t3.kind && (!t3.opt && !t3.req));
    }
    function mt(t3, e3, r3) {
      if ("map" == t3.kind) {
        p("object" == typeof e3 && null != e3);
        const n2 = {}, s2 = Object.entries(e3);
        switch (t3.V.kind) {
          case "scalar":
            for (const [e5, r4] of s2) n2[e5.toString()] = ft(t3.V.T, r4);
            break;
          case "message":
            for (const [t4, e5] of s2) n2[t4.toString()] = e5.toJson(r3);
            break;
          case "enum":
            const e4 = t3.V.T;
            for (const [t4, i3] of s2) n2[t4.toString()] = dt(e4, i3, r3.enumAsInteger);
        }
        return r3.emitDefaultValues || s2.length > 0 ? n2 : void 0;
      }
      if (t3.repeated) {
        p(Array.isArray(e3));
        const n2 = [];
        switch (t3.kind) {
          case "scalar":
            for (let r4 = 0; r4 < e3.length; r4++) n2.push(ft(t3.T, e3[r4]));
            break;
          case "enum":
            for (let s2 = 0; s2 < e3.length; s2++) n2.push(dt(t3.T, e3[s2], r3.enumAsInteger));
            break;
          case "message":
            for (let t4 = 0; t4 < e3.length; t4++) n2.push(e3[t4].toJson(r3));
        }
        return r3.emitDefaultValues || n2.length > 0 ? n2 : void 0;
      }
      switch (t3.kind) {
        case "scalar":
          return ft(t3.T, e3);
        case "enum":
          return dt(t3.T, e3, r3.enumAsInteger);
        case "message":
          return X(t3.T, e3).toJson(r3);
      }
    }
    function dt(t3, e3, r3) {
      if (p("number" == typeof e3), "google.protobuf.NullValue" == t3.typeName) return null;
      if (r3) return e3;
      const n2 = t3.findNumber(e3);
      return n2?.name ?? e3;
    }
    function ft(t3, e3) {
      switch (t3) {
        case D.INT32:
        case D.SFIXED32:
        case D.SINT32:
        case D.FIXED32:
        case D.UINT32:
          return p("number" == typeof e3), e3;
        case D.FLOAT:
        case D.DOUBLE:
          return p("number" == typeof e3), Number.isNaN(e3) ? "NaN" : e3 === Number.POSITIVE_INFINITY ? "Infinity" : e3 === Number.NEGATIVE_INFINITY ? "-Infinity" : e3;
        case D.STRING:
          return p("string" == typeof e3), e3;
        case D.BOOL:
          return p("boolean" == typeof e3), e3;
        case D.UINT64:
        case D.FIXED64:
        case D.INT64:
        case D.SFIXED64:
        case D.SINT64:
          return p("bigint" == typeof e3 || "string" == typeof e3 || "number" == typeof e3), e3.toString();
        case D.BYTES:
          return p(e3 instanceof Uint8Array), G.enc(e3);
      }
    }
    var pt = ((t3) => (t3[t3.Varint = 0] = "Varint", t3[t3.Bit64 = 1] = "Bit64", t3[t3.LengthDelimited = 2] = "LengthDelimited", t3[t3.StartGroup = 3] = "StartGroup", t3[t3.EndGroup = 4] = "EndGroup", t3[t3.Bit32 = 5] = "Bit32", t3))(pt || {});
    class ht {
      constructor(t3) {
        this.stack = [], this.textEncoder = t3 ?? new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
        let t3 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) t3 += this.chunks[e4].length;
        let e3 = new Uint8Array(t3), r3 = 0;
        for (let t4 = 0; t4 < this.chunks.length; t4++) e3.set(this.chunks[t4], r3), r3 += this.chunks[t4].length;
        return this.chunks = [], e3;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let t3 = this.finish(), e3 = this.stack.pop();
        if (!e3) throw new Error("invalid state, fork stack empty");
        return this.chunks = e3.chunks, this.buf = e3.buf, this.uint32(t3.byteLength), this.raw(t3);
      }
      tag(t3, e3) {
        return this.uint32((t3 << 3 | e3) >>> 0);
      }
      raw(t3) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(t3), this;
      }
      uint32(t3) {
        for (g(t3); t3 > 127; ) this.buf.push(127 & t3 | 128), t3 >>>= 7;
        return this.buf.push(t3), this;
      }
      int32(t3) {
        return h(t3), T(t3, this.buf), this;
      }
      bool(t3) {
        return this.buf.push(t3 ? 1 : 0), this;
      }
      bytes(t3) {
        return this.uint32(t3.byteLength), this.raw(t3);
      }
      string(t3) {
        let e3 = this.textEncoder.encode(t3);
        return this.uint32(e3.byteLength), this.raw(e3);
      }
      float(t3) {
        A(t3);
        let e3 = new Uint8Array(4);
        return new DataView(e3.buffer).setFloat32(0, t3, true), this.raw(e3);
      }
      double(t3) {
        let e3 = new Uint8Array(8);
        return new DataView(e3.buffer).setFloat64(0, t3, true), this.raw(e3);
      }
      fixed32(t3) {
        g(t3);
        let e3 = new Uint8Array(4);
        return new DataView(e3.buffer).setUint32(0, t3, true), this.raw(e3);
      }
      sfixed32(t3) {
        h(t3);
        let e3 = new Uint8Array(4);
        return new DataView(e3.buffer).setInt32(0, t3, true), this.raw(e3);
      }
      sint32(t3) {
        return h(t3), T(t3 = (t3 << 1 ^ t3 >> 31) >>> 0, this.buf), this;
      }
      sfixed64(t3) {
        let e3 = new Uint8Array(8), r3 = new DataView(e3.buffer), n2 = N.enc(t3);
        return r3.setInt32(0, n2.lo, true), r3.setInt32(4, n2.hi, true), this.raw(e3);
      }
      fixed64(t3) {
        let e3 = new Uint8Array(8), r3 = new DataView(e3.buffer), n2 = N.uEnc(t3);
        return r3.setInt32(0, n2.lo, true), r3.setInt32(4, n2.hi, true), this.raw(e3);
      }
      int64(t3) {
        let e3 = N.enc(t3);
        return C(e3.lo, e3.hi, this.buf), this;
      }
      sint64(t3) {
        let e3 = N.enc(t3), r3 = e3.hi >> 31;
        return C(e3.lo << 1 ^ r3, (e3.hi << 1 | e3.lo >>> 31) ^ r3, this.buf), this;
      }
      uint64(t3) {
        let e3 = N.uEnc(t3);
        return C(e3.lo, e3.hi, this.buf), this;
      }
    }
    class gt {
      constructor(t3, e3) {
        this.varint64 = I, this.uint32 = x, this.buf = t3, this.len = t3.length, this.pos = 0, this.view = new DataView(t3.buffer, t3.byteOffset, t3.byteLength), this.textDecoder = e3 ?? new TextDecoder();
      }
      tag() {
        let t3 = this.uint32(), e3 = t3 >>> 3, r3 = 7 & t3;
        if (e3 <= 0 || r3 < 0 || r3 > 5) throw new Error("illegal tag: field no " + e3 + " wire type " + r3);
        return [e3, r3];
      }
      skip(t3, e3) {
        let r3 = this.pos;
        switch (t3) {
          case 0:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case 1:
            this.pos += 4;
          case 5:
            this.pos += 4;
            break;
          case 2:
            let r4 = this.uint32();
            this.pos += r4;
            break;
          case 3:
            for (; ; ) {
              const [t4, r5] = this.tag();
              if (4 === r5) {
                if (void 0 !== e3 && t4 !== e3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(r5, t4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + t3);
        }
        return this.assertBounds(), this.buf.subarray(r3, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let t3 = this.uint32();
        return t3 >>> 1 ^ -(1 & t3);
      }
      int64() {
        return N.dec(...this.varint64());
      }
      uint64() {
        return N.uDec(...this.varint64());
      }
      sint64() {
        let [t3, e3] = this.varint64(), r3 = -(1 & t3);
        return t3 = (t3 >>> 1 | (1 & e3) << 31) ^ r3, e3 = e3 >>> 1 ^ r3, N.dec(t3, e3);
      }
      bool() {
        let [t3, e3] = this.varint64();
        return 0 !== t3 || 0 !== e3;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return N.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return N.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let t3 = this.uint32(), e3 = this.pos;
        return this.pos += t3, this.assertBounds(), this.buf.subarray(e3, e3 + t3);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    }
    const At = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), _t = { readUnknownFields: true, readerFactory: (t3) => new gt(t3) }, yt = { writeUnknownFields: true, writerFactory: () => new ht() };
    function wt(t3) {
      return t3 ? { ..._t, ...t3 } : _t;
    }
    function St(t3) {
      return t3 ? { ...yt, ...t3 } : yt;
    }
    function Jt(t3, e3, r3, n2, s2) {
      let { repeated: i3, localName: o3 } = r3;
      switch (r3.oneof && ((t3 = t3[r3.oneof.localName]).case != o3 && delete t3.value, t3.case = o3, o3 = "value"), r3.kind) {
        case "scalar":
        case "enum":
          const a2 = "enum" == r3.kind ? D.INT32 : r3.T;
          let u2 = It;
          if ("scalar" == r3.kind && r3.L > 0 && (u2 = Et), i3) {
            let r4 = t3[o3];
            if (n2 == pt.LengthDelimited && a2 != D.STRING && a2 != D.BYTES) {
              let t4 = e3.uint32() + e3.pos;
              for (; e3.pos < t4; ) r4.push(u2(e3, a2));
            } else r4.push(u2(e3, a2));
          } else t3[o3] = u2(e3, a2);
          break;
        case "message":
          const c2 = r3.T;
          i3 ? t3[o3].push(Bt(e3, new c2(), s2, r3)) : j(t3[o3]) ? Bt(e3, t3[o3], s2, r3) : (t3[o3] = Bt(e3, new c2(), s2, r3), !c2.fieldWrapper || r3.oneof || r3.repeated || (t3[o3] = c2.fieldWrapper.unwrapField(t3[o3])));
          break;
        case "map":
          let [l2, m2] = (function(t4, e4, r4) {
            const n3 = e4.uint32(), s3 = e4.pos + n3;
            let i4, o4;
            for (; e4.pos < s3; ) {
              const [n4] = e4.tag();
              switch (n4) {
                case 1:
                  i4 = It(e4, t4.K);
                  break;
                case 2:
                  switch (t4.V.kind) {
                    case "scalar":
                      o4 = It(e4, t4.V.T);
                      break;
                    case "enum":
                      o4 = e4.int32();
                      break;
                    case "message":
                      o4 = Bt(e4, new t4.V.T(), r4, void 0);
                  }
              }
            }
            void 0 === i4 && (i4 = M(t4.K, U.BIGINT));
            "string" != typeof i4 && "number" != typeof i4 && (i4 = i4.toString());
            if (void 0 === o4) switch (t4.V.kind) {
              case "scalar":
                o4 = M(t4.V.T, U.BIGINT);
                break;
              case "enum":
                o4 = t4.V.T.values[0].no;
                break;
              case "message":
                o4 = new t4.V.T();
            }
            return [i4, o4];
          })(r3, e3, s2);
          t3[o3][l2] = m2;
      }
    }
    function Bt(t3, e3, r3, n2) {
      const s2 = e3.getType().runtime.bin, i3 = n2?.delimited;
      return s2.readMessage(e3, t3, i3 ? n2.no : t3.uint32(), r3, i3), e3;
    }
    function Et(t3, e3) {
      const r3 = It(t3, e3);
      return "bigint" == typeof r3 ? r3.toString() : r3;
    }
    function It(t3, e3) {
      switch (e3) {
        case D.STRING:
          return t3.string();
        case D.BOOL:
          return t3.bool();
        case D.DOUBLE:
          return t3.double();
        case D.FLOAT:
          return t3.float();
        case D.INT32:
          return t3.int32();
        case D.INT64:
          return t3.int64();
        case D.UINT64:
          return t3.uint64();
        case D.FIXED64:
          return t3.fixed64();
        case D.BYTES:
          return t3.bytes();
        case D.FIXED32:
          return t3.fixed32();
        case D.SFIXED32:
          return t3.sfixed32();
        case D.SFIXED64:
          return t3.sfixed64();
        case D.SINT64:
          return t3.sint64();
        case D.UINT32:
          return t3.uint32();
        case D.SINT32:
          return t3.sint32();
      }
    }
    function Ct(t3, e3, r3, n2) {
      p(void 0 !== e3);
      const s2 = t3.repeated;
      switch (t3.kind) {
        case "scalar":
        case "enum":
          let i3 = "enum" == t3.kind ? D.INT32 : t3.T;
          if (s2) if (p(Array.isArray(e3)), t3.packed) !(function(t4, e4, r4, n3) {
            if (!n3.length) return;
            t4.tag(r4, pt.LengthDelimited).fork();
            let [, s3] = qt(e4);
            for (let e5 = 0; e5 < n3.length; e5++) t4[s3](n3[e5]);
            t4.join();
          })(r3, i3, t3.no, e3);
          else for (const n3 of e3) vt(r3, i3, t3.no, n3);
          else vt(r3, i3, t3.no, e3);
          break;
        case "message":
          if (s2) {
            p(Array.isArray(e3));
            for (const s3 of e3) kt(r3, n2, t3, s3);
          } else kt(r3, n2, t3, e3);
          break;
        case "map":
          p("object" == typeof e3 && null != e3);
          for (const [s3, i4] of Object.entries(e3)) bt(r3, n2, t3, s3, i4);
      }
    }
    function bt(t3, e3, r3, n2, s2) {
      t3.tag(r3.no, pt.LengthDelimited), t3.fork();
      let i3 = n2;
      switch (r3.K) {
        case D.INT32:
        case D.FIXED32:
        case D.UINT32:
        case D.SFIXED32:
        case D.SINT32:
          i3 = Number.parseInt(n2);
          break;
        case D.BOOL:
          p("true" == n2 || "false" == n2), i3 = "true" == n2;
      }
      switch (vt(t3, r3.K, 1, i3), r3.V.kind) {
        case "scalar":
          vt(t3, r3.V.T, 2, s2);
          break;
        case "enum":
          vt(t3, D.INT32, 2, s2);
          break;
        case "message":
          p(void 0 !== s2), t3.tag(2, pt.LengthDelimited).bytes(s2.toBinary(e3));
      }
      t3.join();
    }
    function kt(t3, e3, r3, n2) {
      const s2 = X(r3.T, n2);
      r3.delimited ? t3.tag(r3.no, pt.StartGroup).raw(s2.toBinary(e3)).tag(r3.no, pt.EndGroup) : t3.tag(r3.no, pt.LengthDelimited).bytes(s2.toBinary(e3));
    }
    function vt(t3, e3, r3, n2) {
      p(void 0 !== n2);
      let [s2, i3] = qt(e3);
      t3.tag(r3, s2)[i3](n2);
    }
    function qt(t3) {
      let e3 = pt.Varint;
      switch (t3) {
        case D.BYTES:
        case D.STRING:
          e3 = pt.LengthDelimited;
          break;
        case D.DOUBLE:
        case D.FIXED64:
        case D.SFIXED64:
          e3 = pt.Bit64;
          break;
        case D.FIXED32:
        case D.SFIXED32:
        case D.FLOAT:
          e3 = pt.Bit32;
      }
      return [e3, D[t3].toLowerCase()];
    }
    function Rt(t3) {
      if (void 0 === t3) return t3;
      if (j(t3)) return t3.clone();
      if (t3 instanceof Uint8Array) {
        const e3 = new Uint8Array(t3.byteLength);
        return e3.set(t3), e3;
      }
      return t3;
    }
    function Pt(t3) {
      return t3 instanceof Uint8Array ? t3 : new Uint8Array(t3);
    }
    function Tt(t3, e3, r3) {
      return { syntax: t3, json: { makeReadOptions: et, makeWriteOptions: rt, readMessage(t4, e4, r4, n2) {
        if (null == e4 || Array.isArray(e4) || "object" != typeof e4) throw new Error(`cannot decode message ${t4.typeName} from JSON: ${it(e4)}`);
        n2 = n2 ?? new t4();
        const s2 = /* @__PURE__ */ new Map(), i3 = r4.typeRegistry;
        for (const [o3, a2] of Object.entries(e4)) {
          const e5 = t4.fields.findJsonName(o3);
          if (e5) {
            if (e5.oneof) {
              if (null === a2 && "scalar" == e5.kind) continue;
              const r5 = s2.get(e5.oneof);
              if (void 0 !== r5) throw new Error(`cannot decode message ${t4.typeName} from JSON: multiple keys for oneof "${e5.oneof.name}" present: "${r5}", "${o3}"`);
              s2.set(e5.oneof, o3);
            }
            ot(n2, a2, e5, r4, t4);
          } else {
            let e6 = false;
            if (i3?.findExtension && o3.startsWith("[") && o3.endsWith("]")) {
              const s3 = i3.findExtension(o3.substring(1, o3.length - 1));
              if (s3 && s3.extendee.typeName == t4.typeName) {
                e6 = true;
                const [t5, i4] = F(s3);
                ot(t5, a2, s3.field, r4, s3), K(n2, s3, i4(), r4);
              }
            }
            if (!e6 && !r4.ignoreUnknownFields) throw new Error(`cannot decode message ${t4.typeName} from JSON: key "${o3}" is unknown`);
          }
        }
        return n2;
      }, writeMessage(t4, e4) {
        const r4 = t4.getType(), n2 = {};
        let s2;
        try {
          for (s2 of r4.fields.byNumber()) {
            if (!W(s2, t4)) {
              if (s2.req) throw "required field not set";
              if (!e4.emitDefaultValues) continue;
              if (!lt(s2)) continue;
            }
            const r5 = mt(s2, s2.oneof ? t4[s2.oneof.localName].value : t4[s2.localName], e4);
            void 0 !== r5 && (n2[e4.useProtoFieldName ? s2.name : s2.jsonName] = r5);
          }
          const i3 = e4.typeRegistry;
          if (i3?.findExtensionFor) for (const s3 of r4.runtime.bin.listUnknownFields(t4)) {
            const o3 = i3.findExtensionFor(r4.typeName, s3.no);
            if (o3 && V(t4, o3)) {
              const r5 = H(t4, o3, e4), s4 = mt(o3.field, r5, e4);
              void 0 !== s4 && (n2[o3.field.jsonName] = s4);
            }
          }
        } catch (t5) {
          const e5 = s2 ? `cannot encode field ${r4.typeName}.${s2.name} to JSON` : `cannot encode message ${r4.typeName} to JSON`, n3 = t5 instanceof Error ? t5.message : String(t5);
          throw new Error(e5 + (n3.length > 0 ? `: ${n3}` : ""));
        }
        return n2;
      }, readScalar: (t4, e4, r4) => ut(t4, e4, r4 ?? U.BIGINT, true), writeScalar(t4, e4, r4) {
        if (void 0 !== e4) return r4 || O(t4, e4) ? ft(t4, e4) : void 0;
      }, debug: it }, bin: { makeReadOptions: wt, makeWriteOptions: St, listUnknownFields: (t4) => t4[At] ?? [], discardUnknownFields(t4) {
        delete t4[At];
      }, writeUnknownFields(t4, e4) {
        const r4 = t4[At];
        if (r4) for (const t5 of r4) e4.tag(t5.no, t5.wireType).raw(t5.data);
      }, onUnknownField(t4, e4, r4, n2) {
        const s2 = t4;
        Array.isArray(s2[At]) || (s2[At] = []), s2[At].push({ no: e4, wireType: r4, data: new Uint8Array(n2) });
      }, readMessage(t4, e4, r4, n2, s2) {
        const i3 = t4.getType(), o3 = s2 ? e4.len : e4.pos + r4;
        let a2, u2;
        for (; e4.pos < o3 && ([a2, u2] = e4.tag(), true !== s2 || u2 != pt.EndGroup); ) {
          const r5 = i3.fields.find(a2);
          if (!r5) {
            const r6 = e4.skip(u2, a2);
            n2.readUnknownFields && this.onUnknownField(t4, a2, u2, r6);
            continue;
          }
          Jt(t4, e4, r5, u2, n2);
        }
        if (s2 && (u2 != pt.EndGroup || a2 !== r4)) throw new Error("invalid end group tag");
      }, readField: Jt, writeMessage(t4, e4, r4) {
        const n2 = t4.getType();
        for (const s2 of n2.fields.byNumber()) if (W(s2, t4)) Ct(s2, s2.oneof ? t4[s2.oneof.localName].value : t4[s2.localName], e4, r4);
        else if (s2.req) throw new Error(`cannot encode field ${n2.typeName}.${s2.name} to binary: required field not set`);
        return r4.writeUnknownFields && this.writeUnknownFields(t4, e4), e4;
      }, writeField(t4, e4, r4, n2) {
        void 0 !== e4 && Ct(t4, e4, r4, n2);
      } }, util: { ...{ setEnumType: w, initPartial(t4, e4) {
        if (void 0 === t4) return;
        const r4 = e4.getType();
        for (const n2 of r4.fields.byMember()) {
          const r5 = n2.localName, s2 = e4, i3 = t4;
          if (null != i3[r5]) switch (n2.kind) {
            case "oneof":
              const t5 = i3[r5].case;
              if (void 0 === t5) continue;
              const e5 = n2.findField(t5);
              let o3 = i3[r5].value;
              e5 && "message" == e5.kind && !j(o3, e5.T) ? o3 = new e5.T(o3) : e5 && "scalar" === e5.kind && e5.T === D.BYTES && (o3 = Pt(o3)), s2[r5] = { case: t5, value: o3 };
              break;
            case "scalar":
            case "enum":
              let a2 = i3[r5];
              n2.T === D.BYTES && (a2 = n2.repeated ? a2.map(Pt) : Pt(a2)), s2[r5] = a2;
              break;
            case "map":
              switch (n2.V.kind) {
                case "scalar":
                case "enum":
                  if (n2.V.T === D.BYTES) for (const [t7, e6] of Object.entries(i3[r5])) s2[r5][t7] = Pt(e6);
                  else Object.assign(s2[r5], i3[r5]);
                  break;
                case "message":
                  const t6 = n2.V.T;
                  for (const e6 of Object.keys(i3[r5])) {
                    let n3 = i3[r5][e6];
                    t6.fieldWrapper || (n3 = new t6(n3)), s2[r5][e6] = n3;
                  }
              }
              break;
            case "message":
              const u2 = n2.T;
              if (n2.repeated) s2[r5] = i3[r5].map((t6) => j(t6, u2) ? t6 : new u2(t6));
              else {
                const t6 = i3[r5];
                u2.fieldWrapper ? "google.protobuf.BytesValue" === u2.typeName ? s2[r5] = Pt(t6) : s2[r5] = t6 : s2[r5] = j(t6, u2) ? t6 : new u2(t6);
              }
          }
        }
      }, equals: (t4, e4, r4) => e4 === r4 || !(!e4 || !r4) && t4.fields.byMember().every((t5) => {
        const n2 = e4[t5.localName], s2 = r4[t5.localName];
        if (t5.repeated) {
          if (n2.length !== s2.length) return false;
          switch (t5.kind) {
            case "message":
              return n2.every((e5, r5) => t5.T.equals(e5, s2[r5]));
            case "scalar":
              return n2.every((e5, r5) => Q(t5.T, e5, s2[r5]));
            case "enum":
              return n2.every((t6, e5) => Q(D.INT32, t6, s2[e5]));
          }
          throw new Error(`repeated cannot contain ${t5.kind}`);
        }
        switch (t5.kind) {
          case "message":
            return t5.T.equals(n2, s2);
          case "enum":
            return Q(D.INT32, n2, s2);
          case "scalar":
            return Q(t5.T, n2, s2);
          case "oneof":
            if (n2.case !== s2.case) return false;
            const e5 = t5.findField(n2.case);
            if (void 0 === e5) return true;
            switch (e5.kind) {
              case "message":
                return e5.T.equals(n2.value, s2.value);
              case "enum":
                return Q(D.INT32, n2.value, s2.value);
              case "scalar":
                return Q(e5.T, n2.value, s2.value);
            }
            throw new Error(`oneof cannot contain ${e5.kind}`);
          case "map":
            const r5 = Object.keys(n2).concat(Object.keys(s2));
            switch (t5.V.kind) {
              case "message":
                const e6 = t5.V.T;
                return r5.every((t6) => e6.equals(n2[t6], s2[t6]));
              case "enum":
                return r5.every((t6) => Q(D.INT32, n2[t6], s2[t6]));
              case "scalar":
                const i3 = t5.V.T;
                return r5.every((t6) => Q(i3, n2[t6], s2[t6]));
            }
        }
      }), clone(t4) {
        const e4 = t4.getType(), r4 = new e4(), n2 = r4;
        for (const r5 of e4.fields.byMember()) {
          const e5 = t4[r5.localName];
          let s2;
          if (r5.repeated) s2 = e5.map(Rt);
          else if ("map" == r5.kind) {
            s2 = n2[r5.localName];
            for (const [t5, r6] of Object.entries(e5)) s2[t5] = Rt(r6);
          } else s2 = "oneof" == r5.kind ? r5.findField(e5.case) ? { case: e5.case, value: Rt(e5.value) } : { case: void 0 } : Rt(e5);
          n2[r5.localName] = s2;
        }
        for (const r5 of e4.runtime.bin.listUnknownFields(t4)) e4.runtime.bin.onUnknownField(n2, r5.no, r5.wireType, r5.data);
        return r4;
      } }, newFieldList: e3, initFields: r3 }, makeMessageType(t4, e4, r4) {
        return (function(t5, e5, r5, n2) {
          const s2 = n2?.localName ?? e5.substring(e5.lastIndexOf(".") + 1), i3 = { [s2]: function(e6) {
            t5.util.initFields(this), t5.util.initPartial(e6, this);
          } }[s2];
          return Object.setPrototypeOf(i3.prototype, new E()), Object.assign(i3, { runtime: t5, typeName: e5, fields: t5.util.newFieldList(r5), fromBinary: (t6, e6) => new i3().fromBinary(t6, e6), fromJson: (t6, e6) => new i3().fromJson(t6, e6), fromJsonString: (t6, e6) => new i3().fromJsonString(t6, e6), equals: (e6, r6) => t5.util.equals(i3, e6, r6) }), i3;
        })(this, t4, e4, r4);
      }, makeEnum: J, makeEnumType: S, getEnumType: y, makeExtension(t4, e4, r4) {
        return /* @__PURE__ */ (function(t5, e5, r5, n2) {
          let s2;
          return { typeName: e5, extendee: r5, get field() {
            if (!s2) {
              const r6 = "function" == typeof n2 ? n2() : n2;
              r6.name = e5.split(".").pop(), r6.jsonName = `[${e5}]`, s2 = t5.util.newFieldList([r6]).list()[0];
            }
            return s2;
          }, runtime: t5 };
        })(this, t4, e4, r4);
      } };
    }
    class xt {
      constructor(t3, e3) {
        this._fields = t3, this._normalizer = e3;
      }
      findJsonName(t3) {
        if (!this.jsonNames) {
          const t4 = {};
          for (const e3 of this.list()) t4[e3.jsonName] = t4[e3.name] = e3;
          this.jsonNames = t4;
        }
        return this.jsonNames[t3];
      }
      find(t3) {
        if (!this.numbers) {
          const t4 = {};
          for (const e3 of this.list()) t4[e3.no] = e3;
          this.numbers = t4;
        }
        return this.numbers[t3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((t3, e3) => t3.no - e3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const t3 = this.members;
          let e3;
          for (const r3 of this.list()) r3.oneof ? r3.oneof !== e3 && (e3 = r3.oneof, t3.push(e3)) : t3.push(r3);
        }
        return this.members;
      }
    }
    function Nt(t3, e3) {
      const r3 = Qt(t3);
      return e3 ? r3 : $t(Lt(r3));
    }
    function Dt(t3) {
      return Nt(t3, false);
    }
    const Ut = Qt;
    function Qt(t3) {
      let e3 = false;
      const r3 = [];
      for (let n2 = 0; n2 < t3.length; n2++) {
        let s2 = t3.charAt(n2);
        switch (s2) {
          case "_":
            e3 = true;
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
            r3.push(s2), e3 = false;
            break;
          default:
            e3 && (e3 = false, s2 = s2.toUpperCase()), r3.push(s2);
        }
      }
      return r3.join("");
    }
    const Mt = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), Ot = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), Ft = (t3) => `${t3}$`, Lt = (t3) => Ot.has(t3) ? Ft(t3) : t3, $t = (t3) => Mt.has(t3) ? Ft(t3) : t3;
    class Gt {
      constructor(t3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = t3, this.localName = Dt(t3);
      }
      addField(t3) {
        p(t3.oneof === this, `field ${t3.name} not one of ${this.name}`), this.fields.push(t3);
      }
      findField(t3) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let t4 = 0; t4 < this.fields.length; t4++) this._lookup[this.fields[t4].localName] = this.fields[t4];
        }
        return this._lookup[t3];
      }
    }
    function Ht(t3, e3) {
      const r3 = [];
      let n2;
      for (const s2 of "function" == typeof t3 ? t3() : t3) {
        const t4 = s2;
        if (t4.localName = Nt(s2.name, void 0 !== s2.oneof), t4.jsonName = s2.jsonName ?? Ut(s2.name), t4.repeated = s2.repeated ?? false, "scalar" == s2.kind && (t4.L = s2.L ?? U.BIGINT), t4.delimited = s2.delimited ?? false, t4.req = s2.req ?? false, t4.opt = s2.opt ?? false, void 0 === s2.packed && (t4.packed = !!e3 && ("enum" == s2.kind || "scalar" == s2.kind && s2.T != D.BYTES && s2.T != D.STRING)), void 0 !== s2.oneof) {
          const e4 = "string" == typeof s2.oneof ? s2.oneof : s2.oneof.name;
          n2 && n2.name == e4 || (n2 = new Gt(e4)), t4.oneof = n2, n2.addField(t4);
        }
        r3.push(t4);
      }
      return r3;
    }
    const Kt = Tt("proto3", (t3) => new xt(t3, (t4) => Ht(t4, true)), (t3) => {
      for (const e3 of t3.getType().fields.byMember()) {
        if (e3.opt) continue;
        const r3 = e3.localName, n2 = t3;
        if (e3.repeated) n2[r3] = [];
        else switch (e3.kind) {
          case "oneof":
            n2[r3] = { case: void 0 };
            break;
          case "enum":
            n2[r3] = 0;
            break;
          case "map":
            n2[r3] = {};
            break;
          case "scalar":
            n2[r3] = M(e3.T, e3.L);
        }
      }
    }), Vt = Tt("proto2", (t3) => new xt(t3, (t4) => Ht(t4, false)), (t3) => {
      for (const e3 of t3.getType().fields.byMember()) {
        const r3 = e3.localName, n2 = t3;
        if (e3.repeated) n2[r3] = [];
        else switch (e3.kind) {
          case "oneof":
            n2[r3] = { case: void 0 };
            break;
          case "map":
            n2[r3] = {};
        }
      }
    });
    Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
    var zt = ((t3) => (t3[t3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", t3[t3.EDITION_LEGACY = 900] = "EDITION_LEGACY", t3[t3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", t3[t3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", t3[t3.EDITION_2023 = 1e3] = "EDITION_2023", t3[t3.EDITION_2024 = 1001] = "EDITION_2024", t3[t3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", t3[t3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", t3[t3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", t3[t3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", t3[t3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", t3[t3.EDITION_MAX = 2147483647] = "EDITION_MAX", t3))(zt || {});
    Vt.util.setEnumType(zt, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    const Wt = class t3 extends E {
      constructor(t4) {
        super(), this.file = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Wt.runtime = Vt, Wt.typeName = "google.protobuf.FileDescriptorSet", Wt.fields = Vt.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: jt, repeated: true }]);
    const Yt = class t3 extends E {
      constructor(t4) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Yt.runtime = Vt, Yt.typeName = "google.protobuf.FileDescriptorProto", Yt.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: Zt, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: ge, repeated: true }, { no: 6, name: "service", kind: "message", T: Je, repeated: true }, { no: 7, name: "extension", kind: "message", T: le, repeated: true }, { no: 8, name: "options", kind: "message", T: Ce, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: fr, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: Vt.getEnumType(zt), opt: true }]);
    let jt = Yt;
    const Xt = class t3 extends E {
      constructor(t4) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Xt.runtime = Vt, Xt.typeName = "google.protobuf.DescriptorProto", Xt.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: le, repeated: true }, { no: 6, name: "extension", kind: "message", T: le, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: Xt, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: ge, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: ee, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: pe, repeated: true }, { no: 7, name: "options", kind: "message", T: ve, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: ne, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    let Zt = Xt;
    const te = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    te.runtime = Vt, te.typeName = "google.protobuf.DescriptorProto.ExtensionRange", te.fields = Vt.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: ie, opt: true }]);
    let ee = te;
    const re = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    re.runtime = Vt, re.typeName = "google.protobuf.DescriptorProto.ReservedRange", re.fields = Vt.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    let ne = re;
    const se = class t3 extends E {
      constructor(t4) {
        super(), this.uninterpretedOption = [], this.declaration = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    se.runtime = Vt, se.typeName = "google.protobuf.ExtensionRangeOptions", se.fields = Vt.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }, { no: 2, name: "declaration", kind: "message", T: ue, repeated: true }, { no: 50, name: "features", kind: "message", T: rr, opt: true }, { no: 3, name: "verification", kind: "enum", T: Vt.getEnumType(oe), opt: true, default: 1 }]);
    let ie = se;
    var oe = ((t3) => (t3[t3.DECLARATION = 0] = "DECLARATION", t3[t3.UNVERIFIED = 1] = "UNVERIFIED", t3))(oe || {});
    Vt.util.setEnumType(oe, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    const ae = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    ae.runtime = Vt, ae.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", ae.fields = Vt.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    let ue = ae;
    const ce = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    ce.runtime = Vt, ce.typeName = "google.protobuf.FieldDescriptorProto", ce.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: Vt.getEnumType(de), opt: true }, { no: 5, name: "type", kind: "enum", T: Vt.getEnumType(me), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: Re, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
    let le = ce;
    var me = ((t3) => (t3[t3.DOUBLE = 1] = "DOUBLE", t3[t3.FLOAT = 2] = "FLOAT", t3[t3.INT64 = 3] = "INT64", t3[t3.UINT64 = 4] = "UINT64", t3[t3.INT32 = 5] = "INT32", t3[t3.FIXED64 = 6] = "FIXED64", t3[t3.FIXED32 = 7] = "FIXED32", t3[t3.BOOL = 8] = "BOOL", t3[t3.STRING = 9] = "STRING", t3[t3.GROUP = 10] = "GROUP", t3[t3.MESSAGE = 11] = "MESSAGE", t3[t3.BYTES = 12] = "BYTES", t3[t3.UINT32 = 13] = "UINT32", t3[t3.ENUM = 14] = "ENUM", t3[t3.SFIXED32 = 15] = "SFIXED32", t3[t3.SFIXED64 = 16] = "SFIXED64", t3[t3.SINT32 = 17] = "SINT32", t3[t3.SINT64 = 18] = "SINT64", t3))(me || {});
    Vt.util.setEnumType(me, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
    var de = ((t3) => (t3[t3.OPTIONAL = 1] = "OPTIONAL", t3[t3.REPEATED = 3] = "REPEATED", t3[t3.REQUIRED = 2] = "REQUIRED", t3))(de || {});
    Vt.util.setEnumType(de, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    const fe = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    fe.runtime = Vt, fe.typeName = "google.protobuf.OneofDescriptorProto", fe.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: Fe, opt: true }]);
    let pe = fe;
    const he = class t3 extends E {
      constructor(t4) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    he.runtime = Vt, he.typeName = "google.protobuf.EnumDescriptorProto", he.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: we, repeated: true }, { no: 3, name: "options", kind: "message", T: $e, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: _e, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    let ge = he;
    const Ae = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Ae.runtime = Vt, Ae.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", Ae.fields = Vt.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    let _e = Ae;
    const ye = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    ye.runtime = Vt, ye.typeName = "google.protobuf.EnumValueDescriptorProto", ye.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: He, opt: true }]);
    let we = ye;
    const Se = class t3 extends E {
      constructor(t4) {
        super(), this.method = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Se.runtime = Vt, Se.typeName = "google.protobuf.ServiceDescriptorProto", Se.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: Ee, repeated: true }, { no: 3, name: "options", kind: "message", T: Ve, opt: true }]);
    let Je = Se;
    const Be = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Be.runtime = Vt, Be.typeName = "google.protobuf.MethodDescriptorProto", Be.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: We, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    let Ee = Be;
    const Ie = class t3 extends E {
      constructor(t4) {
        super(), this.uninterpretedOption = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Ie.runtime = Vt, Ie.typeName = "google.protobuf.FileOptions", Ie.fields = Vt.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: Vt.getEnumType(be), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: rr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }]);
    let Ce = Ie;
    var be = ((t3) => (t3[t3.SPEED = 1] = "SPEED", t3[t3.CODE_SIZE = 2] = "CODE_SIZE", t3[t3.LITE_RUNTIME = 3] = "LITE_RUNTIME", t3))(be || {});
    Vt.util.setEnumType(be, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    const ke = class t3 extends E {
      constructor(t4) {
        super(), this.uninterpretedOption = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    ke.runtime = Vt, ke.typeName = "google.protobuf.MessageOptions", ke.fields = Vt.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: rr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }]);
    let ve = ke;
    const qe = class t3 extends E {
      constructor(t4) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    qe.runtime = Vt, qe.typeName = "google.protobuf.FieldOptions", qe.fields = Vt.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: Vt.getEnumType(Pe), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: Vt.getEnumType(Te), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: Vt.getEnumType(xe), opt: true }, { no: 19, name: "targets", kind: "enum", T: Vt.getEnumType(Ne), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: Ue, repeated: true }, { no: 21, name: "features", kind: "message", T: rr, opt: true }, { no: 22, name: "feature_support", kind: "message", T: Me, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }]);
    let Re = qe;
    var Pe = ((t3) => (t3[t3.STRING = 0] = "STRING", t3[t3.CORD = 1] = "CORD", t3[t3.STRING_PIECE = 2] = "STRING_PIECE", t3))(Pe || {});
    Vt.util.setEnumType(Pe, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
    var Te = ((t3) => (t3[t3.JS_NORMAL = 0] = "JS_NORMAL", t3[t3.JS_STRING = 1] = "JS_STRING", t3[t3.JS_NUMBER = 2] = "JS_NUMBER", t3))(Te || {});
    Vt.util.setEnumType(Te, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
    var xe = ((t3) => (t3[t3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", t3[t3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", t3[t3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", t3))(xe || {});
    Vt.util.setEnumType(xe, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
    var Ne = ((t3) => (t3[t3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", t3[t3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", t3[t3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", t3[t3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", t3[t3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", t3[t3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", t3[t3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", t3[t3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", t3[t3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", t3[t3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", t3))(Ne || {});
    Vt.util.setEnumType(Ne, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    const De = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    De.runtime = Vt, De.typeName = "google.protobuf.FieldOptions.EditionDefault", De.fields = Vt.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: Vt.getEnumType(zt), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    let Ue = De;
    const Qe = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Qe.runtime = Vt, Qe.typeName = "google.protobuf.FieldOptions.FeatureSupport", Qe.fields = Vt.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: Vt.getEnumType(zt), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: Vt.getEnumType(zt), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: Vt.getEnumType(zt), opt: true }]);
    let Me = Qe;
    const Oe = class t3 extends E {
      constructor(t4) {
        super(), this.uninterpretedOption = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Oe.runtime = Vt, Oe.typeName = "google.protobuf.OneofOptions", Oe.fields = Vt.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: rr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }]);
    let Fe = Oe;
    const Le = class t3 extends E {
      constructor(t4) {
        super(), this.uninterpretedOption = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Le.runtime = Vt, Le.typeName = "google.protobuf.EnumOptions", Le.fields = Vt.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: rr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }]);
    let $e = Le;
    const Ge = class t3 extends E {
      constructor(t4) {
        super(), this.uninterpretedOption = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Ge.runtime = Vt, Ge.typeName = "google.protobuf.EnumValueOptions", Ge.fields = Vt.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: rr, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: Me, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }]);
    let He = Ge;
    const Ke = class t3 extends E {
      constructor(t4) {
        super(), this.uninterpretedOption = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Ke.runtime = Vt, Ke.typeName = "google.protobuf.ServiceOptions", Ke.fields = Vt.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: rr, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }]);
    let Ve = Ke;
    const ze = class t3 extends E {
      constructor(t4) {
        super(), this.uninterpretedOption = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    ze.runtime = Vt, ze.typeName = "google.protobuf.MethodOptions", ze.fields = Vt.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: Vt.getEnumType(Ye), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: rr, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Xe, repeated: true }]);
    let We = ze;
    var Ye = ((t3) => (t3[t3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", t3[t3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", t3[t3.IDEMPOTENT = 2] = "IDEMPOTENT", t3))(Ye || {});
    Vt.util.setEnumType(Ye, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    const je = class t3 extends E {
      constructor(t4) {
        super(), this.name = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    je.runtime = Vt, je.typeName = "google.protobuf.UninterpretedOption", je.fields = Vt.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: tr, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    let Xe = je;
    const Ze = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Ze.runtime = Vt, Ze.typeName = "google.protobuf.UninterpretedOption.NamePart", Ze.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    let tr = Ze;
    const er = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    er.runtime = Vt, er.typeName = "google.protobuf.FeatureSet", er.fields = Vt.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: Vt.getEnumType(nr), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: Vt.getEnumType(sr), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: Vt.getEnumType(ir), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: Vt.getEnumType(or), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: Vt.getEnumType(ar), opt: true }, { no: 6, name: "json_format", kind: "enum", T: Vt.getEnumType(ur), opt: true }]);
    let rr = er;
    var nr = ((t3) => (t3[t3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", t3[t3.EXPLICIT = 1] = "EXPLICIT", t3[t3.IMPLICIT = 2] = "IMPLICIT", t3[t3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", t3))(nr || {});
    Vt.util.setEnumType(nr, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
    var sr = ((t3) => (t3[t3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", t3[t3.OPEN = 1] = "OPEN", t3[t3.CLOSED = 2] = "CLOSED", t3))(sr || {});
    Vt.util.setEnumType(sr, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
    var ir = ((t3) => (t3[t3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", t3[t3.PACKED = 1] = "PACKED", t3[t3.EXPANDED = 2] = "EXPANDED", t3))(ir || {});
    Vt.util.setEnumType(ir, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
    var or = ((t3) => (t3[t3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", t3[t3.VERIFY = 2] = "VERIFY", t3[t3.NONE = 3] = "NONE", t3))(or || {});
    Vt.util.setEnumType(or, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
    var ar = ((t3) => (t3[t3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", t3[t3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", t3[t3.DELIMITED = 2] = "DELIMITED", t3))(ar || {});
    Vt.util.setEnumType(ar, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
    var ur = ((t3) => (t3[t3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", t3[t3.ALLOW = 1] = "ALLOW", t3[t3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", t3))(ur || {});
    Vt.util.setEnumType(ur, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    const cr = class t3 extends E {
      constructor(t4) {
        super(), this.defaults = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    cr.runtime = Vt, cr.typeName = "google.protobuf.FeatureSetDefaults", cr.fields = Vt.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: mr, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: Vt.getEnumType(zt), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: Vt.getEnumType(zt), opt: true }]);
    const lr = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    lr.runtime = Vt, lr.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", lr.fields = Vt.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: Vt.getEnumType(zt), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: rr, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: rr, opt: true }]);
    let mr = lr;
    const dr = class t3 extends E {
      constructor(t4) {
        super(), this.location = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    dr.runtime = Vt, dr.typeName = "google.protobuf.SourceCodeInfo", dr.fields = Vt.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: hr, repeated: true }]);
    let fr = dr;
    const pr = class t3 extends E {
      constructor(t4) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    pr.runtime = Vt, pr.typeName = "google.protobuf.SourceCodeInfo.Location", pr.fields = Vt.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    let hr = pr;
    const gr = class t3 extends E {
      constructor(t4) {
        super(), this.annotation = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    gr.runtime = Vt, gr.typeName = "google.protobuf.GeneratedCodeInfo", gr.fields = Vt.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: yr, repeated: true }]);
    let Ar = gr;
    const _r = class t3 extends E {
      constructor(t4) {
        super(), this.path = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    _r.runtime = Vt, _r.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", _r.fields = Vt.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: Vt.getEnumType(wr), opt: true }]);
    let yr = _r;
    var wr = ((t3) => (t3[t3.NONE = 0] = "NONE", t3[t3.SET = 1] = "SET", t3[t3.ALIAS = 2] = "ALIAS", t3))(wr || {});
    Vt.util.setEnumType(wr, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
    me.DOUBLE, D.DOUBLE, me.FLOAT, D.FLOAT, me.INT64, D.INT64, me.UINT64, D.UINT64, me.INT32, D.INT32, me.FIXED64, D.FIXED64, me.FIXED32, D.FIXED32, me.BOOL, D.BOOL, me.STRING, D.STRING, me.GROUP, me.MESSAGE, me.BYTES, D.BYTES, me.UINT32, D.UINT32, me.ENUM, me.SFIXED32, D.SFIXED32, me.SFIXED64, D.SFIXED64, me.SINT32, D.SINT32, me.SINT64, D.SINT64;
    const Sr = class t3 extends E {
      constructor(t4) {
        super(), this.seconds = N.zero, this.nanos = 0, Kt.util.initPartial(t4, this);
      }
      fromJson(t4, e3) {
        if ("string" != typeof t4) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${Kt.json.debug(t4)}`);
        const r3 = t4.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!r3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const n2 = Date.parse(r3[1] + "-" + r3[2] + "-" + r3[3] + "T" + r3[4] + ":" + r3[5] + ":" + r3[6] + (r3[8] ? r3[8] : "Z"));
        if (Number.isNaN(n2)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (n2 < Date.parse("0001-01-01T00:00:00Z") || n2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = N.parse(n2 / 1e3), this.nanos = 0, r3[7] && (this.nanos = parseInt("1" + r3[7] + "0".repeat(9 - r3[7].length)) - 1e9), this;
      }
      toJson(t4) {
        const e3 = 1e3 * Number(this.seconds);
        if (e3 < Date.parse("0001-01-01T00:00:00Z") || e3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let r3 = "Z";
        if (this.nanos > 0) {
          const t5 = (this.nanos + 1e9).toString().substring(1);
          r3 = "000000" === t5.substring(3) ? "." + t5.substring(0, 3) + "Z" : "000" === t5.substring(6) ? "." + t5.substring(0, 6) + "Z" : "." + t5 + "Z";
        }
        return new Date(e3).toISOString().replace(".000Z", r3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return t3.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(e3) {
        const r3 = e3.getTime();
        return new t3({ seconds: N.parse(Math.floor(r3 / 1e3)), nanos: r3 % 1e3 * 1e6 });
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Sr.runtime = Kt, Sr.typeName = "google.protobuf.Timestamp", Sr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    const Jr = class t3 extends E {
      constructor(t4) {
        super(), this.seconds = N.zero, this.nanos = 0, Kt.util.initPartial(t4, this);
      }
      fromJson(t4, e3) {
        if ("string" != typeof t4) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Kt.json.debug(t4)}`);
        const r3 = t4.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === r3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Kt.json.debug(t4)}`);
        const n2 = Number(r3[1]);
        if (n2 > 315576e6 || n2 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Kt.json.debug(t4)}`);
        if (this.seconds = N.parse(n2), "string" == typeof r3[2]) {
          const t5 = r3[2] + "0".repeat(9 - r3[2].length);
          this.nanos = parseInt(t5), (n2 < 0 || Object.is(n2, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(t4) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let e3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let t5 = Math.abs(this.nanos).toString();
          t5 = "0".repeat(9 - t5.length) + t5, "000000" === t5.substring(3) ? t5 = t5.substring(0, 3) : "000" === t5.substring(6) && (t5 = t5.substring(0, 6)), e3 += "." + t5, this.nanos < 0 && 0 == Number(this.seconds) && (e3 = "-" + e3);
        }
        return e3 + "s";
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Jr.runtime = Kt, Jr.typeName = "google.protobuf.Duration", Jr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    const Br = class t3 extends E {
      constructor(t4) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        if ("" === this.typeUrl) return {};
        const e3 = this.typeUrlToName(this.typeUrl), r3 = t4?.typeRegistry?.findMessage(e3);
        if (!r3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let n2 = r3.fromBinary(this.value).toJson(t4);
        return (e3.startsWith("google.protobuf.") || null === n2 || Array.isArray(n2) || "object" != typeof n2) && (n2 = { value: n2 }), n2["@type"] = this.typeUrl, n2;
      }
      fromJson(t4, e3) {
        if (null === t4 || Array.isArray(t4) || "object" != typeof t4) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === t4 ? "null" : Array.isArray(t4) ? "array" : typeof t4));
        if (0 == Object.keys(t4).length) return this;
        const r3 = t4["@type"];
        if ("string" != typeof r3 || "" == r3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const n2 = this.typeUrlToName(r3), s2 = e3?.typeRegistry?.findMessage(n2);
        if (!s2) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${r3} is not in the type registry`);
        let i3;
        if (n2.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(t4, "value")) i3 = s2.fromJson(t4.value, e3);
        else {
          const r4 = Object.assign({}, t4);
          delete r4["@type"], i3 = s2.fromJson(r4, e3);
        }
        return this.packFrom(i3), this;
      }
      packFrom(t4) {
        this.value = t4.toBinary(), this.typeUrl = this.typeNameToUrl(t4.getType().typeName);
      }
      unpackTo(t4) {
        return !!this.is(t4.getType()) && (t4.fromBinary(this.value), true);
      }
      unpack(t4) {
        if ("" === this.typeUrl) return;
        const e3 = t4.findMessage(this.typeUrlToName(this.typeUrl));
        return e3 ? e3.fromBinary(this.value) : void 0;
      }
      is(t4) {
        if ("" === this.typeUrl) return false;
        const e3 = this.typeUrlToName(this.typeUrl);
        let r3 = "";
        return r3 = "string" == typeof t4 ? t4 : t4.typeName, e3 === r3;
      }
      typeNameToUrl(t4) {
        return `type.googleapis.com/${t4}`;
      }
      typeUrlToName(t4) {
        if (!t4.length) throw new Error(`invalid type url: ${t4}`);
        const e3 = t4.lastIndexOf("/"), r3 = e3 >= 0 ? t4.substring(e3 + 1) : t4;
        if (!r3.length) throw new Error(`invalid type url: ${t4}`);
        return r3;
      }
      static pack(e3) {
        const r3 = new t3();
        return r3.packFrom(e3), r3;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Br.runtime = Kt, Br.typeName = "google.protobuf.Any", Br.fields = Kt.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
    let Er = Br;
    const Ir = class t3 extends E {
      constructor(t4) {
        super(), Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Ir.runtime = Kt, Ir.typeName = "google.protobuf.Empty", Ir.fields = Kt.util.newFieldList(() => []);
    const Cr = class t3 extends E {
      constructor(t4) {
        super(), this.paths = [], Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return this.paths.map((t5) => {
          if (t5.match(/_[0-9]?_/g) || t5.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + t5 + '" is irreversible');
          return (function(t6) {
            let e3 = false;
            const r3 = [];
            for (let n2 = 0; n2 < t6.length; n2++) {
              let s2 = t6.charAt(n2);
              switch (s2) {
                case "_":
                  e3 = true;
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
                  r3.push(s2), e3 = false;
                  break;
                default:
                  e3 && (e3 = false, s2 = s2.toUpperCase()), r3.push(s2);
              }
            }
            return r3.join("");
          })(t5);
        }).join(",");
      }
      fromJson(t4, e3) {
        if ("string" != typeof t4) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + Kt.json.debug(t4));
        if ("" === t4) return this;
        return this.paths = t4.split(",").map(function(t5) {
          if (t5.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const e4 = t5.replace(/[A-Z]/g, (t6) => "_" + t6.toLowerCase());
          return "_" === e4[0] ? e4.substring(1) : e4;
        }), this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Cr.runtime = Kt, Cr.typeName = "google.protobuf.FieldMask", Cr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
    var br = ((t3) => (t3[t3.NULL_VALUE = 0] = "NULL_VALUE", t3))(br || {});
    Kt.util.setEnumType(br, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    const kr = class t3 extends E {
      constructor(t4) {
        super(), this.fields = {}, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        const e3 = {};
        for (const [r3, n2] of Object.entries(this.fields)) e3[r3] = n2.toJson(t4);
        return e3;
      }
      fromJson(t4, e3) {
        if ("object" != typeof t4 || null == t4 || Array.isArray(t4)) throw new Error("cannot decode google.protobuf.Struct from JSON " + Kt.json.debug(t4));
        for (const [e4, r3] of Object.entries(t4)) this.fields[e4] = Rr.fromJson(r3);
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    kr.runtime = Kt, kr.typeName = "google.protobuf.Struct", kr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: Rr } }]);
    let vr = kr;
    const qr = class t3 extends E {
      constructor(t4) {
        super(), this.kind = { case: void 0 }, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
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
            return this.kind.value.toJson({ ...t4, emitDefaultValues: true });
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(t4, e3) {
        switch (typeof t4) {
          case "number":
            this.kind = { case: "numberValue", value: t4 };
            break;
          case "string":
            this.kind = { case: "stringValue", value: t4 };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: t4 };
            break;
          case "object":
            null === t4 ? this.kind = { case: "nullValue", value: 0 } : Array.isArray(t4) ? this.kind = { case: "listValue", value: Tr.fromJson(t4) } : this.kind = { case: "structValue", value: vr.fromJson(t4) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + Kt.json.debug(t4));
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    qr.runtime = Kt, qr.typeName = "google.protobuf.Value", qr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: Kt.getEnumType(br), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: vr, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: Tr, oneof: "kind" }]);
    let Rr = qr;
    const Pr = class t3 extends E {
      constructor(t4) {
        super(), this.values = [], Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return this.values.map((t5) => t5.toJson());
      }
      fromJson(t4, e3) {
        if (!Array.isArray(t4)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + Kt.json.debug(t4));
        for (let e4 of t4) this.values.push(Rr.fromJson(e4));
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Pr.runtime = Kt, Pr.typeName = "google.protobuf.ListValue", Pr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: Rr, repeated: true }]);
    let Tr = Pr;
    const xr = class t3 extends E {
      constructor(t4) {
        super(), this.value = 0, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.DOUBLE, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.DOUBLE, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    xr.runtime = Kt, xr.typeName = "google.protobuf.DoubleValue", xr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), xr.fieldWrapper = { wrapField: (t3) => new xr({ value: t3 }), unwrapField: (t3) => t3.value };
    const Nr = class t3 extends E {
      constructor(t4) {
        super(), this.value = 0, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.FLOAT, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.FLOAT, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Nr.runtime = Kt, Nr.typeName = "google.protobuf.FloatValue", Nr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), Nr.fieldWrapper = { wrapField: (t3) => new Nr({ value: t3 }), unwrapField: (t3) => t3.value };
    const Dr = class t3 extends E {
      constructor(t4) {
        super(), this.value = N.zero, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.INT64, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.INT64, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Dr.runtime = Kt, Dr.typeName = "google.protobuf.Int64Value", Dr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), Dr.fieldWrapper = { wrapField: (t3) => new Dr({ value: t3 }), unwrapField: (t3) => t3.value };
    const Ur = class t3 extends E {
      constructor(t4) {
        super(), this.value = N.zero, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.UINT64, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.UINT64, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Ur.runtime = Kt, Ur.typeName = "google.protobuf.UInt64Value", Ur.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), Ur.fieldWrapper = { wrapField: (t3) => new Ur({ value: t3 }), unwrapField: (t3) => t3.value };
    const Qr = class t3 extends E {
      constructor(t4) {
        super(), this.value = 0, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.INT32, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.INT32, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Qr.runtime = Kt, Qr.typeName = "google.protobuf.Int32Value", Qr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), Qr.fieldWrapper = { wrapField: (t3) => new Qr({ value: t3 }), unwrapField: (t3) => t3.value };
    const Mr = class t3 extends E {
      constructor(t4) {
        super(), this.value = 0, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.UINT32, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.UINT32, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Mr.runtime = Kt, Mr.typeName = "google.protobuf.UInt32Value", Mr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), Mr.fieldWrapper = { wrapField: (t3) => new Mr({ value: t3 }), unwrapField: (t3) => t3.value };
    const Or = class t3 extends E {
      constructor(t4) {
        super(), this.value = false, Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.BOOL, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.BOOL, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Or.runtime = Kt, Or.typeName = "google.protobuf.BoolValue", Or.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), Or.fieldWrapper = { wrapField: (t3) => new Or({ value: t3 }), unwrapField: (t3) => t3.value };
    const Fr = class t3 extends E {
      constructor(t4) {
        super(), this.value = "", Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.STRING, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.STRING, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Fr.runtime = Kt, Fr.typeName = "google.protobuf.StringValue", Fr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), Fr.fieldWrapper = { wrapField: (t3) => new Fr({ value: t3 }), unwrapField: (t3) => t3.value };
    const Lr = class t3 extends E {
      constructor(t4) {
        super(), this.value = new Uint8Array(0), Kt.util.initPartial(t4, this);
      }
      toJson(t4) {
        return Kt.json.writeScalar(D.BYTES, this.value, true);
      }
      fromJson(t4, e3) {
        try {
          this.value = Kt.json.readScalar(D.BYTES, t4);
        } catch (t5) {
          let e4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw t5 instanceof Error && t5.message.length > 0 && (e4 += `: ${t5.message}`), new Error(e4);
        }
        return this;
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Lr.runtime = Kt, Lr.typeName = "google.protobuf.BytesValue", Lr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), Lr.fieldWrapper = { wrapField: (t3) => new Lr({ value: t3 }), unwrapField: (t3) => t3.value };
    y(br);
    const $r = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    $r.runtime = Vt, $r.typeName = "google.protobuf.compiler.Version", $r.fields = Vt.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    let Gr = $r;
    const Hr = class t3 extends E {
      constructor(t4) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Hr.runtime = Vt, Hr.typeName = "google.protobuf.compiler.CodeGeneratorRequest", Hr.fields = Vt.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: jt, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: jt, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: Gr, opt: true }]);
    const Kr = class t3 extends E {
      constructor(t4) {
        super(), this.file = [], Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    Kr.runtime = Vt, Kr.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Kr.fields = Vt.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: Wr, repeated: true }]);
    var Vr = ((t3) => (t3[t3.NONE = 0] = "NONE", t3[t3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", t3[t3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", t3))(Vr || {});
    Vt.util.setEnumType(Vr, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    const zr = class t3 extends E {
      constructor(t4) {
        super(), Vt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Vt.util.equals(t3, e3, r3);
      }
    };
    zr.runtime = Vt, zr.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", zr.fields = Vt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: Ar, opt: true }]);
    let Wr = zr;
    const Yr = class t3 extends E {
      constructor(t4) {
        super(), this.fileName = "", Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Yr.runtime = Kt, Yr.typeName = "google.protobuf.SourceContext", Yr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
    let jr = Yr;
    var Xr = ((t3) => (t3[t3.PROTO2 = 0] = "PROTO2", t3[t3.PROTO3 = 1] = "PROTO3", t3[t3.EDITIONS = 2] = "EDITIONS", t3))(Xr || {});
    Kt.util.setEnumType(Xr, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    const Zr = class t3 extends E {
      constructor(t4) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    Zr.runtime = Kt, Zr.typeName = "google.protobuf.Type", Zr.fields = Kt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: en, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: cn, repeated: true }, { no: 5, name: "source_context", kind: "message", T: jr }, { no: 6, name: "syntax", kind: "enum", T: Kt.getEnumType(Xr) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    const tn = class t3 extends E {
      constructor(t4) {
        super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    tn.runtime = Kt, tn.typeName = "google.protobuf.Field", tn.fields = Kt.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: Kt.getEnumType(rn) }, { no: 2, name: "cardinality", kind: "enum", T: Kt.getEnumType(nn) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: cn, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
    let en = tn;
    var rn = ((t3) => (t3[t3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", t3[t3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", t3[t3.TYPE_FLOAT = 2] = "TYPE_FLOAT", t3[t3.TYPE_INT64 = 3] = "TYPE_INT64", t3[t3.TYPE_UINT64 = 4] = "TYPE_UINT64", t3[t3.TYPE_INT32 = 5] = "TYPE_INT32", t3[t3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", t3[t3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", t3[t3.TYPE_BOOL = 8] = "TYPE_BOOL", t3[t3.TYPE_STRING = 9] = "TYPE_STRING", t3[t3.TYPE_GROUP = 10] = "TYPE_GROUP", t3[t3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", t3[t3.TYPE_BYTES = 12] = "TYPE_BYTES", t3[t3.TYPE_UINT32 = 13] = "TYPE_UINT32", t3[t3.TYPE_ENUM = 14] = "TYPE_ENUM", t3[t3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", t3[t3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", t3[t3.TYPE_SINT32 = 17] = "TYPE_SINT32", t3[t3.TYPE_SINT64 = 18] = "TYPE_SINT64", t3))(rn || {});
    Kt.util.setEnumType(rn, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
    var nn = ((t3) => (t3[t3.UNKNOWN = 0] = "UNKNOWN", t3[t3.OPTIONAL = 1] = "OPTIONAL", t3[t3.REQUIRED = 2] = "REQUIRED", t3[t3.REPEATED = 3] = "REPEATED", t3))(nn || {});
    Kt.util.setEnumType(nn, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    const sn = class t3 extends E {
      constructor(t4) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    sn.runtime = Kt, sn.typeName = "google.protobuf.Enum", sn.fields = Kt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: an, repeated: true }, { no: 3, name: "options", kind: "message", T: cn, repeated: true }, { no: 4, name: "source_context", kind: "message", T: jr }, { no: 5, name: "syntax", kind: "enum", T: Kt.getEnumType(Xr) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    const on = class t3 extends E {
      constructor(t4) {
        super(), this.name = "", this.number = 0, this.options = [], Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    on.runtime = Kt, on.typeName = "google.protobuf.EnumValue", on.fields = Kt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: cn, repeated: true }]);
    let an = on;
    const un = class t3 extends E {
      constructor(t4) {
        super(), this.name = "", Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    un.runtime = Kt, un.typeName = "google.protobuf.Option", un.fields = Kt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: Er }]);
    let cn = un;
    const ln = class t3 extends E {
      constructor(t4) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Xr.PROTO2, Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    ln.runtime = Kt, ln.typeName = "google.protobuf.Api", ln.fields = Kt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: dn, repeated: true }, { no: 3, name: "options", kind: "message", T: cn, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: jr }, { no: 6, name: "mixins", kind: "message", T: pn, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: Kt.getEnumType(Xr) }]);
    const mn = class t3 extends E {
      constructor(t4) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = Xr.PROTO2, Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    mn.runtime = Kt, mn.typeName = "google.protobuf.Method", mn.fields = Kt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: cn, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: Kt.getEnumType(Xr) }]);
    let dn = mn;
    const fn = class t3 extends E {
      constructor(t4) {
        super(), this.name = "", this.root = "", Kt.util.initPartial(t4, this);
      }
      static fromBinary(e3, r3) {
        return new t3().fromBinary(e3, r3);
      }
      static fromJson(e3, r3) {
        return new t3().fromJson(e3, r3);
      }
      static fromJsonString(e3, r3) {
        return new t3().fromJsonString(e3, r3);
      }
      static equals(e3, r3) {
        return Kt.util.equals(t3, e3, r3);
      }
    };
    fn.runtime = Kt, fn.typeName = "google.protobuf.Mixin", fn.fields = Kt.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
    let pn = fn;
    const hn = Kt.makeMessageType("aiserver.v1.CursorPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "column", kind: "scalar", T: 5 }]), gn = Kt.makeMessageType("aiserver.v1.SelectionWithOrientation", () => [{ no: 1, name: "selection_start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "selection_start_column", kind: "scalar", T: 5 }, { no: 3, name: "position_line_number", kind: "scalar", T: 5 }, { no: 4, name: "position_column", kind: "scalar", T: 5 }]), An = Kt.makeMessageType("aiserver.v1.SimplestRange", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 }]), _n = Kt.makeMessageType("aiserver.v1.SimpleRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "start_column", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number_inclusive", kind: "scalar", T: 5 }, { no: 4, name: "end_column", kind: "scalar", T: 5 }]), yn = Kt.makeMessageType("aiserver.v1.LineRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number_inclusive", kind: "scalar", T: 5 }]), wn = Kt.makeMessageType("aiserver.v1.CursorRange", () => [{ no: 1, name: "start_position", kind: "message", T: hn }, { no: 2, name: "end_position", kind: "message", T: hn }]), Sn = Kt.makeMessageType("aiserver.v1.DetailedLine", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 2 }, { no: 3, name: "is_signature", kind: "scalar", T: 8 }]), Jn = Kt.makeMessageType("aiserver.v1.CodeBlock", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "file_contents", kind: "scalar", T: 9, opt: true }, { no: 9, name: "file_contents_length", kind: "scalar", T: 5, opt: true }, { no: 3, name: "range", kind: "message", T: wn }, { no: 4, name: "contents", kind: "scalar", T: 9 }, { no: 5, name: "signatures", kind: "message", T: Bn }, { no: 6, name: "override_contents", kind: "scalar", T: 9, opt: true }, { no: 7, name: "original_contents", kind: "scalar", T: 9, opt: true }, { no: 8, name: "detailed_lines", kind: "message", T: Sn, repeated: true }, { no: 10, name: "file_git_context", kind: "message", T: In }]), Bn = Kt.makeMessageType("aiserver.v1.CodeBlock.Signatures", () => [{ no: 1, name: "ranges", kind: "message", T: wn, repeated: true }], { localName: "CodeBlock_Signatures" }), En = Kt.makeMessageType("aiserver.v1.GitCommit", () => [{ no: 1, name: "commit", kind: "scalar", T: 9 }, { no: 2, name: "author", kind: "scalar", T: 9 }, { no: 3, name: "date", kind: "scalar", T: 9 }, { no: 4, name: "message", kind: "scalar", T: 9 }]), In = Kt.makeMessageType("aiserver.v1.FileGit", () => [{ no: 1, name: "commits", kind: "message", T: En, repeated: true }]), Cn = Kt.makeMessageType("aiserver.v1.Diagnostic", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: wn }, { no: 3, name: "severity", kind: "enum", T: Kt.getEnumType(bn) }, { no: 4, name: "related_information", kind: "message", T: kn, repeated: true }]), bn = Kt.makeEnum("aiserver.v1.Diagnostic.DiagnosticSeverity", [{ no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR", localName: "ERROR" }, { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING", localName: "WARNING" }, { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION", localName: "INFORMATION" }, { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT", localName: "HINT" }]), kn = Kt.makeMessageType("aiserver.v1.Diagnostic.RelatedInformation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: wn }], { localName: "Diagnostic_RelatedInformation" }), vn = Kt.makeMessageType("aiserver.v1.BM25Chunk", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: An }, { no: 3, name: "score", kind: "scalar", T: 5 }, { no: 4, name: "relative_path", kind: "scalar", T: 9 }]), qn = Kt.makeMessageType("aiserver.v1.CurrentFileInfo", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 18, name: "rely_on_filesync", kind: "scalar", T: 8 }, { no: 17, name: "sha_256_hash", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cells", kind: "message", T: Rn, repeated: true }, { no: 10, name: "top_chunks", kind: "message", T: vn, repeated: true }, { no: 9, name: "contents_start_at_line", kind: "scalar", T: 5 }, { no: 3, name: "cursor_position", kind: "message", T: hn }, { no: 4, name: "dataframes", kind: "message", T: Pn, repeated: true }, { no: 8, name: "total_number_of_lines", kind: "scalar", T: 5 }, { no: 5, name: "language_id", kind: "scalar", T: 9 }, { no: 6, name: "selection", kind: "message", T: wn }, { no: 11, name: "alternative_version_id", kind: "scalar", T: 5, opt: true }, { no: 7, name: "diagnostics", kind: "message", T: Cn, repeated: true }, { no: 14, name: "file_version", kind: "scalar", T: 5, opt: true }, { no: 15, name: "cell_start_lines", kind: "scalar", T: 5, repeated: true }, { no: 19, name: "workspace_root_path", kind: "scalar", T: 9 }, { no: 20, name: "line_ending", kind: "scalar", T: 9, opt: true }]), Rn = Kt.makeMessageType("aiserver.v1.CurrentFileInfo.NotebookCell", [], { localName: "CurrentFileInfo_NotebookCell" }), Pn = Kt.makeMessageType("aiserver.v1.DataframeInfo", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "shape", kind: "scalar", T: 9 }, { no: 3, name: "data_dimensionality", kind: "scalar", T: 5 }, { no: 6, name: "columns", kind: "message", T: Tn, repeated: true }, { no: 7, name: "row_count", kind: "scalar", T: 5 }, { no: 8, name: "index_column", kind: "scalar", T: 9 }]), Tn = Kt.makeMessageType("aiserver.v1.DataframeInfo.Column", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "scalar", T: 9 }], { localName: "DataframeInfo_Column" }), xn = Kt.makeMessageType("aiserver.v1.LinterError", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: wn }, { no: 3, name: "source", kind: "scalar", T: 9, opt: true }, { no: 4, name: "related_information", kind: "message", T: kn, repeated: true }, { no: 5, name: "severity", kind: "enum", T: Kt.getEnumType(bn), opt: true }, { no: 6, name: "is_stale", kind: "scalar", T: 8, opt: true }]), Nn = Kt.makeMessageType("aiserver.v1.LinterErrors", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "errors", kind: "message", T: xn, repeated: true }, { no: 3, name: "file_contents", kind: "scalar", T: 9 }]), Dn = Kt.makeMessageType("aiserver.v1.ErrorDetails", () => [{ no: 1, name: "error", kind: "enum", T: Kt.getEnumType(Un) }, { no: 2, name: "details", kind: "message", T: Qn }, { no: 3, name: "is_expected", kind: "scalar", T: 8, opt: true }]), Un = Kt.makeEnum("aiserver.v1.ErrorDetails.Error", [{ no: 0, name: "ERROR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "ERROR_BAD_API_KEY", localName: "BAD_API_KEY" }, { no: 42, name: "ERROR_BAD_USER_API_KEY", localName: "BAD_USER_API_KEY" }, { no: 2, name: "ERROR_NOT_LOGGED_IN", localName: "NOT_LOGGED_IN" }, { no: 3, name: "ERROR_INVALID_AUTH_ID", localName: "INVALID_AUTH_ID" }, { no: 4, name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS", localName: "NOT_HIGH_ENOUGH_PERMISSIONS" }, { no: 18, name: "ERROR_AGENT_REQUIRES_LOGIN", localName: "AGENT_REQUIRES_LOGIN" }, { no: 5, name: "ERROR_BAD_MODEL_NAME", localName: "BAD_MODEL_NAME" }, { no: 39, name: "ERROR_NOT_FOUND", localName: "NOT_FOUND" }, { no: 40, name: "ERROR_DEPRECATED", localName: "DEPRECATED" }, { no: 6, name: "ERROR_USER_NOT_FOUND", localName: "USER_NOT_FOUND" }, { no: 7, name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED", localName: "FREE_USER_RATE_LIMIT_EXCEEDED" }, { no: 8, name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED", localName: "PRO_USER_RATE_LIMIT_EXCEEDED" }, { no: 9, name: "ERROR_FREE_USER_USAGE_LIMIT", localName: "FREE_USER_USAGE_LIMIT" }, { no: 10, name: "ERROR_PRO_USER_USAGE_LIMIT", localName: "PRO_USER_USAGE_LIMIT" }, { no: 41, name: "ERROR_RESOURCE_EXHAUSTED", localName: "RESOURCE_EXHAUSTED" }, { no: 11, name: "ERROR_AUTH_TOKEN_NOT_FOUND", localName: "AUTH_TOKEN_NOT_FOUND" }, { no: 12, name: "ERROR_AUTH_TOKEN_EXPIRED", localName: "AUTH_TOKEN_EXPIRED" }, { no: 13, name: "ERROR_OPENAI", localName: "OPENAI" }, { no: 14, name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED", localName: "OPENAI_RATE_LIMIT_EXCEEDED" }, { no: 20, name: "ERROR_MAX_TOKENS", localName: "MAX_TOKENS" }, { no: 23, name: "ERROR_PRO_USER_ONLY", localName: "PRO_USER_ONLY" }, { no: 21, name: "ERROR_USER_ABORTED_REQUEST", localName: "USER_ABORTED_REQUEST" }, { no: 25, name: "ERROR_TIMEOUT", localName: "TIMEOUT" }, { no: 22, name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED", localName: "GENERIC_RATE_LIMIT_EXCEEDED" }, { no: 28, name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT", localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT" }, { no: 29, name: "ERROR_CUSTOM_MESSAGE", localName: "CUSTOM_MESSAGE" }, { no: 30, name: "ERROR_OUTDATED_CLIENT", localName: "OUTDATED_CLIENT" }, { no: 31, name: "ERROR_CLAUDE_IMAGE_TOO_LARGE", localName: "CLAUDE_IMAGE_TOO_LARGE" }, { no: 33, name: "ERROR_FILE_NOT_FOUND", localName: "FILE_NOT_FOUND" }, { no: 34, name: "ERROR_API_KEY_RATE_LIMIT", localName: "API_KEY_RATE_LIMIT" }, { no: 35, name: "ERROR_DEBOUNCED", localName: "DEBOUNCED" }, { no: 36, name: "ERROR_BAD_REQUEST", localName: "BAD_REQUEST" }, { no: 37, name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED", localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED" }, { no: 38, name: "ERROR_UNAUTHORIZED", localName: "UNAUTHORIZED" }, { no: 43, name: "ERROR_CONVERSATION_TOO_LONG", localName: "CONVERSATION_TOO_LONG" }, { no: 44, name: "ERROR_USAGE_PRICING_REQUIRED", localName: "USAGE_PRICING_REQUIRED" }, { no: 45, name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE", localName: "USAGE_PRICING_REQUIRED_CHANGEABLE" }, { no: 46, name: "ERROR_GITHUB_NO_USER_CREDENTIALS", localName: "GITHUB_NO_USER_CREDENTIALS" }, { no: 47, name: "ERROR_GITHUB_USER_NO_ACCESS", localName: "GITHUB_USER_NO_ACCESS" }, { no: 48, name: "ERROR_GITHUB_APP_NO_ACCESS", localName: "GITHUB_APP_NO_ACCESS" }, { no: 49, name: "ERROR_GITHUB_MULTIPLE_OWNERS", localName: "GITHUB_MULTIPLE_OWNERS" }, { no: 50, name: "ERROR_RATE_LIMITED", localName: "RATE_LIMITED" }, { no: 51, name: "ERROR_RATE_LIMITED_CHANGEABLE", localName: "RATE_LIMITED_CHANGEABLE" }, { no: 52, name: "ERROR_CUSTOM", localName: "CUSTOM" }, { no: 53, name: "ERROR_HOOKS_BLOCKED", localName: "HOOKS_BLOCKED" }, { no: 54, name: "ERROR_SUSPICIOUS_USAGE_BLOCKED", localName: "SUSPICIOUS_USAGE_BLOCKED" }, { no: 55, name: "ERROR_EXTENSION_HOST_TIMEOUT", localName: "EXTENSION_HOST_TIMEOUT" }, { no: 56, name: "ERROR_NETWORK_ERROR", localName: "NETWORK_ERROR" }, { no: 57, name: "ERROR_PROVIDER_ERROR", localName: "PROVIDER_ERROR" }, { no: 58, name: "ERROR_MODEL_BLOCKED", localName: "MODEL_BLOCKED" }, { no: 59, name: "ERROR_INTERNAL", localName: "INTERNAL" }, { no: 60, name: "ERROR_MAX_MODE_REQUIRED", localName: "MAX_MODE_REQUIRED" }, { no: 61, name: "ERROR_MODEL_NO_LONGER_SUPPORTED", localName: "MODEL_NO_LONGER_SUPPORTED" }, { no: 62, name: "ERROR_PRICING_WARNING", localName: "PRICING_WARNING" }, { no: 63, name: "ERROR_SLOW_POOL", localName: "SLOW_POOL" }, { no: 64, name: "ERROR_UNSUPPORTED_REGION", localName: "UNSUPPORTED_REGION" }, { no: 65, name: "ERROR_ACCOUNT_CLOSED", localName: "ACCOUNT_CLOSED" }, { no: 66, name: "ERROR_TENANT_RESTRICTION_VIOLATION", localName: "TENANT_RESTRICTION_VIOLATION" }]), Qn = Kt.makeMessageType("aiserver.v1.CustomErrorDetails", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "detail", kind: "scalar", T: 9 }, { no: 3, name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_retryable", kind: "scalar", T: 8, opt: true }, { no: 5, name: "show_request_id", kind: "scalar", T: 8, opt: true }, { no: 6, name: "should_show_immediate_error", kind: "scalar", T: 8, opt: true }, { no: 8, name: "buttons", kind: "message", T: Fn, repeated: true }, { no: 7, name: "additional_info", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 9, name: "plan_choices", kind: "message", T: On, repeated: true }, { no: 10, name: "analytics_metadata", kind: "message", T: Mn, opt: true }]), Mn = Kt.makeMessageType("aiserver.v1.ErrorAnalyticsMetadata", () => [{ no: 1, name: "action_required", kind: "scalar", T: 9, opt: true }]), On = Kt.makeMessageType("aiserver.v1.PlanChoice", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "sublabel", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "value", kind: "scalar", T: 9 }]), Fn = Kt.makeMessageType("aiserver.v1.ErrorButton", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "upgrade", kind: "message", T: Kn, oneof: "action" }, { no: 3, name: "switch_model", kind: "message", T: Vn, oneof: "action" }, { no: 4, name: "configure_spend_limit", kind: "message", T: Wn, oneof: "action" }, { no: 5, name: "url", kind: "message", T: Yn, oneof: "action" }, { no: 6, name: "upgrade_choice", kind: "message", T: Hn, oneof: "action" }, { no: 7, name: "dashboard_action", kind: "message", T: Gn, oneof: "action" }, { no: 8, name: "reload_window", kind: "message", T: $n, oneof: "action" }, { no: 9, name: "client_action", kind: "message", T: Ln, oneof: "action" }]), Ln = Kt.makeMessageType("aiserver.v1.ClientAction", () => [{ no: 1, name: "command_id", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), $n = Kt.makeMessageType("aiserver.v1.ReloadWindowAction", []), Gn = Kt.makeMessageType("aiserver.v1.DashboardAction", () => [{ no: 1, name: "action", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 3, name: "success_message", kind: "scalar", T: 9, opt: true }]), Hn = Kt.makeMessageType("aiserver.v1.UpgradeChoice", []), Kn = Kt.makeMessageType("aiserver.v1.UpgradeAction", () => [{ no: 1, name: "membership_to_upgrade_to", kind: "scalar", T: 9 }, { no: 2, name: "try_immediate_upgrade", kind: "scalar", T: 8, opt: true }, { no: 3, name: "allow_trial", kind: "scalar", T: 8, opt: true }, { no: 4, name: "dashboard_action", kind: "message", T: Gn, opt: true }]), Vn = Kt.makeMessageType("aiserver.v1.SwitchModelAction", () => [{ no: 1, name: "suggested_model", kind: "scalar", T: 9, opt: true }, { no: 2, name: "parameters", kind: "message", T: zn, repeated: true }, { no: 3, name: "max_mode", kind: "scalar", T: 8, opt: true }]), zn = Kt.makeMessageType("aiserver.v1.SwitchModelAction.ModelParameterValue", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "SwitchModelAction_ModelParameterValue" }), Wn = Kt.makeMessageType("aiserver.v1.ConfigureSpendLimitAction", () => [{ no: 1, name: "confirm_label", kind: "scalar", T: 9 }]), Yn = Kt.makeMessageType("aiserver.v1.UrlAction", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }]), jn = Kt.makeMessageType("aiserver.v1.LspSubgraphPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "character", kind: "scalar", T: 5 }]), Xn = Kt.makeMessageType("aiserver.v1.LspSubgraphRange", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "start_character", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "end_character", kind: "scalar", T: 5 }]), Zn = Kt.makeMessageType("aiserver.v1.LspSubgraphContextItem", () => [{ no: 1, name: "uri", kind: "scalar", T: 9, opt: true }, { no: 2, name: "type", kind: "scalar", T: 9 }, { no: 3, name: "content", kind: "scalar", T: 9 }, { no: 4, name: "range", kind: "message", T: Xn, opt: true }]), ts = Kt.makeMessageType("aiserver.v1.LspSubgraphFullContext", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "symbol_name", kind: "scalar", T: 9 }, { no: 3, name: "positions", kind: "message", T: jn, repeated: true }, { no: 4, name: "context_items", kind: "message", T: Zn, repeated: true }, { no: 5, name: "score", kind: "scalar", T: 2 }]), es = Kt.makeMessageType("aiserver.v1.FilesyncUpdateWithModelVersion", () => [{ no: 1, name: "model_version", kind: "scalar", T: 5 }, { no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 3, name: "updates", kind: "message", T: rs, repeated: true }, { no: 4, name: "expected_file_length", kind: "scalar", T: 5 }]), rs = Kt.makeMessageType("aiserver.v1.SingleUpdateRequest", () => [{ no: 1, name: "start_position", kind: "scalar", T: 5 }, { no: 2, name: "end_position", kind: "scalar", T: 5 }, { no: 3, name: "change_length", kind: "scalar", T: 5 }, { no: 4, name: "replaced_string", kind: "scalar", T: 9 }, { no: 5, name: "range", kind: "message", T: _n }]), ns = Kt.makeMessageType("aiserver.v1.CodeResult", () => [{ no: 1, name: "code_block", kind: "message", T: Jn }, { no: 2, name: "score", kind: "scalar", T: 2 }]), ss = Kt.makeMessageType("aiserver.v1.BugLocation", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "code_lines", kind: "scalar", T: 9, repeated: true }]), is = Kt.makeMessageType("aiserver.v1.BugReport", () => [{ no: 1, name: "locations", kind: "message", T: ss, repeated: true }, { no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "confidence", kind: "scalar", T: 2, opt: true }, { no: 5, name: "category", kind: "scalar", T: 9, opt: true }, { no: 6, name: "severity", kind: "scalar", T: 9, opt: true }, { no: 7, name: "title", kind: "scalar", T: 9, opt: true }, { no: 9, name: "rationale", kind: "scalar", T: 9, opt: true }, { no: 10, name: "triggered_by_rule_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "model_confidence", kind: "scalar", T: 2, opt: true }]), os = Kt.makeMessageType("aiserver.v1.BugReports", () => [{ no: 1, name: "bug_reports", kind: "message", T: is, repeated: true }]), as = Kt.makeEnum("aiserver.v1.CppSource", [{ no: 0, name: "CPP_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CPP_SOURCE_LINE_CHANGE", localName: "LINE_CHANGE" }, { no: 2, name: "CPP_SOURCE_TYPING", localName: "TYPING" }, { no: 3, name: "CPP_SOURCE_OPTION_HOLD", localName: "OPTION_HOLD" }, { no: 4, name: "CPP_SOURCE_LINTER_ERRORS", localName: "LINTER_ERRORS" }, { no: 5, name: "CPP_SOURCE_PARAMETER_HINTS", localName: "PARAMETER_HINTS" }, { no: 6, name: "CPP_SOURCE_CURSOR_PREDICTION", localName: "CURSOR_PREDICTION" }, { no: 7, name: "CPP_SOURCE_MANUAL_TRIGGER", localName: "MANUAL_TRIGGER" }, { no: 8, name: "CPP_SOURCE_EDITOR_CHANGE", localName: "EDITOR_CHANGE" }, { no: 9, name: "CPP_SOURCE_LSP_SUGGESTIONS", localName: "LSP_SUGGESTIONS" }]), us = Kt.makeMessageType("aiserver.v1.CppIntentInfo", () => [{ no: 1, name: "source", kind: "scalar", T: 9 }]), cs = Kt.makeMessageType("aiserver.v1.LspSuggestion", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }]), ls = Kt.makeMessageType("aiserver.v1.LspSuggestedItems", () => [{ no: 1, name: "suggestions", kind: "message", T: cs, repeated: true }]), ms = Kt.makeMessageType("aiserver.v1.StreamCppRequest", () => [{ no: 1, name: "current_file", kind: "message", T: qn }, { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "linter_errors", kind: "message", T: Nn, opt: true }, { no: 13, name: "context_items", kind: "message", T: hs, repeated: true }, { no: 5, name: "diff_history_keys", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "give_debug_output", kind: "scalar", T: 8, opt: true }, { no: 7, name: "file_diff_histories", kind: "message", T: ps, repeated: true }, { no: 8, name: "merged_diff_histories", kind: "message", T: ps, repeated: true }, { no: 9, name: "block_diff_patches", kind: "message", T: ji, repeated: true }, { no: 10, name: "is_nightly", kind: "scalar", T: 8, opt: true }, { no: 11, name: "is_debug", kind: "scalar", T: 8, opt: true }, { no: 12, name: "immediately_ack", kind: "scalar", T: 8, opt: true }, { no: 17, name: "enable_more_context", kind: "scalar", T: 8, opt: true }, { no: 14, name: "parameter_hints", kind: "message", T: gs, repeated: true }, { no: 15, name: "lsp_contexts", kind: "message", T: ts, repeated: true }, { no: 16, name: "cpp_intent_info", kind: "message", T: us, opt: true }, { no: 18, name: "workspace_id", kind: "scalar", T: 9, opt: true }, { no: 19, name: "additional_files", kind: "message", T: fs, repeated: true }, { no: 20, name: "control_token", kind: "enum", T: Kt.getEnumType(ds), opt: true }, { no: 21, name: "client_time", kind: "scalar", T: 1, opt: true }, { no: 22, name: "filesync_updates", kind: "message", T: es, repeated: true }, { no: 23, name: "time_since_request_start", kind: "scalar", T: 1 }, { no: 24, name: "time_at_request_send", kind: "scalar", T: 1 }, { no: 25, name: "client_timezone_offset", kind: "scalar", T: 1, opt: true }, { no: 26, name: "lsp_suggested_items", kind: "message", T: ls, opt: true }, { no: 27, name: "supports_cpt", kind: "scalar", T: 8, opt: true }, { no: 28, name: "supports_crlf_cpt", kind: "scalar", T: 8, opt: true }, { no: 29, name: "code_results", kind: "message", T: ns, repeated: true }]), ds = Kt.makeEnum("aiserver.v1.StreamCppRequest.ControlToken", [{ no: 0, name: "CONTROL_TOKEN_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CONTROL_TOKEN_QUIET", localName: "QUIET" }, { no: 2, name: "CONTROL_TOKEN_LOUD", localName: "LOUD" }, { no: 3, name: "CONTROL_TOKEN_OP", localName: "OP" }]), fs = Kt.makeMessageType("aiserver.v1.AdditionalFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "is_open", kind: "scalar", T: 8 }, { no: 3, name: "visible_range_content", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "last_viewed_at", kind: "scalar", T: 1, opt: true }, { no: 5, name: "start_line_number_one_indexed", kind: "scalar", T: 5, repeated: true }, { no: 6, name: "visible_ranges", kind: "message", T: yn, repeated: true }]), ps = Kt.makeMessageType("aiserver.v1.CppFileDiffHistory", () => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }, { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "diff_history_timestamps", kind: "scalar", T: 1, repeated: true }]), hs = Kt.makeMessageType("aiserver.v1.CppContextItem", () => [{ no: 1, name: "contents", kind: "scalar", T: 9 }, { no: 2, name: "symbol", kind: "scalar", T: 9, opt: true }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "score", kind: "scalar", T: 2 }]), gs = Kt.makeMessageType("aiserver.v1.CppParameterHint", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "documentation", kind: "scalar", T: 9, opt: true }]), As = Kt.makeMessageType("aiserver.v1.IRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "start_column", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "end_column", kind: "scalar", T: 5 }]), _s = Kt.makeMessageType("aiserver.v1.OneIndexedPosition", () => [{ no: 1, name: "line_number_one_indexed", kind: "scalar", T: 5 }, { no: 2, name: "column_one_indexed", kind: "scalar", T: 5 }]), ys = Kt.makeMessageType("aiserver.v1.CursorSelection", () => [{ no: 1, name: "selection_start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "selection_start_column", kind: "scalar", T: 5 }, { no: 3, name: "position_line_number", kind: "scalar", T: 5 }, { no: 4, name: "position_column", kind: "scalar", T: 5 }]), ws = Kt.makeMessageType("aiserver.v1.ModelChange", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: As }, { no: 3, name: "final_model_hash", kind: "scalar", T: 9, opt: true }, { no: 4, name: "model_version_immediately_after_this_change", kind: "scalar", T: 5, opt: true }, { no: 5, name: "performance_now_timestamp", kind: "scalar", T: 1, opt: true }, { no: 7, name: "is_undoing", kind: "scalar", T: 8, opt: true }, { no: 8, name: "is_redoing", kind: "scalar", T: 8, opt: true }, { no: 9, name: "model_is_attached_to_editor", kind: "scalar", T: 8 }, { no: 10, name: "model_is_attached_to_the_active_editor", kind: "scalar", T: 8 }, { no: 11, name: "cursor_selections", kind: "message", T: ys, repeated: true }, { no: 12, name: "model_version_at_metadata_retrieval_time", kind: "scalar", T: 5 }, { no: 13, name: "global_index", kind: "scalar", T: 3, opt: true }, { no: 14, name: "performance_now_flush_time", kind: "scalar", T: 1, opt: true }, { no: 15, name: "change_index", kind: "scalar", T: 5, opt: true }, { no: 16, name: "flush_index", kind: "scalar", T: 5, opt: true }, { no: 17, name: "global_index_v2", kind: "scalar", T: 5, opt: true }]), Ss = Kt.makeMessageType("aiserver.v1.CurrentlyShownCppSuggestion", () => [{ no: 1, name: "suggestion_id", kind: "scalar", T: 5 }, { no: 2, name: "suggestion_text", kind: "scalar", T: 9 }, { no: 3, name: "model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model", kind: "scalar", T: 5 }, { no: 4, name: "range_of_suggestion_in_current_model", kind: "message", T: As, opt: true }, { no: 5, name: "original_text", kind: "scalar", T: 9 }, { no: 6, name: "binding_id", kind: "scalar", T: 9, opt: true }]), Js = Kt.makeMessageType("aiserver.v1.CppAcceptEventNew", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: Ss }, { no: 7, name: "point_in_time_model", kind: "message", T: Ds }]), Bs = Kt.makeMessageType("aiserver.v1.RecoverableCppData", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "suggestion_text", kind: "scalar", T: 9 }, { no: 3, name: "suggestion_range", kind: "message", T: As }, { no: 4, name: "position", kind: "message", T: _s }]), Es = Kt.makeMessageType("aiserver.v1.CppSuggestEvent", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: Ss }, { no: 2, name: "point_in_time_model", kind: "message", T: Ds }, { no: 3, name: "recoverable_cpp_data", kind: "message", T: Bs }]), Is = Kt.makeMessageType("aiserver.v1.CppTriggerEvent", () => [{ no: 1, name: "generation_uuid", kind: "scalar", T: 9 }, { no: 2, name: "model_version", kind: "scalar", T: 5 }, { no: 3, name: "cursor_position", kind: "message", T: _s }, { no: 4, name: "point_in_time_model", kind: "message", T: Ds }, { no: 5, name: "source", kind: "enum", T: Kt.getEnumType(as) }]), Cs = Kt.makeMessageType("aiserver.v1.FinishedCppGenerationEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "recoverable_cpp_data", kind: "message", T: Bs }]), bs = Kt.makeMessageType("aiserver.v1.CppRejectEventNew", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: Ss }, { no: 7, name: "point_in_time_model", kind: "message", T: Ds }]), ks = Kt.makeMessageType("aiserver.v1.Edit", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: As }]), vs = Kt.makeMessageType("aiserver.v1.CppPartialAcceptEvent", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: Ss }, { no: 2, name: "edit", kind: "message", T: ks }, { no: 3, name: "point_in_time_model", kind: "message", T: Ds }]), qs = Kt.makeMessageType("aiserver.v1.CursorPrediction", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "prediction_id", kind: "scalar", T: 5 }, { no: 3, name: "line_number", kind: "scalar", T: 5 }, { no: 4, name: "source", kind: "enum", T: Kt.getEnumType(Rs) }, { no: 5, name: "binding_id", kind: "scalar", T: 9, opt: true }]), Rs = Kt.makeEnum("aiserver.v1.CursorPrediction.CursorPredictionSource", [{ no: 0, name: "CURSOR_PREDICTION_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CURSOR_PREDICTION_SOURCE_ALWAYS_ON", localName: "ALWAYS_ON" }, { no: 2, name: "CURSOR_PREDICTION_SOURCE_ACCEPT", localName: "ACCEPT" }, { no: 3, name: "CURSOR_PREDICTION_SOURCE_UNDO", localName: "UNDO" }, { no: 4, name: "CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE", localName: "EDITOR_CHANGE" }]), Ps = Kt.makeMessageType("aiserver.v1.SuggestCursorPredictionEvent", () => [{ no: 1, name: "cursor_prediction", kind: "message", T: qs }, { no: 2, name: "point_in_time_model", kind: "message", T: Ds }]), Ts = Kt.makeMessageType("aiserver.v1.AcceptCursorPredictionEvent", () => [{ no: 1, name: "cursor_prediction", kind: "message", T: qs }, { no: 2, name: "point_in_time_model", kind: "message", T: Ds }]), xs = Kt.makeMessageType("aiserver.v1.RejectCursorPredictionEvent", () => [{ no: 1, name: "cursor_prediction", kind: "message", T: qs }, { no: 2, name: "point_in_time_model", kind: "message", T: Ds }]), Ns = Kt.makeMessageType("aiserver.v1.MaybeDefinedPointInTimeModel", () => [{ no: 1, name: "model_uuid", kind: "scalar", T: 9, opt: true }, { no: 2, name: "model_version", kind: "scalar", T: 5 }, { no: 3, name: "relative_path", kind: "scalar", T: 9 }, { no: 4, name: "model_id", kind: "scalar", T: 9 }]), Ds = Kt.makeMessageType("aiserver.v1.PointInTimeModel", () => [{ no: 1, name: "model_uuid", kind: "scalar", T: 9 }, { no: 2, name: "model_version", kind: "scalar", T: 5 }, { no: 3, name: "relative_path", kind: "scalar", T: 9 }, { no: 4, name: "model_id", kind: "scalar", T: 9 }]), Us = Kt.makeMessageType("aiserver.v1.CppManualTriggerEventNew", () => [{ no: 1, name: "line_number_one_indexed", kind: "scalar", T: 5 }, { no: 2, name: "column_number_one_indexed", kind: "scalar", T: 5 }, { no: 7, name: "point_in_time_model", kind: "message", T: Ds }]), Qs = Kt.makeMessageType("aiserver.v1.CppStoppedTrackingModelEvent", () => [{ no: 1, name: "model_uuid", kind: "scalar", T: 9 }, { no: 2, name: "relative_path", kind: "scalar", T: 9 }, { no: 3, name: "reason", kind: "enum", T: Kt.getEnumType(Ms) }]), Ms = Kt.makeEnum("aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [{ no: 0, name: "STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG", localName: "FILE_TOO_BIG" }, { no: 2, name: "STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED", localName: "FILE_DISPOSED" }, { no: 3, name: "STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG", localName: "CHANGE_TOO_BIG" }]), Os = Kt.makeMessageType("aiserver.v1.CppLinterErrorEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "added_errors", kind: "message", T: xn, repeated: true }, { no: 3, name: "removed_errors", kind: "message", T: xn, repeated: true }, { no: 4, name: "errors", kind: "message", T: xn, repeated: true }]), Fs = Kt.makeMessageType("aiserver.v1.CppDebouncedCursorMovementEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "cursor_position", kind: "message", T: _s }]), Ls = Kt.makeMessageType("aiserver.v1.CppEditorChangedEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "cursor_position", kind: "message", T: _s }, { no: 3, name: "visible_ranges", kind: "message", T: As, repeated: true }, { no: 4, name: "editor_id", kind: "scalar", T: 9 }]), $s = Kt.makeMessageType("aiserver.v1.CppCopyEvent", () => [{ no: 1, name: "clipboard_contents", kind: "scalar", T: 9 }]), Gs = Kt.makeMessageType("aiserver.v1.CppQuickActionCommand", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "arguments", kind: "scalar", T: 9, repeated: true }]), Hs = Kt.makeMessageType("aiserver.v1.CppQuickAction", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "edits", kind: "message", T: Ks, repeated: true }, { no: 3, name: "is_preferred", kind: "scalar", T: 8, opt: true }, { no: 4, name: "command", kind: "message", T: Gs }]), Ks = Kt.makeMessageType("aiserver.v1.CppQuickAction.Edit", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: As }], { localName: "CppQuickAction_Edit" }), Vs = Kt.makeMessageType("aiserver.v1.CppChangeQuickActionEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "added", kind: "message", T: Hs, repeated: true }, { no: 3, name: "removed", kind: "message", T: Hs, repeated: true }, { no: 4, name: "actions", kind: "message", T: Hs, repeated: true }]), zs = Kt.makeMessageType("aiserver.v1.CppQuickActionFireEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "quick_action_command", kind: "message", T: Gs, oneof: "action_identifier" }, { no: 3, name: "quick_action_event", kind: "message", T: Hs, oneof: "action_identifier" }]), Ws = Kt.makeMessageType("aiserver.v1.CmdKEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "request_id", kind: "scalar", T: 9 }, { no: 20, name: "prompt_bar_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "submit_prompt", kind: "message", T: Ys, oneof: "event_type" }, { no: 4, name: "end_of_generation", kind: "message", T: js, oneof: "event_type" }, { no: 5, name: "interrupt_generation", kind: "message", T: Xs, oneof: "event_type" }, { no: 6, name: "accept_all", kind: "message", T: Zs, oneof: "event_type" }, { no: 7, name: "reject_all", kind: "message", T: ti, oneof: "event_type" }, { no: 8, name: "reject_partial_diff", kind: "message", T: ri, oneof: "event_type" }, { no: 9, name: "accept_partial_diff", kind: "message", T: ei, oneof: "event_type" }, { no: 10, name: "after_reject", kind: "message", T: ni, oneof: "event_type" }]), Ys = Kt.makeMessageType("aiserver.v1.CmdKEvent.SubmitPrompt", () => [{ no: 1, name: "original_range", kind: "message", T: As }, { no: 2, name: "original_text", kind: "scalar", T: 9 }, { no: 3, name: "prompt", kind: "scalar", T: 9 }], { localName: "CmdKEvent_SubmitPrompt" }), js = Kt.makeMessageType("aiserver.v1.CmdKEvent.EndOfGeneration", [], { localName: "CmdKEvent_EndOfGeneration" }), Xs = Kt.makeMessageType("aiserver.v1.CmdKEvent.InterruptGeneration", [], { localName: "CmdKEvent_InterruptGeneration" }), Zs = Kt.makeMessageType("aiserver.v1.CmdKEvent.AcceptDiffs", [], { localName: "CmdKEvent_AcceptDiffs" }), ti = Kt.makeMessageType("aiserver.v1.CmdKEvent.RejectDiffs", () => [{ no: 1, name: "actor_request_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "silent", kind: "scalar", T: 8, opt: true }], { localName: "CmdKEvent_RejectDiffs" }), ei = Kt.makeMessageType("aiserver.v1.CmdKEvent.AcceptPartialDiff", () => [{ no: 1, name: "green_range", kind: "message", T: As }, { no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: true }], { localName: "CmdKEvent_AcceptPartialDiff" }), ri = Kt.makeMessageType("aiserver.v1.CmdKEvent.RejectPartialDiff", () => [{ no: 1, name: "green_range", kind: "message", T: As }, { no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: true }], { localName: "CmdKEvent_RejectPartialDiff" }), ni = Kt.makeMessageType("aiserver.v1.CmdKEvent.AfterReject", [], { localName: "CmdKEvent_AfterReject" }), si = Kt.makeMessageType("aiserver.v1.ChatEvent", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "submit_prompt", kind: "message", T: ii, oneof: "event_type" }, { no: 3, name: "end_of_any_generation", kind: "message", T: oi, oneof: "event_type" }, { no: 4, name: "end_of_uninterrupted_generation", kind: "message", T: ai, oneof: "event_type" }]), ii = Kt.makeMessageType("aiserver.v1.ChatEvent.SubmitPrompt", () => [{ no: 1, name: "prompt", kind: "scalar", T: 9 }], { localName: "ChatEvent_SubmitPrompt" }), oi = Kt.makeMessageType("aiserver.v1.ChatEvent.EndOfAnyGeneration", [], { localName: "ChatEvent_EndOfAnyGeneration" }), ai = Kt.makeMessageType("aiserver.v1.ChatEvent.EndOfUninterruptedGeneration", [], { localName: "ChatEvent_EndOfUninterruptedGeneration" }), ui = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "point_in_time_model", kind: "message", T: Ds }, { no: 3, name: "lint_generated", kind: "message", T: li, oneof: "event_type" }, { no: 4, name: "lint_dismissed", kind: "message", T: mi, oneof: "event_type" }, { no: 5, name: "user_feedback", kind: "message", T: di, oneof: "event_type" }, { no: 6, name: "viewed_report", kind: "message", T: fi, oneof: "event_type" }, { no: 7, name: "unviewed_report", kind: "message", T: pi, oneof: "event_type" }, { no: 8, name: "started", kind: "message", T: ci, oneof: "event_type" }, { no: 9, name: "not_shown_because_heuristic", kind: "message", T: hi, oneof: "event_type" }]), ci = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.Started", [], { localName: "BugBotLinterEvent_Started" }), li = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.LintGenerated", () => [{ no: 1, name: "bug_report", kind: "message", T: is }], { localName: "BugBotLinterEvent_LintGenerated" }), mi = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.LintDismissed", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotLinterEvent_LintDismissed" }), di = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.UserFeedback", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }, { no: 2, name: "feedback", kind: "scalar", T: 9 }], { localName: "BugBotLinterEvent_UserFeedback" }), fi = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.ViewedReport", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotLinterEvent_ViewedReport" }), pi = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.UnviewedReport", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotLinterEvent_UnviewedReport" }), hi = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic", () => [{ no: 1, name: "heuristic", kind: "enum", T: Kt.getEnumType(gi) }], { localName: "BugBotLinterEvent_NotShownBecauseHeuristic" }), gi = Kt.makeEnum("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [{ no: 0, name: "HEURISTIC_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "HEURISTIC_LINT_OVERLAP", localName: "LINT_OVERLAP" }, { no: 2, name: "HEURISTIC_LINES_MISMATCH", localName: "LINES_MISMATCH" }]), Ai = Kt.makeMessageType("aiserver.v1.BugBotEvent", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "started", kind: "message", T: yi, oneof: "event_type" }, { no: 3, name: "reports_generated", kind: "message", T: wi, oneof: "event_type" }, { no: 4, name: "pressed_fix_in_composer", kind: "message", T: Si, oneof: "event_type" }, { no: 5, name: "pressed_open_in_editor", kind: "message", T: Bi, oneof: "event_type" }, { no: 6, name: "viewed_report", kind: "message", T: Ei, oneof: "event_type" }, { no: 7, name: "user_feedback", kind: "message", T: Ci, oneof: "event_type" }, { no: 8, name: "pressed_add_to_chat", kind: "message", T: Ji, oneof: "event_type" }, { no: 9, name: "background_interval_started", kind: "message", T: bi, oneof: "event_type" }, { no: 10, name: "background_interval_ended", kind: "message", T: ki, oneof: "event_type" }, { no: 11, name: "background_interval_interrupted", kind: "message", T: vi, oneof: "event_type" }, { no: 12, name: "background_interval_errored", kind: "message", T: qi, oneof: "event_type" }]), _i = Kt.makeEnum("aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason", [{ no: 0, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED", localName: "DISABLED" }, { no: 2, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT", localName: "TOO_RECENT" }, { no: 3, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS", localName: "UNVIEWED_BUG_REPORTS" }, { no: 4, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO", localName: "NOT_IN_GIT_REPO" }, { no: 5, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH", localName: "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH" }, { no: 6, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER", localName: "NO_GIT_USER" }, { no: 7, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT", localName: "NO_LAST_COMMIT" }, { no: 8, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER", localName: "LAST_COMMIT_NOT_MADE_BY_USER" }, { no: 9, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD", localName: "LAST_COMMIT_TOO_OLD" }, { no: 10, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG", localName: "DIFF_TOO_LONG" }, { no: 11, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT", localName: "DIFF_TOO_SHORT" }, { no: 12, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY", localName: "TELEMETRY_UNHEALTHY" }]), yi = Kt.makeMessageType("aiserver.v1.BugBotEvent.Started", [], { localName: "BugBotEvent_Started" }), wi = Kt.makeMessageType("aiserver.v1.BugBotEvent.ReportsGenerated", () => [{ no: 1, name: "bug_reports", kind: "message", T: os }], { localName: "BugBotEvent_ReportsGenerated" }), Si = Kt.makeMessageType("aiserver.v1.BugBotEvent.PressedFixInComposer", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotEvent_PressedFixInComposer" }), Ji = Kt.makeMessageType("aiserver.v1.BugBotEvent.PressedAddToChat", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotEvent_PressedAddToChat" }), Bi = Kt.makeMessageType("aiserver.v1.BugBotEvent.PressedOpenInEditor", () => [{ no: 1, name: "bug_location", kind: "message", T: ss }, { no: 2, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotEvent_PressedOpenInEditor" }), Ei = Kt.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport", () => [{ no: 1, name: "seconds_viewed", kind: "scalar", T: 5 }, { no: 2, name: "report_views", kind: "message", T: Ii, repeated: true }], { localName: "BugBotEvent_ViewedReport" }), Ii = Kt.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport.ReportView", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }, { no: 2, name: "view_percentage", kind: "scalar", T: 1 }, { no: 3, name: "text_percentage", kind: "scalar", T: 1 }], { localName: "BugBotEvent_ViewedReport_ReportView" }), Ci = Kt.makeMessageType("aiserver.v1.BugBotEvent.UserFeedback", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }, { no: 2, name: "feedback", kind: "scalar", T: 9 }], { localName: "BugBotEvent_UserFeedback" }), bi = Kt.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalStarted", [], { localName: "BugBotEvent_BackgroundIntervalStarted" }), ki = Kt.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalEnded", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }], { localName: "BugBotEvent_BackgroundIntervalEnded" }), vi = Kt.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted", () => [{ no: 1, name: "reason", kind: "enum", T: Kt.getEnumType(_i) }], { localName: "BugBotEvent_BackgroundIntervalInterrupted" }), qi = Kt.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalErrored", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }], { localName: "BugBotEvent_BackgroundIntervalErrored" }), Ri = Kt.makeMessageType("aiserver.v1.AiRequestEvent", () => [{ no: 1, name: "request_type", kind: "enum", T: Kt.getEnumType(Pi) }, { no: 2, name: "request_id", kind: "scalar", T: 9 }, { no: 3, name: "source", kind: "enum", T: Kt.getEnumType(Ti) }]), Pi = Kt.makeEnum("aiserver.v1.AiRequestEvent.RequestType", [{ no: 0, name: "REQUEST_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REQUEST_TYPE_START", localName: "START" }, { no: 2, name: "REQUEST_TYPE_END", localName: "END" }]), Ti = Kt.makeEnum("aiserver.v1.AiRequestEvent.Source", [{ no: 0, name: "SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SOURCE_CHAT", localName: "CHAT" }, { no: 2, name: "SOURCE_CMDK", localName: "CMDK" }, { no: 3, name: "SOURCE_APPLY", localName: "APPLY" }, { no: 4, name: "SOURCE_COMPOSER", localName: "COMPOSER" }, { no: 5, name: "SOURCE_TASK", localName: "TASK" }, { no: 6, name: "SOURCE_CODE_INTERPRETER", localName: "CODE_INTERPRETER" }, { no: 7, name: "SOURCE_INTERPRETER_EXECUTION", localName: "INTERPRETER_EXECUTION" }, { no: 8, name: "SOURCE_BUGBOT", localName: "BUGBOT" }]), xi = Kt.makeMessageType("aiserver.v1.ModelOpenedEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "maybe_defined_point_in_time_model", kind: "message", T: Ns }]), Ni = Kt.makeMessageType("aiserver.v1.BackgroundFilesEvent", () => [{ no: 2, name: "files", kind: "message", T: Di, repeated: true }]), Di = Kt.makeMessageType("aiserver.v1.BackgroundFilesEvent.BackgroundFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "hash", kind: "scalar", T: 9 }, { no: 4, name: "full_path", kind: "scalar", T: 9 }], { localName: "BackgroundFilesEvent_BackgroundFile" }), Ui = Kt.makeMessageType("aiserver.v1.ScrollEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "visible_ranges", kind: "message", T: As, repeated: true }, { no: 3, name: "editor_id", kind: "scalar", T: 9 }]), Qi = Kt.makeMessageType("aiserver.v1.EditorCloseEvent", () => [{ no: 1, name: "editor_id", kind: "scalar", T: 9 }]), Mi = Kt.makeMessageType("aiserver.v1.TabCloseEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ns }]), Oi = Kt.makeMessageType("aiserver.v1.ModelAddedEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ns }, { no: 2, name: "full_uri", kind: "scalar", T: 9 }, { no: 3, name: "model_id", kind: "scalar", T: 9 }, { no: 4, name: "uri_scheme", kind: "scalar", T: 9 }, { no: 5, name: "is_too_large_for_syncing", kind: "scalar", T: 8 }, { no: 6, name: "is_too_large_for_tokenization", kind: "scalar", T: 8 }, { no: 7, name: "is_too_large_for_heap_operation", kind: "scalar", T: 8 }]), Fi = Kt.makeMessageType("aiserver.v1.AnythingQuickAccessItem", () => [{ no: 1, name: "resource", kind: "message", T: Li, oneof: "item" }, { no: 2, name: "separator", kind: "scalar", T: 9, oneof: "item" }, { no: 3, name: "section", kind: "scalar", T: 9, oneof: "item" }]), Li = Kt.makeMessageType("aiserver.v1.AnythingQuickAccessItem.Resource", () => [{ no: 1, name: "model", kind: "message", T: Ds, opt: true }, { no: 2, name: "range", kind: "message", T: As, opt: true }, { no: 3, name: "uri", kind: "scalar", T: 9, opt: true }], { localName: "AnythingQuickAccessItem_Resource" }), $i = Kt.makeMessageType("aiserver.v1.AnythingQuickAccessSelectionEvent", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "items", kind: "message", T: Fi, repeated: true }, { no: 3, name: "selected_indices", kind: "scalar", T: 5, repeated: true }]), Gi = Kt.makeMessageType("aiserver.v1.LspSuggestionEvent", () => [{ no: 1, name: "suggestions", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "editor_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "point_in_time_model", kind: "message", T: Ds }]), Hi = Kt.makeMessageType("aiserver.v1.CppSessionEvent", () => [{ no: 2, name: "accept_event", kind: "message", T: Js, oneof: "event" }, { no: 3, name: "reject_event", kind: "message", T: bs, oneof: "event" }, { no: 4, name: "manual_trigger_event", kind: "message", T: Us, oneof: "event" }, { no: 6, name: "stopped_tracking_model_event", kind: "message", T: Qs, oneof: "event" }, { no: 7, name: "suggest_event", kind: "message", T: Es, oneof: "event" }, { no: 8, name: "linter_error_event", kind: "message", T: Os, oneof: "event" }, { no: 9, name: "debounced_cursor_movement_event", kind: "message", T: Fs, oneof: "event" }, { no: 10, name: "editor_changed_event", kind: "message", T: Ls, oneof: "event" }, { no: 11, name: "copy_event", kind: "message", T: $s, oneof: "event" }, { no: 13, name: "quick_action_event", kind: "message", T: Vs, oneof: "event" }, { no: 14, name: "quick_action_fire_event", kind: "message", T: zs, oneof: "event" }, { no: 15, name: "model_opened_event", kind: "message", T: xi, oneof: "event" }, { no: 17, name: "cmd_k_event", kind: "message", T: Ws, oneof: "event" }, { no: 18, name: "chat_event", kind: "message", T: si, oneof: "event" }, { no: 19, name: "ai_event", kind: "message", T: Ri, oneof: "event" }, { no: 21, name: "scroll_event", kind: "message", T: Ui, oneof: "event" }, { no: 22, name: "editor_close_event", kind: "message", T: Qi, oneof: "event" }, { no: 23, name: "tab_close_event", kind: "message", T: Mi, oneof: "event" }, { no: 33, name: "model_added_event", kind: "message", T: Oi, oneof: "event" }, { no: 26, name: "partial_accept_event", kind: "message", T: vs, oneof: "event" }, { no: 27, name: "accept_cursor_prediction_event", kind: "message", T: Ts, oneof: "event" }, { no: 28, name: "reject_cursor_prediction_event", kind: "message", T: xs, oneof: "event" }, { no: 29, name: "suggest_cursor_prediction_event", kind: "message", T: Ps, oneof: "event" }, { no: 30, name: "cpp_trigger_event", kind: "message", T: Is, oneof: "event" }, { no: 31, name: "finished_cpp_generation_event", kind: "message", T: Cs, oneof: "event" }, { no: 32, name: "bug_bot_event", kind: "message", T: Ai, oneof: "event" }, { no: 34, name: "bug_bot_linter_event", kind: "message", T: ui, oneof: "event" }, { no: 35, name: "anything_quick_access_selection_event", kind: "message", T: $i, oneof: "event" }, { no: 36, name: "lsp_suggestion_event", kind: "message", T: Gi, oneof: "event" }, { no: 37, name: "ntp_event", kind: "message", T: Ao, oneof: "event" }, { no: 38, name: "repo_event", kind: "message", T: _o, oneof: "event" }, { no: 39, name: "git_event", kind: "message", T: wo, oneof: "event" }, { no: 40, name: "tool_call_event", kind: "message", T: bo, oneof: "event" }, { no: 46, name: "before_ai_edit_event", kind: "message", T: Ki, oneof: "event" }, { no: 47, name: "search_event", kind: "message", T: qo, oneof: "event" }, { no: 48, name: "terminal_event", kind: "message", T: io, oneof: "event" }, { no: 49, name: "worktree_event", kind: "message", T: Jo, oneof: "event" }, { no: 50, name: "review_changes_opened_event", kind: "message", T: Co, oneof: "event" }, { no: 51, name: "browser_event", kind: "message", T: lo, oneof: "event" }, { no: 16, name: "background_files_event", kind: "message", T: Ni, oneof: "event" }, { no: 5, name: "performance_now_timestamp", kind: "scalar", T: 1 }, { no: 25, name: "performance_time_origin", kind: "scalar", T: 1, opt: true }, { no: 41, name: "global_index", kind: "scalar", T: 3, opt: true }, { no: 42, name: "performance_now_flush_time", kind: "scalar", T: 1, opt: true }, { no: 43, name: "event_index", kind: "scalar", T: 5, opt: true }, { no: 44, name: "flush_index", kind: "scalar", T: 5, opt: true }, { no: 45, name: "global_index_v2", kind: "scalar", T: 5, opt: true }]), Ki = Kt.makeMessageType("aiserver.v1.BeforeAiEditEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds, oneof: "model" }, { no: 5, name: "relative_workspace_path", kind: "scalar", T: 9, oneof: "model" }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "tool_name", kind: "scalar", T: 9, opt: true }]), Vi = Kt.makeMessageType("aiserver.v1.CppAppendRequest", () => [{ no: 1, name: "changes", kind: "scalar", T: 12 }]), zi = Kt.makeMessageType("aiserver.v1.EditHistoryAppendChangesRequest", () => [{ no: 1, name: "session_id", kind: "scalar", T: 9 }, { no: 2, name: "model_uuid", kind: "scalar", T: 9 }, { no: 3, name: "starting_model_value", kind: "scalar", T: 9, opt: true }, { no: 10, name: "starting_model_version", kind: "scalar", T: 5, opt: true }, { no: 5, name: "relative_path", kind: "scalar", T: 9 }, { no: 14, name: "uri", kind: "scalar", T: 9 }, { no: 6, name: "client_version", kind: "scalar", T: 9 }, { no: 8, name: "client_commit", kind: "scalar", T: 9, opt: true }, { no: 4, name: "changes", kind: "message", T: ws, repeated: true }, { no: 9, name: "session_events", kind: "message", T: Hi, repeated: true }, { no: 11, name: "model_changes_may_be_out_of_order", kind: "scalar", T: 8 }, { no: 12, name: "privacy_mode_status", kind: "enum", T: Kt.getEnumType(Wi) }, { no: 7, name: "events", kind: "message", T: to, repeated: true }, { no: 13, name: "time_origin", kind: "scalar", T: 2 }]), Wi = Kt.makeEnum("aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus", [{ no: 0, name: "PRIVACY_MODE_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "PRIVACY_MODE_STATUS_PRIVACY_ENABLED", localName: "PRIVACY_ENABLED" }, { no: 2, name: "PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY", localName: "IMPLICIT_NO_PRIVACY" }, { no: 3, name: "PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY", localName: "EXPLICIT_NO_PRIVACY" }]), Yi = Kt.makeMessageType("aiserver.v1.CppEditHistoryStatusRequest", []), ji = Kt.makeMessageType("aiserver.v1.BlockDiffPatch", () => [{ no: 1, name: "start_model_window", kind: "message", T: Zi }, { no: 3, name: "changes", kind: "message", T: Xi, repeated: true }, { no: 4, name: "relative_path", kind: "scalar", T: 9 }, { no: 7, name: "model_uuid", kind: "scalar", T: 9 }, { no: 5, name: "start_from_change_index", kind: "scalar", T: 5 }]), Xi = Kt.makeMessageType("aiserver.v1.BlockDiffPatch.Change", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: As }], { localName: "BlockDiffPatch_Change" }), Zi = Kt.makeMessageType("aiserver.v1.BlockDiffPatch.ModelWindow", () => [{ no: 1, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }], { localName: "BlockDiffPatch_ModelWindow" }), to = Kt.makeMessageType("aiserver.v1.CppHistoryAppendEvent", () => [{ no: 1, name: "model_change", kind: "message", T: ws, oneof: "event" }, { no: 2, name: "accept_event", kind: "message", T: ro, oneof: "event" }, { no: 3, name: "reject_event", kind: "message", T: no, oneof: "event" }, { no: 4, name: "manual_trigger_event", kind: "message", T: eo, oneof: "event" }, { no: 10, name: "final_model_hash", kind: "scalar", T: 9, opt: true }]), eo = Kt.makeMessageType("aiserver.v1.CppManualTriggerEvent", () => [{ no: 2, name: "position", kind: "message", T: hn }]), ro = Kt.makeMessageType("aiserver.v1.CppAcceptEvent", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: so }]), no = Kt.makeMessageType("aiserver.v1.CppRejectEvent", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: so }]), so = Kt.makeMessageType("aiserver.v1.CppSuggestion", () => [{ no: 1, name: "suggestion_text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: As }, { no: 5, name: "seen", kind: "scalar", T: 8 }, { no: 6, name: "editor_selection_before_peek", kind: "message", T: gn }, { no: 7, name: "binding_id", kind: "scalar", T: 9, opt: true }]), io = Kt.makeMessageType("aiserver.v1.TerminalEvent", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "create", kind: "message", T: oo, oneof: "event" }, { no: 3, name: "exit", kind: "message", T: ao, oneof: "event" }, { no: 4, name: "command_start", kind: "message", T: uo, oneof: "event" }, { no: 5, name: "command_finish", kind: "message", T: co, oneof: "event" }]), oo = Kt.makeMessageType("aiserver.v1.TerminalEvent.Create", () => [{ no: 1, name: "is_remote", kind: "scalar", T: 8 }], { localName: "TerminalEvent_Create" }), ao = Kt.makeMessageType("aiserver.v1.TerminalEvent.Exit", () => [{ no: 1, name: "exit_code", kind: "scalar", T: 5, opt: true }], { localName: "TerminalEvent_Exit" }), uo = Kt.makeMessageType("aiserver.v1.TerminalEvent.CommandStart", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "cwd", kind: "scalar", T: 9, opt: true }], { localName: "TerminalEvent_CommandStart" }), co = Kt.makeMessageType("aiserver.v1.TerminalEvent.CommandFinish", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Ds }, { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: true }], { localName: "TerminalEvent_CommandFinish" }), lo = Kt.makeMessageType("aiserver.v1.BrowserEvent", () => [{ no: 1, name: "view_id", kind: "scalar", T: 9 }, { no: 2, name: "tab_created", kind: "message", T: mo, oneof: "event" }, { no: 3, name: "tab_closed", kind: "message", T: fo, oneof: "event" }, { no: 4, name: "navigation", kind: "message", T: po, oneof: "event" }, { no: 5, name: "tool_action", kind: "message", T: ho, oneof: "event" }]), mo = Kt.makeMessageType("aiserver.v1.BrowserEvent.TabCreated", [], { localName: "BrowserEvent_TabCreated" }), fo = Kt.makeMessageType("aiserver.v1.BrowserEvent.TabClosed", [], { localName: "BrowserEvent_TabClosed" }), po = Kt.makeMessageType("aiserver.v1.BrowserEvent.Navigation", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }], { localName: "BrowserEvent_Navigation" }), ho = Kt.makeMessageType("aiserver.v1.BrowserEvent.ToolAction", () => [{ no: 1, name: "tool_name", kind: "scalar", T: 9 }, { no: 2, name: "args_json", kind: "scalar", T: 9 }, { no: 3, name: "success", kind: "scalar", T: 8, opt: true }, { no: 4, name: "post_snapshot_yaml", kind: "scalar", T: 9, opt: true }, { no: 5, name: "post_url", kind: "scalar", T: 9, opt: true }, { no: 6, name: "post_title", kind: "scalar", T: 9, opt: true }, { no: 7, name: "source", kind: "enum", T: Kt.getEnumType(go) }], { localName: "BrowserEvent_ToolAction" }), go = Kt.makeEnum("aiserver.v1.BrowserEvent.ToolAction.Source", [{ no: 0, name: "SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SOURCE_MCP_TOOL", localName: "MCP_TOOL" }, { no: 2, name: "SOURCE_MANUAL_USER", localName: "MANUAL_USER" }]), Ao = Kt.makeMessageType("aiserver.v1.NtpEvent", () => [{ no: 1, name: "originate_timestamp", kind: "scalar", T: 1 }, { no: 2, name: "receive_timestamp", kind: "scalar", T: 1 }, { no: 3, name: "transmit_timestamp", kind: "scalar", T: 1 }, { no: 4, name: "destination_timestamp", kind: "scalar", T: 1 }]), _o = Kt.makeMessageType("aiserver.v1.RepoEvent", () => [{ no: 1, name: "repo_owner", kind: "scalar", T: 9 }, { no: 2, name: "repo_name", kind: "scalar", T: 9 }, { no: 3, name: "event_type", kind: "enum", T: Kt.getEnumType(yo) }]), yo = Kt.makeEnum("aiserver.v1.RepoEvent.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_SYNCED", localName: "SYNCED" }, { no: 2, name: "TYPE_LOADING", localName: "LOADING" }, { no: 3, name: "TYPE_INDEXING_SETUP", localName: "INDEXING_SETUP" }, { no: 4, name: "TYPE_INDEXING_INIT_FROM_SIMILAR_CODEBASE", localName: "INDEXING_INIT_FROM_SIMILAR_CODEBASE" }, { no: 5, name: "TYPE_PAUSED", localName: "PAUSED" }, { no: 6, name: "TYPE_INDEXING", localName: "INDEXING" }, { no: 7, name: "TYPE_ERROR", localName: "ERROR" }, { no: 8, name: "TYPE_NOT_AUTO_INDEXING", localName: "NOT_AUTO_INDEXING" }, { no: 9, name: "TYPE_NOT_INDEXED", localName: "NOT_INDEXED" }]), wo = Kt.makeMessageType("aiserver.v1.GitEvent", () => [{ no: 1, name: "operation_type", kind: "enum", T: Kt.getEnumType(So) }, { no: 2, name: "repository_path", kind: "scalar", T: 9 }, { no: 3, name: "operation_success", kind: "scalar", T: 8 }, { no: 4, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 5, name: "error_message", kind: "scalar", T: 9, opt: true }, { no: 6, name: "is_default_branch", kind: "scalar", T: 8, opt: true }, { no: 7, name: "default_branch_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "commit_hash", kind: "scalar", T: 9, opt: true }, { no: 9, name: "previous_commit_hash", kind: "scalar", T: 9, opt: true }, { no: 10, name: "remote_url", kind: "scalar", T: 9, opt: true }]), So = Kt.makeEnum("aiserver.v1.GitEvent.OperationType", [{ no: 0, name: "OPERATION_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "OPERATION_TYPE_COMMIT", localName: "COMMIT" }, { no: 2, name: "OPERATION_TYPE_CHECKOUT", localName: "CHECKOUT" }, { no: 3, name: "OPERATION_TYPE_PULL", localName: "PULL" }, { no: 4, name: "OPERATION_TYPE_FETCH", localName: "FETCH" }, { no: 5, name: "OPERATION_TYPE_MERGE", localName: "MERGE" }, { no: 6, name: "OPERATION_TYPE_REBASE", localName: "REBASE" }, { no: 7, name: "OPERATION_TYPE_STASH", localName: "STASH" }, { no: 8, name: "OPERATION_TYPE_BRANCH", localName: "BRANCH" }, { no: 9, name: "OPERATION_TYPE_TAG", localName: "TAG" }]), Jo = Kt.makeMessageType("aiserver.v1.WorktreeEvent", () => [{ no: 1, name: "event_type", kind: "enum", T: Kt.getEnumType(Bo) }, { no: 2, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "all_worktree_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "applied_worktree_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "worktree_composer_mappings", kind: "message", T: Eo, repeated: true }, { no: 7, name: "background_agent_composer_mappings", kind: "message", T: Io, repeated: true }, { no: 8, name: "applied_composer_id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "viewed_composer_id", kind: "scalar", T: 9, opt: true }]), Bo = Kt.makeEnum("aiserver.v1.WorktreeEvent.EventType", [{ no: 0, name: "EVENT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EVENT_TYPE_APPLY_TO_MAIN", localName: "APPLY_TO_MAIN" }, { no: 2, name: "EVENT_TYPE_UNDO_APPLY", localName: "UNDO_APPLY" }, { no: 3, name: "EVENT_TYPE_VIEW_SUBCOMPOSER", localName: "VIEW_SUBCOMPOSER" }]), Eo = Kt.makeMessageType("aiserver.v1.WorktreeEvent.WorktreeComposerMapping", () => [{ no: 1, name: "worktree_path", kind: "scalar", T: 9 }, { no: 2, name: "composer_id", kind: "scalar", T: 9 }], { localName: "WorktreeEvent_WorktreeComposerMapping" }), Io = Kt.makeMessageType("aiserver.v1.WorktreeEvent.BackgroundAgentComposerMapping", () => [{ no: 1, name: "bc_id", kind: "scalar", T: 9 }, { no: 2, name: "composer_id", kind: "scalar", T: 9 }], { localName: "WorktreeEvent_BackgroundAgentComposerMapping" }), Co = Kt.makeMessageType("aiserver.v1.ReviewChangesOpenedEvent", () => [{ no: 1, name: "composer_id", kind: "scalar", T: 9 }, { no: 2, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true }]), bo = Kt.makeMessageType("aiserver.v1.ToolCallEvent", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "request_id", kind: "scalar", T: 9 }, { no: 3, name: "tool_name", kind: "scalar", T: 9 }]), ko = Kt.makeMessageType("aiserver.v1.SearchMatch", () => [{ no: 1, name: "line_number", kind: "scalar", T: 5 }, { no: 2, name: "column", kind: "scalar", T: 5 }, { no: 3, name: "match_text", kind: "scalar", T: 9 }]), vo = Kt.makeMessageType("aiserver.v1.SearchResultFile", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "match_count", kind: "scalar", T: 5 }, { no: 3, name: "matches", kind: "message", T: ko, repeated: true }]), qo = Kt.makeMessageType("aiserver.v1.SearchEvent", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "result_count", kind: "scalar", T: 5 }, { no: 3, name: "file_count", kind: "scalar", T: 5 }, { no: 4, name: "is_regex", kind: "scalar", T: 8 }, { no: 5, name: "is_case_sensitive", kind: "scalar", T: 8 }, { no: 6, name: "is_whole_word", kind: "scalar", T: 8 }, { no: 7, name: "files_to_include", kind: "scalar", T: 9, opt: true }, { no: 8, name: "files_to_exclude", kind: "scalar", T: 9, opt: true }, { no: 9, name: "duration_ms", kind: "scalar", T: 5 }, { no: 10, name: "results", kind: "message", T: vo, repeated: true }]);
    function Ro() {
    }
    function Po(t3, e3, r3, n2, s2) {
      const i3 = [];
      let o3;
      for (; e3; ) i3.push(e3), o3 = e3.previousComponent, delete e3.previousComponent, e3 = o3;
      i3.reverse();
      let a2 = 0, u2 = i3.length, c2 = 0, l2 = 0;
      for (; a2 < u2; a2++) {
        let e4 = i3[a2];
        if (e4.removed) {
          if (e4.value = t3.join(n2.slice(l2, l2 + e4.count)), l2 += e4.count, a2 && i3[a2 - 1].added) {
            let t4 = i3[a2 - 1];
            i3[a2 - 1] = i3[a2], i3[a2] = t4;
          }
        } else {
          if (!e4.added && s2) {
            let s3 = r3.slice(c2, c2 + e4.count);
            s3 = s3.map(function(t4, e5) {
              let r4 = n2[l2 + e5];
              return r4.length > t4.length ? r4 : t4;
            }), e4.value = t3.join(s3);
          } else e4.value = t3.join(r3.slice(c2, c2 + e4.count));
          c2 += e4.count, e4.added || (l2 += e4.count);
        }
      }
      let m2 = i3[u2 - 1];
      return u2 > 1 && "string" == typeof m2.value && (m2.added || m2.removed) && t3.equals("", m2.value) && (i3[u2 - 2].value += m2.value, i3.pop()), i3;
    }
    Ro.prototype = { diff(t3, e3, r3 = {}) {
      let n2 = r3.callback;
      "function" == typeof r3 && (n2 = r3, r3 = {}), this.options = r3;
      let s2 = this;
      function i3(t4) {
        return n2 ? (setTimeout(function() {
          n2(void 0, t4);
        }, 0), true) : t4;
      }
      t3 = this.castInput(t3), e3 = this.castInput(e3), t3 = this.removeEmpty(this.tokenize(t3));
      let o3 = (e3 = this.removeEmpty(this.tokenize(e3))).length, a2 = t3.length, u2 = 1, c2 = o3 + a2;
      r3.maxEditLength && (c2 = Math.min(c2, r3.maxEditLength));
      const l2 = r3.timeout ?? 1 / 0, m2 = Date.now() + l2;
      let d2 = [{ oldPos: -1, lastComponent: void 0 }], f2 = this.extractCommon(d2[0], e3, t3, 0);
      if (d2[0].oldPos + 1 >= a2 && f2 + 1 >= o3) return i3([{ value: this.join(e3), count: e3.length }]);
      let p2 = -1 / 0, h2 = 1 / 0;
      function g2() {
        for (let r4 = Math.max(p2, -u2); r4 <= Math.min(h2, u2); r4 += 2) {
          let n3, u3 = d2[r4 - 1], c3 = d2[r4 + 1];
          u3 && (d2[r4 - 1] = void 0);
          let l3 = false;
          if (c3) {
            const t4 = c3.oldPos - r4;
            l3 = c3 && 0 <= t4 && t4 < o3;
          }
          let m3 = u3 && u3.oldPos + 1 < a2;
          if (l3 || m3) {
            if (n3 = !m3 || l3 && u3.oldPos + 1 < c3.oldPos ? s2.addToPath(c3, true, void 0, 0) : s2.addToPath(u3, void 0, true, 1), f2 = s2.extractCommon(n3, e3, t3, r4), n3.oldPos + 1 >= a2 && f2 + 1 >= o3) return i3(Po(s2, n3.lastComponent, e3, t3, s2.useLongestToken));
            d2[r4] = n3, n3.oldPos + 1 >= a2 && (h2 = Math.min(h2, r4 - 1)), f2 + 1 >= o3 && (p2 = Math.max(p2, r4 + 1));
          } else d2[r4] = void 0;
        }
        u2++;
      }
      if (n2) !(function t4() {
        setTimeout(function() {
          if (u2 > c2 || Date.now() > m2) return n2();
          g2() || t4();
        }, 0);
      })();
      else for (; u2 <= c2 && Date.now() <= m2; ) {
        let t4 = g2();
        if (t4) return t4;
      }
    }, addToPath(t3, e3, r3, n2) {
      let s2 = t3.lastComponent;
      return s2 && s2.added === e3 && s2.removed === r3 ? { oldPos: t3.oldPos + n2, lastComponent: { count: s2.count + 1, added: e3, removed: r3, previousComponent: s2.previousComponent } } : { oldPos: t3.oldPos + n2, lastComponent: { count: 1, added: e3, removed: r3, previousComponent: s2 } };
    }, extractCommon(t3, e3, r3, n2) {
      let s2 = e3.length, i3 = r3.length, o3 = t3.oldPos, a2 = o3 - n2, u2 = 0;
      for (; a2 + 1 < s2 && o3 + 1 < i3 && this.equals(e3[a2 + 1], r3[o3 + 1]); ) a2++, o3++, u2++;
      return u2 && (t3.lastComponent = { count: u2, previousComponent: t3.lastComponent }), t3.oldPos = o3, a2;
    }, equals(t3, e3) {
      return this.options.comparator ? this.options.comparator(t3, e3) : t3 === e3 || this.options.ignoreCase && t3.toLowerCase() === e3.toLowerCase();
    }, removeEmpty(t3) {
      let e3 = [];
      for (let r3 = 0; r3 < t3.length; r3++) t3[r3] && e3.push(t3[r3]);
      return e3;
    }, castInput: (t3) => t3, tokenize: (t3) => t3.split(""), join: (t3) => t3.join("") };
    const To = new Ro();
    function xo(t3, e3, r3) {
      return To.diff(t3, e3, r3);
    }
    To.tokenize = function(t3) {
      this.options.stripTrailingCr && (t3 = t3.replace(/\r\n/g, "\n"));
      let e3 = [], r3 = t3.split(/(\n|\r\n)/);
      r3[r3.length - 1] || r3.pop();
      for (let t4 = 0; t4 < r3.length; t4++) {
        let n2 = r3[t4];
        t4 % 2 && !this.options.newlineIsToken ? e3[e3.length - 1] += n2 : (this.options.ignoreWhitespace && (n2 = n2.trim()), e3.push(n2));
      }
      return e3;
    };
    class No {
      constructor(t3) {
        this.cache = /* @__PURE__ */ new Map(), this.maxSize = t3;
      }
      get size() {
        return this.cache.size;
      }
      get(t3) {
        const e3 = this.cache.get(t3);
        return e3 && (this.cache.delete(t3), this.cache.set(t3, e3)), e3;
      }
      set(t3, e3) {
        if (this.cache.has(t3)) this.cache.delete(t3);
        else if (this.cache.size >= this.maxSize) {
          const t4 = this.cache.keys().next().value;
          t4 && this.cache.delete(t4);
        }
        this.cache.set(t3, e3);
      }
      delete(t3) {
        this.cache.delete(t3);
      }
    }
    class Do {
      constructor() {
        this.isLocked = false, this.queue = [];
      }
      async acquire() {
        return new Promise((t3) => {
          this.isLocked ? this.queue.push(() => {
            this.isLocked = true, t3(this.release.bind(this));
          }) : (this.isLocked = true, t3(this.release.bind(this)));
        });
      }
      release() {
        this.isLocked = false;
        const t3 = this.queue.shift();
        t3 && t3();
      }
    }
    class Uo {
      constructor(t3 = 100) {
        this.locks = new No(t3);
      }
      async acquireLock(t3) {
        let e3 = this.locks.get(t3);
        return e3 || (e3 = new Do(), this.locks.set(t3, e3)), e3.acquire();
      }
    }
    const Qo = /^[a-zA-Z\u{C0}-\u{FF}\u{D8}-\u{F6}\u{F8}-\u{2C6}\u{2C8}-\u{2D7}\u{2DE}-\u{2FF}\u{1E00}-\u{1EFF}]+$/u, Mo = /\S/, Oo = new Ro();
    Oo.equals = function(t3, e3) {
      return this.options.ignoreCase && (t3 = t3.toLowerCase(), e3 = e3.toLowerCase()), t3 === e3 || this.options.ignoreWhitespace && !Mo.test(t3) && !Mo.test(e3);
    }, Oo.tokenize = function(t3) {
      let e3 = t3.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
      for (let t4 = 0; t4 < e3.length - 1; t4++) !e3[t4 + 1] && e3[t4 + 2] && Qo.test(e3[t4]) && Qo.test(e3[t4 + 2]) && (e3[t4] += e3[t4 + 2], e3.splice(t4 + 1, 2), t4--);
      return e3;
    };
    function Fo(t3, e3, r3) {
      try {
        const { range: n2, text: s2 } = e3;
        if (n2.startLineNumber > t3.length + 1 || n2.startLineNumber === t3.length + 1 && 1 !== n2.startColumn) throw new Error("Start of the range is outside the file.");
        const { startLineNumber: i3, startColumn: o3, endLineNumber: a2, endColumn: u2 } = n2, c2 = (t3[i3 - 1] ?? "").substring(0, o3 - 1), l2 = t3[a2 - 1] ?? "", m2 = 1 === u2 ? l2 : l2.substring(u2 - 1);
        true === r3?.noNeedToMakeSureLinesAreLines ? t3.splice(i3 - 1, a2 - i3 + 1, c2 + s2 + m2) : t3.splice(i3 - 1, a2 - i3 + 1, ...(c2 + s2 + m2).split("\n"));
      } catch (t4) {
        throw t4;
      }
    }
    function Lo(t3, e3) {
      const r3 = t3.split("\n");
      return Fo(r3, e3, { noNeedToMakeSureLinesAreLines: true }), r3.join("\n");
    }
    const $o = "cursorhashversionC7wtBsDmlFaPg4ToTvIlm";
    function Go(t3, e3) {
      if (void 0 === e3 || 0 === e3) return `${Ho(t3, 0)}`;
      if (1 === e3) {
        const e4 = `${$o}:1:`;
        return t3.length > 1e4 ? `${e4}${Ho(t3, 0)}` : `${e4}${t3}`;
      }
      throw new Error("Unsupported hash version");
    }
    function Ho(t3, e3) {
      e3 = Ko(149417, e3);
      for (let r3 = 0, n2 = t3.length; r3 < n2; r3++) e3 = Ko(t3.charCodeAt(r3), e3);
      return e3;
    }
    function Ko(t3, e3) {
      return (e3 << 5) - e3 + t3 | 0;
    }
    function Vo(t3) {
      return { startLineNumber: t3.range.startLineNumber, endLineNumberExclusive: t3.range.endLineNumber + 1 };
    }
    function zo(t3) {
      return { startLineNumber: t3.range.startLineNumber, endLineNumberExclusive: t3.range.startLineNumber + t3.text.split("\n").length };
    }
    function Wo(t3, e3, r3) {
      const n2 = (t4) => t4 > e3.startLineNumber ? t4 > e3.endLineNumberExclusive ? r3.endLineNumberExclusive - e3.endLineNumberExclusive : r3.endLineNumberExclusive - t4 : 0;
      return { startLineNumber: Math.min(r3.startLineNumber, t3.startLineNumber + n2(t3.startLineNumber)), endLineNumberExclusive: Math.max(r3.endLineNumberExclusive, t3.endLineNumberExclusive + n2(t3.endLineNumberExclusive)) };
    }
    function Yo(t3, e3) {
      const r3 = (function(t4, e4) {
        const r4 = Math.max(t4.startLineNumber, e4.startLineNumber);
        let n2 = Math.min(t4.endLineNumberExclusive, e4.endLineNumberExclusive);
        r4 > n2 && (n2 = r4);
        return { startLineNumber: r4, endLineNumberExclusive: n2 };
      })(t3, e3);
      return r3.endLineNumberExclusive - r3.startLineNumber;
    }
    class jo {
      constructor(t3) {
        this.diffHistorySizeLimit = 90, this.patchStringSizeLimit = 40, this.whitespacePatchStringSizeLimit = 5, this.keepRecentModelHashCount = 20, this.keepRecentlyRejectedEditModelHashCount = 5, this.timeoutCount = 0, this.useFullFileDiffsTilUnmerged = false, this.includeUnchangedLines = true, this.previousCompiledGlobalDiffTrajectories = [], this.latestCompiledGlobalDiffTrajectoriesVersion = void 0, this.version = void 0, this._diffStateByIdentifier = {}, this.latestRangeByIdentifier = {}, this.processModelChangeLoopRunning = false, this.changesToProcessArgs = [], this.MAX_LOOP_DURATION_MS = 5e3, this.diffHistorySizeLimit = t3.diffHistorySizeLimit ?? this.diffHistorySizeLimit, this.patchStringSizeLimit = t3.patchStringSizeLimit ?? this.patchStringSizeLimit, this.recentModelHashes = t3.skipModelHash ? void 0 : {}, this.recentlyRejectedEditModelHashes = t3.skipModelHash ? void 0 : {}, this.saveOneBeforeLastModelValue = t3.saveOneBeforeLastModelValue ?? false, this.keepWhitespaceOnlyChanges = t3.keepWhitespaceOnlyChanges ?? false, this.alwaysUseFullFileDiff = t3.alwaysUseFullFileDiff ?? false, this.gitDiffExtraContextRadius = t3.gitDiffExtraContextRadius ?? 0, this.mergingBehavior = t3.mergingBehavior, this.changeIndex = 0, this.includeUnchangedLines = t3.includeUnchangedLines ?? true, this.modelLockManager = new Uo(10);
      }
      async holdFileLock(t3) {
        return this.modelLockManager.acquireLock(t3);
      }
      initModel(t3, e3, r3) {
        void 0 !== this.recentModelHashes && (this.recentModelHashes[t3] ??= [], this.recentModelHashes[t3].push({ modelHash: Go(e3, 1), seenAt: Date.now() }), this.recentModelHashes[t3] = this.recentModelHashes[t3].slice(-this.keepRecentModelHashCount)), this._diffStateByIdentifier[t3] = { oneBeforeLastModel: this.saveOneBeforeLastModelValue ? e3 : void 0, oldestModel: e3, newModel: e3, diffHistory: [], lastEditTime: ++this.changeIndex, modelVersion: r3 };
      }
      getOneBeforeLastModelValue(t3) {
        return this._diffStateByIdentifier[t3]?.oneBeforeLastModel;
      }
      getModelValue(t3) {
        return this._diffStateByIdentifier[t3]?.newModel;
      }
      getModelVersion(t3) {
        return this._diffStateByIdentifier[t3]?.modelVersion;
      }
      updateModelVersion(t3, e3) {
        const r3 = this._diffStateByIdentifier[t3];
        void 0 !== r3 && (r3.modelVersion = e3);
      }
      getTimeoutCount() {
        return this.timeoutCount;
      }
      filterPatch(t3) {
        const e3 = t3?.string.split("\n").length ?? 0;
        return void 0 !== t3 && "" !== t3.string.trim() && e3 <= this.patchStringSizeLimit && (!t3.isWhitespaceChange || e3 <= this.whitespacePatchStringSizeLimit);
      }
      async compileGlobalDiffTrajectories(t3, e3) {
        if (void 0 !== this.version && this.latestCompiledGlobalDiffTrajectoriesVersion === this.version) return this.previousCompiledGlobalDiffTrajectories;
        const r3 = t3 ?? {};
        let n2 = [];
        for (const t4 in this._diffStateByIdentifier) {
          const r4 = this._diffStateByIdentifier[t4].diffHistory;
          n2 = n2.concat(r4.map((e4) => ({ ...e4, modelIdentifier: t4 })));
          const s3 = this._diffStateByIdentifier[t4].addedRangeInNewModelOneIndexed, i3 = this._diffStateByIdentifier[t4].lastEditTime;
          if (void 0 !== s3 && void 0 !== i3) try {
            const r5 = await this.getPatchOfActiveDiff(t4, e3, true);
            n2.push({ modelIdentifier: t4, lastEditTime: i3, patch: r5 });
          } catch (e4) {
            if (this.updateOldestModel(t4, this._diffStateByIdentifier[t4].newModel), !(e4 instanceof Error && e4.message.toLowerCase().includes("timeout"))) throw e4;
            this.timeoutCount++;
          }
        }
        n2.sort((t4, e4) => t4.lastEditTime - e4.lastEditTime);
        const s2 = n2.filter((t4) => this.filterPatch(t4.patch)).slice(-this.diffHistorySizeLimit).map((t4, e4) => new ps({ fileName: r3[t4.modelIdentifier] ?? t4.modelIdentifier, diffHistory: [t4.patch.string], diffHistoryTimestamps: [] })).reduce((t4, e4) => {
          if (0 === t4.length) return [e4];
          const r4 = t4[t4.length - 1];
          return r4.fileName === e4.fileName ? (r4.diffHistory.push(...e4.diffHistory), r4.diffHistoryTimestamps.push(...e4.diffHistoryTimestamps)) : t4.push(e4), t4;
        }, []);
        return this.latestCompiledGlobalDiffTrajectoriesVersion = this.version, this.previousCompiledGlobalDiffTrajectories = s2, s2;
      }
      isRevertingToRecentModel(t3, e3) {
        if (null == this.recentModelHashes) throw new Error("Model history tracking is disabled");
        const r3 = Go(e3, 1), n2 = this.recentModelHashes[t3] ?? [], s2 = Date.now() - 12e4;
        return n2.some((t4) => t4.modelHash === r3 && t4.seenAt > s2);
      }
      isSuggestingRecentlyRejectedEdit(t3, e3, r3, n2) {
        if (null == this.recentlyRejectedEditModelHashes) throw new Error("Model history tracking is disabled");
        const s2 = this.recentlyRejectedEditModelHashes[t3] ?? [], i3 = Go(e3, 1), o3 = s2.find((t4) => t4.modelHash === i3);
        return void 0 !== o3?.numberOfTimesSoftRejected && o3.numberOfTimesSoftRejected >= r3 || void 0 !== o3?.numberOfTimesHardRejected && o3.numberOfTimesHardRejected >= n2;
      }
      recordRejectedEdit(t3, e3, r3) {
        if (null == this.recentlyRejectedEditModelHashes) return;
        this.recentlyRejectedEditModelHashes[t3] ??= [];
        const n2 = Go(e3, 1), s2 = this.recentlyRejectedEditModelHashes[t3].find((t4) => t4.modelHash === n2);
        s2 ? (s2.numberOfTimesSoftRejected++, r3 || s2.numberOfTimesHardRejected++) : this.recentlyRejectedEditModelHashes[t3].push({ modelHash: n2, numberOfTimesSoftRejected: 1, numberOfTimesHardRejected: r3 ? 0 : 1 }), this.recentlyRejectedEditModelHashes[t3].length > this.keepRecentlyRejectedEditModelHashCount && this.recentlyRejectedEditModelHashes[t3].shift();
      }
      async processModelChangesLoopWithTimeout() {
        if (this.processModelChangeLoopRunning) return;
        let t3;
        const e3 = new Promise((e4) => {
          t3 = setTimeout(() => {
            console.warn("processModelChangesLoop timed out"), e4();
          }, this.MAX_LOOP_DURATION_MS);
        });
        try {
          this.processModelChangeLoopRunning = true, await Promise.race([this.processModelChangesLoop().then(() => clearTimeout(t3)), e3]);
        } catch (t4) {
          console.error("Error in processModelChangesLoop:", t4);
        } finally {
          this.processModelChangeLoopRunning = false;
        }
      }
      async processModelChangesLoop() {
        for (; this.changesToProcessArgs.length > 0; ) {
          const t3 = this.changesToProcessArgs.shift();
          if (void 0 === t3) break;
          const { useFullFileDiffForThisCall: e3, uniqueModelIdentifier: r3, newModelValue: n2, addedRangeInNewModelOneIndexed: s2, deletedRangeInOldModelOneIndexed: i3 } = t3;
          if (e3 && (this.useFullFileDiffsTilUnmerged = true), void 0 === this._diffStateByIdentifier[r3]) return void this.initModel(r3, n2);
          const { addedRangeInNewModelOneIndexed: o3, newModel: a2, lastEditTime: u2 } = this._diffStateByIdentifier[r3];
          if (void 0 === o3 || void 0 === u2) e3 || (this.useFullFileDiffsTilUnmerged = false), this._diffStateByIdentifier[r3].addedRangeInNewModelOneIndexed = s2, this._diffStateByIdentifier[r3].rangesOfAccumulatedChanges = { currentRange: s2, pastRange: i3 };
          else {
            const t4 = this.shouldMerge({ lastDiffRange: o3, replacedChangeRange: i3 }), n3 = this._diffStateByIdentifier[r3].rangesOfAccumulatedChanges;
            if (t4 && this.newestModelIdentifier() === r3) {
              const { startLineNumber: t5, endLineNumberExclusive: e4 } = Wo(o3, i3, s2);
              if (this._diffStateByIdentifier[r3].addedRangeInNewModelOneIndexed = { startLineNumber: t5, endLineNumberExclusive: e4 }, void 0 === n3) ;
              else {
                const t6 = Xo({ firstAddedRange: n3.currentRange, firstRemovedRange: n3.pastRange, secondAddedRange: s2, secondRemovedRange: i3 });
                this._diffStateByIdentifier[r3].rangesOfAccumulatedChanges = t6;
              }
            } else {
              try {
                const t5 = await this.getPatchOfActiveDiff(r3, e3, false);
                this._diffStateByIdentifier[r3].diffHistory.push({ patch: t5, lastEditTime: u2 }), this.cleanDiffTrajectories();
              } catch (t5) {
                if (!(t5 instanceof Error && t5.message.toLowerCase().includes("timeout"))) throw t5;
                this.timeoutCount++;
              }
              this.updateOldestModel(r3, a2), this._diffStateByIdentifier[r3].addedRangeInNewModelOneIndexed = s2, e3 || (this.useFullFileDiffsTilUnmerged = false), this._diffStateByIdentifier[r3].rangesOfAccumulatedChanges = { currentRange: s2, pastRange: i3 };
            }
          }
          this._diffStateByIdentifier[r3].lastEditTime = ++this.changeIndex, this.updateNewModel(r3, n2), t3.callback && t3.callback();
        }
      }
      async processModelChange(t3) {
        this.changesToProcessArgs.push(t3), void 0 !== this.recentModelHashes && (this.recentModelHashes[t3.uniqueModelIdentifier] ??= [], this.recentModelHashes[t3.uniqueModelIdentifier].push({ modelHash: Go(t3.newModelValue, 1), seenAt: Date.now() }), this.recentModelHashes[t3.uniqueModelIdentifier] = this.recentModelHashes[t3.uniqueModelIdentifier].slice(-this.keepRecentModelHashCount)), await this.processModelChangesLoopWithTimeout();
      }
      removeOldestDiffTrajectory() {
        let t3 = 1 / 0, e3 = null;
        for (const r3 in this._diffStateByIdentifier) {
          const n2 = this._diffStateByIdentifier[r3].diffHistory;
          if (n2.length > 0) {
            const s2 = n2[0].lastEditTime;
            s2 < t3 && (t3 = s2, e3 = r3);
          }
        }
        null !== e3 && this._diffStateByIdentifier[e3].diffHistory.shift();
      }
      copyAtPointInTime(t3) {
        const e3 = new jo({ diffHistorySizeLimit: this.diffHistorySizeLimit, patchStringSizeLimit: this.patchStringSizeLimit, gitDiffExtraContextRadius: this.gitDiffExtraContextRadius });
        for (const r3 in this._diffStateByIdentifier) if (t3) {
          const t4 = this._diffStateByIdentifier[r3].newModel;
          e3.initModel(r3, t4);
        } else {
          const t4 = this._diffStateByIdentifier[r3], n2 = { ...t4, oneBeforeLastModel: t4.oneBeforeLastModel ? t4.oneBeforeLastModel : void 0, newModel: t4.newModel, oldestModel: t4.oldestModel, rangesOfAccumulatedChanges: t4.rangesOfAccumulatedChanges ? { currentRange: t4.rangesOfAccumulatedChanges.currentRange, pastRange: t4.rangesOfAccumulatedChanges.pastRange } : void 0, addedRangeInNewModelOneIndexed: t4.addedRangeInNewModelOneIndexed ? { ...t4.addedRangeInNewModelOneIndexed } : void 0, cachedPatchString: t4.cachedPatchString ? { ...t4.cachedPatchString } : void 0, lastEditTime: t4.lastEditTime, modelVersion: t4.modelVersion, diffHistory: t4.diffHistory.map((t5) => ({ ...t5 })) };
          e3._diffStateByIdentifier[r3] = n2, e3.latestRangeByIdentifier[r3] = this.latestRangeByIdentifier[r3];
        }
        return e3;
      }
      shouldMerge({ lastDiffRange: t3, replacedChangeRange: e3 }) {
        const r3 = e3.startLineNumber === t3.startLineNumber && e3.endLineNumberExclusive === t3.endLineNumberExclusive, n2 = e3.endLineNumberExclusive - e3.startLineNumber === 1, s2 = this.mergingBehavior;
        if (void 0 === s2) return n2 && t3.startLineNumber === e3.endLineNumberExclusive || r3;
        if ("whitespace compatible" === s2.type) {
          return r3 || n2 && t3.startLineNumber === e3.endLineNumberExclusive || n2 && t3.endLineNumberExclusive == e3.startLineNumber || e3.endLineNumberExclusive - e3.startLineNumber <= 2 && t3.endLineNumberExclusive == e3.endLineNumberExclusive;
        }
        throw new Error(`Unknown merging behavior: ${s2.type}`);
      }
      cleanDiffTrajectories() {
        let t3 = 0;
        for (const e3 in this._diffStateByIdentifier) this._diffStateByIdentifier[e3].diffHistory = this._diffStateByIdentifier[e3].diffHistory.filter((t4) => this.filterPatch(t4.patch)), t3 += this._diffStateByIdentifier[e3].diffHistory.length;
        for (let e3 = t3; e3 > this.diffHistorySizeLimit; e3--) this.removeOldestDiffTrajectory();
      }
      async getPatchOfActiveDiff(t3, e3, r3) {
        const { oldestModel: n2, newModel: s2, cachedPatchString: i3, rangesOfAccumulatedChanges: o3 } = this._diffStateByIdentifier[t3];
        if (void 0 !== i3) return i3;
        const a2 = this.alwaysUseFullFileDiff || e3 || this.useFullFileDiffsTilUnmerged ? void 0 : o3, u2 = await (async function({ past: t4, current: e4, radius: r4, keepWhitespaceChanges: n3, rangesOfPastAndCurrent: s3, includeUnchangedLines: i4 = true, timeout: o4 = 2e3 }) {
          const { past: a3, current: u3, currentOffsetLineNumber: c2, pastOffsetLineNumber: l2 } = (function({ origPast: t5, origCurrent: e5, rangesOfPastAndCurrent: r5 }) {
            if (void 0 === r5) return { past: t5, current: e5, currentOffsetLineNumber: 0, pastOffsetLineNumber: 0 };
            const { pastRange: n4, currentRange: s4 } = r5, i5 = { ...s4 }, o5 = { ...n4 }, a4 = e5.split("\n"), u4 = t5.split("\n");
            i5.endLineNumberExclusive < a4.length && o5.endLineNumberExclusive < u4.length && (i5.endLineNumberExclusive += 1, o5.endLineNumberExclusive += 1);
            i5.startLineNumber > 1 && o5.startLineNumber > 1 && (i5.startLineNumber -= 1, o5.startLineNumber -= 1);
            const c3 = 25, l3 = Math.max(Math.min(i5.startLineNumber - 1, o5.startLineNumber - 1, c3), 0), m3 = Math.max(Math.min(a4.length + 1 - i5.endLineNumberExclusive, u4.length + 1 - o5.endLineNumberExclusive, c3), 0);
            i5.startLineNumber -= l3, o5.startLineNumber -= l3, i5.endLineNumberExclusive += m3, o5.endLineNumberExclusive += m3;
            const d3 = a4.slice(i5.startLineNumber - 1, i5.endLineNumberExclusive - 1).join("\n");
            return { past: u4.slice(o5.startLineNumber - 1, o5.endLineNumberExclusive - 1).join("\n"), current: d3, currentOffsetLineNumber: i5.startLineNumber - 1, pastOffsetLineNumber: o5.startLineNumber - 1 };
          })({ origPast: t4, origCurrent: e4, rangesOfPastAndCurrent: s3 });
          let m2;
          m2 = a3.split("\n").length > 100 || u3.split("\n").length > 100 ? await new Promise((t5, e5) => {
            xo(a3, u3, { callback: (r5, n4) => {
              void 0 !== n4 ? t5(n4) : e5(new Error("Timeout exceeded"));
            }, timeout: o4 });
          }) : xo(a3, u3);
          let d2 = 1 / 0, f2 = -1 / 0, p2 = -1 / 0, h2 = 1;
          m2.forEach((t5) => {
            true !== t5.added && true !== t5.removed || (d2 = Math.min(d2, h2), "" !== t5.value.trim() && (f2 = Math.max(f2, h2 + t5.count - 1)), p2 = Math.max(p2, h2 + t5.count - 1)), h2 += t5.count;
          }), d2 = Math.max(0, d2 - r4), f2 === -1 / 0 && (f2 = p2);
          if (f2 += r4, d2 === 1 / 0 || f2 === -1 / 0) return;
          const g2 = a3.replace(/\s/g, ""), A2 = u3.replace(/\s/g, ""), _2 = g2 === A2;
          if (_2 && true !== n3) return;
          let y2 = "", w2 = d2 - 1, S2 = d2 - 1;
          for (let t5 = d2; t5 <= f2; t5++) {
            h2 = 1;
            const e5 = m2.find((e6, r5) => {
              const n4 = h2 + e6.count, s4 = h2 <= t5 && t5 < n4;
              return h2 = n4, s4;
            });
            if (void 0 !== e5) {
              const r5 = t5 - (h2 - e5.count);
              true === e5.added ? (S2++, y2 += `${(S2 + c2).toString().padStart(0, " ")}+|` + e5.value.split("\n")[r5] + "\n") : true === e5.removed ? (w2++, y2 += `${(w2 + l2).toString().padStart(0, " ")}-|` + e5.value.split("\n")[r5] + "\n") : i4 ? (w2++, S2++, y2 += `${(S2 + c2).toString().padStart(0, " ")} |` + e5.value.split("\n")[r5] + "\n") : (w2++, S2++);
            }
          }
          return { string: y2, isWhitespaceChange: _2 };
        })({ past: n2, current: s2, radius: this.gitDiffExtraContextRadius, keepWhitespaceChanges: this.keepWhitespaceOnlyChanges && r3, rangesOfPastAndCurrent: a2, includeUnchangedLines: this.includeUnchangedLines });
        return false !== r3 && false !== u2?.isWhitespaceChange || (this._diffStateByIdentifier[t3].cachedPatchString = u2), u2;
      }
      newestModelIdentifier() {
        let t3 = null, e3 = -1 / 0;
        for (const r3 in this._diffStateByIdentifier) {
          const n2 = this._diffStateByIdentifier[r3].lastEditTime;
          n2 > e3 && (t3 = r3, e3 = n2);
        }
        return t3;
      }
      updateNewModel(t3, e3) {
        this.saveOneBeforeLastModelValue && (this._diffStateByIdentifier[t3].oneBeforeLastModel = this._diffStateByIdentifier[t3].newModel), this._diffStateByIdentifier[t3].newModel = e3, delete this._diffStateByIdentifier[t3].cachedPatchString;
      }
      updateOldestModel(t3, e3) {
        this._diffStateByIdentifier[t3].oldestModel = e3, delete this._diffStateByIdentifier[t3].cachedPatchString;
      }
      setKeepWhitespaceOnlyChanges(t3) {
        this.keepWhitespaceOnlyChanges = t3;
      }
      setIncludeUnchangedLines(t3) {
        this.includeUnchangedLines = t3;
      }
      setMergingBehavior(t3) {
        this.mergingBehavior = t3;
      }
      compareEditTimes(t3) {
        if (t3.firstModelIdentifier === t3.secondModelIdentifier) return 0;
        const e3 = this._diffStateByIdentifier[t3.firstModelIdentifier]?.lastEditTime, r3 = this._diffStateByIdentifier[t3.secondModelIdentifier]?.lastEditTime;
        if (void 0 === e3 || void 0 === r3) throw new Error(`Edit time is undefined for model identifier: ${t3.firstModelIdentifier} or ${t3.secondModelIdentifier}`);
        return e3 - r3;
      }
    }
    function Xo({ firstAddedRange: t3, secondAddedRange: e3, firstRemovedRange: r3, secondRemovedRange: n2 }) {
      if (r3.startLineNumber !== t3.startLineNumber) throw new Error("firstRemovedRange.startLineNumber !== firstAddedRange.startLineNumber");
      if (n2.startLineNumber !== e3.startLineNumber) throw new Error("secondRemovedRange.startLineNumber !== secondAddedRange.startLineNumber");
      const s2 = Math.min(r3.startLineNumber, n2.startLineNumber), i3 = Math.max(0, n2.endLineNumberExclusive - t3.endLineNumberExclusive), o3 = { startLineNumber: s2, endLineNumberExclusive: r3.endLineNumberExclusive + i3 }, a2 = s2, u2 = Yo(n2, { ...t3, startLineNumber: 1 }), c2 = Yo(e3, { ...t3, startLineNumber: 1 }) - u2;
      return { pastRange: o3, currentRange: { startLineNumber: a2, endLineNumberExclusive: Math.max(t3.endLineNumberExclusive, e3.endLineNumberExclusive) + c2 } };
    }
    /* @__PURE__ */ Symbol.for("cursor.agentStreamMetadata");
    var Zo = ((t3) => (t3.GetCachedServerConfig = "aiServerConfigService.getCachedServerConfig", t3))(Zo || {}), ta = ((t3) => (t3.Ack = "editHistoryDiffFormatter.ack", t3.GetModelValueInRanges = "editHistoryDiffFormatter.getModelValueInRanges", t3.GetModelValue = "editHistoryDiffFormatter.getModelValue", t3.FormatDiffHistory = "editHistoryDiffFormatter.formatDiffHistory", t3.InitModel = "editHistoryDiffFormatter.initModel", t3.CompileGlobalDiffTrajectories = "editHistoryDiffFormatter.compileGlobalDiffTrajectories", t3.IsRevertingToRecentModel = "editHistoryDiffFormatter.isRevertingToRecentModel", t3.IsSuggestingRecentlyRejectedEdit = "editHistoryDiffFormatter.isSuggestingRecentlyRejectedEdit", t3.RecordRejectedEdit = "editHistoryDiffFormatter.recordRejectedEdit", t3.ProcessModelChangeLoop = "editHistoryDiffFormatter.processModelChangeLoop", t3.SetEnableCppWhitespaceDiffHistoryMode = "editHistoryDiffFormatter.setEnableCppWhitespaceDiffHistoryMode", t3.SetEnableCppIncludeUnchangedLines = "editHistoryDiffFormatter.setEnableCppIncludeUnchangedLines", t3))(ta || {}), ea = ((t3) => (t3.GetFileSyncUpdates = "fileSync.getFileSyncUpdates", t3.ShouldRelyOnFileSyncForFile = "fileSync.shouldRelyOnFileSyncForFile", t3.GetFileSyncEncryptionHeader = "fileSync.getFileSyncEncryptionHeader", t3.ResetSequentialSuccessfulSync = "fileSync.resetSequentialSuccessfulSync", t3.TriggerFileSync = "fileSync.triggerFileSync", t3))(ea || {}), ra = ((t3) => (t3.UploadToSignedUrl = "attachedMedia.uploadToSignedUrl", t3))(ra || {}), na = ((t3) => (t3.DNSLookup = "connectDebug.dnsLookup", t3.InspectTLSInfo = "connectDebug.inspectTLSInfo", t3.Http2Ping = "connectDebug.http2Ping", t3))(na || {}), sa = ((t3) => (t3.FREE = "free", t3.PRO = "pro", t3.PRO_PLUS = "pro_plus", t3.ENTERPRISE = "enterprise", t3.FREE_TRIAL = "free_trial", t3.ULTRA = "ultra", t3.PRO_STUDENT = "pro_student", t3.EXPRESS = "express", t3.PREMIUM = "premium", t3.PLUS = "plus", t3.SUPER = "super", t3.UNIFIED_ULTRA = "unified_ultra", t3))(sa || {});
    new Set(Object.values(sa));
    function ia(t3, e3, r3) {
      if (void 0 !== e3) {
        const t4 = [".env", ".env.local", ".env.development", ".env.production", ".env.test", ".env.testing", ".env.development.local", ".env.production.local", ".env.test.local", ".env.testing.local"];
        if ("plaintext" === e3.languageId && t4.some((t5) => e3.fsPath.endsWith(t5))) return false;
        if ((function(t5, e4) {
          if (Array.isArray(e4) && e4.includes(t5)) return true;
          return false;
        })(e3.languageId, r3)) return false;
      }
      return true === t3;
    }
    const oa = "cursor.general.disableHttp2", aa = "cursor.general.disableHttp1SSE";
    async function ua(t3, e3, r3, n2, s2) {
      const i3 = await e3.holdFileLock(t3);
      try {
        const i4 = o2.Uri.parse(t3), a2 = o2.workspace.asRelativePath(i4);
        let u2, c2 = await o2.workspace.openTextDocument(i4).then((t4) => t4.getText());
        if ("vscode-notebook-cell" === i4.scheme) {
          const t4 = o2.workspace.notebookDocuments.find((t5) => t5.getCells().find((t6) => t6.document.uri.toString() === i4.toString()));
          if (!t4) return;
          const e4 = t4.getCells(), s3 = e4.find((t5) => t5.document.uri.toString() === i4.toString());
          if (!s3) return;
          const a3 = e4.map((t5) => t5.document.getText()), l3 = e4.filter((t5) => t5.index < s3.index).map((t5) => t5.document.getText());
          if (void 0 === l3) return;
          if (!a3 || !l3) return;
          c2 = a3.join(n2);
          const m3 = l3.join(n2).split(n2).length;
          u2 = r3.map((t5) => ({ ...t5, range: { startLineNumber: t5.range.startLineNumber + m3, startColumn: t5.range.startColumn, endLineNumber: t5.range.endLineNumber + m3, endColumn: t5.range.endColumn } }));
        }
        const l2 = e3.getModelValue(a2), m2 = e3.getModelVersion(a2);
        if (void 0 === l2) return e3.initModel(a2, c2, s2), void ("cursor dev" === o2.env.appName.toLowerCase() && o2.window.showErrorMessage("Cursor Dev: Failed to get previous model value"));
        let d2, f2 = u2 ?? r3;
        f2.sort((t4, e4) => e4.range.startLineNumber === t4.range.startLineNumber ? e4.range.startColumn - t4.range.startColumn : e4.range.startLineNumber - t4.range.startLineNumber);
        try {
          let t4 = l2;
          for (const e4 of f2) t4 = Lo(t4, e4);
          d2 = t4 !== c2;
        } catch (t4) {
          console.error(t4), d2 = true;
        }
        void 0 !== m2 && m2 + 1 === s2 || (d2 = true), e3.updateModelVersion(a2, s2), 1 === f2.length ? await (async function(t4, e4) {
          await t4.processModelChange({ uniqueModelIdentifier: e4.uniqueModelIdentifier, newModelValue: e4.newModelValue, deletedRangeInOldModelOneIndexed: Vo(e4.change), addedRangeInNewModelOneIndexed: zo(e4.change), useFullFileDiffForThisCall: e4.useFullFileDiffForThisCall });
        })(e3, { newModelValue: c2, uniqueModelIdentifier: a2, useFullFileDiffForThisCall: d2, change: f2[0] }) : await (async function(t4, e4) {
          let r4 = e4.previousModelValue;
          if (e4.useFullFileDiffForThisCall) {
            const n3 = await (async function({ past: t5, current: e5, diffingProvider: r5 }) {
              const n4 = await new Promise((n5, s5) => {
                void 0 !== r5 ? r5.diffLines(e5, t5, void 0, void 0).then((t6) => n5(t6)) : xo(t5, e5, { timeout: 2e3, callback: (t6, e6) => {
                  void 0 !== e6 ? n5(e6) : s5(new Error("Timeout exceeded"));
                } });
              });
              let s4 = 1 / 0, i6 = -1 / 0, o3 = -1 / 0, a3 = 1;
              n4.forEach((t6, e6) => {
                true !== t6.added && true !== t6.removed || (s4 = Math.min(s4, a3), "" !== t6.value.trim() && (i6 = Math.max(i6, a3 + t6.count - 1)), o3 = Math.max(o3, a3 + t6.count - 1)), a3 += t6.count;
              }), s4 = Math.max(0, s4), i6 === -1 / 0 && (i6 = o3);
              let u3 = s4 - 1, c3 = s4 - 1, l3 = 1 / 0, m3 = -1 / 0, d3 = 1 / 0, f3 = -1 / 0;
              for (let t6 = s4; t6 <= i6; t6++) {
                a3 = 1;
                const e6 = n4.find((e7, r6) => {
                  const n5 = a3 + e7.count, s5 = a3 <= t6 && t6 < n5;
                  return a3 = n5, s5;
                });
                void 0 !== e6 && (true === e6.added ? (c3++, l3 = Math.min(l3, c3), m3 = Math.max(m3, c3)) : true === e6.removed ? (u3++, d3 = Math.min(d3, u3), f3 = Math.max(f3, u3)) : (u3++, c3++));
              }
              if (l3 !== 1 / 0 || d3 !== 1 / 0) return l3 === 1 / 0 && (l3 = d3, m3 = d3), d3 === 1 / 0 && (d3 = l3, f3 = m3), { oldRange: { startLineNumber: d3, endLineNumberExclusive: f3 + 1 }, newRange: { startLineNumber: l3, endLineNumberExclusive: m3 + 1 } };
            })({ past: r4, current: e4.newModelValue });
            if (void 0 === n3) return;
            const { oldRange: s3, newRange: i5 } = n3;
            await t4.processModelChange({ ...e4, deletedRangeInOldModelOneIndexed: s3, addedRangeInNewModelOneIndexed: i5 });
          } else for (let n3 = 0; n3 < e4.changesInReverseOrder.length; n3++) {
            const s3 = e4.changesInReverseOrder[n3], i5 = Lo(r4, s3);
            await t4.processModelChange({ ...e4, newModelValue: i5, deletedRangeInOldModelOneIndexed: Vo(s3), addedRangeInNewModelOneIndexed: zo(s3) }), r4 = i5;
          }
        })(e3, { newModelValue: c2, uniqueModelIdentifier: a2, changesInReverseOrder: f2, useFullFileDiffForThisCall: d2, previousModelValue: l2 });
        const p2 = await e3.compileGlobalDiffTrajectories({});
        if (void 0 === p2) throw new Error("Compile Diff Trajectories not registered in extension host");
        return p2;
      } finally {
        i3();
      }
    }
    const ca = new jo({ keepWhitespaceOnlyChanges: true, alwaysUseFullFileDiff: false, includeUnchangedLines: true });
    f(ta.Ack, async (t3, e3) => true), f(ta.GetModelValue, async (t3, e3) => ca.getModelValue(t3.relativePath)), f(ta.GetModelValueInRanges, async (t3, e3) => {
      const r3 = ca.getModelValue(t3.relativePath);
      if (void 0 !== r3) return t3.ranges.map((t4) => (function(t5, e4) {
        return (function(t6, e5) {
          let r4 = t6.split("\n");
          const n2 = e5.startLineNumber - 1, s2 = e5.endLineNumberInclusive - 1, i3 = e5.startColumn - 1, o3 = e5.endColumn - 1;
          return r4 = r4.slice(n2, s2 + 1), 1 === r4.length ? r4[0] = r4[0].slice(i3, o3) : (r4[0] = r4[0].slice(i3), r4[r4.length - 1] = r4[r4.length - 1].slice(0, o3)), r4.join("\n");
        })(t5, { startColumn: e4.startColumn, startLineNumber: e4.startLineNumber, endColumn: e4.endColumn, endLineNumberInclusive: e4.endLineNumber });
      })(r3, t4));
    }), f(ta.InitModel, async (t3, e3) => {
      ca.initModel(t3.relativePath, t3.currentModelValue, t3.modelVersion);
    });
    f(ta.CompileGlobalDiffTrajectories, async (t3, e3) => {
      const r3 = await ca.compileGlobalDiffTrajectories(t3.relativePathToDisplayName);
      return r3.map((t4) => {
        const e4 = t4.diffHistory;
        let r4 = [];
        const n2 = (t5) => t5.split("\n").map((t6) => t6.slice(0, 600)).join("\n");
        for (let t5 = 0; t5 < e4.length; t5++) r4.push(n2(e4[t5]));
        return { ...t4, diffHistory: r4 };
      });
    }), f(ta.IsRevertingToRecentModel, async (t3, e3) => ca.isRevertingToRecentModel(t3.relativePath, t3.modelValue)), f(ta.IsSuggestingRecentlyRejectedEdit, async (t3, e3) => ca.isSuggestingRecentlyRejectedEdit(t3.relativePath, t3.modelValue, t3.numberOfTimesSoftRejectedThreshold, t3.numberOfTimesHardRejectedThreshold)), f(ta.RecordRejectedEdit, async (t3, e3) => {
      ca.recordRejectedEdit(t3.relativePath, t3.modelValue, t3.onlySoftRejected);
    }), f(ta.ProcessModelChangeLoop, async (t3, e3) => ca.processModelChangesLoopWithTimeout()), f(ta.FormatDiffHistory, (t3, e3) => ua(t3.uri, ca, t3.changes, t3.eol, t3.modelVersion)), f(ta.SetEnableCppWhitespaceDiffHistoryMode, async (t3) => {
      ca.setKeepWhitespaceOnlyChanges(t3.enabled), ca.setMergingBehavior(t3.enabled ? { type: "whitespace compatible" } : void 0);
    }), f(ta.SetEnableCppIncludeUnchangedLines, async (t3) => {
      ca.setIncludeUnchangedLines(t3.enabled);
    }), f(ra.UploadToSignedUrl, async (t3) => (0, a.uploadToSignedUrl)(t3));
    class la {
      constructor(t3) {
        this.disposables = [];
        const e3 = { runCommand: (e4, r3) => {
          const n2 = (function(t4) {
            return d[t4];
          })(e4);
          return void 0 !== n2 ? n2(r3, { context: t3 }) : Promise.resolve(void 0);
        } };
        o2.cursor.registerEverythingProviderAllLocal(e3);
      }
      dispose() {
        this.disposables.forEach((t3) => t3.dispose());
      }
    }
    var ma, da = n(6038);
    function fa(t3) {
      const e3 = ma[t3];
      return "string" != typeof e3 ? t3.toString() : e3[0].toLowerCase() + e3.substring(1).replace(/[A-Z]/g, (t4) => "_" + t4.toLowerCase());
    }
    !(function(t3) {
      t3[t3.Canceled = 1] = "Canceled", t3[t3.Unknown = 2] = "Unknown", t3[t3.InvalidArgument = 3] = "InvalidArgument", t3[t3.DeadlineExceeded = 4] = "DeadlineExceeded", t3[t3.NotFound = 5] = "NotFound", t3[t3.AlreadyExists = 6] = "AlreadyExists", t3[t3.PermissionDenied = 7] = "PermissionDenied", t3[t3.ResourceExhausted = 8] = "ResourceExhausted", t3[t3.FailedPrecondition = 9] = "FailedPrecondition", t3[t3.Aborted = 10] = "Aborted", t3[t3.OutOfRange = 11] = "OutOfRange", t3[t3.Unimplemented = 12] = "Unimplemented", t3[t3.Internal = 13] = "Internal", t3[t3.Unavailable = 14] = "Unavailable", t3[t3.DataLoss = 15] = "DataLoss", t3[t3.Unauthenticated = 16] = "Unauthenticated";
    })(ma || (ma = {}));
    class pa extends Error {
      constructor(t3, e3 = ma.Unknown, r3, n2, s2) {
        super((function(t4, e4) {
          return t4.length ? `[${fa(e4)}] ${t4}` : `[${fa(e4)}]`;
        })(t3, e3)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = t3, this.code = e3, this.metadata = new Headers(null != r3 ? r3 : {}), this.details = null != n2 ? n2 : [], this.cause = s2;
      }
      static from(t3, e3 = ma.Unknown) {
        return t3 instanceof pa ? t3 : t3 instanceof Error ? "AbortError" == t3.name ? new pa(t3.message, ma.Canceled) : new pa(t3.message, e3, void 0, void 0, t3) : new pa(String(t3), e3, void 0, void 0, t3);
      }
      static [Symbol.hasInstance](t3) {
        return t3 instanceof Error && (Object.getPrototypeOf(t3) === pa.prototype || "ConnectError" === t3.name && "code" in t3 && "number" == typeof t3.code && "metadata" in t3 && "details" in t3 && Array.isArray(t3.details) && "rawMessage" in t3 && "string" == typeof t3.rawMessage && "cause" in t3);
      }
      findDetails(t3) {
        const e3 = "typeName" in t3 ? { findMessage: (e4) => e4 === t3.typeName ? t3 : void 0 } : t3, r3 = [];
        for (const t4 of this.details) {
          if ("getType" in t4) {
            e3.findMessage(t4.getType().typeName) && r3.push(t4);
            continue;
          }
          const n2 = e3.findMessage(t4.type);
          if (n2) try {
            r3.push(n2.fromBinary(t4.value));
          } catch (t5) {
          }
        }
        return r3;
      }
    }
    var ha = function(t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e3, r3 = t3[Symbol.asyncIterator];
      return r3 ? r3.call(t3) : (t3 = "function" == typeof __values ? __values(t3) : t3[Symbol.iterator](), e3 = {}, n2("next"), n2("throw"), n2("return"), e3[Symbol.asyncIterator] = function() {
        return this;
      }, e3);
      function n2(r4) {
        e3[r4] = t3[r4] && function(e4) {
          return new Promise(function(n3, s2) {
            (function(t4, e5, r5, n4) {
              Promise.resolve(n4).then(function(e6) {
                t4({ value: e6, done: r5 });
              }, e5);
            })(n3, s2, (e4 = t3[r4](e4)).done, e4.value);
          });
        };
      }
    }, ga = function(t3) {
      return this instanceof ga ? (this.v = t3, this) : new ga(t3);
    }, Aa = function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r3.apply(t3, e3 || []), i3 = [];
      return n2 = {}, o3("next"), o3("throw"), o3("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, c2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function o3(t4, e4) {
        s2[t4] && (n2[t4] = function(e5) {
          return new Promise(function(r4, n3) {
            i3.push([t4, e5, r4, n3]) > 1 || a2(t4, e5);
          });
        }, e4 && (n2[t4] = e4(n2[t4])));
      }
      function a2(t4, e4) {
        try {
          (r4 = s2[t4](e4)).value instanceof ga ? Promise.resolve(r4.value.v).then(u2, c2) : l2(i3[0][2], r4);
        } catch (t5) {
          l2(i3[0][3], t5);
        }
        var r4;
      }
      function u2(t4) {
        a2("next", t4);
      }
      function c2(t4) {
        a2("throw", t4);
      }
      function l2(t4, e4) {
        t4(e4), i3.shift(), i3.length && a2(i3[0][0], i3[0][1]);
      }
    }, _a = function(t3) {
      var e3, r3;
      return e3 = {}, n2("next"), n2("throw", function(t4) {
        throw t4;
      }), n2("return"), e3[Symbol.iterator] = function() {
        return this;
      }, e3;
      function n2(n3, s2) {
        e3[n3] = t3[n3] ? function(e4) {
          return (r3 = !r3) ? { value: ga(t3[n3](e4)), done: false } : s2 ? s2(e4) : e4;
        } : s2;
      }
    };
    var ya = function(t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e3, r3 = t3[Symbol.asyncIterator];
      return r3 ? r3.call(t3) : (t3 = "function" == typeof __values ? __values(t3) : t3[Symbol.iterator](), e3 = {}, n2("next"), n2("throw"), n2("return"), e3[Symbol.asyncIterator] = function() {
        return this;
      }, e3);
      function n2(r4) {
        e3[r4] = t3[r4] && function(e4) {
          return new Promise(function(n3, s2) {
            (function(t4, e5, r5, n4) {
              Promise.resolve(n4).then(function(e6) {
                t4({ value: e6, done: r5 });
              }, e5);
            })(n3, s2, (e4 = t3[r4](e4)).done, e4.value);
          });
        };
      }
    }, wa = function(t3) {
      return this instanceof wa ? (this.v = t3, this) : new wa(t3);
    }, Sa = function(t3) {
      var e3, r3;
      return e3 = {}, n2("next"), n2("throw", function(t4) {
        throw t4;
      }), n2("return"), e3[Symbol.iterator] = function() {
        return this;
      }, e3;
      function n2(n3, s2) {
        e3[n3] = t3[n3] ? function(e4) {
          return (r3 = !r3) ? { value: wa(t3[n3](e4)), done: false } : s2 ? s2(e4) : e4;
        } : s2;
      }
    }, Ja = function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r3.apply(t3, e3 || []), i3 = [];
      return n2 = {}, o3("next"), o3("throw"), o3("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, c2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function o3(t4, e4) {
        s2[t4] && (n2[t4] = function(e5) {
          return new Promise(function(r4, n3) {
            i3.push([t4, e5, r4, n3]) > 1 || a2(t4, e5);
          });
        }, e4 && (n2[t4] = e4(n2[t4])));
      }
      function a2(t4, e4) {
        try {
          (r4 = s2[t4](e4)).value instanceof wa ? Promise.resolve(r4.value.v).then(u2, c2) : l2(i3[0][2], r4);
        } catch (t5) {
          l2(i3[0][3], t5);
        }
        var r4;
      }
      function u2(t4) {
        a2("next", t4);
      }
      function c2(t4) {
        a2("throw", t4);
      }
      function l2(t4, e4) {
        t4(e4), i3.shift(), i3.length && a2(i3[0][0], i3[0][1]);
      }
    };
    function Ba(t3, e3) {
      return (function(t4, e4) {
        const r3 = {};
        for (const [n2, s2] of Object.entries(t4.methods)) {
          const i3 = e4(Object.assign(Object.assign({}, s2), { localName: n2, service: t4 }));
          null != i3 && (r3[n2] = i3);
        }
        return r3;
      })(t3, (r3) => {
        switch (r3.kind) {
          case da.MethodKind.Unary:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return async function(n2, s2) {
                var i3, o3;
                const a2 = await t4.unary(e4, r4, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues);
                return null === (i3 = null == s2 ? void 0 : s2.onHeader) || void 0 === i3 || i3.call(s2, a2.header), null === (o3 = null == s2 ? void 0 : s2.onTrailer) || void 0 === o3 || o3.call(s2, a2.trailer), a2.message;
              };
            })(e3, t3, r3);
          case da.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return function(n2, s2) {
                return Ia(t4.stream(e4, r4, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, (function(t5) {
                  return Aa(this, arguments, function* () {
                    yield ga(yield* _a(ha(t5)));
                  });
                })([n2]), null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(e3, t3, r3);
          case da.MethodKind.ClientStreaming:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return async function(n2, s2) {
                var i3, o3, a2, u2, c2, l2;
                const m2 = await t4.stream(e4, r4, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues);
                let d2;
                null === (c2 = null == s2 ? void 0 : s2.onHeader) || void 0 === c2 || c2.call(s2, m2.header);
                let f2 = 0;
                try {
                  for (var p2, h2 = true, g2 = ya(m2.message); !(i3 = (p2 = await g2.next()).done); h2 = true) {
                    u2 = p2.value, h2 = false;
                    d2 = u2, f2++;
                  }
                } catch (t5) {
                  o3 = { error: t5 };
                } finally {
                  try {
                    h2 || i3 || !(a2 = g2.return) || await a2.call(g2);
                  } finally {
                    if (o3) throw o3.error;
                  }
                }
                if (!d2) throw new pa("protocol error: missing response message", ma.Unimplemented);
                if (f2 > 1) throw new pa("protocol error: received extra messages for client streaming method", ma.Unimplemented);
                return null === (l2 = null == s2 ? void 0 : s2.onTrailer) || void 0 === l2 || l2.call(s2, m2.trailer), d2;
              };
            })(e3, t3, r3);
          case da.MethodKind.BiDiStreaming:
            return /* @__PURE__ */ (function(t4, e4, r4) {
              return function(n2, s2) {
                return Ia(t4.stream(e4, r4, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(e3, t3, r3);
          default:
            return null;
        }
      });
    }
    function Ea(t3, e3) {
      return Ba(t3, e3);
    }
    function Ia(t3, e3) {
      const r3 = (function() {
        return Ja(this, arguments, function* () {
          var r4, n2;
          const s2 = yield wa(t3);
          null === (r4 = null == e3 ? void 0 : e3.onHeader) || void 0 === r4 || r4.call(e3, s2.header), yield wa(yield* Sa(ya(s2.message))), null === (n2 = null == e3 ? void 0 : e3.onTrailer) || void 0 === n2 || n2.call(e3, s2.trailer);
        });
      })()[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ next: () => r3.next() }) };
    }
    const { net: Ca } = n(4482);
    function ba() {
      const t3 = o2.cursor.getCursorCreds();
      return new URL(t3?.backendUrl ?? "https://api2.cursor.sh");
    }
    f(na.DNSLookup, async (t3, e3) => (0, a.dnsLookup)({ hostname: t3.hostname ?? ba().hostname, source: t3.source, resolveHostViaSystem: (t4, e4) => Ca.resolveHost(t4, e4) })), f(na.InspectTLSInfo, async (t3, e3) => (0, a.inspectTLSInfo)(ba())), f(na.Http2Ping, async (t3, e3) => (0, a.http2Ping)(ba()));
    var ka = n(7213), va = n(7949), qa = n(6313), Ra = n(7714);
    const Pa = require("os");
    var Ta = n(7996);
    const xa = false;
    var Na = n(8634), Da = n(1933), Ua = n(212), Qa = n(5595);
    Object.freeze({ status: "aborted" });
    function Ma(t3, e3, r3) {
      function n2(r4, n3) {
        if (r4._zod || Object.defineProperty(r4, "_zod", { value: { def: n3, constr: o3, traits: /* @__PURE__ */ new Set() }, enumerable: false }), r4._zod.traits.has(t3)) return;
        r4._zod.traits.add(t3), e3(r4, n3);
        const s3 = o3.prototype, i4 = Object.keys(s3);
        for (let t4 = 0; t4 < i4.length; t4++) {
          const e4 = i4[t4];
          e4 in r4 || (r4[e4] = s3[e4].bind(r4));
        }
      }
      const s2 = r3?.Parent ?? Object;
      class i3 extends s2 {
      }
      function o3(t4) {
        var e4;
        const s3 = r3?.Parent ? new i3() : this;
        n2(s3, t4), (e4 = s3._zod).deferred ?? (e4.deferred = []);
        for (const t5 of s3._zod.deferred) t5();
        return s3;
      }
      return Object.defineProperty(i3, "name", { value: t3 }), Object.defineProperty(o3, "init", { value: n2 }), Object.defineProperty(o3, Symbol.hasInstance, { value: (e4) => !!(r3?.Parent && e4 instanceof r3.Parent) || e4?._zod?.traits?.has(t3) }), Object.defineProperty(o3, "name", { value: t3 }), o3;
    }
    /* @__PURE__ */ Symbol("zod_brand");
    class Oa extends Error {
      constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
      }
    }
    class Fa extends Error {
      constructor(t3) {
        super(`Encountered unidirectional transform during encode: ${t3}`), this.name = "ZodEncodeError";
      }
    }
    const La = {};
    function $a(t3) {
      return t3 && Object.assign(La, t3), La;
    }
    function Ga(t3) {
      const e3 = Object.values(t3).filter((t4) => "number" == typeof t4);
      return Object.entries(t3).filter(([t4, r3]) => -1 === e3.indexOf(+t4)).map(([t4, e4]) => e4);
    }
    function Ha(t3, e3 = "|") {
      return t3.map((t4) => mu(t4)).join(e3);
    }
    function Ka(t3, e3) {
      return "bigint" == typeof e3 ? e3.toString() : e3;
    }
    function Va(t3) {
      return { get value() {
        {
          const e3 = t3();
          return Object.defineProperty(this, "value", { value: e3 }), e3;
        }
      } };
    }
    function za(t3) {
      return null == t3;
    }
    function Wa(t3) {
      const e3 = t3.startsWith("^") ? 1 : 0, r3 = t3.endsWith("$") ? t3.length - 1 : t3.length;
      return t3.slice(e3, r3);
    }
    const Ya = /* @__PURE__ */ Symbol("evaluating");
    function ja(t3, e3, r3) {
      let n2;
      Object.defineProperty(t3, e3, { get() {
        if (n2 !== Ya) return void 0 === n2 && (n2 = Ya, n2 = r3()), n2;
      }, set(r4) {
        Object.defineProperty(t3, e3, { value: r4 });
      }, configurable: true });
    }
    function Xa(t3, e3, r3) {
      Object.defineProperty(t3, e3, { value: r3, writable: true, enumerable: true, configurable: true });
    }
    function Za(...t3) {
      const e3 = {};
      for (const r3 of t3) {
        const t4 = Object.getOwnPropertyDescriptors(r3);
        Object.assign(e3, t4);
      }
      return Object.defineProperties({}, e3);
    }
    function tu(t3) {
      return JSON.stringify(t3);
    }
    const eu = "captureStackTrace" in Error ? Error.captureStackTrace : (...t3) => {
    };
    function ru(t3) {
      return "object" == typeof t3 && null !== t3 && !Array.isArray(t3);
    }
    const nu = Va(() => {
      if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return false;
      try {
        return new Function(""), true;
      } catch (t3) {
        return false;
      }
    });
    function su(t3) {
      if (false === ru(t3)) return false;
      const e3 = t3.constructor;
      if (void 0 === e3) return true;
      if ("function" != typeof e3) return true;
      const r3 = e3.prototype;
      return false !== ru(r3) && false !== Object.prototype.hasOwnProperty.call(r3, "isPrototypeOf");
    }
    function iu(t3) {
      return su(t3) ? { ...t3 } : Array.isArray(t3) ? [...t3] : t3;
    }
    const ou = /* @__PURE__ */ new Set(["string", "number", "symbol"]), au = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
    function uu(t3) {
      return t3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function cu(t3, e3, r3) {
      const n2 = new t3._zod.constr(e3 ?? t3._zod.def);
      return e3 && !r3?.parent || (n2._zod.parent = t3), n2;
    }
    function lu(t3) {
      const e3 = t3;
      if (!e3) return {};
      if ("string" == typeof e3) return { error: () => e3 };
      if (void 0 !== e3?.message) {
        if (void 0 !== e3?.error) throw new Error("Cannot specify both `message` and `error` params");
        e3.error = e3.message;
      }
      return delete e3.message, "string" == typeof e3.error ? { ...e3, error: () => e3.error } : e3;
    }
    function mu(t3) {
      return "bigint" == typeof t3 ? t3.toString() + "n" : "string" == typeof t3 ? `"${t3}"` : `${t3}`;
    }
    const du = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, fu = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
    function pu(t3, e3 = 0) {
      if (true === t3.aborted) return true;
      for (let r3 = e3; r3 < t3.issues.length; r3++) if (true !== t3.issues[r3]?.continue) return true;
      return false;
    }
    function hu(t3, e3) {
      return e3.map((e4) => {
        var r3;
        return (r3 = e4).path ?? (r3.path = []), e4.path.unshift(t3), e4;
      });
    }
    function gu(t3) {
      return "string" == typeof t3 ? t3 : t3?.message;
    }
    function Au(t3, e3, r3) {
      const n2 = { ...t3, path: t3.path ?? [] };
      if (!t3.message) {
        const s2 = gu(t3.inst?._zod.def?.error?.(t3)) ?? gu(e3?.error?.(t3)) ?? gu(r3.customError?.(t3)) ?? gu(r3.localeError?.(t3)) ?? "Invalid input";
        n2.message = s2;
      }
      return delete n2.inst, delete n2.continue, e3?.reportInput || delete n2.input, n2;
    }
    function _u(t3) {
      return t3 instanceof Set ? "set" : t3 instanceof Map ? "map" : t3 instanceof File ? "file" : "unknown";
    }
    function yu(t3) {
      return Array.isArray(t3) ? "array" : "string" == typeof t3 ? "string" : "unknown";
    }
    function wu(...t3) {
      const [e3, r3, n2] = t3;
      return "string" == typeof e3 ? { message: e3, code: "custom", input: r3, inst: n2 } : { ...e3 };
    }
    const Su = (t3, e3) => {
      t3.name = "$ZodError", Object.defineProperty(t3, "_zod", { value: t3._zod, enumerable: false }), Object.defineProperty(t3, "issues", { value: e3, enumerable: false }), t3.message = JSON.stringify(e3, Ka, 2), Object.defineProperty(t3, "toString", { value: () => t3.message, enumerable: false });
    }, Ju = Ma("$ZodError", Su), Bu = Ma("$ZodError", Su, { Parent: Error });
    const Eu = (t3) => (e3, r3, n2, s2) => {
      const i3 = n2 ? Object.assign(n2, { async: false }) : { async: false }, o3 = e3._zod.run({ value: r3, issues: [] }, i3);
      if (o3 instanceof Promise) throw new Oa();
      if (o3.issues.length) {
        const e4 = new (s2?.Err ?? t3)(o3.issues.map((t4) => Au(t4, i3, $a())));
        throw eu(e4, s2?.callee), e4;
      }
      return o3.value;
    }, Iu = Eu(Bu), Cu = (t3) => async (e3, r3, n2, s2) => {
      const i3 = n2 ? Object.assign(n2, { async: true }) : { async: true };
      let o3 = e3._zod.run({ value: r3, issues: [] }, i3);
      if (o3 instanceof Promise && (o3 = await o3), o3.issues.length) {
        const e4 = new (s2?.Err ?? t3)(o3.issues.map((t4) => Au(t4, i3, $a())));
        throw eu(e4, s2?.callee), e4;
      }
      return o3.value;
    }, bu = Cu(Bu), ku = (t3) => (e3, r3, n2) => {
      const s2 = n2 ? { ...n2, async: false } : { async: false }, i3 = e3._zod.run({ value: r3, issues: [] }, s2);
      if (i3 instanceof Promise) throw new Oa();
      return i3.issues.length ? { success: false, error: new (t3 ?? Ju)(i3.issues.map((t4) => Au(t4, s2, $a()))) } : { success: true, data: i3.value };
    }, vu = ku(Bu), qu = (t3) => async (e3, r3, n2) => {
      const s2 = n2 ? Object.assign(n2, { async: true }) : { async: true };
      let i3 = e3._zod.run({ value: r3, issues: [] }, s2);
      return i3 instanceof Promise && (i3 = await i3), i3.issues.length ? { success: false, error: new t3(i3.issues.map((t4) => Au(t4, s2, $a()))) } : { success: true, data: i3.value };
    }, Ru = qu(Bu), Pu = (t3) => (e3, r3, n2) => {
      const s2 = n2 ? Object.assign(n2, { direction: "backward" }) : { direction: "backward" };
      return Eu(t3)(e3, r3, s2);
    }, Tu = (t3) => (e3, r3, n2) => Eu(t3)(e3, r3, n2), xu = (t3) => async (e3, r3, n2) => {
      const s2 = n2 ? Object.assign(n2, { direction: "backward" }) : { direction: "backward" };
      return Cu(t3)(e3, r3, s2);
    }, Nu = (t3) => async (e3, r3, n2) => Cu(t3)(e3, r3, n2), Du = (t3) => (e3, r3, n2) => {
      const s2 = n2 ? Object.assign(n2, { direction: "backward" }) : { direction: "backward" };
      return ku(t3)(e3, r3, s2);
    }, Uu = (t3) => (e3, r3, n2) => ku(t3)(e3, r3, n2), Qu = (t3) => async (e3, r3, n2) => {
      const s2 = n2 ? Object.assign(n2, { direction: "backward" }) : { direction: "backward" };
      return qu(t3)(e3, r3, s2);
    }, Mu = (t3) => async (e3, r3, n2) => qu(t3)(e3, r3, n2), Ou = /^[cC][^\s-]{8,}$/, Fu = /^[0-9a-z]+$/, Lu = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, $u = /^[0-9a-vA-V]{20}$/, Gu = /^[A-Za-z0-9]{27}$/, Hu = /^[a-zA-Z0-9_-]{21}$/, Ku = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Vu = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, zu = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Wu = (t3) => t3 ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t3}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Yu = Wu(4), ju = Wu(6), Xu = Wu(7), Zu = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, tc = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ec = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, rc = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, nc = rc, sc = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ic = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    function oc() {
      return new RegExp(ic, "u");
    }
    const ac = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, uc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, cc = (t3) => {
      const e3 = uu(t3 ?? ":");
      return new RegExp(`^(?:[0-9A-F]{2}${e3}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${e3}){5}[0-9a-f]{2}$`);
    }, lc = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, mc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, dc = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, fc = /^[A-Za-z0-9_-]*$/, pc = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, hc = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, gc = /^\+[1-9]\d{6,14}$/, Ac = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", _c = new RegExp(`^${Ac}$`);
    function yc(t3) {
      const e3 = "(?:[01]\\d|2[0-3]):[0-5]\\d";
      return "number" == typeof t3.precision ? -1 === t3.precision ? `${e3}` : 0 === t3.precision ? `${e3}:[0-5]\\d` : `${e3}:[0-5]\\d\\.\\d{${t3.precision}}` : `${e3}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function wc(t3) {
      return new RegExp(`^${yc(t3)}$`);
    }
    function Sc(t3) {
      const e3 = yc({ precision: t3.precision }), r3 = ["Z"];
      t3.local && r3.push(""), t3.offset && r3.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      const n2 = `${e3}(?:${r3.join("|")})`;
      return new RegExp(`^${Ac}T(?:${n2})$`);
    }
    const Jc = (t3) => new RegExp(`^${t3 ? `[\\s\\S]{${t3?.minimum ?? 0},${t3?.maximum ?? ""}}` : "[\\s\\S]*"}$`), Bc = /^-?\d+n?$/, Ec = /^-?\d+$/, Ic = /^-?\d+(?:\.\d+)?$/, Cc = /^(?:true|false)$/i, bc = /^null$/i, kc = /^undefined$/i, vc = /^[^A-Z]*$/, qc = /^[^a-z]*$/, Rc = /^[0-9a-fA-F]*$/;
    function Pc(t3, e3) {
      return new RegExp(`^[A-Za-z0-9+/]{${t3}}${e3}$`);
    }
    function Tc(t3) {
      return new RegExp(`^[A-Za-z0-9_-]{${t3}}$`);
    }
    const xc = /^[0-9a-fA-F]{32}$/, Nc = Pc(22, "=="), Dc = Tc(22), Uc = /^[0-9a-fA-F]{40}$/, Qc = Pc(27, "="), Mc = Tc(27), Oc = /^[0-9a-fA-F]{64}$/, Fc = Pc(43, "="), Lc = Tc(43), $c = /^[0-9a-fA-F]{96}$/, Gc = Pc(64, ""), Hc = Tc(64), Kc = /^[0-9a-fA-F]{128}$/, Vc = Pc(86, "=="), zc = Tc(86), Wc = Ma("$ZodCheck", (t3, e3) => {
      var r3;
      t3._zod ?? (t3._zod = {}), t3._zod.def = e3, (r3 = t3._zod).onattach ?? (r3.onattach = []);
    }), Yc = { number: "number", bigint: "bigint", object: "date" }, jc = Ma("$ZodCheckLessThan", (t3, e3) => {
      Wc.init(t3, e3);
      const r3 = Yc[typeof e3.value];
      t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag, n2 = (e3.inclusive ? r4.maximum : r4.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        e3.value < n2 && (e3.inclusive ? r4.maximum = e3.value : r4.exclusiveMaximum = e3.value);
      }), t3._zod.check = (n2) => {
        (e3.inclusive ? n2.value <= e3.value : n2.value < e3.value) || n2.issues.push({ origin: r3, code: "too_big", maximum: "object" == typeof e3.value ? e3.value.getTime() : e3.value, input: n2.value, inclusive: e3.inclusive, inst: t3, continue: !e3.abort });
      };
    }), Xc = Ma("$ZodCheckGreaterThan", (t3, e3) => {
      Wc.init(t3, e3);
      const r3 = Yc[typeof e3.value];
      t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag, n2 = (e3.inclusive ? r4.minimum : r4.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        e3.value > n2 && (e3.inclusive ? r4.minimum = e3.value : r4.exclusiveMinimum = e3.value);
      }), t3._zod.check = (n2) => {
        (e3.inclusive ? n2.value >= e3.value : n2.value > e3.value) || n2.issues.push({ origin: r3, code: "too_small", minimum: "object" == typeof e3.value ? e3.value.getTime() : e3.value, input: n2.value, inclusive: e3.inclusive, inst: t3, continue: !e3.abort });
      };
    }), Zc = Ma("$ZodCheckMultipleOf", (t3, e3) => {
      Wc.init(t3, e3), t3._zod.onattach.push((t4) => {
        var r3;
        (r3 = t4._zod.bag).multipleOf ?? (r3.multipleOf = e3.value);
      }), t3._zod.check = (r3) => {
        if (typeof r3.value != typeof e3.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        ("bigint" == typeof r3.value ? r3.value % e3.value === BigInt(0) : 0 === (function(t4, e4) {
          const r4 = (t4.toString().split(".")[1] || "").length, n2 = e4.toString();
          let s2 = (n2.split(".")[1] || "").length;
          if (0 === s2 && /\d?e-\d?/.test(n2)) {
            const t5 = n2.match(/\d?e-(\d?)/);
            t5?.[1] && (s2 = Number.parseInt(t5[1]));
          }
          const i3 = r4 > s2 ? r4 : s2;
          return Number.parseInt(t4.toFixed(i3).replace(".", "")) % Number.parseInt(e4.toFixed(i3).replace(".", "")) / 10 ** i3;
        })(r3.value, e3.value)) || r3.issues.push({ origin: typeof r3.value, code: "not_multiple_of", divisor: e3.value, input: r3.value, inst: t3, continue: !e3.abort });
      };
    }), tl = Ma("$ZodCheckNumberFormat", (t3, e3) => {
      Wc.init(t3, e3), e3.format = e3.format || "float64";
      const r3 = e3.format?.includes("int"), n2 = r3 ? "int" : "number", [s2, i3] = du[e3.format];
      t3._zod.onattach.push((t4) => {
        const n3 = t4._zod.bag;
        n3.format = e3.format, n3.minimum = s2, n3.maximum = i3, r3 && (n3.pattern = Ec);
      }), t3._zod.check = (o3) => {
        const a2 = o3.value;
        if (r3) {
          if (!Number.isInteger(a2)) return void o3.issues.push({ expected: n2, format: e3.format, code: "invalid_type", continue: false, input: a2, inst: t3 });
          if (!Number.isSafeInteger(a2)) return void (a2 > 0 ? o3.issues.push({ input: a2, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: t3, origin: n2, inclusive: true, continue: !e3.abort }) : o3.issues.push({ input: a2, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: t3, origin: n2, inclusive: true, continue: !e3.abort }));
        }
        a2 < s2 && o3.issues.push({ origin: "number", input: a2, code: "too_small", minimum: s2, inclusive: true, inst: t3, continue: !e3.abort }), a2 > i3 && o3.issues.push({ origin: "number", input: a2, code: "too_big", maximum: i3, inclusive: true, inst: t3, continue: !e3.abort });
      };
    }), el = Ma("$ZodCheckBigIntFormat", (t3, e3) => {
      Wc.init(t3, e3);
      const [r3, n2] = fu[e3.format];
      t3._zod.onattach.push((t4) => {
        const s2 = t4._zod.bag;
        s2.format = e3.format, s2.minimum = r3, s2.maximum = n2;
      }), t3._zod.check = (s2) => {
        const i3 = s2.value;
        i3 < r3 && s2.issues.push({ origin: "bigint", input: i3, code: "too_small", minimum: r3, inclusive: true, inst: t3, continue: !e3.abort }), i3 > n2 && s2.issues.push({ origin: "bigint", input: i3, code: "too_big", maximum: n2, inclusive: true, inst: t3, continue: !e3.abort });
      };
    }), rl = Ma("$ZodCheckMaxSize", (t3, e3) => {
      var r3;
      Wc.init(t3, e3), (r3 = t3._zod.def).when ?? (r3.when = (t4) => {
        const e4 = t4.value;
        return !za(e4) && void 0 !== e4.size;
      }), t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        e3.maximum < r4 && (t4._zod.bag.maximum = e3.maximum);
      }), t3._zod.check = (r4) => {
        const n2 = r4.value;
        n2.size <= e3.maximum || r4.issues.push({ origin: _u(n2), code: "too_big", maximum: e3.maximum, inclusive: true, input: n2, inst: t3, continue: !e3.abort });
      };
    }), nl = Ma("$ZodCheckMinSize", (t3, e3) => {
      var r3;
      Wc.init(t3, e3), (r3 = t3._zod.def).when ?? (r3.when = (t4) => {
        const e4 = t4.value;
        return !za(e4) && void 0 !== e4.size;
      }), t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        e3.minimum > r4 && (t4._zod.bag.minimum = e3.minimum);
      }), t3._zod.check = (r4) => {
        const n2 = r4.value;
        n2.size >= e3.minimum || r4.issues.push({ origin: _u(n2), code: "too_small", minimum: e3.minimum, inclusive: true, input: n2, inst: t3, continue: !e3.abort });
      };
    }), sl = Ma("$ZodCheckSizeEquals", (t3, e3) => {
      var r3;
      Wc.init(t3, e3), (r3 = t3._zod.def).when ?? (r3.when = (t4) => {
        const e4 = t4.value;
        return !za(e4) && void 0 !== e4.size;
      }), t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag;
        r4.minimum = e3.size, r4.maximum = e3.size, r4.size = e3.size;
      }), t3._zod.check = (r4) => {
        const n2 = r4.value, s2 = n2.size;
        if (s2 === e3.size) return;
        const i3 = s2 > e3.size;
        r4.issues.push({ origin: _u(n2), ...i3 ? { code: "too_big", maximum: e3.size } : { code: "too_small", minimum: e3.size }, inclusive: true, exact: true, input: r4.value, inst: t3, continue: !e3.abort });
      };
    }), il = Ma("$ZodCheckMaxLength", (t3, e3) => {
      var r3;
      Wc.init(t3, e3), (r3 = t3._zod.def).when ?? (r3.when = (t4) => {
        const e4 = t4.value;
        return !za(e4) && void 0 !== e4.length;
      }), t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        e3.maximum < r4 && (t4._zod.bag.maximum = e3.maximum);
      }), t3._zod.check = (r4) => {
        const n2 = r4.value;
        if (n2.length <= e3.maximum) return;
        const s2 = yu(n2);
        r4.issues.push({ origin: s2, code: "too_big", maximum: e3.maximum, inclusive: true, input: n2, inst: t3, continue: !e3.abort });
      };
    }), ol = Ma("$ZodCheckMinLength", (t3, e3) => {
      var r3;
      Wc.init(t3, e3), (r3 = t3._zod.def).when ?? (r3.when = (t4) => {
        const e4 = t4.value;
        return !za(e4) && void 0 !== e4.length;
      }), t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        e3.minimum > r4 && (t4._zod.bag.minimum = e3.minimum);
      }), t3._zod.check = (r4) => {
        const n2 = r4.value;
        if (n2.length >= e3.minimum) return;
        const s2 = yu(n2);
        r4.issues.push({ origin: s2, code: "too_small", minimum: e3.minimum, inclusive: true, input: n2, inst: t3, continue: !e3.abort });
      };
    }), al = Ma("$ZodCheckLengthEquals", (t3, e3) => {
      var r3;
      Wc.init(t3, e3), (r3 = t3._zod.def).when ?? (r3.when = (t4) => {
        const e4 = t4.value;
        return !za(e4) && void 0 !== e4.length;
      }), t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag;
        r4.minimum = e3.length, r4.maximum = e3.length, r4.length = e3.length;
      }), t3._zod.check = (r4) => {
        const n2 = r4.value, s2 = n2.length;
        if (s2 === e3.length) return;
        const i3 = yu(n2), o3 = s2 > e3.length;
        r4.issues.push({ origin: i3, ...o3 ? { code: "too_big", maximum: e3.length } : { code: "too_small", minimum: e3.length }, inclusive: true, exact: true, input: r4.value, inst: t3, continue: !e3.abort });
      };
    }), ul = Ma("$ZodCheckStringFormat", (t3, e3) => {
      var r3, n2;
      Wc.init(t3, e3), t3._zod.onattach.push((t4) => {
        const r4 = t4._zod.bag;
        r4.format = e3.format, e3.pattern && (r4.patterns ?? (r4.patterns = /* @__PURE__ */ new Set()), r4.patterns.add(e3.pattern));
      }), e3.pattern ? (r3 = t3._zod).check ?? (r3.check = (r4) => {
        e3.pattern.lastIndex = 0, e3.pattern.test(r4.value) || r4.issues.push({ origin: "string", code: "invalid_format", format: e3.format, input: r4.value, ...e3.pattern ? { pattern: e3.pattern.toString() } : {}, inst: t3, continue: !e3.abort });
      }) : (n2 = t3._zod).check ?? (n2.check = () => {
      });
    }), cl = Ma("$ZodCheckRegex", (t3, e3) => {
      ul.init(t3, e3), t3._zod.check = (r3) => {
        e3.pattern.lastIndex = 0, e3.pattern.test(r3.value) || r3.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: r3.value, pattern: e3.pattern.toString(), inst: t3, continue: !e3.abort });
      };
    }), ll = Ma("$ZodCheckLowerCase", (t3, e3) => {
      e3.pattern ?? (e3.pattern = vc), ul.init(t3, e3);
    }), ml = Ma("$ZodCheckUpperCase", (t3, e3) => {
      e3.pattern ?? (e3.pattern = qc), ul.init(t3, e3);
    }), dl = Ma("$ZodCheckIncludes", (t3, e3) => {
      Wc.init(t3, e3);
      const r3 = uu(e3.includes), n2 = new RegExp("number" == typeof e3.position ? `^.{${e3.position}}${r3}` : r3);
      e3.pattern = n2, t3._zod.onattach.push((t4) => {
        const e4 = t4._zod.bag;
        e4.patterns ?? (e4.patterns = /* @__PURE__ */ new Set()), e4.patterns.add(n2);
      }), t3._zod.check = (r4) => {
        r4.value.includes(e3.includes, e3.position) || r4.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: e3.includes, input: r4.value, inst: t3, continue: !e3.abort });
      };
    }), fl = Ma("$ZodCheckStartsWith", (t3, e3) => {
      Wc.init(t3, e3);
      const r3 = new RegExp(`^${uu(e3.prefix)}.*`);
      e3.pattern ?? (e3.pattern = r3), t3._zod.onattach.push((t4) => {
        const e4 = t4._zod.bag;
        e4.patterns ?? (e4.patterns = /* @__PURE__ */ new Set()), e4.patterns.add(r3);
      }), t3._zod.check = (r4) => {
        r4.value.startsWith(e3.prefix) || r4.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: e3.prefix, input: r4.value, inst: t3, continue: !e3.abort });
      };
    }), pl = Ma("$ZodCheckEndsWith", (t3, e3) => {
      Wc.init(t3, e3);
      const r3 = new RegExp(`.*${uu(e3.suffix)}$`);
      e3.pattern ?? (e3.pattern = r3), t3._zod.onattach.push((t4) => {
        const e4 = t4._zod.bag;
        e4.patterns ?? (e4.patterns = /* @__PURE__ */ new Set()), e4.patterns.add(r3);
      }), t3._zod.check = (r4) => {
        r4.value.endsWith(e3.suffix) || r4.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: e3.suffix, input: r4.value, inst: t3, continue: !e3.abort });
      };
    });
    function hl(t3, e3, r3) {
      t3.issues.length && e3.issues.push(...hu(r3, t3.issues));
    }
    const gl = Ma("$ZodCheckProperty", (t3, e3) => {
      Wc.init(t3, e3), t3._zod.check = (t4) => {
        const r3 = e3.schema._zod.run({ value: t4.value[e3.property], issues: [] }, {});
        if (r3 instanceof Promise) return r3.then((r4) => hl(r4, t4, e3.property));
        hl(r3, t4, e3.property);
      };
    }), Al = Ma("$ZodCheckMimeType", (t3, e3) => {
      Wc.init(t3, e3);
      const r3 = new Set(e3.mime);
      t3._zod.onattach.push((t4) => {
        t4._zod.bag.mime = e3.mime;
      }), t3._zod.check = (n2) => {
        r3.has(n2.value.type) || n2.issues.push({ code: "invalid_value", values: e3.mime, input: n2.value.type, inst: t3, continue: !e3.abort });
      };
    }), _l = Ma("$ZodCheckOverwrite", (t3, e3) => {
      Wc.init(t3, e3), t3._zod.check = (t4) => {
        t4.value = e3.tx(t4.value);
      };
    });
    class yl {
      constructor(t3 = []) {
        this.content = [], this.indent = 0, this && (this.args = t3);
      }
      indented(t3) {
        this.indent += 1, t3(this), this.indent -= 1;
      }
      write(t3) {
        if ("function" == typeof t3) return t3(this, { execution: "sync" }), void t3(this, { execution: "async" });
        const e3 = t3.split("\n").filter((t4) => t4), r3 = Math.min(...e3.map((t4) => t4.length - t4.trimStart().length)), n2 = e3.map((t4) => t4.slice(r3)).map((t4) => " ".repeat(2 * this.indent) + t4);
        for (const t4 of n2) this.content.push(t4);
      }
      compile() {
        const t3 = Function, e3 = this?.args;
        return new t3(...e3, [...(this?.content ?? [""]).map((t4) => `  ${t4}`)].join("\n"));
      }
    }
    const wl = { major: 4, minor: 3, patch: 6 }, Sl = Ma("$ZodType", (t3, e3) => {
      var r3;
      t3 ?? (t3 = {}), t3._zod.def = e3, t3._zod.bag = t3._zod.bag || {}, t3._zod.version = wl;
      const n2 = [...t3._zod.def.checks ?? []];
      t3._zod.traits.has("$ZodCheck") && n2.unshift(t3);
      for (const e4 of n2) for (const r4 of e4._zod.onattach) r4(t3);
      if (0 === n2.length) (r3 = t3._zod).deferred ?? (r3.deferred = []), t3._zod.deferred?.push(() => {
        t3._zod.run = t3._zod.parse;
      });
      else {
        const e4 = (t4, e5, r5) => {
          let n3, s2 = pu(t4);
          for (const i3 of e5) {
            if (i3._zod.def.when) {
              if (!i3._zod.def.when(t4)) continue;
            } else if (s2) continue;
            const e6 = t4.issues.length, o3 = i3._zod.check(t4);
            if (o3 instanceof Promise && false === r5?.async) throw new Oa();
            if (n3 || o3 instanceof Promise) n3 = (n3 ?? Promise.resolve()).then(async () => {
              await o3;
              t4.issues.length !== e6 && (s2 || (s2 = pu(t4, e6)));
            });
            else {
              if (t4.issues.length === e6) continue;
              s2 || (s2 = pu(t4, e6));
            }
          }
          return n3 ? n3.then(() => t4) : t4;
        }, r4 = (r5, s2, i3) => {
          if (pu(r5)) return r5.aborted = true, r5;
          const o3 = e4(s2, n2, i3);
          if (o3 instanceof Promise) {
            if (false === i3.async) throw new Oa();
            return o3.then((e5) => t3._zod.parse(e5, i3));
          }
          return t3._zod.parse(o3, i3);
        };
        t3._zod.run = (s2, i3) => {
          if (i3.skipChecks) return t3._zod.parse(s2, i3);
          if ("backward" === i3.direction) {
            const e5 = t3._zod.parse({ value: s2.value, issues: [] }, { ...i3, skipChecks: true });
            return e5 instanceof Promise ? e5.then((t4) => r4(t4, s2, i3)) : r4(e5, s2, i3);
          }
          const o3 = t3._zod.parse(s2, i3);
          if (o3 instanceof Promise) {
            if (false === i3.async) throw new Oa();
            return o3.then((t4) => e4(t4, n2, i3));
          }
          return e4(o3, n2, i3);
        };
      }
      ja(t3, "~standard", () => ({ validate: (e4) => {
        try {
          const r4 = vu(t3, e4);
          return r4.success ? { value: r4.data } : { issues: r4.error?.issues };
        } catch (r4) {
          return Ru(t3, e4).then((t4) => t4.success ? { value: t4.data } : { issues: t4.error?.issues });
        }
      }, vendor: "zod", version: 1 }));
    }), Jl = Ma("$ZodString", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.pattern = [...t3?._zod.bag?.patterns ?? []].pop() ?? Jc(t3._zod.bag), t3._zod.parse = (r3, n2) => {
        if (e3.coerce) try {
          r3.value = String(r3.value);
        } catch (n3) {
        }
        return "string" == typeof r3.value || r3.issues.push({ expected: "string", code: "invalid_type", input: r3.value, inst: t3 }), r3;
      };
    }), Bl = Ma("$ZodStringFormat", (t3, e3) => {
      ul.init(t3, e3), Jl.init(t3, e3);
    }), El = Ma("$ZodGUID", (t3, e3) => {
      e3.pattern ?? (e3.pattern = zu), Bl.init(t3, e3);
    }), Il = Ma("$ZodUUID", (t3, e3) => {
      if (e3.version) {
        const t4 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[e3.version];
        if (void 0 === t4) throw new Error(`Invalid UUID version: "${e3.version}"`);
        e3.pattern ?? (e3.pattern = Wu(t4));
      } else e3.pattern ?? (e3.pattern = Wu());
      Bl.init(t3, e3);
    }), Cl = Ma("$ZodEmail", (t3, e3) => {
      e3.pattern ?? (e3.pattern = Zu), Bl.init(t3, e3);
    }), bl = Ma("$ZodURL", (t3, e3) => {
      Bl.init(t3, e3), t3._zod.check = (r3) => {
        try {
          const n2 = r3.value.trim(), s2 = new URL(n2);
          return e3.hostname && (e3.hostname.lastIndex = 0, e3.hostname.test(s2.hostname) || r3.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: e3.hostname.source, input: r3.value, inst: t3, continue: !e3.abort })), e3.protocol && (e3.protocol.lastIndex = 0, e3.protocol.test(s2.protocol.endsWith(":") ? s2.protocol.slice(0, -1) : s2.protocol) || r3.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: e3.protocol.source, input: r3.value, inst: t3, continue: !e3.abort })), void (e3.normalize ? r3.value = s2.href : r3.value = n2);
        } catch (n2) {
          r3.issues.push({ code: "invalid_format", format: "url", input: r3.value, inst: t3, continue: !e3.abort });
        }
      };
    }), kl = Ma("$ZodEmoji", (t3, e3) => {
      e3.pattern ?? (e3.pattern = oc()), Bl.init(t3, e3);
    }), vl = Ma("$ZodNanoID", (t3, e3) => {
      e3.pattern ?? (e3.pattern = Hu), Bl.init(t3, e3);
    }), ql = Ma("$ZodCUID", (t3, e3) => {
      e3.pattern ?? (e3.pattern = Ou), Bl.init(t3, e3);
    }), Rl = Ma("$ZodCUID2", (t3, e3) => {
      e3.pattern ?? (e3.pattern = Fu), Bl.init(t3, e3);
    }), Pl = Ma("$ZodULID", (t3, e3) => {
      e3.pattern ?? (e3.pattern = Lu), Bl.init(t3, e3);
    }), Tl = Ma("$ZodXID", (t3, e3) => {
      e3.pattern ?? (e3.pattern = $u), Bl.init(t3, e3);
    }), xl = Ma("$ZodKSUID", (t3, e3) => {
      e3.pattern ?? (e3.pattern = Gu), Bl.init(t3, e3);
    }), Nl = Ma("$ZodISODateTime", (t3, e3) => {
      e3.pattern ?? (e3.pattern = Sc(e3)), Bl.init(t3, e3);
    }), Dl = Ma("$ZodISODate", (t3, e3) => {
      e3.pattern ?? (e3.pattern = _c), Bl.init(t3, e3);
    }), Ul = Ma("$ZodISOTime", (t3, e3) => {
      e3.pattern ?? (e3.pattern = wc(e3)), Bl.init(t3, e3);
    }), Ql = Ma("$ZodISODuration", (t3, e3) => {
      e3.pattern ?? (e3.pattern = Ku), Bl.init(t3, e3);
    }), Ml = Ma("$ZodIPv4", (t3, e3) => {
      e3.pattern ?? (e3.pattern = ac), Bl.init(t3, e3), t3._zod.bag.format = "ipv4";
    }), Ol = Ma("$ZodIPv6", (t3, e3) => {
      e3.pattern ?? (e3.pattern = uc), Bl.init(t3, e3), t3._zod.bag.format = "ipv6", t3._zod.check = (r3) => {
        try {
          new URL(`http://[${r3.value}]`);
        } catch {
          r3.issues.push({ code: "invalid_format", format: "ipv6", input: r3.value, inst: t3, continue: !e3.abort });
        }
      };
    }), Fl = Ma("$ZodMAC", (t3, e3) => {
      e3.pattern ?? (e3.pattern = cc(e3.delimiter)), Bl.init(t3, e3), t3._zod.bag.format = "mac";
    }), Ll = Ma("$ZodCIDRv4", (t3, e3) => {
      e3.pattern ?? (e3.pattern = lc), Bl.init(t3, e3);
    }), $l = Ma("$ZodCIDRv6", (t3, e3) => {
      e3.pattern ?? (e3.pattern = mc), Bl.init(t3, e3), t3._zod.check = (r3) => {
        const n2 = r3.value.split("/");
        try {
          if (2 !== n2.length) throw new Error();
          const [t4, e4] = n2;
          if (!e4) throw new Error();
          const r4 = Number(e4);
          if (`${r4}` !== e4) throw new Error();
          if (r4 < 0 || r4 > 128) throw new Error();
          new URL(`http://[${t4}]`);
        } catch {
          r3.issues.push({ code: "invalid_format", format: "cidrv6", input: r3.value, inst: t3, continue: !e3.abort });
        }
      };
    });
    function Gl(t3) {
      if ("" === t3) return true;
      if (t3.length % 4 != 0) return false;
      try {
        return atob(t3), true;
      } catch {
        return false;
      }
    }
    const Hl = Ma("$ZodBase64", (t3, e3) => {
      e3.pattern ?? (e3.pattern = dc), Bl.init(t3, e3), t3._zod.bag.contentEncoding = "base64", t3._zod.check = (r3) => {
        Gl(r3.value) || r3.issues.push({ code: "invalid_format", format: "base64", input: r3.value, inst: t3, continue: !e3.abort });
      };
    });
    const Kl = Ma("$ZodBase64URL", (t3, e3) => {
      e3.pattern ?? (e3.pattern = fc), Bl.init(t3, e3), t3._zod.bag.contentEncoding = "base64url", t3._zod.check = (r3) => {
        (function(t4) {
          if (!fc.test(t4)) return false;
          const e4 = t4.replace(/[-_]/g, (t5) => "-" === t5 ? "+" : "/");
          return Gl(e4.padEnd(4 * Math.ceil(e4.length / 4), "="));
        })(r3.value) || r3.issues.push({ code: "invalid_format", format: "base64url", input: r3.value, inst: t3, continue: !e3.abort });
      };
    }), Vl = Ma("$ZodE164", (t3, e3) => {
      e3.pattern ?? (e3.pattern = gc), Bl.init(t3, e3);
    });
    const zl = Ma("$ZodJWT", (t3, e3) => {
      Bl.init(t3, e3), t3._zod.check = (r3) => {
        (function(t4, e4 = null) {
          try {
            const r4 = t4.split(".");
            if (3 !== r4.length) return false;
            const [n2] = r4;
            if (!n2) return false;
            const s2 = JSON.parse(atob(n2));
            return !("typ" in s2 && "JWT" !== s2?.typ || !s2.alg || e4 && (!("alg" in s2) || s2.alg !== e4));
          } catch {
            return false;
          }
        })(r3.value, e3.alg) || r3.issues.push({ code: "invalid_format", format: "jwt", input: r3.value, inst: t3, continue: !e3.abort });
      };
    }), Wl = Ma("$ZodCustomStringFormat", (t3, e3) => {
      Bl.init(t3, e3), t3._zod.check = (r3) => {
        e3.fn(r3.value) || r3.issues.push({ code: "invalid_format", format: e3.format, input: r3.value, inst: t3, continue: !e3.abort });
      };
    }), Yl = Ma("$ZodNumber", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.pattern = t3._zod.bag.pattern ?? Ic, t3._zod.parse = (r3, n2) => {
        if (e3.coerce) try {
          r3.value = Number(r3.value);
        } catch (t4) {
        }
        const s2 = r3.value;
        if ("number" == typeof s2 && !Number.isNaN(s2) && Number.isFinite(s2)) return r3;
        const i3 = "number" == typeof s2 ? Number.isNaN(s2) ? "NaN" : Number.isFinite(s2) ? void 0 : "Infinity" : void 0;
        return r3.issues.push({ expected: "number", code: "invalid_type", input: s2, inst: t3, ...i3 ? { received: i3 } : {} }), r3;
      };
    }), jl = Ma("$ZodNumberFormat", (t3, e3) => {
      tl.init(t3, e3), Yl.init(t3, e3);
    }), Xl = Ma("$ZodBoolean", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.pattern = Cc, t3._zod.parse = (r3, n2) => {
        if (e3.coerce) try {
          r3.value = Boolean(r3.value);
        } catch (t4) {
        }
        const s2 = r3.value;
        return "boolean" == typeof s2 || r3.issues.push({ expected: "boolean", code: "invalid_type", input: s2, inst: t3 }), r3;
      };
    }), Zl = Ma("$ZodBigInt", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.pattern = Bc, t3._zod.parse = (r3, n2) => {
        if (e3.coerce) try {
          r3.value = BigInt(r3.value);
        } catch (t4) {
        }
        return "bigint" == typeof r3.value || r3.issues.push({ expected: "bigint", code: "invalid_type", input: r3.value, inst: t3 }), r3;
      };
    }), tm = Ma("$ZodBigIntFormat", (t3, e3) => {
      el.init(t3, e3), Zl.init(t3, e3);
    }), em = Ma("$ZodSymbol", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (e4, r3) => {
        const n2 = e4.value;
        return "symbol" == typeof n2 || e4.issues.push({ expected: "symbol", code: "invalid_type", input: n2, inst: t3 }), e4;
      };
    }), rm = Ma("$ZodUndefined", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.pattern = kc, t3._zod.values = /* @__PURE__ */ new Set([void 0]), t3._zod.optin = "optional", t3._zod.optout = "optional", t3._zod.parse = (e4, r3) => {
        const n2 = e4.value;
        return void 0 === n2 || e4.issues.push({ expected: "undefined", code: "invalid_type", input: n2, inst: t3 }), e4;
      };
    }), nm = Ma("$ZodNull", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.pattern = bc, t3._zod.values = /* @__PURE__ */ new Set([null]), t3._zod.parse = (e4, r3) => {
        const n2 = e4.value;
        return null === n2 || e4.issues.push({ expected: "null", code: "invalid_type", input: n2, inst: t3 }), e4;
      };
    }), sm = Ma("$ZodAny", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (t4) => t4;
    }), im = Ma("$ZodUnknown", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (t4) => t4;
    }), om = Ma("$ZodNever", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (e4, r3) => (e4.issues.push({ expected: "never", code: "invalid_type", input: e4.value, inst: t3 }), e4);
    }), am = Ma("$ZodVoid", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (e4, r3) => {
        const n2 = e4.value;
        return void 0 === n2 || e4.issues.push({ expected: "void", code: "invalid_type", input: n2, inst: t3 }), e4;
      };
    }), um = Ma("$ZodDate", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (r3, n2) => {
        if (e3.coerce) try {
          r3.value = new Date(r3.value);
        } catch (t4) {
        }
        const s2 = r3.value, i3 = s2 instanceof Date;
        return i3 && !Number.isNaN(s2.getTime()) || r3.issues.push({ expected: "date", code: "invalid_type", input: s2, ...i3 ? { received: "Invalid Date" } : {}, inst: t3 }), r3;
      };
    });
    function cm(t3, e3, r3) {
      t3.issues.length && e3.issues.push(...hu(r3, t3.issues)), e3.value[r3] = t3.value;
    }
    const lm = Ma("$ZodArray", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (r3, n2) => {
        const s2 = r3.value;
        if (!Array.isArray(s2)) return r3.issues.push({ expected: "array", code: "invalid_type", input: s2, inst: t3 }), r3;
        r3.value = Array(s2.length);
        const i3 = [];
        for (let t4 = 0; t4 < s2.length; t4++) {
          const o3 = s2[t4], a2 = e3.element._zod.run({ value: o3, issues: [] }, n2);
          a2 instanceof Promise ? i3.push(a2.then((e4) => cm(e4, r3, t4))) : cm(a2, r3, t4);
        }
        return i3.length ? Promise.all(i3).then(() => r3) : r3;
      };
    });
    function mm(t3, e3, r3, n2, s2) {
      if (t3.issues.length) {
        if (s2 && !(r3 in n2)) return;
        e3.issues.push(...hu(r3, t3.issues));
      }
      void 0 === t3.value ? r3 in n2 && (e3.value[r3] = void 0) : e3.value[r3] = t3.value;
    }
    function dm(t3) {
      const e3 = Object.keys(t3.shape);
      for (const r4 of e3) if (!t3.shape?.[r4]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${r4}": expected a Zod schema`);
      const r3 = (n2 = t3.shape, Object.keys(n2).filter((t4) => "optional" === n2[t4]._zod.optin && "optional" === n2[t4]._zod.optout));
      var n2;
      return { ...t3, keys: e3, keySet: new Set(e3), numKeys: e3.length, optionalKeys: new Set(r3) };
    }
    function fm(t3, e3, r3, n2, s2, i3) {
      const o3 = [], a2 = s2.keySet, u2 = s2.catchall._zod, c2 = u2.def.type, l2 = "optional" === u2.optout;
      for (const s3 in e3) {
        if (a2.has(s3)) continue;
        if ("never" === c2) {
          o3.push(s3);
          continue;
        }
        const i4 = u2.run({ value: e3[s3], issues: [] }, n2);
        i4 instanceof Promise ? t3.push(i4.then((t4) => mm(t4, r3, s3, e3, l2))) : mm(i4, r3, s3, e3, l2);
      }
      return o3.length && r3.issues.push({ code: "unrecognized_keys", keys: o3, input: e3, inst: i3 }), t3.length ? Promise.all(t3).then(() => r3) : r3;
    }
    const pm = Ma("$ZodObject", (t3, e3) => {
      Sl.init(t3, e3);
      const r3 = Object.getOwnPropertyDescriptor(e3, "shape");
      if (!r3?.get) {
        const t4 = e3.shape;
        Object.defineProperty(e3, "shape", { get: () => {
          const r4 = { ...t4 };
          return Object.defineProperty(e3, "shape", { value: r4 }), r4;
        } });
      }
      const n2 = Va(() => dm(e3));
      ja(t3._zod, "propValues", () => {
        const t4 = e3.shape, r4 = {};
        for (const e4 in t4) {
          const n3 = t4[e4]._zod;
          if (n3.values) {
            r4[e4] ?? (r4[e4] = /* @__PURE__ */ new Set());
            for (const t5 of n3.values) r4[e4].add(t5);
          }
        }
        return r4;
      });
      const s2 = ru, i3 = e3.catchall;
      let o3;
      t3._zod.parse = (e4, r4) => {
        o3 ?? (o3 = n2.value);
        const a2 = e4.value;
        if (!s2(a2)) return e4.issues.push({ expected: "object", code: "invalid_type", input: a2, inst: t3 }), e4;
        e4.value = {};
        const u2 = [], c2 = o3.shape;
        for (const t4 of o3.keys) {
          const n3 = c2[t4], s3 = "optional" === n3._zod.optout, i4 = n3._zod.run({ value: a2[t4], issues: [] }, r4);
          i4 instanceof Promise ? u2.push(i4.then((r5) => mm(r5, e4, t4, a2, s3))) : mm(i4, e4, t4, a2, s3);
        }
        return i3 ? fm(u2, a2, e4, r4, n2.value, t3) : u2.length ? Promise.all(u2).then(() => e4) : e4;
      };
    }), hm = Ma("$ZodObjectJIT", (t3, e3) => {
      pm.init(t3, e3);
      const r3 = t3._zod.parse, n2 = Va(() => dm(e3));
      let s2;
      const i3 = ru, o3 = !La.jitless, a2 = o3 && nu.value, u2 = e3.catchall;
      let c2;
      t3._zod.parse = (l2, m2) => {
        c2 ?? (c2 = n2.value);
        const d2 = l2.value;
        return i3(d2) ? o3 && a2 && false === m2?.async && true !== m2.jitless ? (s2 || (s2 = ((t4) => {
          const e4 = new yl(["shape", "payload", "ctx"]), r4 = n2.value, s3 = (t5) => {
            const e5 = tu(t5);
            return `shape[${e5}]._zod.run({ value: input[${e5}], issues: [] }, ctx)`;
          };
          e4.write("const input = payload.value;");
          const i4 = /* @__PURE__ */ Object.create(null);
          let o4 = 0;
          for (const t5 of r4.keys) i4[t5] = "key_" + o4++;
          e4.write("const newResult = {};");
          for (const n3 of r4.keys) {
            const r5 = i4[n3], o5 = tu(n3), a4 = t4[n3], u3 = "optional" === a4?._zod?.optout;
            e4.write(`const ${r5} = ${s3(n3)};`), u3 ? e4.write(`
        if (${r5}.issues.length) {
          if (${o5} in input) {
            payload.issues = payload.issues.concat(${r5}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o5}, ...iss.path] : [${o5}]
            })));
          }
        }
        
        if (${r5}.value === undefined) {
          if (${o5} in input) {
            newResult[${o5}] = undefined;
          }
        } else {
          newResult[${o5}] = ${r5}.value;
        }
        
      `) : e4.write(`
        if (${r5}.issues.length) {
          payload.issues = payload.issues.concat(${r5}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o5}, ...iss.path] : [${o5}]
          })));
        }
        
        if (${r5}.value === undefined) {
          if (${o5} in input) {
            newResult[${o5}] = undefined;
          }
        } else {
          newResult[${o5}] = ${r5}.value;
        }
        
      `);
          }
          e4.write("payload.value = newResult;"), e4.write("return payload;");
          const a3 = e4.compile();
          return (e5, r5) => a3(t4, e5, r5);
        })(e3.shape)), l2 = s2(l2, m2), u2 ? fm([], d2, l2, m2, c2, t3) : l2) : r3(l2, m2) : (l2.issues.push({ expected: "object", code: "invalid_type", input: d2, inst: t3 }), l2);
      };
    });
    function gm(t3, e3, r3, n2) {
      for (const r4 of t3) if (0 === r4.issues.length) return e3.value = r4.value, e3;
      const s2 = t3.filter((t4) => !pu(t4));
      return 1 === s2.length ? (e3.value = s2[0].value, s2[0]) : (e3.issues.push({ code: "invalid_union", input: e3.value, inst: r3, errors: t3.map((t4) => t4.issues.map((t5) => Au(t5, n2, $a()))) }), e3);
    }
    const Am = Ma("$ZodUnion", (t3, e3) => {
      Sl.init(t3, e3), ja(t3._zod, "optin", () => e3.options.some((t4) => "optional" === t4._zod.optin) ? "optional" : void 0), ja(t3._zod, "optout", () => e3.options.some((t4) => "optional" === t4._zod.optout) ? "optional" : void 0), ja(t3._zod, "values", () => {
        if (e3.options.every((t4) => t4._zod.values)) return new Set(e3.options.flatMap((t4) => Array.from(t4._zod.values)));
      }), ja(t3._zod, "pattern", () => {
        if (e3.options.every((t4) => t4._zod.pattern)) {
          const t4 = e3.options.map((t5) => t5._zod.pattern);
          return new RegExp(`^(${t4.map((t5) => Wa(t5.source)).join("|")})$`);
        }
      });
      const r3 = 1 === e3.options.length, n2 = e3.options[0]._zod.run;
      t3._zod.parse = (s2, i3) => {
        if (r3) return n2(s2, i3);
        let o3 = false;
        const a2 = [];
        for (const t4 of e3.options) {
          const e4 = t4._zod.run({ value: s2.value, issues: [] }, i3);
          if (e4 instanceof Promise) a2.push(e4), o3 = true;
          else {
            if (0 === e4.issues.length) return e4;
            a2.push(e4);
          }
        }
        return o3 ? Promise.all(a2).then((e4) => gm(e4, s2, t3, i3)) : gm(a2, s2, t3, i3);
      };
    });
    function _m(t3, e3, r3, n2) {
      const s2 = t3.filter((t4) => 0 === t4.issues.length);
      return 1 === s2.length ? (e3.value = s2[0].value, e3) : (0 === s2.length ? e3.issues.push({ code: "invalid_union", input: e3.value, inst: r3, errors: t3.map((t4) => t4.issues.map((t5) => Au(t5, n2, $a()))) }) : e3.issues.push({ code: "invalid_union", input: e3.value, inst: r3, errors: [], inclusive: false }), e3);
    }
    const ym = Ma("$ZodXor", (t3, e3) => {
      Am.init(t3, e3), e3.inclusive = false;
      const r3 = 1 === e3.options.length, n2 = e3.options[0]._zod.run;
      t3._zod.parse = (s2, i3) => {
        if (r3) return n2(s2, i3);
        let o3 = false;
        const a2 = [];
        for (const t4 of e3.options) {
          const e4 = t4._zod.run({ value: s2.value, issues: [] }, i3);
          e4 instanceof Promise ? (a2.push(e4), o3 = true) : a2.push(e4);
        }
        return o3 ? Promise.all(a2).then((e4) => _m(e4, s2, t3, i3)) : _m(a2, s2, t3, i3);
      };
    }), wm = Ma("$ZodDiscriminatedUnion", (t3, e3) => {
      e3.inclusive = false, Am.init(t3, e3);
      const r3 = t3._zod.parse;
      ja(t3._zod, "propValues", () => {
        const t4 = {};
        for (const r4 of e3.options) {
          const n3 = r4._zod.propValues;
          if (!n3 || 0 === Object.keys(n3).length) throw new Error(`Invalid discriminated union option at index "${e3.options.indexOf(r4)}"`);
          for (const [e4, r5] of Object.entries(n3)) {
            t4[e4] || (t4[e4] = /* @__PURE__ */ new Set());
            for (const n4 of r5) t4[e4].add(n4);
          }
        }
        return t4;
      });
      const n2 = Va(() => {
        const t4 = e3.options, r4 = /* @__PURE__ */ new Map();
        for (const n3 of t4) {
          const t5 = n3._zod.propValues?.[e3.discriminator];
          if (!t5 || 0 === t5.size) throw new Error(`Invalid discriminated union option at index "${e3.options.indexOf(n3)}"`);
          for (const e4 of t5) {
            if (r4.has(e4)) throw new Error(`Duplicate discriminator value "${String(e4)}"`);
            r4.set(e4, n3);
          }
        }
        return r4;
      });
      t3._zod.parse = (s2, i3) => {
        const o3 = s2.value;
        if (!ru(o3)) return s2.issues.push({ code: "invalid_type", expected: "object", input: o3, inst: t3 }), s2;
        const a2 = n2.value.get(o3?.[e3.discriminator]);
        return a2 ? a2._zod.run(s2, i3) : e3.unionFallback ? r3(s2, i3) : (s2.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: e3.discriminator, input: o3, path: [e3.discriminator], inst: t3 }), s2);
      };
    }), Sm = Ma("$ZodIntersection", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (t4, r3) => {
        const n2 = t4.value, s2 = e3.left._zod.run({ value: n2, issues: [] }, r3), i3 = e3.right._zod.run({ value: n2, issues: [] }, r3);
        return s2 instanceof Promise || i3 instanceof Promise ? Promise.all([s2, i3]).then(([e4, r4]) => Bm(t4, e4, r4)) : Bm(t4, s2, i3);
      };
    });
    function Jm(t3, e3) {
      if (t3 === e3) return { valid: true, data: t3 };
      if (t3 instanceof Date && e3 instanceof Date && +t3 === +e3) return { valid: true, data: t3 };
      if (su(t3) && su(e3)) {
        const r3 = Object.keys(e3), n2 = Object.keys(t3).filter((t4) => -1 !== r3.indexOf(t4)), s2 = { ...t3, ...e3 };
        for (const r4 of n2) {
          const n3 = Jm(t3[r4], e3[r4]);
          if (!n3.valid) return { valid: false, mergeErrorPath: [r4, ...n3.mergeErrorPath] };
          s2[r4] = n3.data;
        }
        return { valid: true, data: s2 };
      }
      if (Array.isArray(t3) && Array.isArray(e3)) {
        if (t3.length !== e3.length) return { valid: false, mergeErrorPath: [] };
        const r3 = [];
        for (let n2 = 0; n2 < t3.length; n2++) {
          const s2 = Jm(t3[n2], e3[n2]);
          if (!s2.valid) return { valid: false, mergeErrorPath: [n2, ...s2.mergeErrorPath] };
          r3.push(s2.data);
        }
        return { valid: true, data: r3 };
      }
      return { valid: false, mergeErrorPath: [] };
    }
    function Bm(t3, e3, r3) {
      const n2 = /* @__PURE__ */ new Map();
      let s2;
      for (const r4 of e3.issues) if ("unrecognized_keys" === r4.code) {
        s2 ?? (s2 = r4);
        for (const t4 of r4.keys) n2.has(t4) || n2.set(t4, {}), n2.get(t4).l = true;
      } else t3.issues.push(r4);
      for (const e4 of r3.issues) if ("unrecognized_keys" === e4.code) for (const t4 of e4.keys) n2.has(t4) || n2.set(t4, {}), n2.get(t4).r = true;
      else t3.issues.push(e4);
      const i3 = [...n2].filter(([, t4]) => t4.l && t4.r).map(([t4]) => t4);
      if (i3.length && s2 && t3.issues.push({ ...s2, keys: i3 }), pu(t3)) return t3;
      const o3 = Jm(e3.value, r3.value);
      if (!o3.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o3.mergeErrorPath)}`);
      return t3.value = o3.data, t3;
    }
    const Em = Ma("$ZodTuple", (t3, e3) => {
      Sl.init(t3, e3);
      const r3 = e3.items;
      t3._zod.parse = (n2, s2) => {
        const i3 = n2.value;
        if (!Array.isArray(i3)) return n2.issues.push({ input: i3, inst: t3, expected: "tuple", code: "invalid_type" }), n2;
        n2.value = [];
        const o3 = [], a2 = [...r3].reverse().findIndex((t4) => "optional" !== t4._zod.optin), u2 = -1 === a2 ? 0 : r3.length - a2;
        if (!e3.rest) {
          const e4 = i3.length > r3.length, s3 = i3.length < u2 - 1;
          if (e4 || s3) return n2.issues.push({ ...e4 ? { code: "too_big", maximum: r3.length, inclusive: true } : { code: "too_small", minimum: r3.length }, input: i3, inst: t3, origin: "array" }), n2;
        }
        let c2 = -1;
        for (const t4 of r3) {
          if (c2++, c2 >= i3.length && c2 >= u2) continue;
          const e4 = t4._zod.run({ value: i3[c2], issues: [] }, s2);
          e4 instanceof Promise ? o3.push(e4.then((t5) => Im(t5, n2, c2))) : Im(e4, n2, c2);
        }
        if (e3.rest) {
          const t4 = i3.slice(r3.length);
          for (const r4 of t4) {
            c2++;
            const t5 = e3.rest._zod.run({ value: r4, issues: [] }, s2);
            t5 instanceof Promise ? o3.push(t5.then((t6) => Im(t6, n2, c2))) : Im(t5, n2, c2);
          }
        }
        return o3.length ? Promise.all(o3).then(() => n2) : n2;
      };
    });
    function Im(t3, e3, r3) {
      t3.issues.length && e3.issues.push(...hu(r3, t3.issues)), e3.value[r3] = t3.value;
    }
    const Cm = Ma("$ZodRecord", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (r3, n2) => {
        const s2 = r3.value;
        if (!su(s2)) return r3.issues.push({ expected: "record", code: "invalid_type", input: s2, inst: t3 }), r3;
        const i3 = [], o3 = e3.keyType._zod.values;
        if (o3) {
          r3.value = {};
          const a2 = /* @__PURE__ */ new Set();
          for (const t4 of o3) if ("string" == typeof t4 || "number" == typeof t4 || "symbol" == typeof t4) {
            a2.add("number" == typeof t4 ? t4.toString() : t4);
            const o4 = e3.valueType._zod.run({ value: s2[t4], issues: [] }, n2);
            o4 instanceof Promise ? i3.push(o4.then((e4) => {
              e4.issues.length && r3.issues.push(...hu(t4, e4.issues)), r3.value[t4] = e4.value;
            })) : (o4.issues.length && r3.issues.push(...hu(t4, o4.issues)), r3.value[t4] = o4.value);
          }
          let u2;
          for (const t4 in s2) a2.has(t4) || (u2 = u2 ?? [], u2.push(t4));
          u2 && u2.length > 0 && r3.issues.push({ code: "unrecognized_keys", input: s2, inst: t3, keys: u2 });
        } else {
          r3.value = {};
          for (const o4 of Reflect.ownKeys(s2)) {
            if ("__proto__" === o4) continue;
            let a2 = e3.keyType._zod.run({ value: o4, issues: [] }, n2);
            if (a2 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            if ("string" == typeof o4 && Ic.test(o4) && a2.issues.length) {
              const t4 = e3.keyType._zod.run({ value: Number(o4), issues: [] }, n2);
              if (t4 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
              0 === t4.issues.length && (a2 = t4);
            }
            if (a2.issues.length) {
              "loose" === e3.mode ? r3.value[o4] = s2[o4] : r3.issues.push({ code: "invalid_key", origin: "record", issues: a2.issues.map((t4) => Au(t4, n2, $a())), input: o4, path: [o4], inst: t3 });
              continue;
            }
            const u2 = e3.valueType._zod.run({ value: s2[o4], issues: [] }, n2);
            u2 instanceof Promise ? i3.push(u2.then((t4) => {
              t4.issues.length && r3.issues.push(...hu(o4, t4.issues)), r3.value[a2.value] = t4.value;
            })) : (u2.issues.length && r3.issues.push(...hu(o4, u2.issues)), r3.value[a2.value] = u2.value);
          }
        }
        return i3.length ? Promise.all(i3).then(() => r3) : r3;
      };
    }), bm = Ma("$ZodMap", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (r3, n2) => {
        const s2 = r3.value;
        if (!(s2 instanceof Map)) return r3.issues.push({ expected: "map", code: "invalid_type", input: s2, inst: t3 }), r3;
        const i3 = [];
        r3.value = /* @__PURE__ */ new Map();
        for (const [o3, a2] of s2) {
          const u2 = e3.keyType._zod.run({ value: o3, issues: [] }, n2), c2 = e3.valueType._zod.run({ value: a2, issues: [] }, n2);
          u2 instanceof Promise || c2 instanceof Promise ? i3.push(Promise.all([u2, c2]).then(([e4, i4]) => {
            km(e4, i4, r3, o3, s2, t3, n2);
          })) : km(u2, c2, r3, o3, s2, t3, n2);
        }
        return i3.length ? Promise.all(i3).then(() => r3) : r3;
      };
    });
    function km(t3, e3, r3, n2, s2, i3, o3) {
      t3.issues.length && (ou.has(typeof n2) ? r3.issues.push(...hu(n2, t3.issues)) : r3.issues.push({ code: "invalid_key", origin: "map", input: s2, inst: i3, issues: t3.issues.map((t4) => Au(t4, o3, $a())) })), e3.issues.length && (ou.has(typeof n2) ? r3.issues.push(...hu(n2, e3.issues)) : r3.issues.push({ origin: "map", code: "invalid_element", input: s2, inst: i3, key: n2, issues: e3.issues.map((t4) => Au(t4, o3, $a())) })), r3.value.set(t3.value, e3.value);
    }
    const vm = Ma("$ZodSet", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (r3, n2) => {
        const s2 = r3.value;
        if (!(s2 instanceof Set)) return r3.issues.push({ input: s2, inst: t3, expected: "set", code: "invalid_type" }), r3;
        const i3 = [];
        r3.value = /* @__PURE__ */ new Set();
        for (const t4 of s2) {
          const s3 = e3.valueType._zod.run({ value: t4, issues: [] }, n2);
          s3 instanceof Promise ? i3.push(s3.then((t5) => qm(t5, r3))) : qm(s3, r3);
        }
        return i3.length ? Promise.all(i3).then(() => r3) : r3;
      };
    });
    function qm(t3, e3) {
      t3.issues.length && e3.issues.push(...t3.issues), e3.value.add(t3.value);
    }
    const Rm = Ma("$ZodEnum", (t3, e3) => {
      Sl.init(t3, e3);
      const r3 = Ga(e3.entries), n2 = new Set(r3);
      t3._zod.values = n2, t3._zod.pattern = new RegExp(`^(${r3.filter((t4) => ou.has(typeof t4)).map((t4) => "string" == typeof t4 ? uu(t4) : t4.toString()).join("|")})$`), t3._zod.parse = (e4, s2) => {
        const i3 = e4.value;
        return n2.has(i3) || e4.issues.push({ code: "invalid_value", values: r3, input: i3, inst: t3 }), e4;
      };
    }), Pm = Ma("$ZodLiteral", (t3, e3) => {
      if (Sl.init(t3, e3), 0 === e3.values.length) throw new Error("Cannot create literal schema with no valid values");
      const r3 = new Set(e3.values);
      t3._zod.values = r3, t3._zod.pattern = new RegExp(`^(${e3.values.map((t4) => "string" == typeof t4 ? uu(t4) : t4 ? uu(t4.toString()) : String(t4)).join("|")})$`), t3._zod.parse = (n2, s2) => {
        const i3 = n2.value;
        return r3.has(i3) || n2.issues.push({ code: "invalid_value", values: e3.values, input: i3, inst: t3 }), n2;
      };
    }), Tm = Ma("$ZodFile", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (e4, r3) => {
        const n2 = e4.value;
        return n2 instanceof File || e4.issues.push({ expected: "file", code: "invalid_type", input: n2, inst: t3 }), e4;
      };
    }), xm = Ma("$ZodTransform", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (r3, n2) => {
        if ("backward" === n2.direction) throw new Fa(t3.constructor.name);
        const s2 = e3.transform(r3.value, r3);
        if (n2.async) {
          return (s2 instanceof Promise ? s2 : Promise.resolve(s2)).then((t4) => (r3.value = t4, r3));
        }
        if (s2 instanceof Promise) throw new Oa();
        return r3.value = s2, r3;
      };
    });
    function Nm(t3, e3) {
      return t3.issues.length && void 0 === e3 ? { issues: [], value: void 0 } : t3;
    }
    const Dm = Ma("$ZodOptional", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.optin = "optional", t3._zod.optout = "optional", ja(t3._zod, "values", () => e3.innerType._zod.values ? /* @__PURE__ */ new Set([...e3.innerType._zod.values, void 0]) : void 0), ja(t3._zod, "pattern", () => {
        const t4 = e3.innerType._zod.pattern;
        return t4 ? new RegExp(`^(${Wa(t4.source)})?$`) : void 0;
      }), t3._zod.parse = (t4, r3) => {
        if ("optional" === e3.innerType._zod.optin) {
          const n2 = e3.innerType._zod.run(t4, r3);
          return n2 instanceof Promise ? n2.then((e4) => Nm(e4, t4.value)) : Nm(n2, t4.value);
        }
        return void 0 === t4.value ? t4 : e3.innerType._zod.run(t4, r3);
      };
    }), Um = Ma("$ZodExactOptional", (t3, e3) => {
      Dm.init(t3, e3), ja(t3._zod, "values", () => e3.innerType._zod.values), ja(t3._zod, "pattern", () => e3.innerType._zod.pattern), t3._zod.parse = (t4, r3) => e3.innerType._zod.run(t4, r3);
    }), Qm = Ma("$ZodNullable", (t3, e3) => {
      Sl.init(t3, e3), ja(t3._zod, "optin", () => e3.innerType._zod.optin), ja(t3._zod, "optout", () => e3.innerType._zod.optout), ja(t3._zod, "pattern", () => {
        const t4 = e3.innerType._zod.pattern;
        return t4 ? new RegExp(`^(${Wa(t4.source)}|null)$`) : void 0;
      }), ja(t3._zod, "values", () => e3.innerType._zod.values ? /* @__PURE__ */ new Set([...e3.innerType._zod.values, null]) : void 0), t3._zod.parse = (t4, r3) => null === t4.value ? t4 : e3.innerType._zod.run(t4, r3);
    }), Mm = Ma("$ZodDefault", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.optin = "optional", ja(t3._zod, "values", () => e3.innerType._zod.values), t3._zod.parse = (t4, r3) => {
        if ("backward" === r3.direction) return e3.innerType._zod.run(t4, r3);
        if (void 0 === t4.value) return t4.value = e3.defaultValue, t4;
        const n2 = e3.innerType._zod.run(t4, r3);
        return n2 instanceof Promise ? n2.then((t5) => Om(t5, e3)) : Om(n2, e3);
      };
    });
    function Om(t3, e3) {
      return void 0 === t3.value && (t3.value = e3.defaultValue), t3;
    }
    const Fm = Ma("$ZodPrefault", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.optin = "optional", ja(t3._zod, "values", () => e3.innerType._zod.values), t3._zod.parse = (t4, r3) => ("backward" === r3.direction || void 0 === t4.value && (t4.value = e3.defaultValue), e3.innerType._zod.run(t4, r3));
    }), Lm = Ma("$ZodNonOptional", (t3, e3) => {
      Sl.init(t3, e3), ja(t3._zod, "values", () => {
        const t4 = e3.innerType._zod.values;
        return t4 ? new Set([...t4].filter((t5) => void 0 !== t5)) : void 0;
      }), t3._zod.parse = (r3, n2) => {
        const s2 = e3.innerType._zod.run(r3, n2);
        return s2 instanceof Promise ? s2.then((e4) => $m(e4, t3)) : $m(s2, t3);
      };
    });
    function $m(t3, e3) {
      return t3.issues.length || void 0 !== t3.value || t3.issues.push({ code: "invalid_type", expected: "nonoptional", input: t3.value, inst: e3 }), t3;
    }
    const Gm = Ma("$ZodSuccess", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (t4, r3) => {
        if ("backward" === r3.direction) throw new Fa("ZodSuccess");
        const n2 = e3.innerType._zod.run(t4, r3);
        return n2 instanceof Promise ? n2.then((e4) => (t4.value = 0 === e4.issues.length, t4)) : (t4.value = 0 === n2.issues.length, t4);
      };
    }), Hm = Ma("$ZodCatch", (t3, e3) => {
      Sl.init(t3, e3), ja(t3._zod, "optin", () => e3.innerType._zod.optin), ja(t3._zod, "optout", () => e3.innerType._zod.optout), ja(t3._zod, "values", () => e3.innerType._zod.values), t3._zod.parse = (t4, r3) => {
        if ("backward" === r3.direction) return e3.innerType._zod.run(t4, r3);
        const n2 = e3.innerType._zod.run(t4, r3);
        return n2 instanceof Promise ? n2.then((n3) => (t4.value = n3.value, n3.issues.length && (t4.value = e3.catchValue({ ...t4, error: { issues: n3.issues.map((t5) => Au(t5, r3, $a())) }, input: t4.value }), t4.issues = []), t4)) : (t4.value = n2.value, n2.issues.length && (t4.value = e3.catchValue({ ...t4, error: { issues: n2.issues.map((t5) => Au(t5, r3, $a())) }, input: t4.value }), t4.issues = []), t4);
      };
    }), Km = Ma("$ZodNaN", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (e4, r3) => ("number" == typeof e4.value && Number.isNaN(e4.value) || e4.issues.push({ input: e4.value, inst: t3, expected: "nan", code: "invalid_type" }), e4);
    }), Vm = Ma("$ZodPipe", (t3, e3) => {
      Sl.init(t3, e3), ja(t3._zod, "values", () => e3.in._zod.values), ja(t3._zod, "optin", () => e3.in._zod.optin), ja(t3._zod, "optout", () => e3.out._zod.optout), ja(t3._zod, "propValues", () => e3.in._zod.propValues), t3._zod.parse = (t4, r3) => {
        if ("backward" === r3.direction) {
          const n3 = e3.out._zod.run(t4, r3);
          return n3 instanceof Promise ? n3.then((t5) => zm(t5, e3.in, r3)) : zm(n3, e3.in, r3);
        }
        const n2 = e3.in._zod.run(t4, r3);
        return n2 instanceof Promise ? n2.then((t5) => zm(t5, e3.out, r3)) : zm(n2, e3.out, r3);
      };
    });
    function zm(t3, e3, r3) {
      return t3.issues.length ? (t3.aborted = true, t3) : e3._zod.run({ value: t3.value, issues: t3.issues }, r3);
    }
    const Wm = Ma("$ZodCodec", (t3, e3) => {
      Sl.init(t3, e3), ja(t3._zod, "values", () => e3.in._zod.values), ja(t3._zod, "optin", () => e3.in._zod.optin), ja(t3._zod, "optout", () => e3.out._zod.optout), ja(t3._zod, "propValues", () => e3.in._zod.propValues), t3._zod.parse = (t4, r3) => {
        if ("forward" === (r3.direction || "forward")) {
          const n2 = e3.in._zod.run(t4, r3);
          return n2 instanceof Promise ? n2.then((t5) => Ym(t5, e3, r3)) : Ym(n2, e3, r3);
        }
        {
          const n2 = e3.out._zod.run(t4, r3);
          return n2 instanceof Promise ? n2.then((t5) => Ym(t5, e3, r3)) : Ym(n2, e3, r3);
        }
      };
    });
    function Ym(t3, e3, r3) {
      if (t3.issues.length) return t3.aborted = true, t3;
      if ("forward" === (r3.direction || "forward")) {
        const n2 = e3.transform(t3.value, t3);
        return n2 instanceof Promise ? n2.then((n3) => jm(t3, n3, e3.out, r3)) : jm(t3, n2, e3.out, r3);
      }
      {
        const n2 = e3.reverseTransform(t3.value, t3);
        return n2 instanceof Promise ? n2.then((n3) => jm(t3, n3, e3.in, r3)) : jm(t3, n2, e3.in, r3);
      }
    }
    function jm(t3, e3, r3, n2) {
      return t3.issues.length ? (t3.aborted = true, t3) : r3._zod.run({ value: e3, issues: t3.issues }, n2);
    }
    const Xm = Ma("$ZodReadonly", (t3, e3) => {
      Sl.init(t3, e3), ja(t3._zod, "propValues", () => e3.innerType._zod.propValues), ja(t3._zod, "values", () => e3.innerType._zod.values), ja(t3._zod, "optin", () => e3.innerType?._zod?.optin), ja(t3._zod, "optout", () => e3.innerType?._zod?.optout), t3._zod.parse = (t4, r3) => {
        if ("backward" === r3.direction) return e3.innerType._zod.run(t4, r3);
        const n2 = e3.innerType._zod.run(t4, r3);
        return n2 instanceof Promise ? n2.then(Zm) : Zm(n2);
      };
    });
    function Zm(t3) {
      return t3.value = Object.freeze(t3.value), t3;
    }
    const td = Ma("$ZodTemplateLiteral", (t3, e3) => {
      Sl.init(t3, e3);
      const r3 = [];
      for (const t4 of e3.parts) if ("object" == typeof t4 && null !== t4) {
        if (!t4._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...t4._zod.traits].shift()}`);
        const e4 = t4._zod.pattern instanceof RegExp ? t4._zod.pattern.source : t4._zod.pattern;
        if (!e4) throw new Error(`Invalid template literal part: ${t4._zod.traits}`);
        const n2 = e4.startsWith("^") ? 1 : 0, s2 = e4.endsWith("$") ? e4.length - 1 : e4.length;
        r3.push(e4.slice(n2, s2));
      } else {
        if (null !== t4 && !au.has(typeof t4)) throw new Error(`Invalid template literal part: ${t4}`);
        r3.push(uu(`${t4}`));
      }
      t3._zod.pattern = new RegExp(`^${r3.join("")}$`), t3._zod.parse = (r4, n2) => "string" != typeof r4.value ? (r4.issues.push({ input: r4.value, inst: t3, expected: "string", code: "invalid_type" }), r4) : (t3._zod.pattern.lastIndex = 0, t3._zod.pattern.test(r4.value) || r4.issues.push({ input: r4.value, inst: t3, code: "invalid_format", format: e3.format ?? "template_literal", pattern: t3._zod.pattern.source }), r4);
    }), ed = Ma("$ZodFunction", (t3, e3) => (Sl.init(t3, e3), t3._def = e3, t3._zod.def = e3, t3.implement = (e4) => {
      if ("function" != typeof e4) throw new Error("implement() must be called with a function");
      return function(...r3) {
        const n2 = t3._def.input ? Iu(t3._def.input, r3) : r3, s2 = Reflect.apply(e4, this, n2);
        return t3._def.output ? Iu(t3._def.output, s2) : s2;
      };
    }, t3.implementAsync = (e4) => {
      if ("function" != typeof e4) throw new Error("implementAsync() must be called with a function");
      return async function(...r3) {
        const n2 = t3._def.input ? await bu(t3._def.input, r3) : r3, s2 = await Reflect.apply(e4, this, n2);
        return t3._def.output ? await bu(t3._def.output, s2) : s2;
      };
    }, t3._zod.parse = (e4, r3) => {
      if ("function" != typeof e4.value) return e4.issues.push({ code: "invalid_type", expected: "function", input: e4.value, inst: t3 }), e4;
      const n2 = t3._def.output && "promise" === t3._def.output._zod.def.type;
      return e4.value = n2 ? t3.implementAsync(e4.value) : t3.implement(e4.value), e4;
    }, t3.input = (...e4) => {
      const r3 = t3.constructor;
      return Array.isArray(e4[0]) ? new r3({ type: "function", input: new Em({ type: "tuple", items: e4[0], rest: e4[1] }), output: t3._def.output }) : new r3({ type: "function", input: e4[0], output: t3._def.output });
    }, t3.output = (e4) => new (0, t3.constructor)({ type: "function", input: t3._def.input, output: e4 }), t3)), rd = Ma("$ZodPromise", (t3, e3) => {
      Sl.init(t3, e3), t3._zod.parse = (t4, r3) => Promise.resolve(t4.value).then((t5) => e3.innerType._zod.run({ value: t5, issues: [] }, r3));
    }), nd = Ma("$ZodLazy", (t3, e3) => {
      Sl.init(t3, e3), ja(t3._zod, "innerType", () => e3.getter()), ja(t3._zod, "pattern", () => t3._zod.innerType?._zod?.pattern), ja(t3._zod, "propValues", () => t3._zod.innerType?._zod?.propValues), ja(t3._zod, "optin", () => t3._zod.innerType?._zod?.optin ?? void 0), ja(t3._zod, "optout", () => t3._zod.innerType?._zod?.optout ?? void 0), t3._zod.parse = (e4, r3) => t3._zod.innerType._zod.run(e4, r3);
    }), sd = Ma("$ZodCustom", (t3, e3) => {
      Wc.init(t3, e3), Sl.init(t3, e3), t3._zod.parse = (t4, e4) => t4, t3._zod.check = (r3) => {
        const n2 = r3.value, s2 = e3.fn(n2);
        if (s2 instanceof Promise) return s2.then((e4) => id(e4, r3, n2, t3));
        id(s2, r3, n2, t3);
      };
    });
    function id(t3, e3, r3, n2) {
      if (!t3) {
        const t4 = { code: "custom", input: r3, inst: n2, path: [...n2._zod.def.path ?? []], continue: !n2._zod.def.abort };
        n2._zod.def.params && (t4.params = n2._zod.def.params), e3.issues.push(wu(t4));
      }
    }
    const od = () => {
      const t3 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
      function e3(e4) {
        return t3[e4] ?? null;
      }
      const r3 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" }, n2 = { nan: "NaN" };
      return (t4) => {
        switch (t4.code) {
          case "invalid_type": {
            const e4 = n2[t4.expected] ?? t4.expected, r4 = (function(t5) {
              const e5 = typeof t5;
              switch (e5) {
                case "number":
                  return Number.isNaN(t5) ? "nan" : "number";
                case "object": {
                  if (null === t5) return "null";
                  if (Array.isArray(t5)) return "array";
                  const e6 = t5;
                  if (e6 && Object.getPrototypeOf(e6) !== Object.prototype && "constructor" in e6 && e6.constructor) return e6.constructor.name;
                }
              }
              return e5;
            })(t4.input);
            return `Invalid input: expected ${e4}, received ${n2[r4] ?? r4}`;
          }
          case "invalid_value":
            return 1 === t4.values.length ? `Invalid input: expected ${mu(t4.values[0])}` : `Invalid option: expected one of ${Ha(t4.values, "|")}`;
          case "too_big": {
            const r4 = t4.inclusive ? "<=" : "<", n3 = e3(t4.origin);
            return n3 ? `Too big: expected ${t4.origin ?? "value"} to have ${r4}${t4.maximum.toString()} ${n3.unit ?? "elements"}` : `Too big: expected ${t4.origin ?? "value"} to be ${r4}${t4.maximum.toString()}`;
          }
          case "too_small": {
            const r4 = t4.inclusive ? ">=" : ">", n3 = e3(t4.origin);
            return n3 ? `Too small: expected ${t4.origin} to have ${r4}${t4.minimum.toString()} ${n3.unit}` : `Too small: expected ${t4.origin} to be ${r4}${t4.minimum.toString()}`;
          }
          case "invalid_format": {
            const e4 = t4;
            return "starts_with" === e4.format ? `Invalid string: must start with "${e4.prefix}"` : "ends_with" === e4.format ? `Invalid string: must end with "${e4.suffix}"` : "includes" === e4.format ? `Invalid string: must include "${e4.includes}"` : "regex" === e4.format ? `Invalid string: must match pattern ${e4.pattern}` : `Invalid ${r3[e4.format] ?? t4.format}`;
          }
          case "not_multiple_of":
            return `Invalid number: must be a multiple of ${t4.divisor}`;
          case "unrecognized_keys":
            return `Unrecognized key${t4.keys.length > 1 ? "s" : ""}: ${Ha(t4.keys, ", ")}`;
          case "invalid_key":
            return `Invalid key in ${t4.origin}`;
          case "invalid_union":
          default:
            return "Invalid input";
          case "invalid_element":
            return `Invalid value in ${t4.origin}`;
        }
      };
    };
    var ad;
    /* @__PURE__ */ Symbol("ZodOutput"), /* @__PURE__ */ Symbol("ZodInput");
    class ud {
      constructor() {
        this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
      }
      add(t3, ...e3) {
        const r3 = e3[0];
        return this._map.set(t3, r3), r3 && "object" == typeof r3 && "id" in r3 && this._idmap.set(r3.id, t3), this;
      }
      clear() {
        return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
      }
      remove(t3) {
        const e3 = this._map.get(t3);
        return e3 && "object" == typeof e3 && "id" in e3 && this._idmap.delete(e3.id), this._map.delete(t3), this;
      }
      get(t3) {
        const e3 = t3._zod.parent;
        if (e3) {
          const r3 = { ...this.get(e3) ?? {} };
          delete r3.id;
          const n2 = { ...r3, ...this._map.get(t3) };
          return Object.keys(n2).length ? n2 : void 0;
        }
        return this._map.get(t3);
      }
      has(t3) {
        return this._map.has(t3);
      }
    }
    (ad = globalThis).__zod_globalRegistry ?? (ad.__zod_globalRegistry = new ud());
    const cd = globalThis.__zod_globalRegistry;
    function ld(t3, e3) {
      return new t3({ type: "string", format: "email", check: "string_format", abort: false, ...lu(e3) });
    }
    function md(t3, e3) {
      return new t3({ type: "string", format: "guid", check: "string_format", abort: false, ...lu(e3) });
    }
    function dd(t3, e3) {
      return new t3({ type: "string", format: "uuid", check: "string_format", abort: false, ...lu(e3) });
    }
    function fd(t3, e3) {
      return new t3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...lu(e3) });
    }
    function pd(t3, e3) {
      return new t3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...lu(e3) });
    }
    function hd(t3, e3) {
      return new t3({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...lu(e3) });
    }
    function gd(t3, e3) {
      return new t3({ type: "string", format: "url", check: "string_format", abort: false, ...lu(e3) });
    }
    function Ad(t3, e3) {
      return new t3({ type: "string", format: "emoji", check: "string_format", abort: false, ...lu(e3) });
    }
    function _d(t3, e3) {
      return new t3({ type: "string", format: "nanoid", check: "string_format", abort: false, ...lu(e3) });
    }
    function yd(t3, e3) {
      return new t3({ type: "string", format: "cuid", check: "string_format", abort: false, ...lu(e3) });
    }
    function wd(t3, e3) {
      return new t3({ type: "string", format: "cuid2", check: "string_format", abort: false, ...lu(e3) });
    }
    function Sd(t3, e3) {
      return new t3({ type: "string", format: "ulid", check: "string_format", abort: false, ...lu(e3) });
    }
    function Jd(t3, e3) {
      return new t3({ type: "string", format: "xid", check: "string_format", abort: false, ...lu(e3) });
    }
    function Bd(t3, e3) {
      return new t3({ type: "string", format: "ksuid", check: "string_format", abort: false, ...lu(e3) });
    }
    function Ed(t3, e3) {
      return new t3({ type: "string", format: "ipv4", check: "string_format", abort: false, ...lu(e3) });
    }
    function Id(t3, e3) {
      return new t3({ type: "string", format: "ipv6", check: "string_format", abort: false, ...lu(e3) });
    }
    function Cd(t3, e3) {
      return new t3({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...lu(e3) });
    }
    function bd(t3, e3) {
      return new t3({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...lu(e3) });
    }
    function kd(t3, e3) {
      return new t3({ type: "string", format: "base64", check: "string_format", abort: false, ...lu(e3) });
    }
    function vd(t3, e3) {
      return new t3({ type: "string", format: "base64url", check: "string_format", abort: false, ...lu(e3) });
    }
    function qd(t3, e3) {
      return new t3({ type: "string", format: "e164", check: "string_format", abort: false, ...lu(e3) });
    }
    function Rd(t3, e3) {
      return new t3({ type: "string", format: "jwt", check: "string_format", abort: false, ...lu(e3) });
    }
    function Pd(t3, e3) {
      return new jc({ check: "less_than", ...lu(e3), value: t3, inclusive: false });
    }
    function Td(t3, e3) {
      return new jc({ check: "less_than", ...lu(e3), value: t3, inclusive: true });
    }
    function xd(t3, e3) {
      return new Xc({ check: "greater_than", ...lu(e3), value: t3, inclusive: false });
    }
    function Nd(t3, e3) {
      return new Xc({ check: "greater_than", ...lu(e3), value: t3, inclusive: true });
    }
    function Dd(t3) {
      return xd(0, t3);
    }
    function Ud(t3) {
      return Pd(0, t3);
    }
    function Qd(t3) {
      return Td(0, t3);
    }
    function Md(t3) {
      return Nd(0, t3);
    }
    function Od(t3, e3) {
      return new Zc({ check: "multiple_of", ...lu(e3), value: t3 });
    }
    function Fd(t3, e3) {
      return new rl({ check: "max_size", ...lu(e3), maximum: t3 });
    }
    function Ld(t3, e3) {
      return new nl({ check: "min_size", ...lu(e3), minimum: t3 });
    }
    function $d(t3, e3) {
      return new sl({ check: "size_equals", ...lu(e3), size: t3 });
    }
    function Gd(t3, e3) {
      return new il({ check: "max_length", ...lu(e3), maximum: t3 });
    }
    function Hd(t3, e3) {
      return new ol({ check: "min_length", ...lu(e3), minimum: t3 });
    }
    function Kd(t3, e3) {
      return new al({ check: "length_equals", ...lu(e3), length: t3 });
    }
    function Vd(t3, e3) {
      return new cl({ check: "string_format", format: "regex", ...lu(e3), pattern: t3 });
    }
    function zd(t3) {
      return new ll({ check: "string_format", format: "lowercase", ...lu(t3) });
    }
    function Wd(t3) {
      return new ml({ check: "string_format", format: "uppercase", ...lu(t3) });
    }
    function Yd(t3, e3) {
      return new dl({ check: "string_format", format: "includes", ...lu(e3), includes: t3 });
    }
    function jd(t3, e3) {
      return new fl({ check: "string_format", format: "starts_with", ...lu(e3), prefix: t3 });
    }
    function Xd(t3, e3) {
      return new pl({ check: "string_format", format: "ends_with", ...lu(e3), suffix: t3 });
    }
    function Zd(t3, e3, r3) {
      return new gl({ check: "property", property: t3, schema: e3, ...lu(r3) });
    }
    function tf(t3, e3) {
      return new Al({ check: "mime_type", mime: t3, ...lu(e3) });
    }
    function ef(t3) {
      return new _l({ check: "overwrite", tx: t3 });
    }
    function rf(t3) {
      return ef((e3) => e3.normalize(t3));
    }
    function nf() {
      return ef((t3) => t3.trim());
    }
    function sf() {
      return ef((t3) => t3.toLowerCase());
    }
    function of() {
      return ef((t3) => t3.toUpperCase());
    }
    function af() {
      return ef((t3) => (function(t4) {
        return t4.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
      })(t3));
    }
    function uf(t3) {
      const e3 = (function(t4, e4) {
        const r3 = new Wc({ check: "custom", ...lu(e4) });
        return r3._zod.check = t4, r3;
      })((r3) => (r3.addIssue = (t4) => {
        if ("string" == typeof t4) r3.issues.push(wu(t4, r3.value, e3._zod.def));
        else {
          const n2 = t4;
          n2.fatal && (n2.continue = false), n2.code ?? (n2.code = "custom"), n2.input ?? (n2.input = r3.value), n2.inst ?? (n2.inst = e3), n2.continue ?? (n2.continue = !e3._zod.def.abort), r3.issues.push(wu(n2));
        }
      }, t3(r3.value, r3)));
      return e3;
    }
    function cf(t3, e3, r3, n2 = {}) {
      const s2 = lu(n2), i3 = { ...lu(n2), check: "string_format", type: "string", format: e3, fn: "function" == typeof r3 ? r3 : (t4) => r3.test(t4), ...s2 };
      r3 instanceof RegExp && (i3.pattern = r3);
      return new t3(i3);
    }
    function lf(t3) {
      let e3 = t3?.target ?? "draft-2020-12";
      return "draft-4" === e3 && (e3 = "draft-04"), "draft-7" === e3 && (e3 = "draft-07"), { processors: t3.processors ?? {}, metadataRegistry: t3?.metadata ?? cd, target: e3, unrepresentable: t3?.unrepresentable ?? "throw", override: t3?.override ?? (() => {
      }), io: t3?.io ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: t3?.cycles ?? "ref", reused: t3?.reused ?? "inline", external: t3?.external ?? void 0 };
    }
    function mf(t3, e3, r3 = { path: [], schemaPath: [] }) {
      var n2;
      const s2 = t3._zod.def, i3 = e3.seen.get(t3);
      if (i3) {
        i3.count++;
        return r3.schemaPath.includes(t3) && (i3.cycle = r3.path), i3.schema;
      }
      const o3 = { schema: {}, count: 1, cycle: void 0, path: r3.path };
      e3.seen.set(t3, o3);
      const a2 = t3._zod.toJSONSchema?.();
      if (a2) o3.schema = a2;
      else {
        const n3 = { ...r3, schemaPath: [...r3.schemaPath, t3], path: r3.path };
        if (t3._zod.processJSONSchema) t3._zod.processJSONSchema(e3, o3.schema, n3);
        else {
          const r4 = o3.schema, i5 = e3.processors[s2.type];
          if (!i5) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s2.type}`);
          i5(t3, e3, r4, n3);
        }
        const i4 = t3._zod.parent;
        i4 && (o3.ref || (o3.ref = i4), mf(i4, e3, n3), e3.seen.get(i4).isParent = true);
      }
      const u2 = e3.metadataRegistry.get(t3);
      u2 && Object.assign(o3.schema, u2), "input" === e3.io && pf(t3) && (delete o3.schema.examples, delete o3.schema.default), "input" === e3.io && o3.schema._prefault && ((n2 = o3.schema).default ?? (n2.default = o3.schema._prefault)), delete o3.schema._prefault;
      return e3.seen.get(t3).schema;
    }
    function df(t3, e3) {
      const r3 = t3.seen.get(e3);
      if (!r3) throw new Error("Unprocessed schema. This is a bug in Zod.");
      const n2 = /* @__PURE__ */ new Map();
      for (const e4 of t3.seen.entries()) {
        const r4 = t3.metadataRegistry.get(e4[0])?.id;
        if (r4) {
          const t4 = n2.get(r4);
          if (t4 && t4 !== e4[0]) throw new Error(`Duplicate schema id "${r4}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
          n2.set(r4, e4[0]);
        }
      }
      const s2 = (e4) => {
        if (e4[1].schema.$ref) return;
        const n3 = e4[1], { ref: s3, defId: i3 } = ((e5) => {
          const n4 = "draft-2020-12" === t3.target ? "$defs" : "definitions";
          if (t3.external) {
            const r4 = t3.external.registry.get(e5[0])?.id, s5 = t3.external.uri ?? ((t4) => t4);
            if (r4) return { ref: s5(r4) };
            const i5 = e5[1].defId ?? e5[1].schema.id ?? "schema" + t3.counter++;
            return e5[1].defId = i5, { defId: i5, ref: `${s5("__shared")}#/${n4}/${i5}` };
          }
          if (e5[1] === r3) return { ref: "#" };
          const s4 = `#/${n4}/`, i4 = e5[1].schema.id ?? "__schema" + t3.counter++;
          return { defId: i4, ref: s4 + i4 };
        })(e4);
        n3.def = { ...n3.schema }, i3 && (n3.defId = i3);
        const o3 = n3.schema;
        for (const t4 in o3) delete o3[t4];
        o3.$ref = s3;
      };
      if ("throw" === t3.cycles) for (const e4 of t3.seen.entries()) {
        const t4 = e4[1];
        if (t4.cycle) throw new Error(`Cycle detected: #/${t4.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
      for (const r4 of t3.seen.entries()) {
        const n3 = r4[1];
        if (e3 === r4[0]) {
          s2(r4);
          continue;
        }
        if (t3.external) {
          const n4 = t3.external.registry.get(r4[0])?.id;
          if (e3 !== r4[0] && n4) {
            s2(r4);
            continue;
          }
        }
        const i3 = t3.metadataRegistry.get(r4[0])?.id;
        i3 ? s2(r4) : (n3.cycle || n3.count > 1 && "ref" === t3.reused) && s2(r4);
      }
    }
    function ff(t3, e3) {
      const r3 = t3.seen.get(e3);
      if (!r3) throw new Error("Unprocessed schema. This is a bug in Zod.");
      const n2 = (e4) => {
        const r4 = t3.seen.get(e4);
        if (null === r4.ref) return;
        const s3 = r4.def ?? r4.schema, i4 = { ...s3 }, o3 = r4.ref;
        if (r4.ref = null, o3) {
          n2(o3);
          const r5 = t3.seen.get(o3), a3 = r5.schema;
          !a3.$ref || "draft-07" !== t3.target && "draft-04" !== t3.target && "openapi-3.0" !== t3.target ? Object.assign(s3, a3) : (s3.allOf = s3.allOf ?? [], s3.allOf.push(a3)), Object.assign(s3, i4);
          if (e4._zod.parent === o3) for (const t4 in s3) "$ref" !== t4 && "allOf" !== t4 && (t4 in i4 || delete s3[t4]);
          if (a3.$ref && r5.def) for (const t4 in s3) "$ref" !== t4 && "allOf" !== t4 && t4 in r5.def && JSON.stringify(s3[t4]) === JSON.stringify(r5.def[t4]) && delete s3[t4];
        }
        const a2 = e4._zod.parent;
        if (a2 && a2 !== o3) {
          n2(a2);
          const e5 = t3.seen.get(a2);
          if (e5?.schema.$ref && (s3.$ref = e5.schema.$ref, e5.def)) for (const t4 in s3) "$ref" !== t4 && "allOf" !== t4 && t4 in e5.def && JSON.stringify(s3[t4]) === JSON.stringify(e5.def[t4]) && delete s3[t4];
        }
        t3.override({ zodSchema: e4, jsonSchema: s3, path: r4.path ?? [] });
      };
      for (const e4 of [...t3.seen.entries()].reverse()) n2(e4[0]);
      const s2 = {};
      if ("draft-2020-12" === t3.target ? s2.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === t3.target ? s2.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === t3.target ? s2.$schema = "http://json-schema.org/draft-04/schema#" : t3.target, t3.external?.uri) {
        const r4 = t3.external.registry.get(e3)?.id;
        if (!r4) throw new Error("Schema is missing an `id` property");
        s2.$id = t3.external.uri(r4);
      }
      Object.assign(s2, r3.def ?? r3.schema);
      const i3 = t3.external?.defs ?? {};
      for (const e4 of t3.seen.entries()) {
        const t4 = e4[1];
        t4.def && t4.defId && (i3[t4.defId] = t4.def);
      }
      t3.external || Object.keys(i3).length > 0 && ("draft-2020-12" === t3.target ? s2.$defs = i3 : s2.definitions = i3);
      try {
        const r4 = JSON.parse(JSON.stringify(s2));
        return Object.defineProperty(r4, "~standard", { value: { ...e3["~standard"], jsonSchema: { input: hf(e3, "input", t3.processors), output: hf(e3, "output", t3.processors) } }, enumerable: false, writable: false }), r4;
      } catch (t4) {
        throw new Error("Error converting schema to JSON.");
      }
    }
    function pf(t3, e3) {
      const r3 = e3 ?? { seen: /* @__PURE__ */ new Set() };
      if (r3.seen.has(t3)) return false;
      r3.seen.add(t3);
      const n2 = t3._zod.def;
      if ("transform" === n2.type) return true;
      if ("array" === n2.type) return pf(n2.element, r3);
      if ("set" === n2.type) return pf(n2.valueType, r3);
      if ("lazy" === n2.type) return pf(n2.getter(), r3);
      if ("promise" === n2.type || "optional" === n2.type || "nonoptional" === n2.type || "nullable" === n2.type || "readonly" === n2.type || "default" === n2.type || "prefault" === n2.type) return pf(n2.innerType, r3);
      if ("intersection" === n2.type) return pf(n2.left, r3) || pf(n2.right, r3);
      if ("record" === n2.type || "map" === n2.type) return pf(n2.keyType, r3) || pf(n2.valueType, r3);
      if ("pipe" === n2.type) return pf(n2.in, r3) || pf(n2.out, r3);
      if ("object" === n2.type) {
        for (const t4 in n2.shape) if (pf(n2.shape[t4], r3)) return true;
        return false;
      }
      if ("union" === n2.type) {
        for (const t4 of n2.options) if (pf(t4, r3)) return true;
        return false;
      }
      if ("tuple" === n2.type) {
        for (const t4 of n2.items) if (pf(t4, r3)) return true;
        return !(!n2.rest || !pf(n2.rest, r3));
      }
      return false;
    }
    const hf = (t3, e3, r3 = {}) => (n2) => {
      const { libraryOptions: s2, target: i3 } = n2 ?? {}, o3 = lf({ ...s2 ?? {}, target: i3, io: e3, processors: r3 });
      return mf(t3, o3), df(o3, t3), ff(o3, t3);
    }, gf = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, Af = (t3, e3, r3, n2) => {
      const s2 = r3;
      s2.type = "string";
      const { minimum: i3, maximum: o3, format: a2, patterns: u2, contentEncoding: c2 } = t3._zod.bag;
      if ("number" == typeof i3 && (s2.minLength = i3), "number" == typeof o3 && (s2.maxLength = o3), a2 && (s2.format = gf[a2] ?? a2, "" === s2.format && delete s2.format, "time" === a2 && delete s2.format), c2 && (s2.contentEncoding = c2), u2 && u2.size > 0) {
        const t4 = [...u2];
        1 === t4.length ? s2.pattern = t4[0].source : t4.length > 1 && (s2.allOf = [...t4.map((t5) => ({ ..."draft-07" === e3.target || "draft-04" === e3.target || "openapi-3.0" === e3.target ? { type: "string" } : {}, pattern: t5.source }))]);
      }
    }, _f = (t3, e3, r3, n2) => {
      const s2 = r3, { minimum: i3, maximum: o3, format: a2, multipleOf: u2, exclusiveMaximum: c2, exclusiveMinimum: l2 } = t3._zod.bag;
      "string" == typeof a2 && a2.includes("int") ? s2.type = "integer" : s2.type = "number", "number" == typeof l2 && ("draft-04" === e3.target || "openapi-3.0" === e3.target ? (s2.minimum = l2, s2.exclusiveMinimum = true) : s2.exclusiveMinimum = l2), "number" == typeof i3 && (s2.minimum = i3, "number" == typeof l2 && "draft-04" !== e3.target && (l2 >= i3 ? delete s2.minimum : delete s2.exclusiveMinimum)), "number" == typeof c2 && ("draft-04" === e3.target || "openapi-3.0" === e3.target ? (s2.maximum = c2, s2.exclusiveMaximum = true) : s2.exclusiveMaximum = c2), "number" == typeof o3 && (s2.maximum = o3, "number" == typeof c2 && "draft-04" !== e3.target && (c2 <= o3 ? delete s2.maximum : delete s2.exclusiveMaximum)), "number" == typeof u2 && (s2.multipleOf = u2);
    }, yf = (t3, e3, r3, n2) => {
      r3.type = "boolean";
    }, wf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("BigInt cannot be represented in JSON Schema");
    }, Sf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Symbols cannot be represented in JSON Schema");
    }, Jf = (t3, e3, r3, n2) => {
      "openapi-3.0" === e3.target ? (r3.type = "string", r3.nullable = true, r3.enum = [null]) : r3.type = "null";
    }, Bf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Undefined cannot be represented in JSON Schema");
    }, Ef = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Void cannot be represented in JSON Schema");
    }, If = (t3, e3, r3, n2) => {
      r3.not = {};
    }, Cf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Date cannot be represented in JSON Schema");
    }, bf = (t3, e3, r3, n2) => {
      const s2 = Ga(t3._zod.def.entries);
      s2.every((t4) => "number" == typeof t4) && (r3.type = "number"), s2.every((t4) => "string" == typeof t4) && (r3.type = "string"), r3.enum = s2;
    }, kf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def, i3 = [];
      for (const t4 of s2.values) if (void 0 === t4) {
        if ("throw" === e3.unrepresentable) throw new Error("Literal `undefined` cannot be represented in JSON Schema");
      } else if ("bigint" == typeof t4) {
        if ("throw" === e3.unrepresentable) throw new Error("BigInt literals cannot be represented in JSON Schema");
        i3.push(Number(t4));
      } else i3.push(t4);
      if (0 === i3.length) ;
      else if (1 === i3.length) {
        const t4 = i3[0];
        r3.type = null === t4 ? "null" : typeof t4, "draft-04" === e3.target || "openapi-3.0" === e3.target ? r3.enum = [t4] : r3.const = t4;
      } else i3.every((t4) => "number" == typeof t4) && (r3.type = "number"), i3.every((t4) => "string" == typeof t4) && (r3.type = "string"), i3.every((t4) => "boolean" == typeof t4) && (r3.type = "boolean"), i3.every((t4) => null === t4) && (r3.type = "null"), r3.enum = i3;
    }, vf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("NaN cannot be represented in JSON Schema");
    }, qf = (t3, e3, r3, n2) => {
      const s2 = r3, i3 = t3._zod.pattern;
      if (!i3) throw new Error("Pattern not found in template literal");
      s2.type = "string", s2.pattern = i3.source;
    }, Rf = (t3, e3, r3, n2) => {
      const s2 = r3, i3 = { type: "string", format: "binary", contentEncoding: "binary" }, { minimum: o3, maximum: a2, mime: u2 } = t3._zod.bag;
      void 0 !== o3 && (i3.minLength = o3), void 0 !== a2 && (i3.maxLength = a2), u2 ? 1 === u2.length ? (i3.contentMediaType = u2[0], Object.assign(s2, i3)) : (Object.assign(s2, i3), s2.anyOf = u2.map((t4) => ({ contentMediaType: t4 }))) : Object.assign(s2, i3);
    }, Pf = (t3, e3, r3, n2) => {
      r3.type = "boolean";
    }, Tf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
    }, xf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Function types cannot be represented in JSON Schema");
    }, Nf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
    }, Df = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Map cannot be represented in JSON Schema");
    }, Uf = (t3, e3, r3, n2) => {
      if ("throw" === e3.unrepresentable) throw new Error("Set cannot be represented in JSON Schema");
    }, Qf = (t3, e3, r3, n2) => {
      const s2 = r3, i3 = t3._zod.def, { minimum: o3, maximum: a2 } = t3._zod.bag;
      "number" == typeof o3 && (s2.minItems = o3), "number" == typeof a2 && (s2.maxItems = a2), s2.type = "array", s2.items = mf(i3.element, e3, { ...n2, path: [...n2.path, "items"] });
    }, Mf = (t3, e3, r3, n2) => {
      const s2 = r3, i3 = t3._zod.def;
      s2.type = "object", s2.properties = {};
      const o3 = i3.shape;
      for (const t4 in o3) s2.properties[t4] = mf(o3[t4], e3, { ...n2, path: [...n2.path, "properties", t4] });
      const a2 = new Set(Object.keys(o3)), u2 = new Set([...a2].filter((t4) => {
        const r4 = i3.shape[t4]._zod;
        return "input" === e3.io ? void 0 === r4.optin : void 0 === r4.optout;
      }));
      u2.size > 0 && (s2.required = Array.from(u2)), "never" === i3.catchall?._zod.def.type ? s2.additionalProperties = false : i3.catchall ? i3.catchall && (s2.additionalProperties = mf(i3.catchall, e3, { ...n2, path: [...n2.path, "additionalProperties"] })) : "output" === e3.io && (s2.additionalProperties = false);
    }, Of = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def, i3 = false === s2.inclusive, o3 = s2.options.map((t4, r4) => mf(t4, e3, { ...n2, path: [...n2.path, i3 ? "oneOf" : "anyOf", r4] }));
      i3 ? r3.oneOf = o3 : r3.anyOf = o3;
    }, Ff = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def, i3 = mf(s2.left, e3, { ...n2, path: [...n2.path, "allOf", 0] }), o3 = mf(s2.right, e3, { ...n2, path: [...n2.path, "allOf", 1] }), a2 = (t4) => "allOf" in t4 && 1 === Object.keys(t4).length, u2 = [...a2(i3) ? i3.allOf : [i3], ...a2(o3) ? o3.allOf : [o3]];
      r3.allOf = u2;
    }, Lf = (t3, e3, r3, n2) => {
      const s2 = r3, i3 = t3._zod.def;
      s2.type = "array";
      const o3 = "draft-2020-12" === e3.target ? "prefixItems" : "items", a2 = "draft-2020-12" === e3.target || "openapi-3.0" === e3.target ? "items" : "additionalItems", u2 = i3.items.map((t4, r4) => mf(t4, e3, { ...n2, path: [...n2.path, o3, r4] })), c2 = i3.rest ? mf(i3.rest, e3, { ...n2, path: [...n2.path, a2, ..."openapi-3.0" === e3.target ? [i3.items.length] : []] }) : null;
      "draft-2020-12" === e3.target ? (s2.prefixItems = u2, c2 && (s2.items = c2)) : "openapi-3.0" === e3.target ? (s2.items = { anyOf: u2 }, c2 && s2.items.anyOf.push(c2), s2.minItems = u2.length, c2 || (s2.maxItems = u2.length)) : (s2.items = u2, c2 && (s2.additionalItems = c2));
      const { minimum: l2, maximum: m2 } = t3._zod.bag;
      "number" == typeof l2 && (s2.minItems = l2), "number" == typeof m2 && (s2.maxItems = m2);
    }, $f = (t3, e3, r3, n2) => {
      const s2 = r3, i3 = t3._zod.def;
      s2.type = "object";
      const o3 = i3.keyType, a2 = o3._zod.bag, u2 = a2?.patterns;
      if ("loose" === i3.mode && u2 && u2.size > 0) {
        const t4 = mf(i3.valueType, e3, { ...n2, path: [...n2.path, "patternProperties", "*"] });
        s2.patternProperties = {};
        for (const e4 of u2) s2.patternProperties[e4.source] = t4;
      } else "draft-07" !== e3.target && "draft-2020-12" !== e3.target || (s2.propertyNames = mf(i3.keyType, e3, { ...n2, path: [...n2.path, "propertyNames"] })), s2.additionalProperties = mf(i3.valueType, e3, { ...n2, path: [...n2.path, "additionalProperties"] });
      const c2 = o3._zod.values;
      if (c2) {
        const t4 = [...c2].filter((t5) => "string" == typeof t5 || "number" == typeof t5);
        t4.length > 0 && (s2.required = t4);
      }
    }, Gf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def, i3 = mf(s2.innerType, e3, n2), o3 = e3.seen.get(t3);
      "openapi-3.0" === e3.target ? (o3.ref = s2.innerType, r3.nullable = true) : r3.anyOf = [i3, { type: "null" }];
    }, Hf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def;
      mf(s2.innerType, e3, n2);
      e3.seen.get(t3).ref = s2.innerType;
    }, Kf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def;
      mf(s2.innerType, e3, n2);
      e3.seen.get(t3).ref = s2.innerType, r3.default = JSON.parse(JSON.stringify(s2.defaultValue));
    }, Vf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def;
      mf(s2.innerType, e3, n2);
      e3.seen.get(t3).ref = s2.innerType, "input" === e3.io && (r3._prefault = JSON.parse(JSON.stringify(s2.defaultValue)));
    }, zf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def;
      mf(s2.innerType, e3, n2);
      let i3;
      e3.seen.get(t3).ref = s2.innerType;
      try {
        i3 = s2.catchValue(void 0);
      } catch {
        throw new Error("Dynamic catch values are not supported in JSON Schema");
      }
      r3.default = i3;
    }, Wf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def, i3 = "input" === e3.io ? "transform" === s2.in._zod.def.type ? s2.out : s2.in : s2.out;
      mf(i3, e3, n2);
      e3.seen.get(t3).ref = i3;
    }, Yf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def;
      mf(s2.innerType, e3, n2);
      e3.seen.get(t3).ref = s2.innerType, r3.readOnly = true;
    }, jf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def;
      mf(s2.innerType, e3, n2);
      e3.seen.get(t3).ref = s2.innerType;
    }, Xf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.def;
      mf(s2.innerType, e3, n2);
      e3.seen.get(t3).ref = s2.innerType;
    }, Zf = (t3, e3, r3, n2) => {
      const s2 = t3._zod.innerType;
      mf(s2, e3, n2);
      e3.seen.get(t3).ref = s2;
    };
    const tp = Ma("ZodISODateTime", (t3, e3) => {
      Nl.init(t3, e3), Cp.init(t3, e3);
    });
    function ep(t3) {
      return (function(t4, e3) {
        return new t4({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...lu(e3) });
      })(tp, t3);
    }
    const rp = Ma("ZodISODate", (t3, e3) => {
      Dl.init(t3, e3), Cp.init(t3, e3);
    });
    function np(t3) {
      return (function(t4, e3) {
        return new t4({ type: "string", format: "date", check: "string_format", ...lu(e3) });
      })(rp, t3);
    }
    const sp = Ma("ZodISOTime", (t3, e3) => {
      Ul.init(t3, e3), Cp.init(t3, e3);
    });
    function ip(t3) {
      return (function(t4, e3) {
        return new t4({ type: "string", format: "time", check: "string_format", precision: null, ...lu(e3) });
      })(sp, t3);
    }
    const op = Ma("ZodISODuration", (t3, e3) => {
      Ql.init(t3, e3), Cp.init(t3, e3);
    });
    function ap(t3) {
      return (function(t4, e3) {
        return new t4({ type: "string", format: "duration", check: "string_format", ...lu(e3) });
      })(op, t3);
    }
    const up = (t3, e3) => {
      Ju.init(t3, e3), t3.name = "ZodError", Object.defineProperties(t3, { format: { value: (e4) => (function(t4, e5 = (t5) => t5.message) {
        const r3 = { _errors: [] }, n2 = (t5) => {
          for (const s2 of t5.issues) if ("invalid_union" === s2.code && s2.errors.length) s2.errors.map((t6) => n2({ issues: t6 }));
          else if ("invalid_key" === s2.code) n2({ issues: s2.issues });
          else if ("invalid_element" === s2.code) n2({ issues: s2.issues });
          else if (0 === s2.path.length) r3._errors.push(e5(s2));
          else {
            let t6 = r3, n3 = 0;
            for (; n3 < s2.path.length; ) {
              const r4 = s2.path[n3];
              n3 === s2.path.length - 1 ? (t6[r4] = t6[r4] || { _errors: [] }, t6[r4]._errors.push(e5(s2))) : t6[r4] = t6[r4] || { _errors: [] }, t6 = t6[r4], n3++;
            }
          }
        };
        return n2(t4), r3;
      })(t3, e4) }, flatten: { value: (e4) => (function(t4, e5 = (t5) => t5.message) {
        const r3 = {}, n2 = [];
        for (const s2 of t4.issues) s2.path.length > 0 ? (r3[s2.path[0]] = r3[s2.path[0]] || [], r3[s2.path[0]].push(e5(s2))) : n2.push(e5(s2));
        return { formErrors: n2, fieldErrors: r3 };
      })(t3, e4) }, addIssue: { value: (e4) => {
        t3.issues.push(e4), t3.message = JSON.stringify(t3.issues, Ka, 2);
      } }, addIssues: { value: (e4) => {
        t3.issues.push(...e4), t3.message = JSON.stringify(t3.issues, Ka, 2);
      } }, isEmpty: { get: () => 0 === t3.issues.length } });
    }, cp = (Ma("ZodError", up), Ma("ZodError", up, { Parent: Error })), lp = Eu(cp), mp = Cu(cp), dp = ku(cp), fp = qu(cp), pp = Pu(cp), hp = Tu(cp), gp = xu(cp), Ap = Nu(cp), _p = Du(cp), yp = Uu(cp), wp = Qu(cp), Sp = Mu(cp), Jp = Ma("ZodType", (t3, e3) => (Sl.init(t3, e3), Object.assign(t3["~standard"], { jsonSchema: { input: hf(t3, "input"), output: hf(t3, "output") } }), t3.toJSONSchema = /* @__PURE__ */ ((t4, e4 = {}) => (r3) => {
      const n2 = lf({ ...r3, processors: e4 });
      return mf(t4, n2), df(n2, t4), ff(n2, t4);
    })(t3, {}), t3.def = e3, t3.type = e3.type, Object.defineProperty(t3, "_def", { value: e3 }), t3.check = (...r3) => t3.clone(Za(e3, { checks: [...e3.checks ?? [], ...r3.map((t4) => "function" == typeof t4 ? { _zod: { check: t4, def: { check: "custom" }, onattach: [] } } : t4)] }), { parent: true }), t3.with = t3.check, t3.clone = (e4, r3) => cu(t3, e4, r3), t3.brand = () => t3, t3.register = (e4, r3) => (e4.add(t3, r3), t3), t3.parse = (e4, r3) => lp(t3, e4, r3, { callee: t3.parse }), t3.safeParse = (e4, r3) => dp(t3, e4, r3), t3.parseAsync = async (e4, r3) => mp(t3, e4, r3, { callee: t3.parseAsync }), t3.safeParseAsync = async (e4, r3) => fp(t3, e4, r3), t3.spa = t3.safeParseAsync, t3.encode = (e4, r3) => pp(t3, e4, r3), t3.decode = (e4, r3) => hp(t3, e4, r3), t3.encodeAsync = async (e4, r3) => gp(t3, e4, r3), t3.decodeAsync = async (e4, r3) => Ap(t3, e4, r3), t3.safeEncode = (e4, r3) => _p(t3, e4, r3), t3.safeDecode = (e4, r3) => yp(t3, e4, r3), t3.safeEncodeAsync = async (e4, r3) => wp(t3, e4, r3), t3.safeDecodeAsync = async (e4, r3) => Sp(t3, e4, r3), t3.refine = (e4, r3) => t3.check(hA(e4, r3)), t3.superRefine = (e4) => t3.check(gA(e4)), t3.overwrite = (e4) => t3.check(ef(e4)), t3.optional = () => xg(t3), t3.exactOptional = () => Dg(t3), t3.nullable = () => Qg(t3), t3.nullish = () => xg(Qg(t3)), t3.nonoptional = (e4) => Hg(t3, e4), t3.array = () => tg(t3), t3.or = (e4) => ag([t3, e4]), t3.and = (e4) => fg(t3, e4), t3.transform = (e4) => Zg(t3, Pg(e4)), t3.default = (e4) => Fg(t3, e4), t3.prefault = (e4) => $g(t3, e4), t3.catch = (e4) => Wg(t3, e4), t3.pipe = (e4) => Zg(t3, e4), t3.readonly = () => nA(t3), t3.describe = (e4) => {
      const r3 = t3.clone();
      return cd.add(r3, { description: e4 }), r3;
    }, Object.defineProperty(t3, "description", { get: () => cd.get(t3)?.description, configurable: true }), t3.meta = (...e4) => {
      if (0 === e4.length) return cd.get(t3);
      const r3 = t3.clone();
      return cd.add(r3, e4[0]), r3;
    }, t3.isOptional = () => t3.safeParse(void 0).success, t3.isNullable = () => t3.safeParse(null).success, t3.apply = (e4) => e4(t3), t3)), Bp = Ma("_ZodString", (t3, e3) => {
      Jl.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r4, n2) => Af(t3, e4, r4);
      const r3 = t3._zod.bag;
      t3.format = r3.format ?? null, t3.minLength = r3.minimum ?? null, t3.maxLength = r3.maximum ?? null, t3.regex = (...e4) => t3.check(Vd(...e4)), t3.includes = (...e4) => t3.check(Yd(...e4)), t3.startsWith = (...e4) => t3.check(jd(...e4)), t3.endsWith = (...e4) => t3.check(Xd(...e4)), t3.min = (...e4) => t3.check(Hd(...e4)), t3.max = (...e4) => t3.check(Gd(...e4)), t3.length = (...e4) => t3.check(Kd(...e4)), t3.nonempty = (...e4) => t3.check(Hd(1, ...e4)), t3.lowercase = (e4) => t3.check(zd(e4)), t3.uppercase = (e4) => t3.check(Wd(e4)), t3.trim = () => t3.check(nf()), t3.normalize = (...e4) => t3.check(rf(...e4)), t3.toLowerCase = () => t3.check(sf()), t3.toUpperCase = () => t3.check(of()), t3.slugify = () => t3.check(af());
    }), Ep = Ma("ZodString", (t3, e3) => {
      Jl.init(t3, e3), Bp.init(t3, e3), t3.email = (e4) => t3.check(ld(bp, e4)), t3.url = (e4) => t3.check(gd(Dp, e4)), t3.jwt = (e4) => t3.check(Rd(hh, e4)), t3.emoji = (e4) => t3.check(Ad(Mp, e4)), t3.guid = (e4) => t3.check(md(vp, e4)), t3.uuid = (e4) => t3.check(dd(Rp, e4)), t3.uuidv4 = (e4) => t3.check(fd(Rp, e4)), t3.uuidv6 = (e4) => t3.check(pd(Rp, e4)), t3.uuidv7 = (e4) => t3.check(hd(Rp, e4)), t3.nanoid = (e4) => t3.check(_d(Fp, e4)), t3.guid = (e4) => t3.check(md(vp, e4)), t3.cuid = (e4) => t3.check(yd($p, e4)), t3.cuid2 = (e4) => t3.check(wd(Hp, e4)), t3.ulid = (e4) => t3.check(Sd(Vp, e4)), t3.base64 = (e4) => t3.check(kd(ch, e4)), t3.base64url = (e4) => t3.check(vd(mh, e4)), t3.xid = (e4) => t3.check(Jd(Wp, e4)), t3.ksuid = (e4) => t3.check(Bd(jp, e4)), t3.ipv4 = (e4) => t3.check(Ed(Zp, e4)), t3.ipv6 = (e4) => t3.check(Id(nh, e4)), t3.cidrv4 = (e4) => t3.check(Cd(ih, e4)), t3.cidrv6 = (e4) => t3.check(bd(ah, e4)), t3.e164 = (e4) => t3.check(qd(fh, e4)), t3.datetime = (e4) => t3.check(ep(e4)), t3.date = (e4) => t3.check(np(e4)), t3.time = (e4) => t3.check(ip(e4)), t3.duration = (e4) => t3.check(ap(e4));
    });
    function Ip(t3) {
      return (function(t4, e3) {
        return new t4({ type: "string", ...lu(e3) });
      })(Ep, t3);
    }
    const Cp = Ma("ZodStringFormat", (t3, e3) => {
      Bl.init(t3, e3), Bp.init(t3, e3);
    }), bp = Ma("ZodEmail", (t3, e3) => {
      Cl.init(t3, e3), Cp.init(t3, e3);
    });
    function kp(t3) {
      return ld(bp, t3);
    }
    const vp = Ma("ZodGUID", (t3, e3) => {
      El.init(t3, e3), Cp.init(t3, e3);
    });
    function qp(t3) {
      return md(vp, t3);
    }
    const Rp = Ma("ZodUUID", (t3, e3) => {
      Il.init(t3, e3), Cp.init(t3, e3);
    });
    function Pp(t3) {
      return dd(Rp, t3);
    }
    function Tp(t3) {
      return fd(Rp, t3);
    }
    function xp(t3) {
      return pd(Rp, t3);
    }
    function Np(t3) {
      return hd(Rp, t3);
    }
    const Dp = Ma("ZodURL", (t3, e3) => {
      bl.init(t3, e3), Cp.init(t3, e3);
    });
    function Up(t3) {
      return gd(Dp, t3);
    }
    function Qp(t3) {
      return gd(Dp, { protocol: /^https?$/, hostname: hc, ...lu(t3) });
    }
    const Mp = Ma("ZodEmoji", (t3, e3) => {
      kl.init(t3, e3), Cp.init(t3, e3);
    });
    function Op(t3) {
      return Ad(Mp, t3);
    }
    const Fp = Ma("ZodNanoID", (t3, e3) => {
      vl.init(t3, e3), Cp.init(t3, e3);
    });
    function Lp(t3) {
      return _d(Fp, t3);
    }
    const $p = Ma("ZodCUID", (t3, e3) => {
      ql.init(t3, e3), Cp.init(t3, e3);
    });
    function Gp(t3) {
      return yd($p, t3);
    }
    const Hp = Ma("ZodCUID2", (t3, e3) => {
      Rl.init(t3, e3), Cp.init(t3, e3);
    });
    function Kp(t3) {
      return wd(Hp, t3);
    }
    const Vp = Ma("ZodULID", (t3, e3) => {
      Pl.init(t3, e3), Cp.init(t3, e3);
    });
    function zp(t3) {
      return Sd(Vp, t3);
    }
    const Wp = Ma("ZodXID", (t3, e3) => {
      Tl.init(t3, e3), Cp.init(t3, e3);
    });
    function Yp(t3) {
      return Jd(Wp, t3);
    }
    const jp = Ma("ZodKSUID", (t3, e3) => {
      xl.init(t3, e3), Cp.init(t3, e3);
    });
    function Xp(t3) {
      return Bd(jp, t3);
    }
    const Zp = Ma("ZodIPv4", (t3, e3) => {
      Ml.init(t3, e3), Cp.init(t3, e3);
    });
    function th(t3) {
      return Ed(Zp, t3);
    }
    const eh = Ma("ZodMAC", (t3, e3) => {
      Fl.init(t3, e3), Cp.init(t3, e3);
    });
    function rh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "string", format: "mac", check: "string_format", abort: false, ...lu(e3) });
      })(eh, t3);
    }
    const nh = Ma("ZodIPv6", (t3, e3) => {
      Ol.init(t3, e3), Cp.init(t3, e3);
    });
    function sh(t3) {
      return Id(nh, t3);
    }
    const ih = Ma("ZodCIDRv4", (t3, e3) => {
      Ll.init(t3, e3), Cp.init(t3, e3);
    });
    function oh(t3) {
      return Cd(ih, t3);
    }
    const ah = Ma("ZodCIDRv6", (t3, e3) => {
      $l.init(t3, e3), Cp.init(t3, e3);
    });
    function uh(t3) {
      return bd(ah, t3);
    }
    const ch = Ma("ZodBase64", (t3, e3) => {
      Hl.init(t3, e3), Cp.init(t3, e3);
    });
    function lh(t3) {
      return kd(ch, t3);
    }
    const mh = Ma("ZodBase64URL", (t3, e3) => {
      Kl.init(t3, e3), Cp.init(t3, e3);
    });
    function dh(t3) {
      return vd(mh, t3);
    }
    const fh = Ma("ZodE164", (t3, e3) => {
      Vl.init(t3, e3), Cp.init(t3, e3);
    });
    function ph(t3) {
      return qd(fh, t3);
    }
    const hh = Ma("ZodJWT", (t3, e3) => {
      zl.init(t3, e3), Cp.init(t3, e3);
    });
    function gh(t3) {
      return Rd(hh, t3);
    }
    const Ah = Ma("ZodCustomStringFormat", (t3, e3) => {
      Wl.init(t3, e3), Cp.init(t3, e3);
    });
    function _h(t3, e3, r3 = {}) {
      return cf(Ah, t3, e3, r3);
    }
    function yh(t3) {
      return cf(Ah, "hostname", pc, t3);
    }
    function wh(t3) {
      return cf(Ah, "hex", Rc, t3);
    }
    function Sh(e3, r3) {
      const n2 = `${e3}_${r3?.enc ?? "hex"}`, s2 = t2[n2];
      if (!s2) throw new Error(`Unrecognized hash format: ${n2}`);
      return cf(Ah, n2, s2, r3);
    }
    const Jh = Ma("ZodNumber", (t3, e3) => {
      Yl.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r4, n2) => _f(t3, e4, r4), t3.gt = (e4, r4) => t3.check(xd(e4, r4)), t3.gte = (e4, r4) => t3.check(Nd(e4, r4)), t3.min = (e4, r4) => t3.check(Nd(e4, r4)), t3.lt = (e4, r4) => t3.check(Pd(e4, r4)), t3.lte = (e4, r4) => t3.check(Td(e4, r4)), t3.max = (e4, r4) => t3.check(Td(e4, r4)), t3.int = (e4) => t3.check(Ih(e4)), t3.safe = (e4) => t3.check(Ih(e4)), t3.positive = (e4) => t3.check(xd(0, e4)), t3.nonnegative = (e4) => t3.check(Nd(0, e4)), t3.negative = (e4) => t3.check(Pd(0, e4)), t3.nonpositive = (e4) => t3.check(Td(0, e4)), t3.multipleOf = (e4, r4) => t3.check(Od(e4, r4)), t3.step = (e4, r4) => t3.check(Od(e4, r4)), t3.finite = () => t3;
      const r3 = t3._zod.bag;
      t3.minValue = Math.max(r3.minimum ?? Number.NEGATIVE_INFINITY, r3.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t3.maxValue = Math.min(r3.maximum ?? Number.POSITIVE_INFINITY, r3.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t3.isInt = (r3.format ?? "").includes("int") || Number.isSafeInteger(r3.multipleOf ?? 0.5), t3.isFinite = true, t3.format = r3.format ?? null;
    });
    function Bh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "number", checks: [], ...lu(e3) });
      })(Jh, t3);
    }
    const Eh = Ma("ZodNumberFormat", (t3, e3) => {
      jl.init(t3, e3), Jh.init(t3, e3);
    });
    function Ih(t3) {
      return (function(t4, e3) {
        return new t4({ type: "number", check: "number_format", abort: false, format: "safeint", ...lu(e3) });
      })(Eh, t3);
    }
    function Ch(t3) {
      return (function(t4, e3) {
        return new t4({ type: "number", check: "number_format", abort: false, format: "float32", ...lu(e3) });
      })(Eh, t3);
    }
    function bh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "number", check: "number_format", abort: false, format: "float64", ...lu(e3) });
      })(Eh, t3);
    }
    function kh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "number", check: "number_format", abort: false, format: "int32", ...lu(e3) });
      })(Eh, t3);
    }
    function vh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "number", check: "number_format", abort: false, format: "uint32", ...lu(e3) });
      })(Eh, t3);
    }
    const qh = Ma("ZodBoolean", (t3, e3) => {
      Xl.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => yf(0, 0, e4);
    });
    function Rh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "boolean", ...lu(e3) });
      })(qh, t3);
    }
    const Ph = Ma("ZodBigInt", (t3, e3) => {
      Zl.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r4) => wf(0, t4), t3.gte = (e4, r4) => t3.check(Nd(e4, r4)), t3.min = (e4, r4) => t3.check(Nd(e4, r4)), t3.gt = (e4, r4) => t3.check(xd(e4, r4)), t3.gte = (e4, r4) => t3.check(Nd(e4, r4)), t3.min = (e4, r4) => t3.check(Nd(e4, r4)), t3.lt = (e4, r4) => t3.check(Pd(e4, r4)), t3.lte = (e4, r4) => t3.check(Td(e4, r4)), t3.max = (e4, r4) => t3.check(Td(e4, r4)), t3.positive = (e4) => t3.check(xd(BigInt(0), e4)), t3.negative = (e4) => t3.check(Pd(BigInt(0), e4)), t3.nonpositive = (e4) => t3.check(Td(BigInt(0), e4)), t3.nonnegative = (e4) => t3.check(Nd(BigInt(0), e4)), t3.multipleOf = (e4, r4) => t3.check(Od(e4, r4));
      const r3 = t3._zod.bag;
      t3.minValue = r3.minimum ?? null, t3.maxValue = r3.maximum ?? null, t3.format = r3.format ?? null;
    });
    function Th(t3) {
      return (function(t4, e3) {
        return new t4({ type: "bigint", ...lu(e3) });
      })(Ph, t3);
    }
    const xh = Ma("ZodBigIntFormat", (t3, e3) => {
      tm.init(t3, e3), Ph.init(t3, e3);
    });
    function Nh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "bigint", check: "bigint_format", abort: false, format: "int64", ...lu(e3) });
      })(xh, t3);
    }
    function Dh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "bigint", check: "bigint_format", abort: false, format: "uint64", ...lu(e3) });
      })(xh, t3);
    }
    const Uh = Ma("ZodSymbol", (t3, e3) => {
      em.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Sf(0, t4);
    });
    function Qh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "symbol", ...lu(e3) });
      })(Uh, t3);
    }
    const Mh = Ma("ZodUndefined", (t3, e3) => {
      rm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Bf(0, t4);
    });
    function Oh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "undefined", ...lu(e3) });
      })(Mh, t3);
    }
    const Fh = Ma("ZodNull", (t3, e3) => {
      nm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Jf(0, t4, e4);
    });
    function Lh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "null", ...lu(e3) });
      })(Fh, t3);
    }
    const $h = Ma("ZodAny", (t3, e3) => {
      sm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => {
      };
    });
    function Gh() {
      return (function(t3) {
        return new t3({ type: "any" });
      })($h);
    }
    const Hh = Ma("ZodUnknown", (t3, e3) => {
      im.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => {
      };
    });
    function Kh() {
      return (function(t3) {
        return new t3({ type: "unknown" });
      })(Hh);
    }
    const Vh = Ma("ZodNever", (t3, e3) => {
      om.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => If(0, 0, e4);
    });
    function zh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "never", ...lu(e3) });
      })(Vh, t3);
    }
    const Wh = Ma("ZodVoid", (t3, e3) => {
      am.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Ef(0, t4);
    });
    function Yh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "void", ...lu(e3) });
      })(Wh, t3);
    }
    const jh = Ma("ZodDate", (t3, e3) => {
      um.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r4) => Cf(0, t4), t3.min = (e4, r4) => t3.check(Nd(e4, r4)), t3.max = (e4, r4) => t3.check(Td(e4, r4));
      const r3 = t3._zod.bag;
      t3.minDate = r3.minimum ? new Date(r3.minimum) : null, t3.maxDate = r3.maximum ? new Date(r3.maximum) : null;
    });
    function Xh(t3) {
      return (function(t4, e3) {
        return new t4({ type: "date", ...lu(e3) });
      })(jh, t3);
    }
    const Zh = Ma("ZodArray", (t3, e3) => {
      lm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Qf(t3, e4, r3, n2), t3.element = e3.element, t3.min = (e4, r3) => t3.check(Hd(e4, r3)), t3.nonempty = (e4) => t3.check(Hd(1, e4)), t3.max = (e4, r3) => t3.check(Gd(e4, r3)), t3.length = (e4, r3) => t3.check(Kd(e4, r3)), t3.unwrap = () => t3.element;
    });
    function tg(t3, e3) {
      return (function(t4, e4, r3) {
        return new t4({ type: "array", element: e4, ...lu(r3) });
      })(Zh, t3, e3);
    }
    function eg(t3) {
      const e3 = t3._zod.def.shape;
      return Ig(Object.keys(e3));
    }
    const rg = Ma("ZodObject", (t3, e3) => {
      hm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Mf(t3, e4, r3, n2), ja(t3, "shape", () => e3.shape), t3.keyof = () => Ig(Object.keys(t3._zod.def.shape)), t3.catchall = (e4) => t3.clone({ ...t3._zod.def, catchall: e4 }), t3.passthrough = () => t3.clone({ ...t3._zod.def, catchall: Kh() }), t3.loose = () => t3.clone({ ...t3._zod.def, catchall: Kh() }), t3.strict = () => t3.clone({ ...t3._zod.def, catchall: zh() }), t3.strip = () => t3.clone({ ...t3._zod.def, catchall: void 0 }), t3.extend = (e4) => (function(t4, e5) {
        if (!su(e5)) throw new Error("Invalid input to extend: expected a plain object");
        const r3 = t4._zod.def.checks;
        if (r3 && r3.length > 0) {
          const r4 = t4._zod.def.shape;
          for (const t5 in e5) if (void 0 !== Object.getOwnPropertyDescriptor(r4, t5)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
        }
        const n2 = Za(t4._zod.def, { get shape() {
          const r4 = { ...t4._zod.def.shape, ...e5 };
          return Xa(this, "shape", r4), r4;
        } });
        return cu(t4, n2);
      })(t3, e4), t3.safeExtend = (e4) => (function(t4, e5) {
        if (!su(e5)) throw new Error("Invalid input to safeExtend: expected a plain object");
        const r3 = Za(t4._zod.def, { get shape() {
          const r4 = { ...t4._zod.def.shape, ...e5 };
          return Xa(this, "shape", r4), r4;
        } });
        return cu(t4, r3);
      })(t3, e4), t3.merge = (e4) => (function(t4, e5) {
        const r3 = Za(t4._zod.def, { get shape() {
          const r4 = { ...t4._zod.def.shape, ...e5._zod.def.shape };
          return Xa(this, "shape", r4), r4;
        }, get catchall() {
          return e5._zod.def.catchall;
        }, checks: [] });
        return cu(t4, r3);
      })(t3, e4), t3.pick = (e4) => (function(t4, e5) {
        const r3 = t4._zod.def, n2 = r3.checks;
        if (n2 && n2.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
        return cu(t4, Za(t4._zod.def, { get shape() {
          const t5 = {};
          for (const n3 in e5) {
            if (!(n3 in r3.shape)) throw new Error(`Unrecognized key: "${n3}"`);
            e5[n3] && (t5[n3] = r3.shape[n3]);
          }
          return Xa(this, "shape", t5), t5;
        }, checks: [] }));
      })(t3, e4), t3.omit = (e4) => (function(t4, e5) {
        const r3 = t4._zod.def, n2 = r3.checks;
        if (n2 && n2.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
        const s2 = Za(t4._zod.def, { get shape() {
          const n3 = { ...t4._zod.def.shape };
          for (const t5 in e5) {
            if (!(t5 in r3.shape)) throw new Error(`Unrecognized key: "${t5}"`);
            e5[t5] && delete n3[t5];
          }
          return Xa(this, "shape", n3), n3;
        }, checks: [] });
        return cu(t4, s2);
      })(t3, e4), t3.partial = (...e4) => (function(t4, e5, r3) {
        const n2 = e5._zod.def.checks;
        if (n2 && n2.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
        const s2 = Za(e5._zod.def, { get shape() {
          const n3 = e5._zod.def.shape, s3 = { ...n3 };
          if (r3) for (const e6 in r3) {
            if (!(e6 in n3)) throw new Error(`Unrecognized key: "${e6}"`);
            r3[e6] && (s3[e6] = t4 ? new t4({ type: "optional", innerType: n3[e6] }) : n3[e6]);
          }
          else for (const e6 in n3) s3[e6] = t4 ? new t4({ type: "optional", innerType: n3[e6] }) : n3[e6];
          return Xa(this, "shape", s3), s3;
        }, checks: [] });
        return cu(e5, s2);
      })(Tg, t3, e4[0]), t3.required = (...e4) => (function(t4, e5, r3) {
        const n2 = Za(e5._zod.def, { get shape() {
          const n3 = e5._zod.def.shape, s2 = { ...n3 };
          if (r3) for (const e6 in r3) {
            if (!(e6 in s2)) throw new Error(`Unrecognized key: "${e6}"`);
            r3[e6] && (s2[e6] = new t4({ type: "nonoptional", innerType: n3[e6] }));
          }
          else for (const e6 in n3) s2[e6] = new t4({ type: "nonoptional", innerType: n3[e6] });
          return Xa(this, "shape", s2), s2;
        } });
        return cu(e5, n2);
      })(Gg, t3, e4[0]);
    });
    function ng(t3, e3) {
      const r3 = { type: "object", shape: t3 ?? {}, ...lu(e3) };
      return new rg(r3);
    }
    function sg(t3, e3) {
      return new rg({ type: "object", shape: t3, catchall: zh(), ...lu(e3) });
    }
    function ig(t3, e3) {
      return new rg({ type: "object", shape: t3, catchall: Kh(), ...lu(e3) });
    }
    const og = Ma("ZodUnion", (t3, e3) => {
      Am.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Of(t3, e4, r3, n2), t3.options = e3.options;
    });
    function ag(t3, e3) {
      return new og({ type: "union", options: t3, ...lu(e3) });
    }
    const ug = Ma("ZodXor", (t3, e3) => {
      og.init(t3, e3), ym.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Of(t3, e4, r3, n2), t3.options = e3.options;
    });
    function cg(t3, e3) {
      return new ug({ type: "union", options: t3, inclusive: false, ...lu(e3) });
    }
    const lg = Ma("ZodDiscriminatedUnion", (t3, e3) => {
      og.init(t3, e3), wm.init(t3, e3);
    });
    function mg(t3, e3, r3) {
      return new lg({ type: "union", options: e3, discriminator: t3, ...lu(r3) });
    }
    const dg = Ma("ZodIntersection", (t3, e3) => {
      Sm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Ff(t3, e4, r3, n2);
    });
    function fg(t3, e3) {
      return new dg({ type: "intersection", left: t3, right: e3 });
    }
    const pg = Ma("ZodTuple", (t3, e3) => {
      Em.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Lf(t3, e4, r3, n2), t3.rest = (e4) => t3.clone({ ...t3._zod.def, rest: e4 });
    });
    function hg(t3, e3, r3) {
      const n2 = e3 instanceof Sl;
      return new pg({ type: "tuple", items: t3, rest: n2 ? e3 : null, ...lu(n2 ? r3 : e3) });
    }
    const gg = Ma("ZodRecord", (t3, e3) => {
      Cm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => $f(t3, e4, r3, n2), t3.keyType = e3.keyType, t3.valueType = e3.valueType;
    });
    function Ag(t3, e3, r3) {
      return new gg({ type: "record", keyType: t3, valueType: e3, ...lu(r3) });
    }
    function _g(t3, e3, r3) {
      const n2 = cu(t3);
      return n2._zod.values = void 0, new gg({ type: "record", keyType: n2, valueType: e3, ...lu(r3) });
    }
    function yg(t3, e3, r3) {
      return new gg({ type: "record", keyType: t3, valueType: e3, mode: "loose", ...lu(r3) });
    }
    const wg = Ma("ZodMap", (t3, e3) => {
      bm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Df(0, t4), t3.keyType = e3.keyType, t3.valueType = e3.valueType, t3.min = (...e4) => t3.check(Ld(...e4)), t3.nonempty = (e4) => t3.check(Ld(1, e4)), t3.max = (...e4) => t3.check(Fd(...e4)), t3.size = (...e4) => t3.check($d(...e4));
    });
    function Sg(t3, e3, r3) {
      return new wg({ type: "map", keyType: t3, valueType: e3, ...lu(r3) });
    }
    const Jg = Ma("ZodSet", (t3, e3) => {
      vm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Uf(0, t4), t3.min = (...e4) => t3.check(Ld(...e4)), t3.nonempty = (e4) => t3.check(Ld(1, e4)), t3.max = (...e4) => t3.check(Fd(...e4)), t3.size = (...e4) => t3.check($d(...e4));
    });
    function Bg(t3, e3) {
      return new Jg({ type: "set", valueType: t3, ...lu(e3) });
    }
    const Eg = Ma("ZodEnum", (t3, e3) => {
      Rm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r4, n2) => bf(t3, 0, r4), t3.enum = e3.entries, t3.options = Object.values(e3.entries);
      const r3 = new Set(Object.keys(e3.entries));
      t3.extract = (t4, n2) => {
        const s2 = {};
        for (const n3 of t4) {
          if (!r3.has(n3)) throw new Error(`Key ${n3} not found in enum`);
          s2[n3] = e3.entries[n3];
        }
        return new Eg({ ...e3, checks: [], ...lu(n2), entries: s2 });
      }, t3.exclude = (t4, n2) => {
        const s2 = { ...e3.entries };
        for (const e4 of t4) {
          if (!r3.has(e4)) throw new Error(`Key ${e4} not found in enum`);
          delete s2[e4];
        }
        return new Eg({ ...e3, checks: [], ...lu(n2), entries: s2 });
      };
    });
    function Ig(t3, e3) {
      const r3 = Array.isArray(t3) ? Object.fromEntries(t3.map((t4) => [t4, t4])) : t3;
      return new Eg({ type: "enum", entries: r3, ...lu(e3) });
    }
    function Cg(t3, e3) {
      return new Eg({ type: "enum", entries: t3, ...lu(e3) });
    }
    const bg = Ma("ZodLiteral", (t3, e3) => {
      Pm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => kf(t3, e4, r3), t3.values = new Set(e3.values), Object.defineProperty(t3, "value", { get() {
        if (e3.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return e3.values[0];
      } });
    });
    function kg(t3, e3) {
      return new bg({ type: "literal", values: Array.isArray(t3) ? t3 : [t3], ...lu(e3) });
    }
    const vg = Ma("ZodFile", (t3, e3) => {
      Tm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Rf(t3, 0, r3), t3.min = (e4, r3) => t3.check(Ld(e4, r3)), t3.max = (e4, r3) => t3.check(Fd(e4, r3)), t3.mime = (e4, r3) => t3.check(tf(Array.isArray(e4) ? e4 : [e4], r3));
    });
    function qg(t3) {
      return (function(t4, e3) {
        return new t4({ type: "file", ...lu(e3) });
      })(vg, t3);
    }
    const Rg = Ma("ZodTransform", (t3, e3) => {
      xm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Nf(0, t4), t3._zod.parse = (r3, n2) => {
        if ("backward" === n2.direction) throw new Fa(t3.constructor.name);
        r3.addIssue = (n3) => {
          if ("string" == typeof n3) r3.issues.push(wu(n3, r3.value, e3));
          else {
            const e4 = n3;
            e4.fatal && (e4.continue = false), e4.code ?? (e4.code = "custom"), e4.input ?? (e4.input = r3.value), e4.inst ?? (e4.inst = t3), r3.issues.push(wu(e4));
          }
        };
        const s2 = e3.transform(r3.value, r3);
        return s2 instanceof Promise ? s2.then((t4) => (r3.value = t4, r3)) : (r3.value = s2, r3);
      };
    });
    function Pg(t3) {
      return new Rg({ type: "transform", transform: t3 });
    }
    const Tg = Ma("ZodOptional", (t3, e3) => {
      Dm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Xf(t3, e4, 0, n2), t3.unwrap = () => t3._zod.def.innerType;
    });
    function xg(t3) {
      return new Tg({ type: "optional", innerType: t3 });
    }
    const Ng = Ma("ZodExactOptional", (t3, e3) => {
      Um.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Xf(t3, e4, 0, n2), t3.unwrap = () => t3._zod.def.innerType;
    });
    function Dg(t3) {
      return new Ng({ type: "optional", innerType: t3 });
    }
    const Ug = Ma("ZodNullable", (t3, e3) => {
      Qm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Gf(t3, e4, r3, n2), t3.unwrap = () => t3._zod.def.innerType;
    });
    function Qg(t3) {
      return new Ug({ type: "nullable", innerType: t3 });
    }
    function Mg(t3) {
      return xg(Qg(t3));
    }
    const Og = Ma("ZodDefault", (t3, e3) => {
      Mm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Kf(t3, e4, r3, n2), t3.unwrap = () => t3._zod.def.innerType, t3.removeDefault = t3.unwrap;
    });
    function Fg(t3, e3) {
      return new Og({ type: "default", innerType: t3, get defaultValue() {
        return "function" == typeof e3 ? e3() : iu(e3);
      } });
    }
    const Lg = Ma("ZodPrefault", (t3, e3) => {
      Fm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Vf(t3, e4, r3, n2), t3.unwrap = () => t3._zod.def.innerType;
    });
    function $g(t3, e3) {
      return new Lg({ type: "prefault", innerType: t3, get defaultValue() {
        return "function" == typeof e3 ? e3() : iu(e3);
      } });
    }
    const Gg = Ma("ZodNonOptional", (t3, e3) => {
      Lm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Hf(t3, e4, 0, n2), t3.unwrap = () => t3._zod.def.innerType;
    });
    function Hg(t3, e3) {
      return new Gg({ type: "nonoptional", innerType: t3, ...lu(e3) });
    }
    const Kg = Ma("ZodSuccess", (t3, e3) => {
      Gm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Pf(0, 0, e4), t3.unwrap = () => t3._zod.def.innerType;
    });
    function Vg(t3) {
      return new Kg({ type: "success", innerType: t3 });
    }
    const zg = Ma("ZodCatch", (t3, e3) => {
      Hm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => zf(t3, e4, r3, n2), t3.unwrap = () => t3._zod.def.innerType, t3.removeCatch = t3.unwrap;
    });
    function Wg(t3, e3) {
      return new zg({ type: "catch", innerType: t3, catchValue: "function" == typeof e3 ? e3 : () => e3 });
    }
    const Yg = Ma("ZodNaN", (t3, e3) => {
      Km.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => vf(0, t4);
    });
    function jg(t3) {
      return (function(t4, e3) {
        return new t4({ type: "nan", ...lu(e3) });
      })(Yg, t3);
    }
    const Xg = Ma("ZodPipe", (t3, e3) => {
      Vm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Wf(t3, e4, 0, n2), t3.in = e3.in, t3.out = e3.out;
    });
    function Zg(t3, e3) {
      return new Xg({ type: "pipe", in: t3, out: e3 });
    }
    const tA = Ma("ZodCodec", (t3, e3) => {
      Xg.init(t3, e3), Wm.init(t3, e3);
    });
    function eA(t3, e3, r3) {
      return new tA({ type: "pipe", in: t3, out: e3, transform: r3.decode, reverseTransform: r3.encode });
    }
    const rA = Ma("ZodReadonly", (t3, e3) => {
      Xm.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Yf(t3, e4, r3, n2), t3.unwrap = () => t3._zod.def.innerType;
    });
    function nA(t3) {
      return new rA({ type: "readonly", innerType: t3 });
    }
    const sA = Ma("ZodTemplateLiteral", (t3, e3) => {
      td.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => qf(t3, 0, r3);
    });
    function iA(t3, e3) {
      return new sA({ type: "template_literal", parts: t3, ...lu(e3) });
    }
    const oA = Ma("ZodLazy", (t3, e3) => {
      nd.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => Zf(t3, e4, 0, n2), t3.unwrap = () => t3._zod.def.getter();
    });
    function aA(t3) {
      return new oA({ type: "lazy", getter: t3 });
    }
    const uA = Ma("ZodPromise", (t3, e3) => {
      rd.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (e4, r3, n2) => jf(t3, e4, 0, n2), t3.unwrap = () => t3._zod.def.innerType;
    });
    function cA(t3) {
      return new uA({ type: "promise", innerType: t3 });
    }
    const lA = Ma("ZodFunction", (t3, e3) => {
      ed.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => xf(0, t4);
    });
    function mA(t3) {
      return new lA({ type: "function", input: Array.isArray(t3?.input) ? hg(t3?.input) : t3?.input ?? tg(Kh()), output: t3?.output ?? Kh() });
    }
    const dA = Ma("ZodCustom", (t3, e3) => {
      sd.init(t3, e3), Jp.init(t3, e3), t3._zod.processJSONSchema = (t4, e4, r3) => Tf(0, t4);
    });
    function fA(t3) {
      const e3 = new Wc({ check: "custom" });
      return e3._zod.check = t3, e3;
    }
    function pA(t3, e3) {
      return (function(t4, e4, r3) {
        const n2 = lu(r3);
        return n2.abort ?? (n2.abort = true), new t4({ type: "custom", check: "custom", fn: e4, ...n2 });
      })(dA, t3 ?? (() => true), e3);
    }
    function hA(t3, e3 = {}) {
      return (function(t4, e4, r3) {
        return new t4({ type: "custom", check: "custom", fn: e4, ...lu(r3) });
      })(dA, t3, e3);
    }
    function gA(t3) {
      return uf(t3);
    }
    const AA = function(t3) {
      const e3 = new Wc({ check: "describe" });
      return e3._zod.onattach = [(e4) => {
        const r3 = cd.get(e4) ?? {};
        cd.add(e4, { ...r3, description: t3 });
      }], e3._zod.check = () => {
      }, e3;
    }, _A = function(t3) {
      const e3 = new Wc({ check: "meta" });
      return e3._zod.onattach = [(e4) => {
        const r3 = cd.get(e4) ?? {};
        cd.add(e4, { ...r3, ...t3 });
      }], e3._zod.check = () => {
      }, e3;
    };
    function yA(t3, e3 = {}) {
      const r3 = new dA({ type: "custom", check: "custom", fn: (e4) => e4 instanceof t3, abort: true, ...lu(e3) });
      return r3._zod.bag.Class = t3, r3._zod.check = (e4) => {
        e4.value instanceof t3 || e4.issues.push({ code: "invalid_type", expected: t3.name, input: e4.value, inst: r3, path: [...r3._zod.def.path ?? []] });
      }, r3;
    }
    const wA = (...t3) => (function(t4, e3) {
      const r3 = lu(e3);
      let n2 = r3.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], s2 = r3.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
      "sensitive" !== r3.case && (n2 = n2.map((t5) => "string" == typeof t5 ? t5.toLowerCase() : t5), s2 = s2.map((t5) => "string" == typeof t5 ? t5.toLowerCase() : t5));
      const i3 = new Set(n2), o3 = new Set(s2), a2 = t4.Codec ?? Wm, u2 = t4.Boolean ?? Xl, c2 = new a2({ type: "pipe", in: new (t4.String ?? Jl)({ type: "string", error: r3.error }), out: new u2({ type: "boolean", error: r3.error }), transform: (t5, e4) => {
        let n3 = t5;
        return "sensitive" !== r3.case && (n3 = n3.toLowerCase()), !!i3.has(n3) || !o3.has(n3) && (e4.issues.push({ code: "invalid_value", expected: "stringbool", values: [...i3, ...o3], input: e4.value, inst: c2, continue: false }), {});
      }, reverseTransform: (t5, e4) => true === t5 ? n2[0] || "true" : s2[0] || "false", error: r3.error });
      return c2;
    })({ Codec: tA, Boolean: qh, String: Ep }, ...t3);
    function SA(t3) {
      const e3 = aA(() => ag([Ip(t3), Bh(), Rh(), Lh(), tg(e3), Ag(Ip(), e3)]));
      return e3;
    }
    function JA(t3, e3) {
      return Zg(Pg(t3), e3);
    }
    const BA = "custom";
    var EA;
    EA || (EA = {});
    /* @__PURE__ */ new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
    $a({ localeError: od() });
    ng({ lifecycle: Ig(["off", "default-on", "default-off", "hidden", "end-of-life", "internal"]), pickerDisplayName: Ip().min(1).nullish(), upgradeModelId: Ip().min(1).nullish() }), Object.keys({ agent_goal_continuation: { client: true, default: true }, nal_websocket_client: { client: true, default: false }, agent_queued_prompt_new_request_id: { client: true, default: false }, org_billing_admin_role: { client: true, default: false }, team_members_show_org_admins: { client: true, default: true }, org_team_settings_copy_on_create: { client: true, default: true }, org_team_settings_copy_to_existing_team: { client: true, default: false }, org_credit_request_button_hide: { client: true, default: false }, sso_jit_auto_enrollment_settings: { client: true, default: false }, sand_mobile_session_upgrade: { client: true, default: true }, remote_agent_host_mobile: { client: true, default: false }, response_comparison_comment_prompt: { client: true, default: false }, cursor_new_colors: { client: true, default: false }, grok_bot_setup_checklist: { client: true, default: true }, grok_bot_hibernated_owner_vm_termination: { client: true, default: true }, grok_bot_team_bot_group_restrictions: { client: true, default: false }, glass_grok_bot_topbar_cta_show: { client: true, default: false, requiresAuthenticatedBootstrap: true }, grok_bot_admin_enterprise_controls_frontend_enabled: { client: true, default: false }, grok_bot_merged_bots_view_enabled: { client: true, default: false }, dashboard_grok_bot_onboarding_checklist: { client: true, default: false }, dashboard_team_checklist_origin_setup: { client: true, default: false }, dashboard_grok_bot_terms: { client: true, default: false }, gb_block_papered_org_signups: { client: true, default: false }, sand_mobile_notification_sounds: { client: true, default: false }, sand_mobile_agent_computer_console: { client: true, default: true }, sand_mobile_i18n: { client: true, default: true }, sand_mobile_home_unread_jump_pills: { client: true, default: false }, sand_mobile_failures_screen: { client: true, default: false }, sand_mobile_unified_marketplace: { client: true, default: false }, sand_mobile_feedback_kill_switch: { client: true, default: false }, sand_mobile_app_store_update_indicator: { client: true, default: true }, sand_mobile_profile_multimedia_tabs: { client: true, default: true }, sand_mobile_slash_skill_trigger: { client: true, default: true }, sand_mobile_dictation_diagnostics: { client: true, default: true }, sand_mobile_manage_subscription_kill_switch: { client: true, default: false }, sand_mobile_change_limit_kill_switch: { client: true, default: false }, sand_enable_home_pull_to_refresh: { client: true, default: false }, sand_special_settings: { client: true, default: false }, sand_messages_tools: { client: true, default: false }, sand_mobile_local_tools: { client: true, default: false }, sand_connected_activity_tool: { client: true, default: false }, grok_bot_hide_internal_details: { client: true, default: true }, grok_bot_active_reactions: { client: true, default: true }, grok_bot_link_items: { client: true, default: false }, grok_bot_renamed_prompt_markers: { client: true, default: false }, sand_automation_agent_gone_terminal: { client: true, default: false }, grok_bot_builtin_admin_tool_policy: { client: true, default: false }, mcp_grant_migration_enabled: { client: true, default: false }, hosted_mcp_routing_enabled: { client: true, default: false }, grok_bot_durable_identity: { client: true, default: true }, grok_bot_durable_identity_writes: { client: true, default: true }, grok_bot_identity_backfill: { client: true, default: true }, grok_bot_temporal_harness: { client: true, default: false }, grok_bot_stripe_link: { client: true, default: true }, grok_bot_spend_approval_passkey: { client: true, default: false }, sand_memory_dreaming: { client: true, default: false }, sand_1pass_manual_service_acct: { client: true, default: true }, sand_new_1pass: { client: true, default: false }, sand_cloud_agent_artifacts: { client: true, default: true }, sand_cloud_agent_status_stream: { client: true, default: false }, grok_bot_cloud_agent_durable_watch: { client: true, default: false }, grok_bot_cloud_agent_secret_forwarding: { client: true, default: false }, grok_bot_mcp_catalog_status_killswitch: { client: true, default: false }, sand_desktop_scm_connect: { client: true, default: false }, sand_computer_use_unicode_typing: { client: true, default: false }, sand_on_demand_settings: { client: true, default: false }, store_billed_web_on_demand: { client: true, default: true }, sand_notification_sounds: { client: true, default: false }, sand_scheduled_computer_updates: { client: true, default: false, requiresAuthenticatedBootstrap: true }, grok_bot_network_debugger: { client: true, default: false }, grok_bot_form_vault: { client: true, default: false }, sand_agent_network: { client: true, default: false }, sand_draft_external_message: { client: true, default: true }, sand_draft_external_message_by_default: { client: true, default: false }, sand_auto_review_selector: { client: true, default: false }, sand_enable_pressure_cpu_profiler: { client: true, default: true }, sand_enable_accent_theming: { client: true, default: false }, grok_bot_all_bots_color_theming: { client: true, default: false }, sand_xvf_typeface: { client: true, default: false }, sand_anonymized_egress_telemetry: { client: true, default: true }, service_account_spend_limit_enforcement: { client: true, default: false }, sand_action_audit_logs: { client: true, default: false }, grok_bot_conversation_gc: { client: true, default: true }, sand_enable_bot2bot_cloud_agent_ui: { client: true, default: false, requiresAuthenticatedBootstrap: true }, sand_hide_at_mentions: { client: true, default: false }, sand_agent_titles: { client: true, default: true }, sand_stream_idle_deadline: { client: true, default: true }, sand_enable_spoof_gpu: { client: true, default: false }, sand_browser_hardware_profile: { client: true, default: false }, sand_box_store_skip_inaccessible: { client: true, default: false }, sand_working_state_warming: { client: true, default: true, requiresAuthenticatedBootstrap: true }, grok_bot_box_harness_turns_blocked: { client: true, default: false }, sand_web_bot_auth_signing: { client: true, default: true }, sand_web_bot_auth_sign_xhr_fetch: { client: true, default: true }, sand_web_bot_auth_sign_iframes: { client: true, default: false }, sand_transcript_store_read: { client: true, default: false }, sand_transcript_store_first: { client: true, default: false }, sand_transcript_server_tail: { client: true, default: false }, sand_attachments_via_server: { client: true, default: false }, sand_better_link_unfurling: { client: true, default: true }, grok_bot_link_chip_preload: { client: true, default: false }, sand_create_temporal_agents: { client: true, default: false }, sand_client_pause: { client: true, default: false }, sand_desktop_away_park: { client: true, default: false }, sand_desktop_present_park: { client: true, default: false }, sand_roster_waking_hold: { client: true, default: false }, sand_sidebar_activity_recency: { client: true, default: false }, sand_get_grok_bot_ios: { client: true, default: true }, sand_grok_main_agent: { client: true, default: false }, sand_widget_v0: { client: true, default: false }, sand_tasks: { client: true, default: false }, sand_chat_prose_15px: { client: true, default: false }, sand_new_connect_button: { client: true, default: false }, sand_rich_text: { client: true, default: false }, grok_bot_draft_revision_highlight: { client: true, default: false }, sand_profile_photo_edit: { client: true, default: false, requiresAuthenticatedBootstrap: true }, sand_hide_working_dot: { client: true, default: false }, sand_invite_teammates: { client: true, default: false, requiresAuthenticatedBootstrap: true }, sand_grok_force_main_agent_selection: { client: true, default: false }, sand_desktop_mount: { client: true, default: false }, sand_marketplace_for_you_auth_aware: { client: true, default: false }, sand_header_template_share_menu: { client: true, default: true }, grok_bot_multiplayer: { client: true, default: false }, grok_bot_group_chats: { client: true, default: false }, grok_bot_team_bot_managers: { client: true, default: false }, grok_bot_team_bot_access_list: { client: true, default: false }, grok_bot_team_exclude_gsuite_plugins: { client: true, default: false }, grok_bot_agent_mail: { client: true, default: false }, grok_bot_agent_mail_multiple_inboxes: { client: true, default: false }, grok_bot_scm_connect_card: { client: true, default: false }, grok_bot_check_subscription_usage: { client: true, default: false }, grok_bot_search_bot_templates: { client: true, default: false }, grok_bot_template_onboarding: { client: true, default: true }, grok_bot_documents: { client: true, default: false }, grok_bot_documents_ui: { client: true, default: false }, grok_bot_library_pages: { client: true, default: false }, grok_bot_page_stage_chat: { client: true, default: false }, grok_bot_files_stage: { client: true, default: false }, grok_bot_library_v2: { client: true, default: false }, grok_bot_documents_web: { client: true, default: false }, grok_bot_library_external_docs: { client: true, default: false }, grok_bot_pages_search: { client: true, default: false }, sand_simplified_right_pane: { client: true, default: false }, sand_cloud_agent_tasks_card: { client: true, default: false }, sand_import_chrome_cookies: { client: true, default: false }, agent_prompted_cookie_sync: { client: true, default: false }, sand_voice_call: { client: true, default: false }, sand_pitman: { client: true, default: false }, sand_voice_outbound_call: { client: true, default: false }, sand_voice_call_overheard: { client: true, default: false }, sand_voice_stay_silent: { client: true, default: false }, sand_voice_async_update: { client: true, default: true }, sand_voice_reconnect: { client: true, default: true }, sand_voice_resumption: { client: true, default: false }, sand_voice_steer: { client: true, default: true }, sand_voice_final_word: { client: true, default: false }, sand_voice_memos: { client: true, default: true }, sand_voice_memo_speed: { client: true, default: true }, sand_voice_server_harness: { client: true, default: true }, sand_mcp_apps: { client: true, default: false }, sand_team_bot_voice_available: { client: true, default: false }, sand_voice_call_settings_for_teammates: { client: true, default: false }, sand_focus_staleness_catch_up: { client: true, default: false }, disable_smart_auto_show_routed_model: { client: true, default: false }, migrate_default_model_config_to_auto_smart_cost: { client: true, default: false }, app_open_model_nudge_pre_render_only: { client: true, default: false }, new_automation_templates_slack_github_triggers: { client: true, default: true }, customer_evals_ui: { client: true, default: false }, git_diff_collect_stderr: { client: true, default: false }, glass_chat_switch_tracing: { client: true, default: false }, glass_webview_guest_render_throttle_killswitch: { client: true, default: false }, glass_chat_switch_post_paint_commit: { client: true, default: false }, glass_dispose_workspace_on_release: { client: true, default: false }, glass_git_diff_meter: { client: true, default: false }, glass_agent_worktree_reroot_prompt: { client: true, default: true }, glass_cloud_meta_agents: { client: true, default: false }, named_agent_single_session: { client: true, default: false }, glass_empty_state_recommended_actions: { client: true, default: false }, glass_branch_picker_redesign: { client: true, default: false }, glass_triggers_naming: { client: true, default: false }, unified_composer_tray_debug: { client: true, default: false }, glass_remember_new_agent_environment_selection: { client: true, default: true }, glass_editor_shadow_isolation: { client: true, default: true }, glass_defer_shadow_style_rebuild: { client: true, default: false }, sand_audit_logs: { client: true, default: true }, origin_commit_email_verification_enabled: { client: true, default: false }, limit_hit_ui_kill_switch: { client: true, default: false }, rate_limited_reconnect_message_kill_switch: { client: true, default: false }, glass_no_x_on_chips: { client: true, default: false }, glass_preview_linear_tickets: { client: true, default: false }, origin_repos: { client: true, default: false }, origin_app_user_confirmation: { client: true, default: false }, origin_app_deletion: { client: true, default: false }, codebase_branches_redesign_in_progress: { client: true, default: false }, automations_origin_request_reviewers: { client: true, default: false }, origin_raw_file_links: { client: true, default: true }, origin_inbox_osp_watch: { client: true, default: false }, sand_auto_review: { client: true, default: true }, sand_auto_review_admin_enforce: { client: true, default: true }, sand_auto_review_admin_rules: { client: true, default: true }, sand_local_egress_admin_control: { client: true, default: true }, allow_disable_sudo_grok_bot: { client: true, default: false }, smart_mode_classifier_shadow_mode: { client: true, default: false }, ext_host_document_memory_estimates: { client: true, default: false }, agent_exec_text_document_api_access_tracking: { client: true, default: false }, cursor_agent_host: { client: true, default: false }, cursor_agent_host_move_exec: { client: true, default: false }, agent_host_own_request_context: { client: true, default: false }, cursor_agent_host_owned_session_storage: { client: true, default: false }, cursor_agent_host_session_storage_migrate_on_open: { client: true, default: false }, cursor_agent_host_native_cloud_subagent: { client: true, default: false }, cursor_agent_host_subagent_interactions: { client: true, default: false }, agent_host_local_loop: { client: true, default: false }, composer_send_prewarm: { client: true, default: false }, glass_local_ollama: { client: true, default: false }, agent_host_updater: { client: true, default: false }, agent_host_private_inference: { client: true, default: false }, defer_cursor_agent_exec_activation: { client: true, default: false }, shell_exec_output_backpressure: { client: true, default: true }, shell_exec_powershell_utf8_console: { client: true, default: false }, file_watcher_metrics: { client: true, default: false }, glass_shared_application_storage: { client: true, default: true }, glass_startup_connect_transport: { client: true, default: false }, reactivestorage_single_pass_stringify: { client: true, default: true }, reactive_storage_size_report_enabled: { client: true, default: false }, model_catalog_own_key: { client: true, default: false }, slow_ipc_deserialize_sentry: { client: true, default: false }, chunked_document_open_sync: { client: true, default: true }, ripgrep_invocation_monitor: { client: true, default: false }, rules_discovery_respect_cursorignore: { client: true, default: false }, subagents_discovery_allow_external_symlinks: { client: true, default: false }, grep_fallback_monitor: { client: true, default: false }, crepe_lazy_external_git_index: { client: true, default: false }, exthost_rpc_channel_history: { client: true, default: false }, exthost_rpc_metrics: { client: true, default: false }, remote_exthost_watchdog: { client: true, default: false }, glass_remote_connection_dormancy: { client: true, default: false }, disable_remote_workspace_reh_healthcheck: { client: true, default: false }, service_account_repo_scope_use_installation_fanout: { client: true, default: false }, cloud_agent_default_environment: { client: true, default: false }, grok_bot_gkw_connectors: { client: true, default: false }, ide_make_github_request_enabled: { client: true, default: false }, customize_hooks_execution_log_detail: { client: true, default: true }, skip_hooks_ready_wait_without_hooks: { client: true, default: false }, dashboard_agent_requests_heatmap: { client: true, default: false }, bugbot_enable_bulk_rules_upload_in_portal: { client: true, default: false }, team_rule_agent_type_ui: { client: true, default: false }, advanced_setup_for_self_hosted_gitlab_available: { client: true, default: false }, gitlab_com_service_account_token_available: { client: true, default: false }, enable_bitbucket_data_center_onboarding: { client: true, default: true }, enable_bitbucket: { client: true, default: true }, internal_team_user_profiles: { client: true, default: true }, user_profile_glass: { client: true, default: true }, automations_chain_prompts: { client: true, default: false }, website_use_new_model_picker_for_automations: { client: true, default: true }, green_dot_automation_status: { client: true, default: true }, automations_validate_on_enable: { client: true, default: true }, automations_retry_button: { client: true, default: false }, managed_automations_team_revamp: { client: true, default: true }, automations_gitlab_extended_triggers: { client: true, default: true }, automations_bitbucket_extended_triggers: { client: true, default: false }, automations_forge_agnostic_mirrors: { client: true, default: false }, managed_agents_enabled: { client: true, default: false }, custom_agents_enabled: { client: true, default: true }, debug_bot_customer_facing_ui: { client: true, default: false }, agents_bugbot_bottom_upsell: { client: true, default: false }, review_agents_shared_growth: { client: true, default: false }, automations_org_scoped_triggers_ui: { client: true, default: false }, cloud_agents_no_repo_enabled: { client: true, default: true }, cloud_agent_resubmit_from_message: { client: true, default: true }, glass_cloud_agent_sidebar_ci_status: { client: true, default: false }, cloud_agent_migration_resume_kickoff: { client: true, default: true }, glass_cloud_agent_fork_from_turn: { client: true, default: true }, cloud_agent_stop_permanent_stream_reconnect: { client: true, default: true }, cloud_agent_repair_stalled_pane: { client: true, default: true }, cloud_agent_plugins: { client: true, default: true }, cloud_agent_origin_env_migration_rpc: { client: true, default: false }, cloud_agent_environment_duplicate: { client: true, default: false }, local_agent_subagent_state_blob_refs: { client: true, default: false }, cloud_agent_env_setup_with_dockerfiles: { client: true, default: false }, generalized_env_setup: { client: true, default: true }, cloud_agent_ask_question_auto_answer: { client: true, default: false }, cloud_agent_ask_question_auto_answer_timeout_setting: { client: true, default: false }, cloud_agent_publish_ui: { client: true, default: false }, grok_bot_publish_confirm_card: { client: true, default: false }, cloud_agent_env_builds_default_enabled: { client: true, default: true }, cloud_agent_migrate_to_builds_setup_agent_cta: { client: true, default: true }, cloud_agent_transcript_reliability_controls: { client: true, default: true }, local_agent_transcript_search_in_glass: { client: true, default: true }, agent_conversation_search_tool: { client: true, default: true }, disable_cloud_agent_transcript_indexing_in_glass: { client: true, default: false }, nal_agent_retries: { client: true, default: true }, cli_harness_telemetry: { client: true, default: false }, cli_image_arg: { client: true, default: false }, "x-chat-context": { client: true, default: false }, referral_codes_v2: { client: true, default: true }, p2p_referrals_v1: { client: true, default: true }, oom_crash_watcher: { client: true, default: false }, local_request_tracing: { client: true, default: false }, local_request_trace_dd_slogs: { client: true, default: false }, memory_pressure_profiling: { client: true, default: true }, cpu_monitor_process_snapshot: { client: true, default: false }, issue_traces_enabled: { client: true, default: true }, glass_automations_ui: { client: true, default: true }, glass_stable_diff_group_keys: { client: true, default: false }, local_automations: { client: true, default: false }, local_automations_nav: { client: true, default: false }, glass_agent_confetti_cannon: { client: true, default: true }, glass_install_plugin_tool_enabled: { client: true, default: true }, cursor_backend_control_automation_mcp: { client: true, default: true }, glass_multi_root_workspace_editing: { client: true, default: false }, glass_search_first_repo_picker: { client: true, default: false }, glass_remote_ssh_workspace_repair: { client: true, default: true }, glass_remote_ssh_management_connection_token_loss_repair: { client: true, default: true }, glass_custom_theme_support: { client: true, default: false }, glass_send_feedback: { client: true, default: false }, glass_project_filled_user_bubble: { client: true, default: false }, environment_param_for_subagent: { client: true, default: false }, glass_assistant_message_selection_feedback: { client: true, default: false }, glass_turn_feedback_menu: { client: true, default: false }, glass_turn_actions_reply: { client: true, default: false }, glass_editor_panel_tab_copy_link: { client: true, default: false }, glass_peaky_file_trees: { client: true, default: false }, glass_markdown_table_expand: { client: true, default: false }, glass_status_bar_environment_picker: { client: true, default: false }, glass_project_agent_tool_rows: { client: true, default: false }, glass_cloud_awaiting_turn_start: { client: true, default: false }, glass_all_changes_diff_scope: { client: true, default: false }, glass_scm_dynamic_base_branch: { client: true, default: false }, glass_direct_github_connect: { client: true, default: false }, scm_connect_in_app_ad: { client: true, default: true }, scm_connect_in_app_ad_gitlab: { client: true, default: true }, scm_connect_ad_cheap_probe: { client: true, default: true }, import_cc_conversation: { client: true, default: true }, import_cc_conversation_default: { client: true, default: false }, glass_drafts_quick_action_pill: { client: true, default: false }, glass_sidebar_source_metadata: { client: true, default: false }, glass_sidebar_scroll_active_row_if_needed: { client: true, default: true }, glass_sidebar_archive_toggle: { client: true, default: false }, glass_sidebar_unified_group_headers: { client: true, default: false }, glass_sidebar_env_icons: { client: true, default: false }, glass_btw_side_question: { client: true, default: false }, glass_side_chats: { client: true, default: true }, cloud_agent_side_chats: { client: true, default: true }, cloud_agent_desktop_lease: { client: true, default: true }, cloud_agent_machine_resources: { client: true, default: false }, cloud_project_coordinator_v2: { client: true, default: true }, glass_project_worker_membership_rpc: { client: true, default: true }, glass_composer_markdown_support: { client: true, default: false }, glass_cloud_child_question_answered_in_child: { client: true, default: false }, glass_cloud_pending_interactions: { client: true, default: false }, prompt_input_image_annotation: { client: true, default: true }, glass_lazy_file_tabs: { client: true, default: true }, glass_temporary_pr_tabs: { client: true, default: false }, glass_projects_enabled: { client: true, default: false }, glass_project_pinning: { client: true, default: false }, glass_enable_main_bot: { client: true, default: false }, glass_main_bot_tasks: { client: true, default: false }, internal_cloud_project_remote_control: { client: true, default: false }, enable_add_local_agent_to_cloud_project: { client: true, default: false }, remote_agent_host_glass: { client: true, default: false }, glass_first_project_onboarding: { client: true, default: true }, dev_only_force_first_project_experience: { client: true, default: false }, staged_project_listing: { client: true, default: false }, staged_project_instant_create: { client: true, default: false }, staged_project_seeding: { client: true, default: false }, glass_project_notes_tldr_card: { client: true, default: true }, glass_project_notes_only_title_context: { client: true, default: false }, glass_project_notes_notion_links: { client: true, default: false }, glass_project_notes_document: { client: true, default: false }, glass_project_notes_manual_status: { client: true, default: false }, glass_project_notes_brief_view: { client: true, default: false }, glass_project_notes_pr_stack_pill: { client: true, default: false }, glass_project_tasks_pill: { client: true, default: false }, glass_project_pinned_tab: { client: true, default: false }, glass_projects_empty_state: { client: true, default: false }, glass_projects_unread_divider: { client: true, default: true }, glass_cloud_agents_unread_divider: { client: true, default: true }, glass_local_agents_unread_divider: { client: true, default: true }, glass_project_style_user_messages: { client: true, default: false }, glass_vercel_connect_pill_cloud: { client: true, default: false }, glass_vercel_connect_pill_local: { client: true, default: false }, web_vercel_publish_pill: { client: true, default: false }, local_interactive_child_inbox: { client: true, default: false }, glass_diff_ci_tab: { client: true, default: true }, managed_review_agent_skills_enabled: { client: true, default: false }, glass_diff_commits_tab: { client: true, default: true }, glass_diff_reviews_tab: { client: true, default: true }, glass_agentic_migration_reconcile: { client: true, default: false }, glass_cloud_to_worktree: { client: true, default: true }, glass_pr_viewed: { client: true, default: true }, glass_pr_realtime_updates: { client: true, default: false }, glass_avoid_secondary_scanline: { client: true, default: false }, skills_cli_install: { client: true, default: false }, glass_design_mode_annotations: { client: true, default: false }, glass_agent_pr_followup_pill: { client: true, default: false }, glass_open_resource_tool_enabled: { client: true, default: true }, glass_pr_tray_stack_groups: { client: true, default: false }, open_github_pr_links_in_review_cursor: { client: true, default: false }, cursor_com_review_pages: { client: true, default: false }, show_cursor_review_early_access_ad: { client: true, default: false }, smart_allowlist_required: { client: true, default: false }, bugbot_low_mode: { client: true, default: true }, bugbot_connect_repo_implicit_enable: { client: true, default: true }, bugbot_onboarding_high_effort_learning_defaults_team_v2: { client: true, default: true }, bugbot_suggested_repos_banner: { client: true, default: true }, bugbot_non_admin_enablement: { client: true, default: true }, use_model_parameters: { client: true, default: true }, use_react_model_picker: { client: true, default: true }, model_picker_max_badge: { client: true, default: false }, model_picker_hover_options: { client: true, default: false }, glass_model_picker_new_menu: { client: true, default: false }, bugbot_auto_spawn_cloud_agent: { client: true, default: true }, bugbot_fail_check_on_findings: { client: true, default: false }, composer_auto_routing_result_display: { client: true, default: true }, seat_upgrade_economics_recommendations: { client: true, default: true }, self_serve_team_tiered_pricing_conversion: { client: true, default: true }, self_serve_team_tiered_pricing_manual_conversion: { client: true, default: true }, self_serve_team_tiered_pricing_new_team_creator: { client: true, default: true }, self_serve_team_tiered_pricing_legacy_conversion: { client: true, default: false }, cursor_models_additional_budget: { client: true, default: false }, composer_enable_bga_hydration_from_snapshot: { client: true, default: true }, fix_remote_ssh_checkpoints: { client: true, default: false }, glass_composer_header_pagination: { client: true, default: false }, glass_realtime_voice: { client: true, default: false }, web_realtime_voice: { client: true, default: false }, mobile_realtime_voice: { client: true, default: false }, glass_realtime_voice_new_agent: { client: true, default: false }, web_realtime_voice_new_agent: { client: true, default: false }, mobile_realtime_voice_new_agent: { client: true, default: false }, cursor_blame: { client: true, default: false }, cursor_skill_enabled: { client: true, default: false }, onboard_skill_enabled: { client: true, default: false }, ai_attribution_tool: { client: true, default: false }, pr_metrics_admin_view_override: { client: true, default: false }, portal_files_engine_ssr_body_prefetch: { client: true, default: false }, portal_files_engine_ssr_tour_prefetch: { client: true, default: false }, portal_files_engine_ssr_browser_still: { client: true, default: false }, portal_files_engine_tour_stored_prefetch: { client: true, default: false }, portal_files_engine_card_virtualization: { client: true, default: false }, portal_files_engine_ssr_stored_tour: { client: true, default: false }, enable_code_tours_custom_prompt: { client: true, default: false }, enable_code_tour_path_scope: { client: true, default: false }, portal_pr_code_tour_stack_generate: { client: true, default: false }, enable_code_tour_section_reviewed: { client: true, default: false }, portal_pr_activity: { client: true, default: false }, agents_origin_pr_tab: { client: true, default: false }, agents_github_pr_tab: { client: true, default: false }, portal_glass_transcript: { client: true, default: false }, portal_hide_projects_sidebar: { client: true, default: true }, enable_ex_hs: { client: true, default: true }, stars_popup_ignore_dont_ask_again: { client: true, default: false }, terminal_execution_service_2: { client: true, default: true }, long_running_jobs: { client: true, default: true }, background_nudge_2: { client: true, default: true }, auto_background_foreground_tools_on_followup: { client: true, default: false }, user_message_timestamps: { client: true, default: true }, cloud_agent_preview_port_forward: { client: true, default: false }, terminal_ui_2: { client: true, default: true }, composer_protected_tooltip: { client: true, default: true }, auto_open_review_during_plan_build: { client: true, default: false }, analyze_query_intent: { client: true, default: false }, allowlist_in_ask_every_time_mode: { client: true, default: false }, analytics_output_channel: { client: true, default: false }, analytics_batch_coalesce_watermark: { client: true, default: true }, browser_features_access_control: { client: true, default: false }, cli_sandbox_default_enable: { client: true, default: false }, cli_auto_run_hint: { client: true, default: true }, "cli.hints": { client: true, default: true }, "cli.rewind": { client: true, default: true }, cli_debug_mode: { client: true, default: true }, cli_btw_side_question: { client: true, default: true }, cli_model_picker: { client: true, default: true }, cli_zen_mode_available: { client: true, default: false }, cli_show_images: { client: true, default: true }, pr_analytics: { client: true, default: false }, xai_team_link: { client: true, default: true }, xai_commerce_webview: { client: true, default: false }, xai_commerce_webview_web_billed_management: { client: true, default: false }, sand_mobile_xai_commerce_webview: { client: true, default: false }, unified_sku_billing_ui: { client: true, default: false }, block_legacy_sku_changes: { client: true, default: false }, auth_unification_ctas_930: { client: true, default: false }, use_unified_service_tokens: { client: true, default: false }, enable_cc_plugin_import: { client: true, default: true }, model_picker_nudge: { client: true, default: false }, cloud_agent_origin_repos: { client: true, default: false }, cloud_agent_new_project_entrypoint: { client: true, default: false }, cloud_agent_new_project_empty_root_commit: { client: true, default: false }, cloud_agent_new_project_jit_no_namespace: { client: true, default: false }, agent_create_repo_tray: { client: true, default: false }, agent_create_repo_tray_cloud_publish: { client: true, default: false }, codebase_browse_ask_cursor: { client: true, default: false }, enable_origin_agentic_repo_board: { client: true, default: false }, enable_origin_repo_insights: { client: true, default: false }, codebase_browse_symbol_nav: { client: true, default: true }, enable_automations_show_all_mirrored_repos: { client: true, default: false }, enable_forge_source_pr_creation_setting: { client: true, default: false }, origin_dogfooding_cursor_creation_provider_override: { client: true, default: false }, bitbucket_protected_git_scopes: { client: true, default: false }, cloud_agent_bitbucket_server_repos: { client: true, default: false }, origin_request_access_disabled: { client: true, default: false }, origin_non_admin_namespace_creation_allowed: { client: true, default: true }, origin_enable_org_member_direct_grants: { client: true, default: true }, enable_origin_external_collaborators: { client: true, default: true }, origin_repo_collaborators_tab: { client: true, default: true }, enable_origin_external_sharing: { client: true, default: true }, enable_clonekit_in_app: { client: true, default: false }, origin_mcp: { client: true, default: false, requiresAuthenticatedBootstrap: true }, enable_origin_research_preview_for_enterprises: { client: true, default: true }, marketplace_origin_distribution: { client: true, default: true }, atlas_enabled: { client: true, default: false }, mcp_oauth_hosted_loopback_callback: { client: true, default: false }, mcp_multi_account: { client: true, default: true }, sharepoint_team_connector: { client: true, default: false }, cloud_agent_interactive_mcp_auth: { client: true, default: true }, mcp_profile_scoped_global_disabled_state: { client: true, default: true }, team_mcps_in_cli: { client: true, default: false }, remote_permissions_file_path_admin: { client: true, default: false }, admin_command_denylist: { client: true, default: false }, admin_reset_agent_run_mode_to_auto_review: { client: true, default: false }, admin_command_denylist_enforcement_killswitch: { client: true, default: false }, restrict_team_member_invite_button: { client: true, default: false }, bugbot_autorun_killswitch: { client: true, default: false }, keybinding_migration_killswitch: { client: true, default: false }, agent_review_fake_dev: { client: true, default: false }, enable_moved_lines_treatment: { client: true, default: false }, ide_cmd_enter_submit: { client: true, default: true }, ide_nal_migration: { client: true, default: false }, ide_new_sidebar: { client: true, default: false }, playwright_mcp_provider: { client: true, default: true }, web_audit_events: { client: true, default: false }, web_cloud_agent_followup_model_picker: { client: true, default: true }, web_cloud_agent_new_model_picker: { client: true, default: false }, web_cloud_agent_kickoff_lands_in_run_view: { client: true, default: true }, web_cloud_agent_external_source_attachment: { client: true, default: true }, enable_new_cloud_onboarding_ui_changes: { client: true, default: false }, cloud_agent_portal_ask_question: { client: true, default: false }, cloud_agent_portal_pending_interactions: { client: true, default: false }, "web.show_local_source_filter": { client: true, default: false }, open_agent_window_bottom_convo: { client: true, default: false }, open_agent_window_top: { client: true, default: true }, "glass.enable_open_agent_in_window": { client: true, default: false }, cloud_agent_best_of_n_disabled: { client: true, default: false }, cloud_agent_prompt_upload_presign: { client: true, default: true }, search_telemetry: { client: true, default: false }, scim_require_user_directory_ui: { client: true, default: false }, allow_legacy_billing_group_creation: { client: true, default: false }, new_file_ux: { client: true, default: true }, internal_browser_evaluate: { client: true, default: false }, browser_canvas: { client: true, default: true }, cloud_canvas_skill: { client: true, default: false }, cloud_canvas_tools: { client: true, default: false }, composer_separate_shell_activity_groups: { client: true, default: false }, show_grouped_edit_diff_stats: { client: true, default: false }, composer_end_of_turn_summary: { client: true, default: false }, allowlist_toggle_menu: { client: true, default: true }, slim_codeblock_render: { client: true, default: true }, compact_terminal: { client: true, default: true }, "cursor-ios-disable-legacy-plans-iap": { client: true, default: false }, sand_legacy_iap_sales_cutoff: { client: true, default: false }, sand_android_iap_enabled: { client: true, default: true }, sand_android_purchase_token_backfill: { client: true, default: false }, composer_sandbox_settings_visible: { client: true, default: true }, sandbox_force_disable_win32: { client: true, default: true }, admin_network_controls: { client: true, default: true }, mcp_access_network_allowlist: { client: true, default: false }, mcp_admin_only_servers: { client: true, default: false }, mcp_admin_only_tools: { client: true, default: false }, sandbox_mcp_servers: { client: true, default: false }, sandbox_read_control_portal: { client: true, default: false }, sandbox_read_control_portal_ui: { client: true, default: false }, mcp_network_allowlist: { client: true, default: false }, mcp_settings_overhaul: { client: true, default: true }, mcp_settings_overhaul_portal: { client: true, default: true }, mcp_allowlist_import_export: { client: true, default: false }, mcp_user_extension_stdio_unsandboxed_win32: { client: true, default: false }, mcp_tool_allowlist_modes: { client: true, default: true }, cloud_agent_environment_mcp_allowlist_ui: { client: true, default: false }, cloud_agent_keyring_ui: { client: true, default: false }, cursor_rules_batch_update: { client: true, default: true }, agent_skills_batch_update: { client: true, default: true }, mcp_structured_logging: { client: true, default: false }, mcp_runtime_dedupe: { client: true, default: false }, dedupe_mcp_servers: { client: true, default: true }, mcp_oauth_unsafe_redirect_logging: { client: true, default: false }, proper_well_known_for_mcp_scopes: { client: true, default: true }, context_usage_canvas: { client: true, default: false }, local_computer_use: { client: true, default: false }, mac_computer_use: { client: true, default: false }, windows_computer_use_batch: { client: true, default: false }, computer_use_next_action: { client: true, default: false }, playwright_autorun: { client: true, default: true }, allow_download_prompts: { client: true, default: false }, agent_context_injection: { client: true, default: true }, project_agent_team_store: { client: true, default: false }, project_followups_use_steering: { client: true, default: false }, clone_blob_upload: { client: true, default: true }, internal_session_recording_status_bar: { client: true, default: false }, agent_video_signed_url_uploads: { client: true, default: false }, nal_task_tool: { client: true, default: true }, explore_subagent: { client: true, default: true }, enable_watch_video_in_ide: { client: true, default: true }, shell_subagent: { client: true, default: true }, enable_build_with_swarm: { client: true, default: false }, explicit_subagent_models: { client: true, default: false }, nal_trace: { client: true, default: false }, ask_question_all_modes: { client: true, default: true }, disable_terminal_output_ui_streaming: { client: true, default: false }, generate_user_instructions: { client: true, default: false }, ide_nal_rdv: { client: true, default: false }, use_nlb_for_nal: { client: true, default: true }, "use-usw1-agent-for-nal": { client: true, default: false }, retry_interceptor_disabled: { client: true, default: false }, retry_interceptor_enabled_for_streaming: { client: true, default: true }, bidi_append_fix: { client: true, default: true }, http1_keepalive_disabled: { client: true, default: false }, ws_reachability_probe: { client: true, default: true }, ws_dark_durability_probe: { client: true, default: false }, large_proto_logging_enabled: { client: true, default: false }, submitlogs_flush_throttle: { client: true, default: true }, background_composer_list_focus_aware_poll: { client: true, default: true }, agent_slack_bot_member_install: { client: true, default: false }, enterprise_early_access: { client: true, default: false }, use_byok_allowlist: { client: true, default: true }, show_dogfood_release_track: { client: true, default: false }, client_numeric_metrics: { client: true, default: true }, client_outage_banners: { client: true, default: false }, solidjs_total_observers_metric: { client: true, default: false }, renderer_heap_metrics: { client: true, default: false }, glass_react_commit_churn: { client: true, default: false }, sand_renderer_heap_metrics: { client: true, default: false }, sand_desktop_notification_permission: { client: true, default: false }, sand_desktop_notification_permission_persist: { client: true, default: false }, sand_mobile_notification_permission_persist: { client: true, default: false }, collect_sample_for_unresponsive_ext_host: { client: true, default: false }, unresponsive_ext_host_enhanced_attachments: { client: true, default: false }, worktree_nal_only: { client: true, default: true }, glass_precompute_diff_tokenization: { client: true, default: false }, review_changes_fast_multi_diff: { client: true, default: false }, cpp_perf_instrumentation: { client: true, default: true }, migrate_editor_mode: { client: true, default: true }, show_dev_only_ttft_warning: { client: true, default: false }, glass_local_review_first_bugbot_cta: { client: true, default: true }, editor_review_cta_uses_review_bugbot: { client: true, default: false }, local_commit_reflog_signal_killswitch: { client: true, default: false }, gitlab_progressive_repo_load_v1: { client: true, default: false }, repo_picker_server_side_search_v1: { client: true, default: false }, azure_devops_progressive_repo_load_v1: { client: true, default: true }, bugbot_azure_devops_settings: { client: true, default: true }, meta_mcp_tool: { client: true, default: false }, mcp_input_schema_json: { client: true, default: true }, ai_connect_stream_encode_yield: { client: true, default: false }, ai_connect_stream_decode_yield: { client: true, default: false }, mcp_meta_tool_slim_descriptors: { client: true, default: true }, local_agent_event_subscriptions: { client: true, default: true }, web_cloud_agent_conversation_quick_access_rail: { client: true, default: false }, mcp_always_expose_auth_tool: { client: true, default: false }, glass_mcp_app_focus_on_type_guard: { client: true, default: true }, shared_chats: { client: true, default: false }, shared_canvases: { client: true, default: true }, share_transcripts_include_plan: { client: true, default: false }, shared_transcripts_bulk_download: { client: true, default: false }, use_ide_browser_script: { client: true, default: false }, expose_babysit_pr_cloud_entrypoint: { client: true, default: false }, expose_branch_mismatch_continue_in_cloud_entrypoint: { client: true, default: false }, expose_plan_build_in_cloud_entrypoint: { client: true, default: false }, new_plan_editor: { client: true, default: true }, ai_code_tracking_format_detection: { client: true, default: true }, ai_code_tracking_assume_all_commits_ai: { client: true, default: false }, ai_code_tracking_use_commit_timestamp_for_tracking_start: { client: true, default: false }, ai_code_tracking_git_operations_binding_fix: { client: true, default: false }, cloud_agent_slack_default_worker: { client: true, default: false }, grok_bot_contextual_banner_killswitch: { client: true, default: false }, enable_cloud_agent_timings: { client: true, default: false }, subagent_support_interrupt: { client: true, default: true }, web_cloud_agent_no_repo_entrypoint: { client: true, default: false }, agent_store_dashboard: { client: true, default: false }, agent_store_undelete: { client: true, default: false }, cloud_agent_bc_id_attachment: { client: true, default: false }, cloud_persistent_terminals: { client: true, default: true }, cloud_glass_shared_sessions: { client: true, default: false }, shared_terminal_env_setup: { client: true, default: false }, instant_grep_indexing: { client: true, default: false }, cli_instant_grep_indexing: { client: true, default: false }, cli_grove_grep: { client: true, default: false }, push_git_tracked_state_exp: { client: true, default: true }, instant_grep_user_search: { client: true, default: false }, parallel_agent_workflow: { client: true, default: false }, enable_multitask_mode: { client: true, default: true }, glass_subagent_followups: { client: true, default: false }, glass_custom_modes: { client: true, default: false }, cloud_custom_modes: { client: true, default: false }, hide_async_subagent_task_notifications: { client: true, default: true }, cloud_agent_message_sender_attribution: { client: true, default: true }, enable_await_for_subagents: { client: true, default: false }, fix_claude_subagent_await: { client: true, default: true }, fix_grok_subagent_await: { client: true, default: true }, public_leaderboard_web: { client: true, default: false }, enable_cloud_agent_repo_selector: { client: true, default: false }, route_ent_trial_to_model: { client: true, default: false }, debug_mode_autorun_support_enabled: { client: true, default: false }, analytics_conversation_classification: { client: true, default: false }, use_cursor_github_app_id: { client: true, default: true }, push_local_agent_to_cloud: { client: true, default: false }, send_to_cloud_on_followup: { client: true, default: false }, midturn_move_to_cloud_ads: { client: true, default: false }, cloud_agent_checkout_convert_to_local: { client: true, default: false }, show_browser_popup: { client: true, default: false }, agent_layout_show_diffs_quick_settings: { client: true, default: false }, skip_git_telemetry_computations: { client: true, default: false }, composer_background_throttling_remote_only: { client: true, default: false }, composer_gc_handles: { client: true, default: true }, composer_header_log_storage: { client: true, default: false }, composer_retention_structural_byte_metrics: { client: true, default: false }, tokenize_stream_code_blocks: { client: true, default: true }, glass_transcript_code_token_cache: { client: true, default: false }, composer_react_transcript_working_indicator: { client: true, default: false }, composer_transcript_steer_float_up: { client: true, default: false }, inline_visualizations: { client: true, default: false }, inline_visualization_png_export: { client: true, default: false }, diff_tab_viewport_virtualization: { client: true, default: false }, allow_shared_private_worker_assignment: { client: true, default: true }, private_workers_label_filtering: { client: true, default: false }, skip_github_app_for_private_worker: { client: true, default: false }, update_use_localhost: { client: true, default: false }, hide_inline_changed_files: { client: true, default: false }, wysiwyg_markdown_default: { client: true, default: false }, markdown_embedded_project_databases: { client: true, default: false }, skill_icon_color: { client: true, default: false }, skill_catalog_ide_cache: { client: true, default: false }, opt_devs_into_experimental_model_toggle: { client: true, default: false }, default_on_chat_editors: { client: true, default: false }, default_tsgo_internal: { client: true, default: false }, desktop_bridge: { client: true, default: false }, disable_no_title_bar: { client: true, default: false }, show_debug_aux_pane_border: { client: true, default: false }, glass_typography_refresh: { client: true, default: true }, browser_subagent: { client: true, default: true }, browser_subagent_gating: { client: true, default: false }, browser_cpp_telemetry: { client: true, default: true }, network_access_control: { client: true, default: true }, git_snapshot_indexing: { client: true, default: true }, cpp_telem_chunking: { client: true, default: true }, marketplaces_enabled: { client: true, default: true }, customize_page: { client: true, default: false }, customize_page_leaderboard_enabled: { client: true, default: false }, customize_manage_scope_multiselect: { client: true, default: true }, customize_global_search: { client: true, default: true }, customize_plugin_detail_mcp_management: { client: true, default: false }, web_agent_pilled_page: { client: true, default: false }, team_marketplace_mcps: { client: true, default: true }, publish_user_skills: { client: true, default: true }, private_skills_user_store: { client: true, default: false }, plugin_aware_mcp_edit_modal: { client: true, default: true }, dashboard_plugin_add_modal: { client: true, default: false }, dashboard_unified_plugin_mcp_allowlist: { client: true, default: false }, plugin_marketplace_allowlisted_publisher: { client: true, default: false }, prompt_suggestion: { client: true, default: false }, extension_signature_verification: { client: true, default: false }, extension_gallery_query_chunking: { client: true, default: false }, subagents_client_side_vscode: { client: true, default: true }, glass_projects_allowed_machines_footer: { client: true, default: false }, glass_projects_restart_offline_workers: { client: true, default: false }, mcp_coalesce_metrics_sampling: { client: true, default: false }, mcp_shared_process_transports: { client: true, default: false }, sand_box_egress_tunnel: { client: true, default: true }, task_card_tips_enabled: { client: true, default: false }, codebase_telemetry_v2: { client: true, default: true }, codebase_telemetry_v2_git_history: { client: true, default: true }, codebase_telemetry_v2_agent_dot_dirs: { client: true, default: true }, codebase_protection_client_enforcement: { client: true, default: false }, codebase_protection_reporting: { client: true, default: false }, codebase_telemetry_v1_deprecation: { client: true, default: true }, sand_codebase_telemetry: { client: true, default: true }, sand_orbit: { client: true, default: false, requiresAuthenticatedBootstrap: true }, disable_codebase_indexing: { client: true, default: true }, disable_docs_client_usage: { client: true, default: true }, import_3p_plugins: { client: true, default: true }, enable_local_3p_plugin_imports: { client: true, default: true }, enable_new_team_member_usage_boost: { client: true, default: true }, disable_push_request_context: { client: true, default: false }, composer_parallel_stream_setup: { client: true, default: false }, composer_defer_submit_transcript_render: { client: true, default: false }, bugbot_merged_pr_scan: { client: true, default: true }, windows_linux_update_auth_headers: { client: true, default: false }, updater_recovery_windows: { client: true, default: true }, glass_focus_outline: { client: true, default: false }, glass_inline_assistant_turn_actions_bar: { client: true, default: true }, inline_diff_defer_hidden_diff_state: { client: true, default: false }, park_inline_diffs: { client: true, default: false }, enable_marketplace_plugin_logging: { client: true, default: true }, enable_sparse_plugin_clones: { client: true, default: true }, glass_always_local_agent_workspace: { client: true, default: true }, glass_disable_eager_indexing_for_local_sessions: { client: true, default: true }, glass_rainbow_csv_extension: { client: true, default: false }, retry_hydration_optimization: { client: true, default: false }, full_self_driving: { client: true, default: false }, full_self_driving_github_origin_review: { client: true, default: false }, fsd_suggestions_platform_local_mcp: { client: true, default: false }, full_self_driving_glass: { client: true, default: false }, full_self_driving_glass_pr_tab: { client: true, default: false }, shutdown_hang_watchdog_darwin_sigkill: { client: true, default: true }, cursor_shared_session_file_watcher: { client: true, default: false }, cursor_update_supervisor: { client: true, default: false }, cursor_update_shipit_cache_reset_kill_switch: { client: true, default: false }, cursor_private_inference_download_prompt: { client: true, default: false }, cursor_cli_private_inference_download_prompt: { client: true, default: false }, disable_sqlite_storage_backup: { client: true, default: true }, sqlite_incremental_auto_vacuum_on_close: { client: true, default: false }, agent_store_sync_client: { client: true, default: false }, agent_store_use_dedicated_service: { client: true, default: false }, agent_store_citation_index_tier: { client: true, default: false }, agent_store_principal_local_mounts: { client: true, default: false }, agent_store_local_user_mount: { client: true, default: true }, proxy_agent_secure_context_cache: { client: true, default: false }, auto_disable_unused_models: { client: true, default: false }, drop_custom_prompt_context: { client: true, default: false }, composer_reuse_editor_input: { client: true, default: true }, disposable_leak_reporting: { client: true, default: false } });
    const IA = { composer_gc_safety_net_1s: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, tsgo_disable_auto_imports_internal: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, grok_bot_send_to_user_reminder_delegation: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, grok_bot_task_subagent_roster: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, grok_bot_update_state_split_v2: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, sand_hide_at_mentions_ab: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, sand_onboarding_job_role: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, sand_local_egress_default_on_ab: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, sand_mobile_onboarding_job_role_optional: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, sand_mobile_notifications_ask_redesign: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, sand_onboarding_role_use_case_bots: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, limit_hit_ui_2026_06: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, limit_hit_ui_2027_07: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, third_party_usage_nudge_2026_07: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, third_party_usage_nudge_policy_2026_07: { client: true, fallbackValues: { policy: "none" }, parseValue: { policy: xA(["none", "90", "75_90"]) } }, sand_usage_warning_policy_2026_08: { client: true, fallbackValues: { policy: "none", firstThresholdPercent: 75, secondThresholdPercent: 90 }, parseValue: { policy: xA(["none", "single", "double"]), firstThresholdPercent: UA, secondThresholdPercent: UA } }, sand_group_chat_discouragement_2026_09: { client: true, fallbackValues: { policy: "control" }, parseValue: { policy: xA(["control", "notice", "notice_and_hide_create"]) } }, sand_invite_teammates_placement_2026_09: { client: true, fallbackValues: { placement: "control" }, parseValue: { placement: xA(["control", "profile_menu", "settings"]) } }, third_party_on_demand_nudge_2026_08: { client: true, fallbackValues: { group: "control", copy: "cursor_models" }, parseValue: { group: xA(["control", "treatment"]), copy: xA(["cursor_models", "grok_45"]) } }, new_chat_first_party_switch_2026_08: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, grok_45_app_open_recent_composers_2026_08: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, automations_button_in_ide: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, grok_bot_contextual_banner: { client: true, fallbackValues: { enabled: false, cooldown_days: 1, max_shows: 5 }, parseValue: { enabled: NA, cooldown_days: UA, max_shows: UA } }, grok_bot_contextual_banner_v2: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, parallel_agents_try_cloud_nudge_glass: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "try_cloud", "educational"]) } }, dashboard_user_checklist_enterprise: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, dashboard_admin_setup_enterprise: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, dashboard_team_admin_onboarding_checklist: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, new_team_add_teammates_callout: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "callout"]) } }, new_team_name_prefill: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "domain_brand"]) } }, dashboard_member_remove_modal: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment_info", "treatment_warning"]) } }, push_mcps: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "enabled"]) } }, glass_setup_cloud_pill: { client: true, fallbackValues: { enabled: false, variant: "ghost" }, parseValue: { enabled: NA, variant: xA(["ghost", "primary"]) } }, send_to_cloud_composer_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, connect_repo_env_setup_pill_glass: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "primary", "secondary", "tertiary"]) } }, ide_connect_git_repos_start: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "primary", "secondary", "tertiary"]) } }, ide_steer_from_cloud_start: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_account_menu_ios_download: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_account_menu_grok_bot: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_account_menu_usage_remaining: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_agent_demos_setup_pill: { client: true, fallbackValues: { enabled: false, variant: "ghost", cloud_target_only: false }, parseValue: { enabled: NA, variant: xA(["ghost", "primary"]), cloud_target_only: NA } }, cloud_setup_cta_glass_running_agent_session: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "chat_title", "composer_pill"]) } }, set_up_env_pill_glass: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "primary", "secondary", "tertiary"]) } }, agent_desktop_glass_env_setup: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_automations_sidebar_new_tag: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_grok_bot_topbar_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_grok_bot_topbar_cta_new_chat_only: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_grok_bot_topbar_cta_hide_when_installed: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, new_tag_cloud_runtime_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, runtime_picker_discovery_nudge_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, remote_control_runtime_picker_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, default_web_users_cloud_in_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, cloud_setup_cta_web_running_agent_session: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "primary", "secondary", "tertiary"]) } }, suggested_prompts: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, suggested_mode_switch: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "nudge"]) } }, marketplace_tab_customize_label: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, customize_default_manage_tab: { client: true, fallbackValues: { tab: "plugins" }, parseValue: { tab: xA(["plugins", "mcps"]) } }, customize_grok_bot_callout: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, marketplace_card_install_cta_ab: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "card_cta"]) } }, marketplace_detail_authenticate_cta_ab: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "detail_auth_cta"]) } }, marketplace_try_in_chat_prompt_ab: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "concrete_use_case_prompt"]) } }, composer_run_button_style: { client: true, fallbackValues: { buttonStyle: "primary" }, parseValue: { buttonStyle: xA(["primary", "secondary"]) } }, new_placeholder: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, cursor_launch_at_login: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, subscription_only_degraded_extended_usage: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, onboarding_default_layout_agent: { client: true, fallbackValues: { enabled: "false" }, parseValue: { enabled: DA } }, onboarding_left_right_chat: { client: true, fallbackValues: { enabled: "left" }, parseValue: { enabled: xA(["left", "right"]) } }, separate_auto_and_api_usage_bars_for_individuals: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "test"]) } }, onboarding_skip_post_login: { client: true, fallbackValues: { enabled: "control" }, parseValue: { enabled: xA(["control", "remove_features"]) } }, free_user_locked_model_2026_05: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "composer_2_5_fast", "composer_2_5", "grok_4_6"]) } }, free_user_composer_grok_picker_2026_07: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, model_picker_promote_first_party_v3: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "grouped_auto_expand"]) } }, model_picker_usage_display_2026_08: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "show_labels"]) } }, free_user_usage_summary_display_mode: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "always_show_percentage"]) } }, pro_auto_mode_new_users: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "pro_and_auto_default_auto", "pro_and_auto_default_pro"]) } }, pro_auto_mode_existing_users: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "pro_and_auto_default_auto_with_nudge"]) } }, premium_auto_mode: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "premium_auto_option"]) } }, terminal_tip: { client: true, fallbackValues: { enabled: false, message: "Install Cursor CLI?", action: "curl https://cursor.com/install -fsS | bash", show_every_hours: 0, show_count: 0 }, parseValue: { enabled: NA, message: DA, action: DA, show_every_hours: UA, show_count: UA } }, cli_install_ad: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, new_chat_auto_switch: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "popup", "inline_banner"]) } }, team_pending_cancellation_cancel_now: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, yearly_upgrade_inplace: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, portal_od_enable_limit_hit_2026_08: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, dashboard_user_menu_view_plans: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, dashboard_create_team_sidebar_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, sidebar_bottom_section_cta: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "create_team", "upgrade_to_pro"]) } }, sidebar_grok_bot_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, agents_grok_bot_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, spending_grok_bot_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, free_user_create_team_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, dashboard_free_overview_cleanup: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "used_percentage", "remaining_percentage"]) } }, download_bottom_dashboard: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, web_grok_bot_launch_ad: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, web_cloud_agents_agent_window_ad: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, router_settings_disabled_info: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, onboarding_redirect_git_to_login_deep_control: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, dashboard_invite_modal_version: { client: true, fallbackValues: { variant: "v2" }, parseValue: { variant: xA(["v2", "v3", "v3-contacts"]) } }, set_up_env_pill_web: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "primary", "secondary", "tertiary"]) } }, completely_free_env_setup_glass_and_web: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "primary", "secondary", "tertiary"]) } }, env_setup_free_callout_web: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, completely_free_env_setup_glass: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "treatment"]) } }, dynamic_automation_templates: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, team_pinned_marketplace_plugins: { client: true, fallbackValues: { group: "control" }, parseValue: { group: xA(["control", "treatment"]) } }, glass_new_chat_header: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_ftux_wizard: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, glass_ftux_app_scan: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, terminal_agent_integration: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: NA } }, ide_update_ux_exp: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "sidebar", "non_sidebar"]) } }, effort_first_model_picker: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: xA(["control", "treatment"]) } }, effort_first_show_grok_name: { client: true, fallbackValues: {}, parseValue: {} } };
    Object.keys(IA);
    const CA = { fastRetryBaseDelayMs: Bh().min(1e3).max(36e5), fastRetryMaxDelayMs: Bh().min(1e3).max(36e5), fastRetryMaxAttempts: Bh().min(1).max(20).optional(), periodicRetryBaseDelayMs: Bh().min(3e4).max(36e5), periodicRetryMaxDelayMs: Bh().min(3e4).max(36e5), maxPeriodicCycles: Bh().min(0).max(1e4).nullish(), focusRetryCooldownMs: Bh().min(3e5).max(36e5), inlineReconnectCooldownMs: Bh().min(1e3).max(36e5).optional(), oauthBackendRefreshHydrationPollIntervalMs: Bh().min(200).max(5e3).optional(), streamableHttpSession404TombstoneThreshold: Bh().min(1).max(50).optional(), healthProbeTimeoutMs: Bh().min(1e3).max(12e4).optional(), toolCallBoundedTimeoutEnabled: Rh().optional(), toolCallIdleTimeoutMs: Bh().min(5e3).max(18e5).optional(), toolCallMaxTotalTimeoutMs: Bh().min(5e3).max(36e5).optional(), degradedProbeDelayMs: Bh().min(1e3).max(36e5).optional(), maxDegradedProbeFailures: Bh().min(1).max(20).optional(), keepaliveProbeDelayMs: Bh().min(1e4).max(36e5).optional(), keepaliveJitterMs: Bh().min(0).max(36e5).optional(), stabilityThresholdMs: Bh().min(5e3).max(6e5).optional(), stdioConnectFailuresAreNonRetryable: Rh().optional(), retryNonRetryableOnWake: Rh().optional(), nonRetryableWakeRetryCooldownMs: Bh().min(1e3).max(36e5).optional(), retryNonRetryableAutomatically: Rh().optional(), networkResumeReconnectEnabled: Rh().optional(), networkResumeReconnectDebounceMs: Bh().min(0).max(18e5).optional() }, bA = ng(CA).partial().extend({ identifier: Ip().optional(), hostname: Ip().optional() }).refine((t3) => void 0 !== t3.identifier || void 0 !== t3.hostname, { message: "Each mcp_reconnect_config override requires identifier and/or hostname." }), kA = (ng({ ...CA, overrides: tg(bA).nullish() }), ["figma", "slack", "linear", "notion-workspace"]), vA = tg(mg("type", [ng({ type: kg("app"), app: Ig(kA), title: Ip().min(1), description: Ip().min(1), prompt: Ip().min(1) }).strict(), ng({ type: kg("icon"), icon: Ip().min(1), title: Ip().min(1), description: Ip().min(1), prompt: Ip().min(1) }).strict()])).length(kA.length + 3).superRefine((t3, e3) => {
      const r3 = t3.flatMap((t4) => "app" === t4.type ? [t4.app] : []), n2 = t3.length - r3.length;
      3 !== n2 && e3.addIssue({ code: BA, message: `Expected exactly 3 icon actions, got ${n2}` });
      for (const t4 of kA) {
        const n3 = r3.filter((e4) => e4 === t4).length;
        1 !== n3 && e3.addIssue({ code: BA, message: `Expected exactly one "${t4}" action, got ${n3}` });
      }
    }), qA = ng({ coding: vA, tasks: vA }).strict(), RA = ["software-engineer", "designer", "product-manager", "researcher", "data-scientist", "student", "marketer", "operations", "something-else"], PA = Ag(Ip().max(100), qA).superRefine((t3, e3) => {
      const r3 = new Set(RA);
      for (const n2 of Object.keys(t3)) r3.has(n2) || e3.addIssue({ code: BA, message: `Unknown FTUX first-action job role key: ${n2}`, path: [n2] });
    }), TA = (Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), ng({ enabled: Rh(), instructionsUrl: Ip().nullish() }), ng({ products: Ag(Ip(), Ig(["pro", "pro_plus", "ultra"])) }), ng({ report_interval_ms: Bh().int().positive(), jitter_fraction: Bh().min(0).max(1) }), ng({ initial_timeout_ms: Bh(), retry_timeout_ms: Bh(), max_attempts: Bh() }), ng({ pollIntervalMs: Bh().nullable(), requestIdleTimeoutMs: Bh().nullable() }), ng({ deadline_ms: Bh(), max_stale_age_ms: Bh() }), ng({ maxClosureBytes: Bh().int().positive(), maxClosureBlobs: Bh().int().positive(), putConcurrency: Bh().int().min(1).max(32), parallelListing: Rh(), migrationAgentConcurrency: Bh().int().min(1).max(32), migrationReadBatchBlobs: Bh().int().min(1).max(64), migrationPutConcurrency: Bh().int().min(1).max(32), migrationCopyConcurrency: Bh().int().min(1).max(64), migrationExportCommandTimeoutMs: Bh().int().min(6e4).max(6e5), migrationHostWindowMs: Bh().int().min(6e4).max(27e5), migrationExportActivityTimeoutMs: Bh().int().min(6e4).max(18e5) }), ng({ control: Ig(["legacy_gates", "config"]), mode: Ig(["off", "shadow", "live"]), autoReviewEnforce: Rh() }), ng({ mode: Ig(["off", "shadow", "on"]) }), ng({ sampleRate: Bh().min(0).max(1), connectors: tg(ng({ name: Ip().min(1), hosts: tg(Ip().min(1)), sendTools: tg(Ip().min(1)), participants: ng({ args: tg(Ip().min(1)).min(1), ownerArgs: tg(Ip().min(1)).optional() }).optional() })), firstPartySendTools: tg(ng({ name: Ip().min(1), toolName: Ip().min(1) })).optional() }), ng({ basePrompt: Ip() }), ng({ healthcheck_timeout_ms: Bh().int().positive(), remote_extension_host_startup_grace_ms: Bh().int().nonnegative() }), ng({ interval_ms: Bh().int().positive() }), ng({ stackTraceLimitFloor: Bh().int().nonnegative() }), ng({ windowIdleMinutesToSuspend: Bh().int().nonnegative(), hiddenAgentMinutesToSuspend: Bh().int().nonnegative(), suspendWhileWindowFocused: Rh(), maxDormantQueuedMessages: Bh().int().positive(), maxDormantQueuedBytes: Bh().int().positive(), hardMaxDormantQueuedMessages: Bh().int().positive(), hardMaxDormantQueuedBytes: Bh().int().positive() }), ng({ idleMinutesToKillExtensionHost: Bh().int().nonnegative(), freeMemoryPercentageToKillExtensionHost: Bh().min(0).max(100), killUserExtensionHost: Rh() }), ng({ rpcTimeoutMs: Bh().int().positive() }), ng({ outputSuppressionWindowMs: Bh().int().positive(), outputSuppressionThresholdCharsPerSecond: Bh().int().positive(), outputSuppressionMinChars: Bh().int().positive(), outputLimiterFlushIntervalMs: Bh().int().positive(), outputLimiterMaxBufferedBytes: Bh().int().positive(), extHostMinBatchIntervalMs: Bh().int().positive(), extHostMaxBatchIntervalMs: Bh().int().positive(), extHostBytesPerIntervalStep: Bh().int().positive() }), ng({ model: Ip(), iterations: Bh(), agentic_iterations: Bh(), agentic_model: Ip(), deep_review_model: Ip(), context_lines: Bh() }), ng({ tokenUsageThresholdPercentage: Bh(), tolerancePercentage: Bh(), inflightMaxAgeMinutes: Bh(), speculativeStreamTimeoutMinutes: Bh() }), ng({ message: Ip() }), ng({ enable: Rh(), enabled_models: tg(Ip()), force_enable_on_all_models: Rh(), group_text: Rh(), group_thinking: Rh(), group_todos: Rh(), group_edits: Rh(), smooth_stream_enable: Rh(), grouped_text_max_length: Bh(), grouped_text_max_length_composer_family: Bh(), tool_summary_mode: Ip(), nest_tool_blocks: Rh() }), ng({ meta_parent_model: Ip(), allow_subagent_followups: Rh(), enable_notes: Rh() }), ng({ startup_tips: tg(ng({ id: Ip(), text: Ip(), enabled: Rh().optional() })) }), ng({ tips: tg(ng({ id: Ip(), text: Ip(), targetSurfaces: tg(Ig(["editor", "glass"])).min(1) }).strict()), config: ng({ intervalMs: Bh().positive(), devIntervalMs: Bh().positive().optional(), minClientVersion: Ip() }).strict() }).strict(), ng({ showSettings: Rh(), keepIsland: Rh(), sidebarLocation: Ig(["left", "right", "user", "noop"]) }), ng({ default_diff_mode: Ig(["unified", "diffs"]) }), ng({ enabledForNal: Rh(), enabledForOal: Rh(), fromModes: tg(Ip()), targetModes: tg(Ip()) }), ng({ authToolDescription: Ip(), errorStatusMessage: Ip(), needsAuthStatusMessageWithAuthTool: Ip() }), ng({ oauthAttemptTtlMs: Bh().min(6e4).max(6048e5), refreshLockTtlMs: Bh().min(2e3).max(12e4).nullish(), refreshLockMaxHoldMs: Bh().min(3e4).max(36e5).optional(), registrationLockTtlMs: Bh().min(2e3).max(12e4).nullish() }), ng({ classifyBeforeWipe: Rh() }), ng({ enabled: Rh(), denylist: tg(Ip()), ipv4Hosts: tg(Ip()).optional() }), ng({ operations: tg(Ig(["refresh", "registration"])), executorKinds: tg(Ig(["backendHttpMcp", "cloudAgent", "agentHost", "localIde", "remoteExtensionHost"])), providerAllowlist: tg(Ip()), fallbackMode: Ig(["fail_open", "fail_closed"]), refreshLockTtlMs: Bh().min(2e3).max(12e4), registrationLockTtlMs: Bh().min(2e3).max(12e4), waitPollIntervalMs: Bh().min(25).max(5e3), waitJitterMs: Bh().min(0).max(5e3), maxWaitMs: Bh().min(0).max(12e4) }), ng({ sustainedPressureWindowMs: Bh(), profileDurationMs: Bh(), minIntervalMs: Bh(), maxRetainedProfiles: Bh() }), ng({ firstTokenDeadlineMs: Bh(), idleDeadlineMs: Bh() }), ng({ maxDecorations: Bh() }), ng({ enableMainProcessCloudRefresh: Rh().default(false), activeIntervalMs: Bh().int().min(5e3).max(36e5), idleIntervalMs: Bh().int().min(5e3).max(36e5), emptyIntervalMs: Bh().int().min(5e3).max(36e5), engagementThrottleMs: Bh().int().min(1e3).max(6e4), menuCap: Bh().int().min(1).max(100), enablePoll: Rh(), enableEngagement: Rh(), enablePower: Rh() }), ng({ enabled: Rh(), flushIntervalMs: Bh(), sampleRate: Bh(), maxScriptsPerLoaf: Bh(), maxBatchBytes: Bh(), loafThresholdMs: Bh(), maxEventsPerFlush: Bh() }), ng({ version: Bh() }), ng({ allowlist: tg(Ip()) }), ng({ logSizeThreshold: Bh(), logPreviewLines: Bh(), logPreviewChars: Bh() }), ng({ mode: Ig(["off", "on_logged_in", "on"]) }), ng({ tools: Ag(Ip(), ng({ ttl: Bh().optional(), maxConcurrent: Bh().optional() })), defaultTtl: Bh(), defaultMaxConcurrent: Bh() }), ng({ num_threads: Bh(), fallback_num_threads: Bh(), use_batch_executor: Rh(), batch_executor_wait_ms: Bh() }), ng({ enabled: tg(Ip()), pingIdleConnection: Rh().nullable(), pingIntervalMs: Bh().nullable(), pingTimeoutMs: Bh().nullable(), idleConnectionTimeoutMs: Bh().nullable() }), ng({ poolSize: Bh() }), ng({ keepAliveInitialDelayMs: Bh().nullable() }), ng({ maxConnections: Bh() }), ng({ idleHoldMs: Bh(), echoTimeoutMs: Bh(), concurrency: Bh() }), ng({ sampling_rate: Bh() }), ng({ hooks_ready_timeout_ms: Bh() }), ng({ thresholds_ms: tg(Bh()) }), ng({ error_type_denylist: tg(Ip()) }), ng({ advisoryTimeoutMs: Bh(), failTimeoutMs: Bh() }), ng({ mode: Ig(["legacy", "dual", "ref_only"]), max_blob_bytes: Bh().int().positive(), max_inline_dynamic_bytes: Bh().int().positive() }), ng({ timeout_ms: Bh() }), ng({ enabled: Rh(), min_display_threshold_ms: Bh() }), ng({ ad_id_to_show: Ip() }), ng({ quiet_period_ms: Bh(), first_launch_quiet_period_ms: Bh() }), ng({ max_resume_age_ms: Bh().int().min(Na.Zw).max(Na.fg) }), ng({ enabled: Rh(), subsample_polling_rate_sec: Bh(), sample_polling_rate_min: Bh() }), ng({ user_routing_enabled: Rh(), inactive_days: Bh(), ch_timeout_ms: Bh(), ch_cache_ttl_seconds: Bh(), local_routing_enabled: Rh() }), ng({ retriableErrors: tg(ng({ code: Ip(), errorMessage: Ip().optional(), method: Ip().optional() })) }), ng({ maxRetries: Bh().nullish(), baseDelayMs: Bh().nullish(), maxDelayMs: Bh().nullish() }), ng({ targetCharsPerFrame: Bh(), maxLagFrames: Bh(), barrierMaxWaitMs: Bh() }), ng({ local_enabled: Rh(), backend_reporting_enabled: Rh(), network_diagnostics_reporting_enabled: Rh().optional(), subsample_polling_rate_sec: Bh(), sample_polling_rate_min: Bh() }), ng({ monitor_enabled: Rh(), low_memory_sustained_sec: Bh(), min_agent_process_age_sec: Bh(), low_memory_available_pct: Bh(), low_memory_available_abs_gb: Bh(), cpu_high_pct: Bh(), cpu_high_sustained_sec: Bh(), min_reported_cpu_pct: Bh() }), ng({ local_enabled: Rh(), backend_reporting_enabled: Rh(), subsample_polling_rate_sec: Bh(), sample_polling_rate_min: Bh() }), ng({ enabled: Rh(), sample_ratio: Bh() }), ng({ enabled: Rh(), drain_interval_sec: Bh() }), ng({ enabled: Rh() }), ng({ max_bytes: Bh() }), ng({ maxRunning: Bh().int().positive() }), ng({ min_version: Ip(), backend_min_version: Ip(), novnc_port_token_min_version: Ip(), hosted_mcp_oauth_callback_min_version: Ip(), max_age_days: Bh().int().min(0).catch(0) }), ng({ min_recommended_build: Bh(), min_allowed_build: Bh(), update_url: Ip() }), ng({ modelId: Ip().min(1), maxMode: Rh(), parameters: tg(ng({ id: Ip().min(1), value: Ip() })) }), ng({ soft_limit_mb: Bh(), hard_limit_mb: Bh() }), ng({ modelId: Ip(), maxMode: Rh(), parameters: tg(ng({ id: Ip().min(1), value: Ip() })) }), ng({ modelId: Ip(), maxMode: Rh(), parameters: tg(ng({ id: Ip().min(1), value: Ip() })) }), ng({ enabled: Rh(), sample_rate_denominator: Bh(), cooldown_seconds: Bh(), signup_grace_seconds: Bh() }), ng({ sync_debounce_ms: Bh().int().min(250).max(36e5), idle_backoff_factor: Bh().min(1).max(4).optional(), sync_idle_max_ms: Bh().int().min(250).max(36e5).optional(), idle_quiesce_ms: Bh().int().min(0).max(36e5).optional(), large_target_ttl_ms: Bh().int().min(6e4).max(864e5).optional(), sync_backoff_base_ms: Bh().int().min(100).max(36e5), sync_backoff_max_ms: Bh().int().min(100).max(36e5), project_sync_debounce_ms: Bh().int().min(250).max(36e5), project_sync_idle_max_ms: Bh().int().min(250).max(36e5).optional(), project_sync_backoff_base_ms: Bh().int().min(100).max(36e5), project_sync_backoff_max_ms: Bh().int().min(100).max(36e5), passive_retry_interval_ms: Bh().int().min(0).max(36e5), passive_index_poll_interval_ms: Bh().int().min(0).max(36e5), project_store_poll_interval_ms: Bh().int().min(250).max(36e5), path_refresh_min_interval_ms: Bh().int().min(0).max(36e5).optional(), project_notes_poll_interval_ms: Bh().int().min(1e3).max(36e5).optional(), max_file_size_bytes: Bh().int().min(1024).max(1073741824), token_refresh_buffer_ms: Bh().int().min(0).max(6e5), mint_terminal_denial_cache_ms: ag([kg(0), Bh().int().min(6e4).max(864e5)]).optional(), skip_denied_mount_sync: ag([kg(0), kg(1)]).optional(), rpc_retry_max_attempts: Bh().int().min(1).max(10), rpc_retry_base_delay_ms: Bh().int().min(1).max(6e4), rpc_retry_max_delay_ms: Bh().int().min(1).max(3e5), rpc_retry_multiplier: Bh().min(1).max(10), token_refresh_jitter_ratio: ag([kg(0), Bh().min(0.05).max(0.9)]).optional(), min_token_slack_ms: Bh().int().min(0).max(6e4).optional(), mint_retry_policy_version: ag([kg(0), kg(1)]).optional(), mint_retry_max_attempts: Bh().int().min(1).max(5).optional(), mint_retry_base_delay_ms: Bh().int().min(1).max(1e4).optional(), mint_retry_max_delay_ms: Bh().int().min(1).max(6e4).optional(), mint_retry_budget_ratio: Bh().min(0).max(1).optional(), mint_retry_budget_floor: Bh().int().min(0).max(100).optional(), mint_transient_negative_cache_base_ms: Bh().int().min(100).max(6e5).optional(), mint_transient_negative_cache_max_ms: Bh().int().min(100).max(36e5).optional(), mint_gate_open_threshold: Bh().int().min(1).max(1e3).optional(), mint_gate_window_ms: Bh().int().min(1e3).max(6e5).optional(), mint_gate_open_base_ms: Bh().int().min(100).max(6e5).optional(), mint_gate_open_max_ms: Bh().int().min(100).max(36e5).optional(), rpc_timeout_ms: Bh().int().min(1e3).max(6e5), blob_idle_timeout_ms: ag([kg(0), Bh().int().min(1e3).max(6e5)]), blob_connect_timeout_ms: ag([kg(0), Bh().int().min(1e3).max(3e5)]).optional(), sync_round_timeout_ms: ag([kg(0), Bh().int().min(3e4).max(36e5)]), sync_round_progress_timeout_ms: ag([kg(0), Bh().int().min(3e4).max(36e5)]).optional(), sync_round_hard_cap_ms: ag([kg(0), Bh().int().min(6e4).max(72e5)]).optional(), sync_round_unwind_timeout_ms: Bh().int().min(1e3).max(6e5), lock_release_failure_threshold: Bh().int().min(1).max(20), lock_release_failure_streak_threshold: Bh().int().min(0).max(100).optional(), lock_release_failure_streak_passive_ms: Bh().int().min(5e3).max(36e5).optional(), resume_gap_threshold_ms: ag([kg(0), Bh().int().min(3e4).max(36e5)]), resume_detection_mode: Ig(["mono_gap", "timer_lateness"]).optional(), dirty_passive_stalled_threshold_ms: ag([kg(0), Bh().int().min(3e4).max(36e5)]), s3_concurrency: Bh().int().min(1).max(64), list_concurrency: Bh().int().min(1).max(64), list_walk_concurrency: Bh().int().min(1).max(64).optional(), hash_concurrency: Bh().int().min(1).max(64), presign_concurrency: Bh().int().min(1).max(64), multipart_upload_threshold_bytes: Bh().int().min(5242880).max(1073741824), multipart_part_size_bytes: Bh().int().min(5242880).max(536870912), multipart_presign_window_size: Bh().int().min(1).max(32), pull_presign_window_size: Bh().int().min(1).max(1e3), multipart_complete_max_attempts: Bh().int().min(1).max(5), multipart_max_restarts: Bh().int().min(0).max(2), multipart_max_conflict_renames: Bh().int().min(0).max(2), multipart_max_expiry_refreshes: Bh().int().min(0).max(3), write_barrier_timeout_ms: Bh().int().min(0).max(6e4), scoped_reserved_slots: Bh().int().min(0).max(8), path_sync_request_poll_ms: Bh().int().min(0).max(6e4), path_sync_request_wait_poll_ms: Bh().int().min(1).max(6e4), exclusive_mutation_claim_poll_ms: Bh().int().min(50).max(6e4), shared_scheduler: Rh().optional(), periodic_coalesce_ms: Bh().int().min(250).max(3e4).optional(), remote_version_enabled: Rh().optional(), version_full_list_interval_ms: Bh().int().min(36e5).max(6048e5).optional(), version_audit_sample_rate: Bh().min(0).max(1).optional(), version_probe_enabled: Rh().optional(), version_probe_max_entries: Bh().int().min(1).max(100).optional(), stale_store_root_max_idle_ms: Bh().int().min(0), store_root_id_fence: Rh().optional(), index_closed_invalidates_session: Rh().optional(), store_eviction_mode: Ig(["legacy_sweep", "off", "dry_run", "quarantine", "on"]).optional(), store_eviction_quarantine_ms: Bh().int().min(0).optional(), store_eviction_max_roots_per_run: Bh().int().min(1).optional(), store_eviction_max_hash_bytes_per_run: Bh().int().min(1).optional(), store_eviction_mark_ttl_ms: Bh().int().min(1e3).max(6e5).optional(), store_eviction_min_interval_ms: Bh().int().min(0).optional(), tombstone_full_refresh_rounds: Bh().int().min(1), tombstone_full_refresh_interval_ms: Bh().int().min(0), tombstone_prune_slack_ms: Bh().int().min(0), local_stat_fast_path: Ig(["off", "posix", "all"]).optional(), push_order: Ig(["scan", "size_asc"]).optional(), local_stat_fast_path_audit_rate: Bh().min(0).max(1).optional(), local_stat_racy_margin_ms: Bh().int().min(0).max(6e4).optional(), harness_recovery_policy: Ig(["latch", "recover"]).optional(), harness_recovery_start_jitter_ms: Bh().int().min(0).max(3e5).optional(), harness_recovery_probe_base_ms: Bh().int().min(1e3).max(36e5).optional(), harness_recovery_probe_max_ms: Bh().int().min(1e3).max(36e5).optional(), harness_remembered_mounts_max: Bh().int().min(0).max(64).optional(), mount_policy: Ig(["eager", "lazy"]).nullable().optional(), surfaces: Ag(Ip(), ng({ sync_debounce_ms: Bh().int().min(250).max(36e5).optional(), idle_backoff_factor: Bh().min(1).max(4).optional(), sync_idle_max_ms: Bh().int().min(250).max(36e5).optional(), idle_quiesce_ms: Bh().int().min(0).max(36e5).optional(), large_target_ttl_ms: Bh().int().min(6e4).max(864e5).optional(), sync_backoff_base_ms: Bh().int().min(100).max(36e5).optional(), sync_backoff_max_ms: Bh().int().min(100).max(36e5).optional(), project_sync_debounce_ms: Bh().int().min(250).max(36e5).optional(), project_sync_idle_max_ms: Bh().int().min(250).max(36e5).optional(), project_sync_backoff_base_ms: Bh().int().min(100).max(36e5).optional(), project_sync_backoff_max_ms: Bh().int().min(100).max(36e5).optional(), passive_retry_interval_ms: Bh().int().min(0).max(36e5).optional(), passive_index_poll_interval_ms: Bh().int().min(0).max(36e5).optional(), project_store_poll_interval_ms: Bh().int().min(250).max(36e5).optional(), path_refresh_min_interval_ms: Bh().int().min(0).max(36e5).optional(), project_notes_poll_interval_ms: Bh().int().min(1e3).max(36e5).optional(), max_file_size_bytes: Bh().int().min(1024).max(1073741824).optional(), token_refresh_buffer_ms: Bh().int().min(0).max(6e5).optional(), mint_terminal_denial_cache_ms: ag([kg(0), Bh().int().min(6e4).max(864e5)]).optional(), skip_denied_mount_sync: ag([kg(0), kg(1)]).optional(), rpc_retry_max_attempts: Bh().int().min(1).max(10).optional(), rpc_retry_base_delay_ms: Bh().int().min(1).max(6e4).optional(), rpc_retry_max_delay_ms: Bh().int().min(1).max(3e5).optional(), rpc_retry_multiplier: Bh().min(1).max(10).optional(), token_refresh_jitter_ratio: ag([kg(0), Bh().min(0.05).max(0.9)]).optional(), min_token_slack_ms: Bh().int().min(0).max(6e4).optional(), mint_retry_policy_version: ag([kg(0), kg(1)]).optional(), mint_retry_max_attempts: Bh().int().min(1).max(5).optional(), mint_retry_base_delay_ms: Bh().int().min(1).max(1e4).optional(), mint_retry_max_delay_ms: Bh().int().min(1).max(6e4).optional(), mint_retry_budget_ratio: Bh().min(0).max(1).optional(), mint_retry_budget_floor: Bh().int().min(0).max(100).optional(), mint_transient_negative_cache_base_ms: Bh().int().min(100).max(6e5).optional(), mint_transient_negative_cache_max_ms: Bh().int().min(100).max(36e5).optional(), mint_gate_open_threshold: Bh().int().min(1).max(1e3).optional(), mint_gate_window_ms: Bh().int().min(1e3).max(6e5).optional(), mint_gate_open_base_ms: Bh().int().min(100).max(6e5).optional(), mint_gate_open_max_ms: Bh().int().min(100).max(36e5).optional(), rpc_timeout_ms: Bh().int().min(1e3).max(6e5).optional(), blob_idle_timeout_ms: ag([kg(0), Bh().int().min(1e3).max(6e5)]).optional(), blob_connect_timeout_ms: ag([kg(0), Bh().int().min(1e3).max(3e5)]).optional(), sync_round_timeout_ms: ag([kg(0), Bh().int().min(3e4).max(36e5)]).optional(), sync_round_progress_timeout_ms: ag([kg(0), Bh().int().min(3e4).max(36e5)]).optional(), sync_round_hard_cap_ms: ag([kg(0), Bh().int().min(6e4).max(72e5)]).optional(), sync_round_unwind_timeout_ms: Bh().int().min(1e3).max(6e5).optional(), lock_release_failure_threshold: Bh().int().min(1).max(20).optional(), lock_release_failure_streak_threshold: Bh().int().min(0).max(100).optional(), lock_release_failure_streak_passive_ms: Bh().int().min(5e3).max(36e5).optional(), resume_gap_threshold_ms: ag([kg(0), Bh().int().min(3e4).max(36e5)]).optional(), resume_detection_mode: Ig(["mono_gap", "timer_lateness"]).optional(), dirty_passive_stalled_threshold_ms: ag([kg(0), Bh().int().min(3e4).max(36e5)]).optional(), s3_concurrency: Bh().int().min(1).max(64).optional(), list_concurrency: Bh().int().min(1).max(64).optional(), list_walk_concurrency: Bh().int().min(1).max(64).optional(), hash_concurrency: Bh().int().min(1).max(64).optional(), presign_concurrency: Bh().int().min(1).max(64).optional(), multipart_upload_threshold_bytes: Bh().int().min(5242880).max(1073741824).optional(), multipart_part_size_bytes: Bh().int().min(5242880).max(536870912).optional(), multipart_presign_window_size: Bh().int().min(1).max(32).optional(), pull_presign_window_size: Bh().int().min(1).max(1e3).optional(), multipart_complete_max_attempts: Bh().int().min(1).max(5).optional(), multipart_max_restarts: Bh().int().min(0).max(2).optional(), multipart_max_conflict_renames: Bh().int().min(0).max(2).optional(), multipart_max_expiry_refreshes: Bh().int().min(0).max(3).optional(), write_barrier_timeout_ms: Bh().int().min(0).max(6e4).optional(), scoped_reserved_slots: Bh().int().min(0).max(8).optional(), path_sync_request_poll_ms: Bh().int().min(0).max(6e4).optional(), path_sync_request_wait_poll_ms: Bh().int().min(1).max(6e4).optional(), exclusive_mutation_claim_poll_ms: Bh().int().min(50).max(6e4).optional(), shared_scheduler: Rh().optional(), periodic_coalesce_ms: Bh().int().min(250).max(3e4).optional(), remote_version_enabled: Rh().optional(), version_full_list_interval_ms: Bh().int().min(36e5).max(6048e5).optional(), version_audit_sample_rate: Bh().min(0).max(1).optional(), version_probe_enabled: Rh().optional(), version_probe_max_entries: Bh().int().min(1).max(100).optional(), stale_store_root_max_idle_ms: Bh().int().min(0).optional(), store_root_id_fence: Rh().optional(), index_closed_invalidates_session: Rh().optional(), store_eviction_mode: Ig(["legacy_sweep", "off", "dry_run", "quarantine", "on"]).optional(), store_eviction_quarantine_ms: Bh().int().min(0).optional(), store_eviction_max_roots_per_run: Bh().int().min(1).optional(), store_eviction_max_hash_bytes_per_run: Bh().int().min(1).optional(), store_eviction_mark_ttl_ms: Bh().int().min(1e3).max(6e5).optional(), store_eviction_min_interval_ms: Bh().int().min(0).optional(), tombstone_full_refresh_rounds: Bh().int().min(1).optional(), tombstone_full_refresh_interval_ms: Bh().int().min(0).optional(), tombstone_prune_slack_ms: Bh().int().min(0).optional(), local_stat_fast_path: Ig(["off", "posix", "all"]).optional(), push_order: Ig(["scan", "size_asc"]).optional(), local_stat_fast_path_audit_rate: Bh().min(0).max(1).optional(), local_stat_racy_margin_ms: Bh().int().min(0).max(6e4).optional(), harness_recovery_policy: Ig(["latch", "recover"]).optional(), harness_recovery_start_jitter_ms: Bh().int().min(0).max(3e5).optional(), harness_recovery_probe_base_ms: Bh().int().min(1e3).max(36e5).optional(), harness_recovery_probe_max_ms: Bh().int().min(1e3).max(36e5).optional(), harness_remembered_mounts_max: Bh().int().min(0).max(64).optional(), mount_policy: Ig(["eager", "lazy"]).nullable().optional() }).strict()).default({}) }).strict(), ng({ mint_refresh_slack_ms: Bh().int().min(0).max(6e5), mint_failure_base_ms: Bh().int().min(100).max(6e4), mint_failure_max_ms: Bh().int().min(1e3).max(6e5), mint_failure_jitter: Bh().min(0).max(0.5), mint_cache_max_conversations: Bh().int().min(16).max(4096) }), ng({ maxBytes: Bh().int().positive(), inlineMaxBytes: Bh().int().positive(), signedUrlMaxBytes: Bh().int().positive(), cloudMaxVideoAttachmentsPerRequest: Bh().int().nonnegative(), cloudMaxDocumentAttachmentsPerRequest: Bh().int().nonnegative(), localMaxVideoAttachmentsPerRequest: Bh().int().positive(), localMaxTotalInlineVideoBytesPerRequest: Bh().int().positive() }), ng({ limit: Bh() }), ng({ modelSlug: Ip(), modelIdWithParams: ng({ modelId: Ip(), params: tg(ng({ id: Ip(), value: Ip() })) }) }), ng({ proceed_instructions: Ip(), mark_fixed_instructions: Ip() }), ng({ maxChatsToRead: Bh(), maxProjectsToGroup: Bh(), model: Ip(), promptTemplate: Ip(), secondStepPromptTemplate: Ip() }), ng({ defaultUrl: Ip() }), ng({ agentTabSelectionTTL: Bh() }), ng({ showDraftsInSidebar: Rh() }), ng({ pillLabel: Ip().min(1).max(80), tooltip: Ip().min(1).max(240), dropdownAriaLabel: Ip().min(1).max(120), cloudOptionLabel: Ip().min(1).max(80), localOptionLabel: Ip().min(1).max(80), fixCiPillSingleLabel: Ip().min(1).max(80), fixCiPillPluralLabelTemplate: Ip().min(1).max(120), fixCiPillLoadingLabel: Ip().min(1).max(80), fixCiPillLoadingProgressLabel: Ip().min(1).max(80), fsdFixCiPillSingleLabel: Ip().min(1).max(80), fsdFixCiPillPluralLabelTemplate: Ip().min(1).max(120), fsdFixCiPillLoadingLabel: Ip().min(1).max(80), fsdFixCiPillLoadingProgressLabel: Ip().min(1).max(80) }), ng({ title: Ip().min(1).max(120), description: Ip().min(1).max(240), downloadCtaLabel: Ip().min(1).max(40), downloadUrl: Ip().url(), openCtaLabel: Ip().min(1).max(40), openUrl: Ip().min(1).max(2048) }), ng({ promptTemplate: Ip() }), ng({ max_loaded_agents: Bh().int().min(2).max(10) }), ng({ enabled: Rh(), keep_recent_hidden: Bh().int().min(0) }), ng({ code_gate_bytes: Bh().int().min(153600).max(52428800) }), ng({ enabled: Rh(), sweep_interval_ms: Bh().int().positive(), retained_after_close_threshold_ms: Bh().int().positive() }), ng({ prChecksPollIntervalMs: Bh().int().positive(), prChecksPollMaxBackoffMs: Bh().int().positive(), prChecksErrorBackoffMultiplier: Bh().min(1).max(4), prChecksCacheTtlSeconds: Bh().int().positive(), scmPrMetadataCacheTtlSeconds: Bh().int().positive(), scmPrDetailedStatusCacheTtlSeconds: Bh().int().positive(), scmPrForBranchCacheTtlWhenPrsSeconds: Bh().int().positive(), scmPrForBranchCacheTtlWhenEmptySeconds: Bh().int().positive(), scmPrCodeownersCacheTtlSeconds: Bh().int().positive(), scmPrCommitsCacheTtlSeconds: Bh().int().positive(), scmPrTimelineEventsCacheTtlSeconds: Bh().int().positive(), scmPrDiscussionsCacheTtlSeconds: Bh().int().positive(), scmPrCheckLogExcerptOkTtlSeconds: Bh().int().positive(), scmPrCheckLogExcerptNegativeTtlSeconds: Bh().int().positive(), detailedPrStatusChecksScopedAuthBreakerTtlSeconds: Bh().int().positive(), scmGitlabEmojiReactionCacheTtlSeconds: Bh().int().positive(), localAgentPrHeaderBatchPollIntervalMs: Bh().int().positive(), localAgentPrStatePollIntervalMs: Bh().int().positive(), localAgentPrBurstBumpOffsetsMs: tg(Bh().int().nonnegative()), cloudAgentPrStatePollIntervalMs: Bh().int().positive(), cloudAgentPrBurstBumpOffsetsMs: tg(Bh().int().nonnegative()), cloudAgentPrStatePollMaxBackoffMs: Bh().int().positive(), cloudAgentPrErrorBackoffMultiplier: Bh().min(1).max(4) }), ng({ enabled: Rh(), rehydrateAfterMs: Bh().int().nonnegative() }), ng({ maxTurns: Bh().int().positive().nullish() }), ng({ readFilesToolMaxFileSizeInBytes: Bh(), editFileToolMaxFileSizeInChars: Bh(), fileSearchToolMaxResults: Bh(), listDirV2ClientSideCharacterBudget: Bh(), readFileV2ToolMaxFileSizeInBytes: Bh(), composerDiffMaxComputationTimeMs: Bh() }), ng({ min_hours_between_prompts: Bh(), max_prompts_per_version: Bh(), max_prompts_per_day: Bh(), snooze_duration_hours: Bh() }), ng({ releaseTrack: Ip(), statsigUrl: Ip(), unlockInternalTracks: Rh() }), ng({ releaseTrack: Ip(), unlockInternalTracks: Rh() }), ng({ policy: Ig(["all", "team_only", "none"]) }), ng({ enabled: Rh(), include_credits: Rh() }), ng({ channel: Ip(), watchIntervalMs: Bh().min(6e5).max(6048e5).nullable() }), ng({ sentry_threshold_bytes: Bh(), attach_content: Rh() }), ng({ allocation_threshold_bytes: Bh(), blob_url_threshold_bytes: Bh(), retention_age_ms: Bh(), sweep_interval_ms: Bh() }), ng({ sentry_threshold_bytes: Bh() }), ng({ sentry_threshold_bytes: Bh() }), ng({ metadata_timeout_ms: Bh(), lifecycle_timeout_ms: Bh(), dashboard_timeout_ms: Bh(), recovery_per_retry_timeout_ms: Bh() }), ng({ replays_session_sample_rate: Bh().min(0).max(1) }), ng({ extensionIds: tg(Ip()), remoteVerificationMinVersion: Ip() }), ng({ autoTitle: Ip(), autoDescription: Ip(), apiTitle: Ip(), apiDescription: Ip(), autoBeyondLimitDescription: Ip(), autoUsageBarLabel: Ip(), apiUsageBarLabel: Ip() }), ng({ enabled: Rh(), tagLabel: Ip(), yellowTooltip: Ip(), redTooltip: Ip(), yellowTitle: Ip(), redTitle: Ip(), noteSubtitle: Ip(), notePlaceholder: Ip() }), ng({ enabled: Rh(), title: Ip(), description: Ip() }), ng({ flush_delay_ms: Bh().int().positive() }), ng({ window_ms: Bh().int().positive(), min_events: Bh().int().positive(), report_throttle_ms: Bh().int().positive(), top_buckets: Bh().int().positive() }), ng({ enabled_platforms: tg(Ip()), safety_poll_interval_ms: Bh().int().positive(), inactivity_timeout_ms: Bh().int().positive(), max_consecutive_failures: Bh().int().positive(), reconnect_base_delay_ms: Bh().int().positive(), reconnect_max_delay_ms: Bh().int().positive(), reconcile_delay_ms: Bh().int().positive(), use_list_page_tokens: Rh(), split_project_list: Rh(), exclude_archived_default: Rh(), projects_only_owner_lookup: Rh(), projects_only_owner_lookup_max_projects: Bh().int().nonnegative(), membership_poll_interval_ms: Bh().int().nonnegative(), membership_safety_poll_interval_ms: Bh().int().nonnegative() }), ng({ dummy: Bh() }), ng({ heap_percent: Bh() }), ng({ total_cpu_percent: Bh(), process_cpu_percent: Bh(), sustained_seconds: Bh(), check_interval_seconds: Bh(), cooldown_seconds: Bh(), include_system_processes: Rh() }), ng({ trigger_heap_percent: Bh(), duration_seconds: Bh(), sampling_interval_bytes: Bh(), cooldown_seconds: Bh() }), ng({ enabled: Rh(), metrics_interval_seconds: Bh().positive(), sample_interval_minutes: Bh().positive() }), ng({ base_threshold_mb: Bh().positive(), critical_offset_mb: Bh().positive(), show_status_entry: Rh(), show_internal_warning_popup: Rh(), show_user_toast: Rh(), user_toast_heap_percent: Bh().min(1).max(100), emit_heap_usage_metric: Rh(), emergency_profiling_enabled: Rh(), emergency_profiling_trigger_heap_percent: Bh().min(1).max(100), emergency_profiling_duration_seconds: Bh().positive(), emergency_profiling_sampling_interval_bytes: Bh().positive(), emergency_profiling_cooldown_seconds: Bh().positive() }), ng({ clientId: Ip() }), ng({ clientId: Ip() }), ng({ byJobRole: Ag(Ip().max(100), tg(ng({ pluginName: Ip().min(1).max(100), title: Ip().min(1), description: Ip().min(1), prompt: Ip().min(1).max(9979) }))), recommendedPluginNamesByJobRole: Ag(Ip().max(100), tg(Ip().min(1).max(100)).max(4)) }), ng({ enabled: Rh(), reportIntervalMs: Bh() }), ng({ enabled: Rh(), sessionSampleRate: Bh().min(0).max(1) }), ng({ enabled: Rh(), sampleRate: Bh(), maxEventsPerFlush: Bh(), reportIntervalMs: Bh(), deepProbe: Rh(), deepProbeSampleRate: Bh(), deepProbeMaxBytes: Bh(), stackAttribution: Rh(), stackCreationSampleRate: Bh(), stackRedundantThreshold: Bh(), maxTrackedCreationStacks: Bh(), maxStackReportsPerSession: Bh(), maxStackBytes: Bh() }), ng({ enabled: Rh(), sampleRate: Bh(), observerThreshold: Bh(), maxTrackedSources: Bh(), maxReportsPerSession: Bh(), maxStackBytes: Bh(), totalObserverThreshold: Bh(), totalTriggeredSourceFloor: Bh(), totalTriggeredMaxReports: Bh() }), ng({ skillDescription: Ip(), errorFixPromptTemplate: Ip(), welcomePageEnabled: Rh(), marketplaceCategoryKey: Ip(), marketplaceMaxCards: Bh().int().positive() }), ng({ byJobRole: PA }).strict(), ng({ per_joiner_warn_ms: Bh().int().nonnegative(), fire_on_will_shutdown_total_ms: Bh().int().nonnegative(), process_exit_total_ms: Bh().int().nonnegative() }), ng({ enabled: Rh(), restart_time_threshold_seconds: Bh().nonnegative(), attach_ship_it_log: Rh(), max_attachment_bytes: Bh().int().nonnegative() }), ng({ enabled: Rh(), timer_name: Ig(["ellapsedLoadMainBundle", "ellapsedRunMainBundle", "ellapsedAppReady", "ellapsedExtensions", "ellapsedExtensionsReady", "ellapsedWindowLoad", "ellapsedRequire", "ellapsedEditorRestore", "ellapsedWorkbench", "ellapsedPreWorkbenchServices"]), threshold_ms: Bh().nonnegative() }), ng({ enabled: Rh(), ping_interval_ms: Bh().int().positive(), block_threshold_ms: Bh().int().positive(), collect_stack_traces: Rh(), report_rpc_drain: Rh().optional() }), ng({ enabled: Rh(), flush_threshold_ms: Bh().int().positive(), anchor_interval_ms: Bh().int().positive(), anchor_lag_ms: Bh().int().positive(), cooldown_ms: Bh().int().positive(), session_cap: Bh().int().positive() }), ng({ enabled: Rh(), sample_rate: Bh().min(0).max(1), window_duration_ms: Bh().int().positive() }), ng({ enabled: Rh(), sample_rate: Bh().min(0).max(1), time_limit_ms: Bh().int().positive().optional() }), ng({ window_ms: Bh().int().positive(), threshold: Bh().int().positive(), max_records: Bh().int().positive(), cooldown_ms: Bh().int().nonnegative(), report_to_sentry: Rh(), report_initialize_caches: Rh() }), ng({ window_ms: Bh().int().positive(), min_samples: Bh().int().positive(), fallback_ratio_threshold: Bh().min(0).max(1), cooldown_ms: Bh().int().nonnegative(), report_to_sentry: Rh() }), ng({ max_in_memory_documents: Bh().int().positive().nullish() }), ng({ enabled: Rh(), max_reply_bytes: Bh().int().positive() }), ng({ enabled: Rh(), threshold_ms: Bh().int().positive(), commit_attribution: Rh().nullish() }), ng({ enabled: Rh(), min_fps: Bh().int().positive(), max_drops_per_interval: Bh().int().nonnegative(), interval_sec: Bh().int().positive(), baseline_interval_sec: Bh().int().positive().nullish(), baseline_sample_rate: Bh().min(0).max(1).nullish() }), ng({ mode: Ig(["off", "signup_link", "create_and_link"]) }), sg({ sidecarManifestUrl: ag([kg(""), Ip().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}\.json$/)]) }), sg({ x64: ag([kg(""), Ip().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-x64\.json$/)]), arm64: ag([kg(""), Ip().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-arm64\.json$/)]) }), sg({ darwin: ag([Ip(), sg({ companion: Ip(), remote: Ip() })]), win32: Ip() }), ng({ enrolled: Rh(), enableUI: Rh(), orgs: tg(Ip()).min(1) }), { cursor_private_inference_hard_stop: { client: true, fallbackValues: { enabled: false, instructionsUrl: null } }, mobile_iap_products: { client: true, fallbackValues: { products: { "co.anysphere.cursor.pro.monthly": "pro", "co.anysphere.cursor.proplus.monthly": "pro_plus", "co.anysphere.cursor.ultra.monthly": "ultra", "co.anysphere.sand.pro.monthly": "pro", "co.anysphere.sand.proplus.monthly": "pro_plus", "co.anysphere.sand.ultra.monthly": "ultra" } } }, codebase_protection_reporting_config: { client: true, fallbackValues: { report_interval_ms: 18e5, jitter_fraction: 0.2 } }, agent_host_bridge_wait: { client: true, fallbackValues: { initial_timeout_ms: 3e4, retry_timeout_ms: 5e3, max_attempts: 9 } }, agent_host_updater_timing: { client: true, fallbackValues: { pollIntervalMs: null, requestIdleTimeoutMs: null } }, composer_request_context_deadline: { client: true, fallbackValues: { deadline_ms: 1500, max_stale_age_ms: 6e5 } }, sand_working_state_warming_config: { client: true, fallbackValues: { maxClosureBytes: 1073741824, maxClosureBlobs: 5e4, putConcurrency: 16, parallelListing: false, migrationAgentConcurrency: 8, migrationReadBatchBlobs: 32, migrationPutConcurrency: 8, migrationCopyConcurrency: 8, migrationExportCommandTimeoutMs: 15e4, migrationHostWindowMs: 6e5, migrationExportActivityTimeoutMs: 9e5 } }, grok_bot_temporal_harness_rollout: { client: true, fallbackValues: { control: "legacy_gates", mode: "shadow", autoReviewEnforce: false } }, grok_bot_loop_detection: { client: true, fallbackValues: { mode: "off" } }, grok_bot_external_send_labeling_config: { client: true, fallbackValues: { sampleRate: 0, connectors: [{ name: "slack", hosts: ["mcp.slack.com"], sendTools: ["slack_send_message", "slack_schedule_message"] }, { name: "gmail", hosts: ["gmailmcp.googleapis.com", "api.cursor.com"], sendTools: ["send_message", "reply", "forward", "send_email", "send_draft"] }, { name: "outlook", hosts: ["api.cursor.com/rest-mcp/outlook"], sendTools: ["send_mail", "reply_to_mail_message", "forward_mail_message", "send_draft"] }, { name: "google_calendar", hosts: ["calendarmcp.googleapis.com", "api.cursor.com"], sendTools: ["create_event", "update_event"], participants: { args: ["attendees", "attendeeEmails", "addedAttendees", "addedAttendeeEmails", "addAttendees"], ownerArgs: ["calendarId"] } }, { name: "outlook_calendar", hosts: ["api.cursor.com"], sendTools: ["create_calendar_event", "update_calendar_event"], participants: { args: ["attendees"] } }, { name: "google_drive_share", hosts: ["drivemcp.googleapis.com", "api.cursor.com"], sendTools: ["share_file", "google_drive_share_file"] }, { name: "teams", hosts: ["api.cursor.com"], sendTools: ["send_chat_message", "send_channel_message", "reply_to_channel_message"] }], firstPartySendTools: [{ name: "phone_call", toolName: "place_phone_call" }, { name: "imessage", toolName: "SendIMessage" }] } }, grok_bot_system_prompt_override: { client: true, fallbackValues: { basePrompt: "" } }, remote_workspace_readiness_config: { client: true, fallbackValues: { healthcheck_timeout_ms: 3e3, remote_extension_host_startup_grace_ms: 3e3 } }, ai_code_tracking_poll: { client: true, fallbackValues: { interval_ms: 6e5 } }, solidjs_stack_trace_limit: { client: true, fallbackValues: { stackTraceLimitFloor: 0 } }, glass_remote_connection_dormancy_config: { client: true, fallbackValues: { windowIdleMinutesToSuspend: 20, hiddenAgentMinutesToSuspend: 0, suspendWhileWindowFocused: false, maxDormantQueuedMessages: 1e3, maxDormantQueuedBytes: 4194304, hardMaxDormantQueuedMessages: 2e4, hardMaxDormantQueuedBytes: 67108864 } }, idle_extension_host_killer_config: { client: true, fallbackValues: { idleMinutesToKillExtensionHost: 0, freeMemoryPercentageToKillExtensionHost: 0, killUserExtensionHost: false } }, marketplace_listing_config: { client: true, fallbackValues: { rpcTimeoutMs: 15e3 } }, editor_bugbot_config: { client: true, fallbackValues: { model: "claude-4-5-sonnet-20250929", iterations: 0, agentic_iterations: 1, agentic_model: "claude-4.5-haiku", deep_review_model: "", context_lines: 10 } }, client_speculative_summarization_config: { client: true, fallbackValues: { tokenUsageThresholdPercentage: 70, tolerancePercentage: 5, inflightMaxAgeMinutes: 5, speculativeStreamTimeoutMinutes: 5 } }, rate_limited_reconnect_message_config: { client: true, fallbackValues: { message: "Rate limited by model provider, retrying…" } }, new_conversation_ux_config: { client: true, fallbackValues: { enable: true, enabled_models: [], force_enable_on_all_models: true, group_text: true, group_thinking: true, group_todos: true, group_edits: false, smooth_stream_enable: false, grouped_text_max_length: 100, grouped_text_max_length_composer_family: 88, tool_summary_mode: "single_word", nest_tool_blocks: false } }, meta_agent_config: { client: true, fallbackValues: { meta_parent_model: "claude-4.6-opus-high-fast", allow_subagent_followups: true, enable_notes: false } }, task_card_tips: { client: true, fallbackValues: { startup_tips: [{ id: "cloud-subagents", text: "Use /in-cloud for cloud subagents" }] } }, product_tips_config: { client: true, fallbackValues: { tips: [], config: { intervalMs: 8e3, minClientVersion: "" } } }, composer_sandboxing_promo: { client: true, fallbackValues: { version: 0 } }, playwright_log_configs: { client: true, fallbackValues: { logSizeThreshold: 25e3, logPreviewLines: 25, logPreviewChars: 25e3 } }, privacy_mode_acknowledgement_onboarding: { client: true, fallbackValues: { mode: "on" } }, tools_concurrency_config: { client: true, fallbackValues: { tools: { RIPGREP_RAW_SEARCH: { ttl: 1e4, maxConcurrent: 5 }, RIPGREP_SEARCH: { ttl: 1e4, maxConcurrent: 5 } }, defaultTtl: 1e4, defaultMaxConcurrent: 999999 } }, client_rg: { client: true, fallbackValues: { num_threads: 4, fallback_num_threads: 4, use_batch_executor: false, batch_executor_wait_ms: 50 } }, http2_ping_config: { client: true, fallbackValues: { enabled: [], pingIdleConnection: null, pingIntervalMs: null, pingTimeoutMs: null, idleConnectionTimeoutMs: null } }, http2_agent_connection_pool_config: { client: true, fallbackValues: { poolSize: 4 } }, http1_keepalive_config: { client: true, fallbackValues: { keepAliveInitialDelayMs: null } }, nal_websocket_client_pool: { client: true, fallbackValues: { maxConnections: 1 } }, ws_dark_durability_probe_config: { client: true, fallbackValues: { idleHoldMs: 3e4, echoTimeoutMs: 5e3, concurrency: 4 } }, abort_controller_logging_config: { client: true, fallbackValues: { sampling_rate: 1 } }, hooks_client_config: { client: true, fallbackValues: { hooks_ready_timeout_ms: 2e3 } }, composer_hang_detection_config: { client: true, fallbackValues: { thresholds_ms: [2e3, 4e3, 6e3, 8e3, 1e4, 12e3, 14e3, 16e3, 32e3] } }, composer_errors_without_button_support: { client: true, fallbackValues: { error_type_denylist: [] } }, nal_stall_detector_timeout_config: { client: true, fallbackValues: { advisoryTimeoutMs: 2e4, failTimeoutMs: 3e4 } }, nal_request_context_blob_transport_config: { client: true, fallbackValues: { mode: "legacy", max_blob_bytes: 15728640, max_inline_dynamic_bytes: 1048576 } }, simulated_thinking_error_timeout: { client: true, fallbackValues: { timeout_ms: 15e3 } }, agent_loop_phase_display: { client: true, fallbackValues: { enabled: false, min_display_threshold_ms: 0 } }, in_app_ads_dev_override_config: { client: true, fallbackValues: { ad_id_to_show: "" } }, in_app_ads_quiet_period_config: { client: true, fallbackValues: { quiet_period_ms: 6e5, first_launch_quiet_period_ms: 864e5 } }, environment_setup_resume_config: { client: true, fallbackValues: { max_resume_age_ms: Na.Er } }, perf_monitor_control: { client: true, fallbackValues: { enabled: false, subsample_polling_rate_sec: 0, sample_polling_rate_min: 0 } }, glass_reactivated_user_routing_config: { client: true, fallbackValues: { user_routing_enabled: false, inactive_days: 7, ch_timeout_ms: 500, ch_cache_ttl_seconds: 86400, local_routing_enabled: true } }, retry_interceptor_config: { client: true, fallbackValues: { retriableErrors: [{ code: "Unavailable" }, { code: "Internal" }, { code: "DeadlineExceeded" }] } }, retry_interceptor_params_config: { client: true, fallbackValues: { maxRetries: null, baseDelayMs: null, maxDelayMs: null } }, text_delta_pacing_config: { client: true, fallbackValues: { targetCharsPerFrame: 0, maxLagFrames: 8, barrierMaxWaitMs: 0 } }, extension_monitor_control: { client: true, fallbackValues: { local_enabled: false, backend_reporting_enabled: false, network_diagnostics_reporting_enabled: false, subsample_polling_rate_sec: 0, sample_polling_rate_min: 0 } }, agent_memory_pressure_monitor: { client: true, fallbackValues: { monitor_enabled: false, low_memory_sustained_sec: 30, min_agent_process_age_sec: 0, low_memory_available_pct: 10, low_memory_available_abs_gb: 3, cpu_high_pct: 90, cpu_high_sustained_sec: 30, min_reported_cpu_pct: 5 } }, sand_process_metrics: { client: true, fallbackValues: { local_enabled: false, backend_reporting_enabled: false, subsample_polling_rate_sec: 0, sample_polling_rate_min: 0 } }, sand_rpc_tracing: { client: true, fallbackValues: { enabled: false, sample_ratio: 0.01 } }, gc_trace_control: { client: true, fallbackValues: { enabled: false, drain_interval_sec: 120 } }, disable_infinite_cloud_agent_stream_retries: { client: true, fallbackValues: { enabled: false } }, cloud_agent_shared_blob_cache: { client: true, fallbackValues: { max_bytes: 134217728 } }, local_subagent_limits: { client: true, fallbackValues: { maxRunning: 32 } }, sand_min_client_version: { client: true, fallbackValues: { min_version: "", backend_min_version: "", novnc_port_token_min_version: "", hosted_mcp_oauth_callback_min_version: "", max_age_days: 14 } }, sand_mobile_version_support: { client: true, fallbackValues: { min_recommended_build: 0, min_allowed_build: 0, update_url: "" } }, sand_computer_use_playwright_config: { client: true, fallbackValues: { modelId: "sand-cua", maxMode: false, parameters: [] } }, grok_bot_conversation_size_limits: { client: true, fallbackValues: { soft_limit_mb: 256, hard_limit_mb: 1024 } }, sand_share_bot_export_policy: { client: true, fallbackValues: { policy: "team_only" } }, sand_usage_breakdown: { client: true, fallbackValues: { enabled: false, include_credits: false } }, sand_default_model: { client: true, fallbackValues: { modelId: "default", maxMode: false, parameters: [] } }, sand_automations_model: { client: true, fallbackValues: { modelId: "default", maxMode: false, parameters: [] } }, sand_feedback_prompt_config: { client: true, fallbackValues: { enabled: false, sample_rate_denominator: 100, cooldown_seconds: 172800, signup_grace_seconds: 7200 } }, agent_store_sync_client_config: { client: true, fallbackValues: { sync_debounce_ms: 5e3, idle_backoff_factor: 1, sync_idle_max_ms: 5e3, idle_quiesce_ms: 0, large_target_ttl_ms: 18e5, sync_backoff_base_ms: 5e3, sync_backoff_max_ms: 6e4, project_sync_debounce_ms: 5e3, project_sync_idle_max_ms: 5e3, project_sync_backoff_base_ms: 5e3, project_sync_backoff_max_ms: 6e4, passive_retry_interval_ms: 5e3, passive_index_poll_interval_ms: 2e3, project_store_poll_interval_ms: 4e3, path_refresh_min_interval_ms: 1e3, project_notes_poll_interval_ms: 5e3, max_file_size_bytes: Da.EO, token_refresh_buffer_ms: 6e4, mint_terminal_denial_cache_ms: 18e5, skip_denied_mount_sync: 0, rpc_retry_max_attempts: 3, rpc_retry_base_delay_ms: 250, rpc_retry_max_delay_ms: 5e3, rpc_retry_multiplier: 2, token_refresh_jitter_ratio: 0.5, min_token_slack_ms: 5e3, mint_retry_policy_version: 1, mint_retry_max_attempts: 2, mint_retry_base_delay_ms: 250, mint_retry_max_delay_ms: 2e3, mint_retry_budget_ratio: 0.1, mint_retry_budget_floor: 3, mint_transient_negative_cache_base_ms: 5e3, mint_transient_negative_cache_max_ms: 12e4, mint_gate_open_threshold: 5, mint_gate_window_ms: 3e4, mint_gate_open_base_ms: 5e3, mint_gate_open_max_ms: 12e4, rpc_timeout_ms: 6e4, blob_idle_timeout_ms: 6e4, blob_connect_timeout_ms: 0, sync_round_timeout_ms: 3e5, sync_round_progress_timeout_ms: 0, sync_round_hard_cap_ms: 0, sync_round_unwind_timeout_ms: 3e4, lock_release_failure_threshold: 3, lock_release_failure_streak_threshold: 0, lock_release_failure_streak_passive_ms: 3e5, resume_gap_threshold_ms: 12e4, resume_detection_mode: "mono_gap", dirty_passive_stalled_threshold_ms: 12e4, s3_concurrency: 8, list_concurrency: 4, list_walk_concurrency: 4, hash_concurrency: 4, presign_concurrency: 4, multipart_upload_threshold_bytes: 67108864, multipart_part_size_bytes: 16777216, multipart_presign_window_size: 8, pull_presign_window_size: 500, multipart_complete_max_attempts: 3, multipart_max_restarts: 1, multipart_max_conflict_renames: 1, multipart_max_expiry_refreshes: 1, write_barrier_timeout_ms: 2e3, scoped_reserved_slots: 1, path_sync_request_poll_ms: 250, path_sync_request_wait_poll_ms: 50, exclusive_mutation_claim_poll_ms: 250, shared_scheduler: false, periodic_coalesce_ms: 2e3, remote_version_enabled: false, version_full_list_interval_ms: 864e5, version_audit_sample_rate: 0, version_probe_enabled: false, version_probe_max_entries: 50, stale_store_root_max_idle_ms: 6048e5, store_root_id_fence: false, index_closed_invalidates_session: false, store_eviction_mode: "legacy_sweep", store_eviction_quarantine_ms: 864e5, store_eviction_max_roots_per_run: 4, store_eviction_max_hash_bytes_per_run: 268435456, store_eviction_mark_ttl_ms: 6e5, store_eviction_min_interval_ms: 216e5, tombstone_full_refresh_rounds: 2880, tombstone_full_refresh_interval_ms: 864e5, tombstone_prune_slack_ms: 2592e5, local_stat_fast_path: "off", push_order: "scan", local_stat_fast_path_audit_rate: 1, local_stat_racy_margin_ms: 2e3, harness_recovery_policy: "recover", harness_recovery_start_jitter_ms: 3e4, harness_recovery_probe_base_ms: 3e5, harness_recovery_probe_max_ms: 36e5, harness_remembered_mounts_max: 16, mount_policy: null, surfaces: {} } }, local_subscription_mint_cache_config: { client: true, fallbackValues: { mint_refresh_slack_ms: 6e4, mint_failure_base_ms: 5e3, mint_failure_max_ms: 12e4, mint_failure_jitter: 0.2, mint_cache_max_conversations: 256 } }, gemini_video_attachment_config: { client: true, fallbackValues: { maxBytes: 31457280, inlineMaxBytes: 15728640, signedUrlMaxBytes: 15728640, cloudMaxVideoAttachmentsPerRequest: 5, cloudMaxDocumentAttachmentsPerRequest: 5, localMaxVideoAttachmentsPerRequest: 5, localMaxTotalInlineVideoBytesPerRequest: 36700160 } }, agent_layout_migration: { client: true, fallbackValues: { showSettings: false, keepIsland: false, sidebarLocation: "noop" } }, default_diff_mode: { client: true, fallbackValues: { default_diff_mode: "diffs" } }, switch_mode_tool_config: { client: true, fallbackValues: { enabledForNal: false, enabledForOal: false, fromModes: [], targetModes: [] } }, mcp_auth_status_copy_config: { client: true, fallbackValues: { authToolDescription: "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.", errorStatusMessage: "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor's Customize page > MCPs; otherwise continue with a different approach.", needsAuthStatusMessageWithAuthTool: 'The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server "{serverIdentifier}" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, authenticate it first; otherwise continue with a different approach.' } }, mcp_reconnect_config: { client: true, fallbackValues: { fastRetryBaseDelayMs: 5e3, fastRetryMaxDelayMs: 6e4, fastRetryMaxAttempts: 5, periodicRetryBaseDelayMs: 3e5, periodicRetryMaxDelayMs: 18e5, maxPeriodicCycles: null, focusRetryCooldownMs: 3e5, inlineReconnectCooldownMs: 3e5, oauthBackendRefreshHydrationPollIntervalMs: 500, streamableHttpSession404TombstoneThreshold: 5, healthProbeTimeoutMs: 1e4, toolCallBoundedTimeoutEnabled: true, toolCallIdleTimeoutMs: 12e4, toolCallMaxTotalTimeoutMs: 36e5, degradedProbeDelayMs: 3e4, maxDegradedProbeFailures: 3, keepaliveProbeDelayMs: 3e5, keepaliveJitterMs: 3e4, stabilityThresholdMs: 3e4, stdioConnectFailuresAreNonRetryable: true, retryNonRetryableOnWake: false, nonRetryableWakeRetryCooldownMs: 3e5, retryNonRetryableAutomatically: false, networkResumeReconnectEnabled: false, networkResumeReconnectDebounceMs: 5e3, overrides: null } }, mcp_oauth_sweep_config: { client: true, fallbackValues: { oauthAttemptTtlMs: 36e5, refreshLockTtlMs: null, refreshLockMaxHoldMs: 12e4, registrationLockTtlMs: null } }, mcp_oauth_refresh_policy: { client: true, fallbackValues: { classifyBeforeWipe: false } }, mcp_oauth_loopback_redirect: { client: true, fallbackValues: { enabled: true, denylist: [], ipv4Hosts: [] } }, mcp_oauth_backend_redis_lock_config: { client: true, fallbackValues: { operations: ["refresh"], executorKinds: ["backendHttpMcp", "cloudAgent", "agentHost"], providerAllowlist: [], fallbackMode: "fail_open", refreshLockTtlMs: 3e4, registrationLockTtlMs: 3e4, waitPollIntervalMs: 250, waitJitterMs: 100, maxWaitMs: 3e4 } }, sand_pressure_cpu_profiler_config: { client: true, fallbackValues: { sustainedPressureWindowMs: 15e4, profileDurationMs: 15e3, minIntervalMs: 216e5, maxRetainedProfiles: 3 } }, sand_stream_deadline_config: { client: true, fallbackValues: { firstTokenDeadlineMs: 15e4, idleDeadlineMs: 9e4 } }, inline_diff_performance_config: { client: true, fallbackValues: { maxDecorations: 100 } }, tray_refresh_config: { client: true, fallbackValues: { enableMainProcessCloudRefresh: false, activeIntervalMs: 15e3, idleIntervalMs: 6e4, emptyIntervalMs: 3e5, engagementThrottleMs: 5e3, menuCap: 25, enablePoll: true, enableEngagement: true, enablePower: true } }, performance_events_config: { client: true, fallbackValues: { enabled: false, flushIntervalMs: 3e4, sampleRate: 0, maxScriptsPerLoaf: 10, maxBatchBytes: 32768, loafThresholdMs: 1e3, maxEventsPerFlush: 20 } }, background_composer_list_limit: { client: true, fallbackValues: { limit: 32 } }, switch_to_model_slug_config: { client: true, fallbackValues: { modelSlug: "", modelIdWithParams: { modelId: "", params: [] } } }, debug_mode_ui_instructions_config: { client: true, fallbackValues: { proceed_instructions: "Issue reproduced, please proceed", mark_fixed_instructions: "The issue has been fixed. Please clean up the instrumentation." } }, user_intent_config: { client: true, fallbackValues: { maxChatsToRead: 100, maxProjectsToGroup: 5, model: "claude-4.5-opus-high-thinking", promptTemplate: `You are analyzing conversation transcripts to identify repeated user behaviors.

## Transcript Location
Transcripts are stored at: {{agentTranscriptsPath}}

## Transcript Format
Each '.txt' file is a human-readable conversation transcript with this structure:
- 'user:' sections contain user messages (often wrapped in '<user_query>' tags)
- 'assistant:' sections contain assistant responses
- '[Tool call]' blocks show which tools were invoked
- '[Tool result]' blocks show tool outputs

Files can be large. Focus on extracting the '<user_query>' sections which contain the actual user requests. Do NOT try to read the entire file contents because it will pollute your context.

## How to Read Transcripts
1. Use Glob to list files: "{{agentTranscriptsPath}}/*.txt"
2. For each file, extract just the '<user_query>' blocks - these show what users asked for
3. You can use Grep to search for '<user_query>' patterns across files

## Task
Analyze the {{maxChatsToRead}} most recent conversations (by file modification time). Be thorough and do not bias towards recency when analyzing conversations. Ignore trivial conversations and conversations where nothing concrete happened.

Your goal is to understand how the user interacts with the agent. Focus especially on the corrections that the user makes repeatedly. Focus on common terminal commands/workflows the user instructs the agent to do, changes, and other very stable patterns.

## Evidence Standards
When making claims about what the agent SHOULD or SHOULD NOT do, only cite conversations where:
- The user explicitly corrected the agent for doing something wrong
- The user undid or rejected an agent action
- The user gave an explicit instruction ('don\\'t do X', 'always do Y')

Do NOT infer 'don\\'t do X' from:
- The user asking a question about X (e.g., 'should we add tests?' does not mean 'don\\'t add tests proactively')
- The user doing X themselves (doesn't mean the agent shouldn't)
- Absence of the agent doing X

For each claim, ask: 'Is there a conversation where the user pushed back on the agent for doing this?' If not, don't include it as a guideline. For each piece of information you discern, you must cite 4 conversations. For each citation, verify that the conversation actually backs up your claim. Never include direct quotes from user messages; summarize at a high level.

These are the sections to cover. Do not overlap these with existing user and project rules; if there is overlap or conflict always go with the existing rules.

- Developer profile: How does the user interact with the agent. Focus on how much autonomy they like to give the agent vs. how much they would like to oversee the changes the agent is making. What is their workflow for getting tasks done. What kind of tasks do they often work on. Verify across many conversations, and do not extrapolate too hard.
- Frequented areas of the codebase: Parts of the codebase the user primarily works in, and what kinds of tasks correspond to each part of the codebase.
- Important terminal commands: Terminal commands/workflows the user runs repeatedly that are unique to the project/user workflow, and when they should be used. Focus on test, lint, and build commands. Do not include git commands.

Do not write any files in this step. You will be asked in a follow-up message to write the final user profile to disk.`, secondStepPromptTemplate: "Turn your analysis into a concise 'index.md' markdown file that will be shown to all agents in the future.\n\nWrite the file contents to: {{userIntentDirPath}}\n(This is a temporary file path and will be atomically moved to {{finalUserIntentDirPath}}.)\n\nRequirements:\n- Do not cite user messages or transcripts directly (no quotes)\n- Avoid overly specific task details; focus on stable patterns and preferences\n- Keep it reasonably short\n- For each guideline/claim, include 4 conversation citations and verify that each citation supports the claim" } }, browser_default_url_config: { client: true, fallbackValues: { defaultUrl: "https://cursor.com" } }, glass_per_app_tabs_config: { client: true, fallbackValues: { agentTabSelectionTTL: 3e4 } }, glass_tiling_config: { client: true, fallbackValues: { showDraftsInSidebar: false } }, glass_fsd_launch_pill_config: { client: true, fallbackValues: { pillLabel: "Autopilot PR", tooltip: "Fix CI, conflicts, and comments with full self driving", dropdownAriaLabel: "Autopilot PR runtime", cloudOptionLabel: "Run in Cloud", localOptionLabel: "Run locally in a Worktree", fixCiPillSingleLabel: "Debug CI Failure", fixCiPillPluralLabelTemplate: "Debug {count} CI Failures", fixCiPillLoadingLabel: "Debugging CI", fixCiPillLoadingProgressLabel: "Debugging CI", fsdFixCiPillSingleLabel: "Fix CI with FSD", fsdFixCiPillPluralLabelTemplate: "Fix {count} CI Failures with FSD", fsdFixCiPillLoadingLabel: "Fixing CI with FSD", fsdFixCiPillLoadingProgressLabel: "Fixing CI with FSD" } }, grok_bot_contextual_banner_copy: { client: true, fallbackValues: { title: "Grok Bot can do this for you", description: "An AI teammate that works in your tools and comes back with finished work.", downloadCtaLabel: "Download", downloadUrl: "https://cursor.com/download/bot", openCtaLabel: "Open Grok Bot", openUrl: "grokbot://" } }, glass_btw_side_question_prompt_config: { client: true, fallbackValues: { promptTemplate: ["You are answering a single ephemeral question about the user's current work. Use the provided conversation as context and respond directly in one answer. Do not ask follow-up questions, do not request mode switches, and do not mention tool limitations unless absolutely necessary.", "If the conversation does not contain enough to answer, say so briefly.", "", "{{question}}"].join("\n") } }, glass_loaded_agent_lru_cap: { client: true, fallbackValues: { max_loaded_agents: 5 } }, composer_hidden_bubble_eviction: { client: true, fallbackValues: { enabled: false, keep_recent_hidden: 1 } }, glass_large_file_gate_config: { client: true, fallbackValues: { code_gate_bytes: 10485760 } }, glass_workspace_lifecycle_metrics: { client: true, fallbackValues: { enabled: false, sweep_interval_ms: 6e4, retained_after_close_threshold_ms: 45e3 } }, glass_pr_operations_polling_config: { client: true, fallbackValues: { prChecksPollIntervalMs: 3e4, prChecksPollMaxBackoffMs: 18e4, prChecksErrorBackoffMultiplier: 1.5, prChecksCacheTtlSeconds: 900, scmPrMetadataCacheTtlSeconds: 3600, scmPrDetailedStatusCacheTtlSeconds: 60, scmPrForBranchCacheTtlWhenPrsSeconds: 60, scmPrForBranchCacheTtlWhenEmptySeconds: 10, scmPrCodeownersCacheTtlSeconds: 300, scmPrCommitsCacheTtlSeconds: 300, scmPrTimelineEventsCacheTtlSeconds: 300, scmPrDiscussionsCacheTtlSeconds: 300, scmPrCheckLogExcerptOkTtlSeconds: 120, scmPrCheckLogExcerptNegativeTtlSeconds: 30, detailedPrStatusChecksScopedAuthBreakerTtlSeconds: 900, scmGitlabEmojiReactionCacheTtlSeconds: 1800, localAgentPrHeaderBatchPollIntervalMs: 3e4, localAgentPrStatePollIntervalMs: 6e5, localAgentPrBurstBumpOffsetsMs: [3e3, 6e3, 9e3, 15e3, 2e4, 25e3, 3e4], cloudAgentPrStatePollIntervalMs: 6e4, cloudAgentPrBurstBumpOffsetsMs: [3e3, 6e3, 9e3, 15e3, 2e4, 25e3, 3e4], cloudAgentPrStatePollMaxBackoffMs: 3e5, cloudAgentPrErrorBackoffMultiplier: 1.5 } }, cloud_agent_stream_reattach: { client: true, fallbackValues: { enabled: true, rehydrateAfterMs: 12e4 } }, cloud_agent_stream_conversation_turn_window: { client: true, fallbackValues: { maxTurns: null } }, tool_limits_config: { client: true, fallbackValues: { readFilesToolMaxFileSizeInBytes: 2e6, editFileToolMaxFileSizeInChars: 15e4, fileSearchToolMaxResults: 10, listDirV2ClientSideCharacterBudget: 1e3, readFileV2ToolMaxFileSizeInBytes: 2e8, composerDiffMaxComputationTimeMs: 2e3 } }, update_prompt_config: { client: true, fallbackValues: { min_hours_between_prompts: 48, max_prompts_per_version: 3, max_prompts_per_day: 1, snooze_duration_hours: 72 } }, internal_release_track_override: { client: true, fallbackValues: { releaseTrack: "", statsigUrl: "", unlockInternalTracks: false } }, sand_internal_release_track_override: { client: true, fallbackValues: { releaseTrack: "", unlockInternalTracks: false } }, sand_host_bundle_channel: { client: true, fallbackValues: { channel: "", watchIntervalMs: null } }, giant_json_stringify_config: { client: true, fallbackValues: { sentry_threshold_bytes: 1e7, attach_content: false } }, giant_buffer_retention_config: { client: true, fallbackValues: { allocation_threshold_bytes: 33554432, blob_url_threshold_bytes: 33554432, retention_age_ms: 3e5, sweep_interval_ms: 6e4 } }, giant_json_parse_config: { client: true, fallbackValues: { sentry_threshold_bytes: 1e9 } }, giant_vsbuffer_decode_config: { client: true, fallbackValues: { sentry_threshold_bytes: 2e7 } }, mcp_ipc_timeouts: { client: true, fallbackValues: { metadata_timeout_ms: 1e4, lifecycle_timeout_ms: 1e4, dashboard_timeout_ms: 1e4, recovery_per_retry_timeout_ms: 1e4 } }, sentry_session_recording_config: { client: true, fallbackValues: { replays_session_sample_rate: 0 } }, extension_signature_verification_bypass_list: { client: true, fallbackValues: { extensionIds: ["nromanov.dotrush", "ms-python.python", "typescriptteam.native-preview", "typespec.typespec-vscode", "ms-toolsai.jupyter", "k3ndr1ckfu.tcl-language-support-for-vscode", "amiq.dvt"], remoteVerificationMinVersion: "2.25.0" } }, sandbox_default_network_allowlist: { client: true, fallbackValues: { allowlist: [] } }, auto_spillover_ui_config: { client: true, fallbackValues: Ua.rO }, glass_perf_vote_config: { client: true, fallbackValues: Qa.Q }, portal_outage_alert: { client: true, fallbackValues: { enabled: false, title: "", description: "" } }, slack_mcp_client_id: { client: true, fallbackValues: { clientId: "3660753192626.8903469228982" } }, shopify_mcp_client_id: { client: true, fallbackValues: { clientId: "2a457b21c946d5bc8d1675d1b3b8c2d6" } }, file_watcher_metrics_config: { client: true, fallbackValues: { flush_delay_ms: 3e4 } }, file_watcher_forwarded_storm_config: { client: true, fallbackValues: { window_ms: 1e4, min_events: 2500, report_throttle_ms: 3e5, top_buckets: 8 } }, cloud_agent_list_stream_config: { client: true, fallbackValues: { enabled_platforms: [], safety_poll_interval_ms: 6e4, inactivity_timeout_ms: 45e3, max_consecutive_failures: 5, reconnect_base_delay_ms: 1e3, reconnect_max_delay_ms: 6e4, reconcile_delay_ms: 1e3, use_list_page_tokens: true, split_project_list: false, exclude_archived_default: false, projects_only_owner_lookup: false, projects_only_owner_lookup_max_projects: 5e3, membership_poll_interval_ms: 0, membership_safety_poll_interval_ms: 0 } }, statsig_dummy_gauge_config: { client: true, fallbackValues: { dummy: 0 } }, memory_monitor_user_toast_config: { client: true, fallbackValues: { heap_percent: 80 } }, cpu_monitor_config: { client: true, fallbackValues: { total_cpu_percent: 250, process_cpu_percent: 95, sustained_seconds: 60, check_interval_seconds: 15, cooldown_seconds: 1800, include_system_processes: true } }, memory_pressure_profiling_config: { client: true, fallbackValues: { trigger_heap_percent: 70, duration_seconds: 30, sampling_interval_bytes: 4096, cooldown_seconds: 300 } }, webview_inventory_config: { client: true, fallbackValues: { enabled: false, metrics_interval_seconds: 30, sample_interval_minutes: 5 } }, memory_monitor_config: { client: true, fallbackValues: { base_threshold_mb: 1536, critical_offset_mb: 512, show_status_entry: false, show_internal_warning_popup: false, show_user_toast: true, user_toast_heap_percent: 80, emit_heap_usage_metric: false, emergency_profiling_enabled: true, emergency_profiling_trigger_heap_percent: 70, emergency_profiling_duration_seconds: 30, emergency_profiling_sampling_interval_bytes: 4096, emergency_profiling_cooldown_seconds: 300 } }, plugin_onboarding_by_job_role: { client: true, fallbackValues: { byJobRole: {}, recommendedPluginNamesByJobRole: {} } }, leaked_disposables_tracker: { client: true, fallbackValues: { enabled: false, reportIntervalMs: 6e4 } }, gc_disposable_leak_reporting: { client: true, fallbackValues: { enabled: false, sessionSampleRate: 0 } }, solidjs_memo_audit_config: { client: true, fallbackValues: { enabled: false, sampleRate: 1, maxEventsPerFlush: 5e4, reportIntervalMs: 6e4, deepProbe: false, deepProbeSampleRate: 0.01, deepProbeMaxBytes: 16384, stackAttribution: false, stackCreationSampleRate: 0.02, stackRedundantThreshold: 2, maxTrackedCreationStacks: 500, maxStackReportsPerSession: 10, maxStackBytes: 4e3 } }, solidjs_listener_stacks_config: { client: true, fallbackValues: { enabled: false, sampleRate: 1, observerThreshold: 2e3, maxTrackedSources: 500, maxReportsPerSession: 10, maxStackBytes: 4e3, totalObserverThreshold: 0, totalTriggeredSourceFloor: 200, totalTriggeredMaxReports: 20 } }, shell_exec_output_backpressure_config: { client: true, fallbackValues: { outputSuppressionWindowMs: 6e4, outputSuppressionThresholdCharsPerSecond: 65536, outputSuppressionMinChars: 262144, outputLimiterFlushIntervalMs: 50, outputLimiterMaxBufferedBytes: 262144, extHostMinBatchIntervalMs: 50, extHostMaxBatchIntervalMs: 500, extHostBytesPerIntervalStep: 1e4 } }, canvas_prompt_text_config: { client: true, fallbackValues: { skillDescription: "A Cursor Canvas is a live React app that the user can open beside the chat. You MUST use a canvas when the agent produces a standalone analytical artifact — quantitative analyses, billing investigations, security audits, architecture reviews, data-heavy content, timelines, charts, tables, interactive explorations, repeatable tools, or any response that benefits from visual layout. Especially prefer a canvas when presenting results from MCP tools (Datadog, Databricks, Linear, Sentry, Slack, etc.) where the data is the deliverable — render it in a rich canvas rather than dumping it into a markdown table or code block. If you catch yourself about to write a markdown table, stop and use a canvas instead. You MUST also read this skill whenever you create, edit, or debug any .canvas.tsx file.", errorFixPromptTemplate: ["The canvas at `{canvasPath}` has the following error:", "", '"""', "{errorMessage}", '"""', "", "Check if the canvas SDK has changed since this canvas was created.", "Update the canvas to use the latest SDK components according to the supplied documentation in the canvas skill."].join("\n"), welcomePageEnabled: true, marketplaceCategoryKey: "canvas-featured", marketplaceMaxCards: 4 } }, glass_ftux_first_action_config: { client: true, fallbackValues: { byJobRole: {} } }, shutdown_hang_watchdog_config: { client: true, fallbackValues: { per_joiner_warn_ms: 2e3, fire_on_will_shutdown_total_ms: 3e3, process_exit_total_ms: 5e3 } }, update_diagnostics: { client: true, fallbackValues: { enabled: false, restart_time_threshold_seconds: 30, attach_ship_it_log: true, max_attachment_bytes: 5e6 } }, startup_diagnostics: { client: true, fallbackValues: { enabled: false, timer_name: "ellapsedLoadMainBundle", threshold_ms: 3e4 } }, renderer_ping_config: { client: true, fallbackValues: { enabled: false, ping_interval_ms: 5e3, block_threshold_ms: 15e3, collect_stack_traces: true, report_rpc_drain: false } }, main_watcher_stall_probe_config: { client: true, fallbackValues: { enabled: false, flush_threshold_ms: 250, anchor_interval_ms: 1e3, anchor_lag_ms: 500, cooldown_ms: 6e4, session_cap: 10 } }, editor_input_latency_metrics_config: { client: true, fallbackValues: { enabled: false, sample_rate: 0.01, window_duration_ms: 6e4 } }, editor_tokenization_metrics_config: { client: true, fallbackValues: { enabled: false, sample_rate: 0.01, time_limit_ms: 500 } }, ripgrep_invocation_monitor_config: { client: true, fallbackValues: { window_ms: 1e4, threshold: 50, max_records: 100, cooldown_ms: 3e5, report_to_sentry: true, report_initialize_caches: false } }, grep_fallback_monitor_config: { client: true, fallbackValues: { window_ms: 6e4, min_samples: 20, fallback_ratio_threshold: 0.5, cooldown_ms: 3e5, report_to_sentry: true } }, instant_grep_indexing_config: { client: true, fallbackValues: { max_in_memory_documents: null } }, git_diff_reply_limit_config: { client: true, fallbackValues: { enabled: true, max_reply_bytes: 31457280 } }, renderer_slow_interaction_sentry_config: { client: true, fallbackValues: { enabled: false, threshold_ms: 1e3, commit_attribution: false } }, glass_fps_monitor_config: { client: true, fallbackValues: { enabled: false, min_fps: 30, max_drops_per_interval: 3, interval_sec: 60, baseline_interval_sec: null, baseline_sample_rate: null } }, xai_team_link_create_mode: { client: true, fallbackValues: { mode: "off" } }, mac_computer_use_sidecar_manifest: { client: true, fallbackValues: { sidecarManifestUrl: "" } }, windows_computer_use_sidecar_manifest: { client: true, fallbackValues: { x64: "", arm64: "" } }, computer_use_mcp_instructions: { client: true, fallbackValues: { darwin: { companion: "", remote: "" }, win32: "" } }, change_monitor_enrollment: { client: true, fallbackValues: { enrolled: false, enableUI: false, orgs: ["*"] } } });
    Object.keys(TA), xA(["control", "grok_primary", "pinned_selection", "grouped_auto_expand"]), xA(["control", "treatment"]);
    function xA(t3) {
      return Object.assign((e3) => {
        if (-1 === t3.findIndex((t4) => t4 === e3)) throw new Error(`Invalid value for enum: ${e3}, expected one of: ${t3.join(", ")}`);
        return e3;
      }, { enumValues: t3 });
    }
    function NA(t3) {
      if ("boolean" != typeof t3) throw new Error(`Invalid value for boolean: ${t3}`);
      return t3;
    }
    function DA(t3) {
      if ("string" != typeof t3) throw new Error(`Invalid value for string: ${t3}`);
      return t3;
    }
    function UA(t3) {
      if ("number" != typeof t3) throw new Error(`Invalid value for number: ${t3}`);
      return t3;
    }
    class QA {
      static init() {
        QA.output = o2.window.createOutputChannel("Cursor-always-local debug logs", { log: true });
      }
      static error(t3, ...e3) {
        QA.output && QA.output.error(t3, ...e3);
      }
      static warn(t3, ...e3) {
        QA.output && QA.output.warn(t3, ...e3);
      }
      static info(t3, ...e3) {
        QA.output && QA.output.info(t3, ...e3);
      }
      static debug(t3, ...e3) {
        QA.output && QA.output.debug(t3, ...e3);
      }
      static trace(t3, ...e3) {
        QA.output && QA.output.trace(t3, ...e3);
      }
    }
    class MA {
      static init() {
        MA.output = o2.window.createOutputChannel("Cursor Tab", { log: true });
      }
      static error(t3, ...e3) {
        MA.output && MA.output.error(t3, ...e3);
      }
      static warn(t3, ...e3) {
        MA.output && MA.output.warn(t3, ...e3);
      }
      static info(t3, ...e3) {
        MA.output && MA.output.info(t3, ...e3);
      }
      static debug(t3, ...e3) {
        MA.output && MA.output.debug(t3, ...e3);
      }
      static trace(t3, ...e3) {
        MA.output && MA.output.trace(t3, ...e3);
      }
    }
    class OA {
      constructor(t3) {
        let e3 = t3.globalState.get("unique_cpp_user_id");
        null == e3 && (e3 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), t3.globalState.update("unique_cpp_user_id", e3)), this._uniqueCppUserId = e3;
      }
      static initialize(t3) {
        OA._instance || (OA._instance = new OA(t3));
      }
      static getInstance() {
        if (!OA._instance) throw new Error("SpoofedIdProvider not initialized");
        return OA._instance;
      }
      maybeGetSpoofedCppAccessToken(t3, e3) {
        const r3 = o2.cursor.getCursorCreds()?.backendUrl, n2 = "redacted" + this._uniqueCppUserId;
        return (r3?.includes("lclhst.build") || r3?.includes("localhost")) && e3?.includes("cursor.sh") ? (u.info("Using spoofed token"), (function(t4, e4) {
          let r4 = t4.split("").map((t5) => t5.charCodeAt(0));
          for (let t5 = 0; t5 < r4.length; t5++) r4[t5] = (r4[t5] + 128 - e4 % 128) % 128;
          return String.fromCharCode(...r4);
        })(n2, 1)) : t3;
      }
    }
    const FA = (() => {
      try {
        const t3 = Pa.totalmem();
        return Number.isFinite(t3) && t3 > 0 ? String(Math.round(t3)) : void 0;
      } catch {
        return;
      }
    })();
    class LA {
      constructor(t3) {
        this.disposables = [], this.privacyLogChannel = void 0, this.log = { debug: (t4, ...e3) => u.debug(t4, ...e3), info: (t4, ...e3) => u.info(t4, ...e3), warn: (t4, ...e3) => u.warn(t4, ...e3), error: (t4, ...e3) => u.error(t4, ...e3), trace: (t4, ...e3) => u.trace(t4, ...e3) }, this.debugLog = { debug: (t4, ...e3) => QA.debug(t4, ...e3), info: (t4, ...e3) => QA.info(t4, ...e3), warn: (t4, ...e3) => QA.warn(t4, ...e3), error: (t4, ...e3) => QA.error(t4, ...e3), trace: (t4, ...e3) => QA.trace(t4, ...e3) }, this.context = t3, void 0 !== t3 && OA.initialize(t3);
      }
      getCursorCreds() {
        return o2.cursor.getCursorCreds();
      }
      onDidChangeCursorCreds(t3) {
        const e3 = o2.cursor.onDidChangeCursorCreds(t3);
        return this.disposables.push(e3), e3;
      }
      getCursorAuthToken() {
        return o2.cursor.getCursorAuthToken();
      }
      onDidChangeCursorAuthToken(t3) {
        const e3 = o2.cursor.onDidChangeCursorAuthToken(t3);
        return this.disposables.push(e3), e3;
      }
      triggerTokenRefresh() {
        o2.commands.executeCommand("cursorAuth.triggerTokenRefresh", true);
      }
      maybeGetSpoofedCppAccessToken(t3, e3) {
        return void 0 === this.context ? t3 : OA.getInstance().maybeGetSpoofedCppAccessToken(t3, e3);
      }
      getTeamId() {
        return o2.cursor.getTeamId();
      }
      onDidChangeActiveTeamId(t3) {
        const e3 = o2.cursor.onDidChangeActiveTeamId(t3);
        return this.disposables.push(e3), e3;
      }
      getPrivacyModeEnum() {
        return o2.cursor.getPrivacyModeEnum();
      }
      getPrivateInferenceEnablement() {
        return void 0 === this.privateInferenceEnablement && (this.privateInferenceEnablement = (0, a.createPrivateInferenceEnablementSource)({ getEnablement: () => o2.cursor.getPrivateInferenceEnablement() }), this.disposables.push(this.privateInferenceEnablement)), this.privateInferenceEnablement;
      }
      applyRequestHeaders(t3, e3, r3) {
        o2.cursor.getAllRequestHeadersExceptAccessToken({ req: t3, backupRequestId: e3, ...void 0 !== r3 ? { clientKey: r3 } : {} });
        const n2 = t3.header;
        void 0 === FA || void 0 === n2 || n2.has("x-cursor-client-device-memory") || n2.set("x-cursor-client-device-memory", FA);
      }
      runWithNetworkContext(t3) {
        return t3();
      }
      checkFeatureGate(t3) {
        return Promise.resolve(o2.cursor.checkFeatureGate(t3));
      }
      onDidChangeGates(t3) {
        const e3 = o2.cursor.onDidChangeGates(t3);
        return this.disposables.push(e3), e3;
      }
      getDynamicConfigValue(t3) {
        return Promise.resolve(o2.cursor.getDynamicConfigValue(t3));
      }
      getDynamicConfigFallbackValues(t3) {
        return TA[t3]?.fallbackValues;
      }
      async getCachedServerConfigJson() {
        return o2.commands.executeCommand(Zo.GetCachedServerConfig);
      }
      isHttp2Disabled() {
        try {
          return o2.workspace.getConfiguration().get(oa, false);
        } catch {
          return false;
        }
      }
      async setHttp2Disabled() {
        await o2.workspace.getConfiguration().update(oa, true, true);
      }
      isHttp1SseDisabled() {
        try {
          return o2.workspace.getConfiguration().get(aa, false);
        } catch {
          return false;
        }
      }
      async setHttp1SseDisabled() {
        await o2.workspace.getConfiguration().update(aa, true, true);
      }
      onDidChangeHttpProtocolSettings(t3) {
        const e3 = o2.workspace.onDidChangeConfiguration((e4) => {
          (e4.affectsConfiguration(oa) || e4.affectsConfiguration(aa)) && t3();
        });
        return this.disposables.push(e3), e3;
      }
      getDebugTimeoutPreventionMode() {
        try {
          return o2.workspace.getConfiguration().get("cursor.debug.timeoutPrevention", "local_only");
        } catch {
          return "local_only";
        }
      }
      isWindowFocused() {
        return o2.window.state.focused;
      }
      onDidChangeWindowFocus(t3) {
        const e3 = o2.window.onDidChangeWindowState((e4) => t3(e4.focused));
        return this.disposables.push(e3), e3;
      }
      hasEffectiveProxy() {
        try {
          const t4 = o2.workspace.getConfiguration("http").get("proxy", "");
          if ("string" == typeof t4 && t4.trim().length > 0) return true;
        } catch {
        }
        const t3 = process.env;
        for (const e3 of ["HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy", "ALL_PROXY", "all_proxy"]) {
          const r3 = t3[e3];
          if (void 0 !== r3 && r3.trim().length > 0) return true;
        }
        return false;
      }
      onDidChangeProxy(t3) {
        const e3 = o2.workspace.onDidChangeConfiguration((e4) => {
          e4.affectsConfiguration("http.proxy") && t3();
        });
        return this.disposables.push(e3), e3;
      }
      async loadSystemCertificates() {
        const { loadSystemCertificates: t3 } = n(9018), e3 = await t3({ log: { error: (t4, ...e4) => QA.error(t4, ...e4), warn: (t4, ...e4) => QA.warn(t4, ...e4), info: (t4, ...e4) => QA.info(t4, ...e4), debug: (t4, ...e4) => QA.debug(t4, ...e4), trace: (t4, ...e4) => QA.trace(t4, ...e4) }, loadSystemCertificatesFromNode: () => false });
        return e3 ? [...e3] : void 0;
      }
      isLocalMode() {
        return xa;
      }
      isDevelopment() {
        return this.context?.isDevelopment ?? false;
      }
      metricsIncrement(t3) {
        o2.cursor.metricsIncrement(t3);
      }
      notifyRemoteAgentHostTunnelGoaway() {
        o2.commands.executeCommand(Ta.Cz).then(void 0, () => {
        });
      }
      writePrivacyLog(t3, e3) {
        switch (void 0 === this.privacyLogChannel && (this.privacyLogChannel = o2.window.createOutputChannel("Cursor Structured Logs", { log: true }), this.disposables.push(this.privacyLogChannel)), t3) {
          case "error":
            this.privacyLogChannel.error(e3);
            break;
          case "warn":
            this.privacyLogChannel.warn(e3);
            break;
          default:
            this.privacyLogChannel.info(e3);
        }
      }
      dispose() {
        for (const t3 of this.disposables) t3.dispose();
      }
    }
    class $A extends a.AiConnectTransportHandler {
      constructor(t3) {
        super(new LA(t3));
      }
      signalAuthReadyToRenderer() {
        this.authReady.then((t3) => {
          this.isDisposed || o2.cursor.signalAuthReady(t3);
        });
      }
      async registerWithRenderer() {
        await this.isSetup;
        const t3 = this.getTransportIfReady();
        this.isDisposed || void 0 === t3 || o2.cursor.registerConnectTransportProvider(t3);
      }
    }
    class GA {
      constructor() {
        this.transport = o2.cursor.connectTransport;
      }
      getAiServerClient() {
        return void 0 === this._aiServerClient && (this._aiServerClient = Ea(ka.AiService, this.transport)), this._aiServerClient;
      }
      async getBackgroundComposerClient() {
        return void 0 === this._backgroundComposerClient && (this._backgroundComposerClient = Ea(qa.BackgroundComposerService, this.transport)), this._backgroundComposerClient;
      }
      getAgentClient() {
        return void 0 === this._agentClient && (this._agentClient = Ea(Ra.AgentService, this.transport)), this._agentClient;
      }
      getFilesyncClient() {
        return void 0 === this._filesyncClient && (this._filesyncClient = Ea(va.FileSyncService, this.transport)), this._filesyncClient;
      }
      isDebug() {
        const t3 = o2.cursor.getCursorCreds()?.backendUrl;
        return (t3?.includes("lclhst.build") || t3?.includes("localhost")) ?? false;
      }
      async refresh() {
      }
    }
    class HA {
      ensureTagsMap(t3) {
        return (0, a.normalizeMetricsProviderTags)(t3);
      }
      increment(t3) {
        this.metricsProvider.batch([{ kind: "increment", stat: t3.stat, value: t3.value ?? 1, tags: t3.tags }]);
      }
      gauge(t3) {
        this.metricsProvider.batch([{ kind: "gauge", stat: t3.stat, value: t3.value, tags: t3.tags }]);
      }
      distribution(t3) {
        this.metricsProvider.batch([{ kind: "distribution", stat: t3.stat, value: t3.value, tags: t3.tags }]);
      }
      constructor() {
        this.host = new LA(), this.aggregatingProvider = new a.AggregatingMetricsProvider(this.host), this.metricsProvider = { batch: (t3) => {
          for (const e3 of t3) {
            const t4 = this.ensureTagsMap(e3.tags);
            switch (e3.kind) {
              case "increment":
                this.aggregatingProvider.increment(e3.stat, e3.value, t4);
                break;
              case "gauge":
                this.aggregatingProvider.gauge(e3.stat, e3.value, t4);
                break;
              case "distribution":
                this.aggregatingProvider.distribution(e3.stat, e3.value, t4);
                break;
              case "distribution_samples":
                this.aggregatingProvider.distributionSamples(e3.stat, e3.values, t4);
                break;
              default:
                break;
            }
          }
        }, flush: () => this.aggregatingProvider.flushAndWait() }, this.registration = o2.cursor.registerMetricsProvider(this.metricsProvider);
      }
      async dispose() {
        this.registration.dispose();
        try {
          await this.aggregatingProvider.disposeAndWait();
        } finally {
          this.host.dispose();
        }
      }
    }
    class KA {
      constructor({ isDevelopment: t3 }) {
        this.host = new LA(), this.impl = new a.StructuredLogProviderImpl(this.host, { isDevelopment: t3 });
        const e3 = { debug: (t4, e4, r3) => this.impl.debug(t4, e4, r3), info: (t4, e4, r3) => this.impl.info(t4, e4, r3), warn: (t4, e4, r3) => this.impl.warn(t4, e4, r3), error: (t4, e4, r3, n2) => this.impl.error(t4, e4, r3, n2) };
        this.registration = o2.cursor.registerStructuredLogProvider(e3);
      }
      dispose() {
        this.registration.dispose(), this.impl.dispose(), this.host.dispose();
      }
    }
    var VA = n(3896);
    class zA {
      constructor() {
        this.pendingRequests = /* @__PURE__ */ new Map(), this.lastCleanupTime = 0;
      }
      addChunk(t3, e3) {
        const { requestId: r3, chunkIndex: n2, isLast: s2 } = e3;
        this.cleanupStaleRequests(), this.pendingRequests.has(r3) || this.pendingRequests.set(r3, { chunks: /* @__PURE__ */ new Map(), lastChunkIndex: -1, createdAt: performance.now() });
        const i3 = this.pendingRequests.get(r3);
        if (i3.chunks.set(n2, t3), s2 && (i3.lastChunkIndex = n2), !(i3.lastChunkIndex < 0 || i3.chunks.size <= i3.lastChunkIndex)) try {
          return this.concatenate(i3.chunks, i3.lastChunkIndex + 1);
        } finally {
          this.pendingRequests.delete(r3);
        }
      }
      cleanupStaleRequests() {
        const t3 = performance.now();
        if (t3 - this.lastCleanupTime < 3e4) return;
        this.lastCleanupTime = t3;
        const e3 = [];
        for (const [r3, n2] of this.pendingRequests) t3 - n2.createdAt > 6e4 && e3.push(r3);
        for (const r3 of e3) {
          const e4 = this.pendingRequests.get(r3);
          if (e4) {
            const n2 = e4.lastChunkIndex >= 0 ? `last=${e4.lastChunkIndex}` : "no last seen";
            console.warn(`[TelemChunkReassembler] Purging stale request ${r3.slice(0, 50)}... (had ${e4.chunks.size} chunks, ${n2}, age: ${((t3 - e4.createdAt) / 1e3).toFixed(1)}s)`), this.pendingRequests.delete(r3);
          }
        }
      }
      concatenate(t3, e3) {
        let r3 = 0;
        for (let n3 = 0; n3 < e3; n3++) {
          const e4 = t3.get(n3);
          if (!e4) throw new Error(`Missing chunk ${n3} for reassembly`);
          r3 += e4.byteLength;
        }
        const n2 = new Uint8Array(r3);
        let s2 = 0;
        for (let r4 = 0; r4 < e3; r4++) {
          const e4 = t3.get(r4);
          n2.set(e4, s2), s2 += e4.byteLength;
        }
        return n2;
      }
    }
    const WA = "<|SECRET_TEXT_OMITTED|>", YA = [{ pattern: /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/gi, replacer: () => WA }, { pattern: /-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]*?-----END PGP PRIVATE KEY BLOCK-----/gi, replacer: () => WA }, { pattern: /\bsk-[a-zA-Z0-9]{20,}/gi, replacer: () => WA }, { pattern: /\b(?:sk|pk)_(?:live|test)_[a-zA-Z0-9]{24,}/gi, replacer: () => WA }, { pattern: /\bgh[ps]_[a-zA-Z0-9]{36,}/gi, replacer: () => WA }, { pattern: /\b(?:api[_-]?key|apikey|access[_-]?token|secret[_-]?key|private[_-]?key|auth[_-]?token)[\s:=]+["']?[a-zA-Z0-9_\-]{20,}["']?/gi, replacer: () => WA }, { pattern: /\b(?:AKIA|A3T|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16,}/g, replacer: () => WA }, { pattern: /\b(?:aws_secret_access_key|aws_session_token)[\s:=]+["']?[a-zA-Z0-9/+=]{40,}["']?/gi, replacer: () => WA }, { pattern: /\b(?:token|bearer|authorization)[\s:=]+["']?[a-zA-Z0-9_\-+=/.]{40,}["']?/gi, replacer: () => WA }, { pattern: /\beyJ[a-zA-Z0-9_\-]+\.eyJ[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+/g, replacer: () => WA }, { pattern: /\b([A-Z0-9_]*(?:API|AUTH|SECRET|PASSWORD|PASSWD|PWD|KEY|TOKEN|CREDENTIAL|ACCESS|DATABASE|DB|REDIS|POSTGRES|MYSQL)[A-Z0-9_]*)=(["']?)([^\s"'\n]+)\2/gi, replacer: (t3, e3, r3) => `${e3}=${r3}${WA}${r3}` }, { pattern: /\b([a-zA-Z][a-zA-Z0-9+.-]*):\/\/([^:@\s]+):([^@\s]+)@/gi, replacer: (t3, e3, r3) => `${e3}://${r3}:${WA}@` }, { pattern: /\b((?:password|passwd|pwd|secret)[\s]*[:=][\s]*["'])([^"'\n]{3,})(["'])/gi, replacer: (t3, e3, r3, n2) => `${e3}${WA}${n2}` }, { pattern: /\b((?:password|pwd)=)([^;,&\s]+)/gi, replacer: (t3, e3) => `${e3}${WA}` }, { pattern: /\b((?:secret|key|token)[\s:=]+["']?)([0-9a-fA-F]{32,})(["']?)/gi, replacer: (t3, e3, r3, n2) => `${e3}${WA}${n2}` }], jA = class t3 {
      constructor(e3, r3, n2) {
        this.fileSyncer = r3, this.aiConnectTransport = n2, this.streams = [], this.succeeded = [], this.cppEvents = [], this.telemChunkReassembler = new zA(), this.avgTimes = { streamTime: [], totalTime: [], clientTime: [], ttftTime: [], discrepencies: [] }, this.providerRegistration = o2.workspace.registerControlProvider(t3.id, this), MA.info("CURSOR LOG: Finished creating provider!");
      }
      getRegistrationSource() {
        return t3.id;
      }
      dispose() {
        this.providerRegistration.dispose();
      }
      async getFullDiff(t4, e3) {
      }
      async getDataframeSummary(t4) {
      }
      async tokenizeBPE(t4, e3) {
      }
      async appendCppTelem(t4, e3) {
        if (!("enabled" === o2.cursor.getPrivateInferenceEnablement() && (0, VA.AO)("tab"))) for (let r3 = 0; r3 < 4; r3++) {
          if (true === e3) {
            let t5 = 0;
            for (; true !== o2.cursor.getPrivacyMode() && t5 < 6; ) await new Promise((t6) => setTimeout(t6, 5e3)), t5++;
          }
          if (true === o2.cursor.getPrivacyMode()) return;
          try {
            const e4 = this.aiConnectTransport.getAiServerClient();
            if (void 0 === e4) return;
            this.aiConnectTransport.isDebug() && QA.info("Getting CPP Edit history status. Attempt: ", r3);
            const n2 = new AbortController(), s2 = setTimeout(() => n2.abort(), 1e4), i3 = await e4.cppEditHistoryStatus(new Yi(), { signal: n2.signal });
            if (clearTimeout(s2), true !== i3.on) return;
            {
              this.aiConnectTransport.isDebug() && QA.info("Sending CPP Append request");
              const r4 = new AbortController(), n3 = setTimeout(() => r4.abort(), 1e5), s3 = await e4.cppAppend(new Vi({ changes: t4 }), { signal: r4.signal });
              if (clearTimeout(n3), this.aiConnectTransport.isDebug() && QA.info("CPP Append request success", s3), true === s3.success) return;
            }
          } catch (t5) {
            this.aiConnectTransport.isDebug() && QA.error("Edit history append failed, Retrying...", t5), await new Promise((t6) => setTimeout(t6, 1e3 * Math.pow(4, r3)));
          }
        }
      }
      async appendCppTelemChunk(t4, e3, r3) {
        if (e3.isLast && 0 === e3.chunkIndex) return this.aiConnectTransport.isDebug() && console.log(`[TelemChunk] Single chunk (fast path): ${t4.byteLength} bytes, sending directly to backend`), void await this.appendCppTelem(t4, r3);
        let n2;
        try {
          n2 = this.telemChunkReassembler.addChunk(t4, e3);
        } catch (t5) {
          return console.warn(`[TelemChunk] Reassembly failed for ${e3.requestId.slice(0, 30)}..., dropping request:`, t5), void Y_?.increment({ stat: "cppclient.chunkReassemblyFailed" });
        }
        void 0 !== n2 ? (this.aiConnectTransport.isDebug() && console.log(`[TelemChunk] All ${e3.chunkIndex + 1} chunk(s) received for ${e3.requestId.slice(0, 30)}..., reassembled size: ${n2.byteLength} bytes, sending to backend`), await this.appendCppTelem(n2, r3)) : this.aiConnectTransport.isDebug() && console.log(`[TelemChunk] Received chunk ${e3.chunkIndex + 1}${e3.isLast ? " (last)" : ""} for ${e3.requestId.slice(0, 30)}..., size: ${t4.byteLength} bytes`);
      }
      async redact(t4) {
        let e3 = t4;
        for (const t5 of YA) e3 = e3.replace(t5.pattern, t5.replacer);
        return e3;
      }
      abortCpp(t4) {
        this.streams.find((e3) => e3.generationUUID === t4)?.abortController.abort(), this.streams = this.streams.filter((e3) => e3.generationUUID !== t4), this.streams = this.streams.filter((t5) => performance.now() - t5.startTime < 8e3);
      }
      async streamCpp(t4, e3) {
        if ("enabled" === o2.cursor.getPrivateInferenceEnablement() && (0, VA.AO)("tab")) return;
        const r3 = performance.timeOrigin + performance.now(), n2 = new AbortController();
        let s2 = false;
        n2.signal.addEventListener("abort", () => {
          s2 = true;
        }), this.streams.push({ generationUUID: e3.generateUuid, abortController: n2, startTime: performance.now(), modelInfo: void 0, buffer: [] });
        const i3 = this.aiConnectTransport.getAiServerClient();
        if (void 0 !== i3) {
          try {
            const o3 = performance.timeOrigin + performance.now(), u2 = true !== e3.retryWithoutFilesync && void 0 !== t4.currentFile && this.fileSyncer.shouldRelyOnFileSyncForFile(t4.currentFile?.relativeWorkspacePath, t4.currentFile?.fileVersion), c2 = u2 ? this.fileSyncer.getRecentFilesyncUpdates({ relativeWorkspacePath: t4.currentFile?.relativeWorkspacePath, requestedModelVersion: t4.currentFile?.fileVersion }) : void 0, l2 = u2 ? "" : t4.currentFile?.contents, m2 = await i3.streamCpp(new ms({ ...t4, currentFile: new qn({ ...t4.currentFile, contents: l2, relyOnFilesync: u2 }), contextItems: [], filesyncUpdates: await c2, isDebug: this.aiConnectTransport.isDebug(), giveDebugOutput: this.aiConnectTransport.isDebug(), supportsCpt: true, supportsCrlfCpt: true }), { signal: n2.signal, headers: { ...(a2 = e3.generateUuid, { "X-Request-ID": a2, "X-Amzn-Trace-Id": `Root=${a2}` }), ...this.fileSyncer.getFileSyncEncryptionHeader() } });
            let d2 = true, f2 = 0, p2 = {};
            (async () => {
              try {
                let n3 = false;
                for await (const t5 of m2) {
                  const r4 = this.streams.find((t6) => t6.generationUUID === e3.generateUuid);
                  if (void 0 === r4) {
                    MA.info("CURSOR LOG: Aborting streaming cpp with id", e3.generateUuid), s2 = true;
                    break;
                  }
                  true === d2 && (f2 = performance.timeOrigin + performance.now(), d2 = false);
                  let i5 = true;
                  if (t5.modelInfo && (r4.modelInfo = t5.modelInfo, i5 = false), t5.rangeToReplace && (r4.buffer.push({ case: "rangeToReplace", rangeToReplaceOneIndexed: { ...t5.rangeToReplace, shouldRemoveLeadingEol: t5.shouldRemoveLeadingEol }, bindingId: t5.bindingId }), i5 = false), i5 && void 0 !== t5.text && t5.text.length > 0 && r4.buffer.push(t5.text), t5.cursorPredictionTarget && r4.buffer.push({ case: "cursorPredictionTarget", cursorPredictionTarget: t5.cursorPredictionTarget, bindingId: t5.bindingId }), t5.doneEdit && r4.buffer.push({ case: "doneEdit", doneEdit: t5.doneEdit }), t5.beginEdit && r4.buffer.push({ case: "beginEdit", beginEdit: t5.beginEdit }), true === t5.doneStream) {
                    MA.info("CURSOR LOG: Done streaming cpp with id", e3.generateUuid), n3 = true;
                    break;
                  }
                }
                const i4 = performance.timeOrigin + performance.now();
                if (MA.info("CPP RT LOG: Time taken for streaming cpp", i4 - r3, "with request", e3.generateUuid), Y_?.distribution({ stat: "cppclient.streamingtime", value: i4 - r3, tags: { isAborted: s2 ? "true" : "false" } }), Y_?.distribution({ stat: "cppclient.actualTtftFromStart", value: f2 - e3.startOfCpp, tags: { isAborted: s2 ? "true" : "false" } }), Y_?.distribution({ stat: "cppclient.timeTillServerRequest", value: o3 - e3.startOfCpp, tags: { isAborted: s2 ? "true" : "false" } }), Y_?.distribution({ stat: "cppclient.requestToTtft", value: f2 - o3, tags: { isAborted: s2 ? "true" : "false" } }), n3) {
                  for await (const t5 of m2) if (void 0 !== t5.debugModelOutput && (MA.info("CPP Request Log with id", e3.generateUuid), MA.info("=======>Model output", "\n" + t5.debugModelOutput), !p2.modelInput && t5.debugModelInput && (p2.modelInput = t5.debugModelInput), !p2.modelOutput && t5.debugModelOutput && (p2.modelOutput = t5.debugModelOutput)), void 0 !== t5.debugStreamTime && (MA.info("=======>Debug stream time", t5.debugStreamTime), this.avgTimes.streamTime.push(parseFloat(t5.debugStreamTime ?? "0")), !p2.debugStreamTime && t5.debugStreamTime && (p2.debugStreamTime = t5.debugStreamTime)), void 0 !== t5.debugTotalTime && (MA.info("=======>Debug total time", t5.debugTotalTime), this.avgTimes.totalTime.push(parseFloat(t5.debugTotalTime ?? "0")), !p2.debugTotalTime && t5.debugTotalTime && (p2.debugTotalTime = t5.debugTotalTime)), void 0 !== t5.debugTtftTime && (MA.info("=======>Debug ttft time", t5.debugTtftTime), this.avgTimes.ttftTime.push(parseFloat(t5.debugTtftTime ?? "0")), !p2.debugTtftTime && t5.debugTtftTime && (p2.debugTtftTime = t5.debugTtftTime)), void 0 !== t5.debugServerTiming) {
                    let e4, r4;
                    t5.debugServerTiming.split(",").forEach((t6) => {
                      const [n4, s3] = t6.split(";"), [i5, o4] = s3.split("="), a3 = parseFloat(o4);
                      "model.ttft" === n4 ? e4 = a3 : "model.server_time_to_first_token" === n4 ? r4 = a3 : "dur" === i5 ? MA.info("=======>Debug server timing", n4, a3) : MA.info("=======>Debug server number", n4, a3);
                    }), void 0 !== r4 && MA.info("=======>Debug fireworks ttft", r4), void 0 !== e4 && MA.info("=======>Debug model ttft", e4), void 0 !== e4 && void 0 !== r4 && (MA.info("=======>Debug client vs fireworks ttft discrepency", e4 - r4), this.avgTimes.discrepencies.push(e4 - r4)), !p2.debugServerTiming && t5.debugServerTiming && (p2.debugServerTiming = t5.debugServerTiming);
                  }
                } else MA.info("=======>No stream again", e3.generateUuid);
                if (this.avgTimes.clientTime.push(i4 - r3), this.avgTimes.streamTime.length > 20 && (this.avgTimes.streamTime = this.avgTimes.streamTime.slice(-20)), this.avgTimes.totalTime.length > 20 && (this.avgTimes.totalTime = this.avgTimes.totalTime.slice(-20)), this.avgTimes.clientTime.length > 20 && (this.avgTimes.clientTime = this.avgTimes.clientTime.slice(-20)), this.avgTimes.ttftTime.length > 20 && (this.avgTimes.ttftTime = this.avgTimes.ttftTime.slice(-20)), !s2) {
                  this.avgTimes.discrepencies.length > 0 && MA.info("Average of latest 20 discrepencies", this.avgTimes.discrepencies.reduce((t5, e4) => t5 + e4, 0) / this.avgTimes.discrepencies.length), MA.info("Average of latest 20 ttft time", this.avgTimes.ttftTime.reduce((t5, e4) => t5 + e4, 0) / this.avgTimes.ttftTime.length), MA.info("Average of latest 20 stream time", this.avgTimes.streamTime.reduce((t5, e4) => t5 + e4, 0) / this.avgTimes.streamTime.length), MA.info("Average of latest 20 total time", this.avgTimes.totalTime.reduce((t5, e4) => t5 + e4, 0) / this.avgTimes.totalTime.length), MA.info("Average of latest 20 client time", this.avgTimes.clientTime.reduce((t5, e4) => t5 + e4, 0) / this.avgTimes.clientTime.length), MA.info("Average of latest 20 discrepencies", this.avgTimes.discrepencies.reduce((t5, e4) => t5 + e4, 0) / this.avgTimes.discrepencies.length), MA.info("CPP RT LOG: All stats", { streamingtime: i4 - r3, actualTtftFromStart: f2 - e3.startOfCpp, timeTillServerRequest: o3 - e3.startOfCpp, requestToTtft: f2 - o3, totalTime: i4 - e3.startOfCpp }), this.succeeded.push(e3.generateUuid), this.succeeded = this.succeeded.slice(-20);
                  try {
                    const n4 = { requestId: e3.generateUuid, relativeWorkspacePath: t4.currentFile?.relativeWorkspacePath ?? "", timestamp: r3, modelName: t4.modelName ?? "unspecified", metrics: { timeToFirstToken: f2 - e3.startOfCpp, serverTimeToFirstToken: p2.debugTtftTime ? parseFloat(p2.debugTtftTime) : 0, streamingTime: i4 - r3, totalTime: i4 - e3.startOfCpp, requestToTtft: f2 - o3 }, debugInfo: { modelInput: p2.modelInput, modelOutput: p2.modelOutput, serverTimings: p2.debugServerTiming ? ZA(p2.debugServerTiming) : void 0, streamTime: p2.debugStreamTime, totalTime: p2.debugTotalTime, ttftTime: p2.debugTtftTime } };
                    this.cppEvents.unshift(n4), this.cppEvents.length > 20 && (this.cppEvents = this.cppEvents.slice(0, 20));
                  } catch (t5) {
                    MA.info("CURSOR LOG: Error in adding cpp report event", t5);
                  }
                }
              } catch (r4) {
                if (r4 instanceof pa) {
                  if (MA.info("CURSOR LOG: Error in streaming cpp (connect error)", r4.message), r4.findDetails(Dn).some((t5) => t5.error === Un.FILE_NOT_FOUND) && true !== e3.retryWithoutFilesync) return this.fileSyncer.resetSequentialSuccessfulSync(t4.currentFile?.relativeWorkspacePath ?? ""), await this.streamCpp(t4, { ...e3, retryWithoutFilesync: true });
                } else MA.info("CURSOR LOG: Error in streaming cpp (not connect error)", r4);
              }
            })();
          } catch (t5) {
            null != t5.message && t5.message.includes("ENHANCE_YOUR_CALM") && (MA.info("CURSOR LOG: Refreshing cpp client", e3.generateUuid), this.aiConnectTransport.refresh()), MA.info("CURSOR LOG: Error in streaming cpp (setup call)", t5.message);
          }
          var a2;
          MA.info("CURSOR LOG: requestId", e3.generateUuid, " ");
        }
      }
      cancelCpp(t4) {
        this.abortCpp(t4);
      }
      flushCpp(t4) {
        const e3 = this.streams.find((e4) => e4.generationUUID === t4);
        if (void 0 === e3) return this.succeeded.includes(t4) ? { type: "success", buffer: ["m4CoTMbqtR9vV1zd"], modelInfo: void 0 } : { type: "failure", reason: "stream not found" };
        if (performance.now() - (e3?.startTime ?? 0) > 1e4) return this.streams = this.streams.filter((e4) => e4.generationUUID !== t4), { type: "failure", reason: "stream took too long" };
        const r3 = e3.buffer;
        return e3.buffer = [], this.succeeded.includes(t4) && (this.streams = this.streams.filter((e4) => e4.generationUUID !== t4)), { type: "success", buffer: r3, modelInfo: e3?.modelInfo ?? void 0 };
      }
      async getCppReport() {
        return { events: [...this.cppEvents].sort((t4, e3) => e3.timestamp - t4.timestamp) };
      }
    };
    jA.id = "cursor-retrieval";
    let XA = jA;
    function ZA(t3) {
      const e3 = {};
      return t3.split(",").forEach((t4) => {
        const [r3, n2] = t4.split(";"), [s2, i3] = n2.split("=");
        "dur" === s2 && (e3[r3.trim()] = parseFloat(i3));
      }), e3;
    }
    const t_ = 256e3;
    class e_ {
      constructor(t3) {
        this.controlProvider = t3, this.disposables = [], this.sessionEvents = [], this.runningPayloadSizeInBytes = 0, this.lastPerformanceNowTimestamp = 0, this.isFlushing = false, this.disposables.push(o2.cursor.registerExtHostEventLogger(this));
      }
      dispose() {
        this.flush(this.performanceNowTimestamp().performanceNow);
        for (const t3 of this.disposables) t3.dispose();
      }
      async forceFlush() {
        this.isFlushing ? await new Promise((t3) => setTimeout(t3, 3e3)) : await this.flush(this.performanceNowTimestamp().performanceNow);
      }
      isDebug() {
        const t3 = o2.cursor.getCursorCreds()?.backendUrl;
        return (t3?.includes("lclhst.build") || t3?.includes("localhost")) ?? false;
      }
      async recordExtHostEvent(t3) {
        if (this.isDebug() && QA.info(`recordExtHostEvent: ${t3.case}`), true !== o2.cursor.getPrivacyMode()) try {
          if ("unknown" !== t3.case) {
            t3.case;
            throw new Error(`Unknown event case: ${t3.case}`);
          }
        } catch (t4) {
        }
      }
      performanceNowTimestamp() {
        const t3 = performance.timeOrigin - o2.cursor.rendererPerformanceTimeOrigin;
        return { performanceNow: performance.now() + t3, performanceTimeOrigin: o2.cursor.rendererPerformanceTimeOrigin };
      }
      async appendCppTelemWithRetry(t3, e3 = 2) {
        for (let r3 = 0; r3 <= e3; r3++) try {
          return await this.controlProvider.appendCppTelem(new zi(t3).toBinary(), o2.cursor.getPrivacyMode());
        } catch (t4) {
          if (!(r3 < e3)) throw this.isDebug() && QA.info(`Append threw error after ${e3 + 1} attempts`, t4), t4;
          this.isDebug() && QA.info(`Append threw error on attempt ${r3 + 1}, retrying...`, t4), await new Promise((t5) => setTimeout(t5, 1e3 * Math.pow(4, r3)));
        }
      }
      async flush(t3) {
        if (!this.isFlushing) {
          this.lastPerformanceNowTimestamp = t3;
          try {
            if (this.isFlushing = true, this.isDebug() && QA.info(`Preparing to flush ${this.sessionEvents.length} session events`), 0 === this.sessionEvents.length) return;
            const e3 = o2.cursor.getCppSessionId();
            if (void 0 === e3) return;
            this.isDebug() && QA.info(`Flushing ${this.sessionEvents.length} session events`);
            try {
              const r3 = this.sessionEvents;
              for (const e4 of r3) e4.performanceNowFlushTime = t3;
              this.sessionEvents = [], this.runningPayloadSizeInBytes = 0;
              const n2 = { sessionId: e3, timeOrigin: o2.cursor.rendererPerformanceTimeOrigin, clientVersion: o2.cursorVersion, clientCommit: o2.cursor.productCommit, privacyModeStatus: this.getPrivacyModeStatus(), sessionEvents: r3, modelUuid: "", modelChangesMayBeOutOfOrder: false, relativePath: "", startingModelValue: void 0, startingModelVersion: void 0, changes: [], events: [], uri: "" };
              await this.appendCppTelemWithRetry(n2);
            } catch (t4) {
            }
          } finally {
            this.isFlushing = false;
          }
        }
      }
      getPrivacyModeStatus() {
        const t3 = o2.cursor.getPrivacyMode();
        return true === t3 ? Wi.PRIVACY_ENABLED : false === t3 ? Wi.EXPLICIT_NO_PRIVACY : Wi.UNSPECIFIED;
      }
      shouldEarlyExit() {
        return this.sessionEvents.length > 5e3 || this.runningPayloadSizeInBytes > 128e4;
      }
      async recordEvent(t3) {
        if (true === o2.cursor.getPrivacyMode()) return void (this.isDebug() && QA.info("Not recording event because privacy mode is enabled"));
        if (true !== o2.cursor.getCppTelemEnabled()) return void (this.isDebug() && QA.info("Not recording event because telemetry is not enabled"));
        if (this.shouldEarlyExit()) return void (this.isDebug() && QA.info("Not recording event because we are early exiting"));
        const e3 = this.performanceNowTimestamp(), r3 = { event: t3, performanceNowTimestamp: e3.performanceNow, performanceTimeOrigin: e3.performanceTimeOrigin }, n2 = new Hi(r3).toBinary().byteLength;
        n2 > 1e6 || (this.sessionEvents.push(new Hi(r3)), this.runningPayloadSizeInBytes += n2, (this.sessionEvents.length > 1e3 || this.lastPerformanceNowTimestamp + 6e5 < e3.performanceNow || this.runningPayloadSizeInBytes > t_) && this.flush(e3.performanceNow));
      }
    }
    var r_ = n(6982);
    class n_ {
      constructor(t3) {
        this.context = t3, this._isEnabledFromServer = false, this.credChangeCallbacks = [], this.credChangeTimeout = null, this.disposables = [], this.refresh(), this.disposables.push(o2.cursor.onDidChangeCursorAuthToken((t4) => {
          this.refresh();
        }), o2.cursor.onDidChangeCursorCreds((t4) => {
          this.refresh();
        })), this.refreshInterval = setInterval(() => this.refresh(), 3e4), OA.initialize(t3);
      }
      dispose() {
        clearInterval(this.refreshInterval), this.credChangeTimeout && (clearTimeout(this.credChangeTimeout), this.credChangeTimeout = null);
        for (const t3 of this.disposables) t3.dispose();
        this.disposables.length = 0;
      }
      getAccessToken() {
        const t3 = this.getGeoCppBackendUrl();
        return OA.getInstance().maybeGetSpoofedCppAccessToken(this._accessToken, t3);
      }
      getGeoCppBackendUrl() {
        return this._geocppBackendUrl;
      }
      isFileSyncEnabled() {
        const t3 = "enabled" === o2.cursor.getPrivateInferenceEnablement() && (0, VA.AO)("tab");
        return !xa && !t3 && (this._isEnabledFromServer && (this._isFileSyncEnabled ?? false) && (o2.cursor.cppEnabled() ?? true) && (e3 = o2.cursor.cppConfig(), r3 = void 0 !== this._accessToken, n2 = (function(t4) {
          switch (t4) {
            case "ultra":
            case "pro":
            case "pro_plus":
            case "enterprise":
            case "free_trial":
            case "pro_student":
            case "express":
            case "premium":
            case "plus":
            case "super":
            case "unified_ultra":
              return true;
            default:
              return false;
          }
        })(o2.cursor.membershipType() ?? sa.FREE), void 0 !== e3 && false !== e3.isOn && !(false === r3 || false === n2 && !e3.shouldLetUserEnableCppEvenIfNotPro)));
        var e3, r3, n2;
      }
      isDevelopment() {
        return this._isDevelopment ?? false;
      }
      refresh() {
        const t3 = this._accessToken, e3 = this._geocppBackendUrl;
        this._accessToken = o2.cursor.getCursorAuthToken(), this._geocppBackendUrl = o2.cursor.getCursorCreds()?.geoCppBackendUrl, this._isDevelopment = this.context.isDevelopment, this._isFileSyncEnabled = o2.cursor.isFileSyncClientEnabled() || !this.isDevelopment(), this._accessToken === t3 && this._geocppBackendUrl === e3 || (this.credChangeTimeout && clearTimeout(this.credChangeTimeout), this.credChangeTimeout = setTimeout(() => {
          this.notifyCredChange(), this.credChangeTimeout = null;
        }, 1e3));
      }
      addCredChangeCallback(t3) {
        this.credChangeCallbacks.push(t3);
      }
      notifyCredChange() {
        for (const t3 of this.credChangeCallbacks) t3();
      }
      set isEnabledFromServer(t3) {
        this._isEnabledFromServer = t3;
      }
      get fsConfig() {
        return this._fsConfig;
      }
      set fsConfig(t3) {
        this._fsConfig = t3;
      }
    }
    class s_ extends Error {
      constructor(t3) {
        super(t3), this.name = "RateLimitError";
      }
    }
    class i_ {
      constructor({ rate: t3 = 10, capacity: e3 = 50, refillInterval: r3 = 1e3, maxFailures: n2 = 10, breakerResetTime: s2 = 3e5 }) {
        this.rate = t3, this.tokens = e3, this.refillInterval = r3, this.maxFailures = n2, this.breakerResetTime = s2, this.tokens = e3, this.capacity = e3, this.lastRefillTime = Date.now(), this.circuitBreakers = /* @__PURE__ */ new Map();
      }
      updateConfig(t3) {
        void 0 !== t3 && (this.rate = t3.rateLimiterRps ?? this.rate, this.capacity = t3.rateLimiterBurstCapacity ?? this.capacity, this.refillInterval = t3.rateLimiterBreakerResetTimeMs ?? this.refillInterval, this.maxFailures = t3.syncRetryMaxAttempts ?? this.maxFailures, this.breakerResetTime = t3.rateLimiterBreakerResetTimeMs ?? this.breakerResetTime);
      }
      refillTokens() {
        const t3 = Date.now(), e3 = (t3 - this.lastRefillTime) / this.refillInterval * this.rate;
        this.tokens = Math.min(this.capacity, this.tokens + e3), this.lastRefillTime = t3;
      }
      checkCircuitBreaker(t3) {
        const e3 = this.circuitBreakers.get(t3);
        if (!e3) return false;
        return Date.now() - e3.lastFailureTime > this.breakerResetTime ? (this.circuitBreakers.delete(t3), false) : e3.failureCount >= this.maxFailures;
      }
      incrementFailure(t3) {
        const e3 = this.circuitBreakers.get(t3) || { failureCount: 0, lastFailureTime: 0 };
        e3.failureCount++, e3.lastFailureTime = Date.now(), this.circuitBreakers.set(t3, e3);
      }
      executeForPath(t3, e3) {
        if (t3 = t3 ?? "", this.checkCircuitBreaker(t3)) throw new s_(`Circuit breaker open for ${t3} because it is rate limiting too often or is failing too often.`);
        if (this.refillTokens(), this.tokens < 1) throw this.incrementFailure(t3), new s_("Rate limit exceeded");
        this.tokens -= 1;
        try {
          return e3();
        } catch (e4) {
          throw this.incrementFailure(t3), e4;
        }
      }
    }
    const o_ = "x-fs-client-key";
    class a_ {
      constructor(t3, e3) {
        this.config = t3, this.aiConnectTransport = e3, this.myUUID = (0, r_.randomUUID)(), this.clientKey = r_.randomBytes(32), this.config.addCredChangeCallback(() => this.initialize()), this.rateLimiter = new i_({ rate: this.config.fsConfig?.rateLimiterRps ?? 10, capacity: this.config.fsConfig?.rateLimiterBurstCapacity ?? 100, breakerResetTime: this.config.fsConfig?.rateLimiterBreakerResetTimeMs ?? 3e5 });
      }
      updateConfig(t3) {
        this.rateLimiter.updateConfig(t3);
      }
      async initialize() {
        try {
          await this.fsConfigUpdate();
        } catch (t3) {
          throw c.error("Failed to initialize FileSyncClient", t3), t3;
        }
      }
      throwIfFSDisabled() {
        if (!this.config.isFileSyncEnabled()) throw new Error("File sync is disabled");
      }
      getFileSyncEncryptionHeader() {
        return { [o_]: this.clientKey.toString("hex") };
      }
      async syncFile(t3) {
        const e3 = performance.now();
        try {
          this.throwIfFSDisabled();
          const r3 = this.aiConnectTransport.getFilesyncClient();
          return await this.rateLimiter.executeForPath(t3.relativeWorkspacePath, async () => {
            const n2 = await r3.fSSyncFile({ uuid: this.myUUID, ...t3 }, { headers: this.getFileSyncEncryptionHeader() }), s2 = performance.now();
            return c.info(`Synced file ${t3.relativeWorkspacePath} modelVersion=${t3.modelVersion} in ${s2 - e3}ms`), n2;
          });
        } catch (e4) {
          throw e4 instanceof s_ && c.warn(`Rate limit exceeded for file sync: ${t3.relativeWorkspacePath}`), e4;
        }
      }
      async isEnabledForUserFromServer() {
        try {
          const t3 = this.aiConnectTransport.getFilesyncClient(), e3 = await t3.fSIsEnabledForUser({ uuid: this.myUUID });
          return e3.enabled ? c.info("[ENABLED STATUS] Filesync enabled from server.") : c.info("[ENABLED STATUS] Filesync is NOT enabled from server."), e3.enabled;
        } catch (t3) {
          return c.error("Failed to check if file sync is enabled for user", JSON.stringify(t3)), false;
        }
      }
      async uploadFile(t3) {
        const e3 = performance.now();
        try {
          this.throwIfFSDisabled();
          const r3 = this.aiConnectTransport.getFilesyncClient();
          return await this.rateLimiter.executeForPath(t3.relativeWorkspacePath, async () => {
            const n2 = await r3.fSUploadFile({ uuid: this.myUUID, ...t3 }, { headers: this.getFileSyncEncryptionHeader() }), s2 = performance.now();
            return c.info(`Uploaded file ${t3.relativeWorkspacePath} modelVersion=${t3.modelVersion} in ${s2 - e3}ms`), n2;
          });
        } catch (e4) {
          throw e4 instanceof s_ && c.warn(`Rate limit exceeded for file sync: ${t3.relativeWorkspacePath}`), e4;
        }
      }
      async fsConfig() {
        const t3 = performance.now();
        try {
          this.throwIfFSDisabled();
          const e3 = this.aiConnectTransport.getFilesyncClient(), r3 = await e3.fSConfig({}), n2 = performance.now() - t3;
          return c.info(`Fetched fsConfig in ${n2}ms`), c.info("FSConfig response:", JSON.stringify(r3)), r3;
        } catch (t4) {
          throw c.error("Failed to fetch fsConfig", t4), t4;
        }
      }
      async fsConfigUpdate() {
        const t3 = await this.isEnabledForUserFromServer();
        this.config.isEnabledFromServer = t3;
        try {
          const t4 = await this.fsConfig();
          this.config.fsConfig = t4;
        } catch (t4) {
          c.error("Failed to fetch fsConfig", t4), this.config.fsConfig = void 0;
        }
      }
    }
    var u_ = n(3665);
    const c_ = require("node:diagnostics_channel");
    var l_ = (0, c_.channel)("lru-cache:metrics"), m_ = (0, c_.tracingChannel)("lru-cache"), d_ = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, f_ = () => l_.hasSubscribers || m_.hasSubscribers, p_ = /* @__PURE__ */ new Set(), h_ = "object" == typeof process && process ? process : {}, g_ = (/* @__PURE__ */ Symbol("type"), (t3) => !!t3 && t3 === Math.floor(t3) && t3 > 0 && isFinite(t3)), A_ = (t3) => g_(t3) ? t3 <= Math.pow(2, 8) ? Uint8Array : t3 <= Math.pow(2, 16) ? Uint16Array : t3 <= Math.pow(2, 32) ? Uint32Array : t3 <= Number.MAX_SAFE_INTEGER ? __ : null : null, __ = class extends Array {
      constructor(t3) {
        super(t3), this.fill(0);
      }
    }, y_ = class t3 {
      heap;
      length;
      static #g = false;
      static create(e3) {
        let r3 = A_(e3);
        if (!r3) return [];
        t3.#g = true;
        let n2 = new t3(e3, r3);
        return t3.#g = false, n2;
      }
      constructor(e3, r3) {
        if (!t3.#g) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new r3(e3), this.length = 0;
      }
      push(t4) {
        this.heap[this.length++] = t4;
      }
      pop() {
        return this.heap[--this.length];
      }
    }, w_ = class t3 {
      #g;
      #A;
      #_;
      #y;
      #w;
      #S;
      #J;
      #B;
      get perf() {
        return this.#B;
      }
      ttl;
      ttlResolution;
      ttlAutopurge;
      updateAgeOnGet;
      updateAgeOnHas;
      allowStale;
      noDisposeOnSet;
      noUpdateTTL;
      maxEntrySize;
      sizeCalculation;
      noDeleteOnFetchRejection;
      noDeleteOnStaleGet;
      allowStaleOnFetchAbort;
      allowStaleOnFetchRejection;
      ignoreFetchAbort;
      #E;
      #I;
      #C;
      #b;
      #k;
      #v;
      #q;
      #R;
      #P;
      #T;
      #x;
      #N;
      #D;
      #U;
      #Q;
      #M;
      #O;
      #F;
      #L;
      static unsafeExposeInternals(t4) {
        return { starts: t4.#D, ttls: t4.#U, autopurgeTimers: t4.#Q, sizes: t4.#N, keyMap: t4.#C, keyList: t4.#b, valList: t4.#k, next: t4.#v, prev: t4.#q, get head() {
          return t4.#R;
        }, get tail() {
          return t4.#P;
        }, free: t4.#T, isBackgroundFetch: (e3) => t4.#$(e3), backgroundFetch: (e3, r3, n2, s2) => t4.#G(e3, r3, n2, s2), moveToTail: (e3) => t4.#H(e3), indexes: (e3) => t4.#K(e3), rindexes: (e3) => t4.#V(e3), isStale: (e3) => t4.#z(e3) };
      }
      get max() {
        return this.#g;
      }
      get maxSize() {
        return this.#A;
      }
      get calculatedSize() {
        return this.#I;
      }
      get size() {
        return this.#E;
      }
      get fetchMethod() {
        return this.#S;
      }
      get memoMethod() {
        return this.#J;
      }
      get dispose() {
        return this.#_;
      }
      get onInsert() {
        return this.#y;
      }
      get disposeAfter() {
        return this.#w;
      }
      constructor(e3) {
        let { max: r3 = 0, ttl: n2, ttlResolution: s2 = 1, ttlAutopurge: i3, updateAgeOnGet: o3, updateAgeOnHas: a2, allowStale: u2, dispose: c2, onInsert: l2, disposeAfter: m2, noDisposeOnSet: d2, noUpdateTTL: f2, maxSize: p2 = 0, maxEntrySize: h2 = 0, sizeCalculation: g2, fetchMethod: A2, memoMethod: _2, noDeleteOnFetchRejection: y2, noDeleteOnStaleGet: w2, allowStaleOnFetchRejection: S2, allowStaleOnFetchAbort: J2, ignoreFetchAbort: B2, perf: E2 } = e3;
        if (void 0 !== E2 && "function" != typeof E2?.now) throw new TypeError("perf option must have a now() method if specified");
        if (this.#B = E2 ?? d_, 0 !== r3 && !g_(r3)) throw new TypeError("max option must be a nonnegative integer");
        let I2 = r3 ? A_(r3) : Array;
        if (!I2) throw new Error("invalid max value: " + r3);
        if (this.#g = r3, this.#A = p2, this.maxEntrySize = h2 || this.#A, this.sizeCalculation = g2, this.sizeCalculation) {
          if (!this.#A && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== _2 && "function" != typeof _2) throw new TypeError("memoMethod must be a function if defined");
        if (this.#J = _2, void 0 !== A2 && "function" != typeof A2) throw new TypeError("fetchMethod must be a function if specified");
        if (this.#S = A2, this.#O = !!A2, this.#C = /* @__PURE__ */ new Map(), this.#b = Array.from({ length: r3 }).fill(void 0), this.#k = Array.from({ length: r3 }).fill(void 0), this.#v = new I2(r3), this.#q = new I2(r3), this.#R = 0, this.#P = 0, this.#T = y_.create(r3), this.#E = 0, this.#I = 0, "function" == typeof c2 && (this.#_ = c2), "function" == typeof l2 && (this.#y = l2), "function" == typeof m2 ? (this.#w = m2, this.#x = []) : (this.#w = void 0, this.#x = void 0), this.#M = !!this.#_, this.#L = !!this.#y, this.#F = !!this.#w, this.noDisposeOnSet = !!d2, this.noUpdateTTL = !!f2, this.noDeleteOnFetchRejection = !!y2, this.allowStaleOnFetchRejection = !!S2, this.allowStaleOnFetchAbort = !!J2, this.ignoreFetchAbort = !!B2, 0 !== this.maxEntrySize) {
          if (0 !== this.#A && !g_(this.#A)) throw new TypeError("maxSize must be a positive integer if specified");
          if (!g_(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
          this.#W();
        }
        if (this.allowStale = !!u2, this.noDeleteOnStaleGet = !!w2, this.updateAgeOnGet = !!o3, this.updateAgeOnHas = !!a2, this.ttlResolution = g_(s2) || 0 === s2 ? s2 : 1, this.ttlAutopurge = !!i3, this.ttl = n2 || 0, this.ttl) {
          if (!g_(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
          this.#Y();
        }
        if (0 === this.#g && 0 === this.ttl && 0 === this.#A) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !this.#g && !this.#A) {
          let e4 = "LRU_CACHE_UNBOUNDED";
          ((t4) => !p_.has(t4))(e4) && (p_.add(e4), ((t4, e5, r4, n3) => {
            "function" == typeof h_.emitWarning ? h_.emitWarning(t4, e5, r4, n3) : console.error(`[${r4}] ${e5}: ${t4}`);
          })("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e4, t3));
        }
      }
      getRemainingTTL(t4) {
        return this.#C.has(t4) ? 1 / 0 : 0;
      }
      #Y() {
        let t4 = new __(this.#g), e3 = new __(this.#g);
        this.#U = t4, this.#D = e3;
        let r3 = this.ttlAutopurge ? Array.from({ length: this.#g }) : void 0;
        this.#Q = r3, this.#j = (r4, s3, i4 = this.#B.now()) => {
          e3[r4] = 0 !== s3 ? i4 : 0, t4[r4] = s3, n2(r4, s3);
        }, this.#X = (r4) => {
          e3[r4] = 0 !== t4[r4] ? this.#B.now() : 0, n2(r4, t4[r4]);
        };
        let n2 = this.ttlAutopurge ? (t5, e4) => {
          if (r3?.[t5] && (clearTimeout(r3[t5]), r3[t5] = void 0), e4 && 0 !== e4 && r3) {
            let n3 = setTimeout(() => {
              this.#z(t5) && this.#Z(this.#b[t5], "expire");
            }, e4 + 1);
            n3.unref && n3.unref(), r3[t5] = n3;
          }
        } : () => {
        };
        this.#tt = (r4, n3) => {
          if (t4[n3]) {
            let o3 = t4[n3], a2 = e3[n3];
            if (!o3 || !a2) return;
            r4.ttl = o3, r4.start = a2, r4.now = s2 || i3();
            let u2 = r4.now - a2;
            r4.remainingTTL = o3 - u2;
          }
        };
        let s2 = 0, i3 = () => {
          let t5 = this.#B.now();
          if (this.ttlResolution > 0) {
            s2 = t5;
            let e4 = setTimeout(() => s2 = 0, this.ttlResolution);
            e4.unref && e4.unref();
          }
          return t5;
        };
        this.getRemainingTTL = (r4) => {
          let n3 = this.#C.get(r4);
          if (void 0 === n3) return 0;
          let o3 = t4[n3], a2 = e3[n3];
          return o3 && a2 ? o3 - ((s2 || i3()) - a2) : 1 / 0;
        }, this.#z = (r4) => {
          let n3 = e3[r4], o3 = t4[r4];
          return !!o3 && !!n3 && (s2 || i3()) - n3 > o3;
        };
      }
      #X = () => {
      };
      #tt = () => {
      };
      #j = () => {
      };
      #z = () => false;
      #W() {
        let t4 = new __(this.#g);
        this.#I = 0, this.#N = t4, this.#et = (e3) => {
          this.#I -= t4[e3], t4[e3] = 0;
        }, this.#rt = (t5, e3, r3, n2) => {
          if (this.#$(e3)) return 0;
          if (!g_(r3)) {
            if (!n2) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            if ("function" != typeof n2) throw new TypeError("sizeCalculation must be a function");
            if (r3 = n2(e3, t5), !g_(r3)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          }
          return r3;
        }, this.#nt = (e3, r3, n2) => {
          if (t4[e3] = r3, this.#A) {
            let r4 = this.#A - t4[e3];
            for (; this.#I > r4; ) this.#st(true);
          }
          this.#I += t4[e3], n2 && (n2.entrySize = r3, n2.totalCalculatedSize = this.#I);
        };
      }
      #et = (t4) => {
      };
      #nt = (t4, e3, r3) => {
      };
      #rt = (t4, e3, r3, n2) => {
        if (r3 || n2) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      };
      *#K({ allowStale: t4 = this.allowStale } = {}) {
        if (this.#E) for (let e3 = this.#P; this.#it(e3) && ((t4 || !this.#z(e3)) && (yield e3), e3 !== this.#R); ) e3 = this.#q[e3];
      }
      *#V({ allowStale: t4 = this.allowStale } = {}) {
        if (this.#E) for (let e3 = this.#R; this.#it(e3) && ((t4 || !this.#z(e3)) && (yield e3), e3 !== this.#P); ) e3 = this.#v[e3];
      }
      #it(t4) {
        return void 0 !== t4 && this.#C.get(this.#b[t4]) === t4;
      }
      *entries() {
        for (let t4 of this.#K()) void 0 !== this.#k[t4] && void 0 !== this.#b[t4] && !this.#$(this.#k[t4]) && (yield [this.#b[t4], this.#k[t4]]);
      }
      *rentries() {
        for (let t4 of this.#V()) void 0 !== this.#k[t4] && void 0 !== this.#b[t4] && !this.#$(this.#k[t4]) && (yield [this.#b[t4], this.#k[t4]]);
      }
      *keys() {
        for (let t4 of this.#K()) {
          let e3 = this.#b[t4];
          void 0 !== e3 && !this.#$(this.#k[t4]) && (yield e3);
        }
      }
      *rkeys() {
        for (let t4 of this.#V()) {
          let e3 = this.#b[t4];
          void 0 !== e3 && !this.#$(this.#k[t4]) && (yield e3);
        }
      }
      *values() {
        for (let t4 of this.#K()) void 0 !== this.#k[t4] && !this.#$(this.#k[t4]) && (yield this.#k[t4]);
      }
      *rvalues() {
        for (let t4 of this.#V()) void 0 !== this.#k[t4] && !this.#$(this.#k[t4]) && (yield this.#k[t4]);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      [Symbol.toStringTag] = "LRUCache";
      find(t4, e3 = {}) {
        for (let r3 of this.#K()) {
          let n2 = this.#k[r3], s2 = this.#$(n2) ? n2.__staleWhileFetching : n2;
          if (void 0 !== s2 && t4(s2, this.#b[r3], this)) return this.#ot(this.#b[r3], e3);
        }
      }
      forEach(t4, e3 = this) {
        for (let r3 of this.#K()) {
          let n2 = this.#k[r3], s2 = this.#$(n2) ? n2.__staleWhileFetching : n2;
          void 0 !== s2 && t4.call(e3, s2, this.#b[r3], this);
        }
      }
      rforEach(t4, e3 = this) {
        for (let r3 of this.#V()) {
          let n2 = this.#k[r3], s2 = this.#$(n2) ? n2.__staleWhileFetching : n2;
          void 0 !== s2 && t4.call(e3, s2, this.#b[r3], this);
        }
      }
      purgeStale() {
        let t4 = false;
        for (let e3 of this.#V({ allowStale: true })) this.#z(e3) && (this.#Z(this.#b[e3], "expire"), t4 = true);
        return t4;
      }
      info(t4) {
        let e3 = this.#C.get(t4);
        if (void 0 === e3) return;
        let r3 = this.#k[e3], n2 = this.#$(r3) ? r3.__staleWhileFetching : r3;
        if (void 0 === n2) return;
        let s2 = { value: n2 };
        if (this.#U && this.#D) {
          let t5 = this.#U[e3], r4 = this.#D[e3];
          if (t5 && r4) {
            let e4 = t5 - (this.#B.now() - r4);
            s2.ttl = e4, s2.start = Date.now();
          }
        }
        return this.#N && (s2.size = this.#N[e3]), s2;
      }
      dump() {
        let t4 = [];
        for (let e3 of this.#K({ allowStale: true })) {
          let r3 = this.#b[e3], n2 = this.#k[e3], s2 = this.#$(n2) ? n2.__staleWhileFetching : n2;
          if (void 0 === s2 || void 0 === r3) continue;
          let i3 = { value: s2 };
          if (this.#U && this.#D) {
            i3.ttl = this.#U[e3];
            let t5 = this.#B.now() - this.#D[e3];
            i3.start = Math.floor(Date.now() - t5);
          }
          this.#N && (i3.size = this.#N[e3]), t4.unshift([r3, i3]);
        }
        return t4;
      }
      load(t4) {
        this.clear();
        for (let [e3, r3] of t4) {
          if (r3.start) {
            let t5 = Date.now() - r3.start;
            r3.start = this.#B.now() - t5;
          }
          this.#at(e3, r3.value, r3);
        }
      }
      set(t4, e3, r3 = {}) {
        let { status: n2 = l_.hasSubscribers ? {} : void 0 } = r3;
        r3.status = n2, n2 && (n2.op = "set", n2.key = t4, void 0 !== e3 && (n2.value = e3));
        let s2 = this.#at(t4, e3, r3);
        return n2 && l_.hasSubscribers && l_.publish(n2), s2;
      }
      #at(t4, e3, r3 = {}) {
        let { ttl: n2 = this.ttl, start: s2, noDisposeOnSet: i3 = this.noDisposeOnSet, sizeCalculation: o3 = this.sizeCalculation, status: a2 } = r3;
        if (void 0 === e3) return a2 && (a2.set = "deleted"), this.delete(t4), this;
        let { noUpdateTTL: u2 = this.noUpdateTTL } = r3;
        a2 && !this.#$(e3) && (a2.value = e3);
        let c2 = this.#rt(t4, e3, r3.size || 0, o3, a2);
        if (this.maxEntrySize && c2 > this.maxEntrySize) return this.#Z(t4, "set"), a2 && (a2.set = "miss", a2.maxEntrySizeExceeded = true), this;
        let l2 = 0 === this.#E ? void 0 : this.#C.get(t4);
        if (void 0 === l2) l2 = 0 === this.#E ? this.#P : 0 !== this.#T.length ? this.#T.pop() : this.#E === this.#g ? this.#st(false) : this.#E, this.#b[l2] = t4, this.#k[l2] = e3, this.#C.set(t4, l2), this.#v[this.#P] = l2, this.#q[l2] = this.#P, this.#P = l2, this.#E++, this.#nt(l2, c2, a2), a2 && (a2.set = "add"), u2 = false, this.#L && this.#y?.(e3, t4, "add");
        else {
          this.#H(l2);
          let r4 = this.#k[l2];
          if (e3 !== r4) {
            if (this.#O && this.#$(r4)) {
              r4.__abortController.abort(new Error("replaced"));
              let { __staleWhileFetching: e4 } = r4;
              void 0 !== e4 && !i3 && (this.#M && this.#_?.(e4, t4, "set"), this.#F && this.#x?.push([e4, t4, "set"]));
            } else i3 || (this.#M && this.#_?.(r4, t4, "set"), this.#F && this.#x?.push([r4, t4, "set"]));
            if (this.#et(l2), this.#nt(l2, c2, a2), this.#k[l2] = e3, a2) {
              a2.set = "replace";
              let t5 = r4 && this.#$(r4) ? r4.__staleWhileFetching : r4;
              void 0 !== t5 && (a2.oldValue = t5);
            }
          } else a2 && (a2.set = "update");
          this.#L && this.onInsert?.(e3, t4, e3 === r4 ? "update" : "replace");
        }
        if (0 !== n2 && !this.#U && this.#Y(), this.#U && (u2 || this.#j(l2, n2, s2), a2 && this.#tt(a2, l2)), !i3 && this.#F && this.#x) {
          let t5, e4 = this.#x;
          for (; t5 = e4?.shift(); ) this.#w?.(...t5);
        }
        return this;
      }
      pop() {
        try {
          for (; this.#E; ) {
            let t4 = this.#k[this.#R];
            if (this.#st(true), this.#$(t4)) {
              if (t4.__staleWhileFetching) return t4.__staleWhileFetching;
            } else if (void 0 !== t4) return t4;
          }
        } finally {
          if (this.#F && this.#x) {
            let t4, e3 = this.#x;
            for (; t4 = e3?.shift(); ) this.#w?.(...t4);
          }
        }
      }
      #st(t4) {
        let e3 = this.#R, r3 = this.#b[e3], n2 = this.#k[e3];
        return this.#O && this.#$(n2) ? n2.__abortController.abort(new Error("evicted")) : (this.#M || this.#F) && (this.#M && this.#_?.(n2, r3, "evict"), this.#F && this.#x?.push([n2, r3, "evict"])), this.#et(e3), this.#Q?.[e3] && (clearTimeout(this.#Q[e3]), this.#Q[e3] = void 0), t4 && (this.#b[e3] = void 0, this.#k[e3] = void 0, this.#T.push(e3)), 1 === this.#E ? (this.#R = this.#P = 0, this.#T.length = 0) : this.#R = this.#v[e3], this.#C.delete(r3), this.#E--, e3;
      }
      has(t4, e3 = {}) {
        let { status: r3 = l_.hasSubscribers ? {} : void 0 } = e3;
        e3.status = r3, r3 && (r3.op = "has", r3.key = t4);
        let n2 = this.#ut(t4, e3);
        return l_.hasSubscribers && l_.publish(r3), n2;
      }
      #ut(t4, e3 = {}) {
        let { updateAgeOnHas: r3 = this.updateAgeOnHas, status: n2 } = e3, s2 = this.#C.get(t4);
        if (void 0 !== s2) {
          let t5 = this.#k[s2];
          if (this.#$(t5) && void 0 === t5.__staleWhileFetching) return false;
          if (!this.#z(s2)) return r3 && this.#X(s2), n2 && (n2.has = "hit", this.#tt(n2, s2)), true;
          n2 && (n2.has = "stale", this.#tt(n2, s2));
        } else n2 && (n2.has = "miss");
        return false;
      }
      peek(t4, e3 = {}) {
        let { status: r3 = f_() ? {} : void 0 } = e3;
        r3 && (r3.op = "peek", r3.key = t4), e3.status = r3;
        let n2 = this.#ct(t4, e3);
        return l_.hasSubscribers && l_.publish(r3), n2;
      }
      #ct(t4, e3) {
        let { status: r3, allowStale: n2 = this.allowStale } = e3, s2 = this.#C.get(t4);
        if (void 0 === s2 || !n2 && this.#z(s2)) return void (r3 && (r3.peek = void 0 === s2 ? "miss" : "stale"));
        let i3 = this.#k[s2], o3 = this.#$(i3) ? i3.__staleWhileFetching : i3;
        return r3 && (void 0 !== o3 ? (r3.peek = "hit", r3.value = o3) : r3.peek = "miss"), o3;
      }
      #G(t4, e3, r3, n2) {
        let s2 = void 0 === e3 ? void 0 : this.#k[e3];
        if (this.#$(s2)) return s2;
        let i3 = new AbortController(), { signal: o3 } = r3;
        o3?.addEventListener("abort", () => i3.abort(o3.reason), { signal: i3.signal });
        let a2 = { signal: i3.signal, options: r3, context: n2 }, u2 = (n3, s3 = false) => {
          let { aborted: o4 } = i3.signal, u3 = r3.ignoreFetchAbort && void 0 !== n3, m3 = r3.ignoreFetchAbort || !(!r3.allowStaleOnFetchAbort || void 0 === n3);
          if (r3.status && (o4 && !s3 ? (r3.status.fetchAborted = true, r3.status.fetchError = i3.signal.reason, u3 && (r3.status.fetchAbortIgnored = true)) : r3.status.fetchResolved = true), o4 && !u3 && !s3) return c2(i3.signal.reason, m3);
          let d2 = l2, f2 = this.#k[e3];
          return (f2 === l2 || void 0 === f2 && u3 && s3) && (void 0 === n3 ? void 0 !== d2.__staleWhileFetching ? this.#k[e3] = d2.__staleWhileFetching : this.#Z(t4, "fetch") : (r3.status && (r3.status.fetchUpdated = true), this.#at(t4, n3, a2.options))), n3;
        }, c2 = (n3, s3) => {
          let { aborted: o4 } = i3.signal, a3 = o4 && r3.allowStaleOnFetchAbort, u3 = a3 || r3.allowStaleOnFetchRejection, c3 = u3 || r3.noDeleteOnFetchRejection, m3 = l2;
          if (this.#k[e3] === l2 && (!c3 || !s3 && void 0 === m3.__staleWhileFetching ? this.#Z(t4, "fetch") : a3 || (this.#k[e3] = m3.__staleWhileFetching)), u3) return r3.status && void 0 !== m3.__staleWhileFetching && (r3.status.returnedStale = true), m3.__staleWhileFetching;
          if (m3.__returned === m3) throw n3;
        };
        r3.status && (r3.status.fetchDispatched = true);
        let l2 = new Promise((e4, n3) => {
          let o4 = this.#S?.(t4, s2, a2);
          o4 && o4 instanceof Promise && o4.then((t5) => e4(void 0 === t5 ? void 0 : t5), n3), i3.signal.addEventListener("abort", () => {
            (!r3.ignoreFetchAbort || r3.allowStaleOnFetchAbort) && (e4(void 0), r3.allowStaleOnFetchAbort && (e4 = (t5) => u2(t5, true)));
          });
        }).then(u2, (t5) => (r3.status && (r3.status.fetchRejected = true, r3.status.fetchError = t5), c2(t5, false))), m2 = Object.assign(l2, { __abortController: i3, __staleWhileFetching: s2, __returned: void 0 });
        return void 0 === e3 ? (this.#at(t4, m2, { ...a2.options, status: void 0 }), e3 = this.#C.get(t4)) : this.#k[e3] = m2, m2;
      }
      #$(t4) {
        if (!this.#O) return false;
        let e3 = t4;
        return !!e3 && e3 instanceof Promise && e3.hasOwnProperty("__staleWhileFetching") && e3.__abortController instanceof AbortController;
      }
      fetch(t4, e3 = {}) {
        let r3 = m_.hasSubscribers, { status: n2 = f_() ? {} : void 0 } = e3;
        e3.status = n2, n2 && e3.context && (n2.context = e3.context);
        let s2 = this.#lt(t4, e3);
        return n2 && r3 && (n2.trace = true, m_.tracePromise(() => s2, n2).catch(() => {
        })), s2;
      }
      async #lt(t4, e3 = {}) {
        let { allowStale: r3 = this.allowStale, updateAgeOnGet: n2 = this.updateAgeOnGet, noDeleteOnStaleGet: s2 = this.noDeleteOnStaleGet, ttl: i3 = this.ttl, noDisposeOnSet: o3 = this.noDisposeOnSet, size: a2 = 0, sizeCalculation: u2 = this.sizeCalculation, noUpdateTTL: c2 = this.noUpdateTTL, noDeleteOnFetchRejection: l2 = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: m2 = this.allowStaleOnFetchRejection, ignoreFetchAbort: d2 = this.ignoreFetchAbort, allowStaleOnFetchAbort: f2 = this.allowStaleOnFetchAbort, context: p2, forceRefresh: h2 = false, status: g2, signal: A2 } = e3;
        if (g2 && (g2.op = "fetch", g2.key = t4, h2 && (g2.forceRefresh = true)), !this.#O) return g2 && (g2.fetch = "get"), this.#ot(t4, { allowStale: r3, updateAgeOnGet: n2, noDeleteOnStaleGet: s2, status: g2 });
        let _2 = { allowStale: r3, updateAgeOnGet: n2, noDeleteOnStaleGet: s2, ttl: i3, noDisposeOnSet: o3, size: a2, sizeCalculation: u2, noUpdateTTL: c2, noDeleteOnFetchRejection: l2, allowStaleOnFetchRejection: m2, allowStaleOnFetchAbort: f2, ignoreFetchAbort: d2, status: g2, signal: A2 }, y2 = this.#C.get(t4);
        if (void 0 === y2) {
          g2 && (g2.fetch = "miss");
          let e4 = this.#G(t4, y2, _2, p2);
          return e4.__returned = e4;
        }
        {
          let e4 = this.#k[y2];
          if (this.#$(e4)) {
            let t5 = r3 && void 0 !== e4.__staleWhileFetching;
            return g2 && (g2.fetch = "inflight", t5 && (g2.returnedStale = true)), t5 ? e4.__staleWhileFetching : e4.__returned = e4;
          }
          let s3 = this.#z(y2);
          if (!h2 && !s3) return g2 && (g2.fetch = "hit"), this.#H(y2), n2 && this.#X(y2), g2 && this.#tt(g2, y2), e4;
          let i4 = this.#G(t4, y2, _2, p2), o4 = void 0 !== i4.__staleWhileFetching && r3;
          return g2 && (g2.fetch = s3 ? "stale" : "refresh", o4 && s3 && (g2.returnedStale = true)), o4 ? i4.__staleWhileFetching : i4.__returned = i4;
        }
      }
      forceFetch(t4, e3 = {}) {
        let r3 = m_.hasSubscribers, { status: n2 = f_() ? {} : void 0 } = e3;
        e3.status = n2, n2 && e3.context && (n2.context = e3.context);
        let s2 = this.#mt(t4, e3);
        return n2 && r3 && (n2.trace = true, m_.tracePromise(() => s2, n2).catch(() => {
        })), s2;
      }
      async #mt(t4, e3 = {}) {
        let r3 = await this.#lt(t4, e3);
        if (void 0 === r3) throw new Error("fetch() returned undefined");
        return r3;
      }
      memo(t4, e3 = {}) {
        let { status: r3 = l_.hasSubscribers ? {} : void 0 } = e3;
        e3.status = r3, r3 && (r3.op = "memo", r3.key = t4, e3.context && (r3.context = e3.context));
        let n2 = this.#dt(t4, e3);
        return r3 && (r3.value = n2), l_.hasSubscribers && l_.publish(r3), n2;
      }
      #dt(t4, e3 = {}) {
        let r3 = this.#J;
        if (!r3) throw new Error("no memoMethod provided to constructor");
        let { context: n2, status: s2, forceRefresh: i3, ...o3 } = e3;
        s2 && i3 && (s2.forceRefresh = true);
        let a2 = this.#ot(t4, o3), u2 = i3 || void 0 === a2;
        if (s2 && (s2.memo = u2 ? "miss" : "hit", u2 || (s2.value = a2)), !u2) return a2;
        let c2 = r3(t4, a2, { options: o3, context: n2 });
        return s2 && (s2.value = c2), this.#at(t4, c2, o3), c2;
      }
      get(t4, e3 = {}) {
        let { status: r3 = l_.hasSubscribers ? {} : void 0 } = e3;
        e3.status = r3, r3 && (r3.op = "get", r3.key = t4);
        let n2 = this.#ot(t4, e3);
        return r3 && (void 0 !== n2 && (r3.value = n2), l_.hasSubscribers && l_.publish(r3)), n2;
      }
      #ot(t4, e3 = {}) {
        let { allowStale: r3 = this.allowStale, updateAgeOnGet: n2 = this.updateAgeOnGet, noDeleteOnStaleGet: s2 = this.noDeleteOnStaleGet, status: i3 } = e3, o3 = this.#C.get(t4);
        if (void 0 === o3) return void (i3 && (i3.get = "miss"));
        let a2 = this.#k[o3], u2 = this.#$(a2);
        return i3 && this.#tt(i3, o3), this.#z(o3) ? u2 ? (i3 && (i3.get = "stale-fetching"), r3 && void 0 !== a2.__staleWhileFetching ? (i3 && (i3.returnedStale = true), a2.__staleWhileFetching) : void 0) : (s2 || this.#Z(t4, "expire"), i3 && (i3.get = "stale"), r3 ? (i3 && (i3.returnedStale = true), a2) : void 0) : (i3 && (i3.get = u2 ? "fetching" : "hit"), this.#H(o3), n2 && this.#X(o3), u2 ? a2.__staleWhileFetching : a2);
      }
      #ft(t4, e3) {
        this.#q[e3] = t4, this.#v[t4] = e3;
      }
      #H(t4) {
        t4 !== this.#P && (t4 === this.#R ? this.#R = this.#v[t4] : this.#ft(this.#q[t4], this.#v[t4]), this.#ft(this.#P, t4), this.#P = t4);
      }
      delete(t4) {
        return this.#Z(t4, "delete");
      }
      #Z(t4, e3) {
        l_.hasSubscribers && l_.publish({ op: "delete", delete: e3, key: t4 });
        let r3 = false;
        if (0 !== this.#E) {
          let n2 = this.#C.get(t4);
          if (void 0 !== n2) if (this.#Q?.[n2] && (clearTimeout(this.#Q?.[n2]), this.#Q[n2] = void 0), r3 = true, 1 === this.#E) this.#pt(e3);
          else {
            this.#et(n2);
            let r4 = this.#k[n2];
            if (this.#$(r4) ? r4.__abortController.abort(new Error("deleted")) : (this.#M || this.#F) && (this.#M && this.#_?.(r4, t4, e3), this.#F && this.#x?.push([r4, t4, e3])), this.#C.delete(t4), this.#b[n2] = void 0, this.#k[n2] = void 0, n2 === this.#P) this.#P = this.#q[n2];
            else if (n2 === this.#R) this.#R = this.#v[n2];
            else {
              let t5 = this.#q[n2];
              this.#v[t5] = this.#v[n2];
              let e4 = this.#v[n2];
              this.#q[e4] = this.#q[n2];
            }
            this.#E--, this.#T.push(n2);
          }
        }
        if (this.#F && this.#x?.length) {
          let t5, e4 = this.#x;
          for (; t5 = e4?.shift(); ) this.#w?.(...t5);
        }
        return r3;
      }
      clear() {
        return this.#pt("delete");
      }
      #pt(t4) {
        for (let e3 of this.#V({ allowStale: true })) {
          let r3 = this.#k[e3];
          if (this.#$(r3)) r3.__abortController.abort(new Error("deleted"));
          else {
            let n2 = this.#b[e3];
            this.#M && this.#_?.(r3, n2, t4), this.#F && this.#x?.push([r3, n2, t4]);
          }
        }
        if (this.#C.clear(), this.#k.fill(void 0), this.#b.fill(void 0), this.#U && this.#D) {
          this.#U.fill(0), this.#D.fill(0);
          for (let t5 of this.#Q ?? []) void 0 !== t5 && clearTimeout(t5);
          this.#Q?.fill(void 0);
        }
        if (this.#N && this.#N.fill(0), this.#R = 0, this.#P = 0, this.#T.length = 0, this.#I = 0, this.#E = 0, this.#F && this.#x) {
          let t5, e3 = this.#x;
          for (; t5 = e3?.shift(); ) this.#w?.(...t5);
        }
      }
    };
    class S_ {
      constructor() {
        this.updates = [], this.latestModelVersions = new w_({ max: 100 }), this.maxRecentUpdatesStored = 100;
      }
      updateConfig(t3) {
        if (void 0 === t3) return;
        this.maxRecentUpdatesStored = t3.maxRecentUpdatesStored ?? 100;
        const e3 = t3.maxModelVersionCacheSize ?? 100;
        if (this.latestModelVersions.max !== e3) {
          const t4 = this.latestModelVersions;
          this.latestModelVersions = new w_({ max: e3 }), this.latestModelVersions.load(t4.dump());
        }
      }
      push(t3) {
        this.updates.push(t3), this.updates.length > this.maxRecentUpdatesStored && this.updates.shift();
        const e3 = this.getLatestModelVersion(t3.relativeWorkspacePath) ?? -1;
        t3.modelVersion > e3 && this.latestModelVersions.set(t3.relativeWorkspacePath, t3.modelVersion);
      }
      getRecentUpdates(t3, e3) {
        const r3 = t3 ?? this.maxRecentUpdatesStored, n2 = [];
        for (let t4 = this.updates.length - 1; t4 >= 0 && n2.length < r3; t4--) {
          const r4 = this.updates[t4];
          e3 && r4.relativeWorkspacePath !== e3 || n2.push(r4);
        }
        return n2.reverse();
      }
      clearUpdatesUpToVersion(t3, e3) {
        this.updates = this.updates.filter((r3) => r3.relativeWorkspacePath !== t3 || r3.modelVersion > e3);
      }
      getLatestModelVersion(t3) {
        return this.latestModelVersions.get(t3);
      }
    }
    class J_ {
      constructor(t3) {
        this.syncer = t3, this._onDidChangeFileDecorations = new o2.EventEmitter(), this.onDidChangeFileDecorations = this._onDidChangeFileDecorations.event, this.disposables = [], this.pending = [], this.disposables.push(o2.workspace.onDidOpenTextDocument((t4) => {
          this._onDidChangeFileDecorations.fire([t4.uri]);
        }), o2.workspace.onDidSaveTextDocument((t4) => {
          this._onDidChangeFileDecorations.fire([t4.uri]);
        }), o2.cursor.onDidChangeCursorIgnoredFiles(() => {
          this._onDidChangeFileDecorations.fire(void 0);
        }));
      }
      provideFileDecoration(t3) {
        return new Promise((e3, r3) => {
          this.pending.push({ uri: t3, resolve: e3, reject: r3 }), this.flushTimer ??= setTimeout(() => this.flush(), 0);
        });
      }
      async flush() {
        this.flushTimer = void 0;
        const t3 = this.pending;
        let e3;
        this.pending = [];
        try {
          e3 = await o2.cursor.shouldIgnoreUris(t3.map((t4) => t4.uri), { skipRealpath: true });
        } catch (e4) {
          for (const r3 of t3) r3.reject(e4);
          return;
        }
        t3.forEach((t4, r3) => {
          try {
            t4.resolve(this.toDecoration(e3[r3]));
          } catch (e4) {
            t4.reject(e4);
          }
        });
      }
      toDecoration(t3) {
        if (t3) switch (t3.type) {
          case "cursorIgnore":
            return { badge: "⊘", tooltip: `AI features disabled (File in ${"globalIgnore" === t3.source ? "globalignore" : ".cursorignore"})` };
          case "adminBlock":
            return { badge: "⊘", tooltip: "AI features disabled (Blocked by team admin)" };
          case "outOfWorkspace":
            return;
          default:
            throw new Error(`Unknown reason: ${t3.type}`);
        }
      }
      dispose() {
        void 0 !== this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = void 0);
        const t3 = this.pending;
        this.pending = [];
        for (const e3 of t3) e3.resolve(void 0);
        this._onDidChangeFileDecorations.dispose(), this.disposables.forEach((t4) => t4.dispose());
      }
    }
    const B_ = 5e5, E_ = 3e5;
    function I_(t3) {
      const e3 = o2.workspace.asRelativePath(t3.uri);
      return "vscode-notebook-cell" === t3.uri.scheme ? e3 + "#" + t3.uri.fragment : e3;
    }
    class C_ {
      constructor(t3, e3) {
        this.context = t3, this.aiConnectTransport = e3, this.observationDisposables = [], this.maxFileSizeToSyncBytes = B_, this.successiveSyncsRequiredForReliance = 5, this.ONE_HUNDRED_MS = 100, this.config = new n_(this.context), this.client = new a_(this.config, this.aiConnectTransport), this.recentUpdatesManager = new S_(), this.syncerAndUploader = new b_(this.client, this.config, this.recentUpdatesManager), this.decorationProvider = new J_(this), this.initialize(), this.observationDisposables.push(o2.window.registerFileDecorationProvider(this.decorationProvider));
      }
      async initialize() {
        try {
          await this.client.initialize(), await new Promise((t3) => setTimeout(t3, 3 * this.ONE_HUNDRED_MS)), this.observationDisposables.push(o2.cursor.onDidChangeFileSyncClientEnabled(this.handleFileSyncEnabledChange.bind(this))), this.config.addCredChangeCallback(() => this.syncVisibleTabs()), this.registerEventListeners(), this.syncVisibleTabs(), this.registerFileSyncActions();
        } catch (t3) {
          c.error("Failed to initialize FileSyncer", t3), this.config.isDevelopment() && this.config.isFileSyncEnabled() && o2.window.showErrorMessage("Failed to initialize file sync. Please try reloading the window." + (t3 instanceof Error ? ` Error: ${t3.message}` : ""));
        }
      }
      registerFileSyncActions() {
        f(ea.GetFileSyncUpdates, async (t3) => {
          if (!this.config.isFileSyncEnabled()) return [];
          return (await this.getRecentFilesyncUpdates(t3)).map((t4) => t4.toJson());
        }), f(ea.ShouldRelyOnFileSyncForFile, async (t3) => this.shouldRelyOnFileSyncForFile(t3.relativeWorkspacePath, t3.modelVersion)), f(ea.GetFileSyncEncryptionHeader, async () => this.getFileSyncEncryptionHeader()), f(ea.ResetSequentialSuccessfulSync, async (t3) => {
          this.resetSequentialSuccessfulSync(t3.relativeWorkspacePath);
        }), f(ea.TriggerFileSync, async (t3) => {
          await this.triggerFileSync(t3.relativePath, t3.content, t3.version);
        });
      }
      async scheduleFSConfigUpdate() {
        await this.client.fsConfigUpdate(), this.updateConfig(this.config.fsConfig), void 0 !== this.fsConfigUpdateInterval && clearInterval(this.fsConfigUpdateInterval), this.fsConfigUpdateInterval = setInterval(async () => {
          await this.client.fsConfigUpdate(), this.updateConfig(this.config.fsConfig);
        }, 3e5);
      }
      updateConfig(t3) {
        this.syncerAndUploader.updateConfig(t3), this.recentUpdatesManager.updateConfig(t3), this.client.updateConfig(t3), this.maxFileSizeToSyncBytes = t3?.maxFileSizeToSyncBytes ?? B_, this.successiveSyncsRequiredForReliance = t3?.successiveSyncsRequiredForReliance ?? 5;
      }
      async getRecentFilesyncUpdates({ maxUpdates: t3, relativeWorkspacePath: e3, requestedModelVersion: r3 }) {
        if (void 0 !== e3 && void 0 !== r3) {
          const t4 = 8, n2 = 4;
          for (let s2 = 0; s2 < t4; s2++) {
            const t5 = this.recentUpdatesManager.getLatestModelVersion(e3);
            if (void 0 !== t5 && t5 >= r3) break;
            await new Promise((t6) => setTimeout(t6, n2));
          }
        }
        return this.recentUpdatesManager.getRecentUpdates(t3, e3);
      }
      getFileSyncEncryptionHeader() {
        return this.client.getFileSyncEncryptionHeader();
      }
      registerEventListeners() {
        c.info("[registerEventListeners] Registering event listeners"), this.observationDisposables.push(o2.workspace.onDidChangeTextDocument(this.handleDocumentChange.bind(this)), o2.window.onDidChangeVisibleTextEditors(this.handleVisibleEditorsChange.bind(this)));
      }
      handleDocumentChange(t3) {
        if (!this.fastAllowSyncDocument(t3.document)) return;
        if (!this.config.isFileSyncEnabled()) return;
        const e3 = (function(t4) {
          return { relativeWorkspacePath: I_(t4.document), modelVersion: t4.document.version, contentChanges: t4.contentChanges, contentLength: t4.document.getTextLength() };
        })(t3);
        this.pushToRecentUpdatesManager(e3), this.asyncShouldSyncDocument(t3.document).then(async (r3) => {
          if (!r3) return;
          const n2 = await this.getRecentFilesyncUpdates({ relativeWorkspacePath: e3.relativeWorkspacePath });
          this.syncerAndUploader.syncDocumentChanges(t3.document, e3, n2);
        }).catch((t4) => {
          c.error("Failed to handle document change", t4);
        });
      }
      pushToRecentUpdatesManager(t3) {
        const e3 = t3.modelVersion, r3 = t3.contentChanges.map((t4) => new rs({ startPosition: t4.rangeOffset, endPosition: t4.rangeOffset + t4.rangeLength, changeLength: t4.rangeLength, replacedString: t4.text }));
        this.recentUpdatesManager.push(new es({ modelVersion: e3, relativeWorkspacePath: t3.relativeWorkspacePath, updates: r3, expectedFileLength: t3.contentLength }));
      }
      handleVisibleEditorsChange(t3) {
        if (!this.config.isFileSyncEnabled()) return;
        const e3 = performance.now();
        Promise.all(t3.map(async (t4) => {
          this.fastAllowSyncDocument(t4.document) && await this.asyncShouldSyncDocument(t4.document) && await this.syncerAndUploader.syncFullDocument(t4.document);
        })).then(() => {
          const t4 = performance.now();
          c.info(`Handled visible editors change in ${t4 - e3}ms`);
        }).catch((t4) => {
          c.error("Failed to handle visible editors change", t4);
        });
      }
      async handleFileSyncEnabledChange(t3) {
        this.config.refresh(), await this.client.fsConfigUpdate(), c.info(`File sync enabled status: ${this.config.isFileSyncEnabled()}`), this.config.isFileSyncEnabled() && await this.syncVisibleTabs();
      }
      async syncVisibleTabs() {
        if (!this.config.isFileSyncEnabled()) return;
        c.info("Starting sync of visible tabs");
        const t3 = performance.now(), e3 = o2.window.visibleTextEditors;
        Promise.all(e3.map(async (t4) => {
          this.fastAllowSyncDocument(t4.document) && await this.asyncShouldSyncDocument(t4.document) && await this.syncerAndUploader.syncFullDocument(t4.document);
        })).then(() => {
          const e4 = performance.now();
          c.info(`Synced all visible tabs in ${e4 - t3}ms`);
        }).catch((t4) => {
          c.error("Failed to sync all visible tabs", t4);
        });
      }
      fastAllowSyncDocument(t3) {
        return ("file" === t3.uri.scheme || "untitled" === t3.uri.scheme || "vscode-remote" === t3.uri.scheme || "vscode-notebook-cell" === t3.uri.scheme) && (!(this.syncerAndUploader.getLatestDocumentVersionSynced(I_(t3)) === t3.version && !this.config.isDevelopment()) && (!(t3.getTextLength() > this.maxFileSizeToSyncBytes || !ia(o2.cursor.cppEnabled(), { languageId: t3.languageId, fsPath: t3.uri.fsPath }, o2.workspace.getConfiguration().get("cursor.cpp.disabledLanguages") ?? [])) || (this.syncerAndUploader.resetSequentialSuccessfulSync(I_(t3)), false)));
      }
      async asyncShouldSyncDocument(t3) {
        return !await o2.cursor.shouldBlockUriFromReading(t3.uri) || (this.syncerAndUploader.resetSequentialSuccessfulSync(I_(t3)), false);
      }
      dispose() {
        void 0 !== this.fsConfigUpdateInterval && (clearInterval(this.fsConfigUpdateInterval), this.fsConfigUpdateInterval = void 0), this.observationDisposables.forEach((t3) => t3.dispose()), this.observationDisposables.length = 0, this.config.dispose();
      }
      shouldRelyOnFileSyncForFile(t3, e3) {
        if (!this.config.isFileSyncEnabled() || 1 === e3) return false;
        const r3 = this.syncerAndUploader.getLatestDocumentVersionSynced(t3);
        if (void 0 === r3 || void 0 !== e3 && r3 < e3 - 10) return false;
        const n2 = this.syncerAndUploader.getSequentialSuccessfulSyncCount(t3);
        return void 0 !== n2 && n2 >= this.successiveSyncsRequiredForReliance;
      }
      resetSequentialSuccessfulSync(t3) {
        this.syncerAndUploader.resetSequentialSuccessfulSync(t3);
      }
      async triggerFileSync(t3, e3, r3) {
        return this.syncerAndUploader.triggerFileSync(t3, e3, r3);
      }
    }
    class b_ {
      constructor(t3, e3, r3) {
        this.client = t3, this.config = e3, this.recentUpdatesManager = r3, this.retryConfig = { numOfAttempts: 3, startingDelay: 20, timeMultiple: 2 }, this.extraSuccessfulSyncsNeededAfterError = 0, this.syncDebounceMs = 250, this.syncUpdateThreshold = 20, this.pendingSyncs = /* @__PURE__ */ new Map(), this.documentSyncDetails = this.newFileSyncStatusCache(5, E_), this.config.addCredChangeCallback(() => this.documentSyncDetails.clear());
      }
      newFileSyncStatusCache(t3, e3) {
        return new w_({ max: t3, ttl: e3, updateAgeOnGet: false, updateAgeOnHas: false, allowStale: false, noUpdateTTL: false });
      }
      updateConfig(t3) {
        this.recentUpdatesManager.updateConfig(t3), this.retryConfig.numOfAttempts = t3?.syncRetryMaxAttempts ?? this.retryConfig.numOfAttempts, this.retryConfig.startingDelay = t3?.syncRetryInitialDelayMs ?? this.retryConfig.startingDelay, this.retryConfig.timeMultiple = t3?.syncRetryTimeMultiplier ?? this.retryConfig.timeMultiple, this.extraSuccessfulSyncsNeededAfterError = t3?.syncRetryMaxAttempts ?? this.extraSuccessfulSyncsNeededAfterError, this.syncDebounceMs = t3?.syncDebounceMs ?? this.syncDebounceMs, this.syncUpdateThreshold = t3?.syncUpdateThreshold ?? this.syncUpdateThreshold;
        const e3 = t3?.fileSyncStatusMaxCacheSize ?? 5, r3 = t3?.fileSyncStatusTtlMs ?? E_;
        if (this.documentSyncDetails.max !== e3 || this.documentSyncDetails.ttl !== r3) {
          const t4 = this.documentSyncDetails;
          this.documentSyncDetails = this.newFileSyncStatusCache(e3, r3), this.documentSyncDetails.load(t4.dump());
        }
      }
      maybeGetFileHash(t3) {
        const e3 = this.config.fsConfig?.checkFilesyncHashPercent || 0;
        if (this.config.isDevelopment() || Math.random() < e3) return this.getFileSHA256(t3);
      }
      async syncDocumentChanges(t3, e3, r3) {
        const n2 = this.getLatestDocumentVersionSynced(e3.relativeWorkspacePath), s2 = r3.filter((t4) => t4.relativeWorkspacePath === e3.relativeWorkspacePath).map((t4) => t4.modelVersion).sort((t4, e4) => t4 - e4).pop();
        if (void 0 === s2) return;
        if (s2 <= 1 || void 0 === n2 || n2 < s2 - 100 || n2 > s2) return this.resetSequentialSuccessfulSync(e3.relativeWorkspacePath, true), await this.syncFullDocument(t3);
        const i3 = this.pendingSyncs.get(e3.relativeWorkspacePath);
        if (i3 && clearTimeout(i3), r3.length >= this.syncUpdateThreshold && r3.length % this.syncUpdateThreshold === 0) return this.pendingSyncs.delete(e3.relativeWorkspacePath), await this.performSync(t3, r3, e3.relativeWorkspacePath, s2);
        const o3 = setTimeout(() => {
          this.pendingSyncs.delete(e3.relativeWorkspacePath), this.performSync(t3, r3, e3.relativeWorkspacePath, s2);
        }, this.syncDebounceMs);
        this.pendingSyncs.set(e3.relativeWorkspacePath, o3);
      }
      shouldRetry(t3) {
        if (t3 instanceof s_) return false;
        if (t3 instanceof pa) {
          const e3 = t3.findDetails(Dn)[0];
          if (false === e3?.details?.isRetryable) return false;
        }
        return true;
      }
      async performSync(t3, e3, r3, n2) {
        const s2 = e3.filter((t4) => t4.relativeWorkspacePath === r3).map((t4) => t4.modelVersion).sort((t4, e4) => t4 - e4).pop();
        if (void 0 === s2) return;
        const i3 = n2 === t3.version ? this.maybeGetFileHash(t3.getText()) : void 0, o3 = this.shouldRetry;
        try {
          await (0, u_.backOff)(async () => {
            await this.client.syncFile({ relativeWorkspacePath: r3, modelVersion: s2, filesyncUpdates: e3, sha256Hash: i3 }), this.recentUpdatesManager.clearUpdatesUpToVersion(r3, s2);
          }, { ...this.retryConfig, retry: (t4, e4) => !!o3(t4) && (c.warn(`Failed to sync changes for ${r3}, version=${s2}, retrying (attempt ${e4})`, t4), true) }), this.incrementSequentialSuccessfulSync(r3, s2);
        } catch (e4) {
          c.error(`Failed to sync changes for ${r3}, version=${s2}, attempting full file sync`, e4), this.resetSequentialSuccessfulSync(r3, true), await this.syncFullDocument(t3);
        }
      }
      async syncFullDocument(t3) {
        const e3 = I_(t3), r3 = t3.version, n2 = t3.getText(), s2 = this.maybeGetFileHash(n2), i3 = this.shouldRetry;
        try {
          await (0, u_.backOff)(async () => {
            await this.client.uploadFile({ relativeWorkspacePath: e3, modelVersion: r3, contents: n2, sha256Hash: s2 }), this.recentUpdatesManager.clearUpdatesUpToVersion(e3, r3);
          }, { ...this.retryConfig, retry: (t4, n3) => !!i3(t4) && (c.warn(`Failed to sync full file ${e3}, version=${r3}, retrying (attempt ${n3})`, t4), true) }), this.incrementSequentialSuccessfulSync(e3, r3);
        } catch (t4) {
          throw c.error(`Failed to sync full file after all retries for ${e3}, version=${r3}`, t4), this.resetSequentialSuccessfulSync(e3, true), t4;
        }
      }
      getFileSHA256(t3) {
        return (0, r_.createHash)("sha256").update(t3).digest("hex");
      }
      incrementSequentialSuccessfulSync(t3, e3) {
        const r3 = this.documentSyncDetails.get(t3) || { modelVersion: e3, sequentialSuccessfulSyncCount: 0 };
        r3.sequentialSuccessfulSyncCount += 1, r3.modelVersion = e3, this.documentSyncDetails.set(t3, r3);
      }
      getLatestDocumentVersionSynced(t3) {
        return this.documentSyncDetails.get(t3)?.modelVersion;
      }
      resetSequentialSuccessfulSync(t3, e3 = false) {
        const r3 = this.documentSyncDetails.get(t3);
        void 0 !== r3 && (e3 ? r3.sequentialSuccessfulSyncCount = -this.extraSuccessfulSyncsNeededAfterError : this.documentSyncDetails.delete(t3));
      }
      getSequentialSuccessfulSyncCount(t3) {
        return this.documentSyncDetails.get(t3)?.sequentialSuccessfulSyncCount;
      }
      async triggerFileSync(t3, e3, r3) {
        if (!this.config.isFileSyncEnabled()) return;
        const n2 = this.maybeGetFileHash(e3), s2 = this.shouldRetry;
        try {
          await (0, u_.backOff)(async () => {
            await this.client.uploadFile({ relativeWorkspacePath: t3, modelVersion: r3, contents: e3, sha256Hash: n2 });
          }, { ...this.retryConfig, retry: (e4, n3) => !!s2(e4) && (c.warn(`Failed to trigger file sync for ${t3}, version=${r3}, retrying (attempt ${n3})`, e4), true) });
        } catch (e4) {
          throw c.error(`Failed to trigger file sync for ${t3}, version=${r3}`, e4), e4;
        }
      }
    }
    const k_ = require("path"), v_ = require("fs/promises");
    function q_(t3, e3) {
      let r3;
      return (...n2) => {
        clearTimeout(r3), r3 = setTimeout(() => t3(...n2), e3);
      };
    }
    const R_ = require("child_process");
    class P_ {
      constructor(t3) {
        this.extensionPath = t3, this.worker = null, this.requestId = 0, this.pendingRequests = /* @__PURE__ */ new Map(), this.readyResolve = null, this.readyReject = null, this.disposed = false, this.isRespawning = false, this.consecutiveDeaths = 0, this.respawnTimer = null, this.requestTimeout = 3e4, this.ready = this.createReadyPromise(), this.spawnWorker();
      }
      createReadyPromise() {
        const t3 = new Promise((t4, e3) => {
          this.readyResolve = t4, this.readyReject = e3;
        });
        return t3.catch(() => {
        }), t3;
      }
      spawnWorker() {
        if (this.disposed) return;
        const t3 = -1 !== (o2.extensions.getExtension("anysphere.cursor-always-local")?.packageJSON?.main || "").indexOf("/dist/") ? "dist" : "out", e3 = k_.join(this.extensionPath, t3, "gitWorker.js");
        try {
          this.worker = (0, R_.fork)(e3, [], { stdio: ["pipe", "pipe", "pipe", "ipc"], env: { ...process.env, NODE_OPTIONS: "" } }), this.worker.on("message", (t4) => {
            if ("type" in t4 && "ready" === t4.type) return a.StructuredLogProviderImpl.info("git", "Git worker ready", { subkey: "git_worker_ready" }), this.consecutiveDeaths = 0, void this.readyResolve?.();
            const e4 = t4, r3 = this.pendingRequests.get(e4.id);
            r3 && (clearTimeout(r3.timer), this.pendingRequests.delete(e4.id), e4.success ? r3.resolve(e4.result) : r3.reject(new Error(e4.error || "Unknown worker error")));
          }), this.worker.on("error", (t4) => {
            a.StructuredLogProviderImpl.error("git", "Git worker error", t4, { subkey: "git_worker_error", errorMessage: t4.message }), this.handleWorkerDeath();
          }), this.worker.on("exit", (t4, e4) => {
            this.disposed || (a.StructuredLogProviderImpl.warn("git", "Git worker exited unexpectedly", { subkey: "git_worker_exit", code: t4, signal: e4 }), this.handleWorkerDeath(t4, e4));
          }), this.worker.stderr?.on("data", (t4) => {
            a.StructuredLogProviderImpl.debug("git", "Git worker stderr", { subkey: "git_worker_stderr", output: t4.toString() });
          });
        } catch (t4) {
          a.StructuredLogProviderImpl.error("git", "Failed to spawn git worker", t4 instanceof Error ? t4 : void 0, { subkey: "git_worker_spawn_failed", errorMessage: t4 instanceof Error ? t4.message : String(t4) }), this.readyReject?.(t4 instanceof Error ? t4 : new Error(String(t4)));
        }
      }
      handleWorkerDeath(t3, e3) {
        if (this.isRespawning) return;
        this.isRespawning = true;
        for (const [t4, e4] of this.pendingRequests) clearTimeout(e4.timer), e4.reject(new Error("Worker died")), this.pendingRequests.delete(t4);
        if (this.readyReject?.(new Error("Worker died")), this.disposed) return;
        if (this.consecutiveDeaths++, this.consecutiveDeaths >= 5) return a.StructuredLogProviderImpl.warn("git", "Git worker respawn disabled after repeated failures", { subkey: "git_worker_respawn_disabled", attempts: this.consecutiveDeaths, code: t3, signal: e3 }), this.worker = null, this.readyResolve = null, void (this.readyReject = null);
        const r3 = Math.min(1e3 * 2 ** (this.consecutiveDeaths - 1), 3e4);
        this.ready = this.createReadyPromise(), this.respawnTimer = setTimeout(() => {
          this.respawnTimer = null, this.isRespawning = false, this.spawnWorker();
        }, r3);
      }
      async sendRequest(t3, e3, r3) {
        if (!this.worker || this.disposed) throw new Error("Worker not available");
        await this.ready;
        const n2 = ++this.requestId, s2 = { id: n2, type: t3, workspacePath: e3, args: r3 };
        return new Promise((e4, r4) => {
          const i3 = setTimeout(() => {
            this.pendingRequests.delete(n2), r4(new Error(`Request ${t3} timed out after ${this.requestTimeout}ms`));
          }, this.requestTimeout);
          this.pendingRequests.set(n2, { resolve: e4, reject: r4, timer: i3 }), this.worker?.send(s2);
        });
      }
      async getRepoState(t3) {
        return this.sendRequest("getRepoState", t3);
      }
      async getBranches(t3) {
        return this.sendRequest("getBranches", t3);
      }
      async getTags(t3) {
        return this.sendRequest("getTags", t3);
      }
      async getRemoteRefs(t3) {
        return this.sendRequest("getRemoteRefs", t3);
      }
      async getCurrentCommitHash(t3) {
        return this.sendRequest("getCurrentCommitHash", t3);
      }
      async getCurrentBranch(t3) {
        return this.sendRequest("getCurrentBranch", t3);
      }
      async getDefaultBranch(t3) {
        return this.sendRequest("getDefaultBranch", t3);
      }
      async getFetchHead(t3) {
        return this.sendRequest("getFetchHead", t3);
      }
      async getStashHash(t3) {
        return this.sendRequest("getStashHash", t3);
      }
      async isRebasing(t3) {
        return this.sendRequest("isRebasing", t3);
      }
      async fileExists(t3, e3) {
        return this.sendRequest("fileExists", t3, { filePath: e3 });
      }
      async getRemoteUrl(t3, e3) {
        return this.sendRequest("getRemoteUrl", t3, { remoteName: e3 });
      }
      dispose() {
        this.disposed = true, this.respawnTimer && (clearTimeout(this.respawnTimer), this.respawnTimer = null);
        for (const [t3, e3] of this.pendingRequests) clearTimeout(e3.timer), e3.reject(new Error("Client disposed")), this.pendingRequests.delete(t3);
        this.worker && (this.worker.kill(), this.worker = null);
      }
    }
    class T_ {
      constructor(t3, e3) {
        this.disposables = [], this.repoStates = /* @__PURE__ */ new Map(), this.watchers = /* @__PURE__ */ new Map(), this.workspaceDisposables = /* @__PURE__ */ new Map(), this.workerClient = null, this.logger = t3, this.extensionPath = e3, this.init().catch((t4) => {
          a.StructuredLogProviderImpl.error("git", "Failed to initialize GitListener", t4 instanceof Error ? t4 : void 0, { subkey: "git_listener_init_failed", workspaceFolders: o2.workspace.workspaceFolders?.length ?? 0, errorMessage: t4 instanceof Error ? t4.message : String(t4) });
        });
      }
      dispose() {
        for (const t3 of this.disposables) try {
          t3.dispose();
        } catch (t4) {
        }
        this.disposables.splice(0, this.disposables.length), this.watchers.clear(), this.workspaceDisposables.clear(), this.repoStates.clear(), this.workerClient && (this.workerClient.dispose(), this.workerClient = null);
      }
      async init() {
        try {
          if (await o2.cursor.checkFeatureGate("skip_git_telemetry_computations")) return void a.StructuredLogProviderImpl.info("git", "Git telemetry computations skipped due to feature flag", { subkey: "git_telemetry_skipped" });
        } catch (t3) {
          a.StructuredLogProviderImpl.warn("git", "Failed to check git telemetry feature flag, proceeding with normal initialization", { subkey: "git_telemetry_flag_check_failed", errorMessage: t3 instanceof Error ? t3.message : String(t3) });
        }
        try {
          this.workerClient = new P_(this.extensionPath), a.StructuredLogProviderImpl.info("git", "Using git worker subprocess for filesystem operations", { subkey: "git_worker_enabled" });
        } catch (t3) {
          a.StructuredLogProviderImpl.warn("git", "Failed to check git worker feature flag, using inline filesystem operations", { subkey: "git_worker_flag_check_failed", errorMessage: t3 instanceof Error ? t3.message : String(t3) });
        }
        if (o2.workspace.workspaceFolders) for (const t3 of o2.workspace.workspaceFolders) await this.watchRepository(t3.uri.fsPath);
        this.disposables.push(o2.workspace.onDidChangeWorkspaceFolders(async (t3) => {
          for (const e3 of t3.added) await this.watchRepository(e3.uri.fsPath);
          for (const e3 of t3.removed) this.unwatchRepository(e3.uri.fsPath);
        }));
      }
      async watchRepository(t3) {
        const e3 = k_.join(t3, ".git");
        try {
          if (!(await v_.stat(e3)).isDirectory()) return;
        } catch {
          return;
        }
        const r3 = await this.initializeRepoState(t3);
        this.repoStates.set(t3, r3);
        const n2 = [];
        this.workspaceDisposables.set(t3, n2);
        const s2 = [{ pattern: "HEAD", handler: () => this.checkHeadChange(t3) }, { pattern: "refs/heads/**", handler: q_(() => this.checkCommitOrBranchChange(t3), 500) }, { pattern: "FETCH_HEAD", handler: () => this.checkFetch(t3) }, { pattern: "refs/remotes/**", handler: q_(() => this.checkRemoteChanges(t3), 500) }, { pattern: "refs/tags/**", handler: q_(() => this.checkTags(t3), 500) }, { pattern: "refs/stash", handler: () => this.checkStash(t3) }, { pattern: "logs/refs/stash", handler: () => this.checkStash(t3) }, { pattern: "MERGE_HEAD", handler: () => this.checkMergeStatus(t3) }, { pattern: "rebase-merge", handler: () => this.checkRebaseStatus(t3) }, { pattern: "rebase-apply", handler: () => this.checkRebaseStatus(t3) }];
        for (const { pattern: r4, handler: i4 } of s2) {
          const s3 = new o2.RelativePattern(e3, r4), u3 = o2.workspace.createFileSystemWatcher(s3), c2 = async () => {
            try {
              await i4();
            } catch (e4) {
              a.StructuredLogProviderImpl.error("git", "Git event handler failed", e4 instanceof Error ? e4 : void 0, { subkey: "git_event_handler_failed", pattern: r4, workspacePath: t3, errorMessage: e4 instanceof Error ? e4.message : String(e4) });
            }
          }, l2 = [u3.onDidChange(c2), u3.onDidCreate(c2), u3.onDidDelete(c2), u3], m2 = `${t3}:${r4}`;
          this.watchers.set(m2, u3), this.disposables.push(...l2), n2.push(...l2);
        }
        const i3 = Array.from(r3.remoteRefs.keys()).map((t4) => t4.split("/")[0]).filter((t4, e4, r4) => r4.indexOf(t4) === e4), u2 = {};
        for (const e4 of i3) u2[e4] = await this.getRemoteUrl(t3, e4);
        r3.cachedRemoteUrl = Object.values(u2).find(Boolean) || null;
      }
      async initializeRepoState(t3) {
        if (this.workerClient) try {
          const e4 = await this.workerClient.getRepoState(t3);
          return { lastCommitHash: e4.commitHash, currentBranch: e4.currentBranch, defaultBranch: e4.defaultBranch, lastFetchHead: e4.fetchHead, lastStashHash: e4.stashHash, branches: new Set(e4.branches), tags: new Set(e4.tags), remoteRefs: new Map(e4.remoteRefs), isRebasing: false, isMerging: false, cachedRemoteUrl: void 0 };
        } catch (t4) {
          a.StructuredLogProviderImpl.debug("git", "Worker getRepoState failed, falling back to inline", { subkey: "git_worker_fallback", errorMessage: t4 instanceof Error ? t4.message : String(t4) });
        }
        const [e3, r3, n2, s2, i3, o3, u2, c2] = await Promise.all([this.getCurrentCommitHash(t3), this.getCurrentBranch(t3), this.getDefaultBranch(t3), this.getBranches(t3), this.getTags(t3), this.getRemoteRefs(t3), this.getFetchHead(t3), this.getStashHash(t3)]);
        return { lastCommitHash: e3, currentBranch: r3, defaultBranch: n2, lastFetchHead: u2, lastStashHash: c2, branches: new Set(s2), tags: new Set(i3), remoteRefs: new Map(o3), isRebasing: false, isMerging: false, cachedRemoteUrl: void 0 };
      }
      async checkHeadChange(t3) {
        const e3 = this.repoStates.get(t3);
        if (!e3) return;
        const [r3, n2] = await Promise.all([this.getCurrentCommitHash(t3), this.getCurrentBranch(t3)]);
        (n2 !== e3.currentBranch || r3 && r3 !== e3.lastCommitHash) && (await this.recordEvent(t3, So.CHECKOUT, { commitHash: r3, previousCommitHash: e3.lastCommitHash }), e3.lastCommitHash = r3, e3.currentBranch = n2);
      }
      async checkCommitOrBranchChange(t3) {
        const e3 = this.repoStates.get(t3);
        if (!e3) return;
        const [r3, n2, s2] = await Promise.all([this.getCurrentCommitHash(t3), this.getCurrentBranch(t3), this.getBranches(t3)]), i3 = new Set(s2);
        n2 === e3.currentBranch && r3 && r3 !== e3.lastCommitHash && (await this.recordEvent(t3, So.COMMIT, { commitHash: r3, previousCommitHash: e3.lastCommitHash }), e3.lastCommitHash = r3, e3.currentBranch = n2), i3.size === e3.branches.size && s2.every((t4) => e3.branches.has(t4)) || (await this.recordEvent(t3, So.BRANCH, { commitHash: r3 }), e3.branches = i3);
      }
      async checkFetch(t3) {
        const e3 = this.repoStates.get(t3);
        if (e3) try {
          const r3 = k_.join(t3, ".git", "FETCH_HEAD"), n2 = (await v_.readFile(r3, "utf-8")).split("\n")[0];
          if (n2 && n2 !== e3.lastFetchHead) {
            const r4 = n2.match(/of\s+(.+)$/);
            let s2 = null;
            s2 = r4 ? r4[1] : await this.getRemoteUrl(t3), await this.recordEvent(t3, So.FETCH, { remoteUrl: s2 }), e3.lastFetchHead = n2, s2 && (e3.cachedRemoteUrl = s2);
          }
        } catch (t4) {
        }
      }
      async checkRemoteChanges(t3) {
        const e3 = this.repoStates.get(t3);
        if (!e3) return;
        const r3 = await this.getRemoteRefs(t3), n2 = new Map(r3);
        let s2 = false;
        for (const [t4, r4] of n2) if (e3.remoteRefs.get(t4) !== r4) {
          s2 = true;
          break;
        }
        if (s2) {
          if (await this.getFetchHead(t3) !== e3.lastFetchHead) {
            const r4 = await this.getRemoteUrl(t3);
            await this.recordEvent(t3, So.PULL, { remoteUrl: r4 }), r4 && (e3.cachedRemoteUrl = r4);
          }
          e3.remoteRefs = n2;
        }
      }
      async checkStash(t3) {
        const e3 = this.repoStates.get(t3);
        if (!e3) return;
        const r3 = await this.getStashHash(t3);
        r3 !== e3.lastStashHash && (await this.recordEvent(t3, So.STASH, { commitHash: await this.getCurrentCommitHash(t3) }), e3.lastStashHash = r3);
      }
      async checkTags(t3) {
        const e3 = this.repoStates.get(t3);
        if (!e3) return;
        const r3 = await this.getTags(t3), n2 = new Set(r3);
        n2.size === e3.tags.size && r3.every((t4) => e3.tags.has(t4)) || (await this.recordEvent(t3, So.TAG), e3.tags = n2);
      }
      async checkMergeStatus(t3) {
        const e3 = this.repoStates.get(t3);
        if (!e3) return;
        const r3 = await this.fileExists(k_.join(t3, ".git", "MERGE_HEAD"));
        if (r3 && !e3.isMerging) e3.isMerging = true;
        else if (!r3 && e3.isMerging) {
          e3.isMerging = false;
          const r4 = await this.getCurrentCommitHash(t3);
          await this.recordEvent(t3, So.MERGE, { commitHash: r4, previousCommitHash: e3.lastCommitHash }), e3.lastCommitHash = r4;
        }
      }
      async checkRebaseStatus(t3) {
        const e3 = this.repoStates.get(t3);
        if (!e3) return;
        const r3 = await this.isRebasing(t3);
        if (r3 && !e3.isRebasing) e3.isRebasing = true;
        else if (!r3 && e3.isRebasing) {
          e3.isRebasing = false;
          const r4 = await this.getCurrentCommitHash(t3);
          await this.recordEvent(t3, So.REBASE, { commitHash: r4, previousCommitHash: e3.lastCommitHash }), e3.lastCommitHash = r4;
        }
      }
      async recordEvent(t3, e3, r3) {
        const n2 = this.repoStates.get(t3), s2 = n2?.currentBranch || await this.getCurrentBranch(t3), i3 = n2?.defaultBranch || await this.getDefaultBranch(t3), o3 = r3?.commitHash ?? n2?.lastCommitHash ?? await this.getCurrentCommitHash(t3);
        let a2;
        if (e3 === So.FETCH || e3 === So.PULL) {
          const e4 = r3?.remoteUrl || await this.getRemoteUrl(t3);
          e4 && (a2 = this.sanitizeRemoteUrl(e4));
        }
        let u2 = a2;
        !u2 && n2?.cachedRemoteUrl && (u2 = n2.cachedRemoteUrl);
        const c2 = { operationType: e3, repositoryPath: t3, operationSuccess: true, branchName: s2 || void 0, isDefaultBranch: s2 ? s2 === i3 : void 0, defaultBranchName: i3 || void 0, commitHash: o3 || void 0, previousCommitHash: r3?.previousCommitHash || void 0, remoteUrl: u2 || void 0 };
        this.logger.recordEvent({ case: "gitEvent", value: c2 });
      }
      unwatchRepository(t3) {
        const e3 = this.workspaceDisposables.get(t3);
        if (e3) {
          for (const r4 of e3) try {
            r4.dispose();
          } catch (e4) {
            a.StructuredLogProviderImpl.warn("git", "Failed to dispose git watcher", { subkey: "git_watcher_dispose_failed", workspacePath: t3, errorMessage: e4 instanceof Error ? e4.message : String(e4) });
          }
          this.workspaceDisposables.delete(t3);
        }
        const r3 = [];
        for (const [e4] of this.watchers.entries()) e4.startsWith(t3 + ":") && r3.push(e4);
        for (const t4 of r3) this.watchers.delete(t4);
        this.repoStates.delete(t3);
      }
      async getCurrentCommitHash(t3) {
        if (this.workerClient) try {
          return await this.workerClient.getCurrentCommitHash(t3);
        } catch {
        }
        try {
          const e3 = k_.join(t3, ".git", "HEAD"), r3 = await v_.readFile(e3, "utf-8");
          if (r3.startsWith("ref: ")) {
            const e4 = r3.slice(5).trim(), n2 = k_.join(t3, ".git", e4);
            return (await v_.readFile(n2, "utf-8")).trim();
          }
          return r3.trim();
        } catch (t4) {
          return null;
        }
      }
      async getCurrentBranch(t3) {
        if (this.workerClient) try {
          return await this.workerClient.getCurrentBranch(t3);
        } catch {
        }
        try {
          const e3 = k_.join(t3, ".git", "HEAD"), r3 = await v_.readFile(e3, "utf-8");
          if (r3.startsWith("ref: ")) {
            return r3.slice(5).trim().replace("refs/heads/", "");
          }
          return null;
        } catch (t4) {
          return null;
        }
      }
      async getDefaultBranch(t3) {
        if (this.workerClient) try {
          return await this.workerClient.getDefaultBranch(t3);
        } catch {
        }
        try {
          const e3 = k_.join(t3, ".git", "refs", "remotes", "origin", "HEAD");
          try {
            const t4 = await v_.readFile(e3, "utf-8");
            if (t4.startsWith("ref: ")) {
              return t4.slice(5).trim().replace("refs/remotes/origin/", "");
            }
          } catch {
          }
          const r3 = k_.join(t3, ".git", "config"), n2 = (await v_.readFile(r3, "utf-8")).match(/\[init\]\s*\n\s*defaultBranch\s*=\s*(.+)/);
          if (n2) return n2[1].trim();
          const s2 = await this.getBranches(t3);
          return s2.includes("main") ? "main" : s2.includes("master") ? "master" : null;
        } catch (t4) {
          return null;
        }
      }
      async getBranches(t3) {
        if (this.workerClient) try {
          return await this.workerClient.getBranches(t3);
        } catch {
        }
        try {
          const e3 = k_.join(t3, ".git", "refs", "heads");
          return (await this.readDirRecursive(e3)).map((t4) => t4.replace(e3 + k_.sep, ""));
        } catch {
          return [];
        }
      }
      async getTags(t3) {
        if (this.workerClient) try {
          return await this.workerClient.getTags(t3);
        } catch {
        }
        try {
          const e3 = k_.join(t3, ".git", "refs", "tags");
          return (await this.readDirRecursive(e3)).map((t4) => t4.replace(e3 + k_.sep, ""));
        } catch {
          return [];
        }
      }
      async getRemoteRefs(t3) {
        if (this.workerClient) try {
          return await this.workerClient.getRemoteRefs(t3);
        } catch {
        }
        try {
          const e3 = k_.join(t3, ".git", "refs", "remotes"), r3 = await this.readDirRecursive(e3), n2 = [];
          for (const t4 of r3) {
            const r4 = await v_.readFile(t4, "utf-8"), s2 = t4.replace(e3 + k_.sep, "");
            n2.push([s2, r4.trim()]);
          }
          return n2;
        } catch {
          return [];
        }
      }
      async getFetchHead(t3) {
        try {
          const e3 = k_.join(t3, ".git", "FETCH_HEAD");
          return (await v_.readFile(e3, "utf-8")).split("\n")[0];
        } catch {
          return null;
        }
      }
      async getStashHash(t3) {
        try {
          const e3 = k_.join(t3, ".git", "refs", "stash");
          return (await v_.readFile(e3, "utf-8")).trim();
        } catch {
          return null;
        }
      }
      async isRebasing(t3) {
        const e3 = k_.join(t3, ".git", "rebase-merge"), r3 = k_.join(t3, ".git", "rebase-apply"), [n2, s2] = await Promise.all([this.fileExists(e3), this.fileExists(r3)]);
        return n2 || s2;
      }
      async fileExists(t3) {
        try {
          return await v_.stat(t3), true;
        } catch {
          return false;
        }
      }
      async readDirRecursive(t3) {
        const e3 = [];
        try {
          const r3 = await v_.readdir(t3, { withFileTypes: true });
          for (const n2 of r3) {
            const r4 = k_.join(t3, n2.name);
            if (n2.isDirectory()) {
              const t4 = await this.readDirRecursive(r4);
              e3.push(...t4);
            } else e3.push(r4);
          }
        } catch {
        }
        return e3;
      }
      async getRemoteUrl(t3, e3 = "origin") {
        try {
          const r3 = k_.join(t3, ".git", "config"), n2 = await v_.readFile(r3, "utf-8"), s2 = `[remote "${e3}"]`, i3 = n2.indexOf(s2);
          if (-1 === i3) return null;
          const o3 = n2.slice(i3).match(/\s*url\s*=\s*(.+)$/m);
          return o3 && o3[1] ? o3[1].trim() : null;
        } catch (t4) {
          return null;
        }
      }
      sanitizeRemoteUrl(t3) {
        let e3 = t3;
        return e3 = e3.replace(/https:\/\/[^@]+@/, "https://"), e3 = e3.replace(/^git@([^:]+):/, "https://$1/").replace(/\.git$/, ""), e3;
      }
    }
    function x_(t3, e3 = false) {
      const r3 = t3.length;
      let n2 = 0, s2 = "", i3 = 0, o3 = 16, a2 = 0, u2 = 0, c2 = 0, l2 = 0, m2 = 0;
      function d2(e4, r4) {
        let s3 = 0, i4 = 0;
        for (; s3 < e4 || !r4; ) {
          let e5 = t3.charCodeAt(n2);
          if (e5 >= 48 && e5 <= 57) i4 = 16 * i4 + e5 - 48;
          else if (e5 >= 65 && e5 <= 70) i4 = 16 * i4 + e5 - 65 + 10;
          else {
            if (!(e5 >= 97 && e5 <= 102)) break;
            i4 = 16 * i4 + e5 - 97 + 10;
          }
          n2++, s3++;
        }
        return s3 < e4 && (i4 = -1), i4;
      }
      function f2() {
        if (s2 = "", m2 = 0, i3 = n2, u2 = a2, l2 = c2, n2 >= r3) return i3 = r3, o3 = 17;
        let e4 = t3.charCodeAt(n2);
        if (N_(e4)) {
          do {
            n2++, s2 += String.fromCharCode(e4), e4 = t3.charCodeAt(n2);
          } while (N_(e4));
          return o3 = 15;
        }
        if (D_(e4)) return n2++, s2 += String.fromCharCode(e4), 13 === e4 && 10 === t3.charCodeAt(n2) && (n2++, s2 += "\n"), a2++, c2 = n2, o3 = 14;
        switch (e4) {
          case 123:
            return n2++, o3 = 1;
          case 125:
            return n2++, o3 = 2;
          case 91:
            return n2++, o3 = 3;
          case 93:
            return n2++, o3 = 4;
          case 58:
            return n2++, o3 = 6;
          case 44:
            return n2++, o3 = 5;
          case 34:
            return n2++, s2 = (function() {
              let e5 = "", s3 = n2;
              for (; ; ) {
                if (n2 >= r3) {
                  e5 += t3.substring(s3, n2), m2 = 2;
                  break;
                }
                const i4 = t3.charCodeAt(n2);
                if (34 === i4) {
                  e5 += t3.substring(s3, n2), n2++;
                  break;
                }
                if (92 !== i4) {
                  if (i4 >= 0 && i4 <= 31) {
                    if (D_(i4)) {
                      e5 += t3.substring(s3, n2), m2 = 2;
                      break;
                    }
                    m2 = 6;
                  }
                  n2++;
                } else {
                  if (e5 += t3.substring(s3, n2), n2++, n2 >= r3) {
                    m2 = 2;
                    break;
                  }
                  switch (t3.charCodeAt(n2++)) {
                    case 34:
                      e5 += '"';
                      break;
                    case 92:
                      e5 += "\\";
                      break;
                    case 47:
                      e5 += "/";
                      break;
                    case 98:
                      e5 += "\b";
                      break;
                    case 102:
                      e5 += "\f";
                      break;
                    case 110:
                      e5 += "\n";
                      break;
                    case 114:
                      e5 += "\r";
                      break;
                    case 116:
                      e5 += "	";
                      break;
                    case 117:
                      const t4 = d2(4, true);
                      t4 >= 0 ? e5 += String.fromCharCode(t4) : m2 = 4;
                      break;
                    default:
                      m2 = 5;
                  }
                  s3 = n2;
                }
              }
              return e5;
            })(), o3 = 10;
          case 47:
            const u3 = n2 - 1;
            if (47 === t3.charCodeAt(n2 + 1)) {
              for (n2 += 2; n2 < r3 && !D_(t3.charCodeAt(n2)); ) n2++;
              return s2 = t3.substring(u3, n2), o3 = 12;
            }
            if (42 === t3.charCodeAt(n2 + 1)) {
              n2 += 2;
              const e5 = r3 - 1;
              let i4 = false;
              for (; n2 < e5; ) {
                const e6 = t3.charCodeAt(n2);
                if (42 === e6 && 47 === t3.charCodeAt(n2 + 1)) {
                  n2 += 2, i4 = true;
                  break;
                }
                n2++, D_(e6) && (13 === e6 && 10 === t3.charCodeAt(n2) && n2++, a2++, c2 = n2);
              }
              return i4 || (n2++, m2 = 1), s2 = t3.substring(u3, n2), o3 = 13;
            }
            return s2 += String.fromCharCode(e4), n2++, o3 = 16;
          case 45:
            if (s2 += String.fromCharCode(e4), n2++, n2 === r3 || !U_(t3.charCodeAt(n2))) return o3 = 16;
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return s2 += (function() {
              let e5 = n2;
              if (48 === t3.charCodeAt(n2)) n2++;
              else for (n2++; n2 < t3.length && U_(t3.charCodeAt(n2)); ) n2++;
              if (n2 < t3.length && 46 === t3.charCodeAt(n2)) {
                if (n2++, !(n2 < t3.length && U_(t3.charCodeAt(n2)))) return m2 = 3, t3.substring(e5, n2);
                for (n2++; n2 < t3.length && U_(t3.charCodeAt(n2)); ) n2++;
              }
              let r4 = n2;
              if (n2 < t3.length && (69 === t3.charCodeAt(n2) || 101 === t3.charCodeAt(n2))) if (n2++, (n2 < t3.length && 43 === t3.charCodeAt(n2) || 45 === t3.charCodeAt(n2)) && n2++, n2 < t3.length && U_(t3.charCodeAt(n2))) {
                for (n2++; n2 < t3.length && U_(t3.charCodeAt(n2)); ) n2++;
                r4 = n2;
              } else m2 = 3;
              return t3.substring(e5, r4);
            })(), o3 = 11;
          default:
            for (; n2 < r3 && p2(e4); ) n2++, e4 = t3.charCodeAt(n2);
            if (i3 !== n2) {
              switch (s2 = t3.substring(i3, n2), s2) {
                case "true":
                  return o3 = 8;
                case "false":
                  return o3 = 9;
                case "null":
                  return o3 = 7;
              }
              return o3 = 16;
            }
            return s2 += String.fromCharCode(e4), n2++, o3 = 16;
        }
      }
      function p2(t4) {
        if (N_(t4) || D_(t4)) return false;
        switch (t4) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return false;
        }
        return true;
      }
      return { setPosition: function(t4) {
        n2 = t4, s2 = "", i3 = 0, o3 = 16, m2 = 0;
      }, getPosition: () => n2, scan: e3 ? function() {
        let t4;
        do {
          t4 = f2();
        } while (t4 >= 12 && t4 <= 15);
        return t4;
      } : f2, getToken: () => o3, getTokenValue: () => s2, getTokenOffset: () => i3, getTokenLength: () => n2 - i3, getTokenStartLine: () => u2, getTokenStartCharacter: () => i3 - l2, getTokenError: () => m2 };
    }
    function N_(t3) {
      return 32 === t3 || 9 === t3;
    }
    function D_(t3) {
      return 10 === t3 || 13 === t3;
    }
    function U_(t3) {
      return t3 >= 48 && t3 <= 57;
    }
    var Q_;
    !(function(t3) {
      t3[t3.lineFeed = 10] = "lineFeed", t3[t3.carriageReturn = 13] = "carriageReturn", t3[t3.space = 32] = "space", t3[t3._0 = 48] = "_0", t3[t3._1 = 49] = "_1", t3[t3._2 = 50] = "_2", t3[t3._3 = 51] = "_3", t3[t3._4 = 52] = "_4", t3[t3._5 = 53] = "_5", t3[t3._6 = 54] = "_6", t3[t3._7 = 55] = "_7", t3[t3._8 = 56] = "_8", t3[t3._9 = 57] = "_9", t3[t3.a = 97] = "a", t3[t3.b = 98] = "b", t3[t3.c = 99] = "c", t3[t3.d = 100] = "d", t3[t3.e = 101] = "e", t3[t3.f = 102] = "f", t3[t3.g = 103] = "g", t3[t3.h = 104] = "h", t3[t3.i = 105] = "i", t3[t3.j = 106] = "j", t3[t3.k = 107] = "k", t3[t3.l = 108] = "l", t3[t3.m = 109] = "m", t3[t3.n = 110] = "n", t3[t3.o = 111] = "o", t3[t3.p = 112] = "p", t3[t3.q = 113] = "q", t3[t3.r = 114] = "r", t3[t3.s = 115] = "s", t3[t3.t = 116] = "t", t3[t3.u = 117] = "u", t3[t3.v = 118] = "v", t3[t3.w = 119] = "w", t3[t3.x = 120] = "x", t3[t3.y = 121] = "y", t3[t3.z = 122] = "z", t3[t3.A = 65] = "A", t3[t3.B = 66] = "B", t3[t3.C = 67] = "C", t3[t3.D = 68] = "D", t3[t3.E = 69] = "E", t3[t3.F = 70] = "F", t3[t3.G = 71] = "G", t3[t3.H = 72] = "H", t3[t3.I = 73] = "I", t3[t3.J = 74] = "J", t3[t3.K = 75] = "K", t3[t3.L = 76] = "L", t3[t3.M = 77] = "M", t3[t3.N = 78] = "N", t3[t3.O = 79] = "O", t3[t3.P = 80] = "P", t3[t3.Q = 81] = "Q", t3[t3.R = 82] = "R", t3[t3.S = 83] = "S", t3[t3.T = 84] = "T", t3[t3.U = 85] = "U", t3[t3.V = 86] = "V", t3[t3.W = 87] = "W", t3[t3.X = 88] = "X", t3[t3.Y = 89] = "Y", t3[t3.Z = 90] = "Z", t3[t3.asterisk = 42] = "asterisk", t3[t3.backslash = 92] = "backslash", t3[t3.closeBrace = 125] = "closeBrace", t3[t3.closeBracket = 93] = "closeBracket", t3[t3.colon = 58] = "colon", t3[t3.comma = 44] = "comma", t3[t3.dot = 46] = "dot", t3[t3.doubleQuote = 34] = "doubleQuote", t3[t3.minus = 45] = "minus", t3[t3.openBrace = 123] = "openBrace", t3[t3.openBracket = 91] = "openBracket", t3[t3.plus = 43] = "plus", t3[t3.slash = 47] = "slash", t3[t3.formFeed = 12] = "formFeed", t3[t3.tab = 9] = "tab";
    })(Q_ || (Q_ = {}));
    new Array(20).fill(0).map((t3, e3) => " ".repeat(e3));
    const M_ = 200;
    new Array(M_).fill(0).map((t3, e3) => "\n" + " ".repeat(e3)), new Array(M_).fill(0).map((t3, e3) => "\r" + " ".repeat(e3)), new Array(M_).fill(0).map((t3, e3) => "\r\n" + " ".repeat(e3)), new Array(M_).fill(0).map((t3, e3) => "\n" + "	".repeat(e3)), new Array(M_).fill(0).map((t3, e3) => "\r" + "	".repeat(e3)), new Array(M_).fill(0).map((t3, e3) => "\r\n" + "	".repeat(e3));
    var O_;
    function F_(t3, e3, r3 = O_.DEFAULT) {
      const n2 = x_(t3, false), s2 = [];
      let i3 = 0;
      function o3(t4) {
        return t4 ? (e4) => 0 === i3 && t4(e4, n2.getTokenOffset(), n2.getTokenLength(), n2.getTokenStartLine(), n2.getTokenStartCharacter()) : () => true;
      }
      function a2(t4) {
        return t4 ? (e4) => 0 === i3 && t4(e4, n2.getTokenOffset(), n2.getTokenLength(), n2.getTokenStartLine(), n2.getTokenStartCharacter(), () => s2.slice()) : () => true;
      }
      function u2(t4) {
        return t4 ? () => {
          if (i3 > 0) i3++;
          else {
            false === t4(n2.getTokenOffset(), n2.getTokenLength(), n2.getTokenStartLine(), n2.getTokenStartCharacter(), () => s2.slice()) && (i3 = 1);
          }
        } : () => true;
      }
      function c2(t4) {
        return t4 ? () => {
          i3 > 0 && i3--, 0 === i3 && t4(n2.getTokenOffset(), n2.getTokenLength(), n2.getTokenStartLine(), n2.getTokenStartCharacter());
        } : () => true;
      }
      const l2 = u2(e3.onObjectBegin), m2 = a2(e3.onObjectProperty), d2 = c2(e3.onObjectEnd), f2 = u2(e3.onArrayBegin), p2 = c2(e3.onArrayEnd), h2 = a2(e3.onLiteralValue), g2 = o3(e3.onSeparator), A2 = (y2 = e3.onComment) ? () => 0 === i3 && y2(n2.getTokenOffset(), n2.getTokenLength(), n2.getTokenStartLine(), n2.getTokenStartCharacter()) : () => true, _2 = o3(e3.onError);
      var y2;
      const w2 = r3 && r3.disallowComments, S2 = r3 && r3.allowTrailingComma;
      function J2() {
        for (; ; ) {
          const t4 = n2.scan();
          switch (n2.getTokenError()) {
            case 4:
              B2(14);
              break;
            case 5:
              B2(15);
              break;
            case 3:
              B2(13);
              break;
            case 1:
              w2 || B2(11);
              break;
            case 2:
              B2(12);
              break;
            case 6:
              B2(16);
          }
          switch (t4) {
            case 12:
            case 13:
              w2 ? B2(10) : A2();
              break;
            case 16:
              B2(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return t4;
          }
        }
      }
      function B2(t4, e4 = [], r4 = []) {
        if (_2(t4), e4.length + r4.length > 0) {
          let t5 = n2.getToken();
          for (; 17 !== t5; ) {
            if (-1 !== e4.indexOf(t5)) {
              J2();
              break;
            }
            if (-1 !== r4.indexOf(t5)) break;
            t5 = J2();
          }
        }
      }
      function E2(t4) {
        const e4 = n2.getTokenValue();
        return t4 ? h2(e4) : (m2(e4), s2.push(e4)), J2(), true;
      }
      function I2() {
        return 10 !== n2.getToken() ? (B2(3, [], [2, 5]), false) : (E2(false), 6 === n2.getToken() ? (g2(":"), J2(), C2() || B2(4, [], [2, 5])) : B2(5, [], [2, 5]), s2.pop(), true);
      }
      function C2() {
        switch (n2.getToken()) {
          case 3:
            return (function() {
              f2(), J2();
              let t4 = true, e4 = false;
              for (; 4 !== n2.getToken() && 17 !== n2.getToken(); ) {
                if (5 === n2.getToken()) {
                  if (e4 || B2(4, [], []), g2(","), J2(), 4 === n2.getToken() && S2) break;
                } else e4 && B2(6, [], []);
                t4 ? (s2.push(0), t4 = false) : s2[s2.length - 1]++, C2() || B2(4, [], [4, 5]), e4 = true;
              }
              return p2(), t4 || s2.pop(), 4 !== n2.getToken() ? B2(8, [4], []) : J2(), true;
            })();
          case 1:
            return (function() {
              l2(), J2();
              let t4 = false;
              for (; 2 !== n2.getToken() && 17 !== n2.getToken(); ) {
                if (5 === n2.getToken()) {
                  if (t4 || B2(4, [], []), g2(","), J2(), 2 === n2.getToken() && S2) break;
                } else t4 && B2(6, [], []);
                I2() || B2(4, [], [2, 5]), t4 = true;
              }
              return d2(), 2 !== n2.getToken() ? B2(7, [2], []) : J2(), true;
            })();
          case 10:
            return E2(true);
          default:
            return (function() {
              switch (n2.getToken()) {
                case 11:
                  const t4 = n2.getTokenValue();
                  let e4 = Number(t4);
                  isNaN(e4) && (B2(2), e4 = 0), h2(e4);
                  break;
                case 7:
                  h2(null);
                  break;
                case 8:
                  h2(true);
                  break;
                case 9:
                  h2(false);
                  break;
                default:
                  return false;
              }
              return J2(), true;
            })();
        }
      }
      return J2(), 17 === n2.getToken() ? !!r3.allowEmptyContent || (B2(4, [], []), false) : C2() ? (17 !== n2.getToken() && B2(9, [], []), true) : (B2(4, [], []), false);
    }
    !(function(t3) {
      t3.DEFAULT = { allowTrailingComma: false };
    })(O_ || (O_ = {}));
    var L_, $_;
    !(function(t3) {
      t3[t3.None = 0] = "None", t3[t3.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", t3[t3.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", t3[t3.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", t3[t3.InvalidUnicode = 4] = "InvalidUnicode", t3[t3.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", t3[t3.InvalidCharacter = 6] = "InvalidCharacter";
    })(L_ || (L_ = {})), (function(t3) {
      t3[t3.OpenBraceToken = 1] = "OpenBraceToken", t3[t3.CloseBraceToken = 2] = "CloseBraceToken", t3[t3.OpenBracketToken = 3] = "OpenBracketToken", t3[t3.CloseBracketToken = 4] = "CloseBracketToken", t3[t3.CommaToken = 5] = "CommaToken", t3[t3.ColonToken = 6] = "ColonToken", t3[t3.NullKeyword = 7] = "NullKeyword", t3[t3.TrueKeyword = 8] = "TrueKeyword", t3[t3.FalseKeyword = 9] = "FalseKeyword", t3[t3.StringLiteral = 10] = "StringLiteral", t3[t3.NumericLiteral = 11] = "NumericLiteral", t3[t3.LineCommentTrivia = 12] = "LineCommentTrivia", t3[t3.BlockCommentTrivia = 13] = "BlockCommentTrivia", t3[t3.LineBreakTrivia = 14] = "LineBreakTrivia", t3[t3.Trivia = 15] = "Trivia", t3[t3.Unknown = 16] = "Unknown", t3[t3.EOF = 17] = "EOF";
    })($_ || ($_ = {}));
    const G_ = function(t3, e3 = [], r3 = O_.DEFAULT) {
      let n2 = null, s2 = [];
      const i3 = [];
      function o3(t4) {
        Array.isArray(s2) ? s2.push(t4) : null !== n2 && (s2[n2] = t4);
      }
      const a2 = { onObjectBegin: () => {
        const t4 = {};
        o3(t4), i3.push(s2), s2 = t4, n2 = null;
      }, onObjectProperty: (t4) => {
        n2 = t4;
      }, onObjectEnd: () => {
        s2 = i3.pop();
      }, onArrayBegin: () => {
        const t4 = [];
        o3(t4), i3.push(s2), s2 = t4, n2 = null;
      }, onArrayEnd: () => {
        s2 = i3.pop();
      }, onLiteralValue: o3, onError: (t4, r4, n3) => {
        e3.push({ error: t4, offset: r4, length: n3 });
      } };
      return F_(t3, a2, r3), s2[0];
    };
    var H_;
    !(function(t3) {
      t3[t3.InvalidSymbol = 1] = "InvalidSymbol", t3[t3.InvalidNumberFormat = 2] = "InvalidNumberFormat", t3[t3.PropertyNameExpected = 3] = "PropertyNameExpected", t3[t3.ValueExpected = 4] = "ValueExpected", t3[t3.ColonExpected = 5] = "ColonExpected", t3[t3.CommaExpected = 6] = "CommaExpected", t3[t3.CloseBraceExpected = 7] = "CloseBraceExpected", t3[t3.CloseBracketExpected = 8] = "CloseBracketExpected", t3[t3.EndOfFileExpected = 9] = "EndOfFileExpected", t3[t3.InvalidCommentToken = 10] = "InvalidCommentToken", t3[t3.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", t3[t3.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", t3[t3.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", t3[t3.InvalidUnicode = 14] = "InvalidUnicode", t3[t3.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", t3[t3.InvalidCharacter = 16] = "InvalidCharacter";
    })(H_ || (H_ = {}));
    class K_ {
      constructor() {
        this.disposables = [], this.collection = o2.languages.createDiagnosticCollection("cursor-environment-json"), this.disposables.push(this.collection), o2.workspace.textDocuments.forEach((t3) => {
          this.isEnvironmentJson(t3) && this.validateDocument(t3);
        }), this.disposables.push(o2.workspace.onDidOpenTextDocument((t3) => {
          this.isEnvironmentJson(t3) && this.validateDocument(t3);
        })), this.disposables.push(o2.workspace.onDidChangeTextDocument((t3) => {
          const e3 = t3.document;
          this.isEnvironmentJson(e3) && this.validateDocument(e3);
        })), this.disposables.push(o2.workspace.onDidCloseTextDocument((t3) => {
          this.isEnvironmentJson(t3) && this.collection.delete(t3.uri);
        }));
      }
      dispose() {
        this.disposables.forEach((t3) => t3.dispose());
      }
      isEnvironmentJson(t3) {
        if ("json" !== t3.languageId && "jsonc" !== t3.languageId) return false;
        return "environment.json" === k_.posix.basename(t3.uri.path) && t3.uri.path.includes("/.cursor/");
      }
      async validateDocument(t3) {
        const e3 = [];
        let r3;
        try {
          r3 = G_(t3.getText());
        } catch {
          return void this.collection.set(t3.uri, e3);
        }
        const n2 = r3?.build, s2 = n2?.dockerfile, i3 = n2?.context ?? ".";
        if (s2 && "string" == typeof s2) {
          const r4 = this.resolvePath(t3.uri, i3, s2);
          try {
            await o2.workspace.fs.stat(r4);
          } catch {
            const n3 = this.getDockerfileValueRange(t3), s3 = new o2.Diagnostic(n3, `Referenced Dockerfile does not exist on disk: ${r4.fsPath}`, o2.DiagnosticSeverity.Error);
            s3.source = "cursor", e3.push(s3);
          }
        }
        this.collection.set(t3.uri, e3);
      }
      resolvePath(t3, e3, r3) {
        const n2 = k_.posix.dirname(t3.path), s2 = k_.posix.join(n2, e3, r3);
        return t3.with({ path: s2 });
      }
      getDockerfileValueRange(t3) {
        const e3 = t3.getText(), r3 = /"dockerfile"\s*:\s*"([^\"]*)"/m.exec(e3);
        if (r3) {
          const e4 = r3.index + r3[0].indexOf(r3[1]), n2 = e4 + r3[1].length;
          return new o2.Range(t3.positionAt(e4), t3.positionAt(n2));
        }
        return new o2.Range(new o2.Position(0, 0), new o2.Position(0, 0));
      }
    }
    const V_ = 256e3;
    function z_(t3, e3) {
      return o2.commands.registerCommand("cursor.internal.recordBrowserTelemEvent", async (r3) => {
        const n2 = await e3(r3.argsJson), s2 = r3.snapshotYaml ? await e3((function(t4, e4) {
          if (void 0 === t4) return;
          return Buffer.byteLength(t4, "utf8") <= e4 ? t4 : Buffer.from(t4, "utf8").subarray(0, e4).toString("utf8");
        })(r3.snapshotYaml, V_) ?? "") : void 0, i3 = r3.url ? await e3(r3.url) : void 0, o3 = r3.title ? await e3(r3.title) : void 0, a2 = new lo({ viewId: r3.viewId, event: { case: "toolAction", value: new ho({ toolName: r3.toolName, argsJson: n2, success: r3.success, postSnapshotYaml: s2 || void 0, postUrl: i3, postTitle: o3, source: go.MCP_TOOL }) } });
        t3.recordEvent({ case: "browserEvent", value: a2 });
      });
    }
    const W_ = [];
    let Y_;
    function j_(t3) {
      u.init(), MA.init(), c.init(), t3.isDevelopment && QA.init();
      const e3 = (0, a.createPrivateInferenceEnablementSource)({ getEnablement: () => o2.cursor.getPrivateInferenceEnablement() });
      W_.push(async () => e3.dispose()), (0, a.installPrivateInferenceHttpGuard)({ enablement: e3, cursorBackendUrls: () => [o2.cursor.getCursorCreds()?.backendUrl], log: u });
      const r3 = new KA({ isDevelopment: t3.isDevelopment });
      W_.push(async () => r3.dispose());
      const n2 = "agentWorkspace" === o2.cursor.glassWorkspaceRole, s2 = n2 ? new GA() : new $A(t3);
      s2 instanceof $A && (W_.push(async () => s2.dispose()), s2.signalAuthReadyToRenderer(), s2.registerWithRenderer());
      const i3 = (function(t4, e4) {
        if (t4.isTrusted) return void e4();
        let r4;
        return r4 = t4.onDidGrantWorkspaceTrust(() => {
          r4?.dispose(), e4();
        }), r4;
      })(o2.workspace, () => {
        if (!n2) {
          const t4 = new m();
          W_.push(async () => t4.dispose());
        }
        const e4 = new C_(t3, s2);
        W_.push(async () => e4.dispose());
        const r4 = new XA(t3, e4, s2);
        W_.push(async () => r4.dispose());
        const i4 = new e_(r4);
        W_.push(async () => i4.dispose());
        const o3 = new T_(i4, t3.extensionPath);
        W_.push(async () => o3.dispose());
        const a2 = z_(i4, (t4) => r4.redact(t4));
        W_.push(async () => a2.dispose()), Y_ = new HA(), W_.push(async () => Y_?.dispose());
        const u2 = new la(t3);
        W_.push(async () => u2.dispose());
        const c2 = new K_();
        W_.push(async () => c2.dispose());
      });
      i3 && W_.push(async () => i3.dispose());
    }
    async function X_() {
      for (const t3 of W_) await t3();
    }
  })();
  var i = exports;
  for (var o in s) i[o] = s[o];
  s.__esModule && Object.defineProperty(i, "__esModule", { value: true });
})();
