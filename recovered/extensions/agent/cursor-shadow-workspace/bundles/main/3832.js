// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3832 range:373160..374326
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3832: (e2) => {
    "use strict";
    const A2 = /\+/g, t2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    function n2() {
      this.buffer = void 0;
    }
    n2.prototype.write = function(e3) {
      let n3 = "", r2 = 0, o2 = 0;
      const s = (e3 = e3.replace(A2, " ")).length;
      for (; r2 < s; ++r2) void 0 !== this.buffer ? t2[e3.charCodeAt(r2)] ? (this.buffer += e3[r2], ++o2, 2 === this.buffer.length && (n3 += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (n3 += "%" + this.buffer, this.buffer = void 0, --r2) : "%" === e3[r2] && (r2 > o2 && (n3 += e3.substring(o2, r2), o2 = r2), this.buffer = "", ++o2);
      return o2 < s && void 0 === this.buffer && (n3 += e3.substring(o2)), n3;
    }, n2.prototype.reset = function() {
      this.buffer = void 0;
    }, e2.exports = n2;
  }