// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3832 range:377351..378517
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3832: (e2) => {
    "use strict";
    const n2 = /\+/g, t2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    function a2() {
      this.buffer = void 0;
    }
    a2.prototype.write = function(e3) {
      let a3 = "", s2 = 0, o2 = 0;
      const r = (e3 = e3.replace(n2, " ")).length;
      for (; s2 < r; ++s2) void 0 !== this.buffer ? t2[e3.charCodeAt(s2)] ? (this.buffer += e3[s2], ++o2, 2 === this.buffer.length && (a3 += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (a3 += "%" + this.buffer, this.buffer = void 0, --s2) : "%" === e3[s2] && (s2 > o2 && (a3 += e3.substring(o2, s2), o2 = s2), this.buffer = "", ++o2);
      return o2 < r && void 0 === this.buffer && (a3 += e3.substring(o2)), a3;
    }, a2.prototype.reset = function() {
      this.buffer = void 0;
    }, e2.exports = a2;
  }