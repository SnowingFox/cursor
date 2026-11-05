// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1498 range:167448..169713
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1498: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoInt64 = void 0;
    const n2 = r2(3098), o2 = r2(7084);
    t2.protoInt64 = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const t4 = BigInt("-9223372036854775808"), r4 = BigInt("9223372036854775807"), n3 = BigInt("0"), o3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const n4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (n4 > r4 || n4 < t4) throw new Error(`int64 invalid: ${e4}`);
          return n4;
        }, uParse(e4) {
          const t5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (t5 > o3 || t5 < n3) throw new Error(`uint64 invalid: ${e4}`);
          return t5;
        }, enc(t5) {
          return e3.setBigInt64(0, this.parse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(t5) {
          return e3.setBigInt64(0, this.uParse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (t5, r5) => (e3.setInt32(0, t5, true), e3.setInt32(4, r5, true), e3.getBigInt64(0, true)), uDec: (t5, r5) => (e3.setInt32(0, t5, true), e3.setInt32(4, r5, true), e3.getBigUint64(0, true)) };
      }
      const t3 = (e4) => (0, n2.assert)(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), r3 = (e4) => (0, n2.assert)(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), r3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), (0, o2.int64FromString)(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), r3(e4), (0, o2.int64FromString)(e4)), dec: (e4, t4) => (0, o2.int64ToString)(e4, t4), uDec: (e4, t4) => (0, o2.uInt64ToString)(e4, t4) };
    })();
  }