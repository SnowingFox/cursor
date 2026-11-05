// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 63652 range:10308212..10309351
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
63652: (e) => {
    "use strict";
    const t = /\+/g, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    function n() {
      this.buffer = void 0;
    }
    n.prototype.write = function(e2) {
      let n2 = "", s = 0, o = 0;
      const i = (e2 = e2.replace(t, " ")).length;
      for (; s < i; ++s) void 0 !== this.buffer ? r[e2.charCodeAt(s)] ? (this.buffer += e2[s], ++o, 2 === this.buffer.length && (n2 += String.fromCharCode(parseInt(this.buffer, 16)), this.buffer = void 0)) : (n2 += "%" + this.buffer, this.buffer = void 0, --s) : "%" === e2[s] && (s > o && (n2 += e2.substring(o, s), o = s), this.buffer = "", ++o);
      return o < i && void 0 === this.buffer && (n2 += e2.substring(o)), n2;
    }, n.prototype.reset = function() {
      this.buffer = void 0;
    }, e.exports = n;
  }