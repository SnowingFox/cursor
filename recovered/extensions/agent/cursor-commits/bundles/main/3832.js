// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3832 range:373421..374590
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3832: (e2) => {
    "use strict";
    const n2 = /\+/g, a2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    function t2() {
      this.buffer = void 0;
    }
    t2.prototype.write = function(e3) {
      let t3 = "", s2 = 0, o2 = 0;
      const r2 = (e3 = e3.replace(n2, " ")).length;
      for (; s2 < r2; ++s2) void 0 !== this.buffer ? a2[e3.charCodeAt(s2)] ? (this.buffer += e3[s2], ++o2, 2 === this.buffer.length && (t3 += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (t3 += "%" + this.buffer, this.buffer = void 0, --s2) : "%" === e3[s2] && (s2 > o2 && (t3 += e3.substring(o2, s2), o2 = s2), this.buffer = "", ++o2);
      return o2 < r2 && void 0 === this.buffer && (t3 += e3.substring(o2)), t3;
    }, t2.prototype.reset = function() {
      this.buffer = void 0;
    }, e2.exports = t2;
  }