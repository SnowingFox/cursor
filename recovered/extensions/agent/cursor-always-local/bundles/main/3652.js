// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3652 range:986263..987432
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3652: (t2) => {
    "use strict";
    const e2 = /\+/g, r2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    function n2() {
      this.buffer = void 0;
    }
    n2.prototype.write = function(t3) {
      let n3 = "", s2 = 0, i2 = 0;
      const o2 = (t3 = t3.replace(e2, " ")).length;
      for (; s2 < o2; ++s2) void 0 !== this.buffer ? r2[t3.charCodeAt(s2)] ? (this.buffer += t3[s2], ++i2, 2 === this.buffer.length && (n3 += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (n3 += "%" + this.buffer, this.buffer = void 0, --s2) : "%" === t3[s2] && (s2 > i2 && (n3 += t3.substring(i2, s2), i2 = s2), this.buffer = "", ++i2);
      return i2 < o2 && void 0 === this.buffer && (n3 += t3.substring(i2)), n3;
    }, n2.prototype.reset = function() {
      this.buffer = void 0;
    }, t2.exports = n2;
  }