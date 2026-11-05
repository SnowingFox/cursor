// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6879 range:622155..624244
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6879: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(8474).EventEmitter, r2 = A2(7975).inherits, o2 = A2(5529), s = A2(9512), i = Buffer.from("\r\n\r\n"), a = /\r\n/g, c = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
    function l(e3) {
      n2.call(this), e3 = e3 || {};
      const t3 = this;
      this.nread = 0, this.maxed = false, this.npairs = 0, this.maxHeaderPairs = o2(e3, "maxHeaderPairs", 2e3), this.maxHeaderSize = o2(e3, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = false, this.ss = new s(i), this.ss.on("info", function(e4, A3, n3, r3) {
        A3 && !t3.maxed && (t3.nread + r3 - n3 >= t3.maxHeaderSize ? (r3 = t3.maxHeaderSize - t3.nread + n3, t3.nread = t3.maxHeaderSize, t3.maxed = true) : t3.nread += r3 - n3, t3.buffer += A3.toString("binary", n3, r3)), e4 && t3._finish();
      });
    }
    r2(l, n2), l.prototype.push = function(e3) {
      const t3 = this.ss.push(e3);
      if (this.finished) return t3;
    }, l.prototype.reset = function() {
      this.finished = false, this.buffer = "", this.header = {}, this.ss.reset();
    }, l.prototype._finish = function() {
      this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
      const e3 = this.header;
      this.header = {}, this.buffer = "", this.finished = true, this.nread = this.npairs = 0, this.maxed = false, this.emit("header", e3);
    }, l.prototype._parseHeader = function() {
      if (this.npairs === this.maxHeaderPairs) return;
      const e3 = this.buffer.split(a), t3 = e3.length;
      let A3, n3;
      for (var r3 = 0; r3 < t3; ++r3) {
        if (0 === e3[r3].length) continue;
        if (("	" === e3[r3][0] || " " === e3[r3][0]) && n3) {
          this.header[n3][this.header[n3].length - 1] += e3[r3];
          continue;
        }
        const t4 = e3[r3].indexOf(":");
        if (-1 === t4 || 0 === t4) return;
        if (A3 = c.exec(e3[r3]), n3 = A3[1].toLowerCase(), this.header[n3] = this.header[n3] || [], this.header[n3].push(A3[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
      }
    }, e2.exports = l;
  }