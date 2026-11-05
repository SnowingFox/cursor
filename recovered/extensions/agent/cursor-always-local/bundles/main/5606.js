// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5606 range:1268595..1271382
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5606: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.parseDate = function(t3) {
      if (!t3) return;
      const e3 = t3.split(r2);
      let n3, a, u, c, l, m;
      for (let t4 = 0; t4 < e3.length; t4++) {
        const r3 = (e3[t4] ?? "").trim();
        if (r3.length) {
          if (void 0 === u) {
            const t5 = i2(r3);
            if (t5) {
              n3 = t5[0], a = t5[1], u = t5[2];
              continue;
            }
          }
          if (void 0 === c) {
            const t5 = s2(r3, 1, 2, true);
            if (void 0 !== t5) {
              c = t5;
              continue;
            }
          }
          if (void 0 === l) {
            const t5 = o2(r3);
            if (void 0 !== t5) {
              l = t5;
              continue;
            }
          }
          if (void 0 === m) {
            const t5 = s2(r3, 2, 4, true);
            void 0 !== t5 && (m = t5, m >= 70 && m <= 99 ? m += 1900 : m >= 0 && m <= 69 && (m += 2e3));
          }
        }
      }
      if (void 0 === c || void 0 === l || void 0 === m || void 0 === n3 || void 0 === a || void 0 === u || c < 1 || c > 31 || m < 1601 || n3 > 23 || a > 59 || u > 59) return;
      return new Date(Date.UTC(m, l, c, n3, a, u));
    };
    const r2 = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, n2 = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
    function s2(t3, e3, r3, n3) {
      let s3 = 0;
      for (; s3 < t3.length; ) {
        const e4 = t3.charCodeAt(s3);
        if (e4 <= 47 || e4 >= 58) break;
        s3++;
      }
      if (!(s3 < e3 || s3 > r3) && (n3 || s3 == t3.length)) return parseInt(t3.slice(0, s3), 10);
    }
    function i2(t3) {
      const e3 = t3.split(":"), r3 = [0, 0, 0];
      if (3 === e3.length) {
        for (let t4 = 0; t4 < 3; t4++) {
          const n3 = 2 == t4, i3 = e3[t4];
          if (void 0 === i3) return;
          const o3 = s2(i3, 1, 2, n3);
          if (void 0 === o3) return;
          r3[t4] = o3;
        }
        return r3;
      }
    }
    function o2(t3) {
      switch (t3 = String(t3).slice(0, 3).toLowerCase()) {
        case "jan":
          return n2.jan;
        case "feb":
          return n2.feb;
        case "mar":
          return n2.mar;
        case "apr":
          return n2.apr;
        case "may":
          return n2.may;
        case "jun":
          return n2.jun;
        case "jul":
          return n2.jul;
        case "aug":
          return n2.aug;
        case "sep":
          return n2.sep;
        case "oct":
          return n2.oct;
        case "nov":
          return n2.nov;
        case "dec":
          return n2.dec;
        default:
          return;
      }
    }
  }