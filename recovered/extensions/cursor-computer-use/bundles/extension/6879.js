// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6879 range:541959..544048
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6879: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(8474).EventEmitter, s2 = t2(7975).inherits, o2 = t2(5529), r = t2(9512), i = Buffer.from("\r\n\r\n"), A = /\r\n/g, c = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
    function l(e3) {
      a2.call(this), e3 = e3 || {};
      const n3 = this;
      this.nread = 0, this.maxed = false, this.npairs = 0, this.maxHeaderPairs = o2(e3, "maxHeaderPairs", 2e3), this.maxHeaderSize = o2(e3, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = false, this.ss = new r(i), this.ss.on("info", function(e4, t3, a3, s3) {
        t3 && !n3.maxed && (n3.nread + s3 - a3 >= n3.maxHeaderSize ? (s3 = n3.maxHeaderSize - n3.nread + a3, n3.nread = n3.maxHeaderSize, n3.maxed = true) : n3.nread += s3 - a3, n3.buffer += t3.toString("binary", a3, s3)), e4 && n3._finish();
      });
    }
    s2(l, a2), l.prototype.push = function(e3) {
      const n3 = this.ss.push(e3);
      if (this.finished) return n3;
    }, l.prototype.reset = function() {
      this.finished = false, this.buffer = "", this.header = {}, this.ss.reset();
    }, l.prototype._finish = function() {
      this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
      const e3 = this.header;
      this.header = {}, this.buffer = "", this.finished = true, this.nread = this.npairs = 0, this.maxed = false, this.emit("header", e3);
    }, l.prototype._parseHeader = function() {
      if (this.npairs === this.maxHeaderPairs) return;
      const e3 = this.buffer.split(A), n3 = e3.length;
      let t3, a3;
      for (var s3 = 0; s3 < n3; ++s3) {
        if (0 === e3[s3].length) continue;
        if (("	" === e3[s3][0] || " " === e3[s3][0]) && a3) {
          this.header[a3][this.header[a3].length - 1] += e3[s3];
          continue;
        }
        const n4 = e3[s3].indexOf(":");
        if (-1 === n4 || 0 === n4) return;
        if (t3 = c.exec(e3[s3]), a3 = t3[1].toLowerCase(), this.header[a3] = this.header[a3] || [], this.header[a3].push(t3[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
      }
    }, e2.exports = l;
  }