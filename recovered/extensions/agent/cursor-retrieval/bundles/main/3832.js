// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3832 range:678900..680069
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3832: (e2) => {
    "use strict";
    const a2 = /\+/g, n2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    function t2() {
      this.buffer = void 0;
    }
    t2.prototype.write = function(e3) {
      let t3 = "", s2 = 0, o2 = 0;
      const r2 = (e3 = e3.replace(a2, " ")).length;
      for (; s2 < r2; ++s2) void 0 !== this.buffer ? n2[e3.charCodeAt(s2)] ? (this.buffer += e3[s2], ++o2, 2 === this.buffer.length && (t3 += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (t3 += "%" + this.buffer, this.buffer = void 0, --s2) : "%" === e3[s2] && (s2 > o2 && (t3 += e3.substring(o2, s2), o2 = s2), this.buffer = "", ++o2);
      return o2 < r2 && void 0 === this.buffer && (t3 += e3.substring(o2)), t3;
    }, t2.prototype.reset = function() {
      this.buffer = void 0;
    }, e2.exports = t2;
  }