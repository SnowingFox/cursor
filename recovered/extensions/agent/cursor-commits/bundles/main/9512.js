// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9512 range:701669..704778
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9512: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(8474).EventEmitter;
    function s2(e3) {
      if ("string" == typeof e3 && (e3 = Buffer.from(e3)), !Buffer.isBuffer(e3)) throw new TypeError("The needle has to be a String or a Buffer.");
      const n3 = e3.length;
      if (0 === n3) throw new Error("The needle cannot be an empty String/Buffer.");
      if (n3 > 256) throw new Error("The needle cannot have a length bigger than 256.");
      this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(n3), this._lookbehind_size = 0, this._needle = e3, this._bufpos = 0, this._lookbehind = Buffer.alloc(n3);
      for (var a3 = 0; a3 < n3 - 1; ++a3) this._occ[e3[a3]] = n3 - 1 - a3;
    }
    (0, a2(7975).inherits)(s2, t2), s2.prototype.reset = function() {
      this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
    }, s2.prototype.push = function(e3, n3) {
      Buffer.isBuffer(e3) || (e3 = Buffer.from(e3, "binary"));
      const a3 = e3.length;
      let t3;
      for (this._bufpos = n3 || 0; t3 !== a3 && this.matches < this.maxMatches; ) t3 = this._sbmh_feed(e3);
      return t3;
    }, s2.prototype._sbmh_feed = function(e3) {
      const n3 = e3.length, a3 = this._needle, t3 = a3.length, s3 = a3[t3 - 1];
      let o2, r2 = -this._lookbehind_size;
      if (r2 < 0) {
        for (; r2 < 0 && r2 <= n3 - t3; ) {
          if (o2 = this._sbmh_lookup_char(e3, r2 + t3 - 1), o2 === s3 && this._sbmh_memcmp(e3, r2, t3 - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", true), this._bufpos = r2 + t3;
          r2 += this._occ[o2];
        }
        if (r2 < 0) for (; r2 < 0 && !this._sbmh_memcmp(e3, r2, n3 - r2); ) ++r2;
        if (!(r2 >= 0)) {
          const a4 = this._lookbehind_size + r2;
          return a4 > 0 && this.emit("info", false, this._lookbehind, 0, a4), this._lookbehind.copy(this._lookbehind, 0, a4, this._lookbehind_size - a4), this._lookbehind_size -= a4, e3.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += n3, this._bufpos = n3, n3;
        }
        this.emit("info", false, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      }
      if (r2 += (r2 >= 0) * this._bufpos, -1 !== e3.indexOf(a3, r2)) return r2 = e3.indexOf(a3, r2), ++this.matches, r2 > 0 ? this.emit("info", true, e3, this._bufpos, r2) : this.emit("info", true), this._bufpos = r2 + t3;
      for (r2 = n3 - t3; r2 < n3 && (e3[r2] !== a3[0] || 0 !== Buffer.compare(e3.subarray(r2, r2 + n3 - r2), a3.subarray(0, n3 - r2))); ) ++r2;
      return r2 < n3 && (e3.copy(this._lookbehind, 0, r2, r2 + (n3 - r2)), this._lookbehind_size = n3 - r2), r2 > 0 && this.emit("info", false, e3, this._bufpos, r2 < n3 ? r2 : n3), this._bufpos = n3, n3;
    }, s2.prototype._sbmh_lookup_char = function(e3, n3) {
      return n3 < 0 ? this._lookbehind[this._lookbehind_size + n3] : e3[n3];
    }, s2.prototype._sbmh_memcmp = function(e3, n3, a3) {
      for (var t3 = 0; t3 < a3; ++t3) if (this._sbmh_lookup_char(e3, n3 + t3) !== this._needle[t3]) return false;
      return true;
    }, e2.exports = s2;
  }