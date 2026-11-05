// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9512 range:732191..735261
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9512: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(8474).EventEmitter;
    function s2(e3) {
      if ("string" == typeof e3 && (e3 = Buffer.from(e3)), !Buffer.isBuffer(e3)) throw new TypeError("The needle has to be a String or a Buffer.");
      const n3 = e3.length;
      if (0 === n3) throw new Error("The needle cannot be an empty String/Buffer.");
      if (n3 > 256) throw new Error("The needle cannot have a length bigger than 256.");
      this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(n3), this._lookbehind_size = 0, this._needle = e3, this._bufpos = 0, this._lookbehind = Buffer.alloc(n3);
      for (var t3 = 0; t3 < n3 - 1; ++t3) this._occ[e3[t3]] = n3 - 1 - t3;
    }
    (0, t2(7975).inherits)(s2, a2), s2.prototype.reset = function() {
      this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
    }, s2.prototype.push = function(e3, n3) {
      Buffer.isBuffer(e3) || (e3 = Buffer.from(e3, "binary"));
      const t3 = e3.length;
      let a3;
      for (this._bufpos = n3 || 0; a3 !== t3 && this.matches < this.maxMatches; ) a3 = this._sbmh_feed(e3);
      return a3;
    }, s2.prototype._sbmh_feed = function(e3) {
      const n3 = e3.length, t3 = this._needle, a3 = t3.length, s3 = t3[a3 - 1];
      let o2, r = -this._lookbehind_size;
      if (r < 0) {
        for (; r < 0 && r <= n3 - a3; ) {
          if (o2 = this._sbmh_lookup_char(e3, r + a3 - 1), o2 === s3 && this._sbmh_memcmp(e3, r, a3 - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", true), this._bufpos = r + a3;
          r += this._occ[o2];
        }
        if (r < 0) for (; r < 0 && !this._sbmh_memcmp(e3, r, n3 - r); ) ++r;
        if (!(r >= 0)) {
          const t4 = this._lookbehind_size + r;
          return t4 > 0 && this.emit("info", false, this._lookbehind, 0, t4), this._lookbehind.copy(this._lookbehind, 0, t4, this._lookbehind_size - t4), this._lookbehind_size -= t4, e3.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += n3, this._bufpos = n3, n3;
        }
        this.emit("info", false, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      }
      if (r += (r >= 0) * this._bufpos, -1 !== e3.indexOf(t3, r)) return r = e3.indexOf(t3, r), ++this.matches, r > 0 ? this.emit("info", true, e3, this._bufpos, r) : this.emit("info", true), this._bufpos = r + a3;
      for (r = n3 - a3; r < n3 && (e3[r] !== t3[0] || 0 !== Buffer.compare(e3.subarray(r, r + n3 - r), t3.subarray(0, n3 - r))); ) ++r;
      return r < n3 && (e3.copy(this._lookbehind, 0, r, r + (n3 - r)), this._lookbehind_size = n3 - r), r > 0 && this.emit("info", false, e3, this._bufpos, r < n3 ? r : n3), this._bufpos = n3, n3;
    }, s2.prototype._sbmh_lookup_char = function(e3, n3) {
      return n3 < 0 ? this._lookbehind[this._lookbehind_size + n3] : e3[n3];
    }, s2.prototype._sbmh_memcmp = function(e3, n3, t3) {
      for (var a3 = 0; a3 < t3; ++a3) if (this._sbmh_lookup_char(e3, n3 + a3) !== this._needle[a3]) return false;
      return true;
    }, e2.exports = s2;
  }