// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9512 range:1051033..1054142
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9512: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(8474).EventEmitter;
    function s2(e3) {
      if ("string" == typeof e3 && (e3 = Buffer.from(e3)), !Buffer.isBuffer(e3)) throw new TypeError("The needle has to be a String or a Buffer.");
      const a3 = e3.length;
      if (0 === a3) throw new Error("The needle cannot be an empty String/Buffer.");
      if (a3 > 256) throw new Error("The needle cannot have a length bigger than 256.");
      this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(a3), this._lookbehind_size = 0, this._needle = e3, this._bufpos = 0, this._lookbehind = Buffer.alloc(a3);
      for (var n3 = 0; n3 < a3 - 1; ++n3) this._occ[e3[n3]] = a3 - 1 - n3;
    }
    (0, n2(7975).inherits)(s2, t2), s2.prototype.reset = function() {
      this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
    }, s2.prototype.push = function(e3, a3) {
      Buffer.isBuffer(e3) || (e3 = Buffer.from(e3, "binary"));
      const n3 = e3.length;
      let t3;
      for (this._bufpos = a3 || 0; t3 !== n3 && this.matches < this.maxMatches; ) t3 = this._sbmh_feed(e3);
      return t3;
    }, s2.prototype._sbmh_feed = function(e3) {
      const a3 = e3.length, n3 = this._needle, t3 = n3.length, s3 = n3[t3 - 1];
      let o2, r2 = -this._lookbehind_size;
      if (r2 < 0) {
        for (; r2 < 0 && r2 <= a3 - t3; ) {
          if (o2 = this._sbmh_lookup_char(e3, r2 + t3 - 1), o2 === s3 && this._sbmh_memcmp(e3, r2, t3 - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", true), this._bufpos = r2 + t3;
          r2 += this._occ[o2];
        }
        if (r2 < 0) for (; r2 < 0 && !this._sbmh_memcmp(e3, r2, a3 - r2); ) ++r2;
        if (!(r2 >= 0)) {
          const n4 = this._lookbehind_size + r2;
          return n4 > 0 && this.emit("info", false, this._lookbehind, 0, n4), this._lookbehind.copy(this._lookbehind, 0, n4, this._lookbehind_size - n4), this._lookbehind_size -= n4, e3.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += a3, this._bufpos = a3, a3;
        }
        this.emit("info", false, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      }
      if (r2 += (r2 >= 0) * this._bufpos, -1 !== e3.indexOf(n3, r2)) return r2 = e3.indexOf(n3, r2), ++this.matches, r2 > 0 ? this.emit("info", true, e3, this._bufpos, r2) : this.emit("info", true), this._bufpos = r2 + t3;
      for (r2 = a3 - t3; r2 < a3 && (e3[r2] !== n3[0] || 0 !== Buffer.compare(e3.subarray(r2, r2 + a3 - r2), n3.subarray(0, a3 - r2))); ) ++r2;
      return r2 < a3 && (e3.copy(this._lookbehind, 0, r2, r2 + (a3 - r2)), this._lookbehind_size = a3 - r2), r2 > 0 && this.emit("info", false, e3, this._bufpos, r2 < a3 ? r2 : a3), this._bufpos = a3, a3;
    }, s2.prototype._sbmh_lookup_char = function(e3, a3) {
      return a3 < 0 ? this._lookbehind[this._lookbehind_size + a3] : e3[a3];
    }, s2.prototype._sbmh_memcmp = function(e3, a3, n3) {
      for (var t3 = 0; t3 < n3; ++t3) if (this._sbmh_lookup_char(e3, a3 + t3) !== this._needle[t3]) return false;
      return true;
    }, e2.exports = s2;
  }