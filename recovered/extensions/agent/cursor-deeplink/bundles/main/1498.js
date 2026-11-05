// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1498 range:166327..168592
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1498: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoInt64 = void 0;
    const n2 = A2(3098), r2 = A2(7084);
    t2.protoInt64 = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const t4 = BigInt("-9223372036854775808"), A4 = BigInt("9223372036854775807"), n3 = BigInt("0"), r3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const n4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (n4 > A4 || n4 < t4) throw new Error(`int64 invalid: ${e4}`);
          return n4;
        }, uParse(e4) {
          const t5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (t5 > r3 || t5 < n3) throw new Error(`uint64 invalid: ${e4}`);
          return t5;
        }, enc(t5) {
          return e3.setBigInt64(0, this.parse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(t5) {
          return e3.setBigInt64(0, this.uParse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (t5, A5) => (e3.setInt32(0, t5, true), e3.setInt32(4, A5, true), e3.getBigInt64(0, true)), uDec: (t5, A5) => (e3.setInt32(0, t5, true), e3.setInt32(4, A5, true), e3.getBigUint64(0, true)) };
      }
      const t3 = (e4) => (0, n2.assert)(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), A3 = (e4) => (0, n2.assert)(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), A3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), (0, r2.int64FromString)(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), A3(e4), (0, r2.int64FromString)(e4)), dec: (e4, t4) => (0, r2.int64ToString)(e4, t4), uDec: (e4, t4) => (0, r2.uInt64ToString)(e4, t4) };
    })();
  }