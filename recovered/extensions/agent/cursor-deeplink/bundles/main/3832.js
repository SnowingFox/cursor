// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3832 range:469582..470748
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3832: (e2) => {
    "use strict";
    const t2 = /\+/g, A2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    function n2() {
      this.buffer = void 0;
    }
    n2.prototype.write = function(e3) {
      let n3 = "", r2 = 0, o2 = 0;
      const s = (e3 = e3.replace(t2, " ")).length;
      for (; r2 < s; ++r2) void 0 !== this.buffer ? A2[e3.charCodeAt(r2)] ? (this.buffer += e3[r2], ++o2, 2 === this.buffer.length && (n3 += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (n3 += "%" + this.buffer, this.buffer = void 0, --r2) : "%" === e3[r2] && (r2 > o2 && (n3 += e3.substring(o2, r2), o2 = r2), this.buffer = "", ++o2);
      return o2 < s && void 0 === this.buffer && (n3 += e3.substring(o2)), n3;
    }, n2.prototype.reset = function() {
      this.buffer = void 0;
    }, e2.exports = n2;
  }