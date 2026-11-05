// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 55606 range:8690243..8693004
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55606: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.parseDate = function(e2) {
      if (!e2) return;
      const t2 = e2.split(r);
      let n2, a, c, l, u, d;
      for (let e3 = 0; e3 < t2.length; e3++) {
        const r2 = (t2[e3] ?? "").trim();
        if (r2.length) {
          if (void 0 === c) {
            const e4 = o(r2);
            if (e4) {
              n2 = e4[0], a = e4[1], c = e4[2];
              continue;
            }
          }
          if (void 0 === l) {
            const e4 = s(r2, 1, 2, true);
            if (void 0 !== e4) {
              l = e4;
              continue;
            }
          }
          if (void 0 === u) {
            const e4 = i(r2);
            if (void 0 !== e4) {
              u = e4;
              continue;
            }
          }
          if (void 0 === d) {
            const e4 = s(r2, 2, 4, true);
            void 0 !== e4 && (d = e4, d >= 70 && d <= 99 ? d += 1900 : d >= 0 && d <= 69 && (d += 2e3));
          }
        }
      }
      if (void 0 === l || void 0 === u || void 0 === d || void 0 === n2 || void 0 === a || void 0 === c || l < 1 || l > 31 || d < 1601 || n2 > 23 || a > 59 || c > 59) return;
      return new Date(Date.UTC(d, u, l, n2, a, c));
    };
    const r = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, n = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
    function s(e2, t2, r2, n2) {
      let s2 = 0;
      for (; s2 < e2.length; ) {
        const t3 = e2.charCodeAt(s2);
        if (t3 <= 47 || t3 >= 58) break;
        s2++;
      }
      if (!(s2 < t2 || s2 > r2) && (n2 || s2 == e2.length)) return parseInt(e2.slice(0, s2), 10);
    }
    function o(e2) {
      const t2 = e2.split(":"), r2 = [0, 0, 0];
      if (3 === t2.length) {
        for (let e3 = 0; e3 < 3; e3++) {
          const n2 = 2 == e3, o2 = t2[e3];
          if (void 0 === o2) return;
          const i2 = s(o2, 1, 2, n2);
          if (void 0 === i2) return;
          r2[e3] = i2;
        }
        return r2;
      }
    }
    function i(e2) {
      switch (e2 = String(e2).slice(0, 3).toLowerCase()) {
        case "jan":
          return n.jan;
        case "feb":
          return n.feb;
        case "mar":
          return n.mar;
        case "apr":
          return n.apr;
        case "may":
          return n.may;
        case "jun":
          return n.jun;
        case "jul":
          return n.jul;
        case "aug":
          return n.aug;
        case "sep":
          return n.sep;
        case "oct":
          return n.oct;
        case "nov":
          return n.nov;
        case "dec":
          return n.dec;
        default:
          return;
      }
    }
  }