// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8940 range:5430542..5433651
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8940: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(8474).EventEmitter;
    function s2(t3) {
      if ("string" == typeof t3 && (t3 = Buffer.from(t3)), !Buffer.isBuffer(t3)) throw new TypeError("The needle has to be a String or a Buffer.");
      const e3 = t3.length;
      if (0 === e3) throw new Error("The needle cannot be an empty String/Buffer.");
      if (e3 > 256) throw new Error("The needle cannot have a length bigger than 256.");
      this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(e3), this._lookbehind_size = 0, this._needle = t3, this._bufpos = 0, this._lookbehind = Buffer.alloc(e3);
      for (var r3 = 0; r3 < e3 - 1; ++r3) this._occ[t3[r3]] = e3 - 1 - r3;
    }
    (0, r2(7975).inherits)(s2, n2), s2.prototype.reset = function() {
      this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
    }, s2.prototype.push = function(t3, e3) {
      Buffer.isBuffer(t3) || (t3 = Buffer.from(t3, "binary"));
      const r3 = t3.length;
      let n3;
      for (this._bufpos = e3 || 0; n3 !== r3 && this.matches < this.maxMatches; ) n3 = this._sbmh_feed(t3);
      return n3;
    }, s2.prototype._sbmh_feed = function(t3) {
      const e3 = t3.length, r3 = this._needle, n3 = r3.length, s3 = r3[n3 - 1];
      let i2, o2 = -this._lookbehind_size;
      if (o2 < 0) {
        for (; o2 < 0 && o2 <= e3 - n3; ) {
          if (i2 = this._sbmh_lookup_char(t3, o2 + n3 - 1), i2 === s3 && this._sbmh_memcmp(t3, o2, n3 - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", true), this._bufpos = o2 + n3;
          o2 += this._occ[i2];
        }
        if (o2 < 0) for (; o2 < 0 && !this._sbmh_memcmp(t3, o2, e3 - o2); ) ++o2;
        if (!(o2 >= 0)) {
          const r4 = this._lookbehind_size + o2;
          return r4 > 0 && this.emit("info", false, this._lookbehind, 0, r4), this._lookbehind.copy(this._lookbehind, 0, r4, this._lookbehind_size - r4), this._lookbehind_size -= r4, t3.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += e3, this._bufpos = e3, e3;
        }
        this.emit("info", false, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      }
      if (o2 += (o2 >= 0) * this._bufpos, -1 !== t3.indexOf(r3, o2)) return o2 = t3.indexOf(r3, o2), ++this.matches, o2 > 0 ? this.emit("info", true, t3, this._bufpos, o2) : this.emit("info", true), this._bufpos = o2 + n3;
      for (o2 = e3 - n3; o2 < e3 && (t3[o2] !== r3[0] || 0 !== Buffer.compare(t3.subarray(o2, o2 + e3 - o2), r3.subarray(0, e3 - o2))); ) ++o2;
      return o2 < e3 && (t3.copy(this._lookbehind, 0, o2, o2 + (e3 - o2)), this._lookbehind_size = e3 - o2), o2 > 0 && this.emit("info", false, t3, this._bufpos, o2 < e3 ? o2 : e3), this._bufpos = e3, e3;
    }, s2.prototype._sbmh_lookup_char = function(t3, e3) {
      return e3 < 0 ? this._lookbehind[this._lookbehind_size + e3] : t3[e3];
    }, s2.prototype._sbmh_memcmp = function(t3, e3, r3) {
      for (var n3 = 0; n3 < r3; ++n3) if (this._sbmh_lookup_char(t3, e3 + n3) !== this._needle[n3]) return false;
      return true;
    }, t2.exports = s2;
  }