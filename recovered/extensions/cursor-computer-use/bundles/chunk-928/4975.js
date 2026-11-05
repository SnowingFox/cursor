// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/928.js sha256:e04ed350b40bd579ab3a39967750106d673508f05e9f3a77bfeb2f4eca08d90f
// module: 4975 range:120129..123574
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4975: (e, t, r) => {
  "use strict";
  var n = r(9763), a = r(7353), i = r(3376), o = r(7101), s = r(5534), f = r(3638), l = r(6930), h = Object.prototype.toString;
  function d(e2) {
    if (!(this instanceof d)) return new d(e2);
    this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
    var t2 = this.options;
    t2.raw && t2.windowBits >= 0 && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(t2.windowBits >= 0 && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), t2.windowBits > 15 && t2.windowBits < 48 && (15 & t2.windowBits || (t2.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
    var r2 = n.inflateInit2(this.strm, t2.windowBits);
    if (r2 !== o.Z_OK) throw new Error(s[r2]);
    if (this.header = new l(), n.inflateGetHeader(this.strm, this.header), t2.dictionary && ("string" == typeof t2.dictionary ? t2.dictionary = i.string2buf(t2.dictionary) : "[object ArrayBuffer]" === h.call(t2.dictionary) && (t2.dictionary = new Uint8Array(t2.dictionary)), t2.raw && (r2 = n.inflateSetDictionary(this.strm, t2.dictionary)) !== o.Z_OK)) throw new Error(s[r2]);
  }
  function u(e2, t2) {
    var r2 = new d(t2);
    if (r2.push(e2, true), r2.err) throw r2.msg || s[r2.err];
    return r2.result;
  }
  d.prototype.push = function(e2, t2) {
    var r2, s2, f2, l2, d2, u2 = this.strm, c = this.options.chunkSize, _ = this.options.dictionary, v = false;
    if (this.ended) return false;
    s2 = t2 === ~~t2 ? t2 : true === t2 ? o.Z_FINISH : o.Z_NO_FLUSH, "string" == typeof e2 ? u2.input = i.binstring2buf(e2) : "[object ArrayBuffer]" === h.call(e2) ? u2.input = new Uint8Array(e2) : u2.input = e2, u2.next_in = 0, u2.avail_in = u2.input.length;
    do {
      if (0 === u2.avail_out && (u2.output = new a.Buf8(c), u2.next_out = 0, u2.avail_out = c), (r2 = n.inflate(u2, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && _ && (r2 = n.inflateSetDictionary(this.strm, _)), r2 === o.Z_BUF_ERROR && true === v && (r2 = o.Z_OK, v = false), r2 !== o.Z_STREAM_END && r2 !== o.Z_OK) return this.onEnd(r2), this.ended = true, false;
      u2.next_out && (0 !== u2.avail_out && r2 !== o.Z_STREAM_END && (0 !== u2.avail_in || s2 !== o.Z_FINISH && s2 !== o.Z_SYNC_FLUSH) || ("string" === this.options.to ? (f2 = i.utf8border(u2.output, u2.next_out), l2 = u2.next_out - f2, d2 = i.buf2string(u2.output, f2), u2.next_out = l2, u2.avail_out = c - l2, l2 && a.arraySet(u2.output, u2.output, f2, l2, 0), this.onData(d2)) : this.onData(a.shrinkBuf(u2.output, u2.next_out)))), 0 === u2.avail_in && 0 === u2.avail_out && (v = true);
    } while ((u2.avail_in > 0 || 0 === u2.avail_out) && r2 !== o.Z_STREAM_END);
    return r2 === o.Z_STREAM_END && (s2 = o.Z_FINISH), s2 === o.Z_FINISH ? (r2 = n.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === o.Z_OK) : s2 !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), u2.avail_out = 0, true);
  }, d.prototype.onData = function(e2) {
    this.chunks.push(e2);
  }, d.prototype.onEnd = function(e2) {
    e2 === o.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
  }, t.Inflate = d, t.inflate = u, t.inflateRaw = function(e2, t2) {
    return (t2 = t2 || {}).raw = true, u(e2, t2);
  }, t.ungzip = u;
}