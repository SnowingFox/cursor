// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83123 range:11881586..11883664
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83123: (e, t, r) => {
    "use strict";
    const n = r(78474).EventEmitter, s = r(57975).inherits, o = r(33013), i = r(88940), a = Buffer.from("\r\n\r\n"), c = /\r\n/g, l = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
    function u(e2) {
      n.call(this), e2 = e2 || {};
      const t2 = this;
      this.nread = 0, this.maxed = false, this.npairs = 0, this.maxHeaderPairs = o(e2, "maxHeaderPairs", 2e3), this.maxHeaderSize = o(e2, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = false, this.ss = new i(a), this.ss.on("info", function(e3, r2, n2, s2) {
        r2 && !t2.maxed && (t2.nread + s2 - n2 >= t2.maxHeaderSize ? (s2 = t2.maxHeaderSize - t2.nread + n2, t2.nread = t2.maxHeaderSize, t2.maxed = true) : t2.nread += s2 - n2, t2.buffer += r2.toString("binary", n2, s2)), e3 && t2._finish();
      });
    }
    s(u, n), u.prototype.push = function(e2) {
      const t2 = this.ss.push(e2);
      if (this.finished) return t2;
    }, u.prototype.reset = function() {
      this.finished = false, this.buffer = "", this.header = {}, this.ss.reset();
    }, u.prototype._finish = function() {
      this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
      const e2 = this.header;
      this.header = {}, this.buffer = "", this.finished = true, this.nread = this.npairs = 0, this.maxed = false, this.emit("header", e2);
    }, u.prototype._parseHeader = function() {
      if (this.npairs === this.maxHeaderPairs) return;
      const e2 = this.buffer.split(c), t2 = e2.length;
      let r2, n2;
      for (var s2 = 0; s2 < t2; ++s2) {
        if (0 === e2[s2].length) continue;
        if (("	" === e2[s2][0] || " " === e2[s2][0]) && n2) {
          this.header[n2][this.header[n2].length - 1] += e2[s2];
          continue;
        }
        const t3 = e2[s2].indexOf(":");
        if (-1 === t3 || 0 === t3) return;
        if (r2 = l.exec(e2[s2]), n2 = r2[1].toLowerCase(), this.header[n2] = this.header[n2] || [], this.header[n2].push(r2[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
      }
    }, e.exports = u;
  }