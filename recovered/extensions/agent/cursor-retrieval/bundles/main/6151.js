// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6151 range:791431..794934
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6151: (e2) => {
    "use strict";
    var a2 = {};
    function n2(e3) {
      return e3 < 0 ? -1 : 1;
    }
    function t2(e3, a3) {
      a3.unsigned || --e3;
      const t3 = a3.unsigned ? 0 : -Math.pow(2, e3), s2 = Math.pow(2, e3) - 1, o2 = a3.moduloBitLength ? Math.pow(2, a3.moduloBitLength) : Math.pow(2, e3), r2 = a3.moduloBitLength ? Math.pow(2, a3.moduloBitLength - 1) : Math.pow(2, e3 - 1);
      return function(e4, i2) {
        i2 || (i2 = {});
        let l = +e4;
        if (i2.enforceRange) {
          if (!Number.isFinite(l)) throw new TypeError("Argument is not a finite number");
          if (l = n2(l) * Math.floor(Math.abs(l)), l < t3 || l > s2) throw new TypeError("Argument is not in byte range");
          return l;
        }
        if (!isNaN(l) && i2.clamp) return l = (function(e5) {
          return e5 % 1 != 0.5 || 1 & e5 ? Math.round(e5) : Math.floor(e5);
        })(l), l < t3 && (l = t3), l > s2 && (l = s2), l;
        if (!Number.isFinite(l) || 0 === l) return 0;
        if (l = n2(l) * Math.floor(Math.abs(l)), l %= o2, !a3.unsigned && l >= r2) return l - o2;
        if (a3.unsigned) {
          if (l < 0) l += o2;
          else if (-0 === l) return 0;
        }
        return l;
      };
    }
    e2.exports = a2, a2.void = function() {
    }, a2.boolean = function(e3) {
      return !!e3;
    }, a2.byte = t2(8, { unsigned: false }), a2.octet = t2(8, { unsigned: true }), a2.short = t2(16, { unsigned: false }), a2["unsigned short"] = t2(16, { unsigned: true }), a2.long = t2(32, { unsigned: false }), a2["unsigned long"] = t2(32, { unsigned: true }), a2["long long"] = t2(32, { unsigned: false, moduloBitLength: 64 }), a2["unsigned long long"] = t2(32, { unsigned: true, moduloBitLength: 64 }), a2.double = function(e3) {
      const a3 = +e3;
      if (!Number.isFinite(a3)) throw new TypeError("Argument is not a finite floating-point value");
      return a3;
    }, a2["unrestricted double"] = function(e3) {
      const a3 = +e3;
      if (isNaN(a3)) throw new TypeError("Argument is NaN");
      return a3;
    }, a2.float = a2.double, a2["unrestricted float"] = a2["unrestricted double"], a2.DOMString = function(e3, a3) {
      return a3 || (a3 = {}), a3.treatNullAsEmptyString && null === e3 ? "" : String(e3);
    }, a2.ByteString = function(e3, a3) {
      const n3 = String(e3);
      let t3;
      for (let e4 = 0; void 0 !== (t3 = n3.codePointAt(e4)); ++e4) if (t3 > 255) throw new TypeError("Argument is not a valid bytestring");
      return n3;
    }, a2.USVString = function(e3) {
      const a3 = String(e3), n3 = a3.length, t3 = [];
      for (let e4 = 0; e4 < n3; ++e4) {
        const s2 = a3.charCodeAt(e4);
        if (s2 < 55296 || s2 > 57343) t3.push(String.fromCodePoint(s2));
        else if (56320 <= s2 && s2 <= 57343) t3.push(String.fromCodePoint(65533));
        else if (e4 === n3 - 1) t3.push(String.fromCodePoint(65533));
        else {
          const n4 = a3.charCodeAt(e4 + 1);
          if (56320 <= n4 && n4 <= 57343) {
            const a4 = 1023 & s2, o2 = 1023 & n4;
            t3.push(String.fromCodePoint(65536 + 1024 * a4 + o2)), ++e4;
          } else t3.push(String.fromCodePoint(65533));
        }
      }
      return t3.join("");
    }, a2.Date = function(e3, a3) {
      if (!(e3 instanceof Date)) throw new TypeError("Argument is not a Date object");
      if (!isNaN(e3)) return e3;
    }, a2.RegExp = function(e3, a3) {
      return e3 instanceof RegExp || (e3 = new RegExp(e3)), e3;
    };
  }