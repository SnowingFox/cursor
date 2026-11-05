// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 498 range:134026..136268
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
498: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoInt64 = void 0;
    const r2 = n2(98), o2 = n2(84);
    t2.protoInt64 = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const t4 = BigInt("-9223372036854775808"), n4 = BigInt("9223372036854775807"), r3 = BigInt("0"), o3 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const r4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (r4 > n4 || r4 < t4) throw new Error(`int64 invalid: ${e4}`);
          return r4;
        }, uParse(e4) {
          const t5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (t5 > o3 || t5 < r3) throw new Error(`uint64 invalid: ${e4}`);
          return t5;
        }, enc(t5) {
          return e3.setBigInt64(0, this.parse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(t5) {
          return e3.setBigInt64(0, this.uParse(t5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (t5, n5) => (e3.setInt32(0, t5, true), e3.setInt32(4, n5, true), e3.getBigInt64(0, true)), uDec: (t5, n5) => (e3.setInt32(0, t5, true), e3.setInt32(4, n5, true), e3.getBigUint64(0, true)) };
      }
      const t3 = (e4) => (0, r2.assert)(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), n3 = (e4) => (0, r2.assert)(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), t3(e4), (0, o2.int64FromString)(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), (0, o2.int64FromString)(e4)), dec: (e4, t4) => (0, o2.int64ToString)(e4, t4), uDec: (e4, t4) => (0, o2.uInt64ToString)(e4, t4) };
    })();
  }