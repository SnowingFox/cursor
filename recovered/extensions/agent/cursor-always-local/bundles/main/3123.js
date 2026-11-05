// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3123 range:915322..917413
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3123: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(8474).EventEmitter, s2 = r2(7975).inherits, i2 = r2(3013), o2 = r2(8940), a = Buffer.from("\r\n\r\n"), u = /\r\n/g, c = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/;
    function l(t3) {
      n2.call(this), t3 = t3 || {};
      const e3 = this;
      this.nread = 0, this.maxed = false, this.npairs = 0, this.maxHeaderPairs = i2(t3, "maxHeaderPairs", 2e3), this.maxHeaderSize = i2(t3, "maxHeaderSize", 81920), this.buffer = "", this.header = {}, this.finished = false, this.ss = new o2(a), this.ss.on("info", function(t4, r3, n3, s3) {
        r3 && !e3.maxed && (e3.nread + s3 - n3 >= e3.maxHeaderSize ? (s3 = e3.maxHeaderSize - e3.nread + n3, e3.nread = e3.maxHeaderSize, e3.maxed = true) : e3.nread += s3 - n3, e3.buffer += r3.toString("binary", n3, s3)), t4 && e3._finish();
      });
    }
    s2(l, n2), l.prototype.push = function(t3) {
      const e3 = this.ss.push(t3);
      if (this.finished) return e3;
    }, l.prototype.reset = function() {
      this.finished = false, this.buffer = "", this.header = {}, this.ss.reset();
    }, l.prototype._finish = function() {
      this.buffer && this._parseHeader(), this.ss.matches = this.ss.maxMatches;
      const t3 = this.header;
      this.header = {}, this.buffer = "", this.finished = true, this.nread = this.npairs = 0, this.maxed = false, this.emit("header", t3);
    }, l.prototype._parseHeader = function() {
      if (this.npairs === this.maxHeaderPairs) return;
      const t3 = this.buffer.split(u), e3 = t3.length;
      let r3, n3;
      for (var s3 = 0; s3 < e3; ++s3) {
        if (0 === t3[s3].length) continue;
        if (("	" === t3[s3][0] || " " === t3[s3][0]) && n3) {
          this.header[n3][this.header[n3].length - 1] += t3[s3];
          continue;
        }
        const e4 = t3[s3].indexOf(":");
        if (-1 === e4 || 0 === e4) return;
        if (r3 = c.exec(t3[s3]), n3 = r3[1].toLowerCase(), this.header[n3] = this.header[n3] || [], this.header[n3].push(r3[2] || ""), ++this.npairs === this.maxHeaderPairs) break;
      }
    }, t2.exports = l;
  }