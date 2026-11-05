// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 88940 range:12359511..12362564
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88940: (e, t, r) => {
    "use strict";
    const n = r(78474).EventEmitter;
    function s(e2) {
      if ("string" == typeof e2 && (e2 = Buffer.from(e2)), !Buffer.isBuffer(e2)) throw new TypeError("The needle has to be a String or a Buffer.");
      const t2 = e2.length;
      if (0 === t2) throw new Error("The needle cannot be an empty String/Buffer.");
      if (t2 > 256) throw new Error("The needle cannot have a length bigger than 256.");
      this.maxMatches = 1 / 0, this.matches = 0, this._occ = new Array(256).fill(t2), this._lookbehind_size = 0, this._needle = e2, this._bufpos = 0, this._lookbehind = Buffer.alloc(t2);
      for (var r2 = 0; r2 < t2 - 1; ++r2) this._occ[e2[r2]] = t2 - 1 - r2;
    }
    (0, r(57975).inherits)(s, n), s.prototype.reset = function() {
      this._lookbehind_size = 0, this.matches = 0, this._bufpos = 0;
    }, s.prototype.push = function(e2, t2) {
      Buffer.isBuffer(e2) || (e2 = Buffer.from(e2, "binary"));
      const r2 = e2.length;
      let n2;
      for (this._bufpos = t2 || 0; n2 !== r2 && this.matches < this.maxMatches; ) n2 = this._sbmh_feed(e2);
      return n2;
    }, s.prototype._sbmh_feed = function(e2) {
      const t2 = e2.length, r2 = this._needle, n2 = r2.length, s2 = r2[n2 - 1];
      let o, i = -this._lookbehind_size;
      if (i < 0) {
        for (; i < 0 && i <= t2 - n2; ) {
          if (o = this._sbmh_lookup_char(e2, i + n2 - 1), o === s2 && this._sbmh_memcmp(e2, i, n2 - 1)) return this._lookbehind_size = 0, ++this.matches, this.emit("info", true), this._bufpos = i + n2;
          i += this._occ[o];
        }
        if (i < 0) for (; i < 0 && !this._sbmh_memcmp(e2, i, t2 - i); ) ++i;
        if (!(i >= 0)) {
          const r3 = this._lookbehind_size + i;
          return r3 > 0 && this.emit("info", false, this._lookbehind, 0, r3), this._lookbehind.copy(this._lookbehind, 0, r3, this._lookbehind_size - r3), this._lookbehind_size -= r3, e2.copy(this._lookbehind, this._lookbehind_size), this._lookbehind_size += t2, this._bufpos = t2, t2;
        }
        this.emit("info", false, this._lookbehind, 0, this._lookbehind_size), this._lookbehind_size = 0;
      }
      if (i += (i >= 0) * this._bufpos, -1 !== e2.indexOf(r2, i)) return i = e2.indexOf(r2, i), ++this.matches, i > 0 ? this.emit("info", true, e2, this._bufpos, i) : this.emit("info", true), this._bufpos = i + n2;
      for (i = t2 - n2; i < t2 && (e2[i] !== r2[0] || 0 !== Buffer.compare(e2.subarray(i, i + t2 - i), r2.subarray(0, t2 - i))); ) ++i;
      return i < t2 && (e2.copy(this._lookbehind, 0, i, i + (t2 - i)), this._lookbehind_size = t2 - i), i > 0 && this.emit("info", false, e2, this._bufpos, i < t2 ? i : t2), this._bufpos = t2, t2;
    }, s.prototype._sbmh_lookup_char = function(e2, t2) {
      return t2 < 0 ? this._lookbehind[this._lookbehind_size + t2] : e2[t2];
    }, s.prototype._sbmh_memcmp = function(e2, t2, r2) {
      for (var n2 = 0; n2 < r2; ++n2) if (this._sbmh_lookup_char(e2, t2 + n2) !== this._needle[n2]) return false;
      return true;
    }, e.exports = s;
  }