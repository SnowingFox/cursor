// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1498 range:78824..81186
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1498: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.protoInt64 = void 0;
    const s10 = n10(3098), o10 = n10(7084);
    a10.protoInt64 = (function() {
      const e11 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e11.getBigInt64 && "function" == typeof e11.getBigUint64 && "function" == typeof e11.setBigInt64 && "function" == typeof e11.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const a12 = BigInt("-9223372036854775808"), n12 = BigInt("9223372036854775807"), s11 = BigInt("0"), o11 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e12) {
          const s12 = "bigint" == typeof e12 ? e12 : BigInt(e12);
          if (s12 > n12 || s12 < a12) throw new Error(`int64 invalid: ${e12}`);
          return s12;
        }, uParse(e12) {
          const a13 = "bigint" == typeof e12 ? e12 : BigInt(e12);
          if (a13 > o11 || a13 < s11) throw new Error(`uint64 invalid: ${e12}`);
          return a13;
        }, enc(a13) {
          return e11.setBigInt64(0, this.parse(a13), true), { lo: e11.getInt32(0, true), hi: e11.getInt32(4, true) };
        }, uEnc(a13) {
          return e11.setBigInt64(0, this.uParse(a13), true), { lo: e11.getInt32(0, true), hi: e11.getInt32(4, true) };
        }, dec: (a13, n13) => (e11.setInt32(0, a13, true), e11.setInt32(4, n13, true), e11.getBigInt64(0, true)), uDec: (a13, n13) => (e11.setInt32(0, a13, true), e11.setInt32(4, n13, true), e11.getBigUint64(0, true)) };
      }
      const a11 = (e12) => (0, s10.assert)(/^-?[0-9]+$/.test(e12), `int64 invalid: ${e12}`), n11 = (e12) => (0, s10.assert)(/^[0-9]+$/.test(e12), `uint64 invalid: ${e12}`);
      return { zero: "0", supported: false, parse: (e12) => ("string" != typeof e12 && (e12 = e12.toString()), a11(e12), e12), uParse: (e12) => ("string" != typeof e12 && (e12 = e12.toString()), n11(e12), e12), enc: (e12) => ("string" != typeof e12 && (e12 = e12.toString()), a11(e12), (0, o10.int64FromString)(e12)), uEnc: (e12) => ("string" != typeof e12 && (e12 = e12.toString()), n11(e12), (0, o10.int64FromString)(e12)), dec: (e12, a12) => (0, o10.int64ToString)(e12, a12), uDec: (e12, a12) => (0, o10.uInt64ToString)(e12, a12) };
    })();
  }