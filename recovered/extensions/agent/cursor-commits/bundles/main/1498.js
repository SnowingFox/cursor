// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1498 range:160300..162565
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1498: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.protoInt64 = void 0;
    const t2 = a2(3098), s2 = a2(7084);
    n2.protoInt64 = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const n4 = BigInt("-9223372036854775808"), a4 = BigInt("9223372036854775807"), t3 = BigInt("0"), s3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const t4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (t4 > a4 || t4 < n4) throw new Error(`int64 invalid: ${e4}`);
          return t4;
        }, uParse(e4) {
          const n5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (n5 > s3 || n5 < t3) throw new Error(`uint64 invalid: ${e4}`);
          return n5;
        }, enc(n5) {
          return e3.setBigInt64(0, this.parse(n5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(n5) {
          return e3.setBigInt64(0, this.uParse(n5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (n5, a5) => (e3.setInt32(0, n5, true), e3.setInt32(4, a5, true), e3.getBigInt64(0, true)), uDec: (n5, a5) => (e3.setInt32(0, n5, true), e3.setInt32(4, a5, true), e3.getBigUint64(0, true)) };
      }
      const n3 = (e4) => (0, t2.assert)(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), a3 = (e4) => (0, t2.assert)(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), a3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), (0, s2.int64FromString)(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), a3(e4), (0, s2.int64FromString)(e4)), dec: (e4, n4) => (0, s2.int64ToString)(e4, n4), uDec: (e4, n4) => (0, s2.uInt64ToString)(e4, n4) };
    })();
  }