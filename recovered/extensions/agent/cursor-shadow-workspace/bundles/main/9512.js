// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9512 range:700667..703737
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9512: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(8474).EventEmitter;
    function r2(e3) {
      if ("string" == typeof e3 && (e3 = Buffer.from(e3)), !Buffer.isBuffer(e3)) throw new TypeError("The needle has to be a String or a Buffer.");
      const A3 = e3.length;
      if (0 === A3) throw new Error("The needle cannot be an empty String/Buffer.");
      if (A3 > 256) throw new Error("The needle cannot have a length bigger than 256.");
      this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(A3), this._lookbehind_size = 0, this._needle = e3, this._bufpos = 0, this._lookbehind = Buffer.alloc(A3);
      for (var t3 = 0; t3 < A3 - 1; ++t3) this._occ[e3[t3]] = A3 - 1 - t3;
    }
    (0, t2(7975).inherits)(r2, n2), r2.prototype.reset = function() {
      this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
    }, r2.prototype.push = function(e3, A3) {
      Buffer.isBuffer(e3) || (e3 = Buffer.from(e3, "binary"));
      const t3 = e3.length;
      let n3;
      for (this._bufpos = A3 || 0; n3 !== t3 && this.matches < this.maxMatches; ) n3 = this._sbmh_feed(e3);
      return n3;
    }, r2.prototype._sbmh_feed = function(e3) {
      const A3 = e3.length, t3 = this._needle, n3 = t3.length, r3 = t3[n3 - 1];
      let o2, s = -this._lookbehind_size;
      if (s < 0) {
        for (; s < 0 && s <= A3 - n3; ) {
          if (o2 = this._sbmh_lookup_char(e3, s + n3 - 1), o2 === r3 && this._sbmh_memcmp(e3, s, n3 - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", true), this._bufpos = s + n3;
          s += this._occ[o2];
        }
        if (s < 0) for (; s < 0 && !this._sbmh_memcmp(e3, s, A3 - s); ) ++s;
        if (!(s >= 0)) {
          const t4 = this._lookbehind_size + s;
          return t4 > 0 && this.emit("info", false, this._lookbehind, 0, t4), this._lookbehind.copy(this._lookbehind, 0, t4, this._lookbehind_size - t4), this._lookbehind_size -= t4, e3.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += A3, this._bufpos = A3, A3;
        }
        this.emit("info", false, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      }
      if (s += (s >= 0) * this._bufpos, -1 !== e3.indexOf(t3, s)) return s = e3.indexOf(t3, s), ++this.matches, s > 0 ? this.emit("info", true, e3, this._bufpos, s) : this.emit("info", true), this._bufpos = s + n3;
      for (s = A3 - n3; s < A3 && (e3[s] !== t3[0] || 0 !== Buffer.compare(e3.subarray(s, s + A3 - s), t3.subarray(0, A3 - s))); ) ++s;
      return s < A3 && (e3.copy(this._lookbehind, 0, s, s + (A3 - s)), this._lookbehind_size = A3 - s), s > 0 && this.emit("info", false, e3, this._bufpos, s < A3 ? s : A3), this._bufpos = A3, A3;
    }, r2.prototype._sbmh_lookup_char = function(e3, A3) {
      return A3 < 0 ? this._lookbehind[this._lookbehind_size + A3] : e3[A3];
    }, r2.prototype._sbmh_memcmp = function(e3, A3, t3) {
      for (var n3 = 0; n3 < t3; ++n3) if (this._sbmh_lookup_char(e3, A3 + n3) !== this._needle[n3]) return false;
      return true;
    }, e2.exports = r2;
  }