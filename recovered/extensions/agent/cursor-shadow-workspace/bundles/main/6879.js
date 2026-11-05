// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 6879 range:510633..512722
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6879: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(8474).EventEmitter, r2 = t2(7975).inherits, o2 = t2(5529), s = t2(9512), a = Buffer.from("\r\n\r\n"), i = /\r\n/g, c = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
    function l(e3) {
      n2.call(this), e3 = e3 || {};
      const A3 = this;
      this.nread = 0, this.maxed = false, this.npairs = 0, this.maxHeaderPairs = o2(e3, "maxHeaderPairs", 2e3), this.maxHeaderSize = o2(e3, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = false, this.ss = new s(a), this.ss.on("info", function(e4, t3, n3, r3) {
        t3 && !A3.maxed && (A3.nread + r3 - n3 >= A3.maxHeaderSize ? (r3 = A3.maxHeaderSize - A3.nread + n3, A3.nread = A3.maxHeaderSize, A3.maxed = true) : A3.nread += r3 - n3, A3.buffer += t3.toString("binary", n3, r3)), e4 && A3._finish();
      });
    }
    r2(l, n2), l.prototype.push = function(e3) {
      const A3 = this.ss.push(e3);
      if (this.finished) return A3;
    }, l.prototype.reset = function() {
      this.finished = false, this.buffer = "", this.header = {}, this.ss.reset();
    }, l.prototype._finish = function() {
      this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
      const e3 = this.header;
      this.header = {}, this.buffer = "", this.finished = true, this.nread = this.npairs = 0, this.maxed = false, this.emit("header", e3);
    }, l.prototype._parseHeader = function() {
      if (this.npairs === this.maxHeaderPairs) return;
      const e3 = this.buffer.split(i), A3 = e3.length;
      let t3, n3;
      for (var r3 = 0; r3 < A3; ++r3) {
        if (0 === e3[r3].length) continue;
        if (("	" === e3[r3][0] || " " === e3[r3][0]) && n3) {
          this.header[n3][this.header[n3].length - 1] += e3[r3];
          continue;
        }
        const A4 = e3[r3].indexOf(":");
        if (-1 === A4 || 0 === A4) return;
        if (t3 = c.exec(e3[r3]), n3 = t3[1].toLowerCase(), this.header[n3] = this.header[n3] || [], this.header[n3].push(t3[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
      }
    }, e2.exports = l;
  }