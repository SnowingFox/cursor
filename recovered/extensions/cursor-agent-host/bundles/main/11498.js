// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 11498 range:3774063..3776315
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11498: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.protoInt64 = void 0;
    const n = r(43098), s = r(37084);
    t.protoInt64 = (function() {
      const e2 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e2.getBigInt64 && "function" == typeof e2.getBigUint64 && "function" == typeof e2.setBigInt64 && "function" == typeof e2.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const t3 = BigInt("-9223372036854775808"), r3 = BigInt("9223372036854775807"), n2 = BigInt("0"), s2 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e3) {
          const n3 = "bigint" == typeof e3 ? e3 : BigInt(e3);
          if (n3 > r3 || n3 < t3) throw new Error(`int64 invalid: ${e3}`);
          return n3;
        }, uParse(e3) {
          const t4 = "bigint" == typeof e3 ? e3 : BigInt(e3);
          if (t4 > s2 || t4 < n2) throw new Error(`uint64 invalid: ${e3}`);
          return t4;
        }, enc(t4) {
          return e2.setBigInt64(0, this.parse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
        }, uEnc(t4) {
          return e2.setBigInt64(0, this.uParse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
        }, dec: (t4, r4) => (e2.setInt32(0, t4, true), e2.setInt32(4, r4, true), e2.getBigInt64(0, true)), uDec: (t4, r4) => (e2.setInt32(0, t4, true), e2.setInt32(4, r4, true), e2.getBigUint64(0, true)) };
      }
      const t2 = (e3) => (0, n.assert)(/^-?[0-9]+$/.test(e3), `int64 invalid: ${e3}`), r2 = (e3) => (0, n.assert)(/^[0-9]+$/.test(e3), `uint64 invalid: ${e3}`);
      return { zero: "0", supported: false, parse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), e3), uParse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), r2(e3), e3), enc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), (0, s.int64FromString)(e3)), uEnc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), r2(e3), (0, s.int64FromString)(e3)), dec: (e3, t3) => (0, s.int64ToString)(e3, t3), uDec: (e3, t3) => (0, s.uInt64ToString)(e3, t3) };
    })();
  }