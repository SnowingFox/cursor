// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6879 range:831560..833653
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6879: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(8474).EventEmitter, s2 = n2(7975).inherits, o2 = n2(5529), r2 = n2(9512), i2 = Buffer.from("\r\n\r\n"), l = /\r\n/g, d = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
    function m(e3) {
      t2.call(this), e3 = e3 || {};
      const a3 = this;
      this.nread = 0, this.maxed = false, this.npairs = 0, this.maxHeaderPairs = o2(e3, "maxHeaderPairs", 2e3), this.maxHeaderSize = o2(e3, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = false, this.ss = new r2(i2), this.ss.on("info", function(e4, n3, t3, s3) {
        n3 && !a3.maxed && (a3.nread + s3 - t3 >= a3.maxHeaderSize ? (s3 = a3.maxHeaderSize - a3.nread + t3, a3.nread = a3.maxHeaderSize, a3.maxed = true) : a3.nread += s3 - t3, a3.buffer += n3.toString("binary", t3, s3)), e4 && a3._finish();
      });
    }
    s2(m, t2), m.prototype.push = function(e3) {
      const a3 = this.ss.push(e3);
      if (this.finished) return a3;
    }, m.prototype.reset = function() {
      this.finished = false, this.buffer = "", this.header = {}, this.ss.reset();
    }, m.prototype._finish = function() {
      this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
      const e3 = this.header;
      this.header = {}, this.buffer = "", this.finished = true, this.nread = this.npairs = 0, this.maxed = false, this.emit("header", e3);
    }, m.prototype._parseHeader = function() {
      if (this.npairs === this.maxHeaderPairs) return;
      const e3 = this.buffer.split(l), a3 = e3.length;
      let n3, t3;
      for (var s3 = 0; s3 < a3; ++s3) {
        if (0 === e3[s3].length) continue;
        if (("	" === e3[s3][0] || " " === e3[s3][0]) && t3) {
          this.header[t3][this.header[t3].length - 1] += e3[s3];
          continue;
        }
        const a4 = e3[s3].indexOf(":");
        if (-1 === a4 || 0 === a4) return;
        if (n3 = d.exec(e3[s3]), t3 = n3[1].toLowerCase(), this.header[t3] = this.header[t3] || [], this.header[t3].push(n3[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
      }
    }, e2.exports = m;
  }