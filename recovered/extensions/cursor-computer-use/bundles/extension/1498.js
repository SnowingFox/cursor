// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1498 range:164432..166697
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1498: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.protoInt64 = void 0;
    const a2 = t2(3098), s2 = t2(7084);
    n2.protoInt64 = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const n4 = BigInt("-9223372036854775808"), t4 = BigInt("9223372036854775807"), a3 = BigInt("0"), s3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const a4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (a4 > t4 || a4 < n4) throw new Error(`int64 invalid: ${e4}`);
          return a4;
        }, uParse(e4) {
          const n5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (n5 > s3 || n5 < a3) throw new Error(`uint64 invalid: ${e4}`);
          return n5;
        }, enc(n5) {
          return e3.setBigInt64(0, this.parse(n5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(n5) {
          return e3.setBigInt64(0, this.uParse(n5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (n5, t5) => (e3.setInt32(0, n5, true), e3.setInt32(4, t5, true), e3.getBigInt64(0, true)), uDec: (n5, t5) => (e3.setInt32(0, n5, true), e3.setInt32(4, t5, true), e3.getBigUint64(0, true)) };
      }
      const n3 = (e4) => (0, a2.assert)(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), t3 = (e4) => (0, a2.assert)(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), (0, s2.int64FromString)(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), (0, s2.int64FromString)(e4)), dec: (e4, n4) => (0, s2.int64ToString)(e4, n4), uDec: (e4, n4) => (0, s2.uInt64ToString)(e4, n4) };
    })();
  }