// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 6879 range:511283..513376
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6879: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(8474).EventEmitter, s2 = a2(7975).inherits, o2 = a2(5529), r2 = a2(9512), i2 = Buffer.from("\r\n\r\n"), A = /\r\n/g, l = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
    function c(e3) {
      t2.call(this), e3 = e3 || {};
      const n3 = this;
      this.nread = 0, this.maxed = false, this.npairs = 0, this.maxHeaderPairs = o2(e3, "maxHeaderPairs", 2e3), this.maxHeaderSize = o2(e3, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = false, this.ss = new r2(i2), this.ss.on("info", function(e4, a3, t3, s3) {
        a3 && !n3.maxed && (n3.nread + s3 - t3 >= n3.maxHeaderSize ? (s3 = n3.maxHeaderSize - n3.nread + t3, n3.nread = n3.maxHeaderSize, n3.maxed = true) : n3.nread += s3 - t3, n3.buffer += a3.toString("binary", t3, s3)), e4 && n3._finish();
      });
    }
    s2(c, t2), c.prototype.push = function(e3) {
      const n3 = this.ss.push(e3);
      if (this.finished) return n3;
    }, c.prototype.reset = function() {
      this.finished = false, this.buffer = "", this.header = {}, this.ss.reset();
    }, c.prototype._finish = function() {
      this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
      const e3 = this.header;
      this.header = {}, this.buffer = "", this.finished = true, this.nread = this.npairs = 0, this.maxed = false, this.emit("header", e3);
    }, c.prototype._parseHeader = function() {
      if (this.npairs === this.maxHeaderPairs) return;
      const e3 = this.buffer.split(A), n3 = e3.length;
      let a3, t3;
      for (var s3 = 0; s3 < n3; ++s3) {
        if (0 === e3[s3].length) continue;
        if (("	" === e3[s3][0] || " " === e3[s3][0]) && t3) {
          this.header[t3][this.header[t3].length - 1] += e3[s3];
          continue;
        }
        const n4 = e3[s3].indexOf(":");
        if (-1 === n4 || 0 === n4) return;
        if (a3 = l.exec(e3[s3]), t3 = a3[1].toLowerCase(), this.header[t3] = this.header[t3] || [], this.header[t3].push(a3[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
      }
    }, e2.exports = c;
  }