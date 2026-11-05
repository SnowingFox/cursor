// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1498 range:520660..522925
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1498: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.protoInt64 = void 0;
    const n2 = r2(3098), s2 = r2(7084);
    e2.protoInt64 = (function() {
      const t3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof t3.getBigInt64 && "function" == typeof t3.getBigUint64 && "function" == typeof t3.setBigInt64 && "function" == typeof t3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const e4 = BigInt("-9223372036854775808"), r4 = BigInt("9223372036854775807"), n3 = BigInt("0"), s3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(t4) {
          const n4 = "bigint" == typeof t4 ? t4 : BigInt(t4);
          if (n4 > r4 || n4 < e4) throw new Error(`int64 invalid: ${t4}`);
          return n4;
        }, uParse(t4) {
          const e5 = "bigint" == typeof t4 ? t4 : BigInt(t4);
          if (e5 > s3 || e5 < n3) throw new Error(`uint64 invalid: ${t4}`);
          return e5;
        }, enc(e5) {
          return t3.setBigInt64(0, this.parse(e5), true), { lo: t3.getInt32(0, true), hi: t3.getInt32(4, true) };
        }, uEnc(e5) {
          return t3.setBigInt64(0, this.uParse(e5), true), { lo: t3.getInt32(0, true), hi: t3.getInt32(4, true) };
        }, dec: (e5, r5) => (t3.setInt32(0, e5, true), t3.setInt32(4, r5, true), t3.getBigInt64(0, true)), uDec: (e5, r5) => (t3.setInt32(0, e5, true), t3.setInt32(4, r5, true), t3.getBigUint64(0, true)) };
      }
      const e3 = (t4) => (0, n2.assert)(/^-?[0-9]+$/.test(t4), `int64 invalid: ${t4}`), r3 = (t4) => (0, n2.assert)(/^[0-9]+$/.test(t4), `uint64 invalid: ${t4}`);
      return { zero: "0", supported: false, parse: (t4) => ("string" != typeof t4 && (t4 = t4.toString()), e3(t4), t4), uParse: (t4) => ("string" != typeof t4 && (t4 = t4.toString()), r3(t4), t4), enc: (t4) => ("string" != typeof t4 && (t4 = t4.toString()), e3(t4), (0, s2.int64FromString)(t4)), uEnc: (t4) => ("string" != typeof t4 && (t4 = t4.toString()), r3(t4), (0, s2.int64FromString)(t4)), dec: (t4, e4) => (0, s2.int64ToString)(t4, e4), uDec: (t4, e4) => (0, s2.uInt64ToString)(t4, e4) };
    })();
  }