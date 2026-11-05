// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1498 range:160241..162506
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1498: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.protoInt64 = void 0;
    const n2 = t2(3098), r2 = t2(7084);
    A2.protoInt64 = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const A4 = BigInt("-9223372036854775808"), t4 = BigInt("9223372036854775807"), n3 = BigInt("0"), r3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const n4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (n4 > t4 || n4 < A4) throw new Error(`int64 invalid: ${e4}`);
          return n4;
        }, uParse(e4) {
          const A5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (A5 > r3 || A5 < n3) throw new Error(`uint64 invalid: ${e4}`);
          return A5;
        }, enc(A5) {
          return e3.setBigInt64(0, this.parse(A5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(A5) {
          return e3.setBigInt64(0, this.uParse(A5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (A5, t5) => (e3.setInt32(0, A5, true), e3.setInt32(4, t5, true), e3.getBigInt64(0, true)), uDec: (A5, t5) => (e3.setInt32(0, A5, true), e3.setInt32(4, t5, true), e3.getBigUint64(0, true)) };
      }
      const A3 = (e4) => (0, n2.assert)(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), t3 = (e4) => (0, n2.assert)(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), A3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), A3(e4), (0, r2.int64FromString)(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), (0, r2.int64FromString)(e4)), dec: (e4, A4) => (0, r2.int64ToString)(e4, A4), uDec: (e4, A4) => (0, r2.uInt64ToString)(e4, A4) };
    })();
  }