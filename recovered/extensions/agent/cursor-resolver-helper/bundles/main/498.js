// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 498 range:134026..136268
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
498: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.protoInt64 = void 0;
    const o2 = n2(98), s2 = n2(84);
    a2.protoInt64 = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const a4 = BigInt("-9223372036854775808"), n4 = BigInt("9223372036854775807"), o3 = BigInt("0"), s3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const o4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (o4 > n4 || o4 < a4) throw new Error(`int64 invalid: ${e4}`);
          return o4;
        }, uParse(e4) {
          const a5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (a5 > s3 || a5 < o3) throw new Error(`uint64 invalid: ${e4}`);
          return a5;
        }, enc(a5) {
          return e3.setBigInt64(0, this.parse(a5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(a5) {
          return e3.setBigInt64(0, this.uParse(a5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (a5, n5) => (e3.setInt32(0, a5, true), e3.setInt32(4, n5, true), e3.getBigInt64(0, true)), uDec: (a5, n5) => (e3.setInt32(0, a5, true), e3.setInt32(4, n5, true), e3.getBigUint64(0, true)) };
      }
      const a3 = (e4) => (0, o2.assert)(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), n3 = (e4) => (0, o2.assert)(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), a3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), a3(e4), (0, s2.int64FromString)(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), (0, s2.int64FromString)(e4)), dec: (e4, a4) => (0, s2.int64ToString)(e4, a4), uDec: (e4, a4) => (0, s2.uInt64ToString)(e4, a4) };
    })();
  }